#!/usr/bin/env python3
"""
Generate images for 초등교원을 위한 Obsidian의 쓸모 using DALL-E 3
"""

import os
import re
import requests
import time
from pathlib import Path
from openai import OpenAI

# Configuration
OUTPUT_DIR = Path("/Users/jmacpro/Documents/Obsidian_Blog/Obsi_Blog/content/_assets/images/obsidian-teachers")
SOURCE_FILE = Path("/Users/jmacpro/Documents/Obsidian Vault/P - Projects/Obsidian4Teachers/초등교원을 위한 Obsidian의 쓸모.md")

# Character reference to prepend to prompts that need it
CHARACTER_REFERENCE = """
Character: Jihyun - Korean female elementary school teacher, early 30s
- Shoulder-length black hair, warm brown almond-shaped eyes
- Thin gold-rimmed round glasses (ALWAYS PRESENT)
- Signature outfit: Cream/beige knit cardigan over white blouse, navy A-line midi skirt
- Warm, approachable expression
- Art style: Warm semi-realistic Korean illustration (한국 감성 일러스트), NOT anime
"""

def extract_prompts(file_path: Path) -> list[dict]:
    """Extract all image prompts from the markdown file."""
    content = file_path.read_text(encoding='utf-8')

    # Find all IMAGE PROMPT blocks
    pattern = r'\[IMAGE PROMPT (\d+) - ([^\]]+)\]\s*\n\n(.*?)(?=\n```|$)'
    matches = re.findall(pattern, content, re.DOTALL)

    prompts = []
    for match in matches:
        prompt_num = int(match[0])
        title = match[1].strip()
        prompt_text = match[2].strip()

        # Clean up the prompt text - remove instruction lines
        lines = prompt_text.split('\n')
        cleaned_lines = []
        for line in lines:
            # Skip warning/instruction lines
            if line.strip().startswith('⚠️') or line.strip().startswith('CRITICAL:'):
                continue
            cleaned_lines.append(line)

        cleaned_prompt = '\n'.join(cleaned_lines)

        # Check if character reference is needed
        needs_character = 'CHARACTER REFERENCE' in prompt_text or 'Jihyun' in prompt_text

        prompts.append({
            'number': prompt_num,
            'title': title,
            'prompt': cleaned_prompt,
            'needs_character': needs_character,
            'filename': f"obsidian-teachers-{prompt_num:02d}.png"
        })

    return prompts

def simplify_prompt_for_dalle(prompt: dict) -> str:
    """Create a simplified, DALL-E friendly prompt."""
    title = prompt['title']
    original = prompt['prompt']

    # Extract key visual elements
    base_prompt = f"Korean illustration style, warm and inviting. "

    if prompt['needs_character']:
        base_prompt += CHARACTER_REFERENCE + "\n\n"

    # Simplify the prompt to focus on key visual elements
    # Remove technical specifications and keep visual descriptions
    simplified = original

    # Remove composition/camera instructions
    simplified = re.sub(r'Composition:.*?\n', '', simplified)
    simplified = re.sub(r'Camera:.*?\n', '', simplified)
    simplified = re.sub(r'16:9.*?\n?', '', simplified)

    # Keep Scene Description and key visual elements
    base_prompt += f"Title: {title}\n\n{simplified}"

    # Truncate if too long (DALL-E has a 4000 char limit)
    if len(base_prompt) > 3800:
        base_prompt = base_prompt[:3800] + "..."

    return base_prompt

def generate_image(client: OpenAI, prompt: str, filename: str, output_dir: Path) -> bool:
    """Generate a single image using DALL-E 3."""
    output_path = output_dir / filename

    if output_path.exists():
        print(f"  [SKIP] {filename} already exists")
        return True

    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1792x1024",  # Widescreen for presentation
            quality="standard",
            n=1,
        )

        image_url = response.data[0].url

        # Download the image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            output_path.write_bytes(img_response.content)
            print(f"  [OK] Generated {filename}")
            return True
        else:
            print(f"  [ERROR] Failed to download {filename}")
            return False

    except Exception as e:
        print(f"  [ERROR] {filename}: {str(e)[:100]}")
        return False

def main():
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("ERROR: OPENAI_API_KEY environment variable not set")
        return

    client = OpenAI(api_key=api_key)

    print("Extracting prompts from source file...")
    prompts = extract_prompts(SOURCE_FILE)
    print(f"Found {len(prompts)} image prompts")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    success_count = 0
    fail_count = 0

    for i, prompt_data in enumerate(prompts):
        print(f"\n[{i+1}/{len(prompts)}] Image {prompt_data['number']}: {prompt_data['title']}")

        dalle_prompt = simplify_prompt_for_dalle(prompt_data)

        if generate_image(client, dalle_prompt, prompt_data['filename'], OUTPUT_DIR):
            success_count += 1
        else:
            fail_count += 1

        # Rate limiting - wait between requests
        if i < len(prompts) - 1:
            time.sleep(2)

    print(f"\n{'='*50}")
    print(f"Completed: {success_count} success, {fail_count} failed")
    print(f"Images saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
