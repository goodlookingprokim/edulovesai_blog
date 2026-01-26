---
title: Plasmo Framework 초보자를 위한 완벽 가이드
created: 2025-10-11
last_modified: 2025-10-11
tags:
  - 개발도구/Plasmo
  - 브라우저확장
  - 프레임워크
  - React
  - TypeScript
  - 초보자가이드
status: 완료
type: 가이드
priority: high
osba:
  version: 1
  lastAnalyzed: 2025-12-20T14:40:32.176Z
  confidenceScore: 0.8800000000000001
  related:
    - path: P - Projects/4060 미들스쿨 크롬 확장 프로그램 프로젝트/(심화)4060 미들스쿨 주니어 개발자 되기.md
      score: 0.95
      relation: extends
    - path: P - Projects/4060 미들스쿨 크롬 확장 프로그램 프로젝트/(기초)4060 미들스쿨 주니어 개발자 되기.md
      score: 0.92
      relation: contradicts
    - path: A - Areas/교육 및 강의 관리/Leaders' Academy/웹사이트 개발 특강 자료.md
      score: 0.85
      relation: supports
    - path: R - Resources/AI 및 개발/개발 도구 가이드/초보_개발자를_위한_AI_시대_코딩_학습_완벽_가이드.md
      score: 0.8
      relation: related
    - path: P - Projects/4060 미들스쿨 크롬 확장 프로그램 프로젝트/🚀 크롬 확장 프로그램 개발부터 배포까지_완전 정복 가이드.md
      score: 0.88
      relation: extends
  gaps:
    - topic: Plasmo 배포 및 Chrome Web Store 게시 과정
      priority: high
    - topic: Plasmo 고급 개념 (Content Scripts, Background Scripts, Storage API 실전 사용)
      priority: high
    - topic: Plasmo와 다른 프레임워크 비교 (e.g., ExtensionKit, CRXJS)
      priority: medium
    - topic: TypeScript/React 고급 패턴 in Plasmo (Hooks, Context, State Management)
      priority: medium
---

# Plasmo Framework 초보자를 위한 완벽 가이드

> **"브라우저 확장 프로그램, 이제 웹 앱 만들듯이 쉽게 만들어요!"** 🚀

## 📋 목차

