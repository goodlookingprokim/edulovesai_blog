/**
 * AI & Development Journal - Static Site Generator
 * Converts markdown content to static HTML website
 *
 * Features:
 * - Obsidian vault integration (READ-ONLY)
 * - Frontmatter transformation
 * - Obsidian links, callouts, code blocks preprocessing
 * - TOC generation
 * - Performance optimizations
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Utility modules
const frontmatterTransformer = require('./utils/frontmatter-transformer');
const categoryMapper = require('./utils/category-mapper');
const slugGenerator = require('./utils/slug-generator');
const readingTime = require('./utils/reading-time');
const obsidianSync = require('./utils/obsidian-sync');

// Preprocessors
const obsidianLinks = require('./preprocessors/obsidian-links');
const callouts = require('./preprocessors/callouts');
const codeBlocks = require('./preprocessors/code-blocks');
const tocGenerator = require('./preprocessors/toc-generator');

// Postprocessors
const performanceOptimizer = require('./postprocessors/performance');
const imageOptimizer = require('./postprocessors/image-optimizer');

// Validators
const postBuildValidator = require('./validators/post-build-validator');

/**
 * Security: Escape HTML special characters to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configuration
const CONFIG = {
  contentDir: path.join(__dirname, '../../content'),
  outputDir: path.join(__dirname, '../build'),
  templatesDir: path.join(__dirname, 'pages'),
  publicDir: path.join(__dirname, '../public'),
  obsidianDir: obsidianSync.OBSIDIAN_SOURCE,
  siteUrl: process.env.SITE_URL || 'https://passeth.github.io/MY-BLOG_OBSI',
  siteName: 'AI 기술 자료 저널',
  categories: [],
  enableObsidianSync: true // Toggle Obsidian integration
};

/**
 * Scan content directory for category folders
 * Excludes folders starting with '_' (e.g., _assets)
 */
function scanCategories() {
  const contentDir = CONFIG.contentDir;
  if (!fs.existsSync(contentDir)) return [];

  return fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
    .map(dirent => dirent.name);
}

// Initialize categories from folder scan
CONFIG.categories = scanCategories();

// Persona data (5 personas for AI 기술 자료)
const PERSONAS = {
  'agent-architect': {
    name: '에이전트 아키텍트',
    role: 'AI Agent Systems Designer',
    avatar: '/assets/personas/agent-architect.svg',
    bio: 'AI 에이전트 시스템 설계와 디자인 패턴을 전문으로 다룹니다.'
  },
  'prompt-master': {
    name: '프롬프트 마스터',
    role: 'Prompt Engineering Specialist',
    avatar: '/assets/personas/prompt-master.svg',
    bio: '효과적인 프롬프트 작성 기법과 엔지니어링 전략을 연구합니다.'
  },
  'tech-analyst': {
    name: '기술 분석가',
    role: 'AI Tools Analyst',
    avatar: '/assets/personas/tech-analyst.svg',
    bio: 'AI 도구와 LLM 활용에 대한 심층 분석을 제공합니다.'
  },
  'claude-specialist': {
    name: 'Claude 전문가',
    role: 'Claude Code Specialist',
    avatar: '/assets/personas/claude-specialist.svg',
    bio: 'Claude Code와 Skills 개발에 대한 전문 가이드를 제공합니다.'
  },
  'policy-analyst': {
    name: '정책 분석가',
    role: 'Education Policy Analyst',
    avatar: '/assets/personas/policy-analyst.svg',
    bio: 'AI 인재 양성 및 교육 정책에 대한 분석을 담당합니다.'
  }
};

// Category metadata
const CATEGORIES = categoryMapper.getAllCategories();

// Default colors for auto-discovered categories
const DEFAULT_COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#14b8a6', '#f97316'];

/**
 * Get category metadata (returns defaults for unknown categories)
 */
function getCategoryMeta(categorySlug) {
  if (CATEGORIES[categorySlug]) {
    return CATEGORIES[categorySlug];
  }
  const colorIndex = CONFIG.categories.indexOf(categorySlug) % DEFAULT_COLORS.length;
  return {
    name: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1).replace(/-/g, ' '),
    description: `Articles about ${categorySlug.replace(/-/g, ' ')}`,
    color: DEFAULT_COLORS[colorIndex]
  };
}

/**
 * Convert Obsidian-style image links to HTML
 */
