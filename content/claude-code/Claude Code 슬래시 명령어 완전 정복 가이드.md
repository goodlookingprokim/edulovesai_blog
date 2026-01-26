---
title: "Claude Code 슬래시 명령어 완전 정복 가이드"
created: '2025-12-28'
last_modified: '2025-12-28'
tags:
  - AI개발/Claude-Code
  - 개발도구/CLI
  - 학습자료/가이드
  - 자동화/명령어
status: "완료"
type: "가이드"
priority: "high"
---

# 🎓 Claude Code 슬래시 명령어 완전 정복 가이드

> 초보 개발자를 위한 실전 중심 가이드

---

## ⚡ 5분 빠른 시작

### 슬래시 명령어란?

Claude에게 미리 정해둔 역할을 `/명령어`로 호출하는 기능입니다.

**비유**: 스마트폰 단축어처럼, 복잡한 지시를 한 단어로 실행

---

## 📋 명령어 구조 분석

### 슬래시 명령어의 구조

슬래시 명령어는 `.md` 파일로 구성되며, 크게 **YAML 프론트매터**와 **본문**으로 나뉩니다.

#### 기본 구조

```markdown
---
description: 명령어 설명 (한 문장)
argument-hint: <입력 형식 안내>
---

[명령어가 수행할 작업 설명]

$ARGUMENTS  ← 사용자 입력이 여기에 들어옴

## 진행 순서
1. 단계 1
2. 단계 2
3. 단계 3

## 출력 형식
[결과를 어떻게 보여줄지]
```

---

### `/ip` 구조 분석

**목적**: 질문을 3가지 버전(간결/상세/영어)으로 빠르게 개선

**파일**: `~/.claude/commands/ip.md`

```markdown
---
description: 질문을 빠르게 개선 (3버전 + 영어)
argument-hint: [개선할 질문]
---

원본: $ARGUMENTS

## 진행
1. **분석**: 의도, 문제점 파악
2. **출력**: 간결/상세/영어 3가지 버전
3. **마무리**: pbcopy로 영어 버전 클립보드 복사
```

**핵심 특징**:
- 사용자 입력 없이 자동으로 3가지 버전 생성
- 영어 버전을 클립보드에 자동 복사 (`pbcopy`)
- 빠른 비교를 위한 테이블 형식 분석

---

### `/ipx` 구조 분석

**목적**: 스타일을 선택하여 정밀하게 질문 개선

**파일**: `~/.claude/commands/ipx.md`

```markdown
---
description: 질문을 선택한 스타일로 개선 (인터랙티브)
argument-hint: [개선할 질문]
---

원본: $ARGUMENTS

## 진행
1. **분석**: 유형 파악 후 추천 스타일 결정
2. **스타일 선택**: 6가지 중 선택 (정밀/구조화/간결/맥락/다중/대화형)
3. **개선 실행**: 선택된 스타일로 개선
4. **출력**: 개선된 질문 (한국어 + 영어)
5. **마무리**: 클립보드 복사 + 실행 옵션
```

**6가지 스타일**:
1. **정밀형**: 환경/상황/문제/시도/기대결과 구조화
2. **구조화형**: 배경/목표/현재상황/질문/제약조건
3. **간결형**: 핵심만 추출
4. **맥락형**: 프로젝트 파일 자동 분석 (Glob, Grep 사용)
5. **다중형**: 여러 관점의 질문으로 분리
6. **대화형**: 선택지 제공 후 맞춤형 개선

**핵심 특징**:
- `AskUserQuestion` 도구로 스타일 선택
- 상황에 맞는 정밀한 개선
- 맥락형은 프로젝트 구조 자동 파악

---

### `/clarify` 구조 분석

**목적**: 소크라테스식 질문으로 아이디어 구체화

**파일**: `~/.claude/commands/clarify.md`

```markdown
---
description: 막연한 아이디어를 구체화 (소크라테스 대화법)
argument-hint: <막연한 아이디어 또는 작업>
---

막연한 요청: $ARGUMENTS

## 진행
1. **Understanding Your Goal**: 핵심 목적 파악 질문
2. **Defining Scope**: 범위와 제약 조건 명확화
3. **Identifying Requirements**: 구체적 요구사항 도출
4. **Refining Details**: 세부 사항 정리
5. **Final Summary**: 구조화된 요구사항 정리

## 대화 원칙
- 한 번에 2-3개 질문만
- 선택지 제공 (가능하면)
- 이전 답변 기반으로 점진적 구체화
```

**핵심 특징**:
- 여러 턴(turn)에 걸친 대화형 진행
- 사용자 응답에 따라 다음 질문 조정
- 최종 정리된 요구사항 문서 생성

---

### 🎯 3가지 핵심 명령어

#### 1. `/ip` - 질문 빠른 개선
**용도**: 3가지 버전 자동 생성 (간결/상세/영어)
**특징**: 선택 과정 없이 즉시 결과
**사용 시점**: 빠르게 여러 옵션 비교하고 싶을 때

#### 2. `/ipx` - 맞춤형 개선
**용도**: 스타일 선택 가능 (정밀/구조화/간결/맥락/다중/대화형)
**특징**: 상황에 맞는 6가지 스타일 중 선택
**사용 시점**: 특정 방식으로 정밀하게 개선할 때

#### 3. `/clarify` - 아이디어 구체화
**용도**: 소크라테스식 질문으로 점진적 명확화
**특징**: 대화형으로 요구사항 파악
**사용 시점**: 막연한 아이디어를 구체화할 때

---

### 🔧 설치 방법

```bash
# 1. 명령어 디렉토리 생성
mkdir -p ~/.claude/commands

# 2. ip.md 파일 생성
cat > ~/.claude/commands/ip.md << 'EOF'
---
description: 질문을 빠르게 개선 (3버전 + 영어)
argument-hint: [개선할 질문]
---

원본: $ARGUMENTS

## 진행
1. **분석**: 의도, 문제점 파악
2. **출력**: 간결/상세/영어 3가지 버전
3. **마무리**: pbcopy로 영어 버전 클립보드 복사
EOF

# 3. ipx.md 파일 생성
cat > ~/.claude/commands/ipx.md << 'EOF'
---
description: 질문을 선택한 스타일로 개선 (인터랙티브)
argument-hint: [개선할 질문]
---

원본: $ARGUMENTS

## 진행
1. **분석**: 유형 파악 후 추천 스타일 결정
2. **스타일 선택**: 6가지 중 선택 (정밀/구조화/간결/맥락/다중/대화형)
3. **개선 실행**: 선택된 스타일로 개선
4. **출력**: 개선된 질문 (한국어 + 영어)
5. **마무리**: 클립보드 복사 + 실행 옵션
EOF

# 4. Claude 실행 및 확인
claude
```

---

## 📚 수준별 실전 예시

### 🔰 초급 - 첫 걸음 (7개 예시)

#### 예시 1: npm install 에러 해결

**상황**: `npm install` 실행 시 에러 발생, 어떻게 질문해야 할지 모름

**원래 질문**:
```
"npm install 했는데 에러 나요"
```

**`/ip` 사용**:
```bash
/ip npm install 했는데 에러 나요
```

**Claude의 자동 개선 결과**:

**분석**
| 의도 | 문제점 |
|------|--------|
| npm 설치 에러 해결 | 에러 메시지, Node 버전, 환경 정보 불명확 |

**간결 버전**
> npm install 실행 시 발생하는 에러 메시지와 Node 버전은?

**상세 버전**
> Node.js 프로젝트에서 `npm install` 실행 시 에러가 발생합니다.
> - 에러 로그: (전체 에러 메시지 공유)
> - Node 버전: `node --version` 결과
> - package.json: 의존성 목록
> 원인과 해결 방법을 알려주세요.

**English Version**
> What's the error message when running `npm install`, and what's your Node.js version?

✅ 영어 버전이 클립보드에 복사되었습니다.

**활용 방법**:
- 간결 버전 → StackOverflow 검색용
- 상세 버전 → Claude에게 상세 질문
- 영어 버전 → GPT-4, GitHub Issues에 질문

---

#### 예시 2: React 무한 루프 디버깅

**상황**: useEffect가 계속 실행되어 브라우저가 멈춤

**원래 질문**:
```
"useEffect에서 계속 실행돼요"
```

**`/ipx` 사용** → **정밀형** 선택:
```bash
/ipx useEffect에서 계속 실행돼요
```

**개선된 질문**:
```
환경: React 18.2, TypeScript 5.0
상황: useEffect 내에서 API 호출 중
문제: 무한 루프 발생, 브라우저 멈춤
시도한 것: console.log로 확인 → 계속 호출됨
기대결과: 컴포넌트 마운트 시 1회만 실행
```

**결과**:
- Claude가 의존성 배열 누락 가능성 지적
- 객체/배열 참조 이슈 설명
- 해결 코드 예시 제공

**학습 포인트**:
- 환경 정보 포함의 중요성
- "시도한 것" 명시로 중복 답변 방지

---

#### 예시 3: 로그인 기능 구현 요청

**상황**: 회원가입은 있는데 로그인 기능 추가 필요

**원래 질문**:
```
"로그인 만들어주세요"
```

**`/ipx` 사용** → **정밀형** 선택:

**개선된 질문**:
```
환경: React 18 + Express.js + MongoDB
상황: 회원가입 기능은 이미 구현됨 (bcrypt 암호화 사용 중)
문제: 로그인 API와 프론트엔드 UI 필요
시도한 것: 회원가입 코드 참고하여 구조 파악
기대결과:
- POST /api/login 엔드포인트 구현
- 이메일/비밀번호 검증
- JWT 토큰 발급 및 반환
- 로그인 성공 시 /dashboard 리다이렉트
```

**결과**:
- 즉시 실행 가능한 코드 제공
- 보안 고려사항 설명
- 에러 처리 방법 포함

---

#### 예시 4: 다크모드 추가

**상황**: 현재 프로젝트에 다크모드 기능 추가하고 싶음

**원래 질문**:
```
"다크모드 추가하고 싶어요"
```

**`/ipx` 사용** → **맥락형** 선택:

