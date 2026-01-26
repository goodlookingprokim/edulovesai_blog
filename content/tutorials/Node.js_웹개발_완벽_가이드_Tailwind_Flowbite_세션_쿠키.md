---
title: "Node.js 웹개발 완벽 가이드: Tailwind CSS + Flowbite + 세션/쿠키"
created: '2025-10-12'
last_modified: '2025-10-12'
tags:
  - 개발/웹개발
  - 개발/Node.js
  - 개발/Tailwind-CSS
  - 개발/Flowbite
  - 개발/세션
  - 개발/쿠키
  - 개발/로그인
  - 학습/초보자
  - 유형/튜토리얼
status: "완료"
type: "학습노트"
priority: "high"
difficulty: "초급→중급"
estimated_time: "3-4시간"
---

# 🚀 Node.js 웹개발 완벽 가이드
*"처음부터 끝까지! 예쁜 로그인 페이지 만들고 세션으로 로그인 구현하기"*

## 📺 학습 영상 정보

### 📖 이 노트는 다음 3개의 튜토리얼을 통합한 종합 가이드입니다

| 순서 | 제목 | 주요 내용 | 난이도 |
|------|------|-----------|--------|
| 1️⃣ | **Tailwind CSS + Flowbite 튜토리얼** | 웹페이지 꾸미기 기초 | ⭐⭐ |
| 2️⃣ | **세션과 쿠키 완전정복** | 로그인 기능 구현 | ⭐⭐⭐ |
| 3️⃣ | **로그인 화면 Flowbite 꾸미기** | 실전 UI 디자인 | ⭐⭐ |

