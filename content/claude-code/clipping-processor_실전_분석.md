---
title: "클리핑 처리 Skill 뜯어보기: 실전 사례 분석"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - claude-skills
  - clipping-processor
  - 실전분석
  - 사례연구
status: "완료"
type: "실전가이드"
priority: "high"
estimated_reading_time: "15분"
para_category: "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/"
related_notes:
  - "[[Claude_Skills_초보자_가이드]]"
  - "[[Claude Code 완전 가이드]]"
  - "[[웹 클리핑 자료]]"
---

# clipping-processor 실전 분석: 초보자도 알 수 있게 설명

> **이 가이드는 실제로 작동하는 'clipping-processor' Skill을 분석합니다**. 초보 개발자가 자신의 Skill을 만들 때 참고할 수 있도록 **실제 예제 코드와 설계 결정**을 모두 설명합니다.

---

## 📋 목차

1. [[#이 Skill이 해결하는 문제]]
2. [[#Skill의 파일 구조]]
3. [[#SKILL.md: 메인 가이드 분석]]
4. [[#category_mapping.json: 규칙 정의]]
5. [[#enhancement_rules.md: 품질 기준]]
6. [[#처리 과정: 실제 예제로 따라하기]]
7. [[#왜 이렇게 설계했을까]]
8. [[#나만의 Skill을 만들 때 활용하기]]

---

## 이 Skill이 해결하는 문제

### 🎯 Before (Skill 없음)

```
어제 유튜브에서 "Claude Code 완전 정복" 영상 발견
↓
Clippings 폴더에 링크만 저장
↓
"나중에 정리하지" 하고 넘어감
↓
1주일 후...
❌ 뭐 했던 영상이었더라? (기억 안 남)
❌ 어디에 저장했더라? (Clippings에만 링크)
❌ 핵심이 뭐였더라? (기록 안 남)
```

### ✅ After (Skill 있음)

```
유튜브에서 좋은 글 발견
↓
Clippings 폴더에 저장
↓
clipping-processor skill으로 처리
↓
✅ 자동으로 분류 (R - Resources/유튜브 정리/)
✅ 자동으로 핵심 정리 (Feynman 기법 적용)
✅ 자동으로 메타데이터 생성 (제목, 태그, 읽기 시간)
✅ 자동으로 관련 노트 연결
✅ 원본은 Processed 폴더로 이동 (미처리와 구분)
```

---

## Skill의 파일 구조

### 전체 폴더 구조

```
/Users/jmacpro/.claude/skills/clipping-processor/
│
├── 📄 SKILL.md                    ← 메인 가이드 (필수!)
│   └─ 전체 기능, 사용법, 워크플로우 설명
│
├── 🗂️ category_mapping.json       ← 분류 규칙
│   └─ 12개의 주제 카테고리와 키워드 매핑
│
├── 🚀 enhancement_rules.md        ← 품질 향상 규칙
│   └─ Feynman 기법, 스토리텔링, 3단계 예제 규칙
│
├── 🌍 translation_guide.md        ← 번역 규칙 (선택)
│   └─ 다국어 처리 및 이중 언어 노트 구조
│
└── 📄 README.md                   ← 개요 (최상위 설명)
    └─ 전체 Skill 소개 및 빠른 시작 가이드
```

### 파일 간의 관계

```
사용자가 지시
    ↓
SKILL.md의 처리 워크플로우 확인
    ↓
category_mapping.json으로 분류
    ↓
enhancement_rules.md로 품질 향상
    ↓
translation_guide.md로 필요시 번역
    ↓
최종 결과물 생성
```

---

## SKILL.md: 메인 가이드 분석

### 왜 이 파일이 첫 번째일까?

> **SKILL.md = Skill의 심장**
- 사용자가 가장 먼저 읽는 파일
- Claude가 처리 과정을 결정하는 기준이 됨
- 전체 Skill의 "규칙서"

### SKILL.md의 구조 (5가지 섹션)

#### 1️⃣ **개요 (Overview)**

```markdown
이 Skill은 Obsidian Vault의 Clippings 폴더에 있는
웹 클리핑들을 자동으로 분석하여 **고품질의 교육용 노트**로 변환합니다.
```

**왜 이 부분이 필요한가?**
- 사용자가 **처음 30초** 안에 이해할 수 있도록
- 이 Skill이 **자기를 위한 것인지** 판단

#### 2️⃣ **핵심 기능 (5가지)**

```
1. 스마트 콘텐츠 향상
   - Feynman Technique: 복잡한 개념 → 단순한 설명
   - Storytelling: WHY → WHAT → HOW
   - 3단계 예제: 기초 / 중급 / 고급

2. PARA 기반 자동 분류
   - AI/기술 → AI 및 개발 폴더
   - YouTube → 유튜브 정리 폴더

3. 메타데이터 자동 생성
   - YAML frontmatter 표준화
   - 읽기 시간 계산

4. 번역 기능 (선택)
   - 자동 언어 감지
   - 전문 번역

5. 파일 정리 및 로깅
   - 원본 → Processed 폴더 이동
   - processing_log.md 기록
```

**왜 이렇게 나눴나?**
- 사용자가 **"아, 내가 필요한 기능이 있네"** 빠르게 확인
- Claude도 처리해야 할 **5가지 작업** 명확히 파악

#### 3️⃣ **사용 방법 (Usage Examples)**

```
기본 사용:
clipping-processor skill을 사용해서 Clippings 폴더의 모든 파일을 처리해줘

개별 파일:
clipping-processor skill로 "Claude Skills" 파일을 처리해줘

번역 포함:
clipping-processor skill로 일본어 클리핑을 번역해서 처리해줘
```

**왜 구체적인가?**
- 사용자가 **"자, 이렇게 명령어 쓰면 돼"** 바로 알 수 있음
- 다양한 사용 사례를 보여줌

#### 4️⃣ **처리 워크플로우 (Step by Step)**

```
STEP 1: 파일 탐지 및 분석
├─ 파일 형식 확인 (.txt, .md, .pdf)
├─ 언어 감지 (한/일/영)
└─ 메타데이터 추출

STEP 2: 콘텐츠 향상
├─ Feynman 기법 적용
├─ 스토리텔링 (WHY→WHAT→HOW)
└─ 3단계 예제 추가

... (이하 생략)
```

**왜 이렇게 자세히?**
- **투명성**: 사용자가 내부 과정을 이해
- **신뢰**: "아, 이렇게 처리하는구나" 확신
- **디버깅**: 뭔가 잘못됐을 때 어디서 잘못됐는지 알 수 있음

#### 5️⃣ **생성되는 메타데이터 (Output Format)**

```yaml
---
title: "명확한 제목"
source: "원본 URL"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - clippings
  - 자동생성/태그
status: "분석완료"
type: "웹클리핑"
priority: "medium"
estimated_reading_time: "5분"
para_category: "R - Resources/AI 및 개발/AI 기술 자료/"
related_notes:
  - "[[관련노트1]]"
  - "[[관련노트2]]"
---
```

**왜 이 구조인가?**
- **명확성**: 어떤 필드가 만들어지는지 사전에 알려줌
- **예측 가능**: 사용자가 "아, 이렇게 만들어지겠네" 예상 가능

---

## category_mapping.json: 규칙 정의

### 이 파일이 하는 일

```
input: "Claude Code 관련 웹 글"
  ↓
category_mapping.json에서 "Claude Code" 키워드 찾음
  ↓
해당 규칙 적용 (priority 1)
  ↓
output: "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/" 폴더에 저장
```

### 구체적인 예제로 이해하기

#### 규칙 1: Claude Code 글

```json
{
  "priority": 1,
  "keywords": ["Claude Code", "claude code", "claude-code"],
  "folder": "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/",
  "tags": ["claude-code", "개발도구", "자동화"],
  "description": "Claude Code IDE 관련 콘텐츠"
}
```

**작동 과정:**
```
1. 파일 제목과 처음 500자 검토
   "Claude Code를 이용한 AI 앱 개발" ← 이 텍스트에서

2. keywords와 비교
   "Claude Code" ← 매칭됨! ✅

3. priority 확인
   priority: 1 ← 가장 높음 (즉시 적용)

4. 폴더에 저장
   folder: "R - Resources/.../Claude Code/" ← 여기에 저장

5. 태그 추가
   tags: ["claude-code", "개발도구", "자동화"] ← 자동으로 붙음
```

#### 규칙 2: YouTube 영상

```json
{
  "priority": 3,
  "keywords": ["YouTube", "유튜브", "영상", "강의", "비디오"],
  "folder": "R - Resources/교육 및 학습/유튜브 정리/",
  "tags": ["youtube", "영상", "교육"],
  "description": "YouTube 영상 및 강의 요약"
}
```

### 우선순위 시스템 (Priority)

```
priority: 1 ← 가장 먼저 확인
├─ Claude Code
├─ Claude Skills
└─ MCP

priority: 2 ← 두 번째
├─ 프롬프트 엔지니어링
├─ AI 일반
└─ Obsidian

priority: 3 ← 세 번째
├─ YouTube
├─ 웹클리핑
└─ 마케팅

priority: 4 ← 네 번째
└─ 프로그래밍

priority: 5 ← 기본값 (아무것도 안 맞으면)
└─ 기타 (R - Resources/기타/)
```

**왜 우선순위가 필요한가?**

예를 들어, 파일에 다음 키워드들이 모두 포함되어 있다면?
- "Claude Code로 MCP Skill을 만드는 법"

어느 폴더에 저장할까?
```
priority로 결정:

Claude Code (priority 1) ← 가장 높음 → 이걸로 분류!
MCP (priority 2)
Skill (priority 1) ← 같은 우선순위지만, 먼저 나온 것 (Claude Code)
```

---

## enhancement_rules.md: 품질 향상 규칙

### 이 파일이 하는 일

```
원본 웹 글 (그냥 읽기 힘들고, 구조 없음)
    ↓
enhancement_rules.md의 규칙 적용
    ↓
향상된 노트 (쉽게 이해되고, 구조 있음)
```

### 3가지 핵심 기법

#### 기법 1: Feynman Technique

**원리**: "5살 아이도 이해할 수 있을까?"

```
나쁜 예:
"LLM의 attention mechanism은 query-key-value matrices를 통해
token 간의 관계성을 계산하는 softmax 기반 가중치 체계입니다."
← 뭐라고 했는데 하나도 모르겠음

좋은 예:
"LLM이 글을 읽을 때, 각 단어가 다른 단어들과
얼마나 '관련이 있는지' 계산하는 거예요.
마치 우리가 대화할 때, 지금 누가 말한 내용과
앞에서 말한 내용을 연결시켜 이해하는 것처럼요."
← 아, 그런 거네!
```

**적용 단계:**
1. 어려운 개념 찾기 → attention mechanism
2. 한국말로 정의 → "관련성을 계산하는 것"
3. 일상 비유 추가 → 대화할 때 맥락 연결하는 것처럼

#### 기법 2: Storytelling (WHY → WHAT → HOW)

```
WHY: 왜 배워야 하나?
├─ "Claude Code를 쓰면 개발 시간이 50% 줄어듭니다"
└─ (동기 부여)

WHAT: 이게 뭔가?
├─ "Claude Code는 AI 기반 코드 에디터입니다"
├─ "특징은 3가지입니다"
└─ (개념 설명)

HOW: 어떻게 쓰는가?
├─ "Step 1: Claude Code 설치"
├─ "Step 2: 프롬프트 입력"
└─ (실행 방법)
```

**왜 이 순서인가?**
```
❌ 잘못된 순서 (HOW → WHAT → WHY):
"pip install claude-code" ← 왜 설치해야 하는지 모른 상태
"이게 뭐하는 건데?" ← 혼란
"아, 그래서 설치하는 거네" ← 너무 늦음

✅ 올바른 순서 (WHY → WHAT → HOW):
"개발 시간을 줄일 수 있습니다" ← 동기부여
"AI 코드 에디터예요" ← 개념 파악
"이렇게 설치합니다" ← 자연스러운 다음 단계
```

#### 기법 3: 3단계 예제

```
🌱 기초 (Level 1: 가장 간단)
print("Hello World")

🌿 중급 (Level 2: 실무)
def process_data(input):
    filtered = [x for x in input if x > 0]
    return sorted(filtered)

🌳 고급 (Level 3: 최적화)
import asyncio

async def process_data_async(data: list[int]) -> list[int]:
    results = await asyncio.gather(
        *[validate(x) for x in data]
    )
    return sorted(results)
```

**왜 3단계인가?**

사람의 학습 곡선:
- Level 1: 핵심 이해
- Level 2: 실제 적용
- Level 3: 깊이 있는 학습

**단계를 건너뛰면?**
```
❌ Level 1만: "개념은 알겠는데 뭐가 달라?"
❌ Level 2만: "코드가 복잡해서 뭔지 모르겠어"
❌ Level 3만: "너무 어려워" (포기)

✅ Level 1→2→3: "아, 이렇게 발전하는구나" (자연스러움)
```

### 품질 점수 계산

```
점수 계산 항목:

1. 메타데이터 완성도: 30점
   - title, created, tags, status 등 모두 있나?

2. 콘텐츠 구조: 30점
   - WHY→WHAT→HOW 순서인가?
   - 섹션이 명확한가?

3. 예제 품질: 25점
   - 3단계 예제가 있나?
   - 실제로 작동하나?

4. 가독성: 15점
   - 문장이 너무 길지 않나?
   - 핵심이 눈에 띄나?

점수 등급:
- 90점 이상: 매우 좋음 ⭐⭐⭐⭐⭐
- 80~89점: 좋음 ⭐⭐⭐⭐
- 70~79점: 만족 ⭐⭐⭐
- 70점 미만: 개선 필요 ⚠️
```

---

## 처리 과정: 실제 예제로 따라하기

### 시나리오: 유튜브 영상 링크 처리

```
📝 입력 파일:
파일 이름: "Claude Code Tutorial.md"
파일 내용:
---
좋은 Claude Code 튜토리얼을 발견했습니다.
https://youtube.com/watch?v=example
```

### Step 1: 파일 탐지 및 분석

```
✅ 파일 형식: .md ← 마크다운
✅ 언어 감지: 한국어 + 영어 혼합
✅ 메타데이터 추출:
   - 제목: "Claude Code Tutorial"
   - URL: youtube.com
   - 생성일: 2025-11-16
```

### Step 2: 콘텐츠 향상

원본:
```
좋은 Claude Code 튜토리얼을 발견했습니다.
```

향상된 버전 (Feynman + Storytelling):
```
## WHY: 왜 이 영상이 도움이 될까?

Claude Code는 개발 시간을 50% 이상 줄 수 있습니다.
이 튜토리얼에서는 실제 프로젝트를 통해
단계별로 배울 수 있습니다.

## WHAT: Claude Code 튜토리얼이 뭐죠?

이 영상은 다음을 다룹니다:
- Claude Code의 기본 사용법
- 실제 앱 만들기
- 일반적인 실수 피하기

## HOW: 어떻게 활용할까?

🌱 기초: 영상을 처음부터 끝까지 본다
🌿 중급: 영상과 함께 따라 코딩해본다
🌳 고급: 자신의 프로젝트에 적용해본다
```

### Step 3: 주제 분류

```
keywords 확인:
- "Claude Code" → 매칭! ✅
- "YouTube" → 매칭! ✅

priority 비교:
- Claude Code (priority 1) ← 더 높음!
- YouTube (priority 3)

분류 결정:
📁 R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/
```

### Step 4: 메타데이터 생성

```yaml
---
title: "Claude Code 튜토리얼: 초보자 가이드"
source: "https://youtube.com/watch?v=example"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - claude-code
  - youtube
  - 개발도구
  - 튜토리얼
status: "분석완료"
type: "웹클리핑"
priority: "high"
estimated_reading_time: "1시간 30분"
para_category: "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/"
related_notes:
  - "[[Claude Code 완전 가이드]]"
  - "[[Claude_Skills_초보자_가이드]]"
---
```

### Step 5: 파일 배포 및 정리

```
원본 파일 이동:
Clippings/Claude Code Tutorial.md
  ↓
Clippings/Clippings_Processed/Claude Code Tutorial.md

향상된 노트 저장:
R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/
  └─ Claude_Code_튜토리얼_초보자_가이드.md

로그 기록:
Clippings/Clippings_Processed/processing_log.md
```

---

## 왜 이렇게 설계했을까?

### 설계 결정 1: 파일을 4가지로 분리한 이유

```
❌ 한 파일에 모두:
SKILL.md (50KB)
├─ 처리 방법
├─ 분류 규칙
├─ 품질 기준
└─ 번역 규칙
→ 너무 커서 읽기 힘듦

✅ 4개 파일로 분리:
SKILL.md (메인 로직)
category_mapping.json (분류만)
enhancement_rules.md (품질만)
translation_guide.md (번역만)
→ 각각 역할이 명확, 필요한 것만 읽으면 됨
```

### 설계 결정 2: JSON을 사용한 이유

```
❌ 마크다운으로 규칙 쓰기:
- Claude Code: R - Resources/.../Claude Code/
- MCP: R - Resources/.../Claude Code/
→ 파싱이 어려움, 우선순위 표현 모호

✅ JSON으로 규칙 정의:
{
  "priority": 1,
  "keywords": ["Claude Code"],
  "folder": "..."
}
→ 구조화되어서 프로그래밍으로 처리 가능
```

### 설계 결정 3: 3단계 예제를 필수로 한 이유

```
학습 효과 비교:

❌ 예제 없음:
"LLM을 사용하세요" → 뭔지 모름

❌ 예제 1개:
"print('Hello')" → 너무 간단

✅ 예제 3개:
print('Hello')           (기초: 단순)
→
def process(x): ...      (중급: 실무)
→
async def process(): ... (고급: 최적화)
→ 단계적 성장이 보임
```

### 설계 결정 4: Feynman 기법을 필수로 한 이유

```
목표:
초보자도 이해할 수 있는 고품질 노트

방법:
Feynman 기법 적용 (복잡함 → 단순함)
"이 개념을 5살 아이에게 설명하려면?"

결과:
- 초보자: 쉬워서 이해함
- 중급자: 기초 재확인
- 고급자: 가르치는 관점에서 검토
→ 모든 수준이 만족
```

---

## 나만의 Skill을 만들 때 활용하기

### 패턴 1: clipping-processor처럼 입력→처리→출력

```
당신의 Skill이 할 일:
입력: X
처리: Y로 변환
출력: Z 형태로 저장

예시: 마크다운 → HTML 변환
입력: README.md
처리: 마크다운 문법 변환
출력: README.html
```

### 패턴 2: 분류 규칙 정의 (category_mapping.json)

```json
자신의 Skill에 맞게 수정:

{
  "priority": 1,
  "keywords": ["당신이 분류할 키워드"],
  "folder": "저장할 폴더",
  "tags": ["붙일 태그들"],
  "description": "이게 뭔지 설명"
}
```

### 패턴 3: Feynman 기법 적용 체크리스트

```
내 Skill이 생성하는 콘텐츠마다:
- [ ] 어려운 단어 다시 설명했나?
- [ ] 일상 비유가 있나?
- [ ] 5살 아이도 이해할 수 있을까?
- [ ] 예제가 점진적으로 복잡해지나?
```

### 패턴 4: 품질 점수 시스템 구축

```
당신의 기준에 맞게 점수 항목 정의:

점수 항목:
1. 입력 데이터 완성도: 30점
2. 처리 로직 정확성: 35점
3. 출력 형식 표준화: 20점
4. 사용자 경험: 15점

등급:
- 90점+: 배포 가능
- 80~89: 검토 필요
- 70~79: 개선 필요
```

---

## 🔍 디버깅: 뭔가 안 되면?

### 문제 1: "파일이 분류되지 않았어"

확인 사항:
```
1. category_mapping.json의 키워드가 파일 내용에 있나?
2. 키워드가 대소문자 정확히 일치하나?
3. priority 값이 합리적인가?
4. JSON 형식이 올바른가? (온라인 검증기 사용)
```

### 문제 2: "메타데이터가 생성이 안 됨"

확인 사항:
```
1. YAML 형식이 올바른가?
2. 따옴표가 제대로 붙어있나?
3. 들여쓰기가 정확한가?
4. 필수 필드가 모두 있나?
```

### 문제 3: "처리 결과가 이상해"

확인 사항:
```
1. enhancement_rules.md의 규칙이 적용됐나?
2. 예제가 3단계인가?
3. Feynman 기법이 적용됐나?
4. 품질 점수는 몇 점인가?
```

---

## 📊 clipping-processor의 장점 정리

| 특징 | 장점 | 사용 사례 |
|------|------|---------|
| **파일 분리** | 각 역할이 명확 | 규칙만 수정하려면 JSON만 편집 |
| **category_mapping.json** | 우선순위 시스템 | 여러 키워드가 매칭되면 최고 우선순위 적용 |
| **enhancement_rules** | 품질 보장 | 모든 노트가 같은 기준으로 처리됨 |
| **translation_guide** | 다국어 지원 | 자동 언어 감지 후 처리 |
| **로깅** | 투명성 | 뭐가 처리됐는지 기록 남음 |

---

## 🎯 핵심 배운 점

```
1. Skill = 반복적인 작업을 자동화하는 것
2. 파일 분리 = 유지보수와 확장이 쉬워짐
3. JSON = 규칙을 명확하게 정의
4. Feynman = 모든 수준이 이해 가능
5. 3단계 예제 = 단계적 학습 가능
6. 품질 점수 = 일관된 품질 보장
7. 로깅 = 투명성과 신뢰
```

---

## 다음 단계

1. [[Claude_Skills_초보자_가이드]] 읽기
2. 간단한 Skill 만들어보기
3. clipping-processor의 각 파일 직접 수정해보기
4. 나만의 분류 규칙 추가해보기

---

## 연결된 노트

- [[Claude_Skills_초보자_가이드]] - 기초부터 배우기
- [[Claude Code 완전 가이드]] - Claude Code의 모든 기능
- [[Feynman 기법을 이용한 학습]] - 파인만 기법 깊이 있게 배우기
- [[Obsidian 메타데이터 완벽 가이드]] - YAML 메타데이터 마스터

---

**💡 Pro Tip**: 이 분석을 읽으면서 clipping-processor의 실제 파일들을 열어놓고 비교하며 읽으세요. 이론과 실제가 연결될수록 더 잘 이해됩니다! 🚀

**📝 버전 정보**
- 작성: 2025-11-16
- 최종 업데이트: 2025-11-16
- 상태: ✅ 완료
- 난이도: ⭐⭐⭐ (중상)
