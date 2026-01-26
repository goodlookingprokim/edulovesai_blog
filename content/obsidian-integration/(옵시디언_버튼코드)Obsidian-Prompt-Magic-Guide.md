---
title: "🎭 파인만 교수와 함께하는 AI 프롬프트 마법 수업"
date: 2025-10-26
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "옵시디언-버튼코드-obsidian-prompt-magic-guide"
category: "obsidian-integration"
excerpt: "잠깐, 여기 앉아봐. 내가 정말 재미있는 이야기를 해줄게! 학생: 교수님, 버튼 만드는 게 제일 어려워요... 파인만: 걱정 마! 내가 단계별로 천천히 알려줄게. 버튼은 사실 3가지 재료만 있으면 돼! 파인만: 자, ..."
tags:
  - obsidian
  - knowledge-management
reading_time: 40
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# 🎭 파인만 교수와 함께하는 AI 프롬프트 마법 수업

*"잠깐, 여기 앉아봐. 내가 정말 재미있는 이야기를 해줄게!"*

---

## 🤔 **학생**: "교수님, AI 프롬프트 관리가 너무 어려워요!"

**파인만**: "아하! 좋은 질문이야! 자, 내가 5살 아이에게 설명하듯 말해줄게. 

프롬프트 관리를 요리에 비유해보자. 매번 요리할 때마다 레시피를 외워야 한다면? 너무 힘들겠지?"

**학생**: "네, 정말 그럴 것 같아요!"

**파인만**: "그래서 우리에게는 **레시피북**이 필요해! 옵시디언이 바로 그 마법의 레시피북이야. 그리고 세 가지 마법 도구가 있어:"

1. **Templater** = 자동 레시피 생성기 🏗️
2. **Open Gate** = 요리할 화덕 문 🚪  
3. **Buttons** = 원터치 요리 버튼 🎛️

---

## 🔧 Buttons 플러그인: 마법 버튼의 비밀

**학생**: "교수님, 버튼 만드는 게 제일 어려워요..."

**파인만**: "걱정 마! 내가 **단계별로** 천천히 알려줄게. 버튼은 사실 **3가지 재료**만 있으면 돼!"

### 📝 1단계: 기본 버튼 만들기 (아주아주 쉬운 것부터!)

**파인만**: "자, 가장 간단한 버튼부터 만들어보자. 마치 전등 스위치처럼!"

````markdown
```button
name 안녕하세요
type note
action 새로운 노트가 생성되었습니다!
```
````
```button
name 안녕하세요
type note
action 새로운 노트가 생성되었습니다!
```

**학생**: "이게 뭘 하는 건가요?"

**파인만**: "좋은 질문! 하나씩 뜯어보자:
- `name`: 버튼에 써있을 글자 (전등 스위치의 '켜기/끄기' 라벨 같은 것)
- `type`: 버튼이 할 일의 종류 (전등을 켜는지, 선풍기를 켜는지)
- `action`: 구체적으로 뭘 할지 (몇 와트 전구를 켤지)"

### 🎯 2단계: 실제로 유용한 버튼들

**파인만**: "이제 진짜 요리하는 버튼들을 만들어보자!"

#### 🤖 AI 채팅 열기 버튼

````markdown
```button
name 🤖 ChatGPT 열기
type link
action https://chat.openai.com
```
````
```button
name 🤖 ChatGPT 열기
type link
action https://chat.openai.com
```

**학생**: "오! 이건 이해가 돼요!"

**파인만**: "그렇지! `type link`는 '링크로 가라'는 뜻이고, `action`에 주소를 적으면 그곳으로 이동해!"

#### 📋 텍스트 복사 버튼

````markdown
```button
name 📋 프롬프트 복사
type copy
action 당신은 전문 작가입니다. 다음 주제로 블로그를 작성해주세요: {{주제}}
```
````
```button
name 📋 프롬프트 복사
type copy
action 당신은 전문 작가입니다. 다음 주제로 블로그를 작성해주세요: {{주제}}
```
**파인만**: "이 버튼을 누르면 `action`에 있는 텍스트가 클립보드로 복사돼! 마치 복사기처럼!"

---

## 🎨 3단계: 고급 버튼들 - 이제 좀 더 복잡해져!

**학생**: "교수님, 더 복잡한 것도 알고 싶어요!"

**파인만**: "훌륭해! 이제 **조건부 버튼**을 만들어보자. 마치 리모컨처럼 여러 기능이 있는!"

### 🎛️ 명령어 실행 버튼

````markdown
```button
name 🏗️ 새 프롬프트 만들기
type command
action Templater: Open insert Template modal
color blue
```
````
```button
name 🏗️ 새 프롬프트 만들기
type command
action Templater: Open insert Template modal
color blue
```

**파인만**: "여기서 `type command`는 '옵시디언 명령어를 실행하라'는 뜻이야. 마치 리모컨의 '채널 바꾸기' 버튼처럼!"

**학생**: "command는 어떻게 찾나요?"

**파인만**: "아주 좋은 질문! **Ctrl+Shift+P** (맥은 Cmd+Shift+P)를 누르면 모든 명령어 목록이 나와. 거기서 원하는 걸 찾으면 돼!"

### 🎨 예쁜 버튼 만들기

````markdown
```button
name ✨ 마케팅 프롬프트 생성
type template
action Marketing_Prompt_Template
color green
id marketing-btn
class fancy-button
```
````
```button
name ✨ 마케팅 프롬프트 생성
type template
action Marketing_Prompt_Template
color green
id marketing-btn
class fancy-button
```
**파인만**: "색깔과 모양도 꾸밀 수 있어! 
- `color`: 버튼 색깔 (red, blue, green, purple, yellow, orange)
- `id`: 버튼의 고유 이름 (CSS로 더 예쁘게 꾸밀 때 사용)
- `class`: 스타일 그룹 (여러 버튼을 같은 스타일로)"

---

## 🧪 4단계: 실전 예제 - 단계별 따라하기

**학생**: "실제로 어떻게 쓰는지 보고 싶어요!"

**파인만**: "그럼 **블로그 작성 워크플로우**를 만들어보자! 마치 요리 순서처럼!"

### 📋 완전한 버튼 세트

````markdown
# 📝 나의 블로그 작성 도구

## 1️⃣ 프롬프트 준비 단계

```button
name 🎯 주제 선정 도우미
type copy
action 다음 중에서 오늘 쓸 블로그 주제를 추천해주세요:
1. 최근 관심사와 트렌드
2. 독자들이 자주 묻는 질문
3. 계절/시기와 관련된 내용
4. 개인 경험담
5. 업계 뉴스 분석

각 주제별로 구체적인 아이디어 3개씩 제안해주세요.
color blue
```

```button
name 📚 개요 작성 도우미
type copy
action 블로그 주제: [여기에 주제 입력]

다음 구조로 블로그 개요를 작성해주세요:
1. 제목 후보 5개 (SEO 최적화 고려)
2. 서론 (독자의 문제점/관심사 제시)
3. 본론 구조 (3-4개 섹션)
4. 각 섹션별 핵심 메시지
5. 결론 (실행 가능한 팁 제공)
6. CTA (Call to Action) 제안

톤: 친근하고 유익한, 독자와의 대화체
길이: 1500-2000자 목표
color green
```

## 2️⃣ AI 실행 단계

```button  
name 🤖 ChatGPT에서 실행
type link
action https://chat.openai.com
color purple
```

```button
name 🧠 Claude에서 실행  
type link
action https://claude.ai
color orange
```

## 3️⃣ 후처리 단계

```button
name 📊 SEO 최적화 검토
type copy
action 방금 작성한 블로그 글을 SEO 관점에서 검토해주세요:

1. 제목에 타겟 키워드 포함 여부
2. 메타 디스크립션 제안 (150자 이내)  
3. 헤딩 구조 (H2, H3) 최적화
4. 내부 링크 가능한 지점 5곳
5. 이미지 alt 텍스트 제안
6. 관련 해시태그 10개

추가로 가독성 향상을 위한 수정 제안도 해주세요.
color red
```

```button
name 📈 성과 추적 템플릿
type template  
action Blog_Performance_Template
color yellow
```
````
# 📝 나의 블로그 작성 도구

## 1️⃣ 프롬프트 준비 단계

```button
name 🎯 주제 선정 도우미
type copy
action 다음 중에서 오늘 쓸 블로그 주제를 추천해주세요:
1. 최근 관심사와 트렌드
2. 독자들이 자주 묻는 질문
3. 계절/시기와 관련된 내용
4. 개인 경험담
5. 업계 뉴스 분석

각 주제별로 구체적인 아이디어 3개씩 제안해주세요.
color blue
```

