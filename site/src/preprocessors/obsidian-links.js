/**
 * Obsidian Links Preprocessor
 * Converts Obsidian-style [[links]] to HTML anchors
 */

const slugGenerator = require('../utils/slug-generator');

/**
 * Process Obsidian wiki links and special syntax in markdown content
 * @param {string} markdown - Markdown content
 * @param {Map} articleMap - Map of title -> slug for internal links
 * @returns {string} Processed markdown
 */
function process(markdown, articleMap = new Map()) {
  if (!markdown) return '';

  let result = markdown;

  // ===== Obsidian Special Syntax =====

  // Remove comments: %%text%% -> (hidden)
  // Both single-line and multi-line comments
  result = result.replace(/%%[\s\S]*?%%/g, '');

  // Remove block IDs: ^block-id at end of line -> (empty)
  result = result.replace(/\s*\^[\w-]+\s*$/gm, '');

  // Process highlights: ==text== -> <mark>text</mark>
  result = result.replace(/==([^=]+)==/g, '<mark>$1</mark>');

  // Remove heading anchor syntax: {#anchor} -> (empty)
  result = result.replace(/\s*\{#[^}]+\}/g, '');

  // Process strikethrough: ~~text~~ -> <del>text</del>
  result = result.replace(/~~([^~]+)~~/g, '<del>$1</del>');

  // Process inline LaTeX: $formula$ -> <span class="math-inline">formula</span>
  // Avoid matching $$ (block) or $ in code
  result = result.replace(/(?<!\$)\$(?!\$)([^$\n]+?)\$(?!\$)/g, '<span class="math-inline">$1</span>');

  // Process block LaTeX: $$formula$$ -> <div class="math-block">formula</div>
  result = result.replace(/\$\$([\s\S]+?)\$\$/g, '<div class="math-block">$1</div>');

  // ===== Wiki Links =====

  // Pattern 1: [[Note Title|Display Text]] - link with custom display text
  result = result.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (match, noteTitle, displayText) => {
    const slug = findSlug(noteTitle.trim(), articleMap);
    return `<a href="/articles/${slug}.html" class="internal-link">${displayText.trim()}</a>`;
  });

  // Pattern 2: [[Note Title]] - simple link
  result = result.replace(/\[\[([^\]|#]+)\]\]/g, (match, noteTitle) => {
    const slug = findSlug(noteTitle.trim(), articleMap);
    return `<a href="/articles/${slug}.html" class="internal-link">${noteTitle.trim()}</a>`;
  });

  // Pattern 3: [[Note Title#Section]] - link to section
  result = result.replace(/\[\[([^\]|#]+)#([^\]|]+)\]\]/g, (match, noteTitle, section) => {
    const slug = findSlug(noteTitle.trim(), articleMap);
    const sectionId = sectionToId(section);
    return `<a href="/articles/${slug}.html#${sectionId}" class="internal-link">${noteTitle.trim()} - ${section.trim()}</a>`;
  });

  // Pattern 4: [[#Section]] - link to section in same document
  result = result.replace(/\[\[#([^\]]+)\]\]/g, (match, section) => {
    const sectionId = sectionToId(section);
    return `<a href="#${sectionId}" class="internal-link internal-link--section">${section.trim()}</a>`;
  });

  return result;
}

/**
 * Find slug for note title
 * @param {string} title - Note title
 * @param {Map} articleMap - Map of title -> slug
 * @returns {string} Slug
 */
function findSlug(title, articleMap) {
  // Direct match
  if (articleMap.has(title)) {
    return articleMap.get(title);
  }

  // Case-insensitive match
  for (const [key, value] of articleMap) {
    if (key.toLowerCase() === title.toLowerCase()) {
      return value;
    }
  }

  // Generate slug from title (for broken links)
  return slugGenerator.preview(title);
}

/**
 * Convert section heading to anchor ID
 * @param {string} section - Section heading text
 * @returns {string} Anchor ID
 */
function sectionToId(section) {
  return section
    .toLowerCase()
    .trim()
    .replace(/[\uAC00-\uD7AF]+/g, match => {
      // Keep Korean characters, just lowercase equivalent handling
      return match;
    })
    .replace(/[^a-z0-9\uAC00-\uD7AF\s-]/g, '') // Allow Korean
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Extract all internal links from content
 * @param {string} markdown - Markdown content
 * @returns {Array} Array of link objects
 */
function extractLinks(markdown) {
  if (!markdown) return [];

  const links = [];
  const patterns = [
    /\[\[([^\]|#]+)\|([^\]]+)\]\]/g,
    /\[\[([^\]|#]+)\]\]/g,
    /\[\[([^\]|#]+)#([^\]|]+)\]\]/g,
    /\[\[#([^\]]+)\]\]/g
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(markdown)) !== null) {
      links.push({
        full: match[0],
        title: match[1],
        display: match[2] || match[1],
        section: match[2] && !match[0].includes('|') ? match[2] : null
      });
    }
  }

  return links;
}

/**
 * Build article map from articles array
 * @param {Array} articles - Array of article objects with title and slug
 * @returns {Map} Title -> Slug map
 */
function buildArticleMap(articles) {
  const map = new Map();

  for (const article of articles) {
    if (article.title && article.slug) {
      map.set(article.title, article.slug);
    }
  }

  return map;
}

module.exports = {
  process,
  findSlug,
  sectionToId,
  extractLinks,
  buildArticleMap
};
