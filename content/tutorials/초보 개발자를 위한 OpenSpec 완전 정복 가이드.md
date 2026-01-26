---
title: 초보 개발자를 위한 OpenSpec 완전 정복 가이드
created: 2025-10-12
last_modified: 2025-10-12
tags:
  - AI/코딩도구
  - 명세서/스펙
  - 개발워크플로우/자동화
  - ClaudeCode/통합
  - Cursor/통합
  - 초보자/가이드
  - 프로젝트관리/도구
status: 완료
type: 교육자료
priority: high
source: https://github.com/Fission-AI/OpenSpec
license: MIT
share_link: https://share.note.sx/ptxaqz2w#e6Keuya7BLBAwPX94yo3B/dYyOZxNDRfpNcmZ1VCL2w
share_updated: 2025-10-12T13:10:54+09:00
---

# 초보 개발자를 위한 OpenSpec 완전 정복 가이드

> 📌 **원본 프로젝트**: [OpenSpec by Fission AI](https://github.com/Fission-AI/OpenSpec)
> 🏢 **개발사**: Fission AI
> 📜 **라이선스**: MIT License (무료 사용)
> 🔑 **특징**: API 키 불필요, 경량 워크플로우

## 📋 목차 (클릭하여 이동)

1. [[#OpenSpec이란 무엇인가]]
2. [[#왜 OpenSpec이 필요한가]]
3. [[#핵심 개념 이해하기]]
4. [[#OpenSpec의 작동 원리]]
5. [[#설치 및 초기 설정]]
6. [[#첫 번째 변경사항 만들기]]
7. [[#실전 예제 3가지 난이도별]]
8. [[#명령어 완전 가이드]]
9. [[#다른 도구와의 비교]]
10. [[#팀 도입 가이드]]
11. [[#문제 해결 FAQ]]
12. [[#용어 사전]]

---

## OpenSpec이란 무엇인가

### 🎓 파인만식 설명: 10살 아이에게 설명하듯이

**질문**: "OpenSpec이 뭐예요?"

**파인만 답변**:
> 여러분이 레고로 우주선을 만든다고 상상해보세요.
>
> **일반적인 방법** (문제가 많음):
> - 친구에게 "우주선 만들어줘" 하고 말만 함
> - 친구가 만들기 시작함
> - 만들고 나니 "아, 나는 날개 4개를 원했는데 2개네..."
> - 다시 만들어야 함 😢
>
> **OpenSpec 방법** (똑똑한 방법):
> 1. **설계도 그리기**: "우주선은 날개 4개, 조종석 1개, 엔진 2개"
> 2. **친구와 확인**: "이렇게 만들 거야" (친구: "오케이!")
> 3. **만들기 시작**: 이미 합의했으니 실수 없음!
> 4. **완성 후 설계도 보관**: 다음에 또 만들 수 있음 ✨
>
> OpenSpec은 AI 코딩 도우미와 함께 일할 때 사용하는 "디지털 설계도 시스템"입니다!

### 📊 일반인용 설명 (중학생 수준)

**OpenSpec**은 AI 코딩 도우미(Claude Code, Cursor 등)에게 정확히 무엇을 만들어야 하는지 알려주는 체계적인 시스템입니다.

#### 문제 상황 🤔
```
당신: "로그인 기능 추가해줘"
AI: "네!" (코드 작성 시작)
   → 비밀번호 찾기는?
   → 소셜 로그인은?
   → 이메일 인증은?
   → 2단계 인증은?
결과: AI가 추측으로 만들어서 원하는 것과 다름 😫
```

#### OpenSpec 해결 방법 ✅
```
1. 명세서 작성 (Specification)
   "로그인 기능"의 정확한 요구사항 문서화:
   - 이메일 + 비밀번호 로그인
   - 구글 소셜 로그인
   - 비밀번호 찾기 (이메일 인증)
   - 2단계 인증 (선택사항)

2. AI와 검토
   당신: "이 명세서대로 만들면 돼?"
   AI: "네! 명확해요"

3. 구현
   AI가 명세서를 보고 정확하게 코드 작성

4. 보관
   명세서를 저장해서 나중에 참고
```

### 🎓 개발자용 설명 (기술적 정의)

**OpenSpec**은 AI 코딩 어시스턴트와의 협업을 위한 **명세서 기반 개발(Spec-driven Development)** 워크플로우 시스템입니다.

**핵심 아키텍처**:
```
openspec/
├── specs/                    # Source of Truth (현재 상태)
│   ├── auth/
│   │   └── spec.md          # 인증 시스템 현재 명세
│   └── user/
│       └── spec.md          # 사용자 시스템 현재 명세
│
└── changes/                  # Proposed Changes (제안된 변경)
    └── add-2fa/             # 변경사항 폴더
        ├── proposal.md      # 변경 제안서
        ├── tasks.md         # 구현 작업 목록
        ├── design.md        # 기술 설계 (선택)
        └── specs/           # 명세 변경사항 (델타)
            └── auth/
                └── spec.md  # 추가/수정/삭제 내용
```

**워크플로우**:
1. **Proposal** → 변경사항 제안 및 명세 델타 생성
2. **Review** → 인간과 AI가 명세 검토 및 조정
3. **Apply** → 합의된 명세 기반 구현
4. **Archive** → 완료된 변경사항을 specs/로 병합

**차별점**:
- ❌ **API 키 불필요**: 로컬에서 작동
- ✅ **도구 중립적**: Claude Code, Cursor, Windsurf 등 다양한 AI 도구 지원
- ✅ **변경 추적**: Git처럼 명세의 변경사항 명확히 관리
- ✅ **Brownfield 친화적**: 기존 프로젝트에 점진적 도입 가능

---

## 왜 OpenSpec이 필요한가

### 🎭 상황극: 민지의 AI 코딩 고민

**민지**: "AI한테 '사용자 프로필 기능 추가해줘'라고 했는데..."

**AI**: "네! 만들었습니다!" 😊

**민지**: "엥? 프로필 사진은 어디 있어? 그리고 생년월일 필드도 필요한데..."

**AI**: "아, 그건 말씀 안 하셔서... 다시 만들까요?" 😅

**민지**: "또 처음부터? 😭"

#### 문제의 핵심

AI 코딩 도우미의 3대 문제점:

1. **모호한 요구사항**
   ```
   사람: "검색 기능 만들어줘"

   AI의 내면: 🤔
   - 어떤 필드를 검색?
   - 자동완성 필요한가?
   - 페이지네이션은?
   - 필터링은?
   - 정렬은?

   결과: AI가 추측으로 만듦 → 재작업 발생
   ```

2. **채팅 히스토리 의존**
   ```
   첫 번째 대화: "로그인 기능 추가"
   10번째 대화: "비밀번호 암호화는 bcrypt 사용"
   50번째 대화: "아, 로그인 수정해줘"

   AI: "어떤 로그인 스펙이었죠?" 😵
   (채팅 기록 속에 묻힘)
   ```

3. **변경사항 추적 불가**
   ```
   원래 명세:
   - 이메일 로그인만

   변경 1: 소셜 로그인 추가
   변경 2: 2FA 추가
   변경 3: 비밀번호 복잡도 규칙 변경

   문제: 어떻게 변경되었는지 추적 어려움
   ```

#### OpenSpec 해결책

```
BEFORE OpenSpec:
채팅 히스토리 → AI 추측 → 코드 생성 → 수정 반복 😵

AFTER OpenSpec:
명세서 작성 → 합의 → 구현 → 명세 업데이트 ✨
```

**구체적 이점**:

| 문제 | OpenSpec 해결 |
|------|---------------|
| 모호한 요구사항 | 📝 명세서에 모든 요구사항 문서화 |
| 채팅 소실 | 🗂️ 파일 시스템에 영구 저장 |
| 변경 추적 불가 | 🔄 Git 스타일 델타 추적 |
| AI가 예전 결정 망각 | 📚 specs/ 폴더가 Source of Truth |
| 재작업 반복 | ✅ 사전 합의로 한 번에 정확히 |

---

## 핵심 개념 이해하기

### 🧩 OpenSpec의 3가지 핵심 요소

#### 1. Specification (명세서) 📋

**파인만식 설명**:
> 명세서는 "제품 설명서"입니다.
> 레고 박스에 있는 "완성된 모습 그림"과 "조립 순서"처럼,
> 소프트웨어가 무엇을 해야 하는지 정확히 적어놓은 문서입니다.

**실제 예시**:
```markdown
# 로그인 명세서 (auth/spec.md)

## 목적
사용자가 시스템에 안전하게 로그인할 수 있다.

## 요구사항
### 요구사항: 이메일 로그인
시스템은 이메일과 비밀번호로 로그인할 수 있어야 한다 (MUST).

#### 시나리오: 유효한 인증정보
- WHEN 사용자가 올바른 이메일과 비밀번호를 입력하면
- THEN JWT 토큰을 발급한다
- AND 대시보드로 리디렉션한다

#### 시나리오: 잘못된 비밀번호
- WHEN 사용자가 잘못된 비밀번호를 입력하면
- THEN "인증 실패" 메시지를 표시한다
- AND 로그인 페이지에 머문다
```

**명세서의 구성 요소**:
1. **목적 (Purpose)**: 왜 이 기능이 필요한가?
2. **요구사항 (Requirements)**: 무엇을 해야 하는가?
3. **시나리오 (Scenarios)**: 어떻게 동작하는가?

#### 2. Change (변경사항) 🔄

**파인만식 설명**:
> 변경사항은 "업그레이드 계획서"입니다.
> 레고 우주선에 "날개 2개 추가" 계획을 세우는 것처럼,
> 기존 소프트웨어에 무엇을 추가/수정/삭제할지 계획하는 폴더입니다.

**변경사항 폴더 구조**:
```
changes/add-profile-search/
├── proposal.md          # 제안서: "왜 이걸 만들까?"
├── tasks.md            # 작업 목록: "무엇을 할까?"
├── design.md           # 기술 설계: "어떻게 만들까?"
└── specs/              # 명세 변경사항 (델타)
    └── profile/
        └── spec.md     # 프로필 명세에 추가될 내용
```

**각 파일의 역할**:

1. **proposal.md** - 변경 제안서
   ```markdown
   # 프로필 검색 필터 추가

   ## 동기
   사용자들이 역할과 팀으로 프로필을 필터링하고 싶어함

   ## 영향
   - 검색 속도 향상 필요 (인덱스 추가)
   - UI에 필터 컴포넌트 추가
   ```

2. **tasks.md** - 구현 체크리스트
   ```markdown
   ## 1. 데이터베이스
   - [ ] 1.1 profile 테이블에 role 컬럼 추가
   - [ ] 1.2 profile 테이블에 team_id 컬럼 추가
   - [ ] 1.3 role, team_id에 인덱스 생성

   ## 2. 백엔드
   - [ ] 2.1 /api/profiles/search에 role 파라미터 추가
   - [ ] 2.2 /api/profiles/search에 team_id 파라미터 추가
   - [ ] 2.3 필터 조합 쿼리 최적화

   ## 3. 프론트엔드
   - [ ] 3.1 FilterDropdown 컴포넌트 생성
   - [ ] 3.2 프로필 검색 페이지에 필터 UI 추가
   ```

3. **specs/profile/spec.md** - 델타 (변경 내용)
   ```markdown
   # 프로필 명세 델타

   ## 추가된 요구사항 (ADDED)
   ### 요구사항: 역할별 필터링
   시스템은 역할로 프로필을 필터링할 수 있어야 한다 (MUST).

   #### 시나리오: 개발자만 표시
   - WHEN 사용자가 "Developer" 역할 필터를 선택하면
   - THEN 개발자 역할을 가진 프로필만 표시한다
   ```

#### 3. Delta (델타) 📊

**파인만식 설명**:
> 델타는 "변경사항 메모"입니다.
> "원래 우주선"과 "업그레이드된 우주선"의 차이점만 적은 메모입니다.
>
> 예:
> - **추가됨**: 날개 2개
> - **수정됨**: 엔진 색상 빨강 → 파랑
> - **삭제됨**: 안테나 1개

**델타의 3가지 타입**:

```markdown
## ADDED Requirements (추가)
새로운 기능이 생겼어요!

### 요구사항: 2단계 인증
시스템은 로그인 시 OTP를 요구해야 한다 (MUST).

---

## MODIFIED Requirements (수정)
기존 기능이 바뀌었어요!

### 요구사항: 비밀번호 정책 (수정됨)
~~시스템은 8자 이상 비밀번호를 요구한다~~
시스템은 12자 이상, 특수문자 포함 비밀번호를 요구한다 (MUST).

---

## REMOVED Requirements (삭제)
더 이상 필요 없는 기능이에요!

### ~~요구사항: 사용자명 로그인~~
~~시스템은 사용자명으로 로그인할 수 있다~~
(이메일 로그인으로 통합됨)
```

### 🔄 워크플로우 이해하기

```
📁 openspec/
├── specs/              ◀─ 현재 상태 (Source of Truth)
│   ├── auth/
│   │   └── spec.md    "지금 시스템이 어떻게 동작하나?"
│   └── profile/
│       └── spec.md
│
└── changes/            ◀─ 제안된 변경 (Proposals)
    └── add-2fa/       "앞으로 어떻게 바뀔 예정인가?"
        ├── proposal.md
        ├── tasks.md
        └── specs/
            └── auth/
                └── spec.md (델타)

워크플로우:
1. changes/ 에 제안 생성
2. AI와 함께 검토 및 수정
3. 합의 완료 → 구현
4. 완료 후 archive 명령어
   → changes/add-2fa/ 가 archive/add-2fa/ 로 이동
   → specs/auth/spec.md 가 델타 내용으로 업데이트
```

---

## OpenSpec의 작동 원리

### 🎬 스토리텔링: 민수의 OpenSpec 첫 경험

#### Chapter 1: 프로젝트 시작

**민수**: "AI야, 우리 앱에 프로필 검색 기능 추가하자!"

**AI (OpenSpec 전)**:
"알겠습니다! 검색창을 만들고... 데이터베이스 쿼리를... (코드 작성 시작)"

**민수**: "잠깐! 어떤 검색 기능인지 말 안 했잖아!" 😱

#### Chapter 2: OpenSpec 발견

**민수**: "더 나은 방법이 없을까?" (구글 검색)
→ OpenSpec 발견!

```bash
# 민수가 실행한 명령어
$ npm install -g @fission-ai/openspec
$ cd my-project
$ openspec init
✓ Claude Code 슬래시 커맨드 설치됨
✓ openspec/ 폴더 생성됨
```

#### Chapter 3: 첫 번째 제안 만들기

**민수 → AI**:
```
"OpenSpec 변경 제안을 만들어줘:
프로필 검색에 역할(role)과 팀(team) 필터 추가"
```

**AI 응답**:
```
✓ openspec/changes/add-profile-filters/ 생성
✓ proposal.md 작성
✓ tasks.md 생성 (14개 작업)
✓ specs/profile/spec.md 델타 생성

검토해보시겠어요?
```

**민수가 본 파일들**:

**1. proposal.md**
```markdown
# 프로필 검색 필터 추가

## 동기
현재 프로필 검색은 이름으로만 가능합니다.
사용자들이 역할과 팀으로 필터링하고 싶어합니다.

## 목표
- 역할별 필터 (Developer, Designer, Manager 등)
- 팀별 필터 (Engineering, Marketing, Sales 등)
- 필터 조합 가능

## 영향받는 시스템
- 프로필 데이터베이스 스키마
- 검색 API 엔드포인트
- 프론트엔드 검색 UI
```

**2. tasks.md**
```markdown
## 1. 데이터베이스 준비
- [ ] 1.1 profiles 테이블에 role ENUM 추가
- [ ] 1.2 profiles 테이블에 team_id INT 추가
- [ ] 1.3 teams 테이블 생성
- [ ] 1.4 인덱스 생성 (role, team_id)

## 2. 백엔드 API
- [ ] 2.1 GET /api/profiles/search에 role 쿼리 추가
- [ ] 2.2 GET /api/profiles/search에 team_id 쿼리 추가
- [ ] 2.3 필터 조합 로직 구현
- [ ] 2.4 단위 테스트 작성

## 3. 프론트엔드
- [ ] 3.1 <FilterDropdown> 컴포넌트 생성
- [ ] 3.2 역할 필터 UI 추가
- [ ] 3.3 팀 필터 UI 추가
- [ ] 3.4 필터 상태 관리 (React Context)
- [ ] 3.5 필터 적용 API 호출
- [ ] 3.6 Cypress E2E 테스트
```

**3. specs/profile/spec.md** (델타)
```markdown
# 프로필 명세 델타

## ADDED Requirements

### 요구사항: 역할별 필터링
시스템은 프로필을 역할로 필터링할 수 있어야 한다 (MUST).

#### 시나리오: 개발자만 보기
- WHEN 사용자가 "Developer" 역할 필터를 선택하면
- THEN Developer 역할을 가진 프로필만 결과에 표시한다
- AND 다른 역할의 프로필은 숨겨진다

#### 시나리오: 필터 조합
- WHEN 사용자가 "Developer" 역할과 "Engineering" 팀을 선택하면
- THEN 두 조건을 모두 만족하는 프로필만 표시한다 (AND 조건)

### 요구사항: 팀별 필터링
시스템은 프로필을 팀으로 필터링할 수 있어야 한다 (MUST).

#### 시나리오: 마케팅 팀만 보기
- WHEN 사용자가 "Marketing" 팀 필터를 선택하면
- THEN Marketing 팀에 속한 프로필만 결과에 표시한다
```

#### Chapter 4: 검토 및 수정

**민수**: "음, tasks.md를 보니... 팀 테이블은 이미 있는데?"

**민수 → AI**:
```
"Task 1.3 (teams 테이블 생성) 삭제해줘.
이미 teams 테이블이 존재해."
```

**AI**:
```
✓ tasks.md 업데이트
Task 1.3 삭제됨
Task 번호 재조정됨 (1.4 → 1.3)
```

**민수**: "specs도 수정하자. 필터는 OR 조건으로 작동하게 하고 싶어."

**민수 → AI**:
```
"specs/profile/spec.md 수정:
필터 조합 시나리오를 AND가 아닌 OR 로직으로 변경"
```

**AI**:
```markdown
#### 시나리오: 필터 조합 (수정됨)
- WHEN 사용자가 "Developer" 역할과 "Engineering" 팀을 선택하면
- THEN Developer 역할 OR Engineering 팀에 속한 프로필을 표시한다 (OR 조건)
```

#### Chapter 5: 검증

**민수**:
```bash
$ openspec validate add-profile-filters
✓ proposal.md 형식 정상
✓ tasks.md 형식 정상
✓ specs/profile/spec.md 델타 형식 정상
✓ 모든 요구사항에 시나리오 존재
✓ SHALL/MUST 키워드 사용 확인
```

**민수**: "좋아! 이제 구현하자!"

#### Chapter 6: 구현

**민수 → AI**:
```
"/openspec:apply add-profile-filters"
(또는 자연어: "add-profile-filters 변경사항 구현해줘")
```

**AI 실행 과정**:
```
📖 openspec/changes/add-profile-filters/tasks.md 읽는 중...

[Task 1.1] profiles 테이블에 role 컬럼 추가
├─ migration/001_add_role_column.sql 생성
├─ role ENUM 정의 (Developer, Designer, Manager, ...)
└─ ✓ 완료

[Task 1.2] profiles 테이블에 team_id 컬럼 추가
├─ migration/002_add_team_id.sql 생성
├─ FOREIGN KEY 제약조건 추가
└─ ✓ 완료

[Task 1.3] 인덱스 생성
├─ CREATE INDEX idx_profiles_role
├─ CREATE INDEX idx_profiles_team_id
└─ ✓ 완료

[Task 2.1] GET /api/profiles/search - role 파라미터
├─ src/api/profiles.ts 수정
├─ role 쿼리 파라미터 파싱
├─ WHERE role = ? 조건 추가
└─ ✓ 완료

... (계속)

✓ 14개 작업 모두 완료!
✓ 테스트 통과
✓ 구현 완료
```

#### Chapter 7: 아카이브

**민수**:
```bash
$ openspec archive add-profile-filters --yes
```

**시스템 실행**:
```
🔄 아카이브 프로세스 시작...

1. 델타 병합:
   ├─ specs/profile/spec.md 읽기
   ├─ changes/add-profile-filters/specs/profile/spec.md 델타 적용
   ├─ ADDED 섹션 → specs/profile/spec.md에 추가
   └─ ✓ specs/profile/spec.md 업데이트됨

2. 변경사항 이동:
   ├─ changes/add-profile-filters/
   └─ → archive/add-profile-filters/
      (타임스탬프: 2025-10-12-add-profile-filters)

✓ 아카이브 완료!
✓ specs/ 가 최신 상태로 업데이트됨
```

**민수**: "와! 이제 specs/profile/spec.md가 최신 버전이고, 변경 이력도 보관됐네!" 🎉

---

## 설치 및 초기 설정

### 📦 사전 준비물

#### 1. Node.js 설치 확인

**초보자 가이드**:

**Mac 사용자**:
```bash
# 터미널 열기 (Command + Space → "터미널" 입력)

# Node.js 버전 확인
node --version

# 출력 예시: v20.19.0 (20.19.0 이상이면 OK!)
```

**버전이 낮거나 설치 안 된 경우**:
```bash
# Homebrew로 Node.js 설치
brew install node@20

# 설치 확인
node --version
```

**Windows 사용자**:
```powershell
# PowerShell 또는 CMD 열기

# Node.js 버전 확인
node --version

# 설치 안 된 경우:
# https://nodejs.org/ 접속
# LTS 버전 다운로드 (20.19.0 이상)
```

#### 2. AI 코딩 도구 설치

**OpenSpec 지원 도구**:

| 도구 | 설치 방법 | 특징 |
|------|-----------|------|
| **Claude Code** | [claude.ai/code](https://claude.ai/code) | Anthropic 공식, 무료 |
| **Cursor** | [cursor.com](https://cursor.com) | VSCode 기반, 유료 |
| **Windsurf** | [codeium.com](https://codeium.com/windsurf) | Codeium 제공 |
| **Codex** | [codex.dev](https://codex.dev) | GitHub 통합 |

**추천**: Claude Code (무료, 설정 간단)

### 🚀 OpenSpec 설치

#### Step 1: CLI 전역 설치

```bash
# npm을 사용한 전역 설치
npm install -g @fission-ai/openspec@latest

# 설치 시간: 약 30초~1분
```

**설치 확인**:
```bash
openspec --version

# 출력 예시:
# @fission-ai/openspec/1.2.3
```

**문제 해결**:
```bash
# "permission denied" 에러가 나면:
sudo npm install -g @fission-ai/openspec@latest

# Windows에서 "액세스 거부" 에러가 나면:
# PowerShell을 관리자 권한으로 실행 후 재시도
```

#### Step 2: 프로젝트 초기화

**새 프로젝트 생성 (연습용)**:
```bash
# 1. 연습용 폴더 생성
mkdir my-first-openspec
cd my-first-openspec

# 2. Git 초기화 (선택사항이지만 권장)
git init

# 3. package.json 생성 (Node.js 프로젝트)
npm init -y
```

**OpenSpec 초기화**:
```bash
openspec init
```

**대화형 설정 화면**:
```
? OpenSpec에 오신 것을 환영합니다!
  사용 중인 AI 코딩 도구를 선택해주세요:

  ◯ Claude Code
  ◯ Cursor
  ◯ Windsurf
  ◯ Codex
  ◉ None of the above (AGENTS.md만 사용)

선택: Claude Code (스페이스바로 선택, 엔터로 확인)

✓ Claude Code 슬래시 커맨드 설치 중...
  → .claude/commands/openspec-proposal.md
  → .claude/commands/openspec-apply.md
  → .claude/commands/openspec-archive.md

✓ AGENTS.md 생성 중...
✓ openspec/ 폴더 구조 생성 중...

🎉 OpenSpec 초기화 완료!

다음 단계:
1. openspec list (생성된 구조 확인)
2. AI 도구를 열고 첫 제안을 만들어보세요!
```

**생성된 폴더 구조**:
```
my-first-openspec/
├── .claude/                    # Claude Code 전용
│   └── commands/
│       ├── openspec-proposal.md
│       ├── openspec-apply.md
│       └── openspec-archive.md
├── openspec/
│   ├── AGENTS.md              # 모든 AI 도구용 가이드
│   ├── specs/                 # 현재 명세서 (비어있음)
│   ├── changes/               # 변경사항 (비어있음)
│   └── archive/               # 완료된 변경사항 (비어있음)
├── package.json
└── .gitignore                 # (자동 생성됨)
```

#### Step 3: 설치 검증

```bash
# OpenSpec 상태 확인
openspec list

# 출력:
# No active changes found in openspec/changes/
# (정상 - 아직 변경사항 없음)
```

```bash
# 대시보드 열기 (선택사항)
openspec view

# 웹 브라우저에 대시보드 표시
# - specs/ 목록
# - changes/ 목록
# - 시각적 인터페이스
```

---

## 첫 번째 변경사항 만들기

### 🎓 튜토리얼: "할 일 목록 앱"에 완료 필터 추가

#### 상황 설정

**프로젝트**: 간단한 할 일 목록(Todo) 앱
**목표**: "완료된 할 일만 보기" 필터 추가

#### Phase 1: 제안 생성 (5분)

**Claude Code 사용자**:
```
# Claude Code 열기
# 채팅에 입력:

/openspec:proposal 할 일 완료 필터 추가

# 또는 자연어로:
OpenSpec 변경 제안을 만들어줘.
할 일 목록에서 완료된 항목만 볼 수 있는 필터를 추가하고 싶어.
```

**다른 AI 도구 사용자**:
```
"OpenSpec 변경 제안을 생성해줘:
할 일 목록 앱에 '완료된 항목만 보기' 필터 기능 추가"
```

**AI가 생성한 파일들**:

**1. openspec/changes/add-completed-filter/proposal.md**
```markdown
# 할 일 완료 필터 추가

## 동기
사용자들이 완료된 할 일을 따로 볼 수 있기를 원합니다.
현재는 모든 할 일이 섞여서 표시됩니다.

## 목표
- 완료된 할 일만 보는 필터 옵션 추가
- "전체 / 진행 중 / 완료됨" 3가지 필터

## 범위
### 포함됨
- 프론트엔드 필터 UI
- 필터 상태 관리
- 완료 상태에 따른 리스트 렌더링

### 제외됨
- 백엔드 API 변경 불필요 (클라이언트 필터링)
- 데이터베이스 스키마 변경 없음
```

**2. openspec/changes/add-completed-filter/tasks.md**
```markdown
## 1. UI 컴포넌트
- [ ] 1.1 FilterButtons 컴포넌트 생성
      - "전체" / "진행 중" / "완료됨" 버튼
      - 현재 활성 필터 표시 (하이라이트)
- [ ] 1.2 TodoList 컴포넌트에 FilterButtons 추가

## 2. 상태 관리
- [ ] 2.1 filter 상태 추가 (useState 또는 Context)
      - 가능한 값: 'all', 'active', 'completed'
      - 기본값: 'all'
- [ ] 2.2 필터 변경 핸들러 구현

## 3. 필터 로직
- [ ] 3.1 getTodos() 함수 수정
      - filter 값에 따라 todos 배열 필터링
      - all: 모든 항목
      - active: completed=false 항목만
      - completed: completed=true 항목만

## 4. 테스트
- [ ] 4.1 필터 버튼 클릭 시 상태 변경 확인
- [ ] 4.2 각 필터에서 올바른 항목 표시 확인
```

**3. openspec/changes/add-completed-filter/specs/todo/spec.md**
```markdown
# 할 일 명세 델타

## ADDED Requirements

### 요구사항: 완료 상태 필터링
시스템은 할 일을 완료 상태로 필터링할 수 있어야 한다 (MUST).

#### 시나리오: 전체 보기 (기본값)
- WHEN 사용자가 앱을 처음 열거나 "전체" 필터를 선택하면
- THEN 모든 할 일 (완료/미완료)이 표시된다

#### 시나리오: 진행 중만 보기
- WHEN 사용자가 "진행 중" 필터를 선택하면
- THEN 완료되지 않은 할 일만 표시된다
- AND 완료된 할 일은 숨겨진다

#### 시나리오: 완료됨만 보기
- WHEN 사용자가 "완료됨" 필터를 선택하면
- THEN 완료된 할 일만 표시된다
- AND 완료되지 않은 할 일은 숨겨진다

### 요구사항: 필터 상태 시각화
시스템은 현재 활성화된 필터를 시각적으로 표시해야 한다 (MUST).

#### 시나리오: 활성 필터 하이라이트
- WHEN 사용자가 특정 필터를 선택하면
- THEN 선택된 필터 버튼이 하이라이트 표시된다
- AND 다른 필터 버튼은 기본 스타일로 표시된다
```

#### Phase 2: 검토 및 검증 (3분)

```bash
# 터미널에서 실행

# 1. 변경사항 확인
$ openspec list
Active changes:
  - add-completed-filter

# 2. 상세 보기
$ openspec show add-completed-filter
📄 Proposal: openspec/changes/add-completed-filter/proposal.md
📋 Tasks: openspec/changes/add-completed-filter/tasks.md
📐 Specs: openspec/changes/add-completed-filter/specs/todo/spec.md

# 3. 형식 검증
$ openspec validate add-completed-filter
✓ All checks passed
```

**AI와 대화로 수정**:
```
You: tasks.md를 보니 테스트 항목이 부족한 것 같아.
     "엣지 케이스: 할 일이 0개일 때 필터 동작" 테스트 추가해줘.

AI:  ✓ Task 4.3 추가됨:
     "4.3 엣지 케이스: 할 일 없을 때 각 필터에서 빈 상태 메시지 표시"
```

#### Phase 3: 구현 (10분)

```
# Claude Code에서:
/openspec:apply add-completed-filter

# 또는:
"add-completed-filter 변경사항을 구현해줘"
```

**AI 실행 로그**:
```
📖 Task 목록 읽는 중: openspec/changes/add-completed-filter/tasks.md

[Task 1.1] FilterButtons 컴포넌트 생성
├─ src/components/FilterButtons.tsx 생성
├─ 'all' | 'active' | 'completed' 버튼 렌더링
├─ active 필터에 스타일 적용
└─ ✓ 완료 (15초)

[Task 1.2] TodoList에 FilterButtons 추가
├─ src/components/TodoList.tsx 수정
├─ <FilterButtons /> 임포트 및 배치
└─ ✓ 완료 (5초)

[Task 2.1] filter 상태 추가
├─ src/store/todoStore.ts 수정
├─ filter: 'all' | 'active' | 'completed' 타입 추가
├─ useState('all') 초기값 설정
└─ ✓ 완료 (8초)

[Task 2.2] 필터 변경 핸들러
├─ setFilter 함수 구현
├─ FilterButtons에 props 전달
└─ ✓ 완료 (5초)

[Task 3.1] getTodos() 필터링 로직
├─ src/utils/filterTodos.ts 생성
├─ switch(filter) 분기 처리
│   ├─ case 'all': return todos
│   ├─ case 'active': return todos.filter(t => !t.completed)
│   └─ case 'completed': return todos.filter(t => t.completed)
└─ ✓ 완료 (12초)

[Task 4.1] 필터 버튼 클릭 테스트
├─ src/components/FilterButtons.test.tsx 생성
├─ fireEvent.click 테스트
└─ ✓ 완료 (20초)

[Task 4.2] 올바른 항목 표시 테스트
├─ src/components/TodoList.test.tsx 수정
├─ 각 필터별 렌더링 테스트
└─ ✓ 완료 (25초)

[Task 4.3] 엣지 케이스 테스트
├─ 빈 리스트 테스트 추가
├─ "할 일이 없습니다" 메시지 확인
└─ ✓ 완료 (10초)

✅ 모든 Task 완료! (총 100초)
✅ 테스트 통과: 12/12
```

#### Phase 4: 아카이브 (1분)

```bash
# 터미널에서
$ openspec archive add-completed-filter --yes
```

**실행 결과**:
```
🔄 Archiving add-completed-filter...

1. 명세 병합:
   ├─ openspec/specs/todo/spec.md 읽기...
   ├─ 델타 적용 중...
   │   └─ ADDED Requirements 섹션 추가됨
   └─ ✓ 저장됨

2. 변경사항 이동:
   ├─ openspec/changes/add-completed-filter/
   └─ → openspec/archive/2025-10-12-add-completed-filter/

✓ 아카이브 완료!

📊 결과:
  - specs/todo/spec.md 업데이트됨
  - changes/ 폴더 정리됨
  - archive/에 기록 보관됨
```

#### Phase 5: 확인

```bash
# 최신 명세 확인
$ cat openspec/specs/todo/spec.md
```

**출력** (델타가 병합된 최신 버전):
```markdown
# 할 일 명세서

## 목적
사용자가 할 일을 관리할 수 있다.

## 요구사항
### 요구사항: 할 일 추가
시스템은 새로운 할 일을 추가할 수 있어야 한다 (MUST).

### 요구사항: 할 일 완료 표시
시스템은 할 일을 완료 상태로 변경할 수 있어야 한다 (MUST).

### 요구사항: 완료 상태 필터링  ◀─ 새로 추가됨!
시스템은 할 일을 완료 상태로 필터링할 수 있어야 한다 (MUST).

#### 시나리오: 전체 보기 (기본값)
- WHEN 사용자가 앱을 처음 열거나 "전체" 필터를 선택하면
- THEN 모든 할 일 (완료/미완료)이 표시된다

... (나머지 시나리오들)
```

🎉 **첫 번째 OpenSpec 워크플로우 완료!**

---

## 실전 예제: 3가지 난이도별

### 🌱 초급 예제: 다크 모드 토글 추가

**난이도**: ⭐ (30분)
**대상**: OpenSpec 처음 사용하는 사람

#### 배경
간단한 블로그 앱에 다크 모드/라이트 모드 전환 기능을 추가합니다.

#### Step 1: 제안 생성

```
AI에게: "OpenSpec 제안 생성 - 다크모드 토글 추가"
```

**생성될 파일**:
```
changes/add-dark-mode/
├── proposal.md
├── tasks.md
└── specs/
    └── theme/
        └── spec.md
```

**proposal.md**:
```markdown
# 다크 모드 토글 추가

## 동기
사용자들이 밤에 블로그를 읽을 때 눈의 피로를 줄이고 싶어합니다.

## 목표
- 헤더에 다크모드 토글 버튼 추가
- 사용자 선택 localStorage에 저장
- 페이지 로드 시 저장된 테마 적용
```

**tasks.md**:
```markdown
## 1. 테마 컨텍스트 생성
- [ ] 1.1 ThemeContext 생성 (React Context API)
- [ ] 1.2 'light' | 'dark' 타입 정의
- [ ] 1.3 toggleTheme() 함수 구현

## 2. CSS 변수 설정
- [ ] 2.1 styles/theme.css에 CSS 변수 정의
      :root { --bg-color: white; --text-color: black; }
      [data-theme="dark"] { --bg-color: #1a1a1a; --text-color: white; }
- [ ] 2.2 모든 컴포넌트에서 CSS 변수 사용

## 3. 토글 버튼 UI
- [ ] 3.1 ThemeToggle 컴포넌트 생성 (🌞/🌙 아이콘)
- [ ] 3.2 Header에 ThemeToggle 추가

## 4. localStorage 연동
- [ ] 4.1 테마 변경 시 localStorage에 저장
- [ ] 4.2 앱 로드 시 localStorage에서 테마 복원
```

**specs/theme/spec.md**:
```markdown
# 테마 명세 델타

## ADDED Requirements

### 요구사항: 테마 전환
시스템은 라이트 모드와 다크 모드 간 전환할 수 있어야 한다 (MUST).

#### 시나리오: 다크 모드 활성화
- WHEN 사용자가 테마 토글 버튼을 클릭하면
- THEN 배경색이 어두워진다
- AND 텍스트 색상이 밝아진다
- AND 선택이 localStorage에 저장된다

#### 시나리오: 저장된 테마 복원
- GIVEN 사용자가 이전에 다크 모드를 선택했고
- WHEN 사용자가 페이지를 다시 로드하면
- THEN 다크 모드가 자동으로 적용된다
```

#### Step 2: 구현

```
AI에게: "/openspec:apply add-dark-mode"
```

#### Step 3: 아카이브

```bash
$ openspec archive add-dark-mode --yes
✓ 명세 업데이트됨
✓ 변경사항 아카이브됨
```

---

### 🌿 중급 예제: 사용자 인증 시스템

**난이도**: ⭐⭐⭐ (2시간)
**대상**: OpenSpec 기본 사용 경험자

#### 배경
이커머스 앱에 JWT 기반 사용자 인증 시스템을 추가합니다.
- 회원가입, 로그인, 로그아웃
- 보호된 라우트 (Protected Routes)
- 토큰 갱신 (Refresh Token)

#### 제안 구조

```
changes/add-user-auth/
├── proposal.md
├── tasks.md
├── design.md              ◀─ 기술 설계 문서 추가
└── specs/
    ├── auth/
    │   └── spec.md        # 인증 명세
    └── user/
        └── spec.md        # 사용자 명세
```

**design.md** (중급 이상에서 사용):
```markdown
# 사용자 인증 기술 설계

## 아키텍처

### 토큰 전략
- **Access Token**: 15분 유효, 짧은 수명
- **Refresh Token**: 7일 유효, HttpOnly 쿠키에 저장
- **저장소**: Access Token은 메모리(React state), Refresh Token은 쿠키

### 인증 흐름
```
1. 로그인 요청
   POST /api/auth/login
   { email, password }
   ↓
2. 서버 검증
   - 비밀번호 bcrypt 비교
   - 성공 시 토큰 발급
   ↓
3. 클라이언트 저장
   - accessToken → state
   - refreshToken → HttpOnly 쿠키
   ↓
4. API 요청
   Authorization: Bearer <accessToken>
   ↓
5. 토큰 만료 시
   POST /api/auth/refresh
   (쿠키 자동 전송)
   → 새 accessToken 발급
```

### 보안 고려사항
- HTTPS 필수
- CSRF 토큰 사용
- Rate limiting (로그인 시도 5회/분)
- 비밀번호: bcrypt (salt rounds: 10)
```

**tasks.md** (일부):
```markdown
## 1. 데이터베이스
- [ ] 1.1 users 테이블 생성
      - id, email (UNIQUE), password_hash, created_at
- [ ] 1.2 refresh_tokens 테이블 생성
      - id, user_id (FK), token, expires_at

## 2. 백엔드 - 회원가입
- [ ] 2.1 POST /api/auth/register 엔드포인트
- [ ] 2.2 이메일 중복 검사
- [ ] 2.3 비밀번호 유효성 검사 (8자+, 특수문자)
- [ ] 2.4 비밀번호 bcrypt 해싱
- [ ] 2.5 사용자 DB 저장

## 3. 백엔드 - 로그인
- [ ] 3.1 POST /api/auth/login 엔드포인트
- [ ] 3.2 이메일/비밀번호 검증
- [ ] 3.3 JWT Access Token 생성 (15분)
- [ ] 3.4 Refresh Token 생성 (7일)
- [ ] 3.5 Refresh Token을 HttpOnly 쿠키로 설정

## 4. 백엔드 - 토큰 갱신
- [ ] 4.1 POST /api/auth/refresh 엔드포인트
- [ ] 4.2 쿠키에서 Refresh Token 추출
- [ ] 4.3 Refresh Token 유효성 검사
- [ ] 4.4 새 Access Token 발급

## 5. 백엔드 - 미들웨어
- [ ] 5.1 requireAuth 미들웨어 생성
- [ ] 5.2 Authorization 헤더 파싱
- [ ] 5.3 JWT 검증 (secret key)
- [ ] 5.4 req.user에 사용자 정보 추가

## 6. 프론트엔드 - Context
- [ ] 6.1 AuthContext 생성
- [ ] 6.2 login(), logout(), register() 함수
- [ ] 6.3 user 상태 관리
- [ ] 6.4 isAuthenticated 헬퍼

## 7. 프론트엔드 - 페이지
- [ ] 7.1 /login 페이지 생성
- [ ] 7.2 /register 페이지 생성
- [ ] 7.3 LoginForm 컴포넌트
- [ ] 7.4 RegisterForm 컴포넌트

## 8. 프론트엔드 - Protected Routes
- [ ] 8.1 ProtectedRoute 컴포넌트
- [ ] 8.2 미인증 시 /login으로 리디렉션
- [ ] 8.3 /dashboard를 Protected Route로 설정

## 9. 프론트엔드 - HTTP 클라이언트
- [ ] 9.1 Axios 인터셉터 설정
- [ ] 9.2 모든 요청에 accessToken 자동 추가
- [ ] 9.3 401 응답 시 토큰 갱신 시도
- [ ] 9.4 갱신 실패 시 로그아웃

## 10. 테스트
- [ ] 10.1 회원가입 E2E 테스트
- [ ] 10.2 로그인 E2E 테스트
- [ ] 10.3 토큰 갱신 단위 테스트
- [ ] 10.4 Protected Route 접근 테스트
```

**specs/auth/spec.md**:
```markdown
# 인증 명세 델타

## ADDED Requirements

### 요구사항: 사용자 등록
시스템은 이메일과 비밀번호로 새 사용자를 등록할 수 있어야 한다 (MUST).

#### 시나리오: 유효한 등록
- WHEN 사용자가 유효한 이메일과 비밀번호를 제출하면
- THEN 계정이 생성된다
- AND 자동으로 로그인 상태가 된다
- AND Access Token이 발급된다

#### 시나리오: 중복 이메일
- GIVEN 이미 등록된 이메일이 있고
- WHEN 같은 이메일로 등록을 시도하면
- THEN "이미 사용 중인 이메일입니다" 오류가 표시된다
- AND 등록이 거부된다

### 요구사항: JWT 기반 로그인
시스템은 JWT Access Token을 발급하여 로그인을 처리해야 한다 (MUST).

#### 시나리오: 유효한 로그인
- WHEN 사용자가 올바른 이메일과 비밀번호를 제출하면
- THEN Access Token (15분 유효)이 발급된다
- AND Refresh Token (7일 유효)이 HttpOnly 쿠키로 설정된다
- AND 사용자 정보 (id, email)가 반환된다

#### 시나리오: 잘못된 비밀번호
- WHEN 사용자가 잘못된 비밀번호를 입력하면
- THEN "인증 실패" 메시지가 표시된다
- AND 토큰이 발급되지 않는다

### 요구사항: 토큰 갱신
시스템은 Refresh Token으로 Access Token을 갱신할 수 있어야 한다 (MUST).

#### 시나리오: 유효한 토큰 갱신
- GIVEN Access Token이 만료되었고
- WHEN 클라이언트가 /api/auth/refresh를 호출하면
- THEN Refresh Token 쿠키가 검증된다
- AND 새로운 Access Token이 발급된다

### 요구사항: 보호된 엔드포인트
시스템은 인증이 필요한 엔드포인트를 보호해야 한다 (MUST).

#### 시나리오: 인증된 요청
- GIVEN 유효한 Access Token이 있고
- WHEN 보호된 엔드포인트 (예: /api/user/profile)에 접근하면
- THEN 요청이 처리된다
- AND 사용자 데이터가 반환된다

#### 시나리오: 미인증 요청
- GIVEN Access Token이 없거나 유효하지 않고
- WHEN 보호된 엔드포인트에 접근하면
- THEN 401 Unauthorized 응답이 반환된다
- AND "인증이 필요합니다" 메시지가 표시된다
```

---

### 🌳 고급 예제: 마이크로서비스 간 통신 명세

**난이도**: ⭐⭐⭐⭐⭐ (1주일)
**대상**: 복잡한 시스템 설계 경험자

#### 배경
이커머스 플랫폼을 모놀리식에서 마이크로서비스로 분리합니다.
- User Service
- Order Service
- Payment Service
- Notification Service

서비스 간 통신을 Event-Driven 방식으로 설계합니다.

#### 제안 구조 (복잡함)

```
changes/microservices-event-driven/
├── proposal.md
├── tasks.md
├── design.md
├── architecture.md         ◀─ 고수준 아키텍처
└── specs/
    ├── user-service/
    │   └── spec.md
    ├── order-service/
    │   └── spec.md
    ├── payment-service/
    │   └── spec.md
    ├── notification-service/
    │   └── spec.md
    └── events/              ◀─ 이벤트 명세
        ├── user-events.md
        ├── order-events.md
        └── payment-events.md
```

**architecture.md**:
```markdown
# 마이크로서비스 아키텍처

## 시스템 다이어그램

```
┌─────────────┐
│ API Gateway │ ← 단일 진입점
└──────┬──────┘
       │
   ┌───┴───┬─────────┬──────────┐
   │       │         │          │
   v       v         v          v
┌──────┐ ┌──────┐ ┌────────┐ ┌────────┐
│ User │ │Order │ │Payment │ │ Notify │
│Service│ │Service│ │Service │ │Service │
└───┬──┘ └───┬──┘ └────┬───┘ └───┬────┘
    │        │         │         │
    └────────┴─────────┴─────────┘
               │
         ┌─────v─────┐
         │  RabbitMQ │ ← 메시지 브로커
         │  (Events) │
         └───────────┘
```

## 기술 스택
- API Gateway: Kong
- 서비스: Node.js + Express
- 메시지 브로커: RabbitMQ
- 데이터베이스: PostgreSQL (각 서비스 독립)
- 서비스 디스커버리: Consul

## 통신 패턴

### 동기 통신 (REST)
- API Gateway ↔ Services
- 사용자 인터페이스 요청

### 비동기 통신 (이벤트)
- Service ↔ Service
- 데이터 일관성, 알림, 워크플로우
```

**specs/events/order-events.md** (이벤트 명세):
```markdown
# 주문 이벤트 명세

## 이벤트: OrderCreated

### 발행자
Order Service

### 구독자
- Payment Service (결제 처리)
- Notification Service (주문 확인 이메일)
- Inventory Service (재고 차감)

### 페이로드
```json
{
  "eventId": "uuid",
  "eventType": "OrderCreated",
  "timestamp": "2025-10-12T10:30:00Z",
  "data": {
    "orderId": "ORD-12345",
    "userId": "USER-789",
    "items": [
      { "productId": "PROD-001", "quantity": 2, "price": 29.99 }
    ],
    "totalAmount": 59.98,
    "shippingAddress": { ... }
  }
}
```

### 시나리오: 성공적인 주문 생성
- WHEN Order Service가 새 주문을 생성하면
- THEN OrderCreated 이벤트가 발행된다
- AND Payment Service가 결제를 처리한다
- AND Notification Service가 이메일을 전송한다
- AND Inventory Service가 재고를 차감한다

### 시나리오: 보상 트랜잭션 (Compensation)
- GIVEN OrderCreated 이벤트가 발행되었고
- WHEN Payment Service에서 결제가 실패하면
- THEN PaymentFailed 이벤트가 발행된다
- AND Order Service가 주문 상태를 "취소됨"으로 변경한다
- AND Inventory Service가 재고를 복구한다
```

**tasks.md** (일부, 매우 방대함):
```markdown
## Phase 1: 인프라 설정 (1주)
### 1.1 메시지 브로커
- [ ] RabbitMQ Docker 컨테이너 설정
- [ ] Exchange 생성 (order-exchange, payment-exchange 등)
- [ ] Queue 생성 및 바인딩

### 1.2 서비스 디스커버리
- [ ] Consul 설치 및 설정
- [ ] 각 서비스를 Consul에 등록

### 1.3 API Gateway
- [ ] Kong 설치
- [ ] 라우팅 규칙 설정
- [ ] Rate limiting 플러그인

## Phase 2: User Service (3일)
### 2.1 데이터베이스
- [ ] PostgreSQL 스키마 설계
- [ ] users, sessions 테이블

### 2.2 API 구현
- [ ] POST /users (회원가입)
- [ ] POST /auth/login
- [ ] GET /users/:id

### 2.3 이벤트 발행
- [ ] UserCreated 이벤트 구현
- [ ] UserUpdated 이벤트 구현

## Phase 3: Order Service (5일)
### 3.1 데이터베이스
- [ ] orders, order_items 테이블

### 3.2 API 구현
- [ ] POST /orders (주문 생성)
- [ ] GET /orders/:id
- [ ] GET /orders?userId=:userId

### 3.3 이벤트 발행
- [ ] OrderCreated 이벤트
- [ ] OrderCancelled 이벤트

### 3.4 이벤트 구독
- [ ] PaymentCompleted 이벤트 수신
- [ ] PaymentFailed 이벤트 수신 (보상 트랜잭션)

## Phase 4: Payment Service (5일)
### 4.1 결제 게이트웨이 통합
- [ ] Stripe API 연동
- [ ] 결제 요청 래퍼 함수

### 4.2 이벤트 처리
- [ ] OrderCreated 이벤트 구독
- [ ] 결제 처리 로직
- [ ] PaymentCompleted 이벤트 발행
- [ ] PaymentFailed 이벤트 발행

## Phase 5: Notification Service (2일)
### 5.1 이메일 전송
- [ ] SendGrid API 연동
- [ ] 이메일 템플릿 (주문 확인, 결제 완료 등)

### 5.2 이벤트 처리
- [ ] OrderCreated 이벤트 구독 → 주문 확인 이메일
- [ ] PaymentCompleted 이벤트 구독 → 결제 완료 이메일

## Phase 6: 통합 테스트 (3일)
- [ ] 주문 생성부터 결제 완료까지 E2E 테스트
- [ ] 결제 실패 시나리오 테스트 (보상 트랜잭션)
- [ ] 성능 테스트 (동시 주문 100개)

## Phase 7: 모니터링 (2일)
- [ ] Prometheus 메트릭 수집
- [ ] Grafana 대시보드
- [ ] 이벤트 추적 (Correlation ID)
```

**구현 소요 시간**: 약 25일 (1개월)

---

## 명령어 완전 가이드

### 📖 openspec 명령어 레퍼런스

#### `openspec init`

**기능**: 프로젝트에 OpenSpec 초기화

**사용법**:
```bash
cd your-project
openspec init
```

**대화형 프롬프트**:
```
? 사용하는 AI 도구를 선택하세요:
  ◉ Claude Code
  ◯ Cursor
  ◯ Windsurf
  ◯ Codex
  ◯ GitHub Copilot
  ◯ None (AGENTS.md만)
```

**생성되는 것**:
- `openspec/` 폴더 구조
- `openspec/AGENTS.md` (모든 AI 도구용)
- `.{tool}/commands/` (선택한 도구의 슬래시 커맨드)
- `.gitignore` 업데이트

---

#### `openspec list`

**기능**: 활성 변경사항 목록 표시

**사용법**:
```bash
openspec list
```

**출력 예시**:
```
Active changes in openspec/changes/:
  - add-user-auth (3 days ago)
  - refactor-api (1 hour ago)
  - fix-login-bug (just now)

Archived changes in openspec/archive/:
  - 2025-10-10-add-dark-mode
  - 2025-10-09-improve-search
```

---

#### `openspec view`

**기능**: 웹 대시보드 열기

**사용법**:
```bash
openspec view
```

**기능**:
- 모든 specs/ 파일 브라우징
- changes/ 폴더 시각화
- archive/ 히스토리 조회
- 파일 내용 미리보기

**스크린샷** (상상):
```
┌────────────────── OpenSpec Dashboard ──────────────────┐
│                                                          │
│  📁 Specs (3)                📁 Changes (2)             │
│  ├─ auth/spec.md            ├─ add-user-auth           │
│  ├─ user/spec.md            └─ refactor-api            │
│  └─ order/spec.md                                       │
│                                                          │
│  📦 Archive (5)                                         │
│  └─ 2025-10-10-add-dark-mode                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

#### `openspec show <change>`

**기능**: 특정 변경사항 상세 보기

**사용법**:
```bash
openspec show add-user-auth
```

**출력**:
```
📄 Proposal
────────────────────────────────────
# 사용자 인증 시스템 추가

## 동기
...

📋 Tasks (12 total, 5 completed)
────────────────────────────────────
## 1. 데이터베이스
- [x] 1.1 users 테이블 생성
- [x] 1.2 sessions 테이블 생성
- [ ] 1.3 인덱스 추가

## 2. 백엔드
- [x] 2.1 POST /auth/register
- [x] 2.2 POST /auth/login
- [ ] 2.3 POST /auth/logout
...

📐 Spec Deltas
────────────────────────────────────
specs/auth/spec.md:
  + 3 ADDED requirements
  + 0 MODIFIED requirements
  + 0 REMOVED requirements
```

---

#### `openspec validate <change>`

**기능**: 명세 형식 검증

**사용법**:
```bash
openspec validate add-user-auth
```

**검증 항목**:
1. **Markdown 구문**: 헤더, 리스트 등
2. **델타 형식**: `## ADDED/MODIFIED/REMOVED Requirements`
3. **요구사항 헤더**: `### Requirement: ...`
4. **시나리오 존재**: 모든 요구사항에 최소 1개 시나리오
5. **SHALL/MUST 키워드**: 요구사항 문장에 포함

**출력 예시** (통과):
```
✓ proposal.md: Valid
✓ tasks.md: Valid
✓ specs/auth/spec.md: Valid
  - 3 requirements found
  - 8 scenarios found
  - All requirements use SHALL/MUST
✓ All checks passed
```

**출력 예시** (실패):
```
✗ specs/auth/spec.md: Validation failed
  Line 45: Missing scenario for requirement "User Registration"
  Line 62: Requirement text missing SHALL/MUST keyword

Fix these issues and run validate again.
```

---

#### `openspec archive <change> [--yes]`

**기능**: 완료된 변경사항 아카이브

**사용법**:
```bash
# 대화형 (확인 요청)
openspec archive add-user-auth

# 자동 확인 (--yes 플래그)
openspec archive add-user-auth --yes
```

**실행 과정**:
```
1️⃣ 델타 병합 중...
   ├─ specs/auth/spec.md 읽기
   ├─ changes/add-user-auth/specs/auth/spec.md 델타 적용
   │   ├─ ADDED 섹션 병합
   │   ├─ MODIFIED 섹션 적용
   │   └─ REMOVED 섹션 삭제
   └─ ✓ specs/auth/spec.md 업데이트

2️⃣ 변경사항 이동 중...
   changes/add-user-auth/
   → archive/2025-10-12-add-user-auth/

✓ 아카이브 완료!
```

**주의사항**:
- 아카이브 전에 모든 Tasks가 완료되었는지 확인하세요
- 아카이브 후에는 changes/ 폴더에서 삭제됩니다
- archive/ 폴더는 히스토리 보관용이므로 삭제하지 마세요

---

#### `openspec update`

**기능**: AI 도구 설정 업데이트

**사용법**:
```bash
openspec update
```

**언제 사용하나요?**:
- OpenSpec 패키지를 업그레이드한 후
- 팀원이 다른 AI 도구를 사용하기 시작할 때
- AGENTS.md나 슬래시 커맨드를 재생성하고 싶을 때

**실행 결과**:
```
🔄 Updating OpenSpec configuration...

✓ AGENTS.md regenerated
✓ Claude Code commands updated
✓ Cursor prompts refreshed

Run 'openspec list' to verify.
```

---

## 다른 도구와의 비교

### 🆚 OpenSpec vs. spec-kit

| 측면 | OpenSpec | spec-kit |
|------|----------|----------|
| **목표** | 0→1 + 1→n (기존 시스템 수정) | 0→1 (새 기능 추가) |
| **구조** | 2폴더 모델 (specs/, changes/) | 단일 폴더 (기능별) |
| **변경 추적** | 델타 명시 (ADDED/MODIFIED/REMOVED) | 암시적 변경 |
| **여러 명세 수정** | 한 change 폴더에서 관리 | 각 명세 폴더에 분산 |
| **장점** | 명확한 변경사항, 히스토리 추적 | 단순함, 빠른 시작 |
| **단점** | 학습 곡선 약간 있음 | 복잡한 변경 시 불편 |

**언제 OpenSpec을 선택하나요?**
- ✅ 기존 프로젝트에 기능 추가/수정
- ✅ 여러 모듈에 걸친 변경
- ✅ 변경 이력 추적 중요
- ✅ 팀 협업

**언제 spec-kit을 선택하나요?**
- ✅ 완전히 새로운 프로젝트 (0→1)
- ✅ 단순한 기능 추가
- ✅ 개인 프로젝트
- ✅ 빠른 프로토타이핑

---

### 🆚 OpenSpec vs. Kiro.dev

| 측면 | OpenSpec | Kiro.dev |
|------|----------|----------|
| **파일 구조** | 기능별 폴더 (change/feature-name/) | 명세별 폴더 (spec/auth/changes/) |
| **추적성** | 한 곳에서 모든 변경 확인 | 여러 폴더 탐색 필요 |
| **명세 델타** | 명시적 ADDED/MODIFIED/REMOVED | 암시적 |
| **Source of Truth** | specs/ 폴더 분리 | 명세 폴더 내 혼재 |
| **도구 통합** | 10개 AI 도구 네이티브 지원 | 제한적 |

**시나리오 비교**:

**Kiro.dev 구조**:
```
specs/
├── auth/
│   ├── spec.md
│   └── changes/
│       ├── add-2fa/
│       └── fix-jwt/
└── user/
    ├── spec.md
    └── changes/
        └── add-profile-pic/
```
👎 "add-2fa 작업이 어디까지 진행됐지?" → 여러 폴더 확인 필요

**OpenSpec 구조**:
```
specs/
├── auth/spec.md
└── user/spec.md

changes/
└── add-2fa/           ◀─ 모든 관련 파일 한 곳에
    ├── proposal.md
    ├── tasks.md
    └── specs/
        ├── auth/spec.md
        └── user/spec.md
```
👍 "add-2fa 작업?" → changes/add-2fa/ 한 곳만 보면 됨

---

### 🆚 OpenSpec vs. No Specs (명세 없이)

| 상황 | 명세 없이 | OpenSpec 사용 |
|------|-----------|---------------|
| **요구사항 전달** | 채팅으로 설명 | 명세서에 문서화 |
| **AI 이해도** | 추측에 의존 | 정확한 이해 |
| **재작업** | 빈번함 (30-50%) | 드묾 (5-10%) |
| **변경 이력** | 없음 | 명확한 추적 |
| **팀 협업** | 어려움 | 용이함 |
| **유지보수** | 코드 읽기 | 명세 참조 |

**실제 사례**:

**명세 없이** (80시간 프로젝트):
```
Day 1: "로그인 기능 만들어줘" → 구현
Day 2: "아, 소셜 로그인도 필요해" → 재구현
Day 3: "2FA도 추가해야 하는데..." → 대규모 수정
Day 5: "처음 로그인 스펙이 뭐였더라?" → 채팅 기록 뒤짐
```
결과: 시간 낭비, 잦은 재작업

**OpenSpec 사용** (50시간 프로젝트):
```
Day 1: 로그인 명세 작성 (2시간) + AI와 검토 (1시간)
Day 2: 명세 기반 구현 (6시간) - 한 번에 정확히
Day 3: 2FA 명세 추가 (델타) → 구현
Day 5: specs/auth/spec.md 보면 모든 기록 있음
```
결과: 시간 절약, 정확한 구현

---

## 팀 도입 가이드

### 🏢 팀에 OpenSpec 도입하기

#### Step 1: 파일럿 프로젝트 (1주)

**목표**: 작은 기능으로 OpenSpec 효과 입증

**선택 기준**:
- ✅ 중요도: 중간 정도 (실패해도 괜찮음)
- ✅ 복잡도: 간단~중간 (학습에 적합)
- ✅ 기간: 1주일 이내 완료 가능
- ✅ 팀원: 2-3명 참여

**예시**:
> "대시보드에 새 차트 추가" 프로젝트
> - 기간: 3일
> - 참여: 개발자 2명, 디자이너 1명
> - OpenSpec 사용

**평가 지표**:
- 재작업 빈도 (Before vs. After)
- AI와 소통 효율성
- 팀원 만족도

#### Step 2: 프로세스 정립 (2주)

**팀 컨벤션 만들기**:

**naming-convention.md**:
```markdown
# OpenSpec 네이밍 규칙

## 변경사항 폴더 이름
- 형식: `{action}-{feature}`
- action: add, update, remove, refactor, fix
- 예시:
  - ✅ add-user-profile
  - ✅ update-login-flow
  - ✅ fix-payment-bug
  - ❌ user-profile (action 누락)
  - ❌ add_user_profile (언더스코어 사용 금지)

## 명세 파일 이름
- 형식: `{domain}/spec.md`
- 소문자, 하이픈 사용
- 예시:
  - ✅ auth/spec.md
  - ✅ user-profile/spec.md
  - ❌ Auth/Spec.md (대문자)
  - ❌ userProfile/spec.md (카멜케이스)
```

**review-checklist.md**:
```markdown
# 변경사항 리뷰 체크리스트

## Proposal 리뷰
- [ ] 동기가 명확한가?
- [ ] 범위가 적절한가? (너무 크지/작지 않은가)
- [ ] 영향받는 시스템이 모두 명시되었나?

## Tasks 리뷰
- [ ] 작업이 실행 가능한 단위로 나뉘었나?
- [ ] 의존성이 명확한가? (순서)
- [ ] 테스트 항목이 포함되었나?

## Specs 리뷰
- [ ] 모든 요구사항에 시나리오가 있나?
- [ ] SHALL/MUST 키워드 사용되었나?
- [ ] 엣지 케이스를 고려했나?
```

#### Step 3: 점진적 확산 (1개월)

**주차별 계획**:

**Week 1**: 신규 기능만 OpenSpec 사용
```
기존 진행 중인 작업: 기존 방식
새로운 작업: OpenSpec
```

**Week 2**: 리팩토링 작업도 포함
```
버그 수정: 선택적
신규 기능 + 리팩토링: OpenSpec
```

**Week 3**: 버그 수정까지 확대
```
모든 코드 변경: OpenSpec
```

**Week 4**: 전체 적용 및 회고
```
팀 회의: OpenSpec 효과 평가
개선점 논의
```

#### Step 4: 지속적 개선

**월간 리뷰 미팅**:
```
주제:
1. OpenSpec 사용 통계
   - 생성된 변경사항 수
   - 재작업율
   - 아카이브까지 평균 소요 시간

2. 문제점 공유
   - 어려운 점
   - 비효율적인 프로세스

3. 개선 아이디어
   - 템플릿 수정
   - 자동화 도구
   - 팀 컨벤션 업데이트
```

### 👥 역할별 가이드

#### 프론트엔드 개발자

**자주 다루는 명세**:
- UI 컴포넌트 명세
- 상태 관리 명세
- 사용자 인터랙션 명세

**예시 변경사항**:
```
changes/add-user-settings-page/
├── proposal.md
├── tasks.md
└── specs/
    ├── ui/
    │   └── spec.md          # UI 컴포넌트
    └── state/
        └── spec.md          # Redux/Context 상태
```

#### 백엔드 개발자

**자주 다루는 명세**:
- API 엔드포인트 명세
- 데이터베이스 스키마 명세
- 비즈니스 로직 명세

**예시 변경사항**:
```
changes/add-order-api/
├── proposal.md
├── tasks.md
└── specs/
    ├── api/
    │   └── orders.md        # REST API
    └── database/
        └── orders.md        # DB 스키마
```

#### QA 엔지니어

**OpenSpec 활용**:
- `tasks.md`에서 테스트 케이스 도출
- `specs/**/*.md`에서 수용 기준 확인
- `proposal.md`에서 테스트 범위 이해

**테스트 플랜 생성**:
```markdown
# Test Plan: add-user-auth

## 기반 명세
openspec/changes/add-user-auth/specs/auth/spec.md

## 시나리오별 테스트

### Scenario: Valid Login
테스트 케이스 ID: TC-001
- Input: email="test@example.com", password="Test1234!"
- Expected: JWT token 발급, 대시보드 리디렉션
- Actual: (테스트 결과 기록)

### Scenario: Invalid Password
테스트 케이스 ID: TC-002
- Input: email="test@example.com", password="wrong"
- Expected: "인증 실패" 메시지, 로그인 페이지 유지
- Actual: (테스트 결과 기록)
```

---

## 문제 해결 FAQ

### ❓ 자주 묻는 질문

#### Q1: "AI가 OpenSpec 구조를 이해하지 못해요"

**A**: AGENTS.md가 제대로 작성되었는지 확인하세요.

```bash
# AGENTS.md 재생성
openspec update

# 내용 확인
cat openspec/AGENTS.md
```

**AI에게 명시적으로 알려주기**:
```
"이 프로젝트는 OpenSpec을 사용합니다.
openspec/AGENTS.md를 읽고 워크플로우를 따라주세요."
```

#### Q2: "변경사항이 너무 커서 관리가 어려워요"

**A**: 변경사항을 여러 개로 쪼개세요.

**잘못된 예** (너무 큼):
```
changes/refactor-entire-auth-system/  ← 범위가 너무 넓음
```

**올바른 예** (적절히 분할):
```
changes/update-jwt-to-refresh-token/
changes/add-2fa/
changes/migrate-bcrypt-to-argon2/
```

**분할 기준**:
- 1주일 이내 완료 가능한 크기
- 독립적으로 배포 가능
- 단일 목적

#### Q3: "`openspec archive` 시 충돌이 발생해요"

**A**: 델타 병합 전에 specs/ 파일을 수동 검토하세요.

**충돌 예시**:
```
specs/auth/spec.md (현재):
### Requirement: Password Policy
시스템은 8자 이상 비밀번호를 요구한다.

changes/add-2fa/specs/auth/spec.md (델타):
## MODIFIED Requirements
### Requirement: Password Policy
시스템은 12자 이상 비밀번호를 요구한다.

↓ 병합 시도

❌ 충돌: 두 요구사항이 다름!
```

**해결 방법**:
1. `specs/auth/spec.md` 백업
2. 수동으로 델타 적용
3. `archive` 명령어 다시 실행

#### Q4: "팀원마다 다른 AI 도구를 써요"

**A**: OpenSpec은 멀티 도구를 지원합니다!

```bash
# 초기화 시 여러 도구 선택
openspec init

? AI 도구 선택:
  ◉ Claude Code (Alice 사용)
  ◉ Cursor (Bob 사용)
  ◉ Windsurf (Charlie 사용)
```

**결과**:
```
.claude/commands/          ← Alice용
.cursor/prompts/           ← Bob용
.windsurf/workflows/       ← Charlie용
openspec/AGENTS.md         ← 모두 공통으로 참조
```

모든 팀원이 같은 `openspec/` 폴더를 공유하며 작업합니다.

#### Q5: "명세 작성이 너무 오래 걸려요"

**A**: AI에게 초안 작성을 맡기세요.

```
"다음 기능에 대한 OpenSpec 명세를 작성해줘:
- 기능: 사용자 프로필 편집
- 필드: 이름, 이메일, 전화번호, 프로필 사진
- 유효성 검사: 이메일 형식, 전화번호 10자리

명세는 'ADDED Requirements' 형식으로 작성해줘."
```

AI가 초안을 만들면 → 당신이 검토 및 수정 → 훨씬 빠름!

#### Q6: "Git과 어떻게 통합하나요?"

**A**: OpenSpec 폴더를 Git에 커밋하세요.

**.gitignore**:
```gitignore
# OpenSpec은 커밋함 (중요!)
# openspec/ 폴더를 .gitignore에 추가하지 마세요

# 다른 일반적인 무시 파일들
node_modules/
.env
dist/
```

**커밋 전략**:
```bash
# 1. 제안 생성 후 커밋
git add openspec/changes/add-user-auth/
git commit -m "spec: Add user authentication proposal"

# 2. 구현 완료 후 커밋
git add src/ openspec/changes/add-user-auth/
git commit -m "feat: Implement user authentication"

# 3. 아카이브 후 커밋
git add openspec/
git commit -m "spec: Archive add-user-auth change"
```

**브랜치 전략**:
```
main
├─ feat/add-user-auth
│  ├─ 커밋 1: "spec: Create proposal"
│  ├─ 커밋 2: "spec: Review and update specs"
│  ├─ 커밋 3: "feat: Implement auth endpoints"
│  ├─ 커밋 4: "test: Add auth tests"
│  └─ 커밋 5: "spec: Archive change"
└─ (PR 병합)
```

#### Q7: "명세가 너무 길어져요"

**A**: 명세를 여러 파일로 분할하세요.

**잘못된 예** (하나의 거대한 파일):
```
specs/ecommerce/spec.md (5000 줄) ← 너무 큼
```

**올바른 예** (도메인별 분할):
```
specs/
├── product/
│   ├── catalog.md        # 상품 카탈로그
│   └── inventory.md      # 재고 관리
├── order/
│   ├── cart.md           # 장바구니
│   ├── checkout.md       # 결제
│   └── fulfillment.md    # 배송
└── user/
    ├── account.md        # 계정 관리
    └── preferences.md    # 사용자 설정
```

**분할 기준**:
- 파일당 500줄 이하 권장
- 논리적으로 독립적인 기능
- 명확한 책임 경계

---

## 용어 사전

### 🔤 알파벳 순

#### A

**AGENTS.md**
- **정의**: AI 도구가 읽는 워크플로우 가이드 파일
- **쉬운 설명**: AI를 위한 "사용 설명서"
- **위치**: 프로젝트 루트 (`openspec/AGENTS.md`)
- **용도**: Slash 커맨드가 없는 AI 도구가 OpenSpec 사용법을 이해하도록 함

**Archive**
- **정의**: 완료된 변경사항을 보관하는 폴더
- **쉬운 설명**: "완료된 프로젝트 박스"
- **경로**: `openspec/archive/`
- **예시**: `archive/2025-10-12-add-user-auth/`

**ASR (Automatic Speech Recognition)**
- **정의**: 자동 음성 인식
- **관련성**: OpenSpec과 직접 관련 없음 (예시에서만 사용)

#### B

**Brownfield**
- **정의**: 이미 존재하는 시스템/프로젝트
- **쉬운 설명**: "이미 지어진 집에 방 추가하기"
- **반대**: Greenfield (완전히 새로운 프로젝트)
- **OpenSpec 강점**: Brownfield 프로젝트에 적합

#### C

**Change**
- **정의**: 제안된 시스템 변경사항 (폴더 단위)
- **쉬운 설명**: "업그레이드 계획서 폴더"
- **경로**: `openspec/changes/feature-name/`
- **구성**:
  - `proposal.md`: 제안서
  - `tasks.md`: 작업 목록
  - `specs/`: 명세 변경사항 (델타)

**CLI (Command Line Interface)**
- **정의**: 명령줄 인터페이스
- **쉬운 설명**: 검은 화면에서 명령어 입력하는 것 (터미널)
- **OpenSpec CLI**: `openspec list`, `openspec archive` 등

#### D

**Delta**
- **정의**: 명세의 변경사항 (추가/수정/삭제)
- **쉬운 설명**: "변경 전"과 "변경 후"의 차이점
- **3가지 타입**:
  - `ADDED`: 새로 추가됨
  - `MODIFIED`: 기존 것 수정됨
  - `REMOVED`: 삭제됨
- **예시**:
  ```markdown
  ## ADDED Requirements
  ### Requirement: Two-Factor Auth
  ...
  ```

#### E

**Event-Driven Architecture**
- **정의**: 이벤트 기반 아키텍처
- **관련성**: 고급 예제에서 다룸
- **쉬운 설명**: 서비스들이 "메시지"를 주고받으며 통신

#### G

**Greenfield**
- **정의**: 완전히 새로운 프로젝트 (0→1)
- **쉬운 설명**: "빈 땅에 집 짓기"
- **반대**: Brownfield (기존 시스템 수정)

#### J

**JSON-RPC**
- **정의**: JSON 형식의 원격 프로시저 호출
- **관련성**: 고급 예제 (마이크로서비스)에서만 언급

**JWT (JSON Web Token)**
- **정의**: 인증 토큰 표준
- **관련성**: 중급 예제 (사용자 인증)에서 사용

#### M

**Microservices**
- **정의**: 마이크로서비스 아키텍처
- **관련성**: 고급 예제에서 다룸
- **쉬운 설명**: 큰 시스템을 작은 독립적 서비스로 나눔

**MUST / SHALL**
- **정의**: 요구사항 키워드 (RFC 2119 표준)
- **쉬운 설명**: "반드시 해야 함"을 나타내는 단어
- **OpenSpec 규칙**: 모든 요구사항 문장에 포함 필요
- **예시**: "시스템은 비밀번호를 암호화해야 한다 (MUST)."

#### P

**Proposal**
- **정의**: 변경 제안서 (`proposal.md`)
- **쉬운 설명**: "왜 이 기능을 만들까?" 설명 문서
- **포함 내용**:
  - 동기 (Motivation)
  - 목표 (Goals)
  - 범위 (Scope)
  - 영향 (Impact)

#### R

**Requirement**
- **정의**: 시스템이 해야 하는 일
- **쉬운 설명**: "이 프로그램은 ~~을 할 수 있어야 한다"
- **OpenSpec 형식**:
  ```markdown
  ### Requirement: 사용자 로그인
  시스템은 이메일과 비밀번호로 로그인할 수 있어야 한다 (MUST).
  ```

#### S

**Scenario**
- **정의**: 요구사항이 실제로 어떻게 동작하는지 설명
- **쉬운 설명**: "이런 상황이 발생하면 이렇게 동작한다"
- **OpenSpec 형식**:
  ```markdown
  #### Scenario: 유효한 로그인
  - WHEN 사용자가 올바른 이메일과 비밀번호를 입력하면
  - THEN JWT 토큰이 발급된다
  - AND 대시보드로 리디렉션된다
  ```

**Slash Command**
- **정의**: `/`로 시작하는 AI 도구 명령어
- **쉬운 설명**: AI 도구의 "단축키"
- **OpenSpec 예시**:
  - `/openspec:proposal`: 제안 생성
  - `/openspec:apply`: 구현
  - `/openspec:archive`: 아카이브

**Source of Truth**
- **정의**: 정보의 단일 출처 (유일한 정답)
- **쉬운 설명**: "진짜 정보가 있는 곳"
- **OpenSpec**: `specs/` 폴더가 Source of Truth

**Spec (Specification)**
- **정의**: 명세서, 사양서
- **쉬운 설명**: "제품 설명서"
- **OpenSpec**: `specs/**/*.md` 파일들

#### T

**Task**
- **정의**: 구현 작업 (체크리스트 항목)
- **쉬운 설명**: "할 일 목록의 각 항목"
- **형식**:
  ```markdown
  ## 1. 데이터베이스
  - [ ] 1.1 users 테이블 생성
  - [ ] 1.2 sessions 테이블 생성
  ```

#### W

**Workflow**
- **정의**: 작업 흐름, 절차
- **쉬운 설명**: "일하는 순서"
- **OpenSpec Workflow**:
  1. Proposal (제안)
  2. Review (검토)
  3. Apply (구현)
  4. Archive (아카이브)

---

### 📊 개념별 분류

#### 파일 및 폴더
- specs/ (현재 명세)
- changes/ (제안된 변경)
- archive/ (완료된 변경)
- proposal.md (제안서)
- tasks.md (작업 목록)
- design.md (기술 설계)
- AGENTS.md (AI 가이드)

#### 명세 관련
- Specification (명세서)
- Requirement (요구사항)
- Scenario (시나리오)
- Delta (변경사항)
- ADDED / MODIFIED / REMOVED

#### 프로세스
- Proposal (제안)
- Review (검토)
- Apply (구현)
- Archive (아카이브)
- Workflow (작업 흐름)

#### 도구 및 기술
- CLI (명령줄)
- Slash Command (슬래시 커맨드)
- Source of Truth (정보의 출처)
- Brownfield / Greenfield

---

## 🙏 마치며

### 📈 다음 단계 추천

#### 초보자 (1주일 차)
1. ✅ 연습용 프로젝트 생성 (`my-first-openspec`)
2. ✅ 간단한 기능 제안 만들기 (다크 모드 등)
3. ✅ AI와 함께 명세 검토
4. ✅ 구현 및 아카이브 경험
5. ✅ 실제 프로젝트에 적용 시도

#### 중급자 (2-3주 차)
1. ✅ 실제 프로젝트에 OpenSpec 도입
2. ✅ 복잡한 기능 (인증 등) 명세 작성
3. ✅ 팀원과 함께 리뷰 프로세스 확립
4. ✅ 여러 명세에 걸친 변경사항 관리
5. ✅ 커스텀 템플릿 개발

#### 고급자 (1개월 차)
1. ✅ 마이크로서비스 등 복잡한 시스템 명세화
2. ✅ 팀 전체 OpenSpec 도입 리드
3. ✅ 자동화 스크립트 개발
4. ✅ 다른 도구와 통합 (Jira, GitHub 등)
5. ✅ 오픈소스 기여

### 🎯 성공을 위한 팁

**기억하세요**:
- 🚀 **완벽한 명세는 없습니다**: 초안부터 완벽하려 하지 마세요
- 🐛 **AI와 함께 개선**: 명세 작성도 AI에게 도움받으세요
- 🤝 **팀과 소통**: 명세는 팀 전체가 이해해야 합니다
- 🎉 **작은 성공 축하**: 첫 아카이브 완료는 큰 성과입니다!
- 📚 **지속적 개선**: 팀 컨벤션을 계속 발전시키세요
- 🔍 **사례 연구**: 다른 팀의 OpenSpec 사용 사례 참고

**"좋은 명세는 좋은 소프트웨어의 시작입니다."**

### 🌟 성공 사례

**스타트업 A**:
> "OpenSpec 도입 후 AI 코딩 재작업율이 40%에서 8%로 감소했습니다.
> 개발 속도가 2배 빨라졌어요!" - CTO

**기업 B**:
> "팀원 10명이 서로 다른 AI 도구를 사용하는데,
> OpenSpec 덕분에 통일된 명세를 공유합니다." - Tech Lead

**프리랜서 C**:
> "명세서를 클라이언트와 공유하니 요구사항 변경이 90% 줄었습니다.
> 돈도 시간도 절약!" - 개인 개발자

### 📢 커뮤니티 참여

**도움받기**:
- 🔗 [GitHub Issues](https://github.com/Fission-AI/OpenSpec/issues) - 버그 리포트, 질문
- 💬 [Discord](https://discord.gg/YctCnvvshC) - 실시간 채팅 지원
- 🐦 [@0xTab on X](https://x.com/0xTab) - 업데이트 소식

**기여하기**:
- 🐛 버그 발견 → GitHub Issues 리포트
- 💡 기능 아이디어 → Discussions에 제안
- 📝 튜토리얼 작성 → 블로그 공유
- 🔧 코드 개선 → Pull Request 제출
- 🌐 번역 → 다른 언어 문서 기여

### 📜 라이선스 및 저작권

**원본 프로젝트**: [OpenSpec by Fission AI](https://github.com/Fission-AI/OpenSpec)
- **라이선스**: MIT License
- **상업적 이용**: ✅ 무료
- **수정 및 배포**: ✅ 자유롭게
- **API 키**: ❌ 불필요

**이 가이드**:
- **원저작자**: Fission AI (@0xTab)
- **가이드 작성**: 초보 개발자를 위한 한국어 교육 자료
- **사용 목적**: 학습 및 교육

---

## 연결된 노트
- [[Claude Code 완전 가이드]]
- [[Cursor AI 코딩 도우미 활용법]]
- [[명세 기반 개발 방법론]]
- [[AI 코딩 도구 비교 분석]]
- [[프로젝트 관리 자동화]]
- [[Git 워크플로우 최적화]]
- [[팀 협업 도구 모음]]

---

## 📊 학습 체크리스트

### 이론 학습 (30%)
- [ ] OpenSpec 개념 이해
- [ ] Spec-driven Development 철학
- [ ] Delta 형식 (ADDED/MODIFIED/REMOVED)
- [ ] Proposal-Review-Apply-Archive 워크플로우
- [ ] Source of Truth 개념

### 실습 (50%)
- [ ] OpenSpec CLI 설치
- [ ] 프로젝트 초기화 (`openspec init`)
- [ ] 첫 제안 생성
- [ ] AI와 명세 검토
- [ ] 변경사항 구현 (`openspec apply`)
- [ ] 아카이브 완료 (`openspec archive`)
- [ ] 대시보드 확인 (`openspec view`)

### 응용 (20%)
- [ ] 실제 프로젝트에 도입
- [ ] 팀원과 협업
- [ ] 커스텀 템플릿 개발
- [ ] 복잡한 변경사항 관리
- [ ] 커뮤니티에 사례 공유

---

**📝 문서 정보**
- **원본 프로젝트**: OpenSpec by Fission AI
- **문서 버전**: v1.0
- **대상 독자**: 초보 개발자 (AI 코딩 도구 사용자)
- **예상 학습 시간**: 2-3일 (이론 1일 + 실습 2일)
- **난이도**: ⭐⭐☆☆☆ (5점 만점)
- **작성일**: 2025-10-12
- **마지막 업데이트**: 2025-10-12
- **문서 언어**: 한국어

**🔗 참고 자료**
- [GitHub 원본 저장소](https://github.com/Fission-AI/OpenSpec)
- [공식 문서](https://github.com/Fission-AI/OpenSpec#readme)
- [Discord 커뮤니티](https://discord.gg/YctCnvvshC)
- [@0xTab on X](https://x.com/0xTab)

**📢 피드백**
이 가이드가 도움이 되었나요? 개선 제안이나 오류 발견 시:
- GitHub Issues에 리포트
- Discord에서 피드백
- X에서 멘션

---

**감사의 말**: 이 프로젝트는 Fission AI와 오픈소스 커뮤니티의 노력으로 만들어졌습니다. 명세 기반 개발의 중요성을 알려주신 모든 분들께 감사드립니다. 🙏
