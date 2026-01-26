---
title: "Claude Skills 만드는 법: 초보자 완전 가이드"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - claude-code
  - claude-skills
  - 개발도구
  - 튜토리얼
  - 파인만기법
status: "완료"
type: "가이드"
priority: "high"
estimated_reading_time: "12분"
para_category: "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/"
related_notes:
  - "[[Claude Code 완전 가이드]]"
  - "[[MCP 시스템 활용하기]]"
  - "[[프롬프트 엔지니어링 기초]]"
---

# Claude Skills 만드는 법: 초보자 완전 가이드

> **이 가이드의 목표**: Claude Code를 처음 배우는 초보 개발자도 **실제로 작동하는 Claude Skill을 만들 수 있도록** 단계별로 설명합니다. 복잡한 개념도 쉬운 말로 풀어 설명하고, 실전 예제로 바로 적용할 수 있게 구성했습니다.

---

## 📋 목차

1. [[#Claude Skills가 뭔가요 (5살 버전)]]
2. [[#스토리: 내가 Claude Skill을 만든 이유]]
3. [[#Skill의 구조 한눈에 보기]]
4. [[#실전 예제: 클리핑 처리 Skill 분석]]
5. [[#나만의 첫 Skill 만들기]]
6. [[#실무 팁과 실수하기 쉬운 부분]]
7. [[#다음 단계: 더 복잡한 Skill 만들기]]

---

## Claude Skills가 뭔가요 (5살 버전)

### 비유로 설명해보겠습니다

**Claude Code가 뭐죠?**
- Claude Code = 똑똑한 AI 어시스턴트가 들어있는 코드 에디터
- 당신의 생각을 대신 구현해주는 신비로운 도구

**Claude Skill은?**
- Skill = 그 어시스턴트에게 **특정 일을 잘하도록 가르치는 것**
- 예: "너는 웹 클리핑을 고품질 노트로 변환하는 전문가야"

### 구체적인 예시

**Skill 없이**: 매번 물어봐야 함
```
사용자: "이 웹 글을 정리해줄래?"
Claude: "좋아, 어떻게 정리할까?"
사용자: "Feynman 기법으로 해주고, PARA 체계에 맞게 태그도 붙여주고..."
← 매번 설명해야 하고, 품질도 일정하지 않음
```

**Skill 있으면**: 한 번의 지시로 모든 게 해결됨
```
사용자: "clipping-processor skill로 이 파일을 처리해줘"
Claude: ✅ 자동으로 모든 규칙을 적용해서 처리
← 일관되고 빠르고 정확함!
```

### Skill의 핵심 가치

| 장점 | 설명 |
|------|------|
| **일관성** | 매번 같은 품질로 작업 수행 |
| **효율성** | 반복적인 설명 불필요 |
| **자동화** | 복잡한 프로세스를 한 명령으로 처리 |
| **재사용성** | 다른 프로젝트에도 적용 가능 |

---

## 스토리: 내가 Claude Skill을 만든 이유

### 문제 상황

매일 웹에서 유용한 글을 모아서 Obsidian에 저장했는데...

```
🌅 아침: 좋은 글 3개 발견 → Clippings 폴더에 저장
⛔ 문제: 원본은 그대로 있고, 정리가 안 됨
🤔 하루종일 고민:
  - Feynman 기법으로 단순화할까?
  - 어느 폴더에 저장할까?
  - 어떤 태그를 붙일까?
  - 메타데이터는?
💔 결과: 진짜 실행 안 됨 (너무 번거움)
```

### 깨달음

> **"아, 이 일련의 과정을 한 번에 자동화하면 되겠네?"**

그래서 만들었어요:
- 📝 문서: Skill의 설정과 규칙을 기록
- 🤖 자동화: Claude에게 "이 규칙들을 따라서 처리해"
- ✅ 완료: 매번 완벽한 품질로 자동 처리

### 결과

```
Before (Skill 없음):
⏱️ 글 1개 처리 = 15분 × 3개 = 45분/day

After (Skill 있음):
⏱️ 글 3개 처리 = 1분/day
💰 절약된 시간 = 월 9시간!
```

---

## Skill의 구조: 한눈에 보기

### Skill의 기본 구성 (4가지 파일)

```
📁 /Users/[user]/.claude/skills/[skill-name]/
├── 📄 SKILL.md                    ← 핵심! 메인 가이드 & 사용법
├── 🗂️  category_mapping.json      ← 분류 규칙 (JSON)
├── 🚀 enhancement_rules.md        ← 품질 향상 규칙
└── 🌍 translation_guide.md        ← (선택) 번역 규칙
```

### 각 파일의 역할

#### 1️⃣ **SKILL.md** (필수!) - 이게 전부를 제어합니다

```markdown
# Skill 이름
skill의 전체 개요와 기능을 설명

## 핵심 기능
- 할 수 있는 5가지 주요 작업
- 각각 어떻게 작동하는지 설명

## 사용 방법
- "skill을 사용해서 XX 해줘" 형식의 사용 예제
- 기본 사용, 커스텀 옵션 등

## 처리 워크플로우
- Step 1: 입력 받기
- Step 2: 분석하기
- Step 3: 처리하기
- Step 4: 출력하기

## 생성되는 결과물
- 어떤 형식으로 저장되는가?
- 어디에 저장되는가?

## 품질 기준
- 최소 100점 만점에 몇 점 이상이어야 하는가?
- 체크리스트는?
```

#### 2️⃣ **category_mapping.json** (선택) - 규칙을 정의합니다

JSON 형식으로 **분류 규칙**을 저장하는 파일:

```json
{
  "mappings": [
    {
      "priority": 1,
      "keywords": ["Claude Code", "claude code"],
      "folder": "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/",
      "tags": ["claude-code", "개발도구"],
      "description": "Claude Code 관련 콘텐츠"
    }
  ]
}
```

**왜 JSON인가?**
- ✅ 구조화되어서 Claude가 쉽게 읽음
- ✅ 규칙이 명확해서 일관성 유지
- ✅ 필요할 때 쉽게 수정 가능

#### 3️⃣ **enhancement_rules.md** - 품질 기준을 정의합니다

```markdown
# 콘텐츠 향상 규칙

## Feynman 기법
- 5살 아이도 이해할 수 있도록 설명
- 어려운 단어 다시 설명

## 스토리텔링
- WHY: 왜 중요한가?
- WHAT: 이게 뭔가?
- HOW: 어떻게 쓰는가?

## 3단계 예제
- 🌱 기초: 가장 간단한 형태
- 🌿 중급: 실무에서 쓰는 형태
- 🌳 고급: 심화 학습 형태
```

#### 4️⃣ **translation_guide.md** (선택) - 번역 규칙을 정의합니다

```markdown
# 번역 가이드

## 언어 감지
- 일본어 감지 규칙
- 영어 감지 규칙

## 번역 품질 기준
- 5단계 등급 (⭐~⭐⭐⭐⭐⭐)

## 이중 언어 노트 구조
- 한국어 + 원문 표시
```

---

## 실전 예제: 클리핑 처리 Skill 분석

이제 **실제로 작동하는 Skill**을 분석해봅시다.

### 이 Skill이 하는 일 (한 문장)

> **웹 클리핑을 Feynman 기법과 스토리텔링을 사용해 고품질 교육 자료로 자동으로 변환**

### 동작 원리 (Step by Step)

```
📝 입력
└─ Clippings 폴더의 웹 글들
   (그냥 저장한 대로인 원본 파일들)

↓ STEP 1: 파일 탐지 및 분석
├─ 파일 형식 확인 (.txt, .md, .pdf, .html)
├─ 언어 감지 (한국어? 일본어? 영어?)
└─ 메타데이터 추출 (제목, URL, 날짜)

↓ STEP 2: 콘텐츠 향상
├─ Feynman 기법 적용 (5살도 이해할 수 있게)
├─ 스토리텔링 (WHY → WHAT → HOW)
└─ 3단계 예제 추가 (기초/중급/고급)

↓ STEP 3: 주제 분류
├─ category_mapping.json의 규칙으로 분류
├─ 올바른 폴더 결정
└─ 적절한 태그 결정

↓ STEP 4: 메타데이터 생성
├─ YAML frontmatter 작성
├─ 읽기 시간 계산
└─ 관련 노트 링크 제안

↓ STEP 5: 파일 배포 및 정리
├─ 향상된 노트 저장
├─ 원본 파일을 Processed 폴더로 이동
└─ processing_log.md에 기록

✅ 출력
└─ R - Resources/[주제]/[향상된 노트].md
```

### 핵심 포인트: 왜 이렇게 설계했을까?

| 단계 | 왜 필요한가? | 예시 |
|------|-----------|------|
| **파일 분석** | 어떤 형식의 글인지 알아야 처리 가능 | 텍스트 vs 이미지 vs PDF vs **YouTube 영상** |
| **콘텐츠 향상** | 원본 그대로는 학습 효과가 낮음 | 복잡한 기술 용어 → 쉬운 설명, **영상 대본 → 구조화된 노트** |
| **분류** | 같은 주제끼리 모아야 나중에 찾기 쉬움 | AI 관련 글은 AI 폴더에, **YouTube는 유튜브 정리 폴더에** |
| **메타데이터** | 검색과 연결을 쉽게 하려면 필수 | 제목, 날짜, 태그, 읽기 시간, **영상 길이, 채널명** |
| **파일 정리** | 처리됨/미처리를 구분해야 실수 줄임 | Processed 폴더로 이동 |

#### 🆕 YouTube 영상 처리 (새로운 기능!)

clipping-processor는 **웹 글뿐만 아니라 YouTube 영상**도 처리할 수 있습니다:

**YouTube URL 자동 감지**
```
Clippings 폴더에 이런 파일이 있으면:
📝 "Claude MCP Server 튜토리얼.md"
└─ 내용: https://youtube.com/watch?v=dQw4w9WgXcQ

↓ clipping-processor가 자동으로:
1. YouTube URL 인식
2. MCP YouTube Server로 자막 다운로드
3. 자막을 Feynman 기법으로 변환
4. 타임스탐프별로 섹션 분할
5. 고품질 노트로 변환
```

**결과 메타데이터**
```yaml
---
title: "Claude MCP Server 완벽 가이드"
source: "https://youtube.com/watch?v=..."
video_metadata:
  duration: "14분 10초"
  upload_date: "2025-11-16"
  channel_name: "Tech Channel"
  channel_subscribers: "15.2K"
transcript_source: "auto-generated"  # 또는 manual, whisper
---
```

---

## 나만의 첫 Skill 만들기

### 🎯 Level 1: 초간단 Skill (5분)

**목표**: "인사말을 한국어로 번역하는 Skill"

#### Step 1: 폴더 만들기

```bash
# 터미널에서:
mkdir -p ~/.claude/skills/hello-translator
cd ~/.claude/skills/hello-translator
```

#### Step 2: SKILL.md 작성

```markdown
---
name: hello-translator
description: "영어 인사말을 한국어로 번역하는 간단한 Skill"
---

# 인사말 번역 Skill

## 목표
영어 인사말을 한국어로 번역합니다.

## 사용 방법
```
hello-translator skill을 사용해서 "Good morning"을 번역해줘
```

## 번역 규칙
| 영어 | 한국어 |
|------|--------|
| Hello | 안녕하세요 |
| Good morning | 좋은 아침입니다 |
| Thank you | 감사합니다 |
| Goodbye | 안녕히 가세요 |
```

완성! 🎉

### 🎯 Level 2: 조금 더 복잡한 Skill (20분)

**목표**: "마크다운 파일을 Obsidian 형식으로 변환하는 Skill"

#### Step 1: 폴더 구조

```
~/.claude/skills/markdown-converter/
├── SKILL.md
├── conversion_rules.json
└── quality_checks.md
```

#### Step 2: SKILL.md

```markdown
# 마크다운 변환기 Skill

## 핵심 기능
1. 마크다운을 Obsidian 형식으로 변환
2. [[내부 링크]] 추가
3. YAML frontmatter 생성
4. 태그 자동 추출

## 사용 방법
```
markdown-converter skill으로 "README.md"를 변환해줘
```

## 변환 규칙
- 제목 → Obsidian heading
- 링크 → [[위키 링크]]
- 강조 → **진하게**
```

#### Step 3: conversion_rules.json

```json
{
  "rules": [
    {
      "from": "[텍스트](url)",
      "to": "[[텍스트]]",
      "condition": "내부 링크인 경우"
    },
    {
      "from": "# 제목",
      "to": "# 제목 (YAML 추가)",
      "condition": "항상"
    }
  ]
}
```

### 🎯 Level 3: 완전한 Skill (2시간)

**목표**: clipping-processor처럼 **실제로 쓸 수 있는** Skill 만들기

이미 배운 내용으로 충분합니다:
1. SKILL.md로 메인 가이드 작성
2. JSON 파일로 규칙 정의
3. 마크다운 파일로 상세 가이드 작성

#### 🆕 YouTube 처리까지 지원하는 Skill 만들기

더 나아가 **YouTube 영상도 처리**하는 Skill을 만들려면:

**SKILL.md에 추가할 섹션:**
```markdown
## 🆕 YouTube 영상 처리

### 사용 방법
youtube-video-processor skill으로 https://youtube.com/watch?v=xxx 를 처리해줘

### 처리 워크플로우
Step 1: YouTube URL 감지
Step 2: 자막 다운로드 (MCP YouTube Server 또는 yt-dlp)
Step 3: 자막을 Feynman 기법으로 변환
Step 4: 타임스탐프 기반 섹션 분할
Step 5: 고품질 노트 생성 및 메타데이터 추가
```

**추가 학습:**
- clipping-processor의 SKILL.md - YouTube 영상 처리 워크플로우 섹션 분석
- enhancement_rules.md - Section 9: YouTube영상 처리 특별 규칙 학습
- translation_guide.md - Section 10: YouTube 자막 번역 특별 규칙 학습

---

## 실무 팁과 실수하기 쉬운 부분

### ✅ 잘 만드는 방법

#### Tip 1: 명확한 파일 이름

```
❌ 나쁜 예:
skill/my_skill/doc.md

✅ 좋은 예:
skill/text-summarizer/SKILL.md          ← 역할이 명확함
skill/text-summarizer/quality_rules.md  ← 파일 이름으로 내용이 보임
```

#### Tip 2: 예제는 실제로 작동해야 함

```
❌ 나쁜 예:
사용 방법: "text-summarizer skill을 사용해줘"
← 너무 모호함

✅ 좋은 예:
사용 방법:
```
text-summarizer skill으로 "이 문서의 핵심을 3줄로 요약해줘"
```
← 실제로 쓸 수 있는 명령어
```

#### Tip 3: JSON은 형식이 정확해야 함

```json
❌ 나쁜 예:
{
  "keywords": ["python", "javascript"],
  "folder": "R - Resources/", // 주석은 JSON에서 안 됨!
}

✅ 좋은 예:
{
  "keywords": ["python", "javascript"],
  "folder": "R - Resources/",
  "note": "주석은 따옴표로 감싸야 함"
}
```

### ⚠️ 실수하기 쉬운 부분

#### 실수 1: 순환 규칙

```json
❌ 위험:
{
  "keywords": ["Skill", "Claude Skills"],
  "folder": "R - Resources/Claude Skills/",
  "tags": ["claude-skills"]
}
// Claude Skills → Claude Skills 폴더 → 여전히 Skills라는 단어 포함
// → 계속 변환될 수 있음
```

**해결**: 우선순위(priority)를 명확히 설정

```json
✅ 좋은 예:
{
  "priority": 1,  // 이게 먼저 적용됨
  "keywords": ["Claude Code", "claude-code"],
  "folder": "R - Resources/.../Claude Code/"
},
{
  "priority": 2,  // 이건 나중에 확인
  "keywords": ["Claude", "claude"],
  "folder": "R - Resources/.../AI 기술 자료/"
}
```

#### 실수 2: 메타데이터 형식 오류

```markdown
❌ 잘못된 YAML:
---
title: 제목
created: 2025-11-16   ← 따옴표 없음
tags:
  - tag1
  tag2               ← 들여쓰기 안 맞음
---

✅ 올바른 YAML:
---
title: "제목"
created: '2025-11-16'
tags:
  - tag1
  - tag2
---
```

#### 실수 3: 경로 오류

```
❌ 잘못된 경로:
folder: "R - Resources/AI 및 개발/AI 기술 자료"  ← 마지막 / 없음

✅ 올바른 경로:
folder: "R - Resources/AI 및 개발/AI 기술 자료/"  ← 마지막에 / 있음
```

### 🐛 문제가 생겼을 때 확인 리스트

| 문제 | 확인 사항 | 해결책 |
|------|---------|--------|
| **Skill이 인식이 안 됨** | SKILL.md 있나? | SKILL.md 필수 |
| **분류가 틀렸어** | category_mapping.json의 우선순위 | priority 확인 및 수정 |
| **메타데이터가 안 만들어짐** | YAML 형식 | 온라인 YAML 검증기로 확인 |
| **예제가 작동이 안 됨** | 예제가 실제인지 테스트 | 직접 Claude에게 명령어로 시도 |

---

## 다음 단계: 더 복잡한 Skill 만들기

### 🚀 Advanced: Skill 확장하기

#### 🆕 0. YouTube 영상 처리 기능 추가 (새로운 기능!)

```markdown
# SKILL.md에 추가:

## 🆕 YouTube 영상 처리

### 자동 감지
- YouTube URL을 Clippings 폴더에 저장하면 자동 처리
- 지원 형식: youtube.com, youtu.be

### 자막 다운로드
- **MCP YouTube Server**: 빠른 처리 (기본값)
- **yt-dlp 폴백**: 고품질 자막 필요시
- **Whisper 자동 변환**: 자막 없는 영상

### 콘텐츠 변환
1. **타임스탐프 섹션 분할**: [00:00-02:30] 소개, [02:31-05:15] 핵심 개념...
2. **필러 단어 제거**: "음", "어", "그니까" 등 자동 삭제
3. **Feynman 기법**: 복잡한 설명 → 단순화
4. **Storytelling**: WHY → WHAT → HOW 구조
5. **3단계 예제**: 기초/중급/고급 예제 추가

### 메타데이터 자동 생성
- 영상 길이, 업로드 날짜, 채널명, 구독자 수
- 자막 소스 (manual/auto-generated/whisper)
- 읽기 시간 계산
```

#### 1. 여러 언어 지원 추가

```markdown
# SKILL.md에 추가:

## 지원 언어
- 한국어
- 영어
- 일본어

## 언어별 처리 규칙
[language_support.md에서 자세히]

### 🆕 YouTube 자막 번역
- 자동 언어 감지
- 자막 번역 (모든 지원 언어)
- 번역 품질 검증 (95% 이상 정확도)
```

#### 🆕 2. 품질 기반 파일 관리 시스템 (Quality-Based File Movement)

```markdown
# SKILL.md에 추가:

## 🆕 파일 관리 및 이동 시스템

### 문제: 불완전한 노트가 완성 폴더를 오염시킨다

**이전:**
```
모든 처리 완료 → Clippings_Processed로 자동 이동
⚠️ 문제: 자막 다운로드 실패한 노트도 포함됨
```

**개선:**
```
처리 완료 → 품질 점수 자동 계산
├─ 90-100점 → ✅ 자동 이동 (완벽함)
├─ 70-85점  → ⏳ 사용자 검토 필요 (수용 가능)
└─ 40-69점  → ❓ 재처리 필요 (불완전)
```

### 3-Tier 품질 분류 시스템

**Tier 1: PERFECT (90-100점)**
- 자막 완전 다운로드
- Feynman 기법 완벽 적용
- 3단계 예제 모두 포함
- **동작:** 자동으로 Clippings_Processed로 이동

**Tier 2: ACCEPTABLE (70-85점)**
- 자막 실패, 설명란 기반 폴백
- Feynman 기법 부분 적용
- **동작:** Clippings에 유지, 사용자 검토 후 승인 필요

**Tier 3: MINIMAL (40-69점)**
- 설명란도 없음, 메타데이터만
- 재처리 필요
- **동작:** Clippings에 유지, Whisper/배치/수동 완성 중 선택

### 로그 기반 감사 추적

```
logs/
├── complete.log        # Tier 1 완료 기록
├── pending_review.log  # Tier 2 검토 대기
├── pending_retry.log   # Tier 3 재처리 대기
└── file_movements.log  # 모든 이동 기록 (감사 추적)
```

### YAML에 상태 마킹

```yaml
---
title: "파일 제목"
status: "✅ COMPLETE"  또는 "⏳ PENDING_REVIEW" 또는 "❓ PENDING_RETRY"
quality_score: 96
quality_tier: "PERFECT"  또는 "ACCEPTABLE" 또는 "MINIMAL"
---
```
```

#### 3. 파일 배포 자동화 (기존 방식 개선)

```json
{
  "output_config": {
    "save_location": "R - Resources/...",
    "create_backup": true,
    "quality_based_movement": true,
    "auto_move_threshold": 90,
    "review_threshold": 70,
    "retry_threshold": 40,
    "log_directory": "~/.claude/skills/[name]/logs/"
  }
}
```

#### 4. 품질 점수 시스템 추가

```markdown
# quality_checks.md

## 점수 계산
- 메타데이터 완성도: 30점
- 콘텐츠 구조: 30점
- 예제 품질: 25점
- 가독성: 15점

## 등급
- 90점 이상: 매우 좋음 ⭐⭐⭐⭐⭐
- 80~89점: 좋음 ⭐⭐⭐⭐
- 70~79점: 만족 ⭐⭐⭐
```

#### 4. 로깅 시스템 추가

```markdown
# SKILL.md에 추가:

## 처리 로그
processing_log.md에 다음을 기록:
- 처리된 파일 목록
- 성공/실패 상태
- 소요 시간
- 생성된 메타데이터
```

### 📚 학습 경로

```
Week 1: 기초
├─ 이 가이드 읽기
├─ hello-translator Skill 만들기
└─ 직접 사용해보기

Week 2: 중급
├─ markdown-converter Skill 만들기
├─ JSON 규칙 파일 이해
└─ 다른 사람의 Skill 분석

Week 3: 고급
├─ 자신의 워크플로우에 맞는 Skill 설계
├─ 메타데이터 자동화
└─ 품질 검증 시스템 구축
└─ 🆕 clipping-processor 분석 (YouTube 기능 포함)

Week 4: 🆕 YouTube 처리 심화
├─ SKILL.md - YouTube 영상 처리 워크플로우 분석
├─ enhancement_rules.md - YouTube 특별 규칙 학습
├─ translation_guide.md - YouTube 자막 번역 학습
└─ 자신의 YouTube 처리 Skill 설계

Week 5: 🆕 품질 기반 파일 관리 (새로운 중요 기능!)
├─ SKILL.md - 파일 관리 및 이동 시스템 분석
├─ enhancement_rules.md - 품질 수준 정의 학습
├─ batch_processing_guide.md - 파일 이동 프로세스 실습
├─ PROCESSING_STATUS.md - 상태 대시보드 활용
└─ 자신의 Skill에 품질 검증 시스템 추가

Month 2: 마스터
├─ 여러 Skill 조합하기 (Skill chaining)
├─ MCP 서버와 연동 (YouTube, n8n 등)
├─ 🆕 YouTube + 웹클리핑 통합 처리 Skill (품질 관리 포함)
├─ 🆕 로그 기반 감사 추적 시스템 구축
└─ 팀에서 공유할 수 있는 Skill 만들기
```

---

## 빠른 참고: Skill 체크리스트

### 만들 때 확인 사항

- [ ] 폴더 생성됨 (`~/.claude/skills/[name]/`)
- [ ] SKILL.md 작성됨
- [ ] 명확한 사용 예제 있음
- [ ] 처리 워크플로우가 Step by Step 설명됨

### 규칙 정의할 때

- [ ] JSON 파일 형식이 올바름 (온라인 검증기로 확인)
- [ ] priority 값이 명확함
- [ ] 순환 규칙이 없음
- [ ] 기본값(fallback)이 있음

### 품질 기준 정의할 때

- [ ] Feynman 기법 적용 여부 확인
- [ ] 스토리텔링 구조 명확함
- [ ] 3단계 예제가 있음
- [ ] 체크리스트로 검증 가능함

### 테스트할 때

- [ ] 직접 명령어로 테스트
- [ ] 예제대로 따라해보기
- [ ] 메타데이터가 올바르게 생성되는지 확인
- [ ] 파일이 올바른 위치에 저장되는지 확인

### 🆕 YouTube 처리 기능 추가 시

- [ ] YouTube URL 감지 로직이 올바른가?
- [ ] MCP YouTube Server와 yt-dlp 폴백이 설정되어 있는가?
- [ ] 자막 다운로드 성공 여부 확인
- [ ] 필러 단어 제거 규칙이 적용되는가?
- [ ] 타임스탐프 섹션 분할이 올바른가?
- [ ] Feynman 기법이 적용되어 있는가?
- [ ] 메타데이터에 영상 정보가 포함되는가?
- [ ] 번역 기능이 있다면 번역 품질 확인

---

## 📊 Skill 구조 한눈에 비교

| 구성 | 필수 | 형식 | 목적 |
|------|------|------|------|
| **SKILL.md** | ✅ | 마크다운 | 전체 가이드 & 사용법 |
| **JSON 규칙** | ❌ (권장) | JSON | 자동 분류 규칙 |
| **Enhancement 규칙** | ❌ (권장) | 마크다운 | 품질 기준 정의 |
| **Translation 가이드** | ❌ | 마크다운 | 다국어 지원 |

---

## 🎓 파인만 기법으로 설명한 이유

이 가이드에서 계속 **"5살 버전"**이나 **"비유"**를 썼는데, 이건 의도적입니다:

### 파인만 기법의 4단계

```
1️⃣ 개념 선택
   "Claude Skill이 뭐지?"

2️⃣ 어린아이처럼 설명
   "한 번에 같은 일을 반복해서 하도록 가르치는 것"

3️⃣ 빠진 부분 찾기
   "그런데 왜 JSON이 필요할까?"
   → 모르면, 찾아보고 배움

4️⃣ 단순하게 정리
   "JSON은 규칙을 명확하게 쓰는 방법"
```

### 왜 이 방법을 써야 하나?

> **이해 없는 암기는 잊혀진다**

Skill을 만들 때도 마찬가지:
- 각 파일이 **왜** 필요한지 이해하면
- 나중에 **새로운 규칙**을 추가할 때 쉽게 응용 가능
- 문제가 생겼을 때 **스스로 해결** 가능

---

## 🎯 최종 목표

이 가이드를 읽은 후, 당신은:

✅ **이해할 수 있어야 함**
- Claude Skill이 무엇인가
- 왜 필요한가
- 어떻게 작동하는가

✅ **만들 수 있어야 함**
- 간단한 Skill (5분)
- 중간 정도 Skill (20분)
- 복잡한 Skill (2시간)

✅ **개선할 수 있어야 함**
- 기존 Skill의 규칙 수정
- 새로운 카테고리 추가
- 품질 기준 정의

---

## 연결된 노트

- [[Claude Code 완전 가이드]] - Claude Code 전체 기능 이해
- [[MCP 시스템 활용하기]] - Skill과 함께 쓸 수 있는 MCP 서버
- [[프롬프트 엔지니어링 기초]] - 더 나은 Skill 프롬프트 작성법
- [[Obsidian 활용 가이드]] - Skill 만드는 실제 사례
- **🆕 [[clipping-processor_실전_분석]]** - YouTube 기능이 통합된 실전 예제
- **🆕 [[Claude_Skills_마스터_학습_경로]]** - YouTube 기능까지 포함한 완전한 학습 경로

---

## 📝 버전 정보

- **작성 날짜**: 2025-11-16
- **최종 업데이트**: 2025-11-17
- **상태**: ✅ 완료 (YouTube 기능 통합)
- **대상**: Claude Code 초보자
- **난이도**: ⭐⭐ (중상)
- **예상 학습 시간**: 30분 (읽기) + 1.5시간 (실습, YouTube 포함)
- **새로운 기능**: 🆕 YouTube 영상 처리 (자막 다운로드, Feynman 변환, 메타데이터 생성)

---

**💡 Pro Tip**: 이 가이드를 읽으면서 **직접 첫 번째 Skill을 만들어보세요**. 이론과 실습을 함께하면 훨씬 잘 이해됩니다! 🚀
