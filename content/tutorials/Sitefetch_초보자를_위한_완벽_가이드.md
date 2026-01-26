---
title: Sitefetch - 초보자를 위한 완벽 가이드
created: 2025-10-11
last_modified: 2025-10-11
tags:
  - 개발도구
  - CLI
  - 웹크롤링
  - AI
  - 데이터수집
  - 초보자가이드
  - 실습예제
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/py3ygrli#jMF0qOY7QErQeEaJ/audia/olr+yafWTIr16goKX/og
share_updated: 2025-10-11T10:01:27+09:00
---

# Sitefetch - 초보자를 위한 완벽 가이드

> **🎓 파인만 방식으로 배우기**: "웹사이트 전체를 한 권의 책처럼 저장해주는 마법의 도구"라고 생각하면 됩니다!

## 📋 목차
1. [[#이 도구는 어떤 문제를 해결하나요]]
2. [[#실생활 스토리텔링 - 왜 필요할까요]]
3. [[#Sitefetch가 정확히 뭔가요]]
4. [[#어떻게 작동하나요]]
5. [[#설치하기 - 단계별 가이드]]
6. [[#수준별 실습 예제]]
7. [[#고급 활용법]]
8. [[#실전 프로젝트 아이디어]]
9. [[#문제 해결 가이드]]
10. [[#용어 설명란]]

---

## 이 도구는 어떤 문제를 해결하나요?

### 문제 상황 🤔
상상해보세요. 당신이 좋아하는 블로그에 훌륭한 글이 100개 있습니다. 이 모든 정보를 AI(ChatGPT, Claude 등)에게 학습시켜서 "이 블로그 내용을 바탕으로 질문에 답해줘"라고 하고 싶은데...

**문제는:**
- 글을 하나하나 복사-붙여넣기? ➔ 너무 오래 걸림 😫
- 브라우저에서 "페이지 저장"? ➔ 100번 반복? 😱
- 링크만 주면? ➔ AI가 모든 페이지를 읽을 수 없음 🚫

### Sitefetch의 해결책 ✨
**한 줄의 명령어로** 웹사이트 전체를 깔끔한 텍스트 파일로 저장! 

```bash
sitefetch https://blog.example.com -o blog.txt
```

이것만 입력하면 끝! 몇 초 후 `blog.txt` 파일에 블로그의 모든 내용이 정리되어 있습니다.

---

## 실생활 스토리텔링 - 왜 필요할까요?

### 📖 이야기 1: 학생 민수의 과제

**배경:**
민수는 컴퓨터공학과 학생입니다. 교수님이 "React 공식 문서를 읽고 요약 리포트를 작성하라"는 과제를 내셨습니다.

**문제:**
- React 공식 문서는 수백 개의 페이지로 나뉘어 있음
- 각 페이지를 방문하며 읽기는 너무 비효율적
- AI에게 요약을 부탁하고 싶지만, 링크 하나만으로는 전체 문서를 분석할 수 없음

**Sitefetch 활용:**
```bash
# React 가이드 전체를 다운로드
sitefetch https://react.dev -m "/learn/**" -o react-docs.txt
```

**결과:**
- 5분 만에 React 학습 문서 전체를 하나의 텍스트 파일로 받음
- 이 파일을 AI(Claude, ChatGPT)에 업로드
- AI: "이 문서를 바탕으로 초보자용 요약본 만들어줘"
- 과제 완성! 🎉

---

### 📖 이야기 2: 프리랜서 디자이너 지은이

**배경:**
지은이는 새로운 클라이언트의 웹사이트를 리디자인하는 프로젝트를 맡았습니다.

**문제:**
- 클라이언트 사이트가 100페이지가 넘음
- 모든 페이지의 내용과 구조를 파악해야 함
- 수동으로 각 페이지를 방문하며 메모? 너무 오래 걸림

**Sitefetch 활용:**
```bash
# 클라이언트 사이트 전체 다운로드
sitefetch https://client-website.com -o client-site.txt --concurrency 10
```

**결과:**
- 전체 사이트 내용을 한 파일로 확보
- AI에게 "이 사이트의 주요 메시지와 타겟 고객을 분석해줘" 요청
- 효율적인 리서치로 프로젝트 시작 단계를 단축 ⚡

---

### 📖 이야기 3: 교사 선생님의 교육 자료 제작

**배경:**
고등학교 선생님이 학생들을 위한 "AI 윤리" 수업 자료를 만들고 있습니다.

**문제:**
- 관련 정보가 여러 블로그, 뉴스 사이트에 흩어져 있음
- 신뢰할 수 있는 출처의 내용만 모아야 함
- 학생 수준에 맞게 재편집이 필요

**Sitefetch 활용:**
```bash
# 여러 신뢰할 수 있는 사이트에서 AI 윤리 관련 페이지만 수집
sitefetch https://ai-ethics-blog.com -m "/articles/**" -o ai-ethics.txt
sitefetch https://tech-news.com -m "/ai/ethics/**" -o tech-news.txt
```

**결과:**
- 모든 참고 자료를 텍스트 파일로 정리
- AI에게 "고등학생 수준으로 재작성해줘" 요청
- 양질의 교육 자료 완성 📚

---

## Sitefetch가 정확히 뭔가요?

### 🔍 핵심 개념 (파인만 방식으로 설명)

#### 비유로 이해하기 🍕
Sitefetch를 **"웹사이트 복사기"**라고 생각하면 됩니다.

**일반 복사기:**
- 종이 문서 → 복사기에 넣음 → 복사본 나옴

**Sitefetch (웹사이트 복사기):**
- 웹사이트 주소 → Sitefetch에 입력 → 텍스트 파일로 나옴

#### 기술적 정의 (조금 더 정확하게)
Sitefetch는:
1. **웹 크롤러 도구**: 웹사이트를 자동으로 탐색
2. **콘텐츠 추출기**: HTML에서 실제 내용만 뽑아냄
3. **파일 변환기**: 읽기 쉬운 텍스트로 변환
4. **CLI 프로그램**: 명령줄에서 실행되는 도구

### 🎯 주요 특징

| 특징 | 설명 | 초보자 해석 |
|------|------|-------------|
| **전체 사이트 크롤링** | 링크를 따라가며 모든 페이지 수집 | "자동으로 모든 페이지를 찾아줌" |
| **텍스트 변환** | 깔끔한 읽기 전용 텍스트로 저장 | "광고, 메뉴 같은 잡다한 것 제거" |
| **AI 친화적** | AI 모델이 이해하기 좋은 형식 | "ChatGPT에 바로 업로드 가능" |
| **빠른 처리** | 동시에 여러 페이지 다운로드 | "한 번에 10개씩 가져와서 빠름" |
| **선택적 수집** | 원하는 페이지만 골라서 가져오기 | "블로그 글만, 뉴스 기사만 가능" |

---

## 어떻게 작동하나요?

### 🔄 동작 과정 (단계별 설명)

```
1. 시작 URL 입력
   ↓
2. 해당 페이지 방문
   ↓
3. 페이지 내용 읽기
   ↓
4. 페이지 안의 모든 링크 찾기
   ↓
5. 각 링크 방문 (반복)
   ↓
6. 모든 내용을 하나의 텍스트 파일로 합침
   ↓
7. 완성! 📄
```

### 🧠 내부 작동 원리 (파인만 방식)

#### 비유: 도서관 사서 로봇 📚

**상황:** 도서관에 사서 로봇이 있습니다.

**당신의 요청:** "컴퓨터 과학 섹션의 모든 책 내용을 하나의 문서로 정리해줘"

**로봇의 작업 과정:**

1. **탐색 단계** 🤖
   - 컴퓨터 과학 섹션으로 이동
   - 첫 번째 책장 확인
   - "아, 여기 10권이 있네"

2. **수집 단계** 📖
   - 첫 번째 책을 꺼냄
   - 목차를 확인 ("이 책은 5개 챕터가 있구나")
   - 각 챕터의 내용을 읽음
   - 중요한 내용만 노트에 정리 (광고 페이지, 빈 페이지는 건너뜀)

3. **연결 단계** 🔗
   - "이 책에서 다른 책을 참조하네?" 
   - 참조된 책도 찾아가서 읽음
   - 계속 반복...

4. **정리 단계** ✍️
   - 모든 노트를 하나의 큰 문서로 합침
   - 읽기 쉽게 정렬
   - 중복 제거

5. **완성** ✅
   - 깔끔하게 정리된 하나의 문서 제공

**Sitefetch도 정확히 이렇게 작동합니다!**

---

### 🛠️ 기술적 세부사항 (심화 학습)

<details>
<summary>🔽 기술 스택 및 내부 구조 (중급 개발자용)</summary>

**핵심 기술:**
- **언어**: TypeScript (JavaScript의 타입 안전 버전)
- **런타임**: Node.js, Bun 지원
- **크롤링 엔진**: 내장 HTTP 클라이언트
- **콘텐츠 추출**: Mozilla Readability (파이어폭스의 읽기 모드 기술)
- **패턴 매칭**: micromatch 라이브러리

**처리 흐름:**
```typescript
// 의사 코드
1. 시작 URL을 큐에 추가
2. while (큐가 비어있지 않음) {
     - URL을 큐에서 꺼냄
     - 이미 방문했나? → 건너뜀
     - HTTP GET 요청으로 HTML 가져오기
     - Readability로 본문 추출
     - HTML에서 모든 링크 찾기
     - 같은 도메인의 링크만 큐에 추가
   }
3. 모든 추출된 내용을 하나의 파일로 저장
```

**동시성 처리:**
- 기본적으로 한 번에 5개의 페이지를 동시 처리
- `--concurrency` 옵션으로 조절 가능
- 너무 높이면 서버에 과부하 (비매너 😅)

</details>

---

## 설치하기 - 단계별 가이드

### 🚀 방법 1: 일회성 사용 (설치 없이 바로 사용)

**추천 대상:** "일단 한 번만 써볼래요" 하는 분

#### 옵션 A: Bun 사용 (가장 빠름 ⚡)

```bash
bunx sitefetch https://example.com -o output.txt
```

#### 옵션 B: NPM 사용 (가장 널리 사용됨)

```bash
npx sitefetch https://example.com -o output.txt
```

#### 옵션 C: PNPM 사용 (효율적인 패키지 관리)

```bash
pnpx sitefetch https://example.com -o output.txt
```

**⚠️ 초보자 참고:**
- 처음 실행 시 "설치하겠습니까?" 묻는 메시지가 나올 수 있음
- `y` (yes) 입력하면 자동 설치됨
- 인터넷 연결 필요

---

### 💾 방법 2: 전역 설치 (계속 사용할 예정)

**추천 대상:** "자주 사용할 것 같아요" 하는 분

#### Bun으로 설치

```bash
bun install -g sitefetch
```

#### NPM으로 설치

```bash
npm install -g sitefetch
```

#### PNPM으로 설치

```bash
pnpm install -g sitefetch
```

**설치 확인:**
```bash
sitefetch --version
```

버전 번호가 나오면 성공! 🎉

---

### 🤔 "Bun, NPM, PNPM... 뭐가 다른가요?"

| 도구 | 설명 | 속도 | 추천 대상 |
|------|------|------|-----------|
| **NPM** | Node.js 기본 패키지 관리자 | 보통 | 입문자, 안정성 중시 |
| **PNPM** | 효율적인 공간 사용 | 빠름 | 디스크 공간 절약 원하는 분 |
| **Bun** | 최신 올인원 JavaScript 런타임 | 매우 빠름 | 최신 기술 좋아하는 분 |

**🎓 초보자 추천:**
- Windows: NPM
- Mac: NPM 또는 Bun
- 이미 Node.js 설치되어 있으면: NPM

---

### 📝 사전 준비 사항

#### 1. Node.js 설치 확인

터미널에서 입력:
```bash
node --version
```

**결과가 `v16.0.0` 이상이면 OK!**

없다면? [Node.js 공식 사이트](https://nodejs.org)에서 설치 (LTS 버전 추천)

#### 2. 터미널 열기

**Windows:**
- `Win + R` → `cmd` 입력 → 엔터
- 또는 `Win + R` → `powershell` 입력 → 엔터

**Mac:**
- `Cmd + Space` → `terminal` 검색 → 엔터

**Linux:**
- `Ctrl + Alt + T`

---

## 수준별 실습 예제

### 🌱 초급: 기본 사용법

#### 예제 1: 단일 웹사이트 전체 다운로드

**목표:** 블로그 전체를 하나의 파일로 저장하기

**명령어:**
```bash
sitefetch https://blog.example.com -o my-blog.txt
```

**설명:**
- `sitefetch`: 프로그램 이름
- `https://blog.example.com`: 다운로드할 사이트 주소
- `-o my-blog.txt`: 결과를 `my-blog.txt` 파일로 저장

**결과:**
현재 폴더에 `my-blog.txt` 파일이 생성됩니다.

**📖 파일 내용 예시:**
```
URL: https://blog.example.com/post-1
Title: 첫 번째 포스트

안녕하세요! 이것은 첫 번째 블로그 글입니다...

---

URL: https://blog.example.com/post-2
Title: 두 번째 포스트

오늘은 날씨가 좋네요...

---
```

---

#### 예제 2: 빠른 다운로드 (동시성 증가)

**문제 상황:** 사이트가 너무 커서 다운로드가 느림

**해결책:**
```bash
sitefetch https://large-site.com -o output.txt --concurrency 10
```

**설명:**
- `--concurrency 10`: 한 번에 10개 페이지를 동시에 다운로드
- 기본값은 5개

**⚠️ 주의사항:**
- 너무 높은 값(30 이상)은 서버에 부담
- 일부 사이트는 과도한 요청 시 차단할 수 있음

**🎯 권장 설정:**
- 개인 블로그: `--concurrency 5` (기본값)
- 중형 사이트: `--concurrency 10`
- 대형 사이트: `--concurrency 15`

---

### 🌿 중급: 선택적 페이지 다운로드

#### 예제 3: 특정 경로만 다운로드

**시나리오:** React 공식 문서에서 "학습" 섹션만 필요

**명령어:**
```bash
sitefetch https://react.dev -m "/learn/**" -o react-learn.txt
```

**설명:**
- `-m "/learn/**"`: `/learn/`으로 시작하는 모든 페이지만 매칭
- `**`: "모든 하위 경로" 의미

**구체적인 예:**
```bash
# ✅ 포함됨:
https://react.dev/learn
https://react.dev/learn/installation
https://react.dev/learn/tutorial/tic-tac-toe

# ❌ 제외됨:
https://react.dev/reference
https://react.dev/blog
```

---

#### 예제 4: 여러 경로 패턴 사용

**시나리오:** 블로그와 뉴스 섹션만 다운로드

**명령어:**
```bash
sitefetch https://website.com -m "/blog/**" -m "/news/**" -o content.txt
```

**설명:**
- 여러 `-m` 옵션 사용 가능
- OR 조건으로 작동 (블로그 **또는** 뉴스)

---

#### 예제 5: 패턴 매칭 마스터하기

**다양한 패턴 예시:**

```bash
# 1. 정확한 경로만
sitefetch https://site.com -m "/about" -o about.txt

# 2. 특정 카테고리의 모든 글
sitefetch https://blog.com -m "/category/tech/**" -o tech.txt

# 3. 특정 연도의 글만
sitefetch https://blog.com -m "/2024/**" -o 2024-posts.txt

# 4. 여러 카테고리
sitefetch https://site.com -m "/docs/**" -m "/guides/**" -o documentation.txt

# 5. 복잡한 패턴 (고급)
sitefetch https://site.com -m "/posts/*/comments" -o comments.txt
```

**패턴 문법 치트시트:**

| 패턴 | 의미 | 예시 |
|------|------|------|
| `*` | 한 단계 경로 | `/docs/*` → `/docs/intro` (O), `/docs/api/rest` (X) |
| `**` | 모든 하위 경로 | `/docs/**` → `/docs/intro` (O), `/docs/api/rest` (O) |
| `?` | 한 글자 | `/post-?` → `/post-1`, `/post-a` |
| `[abc]` | 특정 문자 중 하나 | `/page-[123]` → `/page-1`, `/page-2`, `/page-3` |

---

### 🌳 고급: CSS 선택자와 프로그래밍 활용

#### 예제 6: CSS 선택자로 정확한 내용 추출

**문제 상황:** 사이트에 광고가 많아서 불필요한 내용도 추출됨

**해결책:**
```bash
sitefetch https://news-site.com --content-selector ".article-content" -o news.txt
```

**설명:**
- `--content-selector ".article-content"`: `.article-content` 클래스 안의 내용만 추출
- CSS 선택자 문법 사용

**실제 사례:**

```bash
# Medium 블로그
sitefetch https://medium.com/@username --content-selector "article" -o medium.txt

# WordPress 사이트
sitefetch https://wordpress-blog.com --content-selector ".entry-content" -o wp.txt

# 커스텀 사이트 (브라우저 개발자 도구로 클래스 확인 필요)
sitefetch https://custom-site.com --content-selector "#main-content" -o custom.txt
```

**💡 CSS 선택자 찾는 법:**

1. 웹사이트 방문
2. F12 키 (개발자 도구 열기)
3. 요소 선택 도구 클릭 (또는 Ctrl+Shift+C)
4. 본문 내용 클릭
5. 오른쪽 패널에서 클래스 이름 확인

**예시 스크린샷 (텍스트로 표현):**
```
<article class="post-content">
  <h1>제목</h1>
  <p>본문...</p>
</article>

→ 선택자: ".post-content" 또는 "article"
```

---

#### 예제 7: JavaScript API 사용 (Node.js 프로젝트)

**시나리오:** 자동화 스크립트에 Sitefetch 통합

**파일: `download-docs.js`**

```javascript
// sitefetch를 프로그램에서 사용
import { fetchSite } from 'sitefetch'

async function downloadDocumentation() {
  try {
    // React 문서 다운로드
    await fetchSite('https://react.dev', {
      output: 'react-docs.txt',
      match: ['/learn/**', '/reference/**'],
      concurrency: 10
    })
    
    console.log('✅ React 문서 다운로드 완료!')
    
    // Vue 문서도 다운로드
    await fetchSite('https://vuejs.org', {
      output: 'vue-docs.txt',
      match: ['/guide/**'],
      concurrency: 10
    })
    
    console.log('✅ Vue 문서 다운로드 완료!')
    
  } catch (error) {
    console.error('❌ 오류 발생:', error.message)
  }
}

// 실행
downloadDocumentation()
```

**실행 방법:**
```bash
node download-docs.js
```

**응용: 여러 사이트 일괄 다운로드**

```javascript
import { fetchSite } from 'sitefetch'

const sites = [
  { url: 'https://react.dev', output: 'react.txt', match: ['/learn/**'] },
  { url: 'https://vuejs.org', output: 'vue.txt', match: ['/guide/**'] },
  { url: 'https://svelte.dev', output: 'svelte.txt', match: ['/docs/**'] }
]

async function downloadAll() {
  for (const site of sites) {
    console.log(`📥 다운로드 중: ${site.url}`)
    await fetchSite(site.url, {
      output: site.output,
      match: site.match,
      concurrency: 10
    })
    console.log(`✅ 완료: ${site.output}`)
  }
}

downloadAll()
```

---

## 고급 활용법

### 🎯 실전 워크플로우

#### 워크플로우 1: AI 학습 데이터 준비

**목표:** ChatGPT/Claude에게 특정 기술 문서를 학습시키기

**단계:**

1. **문서 다운로드**
```bash
sitefetch https://docs.python.org -m "/3/tutorial/**" -o python-tutorial.txt
```

2. **파일 확인**
```bash
# Mac/Linux
wc -l python-tutorial.txt  # 줄 수 확인
ls -lh python-tutorial.txt # 파일 크기 확인

# Windows
type python-tutorial.txt | find /c /v ""  # 줄 수
```

3. **AI에게 업로드**
   - ChatGPT: 파일 업로드 기능 사용
   - Claude: 대화에 파일 첨부
   - 프롬프트 예시:
   ```
   이 Python 튜토리얼 문서를 바탕으로, 
   완전 초보자를 위한 5일 학습 계획을 만들어줘.
   매일 2시간씩 학습한다고 가정.
   ```

---

#### 워크플로우 2: 경쟁사 분석

**시나리오:** 경쟁사 블로그의 콘텐츠 전략 분석

**단계:**

1. **경쟁사 블로그 수집**
```bash
sitefetch https://competitor-blog.com -m "/blog/**" -o competitor.txt
```

2. **AI 분석 요청**
```
[파일 업로드 후]
이 블로그의:
1. 주요 주제 분석
2. 글 작성 빈도 파악
3. 타겟 독자층 추정
4. 우리가 다루지 않은 주제 찾기
```

3. **인사이트 도출**

---

#### 워크플로우 3: 개인 지식 아카이브 구축

**목표:** 즐겨찾는 블로그들을 로컬에 백업

**Bash 스크립트 예시:**

```bash
#!/bin/bash
# 파일명: backup-blogs.sh

# 백업할 블로그 목록
blogs=(
  "https://overreacted.io"
  "https://kentcdodds.com/blog"
  "https://joshwcomeau.com"
)

# 백업 디렉토리 생성
mkdir -p blog-archive

# 각 블로그 다운로드
for blog in "${blogs[@]}"; do
  # URL에서 도메인 추출
  domain=$(echo $blog | sed 's|https://||' | sed 's|/.*||')
  
  echo "📥 다운로드 중: $domain"
  
  sitefetch "$blog" -o "blog-archive/${domain}.txt" --concurrency 10
  
  echo "✅ 완료: ${domain}.txt"
done

echo "🎉 모든 블로그 백업 완료!"
```

**실행:**
```bash
chmod +x backup-blogs.sh
./backup-blogs.sh
```

---

### 🔧 고급 옵션 조합

#### 조합 1: 최대 효율 다운로드

```bash
sitefetch https://large-docs-site.com \
  -m "/docs/**" \
  -m "/guides/**" \
  --content-selector ".documentation" \
  --concurrency 15 \
  -o docs.txt
```

**설명:**
- 여러 섹션 동시 다운로드
- 정확한 내용만 추출
- 빠른 처리 속도

---

#### 조합 2: 특정 연도의 특정 카테고리

```bash
sitefetch https://tech-blog.com \
  -m "/2024/tech/**" \
  -m "/2024/tutorials/**" \
  --concurrency 10 \
  -o 2024-tech.txt
```

---

#### 조합 3: 환경 변수 활용 (자동화)

```bash
# .env 파일
SITE_URL=https://docs.example.com
OUTPUT_DIR=./downloads
CONCURRENCY=10

# 스크립트에서 사용
#!/bin/bash
source .env

sitefetch $SITE_URL \
  -o "$OUTPUT_DIR/docs.txt" \
  --concurrency $CONCURRENCY
```

---

## 실전 프로젝트 아이디어

### 💡 프로젝트 1: 개인 기술 블로그 아카이브

**난이도:** ⭐ 초급

**목표:** 좋아하는 개발자 블로그들을 로컬에 저장

**단계:**

1. **즐겨찾는 블로그 목록 작성**
   ```
   - https://blog.example1.com
   - https://blog.example2.com
   - https://blog.example3.com
   ```

2. **각 블로그 다운로드**
   ```bash
   sitefetch https://blog.example1.com -o blog1.txt
   sitefetch https://blog.example2.com -o blog2.txt
   sitefetch https://blog.example3.com -o blog3.txt
   ```

3. **폴더 구조 만들기**
   ```
   tech-blogs/
   ├── frontend/
   │   ├── react-blog.txt
   │   └── vue-blog.txt
   └── backend/
       ├── node-blog.txt
       └── python-blog.txt
   ```

**추가 기능:**
- 주간 자동 업데이트 스크립트
- 새 글만 추가하는 diff 기능
- 검색 가능한 인덱스 생성

---

### 💡 프로젝트 2: AI 교육용 맞춤 데이터셋

**난이도:** ⭐⭐ 중급

**목표:** 특정 주제의 고품질 학습 데이터 만들기

**예시: "JavaScript 초보자 가이드" 데이터셋**

**수집 대상:**
1. MDN JavaScript 가이드
2. javascript.info
3. 주요 JavaScript 블로거들의 튜토리얼

**스크립트:**
```bash
#!/bin/bash

# 디렉토리 생성
mkdir -p js-learning-dataset

# MDN 가이드
sitefetch https://developer.mozilla.org -m "/en-US/docs/Web/JavaScript/Guide/**" \
  -o js-learning-dataset/mdn-guide.txt --concurrency 10

# javascript.info
sitefetch https://javascript.info -m "/js/**" \
  -o js-learning-dataset/js-info.txt --concurrency 10

# 유명 블로거
sitefetch https://blog.example.com -m "/javascript/**" \
  -o js-learning-dataset/blog.txt --concurrency 10

# 모든 파일 합치기
cat js-learning-dataset/*.txt > js-complete-guide.txt

echo "✅ JavaScript 학습 데이터셋 생성 완료!"
echo "📊 총 크기: $(wc -l js-complete-guide.txt)"
```

**활용 방법:**
- AI에게 업로드: "이 자료로 JavaScript 초보자 과정 만들어줘"
- RAG 시스템 구축
- 개인 검색 엔진 데이터

---

### 💡 프로젝트 3: 문서 변경 추적 시스템

**난이도:** ⭐⭐⭐ 고급

**목표:** 공식 문서의 변경사항 자동 감지

**아이디어:**
- 매일 자동으로 문서 다운로드
- 이전 버전과 비교
- 변경사항 요약 생성
- 이메일 또는 슬랙으로 알림

**구현 (의사 코드):**

```javascript
// 파일: doc-watcher.js
import { fetchSite } from 'sitefetch'
import fs from 'fs'
import { diffLines } from 'diff'

async function watchDocumentation() {
  const URL = 'https://docs.example.com'
  const NEW_FILE = 'docs-new.txt'
  const OLD_FILE = 'docs-old.txt'
  
  // 새 버전 다운로드
  await fetchSite(URL, {
    output: NEW_FILE,
    match: ['/api/**']
  })
  
  // 기존 파일이 있다면 비교
  if (fs.existsSync(OLD_FILE)) {
    const oldContent = fs.readFileSync(OLD_FILE, 'utf8')
    const newContent = fs.readFileSync(NEW_FILE, 'utf8')
    
    const diff = diffLines(oldContent, newContent)
    
    // 변경사항 있으면 알림
    const hasChanges = diff.some(part => part.added || part.removed)
    
    if (hasChanges) {
      console.log('📢 문서 업데이트 감지!')
      // 이메일 전송, 슬랙 메시지 등
      sendNotification(diff)
    }
  }
  
  // 새 파일을 기존 파일로 교체
  fs.copyFileSync(NEW_FILE, OLD_FILE)
}

// 매일 실행 (cron job)
// 0 9 * * * node doc-watcher.js
```

**배포:**
- GitHub Actions로 자동화
- Cron job으로 스케줄링
- 또는 AWS Lambda 등 서버리스 환경

---

### 💡 프로젝트 4: 다국어 문서 수집기

**난이도:** ⭐⭐ 중급

**목표:** 여러 언어의 문서를 한꺼번에 수집

**사용 사례:**
- 한국어, 영어, 일본어 문서 비교
- 번역 품질 검증
- 다국어 AI 학습 데이터

**예시:**

```bash
#!/bin/bash

SITES=(
  "https://ko.reactjs.org|react-ko.txt"
  "https://reactjs.org|react-en.txt"
  "https://ja.reactjs.org|react-ja.txt"
)

mkdir -p multilang-docs

for site in "${SITES[@]}"; do
  IFS='|' read -r url output <<< "$site"
  
  echo "📥 다운로드: $url"
  sitefetch "$url" -m "/docs/**" -o "multilang-docs/$output"
done

echo "✅ 다국어 문서 수집 완료!"
```

---

## 문제 해결 가이드

### ❓ 자주 묻는 질문 (FAQ)

#### Q1: "명령어를 찾을 수 없습니다" 오류

**증상:**
```
sitefetch: command not found
```

**원인:**
- Sitefetch가 설치되지 않음
- PATH 환경 변수 문제

**해결책:**

```bash
# 1. 전역 설치 확인
npm list -g sitefetch

# 설치되지 않았다면
npm install -g sitefetch

# 2. PATH 확인 (Mac/Linux)
echo $PATH

# 3. npm global bin 경로 확인
npm config get prefix

# 4. 임시 해결 (npx 사용)
npx sitefetch https://example.com -o output.txt
```

---

#### Q2: 다운로드가 너무 느려요

**증상:**
- 100페이지인데 10분 이상 걸림

**해결책:**

```bash
# 동시성 증가
sitefetch https://slow-site.com -o output.txt --concurrency 15

# ⚠️ 너무 높은 값은 오히려 느려질 수 있음
# 권장: 10-20 사이
```

**추가 팁:**
- 안정적인 인터넷 연결 확인
- 특정 경로만 다운로드 (`-m` 옵션)
- 사이트 자체가 느린 경우 시간대 변경

---

#### Q3: 불필요한 내용이 많이 포함돼요

**증상:**
- 광고, 메뉴, 사이드바 등이 포함됨

**해결책:**

```bash
# CSS 선택자로 본문만 추출
sitefetch https://site.com --content-selector ".main-content" -o output.txt
```

**선택자 찾는 법:**
1. 사이트 방문 → F12
2. 요소 선택 도구로 본문 클릭
3. 클래스 이름 확인 (예: `article`, `.post-content`, `#main`)

**일반적인 선택자:**
- `article`
- `.content`
- `.post-content`
- `#main`
- `.entry-content` (WordPress)

---

#### Q4: 일부 페이지만 다운로드되지 않아요

**증상:**
- 50페이지 중 30개만 다운로드됨

**가능한 원인:**

1. **JavaScript 렌더링 필요**
   - 일부 사이트는 JavaScript로 내용 로드
   - Sitefetch는 정적 HTML만 읽음
   - 해결: Puppeteer 같은 브라우저 자동화 도구 사용

2. **로그인 필요**
   - 회원 전용 페이지는 다운로드 불가
   - 해결: 공개 페이지만 수집

3. **Rate Limiting**
   - 사이트가 과도한 요청 차단
   - 해결: `--concurrency` 낮추기

---

#### Q5: 파일이 너무 커요 (100MB 이상)

**문제:**
- AI 업로드 제한 (보통 10-25MB)

**해결책:**

```bash
# 1. 특정 섹션만 다운로드
sitefetch https://huge-site.com -m "/important-section/**" -o small.txt

# 2. 여러 파일로 분할
sitefetch https://site.com -m "/section1/**" -o part1.txt
sitefetch https://site.com -m "/section2/**" -o part2.txt

# 3. 파일 분할 (Mac/Linux)
split -b 10m large-file.txt smaller-part-

# 4. 파일 분할 (Windows PowerShell)
$content = Get-Content large-file.txt
$content[0..1000] | Out-File part1.txt
$content[1001..2000] | Out-File part2.txt
```

---

### 🔍 디버깅 팁

#### 상세 로그 보기

```bash
# 개발자용 디버그 모드 (실제 지원 여부 확인 필요)
DEBUG=* sitefetch https://example.com -o output.txt
```

#### 연결 테스트

```bash
# 사이트 접근 가능한지 확인
curl -I https://example.com

# 응답 코드 200이면 OK
```

#### 패턴 매칭 테스트

```bash
# 실제 다운로드 전 URL만 확인 (가상 예시)
sitefetch https://site.com -m "/blog/**" --dry-run
```

---

### ⚠️ 일반적인 오류 메시지

#### "ENOTFOUND" 오류

**의미:** 사이트를 찾을 수 없음

**확인사항:**
- URL 오타 확인
- 인터넷 연결 확인
- 사이트가 실제로 존재하는지 확인

---

#### "ETIMEDOUT" 오류

**의미:** 연결 시간 초과

**해결:**
- 인터넷 속도 확인
- 나중에 다시 시도
- `--concurrency` 낮추기

---

#### "403 Forbidden" 오류

**의미:** 접근 거부됨

**원인:**
- 사이트가 크롤러 차단
- User-Agent 필터링

**해결:**
현재 Sitefetch는 User-Agent 변경 옵션이 없을 수 있음.
대안: 브라우저 확장 프로그램 또는 다른 도구 사용

---

## 용어 설명란

### 📚 기술 용어 사전

#### A

**API (Application Programming Interface)**
- **쉬운 설명:** 프로그램끼리 대화하는 방법
- **비유:** 식당의 메뉴판 (손님은 주방의 복잡한 과정 몰라도 됨)
- **예시:** Sitefetch를 JavaScript 코드에서 사용하는 기능

---

#### B

**Bun**
- **쉬운 설명:** JavaScript/TypeScript를 실행하는 초고속 프로그램
- **특징:** NPM보다 훨씬 빠름
- **예시:** `bunx sitefetch` 명령어

---

#### C

**CLI (Command Line Interface)**
- **쉬운 설명:** 글자로 명령어를 입력하는 방식
- **반대 개념:** GUI (마우스로 클릭하는 방식)
- **예시:** `sitefetch https://example.com`

**Concurrency (동시성)**
- **쉬운 설명:** 여러 작업을 동시에 처리
- **비유:** 여러 레지에서 동시에 계산 (VS 한 줄로 기다림)
- **예시:** `--concurrency 10` (10개 페이지를 동시에 다운로드)

**CSS Selector (CSS 선택자)**
- **쉬운 설명:** 웹페이지에서 특정 요소를 찾는 주소
- **비유:** "3층 왼쪽에서 두 번째 방"
- **예시:** `.article-content`, `#main`, `article`

**Crawling (크롤링)**
- **쉬운 설명:** 웹사이트를 자동으로 돌아다니며 정보 수집
- **비유:** 도서관 사서가 모든 책 훑어보기
- **예시:** Sitefetch가 링크를 따라가며 모든 페이지 방문

---

#### D

**Dependency (의존성)**
- **쉬운 설명:** 프로그램이 작동하기 위해 필요한 다른 프로그램들
- **비유:** 자동차가 기름 없으면 못 가듯이
- **예시:** Sitefetch는 Node.js에 의존함

**Domain (도메인)**
- **쉬운 설명:** 웹사이트 주소
- **예시:** `example.com`, `github.com`
- **구조:** `https://`(프로토콜) + `example.com`(도메인) + `/path`(경로)

---

#### G

**Glob Pattern (글롭 패턴)**
- **쉬운 설명:** 파일이나 경로를 패턴으로 찾는 방법
- **비유:** "*.txt" = 모든 txt 파일
- **예시:** `/blog/**` = blog 폴더 안의 모든 페이지

**GUI (Graphical User Interface)**
- **쉬운 설명:** 마우스로 클릭하는 방식
- **반대:** CLI (글자로 명령)
- **예시:** 윈도우 탐색기, 맥 파인더

---

#### H

**HTML (HyperText Markup Language)**
- **쉬운 설명:** 웹페이지를 만드는 언어
- **비유:** 문서의 뼈대 (제목, 문단, 링크 등)
- **예시:**
  ```html
  <article>
    <h1>제목</h1>
    <p>내용...</p>
  </article>
  ```

**HTTP (HyperText Transfer Protocol)**
- **쉬운 설명:** 웹에서 정보를 주고받는 규칙
- **비유:** 우체부가 편지 배달하는 규칙
- **예시:** `https://example.com`의 `http` 부분

---

#### J

**JavaScript**
- **쉬운 설명:** 웹페이지에 동작을 만드는 프로그래밍 언어
- **예시:** 버튼 클릭 시 팝업, 자동 슬라이드
- **Sitefetch와의 관계:** Sitefetch는 JavaScript로 만들어짐

---

#### M

**Markdown**
- **쉬운 설명:** 간단한 문법으로 문서 작성하는 방법
- **예시:** `# 제목`, `**굵게**`, `- 목록`
- **용도:** README 파일, 기술 문서 등

**Micromatch**
- **쉬운 설명:** 패턴 매칭을 도와주는 도구
- **역할:** `/blog/**` 같은 패턴 해석
- **Sitefetch에서:** `-m` 옵션의 패턴 처리

---

#### N

**Node.js**
- **쉬운 설명:** JavaScript를 컴퓨터에서 실행할 수 있게 해주는 프로그램
- **비유:** JavaScript의 실행 엔진
- **필요성:** Sitefetch를 사용하려면 Node.js 필요

**NPM (Node Package Manager)**
- **쉬운 설명:** JavaScript 프로그램 설치 도구
- **비유:** 앱스토어
- **예시:** `npm install -g sitefetch`

**NPX**
- **쉬운 설명:** 설치 없이 일회성으로 NPM 패키지 실행
- **편리함:** 설치 없이 바로 사용
- **예시:** `npx sitefetch` (설치 안 하고 실행)

---

#### O

**Output (출력)**
- **쉬운 설명:** 프로그램의 결과물
- **Sitefetch에서:** `-o` 옵션으로 지정한 파일
- **예시:** `-o result.txt` → result.txt 파일 생성

---

#### P

**Package (패키지)**
- **쉬운 설명:** 재사용 가능한 코드 묶음
- **비유:** 레고 블록 세트
- **예시:** Sitefetch 자체가 하나의 패키지

**PATH (환경 변수)**
- **쉬운 설명:** 컴퓨터가 프로그램을 찾는 경로 목록
- **문제:** PATH에 없으면 "명령어를 찾을 수 없음" 오류
- **확인:** `echo $PATH` (Mac/Linux), `echo %PATH%` (Windows)

**PNPM**
- **쉬운 설명:** NPM의 빠르고 효율적인 대안
- **장점:** 디스크 공간 절약
- **예시:** `pnpm install -g sitefetch`

---

#### R

**Readability (가독성 / Mozilla Readability)**
- **쉬운 설명:** 웹페이지에서 읽기 좋은 본문만 추출하는 기술
- **원리:** 광고, 메뉴 등 제거
- **Sitefetch에서:** 파이어폭스의 "읽기 모드"와 동일한 기술 사용

**Runtime (런타임)**
- **쉬운 설명:** 프로그램이 실행되는 환경
- **예시:** Node.js, Bun, Deno
- **비유:** 운동장 (프로그램이 뛰어노는 공간)

---

#### S

**Scraping (스크래핑)**
- **쉬운 설명:** 웹페이지에서 데이터 추출
- **VS Crawling:** 스크래핑은 내용 추출, 크롤링은 페이지 탐색
- **Sitefetch:** 크롤링 + 스크래핑 둘 다 수행

**Selector (선택자)**
- **쉬운 설명:** HTML 요소를 찾는 패턴
- **종류:** CSS 선택자, XPath
- **예시:** `.article` (article 클래스), `#main` (main ID)

---

#### T

**Terminal (터미널)**
- **쉬운 설명:** 글자로 명령어를 입력하는 화면
- **다른 이름:** 커맨드 라인, 콘솔, 셸
- **예시:** Mac의 Terminal, Windows의 CMD

**TypeScript**
- **쉬운 설명:** 안전한 타입이 있는 JavaScript
- **장점:** 오류를 미리 발견
- **Sitefetch:** TypeScript로 개발됨

---

#### U

**URL (Uniform Resource Locator)**
- **쉬운 설명:** 웹 주소
- **구조:** `https://example.com/path/to/page`
- **부분:** 프로토콜(https) + 도메인(example.com) + 경로(/path)

**User-Agent**
- **쉬운 설명:** 브라우저가 서버에 보내는 신분증
- **예시:** "저는 Chrome 브라우저입니다"
- **Sitefetch:** 기본적으로 Node.js의 User-Agent 사용

---

#### W

**Web Crawler (웹 크롤러)**
- **쉬운 설명:** 웹을 자동으로 탐색하는 프로그램
- **비유:** 거미줄(Web)을 기어다니는(Crawl) 로봇
- **예시:** 구글 검색 봇, Sitefetch

---

### 🧩 관련 개념 연결

```
웹사이트
  ↓ (접근)
HTTP 프로토콜
  ↓ (받아옴)
HTML 문서
  ↓ (파싱)
CSS 선택자로 본문 추출
  ↓ (가공)
Readability 적용
  ↓ (저장)
텍스트 파일
  ↓ (활용)
AI 학습 데이터
```

---

## 추가 학습 자료

### 📖 공식 문서
- [Sitefetch GitHub](https://github.com/egoist/sitefetch)
- [Node.js 공식 사이트](https://nodejs.org)
- [NPM 가이드](https://docs.npmjs.com)

### 🎓 관련 개념 학습
- **웹 크롤링 기초**: robots.txt, 법적 고려사항
- **CSS 선택자**: 웹 개발 기초
- **정규표현식**: 패턴 매칭 고급 기법
- **CLI 사용법**: 터미널 기초

### 🛠️ 유사 도구
- **Puppeteer**: JavaScript 실행 지원 (Headless 브라우저)
- **wget**: 전통적인 웹사이트 다운로더
- **httrack**: 오프라인 웹사이트 미러링
- **BeautifulSoup (Python)**: HTML 파싱 라이브러리

---

## 마치며

### 🎉 축하합니다!

이제 당신은:
- ✅ Sitefetch가 무엇인지 이해했습니다
- ✅ 기본 사용법을 마스터했습니다
- ✅ 고급 기능을 활용할 수 있습니다
- ✅ 실전 프로젝트 아이디어를 얻었습니다
- ✅ 문제 해결 능력을 갖췄습니다

### 🚀 다음 단계

1. **직접 실습**: 좋아하는 블로그로 시작해보세요
2. **프로젝트 시작**: 위의 아이디어 중 하나 구현
3. **커뮤니티 참여**: GitHub Issues에서 질문하기
4. **심화 학습**: 웹 크롤링 윤리와 법률 공부

### 💬 피드백

이 가이드가 도움이 되셨나요?
- GitHub 저장소에 ⭐ 스타 주기
- 개선 제안 이슈 남기기
- 동료에게 공유하기

### 📌 빠른 참조 치트시트

```bash
# 기본 다운로드
sitefetch https://site.com -o output.txt

# 빠른 다운로드
sitefetch https://site.com -o output.txt --concurrency 10

# 특정 경로만
sitefetch https://site.com -m "/blog/**" -o blog.txt

# 여러 경로
sitefetch https://site.com -m "/docs/**" -m "/guides/**" -o all.txt

# CSS 선택자로 정확한 추출
sitefetch https://site.com --content-selector ".article" -o output.txt

# 모든 옵션 조합
sitefetch https://site.com \
  -m "/important/**" \
  --content-selector ".content" \
  --concurrency 15 \
  -o result.txt
```

---

## 연결된 노트
- [[웹_크롤링_기초]]
- [[AI_학습_데이터_준비_방법]]
- [[CLI_도구_활용_가이드]]
- [[Node.js_개발_환경_설정]]
- [[개인_지식관리_시스템]]

---

**마지막 업데이트:** 2025-10-11  
**작성자:** Claude AI  
**난이도:** 초급 → 고급  
**예상 학습 시간:** 2-3시간 (실습 포함)

---

> **💡 기억하세요!**  
> "최고의 학습은 직접 해보는 것입니다. 이 가이드를 읽는 것으로 끝내지 말고, 지금 바로 터미널을 열고 첫 명령어를 입력해보세요!"

```bash
npx sitefetch https://example.com -o my-first-fetch.txt
```

**행운을 빕니다! 🚀**