```bash
/ipx 현재 프로젝트에 다크모드 추가
```

**Claude의 맥락 분석**:
- Glob으로 CSS/SCSS 파일 검색
- 기존 색상 변수 파악 (`styles/variables.css`)
- 현재 테마 구조 이해

**개선된 질문**:
```
현재 프로젝트(React + Tailwind CSS)의 색상 체계를 분석해서,
다크모드 토글 기능을 추가해주세요.

요구사항:
- 기존 `styles/variables.css`의 색상 변수 활용
- 로컬 스토리지에 사용자 선택 저장
- 시스템 테마 감지 (prefers-color-scheme)
- 토글 버튼은 헤더에 추가
```

**장점**: 프로젝트 구조를 자동으로 파악하여 맞춤 제안

---

#### 예시 5: 클로저 개념 학습

**상황**: JavaScript 클로저가 뭔지 이해하고 싶음

**원래 질문**:
```
"클로저가 뭔가요?"
```

**`/ipx` 사용** → **대화형** 선택:

**Claude의 질문**:
```
클로저에 대해 무엇을 원하시나요?

선택지:
- [ ] 개념 이해 - 클로저란 무엇인지 이론적 설명
- [ ] 코드 예제 - 실제 동작하는 코드로 이해
- [ ] 실전 활용법 - 언제 어떻게 사용하는지
- [ ] 디버깅 - 클로저 관련 문제 해결
```

**선택 → "코드 예제"**

**개선된 질문**:
```
JavaScript 클로저를 코드 예제로 설명해주세요.

요청사항:
1. 기본 예제: 가장 간단한 클로저
2. 실전 예제: 실무에서 자주 쓰는 패턴
3. 주의사항: 흔한 실수와 해결법
4. 연습 문제: 직접 해볼 수 있는 문제 1개
```

**학습 효과**: 목적에 맞는 맞춤형 학습 가능

---

#### 예시 6: RESTful API 이해

**상황**: REST API가 뭔지 배우고 싶은데 어디서부터 시작해야 할지 모름

**원래 질문**:
```
"RESTful API가 뭔가요?"
```

**`/clarify` 사용**:
```bash
/clarify RESTful API가 뭔가요?
```

**Claude의 소크라테스식 질문 (Turn 1)**:
```markdown
## Understanding Your Goal

RESTful API에 대해 알고 싶으시군요.

---

구체적으로 무엇을 달성하려고 하시나요?
- REST API를 직접 만들어보고 싶으신가요?
- 기존 REST API를 사용하는 방법을 알고 싶으신가요?
- REST 개념 자체를 이해하고 싶으신가요?
```

**사용자 답변**: "개념 이해하고, 간단한 API도 만들어보고 싶어요"

**Claude (Turn 2)**:
```markdown
## Defining Scope

좋습니다. 개념과 실습 모두 원하시는군요.

---

어떤 수준의 API를 만들고 싶으신가요?
- 간단한 TODO 리스트 수준?
- 실제 서비스에 쓸 수 있는 수준?
- 어떤 언어/프레임워크를 사용하고 계신가요? (Node.js, Python, Java 등)
```

**사용자 답변**: "Node.js + Express로 간단한 블로그 API요"

**최종 요약**:
```markdown
## 정리된 학습 계획

**목표**: RESTful API 개념 이해 + 간단한 블로그 API 만들기

**학습 순서**:
1. REST 핵심 개념 (GET/POST/PUT/DELETE, 상태코드)
2. Express.js 기본 설정
3. 블로그 API 설계 (게시글 CRUD)
4. Postman으로 테스트

**구현할 엔드포인트**:
- GET /posts - 게시글 목록
- GET /posts/:id - 게시글 상세
- POST /posts - 게시글 작성
- PUT /posts/:id - 게시글 수정
- DELETE /posts/:id - 게시글 삭제

다음 단계: 개념 설명부터 시작할까요, 바로 코딩할까요?
```

---

#### 예시 7: useState vs useReducer 비교

**상황**: 언제 useState를 쓰고 언제 useReducer를 써야 하는지 혼란스러움

**원래 질문**:
```
"useState랑 useReducer 차이가 뭐에요?"
```

**`/ipx` 사용** → **구조화형** 선택:

**개선된 질문**:
```markdown
## 배경
React 상태 관리 방법을 선택해야 함

## 목표
useState와 useReducer의 차이를 이해하고
각각 언제 사용해야 하는지 판단 기준 확립

## 현재 상황
- useState만 사용 중
- 복잡한 상태 로직이 필요한 프로젝트 시작 예정

## 질문
1. 두 Hook의 핵심 차이점은?
2. 각각 언제 사용하는 것이 적합한가?
3. 실전 예제로 비교해줄 수 있나요?

## 제약조건
- React 18 사용
- TypeScript 환경
```

**결과**:
- 체계적인 비교 설명
- 선택 기준 플로우차트
- 동일 기능을 두 방식으로 구현한 비교 코드

---

### 🎯 중급 - 실무 적용 (7개 예시)

#### 예시 1: 성능 병목 해결

**상황**: 웹사이트 로딩이 너무 느림, Lighthouse 점수 40점

**원래 질문**:
```
"웹사이트가 너무 느려요"
```

**`/ipx` 사용** → **정밀형** 선택:

**개선된 질문**:
```
환경: Next.js 14, React 18, Vercel 배포
상황: 메인 페이지 로딩 시간 5초
문제: Lighthouse 점수 40점, LCP 4.2초
시도한 것:
- next/image로 이미지 최적화 완료
- 코드 스플리팅 적용 (dynamic import)
- Font 최적화 (next/font)
측정 결과:
- FCP: 2.1초
- LCP: 4.2초
- TTI: 6.3초
기대결과: LCP 2.5초 이하, Lighthouse 90점 이상
```

**결과**:
- 구체적 측정 지표로 정확한 진단
- 우선순위별 최적화 방법
- Before/After 비교 가능

**핵심 포인트**: 숫자로 측정 가능한 지표 포함

---

#### 예시 2: 메모리 누수 추적

**상황**: React 앱 장시간 사용 시 점점 느려짐

**원래 질문**:
```
"앱이 오래 쓰면 느려져요"
```

**`/ipx` 사용** → **정밀형** 선택:

**개선된 질문**:
```
환경: React 18, Redux Toolkit, Chart.js
상황: 대시보드 페이지에서 1시간 사용 후 현저히 느려짐
문제: Chrome Task Manager에서 메모리 사용량 500MB → 2GB 증가
시도한 것:
- useEffect cleanup 함수 추가
- 이벤트 리스너 정리 확인
- Chrome DevTools Memory 프로파일 실행 → Chart.js 인스턴스 누적 발견
기대결과: 메모리 누수 원인 파악 및 해결
```

**결과**:
- Chart.js destroy() 호출 누락 발견
- useEffect cleanup에서 차트 인스턴스 정리
- 메모리 사용량 500MB 유지

---

#### 예시 3: 대용량 파일 업로드 설계

**상황**: 5GB 동영상 파일 업로드 기능 필요

**원래 질문**:
```
"대용량 파일 업로드 어떻게 해요?"
```

**`/ipx` 사용** → **구조화형** 선택:

**개선된 질문**:
```markdown
## 배경
온라인 교육 플랫폼에서 강의 동영상 업로드 기능 필요

## 목표
- 최대 5GB 영상 파일 안정적 업로드
- 업로드 중 진행률 표시
- 네트워크 끊김 시 재개 가능 (Resumable Upload)

## 현재 상황
- Next.js 14 + AWS S3 환경
- 일반 form upload로는 500MB 이상 시 타임아웃

## 질문
1. Multipart Upload vs Resumable Upload 중 어느 것이 적합한가?
2. 프론트엔드 구현 방법 (S3 Presigned URL 사용?)
3. 진행률 추적 및 중단 시 재개 로직
4. 보안 고려사항 (파일 검증, 크기 제한)

## 제약조건
- 서버리스 아키텍처 (Lambda) 사용 중
- 프론트엔드에서 직접 S3 업로드 필요 (서버 부하 최소화)
```

**결과**:
- AWS S3 Multipart Upload 추천
- Presigned URL 생성 Lambda 함수
- 프론트엔드 구현 예시 코드
- 재개 로직 설명

---

#### 예시 4: 마이크로서비스 전환 계획

**상황**: 모놀리식 구조를 마이크로서비스로 전환하고 싶음

**원래 질문**:
```
"마이크로서비스로 바꾸고 싶어요"
```

**`/clarify` 사용**:

**Claude (Turn 1)**:
```markdown
## Understanding Your Goal

마이크로서비스 전환을 고려 중이시군요.

---

현재 어떤 문제를 해결하기 위해 마이크로서비스를 고려하시나요?
- 확장성 문제?
- 배포 속도?
- 팀 분리?
- 기술 스택 다양화?
```

**사용자**: "배포할 때마다 전체를 다시 올려야 해서 위험해요"

**Claude (Turn 2)**:
```markdown
## Defining Scope

배포 위험 최소화가 주요 목적이군요.

---

현재 시스템의 규모는?
- 사용자 수?
- 팀 크기?
- 주요 기능 모듈 개수?
어떤 부분부터 분리를 고려하고 계신가요?
```

**최종 계획**:
- 인증 서비스부터 분리 (독립 배포 가능)
- 점진적 전환 (Strangler Fig Pattern)
- API Gateway 도입
- 3개월 마이그레이션 계획

---

#### 예시 5: React 컴포넌트 코드 리뷰

**상황**: 작성한 컴포넌트가 제대로 작성되었는지 확인하고 싶음

**원래 질문**:
```
"이 코드 괜찮은가요? (코드 붙여넣기)"
```

**`/ipx` 사용** → **정밀형** + 파일 경로:

**개선된 질문**:
```
환경: React 18, TypeScript, ESLint + Prettier
상황: 사용자 프로필 컴포넌트 작성 완료
검토 요청:
- 성능 이슈 (불필요한 리렌더링?)
- 접근성 (a11y)
- TypeScript 타입 안정성
- 코드 가독성
파일 경로: src/components/UserProfile.tsx

[코드 붙여넣기]
```

