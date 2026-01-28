#!/usr/bin/env python3
"""
Batch generate images for Obsidian Teachers article using original prompts.
Extracts IMAGE PROMPT blocks from source markdown and generates via Aurora API.

Usage:
    source ~/.xai_credentials
    source site/scripts/.venv/bin/activate
    python site/scripts/batch-obsidian-images.py
"""

import os
import sys
import re
import json
import time
import requests
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    print("Error: openai not installed. Run: pip install openai", file=sys.stderr)
    sys.exit(1)

# Source document path
SOURCE_MD = "/Users/jmacpro/Documents/Obsidian Vault/P - Projects/Obsidian4Teachers/초등교원을 위한 Obsidian의 쓸모.md"
OUTPUT_DIR = "content/_assets/images/obsidian-teachers"

# Text rendering instruction - Aurora can't render Korean text reliably
NO_TEXT_INSTRUCTION = """

CRITICAL RENDERING RULE:
- Do NOT include any readable text, labels, Korean characters, or words in the image.
- Where the prompt mentions labels or text (like folder names, signs, etc.), represent them as blurred, abstract, or symbolic elements instead.
- All text elements should be represented as abstract glowing shapes or symbols, never as readable characters.
- Focus on the visual composition, characters, and mood rather than text elements.
"""


def extract_prompts(filepath):
    """Extract all IMAGE PROMPT blocks from the markdown file."""
    content = Path(filepath).read_text(encoding='utf-8')

    # Extract character reference
    char_ref_match = re.search(r'\[CHARACTER REFERENCE.*?\]\n\n(.*?)```', content, re.DOTALL)
    char_reference = char_ref_match.group(1).strip() if char_ref_match else ""

    # Extract all IMAGE PROMPT blocks
    prompts = {}
    pattern = r'\[IMAGE PROMPT (\d+) - ([^\]]+)\]\n\n(.*?)```'
    matches = re.finditer(pattern, content, re.DOTALL)

    for match in matches:
        num = int(match.group(1))
        title = match.group(2).strip()
        prompt_text = match.group(3).strip()

        # Check if this prompt should include character reference
        needs_character = "INCLUDE CHARACTER REFERENCE" in prompt_text or "캐릭터 레퍼런스" in prompt_text

        # Clean the prompt - remove the character reference instruction line
        prompt_text = re.sub(r'⚠️ INCLUDE CHARACTER REFERENCE.*?\n\n?', '', prompt_text)

        # Build final prompt
        if needs_character and char_reference:
            full_prompt = f"{char_reference}\n\n{prompt_text}{NO_TEXT_INSTRUCTION}"
        else:
            full_prompt = f"{prompt_text}{NO_TEXT_INSTRUCTION}"

        prompts[num] = {
            "title": title,
            "prompt": full_prompt,
            "needs_character": needs_character
        }

    return prompts, char_reference


def condense_prompt(client, detailed_prompt, title):
    """Use Grok-3 to condense a detailed prompt to under 1000 chars for Aurora."""
    system_msg = """You are an expert image prompt engineer. Condense the detailed scene description into a single, vivid image generation prompt under 900 characters.

Rules:
- Keep the character description (Jihyun: Korean female teacher, early 30s, gold-rimmed round glasses, cream cardigan, shoulder-length black hair)
- Keep the scene composition and mood
- Keep the art style: Warm semi-realistic Korean illustration (한국 감성 일러스트), NOT anime
- Do NOT include any readable text, Korean labels, or words in the image description
- Replace any text/label references with abstract glowing shapes
- Output ONLY the condensed prompt, nothing else"""

    try:
        response = client.chat.completions.create(
            model="grok-3",
            messages=[
                {"role": "system", "content": system_msg},
                {"role": "user", "content": f"Title: {title}\n\n{detailed_prompt}"}
            ],
            max_tokens=400
        )
        condensed = response.choices[0].message.content.strip()
        print(f"  Prompt condensed: {len(detailed_prompt)} -> {len(condensed)} chars")
        return condensed
    except Exception as e:
        print(f"  WARNING: Condensation failed ({e}), using truncated prompt")
        return detailed_prompt[:900]


def generate_image(client, prompt, output_path, num, title):
    """Generate a single image using Grok-3 (condense) + Aurora (generate)."""
    print(f"\n{'='*60}")
    print(f"Image {num:02d}: {title}")
    print(f"{'='*60}")

    # Step 1: Condense prompt if too long
    if len(prompt) > 950:
        prompt = condense_prompt(client, prompt, title)

    try:
        response = client.images.generate(
            model="grok-2-image-1212",
            prompt=prompt,
            n=1,
            response_format="url"
        )

        if response.data and len(response.data) > 0:
            image_url = response.data[0].url

            # Download image
            img_response = requests.get(image_url, timeout=60)
            img_response.raise_for_status()

            # Save
            output_path = Path(output_path)
            output_path.parent.mkdir(parents=True, exist_ok=True)

            with open(output_path, 'wb') as f:
                f.write(img_response.content)

            size_kb = len(img_response.content) / 1024
            print(f"  Saved: {output_path} ({size_kb:.0f}KB)")
            return True
        else:
            print(f"  ERROR: No image generated")
            return False

    except Exception as e:
        print(f"  ERROR: {e}")
        return False


def main():
    # Check API key
    api_key = os.getenv("XAI_API_KEY")
    if not api_key:
        print("ERROR: XAI_API_KEY not set")
        print("Run: source ~/.xai_credentials")
        sys.exit(1)

    # Check source file
    if not Path(SOURCE_MD).exists():
        print(f"ERROR: Source file not found: {SOURCE_MD}")
        sys.exit(1)

    # Extract prompts
    print("Extracting prompts from source document...")
    prompts, char_ref = extract_prompts(SOURCE_MD)
    print(f"Found {len(prompts)} image prompts")
    print(f"Character reference: {'Yes' if char_ref else 'No'} ({len(char_ref)} chars)")

    # Initialize client
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.x.ai/v1"
    )

    # Generate images
    results = {"success": 0, "failed": 0, "errors": []}

    for num in sorted(prompts.keys()):
        info = prompts[num]
        output_path = f"{OUTPUT_DIR}/obsidian-teachers-{num:02d}.jpg"

        success = generate_image(client, info["prompt"], output_path, num, info["title"])

        if success:
            results["success"] += 1
        else:
            results["failed"] += 1
            results["errors"].append(f"Image {num:02d}: {info['title']}")

        # Rate limit: wait between requests
        time.sleep(2)

    # Summary
    print(f"\n{'='*60}")
    print(f"GENERATION COMPLETE")
    print(f"{'='*60}")
    print(f"  Success: {results['success']}/{len(prompts)}")
    print(f"  Failed:  {results['failed']}/{len(prompts)}")

    if results["errors"]:
        print(f"\nFailed images:")
        for err in results["errors"]:
            print(f"  - {err}")

    return 0 if results["failed"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