```button
name 📚 개요 작성 도우미
type copy
action 블로그 주제: [여기에 주제 입력]

다음 구조로 블로그 개요를 작성해주세요:
1. 제목 후보 5개 (SEO 최적화 고려)
2. 서론 (독자의 문제점/관심사 제시)
3. 본론 구조 (3-4개 섹션)
4. 각 섹션별 핵심 메시지
5. 결론 (실행 가능한 팁 제공)
6. CTA (Call to Action) 제안

톤: 친근하고 유익한, 독자와의 대화체
길이: 1500-2000자 목표
color green
```

## 2️⃣ AI 실행 단계

```button  
name 🤖 ChatGPT에서 실행
type link
action https://chat.openai.com
color purple
```

```button
name 🧠 Claude에서 실행  
type link
action https://claude.ai
color orange
```

## 3️⃣ 후처리 단계

```button
name 📊 SEO 최적화 검토
type copy
action 방금 작성한 블로그 글을 SEO 관점에서 검토해주세요:

1. 제목에 타겟 키워드 포함 여부
2. 메타 디스크립션 제안 (150자 이내)  
3. 헤딩 구조 (H2, H3) 최적화
4. 내부 링크 가능한 지점 5곳
5. 이미지 alt 텍스트 제안
6. 관련 해시태그 10개

추가로 가독성 향상을 위한 수정 제안도 해주세요.
color red
```

```button
name 📈 성과 추적 템플릿
type template  
action Blog_Performance_Template
color yellow
```

---

## 🎪 5단계: Templater와 함께 사용하기

**학생**: "와! 이제 이해가 돼요. 그런데 더 똑똑한 버튼도 만들 수 있나요?"

**파인만**: "물론이지! 이제 **Templater와 결합해서** 조건에 따라 다르게 작동하는 버튼을 만들어보자!"

### 🔀 스마트 프롬프트 템플릿

````markdown
<%*
// 사용자에게 질문하기
const platforms = ["YouTube", "Instagram", "Blog", "Twitter", "LinkedIn"];
const contentTypes = ["교육", "엔터테인먼트", "리뷰", "튜토리얼", "뉴스"];

const selectedPlatform = await tp.system.suggester(platforms, platforms);
const selectedType = await tp.system.suggester(contentTypes, contentTypes);
const audience = await tp.system.prompt("타겟 연령대를 입력하세요 (예: 20-30대)");

let promptTemplate = "";
let additionalRequirements = "";

// 플랫폼에 따라 다른 프롬프트 생성
switch(selectedPlatform) {
    case "YouTube":
        promptTemplate = "유튜브 영상 스크립트";
        additionalRequirements = `
- 첫 15초에 강력한 훅 포함
- 8-12분 길이 고려
- 썸네일용 임팩트 문구 제안
- 타임스탬프 구조 제시
- 구독/좋아요 CTA 자연스럽게 배치`;
        break;
    case "Instagram":
        promptTemplate = "인스타그램 포스트";
        additionalRequirements = `
- 해시태그 30개 (인기 + 틈새)
- 캐러셀 이미지 아이디어 5개
- 스토리 연계 방안
- 릴스로 확장 가능한 구조
- 저장률 높이는 팁 형식`;
        break;
    case "Blog":
        promptTemplate = "블로그 아티클";
        additionalRequirements = `
- SEO 최적화 (키워드 밀도 2-3%)
- 내부 링크 제안 5개
- 메타 디스크립션 (150자)
- 이미지 배치 포인트
- 가독성 점수 고려 (Flesch 60+)`;
        break;
    case "Twitter":
        promptTemplate = "트위터 스레드";
        additionalRequirements = `
- 첫 트윗에 훅 (280자 이내)
- 5-10개 트윗 구조
- 각 트윗 독립적으로도 의미 있게
- 리트윗 유도 문구
- 마지막에 요약 + CTA`;
        break;
    case "LinkedIn":
        promptTemplate = "링크드인 포스트";
        additionalRequirements = `
- 전문성과 인사이트 강조
- 데이터/통계로 신뢰도 확보
- 개인 경험담 연결
- 토론 유도 질문
- 1300자 이내 최적화`;
        break;
}
-%>

# 🎬 <%= selectedPlatform %> <%= selectedType %> 콘텐츠 생성기

## 📋 선택된 옵션
- **플랫폼:** <%= selectedPlatform %>
- **콘텐츠 타입:** <%= selectedType %>
- **타겟 연령대:** <%= audience %>
- **생성 시간:** <% tp.date.now("YYYY-MM-DD HH:mm") %>

---

## 🚀 최적화된 프롬프트

당신은 <%= selectedPlatform %> 전문 <%= selectedType %> 콘텐츠 크리에이터입니다.

**타겟 오디언스:** <%= audience %>
**플랫폼 특성:** <%= selectedPlatform %>의 알고리즘과 사용자 행동 패턴을 고려

다음을 포함한 <%= promptTemplate %>을 작성해주세요:

<%= additionalRequirements %>

**추가 요구사항:**
- 플랫폼별 최적 길이 준수
- 참여도 높은 CTA 포함
- 최신 트렌드 키워드 활용
- 브랜드 일관성 유지
- 데이터 기반 인사이트 제공

**주제:** [여기에 구체적인 주제를 입력하세요]

**특별 요청사항:** [추가로 원하는 내용이 있다면 입력하세요]

---

## 🎯 실행 버튼

```button
name 🤖 ChatGPT로 실행
type link
action https://chat.openai.com
color green
```

```button
name 🧠 Claude로 실행
type link
action https://claude.ai
color purple
```

```button
name 📋 프롬프트 복사
type copy
action [위의 프롬프트 전체 내용]
color blue
```

---

## 📊 작업 기록
- 생성일: <% tp.date.now("YYYY-MM-DD HH:mm") %>
- 플랫폼: <%= selectedPlatform %>
- 타입: <%= selectedType %>
- 상태: [ ] 초안 [ ] 검토중 [ ] 완료
````
<%*
// 사용자에게 질문하기
const platforms = ["YouTube", "Instagram", "Blog", "Twitter", "LinkedIn"];
const contentTypes = ["교육", "엔터테인먼트", "리뷰", "튜토리얼", "뉴스"];

const selectedPlatform = await tp.system.suggester(platforms, platforms);
const selectedType = await tp.system.suggester(contentTypes, contentTypes);
const audience = await tp.system.prompt("타겟 연령대를 입력하세요 (예: 20-30대)");

let promptTemplate = "";
let additionalRequirements = "";

// 플랫폼에 따라 다른 프롬프트 생성
switch(selectedPlatform) {
    case "YouTube":
        promptTemplate = "유튜브 영상 스크립트";
        additionalRequirements = `
- 첫 15초에 강력한 훅 포함
- 8-12분 길이 고려
- 썸네일용 임팩트 문구 제안
- 타임스탬프 구조 제시
- 구독/좋아요 CTA 자연스럽게 배치`;
        break;
    case "Instagram":
        promptTemplate = "인스타그램 포스트";
        additionalRequirements = `
- 해시태그 30개 (인기 + 틈새)
- 캐러셀 이미지 아이디어 5개
- 스토리 연계 방안
- 릴스로 확장 가능한 구조
- 저장률 높이는 팁 형식`;
        break;
    case "Blog":
        promptTemplate = "블로그 아티클";
        additionalRequirements = `
- SEO 최적화 (키워드 밀도 2-3%)
- 내부 링크 제안 5개
- 메타 디스크립션 (150자)
- 이미지 배치 포인트
- 가독성 점수 고려 (Flesch 60+)`;
        break;
    case "Twitter":
        promptTemplate = "트위터 스레드";
        additionalRequirements = `
- 첫 트윗에 훅 (280자 이내)
- 5-10개 트윗 구조
- 각 트윗 독립적으로도 의미 있게
- 리트윗 유도 문구
- 마지막에 요약 + CTA`;
        break;
    case "LinkedIn":
        promptTemplate = "링크드인 포스트";
        additionalRequirements = `
- 전문성과 인사이트 강조
- 데이터/통계로 신뢰도 확보
- 개인 경험담 연결
- 토론 유도 질문
- 1300자 이내 최적화`;
        break;
}
-%>

# 🎬 <%= selectedPlatform %> <%= selectedType %> 콘텐츠 생성기

