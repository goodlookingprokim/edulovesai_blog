/**
 * Obsidian Content Sync
 * READ-ONLY sync from Obsidian vault to build pipeline
 * Never writes to the source directory
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Obsidian source directory (READ-ONLY)
const OBSIDIAN_SOURCE = '/Users/jmacpro/Documents/Obsidian Vault/R - Resources/AI 및 개발/AI 기술 자료';

/**
 * Scan Obsidian vault for markdown files
 * @param {string} sourceDir - Optional override for source directory
 * @returns {Array} Array of file info objects
 */
function scanFiles(sourceDir = OBSIDIAN_SOURCE) {
  const files = [];

  if (!fs.existsSync(sourceDir)) {
    console.warn(`Obsidian source directory not found: ${sourceDir}`);
    return files;
  }

  function scanDir(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);

      // Skip hidden files and directories
      if (entry.name.startsWith('.')) continue;

      if (entry.isDirectory()) {
        scanDir(fullPath, relPath);
      } else if (entry.name.endsWith('.md')) {
        files.push({
          fullPath,
          relativePath: relPath,
          folderPath: relativePath,
          filename: entry.name
        });
      }
    }
  }

  scanDir(sourceDir);
  return files;
}

/**
 * Read a single markdown file from Obsidian vault
 * @param {string} filePath - Full path to file
 * @returns {object|null} Parsed content with frontmatter and body
 */
function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content: markdown } = matter(content);

    return {
      frontmatter,
      markdown,
      rawContent: content
    };
  } catch (err) {
    console.error(`Error reading Obsidian file ${filePath}:`, err.message);
    return null;
  }
}

/**
 * Get all articles from Obsidian vault
 * @param {string} sourceDir - Optional override for source directory
 * @returns {Array} Array of article objects
 */
function getAllArticles(sourceDir = OBSIDIAN_SOURCE) {
  const files = scanFiles(sourceDir);
  const articles = [];

  for (const file of files) {
    const content = readFile(file.fullPath);

    if (content) {
      articles.push({
        ...content,
        filePath: file.fullPath,
        folderPath: file.folderPath,
        filename: file.filename
      });
    }
  }

  return articles;
}

/**
 * Get folder structure from Obsidian vault
 * @param {string} sourceDir - Optional override for source directory
 * @returns {Array} Array of folder names
 */
function getFolders(sourceDir = OBSIDIAN_SOURCE) {
  const folders = [];

  if (!fs.existsSync(sourceDir)) {
    return folders;
  }

  function scanDir(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const relPath = path.join(relativePath, entry.name);
        folders.push(relPath);
        scanDir(path.join(dir, entry.name), relPath);
      }
    }
  }

  scanDir(sourceDir);
  return folders;
}

/**
 * Get statistics about Obsidian vault
 * @param {string} sourceDir - Optional override for source directory
 * @returns {object} Statistics
 */
function getStats(sourceDir = OBSIDIAN_SOURCE) {
  const files = scanFiles(sourceDir);
  const folders = getFolders(sourceDir);

  const folderCounts = {};
  for (const file of files) {
    const topFolder = file.folderPath.split(path.sep)[0] || 'root';
    folderCounts[topFolder] = (folderCounts[topFolder] || 0) + 1;
  }

  return {
    totalFiles: files.length,
    totalFolders: folders.length,
    folderCounts,
    sourceDir
  };
}

/**
 * Check if Obsidian source is available
 * @param {string} sourceDir - Optional override for source directory
 * @returns {boolean}
 */
function isAvailable(sourceDir = OBSIDIAN_SOURCE) {
  return fs.existsSync(sourceDir);
}

module.exports = {
  OBSIDIAN_SOURCE,
  scanFiles,
  readFile,
  getAllArticles,
  getFolders,
  getStats,
  isAvailable
};