1. [[#Plasmo가 뭔가요 스토리로 이해하기|Plasmo가 뭔가요? (스토리로 이해하기)]]
2. [[#왜 Plasmo를 써야 하나요|왜 Plasmo를 써야 하나요?]]
3. [[#시작하기 전에 알아야 할 것들|시작하기 전에 알아야 할 것들]]
4. [[#첫 번째 확장 프로그램 만들기|첫 번째 확장 프로그램 만들기]]
5. [[#Plasmo의 핵심 개념들|Plasmo의 핵심 개념들]]
6. [[#실전 예제 단계별로 따라하기|실전 예제 - 단계별로 따라하기]]
7. [[#자주 하는 실수와 해결법|자주 하는 실수와 해결법]]
8. [[#다음 단계로 나아가기|다음 단계로 나아가기]]
9. [[#용어 설명|용어 설명]]

---

## Plasmo가 뭔가요 스토리로 이해하기

### 📖 이야기로 시작하는 Plasmo

**민수의 고민**
> 민수는 개발자입니다. 어느 날 아이디어가 떠올랐어요.
> "웹사이트에서 광고를 자동으로 숨겨주는 크롬 확장 프로그램을 만들면 어떨까?"
>
> 하지만 브라우저 확장 프로그램을 만들려면:
> - 복잡한 `manifest.json` 파일 작성 😵
> - 파일들을 어디에 둬야 하는지 모르겠고 🤔
> - 코드 수정할 때마다 확장 프로그램 다시 로드 😫
> - React 쓰고 싶은데 설정이 너무 복잡해 🙃

**Plasmo의 등장!**
> 그때 민수가 Plasmo를 발견했습니다!
>
> ```bash
> pnpm create plasmo
> ```
>
> 단 한 줄로 프로젝트 생성! 이제 민수는:
> - React로 편하게 코딩 ✅
> - 파일 저장하면 자동 새로고침 ✅
> - manifest 자동 생성 ✅
> - 마치 웹 앱 만들듯이 개발 ✅

### 🎯 한 문장 정의

**Plasmo는 브라우저 확장 프로그램을 "웹 앱 만들듯이" 쉽게 만들 수 있게 해주는 프레임워크입니다.**

마치 React 웹 앱을 만들 때처럼, 컴포넌트 작성하고 저장하면 끝!

---

## 왜 Plasmo를 써야 하나요

### 🆚 전통적인 방식 vs Plasmo

#### 전통적인 방식 (Before Plasmo)

```
1단계: manifest.json 작성 (50줄 이상) 😓
2단계: webpack/rollup 설정 (100줄+) 😫
3단계: 폴더 구조 고민 🤔
4단계: 빌드 스크립트 작성 😵
5단계: 개발 서버 설정 🥵
6단계: 이제 겨우 코딩 시작... 💀
```

#### Plasmo 방식 (With Plasmo)

```
1단계: pnpm create plasmo ✨
2단계: 코딩 시작! 🎉
```

### 💡 Plasmo의 마법 같은 기능들

#### 1. **자동 매직 (Auto-Magic)**

**예시: Popup 만들기**

```tsx
// popup.tsx 파일만 만들면 끝!
function IndexPopup() {
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>Plasmo로 만든 첫 확장 프로그램!</p>
    </div>
  )
}

export default IndexPopup
```

**Plasmo가 자동으로 해주는 것들:**
- ✅ manifest.json에 popup 추가
- ✅ HTML 파일 생성
- ✅ React 번들링
- ✅ 개발 서버 실행

#### 2. **핫 리로딩 (Hot Reload)**

코드 수정 → 저장 → 바로 반영! (크롬 확장 프로그램 자동 새로고침)

```
전통적 방식:
코드 수정 → 빌드 → 확장 프로그램 페이지 → 새로고침 버튼 → 확인
(약 30초 소요 😴)

Plasmo:
코드 수정 → 저장 (끝!)
(약 2초 소요 ⚡)
```

#### 3. **타입스크립트 완벽 지원**

```tsx
// 자동 완성과 타입 체크가 완벽하게 작동!
import { Storage } from "@plasmohq/storage"

const storage = new Storage()
// storage. 하고 입력하면 사용 가능한 메서드들이 자동으로 뜸!
```

---

## 시작하기 전에 알아야 할 것들

### 📚 필요한 선수 지식

#### 레벨 1: 최소 요구사항 (꼭 필요!)
- ✅ JavaScript 기본 (변수, 함수, 조건문)
- ✅ HTML/CSS 기초
- ✅ Node.js가 뭔지 알고 있음

#### 레벨 2: 있으면 좋은 지식
- 🟡 React 기본 (컴포넌트, JSX)
- 🟡 TypeScript 기초
- 🟡 npm/pnpm 사용 경험

#### 레벨 3: 없어도 됨 (배우면서 익히면 OK!)
- ⚪ 브라우저 확장 프로그램 구조
- ⚪ Webpack/Bundler
- ⚪ Manifest 파일

### 🛠️ 개발 환경 준비

#### 1단계: Node.js 설치

**설치 확인:**
```bash
node --version
# v18.0.0 이상이면 OK!
```

**없다면 설치:**
- [nodejs.org](https://nodejs.org) 방문
- LTS 버전 다운로드 & 설치

#### 2단계: 패키지 매니저 선택

**pnpm 추천 (빠르고 효율적!):**
```bash
npm install -g pnpm
```

**확인:**
```bash
pnpm --version
```

#### 3단계: 코드 에디터

**VS Code 추천 (무료!):**
- [code.visualstudio.com](https://code.visualstudio.com) 다운로드
- 설치 후 확장 프로그램 설치:
  - ESLint
  - Prettier
  - TypeScript

---

## 첫 번째 확장 프로그램 만들기

### 🎬 실습: "현재 시간 보여주기" 확장 프로그램

#### 1단계: 프로젝트 생성

```bash
# 터미널 열기
pnpm create plasmo my-first-extension

# 또는 npm 사용 시
npm create plasmo my-first-extension
```

**무슨 일이 일어났나요?**
```
my-first-extension/
├── assets/
│   └── icon.png          # 확장 프로그램 아이콘
├── popup.tsx             # 팝업 UI (클릭 시 보이는 화면)
├── package.json          # 프로젝트 설정
└── tsconfig.json         # TypeScript 설정
```

#### 2단계: 개발 서버 실행

```bash
cd my-first-extension
pnpm dev

# 또는
npm run dev
```

**화면에 뜨는 메시지:**
```
🟣 Plasmo Browser Extension Builder
✓ Ready in 1.2s
  ➜ build/chrome-mv3-dev 폴더에 빌드 완료!
```

#### 3단계: Chrome에 로드하기

**Chrome 브라우저에서:**
1. 주소창에 입력: `chrome://extensions/`
2. 우측 상단 "개발자 모드" 켜기 (토글 버튼)
3. "압축 해제된 확장 프로그램을 로드합니다" 클릭
4. `my-first-extension/build/chrome-mv3-dev` 폴더 선택

**성공!** 🎉 확장 프로그램 아이콘이 나타납니다!

#### 4단계: 첫 코드 수정

**popup.tsx 파일 열기:**

```tsx
import { useState } from "react"

function IndexPopup() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  // 1초마다 시간 업데이트
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div style={{
      padding: "20px",
      minWidth: "300px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2>⏰ 현재 시간</h2>
      <div style={{
        fontSize: "2em",
        color: "#4CAF50",
        fontWeight: "bold"
      }}>
        {currentTime}
      </div>
      <p style={{ color: "#666", marginTop: "10px" }}>
        Plasmo로 만든 첫 확장 프로그램!
      </p>
    </div>
  )
}

export default IndexPopup
```

**파일 저장 → 2초 후 → 확장 프로그램 자동 업데이트!**

#### 5단계: 결과 확인

1. Chrome 툴바의 확장 프로그램 아이콘 클릭
2. 현재 시간이 1초마다 업데이트되는 팝업 표시!

**축하합니다! 첫 확장 프로그램 완성! 🎊**

---

## Plasmo의 핵심 개념들

### 🧩 브라우저 확장 프로그램의 구조

**실생활 비유로 이해하기:**

> 브라우저 확장 프로그램은 **레스토랑**과 같습니다:
>
> - **Popup** = 메뉴판 (고객이 주문할 때 보는 화면)
> - **Content Script** = 웨이터 (테이블에서 고객과 직접 소통)
> - **Background Script** = 주방 (뒤에서 일 처리)
> - **Storage** = 창고 (재료 보관)
> - **Messaging** = 인터콤 (직원들 간 소통 도구)

### 1️⃣ Popup (팝업)

**설명:**
확장 프로그램 아이콘을 클릭하면 나타나는 작은 창입니다.

**언제 사용하나요?**
- 사용자 설정 화면
- 간단한 정보 표시
- 버튼으로 기능 실행

**만드는 방법:**

```tsx
// popup.tsx 파일만 만들면 자동으로 팝업 생성!
function IndexPopup() {
  return (
    <div>
      <h1>팝업 화면</h1>
      <button>클릭!</button>
    </div>
  )
}

export default IndexPopup
```

**레벨별 예시:**

**🟢 초급: 간단한 카운터**
```tsx
import { useState } from "react"

function IndexPopup() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: "20px" }}>
      <h2>클릭 카운터</h2>
      <p>클릭 횟수: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        클릭!
      </button>
    </div>
  )
}

export default IndexPopup
```

**🟡 중급: 저장 기능이 있는 메모장**
```tsx
import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"

function IndexPopup() {
  const [memo, setMemo] = useState("")
  const storage = new Storage()

  // 저장된 메모 불러오기
  useEffect(() => {
    storage.get("memo").then(setMemo)
  }, [])

  // 메모 저장하기
  const saveMemo = () => {
    storage.set("memo", memo)
    alert("저장 완료!")
  }

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>📝 간단 메모장</h2>
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        style={{ width: "100%", height: "100px" }}
      />
      <button onClick={saveMemo}>저장</button>
    </div>
  )
}

export default IndexPopup
```

**🔴 고급: API 연동 날씨 앱**
```tsx
import { useState, useEffect } from "react"

function IndexPopup() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 날씨 API 호출 (예시)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=YOUR_API_KEY")
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>로딩 중...</div>

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌤️ 서울 날씨</h2>
      <p>온도: {weather.main.temp}°C</p>
      <p>상태: {weather.weather[0].description}</p>
    </div>
  )
}

export default IndexPopup
```

### 2️⃣ Content Scripts (콘텐츠 스크립트)

**설명:**
웹 페이지에 직접 주입되어 실행되는 JavaScript 코드입니다.
페이지의 DOM을 읽고 수정할 수 있습니다.

**실생활 비유:**
> 웹사이트는 집, Content Script는 인테리어 디자이너!
> 들어가서 가구 배치를 바꾸거나 벽지 색을 바꿀 수 있어요.

**언제 사용하나요?**
- 웹 페이지의 내용을 읽거나 수정
- 특정 요소 숨기기/보이기
- 웹 페이지에 새로운 UI 추가

**만드는 방법:**

**🟢 초급: 모든 이미지 숨기기**

```typescript
// content.ts
export {}

// 페이지의 모든 이미지 숨기기
const images = document.querySelectorAll("img")
images.forEach(img => {
  img.style.display = "none"
})

console.log(`${images.length}개의 이미지를 숨겼습니다!`)
```

**설정 추가:**
```typescript
// content.ts
import type { PlasmoCSConfig } from "plasmo"

// 어떤 웹사이트에서 실행할지 설정
export const config: PlasmoCSConfig = {
  matches: ["https://*.example.com/*"]  // example.com에서만 실행
}

export {}

const images = document.querySelectorAll("img")
images.forEach(img => {
  img.style.display = "none"
})
```

**🟡 중급: 특정 단어 강조하기**

```typescript
// contents/highlighter.ts
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],  // 모든 웹사이트
  all_frames: true
}

// "Plasmo"라는 단어를 찾아서 노란색 하이라이트
const highlightWord = (word: string) => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  )

  const nodesToReplace: { node: Node; text: string }[] = []

  while (walker.nextNode()) {
    const node = walker.currentNode
    if (node.textContent?.includes(word)) {
      nodesToReplace.push({
        node,
        text: node.textContent
      })
    }
  }

  nodesToReplace.forEach(({ node, text }) => {
    const span = document.createElement("span")
    span.innerHTML = text.replace(
      new RegExp(word, "g"),
      `<mark style="background-color: yellow;">${word}</mark>`
    )
    node.parentNode?.replaceChild(span, node)
  })
}

// 페이지 로드 후 실행
window.addEventListener("load", () => {
  highlightWord("Plasmo")
})
```

**🔴 고급: React 컴포넌트로 UI 주입**

```tsx
// contents/price-tracker.tsx
import type { PlasmoCSConfig } from "plasmo"
import { useState, useEffect } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://*.amazon.com/*"]
}

// 아마존 제품 페이지에 가격 추적 UI 추가
const PriceTracker = () => {
  const [currentPrice, setCurrentPrice] = useState("")
  const [isTracking, setIsTracking] = useState(false)

  useEffect(() => {
    // 페이지에서 가격 정보 추출
    const priceElement = document.querySelector(".a-price-whole")
    if (priceElement) {
      setCurrentPrice(priceElement.textContent || "")
    }
  }, [])

  const startTracking = () => {
    setIsTracking(true)
    // 가격 추적 로직 (Storage에 저장 등)
    alert(`${currentPrice} 가격 추적 시작!`)
  }

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "15px",
      backgroundColor: "white",
      border: "2px solid #232F3E",
      borderRadius: "8px",
      zIndex: 10000
    }}>
      <h3>💰 가격 추적기</h3>
      <p>현재 가격: {currentPrice}</p>
      <button
        onClick={startTracking}
        disabled={isTracking}
        style={{
          padding: "10px",
          backgroundColor: isTracking ? "#ccc" : "#FF9900",
          color: "white",
          border: "none",
          borderRadius: "4px"
        }}
      >
        {isTracking ? "추적 중..." : "가격 추적 시작"}
      </button>
    </div>
  )
}

export default PriceTracker
```

### 3️⃣ Background Scripts (백그라운드 스크립트)

**설명:**
브라우저가 실행되는 동안 백그라운드에서 계속 돌아가는 스크립트입니다.
팝업이나 콘텐츠 스크립트가 꺼져도 계속 작동합니다.

**실생활 비유:**
> 레스토랑 주방장! 고객이 보든 말든 뒤에서 계속 일을 합니다.

**언제 사용하나요?**
- 정기적인 작업 (알림, 동기화)
- 여러 탭 간 데이터 공유
- API 요청 처리
- 이벤트 감지 및 처리

**만드는 방법:**

**🟢 초급: 10분마다 알림 보내기**

```typescript
// background.ts
export {}

// 10분마다 휴식 알림
setInterval(() => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "💆 휴식 시간!",
    message: "10분마다 눈을 쉬게 해주세요!"
  })
}, 10 * 60 * 1000)  // 10분 = 600,000ms
```

**🟡 중급: 탭 변경 감지하기**

```typescript
// background.ts
export {}

// 사용자가 탭을 변경할 때마다 로그
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log(`탭 변경: ${tab.url}`)

    // 특정 사이트 방문 시 알림
    if (tab.url?.includes("youtube.com")) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "⚠️ 주의!",
        message: "유튜브는 나중에 보세요!"
      })
    }
  })
})
```

**🔴 고급: 메시지 핸들러로 API 요청 처리**

```typescript
// background/messages/fetch-data.ts
import type { PlasmoMessaging } from "@plasmohq/messaging"

// Content Script나 Popup에서 API 요청을 처리하는 핸들러
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    // CORS 문제 없이 API 호출 가능!
    const response = await fetch(`https://api.example.com/data/${req.body.id}`)
    const data = await response.json()

    // 결과 반환
    res.send({ success: true, data })
  } catch (error) {
    res.send({ success: false, error: error.message })
  }
}

export default handler
```

**Popup에서 호출:**
```tsx
// popup.tsx
import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const fetchData = async () => {
    const resp = await sendToBackground({
      name: "fetch-data",  // background/messages/fetch-data.ts 호출
      body: { id: 123 }
    })

    console.log(resp.data)
  }

  return <button onClick={fetchData}>데이터 가져오기</button>
}
```

### 4️⃣ Storage (저장소)

**설명:**
확장 프로그램의 데이터를 저장하는 공간입니다.
브라우저를 껐다 켜도 데이터가 유지됩니다.

**실생활 비유:**
> 냉장고! 음식(데이터)을 넣어두면 나중에 다시 꺼내 쓸 수 있어요.

**Plasmo Storage API:**

**🟢 초급: 간단한 저장/불러오기**

```tsx
import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"

function IndexPopup() {
  const [name, setName] = useState("")
  const storage = new Storage()

  // 컴포넌트 로드 시 저장된 이름 불러오기
  useEffect(() => {
    storage.get("userName").then((savedName) => {
      if (savedName) setName(savedName)
    })
  }, [])

  // 이름 저장하기
  const saveName = async () => {
    await storage.set("userName", name)
    alert("저장 완료!")
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>이름 저장</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <button onClick={saveName}>저장</button>
    </div>
  )
}

export default IndexPopup
```

**🟡 중급: useStorage 훅 사용 (자동 동기화!)**

```tsx
import { useStorage } from "@plasmohq/storage/hook"

function IndexPopup() {
  // 자동으로 Storage와 동기화!
  const [darkMode, setDarkMode] = useStorage("darkMode", false)
  const [fontSize, setFontSize] = useStorage("fontSize", 16)

  return (
    <div style={{
      padding: "20px",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      fontSize: `${fontSize}px`
    }}>
      <h2>설정</h2>

      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        다크 모드
      </label>

      <div>
        <label>글자 크기: {fontSize}px</label>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default IndexPopup
```

**🔴 고급: 복잡한 객체 저장 및 관리**

```tsx
import { useStorage } from "@plasmohq/storage/hook"
import { useState } from "react"

interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

function TodoPopup() {
  const [tasks, setTasks] = useStorage<Task[]>("tasks", [])
  const [newTask, setNewTask] = useState("")

  // 새 작업 추가
  const addTask = () => {
    if (!newTask.trim()) return

    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      createdAt: Date.now()
    }

    setTasks([...tasks, task])
    setNewTask("")
  }

  // 작업 완료 토글
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // 작업 삭제
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={{ padding: "20px", width: "350px" }}>
      <h2>✅ 할 일 목록</h2>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="새 작업 추가"
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>추가</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginLeft: "10px"
              }}>
                {task.title}
              </span>
            </label>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPopup
```

### 5️⃣ Messaging (메시지 통신)

**설명:**
확장 프로그램의 다양한 부분(Popup, Content Script, Background)이 서로 대화하는 방법입니다.

**실생활 비유:**
> 레스토랑의 인터콤!
> - 고객(웹페이지) ↔ 웨이터(Content Script) ↔ 주방(Background)

**통신 패턴:**

**🟢 초급: Popup → Background 메시지 보내기**

**Background 메시지 핸들러:**
```typescript
// background/messages/ping.ts
import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("메시지 받음:", req.body)

  res.send({
    message: "퐁! Background에서 응답합니다!"
  })
}

export default handler
```

**Popup에서 메시지 보내기:**
```tsx
// popup.tsx
import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const sendMessage = async () => {
    const resp = await sendToBackground({
      name: "ping",  // background/messages/ping.ts 호출
      body: { greeting: "안녕하세요!" }
    })

    alert(resp.message)  // "퐁! Background에서 응답합니다!"
  }

  return <button onClick={sendMessage}>메시지 보내기</button>
}

export default IndexPopup
```

**🟡 중급: Content Script ↔ Background 양방향 통신**

**Background:**
```typescript
// background/messages/analyze-page.ts
import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { url, wordCount } = req.body

  // 데이터 분석 로직
  const analysis = {
    url,
    wordCount,
    readingTime: Math.ceil(wordCount / 200),  // 200단어/분 기준
    timestamp: new Date().toISOString()
  }

  res.send({ analysis })
}

export default handler
```

**Content Script:**
```typescript
// content.ts
import { sendToBackground } from "@plasmohq/messaging"

export {}

// 페이지 분석 후 Background로 전송
const analyzePage = async () => {
  const text = document.body.innerText
  const wordCount = text.split(/\s+/).length

  const resp = await sendToBackground({
    name: "analyze-page",
    body: {
      url: window.location.href,
      wordCount
    }
  })

  console.log("분석 결과:", resp.analysis)
  // { wordCount: 1500, readingTime: 8, ... }
}

// 페이지 로드 완료 후 실행
window.addEventListener("load", analyzePage)
```

**🔴 고급: 웹페이지 ↔ Extension 통신 (Relay)**

**Background Relay 핸들러:**
```typescript
// background/messages/page-relay.ts
import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { action, data } = req.body

  switch (action) {
    case "save-to-cloud":
      // 클라우드 API 호출
      const result = await saveToCloud(data)
      res.send({ success: true, result })
      break

    case "get-user-settings":
      // Storage에서 설정 불러오기
      const settings = await getSettings()
      res.send({ settings })
      break

    default:
      res.send({ error: "Unknown action" })
  }
}

export default handler
```

**Content Script (Relay):**
```typescript
// content.ts
import { relayMessage } from "@plasmohq/messaging"

export {}

// 웹페이지에서 오는 메시지 감지
window.addEventListener("message", async (event) => {
  if (event.data.type === "SAVE_DATA") {
    // Background로 릴레이
    const resp = await relayMessage({
      name: "page-relay",
      body: {
        action: "save-to-cloud",
        data: event.data.payload
      }
    })

    // 결과를 다시 웹페이지로 전송
    window.postMessage({
      type: "SAVE_RESULT",
      success: resp.success
    }, "*")
  }
})
```

**웹페이지 코드:**
```javascript
// 웹사이트의 JavaScript
// Extension에게 메시지 보내기
window.postMessage({
  type: "SAVE_DATA",
  payload: { title: "문서", content: "내용..." }
}, "*")

// Extension으로부터 응답 받기
window.addEventListener("message", (event) => {
  if (event.data.type === "SAVE_RESULT") {
    console.log("저장 성공:", event.data.success)
  }
})
```

---

## 실전 예제 단계별로 따라하기

### 🎯 프로젝트 1: "광고 숨기기" 확장 프로그램

**목표:** 특정 웹사이트의 광고를 자동으로 숨기는 확장 프로그램 만들기

**난이도:** 🟢 초급

#### Step 1: 프로젝트 생성

```bash
pnpm create plasmo ad-blocker
cd ad-blocker
pnpm dev
```

#### Step 2: Content Script 작성

```typescript
// content.ts
import type { PlasmoCSConfig } from "plasmo"

// 모든 웹사이트에서 실행
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export {}

// 광고로 의심되는 요소 찾기
const hideAds = () => {
  const adSelectors = [
    '[class*="ad-"]',
    '[id*="ad-"]',
    '[class*="advertisement"]',
    'iframe[src*="doubleclick"]',
    'div[data-ad]'
  ]

  let hiddenCount = 0

  adSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(el => {
      (el as HTMLElement).style.display = "none"
      hiddenCount++
    })
  })

  if (hiddenCount > 0) {
    console.log(`🚫 ${hiddenCount}개의 광고를 숨겼습니다!`)
  }
}

// 페이지 로드 시 실행
hideAds()

// DOM 변경 감지 (동적으로 추가되는 광고 대응)
const observer = new MutationObserver(hideAds)
observer.observe(document.body, {
  childList: true,
  subtree: true
})
```

#### Step 3: Popup UI 추가 (on/off 스위치)

```tsx
// popup.tsx
import { useState, useEffect } from "react"
import { useStorage } from "@plasmohq/storage/hook"

function IndexPopup() {
  const [enabled, setEnabled] = useStorage("adBlockEnabled", true)
  const [stats, setStats] = useStorage("blockedCount", 0)

  return (
    <div style={{
      padding: "20px",
      width: "300px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2>🚫 광고 차단기</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <span>광고 차단</span>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <span style={{ marginLeft: "8px" }}>
            {enabled ? "켜짐 ✅" : "꺼짐 ❌"}
          </span>
        </label>
      </div>

      <div style={{
        padding: "15px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "2em", fontWeight: "bold", color: "#4CAF50" }}>
          {stats}
        </div>
        <div style={{ color: "#666" }}>
          차단된 광고 수
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
```

**완성! 🎉**

---

## 자주 하는 실수와 해결법

### ❌ 실수 1: manifest.json을 직접 수정하려고 함

**증상:**
프로젝트에 `manifest.json` 파일이 없어서 당황!

**원인:**
Plasmo는 manifest를 자동으로 생성합니다.

**해결법:**
`package.json`에서 설정하세요:

```json
{
  "manifest": {
    "host_permissions": [
      "https://*/*"
    ],
    "permissions": [
      "storage",
      "tabs"
    ]
  }
}
```

---

### ❌ 실수 2: Content Script가 실행되지 않음

**증상:**
`console.log`가 출력되지 않고 스크립트가 동작하지 않음.

**원인:**
`matches` 설정이 잘못되었거나, `export {}` 누락.

**해결법:**

```typescript
// ❌ 잘못된 코드
function doSomething() {
  console.log("Hello")
}

// ✅ 올바른 코드
export {}  // 이 줄이 꼭 필요!

function doSomething() {
  console.log("Hello")
}
```

---

### ❌ 실수 3: Storage 데이터가 저장되지 않음

**증상:**
`storage.set()`을 호출했는데 데이터가 사라짐.

**원인:**
비동기 함수를 `await` 없이 호출.

**해결법:**

```typescript
// ❌ 잘못된 코드
const saveName = () => {
  storage.set("name", "홍길동")  // await 없음!
  console.log("저장 완료!")  // 실제로는 아직 저장 안 됨
}

// ✅ 올바른 코드
const saveName = async () => {
  await storage.set("name", "홍길동")  // await 꼭 붙이기!
  console.log("저장 완료!")  // 이제 진짜 저장됨
}
```

---

### ❌ 실수 4: CORS 에러

**증상:**
Content Script에서 API를 호출하면 CORS 에러 발생.

**원인:**
Content Script는 웹페이지 컨텍스트에서 실행되어 CORS 제한을 받습니다.

**해결법:**
Background Script를 통해 요청하세요:

```typescript
// ❌ Content Script에서 직접 호출 (CORS 에러!)
fetch("https://api.example.com/data")

// ✅ Background를 통해 호출
// background/messages/fetch-api.ts
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const response = await fetch("https://api.example.com/data")
  const data = await response.json()
  res.send({ data })
}

// content.ts에서
const data = await sendToBackground({ name: "fetch-api" })
```

---

## 다음 단계로 나아가기

### 🚀 레벨업 가이드

#### 초급 → 중급

**마스터해야 할 것들:**
- ✅ Storage API 완벽 숙지
- ✅ Messaging 패턴 이해
- ✅ Chrome API 기본 사용 (`chrome.tabs`, `chrome.notifications`)
- ✅ React Hooks 활용

**실습 프로젝트:**
- 북마크 관리 확장 프로그램
- 웹페이지 스크래퍼
- 탭 그룹 자동 정리 도구

#### 중급 → 고급

**마스터해야 할 것들:**
- ✅ Service Worker 생명주기
- ✅ 복잡한 상태 관리 (Redux, Zustand)
- ✅ IndexedDB 활용
- ✅ 웹소켓 통신
- ✅ OAuth 인증

**실습 프로젝트:**
- 실시간 채팅 확장 프로그램
- 클라우드 동기화 메모 앱
- AI 기반 텍스트 분석 도구

### 📚 추가 학습 자료

**공식 문서:**
- [Plasmo 공식 문서](https://docs.plasmo.com/)
- [Chrome Extension 개발 가이드](https://developer.chrome.com/docs/extensions/)

**커뮤니티:**
- [Plasmo Discord](https://discord.gg/plasmo)
- [GitHub Discussions](https://github.com/PlasmoHQ/plasmo/discussions)

**예제 저장소:**
- [Plasmo Examples](https://github.com/PlasmoHQ/examples)

### 🎯 실전 프로젝트 아이디어

**간단한 프로젝트:**
- 🎨 커스텀 테마 변경기
- ⏱️ 타이머 & 알람
- 📋 클립보드 히스토리
- 🌐 번역 도구

**중급 프로젝트:**
- 📊 웹사이트 사용 시간 추적기
- 🔒 비밀번호 관리자
- 📰 RSS 피드 리더
- 🎵 YouTube 음악 플레이어

**고급 프로젝트:**
- 🤖 AI 기반 웹 어시스턴트
- 📈 주식 가격 모니터링 대시보드
- 🔐 보안 감사 도구
- 📱 모바일 디버깅 도구

---

## 용어 설명

### 브라우저 확장 프로그램 (Browser Extension)
웹 브라우저의 기능을 확장하거나 웹페이지를 수정하는 작은 소프트웨어입니다.
**예시:** 광고 차단기, 번역 도구, 비밀번호 관리자

### Manifest
확장 프로그램의 설정 파일입니다. 이름, 버전, 권한, 사용할 파일 등을 정의합니다.
**비유:** 레스토랑의 메뉴판 + 운영 규칙서

### Popup
확장 프로그램 아이콘을 클릭했을 때 나타나는 작은 창입니다.
**예시:** Chrome 툴바의 확장 프로그램 아이콘 클릭 시 나타나는 화면

### Content Script
웹 페이지에 주입되어 페이지의 DOM과 상호작용하는 JavaScript 코드입니다.
**비유:** 웹사이트 안으로 들어가서 일하는 로봇

### Background Script / Service Worker
브라우저가 실행되는 동안 백그라운드에서 계속 실행되는 스크립트입니다.
**비유:** 레스토랑 주방 - 항상 돌아가고 있음

### Storage API
확장 프로그램의 데이터를 저장하고 불러오는 API입니다.
**종류:** `chrome.storage.local`, `chrome.storage.sync`

### Messaging API
확장 프로그램의 다른 부분들(Popup, Content Script, Background) 간에 메시지를 주고받는 API입니다.
**비유:** 레스토랑의 인터콤 시스템

### CORS (Cross-Origin Resource Sharing)
웹 보안 정책으로, 다른 도메인의 리소스 접근을 제한합니다.
**문제:** Content Script에서 API 호출 시 자주 발생
**해결:** Background Script를 통해 우회

### Hot Reload / HMR (Hot Module Replacement)
코드 수정 시 전체 페이지를 새로고침하지 않고 변경 부분만 즉시 반영하는 기능입니다.
**장점:** 개발 속도 대폭 향상

### TypeScript
JavaScript에 타입 시스템을 추가한 프로그래밍 언어입니다.
**장점:** 에러를 실행 전에 미리 잡을 수 있음, 자동 완성 강력

### React
사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.
**특징:** 컴포넌트 기반, 선언적 UI

### JSX
JavaScript 안에서 HTML과 비슷한 문법을 사용할 수 있게 하는 JavaScript 확장입니다.
**예시:** `<div>Hello</div>`를 JavaScript에서 사용

### Hook (React Hooks)
React 함수형 컴포넌트에서 상태와 생명주기를 다루는 함수들입니다.
**예시:** `useState`, `useEffect`, `useStorage`

### Async/Await
비동기 코드를 동기 코드처럼 작성할 수 있게 해주는 JavaScript 문법입니다.
**예시:** `await fetch(...)`

### npm / pnpm
Node.js 패키지 매니저. 라이브러리 설치 및 관리 도구입니다.
**pnpm**: npm의 빠르고 효율적인 대안

### Build / Bundle
여러 파일의 코드를 하나로 합치고 최적화하는 과정입니다.
**결과:** 브라우저에서 실행 가능한 확장 프로그램

### Chrome DevTools
Chrome 브라우저의 개발자 도구입니다. 디버깅, 로그 확인 등에 사용됩니다.
**열기:** F12 또는 우클릭 → 검사

---

## 연결된 노트

- [[React 기초 가이드]]
- [[TypeScript 입문]]
- [[Chrome Extension API]]
- [[웹 개발 기초]]
- [[JavaScript 비동기 프로그래밍]]

---

**마지막 업데이트:** 2025-10-11
**작성자:** Claude (AI Assistant)
**난이도:** 초급 → 중급 → 고급 (전 레벨)

**이 가이드가 도움이 되었나요? 다음 스텝:**
1. 실습 예제 따라하기
2. 자신만의 프로젝트 시작하기
3. Plasmo Discord 커뮤니티 참여하기

## 🧠 Connected Insights

> 📅 Last analyzed: 2025. 12. 20. 오후 11:40:32
> 💰 Analysis cost: $0.0238

### 🔗 Related Notes

- 🔼 [[P - Projects/4060 미들스쿨 크롬 확장 프로그램 프로젝트/(심화)4060 미들스쿨 주니어 개발자 되기.md]]
  - extends: 이 노트는 Plasmo Framework 초보자 가이드의 내용을 직접 확장하여 실제 프로젝트(크롬 확장 개발 및 배포)로 적용. Plasmo 프로젝트 생성, 구조 이해, popup 만들기 등 동일한 개념과 실습 단계를 공유하며, 초보자 가이드가 프로젝트의 Part 1 기초 부분을 지지함.
  - Confidence: █████ (95%)

- ⚔️ [[P - Projects/4060 미들스쿨 크롬 확장 프로그램 프로젝트/(기초)4060 미들스쿨 주니어 개발자 되기.md]]
  - contradicts: Plasmo의 자동화된 개발 방식을 강조하는 이 노트와 대비되어 전통적 방법(manifest.json 수동 작성, seed files 사용)을 제시. Plasmo vs 전통 방법 비교 섹션에서 논리적 대안을 제시하며, 초보자에게 Plasmo의 우위를 반박적으로 지지.
  - Confidence: █████ (92%)

- ✅ [[A - Areas/교육 및 강의 관리/Leaders' Academy/웹사이트 개발 특강 자료.md]]
  - supports: Plasmo 가이드의 '시작하기 전에 알아야 할 것들'에서 요구하는 HTML/CSS/JS 기초 선수 지식을 직접 지원. 웹 개발 기본(HTML 구조, CSS 스타일, JS 동작)을 스토리텔링으로 설명하여 Plasmo의 React/TS 기반 개발 전제 조건을 보강.
  - Confidence: ████░ (85%)

- 🔗 [[R - Resources/AI 및 개발/개발 도구 가이드/초보_개발자를_위한_AI_시대_코딩_학습_완벽_가이드.md]]
  - related: 초보자 개발 학습 로드맵과 유사한 구조(스토리 소개, 선수 지식, 실습, 실수 해결)를 공유. Plasmo 가이드의 초보자 타겟과 맞물려 AI 도구 활용 학습 패턴을 보완하나, Plasmo 특정 내용은 없음.
  - Confidence: ████░ (80%)

- 🔼 [[크롬 확장 프로그램 개발부터 배포까지_완전 정복 가이드]]
  - extends: Plasmo 초보 가이드의 개발 부분(프로젝트 생성, dev 서버, 로드)을 확장하여 배포(Chrome Web Store)까지 다룸. 크롬 확장 전체 정복으로 Plasmo 실습의 후속 단계로 연결되며, 프로젝트 맥락 공유.
  - Confidence: ████░ (88%)

### 📚 Knowledge Gaps

- 🔴 **Plasmo 배포 및 Chrome Web Store 게시 과정**
  - 초보자 가이드가 개발/테스트에 초점 맞춰 배포(manifest 최종화, zip 빌드, 스토어 업로드, 리뷰 프로세스)를 다루지 않아 실제 프로젝트 완성도가 떨어짐. 관련 프로젝트 노트에서 언급되지만 깊이 부족.
  - Suggested resources: Plasmo 공식 문서: https://docs.plasmo.com/framework/deploy/chrome-web-store, Chrome Web Store 개발자 가이드: https://developer.chrome.com/docs/webstore/publish

- 🔴 **Plasmo 고급 개념 (Content Scripts, Background Scripts, Storage API 실전 사용)**
  - 핵심 개념 섹션이 언급되지만 실전 예제가 truncated되어 깊이 부족. 초보자에서 중급으로 넘어가기 위한 필수 주제로, 프로젝트 적용 시 지식 갭 발생.
  - Suggested resources: Plasmo Docs - Core Concepts: https://docs.plasmo.com/framework, 예제 프로젝트: https://github.com/PlasmoHQ/examples

- 🟡 **Plasmo와 다른 프레임워크 비교 (e.g., ExtensionKit, CRXJS)**
  - 전통 방법과 비교는 있지만 다른 현대 프레임워크 비교가 없어 Plasmo 선택 근거가 약함. 초보자가 최적 도구 선택 시 혼란.
  - Suggested resources: Reddit Plasmo vs CRXJS 토론: https://www.reddit.com/r/chrome_extensions, Awesome Chrome Extensions 리스트

- 🟡 **TypeScript/React 고급 패턴 in Plasmo (Hooks, Context, State Management)**
  - 기본 TS 지원 언급하나, Plasmo 환경에서의 상태 관리나 커스텀 훅 예제가 없어 React 초보자가 확장 프로그램 특화 패턴 학습 어려움.
  - Suggested resources: Plasmo Storage API 가이드: https://docs.plasmo.com/framework/storage, React Context 예제 in Plasmo

### 💡 AI Insights

이 노트는 Plasmo Framework를 초보자 친화적으로 스토리텔링과 실습으로 설명하며, 4060 미들스쿨 프로젝트 시리즈의 강력한 기초 역할을 함. 전통 방법 대비 우위를 강조하나, 배포와 고급 기능으로의 확장이 필요해 프로젝트 완성도를 높일 수 있음. 교육적 구조(목차, 레벨별 선수 지식)가 우수하나, 실제 코드 예제가 truncated되어 완전성 보완 요망.