## 📋 선택된 옵션
- **플랫폼:** <%= selectedPlatform %>
- **콘텐츠 타입:** <%= selectedType %>
- **타겟 연령대:** <%= audience %>
- **생성 시간:** <% tp.date.now("YYYY-MM-DD HH:mm") %>

---

## 🚀 최적화된 프롬프트

당신은 <%= selectedPlatform %> 전문 <%= selectedType %> 콘텐츠 크리에이터입니다.

**타겟 오디언스:** <%= audience %>
**플랫폼 특성:** <%= selectedPlatform %>의 알고리즘과 사용자 행동 패턴을 고려

다음을 포함한 <%= promptTemplate %>을 작성해주세요:

<%= additionalRequirements %>

**추가 요구사항:**
- 플랫폼별 최적 길이 준수
- 참여도 높은 CTA 포함
- 최신 트렌드 키워드 활용
- 브랜드 일관성 유지
- 데이터 기반 인사이트 제공

**주제:** [여기에 구체적인 주제를 입력하세요]

**특별 요청사항:** [추가로 원하는 내용이 있다면 입력하세요]

---

## 🎯 실행 버튼

```button
name 🤖 ChatGPT로 실행
type link
action https://chat.openai.com
color green
```

```button
name 🧠 Claude로 실행
type link
action https://claude.ai
color purple
```

```button
name 📋 프롬프트 복사
type copy
action [위의 프롬프트 전체 내용]
color blue
```

---

## 📊 작업 기록
- 생성일: <% tp.date.now("YYYY-MM-DD HH:mm") %>
- 플랫폼: <%= selectedPlatform %>
- 타입: <%= selectedType %>
- 상태: [ ] 초안 [ ] 검토중 [ ] 완료
---

## 🎨 6단계: 버튼을 예쁘게 꾸미기

**학생**: "버튼이 너무 밋밋해 보여요..."

**파인만**: "그럼 **CSS 마법**을 써보자! 옵시디언 설정에서 CSS 스니펫을 추가할 수 있어!"

### 🌈 예쁜 버튼 스타일

**CSS 파일 저장 위치:** `.obsidian/snippets/button-styles.css`

```css
/* 그라디언트 버튼 */
.fancy-button {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
    border: none !important;
    border-radius: 15px !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
    padding: 12px 24px !important;
    font-size: 16px !important;
    font-weight: bold !important;
    color: white !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
}

.fancy-button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
}

/* 프롬프트 버튼 스타일 */
.prompt-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    border-radius: 12px !important;
    padding: 10px 20px !important;
    font-weight: 600 !important;
    border: 2px solid transparent !important;
    transition: all 0.3s ease !important;
}

.prompt-button:hover {
    border-color: #667eea !important;
    transform: scale(1.05) !important;
}

/* AI 실행 버튼 */
.ai-button {
    background: linear-gradient(to right, #00d2ff 0%, #3a47d5 100%) !important;
    color: white !important;
    border-radius: 20px !important;
    padding: 12px 30px !important;
    font-size: 15px !important;
    font-weight: bold !important;
    box-shadow: 0 4px 15px rgba(0,210,255,0.4) !important;
}

/* 복사 버튼 */
.copy-button {
    background: #10b981 !important;
    color: white !important;
    border-radius: 8px !important;
    padding: 8px 16px !important;
    transition: all 0.2s ease !important;
}

.copy-button:hover {
    background: #059669 !important;
}

/* 긴급 버튼 */
.urgent-button {
    background: linear-gradient(45deg, #ff0844 0%, #ffb199 100%) !important;
    color: white !important;
    border-radius: 10px !important;
    padding: 14px 28px !important;
    font-size: 18px !important;
    font-weight: bold !important;
    animation: pulse 2s infinite !important;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 8, 68, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255, 8, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 8, 68, 0); }
}

/* 3D 효과 버튼 */
.button-3d {
    background: linear-gradient(to bottom, #6dd5ed, #2193b0) !important;
    color: white !important;
    border-radius: 10px !important;
    padding: 12px 24px !important;
    border: none !important;
    box-shadow: 0 5px 0 #1a7a8e, 0 8px 10px rgba(0,0,0,0.3) !important;
    transition: all 0.1s ease !important;
}

.button-3d:hover {
    transform: translateY(2px) !important;
    box-shadow: 0 3px 0 #1a7a8e, 0 6px 8px rgba(0,0,0,0.3) !important;
}

.button-3d:active {
    transform: translateY(5px) !important;
    box-shadow: 0 0 0 #1a7a8e, 0 2px 4px rgba(0,0,0,0.3) !important;
}
```

**사용법:**
````markdown
```button
name ✨ 마법의 프롬프트
type copy
action 멋진 프롬프트 내용
class fancy-button
```

```button
name 🚀 AI 실행
type link
action https://chat.openai.com
class ai-button
```

```button
name 🔥 긴급 실행
type copy
action 긴급 프롬프트 내용
class urgent-button
```
````
```button
name ✨ 마법의 프롬프트
type copy
action 멋진 프롬프트 내용
class fancy-button
```

```button
name 🚀 AI 실행
type link
action https://chat.openai.com
class ai-button
```

```button
name 🔥 긴급 실행
type copy
action 긴급 프롬프트 내용
class urgent-button
```
---

## 🎭 7단계: 완전 통합 워크플로우

**학생**: "모든 걸 합쳐서 실제로 쓸 수 있는 완전한 시스템을 만들고 싶어요!"

**파인만**: "훌륭한 아이디어야! **실전 마스터 대시보드**를 만들어보자!"

### 🏗️ AI 프롬프트 마스터 대시보드

````markdown
# 🎯 AI 프롬프트 마스터 대시보드

> 📅 오늘 날짜: <% tp.date.now("YYYY년 MM월 DD일") %>
> ⏰ 현재 시간: <% tp.date.now("HH:mm") %>
> 👤 작업자: [이름]

---

## 🚀 빠른 실행 패널

```button
name 🔥 긴급 프롬프트
type copy
action 당신은 해당 분야 전문가입니다. 다음 문제를 신속하게 해결해주세요:

**문제:** [여기에 문제를 입력하세요]

**요구사항:**
1. 즉시 실행 가능한 단계별 해결 방안
2. 각 단계별 구체적인 실행 방법
3. 예상되는 결과와 주의사항
4. 대안 솔루션 (플랜 B)
5. 리스크와 대응 방안

**시간 제약:** 긴급 - 최대한 빠른 답변 필요
**우선순위:** 실용성 > 완벽성

class urgent-button
```

```button
name 📝 일반 글쓰기
type command
action Templater: Open insert Template modal
class prompt-button
```

```button  
name 🧠 창의적 아이디어
type copy
action 창의적 사고를 위한 다각도 프롬프트:

**주제:** [여기에 주제를 입력하세요]

다음 5가지 방법으로 혁신적 아이디어를 제시해주세요:

1. **브레인스토밍:** 제약 없이 자유롭게 10가지 아이디어
2. **역발상:** 반대 관점에서 생각하면?
3. **융합법:** 전혀 다른 3개 분야와 연결하기
4. **미래 예측:** 10년 후 어떻게 변화할까?
5. **문제 재정의:** 진짜 해결해야 할 문제는 무엇인가?

각 방법별로 구체적이고 실행 가능한 아이디어를 제시하고, 가장 유망한 3가지를 선정해 상세히 설명해주세요.
class fancy-button
```

```button
name 🔍 리서치 도우미
type copy
action 전문 리서처로서 다음 주제를 깊이 있게 조사해주세요:

**주제:** [조사할 주제 입력]

**조사 범위:**
1. 현황 분석 (최신 데이터와 통계)
2. 주요 트렌드 (최근 3년간 변화)
3. 핵심 플레이어 (상위 5개 기업/인물)
4. 기술 동향 (혁신 사례)
5. 시장 전망 (향후 5년 예측)
6. 기회 요인 (블루오션)
7. 위험 요인 (레드 플래그)

각 항목마다 신뢰할 수 있는 출처를 명시하고, 데이터 기반으로 인사이트를 도출해주세요.
color blue
```

---

## 🎨 프로젝트별 전용 버튼

### 📚 콘텐츠 제작

```button
name 📖 블로그 시리즈 기획
type copy
action 블로그 시리즈 종합 기획안을 작성해주세요:

**시리즈 주제:** [메인 주제 입력]
**타겟 독자:** [구체적으로 입력]
**시리즈 목표:** [달성하고자 하는 것]

**요구사항:**
1. 시리즈 전체 구조 (5-10편)
2. 각 편별 제목과 핵심 주제
3. 편집 캘린더 (발행 일정)
4. 편간 연결 전략
5. SEO 키워드 맵
6. 독자 참여 유도 방안
7. 성과 측정 지표

각 편이 독립적이면서도 전체적으로 하나의 스토리를 만드는 구조로 설계해주세요.
color blue
```

