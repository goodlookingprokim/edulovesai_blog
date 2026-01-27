/**
 * Category Mapper
 * Maps Obsidian folder paths to blog categories
 */

// Folder path to category mapping (AI 기술 자료 subfolder structure)
const FOLDER_CATEGORY_MAP = {
  // Agent Development Design Patterns
  'Agent Development Design Patterns': 'agent-patterns',
  'Agent Patterns': 'agent-patterns',

  // Prompt Engineering
  '프롬프트 엔지니어링': 'prompt-engineering',
  '프롬프트': 'prompt-engineering',

  // AI Tools Analysis
  'AI 도구 분석': 'ai-tools',
  'AI 도구': 'ai-tools',

  // Claude Skills
  'Claude Skills': 'claude-skills',

  // LLM Usage Guides
  'LLM 활용 가이드': 'llm-guides',
  'LLM 가이드': 'llm-guides',

  // Education & Training Policy
  '인재 양성 및 교육 정책': 'education-policy',
  '교육 정책': 'education-policy',

  // Claude Code Usage
  'Claude Code 활용': 'claude-code',
  'Claude Code': 'claude-code',

  // Finance AI Agent
  '금융 AI Agent': 'finance-ai',
  '금융 AI': 'finance-ai',

  // API Guides
  'API Guide': 'api-guides',
  'API 가이드': 'api-guides',

  // Root-level files (default)
  'AI 기술 자료': 'ai-resources'
};

// Category metadata (10 categories for AI 기술 자료)
const CATEGORY_META = {
  'agent-patterns': {
    name: 'Agent 패턴',
    description: 'AI 에이전트 개발 디자인 패턴 및 아키텍처',
    color: '#6366f1'
  },
  'prompt-engineering': {
    name: '프롬프트 엔지니어링',
    description: '효과적인 프롬프트 작성법과 기법',
    color: '#ec4899'
  },
  'ai-tools': {
    name: 'AI 도구',
    description: 'AI 도구 분석 및 활용법',
    color: '#10b981'
  },
  'claude-skills': {
    name: 'Claude Skills',
    description: 'Claude Code Skills 개발 및 활용',
    color: '#8b5cf6'
  },
  'llm-guides': {
    name: 'LLM 가이드',
    description: 'LLM 활용 가이드 및 모범 사례',
    color: '#f59e0b'
  },
  'education-policy': {
    name: '교육 정책',
    description: 'AI 인재 양성 및 교육 정책',
    color: '#14b8a6'
  },
  'claude-code': {
    name: 'Claude Code',
    description: 'Claude Code 활용 가이드',
    color: '#ff6b35'
  },
  'finance-ai': {
    name: '금융 AI',
    description: '금융 분야 AI 에이전트',
    color: '#ef4444'
  },
  'api-guides': {
    name: 'API 가이드',
    description: 'API 개발 및 통합 가이드',
    color: '#3b82f6'
  },
  'ai-resources': {
    name: 'AI 자료',
    description: 'AI 기술 일반 자료',
    color: '#a855f7'
  }
};

/**
 * Map folder path to category slug
 * @param {string} folderPath - Folder path (e.g., "AI 기술 자료/Claude Code")
 * @returns {string} Category slug
 */
function mapFromPath(folderPath) {
  if (!folderPath) return 'ai-resources';

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

  return 'ai-resources';
}

/**
 * Get category metadata
 * @param {string} categorySlug - Category slug
 * @returns {object} Category metadata
 */
function getMeta(categorySlug) {
  return CATEGORY_META[categorySlug] || CATEGORY_META['ai-resources'];
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
