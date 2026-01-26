---
title: Claudia 설치 및 사용법 완벽 가이드
created: 2025-06-22
last_modified: 2025-06-22
tags:
  - Claudia
  - Claude-Code
  - GUI
  - Tauri
  - 개발도구
  - AI코딩
  - MCP
  - 자동화
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/lt1sre2h#Nmcc1NSip6ML3GRQgf+wMJdVNw0ykzTUsfrz6a4HmBg
share_updated: 2025-06-22T10:15:38+09:00
---

# Claudia 설치 및 사용법 완벽 가이드

## 개요
- **핵심 주제**: Claude Code의 강력한 GUI 래퍼인 Claudia의 설치부터 활용까지 전체 과정
- **목적**: Claude Code 사용자가 Claudia를 통해 더 효율적인 AI 개발 환경을 구축하도록 지원
- **범위**: 사전 요구사항, 소스 빌드, 기본 사용법, 고급 기능 활용

## 📋 목차
1. [[#Claudia 소개]]
2. [[#사전 요구사항]]
3. [[#설치 과정]]
4. [[#첫 실행 및 초기 설정]]
5. [[#주요 기능 사용법]]
6. [[#고급 활용 팁]]
7. [[#문제 해결]]

## Claudia 소개

### Claudia란?
Claudia는 Claude Code CLI를 위한 **고급 데스크톱 GUI 애플리케이션**입니다. Tauri 2와 React로 구축되어 Claude Code의 모든 기능을 시각적으로 관리할 수 있게 해줍니다.

### 핵심 가치
- **시각적 프로젝트 관리**: CLI 명령어 없이 모든 프로젝트와 세션을 GUI로 관리
- **커스텀 AI 에이전트**: 특화된 작업을 위한 맞춤형 에이전트 생성
- **보안 샌드박싱**: OS 수준의 보안 격리 환경에서 안전한 실행
- **사용량 추적**: API 사용량과 비용을 실시간으로 모니터링

### 기술 스택
- **Frontend**: React 18 + TypeScript + Tailwind CSS v4
- **Backend**: Rust with Tauri 2
- **Database**: SQLite
- **Package Manager**: Bun

## 사전 요구사항

### 필수 요구사항
1. **Claude Code CLI**: [공식 사이트](https://claude.ai/code)에서 설치
2. **운영 체제**: macOS 11+, Windows 10/11, Ubuntu 20.04+
3. **메모리**: 최소 4GB (8GB 권장)
4. **저장 공간**: 1GB 이상의 여유 공간

### 빌드 도구 설치

#### 1. Rust 설치
```bash
# Rust 설치 (rustup 사용)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 환경 변수 적용
source "$HOME/.cargo/env"
```

#### 2. Bun 설치
```bash
# Bun 패키지 매니저 설치
curl -fsSL https://bun.sh/install | bash

# PATH 추가
export PATH="$HOME/.bun/bin:$PATH"
```

#### 3. 플랫폼별 추가 의존성

**macOS**:
```bash
# Xcode Command Line Tools 설치
xcode-select --install
```

**Linux (Ubuntu/Debian)**:
```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  build-essential
```

## 설치 과정

### 1. 저장소 클론
```bash
# Claudia 저장소 클론
git clone https://github.com/getAsterisk/claudia.git
cd claudia
```

### 2. 의존성 설치
```bash
# Frontend 의존성 설치
bun install
```

### 3. 애플리케이션 빌드

#### 개발 모드 (빠른 실행)
```bash
bun run tauri dev
```

#### 프로덕션 빌드
```bash
# 최적화된 프로덕션 빌드
bun run tauri build

# 빌드 결과물 위치:
# - macOS: src-tauri/target/release/bundle/dmg/
# - Windows: src-tauri/target/release/bundle/msi/
# - Linux: src-tauri/target/release/bundle/deb/
```

### 4. 자동 실행 스크립트 생성
```bash
#!/bin/bash
# ~/run_claudia.sh

source ~/.cargo/env
export PATH="$HOME/.bun/bin:$PATH"
cd ~/github/claudia
bun run tauri dev
```

## 첫 실행 및 초기 설정

### 1. Claudia 실행
```bash
# 개발 모드로 실행
./run_claudia.sh

# 또는 빌드된 앱 실행 (macOS)
open src-tauri/target/release/bundle/macos/Claudia.app
```

### 2. 초기 설정
1. **환영 화면**: CC Projects 또는 CC Agents 선택
2. **Claude 경로 확인**: 자동으로 `~/.claude` 디렉토리 감지
3. **API 키 설정**: Claude API 키 입력 (선택사항)

## 주요 기능 사용법

### 1. 프로젝트 & 세션 관리

#### 프로젝트 탐색
1. **CC Projects** 클릭
2. `~/.claude/projects/` 내 모든 프로젝트 자동 표시
3. 프로젝트 클릭하여 세션 히스토리 확인

#### 세션 관리
- **세션 재개**: 이전 대화 컨텍스트 유지하며 계속
- **새 세션**: 프로젝트 컨텍스트만 유지하고 새로 시작
- **세션 정보**: 첫 메시지, 타임스탬프, 메타데이터 표시

### 2. 커스텀 AI 에이전트 생성

#### 에이전트 설정 예시

**코드 리뷰어 에이전트**:
```yaml
이름: Code Reviewer
아이콘: 🔍
시스템 프롬프트: |
  당신은 코드 리뷰 전문가입니다. 
  다음 사항에 집중하세요:
  - 보안 취약점 검토
  - 성능 최적화 제안
  - 코드 스타일 일관성
  - 테스트 커버리지 확인
모델: Claude 3 Sonnet
샌드박스: 읽기 전용
```

**문서 작성 에이전트**:
```yaml
이름: Doc Writer
아이콘: 📝
시스템 프롬프트: |
  기술 문서 작성 전문가로서:
  - 명확하고 구조화된 문서 작성
  - 코드 예제 포함
  - API 문서 형식 준수
모델: Claude 3 Haiku
샌드박스: 파일 쓰기 허용
```

### 3. 사용량 분석 대시보드

#### 접근 방법
```
메뉴 → Usage Dashboard
```

#### 제공 정보
- **모델별 토큰 사용량**: Opus, Sonnet, Haiku 별 분석
- **프로젝트별 비용**: 각 프로젝트의 API 비용 추적
- **시간대별 트렌드**: 일별/주별/월별 사용 패턴
- **데이터 내보내기**: CSV/JSON 형식으로 export

### 4. MCP 서버 관리

#### 서버 추가
1. **메뉴 → MCP Manager**
2. **Add Server** 클릭
3. 서버 정보 입력:
   ```json
   {
     "name": "notion-mcp",
     "command": "npx",
     "args": ["notion-mcp"],
     "env": {
       "NOTION_API_KEY": "your-key"
     }
   }
   ```
4. **Test Connection** → **Save**

#### Claude Desktop 설정 가져오기
- **Import from Claude Desktop** 클릭
- 자동으로 기존 MCP 설정 불러오기

### 5. 타임라인 & 체크포인트

#### 체크포인트 생성
1. 세션 진행 중 **Create Checkpoint** 클릭
2. 설명 추가 (예: "리팩토링 전 백업")
3. 작업 계속 진행

#### 체크포인트 복원
1. **Timeline** 아이콘 클릭
2. 체크포인트 목록에서 선택
3. **Preview Diff**로 변경사항 확인
4. **Restore** 또는 **Fork** 선택

### 6. CLAUDE.md 편집

#### 프로젝트 지침 관리
1. 프로젝트 선택 → **Edit CLAUDE.md**
2. 내장 마크다운 편집기 사용
3. 실시간 프리뷰로 확인
4. 저장하여 프로젝트 컨텍스트 업데이트

## 고급 활용 팁

### 1. 키보드 단축키
- `Cmd/Ctrl + N`: 새 세션
- `Cmd/Ctrl + S`: 체크포인트 저장
- `Cmd/Ctrl + ,`: 설정 열기
- `Cmd/Ctrl + D`: 사용량 대시보드

### 2. 에이전트 템플릿 활용
```bash
# 에이전트 프로필 내보내기
설정 → Agents → Export Profile

# 팀원과 공유
agents/code-reviewer.json
agents/doc-writer.json
agents/test-generator.json
```

### 3. 비용 최적화 전략
- **작업별 모델 선택**: 
  - 간단한 작업 → Haiku
  - 일반 코딩 → Sonnet
  - 복잡한 분석 → Opus
- **토큰 제한 설정**: 에이전트별 최대 토큰 설정
- **정기 모니터링**: 주간 사용량 리뷰

### 4. 보안 샌드박스 프로필

**읽기 전용 프로필**:
```json
{
  "name": "read-only",
  "filesystem": {
    "read": ["~/projects"],
    "write": []
  },
  "network": false,
  "process": false
}
```

**제한된 쓰기 프로필**:
```json
{
  "name": "limited-write",
  "filesystem": {
    "read": ["~/projects"],
    "write": ["~/projects/output"]
  },
  "network": ["localhost"],
  "process": ["node", "python"]
}
```

## 문제 해결

### 자주 발생하는 문제

#### 1. Claudia가 시작되지 않음
```bash
# Rust/Bun 설치 확인
rustc --version
bun --version

# Claude CLI 확인
claude --version

# 개발 모드로 재시도
bun run tauri dev
```

#### 2. 프로젝트가 표시되지 않음
```bash
# Claude 프로젝트 디렉토리 확인
ls ~/.claude/projects/

# 권한 확인
ls -la ~/.claude/
```

#### 3. 에이전트 실행 실패
- Claude CLI 경로 확인: 설정 → General → Claude Path
- 샌드박스 권한 검토
- 실행 로그 확인: View → Developer → Console

#### 4. MCP 서버 연결 오류
```bash
# MCP 서버 수동 테스트
npx [mcp-server-name] --test

# 환경 변수 확인
echo $MCP_ENV_VAR
```

### 디버깅 팁
1. **개발자 도구**: `Cmd/Ctrl + Shift + I`
2. **로그 위치**: 
   - macOS: `~/Library/Logs/Claudia/`
   - Linux: `~/.config/claudia/logs/`
   - Windows: `%APPDATA%\Claudia\logs\`
3. **캐시 정리**: 설정 → Advanced → Clear Cache

## 구현 체크리스트
- [x] Rust와 Bun 설치
- [x] Claudia 소스 코드 클론
- [x] 의존성 설치 및 빌드
- [x] 첫 실행 및 기본 설정
- [ ] 첫 번째 커스텀 에이전트 생성
- [ ] MCP 서버 연동
- [ ] 체크포인트 기능 활용
- [ ] 팀 설정 공유

## 연결된 노트
- **상위 개념**: [[Claude Code 완벽 가이드 - 실습형 노트]]
- **하위 세부사항**: [[Claudia 고급 설정 가이드]]
- **병렬 주제**: [[Claude_Code_CLI_활용_가이드]]
- **실전 활용**: [[Claudia를 활용한 팀 협업 워크플로우]]
- **관련 도구**: [[MCP 서버 구축 가이드]]
- **보안 설정**: [[Claudia 샌드박스 보안 설정]]

---

**💡 Pro Tips**: 
1. Claudia는 Claude Code의 모든 기능을 포함하며 GUI로 더 쉽게 접근할 수 있게 합니다
2. 정기적으로 GitHub에서 업데이트를 확인하고 새 기능을 활용하세요
3. 에이전트 프로필을 팀과 공유하여 일관된 개발 환경을 구축하세요
4. 사용량 대시보드를 주기적으로 확인하여 비용을 최적화하세요