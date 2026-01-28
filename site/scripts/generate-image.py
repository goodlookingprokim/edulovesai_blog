#!/usr/bin/env python3
"""
Grok Aurora Image Generator for Blog Articles

Uses xAI APIs to generate high-quality article images:
1. Grok 4.1 Fast - Analyzes article content and creates optimized image prompts
2. Aurora (grok-2-image-1212) - Generates the actual images

Usage:
    python generate-image.py --title "Article Title" --excerpt "Brief summary" --category "claude-code"
    python generate-image.py --article path/to/article.md --style hero
    python generate-image.py --prompt "Custom prompt" --output custom-image.jpg

Requires: XAI_API_KEY environment variable

Author: AI Cosmetics Innovation Journal
Version: 1.0.0
"""

import os
import sys
import json
import argparse
import base64
import re
from pathlib import Path
from typing import Optional, Dict, Any
from datetime import datetime
import requests

# Check for xai_sdk
try:
    from xai_sdk import Client
except ImportError:
    print("Error: xai-sdk not installed. Run: pip install xai-sdk", file=sys.stderr)
    sys.exit(1)

# Check for OpenAI SDK (used for Aurora image generation)
try:
    from openai import OpenAI
except ImportError:
    print("Error: openai not installed. Run: pip install openai", file=sys.stderr)
    sys.exit(1)


# Image style presets
STYLE_PRESETS = {
    "hero": {
        "size": "1792x1024",  # Landscape 16:9
        "style_hint": "Professional, eye-catching header image for blog article",
        "elements": "Cinematic lighting, high contrast, magazine-quality composition"
    },
    "thumbnail": {
        "size": "1024x1024",  # Square
        "style_hint": "Clean, recognizable thumbnail",
        "elements": "Simple composition, bold visual, clear focal point"
    },
    "section": {
        "size": "1024x1024",
        "style_hint": "Supporting content illustration",
        "elements": "Informative, relates to specific content point"
    },
    "diagram": {
        "size": "1024x1024",
        "style_hint": "Technical or explanatory illustration",
        "elements": "Clean lines, educational, infographic-style"
    }
}

# Category style mappings
CATEGORY_STYLES = {
    "claude-code": {
        "mood": "Modern, tech-forward, professional",
        "palette": "Deep blues, purples, clean whites",
        "elements": "Code elements, AI visualization, futuristic interfaces"
    },
    "ai-tools": {
        "mood": "Innovative, powerful, dynamic",
        "palette": "Electric blues, vibrant accents, dark backgrounds",
        "elements": "AI symbols, neural networks, digital transformation"
    },
    "mcp-servers": {
        "mood": "Technical, connected, systematic",
        "palette": "Cool grays, bright accents, minimal",
        "elements": "Server architecture, data flows, network nodes"
    },
    "tutorials": {
        "mood": "Approachable, educational, clear",
        "palette": "Warm tones, inviting colors",
        "elements": "Step-by-step visuals, learning symbols"
    },
    "development-guides": {
        "mood": "Professional, structured, comprehensive",
        "palette": "Clean blues, professional tones",
        "elements": "Code, architecture, development workflow"
    },
    "obsidian-integration": {
        "mood": "Organized, powerful, elegant",
        "palette": "Deep purples, dark mode aesthetics",
        "elements": "Notes, connections, knowledge graphs"
    },
    "default": {
        "mood": "Modern, professional, innovative",
        "palette": "Clean, versatile colors",
        "elements": "Technology, AI, innovation themes"
    }
}


def get_api_key() -> str:
    """Get XAI API key from environment."""
    api_key = os.getenv("XAI_API_KEY")
    if not api_key:
        print("Error: XAI_API_KEY environment variable not set", file=sys.stderr)
        print("Set it with: export XAI_API_KEY='your-api-key'", file=sys.stderr)
        sys.exit(1)
    return api_key


def extract_frontmatter(markdown_content: str) -> Dict[str, Any]:
    """Extract YAML frontmatter from markdown file."""
    frontmatter = {}

    # Match YAML frontmatter between --- markers
    pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(pattern, markdown_content, re.DOTALL)

    if match:
        yaml_content = match.group(1)
        # Simple YAML parsing (key: value)
        for line in yaml_content.split('\n'):
            if ':' in line:
                key, _, value = line.partition(':')
                key = key.strip()
                value = value.strip().strip('"').strip("'")
                if value:
                    frontmatter[key] = value

    return frontmatter


