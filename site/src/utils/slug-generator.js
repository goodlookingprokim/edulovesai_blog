/**
 * Slug Generator
 * Converts Korean/mixed titles to URL-safe slugs
 */

// Korean to English keyword mapping
const KOREAN_KEYWORDS = {
  // Common words
  '완전': 'complete',
  '완벽': 'perfect',
  '가이드': 'guide',
  '설치': 'install',
  '설정': 'setup',
  '사용법': 'usage',
  '사용': 'use',
  '방법': 'how-to',
  '소개': 'intro',
  '시작': 'getting-started',
  '기초': 'basics',
  '기본': 'basic',
  '고급': 'advanced',
  '심화': 'deep-dive',
  '활용': 'practical',
  '실전': 'real-world',
  '예제': 'examples',
  '튜토리얼': 'tutorial',
  '입문': 'beginners',
  '초보': 'beginners',

  // Tech terms
  '프롬프트': 'prompt',
  '엔지니어링': 'engineering',
  '개발': 'development',
  '도구': 'tools',
  '기술': 'tech',
  '자료': 'resources',
  '분석': 'analysis',
  '통합': 'integration',
  '연동': 'integration',
  '자동화': 'automation',
  '워크플로우': 'workflow',
  '스크립트': 'script',
  '플러그인': 'plugin',
  '확장': 'extension',
  '템플릿': 'template',

  // AI related
  '인공지능': 'ai',
  '머신러닝': 'machine-learning',
  '딥러닝': 'deep-learning',
  '모델': 'model',
  '에이전트': 'agent',
  '챗봇': 'chatbot',

  // Obsidian
  '옵시디언': 'obsidian',
  '노트': 'note',
  '지식': 'knowledge',
  '관리': 'management',

  // Common prefixes/suffixes
  '최신': 'latest',
  '새로운': 'new',
  '업데이트': 'update',
  '버전': 'version',
  '정리': 'organized',
  '요약': 'summary',
  '총정리': 'comprehensive',

  // Status words
  '팁': 'tips',
  '트릭': 'tricks',
  '꿀팁': 'pro-tips',
  '핵심': 'essential',
  '필수': 'must-know',
  '추천': 'recommended'
};

// Used slugs tracker for uniqueness
const usedSlugs = new Set();

/**
 * Generate URL-safe slug from title
 * @param {string} title - Article title
 * @returns {string} URL-safe slug
 */
function generate(title) {
  if (!title) return 'untitled';

  let slug = title.toLowerCase();

  // Replace Korean keywords with English equivalents
  for (const [korean, english] of Object.entries(KOREAN_KEYWORDS)) {
    slug = slug.replace(new RegExp(korean, 'gi'), english);
  }

  // Remove remaining Korean characters (keep only alphanumeric and spaces)
  slug = slug.replace(/[\uAC00-\uD7AF]+/g, '');

  // Convert to kebab-case
  slug = slug
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric except spaces and hyphens
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Multiple hyphens to single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .trim();

  // Ensure slug is not empty
  if (!slug) {
    slug = 'article';
  }

  // Ensure uniqueness
  const baseSlug = slug;
  let counter = 1;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  usedSlugs.add(slug);
  return slug;
}

/**
 * Generate slug without tracking (for preview/display)
 * @param {string} title - Article title
 * @returns {string} URL-safe slug
 */
function preview(title) {
  if (!title) return 'untitled';

  let slug = title.toLowerCase();

  for (const [korean, english] of Object.entries(KOREAN_KEYWORDS)) {
    slug = slug.replace(new RegExp(korean, 'gi'), english);
  }

  slug = slug.replace(/[\uAC00-\uD7AF]+/g, '');

  slug = slug
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();

  return slug || 'article';
}

/**
 * Reset used slugs (call at start of build)
 */
function reset() {
  usedSlugs.clear();
}

/**
 * Check if slug is already used
 * @param {string} slug - Slug to check
 * @returns {boolean}
 */
function isUsed(slug) {
  return usedSlugs.has(slug);
}

/**
 * Mark slug as used
 * @param {string} slug - Slug to mark
 */
function markUsed(slug) {
  usedSlugs.add(slug);
}

module.exports = {
  generate,
  preview,
  reset,
  isUsed,
  markUsed,
  KOREAN_KEYWORDS
};