**리뷰 결과**:
```markdown
## ✅ 잘한 점
- TypeScript 인터페이스 명확
- Props 타입 안정성 확보

## 🔧 개선 제안
1. **불필요한 리렌더링** (줄 23)
   - 문제: 매 렌더링마다 새 함수 생성
   - 해결: useCallback 사용
   ```tsx
   const handleClick = useCallback(() => {
     // ...
   }, [dependency]);
   ```

2. **접근성** (줄 45)
   - 문제: img 태그에 alt 속성 누락
   - 해결: 의미 있는 alt 텍스트 추가

## ⚠️ 잠재적 문제
- API 호출 에러 처리 누락 (try-catch 추가 필요)
```

---

#### 예시 6: API 보안 검토

**상황**: RESTful API 보안이 걱정됨

**`/ipx` 사용** → **정밀형**:

**개선된 질문**:
```
환경: Express.js, MongoDB, JWT 인증
상황: API 개발 완료, 프로덕션 배포 전
검토 요청:
- SQL Injection / NoSQL Injection 방어
- XSS, CSRF 방어
- Rate Limiting
- 민감 정보 노출
파일: server/routes/api.js

주요 우려 지점:
- 사용자 입력 검증 (줄 45-67)
- 에러 메시지 노출 (줄 103)
```

**보안 검토 결과**: OWASP Top 10 기준 체크리스트 + 수정 코드

---

#### 예시 7: Git 커밋 메시지 개선

**원래**:
```
git commit -m "수정"
```

**`/ip` 사용**:
```bash
/ip React 컴포넌트 useState 버그 수정했어요
```

**개선된 커밋 메시지**:

**간결 버전**:
```
fix: React useState 무한 루프 수정
```

**상세 버전**:
```
fix: useEffect 의존성 배열 누락으로 인한 무한 루프 수정

문제:
- UserProfile 컴포넌트에서 useEffect 무한 호출
- 의존성 배열에 user 객체 누락

해결:
- useEffect 의존성에 user.id 추가
- 객체 대신 primitive 값 사용

영향: UserProfile.tsx
```

**Conventional Commits 버전**:
```
fix(components): resolve infinite loop in UserProfile useEffect

- Add user.id to useEffect dependency array
- Replace object reference with primitive value

Fixes #123
```

---

### 🚀 고급 - 마스터 (7개 예시)

#### 예시 1: 레거시 코드 리팩토링 전략

**상황**: 3년 된 레거시 코드베이스 리팩토링 필요

**원래 질문**:
```
"레거시 코드 리팩토링하고 싶어요"
```

**`/ipx` 사용** → **맥락형** 선택:

**Claude의 자동 분석**:
```bash
# Glob으로 파일 구조 파악
src/**/*.js 파일: 247개
테스트 파일: 12개 (커버리지 5%)
의존성: jQuery, Backbone.js (2013년 기술)

# Grep으로 문제 패턴 검색
전역 변수 사용: 156곳
콜백 헬: 43곳
동기 AJAX: 28곳
```

**개선된 질문**:
```
현재 프로젝트 분석 결과:
- 247개 JS 파일, 테스트 커버리지 5%
- jQuery + Backbone.js 사용 중
- 전역 변수 156곳, 콜백 헬 43곳

리팩토링 전략:
1. 우선순위: 어디서부터? (핵심 기능 vs 주변 기능)
2. 기술 스택 교체: React로 전환? 아니면 점진적 개선?
3. 테스트 전략: 리팩토링 전 테스트 커버리지 확보 필요?
4. 일정: 서비스 중단 없이 진행 가능한 방법?

제약조건:
- 현재 서비스 중단 불가
- 팀 크기: 개발자 3명
- 기간: 6개월 내
```

**결과**: Strangler Fig Pattern으로 점진적 전환 계획

---

#### 예시 2: 테스트 커버리지 향상 전략

**상황**: 테스트가 거의 없는 프로젝트, 어디서부터 시작?

**`/ipx` 사용** → **맥락형**:

**Claude의 분석**:
```bash
# 현재 테스트 상태
총 파일: 180개
테스트 파일: 15개
커버리지: 23%

# 미테스트 핵심 영역
- 결제 로직: 0% (!!!위험)
- 사용자 인증: 40%
- 상품 관리: 60%
```

**개선된 질문**:
```
프로젝트 테스트 현황:
- 전체 커버리지: 23%
- 결제 로직: 0% (매우 위험)
- 인증: 40%
- 상품 관리: 60%

우선순위 전략:
1. 결제 로직부터 테스트 작성 (비즈니스 크리티컬)
2. 어떤 테스트 전략? (Unit / Integration / E2E 비율)
3. 목표 커버리지: 80%까지 올리려면 어떤 순서?

도구: Jest, React Testing Library, Cypress
기간: 3개월
```

**결과**: 위험도 기반 우선순위 + 3개월 로드맵

---

#### 예시 3: Claude + GPT-4 페어 프로그래밍

**상황**: Claude와 GPT-4를 조합하여 최적의 결과 도출

**워크플로우**:

```bash
# Step 1: Claude - 요구사항 명확화
/clarify 전자상거래 장바구니 기능 만들기

# Claude의 질문으로 요구사항 구체화
→ 할인 쿠폰 적용?
→ 재고 관리?
→ 결제 연동?

# Step 2: Claude - 프롬프트 개선
/ipx 다음 요구사항으로 장바구니 구현: [구체화된 요구사항]

# Step 3: 영어 버전으로 GPT-4에 질문
(클립보드에 복사된 영어 버전 사용)

# Step 4: GPT-4가 생성한 코드를 Claude에게 리뷰 요청
/review [GPT-4 코드 붙여넣기]

# Step 5: Claude의 개선 제안 반영
```

**장점**:
- Claude: 요구사항 명확화 + 코드 리뷰에 강함
- GPT-4: 코드 생성 속도 빠름
- 조합: 품질 + 속도

---

#### 예시 4: Gemini + Claude 협업

**상황**: 대용량 코드베이스 분석 + 정밀한 구현

**워크플로우**:

```bash
# Step 1: Gemini - 전체 코드베이스 분석
gemini -p "@src/ @lib/ 전체 인증 시스템 아키텍처 분석"

# Gemini의 장점: 대용량 컨텍스트 (100만 토큰)
→ 모든 파일 동시 분석
→ 의존성 관계 파악
→ 패턴 발견

# Step 2: Gemini 분석 결과를 Claude에게
Claude에게: "Gemini가 분석한 결과입니다: [분석 내용]
이를 바탕으로 OAuth 2.0 로그인 추가해주세요"

# Step 3: Claude - 정밀한 구현
→ 기존 코드 스타일 유지
→ 타입 안정성 확보
→ 테스트 코드 포함
```

**사용 사례**:
- 대규모 리팩토링: Gemini 분석 → Claude 구현
- 버그 찾기: Gemini가 전체 스캔 → Claude가 수정
- 문서화: Gemini가 전체 파악 → Claude가 문서 작성

---

#### 예시 5: 프로젝트별 커스텀 명령어 세트

**상황**: 팀 프로젝트에서 반복 작업 자동화

**커스텀 명령어 예시**:

```bash
# .claude/commands/commit-convention.md
---
description: 팀 컨벤션에 맞는 커밋 메시지 생성
argument-hint: <변경 내용>
---

다음 변경사항을 우리 팀 커밋 컨벤션에 맞게 작성:

$ARGUMENTS

## 팀 컨벤션
- feat: 새 기능
- fix: 버그 수정
- docs: 문서 변경
- style: 코드 포맷팅
- refactor: 리팩토링
- test: 테스트 추가
- chore: 빌드/설정 변경

형식: [타입](스코프): 제목 (영문 50자 이내)

예시:
feat(auth): add OAuth2 login support
fix(cart): resolve quantity update bug
```

**사용**:
```bash
/commit-convention useState 버그 수정, 무한 루프 해결

# 결과
fix(components): resolve useState infinite loop

- Add dependency array to useEffect
- Replace object reference with primitive value
```

---

#### 예시 6: 팀 공유 명령어 - PR 리뷰 자동화

**커스텀 명령어**: `.claude/commands/pr-review.md`

```markdown
---
description: PR 변경사항을 체계적으로 리뷰
allowed-tools: Read, Glob, Grep, Bash
argument-hint: <branch name>
---

PR 리뷰를 진행합니다.

## 진행 순서

1. **변경 파일 목록 확인**
   `git diff main...$ARGUMENTS --name-only`

2. **각 파일 검토**
   - 코드 스타일 (ESLint 규칙)
   - 성능 이슈
   - 보안 취약점
   - 테스트 커버리지

3. **리뷰 결과 작성**
   ✅ 승인 / ⚠️ 변경 요청 / 💬 코멘트

## 체크리스트
- [ ] Breaking Change 있는가?
- [ ] 테스트 추가되었는가?
- [ ] 문서 업데이트되었는가?
- [ ] 보안 이슈 없는가?
```

---

#### 예시 7: AI 페어 프로그래밍 워크플로우

**완전 자동화된 개발 흐름**:

```bash
# 1. 아이디어 구체화
/clarify 실시간 채팅 기능 추가

# 2. 요구사항 → 영어 프롬프트
/ipx 다음 요구사항으로 WebSocket 채팅 구현: [요구사항]

# 3. 코드 생성 (GPT-4/Claude 선택)
→ 영어 버전으로 코드 요청

# 4. 코드 리뷰
/review [생성된 코드]

# 5. 테스트 코드 생성
/test [함수명]

# 6. 커밋 메시지 생성
/commit-convention WebSocket 채팅 구현 완료

# 7. PR 생성
/pr-description
```

**효과**:
- 아이디어 → 배포까지 자동화
- 품질 일관성 유지
- 팀 전체 생산성 향상

---

## 🛠️ 커스텀 슬래시 명령어 제작 사례

> 이 섹션에서는 **즉시 복사해서 사용 가능한** 커스텀 명령어를 제공합니다.
> 각 명령어마다 완전한 파일 내용, 사용 예시, 커스터마이징 방법을 포함합니다.