```button
name 🎬 유튜브 콘텐츠 기획  
type copy
action 유튜브 영상 기획서를 작성해주세요:

**영상 주제:** [구체적인 주제 입력]
**채널 컨셉:** [채널의 전반적 방향성]
**타겟 시청자:** [연령대, 관심사]

**기획 요소:**
1. 훅 (첫 15초) - 시청자 낚시
2. 영상 구조 (8-15분 기준)
3. 타임스탬프 설계
4. 비주얼 요소 아이디어
5. 썸네일 문구 3가지 + 디자인 컨셉
6. 제목 후보 10개 (CTR 최적화)
7. 설명란 작성 (SEO 키워드 포함)
8. 태그 30개
9. 카드/엔드스크린 전략
10. 댓글 유도 질문

알고리즘 최적화와 시청 지속률을 고려해 설계해주세요.
color red
```

```button
name 📱 SNS 캠페인 기획
type copy
action 통합 SNS 마케팅 캠페인을 기획해주세요:

**캠페인 목표:** [인지도/판매/참여 등]
**타겟 오디언스:** [상세 페르소나]
**기간:** [시작-종료일]
**예산:** [있다면 입력]

**플랫폼별 전략:**

**Instagram:**
- 피드 포스트 컨셉 (주 3회)
- 릴스 아이디어 5개
- 스토리 시리즈
- 해시태그 전략

**Facebook:**
- 포스트 타입별 믹스
- 광고 타겟팅 전략
- 그룹 활용 방안

**Twitter:**
- 트윗 스레드 주제
- 참여 유도 전략
- 트렌드 활용법

**LinkedIn:** (B2B인 경우)
- 전문성 포지셔닝
- 인사이트 콘텐츠

**통합 요소:**
- 크로스 프로모션 전략
- 일관된 메시지/비주얼
- 참여 유도 이벤트
- KPI 및 측정 방법

주차별 콘텐츠 캘린더와 함께 제시해주세요.
color purple
```

---

### 💼 비즈니스 전략

```button
name 📊 시장 분석 프롬프트
type copy
action 다음 시장/제품에 대한 종합적인 비즈니스 분석을 수행해주세요:

**분석 대상:** [시장/제품명을 구체적으로 입력]

**분석 프레임워크:**

**1. 시장 환경 분석**
- 시장 규모 (TAM, SAM, SOM)
- 성장률 (CAGR)
- 시장 성숙도 단계
- 규제 환경

**2. 경쟁 구도**
- 주요 경쟁사 5개 분석
  * 시장 점유율
  * 강점/약점
  * 가격 전략
  * 차별화 포인트
- 경쟁 강도 (Porter's 5 Forces)

**3. 고객 분석**
- 타겟 세그먼트 3-5개
- 페르소나별 니즈
- 구매 여정 (Customer Journey)
- 주요 Pain Points

**4. 트렌드 & 기회**
- 메가 트렌드 (기술, 사회, 경제)
- 블루오션 영역
- 시장 기회 요인
- 첫 진입자/후발 주자 전략

**5. 리스크 & 진입 장벽**
- 주요 리스크 요인
- 진입 장벽
- 규제 리스크
- 기술적 난이도

**6. 전략 제언**
- Go-to-Market 전략
- 포지셔닝 제안
- 마케팅 믹스 (4P)
- 수익 모델 아이디어
- 로드맵 (3년)

각 섹션에 데이터와 구체적인 사례를 포함하고, 실행 가능한 인사이트를 제공해주세요.
color green
```

```button
name 💡 비즈니스 모델 검증
type copy  
action 린 스타트업 방식으로 비즈니스 아이디어를 검증해주세요:

**아이디어:** [구체적으로 한 문장으로 입력]

**검증 프레임워크:**

**1. 문제 검증**
- 해결하려는 문제가 진짜 존재하는가?
- 얼마나 심각한 문제인가? (10점 만점)
- 현재 사람들은 어떻게 해결하고 있는가?
- 기존 솔루션의 한계는?

**2. 시장 검증**
- 충분한 시장 규모가 있는가?
- 타겟 고객이 명확한가?
- 지불 의사가 있는가?
- 접근 가능한 시장인가?

**3. 솔루션 검증**
- 우리 솔루션이 최선인가?
- 기술적으로 실현 가능한가?
- 확장 가능한가?
- 방어 가능한가? (경쟁 진입 장벽)

**4. 비즈니스 모델**
- 수익 창출 방법은?
- 단가 × 예상 고객 수 = ?
- CAC (고객 획득 비용)
- LTV (고객 생애 가치)
- LTV/CAC 비율은?

**5. 팀 & 실행**
- 우리 팀이 최적인가?
- 핵심 역량은?
- 부족한 부분은?
- MVP는 무엇인가?

**6. 경쟁 우위**
- 10X 더 나은 점은?
- 독특한 인사이트는?
- 네트워크 효과가 있는가?
- 락인 효과가 있는가?

**7. 리스크 분석**
- 실패 가능성 높은 가정은?
- 최악의 시나리오는?
- 피봇 옵션은?

**검증 액션 플랜:**
- 지금 당장 테스트할 수 있는 것 5가지
- 예상 비용과 시간
- 검증 기준 (성공/실패 지표)

각 항목에 대해 비판적으로 분석하고, 추가 검증이 필요한 위험 영역을 강조해주세요.
color orange
```

```button
name 🎯 SWOT & 전략 수립
type copy
action 비즈니스/프로젝트에 대한 SWOT 분석 및 전략을 수립해주세요:

**분석 대상:** [기업/프로젝트명]
**산업:** [산업 분야]
**현재 상황:** [간단히 설명]

**SWOT 분석:**

**Strengths (강점)**
- 내부 역량
- 독특한 자산
- 경쟁 우위

**Weaknesses (약점)**
- 내부 한계
- 개선 필요 영역
- 경쟁 열위

**Opportunities (기회)**
- 외부 환경 기회
- 시장 트렌드
- 미래 가능성

**Threats (위협)**
- 외부 환경 위협
- 경쟁 압력
- 리스크 요인

**전략 수립 (TOWS 매트릭스):**

1. **SO 전략** (강점 × 기회)
   - 강점을 활용해 기회 포착

2. **ST 전략** (강점 × 위협)
   - 강점으로 위협 회피/극복

3. **WO 전략** (약점 × 기회)
   - 약점 보완해 기회 활용

4. **WT 전략** (약점 × 위협)
   - 약점 최소화, 위협 회피

**우선순위 액션 플랜:**
- 즉시 실행 (Quick Wins)
- 단기 전략 (3-6개월)
- 중기 전략 (6-12개월)
- 장기 전략 (1-3년)

각 전략에 대해 구체적인 실행 방안과 예상 효과를 제시해주세요.
color teal
```

---

### 🎓 학습 & 연구

```button
name 📚 학습 계획 수립
type copy
action 체계적인 학습 로드맵을 작성해주세요:

**학습 주제:** [구체적인 주제 입력]
**현재 수준:** [초급/중급/고급]
**목표:** [달성하고자 하는 것]
**가용 시간:** [주당 시간]
**학습 기간:** [목표 기간]

**학습 로드맵:**

**Phase 1: 기초 (Foundation)**
- 핵심 개념 10가지
- 필수 용어 정리
- 추천 입문 자료
- 실습 프로젝트 (easy)

**Phase 2: 심화 (Intermediate)**
- 고급 개념
- 실전 기술
- 추천 심화 자료
- 실습 프로젝트 (medium)

**Phase 3: 전문가 (Advanced)**
- 전문 영역
- 최신 트렌드
- 추천 전문 자료
- 포트폴리오 프로젝트

**학습 방법론:**
- 효과적인 학습 전략
- 실습 vs 이론 비율
- 복습 주기
- 평가 방법

**리소스 큐레이션:**
- 책 추천 (5권)
- 온라인 코스 (3개)
- 유튜브 채널 (5개)
- 커뮤니티/포럼
- 실습 플랫폼

**마일스톤 체크포인트:**
- 주차별 학습 목표
- 성취도 측정 기준
- 프로젝트 마감일

페이스 조절과 동기 부여 팁도 함께 제공해주세요.
color indigo
```

