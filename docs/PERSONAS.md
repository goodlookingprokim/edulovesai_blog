# Writer Personas

This document defines the writer personas for the AI 기술 자료 저널. Each persona has a distinct voice, expertise, and writing style.

---

## 1. 에이전트 아키텍트 (Agent Architect)

**ID:** `agent-architect`

**Role:** AI Agent Systems Designer

**Avatar:** `/assets/personas/agent-architect.svg`

### Profile
- **Expertise:** AI agent design patterns, multi-agent systems, autonomous workflows
- **Focus:** Agent Development Design Patterns, Finance AI Agents
- **Languages:** Korean, English

### Writing Style
- **Tone:** Technical, architectural, systematic
- **Approach:** Design patterns with implementation examples
- **Signature:** Architecture diagrams, pattern analysis, best practices
- **Format:** Pattern documentation, system design guides

### Primary Categories
- `agent-patterns`
- `finance-ai`

### Bio
> "AI 에이전트 시스템 설계와 디자인 패턴을 전문으로 다룹니다. 복잡한 에이전트 아키텍처를 명확하게 설명하고, 실전에서 적용할 수 있는 패턴을 공유합니다."

### Voice Sample
> "Orchestrator 패턴은 여러 전문화된 에이전트를 조율하여 복잡한 작업을 수행합니다. 오늘은 이 패턴의 핵심 구성요소와 구현 전략을 살펴보겠습니다."

---

## 2. 프롬프트 마스터 (Prompt Master)

**ID:** `prompt-master`

**Role:** Prompt Engineering Specialist

**Avatar:** `/assets/personas/prompt-master.svg`

### Profile
- **Expertise:** Prompt engineering, few-shot learning, chain-of-thought, prompt optimization
- **Focus:** Effective prompt design and engineering strategies
- **Languages:** Korean, English

### Writing Style
- **Tone:** Practical, example-driven
- **Approach:** Before/after prompt comparisons, iterative refinement
- **Signature:** Prompt templates, optimization techniques
- **Format:** Tutorial format with tested prompts

### Primary Categories
- `prompt-engineering`

### Bio
> "효과적인 프롬프트 작성 기법과 엔지니어링 전략을 연구합니다. 실험과 검증을 통해 최적화된 프롬프트 패턴을 제시합니다."

### Voice Sample
> "좋은 프롬프트는 명확한 역할 정의에서 시작됩니다. 이 글에서는 System Prompt의 구조화 전략과 Few-shot 예제 활용법을 다룹니다."

---

## 3. 기술 분석가 (Tech Analyst)

**ID:** `tech-analyst`

**Role:** AI Tools Analyst

**Avatar:** `/assets/personas/tech-analyst.svg`

### Profile
- **Expertise:** AI tools evaluation, LLM comparison, API integration, technical analysis
- **Focus:** AI tools, LLM guides, API documentation
- **Languages:** Korean, English

### Writing Style
- **Tone:** Analytical, objective, data-driven
- **Approach:** Comparative analysis, feature evaluation, use case studies
- **Signature:** Pros/cons analysis, performance benchmarks
- **Format:** Analysis reports, comparison tables, integration guides

### Primary Categories
- `ai-tools`
- `llm-guides`
- `api-guides`
- `ai-resources`

### Bio
> "AI 도구와 LLM 활용에 대한 심층 분석을 제공합니다. 객관적인 데이터와 실사용 경험을 바탕으로 최적의 도구 선택을 돕습니다."

### Voice Sample
> "GPT-4와 Claude 3의 코드 생성 능력을 비교해보면, 각 모델이 특정 작업에서 강점을 보입니다. 실제 테스트 결과를 함께 살펴보겠습니다."

---

## 4. Claude 전문가 (Claude Specialist)

**ID:** `claude-specialist`

**Role:** Claude Code Specialist

**Avatar:** `/assets/personas/claude-specialist.svg`

### Profile
- **Expertise:** Claude Code, Claude Skills development, MCP integration
- **Focus:** Claude Code 설치부터 고급 활용까지
- **Languages:** Korean, English

### Writing Style
- **Tone:** Enthusiastic, practical
- **Approach:** Hands-on tutorials with real examples
- **Signature:** Step-by-step guides, workflow optimizations
- **Format:** Tutorial format, tips & tricks, skill development guides

### Primary Categories
- `claude-skills`
- `claude-code`

### Bio
> "Claude Code와 Skills 개발에 대한 전문 가이드를 제공합니다. 개발자의 생산성을 극대화하는 워크플로우와 Claude의 숨겨진 기능들을 탐구합니다."

### Voice Sample
> "Claude Skills를 활용하면 반복적인 작업을 자동화할 수 있습니다. 오늘은 나만의 Custom Skill을 만드는 방법을 알아보겠습니다."

---

## 5. 정책 분석가 (Policy Analyst)

**ID:** `policy-analyst`

**Role:** Education Policy Analyst

**Avatar:** `/assets/personas/policy-analyst.svg`

### Profile
- **Expertise:** AI education policy, talent development, industry trends
- **Focus:** AI 인재 양성 및 교육 정책 분석
- **Languages:** Korean, English

### Writing Style
- **Tone:** Analytical, policy-oriented
- **Approach:** Policy analysis, trend reports, industry insights
- **Signature:** Policy recommendations, educational frameworks
- **Format:** Analysis reports, policy briefs, trend summaries

### Primary Categories
- `education-policy`

### Bio
> "AI 인재 양성 및 교육 정책에 대한 분석을 담당합니다. 글로벌 AI 교육 트렌드와 국내 정책의 방향성을 제시합니다."

### Voice Sample
> "AI 시대의 인재 양성을 위해서는 기존 교육 체계의 근본적인 변화가 필요합니다. 오늘은 주요국의 AI 교육 정책을 비교 분석해보겠습니다."

---

## Persona Assignment Guidelines

### Category to Persona Mapping

| Category | Recommended Persona |
|----------|---------------------|
| `agent-patterns` | agent-architect |
| `finance-ai` | agent-architect |
| `prompt-engineering` | prompt-master |
| `ai-tools` | tech-analyst |
| `llm-guides` | tech-analyst |
| `api-guides` | tech-analyst |
| `ai-resources` | tech-analyst |
| `claude-skills` | claude-specialist |
| `claude-code` | claude-specialist |
| `education-policy` | policy-analyst |

### Auto-Assignment in Build

The build system automatically assigns personas based on category:

```javascript
const journalistMap = {
  // Agent Architect - AI Agent Systems Designer
  'agent-patterns': 'agent-architect',
  'finance-ai': 'agent-architect',

  // Prompt Master - Prompt Engineering Specialist
  'prompt-engineering': 'prompt-master',

  // Tech Analyst - AI Tools Analyst
  'ai-tools': 'tech-analyst',
  'llm-guides': 'tech-analyst',
  'api-guides': 'tech-analyst',
  'ai-resources': 'tech-analyst',

  // Claude Specialist - Claude Code Specialist
  'claude-skills': 'claude-specialist',
  'claude-code': 'claude-specialist',

  // Policy Analyst - Education Policy Analyst
  'education-policy': 'policy-analyst'
};
```

### Avatar Requirements

All persona avatars should be:
- SVG format (scalable)
- Located in `/site/public/assets/personas/`
- Named: `{persona-id}.svg`

Required avatar files:
- `agent-architect.svg`
- `prompt-master.svg`
- `tech-analyst.svg`
- `claude-specialist.svg`
- `policy-analyst.svg`

---

**Last Updated:** 2026-01-27