function convertObsidianImages(markdown) {
  return markdown.replace(/!\[\[@?([^\]]+\.(jpg|jpeg|png|gif|webp|svg))\]\]/gi, (match, filepath) => {
    const filename = filepath.split('/').pop();
    const altText = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    return `<img src="/assets/images/${filename}" alt="${altText}" class="article-image">`;
  });
}

/**
 * Apply preprocessing pipeline to markdown content
 * @param {string} markdown - Raw markdown
 * @param {Map} articleMap - Map of title -> slug for internal links
 * @returns {object} { markdown, toc, headings }
 */
function preprocessContent(markdown, articleMap = new Map()) {
  if (!markdown) return { markdown: '', toc: '', headings: [] };

  let processed = markdown;

  // 1. Convert Obsidian images
  processed = convertObsidianImages(processed);

  // 2. Process Obsidian wiki links
  processed = obsidianLinks.process(processed, articleMap);

  // 3. Process callouts
  processed = callouts.process(processed);

  // 4. Process code blocks (before marked.js)
  processed = codeBlocks.process(processed);

  // 5. Generate TOC
  const tocResult = tocGenerator.generate(processed, {
    minHeadings: 3,
    maxDepth: 3,
    title: '목차'
  });

  return {
    markdown: tocResult.content,
    toc: tocResult.toc,
    headings: tocResult.headings || []
  };
}

/**
 * Apply postprocessing pipeline to HTML content
 * @param {string} html - HTML content
 * @param {Array} headings - Extracted headings for ID injection
 * @returns {string} Optimized HTML
 */
function postprocessContent(html, headings = []) {
  if (!html) return '';

  let processed = html;

  // 1. Add heading IDs for TOC anchors
  processed = tocGenerator.addIdsToHtml(processed, headings);

  // 2. Optimize images (lazy loading, fetchpriority)
  processed = imageOptimizer.optimize(processed, {
    aboveFoldCount: 3,
    generateAlt: true
  });

  // 3. Apply performance optimizations
  processed = performanceOptimizer.lazyLoadImages(processed, 3);

  return processed;
}

/**
 * Validate article frontmatter has required fields
 */
function validateFrontmatter(frontmatter, filePath) {
  const requiredFields = ['title', 'slug', 'date'];
  const missingFields = requiredFields.filter(field => !frontmatter[field]);

  if (missingFields.length > 0) {
    console.warn(`Warning: ${filePath} is missing required fields: ${missingFields.join(', ')}`);
    return false;
  }

  return true;
}

/**
 * Get articles from Obsidian vault
 * READ-ONLY - never writes to Obsidian directory
 */
function getObsidianArticles() {
  if (!CONFIG.enableObsidianSync || !obsidianSync.isAvailable()) {
    console.log('Obsidian sync disabled or vault not available');
    return [];
  }

  console.log(`\nSyncing from Obsidian: ${CONFIG.obsidianDir}`);
  const obsidianFiles = obsidianSync.getAllArticles();
  console.log(`Found ${obsidianFiles.length} Obsidian files`);

  const articles = [];

  // Reset slug generator for fresh build
  slugGenerator.reset();

  // Build article map for internal links (first pass)
  const articleMap = new Map();
  for (const file of obsidianFiles) {
    if (file.frontmatter?.title) {
      const slug = slugGenerator.preview(file.frontmatter.title);
      articleMap.set(file.frontmatter.title, slug);
    }
  }

  // Process each file
  for (const file of obsidianFiles) {
    try {
      // Transform frontmatter (pass filename for title fallback)
      const transformedFm = frontmatterTransformer.transform(
        file.frontmatter,
        file.markdown,
        file.folderPath,
        file.filename
      );

      // Skip drafts
      if (transformedFm.status !== 'published') {
        continue;
      }

      // Preprocess content
      const preprocessed = preprocessContent(file.markdown, articleMap);

      // Convert to HTML
      let html = marked(preprocessed.markdown);

      // Restore code blocks (placeholders -> actual HTML)
      html = codeBlocks.restore(html);

      // Postprocess HTML
      const finalHtml = postprocessContent(html, preprocessed.headings);

      articles.push({
        ...transformedFm,
        content: finalHtml,
        toc: preprocessed.toc,
        markdown: preprocessed.markdown,
        rawContent: file.markdown,
        filePath: file.filePath,
        persona: PERSONAS[transformedFm.journalist] || PERSONAS['tech-expert'],
        source: 'obsidian'
      });
    } catch (err) {
      console.error(`Error processing Obsidian file ${file.filePath}:`, err.message);
    }
  }

  return articles;
}

