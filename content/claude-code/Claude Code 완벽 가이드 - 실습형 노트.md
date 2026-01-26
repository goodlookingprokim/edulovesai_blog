---
title: Claude Code 완벽 가이드 - 실습형 노트 (2025 최신판)
created: 2025-05-15
last_modified: 2025-06-17
tags:
  - AI/Claude-Code
  - 도구/개발환경
  - 가이드/실습
  - MCP/통합
  - 생산성/도구
  - 트러블슈팅/해결
  - 보안/베스트프랙티스
status: 완료
type: 가이드
priority: high
version: "2.3"
share_link: https://share.note.sx/uj3s03pc#9Qb+u5n/YaLjO/86sIXuxSdmRBbYKmkD7FGkjNXd/8c
share_updated: 2025-06-16T00:40:56+09:00
---

# Claude Code 완벽 가이드 - 실습형 노트 (2025 최신판)

> **🎯 목표**: Claude Code를 설치부터 고급 활용까지 단계별로 마스터하여 개발 생산성을 극대화하기
> 
> **📅 최종 업데이트**: 2025년 6월 15일 (공식 문서 및 커뮤니티 베스트 프랙티스 반영)
> 
> **⚡ 주요 업데이트**: IDE 통합 확장, Claude Code SDK 출시, MCP 커넥터 강화, 1시간 프롬프트 캐싱, Interactive Mode 키보드 단축키

