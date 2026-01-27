/**
 * Category Mapper
 * Maps Obsidian folder paths to blog categories
 */

// Folder path to category mapping
const FOLDER_CATEGORY_MAP = {
  // MCP related
  'MCP 시스템': 'mcp-servers',
  'MCP 활용': 'mcp-servers',
  'MCP': 'mcp-servers',

  // Claude Code
  'Claude Code': 'claude-code',
  'Claude': 'claude-code',

  // AI Tools
  'AI 기술 자료': 'ai-tools',
  'AI 도구 분석': 'ai-tools',
  'AI 도구': 'ai-tools',
  'AI': 'ai-tools',

  // Obsidian Integration
  'Obsidian AI 통합': 'obsidian-integration',
  'Obsidian AI 통합 가이드': 'obsidian-integration',
  'Obsidian': 'obsidian-integration',

  // Prompt Engineering
  '프롬프트 엔지니어링': 'prompt-engineering',
  '프롬프트': 'prompt-engineering',

  // Development Guides
  '개발 도구 가이드': 'development-guides',
  '개발 가이드': 'development-guides',
  '개발 도구': 'development-guides',

  // Flutter
  'Flutter': 'flutter',
  'FlutterDev': 'flutter',

  // Windows Development
  'WinAppDev': 'development-guides',

  // Default
  'tutorials': 'tutorials'
};

// Category metadata
const CATEGORY_META = {
  'mcp-servers': {
    name: 'MCP 서버',
    description: 'Model Context Protocol 서버 설치 및 활용',
    color: '#10b981'
  },
  'claude-code': {
    name: 'Claude Code',
    description: 'Claude Code 가이드 및 팁',
    color: '#ff6b35'
  },
  'ai-tools': {
    name: 'AI 도구',
    description: 'AI 도구 분석 및 활용법',
    color: '#6366f1'
  },
  'obsidian-integration': {
    name: 'Obsidian 통합',
    description: 'Obsidian AI 워크플로우',
    color: '#8b5cf6'
  },
  'prompt-engineering': {
    name: '프롬프트 엔지니어링',
    description: '효과적인 프롬프트 작성법',
    color: '#ec4899'
  },
  'development-guides': {
    name: '개발 가이드',
    description: '개발 도구 및 환경 설정',
    color: '#f59e0b'
  },
  'flutter': {
    name: 'Flutter',
    description: 'Flutter 앱 개발 가이드',
    color: '#02569B'
  },
  'tutorials': {
    name: '튜토리얼',
    description: '단계별 실습 가이드',
    color: '#14b8a6'
  }
};

/**
 * Map folder path to category slug
 * @param {string} folderPath - Folder path (e.g., "AI 기술 자료/Claude Code")
 * @returns {string} Category slug
 */
function mapFromPath(folderPath) {
  if (!folderPath) return 'tutorials';

  // Normalize path
  const normalizedPath = folderPath.replace(/\\/g, '/');

  // Try to match each folder segment
  const segments = normalizedPath.split('/').filter(Boolean);

  // Check each segment from most specific to least
  for (const segment of segments.reverse()) {
    const cleanSegment = segment.trim();
    if (FOLDER_CATEGORY_MAP[cleanSegment]) {
      return FOLDER_CATEGORY_MAP[cleanSegment];
    }
  }

  // Try partial match
  for (const [folder, category] of Object.entries(FOLDER_CATEGORY_MAP)) {
    if (normalizedPath.toLowerCase().includes(folder.toLowerCase())) {
      return category;
    }
  }

  return 'tutorials';
}

/**
 * Get category metadata
 * @param {string} categorySlug - Category slug
 * @returns {object} Category metadata
 */
function getMeta(categorySlug) {
  return CATEGORY_META[categorySlug] || CATEGORY_META['tutorials'];
}

/**
 * Get all categories
 * @returns {object} All category metadata
 */
function getAllCategories() {
  return CATEGORY_META;
}

/**
 * Check if category exists
 * @param {string} categorySlug - Category slug
 * @returns {boolean}
 */
function exists(categorySlug) {
  return categorySlug in CATEGORY_META;
}

module.exports = {
  mapFromPath,
  getMeta,
  getAllCategories,
  exists,
  FOLDER_CATEGORY_MAP,
  CATEGORY_META
};
