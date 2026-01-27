/**
 * Code Blocks Preprocessor
 * Enhances code blocks with language badge, copy button, and line count
 */

// Language display names and colors
const LANGUAGE_CONFIG = {
  javascript: { name: 'JavaScript', color: '#f7df1e', textColor: '#000' },
  js: { name: 'JavaScript', color: '#f7df1e', textColor: '#000' },
  typescript: { name: 'TypeScript', color: '#3178c6', textColor: '#fff' },
  ts: { name: 'TypeScript', color: '#3178c6', textColor: '#fff' },
  python: { name: 'Python', color: '#3776ab', textColor: '#fff' },
  py: { name: 'Python', color: '#3776ab', textColor: '#fff' },
  bash: { name: 'Bash', color: '#4eaa25', textColor: '#fff' },
  shell: { name: 'Shell', color: '#4eaa25', textColor: '#fff' },
  sh: { name: 'Shell', color: '#4eaa25', textColor: '#fff' },
  json: { name: 'JSON', color: '#292929', textColor: '#fff' },
  yaml: { name: 'YAML', color: '#cb171e', textColor: '#fff' },
  yml: { name: 'YAML', color: '#cb171e', textColor: '#fff' },
  html: { name: 'HTML', color: '#e34c26', textColor: '#fff' },
  css: { name: 'CSS', color: '#264de4', textColor: '#fff' },
  markdown: { name: 'Markdown', color: '#083fa1', textColor: '#fff' },
  md: { name: 'Markdown', color: '#083fa1', textColor: '#fff' },
  sql: { name: 'SQL', color: '#e38c00', textColor: '#000' },
  rust: { name: 'Rust', color: '#dea584', textColor: '#000' },
  go: { name: 'Go', color: '#00add8', textColor: '#fff' },
  java: { name: 'Java', color: '#b07219', textColor: '#fff' },
  kotlin: { name: 'Kotlin', color: '#7f52ff', textColor: '#fff' },
  swift: { name: 'Swift', color: '#f05138', textColor: '#fff' },
  dart: { name: 'Dart', color: '#00b4ab', textColor: '#fff' },
  ruby: { name: 'Ruby', color: '#cc342d', textColor: '#fff' },
  php: { name: 'PHP', color: '#777bb4', textColor: '#fff' },
  csharp: { name: 'C#', color: '#178600', textColor: '#fff' },
  cs: { name: 'C#', color: '#178600', textColor: '#fff' },
  cpp: { name: 'C++', color: '#00599c', textColor: '#fff' },
  c: { name: 'C', color: '#555555', textColor: '#fff' },
  dockerfile: { name: 'Dockerfile', color: '#384d54', textColor: '#fff' },
  docker: { name: 'Dockerfile', color: '#384d54', textColor: '#fff' },
  toml: { name: 'TOML', color: '#9c4121', textColor: '#fff' },
  xml: { name: 'XML', color: '#0060ac', textColor: '#fff' },
  plaintext: { name: 'Plain Text', color: '#6b7280', textColor: '#fff' },
  text: { name: 'Plain Text', color: '#6b7280', textColor: '#fff' }
};

// Default config for unknown languages
const DEFAULT_CONFIG = { name: 'Code', color: '#6b7280', textColor: '#fff' };

/**
 * Process code blocks in markdown
 * Note: This runs BEFORE marked.js conversion, so we work with markdown syntax
 * @param {string} markdown - Markdown content
 * @returns {string} Markdown with enhanced code block markers
 */
function process(markdown) {
  if (!markdown) return '';

  // Pattern for fenced code blocks
  const codeBlockPattern = /```(\w*)\n([\s\S]*?)```/g;

  return markdown.replace(codeBlockPattern, (match, lang, code) => {
    const language = lang.toLowerCase() || 'plaintext';
    const config = LANGUAGE_CONFIG[language] || DEFAULT_CONFIG;
    const lines = code.split('\n').filter(line => line !== '').length;
    const codeId = generateId();

    // Return a special marker that will be processed after marked.js
    // We use a custom HTML structure that marked won't touch
    return `<div class="code-block" data-language="${language}">
  <div class="code-block__header" style="background-color: ${config.color}; color: ${config.textColor}">
    <span class="code-block__language">${config.name}</span>
    <button class="code-block__copy" data-code-id="${codeId}" onclick="copyCode('${codeId}')" title="Copy code">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    </button>
  </div>
  <pre class="code-block__content"><code id="${codeId}" class="language-${language}">${escapeHtml(code.trim())}</code></pre>
  <div class="code-block__footer">
    <span class="code-block__lines">${lines} line${lines !== 1 ? 's' : ''}</span>
  </div>
</div>`;
  });
}

/**
 * Generate unique ID for code block
 */
let codeIdCounter = 0;
function generateId() {
  return `code-${Date.now()}-${++codeIdCounter}`;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Get language config
 * @param {string} language - Language identifier
 * @returns {object} Language configuration
 */
function getLanguageConfig(language) {
  return LANGUAGE_CONFIG[language?.toLowerCase()] || DEFAULT_CONFIG;
}

/**
 * Check if content has code blocks
 * @param {string} markdown - Markdown content
 * @returns {boolean}
 */
function hasCodeBlocks(markdown) {
  if (!markdown) return false;
  return /```\w*\n[\s\S]*?```/.test(markdown);
}

/**
 * Count code blocks in content
 * @param {string} markdown - Markdown content
 * @returns {number}
 */
function countCodeBlocks(markdown) {
  if (!markdown) return 0;
  const matches = markdown.match(/```\w*\n[\s\S]*?```/g);
  return matches ? matches.length : 0;
}

/**
 * Extract languages used in content
 * @param {string} markdown - Markdown content
 * @returns {Array} Array of language identifiers
 */
function extractLanguages(markdown) {
  if (!markdown) return [];

  const languages = new Set();
  const pattern = /```(\w+)\n/g;
  let match;

  while ((match = pattern.exec(markdown)) !== null) {
    languages.add(match[1].toLowerCase());
  }

  return Array.from(languages);
}

/**
 * Generate copy code JavaScript function
 * Call this to include in page scripts
 */
function getCopyScript() {
  return `
function copyCode(codeId) {
  const codeElement = document.getElementById(codeId);
  if (!codeElement) return;

  const text = codeElement.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(\`[data-code-id="\${codeId}"]\`);
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied!</span>';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  });
}`;
}

module.exports = {
  process,
  getLanguageConfig,
  hasCodeBlocks,
  countCodeBlocks,
  extractLanguages,
  getCopyScript,
  LANGUAGE_CONFIG
};
