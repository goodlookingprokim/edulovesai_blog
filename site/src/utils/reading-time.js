/**
 * Reading Time Calculator
 * Calculates estimated reading time for Korean/English mixed content
 */

// Reading speeds
const KOREAN_CHARS_PER_MIN = 500; // Korean characters per minute
const ENGLISH_WORDS_PER_MIN = 200; // English words per minute
const CODE_LINES_PER_MIN = 30; // Code lines per minute (slower, need to understand)

/**
 * Calculate reading time for content
 * @param {string} content - Markdown content
 * @returns {string} Formatted reading time (e.g., "5 min")
 */
function calculate(content) {
  if (!content) return '1 min';

  // Extract code blocks first
  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
  const codeLines = codeBlocks.reduce((total, block) => {
    return total + block.split('\n').length;
  }, 0);

  // Remove code blocks for text analysis
  let textContent = content.replace(/```[\s\S]*?```/g, '');

  // Remove markdown syntax
  textContent = textContent
    .replace(/^#+\s+/gm, '') // Headers
    .replace(/!\[.*?\]\(.*?\)/g, '') // Images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // Links
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, '$2 || $1') // Obsidian links
    .replace(/`[^`]+`/g, '') // Inline code
    .replace(/[*_~]+/g, '') // Bold/italic
    .replace(/>\s*\[!.*?\]/g, '') // Callout markers
    .replace(/^>\s*/gm, ''); // Blockquotes

  // Count Korean characters
  const koreanChars = (textContent.match(/[\uAC00-\uD7AF]/g) || []).length;

  // Count English words (approximate)
  const englishText = textContent.replace(/[\uAC00-\uD7AF]+/g, ' ');
  const englishWords = englishText.split(/\s+/).filter(word => word.length > 0).length;

  // Calculate time in minutes
  const koreanTime = koreanChars / KOREAN_CHARS_PER_MIN;
  const englishTime = englishWords / ENGLISH_WORDS_PER_MIN;
  const codeTime = codeLines / CODE_LINES_PER_MIN;

  const totalMinutes = Math.ceil(koreanTime + englishTime + codeTime);

  // Minimum 1 minute, maximum reasonable
  const finalMinutes = Math.max(1, Math.min(totalMinutes, 60));

  return `${finalMinutes} min`;
}

/**
 * Get detailed reading time breakdown
 * @param {string} content - Markdown content
 * @returns {object} Detailed breakdown
 */
function detailed(content) {
  if (!content) {
    return {
      total: '1 min',
      korean: { chars: 0, minutes: 0 },
      english: { words: 0, minutes: 0 },
      code: { lines: 0, minutes: 0 }
    };
  }

  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
  const codeLines = codeBlocks.reduce((total, block) => {
    return total + block.split('\n').length;
  }, 0);

  let textContent = content.replace(/```[\s\S]*?```/g, '');
  textContent = textContent
    .replace(/^#+\s+/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, '$2 || $1')
    .replace(/`[^`]+`/g, '')
    .replace(/[*_~]+/g, '')
    .replace(/>\s*\[!.*?\]/g, '')
    .replace(/^>\s*/gm, '');

  const koreanChars = (textContent.match(/[\uAC00-\uD7AF]/g) || []).length;
  const englishText = textContent.replace(/[\uAC00-\uD7AF]+/g, ' ');
  const englishWords = englishText.split(/\s+/).filter(word => word.length > 0).length;

  const koreanTime = koreanChars / KOREAN_CHARS_PER_MIN;
  const englishTime = englishWords / ENGLISH_WORDS_PER_MIN;
  const codeTime = codeLines / CODE_LINES_PER_MIN;

  const totalMinutes = Math.max(1, Math.ceil(koreanTime + englishTime + codeTime));

  return {
    total: `${totalMinutes} min`,
    korean: {
      chars: koreanChars,
      minutes: Math.round(koreanTime * 10) / 10
    },
    english: {
      words: englishWords,
      minutes: Math.round(englishTime * 10) / 10
    },
    code: {
      lines: codeLines,
      minutes: Math.round(codeTime * 10) / 10
    }
  };
}

module.exports = {
  calculate,
  detailed,
  KOREAN_CHARS_PER_MIN,
  ENGLISH_WORDS_PER_MIN,
  CODE_LINES_PER_MIN
};
