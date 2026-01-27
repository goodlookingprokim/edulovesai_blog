/**
 * Performance Postprocessor
 * Applies performance optimizations based on Vercel React Best Practices
 * - content-visibility: auto for off-screen elements
 * - contain-intrinsic-size for layout stability
 */

/**
 * Apply performance optimizations to HTML content
 * @param {string} html - HTML content
 * @returns {string} Optimized HTML
 */
function optimize(html) {
  if (!html) return '';

  let result = html;

  // Add content-visibility to article cards
  result = addContentVisibility(result, '.article-card', '0 420px');

  // Add content-visibility to sidebar posts
  result = addContentVisibility(result, '.sidebar-post', '0 88px');

  // Add content-visibility to category links
  result = addContentVisibility(result, '.category-link', '0 100px');

  return result;
}

/**
 * Add content-visibility styles inline (for elements not in CSS)
 * Note: Most optimizations are in CSS, this is for dynamic content
 * @param {string} html - HTML content
 * @param {string} selector - CSS selector pattern
 * @param {string} size - contain-intrinsic-size value
 * @returns {string} HTML with inline styles
 */
function addContentVisibility(html, selector, size) {
  // This is handled via CSS, but we can add data attributes for debugging
  return html;
}

/**
 * Add loading="lazy" to images not in viewport
 * @param {string} html - HTML content
 * @param {number} aboveFoldCount - Number of images to keep eager loading
 * @returns {string} HTML with lazy loading
 */
function lazyLoadImages(html, aboveFoldCount = 3) {
  if (!html) return '';

  let imageIndex = 0;

  return html.replace(/<img([^>]*)>/gi, (match, attrs) => {
    imageIndex++;

    // Skip if already has loading attribute
    if (/loading\s*=/i.test(attrs)) {
      return match;
    }

    // First few images load eagerly
    if (imageIndex <= aboveFoldCount) {
      return `<img${attrs} loading="eager" fetchpriority="high">`;
    }

    // Rest load lazily
    return `<img${attrs} loading="lazy" decoding="async">`;
  });
}

/**
 * Add fetchpriority to critical resources
 * @param {string} html - HTML content
 * @returns {string} HTML with fetchpriority hints
 */
function addFetchPriority(html) {
  if (!html) return '';

  let result = html;

  // High priority for LCP candidates (featured images)
  result = result.replace(
    /<img([^>]*class="[^"]*article-card__image[^"]*"[^>]*)>/gi,
    (match, attrs, offset) => {
      // Only first instance
      if (offset < html.indexOf(match) + 100) {
        return `<img${attrs} fetchpriority="high">`;
      }
      return match;
    }
  );

  return result;
}

/**
 * Preload critical assets
 * Returns link tags to add to head
 * @param {object} article - Article data
 * @returns {string} Preload link tags
 */
function getPreloadTags(article) {
  const tags = [];

  // Preload featured image
  if (article.featured_image) {
    tags.push(`<link rel="preload" as="image" href="${article.featured_image}">`);
  }

  // Preload fonts (if using custom fonts)
  tags.push(`<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-var.woff2" crossorigin>`);

  return tags.join('\n');
}

/**
 * Generate critical CSS inline styles
 * @returns {string} Critical CSS
 */
function getCriticalCss() {
  return `
<style>
  /* Critical CSS for above-the-fold content */
  .article-card {
    content-visibility: auto;
    contain-intrinsic-size: 0 420px;
  }
  .sidebar-post {
    content-visibility: auto;
    contain-intrinsic-size: 0 88px;
  }
  .category-link {
    content-visibility: auto;
    contain-intrinsic-size: 0 100px;
  }
</style>`;
}

/**
 * Add resource hints to HTML head
 * @param {string} html - Full HTML document
 * @param {object} options - Options
 * @returns {string} HTML with resource hints
 */
function addResourceHints(html, options = {}) {
  if (!html) return '';

  const hints = [];

  // DNS prefetch for external resources
  if (options.externalDomains) {
    for (const domain of options.externalDomains) {
      hints.push(`<link rel="dns-prefetch" href="${domain}">`);
    }
  }

  // Preconnect to important origins
  hints.push('<link rel="preconnect" href="https://fonts.googleapis.com">');
  hints.push('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');

  const hintsHtml = hints.join('\n  ');

  // Insert before </head>
  return html.replace('</head>', `  ${hintsHtml}\n</head>`);
}

module.exports = {
  optimize,
  lazyLoadImages,
  addFetchPriority,
  getPreloadTags,
  getCriticalCss,
  addResourceHints
};
