---
title: Claude Code 완벽 마스터 가이드
created: 2025-12-26
last_modified: 2025-12-26
tags:
  - AI/Claude-Code
  - 개발도구/CLI
  - 가이드/완벽가이드
  - 초보자용
  - 자동화
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/tubszwnk#eAVTzn9KRC4nBlempUF/epH8sd8Ld5BlDkEycJ2Id8M
share_updated: 2025-12-26T09:05:51+09:00
---
![[999-Attachments/Claude-Code-마스터-가이드-Choi-OpenAI-정리--poster-1766707261525.jpg]]

>스레드에 ==Choi.OpenAI 글==을 학습용으로 사용하기 위해 편집한 파일입니다.
==Special thanks to Choi.OpenAI.==
당신 덕분에 2025년에 엄청난 성장을 할 수 있었습니다.
대단히 고맙습니다.
원본 링크: [https://www.threads.com/@choi.openai/post/DSo7XGVD1M0?xmt=AQF0GFnN9nJoP-SqqXe-Uzj9eJkAuO4yPLK5KdowoUvNyQ](https://www.threads.com/@choi.openai/post/DSo7XGVD1M0?xmt=AQF0GFnN9nJoP-SqqXe-Uzj9eJkAuO4yPLK5KdowoUvNyQ)

# Claude Code 완벽 마스터 가이드

> Anthropic의 Claude Code를 처음부터 완벽하게 마스터하는 초보자 친화적 가이드

## 목차

1. [[#시작하기 전에]]
2. [[#Part 1 설치와 기본 설정]]
3. [[#Part 2 필수 단축키와 명령어]]
4. [[#Part 3 메모리와 컨텍스트 관리]]
5. [[#Part 4 작업 관리와 세션]]
6. [[#Part 5 워크플로우 자동화]]
7. [[#Part 6 고급 기능]]
8. [[#학습 로드맵]]
9. [[#문제 해결 FAQ]]

---

## 시작하기 전에

### Claude Code란?

Claude Code는 Anthropic이 만든 **터미널 기반 AI 코딩 어시스턴트**입니다. VS Code의 Cursor나 GitHub Copilot과 달리, 터미널에서 직접 대화하며 코드를 작성하고 수정할 수 있습니다.

### 왜 Claude Code인가?

| 특징 | 설명 |
|------|------|
| **터미널 네이티브** | IDE 없이도 어디서든 코딩 |
| **파일 직접 수정** | 코드를 제안만 하는 게 아니라 직접 수정 |
| **Git 통합** | 커밋, 브랜치, PR 작업 자동화 |
| **MCP 지원** | 외부 도구와 연동 (GitHub, Slack 등) |
| **세션 관리** | 작업을 저장하고 이어서 진행 |

### 이 가이드 읽는 법

- **스토리텔링 방식**: "왜?"를 이해하면 "어떻게"는 자연스럽게 따라옵니다
- **파인만 기법**: 가장 쉬운 말로 설명합니다
- **실전 예제**: 모든 개념에는 바로 써먹을 수 있는 예제가 있습니다

---

## Part 1: 설치와 기본 설정

### 설치하기

```bash
# macOS/Linux
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version
```

### 첫 실행

```bash
# 프로젝트 폴더로 이동
cd ~/my-project

# Claude Code 시작
claude
```

### 프로젝트 초기화

```bash
# 프로젝트 분석 및 CLAUDE.md 자동 생성
/init
```

이 명령어는 프로젝트를 분석해서 **CLAUDE.md** 파일을 자동 생성합니다. 이 파일에는:
- 프로젝트 구조
- 빌드 방법
- 테스트 방법
- 코딩 컨벤션

등이 담겨 있어서 Claude가 프로젝트를 더 잘 이해합니다.

---

## Part 2: 필수 단축키와 명령어

### `!` 프리픽스 - 터미널 명령어 즉시 실행

**상황**: Claude에게 "git status 실행해줘"라고 말하면, Claude는 한 번 확인을 물어봅니다. `!`를 붙이면 바로 실행됩니다.

```bash
# 일반적인 방법 (확인 후 실행)
"git status 실행해줘"

# 즉시 실행
!git status
!npm test
!ls -la
```

**실행 흐름**:
```
입력: !git status
→ bash 즉시 실행
→ 결과가 대화 컨텍스트에 자동 추가
→ Claude가 이 정보를 바탕으로 다음 작업 제안
```

**팁**: 간단한 명령어부터 시작하세요: `!pwd`, `!ls`

---

### ESC 두 번 - 되돌리기 (타임머신)

**상황**: 코딩하다가 "이건 아닌데..."라는 순간이 있죠. Git의 reset처럼 되돌릴 수 있습니다.

```
ESC ESC 누르기
→ 이전 체크포인트 목록 표시
→ 원하는 시점 선택
→ 그 시점으로 복원
```

**선택 옵션**:
- 대화만 되돌리기
- 코드만 되돌리기
- 둘 다 되돌리기

**활용 예시**:
- 새로운 알고리즘을 시도했는데 기존 방식이 나았을 때
- 리팩토링했는데 원래 코드가 더 명확했을 때
- 여러 디자인 패턴을 비교 테스트할 때

---

### `@` 멘션 - 파일과 폴더 참조

**상황**: Slack에서 사람을 멘션하듯, Claude Code에서는 파일과 폴더를 `@`로 참조합니다.

```bash
# 파일 참조
@src/components/Button.tsx를 리팩토링해줘

# 폴더 전체 참조
@src/utils 폴더의 모든 함수에 타입 추가해줘

# 여러 파일 비교
@src/oldApi.ts와 @src/newApi.ts의 차이점을 설명해줘

# MCP 서버 참조 (외부 도구)
@github에서 최근 이슈 확인해줘
```

**내부 동작**:
```
입력: @src/app.ts 분석해줘
→ 파일 내용 읽기
→ 컨텍스트에 자동 추가
→ Claude가 파일 내용을 보고 분석
```

**주의**: 큰 파일을 여러 개 참조하면 컨텍스트가 부족할 수 있습니다. `/context`로 확인하세요.

---

### 사고 깊이 조절 키워드

Claude에게 얼마나 깊이 생각할지 힌트를 줄 수 있습니다.

| 키워드 | 설명 | 사용 시점 |
|--------|------|----------|
| (없음) | 빠른 답변 | 간단한 질문 |
| `think` | 여러 옵션 고려 | 일반적인 개선 요청 |
| `think hard` | 심층 분석 | 복잡한 문제 |
| `ultrathink` | 최대 사고력 | 아키텍처, 보안 검토 |

**예시 비교**:

```
# 일반 모드
"이 코드 개선해줘"
→ "캐싱을 추가하세요"

# think 모드
"이 코드 개선해줘 (think)"
→ "3가지 방법이 있습니다: 1) 캐싱 2) 쿼리 최적화 3) 비동기 처리..."

# ultrathink 모드
"이 코드 개선해줘 (ultrathink)"
→ 현재 병목 분석, 각 옵션의 장단점, 구현 난이도, 추천 순서까지 상세 분석
```

---

## Part 3: 메모리와 컨텍스트 관리

### `#` 프리픽스 - 메모리에 규칙 저장

**상황**: "나는 항상 bun을 사용해"라고 팀원에게 말하면 기억하죠? Claude에게도 규칙을 기억시킬 수 있습니다.

```bash
# Always use bun instead of npm
# Prefer TypeScript over JavaScript
# Follow Airbnb style guide
```

**저장 위치**: `.claude/memory.md`

**활용 예시**:

```bash
# 프로젝트별 규칙
# Use React 18 with TypeScript
# API calls should use Axios
# Tests should use Jest

# 팀 컨벤션
# PR titles must start with [FEATURE], [FIX], or [REFACTOR]
# Commit messages follow conventional commits
```

---

### `/context` - 토큰 사용량 확인

**상황**: Claude도 "메모리"가 제한되어 있습니다. 현재 얼마나 사용 중인지 확인하세요.

```
/context 입력

📊 Context Usage (32,000 / 200,000 토큰)

System Prompt: 5,000 tokens (15%)
MCP Servers: 8,000 tokens (25%)
Memory Files: 3,000 tokens (9%)
Conversation: 16,000 tokens (50%)
```

**컨텍스트 부족할 때 해결책**:

```bash
# 1. 오래된 대화 정리
ESC ESC → 불필요한 부분 되감기

# 2. 새 세션 시작
claude --new

# 3. 요약 후 재시작
"지금까지 내용을 요약해주고 새 세션으로 시작하자"
```

**팁**: 큰 파일을 통째로 올리기보다 `@`로 필요한 부분만 참조하세요.

---

## Part 4: 작업 관리와 세션

### `--continue`와 `--resume` - 작업 이어가기

**상황**: 책을 읽다가 중단하면 책갈피를 끼우죠? Claude Code도 가능합니다.

```bash
# 방금 하던 작업 바로 이어가기
claude --continue

# 예전 작업 목록에서 선택하기
claude --resume
```

**시나리오 1: 급하게 노트북을 닫아야 할 때**
```
1. 작업 중...
2. 회의 시작! 노트북 닫음
3. 회의 후: claude --continue
4. 중단한 곳부터 자동으로 이어짐
```

**시나리오 2: 여러 프로젝트 관리**
```
월요일: API 마이그레이션 작업
화요일: 프론트엔드 리팩토링
수요일: claude --resume 입력
       → 1. api-migration
       → 2. frontend-refactor
       선택 → 원하는 프로젝트로 복귀
```

---

### `/rename` - 세션에 이름 붙이기

```bash
# 현재 세션 이름 변경
/rename api-migration

# 나중에 재개할 때
claude --resume api-migration
```

**네이밍 컨벤션 제안**:
```
feature-payment-integration
bugfix-memory-leak
refactor-auth-module
q4-performance-optimization
```

---

### `/stats` - 사용 통계 확인

```
/stats

📈 Your Claude Code Stats

총 세션 수: 147
총 작업 횟수: 1,253
평균 세션 길이: 45분

가장 많이 사용한 명령어:
  1. Git 관련 작업 (34%)
  2. 코드 리팩토링 (28%)
  3. 버그 수정 (19%)
  4. 테스트 작성 (12%)
  5. 문서화 (7%)
```

---

## Part 5: 워크플로우 자동화

### `-p` 옵션 - Headless 모드

**상황**: 대화형 UI 없이 명령어처럼 실행합니다. CI/CD나 스크립트에 유용합니다.

```bash
# 기본 사용
claude -p "모든 TypeScript 파일에서 unused imports 제거"
```

**CI/CD 파이프라인에 통합**:

```yaml
# .github/workflows/code-review.yml
name: AI Code Review

on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Claude Code Review
        run: |
          claude -p "Review the changed files for potential bugs"
```

**스크립트 자동화**:

```bash
#!/bin/bash
# daily-cleanup.sh

claude -p "Find and remove all console.log statements"
claude -p "Update all dependencies to latest stable versions"
claude -p "Run tests and fix failing tests"
```

---

### Hooks - 자동 실행 트리거

**상황**: Git hooks처럼, 특정 시점에 자동으로 실행되는 명령어를 설정합니다.

```json
// .claude/settings.json
{
  "hooks": {
    "before_edit": "git stash",
    "after_edit": "npm run lint && git stash pop",
    "after_command": "git add . && git commit -m 'auto: claude changes'",
    "on_error": "git reset --hard HEAD"
  }
}
```

**실전 예시**:

```json
// 자동 포맷팅
{
  "hooks": {
    "after_edit": "prettier --write ."
  }
}

// 안전한 개발 (테스트 실패하면 롤백)
{
  "hooks": {
    "after_edit": "npm test || git reset --hard HEAD"
  }
}
```

---

### YOLO 모드 - 권한 확인 건너뛰기

**주의**: 편리하지만 위험할 수 있습니다!

```bash
claude --dangerously-skip-permissions
```

**정상 모드 vs YOLO 모드**:
```
# 정상 모드
Claude: "이 파일을 생성할까요? (y/n)" → y
Claude: "이 명령을 실행할까요? (y/n)" → y

# YOLO 모드
Claude: [파일 생성] [명령 실행] → 모두 자동 진행
```

**안전하게 사용하는 방법**:
1. **Git 커밋 먼저**: `git add . && git commit -m "Before YOLO"`
2. **테스트 환경에서만 사용**
3. **작은 작업부터 테스트**

---

## Part 6: 고급 기능

### 원격 세션 - 웹과 터미널 동시 활용

**상황**: 터미널에서 작업하다가 외출해야 할 때, 웹으로 이어서 작업할 수 있습니다.

```bash
# 터미널에서 웹으로 전송
&"API 테스트 계속하고 결과 정리해줘"

# 스마트폰으로 claude.ai에서 진행상황 확인

# 회사 도착 후 터미널에서 다시 연결
claude --attach session-id
```

---

### `/vim` - Vim 스타일 편집

**상황**: 긴 프롬프트를 키보드만으로 빠르게 편집합니다.

```bash
/vim
→ Vim 에디터로 프롬프트 열림
→ 편집 완료 후 :wq
→ 편집된 프롬프트가 전송됨
```

**기본 Vim 명령어**:
```vim
i       → 편집 시작
ESC     → 명령 모드
:wq     → 저장하고 종료
:q!     → 저장 안 하고 종료
```

---

### Ctrl+S - 프롬프트 임시 저장

```
1. 긴 프롬프트 작성 중...
2. Ctrl+S 눌러 저장
3. 급한 질문 먼저 하기
4. 답변 받은 후 입력창 클릭
   → 저장했던 프롬프트 자동 복원!
```

---

### Ctrl+R - 명령어 히스토리 검색

```bash
Ctrl+R
→ "refactor" 타이핑
→ 과거에 "refactor"가 포함된 프롬프트 목록
→ Enter: 바로 실행 / Tab: 편집하기
```

---

### `/chrome` - 브라우저 자동화

**상황**: 웹 앱을 Claude가 대신 테스트합니다.

```bash
/chrome
"localhost:3000으로 이동해서
1. 로그인 버튼 클릭
2. test@email.com / password123 입력
3. 로그인 후 대시보드 확인
4. 에러 있으면 알려줘"
```

---

### `/export` - 대화 기록 문서화

```bash
/export                     # 전체 대화
/export --from 10           # 10번째 대화부터
/export --format pdf        # PDF로 변환
/export --summary-only      # 요약만
```

---

### Agent Skills - 재사용 가능한 작업 패턴

**상황**: 요리 레시피처럼, 자주 하는 작업 방법을 저장해두고 재사용합니다.

```
.claude/skills/
  ├── api-testing/
  │   ├── skill.md          # 작업 방법 설명
  │   ├── example.ts        # 예시 코드
  │   └── checklist.md      # 체크리스트
  └── component-creation/
      ├── skill.md
      └── template.tsx
```

**skill.md 예시**:
```markdown
# API Testing Skill

## 단계
1. API 스펙 확인
2. 정상 케이스 테스트 작성
3. 에러 케이스 테스트 작성 (400, 401, 404, 500)
4. 엣지 케이스 테스트 (빈 값, null, 긴 문자열)
5. 테스트 실행 및 커버리지 확인
```

**사용**:
```bash
"api-testing skill을 사용해서 /users 엔드포인트 테스트해줘"
```

---

## 학습 로드맵

### Level 1: 초보자 (첫 주)

**목표**: 기본 사용에 익숙해지기

**필수 팁 3개**:
1. `!` 프리픽스로 빠른 명령 실행
2. `ESC ESC`로 되돌리기
3. `@` 멘션으로 파일 참조

**실습 프로젝트**:
```bash
!git init todo-app
@README.md 작성해줘
"간단한 HTML TODO 앱 만들어줘"
```

---

### Level 2: 중급 (2-3주차)

**목표**: 워크플로우 최적화

**추가 팁**:
- `--continue`로 세션 관리
- `#`로 프로젝트 규칙 저장
- `/rename`으로 세션 정리

**실습**:
- 실제 프로젝트에 적용
- 자주 쓰는 명령어 패턴 정리
- 프로젝트 규칙 문서화

---

### Level 3: 고급 (4주차+)

**목표**: 자동화와 팀 협업

**마스터 팁**:
- Hooks로 자동화
- Agent Skills 만들기
- 플러그인으로 팀 설정 공유

**최종 프로젝트**:
- 팀 전용 플러그인 제작
- CI/CD 파이프라인 통합
- 커스텀 Agent Skill 라이브러리 구축

---

## 문제 해결 FAQ

### Q: 컨텍스트가 부족하다는 메시지가 나와요

**해결책**:
1. `/context`로 현재 사용량 확인
2. 불필요한 대화 되감기 (`ESC ESC`)
3. 새 세션 시작 (`claude --new`)
4. 큰 파일 대신 필요한 부분만 `@`로 참조

---

### Q: Claude가 파일을 못 찾아요

**해결책**:
1. 현재 디렉토리 확인: `!pwd`
2. 파일 존재 확인: `!ls path/to/file`
3. 절대 경로로 참조: `@/full/path/to/file.ts`

---

### Q: 명령어가 실행되지 않아요

**해결책**:
1. 권한 확인: 명령어 앞에 `sudo` 필요할 수 있음
2. 경로 확인: 해당 도구가 설치되어 있는지 확인
3. YOLO 모드가 아니면 확인 프롬프트 응답 필요

---

### Q: 세션을 복구하고 싶어요

**해결책**:
```bash
# 마지막 세션
claude --continue

# 세션 목록에서 선택
claude --resume

# 특정 세션
claude --resume session-name
```

---

### Q: API 사용량이 걱정돼요

**해결책**:
1. `/stats`로 사용 패턴 확인
2. `think` 대신 일반 모드로 간단한 질문
3. 컨텍스트 최적화 (필요한 파일만 참조)
4. 세션 적절히 분리

---

## 핵심 원칙 3가지

1. **반복을 자동화하라** (Hooks, Skills)
2. **맥락을 보존하라** (Memory, Context)
3. **패턴을 재사용하라** (Plugins, Export)

---

## 오늘 당장 시작하기

```bash
# 1. 현재 프로젝트에서
!git status
# Tip 1 실습 완료!

# 2. 프로젝트 규칙 저장
# Always use TypeScript
# Test coverage must be 80%+
# Tip 5 실습 완료!

# 3. 파일 참조해보기
@package.json 분석해줘
# Tip 17 실습 완료!
```

---

## 성장 로드맵

```
오늘: 3개 팁 사용
1주 후: 10개 팁 자연스럽게 활용
1개월 후: 자동화 워크플로우 구축
3개월 후: 팀 전체가 사용하는 플러그인 제작
```

---

## 연결된 노트

- [[Claude Code 설치 가이드]]
- [[MCP 서버 활용 가이드]]
- [[CLAUDE.md 작성법]]
- [[AI 코딩 도구 비교]]

---

## 참고 자료

- **공식 도움말**: `claude --help`
- **버전 확인**: `claude --version`
- **공식 문서**: [Claude Code Docs](https://docs.anthropic.com/claude-code)

---

*이 가이드는 실전에서 바로 적용할 수 있도록 작성되었습니다. 완벽보다 실행이 중요합니다. 작은 팁 하나씩 체화하세요!*
