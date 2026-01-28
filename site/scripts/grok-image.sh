#!/bin/bash
# Secure wrapper for Grok Aurora image generation
# This script loads API key from external secure location

set -e

# ============================================
# SECURITY: Load credentials from outside repo
# ============================================
CREDENTIALS_FILE="$HOME/.xai_credentials"

if [ ! -f "$CREDENTIALS_FILE" ]; then
    echo "ERROR: Credentials file not found: $CREDENTIALS_FILE"
    echo ""
    echo "Setup instructions:"
    echo "  1. Create file: ~/.xai_credentials"
    echo "  2. Add content: export XAI_API_KEY=\"your-key-here\""
    echo "  3. Set permissions: chmod 600 ~/.xai_credentials"
    exit 1
fi

# Check file permissions (should be 600)
PERMS=$(stat -f "%Lp" "$CREDENTIALS_FILE" 2>/dev/null || stat -c "%a" "$CREDENTIALS_FILE" 2>/dev/null)
if [ "$PERMS" != "600" ]; then
    echo "WARNING: Credentials file has insecure permissions: $PERMS"
    echo "Run: chmod 600 $CREDENTIALS_FILE"
fi

# Load credentials
source "$CREDENTIALS_FILE"

if [ -z "$XAI_API_KEY" ]; then
    echo "ERROR: XAI_API_KEY not set in credentials file"
    exit 1
fi

# ============================================
# Activate virtual environment
# ============================================
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV_DIR="$SCRIPT_DIR/.venv"

if [ -d "$VENV_DIR" ]; then
    source "$VENV_DIR/bin/activate"
else
    echo "ERROR: Virtual environment not found at $VENV_DIR"
    echo "Run: cd $SCRIPT_DIR && python3 -m venv .venv && pip install -r requirements.txt"
    exit 1
fi

# ============================================
# Run image generator with all arguments
# ============================================
python "$SCRIPT_DIR/generate-image.py" "$@"

# Cleanup
deactivate 2>/dev/null || true
