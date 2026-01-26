---
title: "Skill Seeker 완벽 가이드 Part 2 - 실전 사용법과 예제"
created: '2025-10-24'
last_modified: '2025-10-24'
tags:
  - AI/도구
  - Claude/Skills
  - 개발도구/문서화
  - 초보자가이드
  - 실전예제
  - 튜토리얼
status: "완료"
type: "가이드"
priority: "high"
---

# 🚀 Skill Seeker 완벽 가이드 Part 2 - 실전 사용법과 예제

> **이번 Part에서는:**
> 
> - 실제로 첫 Skill을 만들어봐요! 🎯
> - 단계별로 따라하면서 배워요! 📝
> - 3가지 레벨 (초급/중급/고급) 예제 제공! 🌱🌿🌳
> - 문제가 생기면 어떻게 해결하는지 배워요! 🔧

---

## 📋 목차

1. [[#첫 번째 Skill 만들기 - React 예제]]
2. [[#두 번째 Skill 만들기 - 더 쉽게]]
3. [[#다양한 방법으로 Skill 만들기]]
4. [[#PDF 문서로 Skill 만들기]]
5. [[#Skill 업로드하고 사용하기]]
6. [[#실전 팁과 요령]]

---

## 첫 번째 Skill 만들기 - React 예제

### 🎬 전체 과정 미리보기

**이번 여정의 지도:**
```
출발점 (지금)
   ↓
설정 파일 확인 (1분)
   ↓
Skill 생성 시작 (명령어 입력)
   ↓
커피 한 잔 타임 ☕ (20~40분 대기)
   ↓
결과 확인
   ↓
Claude에 업로드
   ↓
도착점 (React 전문가 Claude!) 🎉
```

### 🌱 초급 - 가장 쉬운 방법 (프리셋 사용)

**이 방법은 누구에게 좋을까요?**
- 코딩 처음 배우는 분 👶
- 빨리 결과를 보고 싶은 분 ⚡
- 설정 파일 만들기 무서운 분 😰

#### Step 1: 터미널 열고 폴더 이동

```bash
# 1. 터미널 열기
#    Mac: ⌘(Command) + Space → "Terminal" 입력
#    Windows: 시작 → "cmd" 검색

# 2. Skill Seeker 폴더로 이동
cd Desktop/Skill_Seekers

# 3. 가상환경 활성화 (중요!)
source venv/bin/activate
# Windows는: venv\Scripts\activate

# 성공하면 이렇게 보여요:
(venv) YourName@Computer Skill_Seekers %
#  ↑ 이게 보이면 성공!
```

**🤔 생각해보기:**
- `cd`는 "change directory"의 약자예요 (폴더 이동)
- `source`는 "이 파일을 실행해줘"라는 뜻이에요
- `venv/bin/activate`가 가상환경을 켜는 스위치예요

#### Step 2: 프리셋 파일 확인하기

```bash
# 어떤 프리셋이 있는지 볼까요?
ls configs/

# 결과:
ansible-core.json
django.json
fastapi.json
godot.json
react.json    ← 우리가 사용할 파일!
vue.json

# React 설정 내용 확인 (선택사항)
cat configs/react.json
```

**프리셋 파일 내용 이해하기:**

```json
{
  "name": "react",
  "description": "React framework for building user interfaces",
  "base_url": "https://react.dev/",
  "max_pages": 200
}
```

**각 줄이 의미하는 것:**
```
"name": "react"
→ "이 Skill의 이름은 react야"
→ 결과 파일: output/react/

"description": "..."
→ "이 Skill이 뭔지 한 줄로 설명"
→ Claude가 언제 이 Skill을 쓸지 판단해요

"base_url": "https://react.dev/"
→ "여기 문서를 읽어와"
→ 시작점 URL

"max_pages": 200
→ "최대 200페이지까지만 읽어"
→ 너무 많으면 오래 걸려요!
```

#### Step 3: Skill 생성 실행!

```bash
# 자, 이제 진짜 시작!
python3 cli/doc_scraper.py --config configs/react.json

# 이 명령어의 의미:
# python3         → Python으로 실행해줘
# cli/doc_scraper.py → 이 프로그램을
# --config        → 설정 파일은
# configs/react.json → 여기 있어!
```

**⚠️ 주의사항:**
- 명령어 입력할 때 오타 주의!
- `--config` 앞에 공백 2개 있어야 해요
- 경로 확인 (configs/react.json)

#### Step 4: 진행 과정 구경하기

**화면에 이런 메시지들이 나타나요:**

```
🎯 Starting documentation scraping...
📊 Configuration:
   - Name: react
   - URL: https://react.dev/
   - Max pages: 200

🔍 Checking for existing data...
❌ No existing data found

📥 Starting fresh scrape...
[=====>              ] 25/200 (12%)
⏱️  Elapsed: 2.5 min | Estimated remaining: 18 min
💾 Saved: output/react_data/pages/intro-001.json
```

**각 단계 설명:**

**1단계: 준비 단계**
```
🎯 Starting documentation scraping...
→ "준비 중이에요! 잠시만 기다려주세요"
```

**2단계: 설정 확인**
```
📊 Configuration:
→ "이런 설정으로 시작할게요"
→ 설정 내용 한 번 더 확인
```

**3단계: 기존 데이터 확인**
```
🔍 Checking for existing data...
→ "이전에 받은 데이터 있나 확인 중..."
→ 있으면 재사용 물어봐요
→ 없으면 새로 시작!
```

**4단계: 스크래핑 진행**
```
[=====>              ] 25/200 (12%)
→ 진행 상황 표시
→ 25페이지 / 200페이지 중 (12% 완료)

⏱️  Estimated remaining: 18 min
→ "약 18분 남았어요"
```

**🤔 생각해보기:**
- 왜 시간이 오래 걸릴까요?
  - 웹사이트에서 페이지 하나씩 읽어와야 해요
  - 너무 빨리 요청하면 차단될 수 있어요
  - 예의를 지키기 위해 약간씩 쉬어가요 (rate_limit)

#### Step 5: 완료 확인

**20~40분 후, 이런 메시지가 나타나요:**

```
✅ Scraping completed!
📊 Summary:
   - Total pages: 180
   - Categories found: 8
   - Code examples: 245

📁 Data saved to: output/react_data/
🎨 Building skill structure...
✅ Skill built successfully!
📦 Skill location: output/react/

Next steps:
1. Review the skill: cat output/react/SKILL.md
2. Package: python3 cli/package_skill.py output/react/
3. Upload to Claude: https://claude.ai/skills
```

**축하합니다! 🎉**
- React 문서 180페이지 읽음 ✅
- 8개 카테고리로 분류 ✅
- 245개 코드 예제 추출 ✅
- Skill 파일 생성 완료 ✅

#### Step 6: 결과 확인하기

```bash
# 1. Skill 폴더 구조 보기
ls -R output/react/

# 결과:
output/react/
├── SKILL.md                # 핵심 가이드
├── references/            # 상세 문서
│   ├── index.md
│   ├── getting_started.md
│   ├── core_concepts.md
│   ├── hooks.md
│   └── ...
└── scripts/              # (비어있음)

# 2. SKILL.md 내용 보기
cat output/react/SKILL.md | head -50
# head -50 = 처음 50줄만 보기
```

**SKILL.md 예시:**

```markdown
# React Skill

## When to Use This Skill
Use this skill when you need help with:
- Building React user interfaces
- Understanding React hooks
- Component composition
- State management
...

## Quick Reference

### Basic Component
```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

### useState Hook
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>;
}
```
...
```

---

### 🌿 중급 - AI 향상 기능 사용하기

**이 방법은 누구에게 좋을까요?**
- 더 좋은 품질의 Skill을 원하는 분 💎
- Claude Code Max 구독 중인 분 🤖
- AI 향상 기능이 궁금한 분 ✨

#### AI 향상이 뭔가요?

**비유: 레시피 업그레이드**

**BEFORE (기본 Skill):**
```markdown
## useState
상태를 관리하는 Hook입니다.

```jsx
const [state, setState] = useState(initialValue);
```
```

**AFTER (AI 향상된 Skill):**
```markdown
## useState - 상태 관리의 마법사 🪄

### 🌱 초보자 설명
useState는 마치 "기억력"을 가진 변수예요!
일반 변수는 화면이 새로고침되면 잊어버리지만,
useState로 만든 변수는 값을 기억해요.

### 가장 간단한 예제
```jsx
// 버튼 클릭 횟수를 기억하는 카운터
function Counter() {
  // count: 현재 값 (처음엔 0)
  // setCount: 값을 바꾸는 함수
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      클릭 횟수: {count}번
    </button>
  );
}
```

### 🤔 생각해보기
- `count`는 왜 직접 바꾸면 안 될까요?
- `setCount`를 쓰면 화면이 자동으로 업데이트돼요!

### ⚠️ 주의사항
- 컴포넌트 안에서만 사용하세요
- 조건문 안에 넣으면 안 돼요
...
```

**차이점:**
- 설명이 더 자세해요
- 초보자 친화적 예제 추가
- 이모지로 가독성 향상
- 주의사항과 팁 제공
- "왜 그런지" 설명 추가

#### 사용 방법 - LOCAL 향상 (무료!)

```bash
# 스크래핑할 때 --enhance-local 옵션 추가
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --enhance-local

# 또는 이미 만든 Skill을 향상시키기:
python3 cli/enhance_skill_local.py output/react/
```

**어떤 일이 일어나나요?**

```
1. 기본 Skill 생성 (20~40분)
   ↓
2. 새 터미널 창이 열림
   ↓
3. Claude Code가 자동으로 시작됨
   ↓
4. AI가 SKILL.md를 분석하고 개선 (30~60초)
   ↓
5. 향상된 버전으로 자동 교체
   ↓
6. 원본은 SKILL.md.backup으로 보관
   ↓
완료! ✨
```

**터미널 화면:**

```
✅ Basic skill built successfully!
🤖 Starting AI enhancement (LOCAL mode)...
📂 Opening Claude Code...

[New Terminal Window]
🔍 Analyzing references...
✨ Generating enhanced SKILL.md...
💾 Backing up original: SKILL.md.backup
✅ Enhancement complete!

📊 Comparison:
   Before: 75 lines
   After: 512 lines
   Quality: ⭐⭐⭐⭐⭐ (9/10)
```

---

### 🌳 고급 - 커스텀 설정으로 Skill 만들기

**이 방법은 누구에게 좋을까요?**
- 프리셋에 없는 문서 사이트 사용하는 분 🎯
- 설정을 직접 조정하고 싶은 분 ⚙️
- 더 세밀한 컨트롤을 원하는 분 🎮

#### Method 1: 대화형 모드 (Interactive)

**완전 초보자에게 추천!**

```bash
# 대화형 모드 시작
python3 cli/doc_scraper.py --interactive

# 화면:
🎯 Interactive Skill Creator
━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Skill name: 
```

**단계별 대답하기:**

```
📝 Skill name: tailwind
→ "Skill 이름을 뭐로 할까요?"
→ 입력: tailwind

📖 Description: 
→ "어떤 Skill인지 한 줄로 설명해주세요"
→ 입력: Utility-first CSS framework

🌐 Base URL: 
→ "문서 사이트 주소를 알려주세요"
→ 입력: https://tailwindcss.com/docs

📊 Max pages (default 500): 
→ "최대 몇 페이지까지 읽을까요?"
→ 입력: 300 (또는 Enter로 기본값)

✨ Enable AI enhancement? (y/n): 
→ "AI로 향상시킬까요?"
→ 입력: y

🎨 Use local enhancement? (FREE, uses Claude Code) (y/n): 
→ "LOCAL 향상 사용할까요? (무료)"
→ 입력: y

━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Summary:
   Name: tailwind
   Description: Utility-first CSS framework
   URL: https://tailwindcss.com/docs
   Max pages: 300
   Enhancement: LOCAL

✅ Look good? Start scraping? (y/n): 
→ "괜찮아요? 시작할까요?"
→ 입력: y

🚀 Starting...
```

**🎓 학습 포인트:**
- 대화형이라 실수해도 괜찮아요
- 각 옵션을 하나씩 설명해줘요
- 최종 확인 단계가 있어요

#### Method 2: 빠른 명령 (Quick Mode)

**급하게 만들 때 좋아요!**

```bash
# 한 줄로 끝!
python3 cli/doc_scraper.py \
  --name tailwind \
  --url https://tailwindcss.com/docs \
  --description "Utility-first CSS framework"

# 옵션 설명:
# --name      → Skill 이름
# --url       → 문서 사이트 주소
# --description → 한 줄 설명
```

**장점:**
- ✅ 매우 빠름 (타이핑 한 번)
- ✅ 스크립트로 자동화 가능
- ✅ 반복 작업에 유리

**단점:**
- ❌ 세밀한 설정 불가
- ❌ 기본값으로 설정됨
- ❌ 나중에 조정 필요할 수도

#### Method 3: 설정 파일 만들기 (Config File)

**완벽한 컨트롤을 원할 때!**

```bash
# 1. 템플릿 복사
cp configs/react.json configs/tailwind.json

# 2. 편집기로 열기
nano configs/tailwind.json
# 또는
code configs/tailwind.json  # VS Code 사용 시
```

**설정 파일 작성:**

```json
{
  "name": "tailwind",
  "description": "Utility-first CSS framework for rapid UI development",
  "base_url": "https://tailwindcss.com/docs",
  
  "selectors": {
    "main_content": "article",
    "title": "h1",
    "code_blocks": "pre code"
  },
  
  "url_patterns": {
    "include": ["/docs"],
    "exclude": ["/blog", "/showcase"]
  },
  
  "categories": {
    "getting_started": ["installation", "editor", "setup"],
    "core_concepts": ["utility", "responsive", "hover"],
    "customization": ["configuration", "theme", "plugins"]
  },
  
  "rate_limit": 0.5,
  "max_pages": 300,
  "checkpoint": {
    "enabled": true,
    "interval": 50
  }
}
```

**각 섹션 설명:**

**1. 기본 정보**
```json
{
  "name": "tailwind",
  → Skill 이름 (파일명, 폴더명에 사용)
  
  "description": "...",
  → Claude가 언제 이 Skill을 사용할지 판단
  
  "base_url": "https://...",
  → 문서 사이트 시작점
}
```

**2. 선택자 (Selectors)**
```json
{
  "selectors": {
    "main_content": "article",
    → "본문 내용은 <article> 태그 안에 있어"
    
    "title": "h1",
    → "제목은 <h1> 태그야"
    
    "code_blocks": "pre code"
    → "코드는 <pre><code> 안에 있어"
  }
}
```

**🔍 선택자 찾는 방법:**

```
1. 문서 사이트 방문
2. F12 키 누르기 (개발자 도구)
3. 검사 도구 클릭 (왼쪽 위 화살표)
4. 본문 영역 클릭
5. 오른쪽에 HTML 태그 보임
   예: <article class="prose">
   → "article"이 선택자!
```

**3. URL 패턴**
```json
{
  "url_patterns": {
    "include": ["/docs"],
    → "/docs"로 시작하는 페이지만
    
    "exclude": ["/blog", "/showcase"]
    → 블로그, 쇼케이스 페이지 제외
  }
}
```

**예시:**
```
✅ https://tailwindcss.com/docs/installation
   → "/docs" 포함 → 가져와!

❌ https://tailwindcss.com/blog/new-update
   → "/blog" 포함 → 제외!

❌ https://tailwindcss.com/showcase/websites
   → "/showcase" 포함 → 제외!
```

**4. 카테고리 분류**
```json
{
  "categories": {
    "getting_started": ["installation", "editor", "setup"],
    → URL에 이 단어들 있으면 "getting_started" 폴더에
    
    "core_concepts": ["utility", "responsive", "hover"],
    → 이 단어들 있으면 "core_concepts" 폴더에
  }
}
```

**적용 예:**
```
페이지: https://tailwindcss.com/docs/installation
                                          ↑ 이 단어!
→ "installation"이 getting_started 키워드에 있음
→ references/getting_started.md 에 추가
```

**5. 성능 설정**
```json
{
  "rate_limit": 0.5,
  → 페이지 요청 사이 0.5초 대기
  → 서버에 부담 안 주기
  → 빠르게: 0.2 | 안전하게: 1.0
  
  "max_pages": 300,
  → 최대 300페이지만
  → 테스트할 땐 20으로 설정!
  
  "checkpoint": {
    "enabled": true,
    → 중간 저장 활성화
    
    "interval": 50
    → 50페이지마다 저장
  }
}
```

**사용하기:**

```bash
# 설정 파일로 실행
python3 cli/doc_scraper.py --config configs/tailwind.json
```

---

## 두 번째 Skill 만들기 - 더 쉽게

### 💡 데이터 재사용의 마법

**상황:**
```
어제 React Skill 만들었는데 (40분 걸림)
오늘 다시 만들고 싶어요
또 40분 기다려야 하나요? 😰
```

**해답:**
```
아니요! 이미 받은 데이터를 재사용하면
1분 안에 끝나요! ⚡
```

#### 🎯 시나리오 1: 같은 Skill 다시 만들기

```bash
# 첫 번째 (어제): 40분 걸림
python3 cli/doc_scraper.py --config configs/react.json

# 오늘 다시 실행하면:
python3 cli/doc_scraper.py --config configs/react.json

# 화면:
🔍 Checking for existing data...
✅ Found existing data: output/react_data/
   - 180 pages
   - Last updated: 2025-10-23

💡 Use existing data? (y/n): 
```

**선택지:**

```
y 입력 → 기존 데이터 사용 (1분 만에 완료!)
n 입력 → 처음부터 다시 (40분...)
```

#### 🎯 시나리오 2: 향상만 다시 하기

```bash
# 기본 Skill은 있는데 AI 향상만 하고 싶을 때:
python3 cli/enhance_skill_local.py output/react/

# 시간: 30~60초
# 결과: 향상된 SKILL.md
```

#### 🎯 시나리오 3: 강제로 처음부터

```bash
# 데이터가 있어도 무시하고 새로 받기:

# 방법 1: 데이터 삭제
rm -rf output/react_data/
python3 cli/doc_scraper.py --config configs/react.json

# 방법 2: --fresh 플래그 (향후 버전)
python3 cli/doc_scraper.py --config configs/react.json --fresh
```

---

## 다양한 방법으로 Skill 만들기

### 🎨 3가지 메소드 비교

| 방법 | 난이도 | 속도 | 유연성 | 추천 대상 |
|------|--------|------|--------|-----------|
| 프리셋 | ⭐ 쉬움 | ⚡ 빠름 | 🔒 낮음 | 초보자 |
| 대화형 | ⭐⭐ 보통 | ⚡⚡ 보통 | 🔓 중간 | 일반 사용자 |
| 설정 파일 | ⭐⭐⭐ 어려움 | ⚡⚡⚡ 느림 | 🔓🔓 높음 | 고급 사용자 |

### 🌱 예제 1: Vue.js Skill (프리셋)

**가장 쉬운 방법!**

```bash
# 1. 가상환경 활성화
source venv/bin/activate

# 2. 실행
python3 cli/doc_scraper.py --config configs/vue.json

# 3. 끝! (20~30분 대기)
```

**예상 결과:**
```
✅ Vue.js skill created!
📊 180 pages, 8 categories
📁 Location: output/vue/
```

### 🌿 예제 2: Django Skill (대화형)

**설정하면서 배우는 방법!**

```bash
python3 cli/doc_scraper.py --interactive

# 대화:
📝 Skill name: django
📖 Description: Python web framework
🌐 Base URL: https://docs.djangoproject.com/
📊 Max pages: 400
✨ Enhancement: y (yes)
🎨 Local enhancement: y (yes)

✅ Start? y
```

### 🌳 예제 3: 회사 내부 문서 (커스텀 설정)

**실무 예제!**

**상황:**
```
우리 회사 API 문서를 Skill로 만들고 싶어요
- URL: https://docs.mycompany.com/api
- 인증 필요 없음 (공개 문서)
- 100페이지 정도
```

**설정 파일: configs/mycompany.json**

```json
{
  "name": "mycompany-api",
  "description": "MyCompany API documentation for internal use",
  "base_url": "https://docs.mycompany.com/api",
  
  "selectors": {
    "main_content": "div.doc-content",
    "title": "h1.page-title",
    "code_blocks": "pre.code-block"
  },
  
  "url_patterns": {
    "include": ["/api/"],
    "exclude": ["/changelog", "/deprecated"]
  },
  
  "categories": {
    "authentication": ["auth", "login", "token"],
    "endpoints": ["endpoint", "resource", "method"],
    "examples": ["example", "tutorial", "guide"]
  },
  
  "rate_limit": 1.0,
  "max_pages": 100
}
```

**실행:**

```bash
python3 cli/doc_scraper.py \
  --config configs/mycompany.json \
  --enhance-local
```

---

## PDF 문서로 Skill 만들기

### 📄 PDF Skill의 필요성

**언제 사용하나요?**

```
✅ 회사 내부 매뉴얼 (PDF)
✅ 기술 서적 (PDF)
✅ 학술 논문 모음
✅ 제품 사양서
✅ 오프라인 문서
```

**웹 스크래핑 vs PDF 추출:**

| 구분 | 웹 스크래핑 | PDF 추출 |
|------|-------------|----------|
| 소스 | 웹사이트 🌐 | PDF 파일 📄 |
| 속도 | 느림 (20~40분) | 빠름 (5~15분) |
| 인터넷 | 필요 ✅ | 불필요 ❌ |
| 구조화 | 자동 ✅ | 제한적 ⚠️ |

### 🌱 기본 PDF Skill 만들기

#### Step 1: PDF 라이브러리 설치

```bash
# 가상환경 활성화 (중요!)
source venv/bin/activate

# PyMuPDF 설치
pip install PyMuPDF

# 설치 확인
pip list | grep PyMuPDF
# 결과: PyMuPDF  1.23.8  ✅
```

**PyMuPDF가 뭔가요?**
> PDF 파일을 읽고 내용을 추출하는 Python 라이브러리예요.
> 마치 PDF를 "번역"해서 프로그램이 이해할 수 있게 만들어줘요.

#### Step 2: 기본 사용법

```bash
# 가장 간단한 형태
python3 cli/pdf_scraper.py \
  --pdf docs/manual.pdf \
  --name mymanual

# 각 부분 설명:
# cli/pdf_scraper.py  → PDF 전용 스크래퍼
# --pdf               → PDF 파일 경로
# docs/manual.pdf     → 읽을 PDF
# --name              → Skill 이름
# mymanual            → 결과 폴더명
```

**진행 화면:**

```
📄 PDF Skill Creator
━━━━━━━━━━━━━━━━━

📂 Reading PDF: docs/manual.pdf
📊 Total pages: 125
⏱️  Estimated time: 5-8 minutes

[Progress bar]
[==============>     ] 89/125 (71%)
⏱️  2.3 min elapsed | 0.9 min remaining

✨ Extracting:
   - Text: ✅
   - Code blocks: ✅
   - Images: ✅
   - Tables: ⏭️ (use --extract-tables)

💾 Saving to: output/mymanual/
✅ PDF skill created successfully!
```

### 🌿 고급 PDF 기능

#### 기능 1: 테이블 추출

**언제 필요할까요?**
```
PDF에 이런 표가 있을 때:

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| /api/users   | GET    | Get users   |
| /api/posts   | POST   | Create post |
```

**사용법:**

```bash
python3 cli/pdf_scraper.py \
  --pdf docs/manual.pdf \
  --name mymanual \
  --extract-tables

# 결과:
✅ Tables extracted and formatted as Markdown
```

#### 기능 2: 병렬 처리 (빠른 속도!)

**일반 vs 병렬 비교:**

```
일반 모드:
페이지1 처리 → 페이지2 처리 → 페이지3 처리
⏱️  15분 소요

병렬 모드 (8 workers):
페이지1,2,3,4,5,6,7,8 동시 처리!
⏱️  5분 소요 (3배 빠름!)
```

**사용법:**

```bash
python3 cli/pdf_scraper.py \
  --pdf docs/large_manual.pdf \
  --name mymanual \
  --parallel \
  --workers 8

# 옵션 설명:
# --parallel  → 병렬 처리 활성화
# --workers 8 → CPU 코어 8개 사용
```

**💡 Worker 수 선택 가이드:**

```bash
# CPU 코어 수 확인
sysctl -n hw.ncpu  # Mac
nproc              # Linux

# 결과: 8
# 권장: 코어 수와 같거나 적게
# 예: 8코어 → --workers 8 또는 6
```

#### 기능 3: 스캔된 PDF (OCR)

**스캔된 PDF란?**
```
종이 문서를 스캐너로 찍은 PDF
→ 이미지로 저장됨
→ 텍스트 복사 안 됨 😰
→ OCR로 해결! 🎯
```

**설치:**

```bash
# 1. Tesseract 설치 (OCR 엔진)
# Mac:
brew install tesseract

# Ubuntu/Debian:
sudo apt-get install tesseract-ocr

# Windows:
# https://github.com/UB-Mannheim/tesseract/wiki 에서 설치

# 2. Python 라이브러리 설치
pip install pytesseract Pillow

# 3. 확인
tesseract --version
```

**사용법:**

```bash
python3 cli/pdf_scraper.py \
  --pdf docs/scanned_manual.pdf \
  --name mymanual \
  --ocr

# 진행:
🔍 OCR mode enabled
📸 Processing page 1/100...
   - Converting to image...
   - Running OCR...
   - Extracting text: "Chapter 1: Introduction..."
✅ Page 1 complete

⏱️  Slower than normal (OCR processing)
   Estimated: 10-20 minutes
```

#### 기능 4: 암호화된 PDF

**암호로 보호된 PDF 열기:**

```bash
python3 cli/pdf_scraper.py \
  --pdf docs/confidential.pdf \
  --name mymanual \
  --password mySecretPassword123

# 주의:
# - 터미널 히스토리에 암호 남음
# - 민감한 문서는 조심!
```

### 🌳 PDF 실전 예제

#### 예제 1: 제품 매뉴얼 → Claude Skill

**상황:**
```
제품: 로봇 청소기
매뉴얼: product_manual.pdf (80페이지)
내용: 사용법, 문제 해결, 사양
목표: Claude에게 물어보면 답변하도록
```

**실행:**

```bash
python3 cli/pdf_scraper.py \
  --pdf docs/robot_vacuum_manual.pdf \
  --name robot-vacuum \
  --extract-tables \
  --parallel \
  --workers 4

# 5분 후:
✅ Skill created: output/robot-vacuum/
```

**사용 예:**

```
[Claude에 Skill 업로드 후]

사용자: "먼지통은 어떻게 청소하나요?"
Claude: "로봇 청소기 매뉴얼에 따르면:
         1. 먼지통 버튼을 누르세요
         2. 먼지통을 당겨서 분리하세요
         3. 내용물을 버리고 물로 헹구세요
         4. 완전히 말린 후 재장착하세요"
```

#### 예제 2: 프로그래밍 책 → Skill

**상황:**
```
책: "Python 완벽 가이드"
파일: python_guide.pdf (350페이지)
특징: 코드 예제 많음, 표 포함
```

**실행:**

```bash
python3 cli/pdf_scraper.py \
  --pdf books/python_guide.pdf \
  --name python-guide \
  --extract-tables \
  --parallel \
  --workers 8

# 고급 설정 (config 파일):
{
  "code_detection": true,
  "language_hints": ["python"],
  "extract_images": false
}
```

---

## Skill 업로드하고 사용하기

### 📦 Step 1: Skill 패키징

**왜 패키징이 필요한가요?**

```
현재 상태:
output/react/
├── SKILL.md
├── references/
│   ├── file1.md
│   ├── file2.md
│   └── ...100개 파일
└── scripts/

문제:
❌ 파일이 너무 많아요 (100개+)
❌ 폴더째 업로드는 안 돼요
❌ 하나씩 업로드? 너무 힘들어요

해결:
✅ .zip 파일 하나로 압축!
✅ 한 번에 업로드!
```

**패키징 실행:**

```bash
# 방법 1: package_skill.py 사용
python3 cli/package_skill.py output/react/

# 진행:
📦 Packaging skill...
   - Validating structure... ✅
   - Compressing files... ✅
   - Creating react.zip... ✅

✅ Package created: output/react.zip
💾 Size: 2.3 MB
📊 Files included: 127

📂 Opening output folder...
[Finder/Explorer 자동으로 열림]

📤 Next step:
   1. Go to https://claude.ai/skills
   2. Click "Upload Skill"
   3. Select react.zip
   4. Done! ✅
```

### 🚀 Step 2: Claude에 업로드

#### 옵션 1: 자동 업로드 (API 키 필요)

**API 키 받기:**

```
1. https://console.anthropic.com/ 방문
2. 로그인
3. "API Keys" 메뉴
4. "Create Key" 클릭
5. 키 복사: sk-ant-api03-xxx...
```

**환경 변수 설정:**

```bash
# Mac/Linux:
export ANTHROPIC_API_KEY=sk-ant-api03-xxx...

# 또는 .bashrc/.zshrc에 추가해서 영구 저장:
echo 'export ANTHROPIC_API_KEY=sk-ant-api03-xxx...' >> ~/.zshrc

# Windows:
set ANTHROPIC_API_KEY=sk-ant-api03-xxx...
```

**자동 업로드:**

```bash
# 패키징과 동시에 업로드
python3 cli/package_skill.py output/react/ --upload

# 또는 이미 만든 .zip 업로드
python3 cli/upload_skill.py output/react.zip

# 진행:
📤 Uploading to Claude AI...
🔐 Authenticating...
📦 Uploading react.zip (2.3 MB)...
[===================>] 100%

✅ Upload successful!
🎉 Skill "react" is now available in Claude!

🔗 Access at: https://claude.ai/skills
```

#### 옵션 2: 수동 업로드 (API 키 불필요)

**Step-by-step:**

```
1. output/react.zip 파일 확인
   (package_skill.py 실행 시 자동으로 폴더 열림)

2. 브라우저에서 https://claude.ai/skills 접속

3. 오른쪽 위 "Upload Skill" 버튼 클릭

4. react.zip 파일 선택

5. 업로드 대기 (보통 10~30초)

6. "Skill uploaded successfully!" 메시지 확인

완료! 🎉
```

### 🎯 Step 3: Skill 사용하기

**Claude와 대화:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 사용자
React에서 useState는 어떻게 사용하나요?

🤖 Claude
좋은 질문이에요! React Skill을 활용해서 
자세히 알려드릴게요.

useState는 React 함수 컴포넌트에서 
상태를 관리하는 Hook입니다.

기본 문법:
```jsx
const [state, setState] = useState(initialValue);
```

실전 예제:
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}
```

주요 포인트:
1. `count`: 현재 상태 값
2. `setCount`: 상태 업데이트 함수
3. `useState(0)`: 초기값 0으로 설정

더 자세한 내용이 궁금하신가요?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**💡 Skill 활용 팁:**

```
✅ 구체적으로 질문하기:
   "useState 예제 보여줘"
   "useEffect와 useState 차이점"
   "useState 주의사항"

✅ 난이도 명시하기:
   "초보자용으로 설명해줘"
   "고급 기술 알려줘"

✅ 실전 시나리오:
   "로그인 폼을 useState로 만들려면?"
   "여러 input을 하나의 useState로 관리하려면?"
```

---

## 실전 팁과 요령

### 💎 Tip 1: 페이지 수 예측하기

**문제:**
```
문서가 몇 페이지인지 모르겠어요
max_pages를 얼마로 설정해야 할까요?
```

**해결책:**

```bash
# 페이지 수 예측 도구 사용
python3 cli/estimate_pages.py configs/react.json

# 결과:
📊 ESTIMATION RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Pages Discovered: 180
📈 Estimated Total: 230
⏱️  Time Elapsed: 1.2 minutes
💡 Recommended max_pages: 280

Breakdown by category:
- getting_started: 45 pages
- api: 89 pages
- guides: 67 pages
- advanced: 29 pages
```

**활용:**

```json
{
  "name": "react",
  "max_pages": 280
         ↑ 예측 결과 활용!
}
```

### 💎 Tip 2: 테스트는 작게 시작

**전략:**

```
1단계: 20페이지로 테스트
   ↓
설정이 제대로 작동하는지 확인
   ↓
2단계: 전체 페이지로 실행
```

**실전:**

```json
{
  "name": "react",
  "max_pages": 20,  ← 테스트용
  ...
}
```

```bash
# 1. 테스트 실행 (2~3분)
python3 cli/doc_scraper.py --config configs/react.json

# 2. 결과 확인
cat output/react/SKILL.md
ls output/react/references/

# 3. 좋으면 max_pages 수정
nano configs/react.json
# max_pages: 20 → 200

# 4. 본격 실행
python3 cli/doc_scraper.py --config configs/react.json
```

### 💎 Tip 3: 캐싱 활용

**상황:**

```
스크래핑 완료했는데
SKILL.md가 마음에 안 들어요
다시 스크래핑? 40분 또 기다려요? 😱
```

**해결:**

```bash
# 데이터는 그대로 두고 Skill만 재생성
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --skip-scrape

# 시간: 1분 미만! ⚡
```

**언제 유용할까?**

```
✅ 카테고리 분류 수정했을 때
✅ SKILL.md 템플릿 바꿨을 때
✅ 선택자는 맞는데 정리만 다시 하고 싶을 때
```

### 💎 Tip 4: 여러 Skill 동시 만들기

**시나리오:**

```
React, Vue, Django 
3개 Skill을 만들고 싶어요
하나씩 하면 2시간 걸려요 😰
```

**병렬 실행:**

```bash
# Mac/Linux:
python3 cli/doc_scraper.py --config configs/react.json &
python3 cli/doc_scraper.py --config configs/vue.json &
python3 cli/doc_scraper.py --config configs/django.json &
wait

# & = 백그라운드 실행
# wait = 모두 완료될 때까지 대기

# Windows (PowerShell):
Start-Process python3 -ArgumentList "cli/doc_scraper.py --config configs/react.json"
Start-Process python3 -ArgumentList "cli/doc_scraper.py --config configs/vue.json"
Start-Process python3 -ArgumentList "cli/doc_scraper.py --config configs/django.json"
```

**주의사항:**

```
⚠️ CPU와 메모리 사용량 증가
⚠️ 네트워크 대역폭 공유
⚠️ 터미널 3개 띄워서 각각 실행하는 게 더 안전
```

### 💎 Tip 5: 선택자 찾기 꿀팁

**문제:**
```
"main_content" 선택자를 뭐로 해야 할지 모르겠어요 😕
```

**해결 - 브라우저 개발자 도구 활용:**

```
Step 1: 문서 페이지 열기
Step 2: F12 (개발자 도구)
Step 3: 검사 도구 (왼쪽 위 화살표 아이콘)
Step 4: 본문 영역 클릭
Step 5: Elements 탭에서 확인

예시:
<article class="doc-content">
  ← 이게 본문!
  
선택자: "article" 또는 "article.doc-content"
```

**자주 사용되는 선택자:**

```
일반 문서 사이트:
- "article"
- "main"
- "div.content"
- "div[role='main']"

개발자 문서:
- "div.markdown-body"
- "article.prose"
- "main.docs-content"
```

**선택자 테스트:**

```python
# Python으로 빠르게 테스트
from bs4 import BeautifulSoup
import requests

url = "https://react.dev/learn"
soup = BeautifulSoup(requests.get(url).content, 'html.parser')

# 여러 선택자 시도
print(soup.select_one('article'))    # 결과 있음?
print(soup.select_one('main'))       # 결과 있음?
print(soup.select_one('div.content')) # 결과 있음?
```

---

## 🎯 Part 2 마무리

### 🎓 이번에 배운 것들

✅ **첫 Skill 만들기**
- 프리셋 사용법
- 대화형 모드
- 커스텀 설정

✅ **AI 향상 기능**
- LOCAL 향상 (무료)
- 품질 비교
- 백업과 복원

✅ **PDF Skill**
- 기본 PDF 처리
- OCR, 테이블 추출
- 병렬 처리

✅ **업로드와 사용**
- 패키징 방법
- 자동/수동 업로드
- Claude와 대화

✅ **실전 팁**
- 페이지 예측
- 테스트 전략
- 캐싱 활용

### 📚 다음 단계

**Part 3에서 다룰 내용:**
- 🔧 문제 해결 가이드
- 🚀 대용량 문서 처리 (10K+ 페이지)
- ⚡ 성능 최적화
- 🎨 고급 커스터마이징
- 💡 프로 사용자 팁

**준비 운동:**
```
✅ 첫 Skill 만들어봤어요
✅ AI 향상 이해했어요
✅ PDF도 해봤어요
✅ Claude에 업로드 성공!

→ Part 3 준비 완료! 🎯
```

---

## 🤔 자주 하는 실수와 해결법

### ❌ 실수 1: 가상환경 미활성화

**증상:**
```bash
$ python3 cli/doc_scraper.py ...
ModuleNotFoundError: No module named 'requests'
```

**원인:**
가상환경을 활성화하지 않음

**해결:**
```bash
source venv/bin/activate
# (venv) 표시 확인 후 다시 실행
```

### ❌ 실수 2: 경로 오타

**증상:**
```bash
$ python3 cli/doc_scraper.py --config configs/reakt.json
FileNotFoundError: configs/reakt.json
                                  ↑ 오타!
```

**해결:**
```bash
# 파일 목록 확인
ls configs/

# 정확한 이름 복사-붙여넣기
python3 cli/doc_scraper.py --config configs/react.json
```

### ❌ 실수 3: 선택자 잘못 설정

**증상:**
```
✅ 200 pages scraped
❌ But all pages are empty!
```

**원인:**
잘못된 선택자로 본문을 못 찾음

**해결:**
```bash
# 브라우저 개발자 도구로 확인
# F12 → 검사 → 올바른 선택자 찾기

# 설정 파일 수정
{
  "selectors": {
    "main_content": "article"  ← 올바른 선택자로
  }
}
```

---

## 🔗 연결된 노트

- [[Skill_Seeker_완벽_가이드_Part1]] - 기본 개념과 설치
- [[Skill_Seeker_완벽_가이드_Part3]] - 고급 기능과 최적화
- [[Claude AI Skills 활용법]]
- [[효과적인 AI 프롬프트 작성법]]

---

**💡 Pro Tip:**
처음에는 프리셋으로 시작하세요!
성공 경험이 쌓이면 자연스럽게
커스텀 설정을 시도하게 될 거예요! 🌱→🌳

---

*마지막 업데이트: 2025-10-24*
*난이도: ⭐⭐ 초급-중급*
*예상 학습 시간: 45분*