---

### 🔰 초급 사례 - 기본 패턴 익히기

#### 사례 1: `/bugfix` - 버그 수정 가이드

**목적**: 버그 리포트를 받아 체계적으로 해결책 안내

**난이도**: ⭐ 초급
**사용 도구**: 없음 (순수 대화형)
**파일 위치**: `~/.claude/commands/bugfix.md`

**완전한 파일 내용**:
```markdown
---
description: 버그를 체계적으로 분석하고 해결 방법 안내
argument-hint: <버그 설명>
---

버그 리포트: $ARGUMENTS

## 진행 순서

1. **버그 분류**
   - 에러 타입 파악 (런타임/컴파일/논리)
   - 심각도 평가 (Critical/High/Medium/Low)

2. **원인 분석**
   - 에러 메시지 해석
   - 발생 조건 파악
   - 관련 코드 영역 추정

3. **해결 방법 제시**
   - 즉시 해결 가능한 방법
   - 근본 원인 제거 방법
   - 재발 방지 전략

4. **추가 질문** (필요시)
   - 에러 로그 전체
   - 환경 정보
   - 재현 단계

## 출력 형식

### 🐛 버그 분석
- **타입**: [에러 타입]
- **심각도**: [심각도]
- **추정 원인**: [원인 설명]

### 💡 해결 방법

#### 방법 1: 빠른 수정
```
[즉시 적용 가능한 코드]
```

#### 방법 2: 근본 해결
```
[근본 원인 제거 코드]
```

### 🔍 추가 확인 사항
- [ ] [확인할 것 1]
- [ ] [확인할 것 2]

### 📚 참고 자료
- [관련 문서 링크]
```

**사용 예시**:
```bash
/bugfix useState가 업데이트 안 되고 계속 이전 값이 나와요
```

**출력 예상**:
```markdown
### 🐛 버그 분석
- **타입**: 상태 관리 문제 (논리 에러)
- **심각도**: Medium
- **추정 원인**: setState의 비동기 특성 또는 클로저 문제

### 💡 해결 방법

#### 방법 1: 함수형 업데이트 사용
```jsx
// ❌ 잘못된 방법
setCount(count + 1)

// ✅ 올바른 방법
setCount(prevCount => prevCount + 1)
```

#### 방법 2: useEffect로 확인
```jsx
useEffect(() => {
  console.log('count 업데이트됨:', count)
}, [count])
```

### 🔍 추가 확인 사항
- [ ] 여러 번 연속으로 setState를 호출하는가?
- [ ] 이벤트 핸들러 내부에서 호출하는가?
- [ ] count를 다른 곳에서도 수정하는가?
```

**커스터마이징 방법**:
```markdown
# 팀 전용 버전으로 수정하려면:

1. 심각도 기준 변경:
   - Critical/High/Medium/Low → P0/P1/P2/P3

2. 출력에 Jira 티켓 템플릿 추가:
   ```
   ### 🎫 Jira 티켓 템플릿
   **Title**: [BUG] [요약]
   **Description**: [자동 생성된 분석]
   ```

3. 팀 코딩 컨벤션 링크 추가:
   ```
   ### 📚 참고 자료
   - 팀 버그 수정 가이드: https://wiki.yourteam.com/bug-fix
   ```
```

---

#### 사례 2: `/explain-code` - 코드 설명 요청

**목적**: 파일이나 코드 조각을 읽고 이해하기 쉽게 설명

**난이도**: ⭐ 초급
**사용 도구**: `Read`
**파일 위치**: `~/.claude/commands/explain-code.md`

**완전한 파일 내용**:
```markdown
---
description: 코드를 읽고 쉽게 설명
argument-hint: <파일 경로 또는 코드>
---

설명 요청: $ARGUMENTS

## 진행 순서

1. **파일 읽기** (경로가 주어진 경우)
   - Read 도구로 파일 내용 확인
   - 코드 구조 파악

2. **코드 분석**
   - 주요 기능 파악
   - 알고리즘 이해
   - 의존성 확인

3. **설명 생성**
   - 전체 개요
   - 단계별 상세 설명
   - 핵심 포인트 강조

## 출력 형식

### 📄 코드 개요
[전체적으로 무엇을 하는 코드인지 2-3문장]

### 🔍 상세 설명

#### 1. 전체 구조
[파일/함수/클래스 구조 설명]

#### 2. 주요 로직
```
[핵심 부분 코드]
```
👉 [이 부분이 하는 일]

#### 3. 입력/출력
- **입력**: [파라미터 설명]
- **출력**: [반환값 설명]

#### 4. 중요 포인트
- ⚠️ [주의할 점]
- 💡 [알아두면 좋은 것]

### 🎓 학습 포인트
[이 코드에서 배울 수 있는 것]
```

**사용 예시**:
```bash
/explain-code src/utils/debounce.js
```

**커스터마이징 - 난이도별 설명 추가**:
```markdown
---
description: 코드를 난이도별로 설명 (초급/중급/고급)
argument-hint: <파일 경로> [--level beginner|intermediate|advanced]
---

설명 요청: $ARGUMENTS

## 난이도 파악
- --level 플래그 확인
- 없으면 코드 복잡도로 자동 판단

## 난이도별 설명 전략

### Beginner (초급자용)
- 일상 비유 사용
- 전문 용어 최소화
- 단계별 상세 설명

### Intermediate (중급자용)
- 표준 기술 용어 사용
- 패턴과 베스트 프랙티스 강조
- 대안 구현 제시

### Advanced (고급자용)
- 성능 분석
- 시간/공간 복잡도
- 최적화 포인트
```

---

#### 사례 3: `/naming` - 변수/함수 이름 추천

**목적**: 더 나은 변수명, 함수명 제안

**난이도**: ⭐ 초급
**사용 도구**: 없음
**파일 위치**: `~/.claude/commands/naming.md`

**완전한 파일 내용**:
```markdown
---
description: 더 나은 변수/함수 이름 제안
argument-hint: <현재 이름과 역할 설명>
---

네이밍 요청: $ARGUMENTS

## 진행 순서

1. **현재 이름 분석**
   - 문제점 파악 (너무 짧음, 모호함, 오해의 소지)
   - 역할과 이름의 일치도 평가

2. **네이밍 컨벤션 적용**
   - camelCase / PascalCase / snake_case
   - 동사 + 명사 조합
   - 의미 명확성

3. **추천 이름 생성**
   - 3-5개 후보 제시
   - 각각의 장단점 설명

## 출력 형식

### 📝 현재 이름 분석
- **현재**: `[현재 이름]`
- **역할**: [설명]
- **문제점**: [문제점 나열]

### ✨ 추천 이름

#### 추천 1: `[이름1]` ⭐ 가장 추천
- **이유**: [왜 좋은지]
- **장점**: [장점]

#### 추천 2: `[이름2]`
- **이유**: [왜 이 이름인지]
- **적합한 경우**: [언제 사용하면 좋은지]

#### 추천 3: `[이름3]`
- **이유**: [설명]
- **단점**: [이 이름의 약점]

### 📚 네이밍 가이드
- 동사로 시작 (함수): `get`, `set`, `fetch`, `calculate`, `handle`
- 명사 사용 (변수): 복수형은 배열, 단수형은 객체
- 불린: `is`, `has`, `should` 접두사
```

**사용 예시**:
```bash
/naming 변수명 data, 역할: 서버에서 받아온 사용자 정보 목록
```

**출력 예상**:
```markdown
### 📝 현재 이름 분석
- **현재**: `data`
- **역할**: 서버에서 받아온 사용자 정보 목록
- **문제점**:
  - 너무 일반적 (어떤 data인지 불명확)
  - 복수형 표현 없음 (배열임을 알 수 없음)

### ✨ 추천 이름

#### 추천 1: `userList` ⭐ 가장 추천
- **이유**: 명확하고 간결
- **장점**: 사용자 정보임을 즉시 파악, 복수형 암시

#### 추천 2: `users`
- **이유**: 더 간결한 버전
- **적합한 경우**: 코드베이스가 이미 간결한 명명 규칙 사용 시

#### 추천 3: `fetchedUsers`
- **이유**: 데이터 출처 명시
- **단점**: 약간 길지만, 로컬 변수와 구분 가능
```

**커스터마이징 - 언어별 컨벤션**:
```markdown
## 언어 감지
- $ARGUMENTS에서 언어 추론 (JavaScript, Python, Java 등)
- 또는 --lang 플래그 사용

## 언어별 규칙

### JavaScript/TypeScript
- 변수: camelCase
- 클래스: PascalCase
- 상수: UPPER_SNAKE_CASE
- Private: _prefix 또는 #prefix

### Python
- 변수/함수: snake_case
- 클래스: PascalCase
- 상수: UPPER_SNAKE_CASE
- Private: _prefix

### Java
- 변수: camelCase
- 클래스: PascalCase
- 상수: UPPER_SNAKE_CASE
- 패키지: lowercase
```

---

### 🎯 중급 사례 - 실무 도구 만들기

#### 사례 4: `/review` - 코드 리뷰 자동화

**목적**: 체계적인 코드 리뷰 (성능, 보안, 가독성)

**난이도**: ⭐⭐ 중급
**사용 도구**: `Read`, `Glob`
**파일 위치**: `~/.claude/commands/review.md`

