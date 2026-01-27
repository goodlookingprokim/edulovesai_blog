/**
 * Callouts Preprocessor
 * Converts Obsidian callouts to styled HTML blocks
 *
 * Obsidian format:
 * > [!NOTE] Title
 * > Content line 1
 * > Content line 2
 *
 * Supported types: NOTE, TIP, WARNING, DANGER, INFO, IMPORTANT, EXAMPLE, QUOTE
 */

// Callout type configurations
const CALLOUT_TYPES = {
  NOTE: {
    icon: 'ℹ️',
    label: 'Note',
    class: 'callout--note'
  },
  TIP: {
    icon: '💡',
    label: 'Tip',
    class: 'callout--tip'
  },
  WARNING: {
    icon: '⚠️',
    label: 'Warning',
    class: 'callout--warning'
  },
  DANGER: {
    icon: '🚨',
    label: 'Danger',
    class: 'callout--danger'
  },
  INFO: {
    icon: 'ℹ️',
    label: 'Info',
    class: 'callout--info'
  },
  IMPORTANT: {
    icon: '❗',
    label: 'Important',
    class: 'callout--important'
  },
  EXAMPLE: {
    icon: '📋',
    label: 'Example',
    class: 'callout--example'
  },
  QUOTE: {
    icon: '💬',
    label: 'Quote',
    class: 'callout--quote'
  },
  SUCCESS: {
    icon: '✅',
    label: 'Success',
    class: 'callout--success'
  },
  FAILURE: {
    icon: '❌',
    label: 'Failure',
    class: 'callout--failure'
  },
  BUG: {
    icon: '🐛',
    label: 'Bug',
    class: 'callout--bug'
  },
  ABSTRACT: {
    icon: '📝',
    label: 'Abstract',
    class: 'callout--abstract'
  }
};

/**
 * Process callouts in markdown content
 * @param {string} markdown - Markdown content
 * @returns {string} Processed markdown with HTML callouts
 */
function process(markdown) {
  if (!markdown) return '';

  // Match callout blocks
  // Pattern: > [!TYPE] Optional Title
  //          > Content...
  const calloutPattern = /^>\s*\[!(\w+)\]\s*(.*)$((?:\n>\s*.*$)*)/gm;

  return markdown.replace(calloutPattern, (match, type, title, content) => {
    const upperType = type.toUpperCase();
    const config = CALLOUT_TYPES[upperType] || CALLOUT_TYPES.NOTE;

    // Parse content (remove > prefix from each line)
    const contentLines = content
      .split('\n')
      .map(line => line.replace(/^>\s?/, '').trim())
      .filter(line => line.length > 0);

    const contentHtml = contentLines.join('<br>');
    const displayTitle = title.trim() || config.label;

    return `
<div class="callout ${config.class}">
  <div class="callout__header">
    <span class="callout__icon">${config.icon}</span>
    <span class="callout__title">${escapeHtml(displayTitle)}</span>
  </div>
  <div class="callout__content">
    ${contentHtml}
  </div>
</div>`;
  });
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
 * Check if content has callouts
 * @param {string} markdown - Markdown content
 * @returns {boolean}
 */
function hasCallouts(markdown) {
  if (!markdown) return false;
  return /^>\s*\[!\w+\]/m.test(markdown);
}

/**
 * Extract callout types used in content
 * @param {string} markdown - Markdown content
 * @returns {Array} Array of callout types used
 */
function extractTypes(markdown) {
  if (!markdown) return [];

  const types = new Set();
  const pattern = /^>\s*\[!(\w+)\]/gm;
  let match;

  while ((match = pattern.exec(markdown)) !== null) {
    types.add(match[1].toUpperCase());
  }

  return Array.from(types);
}

/**
 * Get all supported callout types
 * @returns {object} Callout type configurations
 */
function getTypes() {
  return CALLOUT_TYPES;
}

module.exports = {
  process,
  hasCallouts,
  extractTypes,
  getTypes,
  CALLOUT_TYPES
};
