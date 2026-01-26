---
title: "MoAI-ADK 완벽 가이드 Part 1 - 기초와 시작"
created: '2025-10-12'
last_modified: '2025-10-12'
tags:
  - AI/개발도구
  - MoAI-ADK
  - Alfred
  - 초보자가이드
  - TDD
  - 에이전틱코딩
status: "완료"
type: "학습가이드"
priority: "high"
---

# MoAI-ADK 완벽 가이드 Part 1: 기초와 시작

> **🎯 이 노트의 목적**: AI 코딩 도구를 처음 접하는 개발자도 MoAI-ADK를 쉽게 이해하고 시작할 수 있도록 돕습니다.

---

## 📋 목차

1. [[#스토리로 시작하는 MoAI-ADK]]
2. [[#왜 MoAI-ADK가 필요할까]]
3. [[#Alfred를 만나보세요]]
4. [[#MoAI-ADK 핵심 개념 쉽게 이해하기]]
5. [[#설치하고 시작하기]]
6. [[#첫 프로젝트 만들어보기]]
7. [[#용어 설명]]

---

## 스토리로 시작하는 MoAI-ADK

### 민수의 이야기 🎭

민수는 6개월 차 주니어 개발자입니다. 최근 ChatGPT와 Claude 같은 AI 도구를 활용해서 코딩 속도가 엄청나게 빨라졌습니다.

**월요일**: ChatGPT에게 "로그인 기능 만들어줘"라고 요청
```javascript
// ChatGPT가 만든 코드
function login(user, pass) {
  if (user && pass) {
    return true;
  }
}
```

**수요일**: Claude에게 "회원가입 기능 추가해줘"라고 요청
```javascript
// Claude가 만든 코드
const signUp = async (username, password) => {
  const isValid = validateInput(username, password);
  return await createUser({username, password});
}
```

**금요일**: Gemini에게 "비밀번호 재설정 기능 만들어줘"라고 요청
```javascript
// Gemini가 만든 코드
class PasswordReset {
  constructor() {
    this.resetToken = null;
  }
  reset(email) { /* ... */ }
}
```

### 문제 발생! 💥

한 달 후, 팀장님이 물어봅니다:
- "민수씨, 로그인할 때 비밀번호는 어떻게 암호화하나요?"
- "회원가입과 로그인의 검증 로직이 왜 다른가요?"
- "이 코드에 테스트는 있나요?"

민수는 대답할 수 없었습니다. 각각의 코드가 **서로 다른 스타일**로 작성되었고, **왜 그렇게 만들었는지** 기억나지 않았습니다. 테스트 코드는 한 줄도 없었습니다.

이것이 바로 **"바이브 코딩의 함정"**입니다.

---

## 왜 MoAI-ADK가 필요할까

### 바이브 코딩의 5가지 문제점

#### 1. 아름답지만 작동하지 않는 코드 🎨❌

**문제 상황을 비유로 설명하면:**

AI가 만든 코드는 마치 **포토샵으로 멋지게 디자인된 자동차 사진**과 같습니다. 보기엔 완벽하지만 실제로 운전할 수는 없죠.

**실제 예시:**
```javascript
// AI가 생성한 "아름다운" 코드
function calculateDiscount(price, couponCode) {
  const discount = COUPON_DISCOUNTS[couponCode];
  return price * (1 - discount);
}

// 실제 실행하면?
calculateDiscount(10000, null);  // ❌ 에러! COUPON_DISCOUNTS[null]은 undefined
calculateDiscount(10000, "INVALID");  // ❌ 존재하지 않는 쿠폰
calculateDiscount(-500, "WELCOME20");  // 🤔 음수 가격?
```

**왜 이런 일이 생길까요?**
- AI는 "일반적인 경우"만 고려합니다
- 엣지 케이스(edge case)를 놓칩니다
- 에러 처리를 하지 않습니다

#### 2. 플랑켄슈타인 코드의 탄생 🧟

**플랑켄슈타인 코드란?**
영화 속 괴물처럼 여러 다른 부분을 억지로 붙여놓은 코드입니다.

**예시로 이해하기:**
```javascript
// 파일 1: ChatGPT가 만든 함수형 스타일
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 파일 2: Claude가 만든 객체지향 스타일
class EmailValidator {
  constructor() {
    this.pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }
  validate(email) {
    return this.pattern.test(email);
  }
}

// 파일 3: Gemini가 만든 절차형 스타일
function checkEmailFormat(email) {
  if (!email) return false;
  let hasAt = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') hasAt = true;
  }
  return hasAt;
}
```

**문제는?**
- 같은 기능을 세 가지 다른 방식으로 구현
- 팀원들이 어떤 것을 사용해야 할지 혼란스러움
- 유지보수가 악몽이 됨

#### 3. 디버깅 지옥 🔥

**비유로 설명:**
6개월 전에 AI에게 물어봐서 만든 코드는 **지도 없이 떠난 여행**과 같습니다. 어떻게 여기까지 왔는지 알 수 없으니, 문제가 생겨도 어디서부터 고쳐야 할지 모릅니다.

**실제 상황:**
```javascript
// 프로덕션에서 버그 발생!
// Error: Cannot read property 'userId' of undefined

// 이 코드를 누가 만들었을까?
// 왜 이렇게 만들었을까?
// 어떤 AI에게 물어봤을까?
// 당시 프롬프트가 뭐였을까?

// 🤷 아무도 모릅니다. AI 채팅 기록은 이미 삭제되었습니다.
```

#### 4. 요구사항 추적성 상실 📝❓

**스토리텔링:**

당신이 3개월 전에 작성한 코드를 보고 있습니다:

```javascript
function processOrder(order, user, inventory) {
  if (user.premium && inventory.stock > 10) {
    return order.price * 0.85;
  }
  return order.price;
}
```

팀장님: "왜 프리미엄 유저는 15% 할인이고, 재고가 10개 이상일 때만 적용되나요?"

당신: "... 음... 그게..." 😰

**왜를 잃어버리면:**
- 비즈니스 로직의 이유를 모름
- 변경할 때 다른 부분에 영향을 주는지 알 수 없음
- 새로운 팀원에게 설명할 수 없음

#### 5. 팀 협업 붕괴 👥💔

**비유:**
각자 다른 언어로 말하는 사람들이 함께 일하는 것과 같습니다.

**팀원 A**: "나는 AI에게 async/await 스타일로 만들라고 했어"
**팀원 B**: "나는 Promise 체이닝으로 만들었는데?"
**팀원 C**: "나는 콜백 함수로 했는데..."

결과: 같은 프로젝트 안에서 세 가지 비동기 처리 방식이 공존하는 혼란 🌀

### 해결책: MoAI-ADK가 제시하는 답 💡

MoAI-ADK는 이 모든 문제를 **체계적인 워크플로우**로 해결합니다:

1. **일관성**: 어떤 AI를 사용하든 같은 품질, 같은 스타일
2. **품질**: 자동으로 테스트, 보안, 문서화 보장
3. **추적성**: 모든 코드의 "왜"를 기록하고 연결
4. **협업**: 팀 전체가 같은 방법으로 일함

---

## Alfred를 만나보세요

### Alfred는 누구인가요? 🤵

**배트맨 영화를 본 적 있나요?**

Alfred Pennyworth는 배트맨(Bruce Wayne)의 충실한 집사입니다:
- 배트맨이 필요한 모든 것을 미리 준비해둡니다
- 위험한 순간에 즉각적인 지원을 제공합니다
- 항상 한 걸음 앞서 생각합니다

MoAI-ADK의 **Alfred**도 마찬가지입니다!

### Alfred의 역할 🎯

Alfred는 **10개의 AI 에이전트 팀**을 이끄는 **슈퍼 에이전트(SuperAgent)**입니다.

**비유로 이해하기:**
오케스트라를 상상해보세요. Alfred는 지휘자이고, 9명의 전문 연주자(에이전트)가 있습니다.

```
          🎭 Alfred (지휘자)
          중앙 오케스트레이터
                 |
    ┌────────────┼────────────┐
    |            |            |
🏗️ SPEC   →   💎 CODE   →   📖 DOC
(명세작성)    (코드구현)    (문서화)
```

### Alfred의 10명의 전문가 팀 👥

#### 핵심 3인방 (자동으로 일함)

**1. spec-builder 🏗️ (시스템 아키텍트)**
- **하는 일**: "무엇을 만들 것인가" 설계도 작성
- **비유**: 건축가가 설계도면을 그리는 것

**2. code-builder 💎 (수석 개발자)**
- **하는 일**: 테스트부터 작성하고, 코드 구현
- **비유**: 설계도를 보고 실제로 건물을 짓는 것

**3. doc-syncer 📖 (테크니컬 라이터)**
- **하는 일**: 코드와 문서가 항상 일치하도록 관리
- **비유**: 건물 사용 설명서를 만드는 것

#### 품질 보증 팀 (필요할 때 호출)

**4. tag-agent 🏷️ (지식 관리자)**
- 코드의 모든 부분이 올바르게 연결되었는지 확인

**5. debug-helper 🔬 (문제 해결 전문가)**
- 버그가 생기면 원인을 찾아 해결

**6. trust-checker ✅ (품질 검사관)**
- 코드 품질 기준을 통과했는지 검증

**7. git-manager 🚀 (버전 관리자)**
- Git 커밋, 브랜치, PR 관리

#### 시스템 관리자

**8. cc-manager 🛠️ (환경 설정 전문가)**
- Claude Code 설정 관리

**9. project-manager 📋 (프로젝트 매니저)**
- 프로젝트 초기 설정

### Alfred와 함께 일하는 방법 💬

**대화하듯이 명령하면 됩니다:**

```text
당신: "JWT 로그인 기능 만들어줘"

Alfred: "알겠습니다!
1. spec-builder에게 설계도를 그리라고 하겠습니다
2. code-builder에게 테스트와 코드를 만들라고 하겠습니다
3. doc-syncer에게 문서를 작성하라고 하겠습니다
4. 모든 게 완료되면 보고드리겠습니다!"
```

---

## MoAI-ADK 핵심 개념 쉽게 이해하기

### 1. SPEC (명세서) 📋

**SPEC이 뭔가요?**

음식점에서 요리를 주문할 때 메뉴판을 보는 것과 같습니다.

**메뉴판에 있는 것:**
- 🍕 피자 이름
- 📝 재료 설명
- 💰 가격
- ⏰ 조리 시간
- 🌶️ 매운맛 정도

**SPEC 문서에 있는 것:**
- 🎯 기능 이름
- 📝 무엇을 하는지 설명
- 💻 기술 스택
- ⏰ 예상 개발 시간
- ⚠️ 주의사항

**실제 SPEC 예시:**

```markdown
# SPEC-AUTH-001: 사용자 로그인

## 요구사항
사용자가 이메일과 비밀번호로 로그인할 수 있어야 합니다.

## 조건
- 이메일 형식이 올바른지 검증
- 비밀번호는 최소 8자 이상
- 3회 실패 시 5분 잠금

## 예상 결과
- 성공: JWT 토큰 반환
- 실패: 에러 메시지 반환
```

### 2. TDD (Test Driven Development) 🔴🟢🔵

**TDD를 교통신호등으로 이해하기:**

#### 🔴 RED (빨간불): 테스트 먼저 작성
```javascript
// 아직 구현 안 된 기능의 테스트를 먼저 작성
test('로그인 성공 시 토큰을 반환해야 함', () => {
  const result = login('user@test.com', 'password123');
  expect(result.token).toBeDefined();
});

// 실행하면? ❌ 실패! (아직 login 함수가 없으니까)
```

#### 🟢 GREEN (초록불): 최소한으로 구현
```javascript
// 테스트를 통과할 만큼만 구현
function login(email, password) {
  return { token: 'fake-token' };  // 일단 통과!
}

// 실행하면? ✅ 성공!
```

#### 🔵 REFACTOR (개선): 코드 품질 향상
```javascript
// 이제 제대로 구현
function login(email, password) {
  validateEmail(email);
  validatePassword(password);
  const user = findUser(email);
  if (!user || !comparePassword(password, user.hash)) {
    throw new Error('인증 실패');
  }
  return { token: generateJWT(user) };
}
```

**왜 이렇게 할까요?**
- 테스트가 없으면: 코드가 동작하는지 확인 못 함 😰
- 테스트가 있으면: 자신 있게 수정 가능 😎

### 3. @TAG 시스템 🏷️

**TAG를 도서관 라벨로 이해하기:**

도서관에서 책을 찾을 때:
```
철학 > 서양철학 > 플라톤 > [책 위치: A-123]
```

코드에서 TAG를 사용할 때:
```
@SPEC:AUTH-001 → @TEST:AUTH-001 → @CODE:AUTH-001 → @DOC:AUTH-001
```

**실제 사용 예시:**

```javascript
// @CODE:AUTH-001 | SPEC: .moai/specs/SPEC-AUTH-001/spec.md
/**
 * @CODE:AUTH-001: 사용자 인증 서비스
 *
 * 이 코드는 SPEC-AUTH-001에서 정의한 로그인 기능을 구현합니다.
 * 테스트: tests/auth/login.test.ts
 */
export function login(email, password) {
  // 구현 코드...
}
```

**TAG의 마법:**
6개월 후 버그가 생겼을 때, TAG를 따라가면:
1. 이 코드가 왜 만들어졌는지 (SPEC)
2. 어떻게 테스트했는지 (TEST)
3. 어떻게 사용하는지 (DOC)
를 모두 찾을 수 있습니다!

### 4. TRUST 5원칙 ⭐

**TRUST를 집을 짓는 것으로 이해하기:**

#### T - Test First (테스트 우선) 🏗️
**비유**: 집을 짓기 전에 설계도를 그리는 것
**실제**: 코드를 쓰기 전에 테스트를 작성

#### R - Readable (가독성) 📖
**비유**: 깔끔하게 정리된 방
**실제**: 다른 사람이 봐도 이해하기 쉬운 코드

#### U - Unified (통합성) 🧩
**비유**: 가구 스타일이 통일된 집
**실제**: 일관된 코드 스타일과 구조

#### S - Secured (보안성) 🔒
**비유**: 튼튼한 문과 창문 잠금장치
**실제**: 해킹과 보안 위협으로부터 안전한 코드

#### T - Trackable (추적성) 🔍
**비유**: 집의 건축 과정을 사진으로 기록
**실제**: 모든 코드 변경 이력과 이유를 기록

---

## 설치하고 시작하기

### 준비물 체크리스트 ✅

설치하기 전에 다음 항목을 확인하세요:

- [ ] **Node.js 18 이상** 설치됨
  ```bash
  node --version  # v18.0.0 이상이어야 함
  ```

- [ ] **Git 2.30 이상** 설치됨
  ```bash
  git --version  # 2.30.0 이상이어야 함
  ```

- [ ] **Claude Code** 실행 중
  ```bash
  claude --version
  ```

### 설치 방법 (3가지 옵션)

#### 옵션 A: Bun으로 설치 (가장 빠름! ⚡)

**Bun이 뭔가요?**
Node.js보다 5배 빠른 자바스크립트 런타임입니다.

```bash
# 1단계: Bun 설치
curl -fsSL https://bun.sh/install | bash

# 2단계: MoAI-ADK 설치
bun add -g moai-adk

# 3단계: 확인
moai --version
```

#### 옵션 B: npm으로 설치 (표준)

```bash
# 설치
npm install -g moai-adk

# 확인
moai --version
```

#### 옵션 C: 개발자 모드 (프로젝트 기여할 분들)

```bash
# 저장소 복제
git clone https://github.com/modu-ai/moai-adk.git
cd moai-adk/moai-adk-ts

# 의존성 설치
bun install  # 또는 npm install

# 빌드
bun run build

# 링크 생성
npm link

# 확인
moai --version
```

### 설치 문제 해결 🔧

#### 문제 1: "command not found: moai"

**원인**: PATH에 추가되지 않음

**해결법**:
```bash
# Bash 사용자
echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Zsh 사용자 (Mac)
echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### 문제 2: "Permission denied"

**원인**: 관리자 권한 필요

**해결법**:
```bash
# Mac/Linux
sudo npm install -g moai-adk

# Windows (관리자 권한으로 PowerShell 실행)
npm install -g moai-adk
```

#### 문제 3: 설치는 됐는데 실행이 안 됨

**진단 명령어**:
```bash
# 시스템 체크
moai doctor

# 설치된 위치 확인
which moai  # Mac/Linux
where moai  # Windows
```

---

## 첫 프로젝트 만들어보기

### 3분 안에 첫 기능 완성하기 ⏱️

**함께 "할 일 목록(Todo List)" 앱의 "할 일 추가" 기능을 만들어봅시다!**

#### 1단계: 프로젝트 초기화 (1분)

```bash
# 새 프로젝트 폴더 생성
mkdir my-todo-app
cd my-todo-app

# MoAI-ADK 초기화
moai init .

# 성공하면 이런 메시지가 나옵니다:
# ✅ MoAI-ADK가 성공적으로 설치되었습니다!
# 📁 다음 폴더가 생성되었습니다:
#    - .moai/
#    - .claude/
```

**무엇이 만들어졌나요?**
```
my-todo-app/
├── .moai/              # MoAI 설정 폴더
│   ├── config.json     # 프로젝트 설정
│   ├── specs/          # 명세서 저장소 (아직 비어있음)
│   └── project/        # 프로젝트 문서
├── .claude/            # Claude Code 설정
│   ├── commands/       # Alfred 명령어들
│   └── settings.json   # Claude 설정
└── tests/              # 테스트 폴더 (아직 비어있음)
```

#### 2단계: Claude Code에서 프로젝트 컨텍스트 설정 (30초)

```bash
# Claude Code 실행
claude
```

**Claude Code 안에서 입력:**
```text
/alfred:8-project
```

**Alfred가 물어봅니다:**
```
🤵 Alfred: 프로젝트에 대해 알려주세요.

1. 프로젝트 이름: my-todo-app
2. 사용 언어: TypeScript
3. 설명: 간단한 할 일 목록 관리 앱
```

**입력 예시:**
```text
1. my-todo-app
2. typescript
3. 사용자가 할 일을 추가, 수정, 삭제할 수 있는 웹 애플리케이션
```

#### 3단계: 첫 기능 개발 - SPEC 작성 (30초)

**Claude Code에서:**
```text
/alfred:1-spec "사용자가 새로운 할 일을 추가할 수 있다"
```

**Alfred가 하는 일:**
```
🤵 Alfred:
✅ spec-builder 에이전트를 호출합니다...
📝 SPEC-TODO-001 명세서를 작성합니다...
🌿 Git 브랜치를 생성합니다: feature/SPEC-TODO-001-add-todo
✅ 완료! .moai/specs/SPEC-TODO-001/spec.md 생성됨
```

**생성된 SPEC 파일을 열어봅시다:**
```markdown
# SPEC-TODO-001: 할 일 추가 기능

## 요구사항
사용자가 새로운 할 일을 입력하고 목록에 추가할 수 있어야 합니다.

## 조건
- 할 일 제목은 필수 입력
- 제목은 1-100자 사이
- 빈 문자열은 추가 불가
- 중복 제목도 허용

## 예상 동작
입력: "장보기"
출력: { id: 1, title: "장보기", completed: false, createdAt: "2025-10-12" }
```

#### 4단계: TDD로 구현하기 (1분)

**Claude Code에서:**
```text
/alfred:2-build TODO-001
```

**Alfred의 TDD 프로세스:**

**🔴 RED Phase - 테스트 작성**
```typescript
// tests/todo/add.test.ts
// @TEST:TODO-001

describe('할 일 추가', () => {
  test('유효한 제목으로 할 일을 추가할 수 있다', () => {
    const todo = addTodo('장보기');

    expect(todo.id).toBeDefined();
    expect(todo.title).toBe('장보기');
    expect(todo.completed).toBe(false);
    expect(todo.createdAt).toBeDefined();
  });

  test('빈 제목은 에러를 발생시킨다', () => {
    expect(() => addTodo('')).toThrow('제목은 필수입니다');
  });

  test('100자를 초과하는 제목은 에러를 발생시킨다', () => {
    const longTitle = 'a'.repeat(101);
    expect(() => addTodo(longTitle)).toThrow('제목은 100자 이하');
  });
});
```

**실행 결과:**
```
❌ 할 일 추가 › 유효한 제목으로 할 일을 추가할 수 있다
   ReferenceError: addTodo is not defined
```

**🟢 GREEN Phase - 최소 구현**
```typescript
// src/todo/service.ts
// @CODE:TODO-001

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

let todoIdCounter = 0;

export function addTodo(title: string): Todo {
  // 검증
  if (!title || title.trim() === '') {
    throw new Error('제목은 필수입니다');
  }

  if (title.length > 100) {
    throw new Error('제목은 100자 이하');
  }

  // Todo 생성
  const todo: Todo = {
    id: ++todoIdCounter,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString().split('T')[0]
  };

  return todo;
}
```

**실행 결과:**
```
✅ 할 일 추가 › 유효한 제목으로 할 일을 추가할 수 있다
✅ 할 일 추가 › 빈 제목은 에러를 발생시킨다
✅ 할 일 추가 › 100자를 초과하는 제목은 에러를 발생시킨다

Tests: 3 passed, 3 total
```

**🔵 REFACTOR Phase - 품질 개선**
Alfred가 자동으로:
- 타입 안전성 검증
- 코드 스타일 통일
- 주석 추가

#### 5단계: 문서 동기화 (30초)

**Claude Code에서:**
```text
/alfred:3-sync
```

**Alfred가 하는 일:**
```
🤵 Alfred:
✅ TAG 체인 검증 중...
   @SPEC:TODO-001 → @TEST:TODO-001 → @CODE:TODO-001 ✓
📖 API 문서 생성 중...
✅ docs/api/todo.md 생성 완료
🔍 고아 TAG 검사... 없음 ✓
✅ 모든 문서가 동기화되었습니다!
```

**생성된 문서:**
```markdown
# Todo API 문서

## addTodo(title: string): Todo

### 설명
새로운 할 일을 추가합니다.

### 매개변수
- `title` (string): 할 일 제목 (1-100자)

### 반환값
- `Todo` 객체

### 예외
- `Error`: 제목이 비어있거나 100자를 초과하는 경우

### 사용 예시
```typescript
const todo = addTodo('장보기');
console.log(todo);
// { id: 1, title: "장보기", completed: false, createdAt: "2025-10-12" }
```
```

### 축하합니다! 🎉

**3분 만에 만들어진 것들:**
- ✅ SPEC 문서: `.moai/specs/SPEC-TODO-001/spec.md`
- ✅ 테스트 코드: `tests/todo/add.test.ts` (100% 통과)
- ✅ 구현 코드: `src/todo/service.ts` (TYPE-SAFE)
- ✅ API 문서: `docs/api/todo.md`
- ✅ TAG 체인: `@SPEC → @TEST → @CODE → @DOC`
- ✅ Git 브랜치: `feature/SPEC-TODO-001-add-todo`

**일반 AI 코딩과의 차이:**
| 일반 AI 코딩 | MoAI-ADK |
|------------|----------|
| 코드만 생성 | SPEC + 테스트 + 코드 + 문서 |
| 테스트 없음 | 100% 테스트 커버리지 |
| 추적 불가 | 완벽한 TAG 체인 |
| 일관성 없음 | TRUST 원칙 자동 적용 |

---

## 용어 설명

### 기본 개념

**🔹 바이브 코딩 (Vibe Coding)**
- **쉽게 말하면**: AI에게 막 물어보고 나온 코드를 쓰는 것
- **문제**: 품질 보장 안 됨, 추적 불가
- **예시**: "로그인 기능 만들어줘" → 복붙 → 끝

**🔹 에이전틱 코딩 (Agentic Coding)**
- **쉽게 말하면**: AI 에이전트들이 체계적으로 협업해서 코드 만드는 것
- **장점**: 일관성, 품질, 추적성 보장
- **예시**: Alfred가 10개 에이전트를 조율해서 SPEC → TDD → 문서까지 완성

**🔹 TDD (Test Driven Development)**
- **쉽게 말하면**: 테스트를 먼저 쓰고 코드를 나중에 쓰는 개발 방법
- **순서**: 🔴 RED (테스트 작성) → 🟢 GREEN (구현) → 🔵 REFACTOR (개선)
- **왜?**: 버그를 미리 방지하고, 자신 있게 수정 가능

### 기술 용어

**🔹 SPEC (Specification, 명세서)**
- **쉽게 말하면**: "무엇을 만들 것인가"를 설명한 문서
- **내용**: 요구사항, 조건, 예상 결과
- **비유**: 음식점 메뉴판

**🔹 TAG (태그)**
- **쉽게 말하면**: 코드에 붙이는 "위치 추적 라벨"
- **형식**: `@SPEC:ID`, `@TEST:ID`, `@CODE:ID`, `@DOC:ID`
- **비유**: 도서관 책 분류 번호

**🔹 EARS 형식**
- **쉽게 말하면**: 명세서를 쓰는 표준 양식
- **구조**: Event (언제) + Action (무엇을) + Response (결과)
- **예시**: "사용자가 로그인 버튼을 클릭하면(Event), 인증을 시도하고(Action), 성공 시 대시보드로 이동한다(Response)"

**🔹 Edge Case (엣지 케이스)**
- **쉽게 말하면**: 드물게 발생하는 특수한 상황
- **예시**:
  - 빈 입력값
  - 음수 값
  - null, undefined
  - 최대값 초과

**🔹 JWT (JSON Web Token)**
- **쉽게 말하면**: 로그인 상태를 증명하는 디지털 티켓
- **사용**: 로그인 후 서버가 발급, 이후 요청 시 제시
- **비유**: 놀이공원 입장권 팔찌

### MoAI-ADK 전용 용어

**🔹 Alfred**
- **역할**: 10개 AI 에이전트를 지휘하는 슈퍼 에이전트
- **유래**: 배트맨의 집사 Alfred Pennyworth
- **하는 일**: 사용자 요청을 분석하고 적절한 에이전트에게 작업 할당

**🔹 슈퍼 에이전트 (SuperAgent)**
- **쉽게 말하면**: 다른 에이전트들을 관리하는 보스 에이전트
- **예시**: Alfred가 유일한 슈퍼 에이전트

**🔹 서브 에이전트 (Sub-Agent)**
- **쉽게 말하면**: 특정 분야 전문가 에이전트
- **예시**: spec-builder, code-builder, doc-syncer 등 9명

**🔹 TRUST 5원칙**
- **T**est First: 테스트 먼저
- **R**eadable: 읽기 쉽게
- **U**nified: 일관되게
- **S**ecured: 안전하게
- **T**rackable: 추적 가능하게

**🔹 플랑켄슈타인 코드**
- **쉽게 말하면**: 여러 AI가 각자 다른 스타일로 만든 코드를 억지로 합친 것
- **문제**: 유지보수 불가능
- **비유**: 머리, 몸, 다리가 각각 다른 생명체인 괴물

### 개발 도구 용어

**🔹 Node.js**
- **쉽게 말하면**: 자바스크립트를 브라우저 밖에서도 실행할 수 있게 해주는 프로그램
- **필요한 이유**: MoAI-ADK가 Node.js로 만들어짐

**🔹 Bun**
- **쉽게 말하면**: Node.js보다 5배 빠른 자바스크립트 실행 환경
- **장점**: 설치 속도, 실행 속도 모두 빠름

**🔹 npm (Node Package Manager)**
- **쉽게 말하면**: 자바스크립트 프로그램을 설치하는 앱스토어 같은 것
- **명령어**: `npm install -g moai-adk`

**🔹 Git**
- **쉽게 말하면**: 코드 변경 이력을 관리하는 프로그램
- **기능**: 과거 버전으로 되돌리기, 브랜치 만들기

**🔹 Claude Code**
- **쉽게 말하면**: 터미널에서 Claude AI를 사용할 수 있는 도구
- **역할**: Alfred와 통신하는 인터페이스

### 프로젝트 구조 용어

**🔹 .moai 폴더**
- **역할**: MoAI-ADK 설정과 SPEC 문서 저장
- **구조**:
  ```
  .moai/
  ├── config.json      # 프로젝트 설정
  ├── specs/           # SPEC 문서들
  └── project/         # 프로젝트 정보
  ```

**🔹 .claude 폴더**
- **역할**: Claude Code 설정과 명령어
- **구조**:
  ```
  .claude/
  ├── commands/        # Alfred 슬래시 명령어
  └── settings.json    # Claude 설정
  ```

**🔹 슬래시 명령어 (Slash Command)**
- **형식**: `/alfred:1-spec`, `/alfred:2-build` 등
- **사용처**: Claude Code 채팅창
- **역할**: Alfred에게 특정 작업 지시

---

## 다음 단계

**Part 1에서 배운 것:**
- ✅ 왜 MoAI-ADK가 필요한지
- ✅ Alfred와 10명의 에이전트 팀
- ✅ 핵심 개념 (SPEC, TDD, TAG, TRUST)
- ✅ 설치 및 첫 프로젝트 만들기

**Part 2에서 배울 것:**
- 🚀 3단계 워크플로우 완전 정복
- 🔍 TAG 시스템 고급 활용
- 🛡️ TRUST 5원칙 실전 적용
- 💻 다양한 언어별 예제 (Python, Java, Go 등)
- 🐛 문제 해결 및 디버깅
- 👥 팀 협업 전략

**계속 학습하려면:**
- [[MoAI-ADK 완벽 가이드 Part 2 - 실전 활용]]
- [[MoAI-ADK 공식 문서]] (GitHub)
- [[TDD 입문 가이드]]
- [[Git 기초 학습]]

---

## 연결된 노트
- [[MoAI-ADK 완벽 가이드 Part 2 - 실전 활용]]
- [[Claude Code 활용 가이드]]
- [[TDD 개념과 실습]]
- [[AI 코딩 도구 비교]]
- [[개발 워크플로우 최적화]]

---

**📝 노트 작성 정보**
- 작성 방법: 파인만 기법 (복잡한 개념을 쉽게 설명)
- 대상 독자: 프로그래밍 초보자, AI 코딩 입문자
- 학습 소요 시간: 약 30-40분
- 실습 포함: ✅ (3분 실전 튜토리얼)
