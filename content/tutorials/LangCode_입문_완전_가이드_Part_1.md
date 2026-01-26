---
title: "LangCode 입문 완전 가이드 - Part 1: 기초 개념 및 설치"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - LangCode
  - CLI/도구
  - 개발환경/설정
  - AI/통합
  - Claude/통합
  - Gemini/통합
  - 입문/가이드
  - 초급자/교육
status: "진행중"
type: "입문가이드"
priority: "high"
---

# LangCode 입문 완전 가이드 - Part 1: 기초 개념 및 설치

## 📋 목차

1. [[#이 노트를 읽기 전에]]
2. [[#LangCode란 무엇인가]]
3. [[#왜 LangCode를 배워야 할까]]
4. [[#핵심 개념 이해하기]]
5. [[#설치 및 환경 설정]]
6. [[#첫 번째 실행]]
7. [[#용어 사전]]

---

## 이 노트를 읽기 전에

이 노트는 **개발이 처음인 분들도 이해할 수 있도록** 쓰여졌습니다. 어려운 개념은 일상의 예시로 설명하고, 각 단계마다 "실습 예제"를 제공합니다.

> **학습 방법**: 각 섹션을 읽고 **"내가 이걸 누군가에게 설명할 수 있나?"** 스스로 물어보세요. 그렇지 않다면 다시 읽기를 권장합니다.

---

## LangCode란 무엇인가

### 1️⃣ 가장 간단한 설명

**LangCode = AI 코딩 어시스턴트들의 통합 리모컨**

마치 여러 개의 텔레비전이 있는데, 하나의 리모컨으로 모두 제어한다고 생각하세요:
- Google Gemini (🔵)
- Claude by Anthropic (🟤)
- OpenAI (⚪)
- Ollama (🟢)

이 모든 AI를 **하나의 터미널 명령어로** 사용할 수 있게 해주는 도구입니다.

### 2️⃣ 더 자세한 설명 (스토리텔링)

**상황을 상상해보세요:**

당신이 소프트웨어 개발자라고 가정합시다. 하루의 일정은 이렇습니다:
- 오전 9시: 새로운 기능 구현하기 → Claude가 최고
- 오전 11시: 코드 버그 찾기 → Gemini가 더 빠름
- 오후 2시: 코드 리뷰 → Claude가 깐깐함
- 오후 4시: 대용량 파일 분석 → Ollama 로컬 실행이 저렴

문제: 매번 다른 AI 도구의 웹사이트를 방문해야 하고, API 키를 따로 관리해야 합니다.

**LangCode의 해결책:**

```bash
langcode chat --llm claude  # Claude 시작
langcode feature "새 기능 추가"  # 자동 구현
langcode fix "버그 수정"  # 자동 디버깅
```

**한 줄의 명령어로 모든 작업을!**

### 3️⃣ LangCode의 5가지 핵심 특징

| 특징 | 설명 | 실생활 비유 |
|-----|------|-----------|
| **통합** | 여러 AI를 하나로 | 리모컨 하나로 모든 TV 조종 |
| **선택** | 마음대로 AI 선택 | 상황에 맞게 식당 선택 |
| **자동화** | 반복 작업 자동화 | 세탁기처럼 버튼만 누르기 |
| **제어** | 결과 미리보기 | 구매 전 샘플 확인 |
| **확장** | 새 기능 추가 가능 | LEGO처럼 블록 조립 |

---

## 왜 LangCode를 배워야 할까

### 😤 LangCode 없이 개발할 때의 문제

**시나리오: 새로운 기능 구현하기**

```
1. 코딩 시작
   ↓
2. "Claude에게 물어볼까?" → 웹 브라우저 열기
   ↓
3. claude.ai 로그인
   ↓
4. 질문 입력 (5분)
   ↓
5. 답변 받기 (2분)
   ↓
6. 코드 다시 터미널에 복사 (3분)
   ↓
7. 코딩 계속

총 15분이 낭비됩니다! 👎
```

### 😊 LangCode로 개발할 때

```bash
# 터미널에서
langcode feature "사용자 인증 추가"

# 2초 후: AI가 계획을 세움
# 5초 후: 자동으로 코드 구현
# 10초 후: 테스트까지 실행

총 30초! 👍
```

### 📊 비교표

| 작업 | 일반 방법 | LangCode |
|-----|--------|---------|
| 새 기능 구현 | 30분 | 2분 |
| 버그 수정 | 45분 | 5분 |
| 코드 리뷰 | 20분 | 1분 |
| 문서 작성 | 60분 | 5분 |

---

## 핵심 개념 이해하기

### 🎯 개념 1: 터미널/CLI가 뭔가요?

**"터미널"의 이해:**

상상해보세요, 당신의 컴퓨터는 지능 있는 조수(비서)입니다.
- **마우스/클릭**: "이 버튼을 눌러줄래?"
- **터미널**: "제목으로 된 파일을 모두 찾아서 정렬해줄래?"

터미널은 **명령어로 컴퓨터에 지시하는 방법**입니다.

**초급자 예제:**

```bash
# 터미널에 이렇게 입력하면
ls

# 현재 폴더의 모든 파일이 나타납니다 (마우스로 클릭한 것과 같음)
```

### 🎯 개념 2: CLI vs GUI

| 종류 | 모습 | 사용 예시 |
|-----|------|---------|
| **GUI** (눈에 보이는) | 💻 아이콘, 버튼, 메뉴 | Finder, Chrome |
| **CLI** (텍스트) | ⌨️ 검은 화면, 텍스트 | 터미널, LangCode |

**왜 CLI를 배워야 하나요?**
- 🚀 더 빠름
- 🤖 자동화 가능
- 💪 더 강력함

### 🎯 개념 3: API 키란?

**친숙한 비유:**

영화관에 들어가려면 **표(티켓)**이 필요합니다.
- 표 = API 키
- 영화관 = Google/Claude 서비스
- 표 없이는 들어갈 수 없음

```
당신 → API 키 제시 → Google/Claude → "인증됨! 사용하세요"
```

**코드로 표현하면:**

```bash
export ANTHROPIC_API_KEY="당신의고유한인증번호"
# 이제 Claude를 사용할 수 있습니다
```

---

## 설치 및 환경 설정

### 단계 1️⃣: 필요한 것 확인

**사전 요구사항 체크리스트:**

```
✅ macOS / Linux / Windows 컴퓨터
✅ 터미널 (이미 컴퓨터에 있음)
✅ Python 3.8 이상 설치됨
✅ 인터넷 연결
```

**Python 설치 확인:**

```bash
# 터미널에 입력
python --version

# 결과 예시
Python 3.11.0  # 이렇게 나오면 OK!
```

만약 "command not found"라고 나오면? → [[#용어_사전|용어 사전]]의 "Python"을 참고하세요.

### 단계 2️⃣: LangCode 설치

**최신 설치 명령어:**

```bash
# 터미널을 열고 이 명령을 입력
pip install langchain-code

# 설치가 시작됩니다 (1-2분 소요)
```

**설치 중 보이는 것들 (정상):**

```
Collecting langchain-code
  Downloading langchain_code-0.5.2-py3-none-any.whl (245 kB)
Installing collected packages: langchain-code
Successfully installed langchain-code-0.5.2
```

### 단계 3️⃣: API 키 준비하기

**필요한 API 키:**

#### Claude API 키 (선택)

1️⃣ https://console.anthropic.com 방문
2️⃣ "Create API Key" 클릭
3️⃣ 생성된 키 복사
4️⃣ **안전한 곳에 저장** (절대 공유하면 안 됨!)

#### Google Gemini API 키 (선택)

1️⃣ https://aistudio.google.com/app/apikey 방문
2️⃣ "Create API Key" 클릭
3️⃣ 생성된 키 복사

### 단계 4️⃣: 환경 변수 설정

**쉬운 방법: 터미널에서 한 번만 설정**

```bash
# Claude 키 저장
export ANTHROPIC_API_KEY="당신이_복사한_claude_키"

# Google 키 저장
export GOOGLE_API_KEY="당신이_복사한_google_키"
```

**영구적 저장 방법 (다음부터 자동):**

```bash
# 홈 디렉토리의 .env 파일 열기
nano ~/.env

# 다음을 입력
ANTHROPIC_API_KEY=당신의_claude_키
GOOGLE_API_KEY=당신의_google_키

# Ctrl + X → Y → Enter로 저장
```

---

## 첫 번째 실행

### 🎬 LangCode 켜기

```bash
# 터미널에 입력
langcode
```

**보이는 화면:**

```
╔════════════════════════════════════════════════════╗
║         LangCode Interactive Launcher             ║
║                                                    ║
║  👋 Welcome! Choose an option:                    ║
║                                                    ║
║  1. Chat with AI                                  ║
║  2. Implement a Feature                           ║
║  3. Fix a Bug                                      ║
║  4. Analyze Code                                  ║
║  5. Settings                                       ║
║                                                    ║
║  Enter your choice (1-5):                         ║
╚════════════════════════════════════════════════════╝
```

### 💬 첫 번째 대화 시작

**초급자 예제:**

```
1️⃣ 위 메뉴에서 "1. Chat with AI" 선택

2️⃣ 질문 입력:
   "Python으로 'Hello World'를 출력하는 코드를 알려줘"

3️⃣ 자동으로 답변이 나타남:

   print("Hello World")

4️⃣ 코드를 파일에 저장할지 물어봄
```

---

## 용어 사전

### A-Z 용어 설명

#### **API (Application Programming Interface)**
- **쉬운말**: 프로그램끼리 대화하는 방식
- **비유**: 카페에서 바리스타에게 음료를 주문하는 방식
- **예시**: Claude API = Claude와 통신하는 규칙

#### **CLI (Command Line Interface)**
- **쉬운말**: 텍스트로 명령하는 방식
- **반대말**: GUI (마우스로 클릭하는 방식)
- **예시**: `langcode chat` ← 이것이 CLI 명령어

#### **Deep Mode**
- **뜻**: 깊게 생각하는 모드
- **언제 쓰나**: 복잡한 문제를 풀 때
- **예시**: "이 코드의 성능을 최적화해줘" → Deep Mode 추천

#### **Diff**
- **쉬운말**: 변경 전후 비교
- **비유**: 수정본과 원본의 차이를 보여주는 것
- **예시**:
  ```
  - 이전: print("Hi")
  + 수정: print("Hello, World!")
  ```

#### **Feature**
- **뜻**: 새로운 기능
- **예시**: "사용자 로그인" = 새로운 feature

#### **Feynman Technique**
- **뜻**: 복잡한 것을 단순하게 설명하는 방법
- **이 노트가 바로 그것입니다!**

#### **Fix**
- **뜻**: 버그(오류)를 수정하는 것
- **예시**: "로그인 버튼이 안 눌려요" → Fix로 해결

#### **LLM (Large Language Model)**
- **쉬운말**: 거대한 언어 인공지능
- **종류**: Claude, Gemini, ChatGPT 등
- **하는 일**: 텍스트 이해 + 생성

#### **OpenAI**
- **뜻**: ChatGPT를 만든 회사
- **한국에서**: 대부분 Claude나 Gemini 추천

#### **ReAct**
- **뜻**: "생각하고 행동한다"는 뜻
- **일반 모드**: 빠르고 간단함
- **Deep 모드**: 느리지만 깊음

#### **Router (스마트 라우터)**
- **뜻**: 상황에 맞는 AI를 자동으로 선택
- **예시**:
  - 간단한 질문 → Gemini (빠름)
  - 복잡한 코드 → Claude (깊음)

---

## 다음 단계

이제 기초를 배웠습니다! 다음 부분에서 배울 것:

- **Part 2**: 실제 사용 방법 (chat, feature, fix 명령어)
- **Part 3**: 고급 팁과 자동화
- **Part 4**: MCP (Model Context Protocol) 연동

---

## 📚 참고 자료

- [[Claude_Code_완전_가이드]] - Claude Code와의 비교
- [[AI_도구_비교_분석]] - Gemini vs Claude vs ChatGPT
- [[Python_입문_가이드]] - Python 설치 방법

---

**마지막으로 기억하세요:**
> "모든 전문가는 한때 초급자였습니다. 천천히, 그리고 꾸준히 배우세요."

