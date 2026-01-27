/**
 * AI Cosmetics Journal - Development Server
 * Simple HTTP server for local development
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, '../build');

// MIME types
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Run build first
console.log('\n>> Initial build...\n');
require('./build.js');

/**
 * Security: Validate that the resolved path is within the allowed directory
 * Prevents path traversal attacks (e.g., ../../etc/passwd)
 */
function isPathWithinDir(filePath, allowedDir) {
  const resolvedFile = path.resolve(filePath);
  const resolvedDir = path.resolve(allowedDir);
  return resolvedFile.startsWith(resolvedDir + path.sep) || resolvedFile === resolvedDir;
}

/**
 * Security: Escape HTML for safe display in error pages
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Create server
const server = http.createServer((req, res) => {
  // Parse URL and decode it
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Default to index.html for root
  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  // Add .html extension if no extension
  if (!path.extname(urlPath) && !urlPath.endsWith('/')) {
    urlPath += '.html';
  }

  // Normalize the path to prevent traversal attacks
  const normalizedPath = path.normalize(urlPath);
  const filePath = path.join(BUILD_DIR, normalizedPath);

  // Security: Ensure the file path is within BUILD_DIR
  if (!isPathWithinDir(filePath, BUILD_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>403 - Forbidden</title>
        <style>
          body { font-family: system-ui; max-width: 600px; margin: 100px auto; padding: 20px; text-align: center; }
          h1 { color: #ef4444; }
          a { color: #6366f1; }
        </style>
      </head>
      <body>
        <h1>403</h1>
        <p>Access denied</p>
        <a href="/">← Back to Home</a>
      </body>
      </html>
    `);
    return;
  }

  const ext = path.extname(filePath);
  const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 404 Not Found - escape the urlPath to prevent XSS
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>404 - Not Found</title>
          <style>
            body { font-family: system-ui; max-width: 600px; margin: 100px auto; padding: 20px; text-align: center; }
            h1 { color: #6366f1; }
            a { color: #6366f1; }
          </style>
        </head>
        <body>
          <h1>404</h1>
          <p>Page not found: ${escapeHtml(urlPath)}</p>
          <a href="/">← Back to Home</a>
        </body>
        </html>
      `);
      return;
    }
    
    // Read and serve file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      
      res.writeHead(200, { 
        'Content-Type': mimeType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    });
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`\n>> Development server running at: http://localhost:${PORT}`);
  console.log(`>> Watching for file changes...`);
  console.log(`>> Press Ctrl+C to stop\n`);
});

// Watch for file changes (simple file watcher)
const watchDirs = [
  path.join(__dirname, '../../content'),
  path.join(__dirname, 'pages'),
  path.join(__dirname, '../public')
];

let rebuildTimeout = null;

watchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (filename && !filename.startsWith('.')) {
        // Debounce rebuilds
        clearTimeout(rebuildTimeout);
        rebuildTimeout = setTimeout(() => {
          console.log(`\n>> Change detected: ${filename}`);
          console.log('>> Rebuilding...\n');
          try {
            // Clear require cache to force fresh build
            delete require.cache[require.resolve('./build.js')];
            require('./build.js');
            console.log('>> Rebuild complete\n');
          } catch (err) {
            console.error('>> Build error:', err.message);
          }
        }, 500);
      }
    });
  }
});
