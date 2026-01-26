---
title: Claude Code macOS 설치 가이드
created: 2025-06-13
last_modified: 2025-06-13
tags:
  - Claude-Code
  - MCP
  - AI도구
  - 설치가이드
  - macOS
  - 터미널
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/fa1srka1#cqmZpwMPeRcD0TCW4yFCecJWs8n28QaRzH+UsojKL3U
share_updated: 2025-06-13T18:39:51+09:00
---

# Claude Code macOS 설치 가이드

## 개요
- **핵심 주제**: Claude Code를 macOS에서 터미널을 통해 설치하는 방법
- **목적**: macOS 사용자를 위한 Claude Code 설치 및 초기 설정 가이드
- **범위**: 시스템 요구사항 확인부터 설치 완료 및 실행까지

## 📋 목차
1. [[#시스템 요구사항]]
2. [[#사전 준비사항]]
3. [[#Claude Code 설치하기]]
4. [[#설치 확인 및 첫 실행]]
5. [[#API 키 설정]]
6. [[#문제 해결]]
7. [[#추가 설정 옵션]]

## 시스템 요구사항

### 최소 요구사항
- **운영체제**: macOS 10.15 (Catalina) 이상
- **Node.js**: v18.0.0 이상
- **npm**: v8.0.0 이상
- **메모리**: 최소 4GB RAM (8GB 이상 권장)
- **저장공간**: 최소 1GB 여유 공간

### 권한 요구사항
- 관리자(sudo) 권한 필요
- 터미널 실행 권한

## 사전 준비사항

### 1. Homebrew 설치 확인
```bash
# Homebrew 설치 여부 확인
brew --version

# Homebrew가 없다면 설치
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Node.js 및 npm 설치
```bash
# Node.js 설치 (npm 포함)
brew install node

# 설치 확인
node --version
npm --version
```

### 3. Git 설치 확인
```bash
# Git 버전 확인
git --version

# Git이 없다면 설치
brew install git
```

## Claude Code 설치하기

### 1. npm을 통한 전역 설치
```bash
# Claude Code 전역 설치 (sudo 권한 필요)
sudo npm install -g @anthropic-ai/claude-code

# 설치 진행 상황 확인
# ✓ @anthropic-ai/claude-code@latest
# added XXX packages in XXs
```

### 2. 설치 중 발생할 수 있는 권한 오류 해결
```bash
# npm 전역 디렉토리 권한 확인
npm config get prefix

# 권한 오류 발생 시 npm 디렉토리 소유권 변경
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# 다시 설치 시도
npm install -g @anthropic-ai/claude-code
```

### 3. 대체 설치 방법 (권한 문제 지속 시)
```bash
# npm 전역 경로 변경
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Claude Code 재설치
npm install -g @anthropic-ai/claude-code
```

## 설치 확인 및 첫 실행

### 1. 설치 확인
```bash
# Claude Code 버전 확인
claude --version

# 도움말 확인
claude --help
```

### 2. 첫 실행
```bash
# Claude Code 실행
claude

# 초기 설정 화면이 나타납니다
# API 키 입력 프롬프트가 표시됩니다
```

## API 키 설정

### 1. Anthropic API 키 획득
1. [Anthropic Console](https://console.anthropic.com) 방문
2. 계정 생성 또는 로그인
3. API Keys 섹션에서 새 키 생성
4. 키 복사 (한 번만 표시되므로 안전하게 보관)

### 2. Claude Code에 API 키 설정
```bash
# 방법 1: 환경 변수로 설정
export ANTHROPIC_API_KEY="your-api-key-here"
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc

# 방법 2: Claude Code 실행 시 입력
claude
# Enter your Anthropic API key: [키 입력]
```

### 3. API 키 설정 확인
```bash
# 설정된 API 키 확인
claude config show

# API 연결 테스트
claude "Hello, Claude!"
```

## 문제 해결

### 일반적인 문제와 해결 방법

#### 1. "command not found: claude" 오류
```bash
# PATH 확인
echo $PATH

# npm 전역 bin 경로 확인
npm bin -g

# PATH에 추가
export PATH=$(npm bin -g):$PATH
```

#### 2. 권한 거부 오류
```bash
# npm 캐시 정리
sudo npm cache clean --force

# 권한 재설정
sudo chown -R $(whoami) ~/.npm
```

#### 3. Node.js 버전 문제
```bash
# Node.js 버전 업그레이드
brew upgrade node

# nvm을 사용한 버전 관리
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

#### 4. SSL/네트워크 오류
```bash
# npm SSL 설정 확인
npm config set strict-ssl false  # 임시 해결책
npm config set registry https://registry.npmjs.org/
```

## 추가 설정 옵션

### 1. 자동 완성 설정
```bash
# zsh 자동 완성 설정
claude completion zsh > ~/.claude-completion.zsh
echo "source ~/.claude-completion.zsh" >> ~/.zshrc
source ~/.zshrc
```

### 2. 별칭(Alias) 설정
```bash
# 짧은 명령어 설정
echo 'alias cl="claude"' >> ~/.zshrc
echo 'alias clc="claude chat"' >> ~/.zshrc
source ~/.zshrc
```

### 3. 설정 파일 위치
```bash
# Claude Code 설정 파일 위치
~/.claude/config.json

# 로그 파일 위치
~/.claude/logs/
```

### 4. 업데이트 방법
```bash
# Claude Code 업데이트
sudo npm update -g @anthropic-ai/claude-code

# 특정 버전 설치
sudo npm install -g @anthropic-ai/claude-code@특정버전
```

## 구현 체크리스트
- [ ] macOS 버전 확인 (10.15 이상)
- [ ] Homebrew 설치
- [ ] Node.js 18+ 및 npm 설치
- [ ] Git 설치 확인
- [ ] Claude Code npm 전역 설치
- [ ] API 키 획득 및 설정
- [ ] 첫 실행 테스트
- [ ] 자동 완성 설정 (선택사항)
- [ ] 별칭 설정 (선택사항)

## 유용한 팁

### 보안 관련
- API 키는 절대 공개 저장소에 커밋하지 마세요
- `.env` 파일이나 환경 변수로 관리하세요
- 정기적으로 API 키를 재생성하세요

### 성능 최적화
- 대용량 프로젝트에서는 `.claudeignore` 파일 활용
- 불필요한 파일 제외로 컨텍스트 최적화
- 캐시 정기적 정리: `claude cache clear`

### 활용 팁
- 프로젝트 루트에서 실행하면 전체 컨텍스트 활용 가능
- `claude chat` 모드로 대화형 세션 시작
- `claude --help` 로 모든 옵션 확인

## 연결된 노트
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[Claude_Code_사용_경험_및_분석]]
- [[인기있는 MCP 서버 및 활용사례]]
- [[MCP 프로토콜 이해하기]]