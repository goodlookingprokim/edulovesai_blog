---
title: "Playwright Skill 가이드: MCP에서 Claude Skill로 마이그레이션하기"
created: '2025-10-23'
last_modified: '2025-10-23'
tags:
  - Playwright/
  - Claude-Skill/
  - 자동화/테스트
  - 웹브라우저/제어
  - 개발도구/
  - 초보자/
  - E2E테스트/
status: "진행중"
type: "가이드"
priority: "high"
share_link: ""
---

# 🎬 Playwright Skill: MCP에서 Claude Skill로 마이그레이션하기

> **이 노트는 무엇인가요?**
> 초보 개발자를 위한 Playwright Skill 완벽 가이드입니다. MCP(Model Context Protocol)보다 **훨씬 효율적인** Claude Skill을 사용하는 방법을 단계별로 배우게 됩니다.

## 📋 목차

1. [[#왜 Playwright를 배워야 할까]]
2. [[#Playwright와 MCP의 차이점]]
3. [[#Claude Skill이란 무엇인가]]
4. [[#Playwright Skill 설치 방법]]
5. [[#용어 설명 쉽게 이해하기]]
6. [[#기초 레벨 예제]]
7. [[#실행 결과 확인]]

---

## 왜 Playwright를 배워야 할까

### 🤔 현실 예시로 이해하기

마치 **영화를 찍을 때 영화감독이 카메라와 배우들을 통제**하는 것처럼, Playwright는 **웹 브라우저를 자동으로 통제하는 도구**입니다.

```
영화 촬영:        영화감독 → 카메라/배우 통제 → 영화 완성
───────────────────────────────────────────
웹 자동화:        프로그래머 → Playwright → 웹브라우저 자동 조작
```

### 📱 실생활 예시

**당신의 하루를 생각해보세요:**

아침에 일어나서:
1. ☕ 커피를 내린다
2. 📱 휴대폰을 확인한다
3. 🗞️ 뉴스를 읽는다
4. 💼 회사 메일을 확인한다
5. 🎯 일일 계획을 작성한다

이 모든 것을 **자동으로 하는 로봇**이 있다면 어떨까요? 바로 그것이 Playwright입니다! 🤖

### 💡 Playwright의 현실적 활용

| 상황 | 일반 방법 | Playwright 자동화 |
|------|---------|------------------|
| 100개 웹사이트에서 가격 수집 | 🧑‍💻 하루종일 수작업 | ⚙️ 5분 안에 완료 |
| 웹사이트 버그 테스트 | 🧑‍💼 QA팀이 수동 검사 | 🤖 자동으로 매일 밤 검사 |
| 소셜 미디어 모니터링 | 📱 계속 확인하기 | 📊 자동으로 리포트 생성 |
| 폼 자동 작성 | ✍️ 같은 내용을 반복 입력 | 🚀 한 번의 명령으로 100개 작성 |

---

## Playwright와 MCP의 차이점

### 📊 비교 표

| 항목 | MCP (Model Context Protocol) | Claude Skill ✨ |
|------|------|------|
| **설정 복잡도** | 복잡함 😤 | 간단함 ✨ |
| **실행 속도** | 느림 🐢 | 빠름 ⚡ |
| **오류 처리** | 많은 설정 필요 | 자동으로 처리 |
| **코드 길이** | 길고 복잡함 | 짧고 명확함 |
| **초보자 친화성** | 낮음 😞 | 높음 😊 |
| **AI 통합** | 약간 | **완벽함** |

### 🎯 왜 Claude Skill을 사용해야 하나요?

```
MCP: 다리를 많이 거쳐야 가는 길 (복잡)
     학교 → 버스정류장 → 버스 → 환승 → 최종 목적지

Claude Skill: 직진하는 고속도로 (간단)
     학교 → 직진 → 최종 목적지 (빠르고 간단!)
```

**결론**: Claude Skill은 **MCP의 진화 버전**입니다. 더 간단하고 빠르고 효율적입니다! 🚀

---

## Claude Skill이란 무엇인가

### 🎓 쉽게 설명하기

**Claude Skill = Claude AI를 위한 "확장 기능"**

마치:
- 📱 스마트폰에 앱을 설치하면 새로운 기능이 생기는 것처럼
- 🎮 게임에 DLC를 다운받으면 새 캐릭터가 생기는 것처럼

Claude에 Playwright Skill을 설치하면 **웹 브라우저 자동 조작 기능**이 생깁니다!

### 🔧 MCP vs Claude Skill 아키텍처

```
=== MCP 방식 (구식) ===
┌─────────────────────────────┐
│ Claude AI                    │
│ (각자 설정 필요함)           │
└────────────┬────────────────┘
             │ (복잡한 연결)
┌────────────▼────────────────┐
│ MCP Protocol                 │
│ (중간 계층)                  │
└────────────┬────────────────┘
             │
┌────────────▼────────────────┐
│ Playwright (도구)             │
│ (사용 가능)                  │
└─────────────────────────────┘

=== Claude Skill 방식 (신식) ===
┌─────────────────────────────┐
│ Claude AI                    │
│ + Playwright Skill 통합됨    │
│ (설치만 하면 끝!)            │
└────────────┬────────────────┘
             │ (간단한 연결)
┌────────────▼────────────────┐
│ Playwright (도구)             │
│ (바로 사용 가능)             │
└─────────────────────────────┘
```

### 💪 Claude Skill의 장점

1. **⚡ 빠른 설정**: 3단계만으로 완료
2. **🎯 명확한 문법**: 더 간단한 코드
3. **🛡️ 자동 오류 처리**: 알아서 대처
4. **📚 풍부한 기능**: Playwright의 모든 기능 사용 가능
5. **🤝 AI 친화적**: Claude AI와 완벽하게 통합

---

## Playwright Skill 설치 방법

### 📥 3단계 설치 가이드

#### **1단계: Plugin Marketplace 접근**

```bash
# Claude 내에서 실행
/plugin marketplace add
```

이 명령어는 **Claude의 확장 프로그램 스토어**를 엽니다.
(마치 아이폰의 App Store처럼!)

#### **2단계: Playwright Skill 검색 및 설치**

```bash
# 다음 명령어들을 순서대로 실행
/plugin marketplace add lacheyib/playwright-skill
/plugin install
playwright-skill@playwright-skill
```

**실행 결과:**
```
✅ Marketplace에 접근했습니다
✅ lacheyib/playwright-skill을 찾았습니다
✅ Playwright Skill이 설치되었습니다!
```

#### **3단계: 설치 확인**

설치가 완료되면 Claude가 자동으로 Playwright 기능을 사용할 수 있게 됩니다!

```
✨ 축하합니다! Playwright Skill이 활성화되었습니다
이제 웹 브라우저 자동화를 시작할 수 있습니다!
```

### ⚠️ 설치 중 주의사항

| 상황 | 해결 방법 |
|------|---------|
| "찾을 수 없습니다" 오류 | 인터넷 연결 확인 후 다시 시도 |
| 설치 중단됨 | 3분 정도 기다린 후 다시 시도 |
| 권한 오류 | Claude 권한 확인 |

---

## 용어 설명: 쉽게 이해하기

### 🎓 용어 사전 (초보자용)

#### **Browser (브라우저)**
```
쉽게 말해: 웹사이트를 보는 프로그램
예: Chrome, Firefox, Safari 등

생활 비유: 도서관에 책을 보러 가는 "당신"
         브라우저 = 당신이 책을 읽는 방식
```

#### **Page (페이지)**
```
쉽게 말해: 현재 열려있는 웹페이지 한 장
예: Google 검색 페이지, YouTube 영상 페이지

생활 비유: 책장에서 펼쳐진 한 장의 페이지
```

#### **Element (요소)**
```
쉽게 말해: 웹페이지 위의 작은 부분들
예: 검색 버튼, 입력창, 링크, 이미지 등

생활 비유: 책의 한 단락, 그림, 제목, 본문 등
```

#### **Selector (선택자)**
```
쉽게 말해: "이 버튼!" 이라고 가리키는 주소
예: #search-button, .submit-btn

생활 비유: "3층 도서관 왼쪽 책장의 파란 책"이라고 정확히 지칭하기
```

#### **Locator (로케이터)**
```
쉽게 말해: 요소를 찾는 방법
예: 이름으로 찾기, ID로 찾기, 텍스트로 찾기

생활 비유: "서울시 강남구 테헤란로 123번지"처럼 정확한 위치 지정
```

#### **Action (액션)**
```
쉽게 말해: 브라우저가 하는 동작
예: 클릭하기, 텍스트 입력하기, 스크롤하기

생활 비유: 책을 넘기기, 노트에 쓰기, 형광펜 치기
```

---

## 기초 레벨 예제: 🌱 첫 번째 자동화

### 예제 1: 간단한 웹페이지 열기 & 닫기

**상황**: Google 홈페이지를 자동으로 열고 싶다면?

```javascript
// playwright-basic-open.js
// 가장 간단한 Playwright 예제
// 이것은 마치 "브라우저를 켜는 것"과 같습니다

const { chromium } = require('@playwright/test');

async function openGoogle() {
  // 1️⃣ 브라우저 시작 (컴퓨터 켜기)
  const browser = await chromium.launch();
  
  // 2️⃣ 새 페이지 열기 (새 탭 열기)
  const page = await browser.newPage();
  
  // 3️⃣ Google 홈페이지로 이동 (주소 입력)
  await page.goto('https://www.google.com');
  
  // 4️⃣ 2초 기다리기 (페이지 로드 시간 대기)
  await page.waitForTimeout(2000);
  
  // 5️⃣ 현재 페이지의 제목 출력
  const title = await page.title();
  console.log(`✅ 페이지 제목: ${title}`);
  
  // 6️⃣ 브라우저 닫기 (컴퓨터 끄기)
  await browser.close();
}

// 실행
openGoogle().catch(console.error);
```

**실행 결과:**
```
✅ 페이지 제목: Google
```

### 🤔 이 코드의 의미

```
브라우저를 켜는 것처럼 생각해봅시다:

1️⃣ browser.launch() 
   = 컴퓨터의 전원을 켜기 💻

2️⃣ browser.newPage()
   = 새 창 열기 🪟

3️⃣ page.goto()
   = 주소 입력하고 엔터 🌐

4️⃣ page.waitForTimeout()
   = 페이지가 로드될 때까지 기다리기 ⏳

5️⃣ page.title()
   = 현재 페이지의 제목 읽기 📖

6️⃣ browser.close()
   = 브라우저 닫기 ❌
```

### 예제 2: 검색 박스에 텍스트 입력하기

**상황**: Google에서 "Playwright"를 검색하고 싶다면?

```javascript
// playwright-basic-search.js
// 검색 기능 자동화 (버튼 클릭 + 텍스트 입력)

const { chromium } = require('@playwright/test');

async function searchOnGoogle() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1️⃣ Google 홈페이지로 이동
  await page.goto('https://www.google.com');
  
  // 2️⃣ 검색 입력창을 찾기
  // name="q" 는 Google의 검색창 이름
  const searchBox = page.locator('input[name="q"]');
  
  // 3️⃣ 검색창을 클릭 (마우스로 클릭하는 것처럼)
  await searchBox.click();
  
  // 4️⃣ "Playwright" 입력 (키보드로 타이핑하는 것처럼)
  await searchBox.fill('Playwright');
  
  // 5️⃣ Enter 키 누르기 (엔터 누르기)
  await page.keyboard.press('Enter');
  
  // 6️⃣ 검색 결과 로드 대기 (3초 기다리기)
  await page.waitForTimeout(3000);
  
  // 7️⃣ 검색 결과 제목 출력
  const resultTitle = await page.title();
  console.log(`🔍 검색 결과: ${resultTitle}`);
  
  // 8️⃣ 브라우저 닫기
  await browser.close();
}

searchOnGoogle().catch(console.error);
```

**실행 결과:**
```
🔍 검색 결과: Playwright - Google Search
```

### 💡 새로운 개념들

| 개념 | 의미 | 예시 |
|------|------|------|
| **locator()** | 요소를 찾는 방법 | `page.locator('input[name="q"]')` |
| **click()** | 마우스 클릭 | `element.click()` |
| **fill()** | 텍스트 입력 | `searchBox.fill('검색어')` |
| **keyboard.press()** | 키보드 눌르기 | `page.keyboard.press('Enter')` |

---

## 실행 결과 확인

### 🎬 어떤 일이 일어날까요?

첫 번째 예제를 실행하면:

```
Step 1: Chromium 브라우저 시작 (약 3초)
        ↓
Step 2: 새로운 탭이 열림 (Chrome 창이 자동으로 뜸!)
        ↓
Step 3: Google 홈페이지로 자동 이동
        ↓
Step 4: 2초 대기 (페이지가 로드되는 것을 봄)
        ↓
Step 5: 페이지 제목 출력
        ↓
Step 6: 완료! (브라우저 자동 종료)

💻 화면에 보이는 것:
┌──────────────────────────────────────┐
│ Google 홈페이지 자동으로 열림        │
│ (당신의 손을 거치지 않고!)           │
└──────────────────────────────────────┘
```

### ⚡ 실제 실행해보기

```bash
# Node.js가 설치되어 있다면:
node playwright-basic-open.js
```

**예상 출력:**
```
✅ 페이지 제목: Google
(브라우저가 자동으로 열렸다가 닫힘)
```

---

## 🌟 다음 단계

Part 2에서는:
- 🌿 **중급 예제**: 여러 페이지 자동 순회, 데이터 추출
- 🌳 **고급 예제**: 에러 처리, 스크린샷 저장, 성능 측정
- 📊 **실무 활용**: 자신의 프로젝트에 적용하기

---

## 📚 관련 노트

- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[개발 도구 가이드]]
- [[MCP 시스템]]

---

**작성자**: Claude Code  
**마지막 수정**: 2025-10-23  
**난이도**: 🌱 초보자  
**소요 시간**: 15분 (읽기) + 10분 (실습)