```button
name 🔬 논문 작성 도우미
type copy
action 학술 논문/리포트 작성을 도와주세요:

**논문 주제:** [구체적으로 입력]
**분야:** [전공 분야]
**유형:** [실험/이론/리뷰/사례연구]
**분량:** [페이지 수]

**논문 구조:**

**1. Title (제목)**
- 임팩트 있는 제목 5개 제안
- 부제목 제안

**2. Abstract (초록)**
- 연구 배경
- 연구 목적
- 방법론
- 주요 발견
- 결론 및 시사점
(150-250 단어)

**3. Introduction (서론)**
- 연구 배경 및 동기
- 문제 제기
- 연구 목적 및 필요성
- 연구 범위 및 한계
- 논문 구조 소개

**4. Literature Review (선행 연구)**
- 주요 이론적 배경
- 선행 연구 분류
- 연구 갭(Gap) 식별
- 본 연구의 차별점

**5. Methodology (연구 방법)**
- 연구 설계
- 데이터 수집 방법
- 분석 방법
- 타당성/신뢰성 확보

**6. Results (결과)**
- 주요 발견 사항
- 데이터 분석 결과
- 시각화 제안 (표/그래프)

**7. Discussion (논의)**
- 결과 해석
- 이론적 시사점
- 실무적 시사점
- 선행 연구와 비교

**8. Conclusion (결론)**
- 연구 요약
- 기여도
- 한계점
- 향후 연구 제안

**9. References (참고 문헌)**
- 핵심 참고 문헌 20개 제안

**추가 조언:**
- 학술적 글쓰기 팁
- 흔한 실수 피하기
- 리뷰 대응 전략

APA/MLA 등 필요한 인용 스타일을 지정해주세요.
color violet
```

---

### 🎨 창의적 작업

```button
name 🎭 스토리텔링 도우미
type copy
action 매력적인 스토리를 만들어주세요:

**장르:** [판타지/SF/로맨스/스릴러/...]
**길이:** [단편/중편/장편]
**타겟 독자:** [연령대, 취향]

**스토리 요소:**

**1. 전제 (Premise)**
- 하이 컨셉 (한 줄 요약)
- 로그라인

**2. 세계관 (World Building)**
- 시공간 배경
- 세계관 룰
- 문화/사회 구조

**3. 캐릭터 (Characters)**
- 주인공 (Protagonist)
  * 외적 목표
  * 내적 욕구
  * 치명적 결함
  * 캐릭터 아크
- 조력자 (Ally)
- 적대자 (Antagonist)
- 멘토 (Mentor)

**4. 플롯 (Plot Structure)**
- Act 1: 설정
  * 일상 세계
  * 사건 촉발
  * 모험 거부
  * 문턱 넘기
- Act 2: 대립
  * 시험과 시련
  * 최대 위기
  * 죽음과 재생
- Act 3: 해결
  * 클라이맥스
  * 해결
  * 새로운 일상

**5. 테마 (Theme)**
- 중심 메시지
- 상징과 모티프

**6. 갈등 (Conflict)**
- 외적 갈등
- 내적 갈등
- 대인 갈등

**7. 문체 (Style)**
- 서술 시점
- 톤앤매너
- 독특한 보이스

**장면 설계:**
- 핵심 장면 10개
- 각 장면의 목적
- 감정 곡선

**훅 포인트:**
- 오프닝 훅
- 챕터별 클리프행어
- 엔딩 트위스트

독자가 몰입할 수 있도록 감정적 울림이 있는 스토리를 설계해주세요.
color pink
```

```button
name 🎨 네이밍/슬로건 생성
type copy
action 강력한 브랜드 네이밍과 슬로건을 만들어주세요:

**브랜드/제품:** [설명]
**업종:** [산업]
**타겟:** [고객층]
**핵심 가치:** [3가지]
**경쟁사:** [주요 경쟁사]

**네이밍 생성:**

**1. 설명형 (Descriptive)**
- 기능/특징 직접 표현
- 예시 10개

**2. 창작형 (Invented)**
- 새로운 조어
- 발음하기 쉽고 기억하기 쉬운
- 예시 10개

**3. 복합형 (Compound)**
- 두 단어 결합
- 예시 10개

**4. 은유형 (Metaphorical)**
- 상징적 의미
- 예시 10개

**5. 두문자어 (Acronym)**
- 약자 형식
- 예시 5개

**각 네이밍별:**
- 의미 설명
- 장단점
- 도메인 가능성
- 상표 등록 가능성
- 글로벌 확장성

**슬로건/태그라인:**

**카테고리별 20개:**
- 기능 강조형
- 감성 소구형
- 라이프스타일형
- 도전/혁신형
- 신뢰/안정형

**슬로건 평가 기준:**
- 기억하기 쉬운가?
- 브랜드 가치 전달되는가?
- 차별화되는가?
- 확장 가능한가?

**최종 추천:**
- Top 3 네이밍
- Top 3 슬로건
- 조합 제안

각 제안에 대한 rationale(근거)를 함께 제공해주세요.
color rose
```

---

## 🔧 시스템 관리 & 유틸리티

```button
name 📊 프롬프트 사용 통계
type append
action Daily_Prompt_Log.md
template 
---
날짜: <% tp.date.now("YYYY-MM-DD HH:mm") %>
프롬프트: [사용한 프롬프트명]
결과: [만족도 1-5]
개선점: [메모]
---
color gray
```

```button
name 💾 프롬프트 라이브러리 백업
type command
action Obsidian Git: Commit and push
color green
```

```button
name 📤 PDF 내보내기
type command
action Export to PDF
color blue
```

```button
name 🔄 템플릿 새로고침
type command
action Templater: Open insert Template modal
color purple
```

---

## 📈 프로젝트 트래킹

### 진행 중인 프로젝트

- [ ] 프로젝트 1: [이름]
  - 시작일: 
  - 마감일: 
  - 진행률: [ ] 0% [ ] 25% [ ] 50% [ ] 75% [ ] 100%
  
- [ ] 프로젝트 2: [이름]
  - 시작일: 
  - 마감일: 
  - 진행률: [ ] 0% [ ] 25% [ ] 50% [ ] 75% [ ] 100%

### 이번 주 목표

- [ ] 
- [ ] 
- [ ] 

---

## 🎯 자주 쓰는 프롬프트 템플릿

### 빠른 메모

```button
name 💭 빠른 아이디어 캡처
type create
action Ideas/<%tp.date.now("YYYY-MM-DD")%>_Idea.md
template Quick_Idea_Template
color yellow
```

### 회의록

```button
name 📝 회의록 생성
type create
action Meetings/<%tp.date.now("YYYY-MM-DD")%>_Meeting.md
template Meeting_Notes_Template
color blue
```

### 일일 저널

```button
name 📔 오늘의 저널
type create
action Journal/<%tp.date.now("YYYY-MM-DD")%>.md
template Daily_Journal_Template
color purple
```

---

## 🌟 프로 팁

> **💡 버튼 단축키 설정하기**
> Settings → Hotkeys → Buttons 검색 → 자주 쓰는 버튼에 단축키 할당

> **🎨 테마별 버튼 컬렉션**
> 프로젝트 유형별로 버튼 세트를 미리 만들어두고 재사용

> **📊 성과 추적**
> 프롬프트 사용 후 결과를 로깅하여 효과적인 패턴 분석

> **🔄 지속적 개선**
> 일주일에 한 번씩 사용한 프롬프트 리뷰하고 개선

---

## 🎓 학습 리소스

