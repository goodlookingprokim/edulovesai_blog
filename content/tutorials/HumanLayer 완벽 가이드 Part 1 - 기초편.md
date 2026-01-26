---
title: "HumanLayer 완벽 가이드 Part 1 - 기초편 (개념부터 시작까지)"
created: '2025-10-13'
last_modified: '2025-10-13'
tags:
  - AI/코딩도구
  - 개발도구/HumanLayer
  - 초보자가이드
  - Claude/통합
  - IDE/AI
status: "완료"
type: "가이드"
priority: "high"
---

# HumanLayer 완벽 가이드 Part 1 - 기초편

> **"AI 코딩 에이전트를 지휘하는 지휘자가 되어보세요"**
> HumanLayer는 복잡한 코드베이스에서 AI가 어려운 문제를 해결하도록 돕는 오픈소스 IDE입니다.

---

## 📋 목차 (Part 1 - 기초편)

### 입문
1. [[#HumanLayer가 뭔가요 5살 아이에게 설명하듯이]]
2. [[#왜 HumanLayer를 써야 할까요 실제 개발자 이야기]]
3. [[#핵심 개념 3가지 한눈에]]

### 시작하기
4. [[#첫 걸음 설치 및 설정]]
5. [[#첫 프로젝트 5분 만에 시작하기]]
6. [[#기본 워크플로우 이해하기]]

### 핵심 기능
7. [[#Superhuman for Claude Code 키보드 중심 작업]]
8. [[#Advanced Context Engineering 맥락 관리의 기술]]
9. [[#MULTICLAUD 병렬 AI 세션 실행]]

### 실전 준비
10. [[#첫 번째 PR 만들기 실습]]
11. [[#일반적인 사용 패턴]]
12. [[#다음 단계 Part 2로]]

---

## HumanLayer가 뭔가요? (5살 아이에게 설명하듯이)

### 🎯 가장 쉬운 설명 (어린이 버전)

**"로봇 조수를 부리는 마법 지휘봉"**을 상상해보세요.

```
혼자 코딩하기:
👨‍💻 "이 버그 고치려면 10개 파일 봐야 해..." 😫
    → 3시간 소요

HumanLayer 사용:
👨‍💻 + 🤖🤖🤖 (AI 조수 3명)
👨‍💻: "이 버그 고쳐줘"
🤖: "네! A 파일 수정했어요"
🤖: "B 파일 테스트 통과했어요"
🤖: "C 파일도 정리했어요"
    → 30분 완성! ✨
```

이게 바로 **HumanLayer**예요!

---

### 🧠 중학생에게 설명 (조금 더 자세히)

#### 문제: AI 코딩이 어려운 이유

**일반 AI 코딩 도구**:
```
개발자: "로그인 기능 추가해줘"

AI: "어디에 추가할까요?" 🤔
    "데이터베이스 구조가 뭐죠?"
    "인증 방식은요?"
    "기존 코드는 어디 있죠?"

개발자: "아... 설명하자면..." 😰
    → 설명하는데 1시간
```

**HumanLayer 사용**:
```
개발자: "로그인 기능 추가해줘"

HumanLayer:
1. 🔍 자동으로 관련 파일 찾기
2. 📚 기존 패턴 분석
3. 🤖 AI에게 완벽한 맥락 제공
4. ⚡ 3개 AI가 동시에 작업

AI 1: 백엔드 API 작성
AI 2: 프론트엔드 UI 구현
AI 3: 테스트 코드 작성

개발자: "오... 다 됐네?" ✨
    → 작업 시간 10분
```

**차이점**:
- ❌ **일반 AI**: 개발자가 모든 것 설명 필요
- ✅ **HumanLayer**: AI가 알아서 맥락 파악 + 여러 AI가 협업

---

### 💡 개발자 관점 (기술적 이해)

#### HumanLayer = Claude Code + 슈퍼파워

**핵심 개념**:
```
HumanLayer
├─ CodeLayer (IDE)
│  └─ Claude Code 기반
│
├─ Context Engineering (맥락 관리)
│  └─ AI에게 필요한 정보 자동 제공
│
└─ Multi-Agent Orchestration (AI 지휘)
   └─ 여러 AI 세션 동시 실행
```

**기술 아키텍처**:
```
┌─────────────────────────────────┐
│   개발자 (You)                   │
└────────────┬────────────────────┘
             │ 명령
        ┌────▼─────┐
        │CodeLayer │ (IDE)
        └────┬─────┘
             │
    ┌────────┴─────────┬─────────┐
    │                  │         │
┌───▼───┐      ┌──────▼──┐  ┌───▼────┐
│Claude │      │ Claude  │  │Claude  │
│ #1    │      │ #2      │  │ #3     │
└───┬───┘      └────┬────┘  └───┬────┘
    │               │           │
    └───────┬───────┴───────────┘
            │
      ┌─────▼──────┐
      │  코드베이스 │
      └────────────┘
```

**작동 방식** (단계별):
```python
# 1. 개발자가 요청
request = "사용자 인증 기능 추가"

# 2. Context Engineering (자동)
context = CodeLayer.analyze_codebase({
    "related_files": ["auth.py", "user.model.py"],
    "existing_patterns": ["JWT 토큰 사용"],
    "dependencies": ["FastAPI", "SQLAlchemy"],
    "test_structure": ["pytest 구조"]
})

# 3. Multi-Agent 실행
agents = [
    Claude(task="백엔드 로직", context=context),
    Claude(task="프론트엔드", context=context),
    Claude(task="테스트 코드", context=context)
]

# 4. 병렬 처리
results = await asyncio.gather(*[
    agent.execute() for agent in agents
])

# 5. 결과 통합
CodeLayer.merge_changes(results)
```

---

## 왜 HumanLayer를 써야 할까요? (실제 개발자 이야기)

### 📖 스토리 1: 스타트업 창업자의 고민

**주인공**: 레네 (Casco 창업자, YC W25)

**문제 상황**:
```
스타트업 초기:
- 팀원: 개발자 3명
- 해야 할 일: 기능 100개
- 시간: 3개월

계산:
100개 기능 / 3명 = 1인당 33개
33개 / 90일 = 하루에 0.37개
→ 하루에 1개도 못 만듦 😱

투자자: "3개월 안에 MVP 보여줘야 투자해줄게"
레네: "망했다..."
```

**HumanLayer 도입 후**:
```
1주차:
- HumanLayer 설정 (1일)
- 팀원들 교육 (1일)

2주차부터:
- 개발자 1명 = AI 3개 지휘
- 실질적 개발자: 3명 × 3 = 9명 효과!

결과:
- 2개월 만에 80개 기능 완성
- 품질도 더 좋음 (AI가 테스트 자동 작성)
- 투자 유치 성공! 🎉

레네의 말:
"우리 회사 전체가 지금 CodeLayer 쓰고 있어요.
 계속 쩌는 PR을 연달아 찍어내고 있어요.
 믿을 수 없을 정도로 좋아요!"
```

**Before/After 비교**:
```
[Before: HumanLayer 없이]
1명의 개발자:
├─ 코드 작성: 4시간
├─ 디버깅: 2시간
├─ 테스트 작성: 1시간
└─ PR 리뷰 준비: 1시간
   = 총 8시간 / 1개 기능

[After: HumanLayer 사용]
1명의 개발자 + AI 3개:
├─ 요구사항 정의: 30분
├─ AI 작업 지휘: 30분
├─ 코드 리뷰: 1시간
└─ 통합 테스트: 1시간
   = 총 3시간 / 3개 기능 (병렬)

효율: 8배 향상! 🚀
```

---

### 📖 스토리 2: 주니어 개발자의 성장

**주인공**: 타일러 (Revlo.ai 창업자)

**초기 고민**:
```
타일러의 하루 (HumanLayer 이전):

09:00 - 업무 시작
10:00 - 코드 작성 중... 막힘
10:30 - StackOverflow 검색
11:00 - 아직도 해결 안 됨
11:30 - 시니어 개발자한테 질문
12:00 - 시니어가 바빠서 답변 못함
14:00 - 다른 방법 시도
15:00 - 또 막힘
16:00 - ChatGPT한테 물어봄
16:30 - 답변이 프로젝트와 안 맞음
17:00 - 포기하고 다른 작업
18:00 - 퇴근

진행도: 0% 😰
자신감: 📉 하락
```

**HumanLayer 도입 후**:
```
타일러의 하루 (HumanLayer 사용):

09:00 - 업무 시작
09:10 - CodeLayer에 요청
       "이 API 엔드포인트 추가해줘"
09:15 - AI 3개가 동시 작업
       ├─ AI 1: 백엔드 코드
       ├─ AI 2: 데이터 모델
       └─ AI 3: 테스트 케이스
09:45 - 코드 리뷰 (AI가 작성한 것)
10:00 - 약간 수정 후 완성! ✅
10:30 - 다음 기능 시작...

17:00 - 오늘 완성한 것:
       ✅ API 엔드포인트 5개
       ✅ 테스트 커버리지 95%
       ✅ 문서 자동 생성
       ✅ PR 3개 머지

18:00 - 뿌듯하게 퇴근 😊

타일러의 말:
"생산성이 최소 50% 향상됐어요.
 슈퍼휴먼 스타일 접근이 완전 말이 돼요.
 하루 동안 한 일을 돌아보면 너무 신기해요!"
```

**학습 효과**:
```
AI가 작성한 코드를 보면서:
"아, 이렇게 하는구나!"
"이 패턴이 더 좋네"
"테스트는 이렇게 짜는구나"

→ AI가 선생님 역할!
→ 실력이 자동으로 늘어남 📈
```

---

### 📖 스토리 3: 대기업 개발팀의 변화

**배경**: 100명 규모 개발팀

**문제 상황**:
```
레거시 코드베이스:
- 15년 된 프로젝트
- 파일 10,000개
- 개발자 100명
- 문서: 오래되고 부정확

신입 개발자 온보딩:
- 코드베이스 이해: 3개월
- 첫 PR: 4개월 차
- 독립 작업: 6개월 차

비용:
- 신입 1명 온보딩 비용: $50,000
- 시니어 멘토링 시간: 200시간
```

**HumanLayer 도입**:
```
Phase 1: 파일럿 (1개월)
- 5명 팀에 HumanLayer 도입
- 결과: 생산성 3배 증가

Phase 2: 확대 (3개월)
- 전체 팀에 확대
- 맞춤형 워크플로우 개발

Phase 3: 정착 (6개월)
- 모든 개발자가 일상적 사용
- 신입 온보딩 프로세스 변경

결과:
┌─────────────────┬─────────┬──────────┐
│ 지표            │ Before  │ After    │
├─────────────────┼─────────┼──────────┤
│ 온보딩 기간     │ 6개월   │ 2주      │
│ 첫 PR까지       │ 4개월   │ 3일      │
│ 버그 수정 시간  │ 2시간   │ 20분     │
│ 기능 개발 속도  │ 1주     │ 1일      │
│ 코드 리뷰 시간  │ 2시간   │ 30분     │
└─────────────────┴─────────┴──────────┘

비용 절감:
- 온보딩 비용: 90% 감소
- 멘토링 시간: 80% 감소
- 총 절감액: $2M/년
```

**핵심 변화**:
```
1. 신입도 즉시 기여 가능
   HumanLayer: "이 부분 수정해줘"
   AI: "기존 패턴 찾아서 적용했어요"

2. 레거시 코드 두렵지 않음
   HumanLayer: "이 함수 뭐하는 거야?"
   AI: "분석해서 설명드릴게요"

3. 리팩토링 쉬워짐
   HumanLayer: "이 모듈 현대화해줘"
   AI: "10개 파일 동시 수정 완료"
```

---

## 핵심 개념 3가지 (한눈에)

### 🎹 1. Superhuman for Claude Code (키보드 중심 작업)

#### 무슨 뜻인가요?

**Superhuman**: 유명한 이메일 앱
- 특징: 모든 것을 키보드로만 조작
- 마우스 사용 최소화
- 엄청난 속도

**HumanLayer의 접근**:
```
마우스 클릭 (느림):
1. 메뉴 클릭
2. 옵션 찾기
3. 서브메뉴 클릭
4. 실행
= 5초 소요

키보드 단축키 (빠름):
Cmd + K → "fix bug" → Enter
= 0.5초 소요

10배 빠름! ⚡
```

---

#### 실제 키보드 워크플로우

**시나리오**: 버그 수정

**일반 IDE**:
```
1. 🖱️ File 메뉴 클릭
2. 🖱️ Search 클릭
3. 🖱️ 검색창에 "bug" 입력
4. 🖱️ 파일 클릭
5. 🖱️ 코드 수정
6. 🖱️ Save 클릭
7. 🖱️ Terminal 열기
8. 🖱️ Test 실행
= 마우스 8번, 30초
```

**HumanLayer**:
```
⌨️ Cmd + K
⌨️ "fix authentication bug"
⌨️ Enter

→ AI가 자동으로:
  ✓ 관련 파일 찾기
  ✓ 버그 분석
  ✓ 코드 수정
  ✓ 테스트 실행
  ✓ PR 생성

= 키보드 3번, 3초 ⚡
```

---

#### 주요 단축키 (예상)

```
┌─────────────────┬──────────────────────────┐
│ 단축키          │ 기능                     │
├─────────────────┼──────────────────────────┤
│ Cmd + K         │ AI 명령 입력             │
│ Cmd + Shift + K │ 멀티 AI 세션 시작        │
│ Cmd + J         │ 파일 빠른 검색           │
│ Cmd + P         │ 컨텍스트 전환            │
│ Cmd + Enter     │ 코드 승인 및 적용        │
│ Cmd + /         │ AI에게 설명 요청         │
│ Esc             │ 취소/돌아가기            │
└─────────────────┴──────────────────────────┘
```

**비유**:
```
마우스 = 자전거
키보드 = 고속도로

목적지는 같지만,
고속도로가 훨씬 빠름! 🚗💨
```

---

### 🧠 2. Advanced Context Engineering (맥락 관리의 기술)

#### Context Engineering이 뭔가요?

**간단 정의**: AI에게 "필요한 정보만 정확하게" 제공하는 기술

**비유**: 의사 진료

**나쁜 예 (맥락 없음)**:
```
환자: "배 아파요"
의사: "어디가 아픈데요?"
환자: "그냥 배요"
의사: "언제부터요?"
환자: "글쎄요..."
의사: "뭘 먹었어요?"
환자: "기억 안 나요..."

→ 진단 불가능 😰
```

**좋은 예 (맥락 제공)**:
```
환자: "배 아파요"
     + 증상: 오른쪽 아랫배 통증
     + 시작: 2시간 전
     + 식사: 오늘 점심 해산물
     + 과거력: 없음
     + 약물 알레르기: 페니실린

의사: "아, 맹장염 의심됩니다"
→ 즉시 진단! ✅
```

---

#### AI 코딩에서의 Context

**나쁜 맥락 (일반 AI)**:
```
개발자: "로그인 함수 고쳐줘"

AI: "어떤 파일이요?"
    "로그인 방식이 뭐죠?"
    "데이터베이스는요?"
    "에러가 뭔가요?"

→ 질문 10개, 설명 20분 😫
```

**좋은 맥락 (HumanLayer)**:
```
개발자: "로그인 함수 고쳐줘"

HumanLayer가 자동으로:
✓ 파일: auth/login.py
✓ 관련 파일: user.model.py, jwt.utils.py
✓ 의존성: FastAPI, PyJWT
✓ 기존 패턴: JWT 토큰 기반
✓ 에러 로그: "Token expired" 에러
✓ 테스트: test_login.py
✓ 문서: API_DOCS.md

AI: "토큰 만료 시간 1시간으로 수정했어요"
→ 질문 0개, 즉시 해결! ✅
```

---

#### Context Engineering의 3가지 원칙

**원칙 1: Relevance (관련성)**
```
❌ 나쁜 예:
전체 코드베이스 10,000파일 → AI

AI: "너무 많아요..." 😵

✅ 좋은 예:
관련된 5개 파일만 → AI

AI: "이해했어요!" 😊
```

**원칙 2: Hierarchy (계층성)**
```
정보 우선순위:

🔴 매우 중요:
   - 현재 작업 파일
   - 에러 메시지
   - 직접 의존성

🟡 중요:
   - 관련 파일
   - 기존 패턴
   - 테스트 코드

🟢 참고용:
   - 문서
   - 설정 파일
   - 간접 의존성
```

**원칙 3: Freshness (최신성)**
```
타임스탬프 활용:

최근 수정: 2시간 전 → 🔴 우선
마지막 수정: 3개월 전 → 🟢 낮은 우선순위

이유:
최근 코드 = 현재 프로젝트 방향
오래된 코드 = 레거시일 가능성
```

---

#### HumanLayer의 Context Engineering 작동

**자동 분석**:
```python
# HumanLayer가 자동으로 하는 일

1. 파일 관계 분석
   ├─ import 문 추적
   ├─ 함수 호출 그래프
   └─ 의존성 트리 생성

2. 코드 패턴 학습
   ├─ 네이밍 컨벤션
   ├─ 아키텍처 패턴
   └─ 테스트 구조

3. 역사 추적
   ├─ Git 커밋 히스토리
   ├─ 최근 변경 사항
   └─ PR 리뷰 코멘트

4. 실행 환경 파악
   ├─ 설정 파일
   ├─ 환경 변수
   └─ 외부 서비스 연동
```

**결과**:
```
AI가 받는 정보 = 인간 시니어 개발자 수준

시니어 개발자가 아는 것:
✓ 프로젝트 구조
✓ 코딩 스타일
✓ 과거 이슈
✓ 팀 컨벤션

AI도 똑같이 알게 됨!
```

---

### 🚀 3. MULTICLAUD (병렬 AI 세션 실행)

#### 무슨 뜻인가요?

**MULTICLAUD** = **MULTI** + **CLAUD**(e)
→ 여러 개의 Claude(AI)를 동시에 실행

**비유**: 요리

**1명이 요리 (일반 방식)**:
```
요리사 1명:
1. 야채 썰기 (10분)
2. 고기 굽기 (15분)
3. 소스 만들기 (10분)
4. 플레이팅 (5분)
= 총 40분
```

**3명이 요리 (MULTICLAUD)**:
```
요리사 3명 (동시에):
요리사 A: 야채 썰기 (10분)
요리사 B: 고기 굽기 (15분)
요리사 C: 소스 만들기 (10분)
→ 15분 후 모두 완료

요리사 A: 플레이팅 (5분)
= 총 20분 (2배 빠름!)
```

---

#### 코딩에서의 MULTICLAUD

**시나리오**: 새 기능 추가

**1 AI (순차 처리)**:
```
AI 1:
├─ Step 1: 백엔드 API (30분)
│   → 완료 후
├─ Step 2: 프론트엔드 (20분)
│   → 완료 후
├─ Step 3: 테스트 (15분)
│   → 완료 후
└─ Step 4: 문서 (10분)

총 시간: 75분
```

**3 AI (병렬 처리)**:
```
┌──────────────┬──────────────┬──────────────┐
│   AI #1      │    AI #2     │    AI #3     │
├──────────────┼──────────────┼──────────────┤
│ 백엔드 API   │ 프론트엔드   │ 테스트 코드  │
│ (30분)       │ (20분)       │ (15분)       │
└──────────────┴──────────────┴──────────────┘
           모두 동시 실행!

AI #1: 문서 작성 (10분)

총 시간: 40분 (거의 2배 빠름!)
```

---

#### 실전 활용 예시

**예시 1: Full-Stack 기능 개발**

```bash
# 명령 하나로 3개 AI 실행
$ humanlayer multi "사용자 프로필 페이지 추가"

[AI #1 - Backend]
✓ User profile API endpoint
✓ Database migration
✓ Authentication middleware

[AI #2 - Frontend]
✓ Profile page component
✓ API integration
✓ State management

[AI #3 - Testing]
✓ Backend unit tests
✓ Frontend component tests
✓ E2E test scenarios

모두 완료! (25분 소요)
```

---

**예시 2: 버그 수정 + 리팩토링**

```bash
$ humanlayer multi "인증 버그 수정 및 코드 개선"

[AI #1 - Bug Fix]
📍 File: auth/login.py
✓ Token expiration 버그 수정
✓ Edge case 처리 추가

[AI #2 - Refactor]
📍 Files: auth/*.py
✓ 중복 코드 제거
✓ 함수 분리 및 정리
✓ Type hints 추가

[AI #3 - Tests]
📍 File: tests/test_auth.py
✓ 버그 재현 테스트 추가
✓ 리팩토링 영향 검증
✓ 커버리지 95% → 98%

완료! (15분)
```

---

**예시 3: 레거시 코드 현대화**

```bash
$ humanlayer multi "결제 모듈 Python 2 → 3 마이그레이션"

[AI #1 - Core Logic]
📍 payment/core.py
✓ print 문 → print()
✓ dict.iteritems() → dict.items()
✓ unicode → str

[AI #2 - Dependencies]
📍 requirements.txt, setup.py
✓ 라이브러리 버전 업데이트
✓ deprecated 패키지 교체
✓ 호환성 확인

[AI #3 - Tests & Docs]
📍 tests/, docs/
✓ 테스트 코드 업데이트
✓ 문서 예제 수정
✓ CI/CD 파이프라인 조정

완료! (45분)
```

---

#### Worktree 지원

**Worktree란?**
- Git 기능: 같은 레포를 여러 폴더에서 동시 작업
- 브랜치별로 독립적인 작업 공간

**HumanLayer + Worktree**:
```
project/
├─ main/           # 메인 브랜치
├─ feature-A/      # AI #1 작업
├─ feature-B/      # AI #2 작업
└─ bugfix-C/       # AI #3 작업

각 AI가 독립적으로 작업
충돌 없음!
```

**실행 예시**:
```bash
# Worktree 3개 생성 + AI 배치
$ humanlayer multi --worktree "3개 기능 동시 개발"

Creating worktrees...
✓ feature-auth → AI #1
✓ feature-payment → AI #2
✓ feature-notification → AI #3

30분 후...

✓ 3개 PR 자동 생성
✓ 각각 테스트 통과
✓ 코드 리뷰 대기 중
```

---

#### 원격 클라우드 워커 지원

**로컬 머신 부담 제로!**

```
┌──────────────┐
│  내 노트북   │  ← 가볍게 유지
└──────┬───────┘
       │ 명령만 전송
       │
   ┌───▼────────────────────┐
   │  HumanLayer Cloud      │
   ├────────────────────────┤
   │  AI #1  AI #2  AI #3   │  ← 클라우드에서 실행
   │  [GPU] [GPU] [GPU]     │
   └───┬────────────────────┘
       │ 결과만 전송
   ┌───▼───────┐
   │  완성된   │
   │  코드     │
   └───────────┘
```

**장점**:
- 💻 로컬 리소스 절약
- ⚡ 더 빠른 처리 (고성능 서버)
- 🔋 배터리 걱정 없음
- 🌐 어디서든 접근 가능

---

## 첫 걸음: 설치 및 설정

### 🚀 시스템 요구사항

**최소 사양**:
```
OS: macOS 12+, Windows 10+, Linux (Ubuntu 20.04+)
RAM: 8GB
저장공간: 2GB
인터넷: 필수 (AI API 호출)
```

**권장 사양**:
```
OS: macOS 14+, Windows 11
RAM: 16GB+
저장공간: 10GB+
인터넷: 고속 (50Mbps+)
```

---

### 📦 설치 방법

#### 방법 1: NPX (가장 간단)

```bash
# 대기자 명단 가입
npx humanlayer join-waitlist --email your@email.com

# 이메일 확인 후 받은 액세스 코드 사용
npx humanlayer install --access-code YOUR_CODE
```

**예상 출력**:
```
🚀 HumanLayer CodeLayer 설치 중...

✓ Node.js 버전 확인 (v18.0.0)
✓ 의존성 다운로드 중...
✓ Claude Code 연동 설정
✓ 설정 파일 생성

🎉 설치 완료!

다음 명령어로 시작하세요:
  humanlayer init
```

---

#### 방법 2: 소스코드 빌드 (개발자용)

```bash
# 레포지토리 클론
git clone https://github.com/humanlayer/humanlayer.git
cd humanlayer

# 의존성 설치
npm install

# 빌드
npm run build

# 전역 설치
npm link

# 확인
humanlayer --version
```

---

### ⚙️ 초기 설정

#### Step 1: 프로젝트 초기화

```bash
# 프로젝트 폴더로 이동
cd your-project

# HumanLayer 초기화
humanlayer init
```

**대화형 설정**:
```
? 프로젝트 이름은? my-awesome-app
? 언어/프레임워크는?
  ❯ Python + FastAPI
    TypeScript + React
    Go
    기타

? Claude API 키는? sk-ant-xxxxx
? 몇 개의 AI 세션을 사용하시겠어요? (1-5) 3
? Worktree를 사용하시겠어요? (Y/n) Y

✓ .humanlayer/config.yml 생성
✓ .humanlayer/context/ 폴더 생성
✓ .gitignore 업데이트
```

---

#### Step 2: API 키 설정

**Claude API 키 발급**:
```
1. claude.ai 방문
2. Settings → API Keys
3. "Create New Key" 클릭
4. 키 복사 (sk-ant-로 시작)
```

**환경 변수 설정**:

**macOS/Linux**:
```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 적용
source ~/.bashrc
```

**Windows**:
```powershell
# PowerShell에서
$env:ANTHROPIC_API_KEY = "sk-ant-xxxxx"

# 영구 설정
setx ANTHROPIC_API_KEY "sk-ant-xxxxx"
```

---

#### Step 3: 설정 파일 검증

```bash
# 설정 확인
humanlayer config check

# 예상 출력
✓ API 키 유효성 확인
✓ 프로젝트 구조 분석
✓ Git 레포지토리 감지
✓ Context 엔진 준비 완료

모든 설정이 올바릅니다! 🎉
```

---

### 🎯 첫 번째 명령어 실행

**테스트 명령**:
```bash
# 간단한 작업 요청
humanlayer "README.md에 프로젝트 설명 추가해줘"

# 실행 과정
🔍 코드베이스 분석 중...
📚 컨텍스트 수집 중...
🤖 AI 세션 시작...

[AI #1]
✓ README.md 읽기
✓ 프로젝트 구조 분석
✓ 설명 문구 작성
✓ 변경사항 적용

변경 사항을 확인하시겠어요? (Y/n) Y

[미리보기]
+ # My Awesome App
+
+ 이 프로젝트는 FastAPI를 사용한
+ 모던 웹 애플리케이션입니다.

적용하시겠어요? (Y/n) Y

✅ 완료! README.md 업데이트됨
```

**축하합니다! 🎉**
첫 번째 HumanLayer 명령을 성공적으로 실행했습니다!

---

## 첫 프로젝트: 5분 만에 시작하기

### 🎬 실습: "할 일 관리 API" 만들기

**목표**: HumanLayer로 간단한 REST API 완성

**소요 시간**: 5분

---

#### Step 1: 프로젝트 생성 (1분)

```bash
# 새 폴더 생성
mkdir todo-api
cd todo-api

# Git 초기화
git init

# HumanLayer 초기화
humanlayer init --quick

? 프레임워크? Python + FastAPI
✓ 프로젝트 구조 생성
```

---

#### Step 2: AI에게 요청 (30초)

```bash
humanlayer create "할 일 관리 REST API
- POST /todos (할 일 추가)
- GET /todos (목록 조회)
- PUT /todos/{id} (수정)
- DELETE /todos/{id} (삭제)
- SQLite 데이터베이스
- Pydantic 모델
- 기본 CRUD 테스트"
```

---

#### Step 3: AI 작업 관찰 (3분)

```bash
🚀 Multi-Agent 모드 시작

[AI #1 - Backend Core]
📝 작업 중...
✓ main.py 생성 (FastAPI 앱)
✓ models.py 생성 (Pydantic)
✓ database.py 생성 (SQLite)
✓ crud.py 생성 (CRUD 로직)

[AI #2 - API Endpoints]
📝 작업 중...
✓ routers/todos.py 생성
✓ 4개 엔드포인트 구현
✓ 에러 핸들링 추가
✓ API 문서 자동 생성

[AI #3 - Testing]
📝 작업 중...
✓ tests/test_todos.py 생성
✓ 10개 테스트 케이스 작성
✓ pytest 설정
✓ 커버리지 95%

모든 작업 완료! (2분 45초)
```

---

#### Step 4: 확인 및 실행 (1분)

```bash
# 파일 구조 확인
tree .

.
├── main.py
├── models.py
├── database.py
├── crud.py
├── routers/
│   └── todos.py
├── tests/
│   └── test_todos.py
├── requirements.txt
└── README.md

# 의존성 설치
pip install -r requirements.txt

# 서버 실행
uvicorn main:app --reload

# 출력
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.

# 브라우저에서 확인
http://127.0.0.1:8000/docs
→ Swagger UI 자동 생성!
```

---

#### Step 5: 테스트 (30초)

```bash
# API 테스트
curl -X POST http://127.0.0.1:8000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "HumanLayer 배우기", "done": false}'

# 응답
{
  "id": 1,
  "title": "HumanLayer 배우기",
  "done": false,
  "created_at": "2025-10-13T10:30:00"
}

# 목록 조회
curl http://127.0.0.1:8000/todos

[
  {
    "id": 1,
    "title": "HumanLayer 배우기",
    "done": false,
    "created_at": "2025-10-13T10:30:00"
  }
]
```

---

### 🎉 완성!

**생성된 것**:
- ✅ 완전한 REST API
- ✅ 데이터베이스 (SQLite)
- ✅ 자동 문서화 (Swagger)
- ✅ 테스트 코드 (95% 커버리지)
- ✅ 에러 핸들링
- ✅ README 문서

**소요 시간**: 5분
**작성한 코드**: 0줄
**AI가 작성한 코드**: 약 500줄

**비교**:
```
수동 작성 시:
- 코드 작성: 3시간
- 테스트 작성: 1시간
- 문서 작성: 30분
= 총 4.5시간

HumanLayer 사용:
- 요청 작성: 30초
- AI 작업: 3분
- 검증: 1분
= 총 5분

90배 빠름! 🚀
```

---

## 기본 워크플로우 이해하기

### 📊 HumanLayer 작업 흐름

**전체 프로세스**:
```
1. 요청 → 2. 분석 → 3. 계획 → 4. 실행 → 5. 검증
```

각 단계별 상세:

---

#### 1단계: 요청 (Request)

**개발자가 하는 일**:
```bash
humanlayer "기능 설명"
```

**좋은 요청 vs 나쁜 요청**:

**❌ 나쁜 요청**:
```bash
humanlayer "좀 고쳐줘"
→ 뭘 고치라는 거지? 😕

humanlayer "버그 수정"
→ 무슨 버그? 어디? 😕

humanlayer "개선"
→ 뭘 개선? 😕
```

**✅ 좋은 요청**:
```bash
humanlayer "로그인 API에서 토큰 만료 시
401 에러 대신 403 반환하는 버그 수정"
→ 명확함! 😊

humanlayer "사용자 프로필 페이지 추가:
- GET /api/users/{id} 엔드포인트
- 프로필 사진 업로드 기능
- 닉네임 변경 기능"
→ 구체적! 😊

humanlayer "payment 모듈 성능 개선:
- 데이터베이스 쿼리 최적화
- N+1 문제 해결
- 캐싱 추가"
→ 목표 명확! 😊
```

---

#### 2단계: 분석 (Analysis)

**HumanLayer가 자동으로 하는 일**:

```
🔍 코드베이스 스캔
├─ 관련 파일 찾기
├─ 의존성 파악
├─ 기존 패턴 학습
└─ 테스트 구조 분석

📊 복잡도 평가
├─ 난이도: Easy/Medium/Hard
├─ 예상 시간: 5분/20분/1시간
├─ 필요한 AI 수: 1개/2개/3개
└─ 리스크 수준: Low/Medium/High

🎯 실행 계획 수립
├─ 작업 분할
├─ AI 할당
└─ 우선순위 설정
```

**화면 출력 예시**:
```
🔍 요청 분석 중...

📊 분석 결과:
  난이도: Medium
  예상 시간: 15분
  필요 AI: 2개
  영향 범위: 5개 파일

📋 실행 계획:
  [AI #1] 백엔드 로직 (10분)
  [AI #2] 테스트 코드 (10분)

계획을 확인하시겠어요? (Y/n)
```

---

#### 3단계: 계획 (Planning)

**작업 분할 예시**:

**요청**: "소셜 로그인 추가 (Google, GitHub)"

**HumanLayer의 작업 분할**:
```
┌─────────────────────────────────────┐
│ Task Breakdown                      │
├─────────────────────────────────────┤
│ [AI #1] 백엔드                      │
│  ├─ OAuth2 설정                     │
│  ├─ Google 연동 엔드포인트          │
│  ├─ GitHub 연동 엔드포인트          │
│  ├─ 토큰 저장 로직                  │
│  └─ 사용자 매칭 로직                │
│                                     │
│ [AI #2] 프론트엔드                  │
│  ├─ 로그인 버튼 UI                  │
│  ├─ OAuth 팝업 처리                 │
│  ├─ 토큰 저장 (LocalStorage)        │
│  └─ 리다이렉트 처리                 │
│                                     │
│ [AI #3] 테스트 & 문서               │
│  ├─ OAuth 플로우 테스트             │
│  ├─ E2E 테스트                      │
│  ├─ 환경 설정 문서                  │
│  └─ 사용자 가이드                   │
└─────────────────────────────────────┘

예상 소요 시간: 25분
충돌 가능성: Low (독립적 작업)

진행하시겠어요? (Y/n)
```

---

#### 4단계: 실행 (Execution)

**실시간 진행 상황**:

```bash
🚀 Multi-Agent 실행 시작 (3 agents)

┌──────────────────────────────────────────────┐
│ [AI #1 - Backend] 진행률: ████████░░ 80%    │
├──────────────────────────────────────────────┤
│ ✓ OAuth2 configuration                       │
│ ✓ Google OAuth endpoint                      │
│ ✓ GitHub OAuth endpoint                      │
│ ⏳ Token storage logic                       │
│ ⏸ User matching logic                        │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ [AI #2 - Frontend] 진행률: ██████░░░░ 60%   │
├──────────────────────────────────────────────┤
│ ✓ Login button UI                            │
│ ✓ OAuth popup handling                       │
│ ⏳ Token storage                             │
│ ⏸ Redirect handling                          │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ [AI #3 - Testing] 진행률: ████░░░░░░ 40%    │
├──────────────────────────────────────────────┤
│ ✓ OAuth flow tests                           │
│ ⏳ E2E tests                                 │
│ ⏸ Documentation                              │
│ ⏸ User guide                                 │
└──────────────────────────────────────────────┘

총 진행률: 60% | 경과 시간: 15분 | 예상 남은 시간: 10분
```

---

#### 5단계: 검증 (Verification)

**자동 검증**:
```
🧪 자동 테스트 실행 중...

✓ Unit Tests: 45/45 passed
✓ Integration Tests: 12/12 passed
✓ E2E Tests: 5/5 passed
✓ Linting: No issues
✓ Type Checking: Pass
✓ Security Scan: No vulnerabilities

📊 Code Coverage:
  backend/: 96% (↑ 2%)
  frontend/: 94% (↑ 5%)

🎯 Quality Score: 9.2/10

변경사항 요약:
  추가: 8 files
  수정: 3 files
  삭제: 0 files

Git 변경사항:
  +782 lines
  -23 lines
```

**개발자 검토**:
```bash
변경 사항을 보시겠어요? (Y/n) Y

# Diff 표시
[backend/oauth.py]
+ def google_oauth_callback(code: str):
+     token = exchange_code_for_token(code)
+     user = get_or_create_user(token)
+     return create_session(user)

[frontend/LoginPage.tsx]
+ <button onClick={handleGoogleLogin}>
+   <GoogleIcon /> Google로 로그인
+ </button>

...

승인하시겠어요? (Y/n/e)
  Y = 승인 및 적용
  n = 거부
  e = 에디터에서 수정
```

---

### 🔄 반복 개선

**첫 시도가 완벽하지 않아도 OK!**

```bash
# 첫 시도
humanlayer "로그인 페이지 디자인 개선"

# 결과 확인 후
humanlayer "버튼 색상을 파란색으로 변경하고
폰트 크기 키워줘"

# 다시 확인 후
humanlayer "모바일 반응형 추가"

# 점진적 개선!
```

**대화형 개선**:
```
You: "결제 모듈 리팩토링"

AI: "어떤 부분을 리팩토링할까요?
     1. 함수 분리
     2. 에러 처리 개선
     3. 타입 안정성
     4. 전체"

You: "4"

AI: "알겠습니다. 전체 리팩토링 시작..."
```

---

## Part 2 연결

이어지는 내용은 **Part 2 - 고급편**에서 계속됩니다:

- 🚀 [[HumanLayer 완벽 가이드 Part 2 - 고급편|실전 활용 시나리오]]
- 🐛 문제 해결 가이드
- ❓ FAQ (자주 묻는 질문)
- 📚 용어 사전
- 🎓 학습 로드맵

---

## 체크리스트 (Part 1 완료 확인)

### 기본 이해
- [ ] HumanLayer가 뭔지 설명할 수 있다
- [ ] 3가지 핵심 개념 이해
- [ ] 왜 사용해야 하는지 안다

### 설치 및 설정
- [ ] HumanLayer 설치 완료
- [ ] API 키 설정 완료
- [ ] 첫 명령어 실행 성공

### 실습 완료
- [ ] 5분 프로젝트 완성
- [ ] 기본 워크플로우 이해
- [ ] AI에게 요청하는 법 터득

**완료율**: ___% (___/9)

---

**🎯 다음 단계**: [[HumanLayer 완벽 가이드 Part 2 - 고급편]]에서 실전 활용법을 배워보세요!

---

**작성일**: 2025-10-13
**Part**: 1/2 (기초편)
**난이도**: ⭐⭐☆☆☆ (초급)
**예상 학습 시간**: 30분