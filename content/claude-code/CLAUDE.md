---
title: "CLAUDE.md"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "claude"
category: "claude-code"
excerpt: "This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. This repository contains comprehensive Korean d..."
tags:
  - claude-code
  - ai-coding
reading_time: 3
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains comprehensive Korean documentation for Claude Code slash commands, designed as educational materials for Korean-speaking users. The project has evolved from a basic presentation guide to include detailed individual command documentation and practical usage examples.

## Repository Structure

### Main Documentation Files
- **`0_Claude Code Slash 명령어 가이드.md`** - Comprehensive overview of all 21 official slash commands with practical examples
- **Individual Command Guides** (1-1 through 4-3) - Detailed documentation for specific commands
- **`CLAUDE.md`** - This project instruction file
- **Language**: Korean (한국어)
- **Target Audience**: Non-developers, beginners, and those learning Claude Code
- **Format**: Educational guides with practical examples and real-world scenarios

### Documentation Structure

#### Part 1: Essential Commands (기본 시작)
- **1-1_init.md** - Project initialization and context management
- **1-2_memory.md** - Memory file editing and project information storage

#### Part 2: Conversation Management (대화 관리)
- **2-1_clear.md** - Conversation clearing with safety warnings
- **2-2_compact.md** - Conversation compression for performance optimization
- **2-3_review.md** - Code review functionality

#### Part 3: System & Account Management (시스템 & 계정)
- **3-1_status.md** - Account and system status checking with real execution results
- **3-2_doctor.md** - System diagnostics and troubleshooting
- **3-3_config.md** - Configuration management with detailed setting explanations
- **3-4_permissions.md** - Permission system with examples for all 4 options (Allow/Ask/Deny/Workspace)

#### Part 4: Advanced Features (고급 기능)
- **4-1_add-dir.md** - Directory access management (clarifies it does NOT create folders)
- **4-2_terminal-setup.md** - Terminal optimization with environment-specific configurations
- **4-3_Vim-mode.md** - Vim mode usage guide with practical recommendations

## Key Documentation Features

### Comprehensive Command Coverage
- **21 Official Commands**: Complete coverage from basic to advanced features
- **Real Usage Examples**: Practical scenarios and actual execution results
- **Korean Cultural Context**: Analogies and explanations tailored for Korean users
- **Safety Warnings**: Clear guidance on potentially destructive commands like `/clear`

### Educational Approach
- **Progressive Learning**: Structured from basic to advanced concepts
- **Practical Examples**: Real-world scenarios and use cases
- **Problem-Solution Format**: Common issues and their solutions
- **Frequency-Based Classification**: Commands categorized by usage frequency

### Unique Content Elements
- **Permission System Documentation**: Detailed examples for Allow/Ask/Deny/Workspace settings
- **Terminal Configuration Guide**: Environment-specific setup instructions
- **System Diagnostics Results**: Actual `/status` and `/doctor` output interpretation
- **Vim Mode Recommendations**: Clear guidance on when to use/avoid Vim mode

## Documentation Standards

### Content Guidelines
- **Korean Language Consistency**: All user-facing content in Korean with English technical terms in parentheses
- **Practical Focus**: Emphasis on when, why, and how to use each command
- **Safety Awareness**: Clear warnings about destructive operations
- **Real Examples**: Actual command outputs and practical scenarios

### Structure Standards
- **Consistent Numbering**: Sequential numbering system (1-1, 1-2, etc.)
- **Standardized Sections**: Usage timing, examples, warnings, and key takeaways
- **Cross-References**: Links between related commands and concepts
- **Context-Appropriate Content**: Each file focuses on its specific command without irrelevant information

## Technical Accuracy

### Command Clarifications
- **`/add-dir`**: Explicitly clarifies it adds existing directories to access scope, does NOT create new folders
- **`/terminal-setup`**: Context-dependent behavior based on current environment analysis
- **`/permissions`**: Detailed breakdown of all permission options with practical examples
- **`/vim`**: Clear guidance on when Vim mode is beneficial vs. counterproductive

### Real-World Testing
- **Actual Execution Results**: Documentation includes real command outputs and their interpretation
- **Environment-Specific Behavior**: Accounts for differences across macOS, Windows, and various terminal applications
- **Error Scenarios**: Common problems and their solutions

## Content Updates

When modifying the documentation:
- **Maintain Korean Cultural Context**: Keep analogies and explanations relevant to Korean users
- **Update Cross-References**: Ensure related commands reference each other appropriately
- **Verify Technical Accuracy**: Test commands and update examples with actual results
- **Preserve Safety Warnings**: Maintain clear warnings about destructive operations
- **Keep Practical Focus**: Emphasize real-world usage over theoretical concepts

## Project Evolution

This documentation project has grown from a basic presentation to a comprehensive reference guide, incorporating:
- **User Feedback**: Corrections based on contextual appropriateness
- **Real Usage Data**: Practical examples from actual Claude Code usage
- **Safety Considerations**: Enhanced warnings and best practices
- **Technical Clarifications**: Detailed explanations of command behavior and limitations