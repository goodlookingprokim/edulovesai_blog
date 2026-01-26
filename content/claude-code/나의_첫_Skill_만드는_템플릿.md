---
title: "나의 첫 Skill 만드는 템플릿 (복사해서 바로 쓰기)"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - claude-skills
  - 템플릿
  - 초보자
  - 실습자료
status: "완료"
type: "템플릿"
priority: "high"
estimated_reading_time: "10분"
para_category: "R - Resources/AI 및 개발/개발 도구 가이드/Claude Code/"
related_notes:
  - "[[Claude_Skills_초보자_가이드]]"
  - "[[clipping-processor_실전_분석]]"
---

# 나의 첫 Skill 만드는 템플릿

> **이 문서는 복사해서 바로 쓸 수 있는 템플릿입니다**. 자신의 Skill을 만들 때 이 템플릿을 기초로 수정하면서 배우세요.

---

## 📋 목차

1. [[#사전 준비]]
2. [[#파일 1: SKILL.md 템플릿]]
3. [[#파일 2: category_mapping.json 템플릿]]
4. [[#파일 3: enhancement_rules.md 템플릿]]
5. [[#체크리스트]]
6. [[#자주 하는 실수]]

---

## 사전 준비

### Step 1: 폴더 만들기

터미널에서 다음을 실행:

```bash
# 1. 폴더 생성
mkdir -p ~/.claude/skills/my-skill-name

# 2. 폴더로 이동
cd ~/.claude/skills/my-skill-name

# 3. 파일 생성
touch SKILL.md
touch category_mapping.json
touch enhancement_rules.md
```

### Step 2: 템플릿 결정

**자신의 Skill이 할 일은?**
- 텍스트 변환? (예: 마크다운 → HTML)
- 파일 분류? (예: 파일을 주제별로 정렬)
- 콘텐츠 향상? (예: 원본 텍스트 → 정리된 노트)
- 메타데이터 생성? (예: 파일에 YAML 헤더 추가)

**난이도 선택:**
- 🟢 쉬움: 텍스트 변환 (2시간)
- 🟡 중간: 콘텐츠 향상 + 분류 (4시간)
- 🔴 어려움: 다국어 지원 + 로깅 (8시간)

---

## 파일 1: SKILL.md 템플릿

### 최소 버전 (30분에 만들기)

```markdown
---
name: your-skill-name
description: "당신의 Skill이 하는 일을 한 문장으로"
---

# 당신의 Skill 이름

## 개요

이 Skill은 [입력]을 [출력]으로 변환합니다.

예: "웹 글을 읽기 좋은 노트로 변환합니다"

## 핵심 기능

1. **첫 번째 기능**
   - 설명

2. **두 번째 기능**
   - 설명

## 사용 방법

### 기본 사용
\`\`\`
your-skill-name skill을 사용해서 [입력]을 처리해줘
\`\`\`

### 예제 1
\`\`\`
your-skill-name skill으로 "파일명.md"를 [옵션]과 함께 처리해줘
\`\`\`

## 처리 과정

### STEP 1: 입력 분석
- 입력이 [뭔지] 확인

### STEP 2: 처리
- [어떻게] 변환

### STEP 3: 출력
- [어디에] 저장

## 생성되는 메타데이터

\`\`\`yaml
---
title: "제목"
created: '2025-11-16'
status: "완료"
tags:
  - 태그1
  - 태그2
---
\`\`\`

## 품질 기준

- [ ] [기준 1]
- [ ] [기준 2]
- [ ] [기준 3]
```

### 중간 버전 (1시간, clipping-processor 정도)

위의 최소 버전에 다음을 추가:

```markdown
## 📊 처리 로그

processing_log.md에 다음을 기록:
- 처리된 파일 목록
- 성공/실패 여부
- 처리 시간
- 생성된 메타데이터

### 로그 샘플
\`\`\`markdown
# 처리 로그

## 처리 요약
- **총 처리:** 3개
- **성공:** 3개
- **마지막 업데이트:** 2025-11-16

### 처리된 파일
- 파일1.md → 결과1.md (성공)
- 파일2.md → 결과2.md (성공)
\`\`\`

## 🎓 적용 기법

### Feynman 기법
- 복잡한 개념을 단순하게

### Storytelling
- WHY → WHAT → HOW 순서

## ⚠️ 일반적 문제와 해결책

**"파일이 처리되지 않았어"**
→ [해결책]

**"메타데이터가 생성 안 됨"**
→ [해결책]
```

---

## 파일 2: category_mapping.json 템플릿

### 최소 버전 (분류 1가지만)

```json
{
  "description": "당신의 Skill이 분류하는 규칙",
  "mappings": [
    {
      "priority": 1,
      "keywords": ["keyword1", "keyword2"],
      "folder": "R - Resources/폴더/",
      "tags": ["tag1", "tag2"],
      "description": "이 규칙의 설명"
    },
    {
      "priority": 2,
      "keywords": ["기타"],
      "folder": "R - Resources/기타/",
      "tags": ["기타"],
      "description": "기본값 (어느 것도 맞지 않으면)"
    }
  ]
}
```

### 실전 버전 (분류 3~5가지)

```json
{
  "description": "당신의 분류 규칙",
  "created": "2025-11-16",
  "mappings": [
    {
      "priority": 1,
      "keywords": ["핵심키워드1", "keyword-1"],
      "folder": "R - Resources/주제1/",
      "tags": ["tag1", "특징1"],
      "description": "주제 1 관련"
    },
    {
      "priority": 2,
      "keywords": ["핵심키워드2"],
      "folder": "R - Resources/주제2/",
      "tags": ["tag2", "특징2"],
      "description": "주제 2 관련"
    },
    {
      "priority": 3,
      "keywords": ["기타"],
      "folder": "R - Resources/기타/",
      "tags": ["기타"],
      "description": "분류되지 않은 항목"
    }
  ],
  "classification_algorithm": {
    "step1": "파일 제목과 처음 500자에서 키워드 추출",
    "step2": "keywords에서 정확히 일치하는 항목 찾기",
    "step3": "일치하는 항목 중 priority가 가장 높은 것 선택",
    "step4": "일치하는 항목이 없으면 기본값 사용"
  },
  "notes": [
    "키워드 매칭은 대소문자 무시",
    "여러 키워드 일치시 priority가 낮은(숫자 작은) 항목 우선"
  ]
}
```

### 📝 JSON 작성 팁

**올바른 형식:**
```json
✅ {"key": "value"}
✅ {"key": "value", "number": 1}
✅ {"array": ["item1", "item2"]}
```

**틀린 형식:**
```json
❌ {"key": "value",}  // 마지막에 쉼표 있음
❌ {"key": value}     // 값에 따옴표 없음
❌ {'key': 'value'}   // 홑따옴표 사용
```

**JSON 검증 도구:**
- jsonlint.com
- Visual Studio Code (자동 검증)

---

## 파일 3: enhancement_rules.md 템플릿

### 최소 버전 (기본 규칙만)

```markdown
# 콘텐츠 향상 규칙

## Feynman 기법 적용

### 원칙
- 어려운 단어는 다시 설명
- 일상 비유 사용
- 5살 아이도 이해하도록

### 예제

❌ 나쁜 예:
"이 알고리즘은 O(n log n) 복잡도를 가집니다"

✅ 좋은 예:
"이 방법은 데이터가 많을수록 조금 더 느려지지만,
다른 방법보다는 훨씬 빠릅니다.
마치 책장에서 책을 찾을 때, 한 권씩 확인하는 것보다
중간부터 시작해서 찾는 것처럼요."

## Storytelling: WHY → WHAT → HOW

### WHY (왜?)
- 왜 이것이 중요한가?
- 어떤 문제를 해결하는가?

### WHAT (뭐?)
- 이것이 정확히 무엇인가?
- 어떻게 작동하는가?

### HOW (어떻게?)
- 구체적으로 어떻게 쓰는가?
- 단계별 가이드

## 3단계 예제

### 🌱 기초
[가장 간단한 예제]

### 🌿 중급
[실제 사용하는 형태]

### 🌳 고급
[최적화되고 복잡한 형태]

## 품질 체크리스트

- [ ] 어려운 단어가 설명되었나?
- [ ] 일상 비유가 있나?
- [ ] WHY→WHAT→HOW 순서인가?
- [ ] 3단계 예제가 있나?
- [ ] 예제가 실제로 작동하나?
```

### 중간 버전 (품질 점수 포함)

```markdown
# 콘텐츠 향상 규칙

[위의 내용 + 다음 추가]

## 품질 점수 계산

### 점수 항목

| 항목 | 배점 | 기준 |
|------|------|------|
| Feynman 적용 | 30점 | 어려운 용어 설명됨 |
| Storytelling | 30점 | WHY→WHAT→HOW 순서 |
| 예제 | 25점 | 3단계 예제 완성 |
| 가독성 | 15점 | 문장이 짧고 명확 |

### 등급

- **90점 이상**: 매우 좋음 ⭐⭐⭐⭐⭐
  - 배포 가능 상태
  - 모든 기준 만족

- **80~89점**: 좋음 ⭐⭐⭐⭐
  - 약간의 개선 후 배포 가능
  - 대부분 기준 만족

- **70~79점**: 만족 ⭐⭐⭐
  - 개선 필요
  - 일부 기준 미흡

- **70점 미만**: 개선 필요 ⚠️
  - 다시 작성 필요
  - 기본 기준 미충족
```

---

## 체크리스트

### 만들기 전에

- [ ] 자신의 Skill 이름 결정했나?
- [ ] Skill이 할 일을 한 문장으로 설명 가능한가?
- [ ] 입력과 출력이 명확한가?

### 파일 만든 후에

**SKILL.md**
- [ ] 개요 섹션이 명확한가?
- [ ] 사용 예제가 실제로 쓸 수 있나?
- [ ] 처리 과정이 Step by Step 설명되나?
- [ ] 생성되는 메타데이터 샘플이 있나?

**category_mapping.json**
- [ ] JSON 형식이 올바른가? (jsonlint.com 확인)
- [ ] priority 값이 논리적인가?
- [ ] 기본값(fallback)이 있나?
- [ ] 각 규칙에 설명이 있나?

**enhancement_rules.md**
- [ ] Feynman 기법 규칙이 있나?
- [ ] Storytelling 규칙이 있나?
- [ ] 3단계 예제 규칙이 있나?
- [ ] 품질 체크리스트가 있나?

### 테스트

- [ ] 직접 명령어로 Skill 사용해보기
- [ ] 메타데이터 생성이 올바른가?
- [ ] 파일이 올바른 위치에 저장되는가?
- [ ] 로그가 기록되는가?

---

## 자주 하는 실수

### 실수 1: 너무 복잡하게 시작

❌ 처음부터 만들려는 것:
```
- 5가지 기능
- 10가지 분류 규칙
- 로깅 시스템
- 다국어 지원
```

✅ 올바른 순서:
```
1단계: 기본 기능 1가지만 (2시간)
2단계: 분류 규칙 추가 (1시간)
3단계: 향상 규칙 추가 (1시간)
4단계: 고급 기능 추가 (차후)
```

### 실수 2: JSON 형식 오류

❌ 흔한 실수들:
```json
{
  "keywords": ["python", "javascript"],
  // 주석 (JSON에서 안 됨!)
}
```

✅ 올바른 형식:
```json
{
  "keywords": ["python", "javascript"],
  "note": "주석은 따옴표로 감싸기"
}
```

**해결: jsonlint.com에서 항상 검증하기**

### 실수 3: 우선순위(priority) 설정 실수

❌ 같은 priority:
```json
{"priority": 1, "keywords": ["Claude Code", "MCP"]},
{"priority": 1, "keywords": ["Claude"]}
```
→ 둘 다 priority 1이면 어느 것을 먼저 적용할까? 혼란!

✅ 명확한 priority:
```json
{"priority": 1, "keywords": ["Claude Code"]},  // 가장 구체적
{"priority": 2, "keywords": ["Claude"]},      // 그 다음
{"priority": 3, "keywords": ["기타"]}          // 마지막 (기본값)
```

### 실수 4: YAML 메타데이터 형식 오류

❌ 틀린 YAML:
```yaml
---
title: 제목          # 따옴표 없음 (숫자 시작하면 필요)
tags:
  - tag1
  tag2              # 들여쓰기 안 맞음
status: 완료        # 한글도 따옴표로 감싸기
---
```

✅ 올바른 YAML:
```yaml
---
title: "제목"
created: '2025-11-16'
tags:
  - tag1
  - tag2
status: "완료"
---
```

### 실수 5: 예제가 작동하지 않음

❌ 나쁜 예제:
```
your-skill을 사용해서 [입력]을 처리해줘
```
→ 너무 모호함, 실제로 따라할 수 없음

✅ 좋은 예제:
```
your-skill으로 "README.md" 파일을 마크다운에서 HTML로 변환해줘
```
→ 실제로 쓸 수 있는 명령어, 따라하기 쉬움

---

## 빠른 참고: 폴더 구조 다시 보기

```
~/.claude/skills/your-skill-name/
├── SKILL.md                  ← 메인 가이드
├── category_mapping.json     ← 분류 규칙 (필요하면)
├── enhancement_rules.md      ← 향상 규칙 (필요하면)
└── README.md                 ← (선택) 전체 개요
```

---

## 예제: 실제로 만든 예제 (15분 Skill)

### 요구사항
"마크다운 파일의 제목을 자동으로 정규화하는 Skill"

### SKILL.md

```markdown
# markdown-title-normalizer

## 개요
마크다운 파일의 모든 제목을 일관된 형식으로 변환합니다.

## 사용 방법
markdown-title-normalizer skill으로 "README.md"를 정규화해줘

## 처리 과정

STEP 1: 파일 읽기 → 모든 제목(#, ##, ###) 확인
STEP 2: 정규화 규칙 적용 → 일관된 형식으로 변환
STEP 3: 파일 저장 → 정규화된 파일 생성
```

### category_mapping.json

```json
{
  "mappings": [
    {
      "priority": 1,
      "keywords": ["documentation", "README", "가이드", "문서"],
      "folder": "R - Resources/",
      "tags": ["문서", "정규화"]
    }
  ]
}
```

### enhancement_rules.md

```markdown
# 제목 정규화 규칙

## 규칙 1: 일관된 대소문자
❌ `# hello world` → ✅ `# Hello World`

## 규칙 2: 특수문자 제거
❌ `# Section 1!!!` → ✅ `# Section 1`

## 규칙 3: 번호 형식 통일
❌ `# 1. 개요` / `# 2) 내용` → ✅ `# 1. 개요` / `# 2. 내용`
```

---

## 다음 단계

1. **템플릿 다운로드**: 이 문서의 각 섹션 복사
2. **파일 수정**: [자신의 Skill] 정보로 수정
3. **테스트**: 직접 명령어로 실행
4. **개선**: 피드백 반영해서 업데이트

---

## 추가 자료

- [[Claude_Skills_초보자_가이드]] - 기초 이론
- [[clipping-processor_실전_분석]] - 복잡한 예제 분석
- [[Claude Code 완전 가이드]] - Claude Code 기능

---

**💡 Pro Tip**: 처음에는 "완벽함"보다 "완성"을 목표로 하세요. 기본 Skill을 만든 후, 계속 개선하는 것이 더 빠르고 효과적입니다! 🚀

**📝 버전 정보**
- 작성: 2025-11-16
- 상태: ✅ 완료
- 대상: 초보자
- 난이도: ⭐ (쉬움)