## 📋 목차
1. [[#Claude Code란 무엇인가]]
2. [[#설치 및 초기 설정]]
3. [[#핵심 기능과 명령어]]
4. [[#실전 활용법]]
5. [[#고급 기능 활용]]
6. [[#MCP 서버 완벽 활용 가이드]]
7. [[#문제 해결 및 최적화]]
8. [[#보안 및 권한 관리]]
9. [[#실습 프로젝트]]
10. [[#2025년 최신 기능]]

## Claude Code란 무엇인가

### 개요
Claude Code는 Anthropic의 공식 CLI(Command Line Interface) 도구로, 터미널에서 실행되며 선호하는 IDE 및 개발 도구와 함께 작동하는 AI 코딩 어시스턴트입니다. 일반 개발 작업(버그 수정, 테스팅)부터 대규모 리팩토링과 기능 구현까지 깊은 코드베이스 이해가 필요한 작업을 모두 처리할 수 있습니다.

**2025년 현재 상태**: 연구 프리뷰를 거쳐 정식 출시(General Availability)되었으며, VS Code와 JetBrains IDE 네이티브 통합을 제공합니다.

### 핵심 특징
- **터미널 기반 실행**: 워크플로우 변경 없이 기존 개발 환경과 통합
- **Agentic 검색**: 몇 초 만에 전체 코드베이스를 매핑하고 설명
- **깊은 컨텍스트 이해**: 프로젝트 구조와 의존성을 자동으로 파악
- **IDE 네이티브 통합**: VS Code와 JetBrains 확장 프로그램 제공 (베타)
- **백그라운드 작업**: GitHub Actions를 통한 자동화 지원
- **로컬 실행**: 백엔드 서버나 원격 코드 인덱스 없이 로컬에서 실행
- **모델 유연성**: Claude Opus 4, Sonnet 4, Haiku 3.5 지원

### 다른 도구와의 차이점
- **vs Cursor**: 더 깊은 IDE 통합과 MCP 프로토콜 지원
- **vs GitHub Copilot**: 전체 프로젝트 컨텍스트 이해 능력
- **vs ChatGPT**: 파일 시스템 직접 접근 및 수정 가능

## 설치 및 초기 설정

### 🛠️ 실습 1: Claude Code 설치

```bash
# 1. npm을 통한 설치 (권장)
npm install -g @anthropic/claude-code

# 2. 버전 확인
claude --version

# 3. 권장 버전으로 다운그레이드 (필요시)
# 버전 1.0.17 권장 (plan mode 팝업 문제 회피)
npm install -g @anthropic/claude-code@1.0.17

# 4. 설치 확인
claude --help
```

#### npm 권한 문제 해결
```bash
# npm 전역 디렉토리 설정 (권한 문제 발생시)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### 🛠️ 실습 2: 자동 업데이트 비활성화

```bash
# 자동 업데이트 비활성화 (중요!)
claude config set -g auto-update.status disabled

# 환경 변수로 비활성화 (대체 방법)
export DISABLE_AUTOUPDATER=1

# 설정 확인
/status
```

### 🛠️ 실습 3: 설정 파일 구성

#### 1. `settings.local.json` 설정
```json
{
  "permissions": {
    "allowedCommands": [
      "npm",
      "git",
      "python",
      "pip"
    ],
    "blockedCommands": [
      "rm -rf",
      "sudo"
    ]
  },
  "autoExecute": false,
  "planMode": true
}
```

#### 2. 프로젝트별 `CLAUDE.md` 작성
```markdown
# 프로젝트 가이드라인

## 코딩 규칙
- TypeScript 사용
- 함수형 프로그래밍 선호
- 테스트 우선 개발

## 파일 구조
- src/: 소스 코드
- tests/: 테스트 파일
- docs/: 문서
```

#### 3. 전역 설정 `~/.claude/CLAUDE.md`
```markdown
# 전역 Claude Code 설정

## 선호 사항
- 간결한 답변 선호
- 이모지 사용 최소화
- 한국어 응답 우선
```

## 핵심 기능과 명령어

### Interactive Mode 키보드 단축키

#### 기본 컨트롤
- **`Ctrl+C`**: 현재 입력 취소 또는 생성 중단
- **`Ctrl+D`**: Claude Code 세션 종료
- **`Ctrl+L`**: 터미널 화면 지우기 (대화 내용은 유지)
- **화살표 위/아래**: 명령어 히스토리 탐색

#### 멀티라인 입력
터미널에서 여러 줄을 입력하는 세 가지 방법:
1. **`\` + `Enter`**: 모든 터미널에서 작동하는 범용 방법
2. **`Option+Enter`**: macOS 기본 설정
3. **`Shift+Enter`**: `/terminal-setup` 실행 후 사용 가능

#### 빠른 명령어
- **`#`로 시작**: 메모리 단축키 (CLAUDE.md에 자동 추가)
- **`/`로 시작**: 슬래시 명령어 실행

### Vim 모드 활용

#### 🛠️ 실습 4-1: Vim 모드 설정

```bash
# Vim 모드 활성화
/vim

# 영구 설정 (설정 파일에 추가)
claude config set -g editor.mode vim
```

#### Vim 모드 주요 명령어
- **NORMAL 모드**: 탐색 및 편집
  - `h/j/k/l`: 좌/하/상/우 이동
  - `w/b`: 단어 단위 이동
  - `0/$`: 줄의 시작/끝으로 이동
  - `dd`: 현재 줄 삭제
  - `x`: 현재 문자 삭제
  - `u`: 실행 취소
  - `i`: INSERT 모드로 전환
- **INSERT 모드**: 텍스트 입력
  - `ESC`: NORMAL 모드로 돌아가기

### 명령어 히스토리 관리

#### 🛠️ 실습 4-2: 히스토리 활용

```bash
# 히스토리 검색 (Reverse Search)
Ctrl+R  # 검색 모드 진입
# 검색어 입력 후 Enter로 실행

# 히스토리 지우기
/clear

# 히스토리 저장 위치
# 작업 디렉토리별로 자동 저장됨
```

### 터미널별 최적화

#### 🛠️ 실습 4-3: 터미널 설정

```bash
# 터미널별 줄바꿈 설정
/terminal-setup

# 설정 가능한 옵션:
# - iTerm2: Option+Enter
# - Terminal.app: Shift+Enter
# - VS Code Terminal: Shift+Enter
# - 기타: \ + Enter (항상 작동)
```

### 🛠️ 실습 4: 필수 명령어 마스터

```bash
# 컨텍스트 관리
/compact    # 컨텍스트 압축 (70-80% 사용시)
/clear      # 컨텍스트 완전 초기화
/status     # 현재 상태 확인

# 개발 모드
/plan       # Plan 모드 활성화 (권장)
/auto       # Auto-Accept 모드 (주의 필요)

# 숨겨진 유용한 명령어
claude --resume    # 이전 채팅 내역 확인 (비공식, Reddit 발견)
/id               # IDE 재연결 (연결 끊김시)
/mcp              # MCP 서버 상태 확인
/permissions      # 권한 설정 관리

# 터미널 설정
/terminal-setup   # 터미널별 줄바꿈 설정
/vim             # Vim 모드 활성화/비활성화
```

### 🛠️ 실습 6: 파일 작업 기본

```python
# 1. 파일 읽기
# Claude에게 요청: "src/main.py 파일을 읽어줘"

# 2. 파일 수정
# Claude에게 요청: "main.py의 calculate 함수를 최적화해줘"

# 3. 여러 파일 동시 수정
# Claude에게 요청: "모든 .py 파일에서 print문을 logger로 변경해줘"
```

### 메모리 단축키 활용

#### 🛠️ 실습 5: 메모리에 빠르게 저장

```bash
# # 문자로 시작하면 자동으로 CLAUDE.md에 추가
# 이 프로젝트는 TypeScript와 React를 사용하고 Tailwind CSS로 스타일링됨

# 저장 확인
cat CLAUDE.md
```

이 기능은 프로젝트 컨텍스트나 중요한 정보를 빠르게 저장할 때 유용합니다.

### 토큰 관리 전략

#### 컨텍스트 윈도우 이해
- **최대 용량**: 200,000 토큰
- **최적 성능**: 100,000 토큰 이하
- **경고 지점**: 80,000 토큰 (성능 저하 시작)

#### 🛠️ 실습 7: 효율적인 토큰 관리

```bash
# 1. 현재 토큰 사용량 확인
/status

# 2. 70-80% 도달시 압축
/compact

# 압축시 커스텀 지시사항 추가 (고급)
/compact heavily summarize everything, ignore the git stuff, answer in short

# 3. 필요시 완전 초기화
/clear

# 4. 중요한 파일만 태그
# "@파일명" 형식으로 컨텍스트에 추가
```

## 실전 활용법

### 🛠️ 실습 8: 효과적인 프롬프트 작성

#### 좋은 프롬프트 예시
```
✅ "UserService 클래스에 이메일 검증 메서드 추가해줘"
✅ "모든 API 엔드포인트에 에러 핸들링 추가"
✅ "README.md 파일을 프로젝트 구조에 맞게 업데이트"
✅ "이 함수를 설명하고 answer in short" (간결한 답변)
```

#### 프롬프트 최적화 팁
- **"answer in short"** 추가로 간결한 응답 유도
- **단계별 지시**: 복잡한 작업은 단계로 나누어 명시
- **완료 조건 명시**: "모든 작업이 완료될 때까지 계속해"

#### 피해야 할 프롬프트
```
❌ "코드 좀 개선해줘" (너무 모호함)
❌ "버그 찾아줘" (범위가 너무 넓음)
❌ "모든 것을 리팩토링해줘" (위험함)
```

### 🛠️ 실습 9: Git 통합 워크플로우

```bash
# 1. 작업 시작 전 브랜치 생성
git checkout -b feature/new-feature

# 2. Claude로 코드 작성/수정
# "UserAuth 컴포넌트에 소셜 로그인 기능 추가해줘"

# 3. 15-20분마다 커밋 (자동 메시지 생성)
# Claude에게: "변경사항을 커밋해줘"

# 4. PR 생성
# Claude에게: "이 기능에 대한 PR을 생성해줘"
```

### 🛠️ 실습 10: 디버깅 워크플로우

```javascript
// 1. 콘솔 로깅 추가 요청
"에러가 발생하는 부분에 🔥🔥 이모지로 디버그 로그 추가해줘"

// 2. 단계별 실행 추적
"각 함수 시작과 끝에 실행 추적 로그 추가"

// 3. 에러 핸들링 강화
"try-catch 블록과 상세한 에러 메시지 추가"
```

## 고급 기능 활용

### 🛠️ 실습 11: 연속 프롬프트 (Continual Prompts)

```
# 예시: 완전한 CRUD API 생성
"User 모델에 대한 완전한 CRUD API를 생성해줘. 
다음을 포함해야 함:
- 모든 CRUD 엔드포인트
- 입력 검증
- 에러 핸들링
- 단위 테스트
- API 문서

모든 작업이 완료될 때까지 계속 진행해. 
다른 작업은 하지 마."
```

### 🛠️ 실습 12: 멀티 모델 활용

```python
# 1. 중요한 의사결정시 여러 모델 활용
# Opus로 아키텍처 설계
"@opus 마이크로서비스 아키텍처 설계해줘"

# Sonnet으로 구현
"@sonnet 설계된 아키텍처를 구현해줘"

# Gemini로 검증
"@gemini 구현된 코드를 리뷰하고 개선점 제안해줘"
```

## MCP 서버 완벽 활용 가이드

### MCP (Model Context Protocol) 개요
MCP는 AI 모델과 개발 환경 간의 통합된 컨텍스트 상호작용을 위한 개방형 프로토콜 표준입니다. 각 AI 모델과 도구 간의 맞춤형 통합이 필요 없어 단순히 새로운 MCP 서버를 추가하는 것만으로 AI 어시스턴트의 기능을 확장할 수 있습니다.

### 🛠️ 실습 13: MCP 서버 설정 (개선된 방법)

#### 1. 설정 파일 직접 편집 (권장)
```bash
# Claude Code 설정 파일 위치 찾기
ls ~/.config/claude-desktop/claude_desktop_config.json

# 설정 파일 편집
code ~/.config/claude-desktop/claude_desktop_config.json
```

#### 2. MCP 서버 설정 예시
```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@makenotion/notion-mcp-server"],
      "env": {
        "NOTION_API_TOKEN": "your-notion-integration-token"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@githubocto/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "config": {
        "directories": ["/Users/username/projects"]
      }
    },
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@cloudcode/mcp-server-puppeteer"]
    }
  }
}
```

#### 3. MCP 서버 상태 확인
```bash
# Claude Code 내에서 실행
/mcp

# 예상 출력:
# ⎿ MCP Server Status
# ⎿ • notion: connected
# ⎿ • github: connected
# ⎿ • filesystem: connected
# ⎿ • puppeteer: connected
```

### 주요 MCP 서버들과 활용 사례

#### 1. **Notion MCP Server**
```bash
# 설치 및 사용
"Notion에서 'Claude Code 가이드' 페이지를 찾아서 내용을 보여줘"
"새로운 Notion 페이지를 만들고 오늘의 작업 내용을 정리해줘"
```

#### 2. **GitHub MCP Server**
```bash
# GitHub 이슈 및 PR 관리
"현재 열려있는 이슈들을 보여주고 우선순위별로 정렬해줘"
"이 브랜치의 변경사항으로 PR을 생성해줘"
```

#### 3. **Puppeteer MCP Server**
```bash
# 웹 자동화 및 스크린샷
"localhost:3000으로 이동해서 스크린샷을 찍어줘"
"이 웹페이지의 폼을 자동으로 채워줘"
```

### MCP 서버 개발 및 디버깅

#### 디버그 모드 실행
```bash
# MCP 디버그 플래그와 함께 실행
claude --mcp-debug

# 상세한 로그 확인 가능
```

#### 로컬 MCP 서버 개발
```bash
# stdio 타입 서버 (로컬 개발용)
"stdio": {
  "command": "python",
  "args": ["my-local-server.py"]
}

# Docker 없이 uvx(Python) 또는 npx(Node.js) 사용
```

## 보안 및 권한 관리

### 권한 설정 체계

#### 🛠️ 실습 15: 안전한 권한 구성

```bash
# 특정 도구 자동 승인
/permissions

# 위험한 작업 건너뛰기 (주의!)
claude --dangerously-skip-permissions

# Headless 모드 (CI/CD용)
claude -p "fix all lint errors" --output-format stream-json
```

#### 환경 변수 보안 관리
```bash
# .env 파일 생성
echo "NOTION_API_TOKEN=secret_xxx" >> .env
echo "GITHUB_TOKEN=ghp_xxx" >> .env

# Git 제외
echo ".env" >> .gitignore

# 권한 제한
chmod 600 .env
```

### API 토큰 보안

```bash
# 설정 파일 권한 제한
chmod 600 ~/.config/claude-desktop/claude_desktop_config.json

# 환경 변수로 토큰 관리
export ANTHROPIC_API_KEY="your-api-key"
```

## 문제 해결 및 최적화

### 일반적인 문제와 해결법

#### 1. 컨텍스트 오버플로우
```bash
# 증상: 응답 속도 저하, 불완전한 답변
# 해결:
/compact  # 먼저 압축 시도
/clear    # 필요시 완전 초기화
```

#### 2. 파일 변경 감지 실패
```bash
# 증상: Claude가 최신 변경사항을 인식하지 못함
# 해결:
# 파일을 명시적으로 태그
"@src/updated-file.js 이 파일의 최신 내용을 확인해줘"
```

#### 3. 순환 참조 에러
```python
# 증상: 리팩토링 중 import 에러 발생
# 해결:
"의존성 그래프를 분석하고 순환 참조를 제거해줘"
```

#### 4. IDE 연결 문제
```bash
# 증상: IDE와 연결이 끊어짐
# 해결:
/ide  # IDE 재연결 명령어
# Cursor 또는 VS Code 선택
```

#### 5. 자동 업데이트 문제
```bash
# 증상: "Update installed. Restart to apply" 반복
# 해결:
export DISABLE_AUTOUPDATER=1
# 또는 특정 버전 고정 설치
npm install -g @anthropic/claude-code@1.0.17
```

#### 6. ESC 키 문제 해결
```bash
# 증상: JetBrains IDE에서 ESC 키가 작동하지 않음
# 해결:
# Settings > Keymap에서 ESC 키 매핑 확인
# 또는 \ + Enter 사용 (항상 작동)
```

#### 7. 멀티라인 입력 문제
```bash
# 증상: Enter 키가 바로 명령을 실행함
# 해결:
/terminal-setup  # 터미널에 맞는 설정 선택
# 또는 \ + Enter 사용 (범용 해결책)
```


### 성능 최적화 팁

#### 🛠️ 실습 14: 효율적인 작업 패턴

```bash
# 1. 배치 작업 활용
# 나쁜 예: 파일 하나씩 수정 요청
# 좋은 예: "src 폴더의 모든 컴포넌트에 PropTypes 추가"

# 2. 구체적인 범위 지정
# 나쁜 예: "코드 개선해줘"
# 좋은 예: "auth 모듈의 에러 핸들링만 개선해줘"

# 3. 점진적 리팩토링
# 50-100줄 단위로 리팩토링 진행
```

## Claude Sessions - 개발 세션 관리 시스템

### 개요
Claude Sessions는 Claude Code를 위한 커스텀 세션 관리 시스템으로, 개발 진행 상황을 추적하고 문서화하는 도구입니다. 미래의 AI 세션이 전체 코드베이스를 다시 분석하지 않고도 과거 작업을 이해할 수 있도록 설계되었습니다.

#### 핵심 가치
- **맥락 보존**: 개발 세션 간 연속성 유지
- **의사결정 히스토리**: 선택의 이유와 배경 기록
- **이슈 추적**: 문제와 해결책의 체계적 문서화
- **코드 진화**: 코드베이스 변화 과정 추적
- **팀 지식 공유**: 개발 과정의 '흔적' 보존

### 🛠️ 실습 14: Claude Sessions 설치 및 설정

#### 1. 저장소 클론 및 설정
```bash
# Claude Sessions 클론
git clone https://github.com/iannuttall/claude-sessions.git
cd claude-sessions

# 프로젝트에 통합하려면 commands와 sessions 폴더 복사
cp -r commands your-project/
cp -r sessions your-project/

# 현재 세션 파일 생성
touch your-project/sessions/.current-session

# (선택) sessions 폴더를 git에서 제외
echo "sessions/" >> your-project/.gitignore
```

#### 2. 커스텀 명령어 등록
```bash
# Claude Code에서 명령어 등록 확인
/help

# 새로운 명령어들이 표시되어야 함:
# /project:session-start
# /project:session-update
# /project:session-end
# /project:session-current
# /project:session-list
```

### 세션 관리 워크플로우

#### 🛠️ 실습 15: 개발 세션 추적하기

##### 1. 새 세션 시작
```bash
# 새로운 개발 세션 시작
/project:session-start

# 예시 입력:
# Session Title: "사용자 인증 시스템 구현"
# Goals: 
# - JWT 기반 인증 구현
# - 소셜 로그인 통합
# - 보안 미들웨어 추가
```

##### 2. 진행 상황 업데이트
```bash
# 작업 중간에 진행 상황 기록
/project:session-update

# 예시 입력:
# "JWT 토큰 생성 및 검증 로직 완료
# - auth.service.ts에 토큰 생성 함수 추가
# - middleware/auth.ts에 검증 미들웨어 구현
# - 단위 테스트 작성 완료"
```

##### 3. 세션 종료 및 요약
```bash
# 세션 종료시 자동 요약 생성
/project:session-end

# 자동으로 다음 정보 포함:
# - 구현된 기능 목록
# - 변경된 파일들
# - 해결된 문제들
# - 다음 단계 제안
```

##### 4. 현재 세션 확인
```bash
# 현재 진행 중인 세션 상태 확인
/project:session-current
```

##### 5. 과거 세션 조회
```bash
# 모든 과거 세션 목록 보기
/project:session-list

# 특정 세션 상세 정보 보기
# (세션 ID나 제목으로 검색)
```

### 세션 문서 구조

#### 생성되는 세션 파일 예시
```markdown
# Session: 사용자 인증 시스템 구현
Date: 2025-06-17
Duration: 3 hours

## Goals
- [x] JWT 기반 인증 구현
- [x] 소셜 로그인 통합
- [ ] 보안 미들웨어 추가

## Implementation Details
### Token Management
- Created `auth.service.ts` with JWT generation
- Added refresh token rotation logic
- Implemented token blacklisting

### Social Login
- Google OAuth integration complete
- GitHub OAuth in progress

## Code Changes
- Modified: `src/services/auth.service.ts`
- Created: `src/middleware/auth.ts`
- Updated: `src/routes/auth.routes.ts`

## Decisions Made
1. Used RS256 algorithm for JWT signing
2. Refresh tokens expire after 30 days
3. Access tokens have 15-minute lifetime

## Problems Solved
- Fixed CORS issues with social login callbacks
- Resolved token refresh race condition

## Next Steps
- Complete GitHub OAuth integration
- Add rate limiting to auth endpoints
- Implement password reset flow
```

### 실무 활용 전략

#### AI와의 시너지 효과
- **컨텍스트 연속성**: 이전 세션의 맥락을 AI가 즉시 이해
- **반복 작업 감소**: 과거 해결책을 AI가 참조하여 재활용
- **진화적 개발**: 코드베이스 변화를 AI가 추적하며 제안
- **의존성 인식**: 변경사항이 미치는 영향을 AI가 정확히 파악

### 고급 활용 팁

#### 1. **세션 템플릿 커스터마이징**
```javascript
// commands/session-template.js 수정 예시
const sessionTemplate = {
  title: "",
  goals: [],
  techStack: [],
  dependencies: [],
  testingStrategy: "",
  performanceTargets: {}
};
```

#### 2. **자동화된 Git 통합**
```bash
# 세션 종료시 자동 커밋 추가
/project:session-end --auto-commit

# 커밋 메시지에 세션 요약 포함
git commit -m "Session: ${sessionTitle} - ${summary}"
```

#### 3. **팀 협업 활용**
```markdown
# 팀원과 세션 공유
- sessions 폴더를 공유 저장소에 포함
- 각 개발자의 세션을 팀이 검토
- 지식 전달 및 온보딩에 활용
```

### Claude Sessions 모범 사례

#### 📋 체크리스트
- [ ] 매일 첫 작업 시작시 새 세션 생성
- [ ] 주요 결정사항은 즉시 업데이트
- [ ] 문제 해결 과정 상세히 기록
- [ ] 세션 종료시 다음 단계 명확히 정의
- [ ] 주간 세션 리뷰로 진행 상황 파악
- [ ] 테스트 결과와 스크린샷 포함
- [ ] 커밋 메시지에 세션 파일 링크 추가

#### 세션 관리 전략
```markdown
1. **일일 세션**
   - 아침: 세션 시작, 목표 설정
   - 점심: 진행 상황 업데이트
   - 저녁: 세션 종료, 요약 작성

2. **기능별 세션**
   - 각 주요 기능마다 별도 세션
   - 관련 작업 그룹화
   - 의존성 추적

3. **버그 수정 세션**
   - 버그 재현 과정 기록
   - 시도한 해결 방법들
   - 최종 해결책 문서화

4. **리팩토링 세션**
   - 개선 목표 명확히 정의
   - 변경 전후 비교 기록
   - 성능 개선 수치 포함
```

#### 세션 명명 규칙
- **기능 개발**: `feat/[기능명]-[날짜]`
- **버그 수정**: `fix/[이슈번호]-[요약]`
- **리팩토링**: `refactor/[모듈명]-[목표]`
- **실험적 작업**: `exp/[주제]-[시도]`

### 통합 워크플로우 예시

#### 🛠️ 실습 16: Claude Code + Sessions 통합 사용

```bash
# 1. 새 기능 개발 시작
/project:session-start
# Title: "실시간 알림 시스템 구현"

# 2. Claude Code로 구현
"실시간 알림을 위한 WebSocket 서버를 구현해줘"

# 3. 진행 상황 기록
/project:session-update
# "WebSocket 서버 기본 구조 완성"

# 4. 테스트 작성
"WebSocket 연결에 대한 통합 테스트를 작성해줘"

# 5. 세션 종료
/project:session-end

# 6. 다음 세션에서 이어서 작업
/project:session-current
"이전 세션의 WebSocket 구현을 기반으로 클라이언트 연결 로직을 추가해줘"
```

### 세션 데이터 활용

#### 자동 캡처되는 정보
- **Git 변경사항**: 수정된 파일, 추가/삭제된 라인
- **Todo 항목**: 완료/미완료 작업 자동 추적
- **구현 세부사항**: 코드 구조와 아키텍처 결정
- **문제 및 해결책**: 마주친 이슈와 해결 과정
- **의존성 변화**: 패키지 추가/업데이트 내역
- **교훈 학습**: 세션에서 얻은 인사이트

#### 1. **AI 컨텍스트 개선**
```markdown
# CLAUDE.md에 최근 세션 요약 추가
## Recent Development Sessions
- 2025-06-17: 사용자 인증 시스템 (JWT, OAuth)
- 2025-06-16: 데이터베이스 스키마 설계
- 2025-06-15: 프로젝트 초기 설정
```

#### 2. **프로젝트 문서화**
```bash
# 세션 데이터를 프로젝트 문서로 변환
"sessions 폴더의 모든 세션을 분석해서 
프로젝트 개발 히스토리 문서를 생성해줘"
```

#### 3. **성과 측정**
```python
# 세션 통계 분석
"지난 주의 세션들을 분석해서:
- 완료된 기능 수
- 해결된 버그 수  
- 평균 세션 시간
을 계산해줘"
```

## 실습 프로젝트

### 🎯 프로젝트 1: Todo 앱 만들기 (초급)

```bash
# Step 1: 프로젝트 초기화
"React와 TypeScript로 Todo 앱 프로젝트를 초기화해줘"

# Step 2: 기본 구조 생성
"Todo 앱의 기본 컴포넌트 구조를 만들어줘"

# Step 3: CRUD 기능 구현
"Todo 항목의 추가, 읽기, 수정, 삭제 기능을 구현해줘"

# Step 4: 스타일링
"Tailwind CSS로 반응형 디자인을 적용해줘"

# Step 5: 테스트 추가
"각 컴포넌트에 대한 단위 테스트를 작성해줘"
```

### 🎯 프로젝트 2: REST API 서버 (중급)

```python
# Step 1: Express 서버 설정
"Express와 TypeScript로 REST API 서버를 설정해줘"

# Step 2: 데이터베이스 연결
"MongoDB와 Mongoose를 사용해서 데이터베이스를 연결해줘"

# Step 3: 인증 시스템
"JWT 기반 인증 시스템을 구현해줘"

# Step 4: API 엔드포인트
"사용자, 게시물, 댓글에 대한 CRUD API를 만들어줘"

# Step 5: 문서화
"Swagger를 사용해서 API 문서를 자동 생성해줘"
```

### 🎯 프로젝트 3: 풀스택 앱 리팩토링 (고급)

```typescript
# Step 1: 코드 분석
"현재 프로젝트의 구조를 분석하고 개선점을 찾아줘"

# Step 2: 아키텍처 개선
"클린 아키텍처 원칙에 따라 프로젝트를 재구조화해줘"

# Step 3: 성능 최적화
"React 컴포넌트의 불필요한 리렌더링을 방지해줘"

# Step 4: 타입 안정성
"any 타입을 모두 제거하고 적절한 타입을 지정해줘"

# Step 5: 테스트 커버리지
"테스트 커버리지를 80% 이상으로 높여줘"
```

## 2025년 최신 기능

### Claude Code SDK
확장 가능한 Claude Code SDK가 출시되어 자체 에이전트와 애플리케이션을 구축할 수 있습니다.

```javascript
// Claude Code SDK 사용 예시
import { ClaudeCodeAgent } from '@anthropic/claude-code-sdk';

const agent = new ClaudeCodeAgent({
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: 'claude-opus-4'
});

// 커스텀 에이전트 구현
await agent.execute({
  prompt: "Analyze codebase and generate documentation",
  tools: ['file_reader', 'markdown_writer']
});
```

### 새로운 API 기능들

#### 1. **코드 실행 도구**
```python
# Claude가 직접 코드를 실행하고 결과 확인
"이 Python 스크립트를 실행하고 결과를 분석해줘"
```

#### 2. **Files API**
```bash
# 대용량 파일 처리
"이 CSV 파일의 데이터를 분석하고 시각화해줘"
```

#### 3. **1시간 프롬프트 캐싱**
```bash
# 반복 작업시 성능 향상
# 동일한 컨텍스트로 여러 작업 수행시 자동 캐싱
```

### Enterprise 기능

```bash
# Amazon Bedrock 통합
claude --model-provider bedrock --region us-east-1

# Google Cloud Vertex AI 통합
claude --model-provider vertex --project-id my-project
```

## 전문가 팁과 모범 사례

### 생산성 극대화 전략

#### 1. **시간 관리**
```markdown
- 15-20분마다 커밋 (의미 있는 변경사항)
- 1시간마다 컨텍스트 상태 확인
- 하루 3시간 이상 AI 도구로 학습
- AI 작업 중에도 코드베이스 학습 계속
```

#### 2. **워크플로우 최적화**
```markdown
- 반복 작업은 .claude/commands 폴더에 템플릿 저장
- 브라우저 스크린샷 제공으로 UI 피드백 개선
- 2-3회 반복으로 출력 품질 향상
- Dogfooding: 자체 제품 사용으로 즉시 피드백
```

#### 2. **코드 품질 유지**
```markdown
- 파일당 650줄 이하 유지
- 로직과 UI 컴포넌트 분리
- 명확한 네이밍 컨벤션 사용
- 작은 단위로 리팩토링 (50-100줄)
```

#### 3. **학습 방법론**
```markdown
- AI가 작업하는 동안 관련 문서 학습
- 생성된 코드를 항상 검토하고 이해
- 이해 안 되는 부분은 즉시 질문
- "바이브 코딩" 실천 - 코딩하면서 학습
```

### 보안 고려사항

```json
// settings.local.json에서 위험한 명령어 차단
{
  "blockedCommands": [
    "rm -rf /*",
    "sudo",
    "chmod 777",
    "curl | bash"
  ],
  "requireConfirmation": [
    "mv",
    "rm",
    "git push --force"
  ]
}
```

## 문제 해결 체크리스트

### ✅ Claude Code가 느려질 때
- [ ] 토큰 사용량 확인 (`/status`)
- [ ] 80% 이상이면 압축 (`/compact`)
- [ ] 불필요한 파일 컨텍스트에서 제거
- [ ] 필요시 완전 초기화 (`/clear`)

### ✅ 에러가 발생할 때
- [ ] 버전 확인 (1.0.17 권장)
- [ ] 자동 업데이트 비활성화 확인
- [ ] 파일 권한 문제 확인
- [ ] IDE 재연결 시도 (`/id`)

### ✅ 품질 향상을 위해
- [ ] 명확하고 구체적인 프롬프트 사용
- [ ] 작은 단위로 작업 분할
- [ ] 정기적인 테스트 실행
- [ ] 코드 리뷰 요청

## 마무리 및 다음 단계

### 학습 로드맵
1. **Week 1**: 기본 명령어와 파일 작업 마스터
2. **Week 2**: Git 통합과 프로젝트 관리
3. **Week 3**: 고급 기능과 MCP 통합
4. **Week 4**: 실전 프로젝트 완성

### 추가 리소스
- 공식 문서: https://docs.anthropic.com/en/docs/claude-code
- Interactive Mode 가이드: https://docs.anthropic.com/en/docs/claude-code/interactive-mode
- GitHub 저장소: https://github.com/anthropics/claude-code
- MCP 커뮤니티: https://www.claudemcp.com/
- 베스트 프랙티스: https://www.anthropic.com/engineering/claude-code-best-practices
- 문제 신고: https://github.com/anthropics/claude-code/issues

### 핵심 요약
1. **버전 1.0.17 사용** - Plan 모드 팝업 문제 회피
2. **Plan 모드 기본** - 실수 방지 및 검토 가능
3. **자주 커밋** - 15-20분마다 의미있는 변경사항
4. **컨텍스트 관리** - 30% 남았을 때 `/compact` 사용
5. **MCP 서버 활용** - 외부 도구 통합으로 기능 확장
6. **보안 우선** - API 키는 환경 변수로 관리
7. **지속적 학습** - AI 작업 중에도 코드 학습
8. **멀티 모델 활용** - 중요 결정시 여러 AI 모델 비교
9. **키보드 단축키 활용** - Ctrl+C/D/L, 멀티라인 입력 마스터
10. **메모리 단축키** - # 시작으로 빠른 컨텍스트 저장

---

## 📚 출처 및 참고자료

### 🎬 주요 출처
- **동영상 제목**: 왕초보를 위한 클로드 코드 완벽 설치
- **채널명**: AI 개발 도구 전문 채널 (YouTube)
- **원본 링크**: https://youtu.be/F6DX1pvENXE?si=QrRxF-KbgZawHB80
- **분석 일자**: 2025년 7월 7일
- **내용 언어**: 한국어
- **동영상 길이**: 약 30분

### 🔗 공식 문서 및 자료
- **Claude Code 공식 문서**: https://docs.anthropic.com/en/docs/claude-code
- **Interactive Mode 가이드**: https://docs.anthropic.com/en/docs/claude-code/interactive-mode
- **GitHub 저장소**: https://github.com/anthropics/claude-code
- **MCP 프로토콜 명세**: Model Context Protocol 공식 문서

### 💡 실습 관련 자료
- **Claude Sessions GitHub**: https://github.com/iannuttall/claude-sessions
- **MCP 커뮤니티**: https://www.claudemcp.com/
- **베스트 프랙티스**: https://www.anthropic.com/engineering/claude-code-best-practices
- **문제 신고**: https://github.com/anthropics/claude-code/issues


### 🛠️ 추가 학습 자료
- **Anthropic API 문서**: Claude 모델 활용 가이드
- **MCP 서버 개발 가이드**: 커스텀 도구 개발
- **Git 통합 가이드**: 버전 관리 최적화
- **보안 모범 사례**: API 키 관리 및 안전한 사용법

### 🎯 관련 도구 및 플랫폼
- **VS Code**: 코드 편집기 통합
- **GitHub**: 저장소 관리
- **Docker**: 컨테이너 기반 개발 환경
- **Terminal/PowerShell**: 명령줄 인터페이스

### 📊 버전 정보 및 호환성
- **권장 버전**: Claude Code 1.0.17
- **지원 OS**: Windows, macOS, Linux
- **Node.js 요구사항**: v18.0.0 이상
- **Python 호환성**: 3.8 이상

## 연결된 노트
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[AI 코딩 도구 비교 분석]]
- [[MCP 프로토콜 심화 가이드]]
- [[개발 생산성 도구 마스터 클래스]]
- [[인기있는 MCP 서버 및 활용사례]]
- [[Claude_Code_사용_경험_및_분석]]
- [[Claude Sessions GitHub 저장소]](https://github.com/iannuttall/claude-sessions)

## 변경 이력
- 2025-06-17: v2.3 - Claude Sessions 섹션 보완 (핵심 가치, AI 시너지, 자동 캡처 정보, 세션 명명 규칙 추가)
- 2025-06-17: v2.2 - Claude Sessions 개발 세션 관리 시스템 추가 (GitHub: iannuttall/claude-sessions)
- 2025-06-17: v2.1 - Interactive Mode 기능 추가 (키보드 단축키, Vim 모드, 터미널 설정)
- 2025-06-15: v2.0 - 2025년 최신 기능 추가, MCP 서버 가이드 확장, 보안 섹션 추가
- 2025-05-15: v1.0 - 초기 버전 생성

#Claude-Code #AI개발도구 #생산성향상 #실습가이드 #MCP서버 #2025최신