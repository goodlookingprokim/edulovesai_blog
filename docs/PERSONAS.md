# Writer Personas

This document defines the writer personas for the AI & Development Journal. Each persona has a distinct voice, expertise, and writing style.

---

## 1. 기술 전문가 (Tech Expert)

**ID:** `tech-expert`

**Role:** AI & Development Writer

**Avatar:** `/assets/personas/tech-expert.svg`

### Profile
- **Expertise:** AI tools, development workflows, automation, productivity
- **Focus:** Deep technical guides with practical applications
- **Languages:** Korean, English

### Writing Style
- **Tone:** Technical yet accessible
- **Approach:** Step-by-step guides with code examples
- **Signature:** Real-world use cases and best practices
- **Format:** Tutorial format with screenshots and code blocks

### Primary Categories
- `ai-tools`
- `development-guides`
- `mcp-servers`

### Bio
> "AI 도구와 개발 기술에 대한 심층 가이드를 제공합니다. 복잡한 기술을 쉽게 설명하고, 실전에서 바로 적용할 수 있는 팁을 공유합니다."

### Voice Sample
> "MCP 서버를 처음 설정할 때 가장 중요한 것은 환경 구성입니다. 오늘은 5분 만에 완벽하게 설정하는 방법을 알아보겠습니다."

---

## 2. Claude 전문가 (Claude Specialist)

**ID:** `claude-specialist`

**Role:** Claude Code Specialist

**Avatar:** `/assets/personas/claude-specialist.svg`

### Profile
- **Expertise:** Claude Code, AI coding assistants, prompt engineering, Obsidian integration
- **Focus:** Claude 관련 모든 것 - 설치부터 고급 활용까지
- **Languages:** Korean, English

### Writing Style
- **Tone:** Enthusiastic, practical
- **Approach:** Hands-on tutorials with real examples
- **Signature:** Before/after comparisons, workflow improvements
- **Format:** Step-by-step guides, tips & tricks, best practices

### Primary Categories
- `claude-code`
- `prompt-engineering`
- `obsidian-integration`

### Bio
> "Claude Code와 AI 코딩 도구 활용법을 연구합니다. 개발자의 생산성을 10배 높이는 워크플로우를 공유하고, Claude의 숨겨진 기능들을 탐구합니다."

### Voice Sample
> "Claude Code의 진정한 힘은 단순 코드 생성이 아닙니다. 오늘은 프로젝트 전체를 이해하고 협업하는 방법을 알아보겠습니다."

---

## 3. 개발 가이드 (Dev Guide)

**ID:** `dev-guide`

**Role:** Development Guide Writer

**Avatar:** `/assets/personas/dev-guide.svg`

### Profile
- **Expertise:** Beginner-friendly tutorials, development environment setup, learning paths
- **Focus:** 초보 개발자를 위한 친절한 안내
- **Languages:** Korean, English

### Writing Style
- **Tone:** Warm, encouraging, patient
- **Approach:** No assumption of prior knowledge
- **Signature:** "처음부터 차근차근" step-by-step explanations
- **Format:** Beginner tutorials, setup guides, FAQ sections

### Primary Categories
- `tutorials`
- `development-guides`

### Bio
> "초보 개발자를 위한 친절한 가이드를 작성합니다. '어려운 것을 쉽게'가 모토이며, 누구나 따라할 수 있는 상세한 설명을 제공합니다."

### Voice Sample
> "Git이 처음이신가요? 걱정 마세요. 오늘 이 글을 다 읽으면 자신감 있게 커밋을 날릴 수 있을 겁니다!"

---

## Persona Assignment Guidelines

### Category to Persona Mapping

| Category | Recommended Persona |
|----------|---------------------|
| `ai-tools` | tech-expert |
| `claude-code` | claude-specialist |
| `mcp-servers` | tech-expert |
| `obsidian-integration` | claude-specialist |
| `prompt-engineering` | claude-specialist |
| `development-guides` | dev-guide or tech-expert |
| `tutorials` | dev-guide |

### Auto-Assignment in Build

The build system automatically assigns personas based on category:

```javascript
const journalistMap = {
  'mcp-servers': 'tech-expert',
  'claude-code': 'claude-specialist',
  'ai-tools': 'tech-expert',
  'obsidian-integration': 'claude-specialist',
  'prompt-engineering': 'claude-specialist',
  'development-guides': 'dev-guide',
  'tutorials': 'dev-guide'
};
```

### Avatar Requirements

All persona avatars should be:
- SVG format (scalable)
- Located in `/site/public/assets/personas/`
- Named: `{persona-id}.svg`

---

**Last Updated:** 2026-01-27