def read_article(article_path: str) -> Dict[str, Any]:
    """Read article and extract metadata."""
    path = Path(article_path)
    if not path.exists():
        raise FileNotFoundError(f"Article not found: {article_path}")

    content = path.read_text(encoding='utf-8')
    frontmatter = extract_frontmatter(content)

    # Extract main content (remove frontmatter)
    content_without_fm = re.sub(r'^---\s*\n.*?\n---\s*\n', '', content, flags=re.DOTALL)

    # Get first few paragraphs as excerpt if not in frontmatter
    if 'excerpt' not in frontmatter:
        paragraphs = [p.strip() for p in content_without_fm.split('\n\n') if p.strip() and not p.startswith('#')]
        frontmatter['excerpt'] = ' '.join(paragraphs[:2])[:500]

    # Extract category from path if not in frontmatter
    if 'category' not in frontmatter:
        # Try to get from path: content/category-name/article.md
        parts = path.parts
        if 'content' in parts:
            idx = parts.index('content')
            if idx + 1 < len(parts) - 1:
                frontmatter['category'] = parts[idx + 1]

    return frontmatter


def generate_image_prompt(
    title: str,
    excerpt: str,
    category: str = "default",
    style: str = "hero",
    api_key: Optional[str] = None
) -> str:
    """Use Grok 4.1 Fast to generate an optimized image prompt."""

    api_key = api_key or get_api_key()

    # Get style and category settings
    style_preset = STYLE_PRESETS.get(style, STYLE_PRESETS["hero"])
    category_style = CATEGORY_STYLES.get(category, CATEGORY_STYLES["default"])

    # Build the meta-prompt for Grok
    system_prompt = """You are an expert image prompt engineer specializing in creating prompts for AI image generation.
Your task is to create a single, detailed image prompt based on the article information provided.

Guidelines:
- Create visually striking, professional imagery suitable for a tech blog
- Focus on abstract, conceptual representations rather than literal interpretations
- Avoid text, logos, or watermarks in the image
- Emphasize mood, lighting, and composition
- Keep the prompt concise but detailed (100-150 words)
- Do NOT include any explanations - output ONLY the image prompt itself"""

    user_prompt = f"""Create an image prompt for this blog article:

Title: {title}
Summary: {excerpt}
Category: {category}

Image Style: {style_preset['style_hint']}
Visual Elements: {style_preset['elements']}
Mood: {category_style['mood']}
Color Palette: {category_style['palette']}
Thematic Elements: {category_style['elements']}

Output ONLY the image generation prompt, nothing else."""

    try:
        client = Client(api_key=api_key)

        response = client.chat.create(
            model="grok-4-1-fast-reasoning",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ]
        )

        if hasattr(response, 'choices') and response.choices:
            return response.choices[0].message.content.strip()
        else:
            raise Exception("No response from Grok API")

    except Exception as e:
        print(f"Warning: Grok prompt generation failed: {e}", file=sys.stderr)
        # Fallback to basic prompt
        return f"Professional {style} image for tech blog article about {title}. {category_style['mood']}. {style_preset['elements']}. No text."


def generate_image(
    prompt: str,
    output_path: str,
    size: str = "1792x1024",
    api_key: Optional[str] = None
) -> str:
    """Generate image using Aurora (grok-2-image-1212) API."""

    api_key = api_key or get_api_key()

    # Use OpenAI-compatible API for Aurora
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.x.ai/v1"
    )

    print(f"Generating image with Aurora...")
    print(f"Prompt: {prompt[:100]}...")

    try:
        response = client.images.generate(
            model="grok-2-image-1212",
            prompt=prompt,
            n=1,
            size=size,
            response_format="url"  # or "b64_json"
        )

        if response.data and len(response.data) > 0:
            image_url = response.data[0].url

            # Download and save the image
            img_response = requests.get(image_url, timeout=60)
            img_response.raise_for_status()

            # Ensure output directory exists
            output_path = Path(output_path)
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # Save the image
            with open(output_path, 'wb') as f:
                f.write(img_response.content)

            print(f"Image saved to: {output_path}")
            return str(output_path)
        else:
            raise Exception("No image generated")

    except Exception as e:
        print(f"Error generating image: {e}", file=sys.stderr)
        raise