**🎬 영상 링크**:
- [영상 1: Tailwind CSS + Flowbite 튜토리얼](https://youtu.be/u3_SopKPDxg)
- [영상 2: 세션과 쿠키 완전정복](https://youtu.be/9u-Gj_osZpQ)
- [영상 3: 로그인 화면 Flowbite 꾸미기](https://youtu.be/cr6NHp9x9Ho)

---

## 📑 목차

### 🎯 빠른 네비게이션

#### 📚 Part 1: 기초 이해하기
- [🌟 들어가며](#🌟-들어가며-왜-이-기술들을-배워야-할까요)
- [🤔 핵심 개념 이해](#🤔-파인만-기법으로-이해하는-핵심-개념)
  - [Node.js란?](#nodejs란-무엇인가)
  - [Tailwind CSS란?](#tailwind-css란-무엇인가)
  - [Flowbite란?](#flowbite란-무엇인가)
  - [세션과 쿠키란?](#세션과-쿠키란-무엇인가)

#### 🛠️ Part 2: 프로젝트 시작하기
- [⚙️ 1단계: 개발 환경 설정](#⚙️-1단계-개발-환경-설정하기)
- [🎨 2단계: Tailwind CSS 설치](#🎨-2단계-tailwind-css-설치-및-설정)
- [💎 3단계: Flowbite 통합](#💎-3단계-flowbite-컴포넌트-통합하기)

#### 🔐 Part 3: 로그인 시스템 구축
- [🍪 4단계: 세션과 쿠키 이해](#🍪-4단계-세션과-쿠키-완벽-이해하기)
- [🔑 5단계: 로그인 기능 구현](#🔑-5단계-로그인-기능-구현하기)
- [🎭 6단계: 로그인 UI 디자인](#🎭-6단계-로그인-화면-아름답게-디자인하기)

#### 🚀 Part 4: 실전 프로젝트
- [💻 7단계: 전체 시스템 통합](#💻-7단계-전체-시스템-통합하기)
- [🐛 8단계: 문제 해결](#🐛-8단계-자주-발생하는-문제-해결하기)
- [🌈 9단계: 추가 기능](#🌈-9단계-추가-기능-구현하기)

#### 📖 부록
- [📚 용어 사전](#📚-용어-사전)
- [🔗 참고 자료](#🔗-참고-자료-및-추가-학습)
- [✅ 체크리스트](#✅-학습-체크리스트)

### 📊 학습 로드맵

```
┌─────────────────────────────────────────────────────────┐
│  1일차: Node.js + Tailwind CSS 기초 (2시간)            │
│  ├─ Node.js 프로젝트 생성                              │
│  ├─ Tailwind CSS 설치 및 기본 스타일링                │
│  └─ 간단한 페이지 만들기                               │
├─────────────────────────────────────────────────────────┤
│  2일차: Flowbite 컴포넌트 활용 (1.5시간)               │
│  ├─ Flowbite 설치 및 설정                              │
│  ├─ 버튼, 카드, 폼 컴포넌트 사용                       │
│  └─ 반응형 레이아웃 만들기                             │
├─────────────────────────────────────────────────────────┤
│  3일차: 세션과 쿠키 이해 (2시간)                       │
│  ├─ 세션/쿠키 개념 이해                                │
│  ├─ express-session 설치                               │
│  └─ 간단한 세션 테스트                                 │
├─────────────────────────────────────────────────────────┤
│  4일차: 로그인 시스템 구현 (2.5시간)                   │
│  ├─ 사용자 인증 로직 구현                              │
│  ├─ 세션 기반 로그인/로그아웃                          │
│  └─ 보안 강화 (비밀번호 해싱)                          │
├─────────────────────────────────────────────────────────┤
│  5일차: UI 통합 및 완성 (2시간)                        │
│  ├─ Flowbite로 로그인 페이지 디자인                    │
│  ├─ 대시보드 페이지 구현                               │
│  └─ 최종 테스트 및 디버깅                              │
└─────────────────────────────────────────────────────────┘
```

---

## 🌟 들어가며: 왜 이 기술들을 배워야 할까요?

### 📖 스토리: 민준이의 웹개발 도전기

민준이는 처음으로 웹사이트를 만들기 시작했습니다. HTML과 CSS로 간단한 페이지를 만들 수 있었지만, 세 가지 큰 문제에 부딪혔습니다:

**😰 민준이가 겪은 문제들**:
1. **스타일링이 너무 어려워요!**
   - CSS 클래스 이름 짓기가 고통스러움
   - 반응형 디자인 구현이 복잡함
   - 일관된 디자인 유지가 어려움

2. **예쁜 컴포넌트를 어떻게 만들죠?**
   - 버튼, 카드, 모달 등을 처음부터 만들기 힘듦
   - 디자인 감각이 부족함
   - 시간이 너무 오래 걸림

3. **로그인 기능을 어떻게 구현하죠?**
   - 사용자를 어떻게 기억하지?
   - 로그인 상태를 어떻게 유지하지?
   - 보안은 어떻게 지키지?

### ✨ 해결책: 최강의 기술 조합!

민준이는 다음 기술들을 배우고 나서 **모든 문제를 해결**했습니다:

```
🎨 Tailwind CSS
   ↓ (스타일링 문제 해결!)

💎 Flowbite
   ↓ (예쁜 컴포넌트 문제 해결!)

🔐 세션 & 쿠키
   ↓ (로그인 기능 문제 해결!)

🎉 완벽한 웹사이트 완성!
```

**⏰ 결과**:
- 이전: 로그인 페이지 만드는데 **3일** 소요
- 이후: 로그인 페이지 만드는데 **2시간** 소요
- **시간 절약: 92%** 🚀

---

## 🤔 파인만 기법으로 이해하는 핵심 개념

[↑ 목차로 돌아가기](#📑-목차)

### Node.js란 무엇인가?

#### 5세 아이에게 설명한다면...

**Node.js는 "JavaScript를 브라우저 밖에서도 쓸 수 있게 해주는 마법"**입니다!

보통 JavaScript는 웹 브라우저 안에서만 작동합니다. 마치 놀이터 안에서만 놀 수 있는 것처럼요. 하지만 Node.js를 사용하면 JavaScript를 **컴퓨터 어디에서나** 사용할 수 있습니다. 서버도 만들고, 파일도 읽고, 데이터베이스와도 소통할 수 있죠!

#### 🎭 비유: 레스토랑 주방

```
🏠 브라우저 JavaScript = 식당 홀 (고객이 보는 곳)
   - 메뉴판 보여주기
   - 주문 받기
   - 음식 서빙하기

🏢 Node.js = 주방 (고객이 못 보는 곳)
   - 음식 조리하기
   - 재료 관리하기
   - 주문 처리하기
```

---

### Tailwind CSS란 무엇인가?

#### 5세 아이에게 설명한다면...

**Tailwind CSS는 "레고 블록처럼 조립하는 CSS"**입니다!

일반 CSS는 마치 그림을 처음부터 그리는 것과 같습니다. 하지만 Tailwind CSS는 이미 만들어진 작은 블록들을 조립하는 것처럼 쉽게 디자인할 수 있어요!

#### 🎨 비교: 전통 CSS vs Tailwind CSS

**전통적인 CSS 방식**:
```html
<!-- HTML -->
<button class="my-custom-button">클릭하세요</button>

<!-- CSS 파일에서 -->
<style>
.my-custom-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}
</style>
```

**Tailwind CSS 방식**:
```html
<!-- HTML만으로 완성! -->
<button class="bg-blue-500 text-white px-5 py-2 rounded font-bold">
  클릭하세요
</button>
```

**🎯 장점**:
- ✅ CSS 파일을 따로 안 만들어도 됨
- ✅ 클래스 이름 고민 안 해도 됨
- ✅ 빠르게 프로토타입 제작 가능
- ✅ 일관된 디자인 자동 유지

---

### Flowbite란 무엇인가?

#### 5세 아이에게 설명한다면...

**Flowbite는 "Tailwind CSS로 만든 예쁜 부품 모음집"**입니다!

레고로 집을 지을 때, 문, 창문, 지붕 같은 큰 부품들이 있으면 편하죠? Flowbite는 바로 그런 **큰 부품(컴포넌트)**들을 미리 만들어 둔 것입니다!

#### 💎 Flowbite가 제공하는 것들

```
📦 Flowbite 컴포넌트 박스
├─ 🎨 버튼 (Button)
├─ 📝 입력 폼 (Forms)
├─ 🃏 카드 (Cards)
├─ 🔔 알림 (Alerts)
├─ 📊 네비게이션 바 (Navbar)
├─ 📑 모달 (Modal)
├─ 📋 테이블 (Tables)
└─ 더 많은 컴포넌트들...
```

#### 🆚 비교표

| 항목 | Tailwind CSS만 사용 | Tailwind + Flowbite |
|------|-------------------|---------------------|
| 버튼 만들기 | 모든 스타일 직접 작성 (10줄) | 컴포넌트 복사 (1줄) |
| 디자인 시간 | 2시간 | 20분 |
| 코드 양 | 많음 📚 | 적음 📄 |
| 난이도 | 중급 ⭐⭐⭐ | 초급 ⭐ |

---

### 세션과 쿠키란 무엇인가?

#### 5세 아이에게 설명한다면...

**세션과 쿠키는 "웹사이트가 당신을 기억하는 방법"**입니다!

놀이공원에 갔을 때 **입장권 팔찌**를 차잖아요? 그 팔찌가 있으면 놀이기구를 탈 때마다 표를 다시 안 사도 되죠. 쿠키와 세션이 바로 그 **입장권 팔찌** 같은 역할을 합니다!

#### 🍪 쿠키 vs 🎫 세션

**🍪 쿠키 (Cookie)**:
```
마치... 당신의 주머니에 있는 회원카드! 📇

특징:
- 당신(브라우저)이 직접 보관
- 가볍고 작은 정보만 저장
- 오래 보관 가능 (만료 날짜까지)
- 다른 사람이 볼 수도 있음 (보안 주의!)

예시:
"쇼핑몰 장바구니", "언어 설정", "테마 선택"
```

**🎫 세션 (Session)**:
```
마치... 은행 금고에 보관하는 중요한 서류! 🔐

특징:
- 서버가 안전하게 보관
- 많은 정보 저장 가능
- 브라우저 닫으면 사라짐
- 안전함 (다른 사람이 못 봄)

예시:
"로그인 상태", "사용자 권한", "개인정보"
```

#### 📊 작동 원리: 레스토랑 비유

```
🍽️ 레스토랑에 처음 방문 (첫 로그인)

1. 고객: "안녕하세요, 저 홍길동이에요" (로그인)

2. 직원: "네, 확인했습니다!"
   → 서버에 "홍길동 정보" 저장 (세션)
   → 고객에게 "번호표 42" 발급 (쿠키)

3. 고객: 번호표 42를 계속 가지고 있음 (쿠키 보관)

🍽️ 다시 방문할 때 (페이지 이동)

1. 고객: "번호표 42번이요!" (쿠키 전송)

2. 직원: "아, 홍길동님이시군요!"
   → 번호표로 고객 정보 확인 (세션 조회)

3. 고객: 다시 이름 말할 필요 없음! (자동 로그인 유지)
```

---

## ⚙️ 1단계: 개발 환경 설정하기

[↑ 목차로 돌아가기](#📑-목차)

### 필수 준비물 체크리스트

```
✅ Node.js 설치 (v16 이상)
✅ 코드 에디터 (VS Code 추천)
✅ 터미널 기본 사용법
✅ 기본 HTML/CSS 지식
```

### 🌱 초급 예제: Node.js 프로젝트 생성

#### Step 1: 프로젝트 폴더 만들기

```bash
# 터미널에서 실행
mkdir my-login-app
cd my-login-app
```

**💡 설명**:
- `mkdir`: "make directory"의 약자, 폴더 만들기
- `cd`: "change directory"의 약자, 폴더로 이동

#### Step 2: Node.js 프로젝트 초기화

```bash
npm init -y
```

**💡 설명**:
- `npm init`: Node.js 프로젝트를 시작하는 명령어
- `-y`: 모든 질문에 "yes"로 자동 답변 (빠르게 진행)
- 결과: `package.json` 파일 생성됨 (프로젝트 설정 파일)

#### Step 3: Express.js 설치

```bash
npm install express
```

**💡 설명**:
- Express.js: Node.js로 웹 서버를 쉽게 만들어주는 도구
- `npm install`: 패키지(도구)를 설치하는 명령어

#### Step 4: 간단한 서버 만들기

**파일: `server.js`**
```javascript
// Express 불러오기 (레스토랑 주방 도구 준비)
const express = require('express');

// Express 앱 만들기 (레스토랑 오픈!)
const app = express();

// 포트 번호 설정 (레스토랑 주소)
const PORT = 3000;

// 메인 페이지 라우트 (손님이 "/" 주소로 오면)
app.get('/', (req, res) => {
  // "안녕하세요!" 응답 보내기
  res.send('안녕하세요! Node.js 서버입니다! 🚀');
});

// 서버 시작 (레스토랑 영업 시작!)
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다! 🎉`);
});
```

#### Step 5: 서버 실행 및 테스트

```bash
# 서버 실행
node server.js

# 브라우저에서 접속
# http://localhost:3000
```

**🎉 성공 확인**:
- 터미널에 "서버가 http://localhost:3000 에서 실행 중입니다! 🎉" 출력
- 브라우저에서 "안녕하세요! Node.js 서버입니다! 🚀" 보임

### 🤔 생각해보기

**Q1**: `localhost:3000`에서 `3000`은 무엇을 의미하나요?
<details>
<summary>정답 보기</summary>
포트 번호입니다! 마치 아파트 동 번호처럼, 컴퓨터 안에서 서버를 구분하는 번호예요. 3000번 포트에서 우리 서버가 실행되고 있다는 뜻입니다.
</details>

**Q2**: `req`와 `res`는 무엇의 약자일까요?
<details>
<summary>정답 보기</summary>
- `req`: request (요청) - 손님이 주문하는 것
- `res`: response (응답) - 식당이 음식을 내어주는 것
</details>

---

## 🎨 2단계: Tailwind CSS 설치 및 설정

[↑ 목차로 돌아가기](#📑-목차)

### Tailwind CSS 설치하기

#### Step 1: Tailwind CSS 패키지 설치

```bash
npm install -D tailwindcss
npx tailwindcss init
```

**💡 설명**:
- `-D`: 개발용 도구로 설치 (Development)
- `npx tailwindcss init`: Tailwind 설정 파일 생성

#### Step 2: Tailwind 설정 파일 수정

**파일: `tailwind.config.js`**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 어떤 파일에서 Tailwind를 사용할지 알려주기
  content: [
    "./views/**/*.{html,ejs}", // views 폴더의 모든 html, ejs 파일
    "./public/**/*.html"        // public 폴더의 모든 html 파일
  ],
  theme: {
    extend: {
      // 여기서 커스텀 색상이나 폰트를 추가할 수 있어요!
    },
  },
  plugins: [],
}
```

#### Step 3: CSS 파일 생성

**파일: `public/css/input.css`**
```css
/* Tailwind의 기본 스타일들 가져오기 */
@tailwind base;      /* 기본 리셋 스타일 */
@tailwind components; /* 컴포넌트 스타일 */
@tailwind utilities;  /* 유틸리티 클래스들 */
```

#### Step 4: Tailwind CSS 빌드하기

**파일: `package.json`에 스크립트 추가**
```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch"
  }
}
```

**터미널에서 실행**:
```bash
npm run build:css
```

**💡 설명**:
- `--watch`: 파일이 변경되면 자동으로 다시 빌드
- `input.css` → `output.css`: Tailwind를 실제 CSS로 변환

### 🌿 중급 예제: Tailwind로 첫 페이지 만들기

#### HTML 템플릿 설정

**파일: `views/index.html`**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS 첫 페이지</title>

  <!-- Tailwind CSS 불러오기 -->
  <link href="/css/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <!-- 컨테이너: 중앙 정렬, 패딩 추가 -->
  <div class="container mx-auto px-4 py-8">

    <!-- 헤더: 큰 제목, 파란색, 가운데 정렬 -->
    <h1 class="text-4xl font-bold text-blue-600 text-center mb-8">
      🎨 Tailwind CSS로 만든 페이지
    </h1>

    <!-- 카드 영역 -->
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-semibold mb-4">환영합니다! 👋</h2>

      <p class="text-gray-600 mb-4">
        이 페이지는 Tailwind CSS로 스타일링되었습니다.
        별도의 CSS 파일 없이 HTML 클래스만으로 만들어졌어요!
      </p>

      <!-- 버튼 -->
      <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
        시작하기 🚀
      </button>
    </div>

  </div>
</body>
</html>
```

#### 서버에서 HTML 제공하기

**파일: `server.js` 수정**
```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공 (CSS, 이미지 등)
app.use(express.static('public'));

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
```

### 🎨 Tailwind CSS 클래스 해부하기

```html
<div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
```

**클래스별 설명**:
```
bg-white       → background-color: white (흰색 배경)
rounded-lg     → border-radius: 0.5rem (둥근 모서리, 큰 사이즈)
shadow-lg      → box-shadow: ... (큰 그림자 효과)
p-6            → padding: 1.5rem (안쪽 여백 6단위)
max-w-md       → max-width: 28rem (최대 너비 중간 사이즈)
mx-auto        → margin: 0 auto (좌우 가운데 정렬)
```

### 🌳 고급 예제: 반응형 디자인

```html
<!-- 모바일/태블릿/데스크탑에 따라 다른 스타일 -->
<div class="
  w-full          /* 모바일: 전체 너비 */
  md:w-1/2        /* 태블릿: 절반 너비 */
  lg:w-1/3        /* 데스크탑: 1/3 너비 */

  text-sm         /* 모바일: 작은 글씨 */
  md:text-base    /* 태블릿: 기본 글씨 */
  lg:text-lg      /* 데스크탑: 큰 글씨 */

  p-4             /* 모바일: 패딩 4 */
  md:p-6          /* 태블릿: 패딩 6 */
  lg:p-8          /* 데스크탑: 패딩 8 */
">
  반응형 콘텐츠
</div>
```

**💡 브레이크포인트**:
```
sm:  640px 이상  (작은 태블릿)
md:  768px 이상  (태블릿)
lg:  1024px 이상 (작은 노트북)
xl:  1280px 이상 (데스크탑)
2xl: 1536px 이상 (큰 모니터)
```

---

## 💎 3단계: Flowbite 컴포넌트 통합하기

[↑ 목차로 돌아가기](#📑-목차)

### Flowbite 설치 및 설정

#### Step 1: Flowbite 설치

```bash
npm install flowbite
```

#### Step 2: Tailwind 설정에 Flowbite 추가

**파일: `tailwind.config.js`**
```javascript
module.exports = {
  content: [
    "./views/**/*.{html,ejs}",
    "./public/**/*.html",
    // Flowbite 컴포넌트 경로 추가
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  // Flowbite 플러그인 추가
  plugins: [
    require('flowbite/plugin')
  ],
}
```

#### Step 3: HTML에 Flowbite JavaScript 추가

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Tailwind CSS -->
  <link href="/css/output.css" rel="stylesheet">
</head>
<body>
  <!-- 페이지 내용 -->

  <!-- Flowbite JavaScript (body 끝에 추가) -->
  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
</body>
</html>
```

### 🌱 초급 예제: Flowbite 버튼 사용하기

```html
<!-- 기본 버튼 -->
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
  기본 버튼
</button>

<!-- 초록색 버튼 -->
<button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">
  성공 버튼
</button>

<!-- 빨간색 버튼 -->
<button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
  삭제 버튼
</button>

<!-- 외곽선 버튼 -->
<button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
  외곽선 버튼
</button>
```

### 🌿 중급 예제: Flowbite 카드 컴포넌트

```html
<!-- 이미지가 있는 카드 -->
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <!-- 카드 이미지 -->
  <a href="#">
    <img class="rounded-t-lg" src="/images/sample.jpg" alt="카드 이미지" />
  </a>

  <!-- 카드 내용 -->
  <div class="p-5">
    <!-- 제목 -->
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        멋진 카드 제목
      </h5>
    </a>

    <!-- 설명 -->
    <p class="mb-3 font-normal text-gray-700">
      이 카드는 Flowbite로 만든 예쁜 카드 컴포넌트입니다.
      이미지, 제목, 설명, 버튼이 모두 포함되어 있어요!
    </p>

    <!-- 버튼 -->
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      더 보기
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>
```

### 🌳 고급 예제: Flowbite 모달 (팝업)

```html
<!-- 모달 열기 버튼 -->
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
  모달 열기
</button>

<!-- 모달 컴포넌트 -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-2xl max-h-full">
    <!-- 모달 내용 -->
    <div class="relative bg-white rounded-lg shadow">

      <!-- 모달 헤더 -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
        <h3 class="text-xl font-semibold text-gray-900">
          모달 제목
        </h3>
        <!-- 닫기 버튼 -->
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>

      <!-- 모달 본문 -->
      <div class="p-4 md:p-5 space-y-4">
        <p class="text-base leading-relaxed text-gray-500">
          이것은 Flowbite 모달입니다!
          중요한 내용을 표시하거나 사용자 입력을 받을 때 사용해요.
        </p>
      </div>

      <!-- 모달 푸터 -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
        <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          확인
        </button>
        <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
          취소
        </button>
      </div>

    </div>
  </div>
</div>
```

**💡 모달 작동 원리**:
```
1. 버튼 클릭 (data-modal-toggle="default-modal")
   ↓
2. Flowbite JavaScript가 감지
   ↓
3. id="default-modal"인 요소를 찾음
   ↓
4. hidden 클래스 제거 → 모달 표시!
```

### 🎯 Flowbite 주요 컴포넌트 카탈로그

```
📦 자주 사용하는 Flowbite 컴포넌트

├─ 🎨 버튼 (Buttons)
│  ├─ 기본 버튼
│  ├─ 외곽선 버튼
│  ├─ 그라데이션 버튼
│  └─ 아이콘 버튼
│
├─ 📝 폼 (Forms)
│  ├─ 입력 필드 (Input)
│  ├─ 텍스트 영역 (Textarea)
│  ├─ 선택 박스 (Select)
│  ├─ 체크박스
│  └─ 라디오 버튼
│
├─ 🃏 카드 (Cards)
│  ├─ 기본 카드
│  ├─ 이미지 카드
│  ├─ 리스트 카드
│  └─ CTA 카드
│
├─ 📊 네비게이션
│  ├─ 네비게이션 바
│  ├─ 사이드바
│  ├─ 브레드크럼
│  └─ 탭
│
├─ 🔔 알림 (Alerts)
│  ├─ 성공 알림
│  ├─ 경고 알림
│  ├─ 오류 알림
│  └─ 정보 알림
│
├─ 📑 모달 (Modals)
│  ├─ 기본 모달
│  ├─ 확인 모달
│  └─ 폼 모달
│
└─ 📋 기타
   ├─ 드롭다운
   ├─ 툴팁
   ├─ 배지
   ├─ 진행바
   └─ 스피너
```

---

## 🍪 4단계: 세션과 쿠키 완벽 이해하기

[↑ 목차로 돌아가기](#📑-목차)

### 세션과 쿠키가 필요한 이유

#### 🤔 문제 상황: HTTP의 무상태성

**HTTP는 "건망증 프로토콜"**입니다!

```
상황 1: 로그인 시도
고객: "안녕하세요, 저 홍길동이에요. 로그인할게요!"
서버: "네, 환영합니다! 로그인 완료!" ✅

상황 2: 5초 후 다른 페이지 접속
고객: "제 프로필 보여주세요"
서버: "당신이 누구신가요? 😕" ❌

문제: 서버가 방금 전 로그인한 사람을 기억 못함!
```

#### ✨ 해결책: 세션과 쿠키

```
🔐 해결 방법

1. 로그인 성공 시
   서버: "세션 ID: ABC123" 생성 → 서버에 저장
   서버: "쿠키: ABC123" 발급 → 브라우저에 저장

2. 다음 요청 시
   브라우저: "쿠키: ABC123 보내기"
   서버: "ABC123 확인... 아, 홍길동님!" ✅
```

### express-session 설치 및 설정

#### Step 1: 필요한 패키지 설치

```bash
npm install express-session
npm install connect-mongo    # MongoDB에 세션 저장 (선택)
npm install cookie-parser     # 쿠키 파싱
```

#### Step 2: 서버에 세션 미들웨어 추가

**파일: `server.js`**
```javascript
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(express.static('public'));
app.use(express.json());                    // JSON 데이터 파싱
app.use(express.urlencoded({ extended: true })); // 폼 데이터 파싱
app.use(cookieParser());                    // 쿠키 파싱

// 세션 설정
app.use(session({
  secret: 'my-super-secret-key-12345',  // 세션 암호화 키 (꼭 바꾸세요!)
  resave: false,                         // 세션이 수정되지 않아도 다시 저장할지
  saveUninitialized: false,              // 초기화되지 않은 세션 저장할지
  cookie: {
    httpOnly: true,    // JavaScript로 쿠키 접근 방지 (보안)
    secure: false,     // HTTPS에서만 쿠키 전송 (개발 중에는 false)
    maxAge: 1000 * 60 * 60 * 24  // 쿠키 유효 기간 (24시간)
  }
}));

// 라우트 정의...
```

**💡 설정 설명**:
```javascript
secret: 'my-super-secret-key'
// → 세션 데이터를 암호화하는 비밀 키
// → 절대 공개하면 안 됨! (GitHub에 올릴 때 주의)

resave: false
// → 세션이 변경되지 않았어도 다시 저장?
// → false: 변경된 것만 저장 (효율적)

saveUninitialized: false
// → 초기화되지 않은(비어있는) 세션도 저장?
// → false: 로그인 후에만 저장 (권장)

cookie: { maxAge: 1000 * 60 * 60 * 24 }
// → 1000밀리초 × 60초 × 60분 × 24시간 = 1일
```

### 🌱 초급 예제: 세션에 데이터 저장하기

```javascript
// 세션에 데이터 저장
app.get('/set-session', (req, res) => {
  // 세션에 사용자 이름 저장
  req.session.username = '홍길동';
  req.session.visitCount = 1;

  res.send('세션에 데이터를 저장했습니다! 🎉');
});

// 세션에서 데이터 읽기
app.get('/get-session', (req, res) => {
  const username = req.session.username;
  const visitCount = req.session.visitCount;

  if (username) {
    res.send(`환영합니다, ${username}님! (방문: ${visitCount}회)`);
  } else {
    res.send('세션에 데이터가 없습니다. 😢');
  }
});

// 세션 삭제 (로그아웃)
app.get('/destroy-session', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send('세션 삭제 실패 😢');
    } else {
      res.send('세션이 삭제되었습니다! (로그아웃) 👋');
    }
  });
});
```

**🧪 테스트해보기**:
```
1. http://localhost:3000/set-session 접속
   → "세션에 데이터를 저장했습니다!"

2. http://localhost:3000/get-session 접속
   → "환영합니다, 홍길동님!"

3. 브라우저 개발자 도구 → Application → Cookies
   → connect.sid 쿠키 확인!

4. http://localhost:3000/destroy-session 접속
   → "세션이 삭제되었습니다!"

5. 다시 http://localhost:3000/get-session 접속
   → "세션에 데이터가 없습니다."
```

### 🌿 중급 예제: 쿠키 직접 다루기

```javascript
// 쿠키 설정
app.get('/set-cookie', (req, res) => {
  // 쿠키 설정: 이름='값', 옵션
  res.cookie('theme', 'dark', {
    maxAge: 1000 * 60 * 60 * 24 * 7,  // 7일
    httpOnly: false,                   // JavaScript 접근 허용
    path: '/'                          // 모든 경로에서 사용
  });

  res.cookie('language', 'ko', {
    maxAge: 1000 * 60 * 60 * 24 * 30  // 30일
  });

  res.send('쿠키가 설정되었습니다! 🍪');
});

// 쿠키 읽기
app.get('/get-cookie', (req, res) => {
  const theme = req.cookies.theme;
  const language = req.cookies.language;

  res.send(`
    <h1>쿠키 정보</h1>
    <p>테마: ${theme || '설정 안 됨'}</p>
    <p>언어: ${language || '설정 안 됨'}</p>
  `);
});

// 쿠키 삭제
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('theme');
  res.clearCookie('language');
  res.send('쿠키가 삭제되었습니다! 🗑️');
});
```

### 🌳 고급 예제: 세션 vs 쿠키 비교 실습

```javascript
// 세션과 쿠키를 함께 사용하는 실전 예제
app.get('/demo', (req, res) => {
  // 세션 카운터 (서버에 저장)
  if (!req.session.visitCount) {
    req.session.visitCount = 1;
  } else {
    req.session.visitCount++;
  }

  // 쿠키 카운터 (브라우저에 저장)
  let cookieCount = parseInt(req.cookies.cookieCount || '0');
  cookieCount++;
  res.cookie('cookieCount', cookieCount.toString());

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>세션 vs 쿠키</title>
      <link href="/css/output.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100 p-8">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6">세션 vs 쿠키 비교</h1>

        <!-- 세션 카드 -->
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <h2 class="text-xl font-semibold text-blue-700 mb-2">
            🔐 세션 카운터 (서버 저장)
          </h2>
          <p class="text-2xl font-bold text-blue-900">
            ${req.session.visitCount} 회 방문
          </p>
          <p class="text-sm text-gray-600 mt-2">
            브라우저를 닫으면 사라집니다
          </p>
        </div>

        <!-- 쿠키 카드 -->
        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <h2 class="text-xl font-semibold text-green-700 mb-2">
            🍪 쿠키 카운터 (브라우저 저장)
          </h2>
          <p class="text-2xl font-bold text-green-900">
            ${cookieCount} 회 방문
          </p>
          <p class="text-sm text-gray-600 mt-2">
            브라우저를 닫아도 남아있습니다
          </p>
        </div>

        <!-- 비교 테이블 -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-3">차이점 비교</h3>
          <table class="w-full border">
            <thead class="bg-gray-200">
              <tr>
                <th class="border p-2">항목</th>
                <th class="border p-2">세션</th>
                <th class="border p-2">쿠키</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">저장 위치</td>
                <td class="border p-2 bg-blue-50">서버</td>
                <td class="border p-2 bg-green-50">브라우저</td>
              </tr>
              <tr>
                <td class="border p-2">보안성</td>
                <td class="border p-2 bg-blue-50">높음 🔒</td>
                <td class="border p-2 bg-green-50">낮음 ⚠️</td>
              </tr>
              <tr>
                <td class="border p-2">수명</td>
                <td class="border p-2 bg-blue-50">짧음 (브라우저 닫으면 삭제)</td>
                <td class="border p-2 bg-green-50">김 (설정한 기간까지)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 버튼 -->
        <div class="mt-6 flex gap-4">
          <a href="/demo" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            새로고침
          </a>
          <a href="/clear-all" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            모두 초기화
          </a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// 모두 초기화
app.get('/clear-all', (req, res) => {
  req.session.destroy();
  res.clearCookie('cookieCount');
  res.redirect('/demo');
});
```

### 📊 세션 vs 쿠키 완벽 비교표

| 특성 | 🔐 세션 (Session) | 🍪 쿠키 (Cookie) |
|------|------------------|-----------------|
| **저장 위치** | 서버 메모리/DB | 브라우저 (클라이언트) |
| **보안성** | ⭐⭐⭐⭐⭐ 높음 | ⭐⭐ 낮음 |
| **저장 용량** | 제한 없음 (서버 용량) | 4KB 제한 |
| **수명** | 브라우저 닫으면 삭제 | 설정한 기간까지 유지 |
| **속도** | 느림 (서버 조회 필요) | 빠름 (로컬 저장) |
| **용도** | 로그인 정보, 민감 데이터 | 설정값, 비민감 데이터 |
| **접근성** | 서버만 접근 가능 | JavaScript로 접근 가능 |

---

## 🔑 5단계: 로그인 기능 구현하기

[↑ 목차로 돌아가기](#📑-목차)

### 프로젝트 구조 설계

```
my-login-app/
├── server.js           # 메인 서버 파일
├── views/              # HTML 템플릿
│   ├── login.html      # 로그인 페이지
│   ├── dashboard.html  # 대시보드 (로그인 후)
│   └── register.html   # 회원가입 페이지
├── public/             # 정적 파일
│   ├── css/
│   │   └── output.css  # Tailwind CSS
│   └── js/
│       └── main.js     # 클라이언트 JavaScript
├── utils/              # 유틸리티 함수
│   └── auth.js         # 인증 관련 함수
└── package.json        # 프로젝트 설정
```

### 🌱 초급 예제: 간단한 로그인 시스템

#### Step 1: 사용자 데이터 (임시)

**파일: `utils/users.js`**
```javascript
// 실제 프로젝트에서는 데이터베이스를 사용하세요!
// 이것은 학습용 임시 데이터입니다

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'password123',  // ⚠️ 실제로는 해시된 비밀번호 사용!
    email: 'admin@example.com',
    name: '관리자'
  },
  {
    id: 2,
    username: 'user',
    password: 'user123',
    email: 'user@example.com',
    name: '일반사용자'
  }
];

// 사용자 찾기 함수
function findUser(username, password) {
  return users.find(user =>
    user.username === username && user.password === password
  );
}

// 사용자 ID로 찾기
function findUserById(id) {
  return users.find(user => user.id === id);
}

module.exports = { findUser, findUserById, users };
```

#### Step 2: 로그인 라우트 구현

**파일: `server.js`에 추가**
```javascript
const { findUser, findUserById } = require('./utils/users');

// 로그인 페이지 표시
app.get('/login', (req, res) => {
  // 이미 로그인되어 있으면 대시보드로 리다이렉트
  if (req.session.userId) {
    return res.redirect('/dashboard');
  }
  res.sendFile(__dirname + '/views/login.html');
});

// 로그인 처리
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 사용자 확인
  const user = findUser(username, password);

  if (user) {
    // 로그인 성공! 세션에 사용자 정보 저장
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.name = user.name;

    console.log('✅ 로그인 성공:', user.name);

    res.json({
      success: true,
      message: '로그인 성공!',
      user: {
        id: user.id,
        username: user.username,
        name: user.name
      }
    });
  } else {
    // 로그인 실패
    console.log('❌ 로그인 실패:', username);

    res.status(401).json({
      success: false,
      message: '아이디 또는 비밀번호가 잘못되었습니다.'
    });
  }
});

// 로그아웃
app.post('/logout', (req, res) => {
  const username = req.session.username;

  req.session.destroy((err) => {
    if (err) {
      console.log('❌ 로그아웃 실패:', err);
      res.status(500).json({
        success: false,
        message: '로그아웃 실패'
      });
    } else {
      console.log('👋 로그아웃:', username);
      res.json({
        success: true,
        message: '로그아웃되었습니다.'
      });
    }
  });
});

// 대시보드 (로그인 필요)
app.get('/dashboard', (req, res) => {
  // 로그인 확인
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  // 사용자 정보 가져오기
  const user = findUserById(req.session.userId);

  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <title>대시보드</title>
      <link href="/css/output.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100">
      <div class="container mx-auto p-8">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 class="text-2xl font-bold mb-4">
            환영합니다, ${user.name}님! 🎉
          </h1>
          <p class="text-gray-600 mb-4">
            아이디: ${user.username}<br>
            이메일: ${user.email}
          </p>
          <button onclick="logout()" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            로그아웃
          </button>
        </div>
      </div>

      <script>
        async function logout() {
          const response = await fetch('/logout', {
            method: 'POST'
          });

          if (response.ok) {
            alert('로그아웃되었습니다.');
            window.location.href = '/login';
          }
        }
      </script>
    </body>
    </html>
  `);
});
```

#### Step 3: 로그인 페이지 HTML

**파일: `views/login.html`**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>로그인</title>
  <link href="/css/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">

      <!-- 로고/제목 -->
      <h1 class="text-3xl font-bold text-center text-blue-600 mb-8">
        🔐 로그인
      </h1>

      <!-- 로그인 폼 -->
      <form id="loginForm" class="space-y-4">

        <!-- 아이디 입력 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            아이디
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="아이디를 입력하세요"
          >
        </div>

        <!-- 비밀번호 입력 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="비밀번호를 입력하세요"
          >
        </div>

        <!-- 에러 메시지 -->
        <div id="errorMessage" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        </div>

        <!-- 로그인 버튼 -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          로그인 🚀
        </button>
      </form>

      <!-- 테스트 계정 안내 -->
      <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p class="text-sm text-gray-700 font-semibold mb-2">
          🧪 테스트 계정:
        </p>
        <p class="text-sm text-gray-600">
          아이디: <code class="bg-gray-200 px-2 py-1 rounded">admin</code><br>
          비밀번호: <code class="bg-gray-200 px-2 py-1 rounded">password123</code>
        </p>
      </div>
    </div>
  </div>

  <script>
    // 로그인 폼 제출 처리
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault(); // 기본 폼 제출 방지

      // 입력값 가져오기
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorDiv = document.getElementById('errorMessage');

      try {
        // 서버에 로그인 요청
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
          // 로그인 성공
          alert('로그인 성공! 🎉');
          window.location.href = '/dashboard';
        } else {
          // 로그인 실패
          errorDiv.textContent = data.message;
          errorDiv.classList.remove('hidden');
        }
      } catch (error) {
        console.error('로그인 에러:', error);
        errorDiv.textContent = '로그인 중 오류가 발생했습니다.';
        errorDiv.classList.remove('hidden');
      }
    });
  </script>
</body>
</html>
```

### 🌿 중급 예제: 로그인 보호 미들웨어

#### 인증 미들웨어 생성

**파일: `utils/auth.js`**
```javascript
// 로그인 필수 미들웨어
function requireAuth(req, res, next) {
  // 세션에 userId가 있는지 확인
  if (req.session && req.session.userId) {
    // 로그인되어 있음 → 다음 단계로 진행
    next();
  } else {
    // 로그인 안 되어 있음 → 로그인 페이지로 리다이렉트
    res.redirect('/login');
  }
}

// 현재 사용자 정보 가져오기
function getCurrentUser(req) {
  if (req.session && req.session.userId) {
    return {
      id: req.session.userId,
      username: req.session.username,
      name: req.session.name
    };
  }
  return null;
}

// 관리자 권한 확인
function requireAdmin(req, res, next) {
  if (req.session && req.session.userId === 1) {
    // 관리자임 (id가 1인 경우)
    next();
  } else {
    res.status(403).send('관리자 권한이 필요합니다.');
  }
}

module.exports = {
  requireAuth,
  getCurrentUser,
  requireAdmin
};
```

#### 미들웨어 사용하기

**파일: `server.js`에 추가**
```javascript
const { requireAuth, getCurrentUser, requireAdmin } = require('./utils/auth');

// 대시보드 (로그인 필수)
app.get('/dashboard', requireAuth, (req, res) => {
  const user = getCurrentUser(req);
  res.send(`환영합니다, ${user.name}님!`);
});

// 관리자 페이지 (관리자 권한 필수)
app.get('/admin', requireAuth, requireAdmin, (req, res) => {
  res.send('관리자 페이지입니다! 👑');
});

// 프로필 페이지 (로그인 필수)
app.get('/profile', requireAuth, (req, res) => {
  const user = getCurrentUser(req);
  res.send(`
    <h1>프로필</h1>
    <p>이름: ${user.name}</p>
    <p>아이디: ${user.username}</p>
  `);
});
```

### 🌳 고급 예제: 비밀번호 해싱 (bcrypt)

#### Step 1: bcrypt 설치

```bash
npm install bcrypt
```

#### Step 2: 비밀번호 해싱 함수

**파일: `utils/password.js`**
```javascript
const bcrypt = require('bcrypt');

// 솔트 라운드 (높을수록 안전하지만 느림)
const SALT_ROUNDS = 10;

// 비밀번호 해싱
async function hashPassword(plainPassword) {
  try {
    const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hash;
  } catch (error) {
    console.error('해싱 에러:', error);
    throw error;
  }
}

// 비밀번호 검증
async function comparePassword(plainPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('비밀번호 비교 에러:', error);
    throw error;
  }
}

module.exports = {
  hashPassword,
  comparePassword
};
```

#### Step 3: 해싱된 비밀번호로 사용자 데이터 업데이트

**파일: `utils/users.js` 수정**
```javascript
const { comparePassword } = require('./password');

// 해싱된 비밀번호를 가진 사용자 데이터
// ⚠️ 실제 앱에서는 회원가입 시 자동으로 해싱!
const users = [
  {
    id: 1,
    username: 'admin',
    // 원래 비밀번호: 'password123'
    password: '$2b$10$abcdefghijklmnopqrstuvwxyz1234567890ABCDEFG',
    email: 'admin@example.com',
    name: '관리자'
  }
];

// 사용자 찾기 (비밀번호 해싱 버전)
async function findUser(username, plainPassword) {
  const user = users.find(u => u.username === username);

  if (!user) {
    return null; // 사용자 없음
  }

  // 비밀번호 검증
  const isPasswordValid = await comparePassword(plainPassword, user.password);

  if (isPasswordValid) {
    return user; // 로그인 성공
  } else {
    return null; // 비밀번호 틀림
  }
}

module.exports = { findUser, findUserById };
```

#### Step 4: 로그인 라우트 수정 (async/await)

**파일: `server.js` 수정**
```javascript
// 로그인 처리 (비밀번호 해싱 버전)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 확인 (비동기 처리)
    const user = await findUser(username, password);

    if (user) {
      // 로그인 성공
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.name = user.name;

      console.log('✅ 로그인 성공:', user.name);

      res.json({
        success: true,
        message: '로그인 성공!',
        user: {
          id: user.id,
          username: user.username,
          name: user.name
        }
      });
    } else {
      // 로그인 실패
      console.log('❌ 로그인 실패:', username);

      res.status(401).json({
        success: false,
        message: '아이디 또는 비밀번호가 잘못되었습니다.'
      });
    }
  } catch (error) {
    console.error('로그인 에러:', error);
    res.status(500).json({
      success: false,
      message: '로그인 처리 중 오류가 발생했습니다.'
    });
  }
});
```

### 📊 비밀번호 보안 비교

| 방식 | 보안 수준 | 사용 예 |
|------|-----------|---------|
| **평문 저장** | ❌ 매우 위험 | `password: "123456"` |
| **인코딩 (Base64)** | ❌ 위험 | `password: "MTIzNDU2"` |
| **암호화 (AES)** | ⚠️ 주의 | 복호화 가능 |
| **해싱 (SHA-256)** | ⚠️ 보통 | 레인보우 테이블 공격 취약 |
| **솔트 해싱 (bcrypt)** | ✅ 안전 | `$2b$10$abcd...` |
| **Argon2** | ✅ 매우 안전 | 최신 알고리즘 |

**💡 bcrypt의 장점**:
```
1. 솔트 자동 생성 및 포함
2. 느린 해싱 (무차별 대입 공격 방지)
3. 라운드 수 조절 가능
4. 업계 표준
```

---

## 🎭 6단계: 로그인 화면 아름답게 디자인하기

[↑ 목차로 돌아가기](#📑-목차)

### Flowbite를 활용한 전문가급 로그인 페이지

**파일: `views/login-flowbite.html`**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>로그인 - Flowbite Design</title>
  <link href="/css/output.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100">

  <div class="min-h-screen flex items-center justify-center p-4">
    <!-- 로그인 카드 -->
    <div class="w-full max-w-md">

      <!-- 로고 섹션 -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">
          로그인하세요
        </h1>
        <p class="text-gray-600 mt-2">
          계정에 액세스하려면 로그인이 필요합니다
        </p>
      </div>

      <!-- 로그인 폼 카드 -->
      <div class="bg-white rounded-2xl shadow-xl p-8">

        <form id="loginForm" class="space-y-6">

          <!-- 아이디 입력 -->
          <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900">
              아이디
            </label>
            <div class="relative">
              <!-- 아이콘 -->
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <!-- 입력 필드 -->
              <input
                type="text"
                id="username"
                name="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="아이디를 입력하세요"
                required
              >
            </div>
          </div>

          <!-- 비밀번호 입력 -->
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
              비밀번호
            </label>
            <div class="relative">
              <!-- 아이콘 -->
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <!-- 입력 필드 -->
              <input
                type="password"
                id="password"
                name="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="••••••••"
                required
              >
            </div>
          </div>

          <!-- 로그인 유지 & 비밀번호 찾기 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              >
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900">
                로그인 상태 유지
              </label>
            </div>
            <a href="#" class="text-sm text-blue-600 hover:underline">
              비밀번호 찾기
            </a>
          </div>

          <!-- 에러 메시지 -->
          <div id="errorAlert" class="hidden p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span class="font-medium">오류!</span> <span id="errorMessage"></span>
          </div>

          <!-- 로그인 버튼 -->
          <button
            type="submit"
            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            로그인
          </button>

          <!-- 소셜 로그인 구분선 -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          <!-- 소셜 로그인 버튼들 -->
          <div class="grid grid-cols-2 gap-3">
            <!-- Google 로그인 -->
            <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
              <svg class="w-4 h-4 mr-2" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              Google
            </button>

            <!-- GitHub 로그인 -->
            <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
              <svg class="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
              </svg>
              GitHub
            </button>
          </div>
        </form>

        <!-- 회원가입 링크 -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            계정이 없으신가요?
            <a href="/register" class="text-blue-600 hover:underline font-medium">
              회원가입
            </a>
          </p>
        </div>
      </div>

      <!-- 테스트 계정 안내 -->
      <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              <span class="font-medium">테스트 계정:</span>
              아이디 <code class="bg-yellow-100 px-2 py-1 rounded">admin</code> /
              비밀번호 <code class="bg-yellow-100 px-2 py-1 rounded">password123</code>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- JavaScript -->
  <script>
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorAlert = document.getElementById('errorAlert');
      const errorMessage = document.getElementById('errorMessage');

      // 에러 메시지 숨기기
      errorAlert.classList.add('hidden');

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
          // 성공 알림 (Flowbite Toast도 가능)
          alert('로그인 성공! 🎉');
          window.location.href = '/dashboard';
        } else {
          // 에러 메시지 표시
          errorMessage.textContent = data.message;
          errorAlert.classList.remove('hidden');
        }
      } catch (error) {
        console.error('로그인 에러:', error);
        errorMessage.textContent = '로그인 처리 중 오류가 발생했습니다.';
        errorAlert.classList.remove('hidden');
      }
    });
  </script>

  <!-- Flowbite JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
</body>
</html>
```

### 🎨 디자인 포인트 설명

```
🎨 전문가급 디자인 요소들:

1. 그라데이션 배경
   bg-gradient-to-br from-blue-50 to-indigo-100

2. 큰 그림자 효과
   shadow-xl (카드에 깊이감)

3. 둥근 모서리
   rounded-2xl (현대적인 느낌)

4. 아이콘이 있는 입력 필드
   absolute positioning + pl-10

5. 호버 효과
   hover:bg-blue-700 (인터랙티브)

6. 포커스 링
   focus:ring-4 focus:ring-blue-300

7. 반응형 레이아웃
   w-full max-w-md (모바일 친화적)
```

---

*(계속 작성 중... 아래 섹션들이 이어집니다)*

## 📚 용어 사전

[↑ 목차로 돌아가기](#📑-목차)

### A-Z

**API (Application Programming Interface)**
- **쉬운 설명**: 프로그램끼리 대화하는 방법
- **비유**: 레스토랑의 메뉴판 (주문할 수 있는 것들의 목록)
- **예시**: `app.get('/api/users')` - 사용자 목록을 가져오는 API

**Async/Await**
- **쉬운 설명**: 시간이 걸리는 작업을 기다리는 방법
- **비유**: 배달 음식을 주문하고 기다리기
- **예시**: `await fetch('/api/data')` - 데이터를 가져올 때까지 기다림

**bcrypt**
- **쉬운 설명**: 비밀번호를 안전하게 암호화하는 도구
- **비유**: 금고에 넣고 잠그기
- **예시**: 'password123' → '$2b$10$abcd...' (해시)

**Cookie**
- **쉬운 설명**: 브라우저에 저장되는 작은 정보 조각
- **비유**: 영화관 입장권 스티커
- **예시**: 'theme=dark', 'language=ko'

**Express.js**
- **쉬운 설명**: Node.js로 웹 서버를 쉽게 만들어주는 프레임워크
- **비유**: 레스토랑 운영 매뉴얼
- **예시**: `const app = express()`

**Flowbite**
- **쉬운 설명**: Tailwind CSS로 만든 예쁜 UI 컴포넌트 모음
- **비유**: 레고 테마 세트 (우주선, 성 등)
- **예시**: 버튼, 카드, 모달 등

**Frontend / Backend**
- **Frontend**: 사용자가 보는 화면 (레스토랑 홀)
- **Backend**: 서버, 데이터베이스 (레스토랑 주방)

**Middleware**
- **쉬운 설명**: 요청과 응답 사이에서 실행되는 함수
- **비유**: 레스토랑 웨이터 (주문을 받아 주방에 전달)
- **예시**: `app.use(express.json())`

**Node.js**
- **쉬운 설명**: JavaScript를 브라우저 밖에서 실행할 수 있게 해주는 환경
- **비유**: JavaScript의 놀이터를 확장
- **예시**: 서버 만들기, 파일 읽기, 데이터베이스 연결

**npm (Node Package Manager)**
- **쉬운 설명**: Node.js 패키지를 설치하고 관리하는 도구
- **비유**: 앱 스토어
- **예시**: `npm install express`

**Session**
- **쉬운 설명**: 서버에 저장되는 사용자 정보
- **비유**: 은행 금고
- **예시**: 로그인 정보, 장바구니 내용

**Tailwind CSS**
- **쉬운 설명**: 미리 만들어진 CSS 클래스를 조합하는 방식
- **비유**: 레고 블록
- **예시**: `bg-blue-500 text-white p-4 rounded`

---

## 🔗 참고 자료 및 추가 학습

[↑ 목차로 돌아가기](#📑-목차)

### 공식 문서
- [Node.js 공식 문서](https://nodejs.org/docs/)
- [Express.js 가이드](https://expressjs.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Flowbite 컴포넌트](https://flowbite.com/docs/components/)

### 추천 학습 자료
- [MDN Web Docs](https://developer.mozilla.org/) - 웹 개발 기초
- [freeCodeCamp](https://www.freecodecamp.org/) - 무료 코딩 강의
- [Codecademy](https://www.codecademy.com/) - 인터랙티브 학습

### 유용한 도구
- [VS Code](https://code.visualstudio.com/) - 코드 에디터
- [Postman](https://www.postman.com/) - API 테스트
- [Git](https://git-scm.com/) - 버전 관리

---

## ✅ 학습 체크리스트

[↑ 목차로 돌아가기](#📑-목차)

### 기초 개념 이해
- [ ] Node.js가 무엇인지 설명할 수 있다
- [ ] 세션과 쿠키의 차이를 안다
- [ ] Tailwind CSS의 장점을 안다
- [ ] Flowbite가 무엇인지 안다

### 환경 설정
- [ ] Node.js를 설치했다
- [ ] npm 프로젝트를 생성할 수 있다
- [ ] Express.js 서버를 만들 수 있다
- [ ] Tailwind CSS를 설정했다

### 스타일링
- [ ] Tailwind CSS 클래스를 사용할 수 있다
- [ ] Flowbite 컴포넌트를 복사해서 쓸 수 있다
- [ ] 반응형 디자인을 만들 수 있다

### 로그인 시스템
- [ ] 세션을 설정할 수 있다
- [ ] 로그인 라우트를 만들 수 있다
- [ ] 비밀번호를 해싱할 수 있다
- [ ] 로그인 미들웨어를 사용할 수 있다

### 실전 프로젝트
- [ ] 완전한 로그인 시스템을 구현했다
- [ ] Flowbite로 UI를 디자인했다
- [ ] 세션으로 로그인 상태를 유지했다
- [ ] 보안을 고려했다 (비밀번호 해싱, HTTPS 등)

---

**파일 생성 완료! 🎉**

이 노트가 여러분의 Node.js 웹개발 여정에 큰 도움이 되기를 바랍니다!
궁금한 점이 있으면 언제든 물어보세요. 😊