/**
 * Get articles from local content directory
 */
function getLocalArticles() {
  const articles = [];

  // Reset slug generator
  slugGenerator.reset();

  for (const category of CONFIG.categories) {
    const categoryDir = path.join(CONFIG.contentDir, category);

    if (!fs.existsSync(categoryDir)) {
      try {
        fs.mkdirSync(categoryDir, { recursive: true });
      } catch (err) {
        console.error(`Error creating directory ${categoryDir}:`, err.message);
      }
      continue;
    }

    let files;
    try {
      files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));
    } catch (err) {
      console.error(`Error reading directory ${categoryDir}:`, err.message);
      continue;
    }

    for (const file of files) {
      const filePath = path.join(categoryDir, file);

      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter, content: markdown } = matter(content);

        if (!validateFrontmatter(frontmatter, filePath)) {
          continue;
        }

        if (frontmatter.status === 'published') {
          // Preprocess content
          const preprocessed = preprocessContent(markdown);

          // Convert to HTML
          let html = marked(preprocessed.markdown);

          // Restore code blocks (placeholders -> actual HTML)
          html = codeBlocks.restore(html);

          // Postprocess HTML
          const finalHtml = postprocessContent(html, preprocessed.headings);

          articles.push({
            ...frontmatter,
            content: finalHtml,
            toc: preprocessed.toc,
            markdown: preprocessed.markdown,
            rawContent: markdown,
            filePath,
            category,
            persona: PERSONAS[frontmatter.journalist] || PERSONAS['tech-expert'],
            source: 'local'
          });
        }
      } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
      }
    }
  }

  return articles;
}

/**
 * Read all articles from both sources
 */
function getArticles() {
  // Get articles from Obsidian (priority)
  const obsidianArticles = getObsidianArticles();

  // Get articles from local content
  const localArticles = getLocalArticles();

  // Combine (Obsidian articles take priority for duplicates)
  const slugSet = new Set(obsidianArticles.map(a => a.slug));
  const uniqueLocalArticles = localArticles.filter(a => !slugSet.has(a.slug));

  const allArticles = [...obsidianArticles, ...uniqueLocalArticles];

  console.log(`Total: ${allArticles.length} articles (${obsidianArticles.length} from Obsidian, ${uniqueLocalArticles.length} from local)`);

  // Sort by date (newest first), then by priority
  allArticles.sort((articleA, articleB) => {
    if (articleA.featured && !articleB.featured) return -1;
    if (!articleA.featured && articleB.featured) return 1;
    if (articleA.homepage_priority !== articleB.homepage_priority) {
      return (articleA.homepage_priority || 5) - (articleB.homepage_priority || 5);
    }
    return new Date(articleB.date) - new Date(articleA.date);
  });

  return allArticles;
}

// Template variables that contain pre-rendered safe HTML
const SAFE_TEMPLATE_VARS = new Set([
  'content', 'featured', 'articles', 'categories', 'tags',
  'related', 'recentPosts', 'toc'
]);

/**
 * Generate HTML from template
 */
function renderTemplate(templateName, data) {
  const templatePath = path.join(CONFIG.templatesDir, `${templateName}.html`);

  if (!fs.existsSync(templatePath)) {
    console.warn(`Template not found: ${templateName}`);
    return '';
  }

  let html = fs.readFileSync(templatePath, 'utf-8');

  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    const safeValue = SAFE_TEMPLATE_VARS.has(key) ? (value || '') : escapeHtml(value);
    html = html.replace(regex, safeValue);
  }

  return html;
}

/**
 * Get image path - prioritizes first image in content body
 */