### 추천 프롬프트 엔지니어링 자료
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Library](https://docs.anthropic.com/claude/prompt-library)
- [Learn Prompting](https://learnprompting.org/)

### 옵시디언 커뮤니티
- [Obsidian Forum](https://forum.obsidian.md/)
- [r/ObsidianMD](https://www.reddit.com/r/ObsidianMD/)

---

**마지막 업데이트:** <% tp.date.now("YYYY-MM-DD") %>
**버전:** 1.0

````
# 🎯 AI 프롬프트 마스터 대시보드

> 📅 오늘 날짜: <% tp.date.now("YYYY년 MM월 DD일") %>
> ⏰ 현재 시간: <% tp.date.now("HH:mm") %>
> 👤 작업자: [이름]

---

## 🚀 빠른 실행 패널

```button
name 🔥 긴급 프롬프트
type copy
action 당신은 해당 분야 전문가입니다. 다음 문제를 신속하게 해결해주세요:

**문제:** [여기에 문제를 입력하세요]

**요구사항:**
1. 즉시 실행 가능한 단계별 해결 방안
2. 각 단계별 구체적인 실행 방법
3. 예상되는 결과와 주의사항
4. 대안 솔루션 (플랜 B)
5. 리스크와 대응 방안

**시간 제약:** 긴급 - 최대한 빠른 답변 필요
**우선순위:** 실용성 > 완벽성

class urgent-button
```

```button
name 📝 일반 글쓰기
type command
action Templater: Open insert Template modal
class prompt-button
```

```button  
name 🧠 창의적 아이디어
type copy
action 창의적 사고를 위한 다각도 프롬프트:

**주제:** [여기에 주제를 입력하세요]

다음 5가지 방법으로 혁신적 아이디어를 제시해주세요:

1. **브레인스토밍:** 제약 없이 자유롭게 10가지 아이디어
2. **역발상:** 반대 관점에서 생각하면?
3. **융합법:** 전혀 다른 3개 분야와 연결하기
4. **미래 예측:** 10년 후 어떻게 변화할까?
5. **문제 재정의:** 진짜 해결해야 할 문제는 무엇인가?

각 방법별로 구체적이고 실행 가능한 아이디어를 제시하고, 가장 유망한 3가지를 선정해 상세히 설명해주세요.
class fancy-button
```

```button
name 🔍 리서치 도우미
type copy
action 전문 리서처로서 다음 주제를 깊이 있게 조사해주세요:

**주제:** [조사할 주제 입력]

**조사 범위:**
1. 현황 분석 (최신 데이터와 통계)
2. 주요 트렌드 (최근 3년간 변화)
3. 핵심 플레이어 (상위 5개 기업/인물)
4. 기술 동향 (혁신 사례)
5. 시장 전망 (향후 5년 예측)
6. 기회 요인 (블루오션)
7. 위험 요인 (레드 플래그)

각 항목마다 신뢰할 수 있는 출처를 명시하고, 데이터 기반으로 인사이트를 도출해주세요.
color blue
```

---

## 🎨 프로젝트별 전용 버튼

### 📚 콘텐츠 제작

```button
name 📖 블로그 시리즈 기획
type copy
action 블로그 시리즈 종합 기획안을 작성해주세요:

**시리즈 주제:** [메인 주제 입력]
**타겟 독자:** [구체적으로 입력]
**시리즈 목표:** [달성하고자 하는 것]

**요구사항:**
1. 시리즈 전체 구조 (5-10편)
2. 각 편별 제목과 핵심 주제
3. 편집 캘린더 (발행 일정)
4. 편간 연결 전략
5. SEO 키워드 맵
6. 독자 참여 유도 방안
7. 성과 측정 지표

각 편이 독립적이면서도 전체적으로 하나의 스토리를 만드는 구조로 설계해주세요.
color blue
```

```button
name 🎬 유튜브 콘텐츠 기획  
type copy
action 유튜브 영상 기획서를 작성해주세요:

**영상 주제:** [구체적인 주제 입력]
**채널 컨셉:** [채널의 전반적 방향성]
**타겟 시청자:** [연령대, 관심사]

**기획 요소:**
1. 훅 (첫 15초) - 시청자 낚시
2. 영상 구조 (8-15분 기준)
3. 타임스탬프 설계
4. 비주얼 요소 아이디어
5. 썸네일 문구 3가지 + 디자인 컨셉
6. 제목 후보 10개 (CTR 최적화)
7. 설명란 작성 (SEO 키워드 포함)
8. 태그 30개
9. 카드/엔드스크린 전략
10. 댓글 유도 질문

알고리즘 최적화와 시청 지속률을 고려해 설계해주세요.
color red
```

```button
name 📱 SNS 캠페인 기획
type copy
action 통합 SNS 마케팅 캠페인을 기획해주세요:

**캠페인 목표:** [인지도/판매/참여 등]
**타겟 오디언스:** [상세 페르소나]
**기간:** [시작-종료일]
**예산:** [있다면 입력]

**플랫폼별 전략:**

**Instagram:**
- 피드 포스트 컨셉 (주 3회)
- 릴스 아이디어 5개
- 스토리 시리즈
- 해시태그 전략

**Facebook:**
- 포스트 타입별 믹스
- 광고 타겟팅 전략
- 그룹 활용 방안

**Twitter:**
- 트윗 스레드 주제
- 참여 유도 전략
- 트렌드 활용법

**LinkedIn:** (B2B인 경우)
- 전문성 포지셔닝
- 인사이트 콘텐츠

**통합 요소:**
- 크로스 프로모션 전략
- 일관된 메시지/비주얼
- 참여 유도 이벤트
- KPI 및 측정 방법

주차별 콘텐츠 캘린더와 함께 제시해주세요.
color purple
```

---

### 💼 비즈니스 전략

```button
name 📊 시장 분석 프롬프트
type copy
action 다음 시장/제품에 대한 종합적인 비즈니스 분석을 수행해주세요:

**분석 대상:** [시장/제품명을 구체적으로 입력]

**분석 프레임워크:**

**1. 시장 환경 분석**
- 시장 규모 (TAM, SAM, SOM)
- 성장률 (CAGR)
- 시장 성숙도 단계
- 규제 환경

**2. 경쟁 구도**
- 주요 경쟁사 5개 분석
  * 시장 점유율
  * 강점/약점
  * 가격 전략
  * 차별화 포인트
- 경쟁 강도 (Porter's 5 Forces)

**3. 고객 분석**
- 타겟 세그먼트 3-5개
- 페르소나별 니즈
- 구매 여정 (Customer Journey)
- 주요 Pain Points

**4. 트렌드 & 기회**
- 메가 트렌드 (기술, 사회, 경제)
- 블루오션 영역
- 시장 기회 요인
- 첫 진입자/후발 주자 전략

**5. 리스크 & 진입 장벽**
- 주요 리스크 요인
- 진입 장벽
- 규제 리스크
- 기술적 난이도

**6. 전략 제언**
- Go-to-Market 전략
- 포지셔닝 제안
- 마케팅 믹스 (4P)
- 수익 모델 아이디어
- 로드맵 (3년)

각 섹션에 데이터와 구체적인 사례를 포함하고, 실행 가능한 인사이트를 제공해주세요.
color green
```

```button
name 💡 비즈니스 모델 검증
type copy  
action 린 스타트업 방식으로 비즈니스 아이디어를 검증해주세요:

**아이디어:** [구체적으로 한 문장으로 입력]

**검증 프레임워크:**

**1. 문제 검증**
- 해결하려는 문제가 진짜 존재하는가?
- 얼마나 심각한 문제인가? (10점 만점)
- 현재 사람들은 어떻게 해결하고 있는가?
- 기존 솔루션의 한계는?

**2. 시장 검증**
- 충분한 시장 규모가 있는가?
- 타겟 고객이 명확한가?
- 지불 의사가 있는가?
- 접근 가능한 시장인가?

**3. 솔루션 검증**
- 우리 솔루션이 최선인가?
- 기술적으로 실현 가능한가?
- 확장 가능한가?
- 방어 가능한가? (경쟁 진입 장벽)

**4. 비즈니스 모델**
- 수익 창출 방법은?
- 단가 × 예상 고객 수 = ?
- CAC (고객 획득 비용)
- LTV (고객 생애 가치)
- LTV/CAC 비율은?

**5. 팀 & 실행**
- 우리 팀이 최적인가?
- 핵심 역량은?
- 부족한 부분은?
- MVP는 무엇인가?

**6. 경쟁 우위**
- 10X 더 나은 점은?
- 독특한 인사이트는?
- 네트워크 효과가 있는가?
- 락인 효과가 있는가?

**7. 리스크 분석**
- 실패 가능성 높은 가정은?
- 최악의 시나리오는?
- 피봇 옵션은?

**검증 액션 플랜:**
- 지금 당장 테스트할 수 있는 것 5가지
- 예상 비용과 시간
- 검증 기준 (성공/실패 지표)

각 항목에 대해 비판적으로 분석하고, 추가 검증이 필요한 위험 영역을 강조해주세요.
color orange
```

```button
name 🎯 SWOT & 전략 수립
type copy
action 비즈니스/프로젝트에 대한 SWOT 분석 및 전략을 수립해주세요:

**분석 대상:** [기업/프로젝트명]
**산업:** [산업 분야]
**현재 상황:** [간단히 설명]

**SWOT 분석:**

**Strengths (강점)**
- 내부 역량
- 독특한 자산
- 경쟁 우위

**Weaknesses (약점)**
- 내부 한계
- 개선 필요 영역
- 경쟁 열위

**Opportunities (기회)**
- 외부 환경 기회
- 시장 트렌드
- 미래 가능성

**Threats (위협)**
- 외부 환경 위협
- 경쟁 압력
- 리스크 요인

**전략 수립 (TOWS 매트릭스):**

1. **SO 전략** (강점 × 기회)
   - 강점을 활용해 기회 포착

2. **ST 전략** (강점 × 위협)
   - 강점으로 위협 회피/극복

3. **WO 전략** (약점 × 기회)
   - 약점 보완해 기회 활용

4. **WT 전략** (약점 × 위협)
   - 약점 최소화, 위협 회피

**우선순위 액션 플랜:**
- 즉시 실행 (Quick Wins)
- 단기 전략 (3-6개월)
- 중기 전략 (6-12개월)
- 장기 전략 (1-3년)

각 전략에 대해 구체적인 실행 방안과 예상 효과를 제시해주세요.
color teal
```

---

### 🎓 학습 & 연구

```button
name 📚 학습 계획 수립
type copy
action 체계적인 학습 로드맵을 작성해주세요:

**학습 주제:** [구체적인 주제 입력]
**현재 수준:** [초급/중급/고급]
**목표:** [달성하고자 하는 것]
**가용 시간:** [주당 시간]
**학습 기간:** [목표 기간]

**학습 로드맵:**

**Phase 1: 기초 (Foundation)**
- 핵심 개념 10가지
- 필수 용어 정리
- 추천 입문 자료
- 실습 프로젝트 (easy)

**Phase 2: 심화 (Intermediate)**
- 고급 개념
- 실전 기술
- 추천 심화 자료
- 실습 프로젝트 (medium)

**Phase 3: 전문가 (Advanced)**
- 전문 영역
- 최신 트렌드
- 추천 전문 자료
- 포트폴리오 프로젝트

**학습 방법론:**
- 효과적인 학습 전략
- 실습 vs 이론 비율
- 복습 주기
- 평가 방법

**리소스 큐레이션:**
- 책 추천 (5권)
- 온라인 코스 (3개)
- 유튜브 채널 (5개)
- 커뮤니티/포럼
- 실습 플랫폼

**마일스톤 체크포인트:**
- 주차별 학습 목표
- 성취도 측정 기준
- 프로젝트 마감일

페이스 조절과 동기 부여 팁도 함께 제공해주세요.
color indigo
```

```button
name 🔬 논문 작성 도우미
type copy
action 학술 논문/리포트 작성을 도와주세요:

**논문 주제:** [구체적으로 입력]
**분야:** [전공 분야]
**유형:** [실험/이론/리뷰/사례연구]
**분량:** [페이지 수]

**논문 구조:**

**1. Title (제목)**
- 임팩트 있는 제목 5개 제안
- 부제목 제안

**2. Abstract (초록)**
- 연구 배경
- 연구 목적
- 방법론
- 주요 발견
- 결론 및 시사점
(150-250 단어)

**3. Introduction (서론)**
- 연구 배경 및 동기
- 문제 제기
- 연구 목적 및 필요성
- 연구 범위 및 한계
- 논문 구조 소개

**4. Literature Review (선행 연구)**
- 주요 이론적 배경
- 선행 연구 분류
- 연구 갭(Gap) 식별
- 본 연구의 차별점

**5. Methodology (연구 방법)**
- 연구 설계
- 데이터 수집 방법
- 분석 방법
- 타당성/신뢰성 확보

**6. Results (결과)**
- 주요 발견 사항
- 데이터 분석 결과
- 시각화 제안 (표/그래프)

**7. Discussion (논의)**
- 결과 해석
- 이론적 시사점
- 실무적 시사점
- 선행 연구와 비교

**8. Conclusion (결론)**
- 연구 요약
- 기여도
- 한계점
- 향후 연구 제안

**9. References (참고 문헌)**
- 핵심 참고 문헌 20개 제안

**추가 조언:**
- 학술적 글쓰기 팁
- 흔한 실수 피하기
- 리뷰 대응 전략

APA/MLA 등 필요한 인용 스타일을 지정해주세요.
color violet
```

---

### 🎨 창의적 작업

```button
name 🎭 스토리텔링 도우미
type copy
action 매력적인 스토리를 만들어주세요:

**장르:** [판타지/SF/로맨스/스릴러/...]
**길이:** [단편/중편/장편]
**타겟 독자:** [연령대, 취향]

**스토리 요소:**

**1. 전제 (Premise)**
- 하이 컨셉 (한 줄 요약)
- 로그라인

**2. 세계관 (World Building)**
- 시공간 배경
- 세계관 룰
- 문화/사회 구조

**3. 캐릭터 (Characters)**
- 주인공 (Protagonist)
  * 외적 목표
  * 내적 욕구
  * 치명적 결함
  * 캐릭터 아크
- 조력자 (Ally)
- 적대자 (Antagonist)
- 멘토 (Mentor)

**4. 플롯 (Plot Structure)**
- Act 1: 설정
  * 일상 세계
  * 사건 촉발
  * 모험 거부
  * 문턱 넘기
- Act 2: 대립
  * 시험과 시련
  * 최대 위기
  * 죽음과 재생
- Act 3: 해결
  * 클라이맥스
  * 해결
  * 새로운 일상

**5. 테마 (Theme)**
- 중심 메시지
- 상징과 모티프

**6. 갈등 (Conflict)**
- 외적 갈등
- 내적 갈등
- 대인 갈등

**7. 문체 (Style)**
- 서술 시점
- 톤앤매너
- 독특한 보이스

**장면 설계:**
- 핵심 장면 10개
- 각 장면의 목적
- 감정 곡선

**훅 포인트:**
- 오프닝 훅
- 챕터별 클리프행어
- 엔딩 트위스트

독자가 몰입할 수 있도록 감정적 울림이 있는 스토리를 설계해주세요.
color pink
```

```button
name 🎨 네이밍/슬로건 생성
type copy
action 강력한 브랜드 네이밍과 슬로건을 만들어주세요:

**브랜드/제품:** [설명]
**업종:** [산업]
**타겟:** [고객층]
**핵심 가치:** [3가지]
**경쟁사:** [주요 경쟁사]

**네이밍 생성:**

**1. 설명형 (Descriptive)**
- 기능/특징 직접 표현
- 예시 10개

**2. 창작형 (Invented)**
- 새로운 조어
- 발음하기 쉽고 기억하기 쉬운
- 예시 10개

**3. 복합형 (Compound)**
- 두 단어 결합
- 예시 10개

**4. 은유형 (Metaphorical)**
- 상징적 의미
- 예시 10개

**5. 두문자어 (Acronym)**
- 약자 형식
- 예시 5개

**각 네이밍별:**
- 의미 설명
- 장단점
- 도메인 가능성
- 상표 등록 가능성
- 글로벌 확장성

**슬로건/태그라인:**

**카테고리별 20개:**
- 기능 강조형
- 감성 소구형
- 라이프스타일형
- 도전/혁신형
- 신뢰/안정형

**슬로건 평가 기준:**
- 기억하기 쉬운가?
- 브랜드 가치 전달되는가?
- 차별화되는가?
- 확장 가능한가?

**최종 추천:**
- Top 3 네이밍
- Top 3 슬로건
- 조합 제안

각 제안에 대한 rationale(근거)를 함께 제공해주세요.
color rose
```

---

## 🔧 시스템 관리 & 유틸리티

```button
name 📊 프롬프트 사용 통계
type append
action Daily_Prompt_Log.md
template 
---
날짜: <% tp.date.now("YYYY-MM-DD HH:mm") %>
프롬프트: [사용한 프롬프트명]
결과: [만족도 1-5]
개선점: [메모]
---
color gray
```

```button
name 💾 프롬프트 라이브러리 백업
type command
action Obsidian Git: Commit and push
color green
```

```button
name 📤 PDF 내보내기
type command
action Export to PDF
color blue
```

```button
name 🔄 템플릿 새로고침
type command
action Templater: Open insert Template modal
color purple
```

---

## 📈 프로젝트 트래킹

### 진행 중인 프로젝트

- [ ] 프로젝트 1: [이름]
  - 시작일: 
  - 마감일: 
  - 진행률: [ ] 0% [ ] 25% [ ] 50% [ ] 75% [ ] 100%
  
- [ ] 프로젝트 2: [이름]
  - 시작일: 
  - 마감일: 
  - 진행률: [ ] 0% [ ] 25% [ ] 50% [ ] 75% [ ] 100%

### 이번 주 목표

- [ ] 
- [ ] 
- [ ] 

---

## 🎯 자주 쓰는 프롬프트 템플릿

### 빠른 메모

```button
name 💭 빠른 아이디어 캡처
type create
action Ideas/<%tp.date.now("YYYY-MM-DD")%>_Idea.md
template Quick_Idea_Template
color yellow
```

### 회의록

```button
name 📝 회의록 생성
type create
action Meetings/<%tp.date.now("YYYY-MM-DD")%>_Meeting.md
template Meeting_Notes_Template
color blue
```

### 일일 저널

```button
name 📔 오늘의 저널
type create
action Journal/<%tp.date.now("YYYY-MM-DD")%>.md
template Daily_Journal_Template
color purple
```

---

## 🌟 프로 팁

> **💡 버튼 단축키 설정하기**
> Settings → Hotkeys → Buttons 검색 → 자주 쓰는 버튼에 단축키 할당

> **🎨 테마별 버튼 컬렉션**
> 프로젝트 유형별로 버튼 세트를 미리 만들어두고 재사용

> **📊 성과 추적**
> 프롬프트 사용 후 결과를 로깅하여 효과적인 패턴 분석

> **🔄 지속적 개선**
> 일주일에 한 번씩 사용한 프롬프트 리뷰하고 개선

---

## 🎓 학습 리소스

### 추천 프롬프트 엔지니어링 자료
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Library](https://docs.anthropic.com/claude/prompt-library)
- [Learn Prompting](https://learnprompting.org/)

### 옵시디언 커뮤니티
- [Obsidian Forum](https://forum.obsidian.md/)
- [r/ObsidianMD](https://www.reddit.com/r/ObsidianMD/)

---

**마지막 업데이트:** <% tp.date.now("YYYY-MM-DD") %>
**버전:** 1.0
---

## 🎊 마무리: 파인만 교수의 마지막 조언

**파인만**: "자, 이제 정말 마지막 비밀을 알려줄게!"

**학생**: "비밀이요?!"

**파인만**: "응! 버튼은 사실 **실험**이야. 처음엔 완벽하지 않을 거야. 하지만 계속 사용하면서 개선해나가는 거지!"

### 🧪 실험적 개선 방법

**1. 사용 패턴 관찰**
- 어떤 버튼을 가장 많이 쓰는가?
- 어떤 버튼은 거의 안 쓰는가?
- 왜 그런가?

**2. 지속적 개선**
```markdown
주간 리뷰 체크리스트:
- [ ] 가장 유용했던 프롬프트 3개
- [ ] 개선이 필요한 프롬프트 3개
- [ ] 새로 추가할 프롬프트 아이디어
- [ ] 삭제할 프롬프트
```

**3. 버전 관리**
```markdown
## 변경 이력

### v1.2 (2024-03-15)
- 블로그 프롬프트 개선: SEO 섹션 강화
- 새 버튼 추가: 유튜브 쇼츠 기획

### v1.1 (2024-03-01)
- 첫 버전 생성
```

---

## 🎁 보너스: 파인만의 버튼 치트시트

### 📋 버튼 타입 완전 가이드

| 타입 | 용도 | action 예시 | 설명 |
|------|------|-------------|------|
| `link` | URL 열기 | `https://chat.openai.com` | 브라우저에서 링크 열기 |
| `command` | 명령 실행 | `Templater: Open insert Template modal` | 옵시디언 명령어 실행 |
| `copy` | 텍스트 복사 | `프롬프트 내용` | 클립보드에 복사 |
| `template` | 템플릿 삽입 | `Template_Name` | 현재 노트에 템플릿 삽입 |
| `prepend` | 파일 앞에 추가 | `Target_Note.md` | 파일 맨 위에 내용 추가 |
| `append` | 파일 뒤에 추가 | `Target_Note.md` | 파일 맨 아래에 내용 추가 |
| `create` | 새 파일 생성 | `Folder/New_Note.md` | 새 노트 파일 생성 |
| `replace` | 내용 교체 | 템플릿 이름 | 현재 내용을 템플릿으로 교체 |
| `text` | 텍스트 삽입 | `삽입할 텍스트` | 커서 위치에 텍스트 삽입 |

### 🌈 색상 옵션

```markdown
color blue    → 파란색 (신뢰, 차분함)
color red     → 빨간색 (긴급, 중요)
color green   → 초록색 (성공, 실행)
color yellow  → 노란색 (주의, 아이디어)
color orange  → 주황색 (따뜻함, 창의성)
color purple  → 보라색 (고급, 창의)
color pink    → 분홍색 (부드러움, 친근)
color gray    → 회색 (중립, 시스템)
```

### 🎯 실전 사용 팁

**1. 버튼 조합 패턴**
```markdown
<!-- 단계별 워크플로우 -->
Step 1: 준비 버튼 (copy - 프롬프트 복사)
Step 2: 실행 버튼 (link - AI 사이트 열기)
Step 3: 저장 버튼 (append - 결과 로깅)
```

**2. 조건부 실행**
```markdown
<!-- Templater와 결합 -->
```button
name 스마트 버튼
type command
action Templater: Open insert Template modal
templater-inline <%* 
  const choice = await tp.system.suggester(["A", "B"], ["a", "b"]);
  if(choice === "a") {
    // A 선택시 동작
  } else {
    // B 선택시 동작
  }
%>
```
```

**3. 동적 버튼 생성**
```markdown
<%* 
const projects = ["프로젝트1", "프로젝트2", "프로젝트3"];
for(let proj of projects) { 
-%>
```button
name <%= proj %> 열기
type link
action Projects/<%= proj %>.md
```
<%* } -%>
```

---

## 🚀 다음 단계로 나아가기

### 🔮 고급 기능 탐험

**1. Dataview 통합**
```markdown
## 이번 달 사용한 프롬프트

```dataview
TABLE 
  file.mtime as "사용일",
  category as "카테고리",
  rating as "만족도"
FROM "Prompts"
WHERE file.mtime >= date(now) - dur(30 days)
SORT file.mtime DESC
```
```

**2. QuickAdd 플러그인 연계**
- 더욱 강력한 매크로 기능
- 다단계 워크플로우 자동화

**3. API 연동**
- Make.com (Integromat)으로 외부 서비스 연결
- Zapier 통합으로 자동화 확장

---

## 💬 파인만의 마지막 한마디

**파인만**: "*학생의 어깨를 두드리며* 기억해! 최고의 도구는 **당신이 직접 만든 도구**야."

**학생**: "근데 교수님, 실패하면 어떡하죠?"

**파인만**: "*웃으며* 실패? 그건 '이 방법은 안 된다는 걸 배운 것'이지! 

토마스 에디슨이 뭐라고 했는지 알아?
'나는 실패한 게 아니라, 작동하지 않는 1만 가지 방법을 발견한 것이다.'

자, 이제 가서 실험해봐! 🧪✨"

**학생**: "감사합니다, 교수님! 이제 정말 자신감이 생겨요!"

**파인만**: "그래! 그리고 잊지 마:
1. **간단하게 시작하라** - 복잡한 건 나중에
2. **매일 조금씩 개선하라** - 완벽을 기다리지 마
3. **다른 사람과 공유하라** - 함께 배우는 게 더 빠르다
4. **즐겨라!** - 재미없으면 오래 못 가"

---

## 🌟 최종 체크리스트

시작하기 전에 확인하세요:

- [ ] 옵시디언 설치됨
- [ ] Templater 플러그인 설치 및 활성화
- [ ] Buttons 플러그인 설치 및 활성화
- [ ] Open Gate 플러그인 설치 및 활성화 (선택)
- [ ] 첫 번째 간단한 버튼 만들기 성공
- [ ] 첫 번째 프롬프트 템플릿 생성 성공
- [ ] CSS 스니펫 적용해보기 (선택)
- [ ] 나만의 워크플로우 구상하기

**준비 됐나요? 그럼 이제 시작입니다! 🎭✨**

---

*"복잡한 것을 단순하게, 단순한 것을 강력하게 - 그것이 진정한 마법입니다."* 

**- 리처드 파인만**

---

**이 가이드가 도움이 되었나요?**
- 개선 아이디어가 있다면 기록해두세요
- 새로운 프롬프트 패턴을 발견하면 추가하세요
- 커뮤니티와 공유하세요!

**행운을 빕니다, 미래의 프롬프트 마법사여! 🧙‍♂️✨**
