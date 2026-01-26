---
title: Claude Code 완전 삭제 및 설치 가이드북
created: 2025-08-01
last_modified: 2025-08-01
tags:
  - Claude-Code
  - 설치가이드
  - 삭제가이드
  - Anthropic
  - AI-도구
  - 터미널
  - 개발환경
  - Node.js
  - IDE-통합
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/qvlrfgsn#B2zRGAkJHLyQvZsuqiBiO6MgaDcDGjNkos+hx76W9xk
share_updated: 2025-08-02T11:06:42+09:00
---

# Claude Code 완전 삭제 및 설치 가이드북

## 📋 목차
1. [[#Claude Code란 무엇인가]]
2. [[#시스템 요구사항 완전 가이드]]
3. [[#완전한 삭제 가이드]]
4. [[#완벽한 설치 가이드]]
5. [[#고급 설정 및 최적화]]
6. [[#문제 해결 가이드]]
7. [[#보안 및 모범 사례]]
8. [[#실제 사용 예시]]

## Claude Code란 무엇인가

Claude Code는 Anthropic에서 개발한 **공식 터미널 기반 AI 코딩 도구**입니다. 개발자가 자연어 명령을 통해 코드베이스 전체를 이해하고 소프트웨어 개발을 가속화할 수 있게 해주는 혁신적인 도구입니다.

마치 숙련된 동료 개발자가 터미널 옆에 앉아서 도움을 주는 것처럼, 자연어로 명령을 내리면 코드 작성, 버그 수정, Git 작업, 테스트 실행 등을 모두 처리해줍니다.

### 핵심 특징

- **터미널 네이티브**: VS Code 확장이 아닌 독립적인 터미널 도구
- **코드베이스 이해**: 프로젝트 전체 구조를 자동으로 파악
- **자연어 인터페이스**: "버그를 고쳐줘"라고 말하면 실제로 코드를 수정
- **IDE 통합**: VS Code, JetBrains 계열 IDE와 연동 가능
- **Git 통합**: 커밋, PR 생성, 머지 충돌 해결까지 자동화

## 시스템 요구사항 완전 가이드

### 운영체제별 요구사항

#### Windows 사용자 (특별 주의사항)
⚠️ **중요**: Claude Code는 Windows에서 직접 실행되지 않습니다.

반드시 다음 중 하나가 필요합니다:
- **WSL (Windows Subsystem for Linux)** - 권장
- **Git for Windows** - 제한적 지원
- **최소 버전**: Windows 10 버전 2004 이상 또는 Windows 11

#### macOS 사용자
- **최소 버전**: macOS 10.15 (Catalina) 이상
- **프로세서**: Intel x64 또는 Apple Silicon (M1/M2/M3) 모두 지원
- **특별 요구사항**: 없음

#### Linux 사용자
- **지원 배포판**: Ubuntu 20.04+, Debian 10+
- **커널**: Linux 5.0+ 권장
- **아키텍처**: x64, ARM64 지원

### 필수 소프트웨어 의존성

#### Node.js (필수)
- **버전**: Node.js 18.0 이상 (이보다 낮은 버전은 작동하지 않음)
- **설치 확인**: `node --version` 명령으로 확인
- ⚠️ **중요**: 절대 `sudo npm install -g`를 사용하지 마세요 (보안 위험)

#### Git (권장)
- **버전**: Git 2.23 이상
- **용도**: Git 통합 기능 사용시 필요

### 하드웨어 요구사항
- **RAM**: 최소 4GB, 권장 8-16GB
- **저장공간**: 최소 100MB (SSD 권장)
- **네트워크**: 안정적인 인터넷 연결 필수 (모든 AI 처리가 클라우드에서 진행)

## 완전한 삭제 가이드

기존 Claude Code를 완전히 제거하여 깨끗한 상태로 만드는 과정입니다.

### 1단계: 기본 제거

```bash
# 글로벌 패키지 제거
npm uninstall -g @anthropic-ai/claude-code

# 로컬 설치 확인 및 제거
cd ~/.claude/local && npm list @anthropic-ai/claude-code
rm -rf ~/.claude/local/node_modules/@anthropic-ai/claude-code
```

### 2단계: 운영체제별 완전 정리

#### Windows (WSL 환경에서)
```bash
# 설정 파일 제거
rm -f ~/.claude.json
rm -rf ~/.claude/
```

PowerShell에서:
```powershell
Remove-Item -Path "$env:USERPROFILE\.claude.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:USERPROFILE\.claude" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:APPDATA\Claude" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:LOCALAPPDATA\AnthropicClaude" -Recurse -Force -ErrorAction SilentlyContinue
```

#### macOS
```bash
# 애플리케이션 제거 (데스크톱 앱이 설치된 경우)
rm -rf "/Applications/Claude.app"

# 설정 및 캐시 파일 제거
rm -f ~/.claude.json
rm -rf ~/.claude/
rm -rf ~/Library/Application\ Support/Claude
rm -rf ~/Library/Application\ Support/com.anthropic.claudefordesktop
rm -rf ~/Library/Caches/com.anthropic.claudefordesktop
rm -rf ~/Library/Caches/Claude
rm -rf ~/Library/Logs/Claude

# 키체인에서 인증 정보 제거
security delete-generic-password -a $USER -s "Claude Code" 2>/dev/null
```

#### Linux
```bash
# 설정 파일 제거
rm -f ~/.claude.json
rm -rf ~/.claude/

# XDG 디렉토리 정리
rm -rf ~/.config/claude
rm -rf ~/.config/anthropic
rm -rf ~/.local/share/claude
rm -rf ~/.local/share/anthropic
rm -rf ~/.cache/claude

# 시스템 전체 설치 제거 (관리자 권한 필요시)
sudo rm -rf /usr/local/share/claude
sudo rm -rf /opt/claude
rm -f ~/.local/share/applications/claude*.desktop
sudo rm -f /usr/share/applications/claude*.desktop
```

### 3단계: IDE 통합 정리

#### VS Code 확장 제거
```bash
# Claude Code 확장 제거
code --uninstall-extension anthropic.claude-code

# 확장 데이터 제거
# macOS
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/anthropic.claude-code
# Windows
Remove-Item -Path "$env:APPDATA\Code\User\globalStorage\anthropic.claude-code" -Recurse -Force
# Linux  
rm -rf ~/.config/Code/User/globalStorage/anthropic.claude-code
```

#### JetBrains IDE 정리
- 각 IDE에서 **File → Settings → Plugins**
- Claude 관련 플러그인 검색 후 제거
- 설정 파일 수동 제거:
```bash
rm -rf ~/.config/JetBrains/*/options/claude*
rm -rf ~/.config/JetBrains/*/plugins/claude*
```

### 4단계: 완전 제거 확인

```bash
# Claude 명령어 확인 (찾을 수 없다고 나와야 정상)
claude --version

# 남은 파일 검색
find / -name "*claude*" -type f 2>/dev/null | grep -v "/proc/"
find / -name "*anthropic*" -type f 2>/dev/null | grep -v "/proc/"

# 환경변수 확인
env | grep -i claude
env | grep -i anthropic
```

## 완벽한 설치 가이드

### 1단계: 사전 준비

#### Windows 사용자: WSL 설치
```powershell
# PowerShell을 관리자 권한으로 실행
wsl --install

# 재부팅 후 Ubuntu 실행
ubuntu

# Ubuntu 환경에서 다음 단계들 진행
```

#### Node.js 설치 (모든 플랫폼)

**방법 1: 공식 사이트에서 다운로드**
- [nodejs.org](https://nodejs.org)에서 LTS 버전 다운로드
- 설치 후 확인: `node --version` (18.0 이상이어야 함)

**방법 2: 패키지 매니저 사용 (Linux/macOS)**
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install nodejs npm

# macOS (Homebrew)
brew install node

# 또는 nvm 사용 (권장)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

### 2단계: npm 권한 설정 (중요!)

```bash
# 사용자 npm 디렉토리 생성
mkdir -p ~/.npm-global

# npm 설정 변경
npm config set prefix ~/.npm-global

# PATH에 추가
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**이 과정이 중요한 이유:**
- `sudo npm install -g`을 사용하면 보안 위험이 있습니다
- 권한 오류가 발생할 가능성이 높습니다
- 사용자 디렉토리에 설치하면 이런 문제들을 모두 해결할 수 있습니다

### 3단계: Claude Code 설치

**방법 1: NPM 설치 (권장)**
```bash
npm install -g @anthropic-ai/claude-code
```

**방법 2: 네이티브 설치 스크립트**
```bash
# macOS/Linux
curl -fsSL https://claude.ai/install.sh | bash

# Windows (PowerShell에서)
irm https://claude.ai/install.ps1 | iex
```

### 4단계: 설치 확인

```bash
# 버전 확인
claude --version

# 설치 상태 진단
claude doctor

# 도움말 확인
claude --help
```

### 5단계: 인증 설정

**방법 1: Anthropic Console (종량제)**
1. [console.anthropic.com](https://console.anthropic.com)에서 계정 생성
2. 결제 수단 등록 (사용한 만큼 지불)
3. **API Keys → Create Key**로 키 생성
4. 환경변수 설정:
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
```

**방법 2: Claude Pro/Max 구독**
- **Claude Pro** ($20/월): 월 10-40회 Claude Code 사용
- **Claude Max** ($100/월): 월 50-200회 사용, Opus 4 접근
- 구독 후 Claude Code 실행시 자동 인증

### 6단계: 첫 실행 및 테스트

```bash
# 프로젝트 디렉토리로 이동
cd your-project-directory

# Claude Code 실행
claude

# 간단한 테스트
> Write a hello world function in Python

# 종료
> /exit
```

### 7단계: IDE 통합 설정

#### VS Code 통합
1. VS Code 통합 터미널에서 `claude` 실행
2. 확장이 자동 설치됩니다
3. VS Code 재시작
4. 단축키: **Cmd+Esc** (Mac) 또는 **Ctrl+Esc** (Windows/Linux)

#### JetBrains IDE 통합
1. IDE 통합 터미널에서 `claude` 실행
2. 플러그인이 자동 설치됩니다
3. **IDE를 완전히 재시작**해주세요 (중요!)
4. 터미널에서 Claude Code 사용 가능

## 고급 설정 및 최적화

### 터미널 설정 최적화

#### 줄바꿈 설정
```bash
# Claude Code에서 줄바꿈 하는 방법들
# 1. 백슬래시 사용
Write a function that \
does multiple things

# 2. 터미널 설정 (macOS Terminal.app)
# Settings → Profiles → Keyboard → "Use Option as Meta Key" 체크
# 이후 Option+Enter로 줄바꿈 가능
```

#### 터미널 알림 설정
```bash
# Claude Code에서 작업 완료시 알림
/terminal-setup  # 터미널 설정 도구 실행
```

### 성능 최적화

#### 컨텍스트 윈도우 관리
```bash
# 컨텍스트가 너무 커질 때
/compact  # 중요한 정보만 유지하고 압축

# 완전히 새로 시작할 때
/clear
```

#### 대용량 프로젝트 작업시
- `.gitignore`에 빌드 디렉토리 추가
- 16GB 이상 RAM 권장
- 작업을 작은 단위로 나누어 진행

## 문제 해결 가이드

### 1. "command not found: claude" 오류

**원인**: PATH 설정이 잘못되었거나 설치가 실패함

**해결법**:
```bash
# PATH 확인
echo $PATH | grep npm

# npm 전역 바이너리 위치 확인
npm config get prefix

# 없다면 다시 설정
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### 2. Windows에서 "지원하지 않는 플랫폼" 오류

**원인**: Windows에서 직접 설치 시도

**해결법**:
```bash
# WSL 설치 후 WSL 터미널에서
npm config set os linux
npm install -g @anthropic-ai/claude-code
```

### 3. 권한 오류 (EACCES)

**원인**: npm 전역 디렉토리에 쓰기 권한 없음

**해결법**:
```bash
# 사용자 디렉토리로 npm 설정 변경
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g @anthropic-ai/claude-code
```

### 4. 인증 실패

**해결법**:
```bash
# 기존 인증 정보 삭제
/logout

# 터미널 종료 후 재시작
claude  # 인증 과정 다시 진행
```

### 5. VS Code 확장 설치 실패

**해결법**:
1. VS Code Marketplace에서 "Claude Code" 검색
2. 수동으로 확장 설치
3. VS Code 완전 재시작

### 6. JetBrains IDE에서 ESC 키 작동 안함

**해결법**:
1. **Settings → Tools → Terminal**
2. Terminal keybindings 설정
3. "Switch focus to Editor" 단축키 삭제

### 완전 재설치가 필요한 경우

**증상**: 위 해결법들로도 문제가 지속될 때

```bash
# 1. 완전 제거
npm uninstall -g @anthropic-ai/claude-code
rm -rf ~/.claude/
npm cache clean --force

# 2. Node.js 상태 확인
node --version  # 18.0+ 인지 확인

# 3. npm 설정 초기화
npm config delete prefix
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# 4. 재설치
npm install -g @anthropic-ai/claude-code

# 5. 검증
claude doctor
```

## 보안 및 모범 사례

### API 키 보안 관리

**절대 하지 말아야 할 것들:**
- API 키를 Git에 커밋하지 마세요
- 스크린샷에 API 키가 보이지 않도록 주의하세요
- 다른 사람과 API 키를 공유하지 마세요

**권장 방법:**
```bash
# 환경변수로 관리
export ANTHROPIC_API_KEY="your-key-here"

# .bashrc나 .zshrc에 추가
echo 'export ANTHROPIC_API_KEY="your-key-here"' >> ~/.bashrc

# .env 파일 사용시 .gitignore에 추가
echo ".env" >> .gitignore
```

### 비용 관리

**사용량 모니터링:**
```bash
# Claude Code에서 비용 확인
/cost

# Anthropic Console에서 사용량 확인
# console.anthropic.com → Usage 탭
```

**비용 절약 팁:**
- 큰 작업 전에 `/compact` 사용
- 불필요한 파일은 `.gitignore`에 추가
- 작업을 작은 단위로 나누어 진행

## 실제 사용 예시

### 기본적인 코딩 작업
```bash
# 파일 생성
> Create a Python file called calculator.py with basic arithmetic functions

# 버그 수정
> Fix the bug in line 15 of calculator.py

# 코드 설명
> Explain what this function does

# 테스트 실행
> Run the tests and fix any failures
```

### Git 작업 자동화
```bash
# 변경사항 확인
> Show me the git status

# 커밋 메시지 생성
> Create a commit message for these changes

# PR 생성
> Create a pull request for this feature

# 머지 충돌 해결
> Help me resolve this merge conflict
```

### 고급 프로젝트 작업
```bash
# 아키텍처 분석
> Analyze the architecture of this codebase

# 리팩토링
> Refactor this code to use modern JavaScript features

# 성능 최적화
> Find performance bottlenecks in this code

# 문서화
> Generate documentation for this API
```

## 마무리 및 다음 단계

### 학습 추천 순서
1. 간단한 파일 생성/수정부터 시작
2. Git 통합 기능 탐색
3. IDE 통합으로 워크플로우 최적화
4. 고급 기능 (`/config`, `/compact` 등) 활용

### 도움이 되는 명령어들
- `/help` - 모든 명령어 보기
- `/commands` - 사용 가능한 슬래시 명령어 목록
- `/config` - 설정 변경
- `/doctor` - 문제 진단

### 추가 학습 자료
- [공식 문서](https://docs.anthropic.com/claude-code)
- [GitHub 저장소](https://github.com/anthropics/claude-code)
- 커뮤니티 지원: GitHub Issues 섹션

Claude Code는 여러분의 개발 생산성을 크게 향상시킬 수 있는 강력한 도구입니다. 이 가이드북을 통해 안전하고 효율적으로 Claude Code를 활용하시기 바랍니다!

## 연결된 노트
- [[Claude Code 기본 사용법]]
- [[Node.js 설치 가이드]]
- [[WSL 설정 가이드]]
- [[터미널 최적화 설정]]
- [[AI 도구 비용 관리]]
- [[IDE 통합 설정]]
- [[Git 자동화 워크플로우]]