function getImagePath(article) {
  // Remove code blocks and commented image lines to find actual display images
  let cleanContent = article.rawContent || '';

  // Remove fenced code blocks (```...```)
  cleanContent = cleanContent.replace(/```[\s\S]*?```/g, '');

  // Remove indented code blocks (4+ spaces at line start)
  cleanContent = cleanContent.replace(/^(?:    |\t).*$/gm, '');

  // Filter out commented lines (lines starting with # followed by space and image)
  cleanContent = cleanContent.split('\n')
    .filter(line => !line.match(/^#\s+!\[/))
    .join('\n');

  // 1. Obsidian format
  const obsidianImageMatch = cleanContent.match(/!\[\[@?(?:[^\]]*\/)?([^\]\/]+\.(jpg|jpeg|png|gif|webp))\]\]/i);
  if (obsidianImageMatch) {
    return `/assets/images/${obsidianImageMatch[1]}`;
  }

  // 2. Standard markdown format
  const markdownImageMatch = cleanContent.match(/!\[.*?\]\((?:.*\/)?([^\/\)]+\.(jpg|jpeg|png|gif|webp))\)/i);
  if (markdownImageMatch) {
    return `/assets/images/${markdownImageMatch[1]}`;
  }

  // 3. HTML img tag
  const htmlImageMatch = cleanContent.match(/<img[^>]+src=["'](?:\/assets\/images\/)?([^"'\/]+\.(jpg|jpeg|png|gif|webp))["']/i);
  if (htmlImageMatch) {
    return `/assets/images/${htmlImageMatch[1]}`;
  }

  // 4. Featured image from YAML
  if (article.featured_image) {
    if (!article.featured_image.startsWith('/') && !article.featured_image.startsWith('http')) {
      return `/assets/images/${article.featured_image}`;
    }
    return article.featured_image;
  }

  // 5. Fallback placeholder
  return `/assets/images/${article.category}-placeholder.svg`;
}

/**
 * Generate article card HTML
 */
function generateArticleCard(article, size = 'normal') {
  const categoryData = getCategoryMeta(article.category);
  const imagePath = getImagePath(article);

  let mediaHtml;
  if (article.video_url) {
    mediaHtml = `
      <div class="article-card__video">
        <iframe src="${article.video_url}"
                title="${article.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"></iframe>
        <span class="article-card__category" style="background-color: ${categoryData.color}">
          ${categoryData.name}
        </span>
      </div>`;
  } else {
    mediaHtml = `
      <div class="article-card__image">
        <img src="${imagePath}"
             alt="${article.title}"
             loading="lazy">
        <span class="article-card__category" style="background-color: ${categoryData.color}">
          ${categoryData.name}
        </span>
      </div>`;
  }

  return `
    <article class="article-card article-card--${size}${article.video_url ? ' article-card--video' : ''}">
      <a href="/articles/${article.slug}.html" class="article-card__link">
        ${mediaHtml}
        <div class="article-card__content">
          <h3 class="article-card__title">${article.title}</h3>
          <p class="article-card__excerpt">${article.excerpt || ''}</p>
          <div class="article-card__meta">
            <div class="article-card__author">
              <img src="${article.persona.avatar}" alt="${article.persona.name}" class="article-card__avatar">
              <span>${article.persona.name}</span>
            </div>
            <span class="article-card__reading-time">${article.reading_time || '5 min'}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

/**
 * Build homepage
 */
function buildHomepage(articles) {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 12);

  const featuredHtml = featuredArticles.map((a, i) =>
    generateArticleCard(a, i === 0 ? 'featured' : 'normal')
  ).join('');

  const articlesHtml = recentArticles.map(a => generateArticleCard(a)).join('');

  const categoryLinksHtml = Object.entries(CATEGORIES).map(([key, cat]) => `
    <a href="/category/${key}.html" class="category-link" style="--cat-color: ${cat.color}">
      <span class="category-link__name">${cat.name}</span>
      <span class="category-link__count">${articles.filter(a => a.category === key).length} articles</span>
    </a>
  `).join('');

  const html = renderTemplate('index', {
    siteName: CONFIG.siteName,
    featured: featuredHtml,
    articles: articlesHtml,
    categories: categoryLinksHtml,
    year: new Date().getFullYear()
  });

  const outputPath = path.join(CONFIG.outputDir, 'index.html');
  try {
    fs.writeFileSync(outputPath, html);
    console.log('Built: index.html');
  } catch (err) {
    console.error('Error writing index.html:', err.message);
  }
}

/**
 * Build individual article pages
 */
function buildArticlePages(articles) {
  const articlesDir = path.join(CONFIG.outputDir, 'articles');
  fs.mkdirSync(articlesDir, { recursive: true });

  const generateRecentPosts = (currentSlug) => {
    return articles
      .filter(a => a.slug !== currentSlug)
      .slice(0, 5)
      .map(a => `
        <a href="/articles/${a.slug}.html" class="sidebar-post">
          <div class="sidebar-post__image">
            <img src="${getImagePath(a)}" alt="${a.title}" loading="lazy">
          </div>
          <div class="sidebar-post__content">
            <h4 class="sidebar-post__title">${a.title}</h4>
            <span class="sidebar-post__author">${a.persona.name}</span>
          </div>
        </a>
      `).join('');
  };

  for (const article of articles) {
    const categoryData = getCategoryMeta(article.category);

    const related = articles
      .filter(a => a.category === article.category && a.slug !== article.slug)
      .slice(0, 3)
      .map(a => generateArticleCard(a, 'small'))
      .join('');

    const tagsHtml = (article.tags || []).map(tag =>
      `<a href="/tag/${tag}.html" class="article-tag">${tag}</a>`
    ).join('');

    const recentPostsHtml = generateRecentPosts(article.slug);

    const html = renderTemplate('article', {
      siteName: CONFIG.siteName,
      title: article.title,
      content: article.content,
      toc: article.toc || '',
      featured_image: getImagePath(article),
      category: categoryData.name,
      categorySlug: article.category,
      categoryColor: categoryData.color,
      date: formatDate(article.date),
      updated: formatDate(article.updated),
      reading_time: article.reading_time,
      authorName: article.persona.name,
      authorRole: article.persona.role,
      authorAvatar: article.persona.avatar,
      authorBio: article.persona.bio,
      authorSlug: article.journalist,
      tags: tagsHtml,
      related: related,
      recentPosts: recentPostsHtml,
      excerpt: article.excerpt,
      slug: article.slug,
      url: `${CONFIG.siteUrl}/articles/${article.slug}.html`,
      year: new Date().getFullYear()
    });

    const outputPath = path.join(articlesDir, `${article.slug}.html`);
    try {
      fs.writeFileSync(outputPath, html);
      console.log(`Built: articles/${article.slug}.html`);
    } catch (err) {
      console.error(`Error writing articles/${article.slug}.html:`, err.message);
    }
  }
}

/**
 * Build category pages
 */
function buildCategoryPages(articles) {
  const categoryDir = path.join(CONFIG.outputDir, 'category');
  fs.mkdirSync(categoryDir, { recursive: true });

  for (const [slug, category] of Object.entries(CATEGORIES)) {
    const categoryArticles = articles.filter(a => a.category === slug);
    const articlesHtml = categoryArticles.map(a => generateArticleCard(a)).join('');

    const html = renderTemplate('category', {
      siteName: CONFIG.siteName,
      categoryName: category.name,
      categoryDescription: category.description,
      categoryColor: category.color,
      categorySlug: slug,
      articleCount: categoryArticles.length,
      articles: articlesHtml,
      year: new Date().getFullYear()
    });

    const outputPath = path.join(categoryDir, `${slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`Built: category/${slug}.html`);
  }
}