def generate_article_image(
    title: str = None,
    excerpt: str = None,
    category: str = "default",
    style: str = "hero",
    output: str = None,
    article_path: str = None,
    custom_prompt: str = None,
    api_key: str = None
) -> Dict[str, Any]:
    """
    Main function to generate an article image.

    Args:
        title: Article title
        excerpt: Article summary/excerpt
        category: Article category for style matching
        style: Image style (hero, thumbnail, section, diagram)
        output: Output file path
        article_path: Path to article markdown file (alternative to title/excerpt)
        custom_prompt: Custom image prompt (skips Grok prompt generation)
        api_key: XAI API key (optional, uses env var if not provided)

    Returns:
        Dict with generated image info
    """
    api_key = api_key or get_api_key()

    # If article path provided, extract info from it
    if article_path:
        article_data = read_article(article_path)
        title = title or article_data.get('title', 'Untitled Article')
        excerpt = excerpt or article_data.get('excerpt', '')
        category = category or article_data.get('category', 'default')

    if not title and not custom_prompt:
        raise ValueError("Either --title or --article or --prompt must be provided")

    # Generate image prompt (unless custom prompt provided)
    if custom_prompt:
        image_prompt = custom_prompt
    else:
        print(f"Generating image prompt for: {title}")
        image_prompt = generate_image_prompt(title, excerpt or '', category, style, api_key)

    print(f"\nGenerated prompt:\n{image_prompt}\n")

    # Determine output path
    if not output:
        # Generate default output path
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        date = datetime.now().strftime('%Y-%m-%d')
        output = f"content/_assets/images/{date}-{slug}-{style}.jpg"

    # Get size from style preset
    style_preset = STYLE_PRESETS.get(style, STYLE_PRESETS["hero"])
    size = style_preset["size"]

    # Generate the image
    saved_path = generate_image(image_prompt, output, size, api_key)

    return {
        "success": True,
        "title": title,
        "prompt": image_prompt,
        "output_path": saved_path,
        "style": style,
        "size": size
    }


def main():
    parser = argparse.ArgumentParser(
        description="Generate blog article images using Grok Aurora API",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Generate hero image from title and excerpt
  python generate-image.py --title "Claude Code Guide" --excerpt "Complete tutorial" --category "claude-code"

  # Generate from article file
  python generate-image.py --article content/claude-code/my-article.md --style hero

  # Use custom prompt directly
  python generate-image.py --prompt "Futuristic AI workspace" --output custom.jpg

  # Generate thumbnail
  python generate-image.py --title "Quick Tips" --style thumbnail
        """
    )

    # Input options (mutually supportive)
    parser.add_argument("--title", "-t", help="Article title")
    parser.add_argument("--excerpt", "-e", help="Article summary/excerpt")
    parser.add_argument("--category", "-c", default="default",
                        help="Article category (claude-code, ai-tools, mcp-servers, tutorials, etc.)")
    parser.add_argument("--article", "-a", help="Path to article markdown file")
    parser.add_argument("--prompt", "-p", help="Custom image prompt (skips Grok generation)")

    # Output options
    parser.add_argument("--output", "-o", help="Output file path")
    parser.add_argument("--style", "-s", default="hero",
                        choices=["hero", "thumbnail", "section", "diagram"],
                        help="Image style preset (default: hero)")

    # Additional options
    parser.add_argument("--json", action="store_true", help="Output result as JSON")
    parser.add_argument("--dry-run", action="store_true",
                        help="Only generate prompt, don't create image")

    args = parser.parse_args()

    # Validate inputs
    if not args.title and not args.article and not args.prompt:
        parser.error("At least one of --title, --article, or --prompt is required")

    try:
        if args.dry_run:
            # Only generate prompt
            if args.prompt:
                print(f"Custom prompt: {args.prompt}")
            else:
                if args.article:
                    article_data = read_article(args.article)
                    title = args.title or article_data.get('title', 'Untitled')
                    excerpt = args.excerpt or article_data.get('excerpt', '')
                    category = args.category or article_data.get('category', 'default')
                else:
                    title = args.title
                    excerpt = args.excerpt or ''
                    category = args.category

                prompt = generate_image_prompt(title, excerpt, category, args.style)
                print(f"Generated prompt:\n{prompt}")
            return

        # Generate image
        result = generate_article_image(
            title=args.title,
            excerpt=args.excerpt,
            category=args.category,
            style=args.style,
            output=args.output,
            article_path=args.article,
            custom_prompt=args.prompt
        )

        if args.json:
            print(json.dumps(result, indent=2))
        else:
            print(f"\nImage generated successfully!")
            print(f"  Path: {result['output_path']}")
            print(f"  Style: {result['style']}")
            print(f"  Size: {result['size']}")

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
