---
title: "Stagehand AI 브라우저 자동화 완전 가이드"
created: '2025-10-13'
last_modified: '2025-10-13'
tags:
  - 개발/자동화
  - AI/브라우저
  - Stagehand
  - Playwright
  - WebAutomation
  - LLM
  - 초보자가이드
status: "완료"
type: "교육자료"
priority: "high"
---

# 🎭 Stagehand: AI 브라우저 자동화 완전 가이드

## 📋 목차

1. [[#들어가며 - 브라우저 자동화의 새로운 시대]]
2. [[#Stagehand란 무엇인가]]
3. [[#왜 Stagehand를 배워야 할까]]
4. [[#개발 환경 준비하기]]
5. [[#첫 번째 Stagehand 프로젝트]]
6. [[#핵심 기능 완전 정복]]
7. [[#실전 프로젝트 예제]]
8. [[#고급 활용법]]
9. [[#문제 해결 가이드]]
10. [[#다음 단계로 나아가기]]
11. [[#용어 사전]]

---

## 들어가며 - 브라우저 자동화의 새로운 시대

### 📖 이야기로 시작하기

지우는 매일 아침 똑같은 작업을 반복합니다.

```
지우의 일과:
1. 회사 홈페이지 접속 → 로그인
2. 메일 확인 → 중요 메일 표시
3. 업무 관리 시스템 접속 → 오늘 할 일 확인
4. 데이터 입력 → 보고서 다운로드
5. 10개 이상의 웹사이트 방문...

⏰ 소요 시간: 매일 2시간
😫 느낌: "이거 자동화할 수 없을까?"
```

지우는 브라우저 자동화를 배우기로 했습니다.

**첫 번째 시도: Selenium**
```python
# 코드가 너무 복잡해요 😵
driver = webdriver.Chrome()
driver.get("https://example.com")
element = driver.find_element(By.ID, "login-button")
element.click()
# 버튼 ID가 바뀌면? → 코드 수정!
# 페이지 구조가 바뀌면? → 또 수정!
```

**두 번째 시도: 순수 AI 에이전트**
```
문제:
❌ 너무 느려요 (AI가 매번 생각함)
❌ 비용이 많이 들어요 (토큰 소비)
❌ 예측 불가능해요 (가끔 이상한 행동)
❌ 프로덕션에 쓰기 불안해요
```

**세 번째 시도: Stagehand 발견!**
```typescript
// 🎯 아는 부분은 코드로!
await page.goto("https://example.com");

// 🤖 모르는 부분은 AI에게!
await page.act("click the login button");

// ✨ 완벽한 조화!
```

```
결과:
✅ 빠르고 안정적
✅ 코드도 쓰고 자연어도 씀
✅ 비용 효율적
✅ 프로덕션 준비 완료!

⏰ 절약 시간: 매일 2시간 → 10분!
💰 절약 비용: AI 토큰 비용 80% 감소!
```

자, 이제 Stagehand의 세계로 함께 떠나볼까요?

---

## Stagehand란 무엇인가

### 🎯 핵심 정의 (3단계로 이해하기)

#### 초등학생에게 설명한다면
"컴퓨터가 웹사이트를 자동으로 사용하게 하는 도구예요. 여러분이 '로그인 버튼 눌러줘'라고 말하면 컴퓨터가 알아서 찾아서 눌러줘요!"

#### 중학생에게 설명한다면
"웹 브라우저를 자동으로 조작하는 프로그램인데, 코드로 정확하게 명령할 수도 있고, AI에게 자연어로 부탁할 수도 있어요. 반복적인 작업을 자동화하기에 최적이에요."

#### 고등학생/성인에게 설명한다면
"Playwright 기반의 브라우저 자동화 프레임워크로, 전통적인 코드 기반 접근과 LLM 기반 자연어 명령을 하이브리드로 결합한 도구입니다. 개발자가 상황에 따라 정확성(코드)과 유연성(AI)을 선택할 수 있어 프로덕션 환경에서 안정적으로 사용할 수 있습니다."

### 🧩 Stagehand의 구조

```
┌─────────────────────────────────────────────┐
│         Stagehand 아키텍처                   │
├─────────────────────────────────────────────┤
│                                             │
│  👨‍💻 개발자 레이어                            │
│     ├─ TypeScript/JavaScript 코드           │
│     └─ 자연어 명령                           │
│                                             │
│  ⚡ Stagehand 코어                          │
│     ├─ act() - AI 기반 액션                 │
│     ├─ extract() - 데이터 추출              │
│     ├─ agent() - 복잡한 작업 수행           │
│     └─ observe() - 페이지 관찰              │
│                                             │
│  🎭 Playwright 레이어                       │
│     ├─ 브라우저 제어                         │
│     ├─ 페이지 네비게이션                     │
│     └─ 요소 조작                            │
│                                             │
│  🤖 AI 레이어                               │
│     ├─ OpenAI (GPT-4, Computer Use)        │
│     ├─ Anthropic (Claude)                  │
│     └─ 기타 LLM 모델                        │
│                                             │
│  🌐 브라우저 (Chrome/Firefox/Safari)        │
│                                             │
└─────────────────────────────────────────────┘
```

### 🌟 주요 기능 한눈에 보기

| 기능 | 설명 | 사용 시점 | 난이도 |
|------|------|-----------|--------|
| **page.goto()** | 페이지 이동 | 정확한 URL을 알 때 | ⭐ 쉬움 |
| **page.act()** | AI 액션 실행 | 요소를 자연어로 설명할 때 | ⭐⭐ 보통 |
| **page.extract()** | 데이터 추출 | 페이지에서 정보 수집 | ⭐⭐ 보통 |
| **agent.execute()** | 복잡한 작업 | 여러 단계 작업 자동화 | ⭐⭐⭐ 어려움 |
| **page.observe()** | 페이지 관찰 | 요소 찾기 및 분석 | ⭐⭐ 보통 |
| **캐싱** | 액션 재사용 | 반복 작업 최적화 | ⭐⭐⭐ 어려움 |

### 💡 Stagehand의 독특한 점

#### 하이브리드 접근 방식

```typescript
// ❌ 기존 방식 1: 순수 코드 (Selenium, Playwright)
const loginButton = await page.locator('#login-btn-id-12345');
await loginButton.click();
// 문제: ID가 바뀌면 깨짐!

// ❌ 기존 방식 2: 순수 AI
await aiAgent.do("login to the website");
// 문제: 느리고, 비싸고, 예측 불가!

// ✅ Stagehand 방식: 최적의 조합!
await page.goto("https://example.com"); // 정확한 부분은 코드
await page.act("click the login button"); // 유연한 부분은 AI
```

#### 비교: 전통적 방식 vs Stagehand

```
시나리오: 깃허브에서 최신 PR 정보 가져오기

┌─────────────────────────────────────────────┐
│ 전통적 Playwright (순수 코드)                │
├─────────────────────────────────────────────┤
│ await page.goto('https://github.com/...')   │
│ await page.click('a[aria-label="Pull req"]')│
│ await page.click('div.pr-list > div:first')│
│ const author = await page.$eval(            │
│   '.author-link', el => el.textContent)     │
│                                             │
│ 문제점:                                      │
│ ❌ HTML 구조 의존                            │
│ ❌ 클래스명 변경에 취약                       │
│ ❌ 유지보수 어려움                           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Stagehand (하이브리드)                       │
├─────────────────────────────────────────────┤
│ await page.goto('https://github.com/...')   │
│ await page.act('click on pull requests')    │
│ await page.act('open the latest PR')        │
│ const {author} = await page.extract({       │
│   instruction: 'get PR author',             │
│   schema: z.object({author: z.string()})    │
│ })                                          │
│                                             │
│ 장점:                                        │
│ ✅ 자연어로 의도 표현                         │
│ ✅ HTML 변경에 강인함                        │
│ ✅ 읽기 쉽고 유지보수 용이                    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ 비용 및 성능 비교                            │
├─────────────────────────────────────────────┤
│ 순수 코드:                                   │
│ - 실행 시간: ⚡ 5초                          │
│ - AI 비용: 💰 $0                            │
│ - 유지보수: 😰 높음                          │
│                                             │
│ 순수 AI:                                     │
│ - 실행 시간: 🐌 30초                         │
│ - AI 비용: 💸 $0.50/실행                    │
│ - 유지보수: 😊 낮음                          │
│                                             │
│ Stagehand:                                  │
│ - 실행 시간: ⚡ 8초                          │
│ - AI 비용: 💵 $0.05/실행                    │
│ - 유지보수: 😊 낮음                          │
└─────────────────────────────────────────────┘
```

---

## 왜 Stagehand를 배워야 할까

### 💡 학습 단계별 이유

#### 🥉 초보자 레벨
**목표**: 간단한 웹 자동화 작업 수행

"나는 왜 Stagehand를 배워야 할까요?"

1. **반복 작업 자동화**: 매일 하는 지루한 작업을 자동화
2. **쉬운 시작**: 자연어로 명령하니까 배우기 쉬움
3. **실용적**: 실제 업무에 바로 적용 가능
4. **무료**: 오픈소스로 무료 사용

**실제 사례**:
```
상황: 매일 10개 사이트에서 가격 확인
시간: 수동으로 30분 소요
해결: Stagehand로 자동화
결과: 3분 만에 완료! ⏰
      → 연간 150시간 절약!
```

#### 🥈 중급자 레벨
**목표**: 복잡한 워크플로우 자동화

"웹 스크래핑을 넘어서고 싶어요!"

1. **동적 페이지 처리**: JavaScript로 렌더링되는 최신 웹사이트 대응
2. **유지보수성**: HTML 구조가 바뀌어도 동작
3. **AI 통합**: 최신 LLM 모델 활용
4. **프로덕션 준비**: 안정적인 자동화 시스템 구축

**실제 사례**:
```
상황: 경쟁사 웹사이트 모니터링 시스템 구축
요구사항:
- 매시간 자동 실행
- 가격 변동 감지
- 알림 발송

기존 도구 문제:
- Selenium: 웹사이트 변경 시 코드 수정 필요
- 순수 AI: 비용 과다 ($300/월)

Stagehand 도입:
- 안정적 운영
- 비용 절감: $30/월
- 유지보수 시간: 월 10시간 → 2시간
```

#### 🥇 고급자 레벨
**목표**: AI 기반 자동화 시스템 설계

"AI 에이전트를 생산 환경에 배포하고 싶어요!"

1. **확장성**: 수백 개의 작업 동시 실행
2. **커스터마이징**: 자신만의 AI 모델 통합
3. **성능 최적화**: 캐싱과 병렬 처리
4. **비용 최적화**: 토큰 사용량 최소화

**실제 사례**:
```
상황: 대규모 데이터 수집 플랫폼
규모: 일 1,000개 웹사이트 크롤링
기술 스택: Stagehand + Kubernetes

성과:
- 처리량: 1,000 사이트/일
- 성공률: 95%+
- AI 비용: $500/월 (타 솔루션 대비 80% 절감)
- 유지보수 인력: 1명
```

### 📊 사용 사례별 적합도

| 사용 사례 | 적합도 | 이유 | 난이도 |
|-----------|--------|------|--------|
| 웹 스크래핑 | ⭐⭐⭐⭐⭐ | 동적 페이지 완벽 대응 | 쉬움 |
| 폼 자동 작성 | ⭐⭐⭐⭐⭐ | 자연어 명령으로 쉬움 | 쉬움 |
| E2E 테스팅 | ⭐⭐⭐⭐ | AI로 유연한 테스트 | 보통 |
| 데이터 마이그레이션 | ⭐⭐⭐⭐ | 대량 데이터 처리 가능 | 보통 |
| 경쟁사 모니터링 | ⭐⭐⭐⭐⭐ | 변화 감지에 강함 | 쉬움 |
| RPA (업무 자동화) | ⭐⭐⭐⭐⭐ | 반복 작업 최적화 | 보통 |
| 게임 봇 | ⭐⭐ | 실시간성 부족 | 어려움 |

### 🆚 대안 도구 비교

#### Selenium vs Playwright vs Stagehand

```markdown
┌─────────────────────────────────────────────┐
│ Selenium (2004년~)                          │
├─────────────────────────────────────────────┤
│ 특징:                                        │
│ - 가장 오래된 도구                           │
│ - 다양한 언어 지원                           │
│ - 커뮤니티 방대                              │
│                                             │
│ 장점:                                        │
│ ✅ 레거시 시스템 지원                         │
│ ✅ Java, Python, C# 등 다언어                │
│                                             │
│ 단점:                                        │
│ ❌ 느림 (WebDriver 프로토콜)                 │
│ ❌ 불안정함 (타이밍 이슈)                    │
│ ❌ 최신 웹 기술 대응 느림                     │
│                                             │
│ 적합한 경우:                                 │
│ - 레거시 프로젝트                            │
│ - Java/C# 환경                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Playwright (2020년~)                        │
├─────────────────────────────────────────────┤
│ 특징:                                        │
│ - Microsoft 개발                            │
│ - 최신 웹 표준 완벽 지원                     │
│ - 빠르고 안정적                              │
│                                             │
│ 장점:                                        │
│ ✅ 매우 빠름                                 │
│ ✅ 멀티 브라우저 지원                         │
│ ✅ 자동 대기 기능                            │
│ ✅ 강력한 API                                │
│                                             │
│ 단점:                                        │
│ ❌ 순수 코드 기반 (셀렉터 직접 작성)          │
│ ❌ HTML 변경에 취약                          │
│ ❌ 학습 곡선 존재                            │
│                                             │
│ 적합한 경우:                                 │
│ - E2E 테스팅                                │
│ - 정적 구조 자동화                           │
│ - 성능 중시                                  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Stagehand (2024년~)                         │
├─────────────────────────────────────────────┤
│ 특징:                                        │
│ - Playwright 기반                           │
│ - AI 통합 (GPT-4, Claude)                   │
│ - 하이브리드 접근                            │
│                                             │
│ 장점:                                        │
│ ✅ 자연어 명령 가능                           │
│ ✅ 코드 + AI 조합                            │
│ ✅ HTML 변경에 강함                          │
│ ✅ 빠른 프로토타이핑                         │
│ ✅ 유지보수 용이                             │
│                                             │
│ 단점:                                        │
│ ❌ AI 비용 발생                              │
│ ❌ 새로운 도구 (커뮤니티 작음)                │
│ ❌ API 키 필요                               │
│                                             │
│ 적합한 경우:                                 │
│ - 동적 웹사이트                              │
│ - 빠른 개발 필요                             │
│ - AI 활용 자동화                             │
│ - 프로덕션 안정성 필요                        │
└─────────────────────────────────────────────┘
```

#### 비용 비교

```
시나리오: 100개 웹페이지 일 3회 모니터링

┌────────────────────────────────────┐
│ Selenium (순수 코드)                │
├────────────────────────────────────┤
│ 초기 개발: 40시간                   │
│ 월 유지보수: 20시간                 │
│ 서버 비용: $50/월                   │
│ AI 비용: $0                        │
│ 총 비용: $50/월 + 인건비            │
│                                    │
│ 문제점:                             │
│ - 웹사이트 변경 시 수정 필요         │
│ - 유지보수 시간 많음                │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ 순수 AI 에이전트                    │
├────────────────────────────────────┤
│ 초기 개발: 10시간                   │
│ 월 유지보수: 2시간                  │
│ 서버 비용: $50/월                   │
│ AI 비용: $500/월                   │
│ 총 비용: $550/월 + 인건비           │
│                                    │
│ 문제점:                             │
│ - AI 비용 과다                      │
│ - 느린 실행 속도                    │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Stagehand (하이브리드) ⭐ 추천!      │
├────────────────────────────────────┤
│ 초기 개발: 15시간                   │
│ 월 유지보수: 3시간                  │
│ 서버 비용: $50/월                   │
│ AI 비용: $100/월                   │
│ 총 비용: $150/월 + 인건비           │
│                                    │
│ 장점:                               │
│ ✅ 비용 효율적                       │
│ ✅ 유지보수 적음                     │
│ ✅ 안정적 운영                       │
└────────────────────────────────────┘

💡 결론: Stagehand가 비용과 효율성 측면에서 최적!
```

---

## 개발 환경 준비하기

### 🛠️ 필수 준비물

#### 시스템 요구사항

```markdown
최소 사양:
✅ CPU: 2코어 이상
✅ RAM: 4GB 이상 (권장 8GB)
✅ 저장공간: 2GB 이상
✅ 운영체제:
   - Windows 10 이상
   - macOS 10.14 이상
   - Linux (Ubuntu 18.04 이상)

권장 사양:
⭐ CPU: 4코어 이상
⭐ RAM: 16GB
⭐ SSD 스토리지
⭐ 안정적인 인터넷 연결
```

#### 소프트웨어 요구사항

```markdown
필수 설치:
1. Node.js (v18 이상)
2. npm 또는 pnpm
3. Git
4. 텍스트 에디터 (VS Code 권장)

선택 설치:
- Docker (서버 배포 시)
- PostgreSQL (데이터 저장 시)
```

### 📦 설치 단계

#### 방법 1: 빠른 시작 (초보자 추천!)

```bash
# 🚀 한 줄로 시작!
npx create-browser-app

# 질문에 답하기:
# 1. 프로젝트 이름: my-first-automation
# 2. 템플릿 선택: Basic
# 3. TypeScript 사용: Yes (권장)
```

**화면에 나타나는 것:**
```
┌─────────────────────────────────────┐
│  🎭 Create Browser App              │
├─────────────────────────────────────┤
│                                     │
│  ✓ Project created!                 │
│  ✓ Dependencies installed!          │
│  ✓ Playwright installed!            │
│                                     │
│  Next steps:                        │
│  1. cd my-first-automation          │
│  2. npm run dev                     │
│                                     │
└─────────────────────────────────────┘
```

#### 방법 2: 수동 설치 (커스터마이징 원하는 경우)

```bash
# STEP 1: 프로젝트 폴더 생성
mkdir my-stagehand-project
cd my-stagehand-project

# STEP 2: Node.js 프로젝트 초기화
npm init -y

# STEP 3: Stagehand 설치
npm install @browserbasehq/stagehand

# STEP 4: Playwright 설치
npx playwright install

# STEP 5: TypeScript 설정 (선택)
npm install -D typescript @types/node
npx tsc --init
```

#### 방법 3: 소스에서 빌드 (개발자용)

```bash
# GitHub에서 클론
git clone https://github.com/browserbase/stagehand.git
cd stagehand

# 의존성 설치 (pnpm 사용)
pnpm install

# Playwright 브라우저 설치
pnpm playwright install

# 빌드
pnpm run build

# 예제 실행
pnpm run example
```

### 🔑 API 키 설정

#### 필요한 API 키

```markdown
1. LLM Provider (필수 - 하나 선택):

   Option A: OpenAI
   - 가입: https://platform.openai.com
   - 비용: $10부터 시작
   - 모델: GPT-4, GPT-4 Vision, Computer Use

   Option B: Anthropic (Claude)
   - 가입: https://console.anthropic.com
   - 비용: $20부터 시작
   - 모델: Claude 3.5 Sonnet, Claude 3 Opus

   Option C: Google Gemini
   - 가입: https://ai.google.dev
   - 비용: 무료 티어 있음
   - 모델: Gemini Pro, Gemini Ultra

2. Browserbase (선택, 권장):
   - 가입: https://browserbase.com
   - 기능: 클라우드 브라우저 실행
   - 비용: 무료 티어 100시간/월
```

#### .env 파일 설정

```bash
# STEP 1: 예제 파일 복사
cp .env.example .env

# STEP 2: .env 파일 편집
nano .env
```

**. env 파일 내용:**
```bash
# OpenAI (하나 선택)
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx

# 또는 Anthropic
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx

# 또는 Google
GOOGLE_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxx

# Browserbase (선택사항)
BROWSERBASE_API_KEY=bb_xxxxxxxxxxxxxxxxxxxxx
BROWSERBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxxx

# 디버그 모드 (개발 시 유용)
DEBUG=stagehand:*
HEADLESS=false # 브라우저 화면 보기
```

### ✅ 설치 확인

#### 테스트 스크립트 작성

```typescript
// test.ts
import { Stagehand } from "@browserbasehq/stagehand";

async function test() {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    debugDom: true,
  });

  try {
    await stagehand.init();
    const page = stagehand.page;

    console.log("✅ Stagehand 초기화 성공!");

    await page.goto("https://example.com");
    console.log("✅ 페이지 로드 성공!");

    const title = await page.title();
    console.log(`✅ 페이지 제목: ${title}`);

    await stagehand.close();
    console.log("✅ 모든 테스트 통과!");
  } catch (error) {
    console.error("❌ 오류 발생:", error);
  }
}

test();
```

#### 실행하기

```bash
# TypeScript 실행 도구 설치 (한 번만)
npm install -D tsx

# 테스트 실행
npx tsx test.ts
```

**예상 출력:**
```
✅ Stagehand 초기화 성공!
✅ 페이지 로드 성공!
✅ 페이지 제목: Example Domain
✅ 모든 테스트 통과!
```

### 🎨 개발 환경 최적화

#### VS Code 확장 프로그램

```markdown
필수:
1. TypeScript 지원 (기본 내장)
2. ESLint
3. Prettier - Code formatter
4. Error Lens

추천:
5. GitLens
6. Playwright Test for VS Code
7. REST Client (API 테스트용)
8. Turbo Console Log
```

#### VS Code 설정

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

#### 유용한 스니펫

```json
// .vscode/snippets.json
{
  "Stagehand Init": {
    "prefix": "sth-init",
    "body": [
      "const stagehand = new Stagehand({",
      "  env: '${1|LOCAL,BROWSERBASE|}',",
      "  verbose: ${2:1},",
      "  debugDom: ${3:true},",
      "});",
      "",
      "await stagehand.init();",
      "const page = stagehand.page;"
    ]
  },
  "Stagehand Act": {
    "prefix": "sth-act",
    "body": [
      "await page.act('${1:action description}');"
    ]
  }
}
```

---

## 첫 번째 Stagehand 프로젝트

### 🎯 프로젝트 목표

**만들 것**: 자동 날씨 확인 봇
**기능**:
1. 네이버 날씨 페이지 접속
2. 서울 날씨 검색
3. 현재 온도와 날씨 정보 추출
4. 콘솔에 출력

**학습 내용**:
- Stagehand 초기화
- 페이지 네비게이션
- AI 기반 액션 (act)
- 데이터 추출 (extract)

### 📝 단계별 구현

#### STEP 1: 프로젝트 설정

```bash
# 프로젝트 생성
mkdir weather-bot
cd weather-bot
npm init -y

# Stagehand 설치
npm install @browserbasehq/stagehand zod

# TypeScript 설정
npm install -D typescript tsx @types/node
npx tsc --init
```

#### STEP 2: 코드 작성

```typescript
// weather-bot.ts
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

async function checkWeather() {
  // 1️⃣ Stagehand 초기화
  console.log("🎭 Stagehand를 시작합니다...");

  const stagehand = new Stagehand({
    env: "LOCAL", // 로컬 브라우저 사용
    verbose: 1,   // 로그 레벨 (0-2)
    debugDom: true, // DOM 디버깅 활성화
    headless: false, // 브라우저 화면 보기
  });

  try {
    await stagehand.init();
    console.log("✅ 초기화 완료!");

    const page = stagehand.page;

    // 2️⃣ 네이버 접속
    console.log("🌐 네이버에 접속합니다...");
    await page.goto("https://www.naver.com");
    console.log("✅ 네이버 접속 완료!");

    // 3️⃣ 검색창에 "날씨" 입력 (AI 사용!)
    console.log("🔍 날씨를 검색합니다...");
    await page.act("검색창에 '서울 날씨' 입력하고 검색");

    // 잠시 대기 (페이지 로드 시간)
    await page.waitForTimeout(2000);
    console.log("✅ 검색 완료!");

    // 4️⃣ 날씨 정보 추출 (AI 사용!)
    console.log("📊 날씨 정보를 추출합니다...");

    const weatherData = await page.extract({
      instruction: "현재 날씨 정보를 추출해주세요",
      schema: z.object({
        temperature: z.string().describe("현재 온도 (예: 15°C)"),
        condition: z.string().describe("날씨 상태 (예: 맑음, 흐림)"),
        location: z.string().describe("지역 (예: 서울)"),
      }),
    });

    // 5️⃣ 결과 출력
    console.log("\n" + "=".repeat(40));
    console.log("🌤️  날씨 정보");
    console.log("=".repeat(40));
    console.log(`📍 지역: ${weatherData.location}`);
    console.log(`🌡️  온도: ${weatherData.temperature}`);
    console.log(`☁️  날씨: ${weatherData.condition}`);
    console.log("=".repeat(40) + "\n");

  } catch (error) {
    console.error("❌ 오류 발생:", error);
  } finally {
    // 6️⃣ 정리
    await stagehand.close();
    console.log("👋 완료!");
  }
}

// 실행
checkWeather();
```

#### STEP 3: 실행하기

```bash
npx tsx weather-bot.ts
```

**예상 출력:**
```
🎭 Stagehand를 시작합니다...
✅ 초기화 완료!
🌐 네이버에 접속합니다...
✅ 네이버 접속 완료!
🔍 날씨를 검색합니다...
✅ 검색 완료!
📊 날씨 정보를 추출합니다...

========================================
🌤️  날씨 정보
========================================
📍 지역: 서울
🌡️  온도: 15°C
☁️  날씨: 맑음
========================================

👋 완료!
```

### 🔍 코드 상세 설명

#### 초보자를 위한 라인별 설명

```typescript
// 1. 라이브러리 가져오기
import { Stagehand } from "@browserbasehq/stagehand";
// 설명: Stagehand 메인 클래스
// 비유: 로봇을 만들기 위한 설계도

import { z } from "zod";
// 설명: 데이터 검증 라이브러리
// 비유: 데이터의 모양을 정의하는 틀

// 2. Stagehand 초기화
const stagehand = new Stagehand({
  env: "LOCAL",
  // 의미: 내 컴퓨터에서 브라우저 실행
  // 대안: "BROWSERBASE" (클라우드에서 실행)

  verbose: 1,
  // 의미: 로그 상세도
  // 0 = 조용히, 1 = 보통, 2 = 매우 상세

  debugDom: true,
  // 의미: DOM 요소 디버깅 정보 표시
  // 유용: 문제 해결 시 도움됨

  headless: false,
  // 의미: 브라우저 화면 보기
  // true = 화면 숨김 (빠름)
  // false = 화면 보임 (디버깅 좋음)
});

// 3. act() 함수
await page.act("검색창에 '서울 날씨' 입력하고 검색");
// 동작:
// 1. AI가 페이지 분석
// 2. 검색창 찾기
// 3. 텍스트 입력
// 4. 검색 버튼 클릭
//
// 장점: 정확한 셀렉터 불필요!
// 단점: AI 호출로 약간 느림 (1-2초)

// 4. extract() 함수
const weatherData = await page.extract({
  instruction: "현재 날씨 정보를 추출해주세요",
  schema: z.object({
    temperature: z.string(),
    condition: z.string(),
    location: z.string(),
  }),
});
// 동작:
// 1. AI가 페이지에서 날씨 정보 찾기
// 2. 지정된 스키마에 맞게 데이터 추출
// 3. 타입 안전한 객체 반환
//
// 장점: 유연한 데이터 추출!
// weatherData.temperature // TypeScript 자동완성!
```

### 🎓 학습 체크포인트

```markdown
✅ 배운 내용 체크:

□ Stagehand 초기화 방법
□ page.goto()로 페이지 이동
□ page.act()로 AI 액션 실행
□ page.extract()로 데이터 추출
□ Zod 스키마 정의
□ try-catch-finally 에러 처리

다음 단계:
→ 더 복잡한 액션 시도
→ 여러 페이지 네비게이션
→ 반복 작업 자동화
```

### 🚀 도전 과제

**레벨 1: 기본**
```typescript
// 도전: 다른 도시 날씨도 확인하기
// 힌트: 배열로 여러 도시 반복

const cities = ["서울", "부산", "제주"];

for (const city of cities) {
  // 여기에 코드 작성!
}
```

**레벨 2: 중급**
```typescript
// 도전: 일주일 예보 가져오기
// 힌트: schema를 배열로 만들기

schema: z.object({
  forecasts: z.array(z.object({
    day: z.string(),
    temperature: z.string(),
    condition: z.string(),
  }))
})
```

**레벨 3: 고급**
```typescript
// 도전: 결과를 JSON 파일로 저장하기
// 힌트: fs.writeFileSync 사용

import fs from "fs";

fs.writeFileSync(
  "weather-data.json",
  JSON.stringify(weatherData, null, 2)
);
```

---

## 핵심 기능 완전 정복

### 🎬 page.act() - AI 기반 액션

#### 기본 개념

```typescript
// 📖 정의
await page.act(action: string, options?: ActOptions)

// 🎯 목적
// - 자연어로 브라우저 액션 수행
// - AI가 요소를 찾아서 클릭, 입력 등 실행
// - HTML 구조 몰라도 OK!
```

#### 사용 예제 (난이도별)

**초급: 간단한 클릭**
```typescript
// 예제 1: 버튼 클릭
await page.act("로그인 버튼 클릭");

// 예제 2: 링크 클릭
await page.act("회원가입 링크 클릭");

// 예제 3: 특정 항목 선택
await page.act("검색 결과 첫 번째 항목 클릭");
```

**중급: 입력과 조합**
```typescript
// 예제 1: 폼 작성
await page.act("이메일 입력란에 'test@example.com' 입력");
await page.act("비밀번호 입력란에 'mypassword123' 입력");
await page.act("로그인 버튼 클릭");

// 예제 2: 검색
await page.act("검색창에 'Stagehand tutorial' 입력");
await page.act("검색 버튼 클릭");

// 예제 3: 드롭다운 선택
await page.act("국가 드롭다운에서 '대한민국' 선택");
```

**고급: 복잡한 액션**
```typescript
// 예제 1: 조건부 액션
await page.act("'동의함' 체크박스가 있으면 선택");

// 예제 2: 스크롤과 클릭
await page.act("페이지를 아래로 스크롤하고 '더 보기' 버튼 클릭");

// 예제 3: 여러 단계
await page.act(
  "프로필 메뉴 열고, 설정 클릭하고, 알림 설정으로 이동"
);
```

#### act() 옵션 활용

```typescript
// 옵션 1: modelName - 사용할 AI 모델 지정
await page.act("복잡한 작업", {
  modelName: "gpt-4-vision-preview" // 시각 정보 필요 시
});

// 옵션 2: useVision - 스크린샷 사용 여부
await page.act("이미지 속 텍스트 클릭", {
  useVision: "fallback" // 기본 방법 실패 시 시각 사용
  // "fallback" | "always" | "never"
});

// 옵션 3: verifyActCompletion - 액션 완료 확인
await page.act("제출 버튼 클릭", {
  verifyActCompletion: true // 실제로 클릭되었는지 확인
});
```

#### 실전 팁

```typescript
// ✅ 좋은 예: 구체적인 설명
await page.act("파란색 '로그인' 버튼 클릭");
await page.act("상단 오른쪽의 사용자 아이콘 클릭");

// ❌ 나쁜 예: 모호한 설명
await page.act("버튼 클릭"); // 어떤 버튼?
await page.act("클릭"); // 뭘 클릭?

// ✅ 좋은 예: 명확한 위치
await page.act("사이드바의 '설정' 메뉴 아이템 클릭");

// ❌ 나쁜 예: 위치 불명확
await page.act("설정"); // 설정 뭐하라고?
```

### 📊 page.extract() - 데이터 추출

#### 기본 개념

```typescript
// 📖 정의
await page.extract<T>({
  instruction: string,
  schema: ZodSchema<T>,
  modelName?: string,
  useTextExtract?: boolean
})

// 🎯 목적
// - 페이지에서 구조화된 데이터 추출
// - AI가 자동으로 정보 찾아서 파싱
// - 타입 안전한 결과 반환
```

#### 사용 예제 (난이도별)

**초급: 간단한 정보 추출**
```typescript
// 예제 1: 단일 정보
const { title } = await page.extract({
  instruction: "페이지 제목 추출",
  schema: z.object({
    title: z.string()
  })
});

console.log(title); // "Stagehand - AI Browser Automation"

// 예제 2: 여러 정보
const info = await page.extract({
  instruction: "사용자 정보 추출",
  schema: z.object({
    name: z.string(),
    email: z.string(),
    age: z.number()
  })
});

console.log(info.name); // TypeScript 자동완성!
```

**중급: 배열 데이터 추출**
```typescript
// 예제 1: 검색 결과 목록
const { results } = await page.extract({
  instruction: "검색 결과 목록 추출",
  schema: z.object({
    results: z.array(z.object({
      title: z.string(),
      url: z.string(),
      description: z.string()
    }))
  })
});

// 사용
results.forEach(result => {
  console.log(`제목: ${result.title}`);
  console.log(`URL: ${result.url}`);
});

// 예제 2: 상품 목록
const { products } = await page.extract({
  instruction: "상품 정보 추출",
  schema: z.object({
    products: z.array(z.object({
      name: z.string(),
      price: z.number(),
      rating: z.number(),
      inStock: z.boolean()
    }))
  })
});
```

**고급: 중첩된 구조 추출**
```typescript
// 예제: 복잡한 데이터 구조
const profileData = await page.extract({
  instruction: "사용자 프로필 전체 정보 추출",
  schema: z.object({
    user: z.object({
      name: z.string(),
      bio: z.string(),
      avatar: z.string().url(),
      stats: z.object({
        followers: z.number(),
        following: z.number(),
        posts: z.number()
      }),
      recentPosts: z.array(z.object({
        title: z.string(),
        date: z.string(),
        likes: z.number(),
        comments: z.number()
      }))
    })
  })
});

// 타입 안전한 접근
console.log(profileData.user.stats.followers);
console.log(profileData.user.recentPosts[0].title);
```

#### Zod 스키마 패턴

```typescript
// 패턴 1: 선택적 필드
const schema = z.object({
  name: z.string(),
  email: z.string().optional(), // 없을 수도 있음
  phone: z.string().nullable(),  // null 가능
});

// 패턴 2: 기본값 설정
const schema = z.object({
  status: z.string().default("active"),
  count: z.number().default(0)
});

// 패턴 3: 검증 규칙
const schema = z.object({
  email: z.string().email(), // 이메일 형식 검증
  age: z.number().min(0).max(150), // 범위 검증
  url: z.string().url(), // URL 형식 검증
});

// 패턴 4: 설명 추가 (AI에게 힌트!)
const schema = z.object({
  price: z.number().describe("상품 가격 (원화)"),
  stock: z.number().describe("재고 수량"),
  available: z.boolean().describe("구매 가능 여부")
});

// 패턴 5: 유니온 타입
const schema = z.object({
  status: z.enum(["pending", "approved", "rejected"]),
  type: z.union([z.literal("user"), z.literal("admin")])
});
```

#### 실전 사례

**사례 1: E커머스 상품 스크래핑**
```typescript
await page.goto("https://example-shop.com/product/123");

const product = await page.extract({
  instruction: "상품 상세 정보 추출",
  schema: z.object({
    name: z.string().describe("상품명"),
    price: z.number().describe("가격 (숫자만)"),
    originalPrice: z.number().optional().describe("할인 전 가격"),
    discount: z.number().optional().describe("할인율 (%)"),
    rating: z.number().describe("평점 (0-5)"),
    reviewCount: z.number().describe("리뷰 수"),
    inStock: z.boolean().describe("재고 있음"),
    images: z.array(z.string().url()).describe("상품 이미지 URL들"),
    options: z.array(z.object({
      name: z.string(),
      values: z.array(z.string())
    })).describe("상품 옵션 (색상, 사이즈 등)"),
    description: z.string().describe("상품 설명"),
    shipping: z.object({
      fee: z.number(),
      estimatedDays: z.number()
    }).describe("배송 정보")
  })
});

// 사용
console.log(`${product.name}: ${product.price}원`);
if (product.discount) {
  console.log(`${product.discount}% 할인!`);
}
```

**사례 2: 뉴스 기사 수집**
```typescript
await page.goto("https://news-site.com/article/123");

const article = await page.extract({
  instruction: "기사 전체 내용 추출",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    publishDate: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
    images: z.array(z.object({
      url: z.string().url(),
      caption: z.string().optional()
    })),
    relatedArticles: z.array(z.object({
      title: z.string(),
      url: z.string().url()
    }))
  })
});
```

### 🤖 agent.execute() - 복잡한 작업 수행

#### 기본 개념

```typescript
// 📖 정의
const agent = stagehand.agent({
  provider: "openai" | "anthropic",
  model: string
});

await agent.execute(task: string)

// 🎯 목적
// - 여러 단계의 복잡한 작업 자동 수행
// - AI가 계획 세우고 실행
// - Computer Use 모델 활용
```

#### Computer Use란?

```markdown
Computer Use = 컴퓨터 사용 AI 모델

기존 AI:
- 텍스트만 이해
- 특정 작업만 수행

Computer Use AI:
- 화면을 "봄" 👀
- 마우스/키보드 "사용" 🖱️⌨️
- 사람처럼 컴퓨터 조작

모델 종류:
1. OpenAI: "computer-use-preview"
2. Anthropic: Claude 3.5 Sonnet (computer use)

적합한 작업:
✅ 복잡한 워크플로우
✅ 동적 페이지 탐색
✅ 예측 불가능한 UI

부적합한 작업:
❌ 간단한 클릭
❌ 고속 처리 필요
❌ 비용 최소화 필요
```

#### 사용 예제 (난이도별)

**초급: 간단한 작업 체인**
```typescript
// 에이전트 생성
const agent = stagehand.agent({
  provider: "openai",
  model: "computer-use-preview"
});

// 예제 1: GitHub 탐색
await page.goto("https://github.com");
await agent.execute("Stagehand 저장소를 찾아서 스타 수를 확인");

// 예제 2: 쇼핑몰 검색
await page.goto("https://shopping-site.com");
await agent.execute("노트북을 검색하고 가격 순으로 정렬");
```

**중급: 복잡한 워크플로우**
```typescript
// 예제 1: 폼 작성과 제출
await page.goto("https://survey-site.com");
await agent.execute(`
  설문조사를 다음과 같이 작성:
  - 이름: 홍길동
  - 이메일: hong@example.com
  - 만족도: 매우 만족
  - 의견: "서비스가 훌륭합니다"
  작성 후 제출
`);

// 예제 2: 데이터 비교
await agent.execute(`
  1. 상품 A의 가격 확인
  2. 상품 B의 가격 확인
  3. 더 저렴한 상품을 장바구니에 추가
`);
```

**고급: 의사결정 포함**
```typescript
// 예제 1: 조건부 처리
await agent.execute(`
  GitHub의 최신 PR을 확인하고:
  - 만약 "bug" 라벨이 있으면 우선순위 높음으로 표시
  - "feature" 라벨이 있으면 다음 마일스톤에 추가
  - 리뷰어가 없으면 자동 할당
`);

// 예제 2: 반복 작업
await agent.execute(`
  검색 결과의 첫 10개 항목에 대해:
  1. 각 항목 클릭
  2. 가격 정보 수집
  3. 뒤로 가기
  4. 다음 항목 진행
`);
```

#### agent vs act 비교

```typescript
// 상황: GitHub에서 특정 이슈 찾기

// ❌ act()로 하면: 여러 번 호출 필요
await page.act("Issues 탭 클릭");
await page.act("검색창에 'bug' 입력");
await page.act("라벨 필터에서 'priority-high' 선택");
await page.act("첫 번째 이슈 클릭");
// 4번의 AI 호출 = 느리고 비쌈

// ✅ agent로 하면: 한 번에!
await agent.execute(
  "Issues에서 'bug' 키워드와 'priority-high' 라벨이 있는 이슈 찾아서 열기"
);
// 1번의 AI 호출 = 빠르고 저렴!

// 💡 결론: 복잡한 작업은 agent, 단순한 작업은 act!
```

### 👁️ page.observe() - 페이지 관찰

#### 기본 개념

```typescript
// 📖 정의
await page.observe(options?: ObserveOptions)

// 🎯 목적
// - 페이지의 모든 상호작용 가능한 요소 찾기
// - 디버깅 및 탐색에 유용
// - 어떤 액션이 가능한지 확인
```

#### 사용 예제

```typescript
// 예제 1: 기본 관찰
const elements = await page.observe();

console.log("찾은 요소들:");
elements.forEach((el, index) => {
  console.log(`${index + 1}. ${el.description}`);
});

// 출력 예시:
// 1. 로그인 버튼 (button)
// 2. 회원가입 링크 (link)
// 3. 검색 입력란 (input)
// 4. 메뉴 아이콘 (button)

// 예제 2: 특정 요소 찾기
const elements = await page.observe();
const loginButton = elements.find(el =>
  el.description.includes("로그인")
);

if (loginButton) {
  console.log("로그인 버튼 발견!");
  console.log(`위치: ${loginButton.bbox}`);
}
```

### 🎬 실전 통합 예제

#### 예제: 구인구직 사이트 자동 지원

```typescript
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

async function autoApplyJob() {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    headless: false
  });

  try {
    await stagehand.init();
    const page = stagehand.page;

    // 1. 사이트 접속
    console.log("📍 구인구직 사이트 접속...");
    await page.goto("https://job-site.com");

    // 2. 로그인 (코드 + AI)
    console.log("🔐 로그인 중...");
    await page.act("로그인 버튼 클릭");

    // 정확한 부분은 코드로!
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'mypassword');
    await page.click('button[type="submit"]');

    await page.waitForTimeout(2000);

    // 3. 채용공고 검색
    console.log("🔍 채용공고 검색...");
    await page.act("검색창에 'Node.js 개발자' 입력하고 검색");
    await page.waitForTimeout(2000);

    // 4. 공고 목록 추출
    console.log("📊 공고 목록 가져오기...");
    const { jobs } = await page.extract({
      instruction: "채용공고 목록 추출 (최대 5개)",
      schema: z.object({
        jobs: z.array(z.object({
          title: z.string(),
          company: z.string(),
          location: z.string(),
          salary: z.string().optional(),
        })).max(5)
      })
    });

    console.log(`\n📋 발견한 공고: ${jobs.length}개\n`);

    // 5. 각 공고에 지원
    for (const job of jobs) {
      console.log(`\n💼 ${job.company} - ${job.title}`);

      // AI 에이전트로 복잡한 작업 수행
      const agent = stagehand.agent({
        provider: "openai",
        model: "computer-use-preview"
      });

      await agent.execute(`
        "${job.title}" 공고를 찾아서:
        1. 상세 페이지 열기
        2. "지원하기" 버튼 클릭
        3. 이력서 자동 입력
        4. 지원 완료
      `);

      console.log(`✅ 지원 완료!`);

      // 뒤로 가기
      await page.goBack();
      await page.waitForTimeout(1000);
    }

    console.log("\n🎉 모든 지원 완료!");

  } catch (error) {
    console.error("❌ 오류:", error);
  } finally {
    await stagehand.close();
  }
}

autoApplyJob();
```

---

## 실전 프로젝트 예제

### 📦 프로젝트 1: 가격 비교 봇

#### 프로젝트 개요

```markdown
목표: 여러 쇼핑몰에서 동일 상품 가격 비교

기능:
1. 상품명으로 검색
2. 각 쇼핑몰에서 가격 수집
3. 가격 비교 및 정렬
4. 결과를 파일로 저장

사용 기술:
- Stagehand (브라우저 자동화)
- Zod (데이터 검증)
- Node.js fs (파일 저장)
```

#### 전체 코드

```typescript
// price-comparison.ts
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";
import fs from "fs";

// 타입 정의
interface PriceInfo {
  site: string;
  productName: string;
  price: number;
  url: string;
  inStock: boolean;
}

// 쇼핑몰 목록
const shoppingSites = [
  {
    name: "쿠팡",
    url: "https://www.coupang.com",
    searchAction: "검색창에 '{product}' 입력하고 검색"
  },
  {
    name: "11번가",
    url: "https://www.11st.co.kr",
    searchAction: "검색창에 '{product}' 입력하고 검색"
  },
  {
    name: "G마켓",
    url: "http://www.gmarket.co.kr",
    searchAction: "검색창에 '{product}' 입력하고 검색"
  }
];

async function comparePrices(productName: string) {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    headless: false
  });

  const results: PriceInfo[] = [];

  try {
    await stagehand.init();
    const page = stagehand.page;

    console.log(`🔍 "${productName}" 가격 비교 시작!\n`);

    // 각 쇼핑몰 순회
    for (const site of shoppingSites) {
      console.log(`\n📍 ${site.name} 검색 중...`);

      try {
        // 1. 사이트 접속
        await page.goto(site.url, {
          waitUntil: "networkidle"
        });

        // 2. 검색
        const searchAction = site.searchAction.replace(
          '{product}',
          productName
        );
        await page.act(searchAction);

        // 페이지 로드 대기
        await page.waitForTimeout(3000);

        // 3. 첫 번째 상품 정보 추출
        const product = await page.extract({
          instruction: "검색 결과 첫 번째 상품의 정보 추출",
          schema: z.object({
            name: z.string().describe("상품명"),
            price: z.number().describe("가격 (숫자만)"),
            inStock: z.boolean().describe("재고 여부"),
            url: z.string().url().describe("상품 링크")
          })
        });

        results.push({
          site: site.name,
          productName: product.name,
          price: product.price,
          url: product.url,
          inStock: product.inStock
        });

        console.log(`✅ ${site.name}: ${product.price.toLocaleString()}원`);

      } catch (error) {
        console.error(`❌ ${site.name} 검색 실패:`, error);
      }
    }

    // 4. 결과 정렬 (가격 낮은 순)
    results.sort((a, b) => a.price - b.price);

    // 5. 결과 출력
    console.log("\n" + "=".repeat(60));
    console.log("💰 가격 비교 결과");
    console.log("=".repeat(60));

    results.forEach((result, index) => {
      const badge = index === 0 ? "🏆 최저가" : "";
      console.log(`\n${index + 1}. ${result.site} ${badge}`);
      console.log(`   상품: ${result.productName}`);
      console.log(`   가격: ${result.price.toLocaleString()}원`);
      console.log(`   재고: ${result.inStock ? "있음" : "없음"}`);
      console.log(`   링크: ${result.url}`);
    });

    console.log("\n" + "=".repeat(60));

    // 6. 결과를 JSON 파일로 저장
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `price-comparison-${productName}-${timestamp}.json`;

    fs.writeFileSync(
      filename,
      JSON.stringify({
        product: productName,
        searchDate: new Date().toISOString(),
        results: results
      }, null, 2),
      'utf-8'
    );

    console.log(`\n💾 결과 저장: ${filename}`);

  } catch (error) {
    console.error("❌ 오류 발생:", error);
  } finally {
    await stagehand.close();
  }
}

// 실행
const productToSearch = process.argv[2] || "무선 이어폰";
comparePrices(productToSearch);
```

#### 실행 방법

```bash
# 기본 실행 (무선 이어폰 검색)
npx tsx price-comparison.ts

# 다른 상품 검색
npx tsx price-comparison.ts "노트북"
npx tsx price-comparison.ts "아이폰 15"
```

#### 학습 포인트

```typescript
// 1. 반복문으로 여러 사이트 처리
for (const site of shoppingSites) {
  // 각 사이트마다 동일한 작업 수행
}

// 2. 에러 처리로 안정성 확보
try {
  // 작업 수행
} catch (error) {
  // 한 사이트 실패해도 계속 진행
}

// 3. 데이터 정렬
results.sort((a, b) => a.price - b.price);
// 가격 낮은 순으로 정렬

// 4. 파일 저장
fs.writeFileSync(filename, JSON.stringify(data, null, 2));
// 결과를 JSON 파일로 저장
```

### 📰 프로젝트 2: 뉴스 스크래퍼

#### 프로젝트 개요

```markdown
목표: 여러 뉴스 사이트에서 특정 키워드 기사 수집

기능:
1. 키워드로 뉴스 검색
2. 기사 제목, 내용, URL 수집
3. 중복 제거
4. CSV 파일로 저장
5. 이메일 알림 (선택)

사용 기술:
- Stagehand
- CSV 생성
- 날짜 처리
```

#### 전체 코드

```typescript
// news-scraper.ts
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";
import fs from "fs";

interface Article {
  title: string;
  summary: string;
  url: string;
  source: string;
  publishDate: string;
}

async function scrapeNews(keyword: string) {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    headless: false
  });

  const allArticles: Article[] = [];

  try {
    await stagehand.init();
    const page = stagehand.page;

    console.log(`📰 "${keyword}" 키워드 뉴스 수집 시작!\n`);

    // 네이버 뉴스
    console.log("📍 네이버 뉴스 검색...");
    await page.goto("https://news.naver.com");

    await page.act(`검색창에 "${keyword}" 입력하고 검색`);
    await page.waitForTimeout(2000);

    const naverArticles = await page.extract({
      instruction: "뉴스 기사 목록 추출 (최대 10개)",
      schema: z.object({
        articles: z.array(z.object({
          title: z.string(),
          summary: z.string(),
          url: z.string().url(),
          publishDate: z.string()
        })).max(10)
      })
    });

    naverArticles.articles.forEach(article => {
      allArticles.push({
        ...article,
        source: "네이버 뉴스"
      });
    });

    console.log(`✅ 네이버: ${naverArticles.articles.length}개 수집`);

    // 다음 뉴스
    console.log("\n📍 다음 뉴스 검색...");
    await page.goto("https://news.daum.net");

    await page.act(`검색창에 "${keyword}" 입력하고 검색`);
    await page.waitForTimeout(2000);

    const daumArticles = await page.extract({
      instruction: "뉴스 기사 목록 추출 (최대 10개)",
      schema: z.object({
        articles: z.array(z.object({
          title: z.string(),
          summary: z.string(),
          url: z.string().url(),
          publishDate: z.string()
        })).max(10)
      })
    });

    daumArticles.articles.forEach(article => {
      allArticles.push({
        ...article,
        source: "다음 뉴스"
      });
    });

    console.log(`✅ 다음: ${daumArticles.articles.length}개 수집`);

    // 중복 제거 (URL 기준)
    const uniqueArticles = Array.from(
      new Map(allArticles.map(article => [article.url, article])).values()
    );

    console.log(`\n📊 총 ${uniqueArticles.length}개 기사 수집 완료!`);

    // CSV 파일로 저장
    const csv = [
      "제목,요약,URL,출처,발행일",
      ...uniqueArticles.map(article =>
        `"${article.title}","${article.summary}","${article.url}","${article.source}","${article.publishDate}"`
      )
    ].join("\n");

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `news-${keyword}-${timestamp}.csv`;

    fs.writeFileSync(filename, "\uFEFF" + csv, 'utf-8'); // UTF-8 BOM 추가
    console.log(`💾 결과 저장: ${filename}`);

    // 결과 미리보기
    console.log("\n" + "=".repeat(80));
    console.log("📋 수집된 기사 미리보기 (최근 3개)");
    console.log("=".repeat(80));

    uniqueArticles.slice(0, 3).forEach((article, index) => {
      console.log(`\n${index + 1}. ${article.title}`);
      console.log(`   출처: ${article.source} | 날짜: ${article.publishDate}`);
      console.log(`   요약: ${article.summary.substring(0, 100)}...`);
      console.log(`   URL: ${article.url}`);
    });

  } catch (error) {
    console.error("❌ 오류 발생:", error);
  } finally {
    await stagehand.close();
  }
}

// 실행
const keyword = process.argv[2] || "AI 기술";
scrapeNews(keyword);
```

#### 고급 기능: 스케줄링

```typescript
// scheduled-scraper.ts
import cron from "node-cron";

// 매일 오전 9시에 실행
cron.schedule('0 9 * * *', () => {
  console.log('⏰ 일일 뉴스 수집 시작!');
  scrapeNews("AI 기술");
});

console.log('📅 스케줄러 시작됨. 매일 오전 9시에 실행됩니다.');
```

### 🎮 프로젝트 3: 게임 이벤트 알림 봇

#### 프로젝트 개요

```markdown
목표: 게임 웹사이트에서 이벤트 정보 모니터링

기능:
1. 주기적으로 게임 사이트 확인
2. 새 이벤트 감지
3. 디스코드/슬랙 알림
4. 이벤트 목록 데이터베이스 저장
```

#### 코드 (간략 버전)

```typescript
// game-event-monitor.ts
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

async function checkGameEvents() {
  const stagehand = new Stagehand({
    env: "BROWSERBASE", // 클라우드에서 실행
    verbose: 0, // 조용히
    headless: true // 화면 없이
  });

  try {
    await stagehand.init();
    const page = stagehand.page;

    await page.goto("https://game-site.com/events");

    const { events } = await page.extract({
      instruction: "현재 진행 중인 이벤트 목록 추출",
      schema: z.object({
        events: z.array(z.object({
          title: z.string(),
          description: z.string(),
          startDate: z.string(),
          endDate: z.string(),
          reward: z.string()
        }))
      })
    });

    // 새 이벤트 체크
    for (const event of events) {
      if (isNewEvent(event)) {
        await sendNotification(event);
      }
    }

  } catch (error) {
    console.error("❌ 오류:", error);
  } finally {
    await stagehand.close();
  }
}

function isNewEvent(event: any): boolean {
  // 데이터베이스 또는 파일로 이전 이벤트 확인
  // 여기서는 간단히 true 반환
  return true;
}

async function sendNotification(event: any) {
  // 디스코드/슬랙 웹훅으로 알림 전송
  console.log(`🎉 새 이벤트: ${event.title}`);

  // 실제 구현:
  // await fetch(DISCORD_WEBHOOK_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     content: `새 이벤트! ${event.title}\n${event.description}`
  //   })
  // });
}

// 10분마다 실행
setInterval(checkGameEvents, 10 * 60 * 1000);
checkGameEvents(); // 즉시 한 번 실행
```

---

## 고급 활용법

### 🚀 성능 최적화

#### 캐싱 활용

```typescript
// 반복적인 액션은 캐시!
const stagehand = new Stagehand({
  env: "LOCAL",
  enableCaching: true, // 캐싱 활성화
  verbose: 1
});

// 첫 실행: AI 호출 (느림)
await page.act("로그인 버튼 클릭");
// → AI가 버튼 찾고 저장

// 두 번째 실행: 캐시 사용 (빠름!)
await page.act("로그인 버튼 클릭");
// → 저장된 정보 재사용

// 💡 장점:
// - 속도 10배 향상
// - AI 비용 90% 절감
// - 안정성 증가
```

#### 병렬 처리

```typescript
// ❌ 순차 처리 (느림)
for (const url of urls) {
  await processUrl(url); // 하나씩 처리
}
// 10개 URL = 100초

// ✅ 병렬 처리 (빠름!)
await Promise.all(
  urls.map(url => processUrl(url))
);
// 10개 URL = 10초!

// 실전 예제
async function processUrlsInParallel(urls: string[]) {
  const results = await Promise.all(
    urls.map(async (url) => {
      const stagehand = new Stagehand({
        env: "LOCAL",
        verbose: 0
      });

      try {
        await stagehand.init();
        const page = stagehand.page;

        await page.goto(url);
        const data = await page.extract({
          instruction: "페이지 정보 추출",
          schema: z.object({
            title: z.string(),
            content: z.string()
          })
        });

        return { url, data };
      } finally {
        await stagehand.close();
      }
    })
  );

  return results;
}
```

#### 선택적 AI 사용

```typescript
// 💡 전략: 정확한 부분은 코드, 불확실한 부분만 AI

// ❌ 모두 AI 사용 (비효율)
await page.act("이메일 입력란에 'test@example.com' 입력");
await page.act("비밀번호 입력란에 'password123' 입력");
await page.act("로그인 버튼 클릭");
// 3번의 AI 호출 = 느리고 비쌈

// ✅ 하이브리드 접근 (효율적)
await page.fill('#email', 'test@example.com'); // 코드
await page.fill('#password', 'password123'); // 코드
await page.act("로그인 버튼 클릭"); // AI (버튼 위치 불확실)
// 1번의 AI 호출 = 빠르고 저렴!
```

### 🔧 고급 설정

#### Browserbase 클라우드 사용

```typescript
// 로컬 대신 클라우드에서 실행

const stagehand = new Stagehand({
  env: "BROWSERBASE",
  apiKey: process.env.BROWSERBASE_API_KEY,
  projectId: process.env.BROWSERBASE_PROJECT_ID,

  // 고급 옵션
  browserbaseSessionCreateParams: {
    // 세션 지속 시간
    keepAlive: true,

    // 프록시 사용
    proxies: [{
      type: "residential",
      country: "KR" // 한국 IP
    }],

    // 브라우저 설정
    browserSettings: {
      // 사용자 에이전트 설정
      userAgent: "Mozilla/5.0...",

      // 뷰포트 크기
      viewport: {
        width: 1920,
        height: 1080
      },

      // 타임존
      timezone: "Asia/Seoul"
    }
  }
});

// 💡 Browserbase 장점:
// - 서버 관리 불필요
// - 무제한 확장 가능
// - 자동 IP 로테이션
// - 빠른 실행 속도
```

#### 커스텀 LLM 모델

```typescript
// 다른 AI 모델 사용

const stagehand = new Stagehand({
  env: "LOCAL",

  // OpenAI 설정
  modelName: "gpt-4-vision-preview",
  modelClientOptions: {
    apiKey: process.env.OPENAI_API_KEY,

    // 토큰 제한
    maxTokens: 1000,

    // 온도 (창의성)
    temperature: 0.1 // 0 = 결정적, 1 = 창의적
  }
});

// 또는 Anthropic Claude
const stagehand = new Stagehand({
  env: "LOCAL",

  modelName: "claude-3-5-sonnet-20241022",
  modelClientOptions: {
    apiKey: process.env.ANTHROPIC_API_KEY
  }
});
```

### 🔐 보안 고려사항

#### 민감 정보 처리

```typescript
// ❌ 나쁜 예: 코드에 하드코딩
await page.fill('#password', 'mypassword123');

// ✅ 좋은 예: 환경 변수 사용
await page.fill('#password', process.env.USER_PASSWORD);

// ✅ 더 좋은 예: 암호화된 저장소
import { getSecret } from './secrets';
const password = await getSecret('USER_PASSWORD');
await page.fill('#password', password);
```

#### 로그 관리

```typescript
// 민감한 정보는 로그에 남기지 않기!

// ❌ 나쁜 예
console.log(`로그인 시도: ${email}, ${password}`);

// ✅ 좋은 예
console.log(`로그인 시도: ${email}, [REDACTED]`);

// Stagehand 로그 레벨 조정
const stagehand = new Stagehand({
  verbose: 0, // 프로덕션에서는 0
  debugDom: false // DOM 정보 숨기기
});
```

### 📊 모니터링 및 알림

#### 실행 상태 추적

```typescript
import { Stagehand } from "@browserbasehq/stagehand";

class MonitoredStagehand {
  private stagehand: Stagehand;
  private startTime: number;
  private metrics = {
    pageLoads: 0,
    actCalls: 0,
    extractCalls: 0,
    errors: 0
  };

  async init() {
    this.startTime = Date.now();
    this.stagehand = new Stagehand({
      env: "LOCAL",
      verbose: 1
    });
    await this.stagehand.init();
  }

  async act(action: string) {
    try {
      this.metrics.actCalls++;
      await this.stagehand.page.act(action);
    } catch (error) {
      this.metrics.errors++;
      throw error;
    }
  }

  async extract(options: any) {
    try {
      this.metrics.extractCalls++;
      return await this.stagehand.page.extract(options);
    } catch (error) {
      this.metrics.errors++;
      throw error;
    }
  }

  getMetrics() {
    const duration = Date.now() - this.startTime;
    return {
      ...this.metrics,
      duration: `${(duration / 1000).toFixed(2)}s`,
      successRate: `${((1 - this.metrics.errors / (this.metrics.actCalls + this.metrics.extractCalls)) * 100).toFixed(2)}%`
    };
  }
}

// 사용
const monitored = new MonitoredStagehand();
await monitored.init();

// 작업 수행...
await monitored.act("버튼 클릭");

// 메트릭 확인
console.log(monitored.getMetrics());
// {
//   actCalls: 5,
//   extractCalls: 3,
//   errors: 0,
//   duration: "12.34s",
//   successRate: "100%"
// }
```

---

## 문제 해결 가이드

### 🐛 일반적인 오류

#### 오류 1: "API key not found"

```typescript
// 증상
Error: OPENAI_API_KEY is not set

// 원인
.env 파일에 API 키가 없거나 로드되지 않음

// 해결
// 1. .env 파일 확인
OPENAI_API_KEY=sk-proj-xxxxx

// 2. dotenv 로드
import 'dotenv/config';

// 3. 직접 설정
const stagehand = new Stagehand({
  env: "LOCAL",
  modelClientOptions: {
    apiKey: "sk-proj-xxxxx"
  }
});
```

#### 오류 2: "Element not found"

```typescript
// 증상
Error: Could not find element matching "로그인 버튼"

// 원인
1. AI가 요소를 찾지 못함
2. 페이지가 완전히 로드되지 않음
3. 요소 설명이 부정확

// 해결
// 1. 대기 시간 추가
await page.waitForTimeout(2000);

// 2. 더 구체적인 설명
// ❌ await page.act("버튼 클릭");
// ✅ await page.act("파란색 '로그인' 버튼 클릭");

// 3. observe()로 요소 확인
const elements = await page.observe();
console.log(elements); // 어떤 요소들이 있는지 확인

// 4. 코드 방식 사용
await page.click('button.login-btn');
```

#### 오류 3: "Timeout"

```typescript
// 증상
TimeoutError: Waiting for selector timeout

// 원인
페이지 로드가 느리거나 무한 로딩

// 해결
// 1. 타임아웃 늘리기
await page.goto("https://slow-site.com", {
  timeout: 60000 // 60초
});

// 2. waitUntil 옵션 변경
await page.goto("https://site.com", {
  waitUntil: "domcontentloaded" // load 대신
});

// 3. 네트워크 상태 확인
await page.goto("https://site.com", {
  waitUntil: "networkidle"
});
```

#### 오류 4: "Rate limit exceeded"

```typescript
// 증상
Error: Rate limit exceeded for API

// 원인
AI API 호출 한도 초과

// 해결
// 1. 캐싱 활용
const stagehand = new Stagehand({
  enableCaching: true
});

// 2. 호출 간 지연
await page.act("버튼 클릭");
await page.waitForTimeout(1000); // 1초 대기
await page.act("다음 버튼 클릭");

// 3. 코드 방식 우선 사용
// ❌ await page.act("이메일 입력");
// ✅ await page.fill('#email', 'test@example.com');
```

### 🔍 디버깅 팁

#### 스크린샷 찍기

```typescript
// 특정 시점의 화면 캡처
await page.screenshot({
  path: 'debug-screenshot.png',
  fullPage: true // 전체 페이지
});

// 에러 발생 시 자동 스크린샷
try {
  await page.act("복잡한 작업");
} catch (error) {
  await page.screenshot({
    path: `error-${Date.now()}.png`
  });
  throw error;
}
```

#### 콘솔 로그 보기

```typescript
// 브라우저 콘솔 메시지 수신
page.on('console', msg => {
  console.log('브라우저 로그:', msg.text());
});

// 페이지 에러 수신
page.on('pageerror', error => {
  console.error('페이지 에러:', error);
});
```

#### 느린 동작으로 실행

```typescript
const stagehand = new Stagehand({
  env: "LOCAL",
  headless: false,
  slowMo: 1000 // 각 동작 사이 1초 지연
});

// 장점: 무슨 일이 일어나는지 확인 가능
```

### 📚 자주 묻는 질문 (FAQ)

**Q1: Stagehand는 무료인가요?**
```
A: Stagehand 자체는 무료 오픈소스입니다.
   하지만 AI API 사용에 비용이 발생합니다:
   - OpenAI: $0.01~0.03 per request
   - Anthropic: $0.015~0.075 per request
   - Browserbase: 월 100시간 무료
```

**Q2: Playwright와 무엇이 다른가요?**
```
A: Playwright는 순수 코드 기반:
   await page.click('#button-id');

   Stagehand는 AI 통합:
   await page.act("버튼 클릭");

   Stagehand = Playwright + AI
```

**Q3: 프로덕션에서 사용해도 되나요?**
```
A: 네! Stagehand는 프로덕션용으로 설계되었습니다.
   권장사항:
   ✅ 캐싱 활용
   ✅ 에러 처리 철저히
   ✅ 모니터링 설정
   ✅ Browserbase 사용 (확장성)
```

**Q4: 어떤 웹사이트에서 작동하나요?**
```
A: 대부분의 웹사이트에서 작동합니다:
   ✅ 정적 웹사이트
   ✅ React/Vue/Angular SPA
   ✅ 동적 컨텐츠

   제한사항:
   ❌ CAPTCHA (우회 불가)
   ❌ 매우 강력한 봇 탐지
   ❌ 로그인 필요한 사이트 (일부)
```

**Q5: 속도가 얼마나 빠른가요?**
```
A: 작업에 따라 다름:
   - 코드만 사용: 0.1~1초
   - AI act(): 1~3초
   - AI extract(): 2~5초
   - agent.execute(): 10~30초

   최적화 시 순수 Playwright 대비 80% 속도 달성 가능
```

---

## 다음 단계로 나아가기

### 📚 학습 로드맵

#### 레벨 1: 기초 마스터 ✅

```markdown
완료한 내용:
✅ Stagehand 설치 및 설정
✅ 기본 act/extract 사용
✅ 간단한 자동화 작성
✅ 데이터 추출 및 저장

다음 실습:
1. 3가지 웹사이트 자동화 만들기
2. 에러 처리 추가하기
3. 결과를 파일로 저장하기
```

#### 레벨 2: 실전 프로젝트 🚀

```markdown
학습 목표:
□ 복잡한 워크플로우 구현
□ agent.execute() 활용
□ 성능 최적화 (캐싱)
□ 스케줄링 (cron)

프로젝트 아이디어:
1. 경쟁사 가격 모니터링 시스템
2. 구인구직 자동 지원 봇
3. 뉴스 수집 및 분석 도구
4. 소셜미디어 자동 포스팅
5. E커머스 재고 추적기
```

#### 레벨 3: 고급 개발자 🏆

```markdown
학습 목표:
□ Browserbase 클라우드 배포
□ 대규모 병렬 처리
□ 커스텀 AI 모델 통합
□ 모니터링 및 알림 시스템
□ CI/CD 파이프라인 구축

고급 주제:
- 분산 크롤링 시스템
- 프록시 로테이션
- 세션 관리
- 데이터베이스 통합
- API 서버 구축
```

### 🔗 유용한 리소스

#### 공식 문서 및 커뮤니티

```markdown
1. 공식 문서 📖
   https://docs.stagehand.dev
   - API 레퍼런스
   - 예제 코드
   - 베스트 프랙티스

2. GitHub 저장소 💻
   https://github.com/browserbase/stagehand
   - 소스 코드
   - 이슈 트래커
   - 예제 프로젝트

3. Slack 커뮤니티 💬
   https://join.slack.com/t/stagehand-dev/...
   - 질문하기
   - 팁 공유
   - 네트워킹

4. Discord 서버 🎮
   - 실시간 채팅
   - 도움 받기
```

#### 관련 기술 학습

```markdown
1. Playwright 기초 🎭
   https://playwright.dev
   - Stagehand의 기반 기술
   - 더 세밀한 제어 가능

2. TypeScript 📘
   https://www.typescriptlang.org
   - 타입 안전성
   - 더 나은 개발 경험

3. Zod 스키마 🛡️
   https://zod.dev
   - 데이터 검증
   - 타입 추론

4. Web Scraping 💡
   - HTML/CSS 기초
   - DOM 구조 이해
   - XPath/CSS 셀렉터
```

### 🎯 다음 프로젝트 아이디어

#### 초급 프로젝트

```markdown
1. 날씨 알림 봇
   - 매일 아침 날씨 확인
   - 이메일/SMS 전송

2. 할인 정보 수집기
   - 특정 상품 가격 추적
   - 할인 시 알림

3. 블로그 포스트 백업
   - 본인 블로그 글 수집
   - Markdown 변환

4. YouTube 채널 모니터
   - 새 영상 알림
   - 정보 수집
```

#### 중급 프로젝트

```markdown
1. 부동산 매물 추적기
   - 여러 사이트 통합
   - 조건 매칭
   - 실시간 알림

2. 이커머스 대시보드
   - 여러 쇼핑몰 데이터
   - 판매 분석
   - 재고 관리

3. 소셜 미디어 분석기
   - 인플루언서 추적
   - 트렌드 분석
   - 자동 리포트

4. 채용 공고 알림 시스템
   - 맞춤형 채용 정보
   - 자동 지원 (초안)
   - 진행 상황 추적
```

#### 고급 프로젝트

```markdown
1. 마켓플레이스 자동화
   - 상품 자동 등록
   - 가격 자동 조정
   - 재고 동기화

2. 데이터 마이그레이션 도구
   - 레거시 시스템 크롤링
   - 데이터 변환
   - 새 시스템 업로드

3. 경쟁 분석 플랫폼
   - 경쟁사 모니터링
   - 가격/기능 비교
   - 자동 리포트

4. AI 기반 RPA 시스템
   - 업무 자동화
   - 워크플로우 통합
   - 대시보드 및 알림
```

### 🚀 커뮤니티 기여

#### 오픈소스 기여 방법

```markdown
1. 문서 개선
   - 오타 수정
   - 예제 추가
   - 한국어 번역

2. 버그 리포트
   - 재현 단계 작성
   - 환경 정보 제공
   - 스크린샷 첨부

3. 기능 제안
   - Use case 설명
   - 예상 API 디자인
   - 커뮤니티 피드백

4. 코드 기여
   - 버그 수정
   - 새 기능 구현
   - 성능 개선
   - Pull Request 제출
```

---

## 용어 사전

### 🔤 핵심 용어

#### A-D

**Act (액션)**
```
초급: AI에게 "이것 좀 해줘"라고 부탁하는 것
중급: 자연어 명령으로 브라우저 조작 수행
고급: LLM 기반 인텐트 해석 및 DOM 요소 인터랙션

예시:
await page.act("로그인 버튼 클릭");
→ AI가 버튼을 찾아서 클릭

사용 시기:
✅ 요소 위치 불확실
✅ 동적 UI
❌ 정확한 셀렉터 알 때
```

**Agent (에이전트)**
```
초급: 여러 작업을 자동으로 수행하는 AI 로봇
중급: Computer Use 모델을 사용한 자율 작업 수행자
고급: 계획 수립, 실행, 피드백 루프를 가진 AI 시스템

예시:
const agent = stagehand.agent({
  provider: "openai",
  model: "computer-use-preview"
});
await agent.execute("최신 PR 찾아서 리뷰 시작");

특징:
- 복잡한 작업 수행
- 의사결정 가능
- 여러 단계 자동 처리
```

**Browserbase**
```
초급: 클라우드에서 브라우저를 실행하는 서비스
중급: 관리형 브라우저 인프라 플랫폼
고급: Serverless 브라우저 실행 환경 with 프록시, 세션 관리

장점:
✅ 서버 관리 불필요
✅ 무한 확장 가능
✅ 자동 IP 로테이션
✅ 세션 유지

비용:
- 무료: 월 100시간
- Pro: 시간당 $0.50
```

**Computer Use**
```
초급: 컴퓨터를 사람처럼 사용하는 AI
중급: 화면을 보고 마우스/키보드로 조작하는 AI 모델
고급: Vision-Language-Action 모델 기반 범용 컴퓨터 인터페이스

작동 방식:
1. 화면 캡처 (스크린샷)
2. AI가 화면 분석
3. 다음 동작 결정
4. 마우스/키보드 조작
5. 결과 확인 후 반복

모델:
- OpenAI: computer-use-preview
- Anthropic: Claude 3.5 (computer use)
```

#### E-L

**Extract (추출)**
```
초급: 웹페이지에서 정보 가져오기
중급: 구조화된 데이터로 페이지 컨텐츠 변환
고급: LLM 기반 시맨틱 파싱 with 스키마 검증

예시:
const data = await page.extract({
  instruction: "상품 정보 추출",
  schema: z.object({
    name: z.string(),
    price: z.number()
  })
});

특징:
- 타입 안전
- 유연한 추출
- HTML 구조 무관
```

**Headless (헤드리스)**
```
초급: 화면 없이 브라우저 실행
중급: GUI 없는 브라우저 모드
고급: Graphical rendering 없이 DOM/JS 엔진만 실행

설정:
headless: true  // 화면 안 보임 (빠름)
headless: false // 화면 보임 (디버깅)

장점 (true):
✅ 빠른 실행
✅ 적은 리소스
✅ 서버 환경 적합

단점 (true):
❌ 디버깅 어려움
❌ 시각적 확인 불가
```

**LLM (Large Language Model)**
```
초급: 매우 똑똑한 AI 언어 모델
중급: 대규모 데이터로 학습한 신경망 언어 모델
고급: Transformer 아키텍처 기반 수십억 파라미터 모델

종류:
- GPT-4 (OpenAI)
- Claude (Anthropic)
- Gemini (Google)

Stagehand에서 역할:
1. 자연어 명령 이해
2. DOM 요소 찾기
3. 데이터 추출
4. 복잡한 작업 계획
```

#### M-S

**Observe (관찰)**
```
초급: 페이지에 뭐가 있는지 확인
중급: 상호작용 가능한 요소 목록 반환
고급: DOM 트리 분석 및 액션 가능 요소 식별

예시:
const elements = await page.observe();
elements.forEach(el => {
  console.log(el.description);
});

출력:
- 로그인 버튼
- 검색 입력란
- 메뉴 아이콘

사용 시기:
✅ 디버깅
✅ 페이지 구조 파악
✅ 가능한 액션 확인
```

**Playwright**
```
초급: 웹 브라우저를 조종하는 도구
중급: Microsoft의 브라우저 자동화 라이브러리
고급: Cross-browser automation with auto-waiting

Stagehand와 관계:
Stagehand = Playwright + AI
- Playwright: 기반 기술
- Stagehand: AI 레이어 추가

예시:
// Playwright
await page.click('#button');

// Stagehand
await page.act("버튼 클릭");
```

**Schema (스키마)**
```
초급: 데이터의 형태를 정의하는 틀
중급: 데이터 구조 명세 및 검증 규칙
고급: Zod 기반 타입 안전 런타임 검증

예시:
const schema = z.object({
  name: z.string(),
  age: z.number().min(0),
  email: z.string().email()
});

장점:
✅ 타입 안전성
✅ 자동 검증
✅ TypeScript 통합
✅ AI 힌트 제공

활용:
extract() 함수에서 데이터 형식 지정
```

#### T-Z

**Token (토큰)**
```
초급: AI가 이해하는 텍스트 조각
중급: 텍스트를 단위로 나눈 것 (단어보다 작음)
고급: Subword tokenization 결과물

예시:
"안녕하세요" → ["안녕", "하", "세요"] (약 3 토큰)

비용과 관계:
- GPT-4: 1K 토큰당 $0.03
- 스크린샷 1장: ~1000 토큰
- act() 1회: ~500 토큰

절약 방법:
✅ 캐싱 사용
✅ 코드 우선 사용
✅ 불필요한 AI 호출 방지
```

**Verbose (상세 모드)**
```
초급: 얼마나 많은 정보를 출력할지 설정
중급: 로깅 레벨 설정 (0-2)
고급: 디버그 정보 상세도 제어

레벨:
verbose: 0  // 조용히 (프로덕션)
verbose: 1  // 보통 (개발)
verbose: 2  // 매우 상세 (디버깅)

출력 예시 (verbose: 2):
[Stagehand] Initializing...
[Stagehand] Browser launched
[Stagehand] Page loaded: https://...
[Stagehand] act: "버튼 클릭"
[Stagehand] Found 3 candidates
[Stagehand] Selected element: button#login
[Stagehand] Action completed
```

**Zod**
```
초급: 데이터 형식을 확인하는 도구
중급: TypeScript-first 스키마 검증 라이브러리
고급: Runtime type validation with static type inference

기본 사용:
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number()
});

// 타입 추론
type User = z.infer<typeof schema>;
// { name: string; age: number }

Stagehand에서:
extract()에서 데이터 구조 정의
→ 타입 안전한 결과 반환
```

### 🎭 브라우저 자동화 용어

**DOM (Document Object Model)**
```
초급: 웹페이지의 구조
중급: HTML을 트리 구조로 표현한 것
고급: Platform/language-neutral interface

예시:
<div id="container">
  <button>클릭</button>
</div>

DOM 트리:
div#container
  └─ button

접근:
document.querySelector('button')
```

**Selector (셀렉터)**
```
초급: 웹페이지에서 특정 부분을 찾는 방법
중급: DOM 요소를 지정하는 패턴
고급: CSS/XPath 기반 요소 쿼리

종류:
1. ID: #login-button
2. Class: .btn-primary
3. Tag: button
4. 속성: [type="submit"]
5. 조합: div.container > button

Stagehand 장점:
셀렉터 몰라도 자연어로 가능!
```

**WebDriver**
```
초급: 브라우저를 조종하는 프로그램
중급: 브라우저 자동화 프로토콜
고급: W3C 표준 브라우저 제어 인터페이스

비교:
- Selenium: WebDriver 프로토콜
- Playwright: Chrome DevTools Protocol
- Stagehand: Playwright 기반

차이점:
WebDriver = 느림
CDP = 빠름, 직접 통신
```

### 🏆 마무리

```
축하합니다! 🎉

Stagehand 완전 가이드를 끝까지 읽으셨습니다!

이제 여러분은:
✅ Stagehand의 핵심 개념 이해
✅ 기본 기능 사용 가능
✅ 실전 프로젝트 구현 가능
✅ 고급 기능 활용 가능
✅ 문제 해결 능력 보유

다음 단계:
1. 직접 프로젝트 만들어보기
2. 커뮤니티에 참여하기
3. 오픈소스 기여하기
4. 지식 공유하기

기억하세요:
"최고의 학습은 실전 경험입니다!"

자, 이제 코딩을 시작하세요! 💻
```

---

## 📚 연결된 노트

- [[Playwright 브라우저 자동화]]
- [[웹 스크래핑 완전 가이드]]
- [[AI LLM 활용법]]
- [[TypeScript 기초부터 고급까지]]
- [[Zod 스키마 검증]]
- [[Browserbase 클라우드 서비스]]
- [[RPA 자동화 도구 비교]]

---

## 📝 변경 이력

```
2025-10-13: 초판 작성 완료
- Stagehand 기초부터 고급까지 전체 내용
- 초보자 친화적 설명 및 3단계 예시
- 실전 프로젝트 3가지 포함
- 용어 사전 30개 이상 정리
- Feynman Technique 적용
- 스토리텔링 접근 방식
```

---

## 💬 학습 후기를 남겨주세요

이 가이드가 도움이 되셨나요?

어려웠던 부분이 있으신가요?

더 알고 싶은 내용이 있으신가요?

여러분의 피드백으로 이 가이드가 더 좋아집니다! 🌟

---

**🎓 학습 팁**: 이 노트를 PDF로 저장하고, 실제 코딩하면서 옆에 두고 참고하세요! 막히는 부분이 있으면 바로 찾아볼 수 있습니다! 😊