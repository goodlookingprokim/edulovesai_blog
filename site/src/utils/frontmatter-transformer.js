/**
 * Frontmatter Transformer
 * Converts Obsidian YAML frontmatter to Blog YAML format
 */

const slugGenerator = require('./slug-generator');
const categoryMapper = require('./category-mapper');
const readingTime = require('./reading-time');

/**
 * Transform Obsidian frontmatter to Blog format
 * @param {object} obsidianFrontmatter - Original Obsidian YAML data
 * @param {string} content - Markdown content for excerpt/reading time
 * @param {string} folderPath - Folder path for category mapping
 * @returns {object} Transformed blog frontmatter
 */
function transform(obsidianFrontmatter, content, folderPath) {
  const fm = obsidianFrontmatter || {};

  // Generate slug from title
  const slug = fm.slug || slugGenerator.generate(fm.title || 'untitled');

  // Map category from folder path
  const category = categoryMapper.mapFromPath(folderPath);

  // Calculate reading time
  const readTime = readingTime.calculate(content);

  // Map status
  const status = mapStatus(fm.status);

  // Map priority to homepage_priority
  const homepagePriority = mapPriority(fm.priority);

  // Generate excerpt if not present
  const excerpt = fm.excerpt || generateExcerpt(content);

  // Assign journalist based on category
  const journalist = fm.journalist || assignJournalist(category);

  return {
    // Core fields
    title: fm.title || 'Untitled',
    slug,
    date: formatDate(fm.created) || formatDate(fm.date) || new Date().toISOString().split('T')[0],
    updated: formatDate(fm.last_modified) || formatDate(fm.updated),

    // Content metadata
    excerpt,
    reading_time: readTime,
    category,

    // Publishing
    status,
    featured: fm.featured || false,
    homepage_priority: homepagePriority,

    // Author
    journalist,

    // Tags (preserve existing or extract from content)
    tags: normalizeTags(fm.tags),

    // Media
    featured_image: fm.featured_image || fm.image,
    video_url: fm.video_url,

    // Preserve any custom fields
    ...preserveCustomFields(fm)
  };
}

/**
 * Map Obsidian status to blog status
 */
function mapStatus(status) {
  const statusMap = {
    '완료': 'published',
    '진행중': 'draft',
    '초안': 'draft',
    '보관': 'archived',
    'published': 'published',
    'draft': 'draft',
    'archived': 'archived'
  };
  return statusMap[status] || 'draft';
}

/**
 * Map priority to homepage_priority (1-4)
 */
function mapPriority(priority) {
  const priorityMap = {
    'high': 1,
    'medium': 2,
    'low': 3,
    '높음': 1,
    '중간': 2,
    '낮음': 3
  };
  return priorityMap[priority] || 4;
}

/**
 * Format date to YYYY-MM-DD
 */
function formatDate(dateStr) {
  if (!dateStr) return null;

  // Handle various date formats
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;

  return date.toISOString().split('T')[0];
}

/**
 * Generate excerpt from content (first 150 chars)
 */
function generateExcerpt(content) {
  if (!content) return '';

  // Remove markdown syntax
  const plainText = content
    .replace(/^#+\s+.*$/gm, '') // Headers
    .replace(/!\[.*?\]\(.*?\)/g, '') // Images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // Links
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, '$2 || $1') // Obsidian links
    .replace(/```[\s\S]*?```/g, '') // Code blocks
    .replace(/`[^`]+`/g, '') // Inline code
    .replace(/[*_~]+/g, '') // Bold/italic/strikethrough
    .replace(/>\s*\[!.*?\].*$/gm, '') // Callout headers
    .replace(/^>\s*/gm, '') // Blockquotes
    .replace(/\n+/g, ' ') // Newlines to spaces
    .trim();

  // Get first 150 characters
  if (plainText.length <= 150) return plainText;

  // Cut at word boundary
  const truncated = plainText.substring(0, 150);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 100 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Assign journalist based on category
 */
function assignJournalist(category) {
  const journalistMap = {
    'mcp-servers': 'tech-expert',
    'claude-code': 'claude-specialist',
    'ai-tools': 'tech-expert',
    'obsidian-integration': 'claude-specialist',
    'prompt-engineering': 'claude-specialist',
    'development-guides': 'dev-guide',
    'tutorials': 'dev-guide',
    'flutter': 'dev-guide'
  };
  return journalistMap[category] || 'tech-expert';
}

/**
 * Normalize tags to array format
 */
function normalizeTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    // Flatten nested tags (e.g., ['AI/도구', 'Claude']) -> ['AI', '도구', 'Claude']
    return tags.flatMap(tag => {
      if (typeof tag === 'string') {
        // Split hierarchical tags
        return tag.split('/').map(t => t.trim()).filter(Boolean);
      }
      return [];
    });
  }
  if (typeof tags === 'string') {
    return tags.split(',').map(t => t.trim()).filter(Boolean);
  }
  return [];
}

/**
 * Preserve custom fields that don't conflict with standard fields
 */
function preserveCustomFields(fm) {
  const standardFields = [
    'title', 'slug', 'date', 'created', 'last_modified', 'updated',
    'excerpt', 'status', 'priority', 'featured', 'homepage_priority',
    'journalist', 'tags', 'featured_image', 'image', 'video_url',
    'category', 'reading_time', 'type'
  ];

  const custom = {};
  for (const [key, value] of Object.entries(fm)) {
    if (!standardFields.includes(key)) {
      custom[key] = value;
    }
  }
  return custom;
}

module.exports = { transform };
