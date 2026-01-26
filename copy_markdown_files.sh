#!/bin/bash

# Source and destination paths
SOURCE_DIR="/Users/jmacpro/Documents/Obsidian Vault/R - Resources/AI 및 개발"
DEST_DIR="/Users/jmacpro/Documents/Obsidian_Blog/Obsi_Blog/content"

# Get current date
CURRENT_DATE=$(date +"%Y-%m-%d")

# Counters
declare -A category_counts
total_processed=0
total_skipped=0

# Function to convert filename to URL-safe slug
to_slug() {
    echo "$1" | sed 's/\.md$//' | tr ' ' '-' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9가-힣-]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Function to extract first h1 from content
extract_title() {
    local file="$1"
    local title=$(grep -m 1 "^# " "$file" | sed 's/^# //')
    if [ -z "$title" ]; then
        title=$(basename "$file" .md)
    fi
    echo "$title"
}

# Function to extract excerpt (first 150 chars of non-frontmatter content)
extract_excerpt() {
    local file="$1"
    local content=$(sed '/^---$/,/^---$/d' "$file" | grep -v '^#' | grep -v '^$' | head -5 | tr '\n' ' ')
    echo "${content:0:150}..."
}

# Function to calculate reading time
calculate_reading_time() {
    local file="$1"
    local word_count=$(wc -w < "$file")
    local minutes=$((word_count / 200))
    if [ $minutes -eq 0 ]; then
        minutes=1
    fi
    echo "$minutes"
}

# Function to determine category and tags based on path and filename
categorize_file() {
    local filepath="$1"
    local filename=$(basename "$filepath")
    local category=""
    local tags=""

    # Check path-based categorization
    if [[ "$filepath" == *"Claude Code"* ]]; then
        category="claude-code"
        tags="claude-code, ai-coding"
    elif [[ "$filepath" == *"MCP 시스템"* ]] || [[ "$filepath" == *"MCP 활용"* ]] || [[ "$filename" == *"MCP"* ]]; then
        category="mcp-servers"
        tags="mcp, model-context-protocol"
    elif [[ "$filepath" == *"Obsidian AI 통합 가이드"* ]] || [[ "$filepath" == *"Obsidian 활용"* ]]; then
        category="obsidian-integration"
        tags="obsidian, knowledge-management"
    elif [[ "$filepath" == *"Flutter"* ]] || [[ "$filename" == *"Flutter"* ]] || [[ "$filepath" == *"모바일 개발"* ]]; then
        category="flutter"
        tags="flutter, mobile-development"
    elif [[ "$filepath" == *"AI 도구 분석"* ]] || [[ "$filepath" == *"AI 기술 자료"* ]]; then
        category="ai-tools"
        tags="ai-tools, analysis"
    elif [[ "$filepath" == *"바이브 코딩"* ]] || [[ "$filepath" == *"프롬프트 엔지니어링"* ]] || [[ "$filename" == *"프롬프트"* ]]; then
        category="prompt-engineering"
        tags="prompt-engineering, ai-interaction"
    elif [[ "$filepath" == *"Cursor"* ]] || [[ "$filepath" == *"GitHub CLI"* ]] || [[ "$filepath" == *"Terminal"* ]]; then
        category="development-guides"
        tags="development, tools"
    else
        category="tutorials"
        tags="tutorial, guide"
    fi

    echo "$category:$tags"
}

# Function to check if file already has frontmatter
has_frontmatter() {
    local file="$1"
    head -1 "$file" | grep -q "^---$"
}

# Function to process a single markdown file
process_file() {
    local source_file="$1"
    local rel_path="${source_file#$SOURCE_DIR/}"

    # Determine category and tags
    local cat_info=$(categorize_file "$source_file")
    local category=$(echo "$cat_info" | cut -d: -f1)
    local tags=$(echo "$cat_info" | cut -d: -f2)

    # Create destination directory
    local dest_category_dir="$DEST_DIR/$category"
    mkdir -p "$dest_category_dir"

    # Get filename and create slug
    local filename=$(basename "$source_file")
    local slug=$(to_slug "$filename")
    local dest_file="$dest_category_dir/$filename"

    # Get file modification date
    local file_date=$(date -r "$source_file" +"%Y-%m-%d")

    # Extract metadata
    local title=$(extract_title "$source_file")
    local excerpt=$(extract_excerpt "$source_file")
    local reading_time=$(calculate_reading_time "$source_file")

    # Check if file already has frontmatter
    if has_frontmatter "$source_file"; then
        # Just copy the file as-is
        cp "$source_file" "$dest_file"
        echo "Copied (with existing frontmatter): $filename -> $category/"
    else
        # Create new file with frontmatter
        cat > "$dest_file" <<EOF
---
title: "$title"
date: $file_date
created: '$CURRENT_DATE'
last_modified: '$CURRENT_DATE'
status: "published"
slug: "$slug"
category: "$category"
excerpt: "$excerpt"
tags:
  - $(echo "$tags" | sed 's/, /\n  - /g')
reading_time: $reading_time
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

EOF
        # Append original content
        cat "$source_file" >> "$dest_file"
        echo "Processed (added frontmatter): $filename -> $category/"
    fi

    # Update counters
    ((category_counts[$category]++))
    ((total_processed++))
}

# Main processing loop
echo "Starting markdown file copy process..."
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo "Current date: $CURRENT_DATE"
echo "----------------------------------------"

# Find all markdown files and process them
while IFS= read -r -d '' file; do
    process_file "$file"
done < <(find "$SOURCE_DIR" -type f -name "*.md" -print0)

# Print summary
echo ""
echo "========================================"
echo "Processing Complete!"
echo "========================================"
echo "Total files processed: $total_processed"
echo ""
echo "Files per category:"
for category in "${!category_counts[@]}"; do
    echo "  $category: ${category_counts[$category]}"
done
echo "========================================"
