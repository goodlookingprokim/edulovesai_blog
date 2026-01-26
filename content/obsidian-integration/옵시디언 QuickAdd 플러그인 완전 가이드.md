---
title: "{{DATE}} 일기"
date: 2025-10-11
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "옵시디언-quickadd-플러그인-완전-가이드"
category: "obsidian-integration"
excerpt: "총 길이: 약 775줄 - 예상 읽기 시간: 전체 45-60분 - 난이도: 초급에서 고급까지 - 작성 방식: 파인만 기법 (5세 아이도 이해할 수 있게) - 들어가며: 파인만 기법으로 QuickAdd 배우기"
tags:
  - obsidian
  - knowledge-management
reading_time: 16
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

## 📑 목차

### 📊 문서 개요
- **총 길이**: 약 775줄
- **예상 읽기 시간**: 전체 45-60분
- **난이도**: ⭐ 초급 → ⭐⭐ 중급 → ⭐⭐⭐ 고급
- **작성 방식**: 파인만 기법 (5세 아이도 이해할 수 있게)

### 🗺️ 상세 목차

#### 📚 **Part 1: 기초 이해하기** (10분)
- [📚 들어가며: 파인만 기법으로 QuickAdd 배우기](#📚-들어가며-파인만-기법으로-quickadd-배우기)
  - [파인만 기법이란?](#파인만-기법이란)
  - [이 가이드에서 파인만 기법 적용법](#이-가이드에서-파인만-기법-적용법)
- [🎯 QuickAdd가 뭔지 5살에게 설명하기](#🎯-quickadd가-뭔지-5살에게-설명하기)
  - [간단히 말하면...](#간단히-말하면)
  - [놀이로 이해하기 🎮](#놀이로-이해하기-🎮)
  - [실제로는 이런 일을 해줍니다](#실제로는-이런-일을-해줍니다)

#### 🚀 **Part 2: 설치 및 기본 설정** (5분)
- [🚀 QuickAdd 설치하기: 따라만 하면 OK!](#🚀-quickadd-설치하기-따라만-하면-ok)
  - [1단계: 커뮤니티 플러그인 찾기](#1단계-커뮤니티-플러그인-찾기)
  - [2단계: QuickAdd 검색하고 설치하기](#2단계-quickadd-검색하고-설치하기)
  - [3단계: 설치 확인하기](#3단계-설치-확인하기)
  - [설치 실패 시 해결법 🔧](#설치-실패-시-해결법-🔧)

#### 🎭 **Part 3: 4가지 핵심 도구** (15분)
- [🎭 QuickAdd의 4가지 마법 도구들](#🎭-quickadd의-4가지-마법-도구들)
  - [1. 📝 Template (템플릿) - "틀 찍기 도구"](#1-📝-template-템플릿---틀-찍기-도구)
  - [2. 📥 Capture (캡처) - "메모 수집함"](#2-📥-capture-캡처---메모-수집함)
  - [3. 🤖 Macro (매크로) - "로봇 비서"](#3-🤖-macro-매크로---로봇-비서)
  - [4. 📁 Multi (멀티) - "정리함"](#4-📁-multi-멀티---정리함)

#### 🛠 **Part 4: 실전 활용법** (15분)
- [🛠 각 기능 실전 활용법](#🛠-각-기능-실전-활용법)
  - [Template 실전편: 일기 템플릿 만들기](#template-실전편-일기-템플릿-만들기)
  - [Capture 실전편: 아이디어 수집기 만들기](#capture-실전편-아이디어-수집기-만들기)
  - [Macro 실전편: 독서 노트 자동화](#macro-실전편-독서-노트-자동화)

#### 🧙‍♂️ **Part 5: 고급 기능** (20분)
- [🧙‍♂️ 고급 활용법: QuickAdd 마스터 되기](#🧙‍♂️-고급-활용법-quickadd-마스터-되기)
  - [포맷 구문 완전정복](#포맷-구문-완전정복)
  - [변수 시스템 이해하기](#변수-시스템-이해하기)
  - [조건부 실행하기](#조건부-실행하기)

#### 🌟 **Part 6: 실생활 워크플로우** (15분)
- [🌟 실생활 워크플로우 예시들](#🌟-실생활-워크플로우-예시들)
  - [1. 학생을 위한 "수업 노트 자동화"](#1-학생을-위한-수업-노트-자동화)
  - [2. 직장인을 위한 "프로젝트 관리 시스템"](#2-직장인을-위한-프로젝트-관리-시스템)
  - [3. 블로거를 위한 "콘텐츠 제작 워크플로우"](#3-블로거를-위한-콘텐츠-제작-워크플로우)

#### 🚨 **Part 7: 문제해결** (10분)
- [🚨 문제해결 가이드](#🚨-문제해결-가이드)
  - [자주 발생하는 문제들](#자주-발생하는-문제들)
  - [성능 최적화 팁](#성능-최적화-팁)

#### 🎁 **Part 8: 추가 자료** (10분)
- [🎁 추가 자료 및 꿀팁들](#🎁-추가-자료-및-꿀팁들)
  - [유용한 외부 자료들](#유용한-외부-자료들)
  - [커뮤니티 스크립트 모음](#커뮤니티-스크립트-모음)
  - [고급 팁 모음](#고급-팁-모음)
  - [트러블슈팅 체크리스트](#트러블슈팅-체크리스트)

#### 🎯 **Part 9: 마무리** (5분)
- [🎯 마무리: QuickAdd 마스터가 되는 길](#🎯-마무리-quickadd-마스터가-되는-길)
  - [학습 로드맵](#학습-로드맵)
  - [계속 발전하는 방법](#계속-발전하는-방법)
  - [파인만의 마지막 조언](#파인만의-마지막-조언)

### 📋 기능별 빠른 참조

| 기능 | 난이도 | 용도 | 학습 시간 | 바로가기 |
|------|--------|------|-----------|---------|
| **Template** | ⭐ | 반복되는 노트 양식 | 5분 | [이동](#1-📝-template-템플릿---틀-찍기-도구) |
| **Capture** | ⭐ | 빠른 메모 저장 | 3분 | [이동](#2-📥-capture-캡처---메모-수집함) |
| **Macro** | ⭐⭐⭐ | 복잡한 작업 자동화 | 15분 | [이동](#3-🤖-macro-매크로---로봇-비서) |
| **Multi** | ⭐⭐ | 기능 그룹화 | 5분 | [이동](#4-📁-multi-멀티---정리함) |

### 🎯 학습 경로 추천

#### 🔰 초보자 (첫 사용자)
1. QuickAdd 설치 → 2. Template으로 일기장 만들기 → 3. Capture로 메모하기

#### 💪 중급자 (기본기 익힘)
1. Macro 기본 이해 → 2. 변수 시스템 활용 → 3. 워크플로우 구축

#### 🚀 고급자 (마스터 도전)
1. JavaScript 스크립트 작성 → 2. API 연동 → 3. 복잡한 자동화 구현

---

## 📚 들어가며: 파인만 기법으로 QuickAdd 배우기

[↑ 목차로 돌아가기](#📑-목차)

### 파인만 기법이란?

노벨물리학상을 받은 리처드 파인만이 개발한 학습법으로, 복잡한 개념을 **5살 아이도 이해할 수 있게 설명**하는 것이 핵심입니다.

**파인만 기법의 4단계:**

1. **개념 선택**: 배우고 싶은 것을 정한다
2. **쉽게 설명**: 5살 아이에게 설명하듯 간단히 표현한다
3. **빈틈 찾기**: 설명하다 막히는 부분을 찾는다
4. **단순화**: 더 쉬운 말로 다시 설명한다

### 이 가이드에서 파인만 기법 적용법

- 🧸 **아이 친화적 비유**: 복잡한 기능을 놀이나 일상으로 설명
- 🎯 **구체적 예시**: "이렇게 하면 이렇게 된다" 방식의 명확한 설명
- 🔄 **반복 학습**: 중요한 개념은 다른 각도로 여러 번 설명
- 🛠 **실습 중심**: 이론보다는 "직접 해보기"에 집중

---

## 🎯 QuickAdd가 뭔지 5살에게 설명하기

[↑ 목차로 돌아가기](#📑-목차)

### 간단히 말하면...

QuickAdd는 **옵시디언에서 반복되는 일을 자동으로 해주는 도우미**입니다.

### 놀이로 이해하기 🎮

상상해보세요. 여러분이 레고 블록으로 집을 짓는다고 해봅시다.

**QuickAdd 없이:**

- 매번 블록을 하나씩 찾아서
- 색깔도 맞춰보고
- 크기도 확인해서
- 천천히 조립해야 합니다

**QuickAdd와 함께:**

- "집 만들기!" 하고 외치면
- 필요한 블록들이 자동으로 나타나고
- 미리 정한 순서대로 척척 조립됩니다

### 실제로는 이런 일을 해줍니다

- **일기 쓰기**: "일기!" 하면 → 오늘 날짜로 일기장이 뜹니다
- **독서 노트**: "책!" 하면 → 책 제목 묻고 → 독서 노트 양식을 만들어줍니다
- **회의록**: "회의!" 하면 → 참석자, 안건 물어보고 → 깔끔한 회의록 완성!

---

## 🚀 QuickAdd 설치하기: 따라만 하면 OK!

[↑ 목차로 돌아가기](#📑-목차)

### 1단계: 커뮤니티 플러그인 찾기

```
옵시디언 열기 → 설정(⚙️) 클릭 → 커뮤니티 플러그인 선택
```

**주의사항:**

- 처음 사용한다면 "커뮤니티 플러그인 켜기" 버튼을 먼저 눌러야 해요!

### 2단계: QuickAdd 검색하고 설치하기

```
찾아보기 → "QuickAdd" 검색 → 설치 → 사용
```

**꿀팁 🍯:**

- 개발자 이름이 "Christian B. B. Houmann"인지 확인하세요
- 가짜가 있을 수 있거든요!

### 3단계: 설치 확인하기

설치가 완료되면:

- 설정 → QuickAdd 메뉴가 나타납니다
- 명령어 팔레트(Ctrl+P)에서 "QuickAdd"를 검색하면 나와야 해요

### 설치 실패 시 해결법 🔧

**문제:** "설치 안 돼요!"**해결:**

1. 인터넷 연결 확인
2. 옵시디언 재시작
3. 커뮤니티 플러그인이 켜져 있는지 확인

---

## 🎭 QuickAdd의 4가지 마법 도구들

[↑ 목차로 돌아가기](#📑-목차)

QuickAdd는 **4개의 도구**로 이루어져 있어요. 각각을 일상의 비유로 설명해드릴게요!

### 1. 📝 Template (템플릿) - "틀 찍기 도구"

**비유:** 쿠키를 만들 때 사용하는 **쿠키 틀**과 같아요!

**작동 방식:**

- 미리 만들어둔 틀(템플릿)을 준비
- "새 노트 만들기!" 하면
- 틀에 맞춰서 새 노트가 뿅! 하고 나타남

**언제 사용할까요?**

- 매일 일기 쓸 때
- 독서 노트 만들 때
- 회의록 작성할 때
- 프로젝트 계획 세울 때

### 2. 📥 Capture (캡처) - "메모 수집함"

**비유:** 편의점에 있는 **택배 보관함**과 같아요!

**작동 방식:**

- 생각이 떠오르면 "캡처!"
- 지정해둔 파일에 자동으로 저장
- 나중에 모아서 정리하면 끝!

**언제 사용할까요?**

- 갑자기 떠오른 아이디어
- 오늘 할 일 추가
- 읽을 책 목록에 추가
- 재미있는 링크 저장

### 3. 🤖 Macro (매크로) - "로봇 비서"

**비유:** 집안일을 도와주는 **로봇 청소기**처럼 여러 일을 순서대로!

**작동 방식:**

- 여러 개의 명령을 미리 설정
- "매크로 실행!" 하면
- 1→2→3 순서대로 자동 실행

**언제 사용할까요?**

- 복잡한 노트 생성 과정
- 여러 파일을 한 번에 업데이트
- API에서 데이터 가져와서 노트 만들기

### 4. 📁 Multi (멀티) - "정리함"

**비유:** 공구를 정리하는 **공구함**과 같아요!

**작동 방식:**

- 관련된 기능들을 하나로 묶어서 정리
- 메뉴 형태로 선택할 수 있게 만들어줌

**언제 사용할까요?**

- 비슷한 기능들을 그룹으로 관리
- 깔끔한 메뉴 만들기

---

## 🛠 각 기능 실전 활용법

[↑ 목차로 돌아가기](#📑-목차)

### Template 실전편: 일기 템플릿 만들기

#### 1. 템플릿 파일 만들기

```markdown
# {{DATE}} 일기

## 오늘의 날씨
- 날씨: 
- 기분: 

## 오늘 한 일
- 

## 내일 할 일
- 

## 한줄 정리
오늘은 ___한 하루였다.
```

#### 2. QuickAdd 설정하기

1. **설정 → QuickAdd**
2. **Choice 이름 입력**: "일기 쓰기"
3. **Type 선택**: Template
4. **Add Choice** 클릭
5. **설정 버튼(⚙️)** 클릭

#### 3. 세부 설정

- **Template Path**: 위에서 만든 템플릿 파일 경로
- **File Name Format**: `일기/{{DATE}} 일기`
- **Folder**: `일기` 폴더 지정
- **Open**: 체크 (생성 후 자동으로 열기)

**결과:** "일기 쓰기" 실행하면 → 오늘 날짜의 일기가 자동 생성! 🎉

### Capture 실전편: 아이디어 수집기 만들기

#### 1. 아이디어 노트 만들기

`아이디어 모음.md` 파일을 미리 만들어두세요.

#### 2. QuickAdd 설정하기

1. **Choice 이름**: "💡 아이디어 캡처"
2. **Type**: Capture
3. **Capture to**: `아이디어 모음.md`

#### 3. 세부 설정

- **Capture format**: `- {{DATE:HH:mm}} {{VALUE}} #아이디어`
- **Write to bottom**: 체크
- **Append link**: 체크 (현재 보던 노트 링크도 함께 저장)

**사용법:**

1. 아이디어가 떠오르면 단축키 실행
2. 아이디어 입력
3. 엔터! → 자동으로 아이디어 노트에 저장됨

**결과 예시:**

```markdown
- 14:30 블로그 글감: QuickAdd 사용법 정리 #아이디어 [[작업 중인 노트]]
- 15:45 앱 아이디어: 습관 추적기 #아이디어 [[독서 노트]]
```

### Macro 실전편: 독서 노트 자동화

#### 1. 독서 노트 템플릿 만들기

```markdown
# 📖 {{VALUE:책제목}}

**저자:** {{VALUE:저자}}
**출판년도:** {{VALUE:출판년도}}
**읽은 날짜:** {{DATE}}
**별점:** {{VALUE:별점}}/5

## 📝 핵심 내용


## 💭 나의 생각


## 🔗 관련 링크
- 
```

#### 2. 매크로 설정하기

1. **Choice 이름**: "📚 독서 노트 만들기"
2. **Type**: Macro
3. **Macro 명령 추가:**
   - Template Choice: 독서 노트 템플릿 실행
   - Capture Choice: 독서 목록에 책 제목 추가

#### 3. 스크립트로 더 똑똑하게 만들기

```javascript
// 스크립트 파일: book_automation.js
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    // 책 정보 입력받기
    const bookTitle = await quickAddApi.inputPrompt("📖 책 제목:");
    const author = await quickAddApi.inputPrompt("✍️ 저자:");
    const rating = await quickAddApi.suggester(
        ["⭐ 1점", "⭐⭐ 2점", "⭐⭐⭐ 3점", "⭐⭐⭐⭐ 4점", "⭐⭐⭐⭐⭐ 5점"],
        ["1", "2", "3", "4", "5"]
    );
  
    // 변수 설정
    variables.책제목 = bookTitle;
    variables.저자 = author;
    variables.별점 = rating;
    variables.출판년도 = new Date().getFullYear(); // 올해로 자동 설정
};
```

**결과:** 한 번의 실행으로 완벽한 독서 노트가 생성됩니다!

---

## 🧙‍♂️ 고급 활용법: QuickAdd 마스터 되기

[↑ 목차로 돌아가기](#📑-목차)

### 포맷 구문 완전정복

QuickAdd만의 특별한 **마법 주문들**을 알아봅시다!

#### 날짜 마법 주문 📅

```markdown
{{DATE}}           → 2024-03-15 (오늘)
{{DATE+7}}          → 2024-03-22 (7일 후)
{{DATE-3}}          → 2024-03-12 (3일 전)
{{DATE:YYYY년 MM월 DD일}} → 2024년 03월 15일
{{DATE:dddd}}       → 금요일
```

#### 사용자 입력 마법 주문 ✍️

```markdown
{{VALUE}}           → 입력창이 뜹니다
{{VALUE:이름}}       → "이름" 이라는 라벨로 입력창
{{MVALUE}}          → 수학 공식 입력창 (LaTeX)
```

#### 파일 연결 마법 주문 🔗

```markdown
{{LINKCURRENT}}     → 현재 보고 있는 노트로의 링크
{{selected}}        → 현재 선택된 텍스트
```

### 변수 시스템 이해하기

**비유:** 변수는 **편의점 택배함**과 같아요!

1. **1단계**: 택배함에 물건을 넣습니다 (변수에 값 저장)
2. **2단계**: 나중에 택배함에서 물건을 꺼냅니다 (변수 값 사용)

#### 실제 예시

```javascript
// 스크립트에서 변수 저장
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    variables.프로젝트명 = await quickAddApi.inputPrompt("프로젝트 이름:");
    variables.담당자 = await quickAddApi.inputPrompt("담당자:");
};
```

```markdown
<!-- 템플릿에서 변수 사용 -->
# {{VALUE:프로젝트명}} 프로젝트

**담당자:** {{VALUE:담당자}}
**생성일:** {{DATE}}
```

### 조건부 실행하기

```javascript
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    const 노트유형 = await quickAddApi.suggester(
        ["일반 노트", "회의록", "독서 노트"], 
        ["normal", "meeting", "book"]
    );
  
    // 선택에 따라 다른 템플릿 사용
    if (노트유형 === "meeting") {
        variables.템플릿경로 = "템플릿/회의록 템플릿.md";
    } else if (노트유형 === "book") {
        variables.템플릿경로 = "템플릿/독서 노트 템플릿.md";
    }
};
```

---

## 🌟 실생활 워크플로우 예시들

[↑ 목차로 돌아가기](#📑-목차)

### 1. 학생을 위한 "수업 노트 자동화"

#### 시나리오

- 수업마다 일관된 노트 형식 필요
- 과제와 시험 정보 자동 정리
- 복습 스케줄 자동 생성

#### 구현 방법

```javascript
// 수업노트_생성.js
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    const 과목 = await quickAddApi.suggester(
        ["수학", "영어", "과학", "국사"],
        ["math", "english", "science", "history"]
    );
  
    const 수업유형 = await quickAddApi.suggester(
        ["강의", "실습", "시험", "과제"],
        ["lecture", "lab", "exam", "assignment"]
    );
  
    variables.과목명 = 과목;
    variables.수업유형 = 수업유형;
    variables.복습날짜 = window.moment().add(3, 'days').format('YYYY-MM-DD');
};
```

### 2. 직장인을 위한 "프로젝트 관리 시스템"

#### 매크로 설정

1. **프로젝트 생성**: 폴더 구조 + 기본 문서들 자동 생성
2. **회의록 작성**: 참석자 + 안건 + 액션 아이템 정리
3. **주간 보고서**: 진행 상황 + 이슈 + 다음 주 계획

```javascript
// 프로젝트_생성.js
module.exports = async (params) => {
    const { app, quickAddApi, variables } = params;
  
    const 프로젝트명 = await quickAddApi.inputPrompt("프로젝트명:");
    const 시작일 = await quickAddApi.inputPrompt("시작일 (YYYY-MM-DD):");
  
    // 폴더 구조 생성
    const vault = app.vault;
    await vault.createFolder(`프로젝트/${프로젝트명}`);
    await vault.createFolder(`프로젝트/${프로젝트명}/회의록`);
    await vault.createFolder(`프로젝트/${프로젝트명}/자료`);
  
    variables.프로젝트명 = 프로젝트명;
    variables.시작일 = 시작일;
};
```

### 3. 블로거를 위한 "콘텐츠 제작 워크플로우"

#### 단계별 자동화

1. **아이디어 캡처**: 언제든 아이디어 저장
2. **포스팅 계획**: 아이디어 → 기획안 변환
3. **글 작성**: 템플릿 기반 포스팅 구조
4. **발행 준비**: 태그, 카테고리, SEO 정보 정리

```markdown
<!-- 블로그 포스팅 템플릿 -->
---
title: {{VALUE:제목}}
date: {{DATE}}
tags: [{{VALUE:태그}}]
category: {{VALUE:카테고리}}
draft: true
---

# {{VALUE:제목}}

## 개요
- **대상 독자**: {{VALUE:대상독자}}
- **핵심 메시지**: {{VALUE:핵심메시지}}
- **예상 분량**: {{VALUE:분량}}

## 목차
1. 
2. 
3. 

## 본문

## 마무리

## 참고 자료
- 
```

---

## 🚨 문제해결 가이드

[↑ 목차로 돌아가기](#📑-목차)

### 자주 발생하는 문제들

#### 1. "QuickAdd 명령이 안 보여요!"

**증상:** 명령어 팔레트에서 QuickAdd를 찾을 수 없음

**해결 순서:**

1. ✅ 플러그인 활성화 확인: 설정 → 커뮤니티 플러그인 → QuickAdd 켜짐 확인
2. ✅ Choice 활성화 확인: QuickAdd 설정에서 번개 버튼(⚡) 클릭했는지 확인
3. ✅ 옵시디언 재시작: 가끔 재시작해야 적용됨

#### 2. "템플릿이 적용이 안 돼요!"

**증상:** 템플릿 실행해도 빈 노트만 생성됨

**체크리스트:**

- [ ] 템플릿 파일이 실제로 존재하는가?
- [ ] 파일 경로가 정확한가? (대소문자 구분!)
- [ ] 템플릿 파일에 내용이 있는가?

**올바른 경로 예시:**

```
❌ 틀림: Template/일기 템플릿.md
✅ 맞음: 템플릿/일기 템플릿.md  (실제 폴더명과 일치)
```

#### 3. "스크립트 오류가 나요!"

**증상:** JavaScript 오류 메시지 출현

**디버깅 방법:**

1. **개발자 도구 열기**: Ctrl+Shift+I (Windows) / Cmd+Opt+I (Mac)
2. **Console 탭**에서 오류 메시지 확인
3. **일반적인 오류들:**

```javascript
// ❌ 자주 하는 실수들
module.exports = (params) => {  // async 빠뜨림
    const result = await quickAddApi.inputPrompt("입력:");  // await는 async 함수에서만!
}

// ✅ 올바른 형태
module.exports = async (params) => {
    const { quickAddApi } = params;  // 구조분해할당으로 깔끔하게
    const result = await quickAddApi.inputPrompt("입력:");
}
```

#### 4. "변수가 전달이 안 돼요!"

**증상:** `{{VALUE:변수명}}`이 그대로 나타남

**확인사항:**

- 변수명이 정확한가? (대소문자, 띄어쓰기 주의)
- 스크립트에서 변수를 제대로 설정했는가?
- 스크립트가 템플릿보다 먼저 실행되는가?

**올바른 변수 설정:**

```javascript
// 스크립트에서
variables.책제목 = "홍길동전";  // 한글 변수명 OK
variables.bookTitle = "Hong Gil Dong";  // 영문도 OK

// 템플릿에서
{{VALUE:책제목}}     // 스크립트와 정확히 일치해야 함
{{VALUE:bookTitle}}  // 대소문자도 정확히!
```

### 성능 최적화 팁

#### 1. 무거운 스크립트 최적화

```javascript
// ❌ 비효율적
module.exports = async (params) => {
    const { app } = params;
  
    // 모든 파일을 다 검색 (느림)
    const allFiles = app.vault.getMarkdownFiles();
    for (let file of allFiles) {
        // 모든 파일을 하나씩 읽기 (매우 느림!)
        const content = await app.vault.read(file);
        if (content.includes("특정단어")) {
            // 처리
        }
    }
};

// ✅ 효율적
module.exports = async (params) => {
    const { app } = params;
  
    // 필요한 파일만 필터링 후 처리
    const targetFiles = app.vault.getMarkdownFiles()
        .filter(file => file.path.includes("특정폴더"));
  
    // 병렬 처리로 속도 향상
    const results = await Promise.all(
        targetFiles.map(async file => {
            const content = await app.vault.read(file);
            return content.includes("특정단어");
        })
    );
};
```

---

## 🎁 추가 자료 및 꿀팁들

[↑ 목차로 돌아가기](#📑-목차)

### 유용한 외부 자료들

#### 공식 자료

- 📖 [QuickAdd 공식 문서](https://quickadd.obsidian.guide/)
- 💻 [GitHub 저장소](https://github.com/chhoumann/quickadd)
- 💬 [Discord 커뮤니티](https://discord.gg/obsidianmd)

#### 추천 유튜브 채널

- 🎥 **Obsidian 공식 채널**: 기본기부터 고급 활용까지
- 🎥 **한국 옵시디언 사용자들**: 한글 콘텐츠로 더 쉽게 이해

### 커뮤니티 스크립트 모음

#### 1. 책 정보 자동 수집 스크립트

```javascript
// book_finder.js - 구글 북스 API 활용
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    const bookTitle = await quickAddApi.inputPrompt("📖 책 제목:");
  
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`);
        const data = await response.json();
      
        if (data.items && data.items.length > 0) {
            const book = data.items[0].volumeInfo;
            variables.책제목 = book.title || "";
            variables.저자 = book.authors ? book.authors.join(", ") : "";
            variables.출판사 = book.publisher || "";
            variables.출간일 = book.publishedDate || "";
            variables.설명 = book.description || "";
        }
    } catch (error) {
        console.log("책 정보를 가져올 수 없습니다:", error);
    }
};
```

#### 2. 할 일 관리 스크립트

```javascript
// todo_manager.js
module.exports = async (params) => {
    const { app, quickAddApi, variables } = params;
  
    const 우선순위 = await quickAddApi.suggester(
        ["🔴 높음", "🟡 보통", "🟢 낮음"],
        ["high", "medium", "low"]
    );
  
    const 마감일 = await quickAddApi.inputPrompt("마감일 (YYYY-MM-DD, 선택사항):");
  
    variables.할일내용 = await quickAddApi.inputPrompt("할 일:");
    variables.우선순위아이콘 = 우선순위 === "high" ? "🔴" : 우선순위 === "medium" ? "🟡" : "🟢";
    variables.마감일 = 마감일 || "미정";
};
```

### 고급 팁 모음

#### 1. 단축키 조합의 마법

```
추천 단축키 조합:
- Ctrl+Shift+A: 빠른 아이디어 캡처
- Ctrl+Shift+D: 일간 노트 생성
- Ctrl+Shift+W: 주간 리뷰 노트
- Ctrl+Shift+M: 회의록 생성
```

#### 2. 폴더 구조 자동 생성

```javascript
// folder_structure.js
module.exports = async (params) => {
    const { app, quickAddApi } = params;
  
    const 프로젝트명 = await quickAddApi.inputPrompt("프로젝트명:");
    const vault = app.vault;
  
    const folders = [
        `프로젝트/${프로젝트명}`,
        `프로젝트/${프로젝트명}/회의록`,
        `프로젝트/${프로젝트명}/문서`,
        `프로젝트/${프로젝트명}/참고자료`
    ];
  
    for (const folder of folders) {
        try {
            await vault.createFolder(folder);
        } catch (error) {
            // 폴더가 이미 존재하면 무시
        }
    }
};
```

#### 3. 조건부 템플릿 선택

```javascript
module.exports = async (params) => {
    const { quickAddApi, variables } = params;
  
    const 시간 = new Date().getHours();
    let 인사말;
  
    if (시간 < 12) {
        인사말 = "좋은 아침입니다! ☀️";
    } else if (시간 < 18) {
        인사말 = "점심 잘 드셨나요? 🍽️";
    } else {
        인사말 = "수고하셨습니다! 🌙";
    }
  
    variables.인사말 = 인사말;
};
```

### 트러블슈팅 체크리스트

#### QuickAdd 실행 전 점검사항

- [ ] 인터넷 연결 상태 (API 사용 시)
- [ ] 필요한 폴더들이 존재하는가?
- [ ] 템플릿 파일이 올바른 위치에 있는가?
- [ ] 다른 플러그인과의 충돌은 없는가?

#### 성능 최적화 체크리스트

- [ ] 불필요한 파일 검색 최소화
- [ ] 큰 파일들은 청크 단위로 처리
- [ ] 캐싱 가능한 데이터는 캐시 활용
- [ ] API 호출은 필요한 경우에만

---

## 🎯 마무리: QuickAdd 마스터가 되는 길

[↑ 목차로 돌아가기](#📑-목차)

### 학습 로드맵

#### 🥉 **브론즈 레벨** (1-2주)

- [ ] QuickAdd 설치 및 기본 설정
- [ ] 간단한 템플릿 1-2개 만들어보기
- [ ] 캡처 기능으로 아이디어 수집하기

#### 🥈 **실버 레벨** (1개월)

- [ ] 복잡한 템플릿 작성하기
- [ ] 매크로로 여러 작업 연결하기
- [ ] 변수와 포맷 구문 활용하기

#### 🥇 **골드 레벨** (3개월)

- [ ] JavaScript 스크립트 작성하기
- [ ] API 연동하여 외부 데이터 가져오기
- [ ] 나만의 워크플로우 완성하기

### 계속 발전하는 방법

1. **매일 조금씩**: 하루에 하나씩 새로운 기능 시도해보기
2. **커뮤니티 참여**: 다른 사용자들의 아이디어 공유하고 배우기
3. **문서화**: 자신만의 사용법을 정리해두기
4. **실험정신**: "이것도 자동화할 수 있을까?" 하는 마인드 갖기

### 파인만의 마지막 조언

> "만약 어떤 것을 간단히 설명할 수 없다면, 당신은 그것을 충분히 이해하지 못한 것이다."

QuickAdd도 마찬가지입니다. **복잡해 보이는 기능들을 하나씩 간단히 이해**하고, **실제로 사용해보면서** 여러분만의 방식을 만들어가세요.

**기억하세요:**

- 🎯 **완벽하지 않아도 괜찮습니다** - 일단 시작하는 것이 중요해요
- 🔄 **실패는 학습의 과정** - 오류가 나도 포기하지 마세요
- 🤝 **혼자가 아닙니다** - 커뮤니티에서 도움을 구하세요
- 🎉 **작은 성공도 축하하세요** - 첫 템플릿이 작동했다면 그것도 큰 성취입니다!

---

*이 가이드가 여러분의 QuickAdd 여정에 도움이 되었기를 바랍니다. 궁금한 점이 있으시면 언제든 옵시디언 커뮤니티에서 물어보세요! 🚀*