/**
 * Build journalist/author pages
 */
function buildJournalistPages(articles) {
  const journalistDir = path.join(CONFIG.outputDir, 'journalist');
  fs.mkdirSync(journalistDir, { recursive: true });

  for (const [slug, persona] of Object.entries(PERSONAS)) {
    const journalistArticles = articles.filter(a => a.journalist === slug);
    const articlesHtml = journalistArticles.map(a => generateArticleCard(a)).join('');

    const html = renderTemplate('journalist', {
      siteName: CONFIG.siteName,
      journalistName: persona.name,
      journalistRole: persona.role,
      journalistAvatar: persona.avatar,
      journalistBio: persona.bio,
      journalistSlug: slug,
      articleCount: journalistArticles.length,
      articles: articlesHtml,
      year: new Date().getFullYear()
    });

    const outputPath = path.join(journalistDir, `${slug}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`Built: journalist/${slug}.html`);
  }
}

/**
 * Build tag pages
 */
function buildTagPages(articles) {
  const tagDir = path.join(CONFIG.outputDir, 'tag');
  fs.mkdirSync(tagDir, { recursive: true });

  const tagMap = new Map();
  for (const article of articles) {
    for (const tag of (article.tags || [])) {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, []);
      }
      tagMap.get(tag).push(article);
    }
  }

  for (const [tag, tagArticles] of tagMap) {
    const articlesHtml = tagArticles.map(a => generateArticleCard(a)).join('');

    const html = renderTemplate('tag', {
      siteName: CONFIG.siteName,
      tagName: tag,
      articleCount: tagArticles.length,
      articles: articlesHtml,
      year: new Date().getFullYear()
    });

    const outputPath = path.join(tagDir, `${tag}.html`);
    fs.writeFileSync(outputPath, html);
    console.log(`Built: tag/${tag}.html`);
  }
}

/**
 * Generate RSS feed
 */
function buildRssFeed(articles) {
  const items = articles.slice(0, 20).map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${CONFIG.siteUrl}/articles/${article.slug}.html</link>
      <description><![CDATA[${article.excerpt || ''}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>${CONFIG.siteUrl}/articles/${article.slug}.html</guid>
      <author>${article.persona.name}</author>
      <category>${getCategoryMeta(article.category).name}</category>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${CONFIG.siteName}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>AI 도구와 개발 기술에 대한 심층 가이드</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${CONFIG.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  fs.writeFileSync(path.join(CONFIG.outputDir, 'feed.xml'), rss);
  console.log('Built: feed.xml');
}

/**
 * Generate sitemap
 */
function buildSitemap(articles) {
  const pages = [
    { url: '/', priority: '1.0' },
    ...CONFIG.categories.map(c => ({ url: `/category/${c}.html`, priority: '0.8' })),
    ...Object.keys(PERSONAS).map(p => ({ url: `/journalist/${p}.html`, priority: '0.7' })),
    ...articles.map(a => ({ url: `/articles/${a.slug}.html`, priority: '0.9' }))
  ];

  const urls = pages.map(page => `
  <url>
    <loc>${CONFIG.siteUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(CONFIG.outputDir, 'sitemap.xml'), sitemap);
  console.log('Built: sitemap.xml');
}

/**
 * Generate search index for client-side search
 */
function buildSearchIndex(articles) {
  const searchIndex = {
    articles: articles.map(article => {
      const categoryData = getCategoryMeta(article.category);
      return {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt || '',
        category: article.category,
        categoryName: categoryData.name,
        tags: article.tags || [],
        author: article.persona?.name || '',
        date: article.date,
        url: `/articles/${article.slug}.html`
      };
    })
  };

  fs.writeFileSync(
    path.join(CONFIG.outputDir, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  );
  console.log('Built: search-index.json');
}

/**
 * Copy static assets
 */
function copyPublicAssets() {
  if (fs.existsSync(CONFIG.publicDir)) {
    copyDir(CONFIG.publicDir, CONFIG.outputDir);
    console.log('Copied: public assets');
  }

  const assetsDir = path.join(CONFIG.contentDir, '_assets');
  if (fs.existsSync(assetsDir)) {
    const destAssetsDir = path.join(CONFIG.outputDir, 'assets');
    copyDir(assetsDir, destAssetsDir);
    console.log('Copied: content assets');
  }
}

/**
 * Utility: Copy directory recursively
 */
function copyDir(src, dest) {
  try {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        try {
          fs.copyFileSync(srcPath, destPath);
        } catch (err) {
          console.error(`Error copying ${srcPath}:`, err.message);
        }
      }
    }
  } catch (err) {
    console.error(`Error copying directory ${src}:`, err.message);
  }
}

/**
 * Utility: Format date
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Main build function
 */
async function build() {
  console.log('\n>> Building AI & Development Journal...\n');

  const startTime = Date.now();

  // Create output directory
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });

  // Get all articles (from Obsidian + local)
  const articles = getArticles();
  console.log(`Found ${articles.length} published articles\n`);

  // Add imagePath to each article for validation
  articles.forEach(article => {
    article.imagePath = getImagePath(article);
  });

  // Build all pages
  buildHomepage(articles);
  buildArticlePages(articles);
  buildCategoryPages(articles);
  buildJournalistPages(articles);
  buildTagPages(articles);
  buildRssFeed(articles);
  buildSitemap(articles);
  buildSearchIndex(articles);
  copyPublicAssets();

  const buildTime = Date.now() - startTime;
  console.log(`\n>> Build complete in ${buildTime}ms`);

  // Post-build validation
  const validationResult = postBuildValidator.validate(articles, CONFIG, {
    personas: PERSONAS,
    validateLinks: true
  });

  // Exit with error code if validation failed
  if (!validationResult.passed) {
    console.log('\n⚠️  Build completed with validation errors\n');
  }
}

// Run build
build().catch(console.error);
