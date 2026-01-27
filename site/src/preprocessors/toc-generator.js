/**
 * Table of Contents Generator
 * Generates TOC from headings (h2, h3) when 3+ headings exist
 */

/**
 * Generate table of contents from markdown content
 * @param {string} markdown - Markdown content
 * @param {object} options - Generation options
 * @returns {object} { toc: string, content: string }
 */
function generate(markdown, options = {}) {
  const {
    minHeadings = 3,
    maxDepth = 3,
    title = '목차',
    includeH1 = false
  } = options;

  if (!markdown) return { toc: '', content: markdown };

  // Extract headings
  const headings = extractHeadings(markdown, { maxDepth, includeH1 });

  // Don't generate TOC if not enough headings
  if (headings.length < minHeadings) {
    return { toc: '', content: markdown };
  }

  // Generate TOC HTML
  const tocHtml = buildTocHtml(headings, title);

  // Add IDs to headings in content
  const contentWithIds = addHeadingIds(markdown, headings);

  return {
    toc: tocHtml,
    content: contentWithIds,
    headings
  };
}

/**
 * Extract headings from markdown
 * @param {string} markdown - Markdown content
 * @param {object} options - Extraction options
 * @returns {Array} Array of heading objects
 */
function extractHeadings(markdown, options = {}) {
  const { maxDepth = 3, includeH1 = false } = options;

  const headings = [];
  const minLevel = includeH1 ? 1 : 2;

  // Match ATX-style headings (## Heading)
  const headingPattern = /^(#{1,6})\s+(.+)$/gm;
  let match;

  while ((match = headingPattern.exec(markdown)) !== null) {
    const level = match[1].length;

    if (level >= minLevel && level <= maxDepth) {
      const text = match[2].trim();
      const id = textToId(text);

      headings.push({
        level,
        text,
        id,
        index: headings.length
      });
    }
  }

  return headings;
}

/**
 * Convert heading text to anchor ID
 * @param {string} text - Heading text
 * @returns {string} Anchor ID
 */
function textToId(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\uAC00-\uD7AF\s-]/g, '') // Keep alphanumeric, Korean, spaces, hyphens
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60); // Limit length
}

/**
 * Build TOC HTML
 * @param {Array} headings - Array of heading objects
 * @param {string} title - TOC title
 * @returns {string} TOC HTML
 */
function buildTocHtml(headings, title = '목차') {
  if (!headings.length) return '';

  const baseLevel = Math.min(...headings.map(h => h.level));

  const items = headings.map(heading => {
    const indent = heading.level - baseLevel;
    const indentClass = indent > 0 ? ` toc__item--indent-${indent}` : '';

    return `
    <li class="toc__item${indentClass}">
      <a href="#${heading.id}" class="toc__link">${escapeHtml(heading.text)}</a>
    </li>`;
  }).join('');

  return `
<nav class="toc" aria-label="Table of contents">
  <div class="toc__header">
    <span class="toc__title">${escapeHtml(title)}</span>
    <button class="toc__toggle" aria-expanded="true" onclick="toggleToc(this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </div>
  <ol class="toc__list">
    ${items}
  </ol>
</nav>`;
}

/**
 * Add IDs to headings in markdown/HTML content
 * @param {string} content - Content
 * @param {Array} headings - Heading objects
 * @returns {string} Content with heading IDs
 */
function addHeadingIds(content, headings) {
  if (!content || !headings.length) return content;

  let result = content;

  for (const heading of headings) {
    // Match the heading line
    const pattern = new RegExp(
      `^(#{${heading.level}})\\s+(${escapeRegex(heading.text)})$`,
      'm'
    );

    // Add ID marker that will be converted to HTML id attribute
    result = result.replace(pattern, `$1 $2 {#${heading.id}}`);
  }

  return result;
}

/**
 * Post-process HTML to add heading IDs and clean anchor syntax
 * Call this after marked.js conversion
 * @param {string} html - HTML content
 * @param {Array} headings - Heading objects
 * @returns {string} HTML with heading IDs
 */
function addIdsToHtml(html, headings) {
  if (!html || !headings.length) return html;

  let result = html;

  for (const heading of headings) {
    // Match heading tag with the text (including any {#id} marker)
    const pattern = new RegExp(
      `<h${heading.level}>([^<]*${escapeRegex(heading.text)}[^<]*)</h${heading.level}>`,
      'i'
    );

    result = result.replace(pattern, (match, content) => {
      // Remove {#id} syntax from visible content
      const cleanContent = content.replace(/\s*\{#[^}]+\}/g, '');
      return `<h${heading.level} id="${heading.id}">${cleanContent}</h${heading.level}>`;
    });
  }

  // Also clean any remaining {#id} syntax in headings
  result = result.replace(/(<h[1-6][^>]*>)([^<]*)\s*\{#[^}]+\}([^<]*<\/h[1-6]>)/gi, '$1$2$3');

  return result;
}

/**
 * Escape special regex characters
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
 * Check if content should have TOC
 * @param {string} markdown - Markdown content
 * @param {number} minHeadings - Minimum headings required
 * @returns {boolean}
 */
function shouldHaveToc(markdown, minHeadings = 3) {
  const headings = extractHeadings(markdown);
  return headings.length >= minHeadings;
}

/**
 * Get TOC toggle script
 */
function getToggleScript() {
  return `
function toggleToc(button) {
  const toc = button.closest('.toc');
  const list = toc.querySelector('.toc__list');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !isExpanded);
  list.style.display = isExpanded ? 'none' : 'block';
  button.querySelector('svg').style.transform = isExpanded ? 'rotate(-90deg)' : '';
}`;
}

module.exports = {
  generate,
  extractHeadings,
  textToId,
  buildTocHtml,
  addHeadingIds,
  addIdsToHtml,
  shouldHaveToc,
  getToggleScript
};
