# AI Cosmetics Innovation Journal - Project Guidelines

## Project Overview

A complete AI-powered journal platform for cosmetics innovation, connecting Obsidian vault to Git to Web publishing pipeline.

**Repository:** https://github.com/passeth/MY-BLOG_OBSI

## Tech Stack

### Frontend (Website)
- Pure HTML5, CSS3, JavaScript (ES6+)
- No framework dependencies
- Responsive design (mobile-first)
- Markdown to HTML conversion via marked.js

### Build System
- Node.js static site generator
- Image optimization (WebP conversion)
- RSS feed generation
- Sitemap generation

### Content Management
- Markdown files with YAML frontmatter
- Git-based version control
- Obsidian for writing environment
- Claude Code skills for automation

## Directory Structure

```
MY-BLOG_OBSI/
├── content/                    # Markdown content
│   ├── ai-tools/               # AI tools & analysis
│   ├── claude-code/            # Claude Code guides
│   ├── mcp-servers/            # MCP server guides
│   ├── development-guides/     # Development tutorials
│   ├── obsidian-integration/   # Obsidian AI workflows
│   ├── tutorials/              # Step-by-step tutorials
│   └── _assets/                # Images & media
├── site/
│   ├── public/                 # Static assets (CSS, JS)
│   ├── src/
│   │   ├── utils/              # Utility modules
│   │   │   ├── frontmatter-transformer.js
│   │   │   ├── category-mapper.js
│   │   │   ├── slug-generator.js
│   │   │   ├── reading-time.js
│   │   │   └── obsidian-sync.js
│   │   ├── preprocessors/      # Content preprocessors
│   │   │   ├── obsidian-links.js
│   │   │   ├── callouts.js
│   │   │   ├── code-blocks.js
│   │   │   └── toc-generator.js
│   │   ├── postprocessors/     # HTML postprocessors
│   │   │   ├── performance.js
│   │   │   └── image-optimizer.js
│   │   ├── pages/              # HTML templates
│   │   ├── build.js            # Main build script
│   │   └── dev-server.js       # Development server
│   ├── admin/                  # Admin dashboard
│   └── build/                  # Generated output
├── .obsidian/                  # Obsidian config
├── .claude/skills/             # Claude Code skills
└── docs/
    ├── PERSONAS.md             # Journalist personas
    ├── YAML_SCHEMA.md          # Frontmatter spec
    └── WORKFLOW.md             # Content workflow
```

## Development Guidelines

### Code Style

**HTML:**
- Semantic elements (`<article>`, `<section>`, `<nav>`)
- Accessible markup (ARIA labels, alt text)
- Valid HTML5

**CSS:**
- Mobile-first breakpoints
- CSS custom properties for theming
- BEM-like naming: `.component-name__element--modifier`

**JavaScript:**
- ES6+ features (arrow functions, destructuring, modules)
- No jQuery or heavy libraries
- Vanilla JS only

### Commit Messages

Format: `type(scope): description`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `content`: New article/content

Examples:
```
feat(site): add article pagination
fix(admin): resolve visibility toggle bug
docs(yaml): update schema examples
content(dev): add AI formulation article
```

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `content/*` - New articles

## Content Creation Workflow

### 1. Writing in Obsidian

1. Open Obsidian vault (`/obsidian/` folder)
2. Use template: `template-article.md`
3. Fill in YAML frontmatter
4. Write content in Markdown
5. Save to appropriate category folder

### 2. Image Management

1. Add images to `/content/_assets/images/`
2. Use WebP format when possible
3. Naming: `{date}-{slug}-{number}.webp`
4. Reference in markdown: `![Alt text](/assets/images/filename.webp)`

### 3. Publishing

1. Validate YAML with `yaml-validator` skill
2. Run `article-publisher` skill
3. Commit and push to Git
4. Site auto-rebuilds

## Build Process

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Build Pipeline

The build system (`site/src/build.js`) processes content through a comprehensive pipeline:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Content Sync   │     │  Preprocessors  │     │  Postprocessors │
│  (Obsidian +    │ ──▶ │  (Transform MD) │ ──▶ │  (Optimize HTML)│
│   Local)        │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Build Steps

1. **Obsidian Sync** - Scan Obsidian vault (READ-ONLY)
2. **Local Scan** - Scan `/content/` folders for `.md` files
3. **Frontmatter Transform** - Convert Obsidian YAML → Blog format
4. **Category Mapping** - Map folder paths to categories
5. **Preprocessing**:
   - Convert `[[wiki links]]` to HTML anchors
   - Transform callouts (NOTE, TIP, WARNING, etc.)
   - Enhance code blocks with language badge + copy button
   - Generate TOC for articles with 3+ headings
6. **Markdown → HTML** - Convert via marked.js
7. **Postprocessing**:
   - Add lazy loading to images
   - Add fetchpriority to above-fold images
   - Generate alt text
8. **Generate Output**:
   - Homepage, Article pages, Category pages
   - Tag pages, Journalist pages
   - RSS feed, Sitemap
9. **Output to `/site/build/`**

### Environment Variables

```
NODE_ENV=production|development
SITE_URL=https://your-domain.com
```

## Admin Dashboard

### Features

- Article visibility toggle (draft/published)
- Featured article management
- Homepage priority ordering
- Preview before publish
- Analytics overview

### Access

Local: `http://localhost:3000/admin`
Production: `https://your-domain.com/admin`

## Claude Code Skills

### Available Skills

| Skill | Purpose |
|-------|---------|
| `journalist-writer.md` | Generate articles in persona voice |
| `image-generator.md` | Create article images via NanoBanana |
| `article-publisher.md` | Validate and publish articles |
| `yaml-validator.md` | Check frontmatter completeness |
| `seo-optimizer.md` | Optimize meta descriptions |

### Usage

In Claude Code:
```
/journalist-writer persona=dr-sarah-kim topic="AI retinol formulation"
/article-publisher path=content/development/my-article.md
```

## Troubleshooting

### Common Issues

**Build fails:**
- Check all YAML frontmatter is valid
- Ensure no missing required fields
- Verify image paths exist

**Images not loading:**
- Check path spelling
- Ensure file is in `/_assets/images/`
- Verify WebP format is supported

**Admin not saving:**
- Check file permissions
- Verify Git is configured
- Ensure no merge conflicts

### Debug Mode

Enable verbose logging:
```bash
DEBUG=true npm run build
```

## Performance Targets

- Lighthouse score: > 90
- First Contentful Paint: < 1.5s
- Build time: < 30 seconds
- Image optimization: 80% compression

## Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Manual

1. Run `npm run build`
2. Upload `/site/build/` to hosting
3. Configure domain/SSL

## Contact

**Project:** AI Cosmetics Innovation Journal
**Maintainer:** passeth
**Repository:** https://github.com/passeth/MY-BLOG_OBSI