**완전한 파일 내용**:
```markdown
---
description: 코드 품질을 체계적으로 리뷰
argument-hint: <파일 경로 또는 디렉토리>
---

리뷰 대상: $ARGUMENTS

## 진행 순서

1. **파일 수집**
   - 단일 파일이면 Read
   - 디렉토리면 Glob으로 코드 파일 찾기
   - 테스트 파일은 제외

2. **다차원 분석**
   - 코드 품질 (가독성, 유지보수성)
   - 성능 (알고리즘 복잡도, 불필요한 연산)
   - 보안 (XSS, Injection, 민감정보 노출)
   - 베스트 프랙티스 준수

3. **우선순위 매기기**
   - 🔴 Critical: 즉시 수정 필요
   - 🟡 Warning: 개선 권장
   - 🔵 Suggestion: 고려사항

## 리뷰 체크리스트

### 1. 코드 품질
- [ ] 함수가 한 가지 일만 하는가?
- [ ] 변수명이 명확한가?
- [ ] 중복 코드는 없는가?
- [ ] 매직 넘버를 상수로 분리했는가?

### 2. 성능
- [ ] 불필요한 반복문은 없는가?
- [ ] 메모이제이션이 필요한 곳은?
- [ ] N+1 쿼리 문제는 없는가?

### 3. 보안
- [ ] 사용자 입력 검증하는가?
- [ ] SQL Injection 방어하는가?
- [ ] 민감 정보 로그에 노출되지 않는가?

### 4. 에러 처리
- [ ] try-catch가 적절한가?
- [ ] 에러 메시지가 유용한가?
- [ ] 에러 복구 전략이 있는가?

## 출력 형식

# 📊 코드 리뷰 리포트

## 📁 대상 파일
- [파일 목록]

## 🔴 Critical Issues (즉시 수정 필요)

### Issue 1: [제목]
**파일**: `path/to/file.js:42`
**문제**: [문제 설명]
**위험**: [보안/성능/버그 위험]

```diff
- [기존 코드]
+ [수정 코드]
```

**이유**: [왜 수정해야 하는지]

## 🟡 Warnings (개선 권장)

### Warning 1: [제목]
[동일 형식]

## 🔵 Suggestions (고려사항)

### Suggestion 1: [제목]
[동일 형식]

## ✅ 잘한 점
- [칭찬할 부분]

## 📈 종합 평가
- **품질 점수**: [0-100점]
- **주요 개선 포인트**: [요약]
- **예상 수정 시간**: [추정]
```

**사용 예시**:
```bash
# 단일 파일 리뷰
/review src/components/UserProfile.tsx

# 디렉토리 전체 리뷰
/review src/components/
```

**출력 예상**:
```markdown
# 📊 코드 리뷰 리포트

## 📁 대상 파일
- `src/components/UserProfile.tsx` (247 lines)

## 🔴 Critical Issues (즉시 수정 필요)

### Issue 1: 사용자 입력 검증 누락
**파일**: `src/components/UserProfile.tsx:45`
**문제**: 이메일 입력을 검증 없이 사용
**위험**: XSS 공격 가능

```diff
- <div>{user.email}</div>
+ <div>{DOMPurify.sanitize(user.email)}</div>
```

**이유**: 사용자 입력은 항상 검증/새니타이징 필요

## 🟡 Warnings (개선 권장)

### Warning 1: 불필요한 리렌더링
**파일**: `src/components/UserProfile.tsx:78`
**문제**: 매번 새 함수 생성

```diff
- onClick={() => handleClick(id)}
+ onClick={useCallback(() => handleClick(id), [id])}
```

## ✅ 잘한 점
- TypeScript 타입 정의가 명확함
- Props 검증이 잘 되어 있음

## 📈 종합 평가
- **품질 점수**: 72/100
- **주요 개선 포인트**: 보안 강화, 성능 최적화
- **예상 수정 시간**: 30분
```

---

#### 사례 5: `/test-gen` - 테스트 코드 생성

**목적**: 기존 코드에 대한 테스트 자동 생성

**난이도**: ⭐⭐ 중급
**사용 도구**: `Read`, `Write`, `Glob`
**파일 위치**: `~/.claude/commands/test-gen.md`

**완전한 파일 내용**:
```markdown
---
description: 기존 코드에 대한 테스트 자동 생성
argument-hint: <파일 경로> [--framework jest|vitest|mocha]
---

테스트 생성 대상: $ARGUMENTS

## 진행 순서

1. **대상 파일 읽기**
   - Read로 소스 코드 분석
   - 함수/클래스/메서드 파악

2. **테스트 프레임워크 감지**
   - package.json에서 확인
   - --framework 플래그 우선
   - 기본값: Jest

3. **테스트 케이스 생성**
   - Happy path (정상 동작)
   - Edge cases (경계값)
   - Error cases (에러 처리)
   - 모킹이 필요한 부분 파악

4. **테스트 파일 작성**
   - 파일명: [원본].test.js
   - 위치: 같은 디렉토리 또는 __tests__/

## 테스트 작성 원칙

### AAA 패턴
- **Arrange**: 테스트 준비
- **Act**: 실행
- **Assert**: 검증

### 커버리지 목표
- 함수당 최소 3개 테스트
- 모든 분기 커버
- 에러 케이스 포함

## 출력 형식

# 🧪 테스트 생성 완료

## 📝 생성된 테스트 파일
`[파일 경로].test.js`

## 📊 테스트 커버리지 예상
- **함수**: [분석된 함수 개수]
- **테스트 케이스**: [생성된 테스트 개수]
- **예상 커버리지**: [80-100%]

## 🔍 생성된 테스트 케이스

### `functionName()`
- ✅ 정상 동작 테스트
- ✅ null/undefined 처리
- ✅ 빈 배열 처리
- ✅ 에러 발생 시나리오

## 💡 추가 권장 사항
- [수동으로 추가하면 좋을 테스트]
- [통합 테스트 필요 여부]

## ▶️ 실행 방법
```bash
npm test [파일명].test.js
```
```

**사용 예시**:
```bash
/test-gen src/utils/calculateTotal.js
```

**생성되는 테스트 파일 예시**:
```javascript
// src/utils/calculateTotal.test.js
import { calculateTotal } from './calculateTotal'

describe('calculateTotal', () => {
  // Arrange-Act-Assert 패턴

  test('정상적인 숫자 배열 합계 계산', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5]

    // Act
    const result = calculateTotal(numbers)

    // Assert
    expect(result).toBe(15)
  })

  test('빈 배열은 0 반환', () => {
    expect(calculateTotal([])).toBe(0)
  })

  test('null/undefined 처리', () => {
    expect(calculateTotal(null)).toBe(0)
    expect(calculateTotal(undefined)).toBe(0)
  })

  test('음수 포함 계산', () => {
    expect(calculateTotal([1, -2, 3])).toBe(2)
  })

  test('소수점 계산 정확도', () => {
    expect(calculateTotal([0.1, 0.2])).toBeCloseTo(0.3)
  })
})
```

---

#### 사례 6: `/api-doc` - API 문서 자동 생성

**목적**: 코드에서 API 문서 추출/생성

**난이도**: ⭐⭐ 중급
**사용 도구**: `Read`, `Grep`, `Write`
**파일 위치**: `~/.claude/commands/api-doc.md`

**완전한 파일 내용**:
```markdown
---
description: API 엔드포인트 문서 자동 생성
argument-hint: <API 파일 경로>
---

문서화 대상: $ARGUMENTS

## 진행 순서

1. **API 엔드포인트 찾기**
   - Grep으로 라우트 패턴 검색
   - Express: `app.get`, `router.post`
   - FastAPI: `@app.get`, `@router.post`

2. **각 엔드포인트 분석**
   - HTTP 메서드
   - URL 경로
   - 파라미터 (쿼리, 바디, 경로)
   - 응답 형식

3. **문서 생성**
   - OpenAPI/Swagger 스타일
   - Markdown 형식
   - 예제 포함

## 문서 형식

각 엔드포인트마다:
- 엔드포인트 URL
- HTTP 메서드
- 설명
- 요청 파라미터
- 응답 예시
- 에러 코드

## 출력 형식

# 📚 API Documentation

## Base URL
`[서버 주소]`

---

## Endpoints

### `GET /api/users`
**설명**: 사용자 목록 조회

**Query Parameters**:
| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| page | number | ❌ | 페이지 번호 (기본: 1) |
| limit | number | ❌ | 페이지당 개수 (기본: 10) |

**Response 200**:
```json
{
  "users": [
    {
      "id": 1,
      "name": "홍길동",
      "email": "hong@example.com"
    }
  ],
  "total": 100,
  "page": 1
}
```

**Error Responses**:
- `400 Bad Request`: 잘못된 페이지 번호
- `500 Internal Server Error`: 서버 오류

**Example Request**:
```bash
curl -X GET "http://localhost:3000/api/users?page=1&limit=10"
```

---

### `POST /api/users`
**설명**: 새 사용자 생성

**Request Body**:
```json
{
  "name": "홍길동",
  "email": "hong@example.com",
  "password": "********"
}
```

**Response 201**:
```json
{
  "id": 1,
  "name": "홍길동",
  "email": "hong@example.com",
  "createdAt": "2025-12-28T00:00:00Z"
}
```

**Error Responses**:
- `400 Bad Request`: 유효하지 않은 이메일
- `409 Conflict`: 이미 존재하는 이메일
```

**사용 예시**:
```bash
/api-doc server/routes/users.js
```

**커스터마이징 - Postman Collection 생성**:
```markdown
## Postman Collection 생성 옵션

--format postman 플래그 추가 시:

```json
{
  "info": {
    "name": "User API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Users",
      "request": {
        "method": "GET",
        "url": {
          "raw": "{{baseUrl}}/api/users?page=1&limit=10",
          "host": ["{{baseUrl}}"],
          "path": ["api", "users"],
          "query": [
            {"key": "page", "value": "1"},
            {"key": "limit", "value": "10"}
          ]
        }
      }
    }
  ]
}
```

파일로 저장하여 Postman에 임포트 가능
```

---

### 🚀 고급 사례 - 프로젝트 수준 자동화

#### 사례 7: `/refactor-plan` - 리팩토링 계획 수립

**목적**: 레거시 코드 분석 → 단계별 리팩토링 계획

**난이도**: ⭐⭐⭐ 고급
**사용 도구**: `Read`, `Glob`, `Grep`, `Bash`
**파일 위치**: `~/.claude/commands/refactor-plan.md`

