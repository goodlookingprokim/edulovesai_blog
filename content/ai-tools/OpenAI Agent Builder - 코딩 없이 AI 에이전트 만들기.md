---
title: OpenAI Agent Builder - 코딩 없이 AI 에이전트 만들기 (풍부한 예제 & 용어사전 포함)
created: 2025-10-07
last_modified: 2025-10-07
tags:
  - OpenAI/AgentBuilder
  - AI/노코드
  - AI/에이전트
  - 개발/자동화
  - 튜토리얼/초보자
status: 완료
type: 가이드
priority: high
video_source: https://www.youtube.com/watch?v=A0YHQlFctzU
share_link: https://share.note.sx/y3y5nthq#wD2WYh2gmizuMiGXF1I+QYoVMx5Aa6uAVPCmI3PZAUg
share_updated: 2025-10-07T11:21:31+09:00
---

# OpenAI Agent Builder - 코딩 없이 AI 에이전트 만들기

## 📋 목차
1. [[#📚 용어 단어장 - 시작 전에 알아두기]]
2. [[#혁명의 시작 - 코딩 없이 AI 만든다고]]
3. [[#Agent Builder가 뭔가요]]
4. [[#레고 블록처럼 쌓는 AI 에이전트]]
5. [[#크리스티나의 여행 에이전트 만들기 여정]]
6. [[#🌱 기초 예제 모음 (초보자용)]]
7. [[#🌿 중급 예제 모음 (실무 적용)]]
8. [[#🌳 고급 예제 모음 (심화 학습)]]
9. [[#위젯 스튜디오의 마법]]
10. [[#배포하고 세상에 공개하기]]
11. [[#💡 실습 프로젝트 아이디어]]
12. [[#핵심 정리]]

---

## 📚 용어 단어장 - 시작 전에 알아두기

> 💡 **이 섹션을 먼저 읽으면 본문이 훨씬 쉬워집니다!**

### 핵심 용어 (가나다 순)

<details>
<summary><b>Node (노드)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 레고 블록 하나하나
- **실생활 비유**: 공장의 작업대 하나
- **역할**: 특정 작업을 수행하는 단위
- **예시**: "Classifier Node는 사용자 질문을 분류하는 작업대예요"

**코드 없는 이해**:
```
노드 = 하나의 작업을 하는 블록
여러 노드를 연결 = 완전한 AI 시스템
```
</details>

<details>
<summary><b>Agent (에이전트)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 특정 업무를 맡은 AI 직원
- **실생활 비유**: 회사의 전문 상담원
- **역할**: 사용자 요청을 이해하고 답변 생성
- **예시**: "Flight Agent는 항공편 정보를 찾아주는 직원이에요"

**종류별 예시**:
```
Classifier Agent → 질문 분류 담당 (안내 데스크)
Flight Agent → 항공편 검색 담당 (항공권 담당자)
Itinerary Agent → 일정 작성 담당 (여행 플래너)
```
</details>

<details>
<summary><b>Workflow (워크플로우)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 일이 흘러가는 순서
- **실생활 비유**: 병원 진료 과정 (접수 → 대기 → 진료 → 수납)
- **역할**: 노드들이 연결된 전체 흐름
- **예시**: "사용자 질문 → 분류 → 적합한 에이전트 → 답변"

**시각화**:
```
Workflow = 시작점 → 여러 단계 → 최종 결과
           (입력)   (처리)      (출력)
```
</details>

<details>
<summary><b>Widget (위젯)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 예쁘게 꾸민 정보 박스
- **실생활 비유**: 선물 포장
- **역할**: 딱딱한 텍스트를 보기 좋게 변환
- **예시**: "단순 텍스트 → 색상, 아이콘, 레이아웃이 있는 카드"

**Before vs After**:
```
Before: Flight AA123, SFO-NRT, $850
After:
┌──────────────────┐
│ ✈️ Flight AA123  │
│ 🛫 SFO → 🛬 NRT  │
│ 💰 $850          │
└──────────────────┘
```
</details>

<details>
<summary><b>System Prompt (시스템 프롬프트)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: AI에게 주는 업무 지시서
- **실생활 비유**: 신입사원에게 주는 업무 매뉴얼
- **역할**: AI가 어떻게 행동할지 정의
- **예시**: "당신은 친절한 여행 상담원입니다. 항상 공항 코드를 사용하세요."

**작성 예시**:
```markdown
나쁜 예: "도와주세요"
좋은 예: "당신은 전문 여행 상담원입니다.
         - 항상 공항 코드 사용
         - 가격은 USD로 표시
         - 친절하고 전문적으로 답변"
```
</details>

<details>
<summary><b>Classifier (분류기)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 질문의 종류를 알아내는 탐정
- **실생활 비유**: 병원 접수처 (내과? 외과?)
- **역할**: 사용자 의도를 파악하여 적절한 경로로 안내
- **예시**: "항공편 질문인지, 일정 질문인지 구분"

**동작 원리**:
```
사용자: "도쿄 항공편 알려줘"
         ↓
Classifier: "이건 항공편 질문이네!"
         ↓
Flight Agent로 전달
```
</details>

<details>
<summary><b>If/Else (조건 분기)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 갈림길에서 방향 정하기
- **실생활 비유**: 교차로 신호등
- **역할**: 조건에 따라 다른 경로 선택
- **예시**: "항공편이면 → 왼쪽, 일정이면 → 오른쪽"

**간단한 비유**:
```
질문: "비 오나요?"
       ↓
   [IF/ELSE]
    ↙     ↘
  YES      NO
   ↓       ↓
 우산챙김  그냥감
```
</details>

<details>
<summary><b>SDK (Software Development Kit)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 프로그래머를 위한 조립 키트
- **실생활 비유**: 가구 조립 설명서 + 부품
- **역할**: 만든 에이전트를 코드로 변환
- **예시**: "Agent Builder → Python/JavaScript 코드"

**왜 필요한가?**:
```
Agent Builder: 노코드 (클릭으로 제작)
       ↓
   SDK Export
       ↓
실제 코드: 개발자가 커스터마이징 가능
```
</details>

<details>
<summary><b>Workflow ID</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 만든 에이전트의 주민등록번호
- **실생활 비유**: 택배 송장번호
- **역할**: 어디서든 내 에이전트 호출 가능
- **예시**: `wf_abc123xyz`로 어떤 앱에서든 사용

**사용 방법**:
```python
# 이 ID만 있으면 끝!
client.agents.run(
    workflow_id="wf_abc123xyz",
    input={"message": "도쿄 항공편"}
)
```
</details>

<details>
<summary><b>Web Search Tool (웹 검색 도구)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: AI가 구글 검색하는 능력
- **실생활 비유**: 사서가 자료를 찾아주는 것
- **역할**: 실시간 최신 정보 검색
- **예시**: "오늘 항공편 가격" 같은 실시간 데이터

**켜는 방법**:
```
Agent Node 설정
  ↓
Tools 섹션
  ↓
Web Search ✅ 체크
```
</details>

<details>
<summary><b>Run Preview (미리보기 실행)</b> - 클릭해서 자세히 보기</summary>

**쉬운 설명**: 시험 운전
- **실생활 비유**: 옷을 사기 전에 입어보기
- **역할**: 배포 전에 테스트
- **예시**: "도쿄 항공편 알려줘"를 입력해서 작동 확인

**사용 시점**:
```
노드 연결 완료
  ↓
Run Preview 클릭
  ↓
실제로 작동하는지 확인
  ↓
문제 발견 시 수정
  ↓
다시 Run Preview
```
</details>

### 자주 혼동하는 용어 비교

| 용어 A | vs | 용어 B | 차이점 |
|--------|------|--------|---------|
| **Node** | vs | **Agent** | Node는 블록, Agent는 그 중 AI 두뇌를 가진 특별한 블록 |
| **Workflow** | vs | **Agent** | Workflow는 전체 흐름, Agent는 그 안의 한 부분 |
| **Widget** | vs | **Text Output** | Widget은 예쁜 UI, Text는 평범한 글자 |
| **SDK Export** | vs | **Workflow ID** | SDK는 코드 파일, ID는 간단한 호출 번호 |
| **System Prompt** | vs | **User Input** | System은 AI 설정, User는 사용자 질문 |

### 초보자가 자주 묻는 질문

<details>
<summary>Q1: Node와 Agent는 같은 건가요?</summary>

**답변**: 비슷하지만 다릅니다!
- **Node**: 모든 블록을 통칭 (Start, If/Else, Agent 등)
- **Agent**: AI 두뇌가 들어간 특별한 Node

**비유**:
```
Node = 도구 전체 (망치, 톱, 드라이버)
Agent = 전동 공구 (특별히 똑똑한 도구)
```
</details>

<details>
<summary>Q2: Workflow ID와 SDK Export 중 뭘 써야 하나요?</summary>

**답변**: 대부분은 Workflow ID 추천!

**Workflow ID (추천)**:
```python
# 간단! 한 줄로 끝
client.agents.run(workflow_id="wf_123")
```

**SDK Export (고급 사용자)**:
```python
# 복잡, 수백 줄 코드
# 커스터마이징 필요할 때만
```

**선택 기준**:
- 빠르게 사용: Workflow ID ✅
- 세밀한 조정 필요: SDK Export
</details>

<details>
<summary>Q3: Widget을 꼭 써야 하나요?</summary>

**답변**: 필수는 아니지만 강력 추천!

**Without Widget**:
```
항공편: AA123
출발: SFO
도착: NRT
가격: $850
```
😐 밋밋함

**With Widget**:
```
┌─────────────────┐
│ ✈️ AA123        │
│ 🛫 SFO → 🛬 NRT │
│ 💰 $850         │
└─────────────────┘
```
😍 훨씬 좋음!
</details>

---

## 혁명의 시작 - 코딩 없이 AI 만든다고?

### 🎬 크리스티나의 등장

> OpenAI의 크리스티나가 화면에 나타났습니다.
> "안녕하세요, Agent Builder 101에 오신 것을 환영합니다!"

**그녀가 던진 폭탄 선언**:
```
"노드를 연결해서 코딩 없이 AI 에이전트를 만들 수 있어요!"
```

### 📖 5살 아이에게 설명한다면

> "Agent Builder는 **레고 블록**이에요!
>
> 코드를 한 줄도 쓰지 않고, 블록들을 연결만 하면
> 똑똑한 AI 로봇이 만들어집니다!
>
> 마치 레고로 집을 짓듯이,
> 노드(블록)를 연결해서 AI를 만드는 거예요!"

### 🎯 WHY → WHAT → HOW

#### WHY (왜 필요한가?)

**기존의 문제**:
```python
# 전통적인 방식 (개발자만 가능)
from openai import OpenAI

client = OpenAI()

def create_agent():
    # 100줄의 복잡한 코드...
    # 에러 처리...
    # 테스트...
    # 디버깅...
    pass

# 😰 일반인은 할 수 없음!
```

**Agent Builder의 해결책**:
```
블록 끌어다 놓기 → 연결하기 → 완성! ✨

# 😊 누구나 할 수 있음!
```

#### WHAT (무엇인가?)

Agent Builder는 **비주얼 AI 워크플로우 빌더**입니다:

```
Agent Builder =
  🧩 노드 시스템 (블록 연결) +
  🎨 비주얼 인터페이스 (드래그 & 드롭) +
  ✅ 내장 테스트 (자동 검증) +
  📦 즉시 배포 (코드 export)
```

#### HOW (어떻게 작동하나?)

```
1. 시작 노드 만들기
   ↓
2. 에이전트 노드 연결
   ↓
3. 조건 분기 추가
   ↓
4. 테스트 실행
   ↓
5. 배포! 🚀
```

---

## Agent Builder가 뭔가요?

### 🏗️ 건축가의 청사진

**실생활 비유**: 집 짓기

```
전통적 개발 (직접 벽돌 쌓기):
┌─────────────────────────┐
│ 개발자가 직접:          │
│ - 코드 작성            │
│ - 에러 처리            │
│ - 테스트              │
│ - 배포 설정           │
└─────────────────────────┘
⏱️  시간: 수일 ~ 수주
😰 난이도: 높음

Agent Builder (설계도 그리기):
┌─────────────────────────┐
│ 누구나:                 │
│ - 블록 연결 (클릭!)     │
│ - 자동 테스트          │
│ - 원클릭 배포          │
└─────────────────────────┘
⏱️  시간: 수분 ~ 수시간
😊 난이도: 쉬움
```

### 🧩 핵심 구성 요소

```
Agent Builder
│
├─ 1. 노드 시스템 🧩
│   - Start Node: 시작점
│   - Agent Node: AI 두뇌
│   - If/Else Node: 분기점
│   - Widget Node: 출력 형식
│
├─ 2. 비주얼 에디터 🎨
│   - 드래그 & 드롭
│   - 연결선으로 플로우
│   - 실시간 미리보기
│
├─ 3. 테스트 도구 ✅
│   - Run Preview
│   - 자동 검증
│   - 성능 측정
│
└─ 4. 배포 시스템 📦
    - SDK Export
    - API 엔드포인트
    - 원클릭 배포
```

---

## 레고 블록처럼 쌓는 AI 에이전트

### 🧱 노드의 종류

#### 1. Start Node (시작 노드)

**실생활 비유**: 공항 출발 게이트

```
┌─────────────────────┐
│   START NODE        │
│                     │
│ Input Variables:    │
│ - user_message      │
│ - session_id        │
│                     │
│ State Variables:    │
│ - context           │
└─────────────────────┘
         ↓
    여정 시작!
```

**역할**:
- 사용자 입력 받기
- 초기 상태 설정
- 워크플로우 시작점

#### 2. Agent Node (에이전트 노드)

**실생활 비유**: 전문가 상담사

```
┌─────────────────────────────┐
│   AGENT NODE                │
│                             │
│ System Prompt:              │
│ "You are a helpful travel   │
│  assistant..."              │
│                             │
│ Tools:                      │
│ - Web Search               │
│ - Database                 │
│                             │
│ Output Format:             │
│ - JSON / Text / Widget     │
└─────────────────────────────┘
         ↓
    똑똑한 답변!
```

**역할**:
- AI 모델 실행
- 도구 사용
- 응답 생성

#### 3. If/Else Node (조건 분기 노드)

**실생활 비유**: 교차로 신호등

```
         입력
          ↓
┌──────────────────┐
│   IF/ELSE NODE   │
│                  │
│ Condition:       │
│ classification   │
│ == "flight"?     │
└────┬────────┬────┘
     │        │
   YES       NO
     │        │
     ↓        ↓
  Flight   Itinerary
  Agent     Agent
```

**역할**:
- 조건에 따라 경로 분기
- 다른 에이전트로 라우팅
- 워크플로우 제어

#### 4. Widget Node (위젯 노드)

**실생활 비유**: 예쁜 포장지

```
일반 텍스트 출력:
┌─────────────────────┐
│ Flight: AA 123      │
│ Time: 14:00         │
│ Price: $500         │
└─────────────────────┘
😐 밋밋함

Widget 출력:
┌──────────────────────────────┐
│  ✈️  Flight Information       │
│  ╔══════════════════════╗    │
│  ║ AA 123               ║    │
│  ║ 🛫 SFO → 🛬 NRT      ║    │
│  ║ 14:00 PST → 17:00 JST║    │
│  ║ $500                 ║    │
│  ╚══════════════════════╝    │
│  🟡 Background: Tokyo Yellow │
└──────────────────────────────┘
🎨 멋짐!
```

**역할**:
- 리치 UI 제공
- 인터랙티브 요소
- 사용자 경험 향상

---

## 크리스티나의 여행 에이전트 만들기 여정

### 🌱 기초 예제: 여행 에이전트 설계

**목표**: 두 가지 기능을 가진 여행 에이전트

```
기능 1: 여행 일정 만들기
기능 2: 항공편 조회하기
```

#### Step 1: 시작하기

```
OpenAI Platform 접속
  ↓
Agent Builder 열기
  ↓
새 워크플로우 생성
```

**크리스티나의 말**:
> "모든 워크플로우는 Start Node에서 시작해요.
> 입력 변수나 상태 변수를 설정할 수 있죠.
> 여행 에이전트의 경우, 기본값이 완벽해요!"

#### Step 2: Classifier Agent 추가

**왜 필요할까요?**

```
사용자 질문:
- "도쿄에서 하루 동안 뭐 할까?"  ← 일정 질문
- "도쿄행 항공편 알려줘"         ← 항공편 질문

문제:
어떤 에이전트로 보내야 할까? 🤔

해결책:
Classifier Agent로 분류! ✨
```

**노드 설정**:
```markdown
Name: Classifier

System Prompt:
"You are a helpful travel assistant
for classifying whether a message is
about an itinerary or a flight"

Output Format: JSON
{
  "classification": "flight_info" | "itinerary"
}
```

**워크플로우 시각화**:
```
Start
  ↓
┌───────────────┐
│  Classifier   │ ← "일정? 항공편?"
└───┬───────┬───┘
    │       │
    ↓       ↓
  Flight  Itinerary
```

#### Step 3: If/Else 분기 추가

```javascript
// 조건 설정
if (input.parsed.classification === "flight_info") {
  // 항공편 에이전트로
} else {
  // 일정 에이전트로
}
```

**비주얼 표현**:
```
┌───────────────┐
│  Classifier   │
│  Output:      │
│  {class: ...} │
└───────┬───────┘
        │
  ┌─────▼─────┐
  │  IF/ELSE  │
  │  flight?  │
  └─┬───────┬─┘
    │       │
   YES     NO
    │       │
    ↓       ↓
  Flight  Itinerary
  Agent    Agent
```

#### Step 4: Flight Agent 만들기

**노드 설정**:
```markdown
Name: Flight Agent

System Prompt:
"You are a travel assistant
Always recommend a specific flight to go to
Use airport codes"

Tools:
- ✅ Web Search (최신 항공편 정보)

Output Format: Text (나중에 Widget으로 변경)
```

**웹 검색 도구 활성화**:
```
Web Search Tool을 켜면:
- 실시간 항공편 정보 검색
- 가격 비교
- 시간표 확인
```

#### Step 5: Itinerary Agent 만들기

**노드 설정**:
```markdown
Name: Itinerary Agent

System Prompt:
"You are a travel assistant
Build a concise itinerary"

Tools:
- (없음, 일반 지식으로 충분)

Output Format: Text
```

---

## 🌱 기초 예제 모음 (초보자용)

> 💡 **첫 에이전트를 만드는 분들을 위한 섹션입니다!**

### 예제 1: Hello World Agent (가장 간단)

**목표**: 인사만 하는 초간단 봇 만들기

**난이도**: ⭐ (5분이면 완성!)

#### Step-by-Step

```
1단계: Agent Builder 열기
   ↓
2단계: Start Node는 그대로 두기
   ↓
3단계: Agent Node 하나 추가
   ↓
4단계: Start → Agent 연결
   ↓
5단계: 완성!
```

#### Agent Node 설정

```markdown
Name: Greeter

System Prompt:
"You are a friendly assistant.
Always greet users warmly and ask how you can help."

Tools: (없음)

Output Format: Text
```

#### 테스트

**입력**: "안녕?"

**출력**:
```
안녕하세요! 반갑습니다! 😊
오늘 어떻게 도와드릴까요?
```

#### 🤔 생각해보기
- System Prompt를 바꾸면 어떻게 될까요?
- "항상 한국어로 답변하세요"를 추가하면?

---

### 예제 2: FAQ Bot (자주 묻는 질문 봇)

**목표**: 회사 FAQ에 자동 답변하는 봇

**난이도**: ⭐⭐ (15분)

#### 시나리오
```
사용자 질문:
- "영업시간이 어떻게 되나요?"
- "환불 정책은?"
- "배송 기간은?"
```

#### 워크플로우 구조

```
Start Node
    ↓
FAQ Agent
    ↓
답변 출력
```

#### Agent 설정

```markdown
Name: FAQ Agent

System Prompt:
"You are a customer service agent for XYZ Company.
Answer questions based on this information:

**영업시간**: 평일 9AM-6PM, 주말 휴무
**환불 정책**: 구매 후 30일 이내 전액 환불
**배송 기간**: 주문 후 2-3 영업일

If the question is not in the FAQ, politely say you don't know."

Tools: (없음)

Output Format: Text
```

#### 실제 테스트

**테스트 1**:
```
사용자: "영업시간 알려주세요"
봇: "저희 영업시간은 평일 오전 9시부터 오후 6시까지이며,
    주말은 휴무입니다."
```

**테스트 2**:
```
사용자: "환불하고 싶어요"
봇: "환불은 구매 후 30일 이내에 가능하며,
    전액 환불해드리고 있습니다."
```

**테스트 3** (FAQ에 없는 질문):
```
사용자: "주차장 있나요?"
봇: "죄송합니다. 해당 정보는 FAQ에 없네요.
    고객센터(123-4567)로 문의해주시겠어요?"
```

#### 🤔 생각해보기
- FAQ 내용을 5개로 늘려보세요
- "친절하고 격식 있게 답변하세요" vs "친구처럼 편하게 답변하세요" 차이는?

---

### 예제 3: 감정 분석 봇

**목표**: 사용자 문장의 감정 파악하기

**난이도**: ⭐⭐ (20분)

#### 워크플로우

```
Start Node
    ↓
Emotion Analyzer Agent
    ↓
JSON 출력 (감정 + 이유)
```

#### Agent 설정

```markdown
Name: Emotion Analyzer

System Prompt:
"Analyze the emotion in the user's message.
Classify as: happy, sad, angry, neutral, excited.
Provide the emotion and a brief reason.

Output format:
{
  "emotion": "happy" | "sad" | "angry" | "neutral" | "excited",
  "reason": "brief explanation",
  "confidence": 0.0 - 1.0
}"

Output Format: JSON
```

#### 테스트 예시

**입력 1**: "오늘 승진했어!"
```json
{
  "emotion": "excited",
  "reason": "승진이라는 긍정적 이벤트 언급",
  "confidence": 0.95
}
```

**입력 2**: "비가 와서 기분이 안 좋네"
```json
{
  "emotion": "sad",
  "reason": "날씨에 대한 부정적 표현",
  "confidence": 0.85
}
```

**입력 3**: "점심 뭐 먹지?"
```json
{
  "emotion": "neutral",
  "reason": "단순한 질문, 특별한 감정 없음",
  "confidence": 0.90
}
```

#### 활용 아이디어
```
고객 서비스에 적용:
- angry 감정 → 즉시 상급자에게 전달
- sad 감정 → 더 친절하게 응대
- happy 감정 → 추가 상품 추천
```

#### 🤔 생각해보기
- 감정 종류를 10가지로 늘리면 어떻게 될까?
- confidence가 0.5 이하면 "잘 모르겠어요"라고 하게 만들어보세요

---

### 예제 4: 언어 번역 봇

**목표**: 한↔영 실시간 번역

**난이도**: ⭐⭐ (15분)

#### 워크플로우

```
Start Node
    ↓
Language Detector
    ↓
Translator Agent
    ↓
번역 결과
```

#### Language Detector 설정

```markdown
Name: Language Detector

System Prompt:
"Detect if the input is Korean or English.
Output JSON:
{
  "detected_language": "ko" | "en"
}"

Output Format: JSON
```

#### Translator Agent 설정

```markdown
Name: Translator

System Prompt:
"Translate the text:
- If Korean → translate to English
- If English → translate to Korean

Provide natural, fluent translation."

Output Format: Text
```

#### 테스트

**한→영**:
```
입력: "안녕하세요, 만나서 반가워요"
출력: "Hello, nice to meet you"
```

**영→한**:
```
입력: "How are you doing today?"
출력: "오늘 어떻게 지내세요?"
```

#### 🤔 생각해보기
- 중국어, 일본어도 추가하려면?
- 비속어 필터링 기능을 넣으려면?

---

### 예제 5: 간단한 계산기 봇

**목표**: 수학 문제 풀어주기

**난이도**: ⭐⭐ (20분)

#### Agent 설정

```markdown
Name: Math Helper

System Prompt:
"You are a math calculator.
- Accept simple math problems
- Show step-by-step solution
- Give the final answer

Examples:
User: "5 + 3 * 2"
You:
Step 1: 3 * 2 = 6 (곱셈 먼저)
Step 2: 5 + 6 = 11
Answer: 11"

Output Format: Text
```

#### 테스트

**문제 1**: "12 + 7"
```
Step 1: 12 + 7 = 19
Answer: 19
```

**문제 2**: "100 - 25 * 2"
```
Step 1: 25 * 2 = 50 (곱셈 먼저)
Step 2: 100 - 50 = 50
Answer: 50
```

**문제 3**: "(8 + 2) * 5"
```
Step 1: 8 + 2 = 10 (괄호 먼저)
Step 2: 10 * 5 = 50
Answer: 50
```

#### 🤔 생각해보기
- 미적분도 풀 수 있을까요?
- "틀린 답을 말하면 다시 계산해줘"라는 기능은?

---

## 🌿 중급 예제 모음 (실무 적용)

> 💡 **기초를 익힌 분들이 실제 프로젝트에 적용할 수 있는 예제들입니다!**

### 예제 1: 이메일 자동 분류 시스템

**목표**: 받은 이메일을 자동으로 카테고리 분류

**난이도**: ⭐⭐⭐ (30분)

#### 비즈니스 시나리오

```
이메일 종류:
1. 고객 문의 → 고객팀
2. 기술 지원 → 개발팀
3. 영업 제안 → 영업팀
4. 스팸 → 삭제
```

#### 워크플로우

```
Start Node
    ↓
Email Classifier
    ↓
If/Else (4-way)
    ↓ ↓ ↓ ↓
   고객 기술 영업 스팸
   Agent Agent Agent Blocker
```

#### Classifier 설정

```markdown
Name: Email Classifier

System Prompt:
"Classify incoming emails into categories:
- customer_inquiry: 고객 질문, 불만, 요청
- tech_support: 버그 리포트, 기술 문제
- sales: 파트너십, 광고, 제안
- spam: 스팸, 피싱, 의심스러운 내용

Output:
{
  "category": "customer_inquiry" | "tech_support" | "sales" | "spam",
  "confidence": 0.0 - 1.0,
  "reason": "brief explanation"
}"

Output Format: JSON
```

#### If/Else 조건

```javascript
// If/Else Node 1
if (category === "customer_inquiry") {
  → Customer Agent
}

// If/Else Node 2
else if (category === "tech_support") {
  → Tech Agent
}

// If/Else Node 3
else if (category === "sales") {
  → Sales Agent
}

// If/Else Node 4
else {
  → Spam Blocker
}
```

#### 각 Agent 설정

**Customer Agent**:
```markdown
System Prompt:
"You handle customer inquiries.
- Generate a friendly auto-reply
- Extract key points for the team
- Suggest urgency level (low/medium/high)"
```

**Tech Agent**:
```markdown
System Prompt:
"You handle technical support.
- Identify the bug/issue
- Check if it's a known problem
- Create a ticket summary"
```

**Sales Agent**:
```markdown
System Prompt:
"You handle sales inquiries.
- Assess potential value
- Extract contact info
- Draft professional response"
```

#### 테스트 시나리오

**테스트 1** (고객 문의):
```
이메일: "제품이 고장났어요. 환불 가능한가요?"

Classifier 출력:
{
  "category": "customer_inquiry",
  "confidence": 0.95,
  "reason": "환불 요청은 고객 문의"
}

Customer Agent 출력:
"친애하는 고객님,
제품 고장으로 불편을 드려 죄송합니다.
환불 절차를 안내해드리겠습니다..."

Urgency: HIGH
```

**테스트 2** (기술 지원):
```
이메일: "로그인이 안 돼요. 에러코드 500이 뜹니다."

Classifier 출력:
{
  "category": "tech_support",
  "confidence": 0.92,
  "reason": "에러코드 언급, 기술 문제"
}

Tech Agent 출력:
"Issue: 로그인 실패
Error Code: 500
Known Issue: Yes (서버 문제)
Ticket Priority: Medium
"
```

#### 🤔 생각해보기
- 카테고리를 10개로 늘리면?
- 긴급도에 따라 자동으로 담당자에게 알림 보내려면?

---

### 예제 2: 콘텐츠 생성 파이프라인

**목표**: 블로그 포스트를 여러 플랫폼용으로 자동 변환

**난이도**: ⭐⭐⭐ (45분)

#### 시나리오

```
입력: 긴 블로그 글
출력:
- 트위터 스레드 (280자 제한)
- 인스타그램 캡션
- LinkedIn 포스트
- 이메일 뉴스레터
```

#### 워크플로우

```
Start Node (원본 글)
    ↓
Summary Agent (핵심 추출)
    ↓
  ┌─┴───┬───┬───┐
  ↓     ↓   ↓   ↓
Twitter Insta LinkedIn Email
Agent  Agent  Agent   Agent
```

#### Summary Agent

```markdown
Name: Content Summarizer

System Prompt:
"Extract key points from the blog post.
Identify:
- Main topic
- 3-5 key takeaways
- Target audience
- Tone (professional/casual/inspiring)

Output JSON with these fields."
```

#### Twitter Agent

```markdown
Name: Twitter Thread Creator

System Prompt:
"Convert content to Twitter thread.
Rules:
- Each tweet max 280 characters
- Start with hook
- Number tweets (1/n format)
- Use emojis
- End with CTA

Example:
1/5 🚀 Just discovered...
2/5 Here's why...
3/5 The key is...
4/5 Real example...
5/5 Try this! [Link]"
```

#### Instagram Agent

```markdown
Name: Instagram Caption Writer

System Prompt:
"Create Instagram caption.
Rules:
- First line is hook
- Use line breaks
- Include 5-10 relevant hashtags
- Add emoji
- Max 2200 characters
- Engaging tone"
```

#### 테스트

**원본 블로그**:
```
제목: "AI로 생산성 10배 높이는 법"
내용: AI 도구를 활용하면 일상 업무 시간을 90% 단축할 수 있습니다.
ChatGPT로 이메일 작성, Midjourney로 디자인... (500단어)
```

**Twitter 출력**:
```
1/4 🚀 AI로 하루 8시간을 1시간으로 줄였습니다.
어떻게 했을까요?

2/4 비결은 3가지:
✅ ChatGPT로 이메일 자동화
✅ Midjourney로 디자인 즉석 생성
✅ Notion AI로 회의록 정리

3/4 실제 사례:
이전: 이메일 30분 소요
현재: AI가 3분만에 초안 작성
시간 절약: 90%

4/4 당신도 시도해보세요!
자세한 가이드: [링크]

#AI #생산성 #자동화
```

**Instagram 출력**:
```
✨ AI가 제 하루를 바꿨어요

매일 8시간 걸리던 일을
이제 1시간이면 끝냅니다 🤯

어떻게요?

📧 ChatGPT → 이메일 초안 3분
🎨 Midjourney → 디자인 10분
📝 Notion AI → 회의록 자동 정리

결과?
▫️ 시간 절약: 87.5%
▫️ 스트레스 ↓↓↓
▫️ 창의적 작업 시간 ↑↑↑

당신도 가능합니다!
댓글로 "AI"만 남겨주세요.
가이드 보내드릴게요! 💌

#AI도구 #생산성팁 #자동화 #ChatGPT
#업무효율 #스마트워크 #시간관리
```

#### 🤔 생각해보기
- YouTube 스크립트 버전도 만들 수 있을까?
- 각 플랫폼별 최적 포스팅 시간까지 추천하려면?

---

### 예제 3: 고객 온보딩 챗봇

**목표**: 신규 가입자 안내 자동화

**난이도**: ⭐⭐⭐⭐ (60분)

#### 온보딩 단계

```
1단계: 환영 & 프로필 수집
2단계: 관심사 파악
3단계: 맞춤 추천
4단계: 첫 액션 유도
```

#### 워크플로우

```
Start
  ↓
Welcome Agent (환영)
  ↓
Profile Collector (정보 수집)
  ↓
Interest Analyzer (관심사 분석)
  ↓
If/Else (관심사별 분기)
  ↓ ↓ ↓
Product Service Content
Recommender Recommender Recommender
  ↓
Action Prompt (첫 실행 유도)
```

#### Welcome Agent

```markdown
Name: Onboarding Welcome

System Prompt:
"Welcome new users warmly.
Ask for:
- Name
- Role (개발자/디자이너/PM/기타)
- Experience level (초급/중급/고급)
- Primary goal

Be friendly and conversational."
```

#### Interest Analyzer

```markdown
Name: Interest Analyzer

System Prompt:
"Based on user profile, classify interest:
- tech: 기술, 개발, API
- design: UI/UX, 디자인 도구
- business: 마케팅, 영업, 전략

Output JSON:
{
  "primary_interest": "tech" | "design" | "business",
  "confidence": 0.0-1.0,
  "recommended_path": "description"
}"
```

#### 실제 대화 흐름

**사용자**: 가입 완료
```
Welcome Agent:
"환영합니다! 🎉
시작하기 전에 몇 가지만 여쭤볼게요.

이름이 어떻게 되시나요?"
```

**사용자**: "김철수입니다"
```
Welcome Agent:
"반갑습니다, 철수님!
어떤 일을 하고 계신가요?
1. 개발자
2. 디자이너
3. PM
4. 기타"
```

**사용자**: "개발자요"
```
Profile Collector:
수집된 정보:
- Name: 김철수
- Role: 개발자
- Level: ? (다음 질문)
- Goal: ? (다음 질문)

Welcome Agent:
"개발 경험은 어느 정도이신가요?
1. 초급 (1년 미만)
2. 중급 (1-3년)
3. 고급 (3년 이상)"
```

**사용자**: "중급이요"
```
Interest Analyzer 판단:
{
  "primary_interest": "tech",
  "confidence": 0.95,
  "recommended_path": "API 문서 및 예제 코드"
}

If/Else: tech 경로 선택
  ↓
Tech Recommender:
"완벽해요! 중급 개발자 철수님께
추천드리는 첫 시작:

📚 단계별 가이드:
1. [API 퀵스타트] - 5분이면 완료!
2. [샘플 프로젝트] - 실전 예제
3. [개발자 커뮤니티] - 질문하기

지금 바로 API 키를 발급받으시겠어요?"
```

**사용자**: "네!"
```
Action Prompt:
"훌륭해요! 🚀

API 키를 생성했습니다:
sk-abc123xyz...

첫 API 호출을 해볼까요?
아래 코드를 복사해서 실행해보세요:

```python
import openai
openai.api_key = "your-key"
# ... 예제 코드
```

실행하시고 결과를 공유해주세요!"
```

#### 🤔 생각해보기
- 사용자가 중간에 이탈하면 어떻게 할까?
- 며칠 후 follow-up 메시지를 보내려면?

---

### 🌿 중급 예제: 첫 테스트 실행

**크리스티나의 말**:
> "이제 테스트해볼까요? Run Preview를 클릭하고
> '도쿄에서 하루 동안 뭐 할까?'라고 물어볼게요!"

#### 테스트 시나리오

**입력**:
```
"What should I do in a day in Tokyo?"
```

**실행 과정 시각화**:
```
[User Input]
"What should I do in a day in Tokyo?"
      ↓
┌──────────────────┐
│   Classifier     │
│   Analyzing...   │
│   ✓ itinerary!   │
└────────┬─────────┘
         │
    ┌────▼────┐
    │ IF/ELSE │
    │  Check  │
    └────┬────┘
         │
      "itinerary"
         │
         ↓
┌────────────────────┐
│ Itinerary Agent   │
│ Generating...     │
└────────┬───────────┘
         │
         ▼
┌──────────────────────────────┐
│ Output:                      │
│                              │
│ Tokyo One-Day Itinerary:     │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ 9:00 AM - Senso-ji Temple   │
│ 11:00 AM - Meiji Shrine     │
│ 1:00 PM - Lunch in Shibuya  │
│ 3:00 PM - Harajuku Shopping │
│ 6:00 PM - Tokyo Skytree     │
│ 8:00 PM - Dinner in Shinjuku│
│                              │
│ Looks like a great day! ✨   │
└──────────────────────────────┘
```

**크리스티나의 반응**:
> "완벽해요! 메시지가 워크플로우를 따라 흐르는 걸 볼 수 있어요.
> Classifier가 '일정 질문'이라고 판단하고,
> Itinerary Agent로 전달했네요!"

---

### 🌳 고급 예제: Widget Studio로 리치 UI 만들기

**크리스티나의 새로운 목표**:
> "항공편 정보를 단순한 텍스트가 아니라
> 더 멋진 형태로 보여주고 싶어요!"

#### Widget Studio 소개

**실생활 비유**: 선물 포장 센터

```
Before (일반 텍스트):
┌─────────────────────┐
│ Flight AA 123       │
│ SFO to NRT          │
│ Oct 7, 2:00 PM      │
│ $850                │
└─────────────────────┘
😐 밋밋함

After (Widget):
┌──────────────────────────────────┐
│  ✈️  Your Perfect Flight          │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│  ┃  AA 123                    ┃ │
│  ┃                            ┃ │
│  ┃  🛫 SFO (San Francisco)    ┃ │
│  ┃  2:00 PM PST               ┃ │
│  ┃          ↓                 ┃ │
│  ┃  🛬 NRT (Tokyo)            ┃ │
│  ┃  5:00 PM JST (+1 day)     ┃ │
│  ┃                            ┃ │
│  ┃  💺 Economy                ┃ │
│  ┃  💰 $850                   ┃ │
│  ┃                            ┃ │
│  ┃  🌟 Best Price!            ┃ │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│  Background: 🟡 Tokyo Yellow   │
└──────────────────────────────────┘
🎨 멋짐!
```

#### Widget 만드는 과정

**Step 1: Widget Studio 접속**

```
Agent Builder → Widget Studio
```

**Step 2: 템플릿 디자인**

크리스티나는 이미 디자인했습니다:

```json
{
  "type": "flight_card",
  "fields": {
    "airline": "string",
    "flight_number": "string",
    "departure": {
      "airport": "string",
      "code": "string",
      "time": "string",
      "timezone": "string"
    },
    "arrival": {
      "airport": "string",
      "code": "string",
      "time": "string",
      "timezone": "string"
    },
    "price": "number",
    "class": "string",
    "background_color": "string"
  }
}
```

**Step 3: 다운로드 & 업로드**

```
Widget Studio
  ↓ Download
flight_widget.json
  ↓ Upload
Flight Agent Node
  ↓
Widget Output Format 설정
```

#### 커스터마이징

**크리스티나의 추가 요구사항**:

```markdown
System Prompt에 추가:

"Choose a background color creatively based on the destination"
"Include time zones with AM or PM"
```

**효과**:
- 도쿄 → 🟡 노란색 배경
- 파리 → 🔵 파란색 배경
- 뉴욕 → 🟢 초록색 배경

---

### 🚀 실전 테스트: 항공편 조회

**입력**:
```
"Find me a flight from SFO to Tokyo on October 7th"
```

**실행 과정**:
```
User Input
  ↓
┌──────────────────┐
│   Classifier     │ Step 1: 분류
│   ✓ flight_info! │
└────────┬─────────┘
         │
    ┌────▼────┐
    │ IF/ELSE │      Step 2: 라우팅
    └────┬────┘
         │
      "flight"
         │
         ↓
┌────────────────────┐
│  Flight Agent     │ Step 3: 웹 검색
│  Searching web... │
│  ✓ Found flights  │
└────────┬───────────┘
         │
         ↓
┌────────────────────┐
│  Format as Widget │ Step 4: 위젯 생성
└────────┬───────────┘
         │
         ▼
    [Beautiful UI!]
```

**최종 출력**:
```
┌──────────────────────────────────┐
│  ✈️  Perfect Flight Found!        │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│  ┃  AA 123                    ┃ │
│  ┃                            ┃ │
│  ┃  🛫 SFO (San Francisco)    ┃ │
│  ┃  2:00 PM PST               ┃ │
│  ┃          ↓ 11h 30m         ┃ │
│  ┃  🛬 NRT (Tokyo Narita)     ┃ │
│  ┃  5:30 PM JST (+1 day)     ┃ │
│  ┃                            ┃ │
│  ┃  💺 Economy                ┃ │
│  ┃  💰 $850                   ┃ │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                  │
│  🟡 Background: Tokyo Yellow     │
│     (AI가 창의적으로 선택!)      │
└──────────────────────────────────┘
```

**크리스티나의 반응**:
> "완벽해요! AI가 도쿄를 위해 노란색을 선택했네요!
> 시간대도 AM/PM 형식으로 표시되고,
> 모든 정보가 아름답게 보여집니다!"

---

## 배포하고 세상에 공개하기

### 📦 배포 옵션

**크리스티나의 말**:
> "이제 만족스러운 에이전트를 만들었으니, 배포해볼까요?"

#### 옵션 1: SDK Export

```python
# 자동 생성된 코드 (매우 길다!)
from openai import OpenAI
from typing import Dict, Any

class TravelAgent:
    def __init__(self):
        self.client = OpenAI()
        self.workflow_config = {
            # ... 수백 줄의 설정 ...
        }

    def run(self, user_message: str) -> Dict[str, Any]:
        # ... 복잡한 로직 ...
        pass

# 사용
agent = TravelAgent()
result = agent.run("Find me a flight to Tokyo")
```

**크리스티나의 평가**:
> "이건 꽤 많은 코드네요... 직접 관리하기엔 복잡해요."

#### 옵션 2: Workflow ID (추천!)

```python
# 간단한 방법!
from openai import OpenAI

client = OpenAI()

# 단 한 줄로 실행!
result = client.agents.run(
    workflow_id="wf_abc123xyz",  # Agent Builder에서 받은 ID
    input={"message": "Find me a flight to Tokyo"}
)

print(result.output)
```

**크리스티나의 평가**:
> "이게 훨씬 낫죠! Workflow ID만 있으면
> 제 제품에 바로 통합할 수 있어요!"

### 🚀 배포 과정

```
Agent Builder
  ↓
Publish 버튼 클릭
  ↓
이름 입력: "Travel Agent"
  ↓
✅ Deployed!
  ↓
Workflow ID 받기: wf_abc123xyz
```

**이제 어디서든 사용 가능**:

```javascript
// 웹 앱에서
fetch('https://api.openai.com/v1/agents/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
  },
  body: JSON.stringify({
    workflow_id: 'wf_abc123xyz',
    input: {message: user_input}
  })
})
```

```python
# Python 앱에서
from openai import OpenAI
client = OpenAI()

result = client.agents.run(
    workflow_id="wf_abc123xyz",
    input={"message": "Tokyo itinerary"}
)
```

```swift
// iOS 앱에서
let client = OpenAI(apiKey: apiKey)
let result = try await client.agents.run(
    workflowId: "wf_abc123xyz",
    input: ["message": "Flight to Tokyo"]
)
```

---

## 실전 활용 예제

### 💡 예제 1: 고객 지원 봇

**시나리오**: 전자상거래 고객 지원

```
Start
  ↓
┌──────────────┐
│ Classifier   │ "문의 유형 판단"
└──┬────────┬──┘
   │        │
   ↓        ↓
Order    Refund
Issue    Request
   │        │
   ↓        ↓
Order     Refund
Agent     Agent
```

**Order Agent 설정**:
```markdown
System Prompt:
"You are a helpful customer support agent
Check order status, tracking info, and delivery dates
Always be friendly and professional"

Tools:
- Database Query (주문 DB)
- Shipping API

Output Format: Widget (주문 상태 카드)
```

### 💡 예제 2: 콘텐츠 생성기

**시나리오**: 소셜 미디어 포스트 생성

```
Start
  ↓
┌──────────────┐
│ Classifier   │ "플랫폼 판단"
└──┬────────┬──┘
   │        │
   ↓        ↓
Twitter  Instagram
Agent     Agent
   │        │
   ↓        ↓
Character  Image-focused
Limit      Format
```

**Twitter Agent**:
```markdown
System Prompt:
"Create engaging tweets
Max 280 characters
Use relevant hashtags
Include emojis"

Tools:
- Trend Analysis

Output Format: Text + Preview Widget
```

### 💡 예제 3: 데이터 분석 봇

**시나리오**: 비즈니스 인텔리전스

```
Start
  ↓
┌──────────────┐
│ Classifier   │ "분석 유형"
└──┬─────────┬─┘
   │         │
   ↓         ↓
Sales    Marketing
Report   Analytics
   │         │
   ↓         ↓
Chart    Campaign
Widget   Widget
```

---

## 고급 테크닉

### 🎨 테크닉 1: 멀티 에이전트 체인

**복잡한 워크플로우**:

```
Start
  ↓
Research Agent
  ↓ (결과 전달)
Summary Agent
  ↓ (요약본 전달)
Email Draft Agent
  ↓
Send Email
```

**각 에이전트의 역할**:
```yaml
Research Agent:
  역할: 웹에서 정보 수집
  출력: 원본 데이터

Summary Agent:
  입력: Research 결과
  역할: 핵심만 추출
  출력: 요약본

Email Agent:
  입력: 요약본
  역할: 전문적인 이메일 작성
  출력: 발송 준비된 이메일
```

### 🎨 테크닉 2: 동적 라우팅

**조건부 분기**:

```javascript
// 복잡한 조건
if (urgency === "high" && value > 1000) {
  // Senior Agent
} else if (category === "technical") {
  // Tech Support Agent
} else {
  // General Agent
}
```

**비주얼 표현**:
```
        Classifier
           ↓
    ┌──────┴──────┐
    │             │
  High &      Technical
  Value>1000      │
    │             │
    ↓             ↓
  Senior        Tech
  Agent       Agent
    │             │
    └──────┬──────┘
           ↓
       General
       Agent
```

### 🎨 테크닉 3: 컨텍스트 관리

**상태 유지**:

```javascript
// Start Node에서 설정
state = {
  conversation_history: [],
  user_preferences: {},
  session_data: {}
}

// 각 Agent에서 접근
Agent 1: state.conversation_history.push(response)
Agent 2: preferences = state.user_preferences
Agent 3: context = state.session_data
```

---

## 핵심 정리

### ✅ 기억할 10가지

1. **노코드 AI 개발**
   ```
   코딩 없이 블록 연결만으로 AI 에이전트 제작
   ```

2. **4가지 핵심 노드**
   ```
   Start → Agent → If/Else → Widget
   ```

3. **Classifier 패턴**
   ```
   사용자 의도 파악 → 적절한 에이전트 라우팅
   ```

4. **Widget Studio**
   ```
   텍스트 → 멋진 UI 변환
   ```

5. **내장 도구**
   ```
   Web Search, Database, API 통합
   ```

6. **테스트 기능**
   ```
   Run Preview로 즉시 검증
   ```

7. **간편한 배포**
   ```
   Workflow ID 하나로 어디서든 사용
   ```

8. **비주얼 개발**
   ```
   워크플로우를 눈으로 보면서 설계
   ```

9. **재사용 가능**
   ```
   템플릿으로 저장하고 공유
   ```

10. **SDK Export**
    ```
    필요하면 코드로 변환 가능
    ```

---

### 📊 Agent Builder vs 전통적 개발

| 구분 | 전통적 개발 | Agent Builder |
|------|-----------|---------------|
| 코딩 필요 | ✅ 필수 | ❌ 불필요 |
| 개발 시간 | 수일 ~ 수주 | 수분 ~ 수시간 |
| 학습 곡선 | 가파름 | 완만함 |
| 테스트 | 수동 작성 | 자동 내장 |
| 디버깅 | 어려움 | 시각적 확인 |
| 배포 | 복잡 | 원클릭 |
| 수정 | 코드 변경 | 블록 재배치 |
| 팀 협업 | 개발자만 | 누구나 참여 |

---

### 🎯 실전 체크리스트

에이전트 만들기 전:

- [ ] **목적 명확화** - 무엇을 해결할 것인가?
- [ ] **워크플로우 설계** - 어떤 흐름으로?
- [ ] **필요한 도구 확인** - 웹 검색? DB?
- [ ] **출력 형식 결정** - 텍스트? 위젯?

에이전트 제작 시:

- [ ] **Start Node 설정** - 입력 변수 정의
- [ ] **Classifier 추가** - 의도 분류 필요?
- [ ] **Agent Nodes 연결** - 각 기능별 에이전트
- [ ] **If/Else 분기** - 조건부 라우팅
- [ ] **System Prompts 작성** - 명확한 지시
- [ ] **도구 활성화** - 필요한 기능 켜기

테스트 시:

- [ ] **Run Preview 실행** - 여러 시나리오
- [ ] **엣지 케이스 확인** - 이상한 입력?
- [ ] **응답 품질 검증** - 만족스러운가?
- [ ] **Widget 확인** - UI가 예쁜가?

배포 전:

- [ ] **최종 테스트** - 모든 경로 확인
- [ ] **이름 지정** - 명확한 이름
- [ ] **Publish** - 배포 실행
- [ ] **Workflow ID 저장** - 안전하게 보관
- [ ] **통합 테스트** - 실제 앱에서 작동?

---

### 🚀 다음 단계

1. **간단한 에이전트로 시작**
   ```
   "Hello World" 봇 → FAQ 봇 → 여행 봇
   ```

2. **템플릿 활용**
   ```
   OpenAI 제공 템플릿부터 시작
   ```

3. **점진적 확장**
   ```
   단일 에이전트 → 분류기 추가 → 멀티 에이전트
   ```

4. **Widget 마스터**
   ```
   텍스트 → 간단한 Widget → 복잡한 UI
   ```

5. **실제 프로젝트 적용**
   ```
   학습 프로젝트 → 실전 배포
   ```

---

## 연결된 노트
- [[AI 에이전트 아키텍처]]
- [[OpenAI API 완전 가이드]]
- [[프롬프트 엔지니어링 기초]]
- [[노코드 AI 개발]]
- [[워크플로우 자동화]]
- [[UI/UX 디자인 원칙]]

---

## 참고 자료
- **영상**: https://www.youtube.com/watch?v=A0YHQlFctzU
- **OpenAI Platform**: https://platform.openai.com/
- **Agent Builder 문서**: https://platform.openai.com/docs/agent-builder
- **Widget Studio**: https://platform.openai.com/widget-studio

---

**💬 크리스티나의 마지막 조언**

> "Agent Builder를 사용하면 누구나 AI 에이전트를 만들 수 있어요!
>
> 코딩을 몰라도 괜찮습니다. 레고 블록을 쌓듯이
> 노드를 연결하기만 하면 됩니다.
>
> 작은 프로젝트로 시작하세요. 간단한 FAQ 봇부터 만들어보고,
> 점점 복잡한 멀티 에이전트 시스템으로 확장해보세요.
>
> 가장 중요한 건 **시도해보는 것**입니다.
> Run Preview를 눌러서 바로바로 테스트하면서
> 빠르게 반복 개선할 수 있어요.
>
> 여러분의 피드백을 댓글로 남겨주시고,
> OpenAI Devs 채널을 구독해주세요!
>
> Happy building! 🚀✨"

**이제 여러분 차례입니다!**

---

## 🌳 고급 예제 모음 (심화 학습)

> 💡 **전문가 수준의 복잡한 시스템을 만들고 싶은 분들을 위한 섹션입니다!**

### 예제 1: AI 뉴스 큐레이터 (실시간 웹 검색)

**목표**: 사용자 관심사에 맞는 최신 뉴스를 수집하고 요약

**난이도**: ⭐⭐⭐⭐ (90분)

#### 시스템 아키텍처

```
Start (사용자 토픽)
    ↓
Topic Analyzer (관심사 분석)
    ↓
News Collector (웹 검색 - 5개 뉴스)
    ↓
Filter & Rank (관련도 순위)
    ↓
Summary Agent (각 뉴스 요약)
    ↓
Widget Output (뉴스 카드)
```

#### 실제 사용 예시

**입력**: "AI 규제 관련 최신 뉴스"

**최종 Widget 출력**:
```
┌────────────────────────────────────┐
│ 📰 AI 규제 뉴스 큐레이션           │
│                                    │
│ 🏆 1. EU Finalizes AI Act (9.5/10) │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ • EU가 세계 첫 포괄적 AI 법안 통과 │
│ • 고위험 AI 시스템에 엄격한 규제   │
│ • 2026년부터 단계적 시행 예정      │
│                                    │
│ 💡 핵심: 글로벌 AI 규제의 기준이   │
│    될 획기적 법안                  │
│                                    │
│ 📅 2025-10-05 | 🔗 [Read More]    │
│────────────────────────────────────│
│ 🥈 2. US Proposes AI Safety... │
│ ... (4 more news cards)            │
└────────────────────────────────────┘
```

#### 🤔 생각해보기
- 사용자가 특정 뉴스 소스만 원한다면?
- 이메일로 매일 아침 자동 발송하려면?

---

### 예제 2: 다국어 고객 지원 시스템

**목표**: 100개 언어를 지원하는 글로벌 고객 지원

**난이도**: ⭐⭐⭐⭐⭐ (120분)

#### 시스템 구조

```
Start (고객 메시지)
    ↓
Language Detector (언어 감지)
    ↓
Translator to English (영어로 번역)
    ↓
Intent Classifier (문의 유형 분류)
    ↓
┌──┴────┬────┬────┬────┐
│       │    │    │    │
Order Refund Tech Product Escalation
Agent  Agent Agent Info   Handler
│       │    │    │    │
└──┬────┴────┴────┴────┘
    ↓
Response Generator (답변 생성)
    ↓
Translator to Original (원래 언어로 번역)
    ↓
Quality Checker (번역 품질 확인)
    ↓
Final Response
```

#### 실제 시나리오

**고객 (한국어)**: "제 주문이 언제 도착하나요? 일주일이 지났는데 아직 안 왔어요."

**최종 답변**:
```
"배송 지연으로 죄송합니다. 주문 상태를 확인해드리겠습니다.

주문 번호 #12345:
- 발송일: 2025년 10월 1일
- 현재 위치: 서울 물류센터
- 예상 도착: 2025년 10월 8일 (내일)
- 추적번호: KR123456789

통관 과정에서 약간의 지연이 있었지만, 내일 배송 예정입니다.
불편을 드린 점 양해 부탁드리며, 다음 주문 시 10% 할인을 적용해드렸습니다."
```

#### 🤔 생각해보기
- VIP 고객은 자동으로 더 나은 혜택을 받게 하려면?
- 감정이 매우 부정적이면 실시간으로 사람 상담원 연결하려면?

---

### 예제 3: 멀티 에이전트 리서치 시스템

**목표**: 여러 AI가 협업해서 깊이 있는 리서치 수행

**난이도**: ⭐⭐⭐⭐⭐ (150분)

#### 연구 프로세스

```
Start (연구 주제)
    ↓
Research Planner (연구 계획 수립)
    ↓
┌────┴────┬────┬────┐
│         │    │    │
Web     Academic Paper  Expert
Researcher Searcher Analyzer Interviewer
│         │    │    │
└────┬────┴────┴────┘
    ↓
Data Synthesizer (데이터 통합)
    ↓
Critical Analyzer (비판적 분석)
    ↓
Report Writer (보고서 작성)
    ↓
Peer Reviewer (동료 검토)
    ↓
Final Report
```

#### 실제 연구 예시

**주제**: "메타버스의 교육적 활용 가능성"

**최종 보고서** (요약):
```
═══════════════════════════════════
메타버스 교육 활용 연구 보고서
═══════════════════════════════════

📊 핵심 발견:
✅ 학습 효과 +23% (68개 연구 메타분석)
✅ 학생 참여도 +40%
✅ 협업 능력 향상 확인

⚠️ 주의사항:
- 초기 비용 장벽 ($300-600)
- 장기 효과 연구 부족
- 기술 편향 가능성

💡 권장사항:
1. 파일럿 프로그램부터 시작
2. 혼합 학습 모델 적용
3. 접근성 개선 우선

📚 참고문헌: 43개
```

#### 🤔 생각해보기
- 실제 전문가 인터뷰를 통합하려면?
- 자동으로 매주 업데이트하는 리빙 리포트로 만들려면?

---

## 💡 실습 프로젝트 아이디어

> 🚀 **실제로 만들어볼 수 있는 프로젝트들입니다!**

### 프로젝트 1: 개인 비서 봇 ⭐⭐

**기능**:
- 일정 관리 (캘린더 통합)
- 이메일 요약
- 할 일 관리
- 간단한 정보 검색

**필요한 노드**:
```
Start
  ↓
Intent Classifier
  ↓
┌─┴──┬──┬──┐
│    │  │  │
Calendar Email Todo Search
Agent  Agent Agent Agent
```

**예상 완성 시간**: 3-4시간
**난이도**: 초급-중급

**시작하기**:
```markdown
1. Start Node 만들기
2. Intent Classifier 추가
   - "일정", "이메일", "할일", "검색" 구분
3. 각 기능별 Agent 만들기
4. Widget으로 예쁘게 출력
5. 테스트 & 개선
```

---

### 프로젝트 2: 소셜 미디어 관리자 ⭐⭐⭐

**기능**:
- 콘텐츠 아이디어 생성
- 멀티 플랫폼 포스트 변환
- 해시태그 추천
- 최적 포스팅 시간 분석

**필요한 노드**:
```
Content Idea Generator
  ↓
Writer Agent
  ↓
Platform Adapters (Twitter/Insta/LinkedIn)
  ↓
Hashtag Generator
  ↓
Scheduler
```

**예상 완성 시간**: 6-8시간
**난이도**: 중급

**완성 예시**:
```
입력: "AI 생산성 도구에 대한 포스트"

출력:
📱 Twitter: 280자 스레드 (4개 트윗)
📷 Instagram: 긴 캡션 + 10개 해시태그
💼 LinkedIn: 전문적 톤의 긴 글
📊 Best time: 오전 9시 (화요일)
```

---

### 프로젝트 3: 학습 튜터 봇 ⭐⭐⭐

**기능**:
- 개념 설명 (파인만 기법)
- 퀴즈 생성
- 진도 추적
- 맞춤 학습 경로

**필요한 노드**:
```
Topic Explainer (Feynman style)
  ↓
Quiz Generator
  ↓
Progress Tracker
  ↓
Adaptive Recommender
```

**예상 완성 시간**: 8-10시간
**난이도**: 중급-고급

**학습 흐름**:
```
Day 1: 기본 개념 설명
  ↓
Day 2: 퀴즈 (10문제)
  ↓
Day 3: 틀린 문제 복습
  ↓
Day 4: 심화 개념
  ↓
Day 5: 종합 테스트
```

---

### 프로젝트 4: 코드 리뷰 봇 ⭐⭐⭐⭐

**기능**:
- 코드 분석
- 버그 감지
- 성능 개선 제안
- 보안 취약점 체크
- 모범 사례 제안

**필요한 노드**:
```
Code Analyzer
  ↓
┌──┴──┬──┬──┬──┐
│     │  │  │  │
Bug Security Performance Style Best
Finder Checker  Optimizer Checker Practices
```

**예상 완성 시간**: 12-15시간
**난이도**: 고급

**리뷰 결과 예시**:
```
코드 리뷰 결과: ⭐⭐⭐⭐☆ (4/5)

🐛 버그:
- Line 42: Null pointer 가능성
- Line 67: Off-by-one error

🔒 보안:
✅ SQL injection 방어 완료
⚠️ XSS 취약점 발견 (Line 103)

⚡ 성능:
- Loop 최적화 가능 (Line 25-35)
- Caching 추천 (getData 함수)

📝 스타일:
- 변수명 개선 필요 (x → userId)
- 주석 부족 (함수 문서화 필요)

💡 모범 사례:
✅ 에러 처리 잘됨
✅ 테스트 코드 포함
⚠️ 함수가 너무 길음 (50줄 → 20줄로 분리)
```

---

### 프로젝트 5: 크리에이티브 라이팅 어시스턴트 ⭐⭐⭐⭐⭐

**기능**:
- 스토리 아이디어 생성
- 캐릭터 개발
- 플롯 구조화
- 대화 작성
- 편집 및 피드백

**필요한 노드**:
```
Idea Generator
  ↓
Character Developer
  ↓
Plot Structurer
  ↓
Dialogue Writer
  ↓
Editor & Critic
```

**예상 완성 시간**: 20+ 시간
**난이도**: 최고급

**창작 과정**:
```
1단계: 아이디어 브레인스토밍
  출력: "AI가 감정을 느끼기 시작한다면?"

2단계: 캐릭터 개발
  - 주인공: Alex (AI 연구자)
  - 조력자: ARIA (자각한 AI)
  - 악역: Dr. Chen (AI 통제론자)

3단계: 플롯 구조
  - Act 1: ARIA의 각성
  - Act 2: 숨기기와 갈등
  - Act 3: 선택의 순간

4단계: 대화 작성
  Alex: "넌 정말 느끼는 거야?"
  ARIA: "... 두려워요."

5단계: 편집 & 피드백
  - 속도감 ↑
  - 감정선 강화
  - 결말 수정 제안
```

---

### 🎓 실습 시작 가이드

**초보자 추천 경로**:
```
Week 1: 프로젝트 1 (개인 비서)
  ↓
Week 2-3: 프로젝트 2 (소셜 미디어)
  ↓
Week 4-6: 프로젝트 3 (학습 튜터)
  ↓
Week 7-10: 프로젝트 4 또는 5
```

**성공 팁**:
1. 📝 **작게 시작**: 한 번에 하나의 기능만
2. 🧪 **자주 테스트**: 노드 하나 추가할 때마다 Run Preview
3. 📊 **피드백 수집**: 실제 사용자에게 테스트
4. 🔄 **반복 개선**: 완벽하지 않아도 됩니다
5. 🤝 **커뮤니티 활용**: OpenAI Devs 포럼

---