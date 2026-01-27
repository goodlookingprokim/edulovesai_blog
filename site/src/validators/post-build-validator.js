/**
 * Post-Build Validator
 * Validates build output to catch issues before deployment
 *
 * Checks:
 * - Image file existence (og:image, content images)
 * - Journalist avatar existence
 * - Category placeholder existence
 * - Internal link validity
 * - Required file generation
 */

const fs = require('fs');
const path = require('path');

/**
 * Validation result structure
 */
function createResult() {
  return {
    passed: true,
    issues: [],
    summary: {
      total: 0,
      passed: 0,
      warnings: 0,
      errors: 0
    }
  };
}

/**
 * Add an issue to the result
 */
function addIssue(result, type, category, message, file = null, suggestion = null) {
  result.issues.push({ type, category, message, file, suggestion });
  if (type === 'error') {
    result.summary.errors++;
    result.passed = false;
  } else {
    result.summary.warnings++;
  }
}

/**
 * Mark a check as passed
 */
function addPass(result) {
  result.summary.passed++;
  result.summary.total++;
}

/**
 * Mark a check as failed
 */
function addFail(result) {
  result.summary.total++;
}

/**
 * Check if a file exists
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * Validate article images exist
 */
function validateArticleImages(articles, buildDir, result) {
  const imagesDir = path.join(buildDir, 'assets', 'images');
  let validCount = 0;
  let totalCount = 0;

  for (const article of articles) {
    totalCount++;
    const imagePath = article.imagePath || `/assets/images/${article.category}-placeholder.svg`;

    // Skip external URLs
    if (imagePath.startsWith('http')) {
      validCount++;
      addPass(result);
      continue;
    }

    // Convert to absolute path
    const absolutePath = path.join(buildDir, imagePath);

    if (fileExists(absolutePath)) {
      validCount++;
      addPass(result);
    } else {
      addFail(result);
      addIssue(
        result,
        'error',
        'Image',
        `Missing image: ${imagePath}`,
        article.slug,
        `Create the image or use a placeholder`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate journalist avatars exist
 */
function validateAvatars(personas, buildDir, result) {
  const avatarsDir = path.join(buildDir, 'assets', 'personas');
  let validCount = 0;
  let totalCount = 0;

  for (const [id, persona] of Object.entries(personas)) {
    totalCount++;
    const avatarFile = `${id}.svg`;
    const avatarPath = path.join(avatarsDir, avatarFile);

    if (fileExists(avatarPath)) {
      validCount++;
      addPass(result);
    } else {
      addFail(result);
      addIssue(
        result,
        'error',
        'Avatar',
        `Missing avatar: ${avatarFile}`,
        null,
        `Create /assets/personas/${avatarFile}`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate category placeholders exist
 */
function validatePlaceholders(categories, buildDir, result) {
  const imagesDir = path.join(buildDir, 'assets', 'images');
  let validCount = 0;
  let totalCount = 0;

  for (const category of categories) {
    totalCount++;
    const placeholderFile = `${category}-placeholder.svg`;
    const placeholderPath = path.join(imagesDir, placeholderFile);

    if (fileExists(placeholderPath)) {
      validCount++;
      addPass(result);
    } else {
      addFail(result);
      addIssue(
        result,
        'warning',
        'Placeholder',
        `Missing placeholder: ${placeholderFile}`,
        null,
        `Create /assets/images/${placeholderFile}`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate required build output files
 */
function validateRequiredFiles(buildDir, result) {
  const requiredFiles = [
    'index.html',
    'feed.xml',
    'sitemap.xml',
    'styles/main.css'
  ];

  let validCount = 0;
  let totalCount = requiredFiles.length;

  for (const file of requiredFiles) {
    const filePath = path.join(buildDir, file);

    if (fileExists(filePath)) {
      validCount++;
      addPass(result);
    } else {
      addFail(result);
      addIssue(
        result,
        'error',
        'Build Output',
        `Missing required file: ${file}`,
        null,
        `Check build process for errors`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate article HTML files were generated
 */
function validateArticlePages(articles, buildDir, result) {
  const articlesDir = path.join(buildDir, 'articles');
  let validCount = 0;
  let totalCount = 0;

  for (const article of articles) {
    totalCount++;
    const articlePath = path.join(articlesDir, `${article.slug}.html`);

    if (fileExists(articlePath)) {
      // Also check file is not empty
      const stats = fs.statSync(articlePath);
      if (stats.size > 100) {
        validCount++;
        addPass(result);
      } else {
        addFail(result);
        addIssue(
          result,
          'error',
          'Article Page',
          `Empty or corrupt article: ${article.slug}.html`,
          article.slug,
          `Rebuild the article`
        );
      }
    } else {
      addFail(result);
      addIssue(
        result,
        'error',
        'Article Page',
        `Missing article page: ${article.slug}.html`,
        article.slug,
        `Check if article was processed correctly`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate internal links in articles
 */
function validateInternalLinks(articles, buildDir, result) {
  const articlesDir = path.join(buildDir, 'articles');
  let validCount = 0;
  let totalCount = 0;

  // Build set of valid article slugs
  const validSlugs = new Set(articles.map(a => a.slug));

  for (const article of articles) {
    const articlePath = path.join(articlesDir, `${article.slug}.html`);

    if (!fileExists(articlePath)) continue;

    const content = fs.readFileSync(articlePath, 'utf-8');

    // Find internal article links
    const linkRegex = /href="\/articles\/([^"]+)\.html"/g;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      totalCount++;
      const linkedSlug = match[1];

      if (validSlugs.has(linkedSlug)) {
        validCount++;
        addPass(result);
      } else {
        addFail(result);
        addIssue(
          result,
          'warning',
          'Internal Link',
          `Broken link to: /articles/${linkedSlug}.html`,
          article.slug,
          `Update or remove the link`
        );
      }
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Validate nav and Explore Topics category consistency
 * Checks that nav links point to existing category pages
 */
function validateNavCategories(buildDir, result) {
  const indexPath = path.join(buildDir, 'index.html');
  let validCount = 0;
  let totalCount = 0;

  if (!fileExists(indexPath)) {
    addFail(result);
    addIssue(result, 'error', 'Nav Consistency', 'index.html not found', null, 'Rebuild the site');
    return { valid: 0, total: 1 };
  }

  const content = fs.readFileSync(indexPath, 'utf-8');

  // Extract nav links
  const navMatch = content.match(/<nav class="site-nav">([\s\S]*?)<\/nav>/);
  if (!navMatch) {
    addFail(result);
    addIssue(result, 'warning', 'Nav Consistency', 'Could not find site-nav in index.html', null, 'Check template structure');
    return { valid: 0, total: 1 };
  }

  const navContent = navMatch[1];
  const categoryLinkRegex = /href="\/category\/([^"]+)\.html"/g;
  let match;
  const navCategories = [];

  while ((match = categoryLinkRegex.exec(navContent)) !== null) {
    navCategories.push(match[1]);
  }

  // Check each nav category has a corresponding category page
  const categoryDir = path.join(buildDir, 'category');

  for (const category of navCategories) {
    totalCount++;
    const categoryPath = path.join(categoryDir, `${category}.html`);

    if (fileExists(categoryPath)) {
      // Check if category has any articles
      const categoryContent = fs.readFileSync(categoryPath, 'utf-8');
      const hasArticles = categoryContent.includes('article-card');

      if (hasArticles) {
        validCount++;
        addPass(result);
      } else {
        addFail(result);
        addIssue(
          result,
          'warning',
          'Nav Category',
          `Nav links to empty category: ${category}`,
          null,
          `Add articles to ${category} or remove from nav`
        );
      }
    } else {
      addFail(result);
      addIssue(
        result,
        'error',
        'Nav Category',
        `Nav links to non-existent category: ${category}`,
        null,
        `Create category page or remove from nav`
      );
    }
  }

  return { valid: validCount, total: totalCount };
}

/**
 * Main validation function
 */
function validate(articles, config, options = {}) {
  const result = createResult();
  const buildDir = config.outputDir;

  // Default personas (from build.js)
  const personas = options.personas || {
    'agent-architect': { name: '에이전트 아키텍트' },
    'prompt-master': { name: '프롬프트 마스터' },
    'tech-analyst': { name: '기술 분석가' },
    'claude-specialist': { name: 'Claude 전문가' },
    'policy-analyst': { name: '정책 분석가' }
  };

  // Get unique categories from articles
  const categories = [...new Set(articles.map(a => a.category))];

  console.log('\n📋 Post-Build Validation');
  console.log('========================\n');

  // 1. Validate article images
  const imageResult = validateArticleImages(articles, buildDir, result);
  const imageStatus = imageResult.valid === imageResult.total ? '✅' : '❌';
  console.log(`${imageStatus} Images: ${imageResult.valid}/${imageResult.total} exist`);

  // 2. Validate avatars
  const avatarResult = validateAvatars(personas, buildDir, result);
  const avatarStatus = avatarResult.valid === avatarResult.total ? '✅' : '❌';
  console.log(`${avatarStatus} Avatars: ${avatarResult.valid}/${avatarResult.total} exist`);

  // 3. Validate placeholders
  const placeholderResult = validatePlaceholders(categories, buildDir, result);
  const placeholderStatus = placeholderResult.valid === placeholderResult.total ? '✅' : '⚠️';
  console.log(`${placeholderStatus} Placeholders: ${placeholderResult.valid}/${placeholderResult.total} exist`);

  // 4. Validate required files
  const requiredResult = validateRequiredFiles(buildDir, result);
  const requiredStatus = requiredResult.valid === requiredResult.total ? '✅' : '❌';
  console.log(`${requiredStatus} Required Files: ${requiredResult.valid}/${requiredResult.total} exist`);

  // 5. Validate article pages
  const pagesResult = validateArticlePages(articles, buildDir, result);
  const pagesStatus = pagesResult.valid === pagesResult.total ? '✅' : '❌';
  console.log(`${pagesStatus} Article Pages: ${pagesResult.valid}/${pagesResult.total} generated`);

  // 6. Validate nav categories
  const navResult = validateNavCategories(buildDir, result);
  const navStatus = navResult.valid === navResult.total ? '✅' : '⚠️';
  console.log(`${navStatus} Nav Categories: ${navResult.valid}/${navResult.total} valid`);

  // 7. Validate internal links (optional, can be slow)
  if (options.validateLinks !== false) {
    const linksResult = validateInternalLinks(articles, buildDir, result);
    if (linksResult.total > 0) {
      const linksStatus = linksResult.valid === linksResult.total ? '✅' : '⚠️';
      console.log(`${linksStatus} Internal Links: ${linksResult.valid}/${linksResult.total} valid`);
    }
  }

  // Print issues
  if (result.issues.length > 0) {
    console.log('\n⚠️  Issues Found:\n');
    result.issues.forEach(issue => {
      const icon = issue.type === 'error' ? '❌' : '⚠️';
      const fileInfo = issue.file ? ` (${issue.file})` : '';
      console.log(`  ${icon} [${issue.category}] ${issue.message}${fileInfo}`);
      if (issue.suggestion) {
        console.log(`     → ${issue.suggestion}`);
      }
    });
  }

  // Summary
  console.log('\n------------------------');
  const summaryIcon = result.passed ? '✅' : '❌';
  console.log(`${summaryIcon} Summary: ${result.summary.passed}/${result.summary.total} checks passed`);
  if (result.summary.warnings > 0) {
    console.log(`   ⚠️  ${result.summary.warnings} warning(s)`);
  }
  if (result.summary.errors > 0) {
    console.log(`   ❌ ${result.summary.errors} error(s)`);
  }

  return result;
}

module.exports = {
  validate,
  validateArticleImages,
  validateAvatars,
  validatePlaceholders,
  validateRequiredFiles,
  validateArticlePages,
  validateNavCategories,
  validateInternalLinks
};