**완전한 파일 내용**:
```markdown
---
description: 레거시 코드 분석 및 리팩토링 계획 수립
argument-hint: <디렉토리 경로>
---

리팩토링 대상: $ARGUMENTS

## 진행 순서

1. **프로젝트 구조 파악**
   - Glob으로 모든 소스 파일 수집
   - 디렉토리 구조 분석
   - 의존성 그래프 생성 (import/require 추적)

2. **문제점 식별**
   - 코드 복잡도 측정 (순환 복잡도)
   - 중복 코드 검색
   - 안티패턴 탐지
   - 테스트 커버리지 분석

3. **우선순위 결정**
   - 비즈니스 임팩트
   - 기술 부채 심각도
   - 리팩토링 난이도
   - 팀 역량

4. **단계별 계획 수립**
   - Phase 1: 안전한 수정 (테스트 추가, 포맷팅)
   - Phase 2: 구조 개선 (함수 분리, 모듈화)
   - Phase 3: 아키텍처 변경 (패턴 적용)

## 분석 도구 활용

### Bash 명령어로 메트릭 수집
```bash
# 파일 개수
find . -name "*.js" | wc -l

# 코드 라인 수
find . -name "*.js" -exec wc -l {} + | tail -1

# 가장 큰 파일
find . -name "*.js" -exec wc -l {} + | sort -n | tail -5

# 중복 함수명
grep -r "function " . | cut -d: -f2 | sort | uniq -d
```

### Grep으로 안티패턴 검색
- `var` 사용 (let/const 권장)
- `eval()` 사용
- `console.log` (프로덕션)
- TODO/FIXME 주석

## 출력 형식

# 🔨 리팩토링 계획서

## 📊 프로젝트 현황

### 규모
- **총 파일 수**: [개수]
- **총 코드 라인**: [개수]
- **평균 파일 크기**: [라인]
- **테스트 커버리지**: [%]

### 기술 스택
- **언어**: JavaScript (ES6)
- **프레임워크**: React 16.8
- **의존성**: [주요 라이브러리]

---

## 🚨 발견된 문제점

### Critical (즉시 조치 필요)
1. **보안 취약점** (3개 발견)
   - `eval()` 사용: `src/utils/parser.js:45`
   - XSS 방어 누락: `src/components/Comment.js:78`

2. **성능 문제** (5개 발견)
   - 무한 루프 위험: `src/hooks/useData.js:23`
   - N+1 쿼리: `src/api/users.js:102`

### High (빠른 시일 내 조치)
1. **코드 중복** (23곳)
   - 동일 로직 반복: `src/utils/validation.js`

2. **낮은 테스트 커버리지**
   - 핵심 모듈: 12%
   - 목표: 80%

### Medium (계획적 개선)
1. **레거시 패턴**
   - Class 컴포넌트 47개 → Hooks로 전환
   - Redux Thunk → RTK Query

---

## 📋 리팩토링 로드맵

### Phase 1: 안정화 (2주)
**목표**: 안전한 변경으로 품질 기반 마련

**Tasks**:
- [ ] 핵심 기능 테스트 추가 (커버리지 30% → 60%)
- [ ] ESLint/Prettier 설정 및 적용
- [ ] 보안 취약점 3개 수정
- [ ] 위험한 `eval()` 제거

**예상 산출물**:
- 테스트 파일 15개
- 보안 패치 PR 1개
- 린트 설정 파일

---

### Phase 2: 구조 개선 (4주)
**목표**: 모듈화 및 중복 제거

**Tasks**:
- [ ] 중복 코드 23곳 → 공통 유틸로 추출
- [ ] 500줄 이상 파일 5개 → 분리
- [ ] 순환 의존성 3개 제거
- [ ] 컴포넌트 10개 Hooks로 전환

**Before/After 예상**:
| 메트릭 | Before | After |
|--------|--------|-------|
| 평균 파일 크기 | 320줄 | 180줄 |
| 중복 코드 | 23곳 | 0곳 |
| 순환 의존성 | 3개 | 0개 |

---

### Phase 3: 아키텍처 전환 (6주)
**목표**: 현대적 패턴 적용

**Tasks**:
- [ ] Redux Thunk → RTK Query 전환
- [ ] 모든 Class → Functional Components
- [ ] Context API 재설계
- [ ] 타입스크립트 도입 검토

**마이그레이션 전략**:
1. 새 기능부터 RTK Query 적용
2. 레거시 코드는 점진적 전환
3. 병렬 실행 (두 방식 공존)

---

## 📈 성공 지표

### 정량 목표
- 테스트 커버리지: 12% → 80%
- 빌드 시간: 45초 → 20초
- 번들 크기: 2.3MB → 1.5MB

### 정성 목표
- 코드 리뷰 시간 50% 단축
- 버그 발생률 30% 감소
- 신규 기능 개발 속도 2배

---

## ⚠️ 리스크 관리

### 리스크 1: 서비스 중단
**완화 전략**:
- Feature Flag 사용
- 카나리 배포
- 롤백 계획 수립

### 리스크 2: 일정 지연
**완화 전략**:
- Phase별 독립 실행 가능
- 우선순위 기반 조정

---

## 👥 팀 역할

| 역할 | 담당자 | 책임 |
|-----|-------|-----|
| Tech Lead | [이름] | 아키텍처 결정 |
| Developer | [이름] | Phase 1 실행 |
| QA | [이름] | 테스트 작성 |

---

## 📅 타임라인

```
Week 1-2:  Phase 1 (안정화)
Week 3-6:  Phase 2 (구조 개선)
Week 7-12: Phase 3 (아키텍처 전환)
```

---

## 🎯 다음 단계

1. 팀 회의로 계획 검토
2. Phase 1 티켓 생성 (Jira)
3. 리팩토링 브랜치 생성
4. 첫 번째 테스트 PR 작성
```

**사용 예시**:
```bash
/refactor-plan src/
```

---

#### 사례 8: `/security-audit` - 보안 감사

**목적**: OWASP Top 10 기준 보안 취약점 스캔

**난이도**: ⭐⭐⭐ 고급
**사용 도구**: `Read`, `Grep`, `Bash`
**파일 위치**: `~/.claude/commands/security-audit.md`

**완전한 파일 내용**:
```markdown
---
description: OWASP Top 10 기준 보안 취약점 스캔
argument-hint: <프로젝트 디렉토리>
---

보안 감사 대상: $ARGUMENTS

## 진행 순서

1. **스캔 범위 결정**
   - Glob으로 소스 파일 수집
   - 환경 설정 파일 확인 (.env, config/)

2. **OWASP Top 10 체크**
   - A01:2021 – Broken Access Control
   - A02:2021 – Cryptographic Failures
   - A03:2021 – Injection
   - A04:2021 – Insecure Design
   - A05:2021 – Security Misconfiguration
   - A06:2021 – Vulnerable Components
   - A07:2021 – Identification and Authentication Failures
   - A08:2021 – Software and Data Integrity Failures
   - A09:2021 – Security Logging and Monitoring Failures
   - A10:2021 – Server-Side Request Forgery (SSRF)

3. **패턴 매칭**
   - Grep으로 위험 패턴 검색
   - 민감 정보 노출 확인
   - 하드코딩된 비밀번호/토큰

4. **자동 리포트 생성**

## 취약점 패턴 (Grep 검색)

### Injection
```bash
grep -r "eval(" .
grep -r "innerHTML" .
grep -r "dangerouslySetInnerHTML" .
grep -r "SELECT.*\+" .  # SQL Injection
```

### 민감 정보 노출
```bash
grep -r "password.*=" .
grep -r "API_KEY.*=" .
grep -r "console.log(" . | grep -i "password\|token\|secret"
```

### 인증/인가
```bash
grep -r "localStorage.setItem.*token" .
grep -r "JWT" . | grep -v "verify"
```

## 출력 형식

# 🛡️ 보안 감사 리포트

**생성 일시**: 2025-12-28
**대상**: $ARGUMENTS
**스캔 파일**: [개수]개

---

## 📊 요약

| 심각도 | 발견 개수 |
|--------|----------|
| 🔴 Critical | [개수] |
| 🟠 High | [개수] |
| 🟡 Medium | [개수] |
| 🔵 Low | [개수] |

**종합 점수**: [0-100점]
**권장 조치**: [즉시/1주일 내/1개월 내]

---

## 🔴 Critical Vulnerabilities

### CVE-2025-XXXX: SQL Injection 취약점
**파일**: `src/api/users.js:45`
**OWASP**: A03:2021 – Injection

**취약 코드**:
```javascript
const query = `SELECT * FROM users WHERE id = ${userId}`
db.query(query)
```

**공격 시나리오**:
```javascript
// 공격자 입력: userId = "1 OR 1=1"
// 실행 쿼리: SELECT * FROM users WHERE id = 1 OR 1=1
// 결과: 모든 사용자 데이터 노출
```

**수정 방법**:
```javascript
// ✅ Prepared Statement 사용
const query = 'SELECT * FROM users WHERE id = ?'
db.query(query, [userId])
```

**영향도**:
- 데이터 유출 가능
- 관리자 권한 탈취 위험

**CVSS 점수**: 9.8 (Critical)

---

### CVE-2025-YYYY: 하드코딩된 API 키
**파일**: `src/config/api.js:12`
**OWASP**: A02:2021 – Cryptographic Failures

**취약 코드**:
```javascript
const API_KEY = "sk_live_abc123xyz456"
```

**수정 방법**:
```javascript
// ✅ 환경 변수 사용
const API_KEY = process.env.API_KEY

