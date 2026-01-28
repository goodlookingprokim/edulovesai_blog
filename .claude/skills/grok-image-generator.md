# Grok Aurora Image Generator Skill

Generate high-quality article images using xAI Grok Aurora API.

## Trigger

When user needs to generate images for blog articles, or mentions "grok image", "aurora image", "generate article image".

## Usage

```
/grok-image "Article Title" --style hero
/grok-image --article content/claude-code/my-article.md
/grok-image --prompt "Custom image description"
```

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| title | Yes* | - | Article title for prompt generation |
| excerpt | No | - | Article summary for better prompts |
| category | No | default | Category for style matching |
| style | No | hero | Image style preset |
| article | Yes* | - | Path to article markdown file |
| prompt | Yes* | - | Custom image prompt (skips AI generation) |
| output | No | auto | Output file path |

*One of title, article, or prompt is required.

## Image Styles

### Hero (Default)
- **Size**: 1792x1024 (landscape 16:9)
- **Use**: Primary article header image
- **Style**: Professional, eye-catching, magazine-quality

### Thumbnail
- **Size**: 1024x1024 (square)
- **Use**: Article cards, social sharing
- **Style**: Clean, recognizable, bold focal point

### Section
- **Size**: 1024x1024
- **Use**: Supporting content illustrations
- **Style**: Informative, relates to specific content

### Diagram
- **Size**: 1024x1024
- **Use**: Technical or explanatory illustrations
- **Style**: Clean lines, infographic-style

## Category Styles

The generator automatically adjusts style based on article category:

| Category | Mood | Elements |
|----------|------|----------|
| claude-code | Modern, tech-forward | Code elements, AI visualization |
| ai-tools | Innovative, dynamic | Neural networks, digital transformation |
| mcp-servers | Technical, systematic | Server architecture, data flows |
| tutorials | Approachable, educational | Step-by-step visuals |
| development-guides | Professional, structured | Code, architecture |
| obsidian-integration | Organized, elegant | Notes, knowledge graphs |

## Workflow

### Step 1: Verify API Key
```bash
# Check if XAI_API_KEY is set
echo $XAI_API_KEY
```

### Step 2: Generate Image

**Option A: From article metadata**
```bash
python site/scripts/generate-image.py \
  --article "content/claude-code/my-article.md" \
  --style hero
```

**Option B: From title and excerpt**
```bash
python site/scripts/generate-image.py \
  --title "Claude Code Complete Guide" \
  --excerpt "Everything you need to know about Claude Code" \
  --category "claude-code" \
  --style hero
```

**Option C: Custom prompt**
```bash
python site/scripts/generate-image.py \
  --prompt "Futuristic AI workspace with holographic displays" \
  --output "content/_assets/images/custom-hero.jpg"
```

### Step 3: Verify Output
```bash
# Check generated image
ls -la content/_assets/images/*.jpg | tail -5
```

### Step 4: Update Article Frontmatter
Add `featured_image` to article:
```yaml
---
title: "My Article"
featured_image: /assets/images/2025-01-28-my-article-hero.jpg
---
```

## Dry Run Mode

Generate prompt without creating image:
```bash
python site/scripts/generate-image.py \
  --title "Test Article" \
  --category "ai-tools" \
  --dry-run
```

## Output Format

Images are saved as JPEG to:
```
content/_assets/images/{date}-{slug}-{style}.jpg

Example:
content/_assets/images/2025-01-28-claude-code-guide-hero.jpg
```

## Error Handling

| Error | Solution |
|-------|----------|
| XAI_API_KEY not set | `export XAI_API_KEY='your-key'` |
| xai-sdk not installed | `pip install -r site/scripts/requirements.txt` |
| Rate limit exceeded | Wait and retry, or reduce request frequency |
| Image generation failed | Check prompt content, try simpler description |

## Dependencies

### Virtual Environment Setup (Recommended)
```bash
cd site/scripts
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Using the Virtual Environment
```bash
# Activate before running
source site/scripts/.venv/bin/activate

# Run script
python site/scripts/generate-image.py --help

# Deactivate when done
deactivate
```

### Required Packages
- xai-sdk>=1.4.0
- openai>=1.0.0
- requests>=2.28.0

## API Information

- **Prompt Generation**: Grok 4.1 Fast (grok-4-1-fast-reasoning)
- **Image Generation**: Aurora (grok-2-image-1212)
- **Rate Limit**: 5 requests/second
- **Max Images**: 10 per request

## Examples

### Generate hero for new article
```
/grok-image "AI가 화장품 혁신을 이끄는 5가지 방법" --category ai-tools --style hero
```

### Generate thumbnail from existing article
```
/grok-image --article content/tutorials/obsidian-basics.md --style thumbnail
```

### Batch generation (multiple articles)
```bash
for article in content/claude-code/*.md; do
  python site/scripts/generate-image.py --article "$article" --style hero
done
```

## Integration with Build System

The generated images work seamlessly with the existing build pipeline:
1. Images saved to `content/_assets/images/`
2. Build process copies to `site/build/assets/images/`
3. Articles reference via `/assets/images/filename.jpg`

## Tips

1. **Better Prompts**: Include specific visual elements from article content
2. **Consistency**: Use same category for related articles
3. **Preview**: Use `--dry-run` to preview prompt before generating
4. **Batch Processing**: Use shell scripts for multiple articles
5. **Storage**: JPEGs are ~100-300KB, manageable for Git
