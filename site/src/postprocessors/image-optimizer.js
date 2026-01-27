/**
 * Image Optimizer Postprocessor
 * Optimizes images for web performance
 * - First 3 images: fetchpriority="high"
 * - Rest: loading="lazy" decoding="async"
 * - Adds alt text if missing
 * - Adds width/height hints for layout stability
 */

/**
 * Optimize images in HTML content
 * @param {string} html - HTML content
 * @param {object} options - Optimization options
 * @returns {string} HTML with optimized images
 */
function optimize(html, options = {}) {
  if (!html) return '';

  const {
    aboveFoldCount = 3,
    addDimensions = true,
    generateAlt = true
  } = options;

  let imageIndex = 0;

  return html.replace(/<img([^>]*)>/gi, (match, attrs) => {
    imageIndex++;

    let newAttrs = attrs;

    // Skip if already fully optimized
    if (hasAllOptimizations(attrs)) {
      return match;
    }

    // Add loading strategy
    if (!/loading\s*=/i.test(newAttrs)) {
      if (imageIndex <= aboveFoldCount) {
        newAttrs += ' loading="eager"';
      } else {
        newAttrs += ' loading="lazy"';
      }
    }

    // Add decoding for lazy images
    if (imageIndex > aboveFoldCount && !/decoding\s*=/i.test(newAttrs)) {
      newAttrs += ' decoding="async"';
    }

    // Add fetchpriority for above-fold images
    if (imageIndex <= aboveFoldCount && !/fetchpriority\s*=/i.test(newAttrs)) {
      newAttrs += ' fetchpriority="high"';
    }

    // Generate alt text if missing
    if (generateAlt && !/alt\s*=/i.test(newAttrs)) {
      const altText = generateAltText(attrs);
      newAttrs += ` alt="${altText}"`;
    }

    // Add dimension hints if missing (optional)
    if (addDimensions && !hasDimensions(newAttrs)) {
      // Can't determine actual dimensions without reading file
      // But we can add aspect-ratio hint via style
      if (!/style\s*=/i.test(newAttrs)) {
        newAttrs += ' style="aspect-ratio: 16/9; object-fit: cover;"';
      }
    }

    return `<img${newAttrs}>`;
  });
}

/**
 * Check if image has all optimizations
 */
function hasAllOptimizations(attrs) {
  return /loading\s*=/i.test(attrs) &&
         /decoding\s*=/i.test(attrs) &&
         /alt\s*=/i.test(attrs);
}

/**
 * Check if image has dimension attributes
 */
function hasDimensions(attrs) {
  return /width\s*=/i.test(attrs) || /height\s*=/i.test(attrs);
}

/**
 * Generate alt text from src attribute
 */
function generateAltText(attrs) {
  // Extract src
  const srcMatch = attrs.match(/src\s*=\s*["']([^"']+)["']/i);
  if (!srcMatch) return 'Image';

  const src = srcMatch[1];

  // Extract filename
  const filename = src.split('/').pop().split('?')[0];

  // Remove extension and convert to readable text
  const name = filename
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace separators with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
    .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize words

  return name || 'Image';
}

/**
 * Convert images to WebP format hints
 * Adds srcset with WebP fallback (for browsers that support it)
 * @param {string} html - HTML content
 * @returns {string} HTML with WebP hints
 */
function addWebpHints(html) {
  if (!html) return '';

  return html.replace(
    /<img([^>]*src\s*=\s*["'])([^"']+\.(jpg|jpeg|png))["']([^>]*)>/gi,
    (match, before, src, ext, after) => {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      // Use picture element for WebP with fallback
      return `<picture>
  <source srcset="${webpSrc}" type="image/webp">
  <img${before}${src}"${after}>
</picture>`;
    }
  );
}

/**
 * Add responsive image srcset
 * @param {string} html - HTML content
 * @param {Array} sizes - Array of width breakpoints
 * @returns {string} HTML with srcset
 */
function addResponsiveSrcset(html, sizes = [320, 640, 960, 1280]) {
  if (!html) return '';

  return html.replace(
    /<img([^>]*src\s*=\s*["'])([^"']+)["']([^>]*)>/gi,
    (match, before, src, after) => {
      // Skip SVGs and external images
      if (src.endsWith('.svg') || src.startsWith('http')) {
        return match;
      }

      // Generate srcset
      const srcset = sizes
        .map(w => `${src.replace(/(\.[^/.]+)$/, `-${w}w$1`)} ${w}w`)
        .join(', ');

      const sizesAttr = '(max-width: 768px) 100vw, 50vw';

      return `<img${before}${src}" srcset="${srcset}" sizes="${sizesAttr}"${after}>`;
    }
  );
}

/**
 * Extract all image URLs from HTML
 * @param {string} html - HTML content
 * @returns {Array} Array of image URLs
 */
function extractImageUrls(html) {
  if (!html) return [];

  const urls = [];
  const pattern = /<img[^>]*src\s*=\s*["']([^"']+)["'][^>]*>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    urls.push(match[1]);
  }

  return urls;
}

/**
 * Count images in content
 * @param {string} html - HTML content
 * @returns {number} Image count
 */
function countImages(html) {
  if (!html) return 0;
  const matches = html.match(/<img[^>]*>/gi);
  return matches ? matches.length : 0;
}

module.exports = {
  optimize,
  addWebpHints,
  addResponsiveSrcset,
  extractImageUrls,
  countImages,
  generateAltText
};