// .env 파일 (git에 커밋하지 않음)
API_KEY=sk_live_abc123xyz456
```

---

## 🟠 High Vulnerabilities

### XSS (Cross-Site Scripting)
**파일**: `src/components/Comment.js:78`
**OWASP**: A03:2021 – Injection

**취약 코드**:
```javascript
<div dangerouslySetInnerHTML={{__html: comment}} />
```

**수정**:
```javascript
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(comment)}} />
```

---

## 🟡 Medium Vulnerabilities

### 약한 암호화 알고리즘
**파일**: `src/utils/crypto.js:23`

**취약 코드**:
```javascript
const hashed = md5(password)  // ❌ MD5는 취약
```

**수정**:
```javascript
const hashed = await bcrypt.hash(password, 10)  // ✅ bcrypt 사용
```

---

## 🔵 Low Vulnerabilities / Best Practices

### 민감 정보 로깅
**파일**: `src/middleware/auth.js:34`

**문제**:
```javascript
console.log('User login:', user)  // 비밀번호 포함될 수 있음
```

**권장**:
```javascript
console.log('User login:', {id: user.id, email: user.email})
```

---

## ✅ 보안 강점

- HTTPS 사용 중
- CORS 설정 적절
- 세션 타임아웃 설정

---

## 📋 조치 체크리스트

### 즉시 조치 (Critical)
- [ ] SQL Injection 수정 (users.js:45)
- [ ] API 키 환경 변수로 이동
- [ ] .env 파일을 .gitignore에 추가

### 1주일 내 (High)
- [ ] XSS 방어 (DOMPurify 설치)
- [ ] JWT 검증 로직 추가
- [ ] 인증 미들웨어 강화

### 1개월 내 (Medium/Low)
- [ ] MD5 → bcrypt 전환
- [ ] 로깅에서 민감 정보 제거
- [ ] 보안 헤더 추가 (helmet.js)

---

## 🔧 권장 도구

- **SAST**: SonarQube, ESLint Security Plugin
- **DAST**: OWASP ZAP
- **Dependency Scan**: npm audit, Snyk
- **Secret Scan**: GitGuardian, TruffleHog

---

## 📚 참고 자료

- OWASP Top 10 2021: https://owasp.org/Top10/
- Node.js Security Checklist: https://cheatsheetseries.owasp.org/
```

**사용 예시**:
```bash
/security-audit .
```

---

#### 사례 9: `/team-workflow` - 팀 워크플로우 자동화

**목적**: 커밋 → PR → 리뷰 → 머지 전체 워크플로우

**난이도**: ⭐⭐⭐ 고급
**사용 도구**: `Read`, `Bash`, `AskUserQuestion`
**파일 위치**: `.claude/commands/team-workflow.md` (프로젝트 로컬)

**완전한 파일 내용**:
```markdown
---
description: 팀 워크플로우 자동화 (커밋-PR-리뷰-머지)
argument-hint: <작업 설명>
---

작업 내용: $ARGUMENTS

## 진행 순서

1. **브랜치 전략 확인**
   - Git Flow / GitHub Flow / Trunk-Based
   - 팀 컨벤션에 맞는 브랜치명 생성

2. **변경사항 분석**
   - git diff로 수정 파일 확인
   - 영향 범위 파악

3. **커밋 메시지 생성**
   - Conventional Commits 형식
   - 팀 템플릿 적용

4. **PR 생성 및 리뷰 요청**
   - PR 제목/본문 자동 생성
   - 리뷰어 자동 할당
   - 라벨 추가

5. **머지 전 체크**
   - CI/CD 통과 확인
   - 리뷰 승인 여부

## 팀 컨벤션 (커스터마이징 필요)

### 브랜치명 규칙
```
feature/[JIRA-123]-short-description
bugfix/[JIRA-456]-bug-description
hotfix/critical-issue
```

### 커밋 메시지 규칙
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type**:
- feat: 새 기능
- fix: 버그 수정
- docs: 문서 변경
- style: 포맷팅
- refactor: 리팩토링
- test: 테스트 추가
- chore: 빌드/설정

### PR 템플릿
```markdown
## 📝 Summary
[변경 내용 요약]

## 🎯 Purpose
[왜 이 변경이 필요한지]

## 🔍 Changes
- [ ] 변경 1
- [ ] 변경 2

## 📸 Screenshots (if UI)
[스크린샷]

## ✅ Checklist
- [ ] 테스트 추가
- [ ] 문서 업데이트
- [ ] Breaking Change 없음
```

## 출력 및 실행

# 🚀 팀 워크플로우 자동화

## 1️⃣ 브랜치 생성

**브랜치명**: `feature/user-profile-update`

```bash
git checkout -b feature/user-profile-update
```

---

## 2️⃣ 변경사항 확인

**수정된 파일**:
- `src/components/UserProfile.tsx` (+45, -12)
- `src/api/users.js` (+23, -5)
- `src/styles/profile.css` (+15, -3)

**영향 범위**: 사용자 프로필 컴포넌트

---

## 3️⃣ 커밋 생성

**커밋 메시지**:
```
feat(profile): add bio field to user profile

- Add bio textarea to UserProfile component
- Update API endpoint to handle bio field
- Add styling for bio section

Closes #USER-123
```

**실행 명령어**:
```bash
git add src/components/UserProfile.tsx src/api/users.js src/styles/profile.css

git commit -m "feat(profile): add bio field to user profile

- Add bio textarea to UserProfile component
- Update API endpoint to handle bio field
- Add styling for bio section

Closes #USER-123"

git push origin feature/user-profile-update
```

---

## 4️⃣ PR 생성

**PR 제목**: `[USER-123] Add bio field to user profile`

**PR 본문**:
```markdown
## 📝 Summary
사용자 프로필에 자기소개(bio) 필드 추가

## 🎯 Purpose
사용자가 자신을 소개할 수 있는 기능 제공
- Jira 티켓: USER-123
- 요청자: Product Team

## 🔍 Changes
- ✅ UserProfile 컴포넌트에 bio textarea 추가
- ✅ PUT /api/users/:id API에 bio 필드 처리 로직 추가
- ✅ CSS 스타일링 추가
- ✅ 최대 500자 제한 적용

## 📸 Screenshots
[스크린샷 첨부 안내]

## ✅ Checklist
- [x] 테스트 추가 (UserProfile.test.tsx)
- [x] API 문서 업데이트
- [x] Breaking Change 없음
- [ ] 디자인 리뷰 필요

## 👥 Reviewers
@alice (프론트엔드)
@bob (백엔드)

## 🏷️ Labels
`feature`, `user-profile`, `needs-design-review`
```

**GitHub CLI 명령어**:
```bash
gh pr create \
  --title "[USER-123] Add bio field to user profile" \
  --body "$(cat pr-body.md)" \
  --reviewer alice,bob \
  --label "feature,user-profile,needs-design-review"
```

---

## 5️⃣ 머지 전 체크리스트

**자동 확인 항목**:
- ✅ CI/CD 통과 (빌드, 테스트, 린트)
- ✅ 코드 리뷰 승인 (2명 이상)
- ✅ Conflicts 없음
- ⏳ 디자인 리뷰 대기 중

**머지 전략**: Squash and Merge

**머지 명령어** (리뷰 승인 후):
```bash
gh pr merge --squash --delete-branch
```

---

## 📋 다음 단계

1. PR 링크에서 리뷰어에게 알림 전송
2. CI/CD 결과 모니터링
3. 리뷰 피드백 반영
4. 승인 후 머지
5. Jira 티켓 상태 업데이트 (In Review → Done)

---

## 🔔 알림

**Slack 메시지 템플릿**:
```
🚀 New PR: [USER-123] Add bio field to user profile
👤 Author: @yourname
🔗 Link: https://github.com/team/repo/pull/123
👥 Reviewers: @alice @bob

Please review when you have a moment! 🙏
```
```

**사용 예시**:
```bash
/team-workflow 사용자 프로필에 자기소개 필드 추가
```

**프로젝트별 커스터마이징**:
```markdown
## 팀 설정 파일

`.claude/team-config.yml` 생성:
```yaml
git_flow: github_flow  # or git_flow, trunk_based

branch_prefix:
  feature: "feature/"
  bugfix: "bugfix/"
  hotfix: "hotfix/"

commit_template: |
  <type>(<scope>): <subject>

  <body>

  Closes #<JIRA-TICKET>

reviewers:
  frontend:
    - alice
    - charlie
  backend:
    - bob
    - david

auto_labels:
  - based-on-files:
      - pattern: "src/components/**"
        label: "frontend"
      - pattern: "src/api/**"
        label: "backend"

slack_webhook: "https://hooks.slack.com/services/YOUR/WEBHOOK"
```

명령어가 이 설정을 읽어서 자동으로 적용
```

---

## 💡 실전 팁과 트러블슈팅

### 슬래시 명령어가 작동하지 않을 때

**1. 파일 위치 확인**
```bash
# 전역 명령어
ls ~/.claude/commands/

# 프로젝트 명령어
ls .claude/commands/
```

**2. YAML 프론트매터 문법 확인**
```yaml
---
description: 설명 (따옴표 불필요)
argument-hint: <형식> (꺾쇠괄호 사용)
---
```

**일반적인 실수**:
```yaml
# ❌ 잘못된 예
---
description: "따옴표 사용"  # 불필요
argument-hint: [대괄호]      # 꺾쇠괄호로 변경
allowed-tools: Read Write    # 쉼표로 구분
---

# ✅ 올바른 예
---
description: 코드를 리뷰합니다
argument-hint: <파일 경로>
allowed-tools: Read, Write, Glob
---
```

**3. $ARGUMENTS 위치**
```markdown
# ❌ 잘못된 예
대상 파일: {arguments}  # 중괄호 사용
대상 파일: ARGUMENTS   # $ 누락

# ✅ 올바른 예
대상 파일: $ARGUMENTS
```

---

### 자주 하는 실수

**1. 도구 권한 누락**
```markdown
# 문제: Read 도구 사용했는데 allowed-tools에 없음
---
description: 파일을 읽고 분석
# allowed-tools 누락!
---

파일 읽기: Read 도구 사용  # ❌ 작동 안 함

# 해결
---
description: 파일을 읽고 분석
allowed-tools: Read, Glob
---
```

**2. 너무 긴 명령어**
```markdown
# ❌ 비효율적: 모든 것을 하나의 명령어에
/super-command --analyze --review --test --document

# ✅ 효율적: 목적별로 분리
/review      # 리뷰만
/test-gen    # 테스트 생성만
/api-doc     # 문서화만
```

**3. 하드코딩된 값**
```markdown
# ❌ 잘못된 예
리뷰어: @alice  # 항상 alice만 할당

# ✅ 올바른 예
리뷰어를 선택하세요:
- @alice (프론트엔드)
- @bob (백엔드)

AskUserQuestion으로 동적 선택
```

---

