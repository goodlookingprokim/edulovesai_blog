---
title: "Claude Code 네이티브 설치 완벽 가이드 Part 1 - 설치 전 준비와 기본 개념"
created: '2025-11-09'
last_modified: '2025-11-09'
tags:
  - Claude-Code
  - 개발도구
  - 설치가이드
  - 네이티브
  - 초보자용
  - type/가이드
  - status/완료
status: "완료"
type: "설치가이드"
priority: "high"
---

# Claude Code 네이티브 설치 완벽 가이드 Part 1

> 🎯 **이 가이드의 목표**: 초보 개발자도 Claude Code 네이티브 설치를 완벽하게 이해하고 성공적으로 설치할 수 있도록 돕습니다!

---

## 📋 목차

### Part 1 (현재 문서)
1. [[#들어가며 - 왜 네이티브 설치일까]]
2. [[#설치 전 이해하기]]
3. [[#Node 버전 vs Native 버전]]
4. [[#시스템 요구사항 확인]]
5. [[#설치 전 체크리스트]]
6. [[#용어 사전 (Glossary)]]

### Part 2 (별도 문서)
7. 설치 과정 단계별 가이드
8. 설치 후 확인 및 검증
9. 문제 해결 가이드
10. 실전 활용 팁

---

## 들어가며 - 왜 네이티브 설치일까?

### 🌱 일상 비유로 이해하기

**상황**: 여러분이 새로운 게임을 다운로드한다고 상상해보세요!

**Node 버전 방식 (이전)**
```
게임을 실행하려면:
1. 먼저 "게임 실행기" 앱 설치 (Node.js)
2. 그 다음 게임 파일 다운로드
3. 게임 실행기로 게임을 실행

→ 두 단계가 필요해요!
→ 게임 실행기가 항상 켜져 있어야 해요!
```

**Native 버전 방식 (현재)** ✨
```
게임을 실행하려면:
1. 게임 앱만 다운로드
2. 바로 실행!

→ 한 번에 끝!
→ 별도 프로그램 불필요!
→ 더 빠르고 가볍게!
```

### 💡 핵심 요약

**Native 설치란?**
- 여러분의 컴퓨터(Mac, Windows, Linux) 전용으로 만들어진 프로그램
- 다른 프로그램 없이도 바로 실행 가능
- 마치 App Store에서 받은 앱처럼 독립적으로 작동

---

## 설치 전 이해하기

### 🌱 초급: Claude Code가 뭔가요?

**Claude Code는**:
- AI 비서가 코딩을 도와주는 도구
- 터미널(명령어 창)에서 대화하듯 사용
- 파일 읽기, 코드 작성, 버그 수정 등을 자동으로 해줌

**일상 비유**:
```
Claude Code = AI 코딩 비서

마치 이렇게 말할 수 있어요:
"내 프로젝트의 버그를 찾아줘"
"이 기능을 구현해줘"
"이 코드를 설명해줘"

→ AI가 실제로 코드를 작성하고 실행해줘요!
```

### 🌿 중급: 어떻게 작동하나요?

**작동 원리 3단계**:

```mermaid
graph LR
    A[사용자] --> B[Claude Code]
    B --> C[Claude AI<br/>클라우드]
    C --> B
    B --> A
```

**흐름도 설명**:
```
사용자 → Claude Code → Claude AI (클라우드)
  ↑                               ↓
  ←───────── 결과 반환 ─────────────┘
```

**1단계: 명령 입력**
```bash
# 터미널에서
$ claude
> 내 프로젝트에서 todos.js 파일을 찾아줘
```

**2단계: AI 분석**
- Claude AI가 프로젝트 구조 분석
- 적절한 도구 선택 (파일 검색, 읽기 등)
- 최적의 해결 방법 결정

**3단계: 실행 및 결과**
```bash
✓ todos.js 파일을 찾았습니다!
  위치: /Users/jmacpro/project/src/todos.js

✓ 파일 내용을 읽어볼까요? (y/n)
```

### 🌳 고급: 시스템 아키텍처

**Claude Code의 구성 요소**:

```
┌─────────────────────────────────────────┐
│         Claude Code CLI                 │
│  (Command Line Interface - 명령어 도구) │
└──────────────┬──────────────────────────┘
               │
               ├─→ 로컬 도구들
               │   ├─ 파일 읽기/쓰기
               │   ├─ 명령어 실행 (bash, npm 등)
               │   └─ 코드 분석
               │
               └─→ 클라우드 AI
                   └─ Claude 3.5 Sonnet (AI 모델)
```

**네이티브 버전의 특징**:
- **바이너리 실행 파일**: 컴파일된 기계어 코드
- **독립 실행**: 외부 런타임 불필요
- **최적화**: OS별 최적화된 성능

---

## Node 버전 vs Native 버전

### 🌱 초급: 쉬운 비교

**음식 배달로 비유**:

**Node 버전** 🚲
```
배달 음식 주문
→ 배달원이 오토바이로 배달
→ 배달원 수수료 포함
→ 조금 느릴 수 있음
→ 배달원이 필요 (Node.js)
```

**Native 버전** 🏃
```
직접 가서 테이크아웃
→ 중간 단계 없이 바로 받음
→ 추가 비용 없음
→ 빠르고 효율적
→ 다른 사람 필요 없음
```

### 🌿 중급: 기술적 비교

| 항목 | Node 버전 | Native 버전 |
|------|-----------|-------------|
| **설치 크기** | 작음 (~50MB) | 큼 (~200MB) |
| **실행 속도** | 느림 (2초) | 빠름 (0.5초) |
| **메모리 사용** | 많음 (150MB) | 적음 (80MB) |
| **의존성** | Node.js 18+ 필요 | 없음 |
| **업데이트** | 수동 (npm update) | 자동 |
| **호환성** | 모든 플랫폼 | macOS/Linux/Windows |
| **권장도** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### 🌳 고급: 내부 구조 비교

**Node 버전 실행 과정**:
```
1. 셸이 claude 명령어 인식
   ↓
2. Node.js 인터프리터 시작
   ↓
3. Node.js가 JavaScript 파일 로드
   ↓
4. Just-In-Time (JIT) 컴파일
   ↓
5. JavaScript 코드 실행
   ↓
6. Claude AI API 호출
```

**Native 버전 실행 과정**:
```
1. 셸이 claude 명령어 인식
   ↓
2. 바이너리 파일 직접 실행 (이미 컴파일됨)
   ↓
3. Claude AI API 호출
```

**성능 차이의 이유**:
- **컴파일 시점**: Native는 사전 컴파일 (Ahead-of-Time)
- **런타임 오버헤드**: Node.js 런타임 로딩 시간 제거
- **메모리 할당**: 최적화된 메모리 관리

---

## 시스템 요구사항 확인

### 🌱 초급: 내 컴퓨터에 설치할 수 있을까?

**기본 체크리스트** ✅

```
□ 운영체제 확인
  - Mac: macOS 10.15 이상
  - Windows: Windows 10 이상
  - Linux: Ubuntu 20.04/Debian 10 이상

□ RAM (메모리)
  - 최소 4GB (권장 8GB)

□ 인터넷 연결
  - 필수! (AI와 통신하려면 필요)

□ 디스크 공간
  - 최소 500MB 여유 공간
```

### 🌿 중급: 시스템 확인 방법

**macOS에서 확인**:

```bash
# 1. macOS 버전 확인
sw_vers

# 예상 출력:
# ProductName:        macOS
# ProductVersion:     14.1
# BuildVersion:       23B74

# 2. RAM 확인
sysctl hw.memsize | awk '{print $2/1024/1024/1024 " GB"}'

# 예상 출력:
# 16 GB

# 3. 디스크 공간 확인
df -h ~

# 예상 출력:
# Filesystem      Size   Used  Avail Capacity
# /dev/disk1s1   500Gi  300Gi  200Gi    61%
```

**Windows에서 확인**:

```powershell
# 1. Windows 버전
winver

# 2. RAM 확인
Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property capacity -Sum

# 3. 디스크 공간
Get-PSDrive C
```

**Linux에서 확인**:

```bash
# 1. 배포판 및 버전
lsb_release -a

# 2. RAM 확인
free -h

# 3. 디스크 공간
df -h /
```

### 🌳 고급: 호환성 상세 분석

**지원되는 셸 환경**:

```bash
# Bash (가장 일반적)
echo $SHELL
# → /bin/bash

# Zsh (macOS 기본)
echo $SHELL
# → /bin/zsh

# Fish (고급 사용자)
echo $SHELL
# → /usr/bin/fish
```

**네트워크 요구사항**:
- **API 엔드포인트**: `https://api.anthropic.com`
- **포트**: HTTPS (443)
- **방화벽**: 아웃바운드 연결 허용 필요
- **프록시**: 환경변수 설정 가능 (`HTTP_PROXY`, `HTTPS_PROXY`)

**추가 권한 요구사항**:
- **macOS**: Gatekeeper 허용 (서명된 앱)
- **Linux**: 실행 권한 (`chmod +x`)
- **Windows**: 관리자 권한 (설치 시)

---

## 설치 전 체크리스트

### 🌱 초급: 설치하기 전에 꼭 확인하세요!

**준비물 체크** ✅

```
□ 1. 컴퓨터 사양 확인
   → 위의 "시스템 요구사항" 섹션 참고

□ 2. 인터넷 연결 확인
   → 브라우저에서 google.com 접속 테스트

□ 3. 터미널 열기 연습
   - Mac: Spotlight → "터미널" 검색
   - Windows: PowerShell 검색
   - Linux: Ctrl+Alt+T

□ 4. Anthropic 계정 준비
   → https://claude.ai 에서 회원가입

□ 5. 백업 (기존 설치가 있다면)
   → 설정 파일 백업 (~/.claude/)
```

### 🌿 중급: 환경별 사전 준비

**macOS 사용자**:

```bash
# 1. Xcode Command Line Tools 설치 (필요시)
xcode-select --install

# 2. 홈브루 설치 확인 (선택사항)
which brew
# → /opt/homebrew/bin/brew (M1/M2)
# → /usr/local/bin/brew (Intel)

# 없다면 설치:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 3. PATH 환경변수 확인
echo $PATH | tr ':' '\n' | grep -E "local/bin|\.local/bin"
```

**Windows 사용자**:

```powershell
# 1. PowerShell 버전 확인 (5.1 이상)
$PSVersionTable.PSVersion

# 2. 실행 정책 확인
Get-ExecutionPolicy

# RemoteSigned로 변경 (필요시)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# 3. Windows Terminal 설치 (권장)
# Microsoft Store에서 "Windows Terminal" 검색
```

**Linux 사용자**:

```bash
# 1. curl 설치 확인
which curl
# 없다면 설치:
sudo apt-get install curl    # Ubuntu/Debian
sudo yum install curl        # CentOS/RHEL

# 2. 필수 라이브러리 설치
sudo apt-get install -y build-essential

# 3. 사용자 bin 디렉토리 생성
mkdir -p ~/.local/bin
```

### 🌳 고급: 기존 설치 마이그레이션 계획

**Node 버전에서 Native로 전환하는 경우**:

```bash
# 1. 현재 설치 확인
which -a claude
# 모든 claude 실행 파일 위치 확인

# 2. 현재 버전 및 타입 확인
file $(which claude)
# Node 버전: "a /usr/bin/env node script"
# Native: "Mach-O 64-bit executable"

# 3. 설정 백업
cp -r ~/.claude ~/.claude_backup_$(date +%Y%m%d)

# 4. 히스토리 백업 (선택)
cp ~/.claude/history.jsonl ~/.claude_history_backup.jsonl

# 5. MCP 서버 목록 확인
cat ~/.claude/settings.json | grep -A 20 "mcpServers"
```

**백업해야 할 중요 파일**:
```
~/.claude/
├── settings.json           ← 필수 백업!
├── settings.local.json     ← 필수 백업!
├── commands/               ← 커스텀 명령어
├── agents/                 ← 커스텀 에이전트
├── hooks/                  ← 훅 스크립트
└── history.jsonl           ← 대화 기록 (선택)
```

**백업 스크립트 예제**:

```bash
#!/bin/bash
# claude_backup.sh

BACKUP_DIR="$HOME/.claude_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "🔄 Claude Code 설정 백업 중..."

# 중요 파일 복사
cp -r "$HOME/.claude/settings.json" "$BACKUP_DIR/"
cp -r "$HOME/.claude/settings.local.json" "$BACKUP_DIR/" 2>/dev/null
cp -r "$HOME/.claude/commands" "$BACKUP_DIR/" 2>/dev/null
cp -r "$HOME/.claude/agents" "$BACKUP_DIR/" 2>/dev/null
cp -r "$HOME/.claude/hooks" "$BACKUP_DIR/" 2>/dev/null

echo "✅ 백업 완료: $BACKUP_DIR"
ls -lh "$BACKUP_DIR"
```

---

## 용어 사전 (Glossary)

### 기본 용어

**네이티브 (Native)**
- **쉬운 설명**: 여러분의 컴퓨터 운영체제(Mac, Windows, Linux) 전용으로 만들어진 프로그램
- **비유**: 한국어 원어민이 한국어로 말하는 것처럼, 컴퓨터가 가장 잘 이해하는 언어로 만들어진 프로그램
- **예시**: App Store에서 받은 앱들 대부분이 네이티브 앱

**바이너리 (Binary)**
- **쉬운 설명**: 컴퓨터가 직접 실행할 수 있는 0과 1로 된 파일
- **비유**: 사람이 읽을 수 있는 레시피(코드) → 요리사만 아는 비밀 기호(바이너리)
- **예시**: `.exe` (Windows), `.app` (Mac) 파일들

**CLI (Command Line Interface)**
- **쉬운 설명**: 마우스 대신 키보드로 명령어를 입력하는 프로그램
- **비유**: 음성 주문 대신 키오스크에서 직접 버튼을 누르는 것
- **예시**: 터미널, 명령 프롬프트

**터미널 (Terminal)**
- **쉬운 설명**: 컴퓨터에게 명령어를 입력하는 검은 화면
- **비유**: 컴퓨터와 대화하는 채팅창
- **Mac에서 열기**: Spotlight(⌘+Space) → "터미널" 입력
- **Windows에서 열기**: 시작 메뉴 → "PowerShell" 검색

### 기술 용어

**Node.js**
- **쉬운 설명**: JavaScript 코드를 실행할 수 있게 해주는 프로그램
- **비유**: 게임을 실행하려면 필요한 "게임 실행기"
- **왜 필요했나**: 이전 Claude Code는 JavaScript로 작성되어서 Node.js가 필요했음

**npm (Node Package Manager)**
- **쉬운 설명**: Node.js 프로그램을 설치하고 관리하는 도구
- **비유**: 앱스토어처럼 프로그램을 검색하고 설치하는 곳
- **명령어 예시**: `npm install -g claude-code`

**PATH 환경변수**
- **쉬운 설명**: 컴퓨터가 프로그램을 찾는 위치들의 목록
- **비유**: 자주 가는 즐겨찾기 폴더 목록
- **왜 중요한가**: `claude` 명령어를 어디서든 실행하려면 PATH에 등록되어야 함
- **확인 방법**: `echo $PATH` (Mac/Linux), `$env:Path` (Windows)

**Mach-O**
- **쉬운 설명**: macOS에서 사용하는 실행 파일 형식
- **비유**: Windows의 `.exe` 파일과 같은 것
- **확인 방법**: `file /path/to/program`으로 파일 타입 확인

**컴파일 (Compile)**
- **쉬운 설명**: 사람이 읽을 수 있는 코드를 컴퓨터가 실행할 수 있는 바이너리로 변환
- **비유**: 한글 레시피를 요리 로봇이 이해하는 기계어로 번역
- **네이티브의 장점**: 미리 컴파일되어 있어서 실행이 빠름

**인터프리터 (Interpreter)**
- **쉬운 설명**: 코드를 한 줄씩 읽어가며 즉시 실행하는 프로그램
- **비유**: 동시통역사 (말을 듣자마자 바로 번역)
- **예시**: Node.js는 JavaScript 인터프리터
- **단점**: 컴파일된 것보다 느림

### 설치 관련 용어

**curl**
- **쉬운 설명**: 인터넷에서 파일을 다운로드하는 명령어
- **비유**: 웹 브라우저 없이 파일을 받는 도구
- **예시**: `curl -fsSL https://example.com/install.sh`

**bash**
- **쉬운 설명**: 리눅스/Mac에서 명령어를 실행하는 프로그램(셸)
- **비유**: Windows의 명령 프롬프트와 비슷
- **실행 예시**: `bash install.sh`

**PowerShell**
- **쉬운 설명**: Windows에서 사용하는 고급 명령어 프로그램
- **비유**: 기존 명령 프롬프트의 업그레이드 버전
- **특징**: 더 많은 기능과 자동화 가능

**Homebrew**
- **쉬운 설명**: Mac에서 프로그램을 쉽게 설치할 수 있게 해주는 도구
- **비유**: Mac용 앱스토어 (개발자 도구용)
- **설치 명령**: `brew install claude-code`

**의존성 (Dependency)**
- **쉬운 설명**: 프로그램이 실행되기 위해 필요한 다른 프로그램들
- **비유**: 케이크를 만들려면 필요한 재료들 (밀가루, 계란 등)
- **Node 버전**: Node.js가 의존성
- **Native 버전**: 의존성 없음! (모든 것이 포함됨)

### 성능 관련 용어

**RAM (메모리)**
- **쉬운 설명**: 프로그램이 실행되는 동안 사용하는 임시 저장 공간
- **비유**: 책상 위 공간 (넓을수록 더 많은 작업 가능)
- **Claude Code 요구**: 최소 4GB

**실행 속도**
- **쉬운 설명**: 프로그램이 시작되어 사용 가능해지기까지 걸리는 시간
- **Node 버전**: 약 2초
- **Native 버전**: 약 0.5초 (4배 빠름!)

**자동 업데이트**
- **쉬운 설명**: 새 버전이 나오면 자동으로 업데이트되는 기능
- **Native의 장점**: 안정적인 자동 업데이트
- **Node 버전**: 수동으로 `npm update` 실행 필요

---

## 🤔 실습 문제

### 초급 문제

**Q1**: 여러분의 컴퓨터가 Claude Code를 설치할 수 있는지 확인해보세요.
```bash
# 힌트: 운영체제 버전 확인
# Mac: sw_vers
# Windows: winver
# Linux: lsb_release -a
```

**Q2**: PATH 환경변수를 확인하고 `.local/bin`이 포함되어 있는지 확인하세요.
```bash
# Mac/Linux
echo $PATH | tr ':' '\n'

# Windows
$env:Path -split ';'
```

### 중급 문제

**Q3**: 기존 Node 버전 Claude Code가 설치되어 있다면, 어떤 파일 타입인지 확인하세요.
```bash
# 힌트
file $(which claude)
```

**Q4**: 백업 스크립트를 실행하여 현재 설정을 백업하세요.
```bash
# 위의 백업 스크립트 참고
```

### 고급 문제

**Q5**: Native 설치 후 Node 버전과 속도를 비교해보세요.
```bash
# 실행 시간 측정
time claude --version
```

---

## 📚 연결된 노트

- [[Claude Code 네이티브 설치 완벽 가이드 Part 2]] - 설치 과정 및 검증
- [[Claude Code 완전 가이드]] - 전체 사용법
- [[MCP 시스템]] - Claude Code의 확장 기능
- [[터미널 기초 사용법]] - 기본 명령어 학습

---

## 다음 단계

✅ Part 1 완료: 설치 전 준비와 기본 개념 이해
🔜 Part 2로 이동: 실제 설치 과정 및 검증

[[Claude Code 네이티브 설치 완벽 가이드 Part 2]]에서 계속됩니다!

---

**작성일**: 2025-11-09
**마지막 수정**: 2025-11-09
**난이도**: ⭐ 초급~고급 (단계별 제공)
**소요 시간**: 약 20분