### 성능 최적화 팁

**1. 파일 검색 최적화**
```markdown
# ❌ 느림: 모든 파일 검색
Glob으로 **/* 검색  # 수천 개 파일

# ✅ 빠름: 필요한 것만
Glob으로 src/**/*.js 검색  # JS 파일만
Glob으로 --exclude node_modules  # 제외
```

**2. Read vs Grep 선택**
```markdown
# Read: 파일 전체 내용 필요
# Grep: 특정 패턴만 찾기

# ❌ 비효율
Read로 100개 파일 읽어서 "TODO" 찾기

# ✅ 효율
Grep으로 "TODO" 패턴 검색
```

**3. Bash 명령어 최소화**
```markdown
# ❌ 느림: Bash를 여러 번
Bash: ls src/
Bash: wc -l src/file1.js
Bash: wc -l src/file2.js

# ✅ 빠름: 한 번에
Bash: find src/ -name "*.js" -exec wc -l {} +
```

---

### 팀 공유 방법

**1. Git 저장소에 포함**
```bash
# 프로젝트 루트에 생성
mkdir -p .claude/commands

# 팀 명령어 추가
cat > .claude/commands/team-commit.md << 'EOF'
[명령어 내용]
EOF

# Git에 커밋
git add .claude/
git commit -m "docs: add team slash commands"
git push
```

**2. README에 사용법 추가**
```markdown
## 개발 가이드

### 슬래시 명령어 사용

이 프로젝트는 다음 커스텀 명령어를 제공합니다:

- `/team-commit <작업>` - 팀 컨벤션에 맞는 커밋 생성
- `/team-review <파일>` - 팀 코드 리뷰 기준 적용
- `/api-doc <파일>` - API 문서 자동 생성

**설치**:
명령어는 `.claude/commands/`에 있으며, Claude가 자동으로 인식합니다.
```

**3. 문서화**
```markdown
# .claude/commands/README.md

# 팀 슬래시 명령어 가이드

## 사용 가능한 명령어

### /team-commit
**목적**: 팀 컨벤션에 맞는 커밋 메시지 생성
**사용법**: `/team-commit 로그인 버그 수정`
**출력**: Conventional Commits 형식 메시지

### /team-review
**목적**: 팀 코드 리뷰 체크리스트 적용
**사용법**: `/team-review src/components/Login.tsx`
**출력**: 리뷰 리포트 + 개선 제안

## 명령어 수정 방법

1. `.claude/commands/[명령어].md` 파일 수정
2. YAML 프론트매터 변경 금지 (설명만 수정)
3. PR로 팀 리뷰 후 머지
```

---

### 디버깅 방법

**1. Claude에게 직접 물어보기**
```
Claude야, /my-command를 실행했는데 작동하지 않아.
파일 위치는 ~/.claude/commands/my-command.md이고
내용은 다음과 같아:

[파일 내용 붙여넣기]

뭐가 문제일까?
```

**2. 간단한 버전부터 테스트**
```markdown
# 최소 버전으로 시작
---
description: 테스트
---

Hello, $ARGUMENTS
```

작동하면 점진적으로 기능 추가.

**3. 로그 확인**
```bash
# Claude 로그 확인 (있다면)
tail -f ~/.claude/logs/commands.log
```

---

## 🎯 핵심 치트시트

### 명령어 비교표

| 특징 | `/ip` | `/ipx` | `/clarify` |
|------|-------|--------|------------|
| **목적** | 질문 빠른 개선 | 정밀한 질문 개선 | 아이디어 구체화 |
| **속도** | ⚡⚡⚡ 즉시 | ⚡⚡ 보통 | ⚡ 느림 (대화형) |
| **사용자 입력** | 없음 (자동) | 스타일 선택 | 여러 번 응답 |
| **결과물** | 3가지 버전 | 1가지 맞춤 버전 | 구조화된 요구사항 |
| **영어 변환** | ✅ 자동 | ✅ 자동 | ❌ 없음 |
| **프로젝트 분석** | ❌ | ✅ (맥락형) | ✅ (자동) |
| **최적 사용** | 빠른 개선 | 기술 질문 | 기획/요구사항 |

---

### 의사결정 플로우

```
질문하고 싶다
    ↓
질문이 명확한가?
    ├─ NO → /clarify 사용
    │        ↓
    │   구체화된 요구사항
    │
    └─ YES → 빠르게 개선?
             ├─ YES → /ip 사용
             │         ↓
             │    3가지 버전
             │
             └─ NO → /ipx 사용
                      ↓
                 맞춤형 개선
```

### 상황별 명령어 추천

| 상황 | 추천 명령어 | 이유 |
|------|------------|------|
| 에러 발생 | `/ip` | 빠르게 3버전 확인 |
| 성능 문제 | `/ipx` 정밀형 | 측정 지표 필요 |
| 신규 기능 | `/clarify` | 요구사항 명확화 |
| 코드 리뷰 | `/ipx` 정밀형 | 환경/시도 구조화 |
| 개념 학습 | `/ipx` 대화형 | 목적별 맞춤 |
| 설계 질문 | `/ipx` 구조화형 | 배경/목표/제약 |
| 프로젝트 맥락 | `/ipx` 맥락형 | 자동 파일 분석 |

---

### 프롬프트 5원칙

#### 1. **구체적으로** (Specific)
```
❌ "에러 나요"
✅ "npm install 실행 시 'EACCES permission denied' 에러 발생"
```

#### 2. **맥락 포함** (Context)
```
❌ "로그인 안 돼요"
✅ "React 18 + Express에서 JWT 로그인 시 401 에러"
```

#### 3. **시도한 것 명시** (Attempted)
```
❌ "안 되는데요"
✅ "console.log 확인 → 토큰은 있으나 검증 실패"
```

#### 4. **원하는 결과** (Expected)
```
❌ "고쳐주세요"
✅ "로그인 성공 시 /dashboard로 자동 리다이렉트"
```

#### 5. **환경 정보** (Environment)
```
❌ "React에서요"
✅ "React 18.2, TypeScript 5.0, Vite 5.0"
```

**핵심**: `/ip`와 `/ipx`가 이 5원칙을 자동으로 적용!

---

## 📖 참고: 이론

### YAML 프론트매터

슬래시 명령어 파일의 설정 부분입니다.

```yaml
---
description: 한 문장 설명
allowed-tools: 사용할 도구들
argument-hint: 입력 형식 안내
---
```

#### 3가지 핵심 요소

**1. description**: 명령어 설명
- 역할: `/` 입력 시 표시될 설명
- 작성법: 한 문장으로 명확하게
```yaml
description: 질문을 빠르게 개선 (3버전 + 영어)
```

**2. allowed-tools**: 사용 가능한 도구
- 역할: 명령어가 사용할 수 있는 도구 제한
- 주요 도구:
  - `AskUserQuestion`: 사용자에게 질문
  - `Read`: 파일 읽기
  - `Glob`: 파일 패턴 검색
  - `Grep`: 내용 검색
  - `Write`: 파일 쓰기
  - `Edit`: 파일 수정
  - `Bash`: 터미널 명령

```yaml
# 안전한 명령어 (읽기만)
allowed-tools: Read, Glob, Grep

# 코드 작성 명령어
allowed-tools: Read, Write, Edit, Bash
```

**3. argument-hint**: 입력 형식
- 역할: 사용자에게 무엇을 입력해야 하는지 안내
```yaml
argument-hint: [개선할 질문]
argument-hint: <file path>
argument-hint: <error message>
```

---

### 워크플로우

명령어 실행 흐름:

**1. 인자 받기**
```
/clarify 로그인 기능 만들기
        └──────────────┘
         $ARGUMENTS
```

**2. 분석**
- 사용자 입력 파악
- 필요시 프로젝트 파일 검색

**3. 실행**
- 정해진 워크플로우 따라 진행
- 사용자와 대화 (필요시)

**4. 결과 출력**
- 정해진 형식으로 결과 제공

---

### 명령어 저장 위치

```
📂 슬래시 명령어 저장 위치

├── 🌍 전역 (모든 프로젝트)
│   └── ~/.claude/commands/
│       ├── ip.md
│       ├── ipx.md
│       └── review.md
│
└── 📁 프로젝트별 (이 프로젝트만)
    └── .claude/commands/
        ├── commit-convention.md
        └── pr-review.md
```

**전역 vs 프로젝트별**:
- **전역**: 어디서든 사용 (일반적인 명령어)
- **프로젝트별**: 특정 프로젝트용 (팀 컨벤션, 커스텀 워크플로우)

---

### 나만의 명령어 만들기

#### 체크리스트

**프론트매터 3가지**:
```yaml
---
description: (한 문장 명확하게) ✓
allowed-tools: (필요한 것만) ✓
argument-hint: (입력 형식 안내) ✓
---
```

**본문 5가지**:
- [ ] 역할 정의 (누구인가?)
- [ ] 핵심 원칙 (어떤 규칙?)
- [ ] 워크플로우 (어떤 순서?)
- [ ] 예시 (어떻게 말하나?)
- [ ] 출력 형식 (어떻게 보여주나?)

#### 아이디어 예시

```bash
/review         # 코드 리뷰
/commit-msg     # 커밋 메시지 생성
/test           # 테스트 코드 생성
/refactor       # 리팩토링 제안
/explain        # 코드 설명
/translate      # 영어 번역
/optimize       # 성능 최적화
```

---

## 🎉 마무리

### 다음 단계

1. **설치**: 5분 빠른 시작 따라하기
2. **연습**: 초급 예시 3개 직접 해보기
3. **적용**: 실제 프로젝트에 사용
4. **확장**: 나만의 명령어 만들기

### 핵심 기억할 것

- `/ip`: 빠를 때
- `/ipx`: 정밀할 때
- `/clarify`: 불명확할 때

**가장 중요한 원칙**: 구체적으로 물어보면 구체적인 답을 얻는다!

---

> 💡 **Tip**: 이 가이드를 북마크하고, 명령어 사용 시마다 참고하세요.
> 처음엔 어색해도 10번만 쓰면 자연스러워집니다!
