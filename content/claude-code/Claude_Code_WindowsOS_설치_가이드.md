---
tags:
  - Claude-Code
  - Windows
  - WSL
  - AI-도구
  - 개발환경
  - 설치가이드
  - MCP
  - 터미널
created: 2025-06-18
last_modified: 2025-06-20
status: active
type: guide
priority: high
share_link: https://share.note.sx/x5ba6k94#usGsSmbEFjgJj3bxgLu4GzetIeokPAeRX2DdQckSXC0
share_updated: 2025-06-18T19:09:40+09:00
---

# Claude Code Windows OS 설치 가이드

## 개요
- **핵심 주제**: Windows 환경에서 Claude Code 설치 및 설정
- **목적**: Windows 사용자가 Claude Code를 성공적으로 설치하고 사용할 수 있도록 안내
- **범위**: WSL 설치부터 Claude Code 실행까지의 전체 과정

## 📋 목차
1. [[#Claude Code 소개]]
2. [[#시스템 요구사항]]
3. [[#빠른 설치 가이드 (초보자용)]]
4. [[#WSL 설치 및 설정]]
5. [[#필수 소프트웨어 설치]]
6. [[#Claude Code 설치]]
7. [[#첫 실행 및 설정]]
8. [[#터미널 기반 사용법]]
9. [[#문제 해결]]
   - [[#WSL 완전 삭제 및 재설치]]
10. [[#고급 설정 및 팁]]
    - [[#Obsidian과 WSL 연동]]

## Claude Code 소개

Claude Code는 Anthropic에서 2025년 5월 22일에 정식 출시한 AI 기반 터미널 코딩 도구입니다. 자연어 명령으로 코드 작성, 편집, 디버깅을 수행할 수 있으며, Claude Opus 4 모델을 기반으로 합니다.

### 주요 특징
- **터미널 기반 인터페이스**: 별도의 GUI 없이 터미널에서 직접 AI 지원
- **코드베이스 이해 및 검색**: 프로젝트 전체 구조 파악
- **Git 통합**: 커밋, PR 생성 자동화
- **파일 편집 및 버그 수정**: 자연어 명령으로 코드 수정
- **MCP(Model Context Protocol) 지원**: 확장 가능한 도구 생태계
- **프로젝트 메모리 기능**: CLAUDE.md를 통한 컨텍스트 관리
- **자연어 코드 변환**: 한국어 또는 영어로 설명하면 즉시 코드 생성
- **다중 작업 모드**: Plan, Auto Accept, Normal 모드 지원

### 출시 현황
- **2025년 2월**: 연구 미리보기(Research Preview) 출시
- **2025년 5월 22일**: 정식 출시(General Availability)
- **현재**: Pro 및 Max 플랜에서 사용 가능

### 관련 학습 자료

#### 한국어 YouTube 채널
- **챗과장 채널**: [5분 만에 Claude Code 설치하기](https://youtu.be/J0IWxZXczxs)
  - 간단한 WSL + Claude Code 설치 방법
  - 초보자를 위한 빠른 시작 가이드
  
- **소스놀이터 채널**: [커서·Replit 이제 안녕? MCP까지 품은 미친 성능에 압도적 사용량까지! '클로드 코드'의 등장!](https://youtu.be/UpSlgSoBcMo)
  - **업로드**: 2025년 6월 23일
  - **조회수**: 2,827회 (16시간 만에)
  - **좋아요**: 158개
  - **주요 내용**:
    - WSL 설치부터 Claude Code 로그인까지 완전 정복
    - Plan Mode / Auto Accept Mode 상세 설명
    - MCP (Playwright MCP 포함) 연동 방법
    - Cursor, Replit 대비 Claude Code의 우수성 비교
    - 실전 사용 예시와 팩

#### 상세 가이드
- **챗과장 Notion 가이드**: [상세 설치 가이드](https://principled-learning-2c9.notion.site/216dc93a597c80f6953ef4d048d55926)
- **실전 사용 후기**: 포토샵 클론 프로젝트를 1시간 만에 완성 (레이어 기능 포함)

## 시스템 요구사항

### 최소 요구사항
- **Windows 버전**: Windows 10 버전 2004 이상 (빌드 19041+) 또는 Windows 11
- **메모리**: 4GB RAM 이상
- **저장공간**: 최소 10GB 여유 공간
- **인터넷**: 안정적인 인터넷 연결 필수
- **계정**: Anthropic 계정 및 활성화된 결제 설정 (Pro/Max 플랜)
- **WSL**: Windows Subsystem for Linux 필수

> **⚠️ 중요**: Claude Code는 Windows를 직접 지원하지 않으므로 WSL 환경이 반드시 필요합니다.

### 권장 사양
- **메모리**: 8GB RAM 이상
- **프로세서**: Intel Core i5 이상 또는 동급 AMD
- **저장공간**: SSD 사용 권장

## WSL 설치 및 설정

Windows에서 Claude Code를 사용하려면 WSL(Windows Subsystem for Linux) 설치가 필수입니다.

### 1단계: WSL 활성화

PowerShell을 **관리자 권한**으로 실행하고 다음 명령을 입력합니다:

```powershell
# WSL 설치 (Ubuntu 기본 설치)
wsl --install

# 또는 특정 배포판 선택 설치
wsl --install -d Ubuntu-22.04
```

> **💡 팁**: CMD나 PowerShell에서 마우스 우클릭으로 복사한 명령어를 붙여넣을 수 있습니다.

### 2단계: 시스템 재부팅

설치 완료 후 시스템을 재부팅합니다.

### 3단계: WSL 초기 설정

재부팅 후 자동으로 Ubuntu 터미널이 열립니다. 사용자명과 비밀번호를 설정합니다:
- **사용자명**: 소문자와 숫자만 사용 (예: `shop2world`)
- **비밀번호**: 입력 시 화면에 표시되지 않음 (정상)

### 4단계: WSL 2로 업그레이드 (선택사항)

더 나은 성능을 위해 WSL 2 사용을 권장합니다:

```powershell
# PowerShell에서 실행
wsl --set-default-version 2
wsl --set-version Ubuntu-22.04 2
```

## 필수 소프트웨어 설치

WSL Ubuntu 터미널에서 다음 단계들을 순서대로 진행합니다.

### 1. 시스템 패키지 업데이트

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Node.js 설치 (NVM 사용)

```bash
# NVM 설치 스크립트 다운로드 및 실행
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 환경 변수 적용
source ~/.bashrc

# Node.js LTS 버전 설치
nvm install --lts
nvm use --lts

# 설치 확인
node --version  # v20.x.x 이상이어야 함
npm --version
```

### 3. Python 설치 (선택사항)

일부 프로젝트에서 Python이 필요할 수 있습니다:

```bash
sudo apt install python3 python3-pip -y
python3 --version
```

### 4. Git 설정

```bash
# Git 사용자 정보 설정
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Claude Code 설치

### 1. NPM 전역 디렉토리 설정

권한 문제를 방지하기 위해 NPM 전역 디렉토리를 설정합니다:

```bash
# 전역 NPM 디렉토리 생성
mkdir -p ~/.npm-global

# NPM 설정 변경
npm config set prefix ~/.npm-global

# PATH 환경 변수 추가
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### 2. Claude Code 설치

**방법 1: NPM을 통한 설치 (기본 방법)**

```bash
# Claude Code 설치 (sudo 사용하지 않음!)
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version
```

**방법 2: 챗과장님의 간편 설치 방법**

YouTube 영상(https://youtu.be/J0IWxZXczxs)에서 제공된 더 간단한 설치 명령:

```bash
# Node.js 22.x와 Claude Code를 한 번에 설치
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt update && sudo apt install -y nodejs
sudo npm install -g @anthropic-ai/claude-code
```

> **💡 참고**: 이 방법은 Node.js를 시스템 레벨에 설치하며, sudo를 사용합니다. 초보자에게는 더 간단하지만, 권한 문제가 발생할 수 있습니다.

### 3. Anthropic API 키 설정

1. [Anthropic Console](https://console.anthropic.com)에 로그인
2. API Keys 섹션에서 새 키 생성
3. 환경 변수로 설정:

```bash
# API 키 환경 변수 설정
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
source ~/.bashrc
```

## 첫 실행 및 설정

### 1. 프로젝트 디렉토리 생성

```bash
# WSL 홈 디렉토리에 프로젝트 폴더 생성
mkdir -p ~/projects/my-first-project
cd ~/projects/my-first-project
```

### 2. Claude Code 실행

```bash
# Claude Code 시작
claude
```

### 3. 기본 사용법

- **대화 시작**: 자연어로 요청 입력
- **코드 편집**: "파일명을 수정해줘" 형식으로 요청
- **파일 생성**: "새 파일을 만들어줘" 요청
- **이전 대화**: ESC 키 누르기
- **종료**: Ctrl+C 또는 "exit" 입력

### 4. 프로젝트 메모리 설정

```bash
# CLAUDE.md 파일 생성 (프로젝트별 설정)
echo "# 프로젝트 설명 및 컨텍스트" > CLAUDE.md

# CLAUDE.local.md 파일 생성 (개인 설정, Git 제외)
echo "# 개인 메모 및 설정" > CLAUDE.local.md
echo "CLAUDE.local.md" >> .gitignore
```

## 터미널 기반 사용법

### 기본 명령어 및 활용법

Claude Code는 터미널에서 자연어 명령을 통해 작동합니다:

#### 도움말 및 초기 설정
```bash
# 도움말 표시
/help

# 기본 설정 파일 생성
/init
```

#### 코드 분석 및 질문
```bash
# 프로젝트 구조 분석
"이 프로젝트의 구조를 분석해주세요"

# 오류 로깅 방법 질문
"how do I log an error?"

# 특정 기능 구현 문의
"사용자 인증 기능을 어떻게 구현하나요?"

# 자연어로 코드 생성 요청
"Python으로 리스트를 정렬하는 함수를 작성해줘"
```

#### 파일 작업
```bash
# 파일 생성
"새로운 React 컴포넌트를 만들어주세요"

# 파일 수정
"index.js 파일의 버그를 찾아서 수정해주세요"

# 코드 리팩토링
"이 함수를 더 효율적으로 개선해주세요"
```

#### Git 작업
```bash
# 변경사항 커밋
"변경사항을 커밋해주세요"

# Pull Request 생성
"PR을 만들어주세요"
```

### 작업 모드 설정

Claude Code는 세 가지 작업 모드를 제공합니다 (Shift+Tab으로 전환):

1. **Plan Mode (계획 모드)**: Claude가 실행 전에 계획을 설명하고 승인을 기다립니다
   - 예상 작업 시간과 복잡도 표시
   - 체계적인 작업 계획 수립
   
2. **Auto Accept Mode (자동 승인 모드)**: Claude가 모든 제안된 작업을 자동으로 수락합니다
   - 빠른 작업 진행
   - 신뢰할 수 있는 작업에 적합
   
3. **Normal Mode (일반 모드)**: 기본 모드로 각 작업마다 승인이 필요합니다
   - 세밀한 제어 가능
   - 중요한 변경사항 확인

#### Thinking Mode 활용
더 깊은 분석이 필요할 때:
```bash
# Thinking Mode 활성화
"think hard" 또는 "싱크하드"

# 효과
- 2배 더 긴 시간을 들여 상세 분석
- 더 정확한 계획 수립
- 오류 가능성 감소
```

#### 프로젝트 상태 추적
```bash
# 프로젝트 플랜 파일 활용
echo "## 현재 상황" > project-plan.md

# 작업 진행 상황 확인
"어디까지 작업했는지 알려줘"
```

### Claude Code 활용 패턴

#### 효과적인 명령 구조
```
[작업 목적] + [구체적 지시] + [맥락 정보] + [결과 형식] + [품질 기준]

예시: "오늘 학습한 MCP 관련 내용을 바탕으로 실전 가이드 노트를 생성해줘. 
      기존 MCP 관련 노트들과 연결하고, README.md의 표준 구조를 따라 작성해줘."
```

#### 권한 요청 처리
Claude Code 작업 중 권한 요청이 나타날 때:
- **1번**: 한 번만 허락 (이번 작업만)
- **2번**: 같은 유형의 작업 모두 허락
- **3번**: 작업 거부

#### 토큰 관리 및 컨텍스트 압축
- 화면 우측 하단에 남은 토큰 비율 표시 (예: 6%)
- 0%가 되면 자동으로 컨텍스트 압축 진행
- 압축 후 다시 여유 공간이 생성되어 작업 지속 가능

### 보안 및 신뢰 설정

Claude Code 실행 시 폴더 접근 권한에 대한 확인이 나타납니다:

1. **신뢰할 수 있는 폴더**: 프로젝트 폴더를 신뢰함으로 설정
2. **제한된 접근**: 중요한 시스템 파일이 있는 경우 주의
3. **코드 실행 권한**: 의심스러운 코드 실행 시 확인 요청

### Claude Code 명령어 입력창 특성

Claude Code의 터미널은 일반 터미널과 다른 특성이 있습니다:

1. **텍스트 선택 및 삭제**
   - 일반적인 선택 후 백스페이스가 작동하지 않음
   - 전체 선택 (Ctrl+A) 미지원

2. **줄바꿈**
   - Shift+Enter, Ctrl+Enter 작동 안 함
   - 줄바꿈 방법: `\` (백슬래시) + Enter

3. **복사/붙여넣기**
   - 우클릭으로 붙여넣기
   - Ctrl+V는 상황에 따라 작동하지 않을 수 있음

### Claude Code Assistant 확장 프로그램

챗과장님이 개발한 확장 프로그램으로 위의 불편함을 해결:

1. **설치 방법**
   - VS Code 마켓플레이스에서 "챗과장" 검색
   - "Claude Code Assistant" 설치

2. **주요 기능**
   - 일반적인 텍스트 입력창 제공
   - Ctrl+Enter로 명령 전송
   - Clear 버튼으로 양쪽 창 모두 지우기
   - 파일/폴더를 Windows 탐색기처럼 찾기
   - Auto Mode 버튼으로 자동 승인 모드 전환

### WSL 환경에서 프로젝트 폴더 관리

1. **F1 또는 Ctrl+Shift+P로 명령 팔레트 열기**
   - "WSL: Open Folder in WSL" 선택
   - 원하는 프로젝트로 이동

2. **로컬 표시 활용 (초보자용)**
   - VS Code 좌측 하단 "WSL: Ubuntu" 클릭
   - "Open Folder in Windows" 선택
   - Windows 탐색기에서 프로젝트 선택
   - 다시 WSL 연결하여 사용

3. **프로젝트 간 이동 팁**
   - WSL 연결 유지하면서 프로젝트 변경 가능
   - 명령 팔레트의 "WSL: Open Folder" 사용 권장

### 효과적인 사용 팁

1. **프로젝트 디렉토리에서 실행**: 더 정확한 컨텍스트 이해
2. **명확한 지시**: 구체적이고 명확한 자연어 명령 사용
3. **단계별 작업**: 복잡한 작업은 단계별로 나누어 요청
4. **코드 검토**: AI가 생성한 코드는 항상 검토 후 사용
5. **작업 환경 최적화**: 터미널 위치, 단축키 등을 개인 취향에 맞게 설정

## 문제 해결

### 일반적인 오류 및 해결방법

#### 1. "Claude Code is not supported on Windows" 오류

**원인**: Windows 터미널에서 직접 실행
**해결**: WSL Ubuntu 터미널에서 실행

```bash
# Windows Terminal에서 WSL 실행
wsl
# 또는
ubuntu
```

#### 2. npm 권한 오류

**원인**: sudo로 설치하거나 권한 설정 문제
**해결**: 

```bash
# NPM 캐시 정리
npm cache clean --force

# 전역 디렉토리 재설정
rm -rf ~/.npm-global
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# 재설치
npm install -g @anthropic-ai/claude-code
```

#### 3. API 키 인식 오류

**원인**: 환경 변수 설정 문제
**해결**:

```bash
# API 키 확인
echo $ANTHROPIC_API_KEY

# 직접 export
export ANTHROPIC_API_KEY="sk-ant-..."

# 영구 설정
nano ~/.bashrc
# 파일 끝에 추가: export ANTHROPIC_API_KEY="your-key"
```

#### 4. WSL 성능 문제

**원인**: Windows 파일시스템 사용
**해결**: WSL 네이티브 파일시스템 사용

```bash
# 나쁨: Windows 드라이브에서 작업
cd /mnt/c/Users/username/project

# 좋음: WSL 홈 디렉토리에서 작업
cd ~/project
```

#### 5. "exec: node: not found" 오류

**원인**: Windows Node.js를 사용하는 경우
**해결**:

```bash
# Node.js 경로 확인
which node  # /usr/bin/node 이어야 함 (/mnt/c/ 경로면 오류)
which npm   # /usr/bin/npm 이어야 함

# WSL 내에서 Node.js 재설치
sudo apt remove nodejs npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

#### 5-1. OS/플랫폼 감지 문제

**원인**: WSL이 Windows npm을 사용하는 경우
**해결**:

```bash
# 강제 설치 옵션 사용 (sudo 사용하지 않음)
npm install -g @anthropic-ai/claude-code --force --no-os-check
```

#### 6. WSL 네트워크 문제

**원인**: Windows 방화벽 또는 VPN
**해결**:

```bash
# DNS 설정 확인
cat /etc/resolv.conf

# DNS 수동 설정
sudo sh -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
```

#### 7. 완전 제거 후 재설치

```bash
# 실패한 설치 완전 제거
sudo rm -rf /mnt/c/Users/[사용자명]/AppData/Roaming/npm/node_modules/@anthropic-ai/claude-code
sudo rm -rf /usr/lib/node_modules/@anthropic-ai/claude-code

# 설정 초기화 후 재설치
npm config delete prefix
# 위의 설치 단계 다시 수행
```

### WSL 완전 삭제 및 재설치

WSL 자체에 문제가 있거나 완전히 새로 시작하고 싶을 때 사용하는 방법입니다. GUI와 PowerShell 두 가지 방법을 모두 제공합니다.

> **🔴 중요**: WSL 삭제는 일반 프로그램 제거와 다릅니다. 반드시 다음 순서를 지켜야 합니다:
> 1. Linux 배포판 삭제
> 2. WSL 추가 구성 요소 제거
> 3. Windows 기능 비활성화

#### 방법 1: GUI를 통한 삭제 (Windows 11)

##### 1. 설치된 Linux 배포판 제거
1. **설정** 앱 열기 (Win + I)
2. **앱** > **설치된 앱** 이동
3. 설치된 각 Linux 배포판 찾기 (Ubuntu, Debian 등)
4. 배포판 옆의 메뉴 버튼(⋮) 클릭
5. **제거** 선택
6. 모든 Linux 배포판에 대해 반복

##### 2. WSL 구성 요소 제거
1. **설정** > **앱** > **설치된 앱**에서 다음 항목들을 찾아 제거:
   - **Windows Subsystem for Linux**
   - **Windows Subsystem for Linux Update**
   - **Windows Subsystem for Linux WSLg Preview**

또는 PowerShell을 **관리자 권한**으로 실행:
```powershell
# WSL 패키지 완전 제거
Get-AppxPackage MicrosoftCorporationII.WindowsSubsystemForLinux | Remove-AppxPackage
```

##### 3. Windows 기능 비활성화
1. **설정** > **시스템** > **선택적 기능**
2. **더 많은 Windows 기능** 클릭
3. 다음 항목의 체크 해제:
   - **Linux용 Windows 하위 시스템**
   - **가상 머신 플랫폼**
4. **확인** 클릭
5. 시스템 재시작

#### 방법 2: PowerShell을 통한 삭제 (전체 과정)

##### 1. WSL 배포판 목록 확인

PowerShell을 **관리자 권한**으로 실행하고 다음 명령을 입력합니다:

```powershell
# 설치된 WSL 배포판 목록 확인
wsl --list --verbose
```

##### 2. WSL 배포판 삭제

```powershell
# 특정 배포판 삭제 (예: Ubuntu-22.04)
wsl --unregister Ubuntu-22.04

# 또는 모든 배포판 삭제
wsl --unregister Ubuntu
wsl --unregister Ubuntu-20.04
# 목록에 나온 모든 배포판에 대해 반복
```

##### 3. WSL 구성 요소 제거

```powershell
# WSL 패키지 완전 제거
Get-AppxPackage MicrosoftCorporationII.WindowsSubsystemForLinux | Remove-AppxPackage
```

##### 4. WSL 관련 Windows 기능 비활성화

```powershell
# Windows 기능 비활성화
dism.exe /online /disable-feature /featurename:Microsoft-Windows-Subsystem-Linux /norestart
dism.exe /online /disable-feature /featurename:VirtualMachinePlatform /norestart

# Windows 10의 경우 추가 명령어 (선택사항)
Remove-WindowsFeature Microsoft-Windows-Subsystem-Linux

# 시스템 재부팅
Restart-Computer
```

##### 5. WSL 관련 폴더 삭제

재부팅 후 PowerShell(관리자)에서 실행:

```powershell
# WSL 관련 폴더 삭제
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Packages\CanonicalGroupLimited*"
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Packages\*Ubuntu*"

# WSL 캐시 정리
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Lxss" -ErrorAction SilentlyContinue
```

##### 6. 파일 탐색기에서 Linux 항목 제거 (선택사항)

파일 탐색기 왼쪽 패널에 Linux 항목이 남아있는 경우:

```powershell
# 레지스트리 편집기 열기
regedit

# 다음 경로로 이동하여 Linux 관련 항목 삭제
# HKEY_CURRENT_USER\Software\Classes\CLSID\{B2B4A4D1-2754-4140-A2EB-9A76D9D7CDC6}
```

> **⚠️ 주의**: 레지스트리 편집은 시스템에 영향을 줄 수 있으므로 주의하세요.

#### WSL 재설치

##### 1. Windows 기능 다시 활성화

```powershell
# Windows 기능 다시 활성화
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# 시스템 재부팅
Restart-Computer
```

##### 2. WSL 새로 설치

재부팅 후:

```powershell
# WSL 업데이트
wsl --update

# WSL 2를 기본으로 설정
wsl --set-default-version 2

# Ubuntu 설치
wsl --install -d Ubuntu-22.04

# 설치 확인
wsl --list --verbose
```

#### 백업 및 복원 (선택사항)

삭제하기 전에 중요한 데이터를 백업하려면:

```powershell
# WSL 배포판 내보내기 (백업)
wsl --export Ubuntu-22.04 C:\WSL-backup\ubuntu-backup.tar

# 나중에 복원하기
wsl --import Ubuntu-22.04 C:\WSL\Ubuntu C:\WSL-backup\ubuntu-backup.tar
```

> **⚠️ 중요 주의사항**: 
> - **삭제 순서가 중요합니다**: 반드시 위 단계를 순서대로 진행하세요
> - WSL을 완전히 삭제하면 모든 Linux 파일과 설정이 삭제됩니다
> - 중요한 프로젝트나 설정이 있다면 반드시 백업하세요
> - Windows 업데이트가 진행 중이면 완료될 때까지 기다리세요
> - 각 단계 후 재부팅이 필요한 경우 반드시 재부팅하세요
> - GUI 방법이 작동하지 않으면 PowerShell 방법을 사용하세요

#### WSL 완전 삭제 체크리스트

**삭제 전 준비:**
- [ ] 중요 데이터 백업 완료
- [ ] Windows 업데이트 상태 확인

**삭제 과정:**
- [ ] 모든 Linux 배포판 제거 (wsl --unregister)
- [ ] WSL 구성 요소 제거 (설정 앱 또는 PowerShell)
- [ ] Windows 기능 비활성화 (WSL, Virtual Machine Platform)
- [ ] 시스템 재부팅
- [ ] WSL 관련 폴더 삭제
- [ ] 파일 탐색기의 Linux 항목 확인 및 제거

**재설치 과정:**
- [ ] Windows 기능 활성화
- [ ] 시스템 재부팅
- [ ] wsl --update 실행
- [ ] wsl --install 실행

## 빠른 설치 가이드 (초보자용)

챗과장님의 YouTube 영상을 기반으로 한 5분 설치 가이드입니다:

### 단계별 빠른 설치

1. **PowerShell 관리자 권한 실행**
   - Windows 시작 버튼 클릭
   - "PowerShell" 검색
   - **반드시 관리자 권한으로 실행**

2. **WSL 설치**
   ```powershell
   wsl --install
   ```
   - 첫 설치 시 중간에 멈출 수 있음 (정상)
   - **컴퓨터 재부팅 필요**

3. **재부팅 후 WSL 설치 완료**
   ```powershell
   # 재부팅 후 PowerShell 관리자 권한으로 다시 실행
   wsl --install
   ```
   - 이번에는 Ubuntu가 정상적으로 설치됨

4. **Ubuntu 계정 생성**
   - 아이디 입력 (소문자, 숫자만 사용)
   - 비밀번호 입력 (화면에 표시되지 않음 - 정상)
   - 비밀번호 확인
   - **팁**: 아이디 입력창이 안 나타나면 `wsl` 입력

5. **마법의 명령어 (Node.js + Claude Code 한 번에 설치)**
   ```bash
   # WSL Ubuntu 터미널에서 실행 (영상 설명란에서 복사)
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt update && sudo apt install -y nodejs
   sudo npm install -g @anthropic-ai/claude-code
   ```
   - 터미널에서 우클릭으로 붙여넣기
   - 계정 비밀번호 입력

6. **Claude Code 실행**
   ```bash
   claude
   ```

7. **로그인 및 인증**
   - 유료 구독자: 옵션 1 선택 (권장)
   - API 사용자: 옵션 2 선택
   - 브라우저 자동 열림 또는 Ctrl+클릭으로 링크 열기
   - 승인 후 코드 복사
   - 터미널로 돌아가서 우클릭으로 붙여넣기

8. **첫 실행 완료**
   - 폴더 신뢰 여부 선택
   - Claude Code 사용 준비 완료

> **✅ 완료!** 이제 Claude Code를 사용할 수 있습니다.

### Claude Code를 선택해야 하는 이유

1. **뛰어난 코딩 성능**
   - Claude 모델의 우수한 코딩 능력
   - Anthropic에서 코딩 전용으로 개발
   - 전 세계적으로 극찬받는 성능

2. **압도적인 가성비**
   - Claude Max 플랜 ($100/월) 사용 시
   - API 사용 시 월 $200+ 비용이 $100로 절약
   - 많은 사용자는 월 $400+ 절약 효과

## 고급 설정 및 팁

### 1. Visual Studio Code 연동

#### 기본 연동 방법

```bash
# VSCode 서버 설치 (WSL에서)
code .

# Windows에서 VSCode 실행 후 WSL 확장 설치
```

#### 고급 VS Code 설정 (챗과장님 추천)

1. **WSL 확장 프로그램 설치 및 연결**
   ```
   - VS Code에서 "WSL" 확장 프로그램 설치
   - 좌측 하단 "Open a Remote Window" 클릭
   - "Connect to WSL" 선택
   ```

2. **Claude Code 확장 프로그램 자동 설치**
   - WSL 환경에서 터미널 열기
   - `claude` 명령 실행
   - Claude Code 확장 프로그램이 자동으로 설치됨
   - **주의**: Claude Code 확장은 마켓플레이스에서 검색되지 않음

3. **IDE 연동의 장점**
   - **Diff Viewer**: 코드 변경사항을 터미널이 아닌 VS Code의 Diff View에서 확인
   - **선택 컨텍스트**: 코드 선택 시 자동으로 Claude에 참조
   - **진단 공유**: 오류나 경고가 Claude와 자동 공유되어 더 정확한 해결책 제시
   - **통합 환경**: VS Code의 모든 기능과 Claude Code 동시 사용

4. **터미널 위치 커스터마이징**
   ```
   - 터미널 빈 공간에서 우클릭
   - "패널 위치" 선택
   - "오른쪽" 클릭 (Cursor처럼 오른쪽에 배치)
   ```

### 2. Windows Terminal 커스터마이징

1. Windows Terminal 설정 열기 (Ctrl+,)
2. Ubuntu 프로필 선택
3. 시작 디렉토리 설정: `"startingDirectory": "//wsl$/Ubuntu/home/username"`
4. 터미널 테마 및 폰트 최적화

### 3. WSL과 Windows 간 파일 공유 완벽 가이드

#### Windows에서 WSL 파일 접근하기
```bash
# 파일 탐색기 주소창에 입력
\\wsl$\Ubuntu\home\username

# 또는 네트워크 위치에서 접근
# 이 PC > 네트워크 > Ubuntu
```

#### WSL에서 Windows 파일 접근하기 (/mnt 명령어 완벽 이해)

##### 기본 개념
WSL에서는 Windows의 모든 드라이브가 `/mnt/` 폴더 아래에 **마운트**됩니다.

> **📝 마운트란?** 
> Windows의 파일 시스템을 Linux 환경에서 사용할 수 있도록 "연결"하는 것입니다.

##### Windows 드라이브와 WSL 경로 대응표

| Windows 경로 | WSL에서의 경로 | 설명 |
|---|---|---|
| `C:\` | `/mnt/c/` | C 드라이브 (메인 시스템) |
| `D:\` | `/mnt/d/` | D 드라이브 (추가 드라이브) |
| `E:\` | `/mnt/e/` | E 드라이브 (USB 등) |

##### 자주 사용하는 Windows 폴더 접근 예시

```bash
# 바탕화면 접근
cd /mnt/c/Users/[Windows사용자명]/Desktop
ls  # 바탕화면 내용 확인

# 문서 폴더 접근
cd /mnt/c/Users/[Windows사용자명]/Documents

# 다운로드 폴더 접근
cd /mnt/c/Users/[Windows사용자명]/Downloads

# 프로그램 파일 접근
cd /mnt/c/Program\ Files
# 또는 따옴표 사용
cd "/mnt/c/Program Files"
```

##### 사용자명 찾기

자신의 Windows 사용자명을 모르는 경우:
```bash
# Users 폴더 목록 확인
ls /mnt/c/Users/
# 결과 예시: Administrator  Default  Public  [Windows사용자명]

# 또는 현재 Windows 사용자 확인
echo $USER  # WSL 사용자명 (보통 Windows와 다름)
```

##### 주의사항 및 팁

**1. 경로에 공백이 있는 경우**
```bash
# 잘못된 방법 (오류 발생)
cd /mnt/c/Program Files

# 올바른 방법
cd "/mnt/c/Program Files"  # 따옴표 사용
# 또는
cd /mnt/c/Program\ Files  # 백슬래시로 이스케이프
```

**2. 대소문자 구분**
```bash
# Windows는 대소문자를 구분하지 않지만,
# WSL에서는 정확히 입력해야 합니다

# 올바른 방법
cd /mnt/c/Users/YourName/Desktop

# 잘못된 방법
cd /mnt/c/users/yourname/desktop  # 소문자로 쓰면 오류
```

**3. 단축키 설정**
```bash
# .bashrc에 자주 사용하는 경로 단축키 추가
echo 'alias windesktop="cd /mnt/c/Users/[Windows사용자명]/Desktop"' >> ~/.bashrc
echo 'alias windocs="cd /mnt/c/Users/[Windows사용자명]/Documents"' >> ~/.bashrc
echo 'alias windown="cd /mnt/c/Users/[Windows사용자명]/Downloads"' >> ~/.bashrc
source ~/.bashrc

# 사용 예시
windesktop  # 바탕화면으로 이동
windocs     # 문서 폴더로 이동
```

##### 실전 예시: Claude Code 프로젝트를 Windows 폴더에 만들기

```bash
# 1. Windows 문서 폴더에 프로젝트 디렉토리 생성
cd /mnt/c/Users/[Windows사용자명]/Documents
mkdir claude-projects
cd claude-projects

# 2. 구체적인 프로젝트 생성
mkdir my-web-app
cd my-web-app

# 3. Claude Code 실행
claude

# 4. Windows에서도 동시에 파일 확인 가능
# Windows 탐색기에서: C:\Users\[Windows사용자명]\Documents\claude-projects\my-web-app
```

##### 성능 고려사항

> **⚠️ 중요**: Windows 파일 시스템에서 작업하면 속도가 느려집니다!

**빠른 성능을 위해**:
```bash
# 권장: WSL 내부 파일 시스템 사용
~/projects/my-app  # 빠름 ✅

# 피해야 할 경우: Windows 파일 시스템 직접 사용
/mnt/c/Users/.../my-app  # 느림 ❌
```

**언제 Windows 폴더를 사용하나요?**
- Windows 애플리케이션과 파일 공유가 필요한 경우
- 기존 Windows 프로젝트를 수정하는 경우
- 백업이나 연동이 필요한 경우

##### 고급 활용 시나리오

**시나리오 1: 기존 Windows 프로젝트를 Claude Code로 수정**
```bash
# Windows 프로젝트 폴더로 이동
cd /mnt/c/Users/YourName/Documents/my-existing-project

# Claude Code 시작
claude

# 프로젝트 분석 및 개선 사항 요청
"summarize this project"
"/init"  # 프로젝트 초기화
```

**시나리오 2: WSL에서 새 프로젝트 생성 후 Windows와 동기화**
```bash
# WSL 내부에서 빠른 개발
cd ~/projects
mkdir new-app && cd new-app
claude

# 개발 완료 후 Windows로 복사
cp -r ~/projects/new-app /mnt/c/Users/YourName/Documents/
```

### 4. MCP 서버 설정

#### 기본 MCP 설정
```bash
# .claude/config.json 생성
mkdir -p ~/.claude
cat > ~/.claude/config.json << EOF
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/username/projects"]
    }
  }
}
EOF
```

#### YouTube MCP 서버 설치 및 설정

**ZubeidHendricks/youtube-mcp-server**는 YouTube 동영상 내용 분석에 특화된 고급 MCP 서버입니다.

##### 설치 방법

**방법 1: 자동 설치 (권장)**
```bash
npx -y @smithery/cli install @ZubeidHendricks/youtube --client claude
```

**방법 2: 수동 설치**
```bash
# 전역 설치
npm install -g zubeid-youtube-mcp-server

# 설치 확인
which zubeid-youtube-mcp-server
```

##### MCP 설정 파일 업데이트

기존 `~/.claude/mcp.json` 파일에 YouTube MCP 서버 추가:

```bash
# 설정 파일 편집
nano ~/.claude/mcp.json
```

```json
{
  "mcpServers": {
    // ... 기존 MCP 서버들 ...
    "youtube": {
      "command": "zubeid-youtube-mcp-server",
      "args": []
    }
  }
}
```

> **💡 참고**: YouTube API 키가 필요한 경우 `env` 섹션에 `"YOUTUBE_API_KEY": "your-api-key"` 추가

##### 연결 확인 및 사용법

```bash
# Claude Code 시작
claude

# MCP 서버 목록 확인
/mcp

# YouTube MCP 사용 예시
"YouTube 동영상 https://youtu.be/... 의 내용을 상세히 분석해주세요"
"이 동영상의 전체 트랜스크립트를 추출하고 주요 섹션별로 정리해주세요"
"동영상에서 언급된 모든 기술 용어와 개념을 추출해주세요"
```

##### YouTube MCP 주요 기능

1. **동영상 상세 정보 추출**: 제목, 설명, 재생시간, 조회수 등
2. **트랜스크립트 추출**: 정확한 자막 내용 및 타임스탬프
3. **채널 분석**: 채널 정보, 동영상 목록, 애널리틱스
4. **플레이리스트 관리**: 플레이리스트 내용 분석
5. **고급 검색**: 키워드 기반 동영상 검색

##### 문제 해결

**YouTube MCP가 목록에 나타나지 않는 경우:**
```bash
# 1. 설치 상태 확인
which zubeid-youtube-mcp-server
npm list -g | grep youtube

# 2. 설정 파일 구문 검증
cat ~/.claude/mcp.json | python -m json.tool

# 3. Claude Code 재시작 필요
```

### 5. 성능 최적화

Windows 사용자 폴더에 `.wslconfig` 파일 생성:

```ini
# C:\Users\YourUsername\.wslconfig
[wsl2]
memory=4GB
processors=2
swap=8GB
localhostForwarding=true
```

### 6. 터미널 환경 최적화

```bash
# .bashrc에 유용한 별칭 추가
echo 'alias ll="ls -la"' >> ~/.bashrc
echo 'alias c="clear"' >> ~/.bashrc
echo 'alias ..="cd .."' >> ~/.bashrc
source ~/.bashrc
```

### 7. Obsidian과 WSL 연동

Windows에서 Obsidian을 사용하면서 WSL의 Claude Code와 함께 작업하는 방법입니다.

> **⚠️ 중요 제한사항**: 현재 Windows 버전의 Obsidian은 WSL 파일시스템(`\\wsl$\` 경로)의 vault를 직접 열 수 없습니다. 이는 알려진 제한사항으로, 아래의 대안 방법들을 사용해야 합니다.

#### Obsidian Vault 위치 설정

##### 옵션 1: Windows 파일시스템 사용 (가장 안정적)
Windows와 WSL 모두에서 접근 가능한 위치에 Vault를 생성합니다:

```bash
# WSL에서 Windows Documents 폴더 접근
cd /mnt/c/Users/[YourWindowsUsername]/Documents

# Obsidian Vault 폴더 생성
mkdir -p "Obsidian Vault"

# 심볼릭 링크 생성 (WSL 홈에서 쉽게 접근)
ln -s "/mnt/c/Users/[YourWindowsUsername]/Documents/Obsidian Vault" ~/obsidian-vault
```

**장점**:
- Windows Obsidian에서 정상 작동
- WSL에서도 접근 가능
- 파일 동기화 문제 없음

**단점**:
- WSL에서 `/mnt/c` 경로 접근 시 성능 저하
- 대용량 파일 처리 시 속도 느림

##### 옵션 2: WSL 내부에 Obsidian 설치 (최고 성능)
WSL 내부에 Obsidian을 직접 설치하여 GUI로 실행합니다:

**사전 요구사항**:
- Windows 11 또는 Windows 10 빌드 19044+ (WSLg 지원)
- WSL 2 사용 중 (확인: `wsl -l -v`)

```bash
# WSL 업데이트 (PowerShell 관리자 권한에서 실행)
# wsl --update

# 1. 최신 Obsidian .deb 파일 다운로드 (Ubuntu/Debian)
deb_link=$(curl -s https://obsidian.md/download | \
  grep -o "https://github[^0-9]*/v[0-9]\.[0-9]\.[0-9]/obsidian_[0-9]\.[0-9]\.[0-9]_amd64.deb")

# 다운로드
wget $deb_link

# 파일명 확인
deb_filename=$(ls | grep obsidian_[0-9]\.[0-9]\.[0-9]_amd64.deb)

# 2. 필수 패키지 설치
sudo apt update

# 중요: libfuse2 설치 (Ubuntu 22.04+에서 필수)
sudo apt install -y libfuse2

# GUI 라이브러리 설치
sudo apt install -y libgtk-3-0 libnotify4 libnss3 libxss1 libxtst6 \
  xdg-utils libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libxkbcommon0 libxrandr2

# 3. Obsidian 설치
sudo apt-get install -y ./$deb_filename

# 4. WSL 홈 디렉토리에 Vault 생성
mkdir -p ~/ObsidianVault

# 5. GUI 가속 설정 (선택사항, 성능 향상)
echo 'export LIBGL_ALWAYS_INDIRECT=0' >> ~/.bashrc
source ~/.bashrc

# 6. Obsidian 실행
obsidian

# 실행이 안 될 경우 터미널에서 직접 실행
# /opt/Obsidian/obsidian
```

**AppImage 방식 (권장 - 더 안정적)**
```bash
# AppImage 다운로드
wget $(curl -s https://api.github.com/repos/obsidianmd/obsidian-releases/releases/latest | \
  grep "browser_download_url.*AppImage" | grep -v "arm64" | cut -d : -f 2,3 | tr -d \")

# 실행 권한 부여
chmod +x Obsidian-*.AppImage

# Obsidian Vault 디렉토리 생성
mkdir -p ~/ObsidianVault
chmod 755 ~/ObsidianVault

# 기본 Obsidian 설정 디렉토리 생성
mkdir -p ~/ObsidianVault/.obsidian

# 기본 설정 파일 생성
cat > ~/ObsidianVault/.obsidian/app.json << 'EOF'
{
  "legacyEditor": false,
  "livePreview": true,
  "showLineNumber": true,
  "spellcheck": false,
  "foldHeading": true,
  "foldIndent": true
}
EOF

# 환영 노트 생성
cat > ~/ObsidianVault/Welcome.md << 'EOF'
# Welcome to Your Obsidian Vault

이 Vault는 Claude Code와 연동하여 사용할 수 있도록 설정되었습니다.

## 시작하기
1. **새 노트 만들기**: `[[노트 이름]]` 형식으로 링크를 만들면 새 노트가 생성됩니다.
2. **태그 사용하기**: `#tag` 형식으로 태그를 추가할 수 있습니다.
3. **백링크 확인**: 다른 노트에서 이 노트를 참조하는 내용을 볼 수 있습니다.

## Claude Code 연동
- Vault 경로: `~/ObsidianVault/`
- Claude Code에서 Read/Write 도구로 노트를 읽고 편집할 수 있습니다.

#welcome #claude-code
EOF

# Obsidian 실행 (sandbox 오류 방지)
./Obsidian-*.AppImage --no-sandbox

# 백그라운드 실행 (터미널 계속 사용 가능)
# ./Obsidian-*.AppImage --no-sandbox &
```

**쉬운 실행을 위한 별칭 설정**:
```bash
# .bashrc에 별칭 추가
echo 'alias obsidian="~/Obsidian-*.AppImage --no-sandbox"' >> ~/.bashrc
source ~/.bashrc

# 이후 간단히 실행
obsidian
```

**장점**:
- WSL 파일시스템에서 최고 성능
- Windows Start 메뉴에 자동 추가
- 파일 권한 문제 없음

**단점**:
- WSLg 지원 필요 (Windows 11 또는 Windows 10 빌드 19044+)
- WSL 파일시스템의 vault는 Windows Obsidian에서 열 수 없음
- libfuse2 의존성 문제 가능성

**일반적인 문제 해결**:

1. **PowerShell에서 실행 오류**:
   ```
   './Obsidian-1.8.10.AppImage' 용어가 cmdlet으로 인식되지 않습니다
   ```
   - **원인**: PowerShell이나 CMD에서 실행
   - **해결**: WSL Ubuntu 터미널에서 실행해야 함

2. **Sandbox 오류**:
   ```
   The SUID sandbox helper binary was found, but is not configured correctly
   ```
   - **해결**: `--no-sandbox` 옵션 사용
   - **명령**: `./Obsidian-*.AppImage --no-sandbox`

3. **GUI가 나타나지 않음**:
   ```bash
   # DISPLAY 환경 변수 확인
   echo $DISPLAY  # :0 또는 :1이 표시되어야 함
   
   # WSL 버전 확인 (WSL 2 필요)
   wsl -l -v
   
   # WSLg 지원 확인
   which xdg-open  # /usr/bin/xdg-open이 있어야 함
   ```

4. **권한 문제**:
   ```bash
   # 실행 권한 확인
   ls -la Obsidian-*.AppImage  # -rwxr-xr-x로 시작해야 함
   
   # 권한 부여
   chmod +x Obsidian-*.AppImage
   ```

5. **libfuse2 의존성 오류**:
   ```bash
   # Ubuntu 22.04 이하
   sudo apt install libfuse2
   
   # Ubuntu 24.04
   sudo apt install libfuse2t64
   ```

##### 옵션 3: 하이브리드 접근 (고급)
중요한 노트는 Windows에, 임시 파일은 WSL에 저장:

```bash
# Windows에 주요 Vault 생성
mkdir -p "/mnt/c/Users/[YourWindowsUsername]/Documents/Obsidian Vault"

# WSL에 작업용 임시 Vault 생성
mkdir -p ~/obsidian-temp

# 동기화 스크립트 생성
cat > ~/sync-obsidian.sh << 'EOF'
#!/bin/bash
# 중요 노트만 Windows로 복사
rsync -av --include="*.md" --exclude=".*" \
  ~/obsidian-temp/ "/mnt/c/Users/[YourWindowsUsername]/Documents/Obsidian Vault/WSL-Notes/"
EOF

chmod +x ~/sync-obsidian.sh
```

> **💡 Microsoft 공식 권장사항**: "운영 체제 간 파일 작업은 성능에 영향을 줍니다. 특별한 이유가 없다면 피하는 것이 좋습니다." - 가능하면 한 OS에서만 작업하세요.

#### Claude Code와 Obsidian 연동 워크플로우

##### 1. Obsidian Vault 설정 완료 확인
```bash
# Vault 위치 확인
ls -la ~/ObsidianVault/

# 기본 노트들 확인
ls ~/ObsidianVault/*.md
# Welcome.md가 표시되어야 함
```

##### 2. Claude Code로 노트 읽기/쓰기
```bash
# Claude Code에서 Read 도구 사용
# 파일 경로: /home/[username]/ObsidianVault/파일명.md

# 예시: 새 프로젝트 노트 생성
cat > ~/ObsidianVault/프로젝트아이디어.md << 'EOF'
# React 프로젝트 아이디어

## 목표
- [ ] React 앱 생성
- [ ] 사용자 인증 구현  
- [ ] 데이터베이스 연결

## 기술 스택
- Frontend: React, TypeScript
- Backend: Node.js, Express
- Database: PostgreSQL

#project #react #development
EOF
```

##### 3. Claude Code에서 노트 읽고 작업
```bash
# 노트 내용 확인
cat ~/ObsidianVault/프로젝트아이디어.md

# Claude Code 실행하여 프로젝트 시작
cd ~/projects
claude

# Claude에게 지시 예시:
# "~/ObsidianVault/프로젝트아이디어.md 노트를 읽고 React 프로젝트를 생성해주세요"
```

##### 4. 작업 결과를 Obsidian에 자동 기록
```bash
# 개발 일지 노트 생성
cat > ~/ObsidianVault/개발일지.md << 'EOF'
# 개발 일지

## $(date '+%Y-%m-%d')
- React 프로젝트 초기 설정 완료
- 사용자 인증 컴포넌트 구현 시작
- 다음 단계: 데이터베이스 연결

#daily #log #development
EOF

# 또는 기존 파일에 추가
echo "## $(date '+%Y-%m-%d %H:%M')" >> ~/ObsidianVault/개발일지.md
echo "- $(date '+%H:%M') 프로젝트 작업 완료" >> ~/ObsidianVault/개발일지.md
```

#### Obsidian 플러그인 활용

##### 1. Obsidian Git 플러그인
WSL의 Git과 연동하여 자동 백업:

```bash
# Obsidian Vault를 Git 저장소로 초기화
cd ~/obsidian-vault
git init
git add .
git commit -m "Initial Obsidian vault"

# GitHub 원격 저장소 추가
git remote add origin https://github.com/username/obsidian-vault.git
git push -u origin main
```

##### 2. Templater 플러그인 활용
Claude Code 작업을 위한 템플릿 생성:

```markdown
---
title: <% tp.file.title %>
created: <% tp.date.now("YYYY-MM-DD") %>
tags: 
  - claude-code
  - development
---

## 프로젝트 개요
- **목적**: 
- **기술 스택**: 
- **Claude Code 명령**: 

## 작업 내역
### <% tp.date.now("YYYY-MM-DD HH:mm") %>
- 

## 코드 스니펫
\`\`\`javascript
// 생성된 코드
\`\`\`

## 참고 사항
- 
```

#### 파일 권한 및 동기화 문제 해결

##### 권한 문제 해결
```bash
# WSL에서 Windows 파일 권한 설정
cd /mnt/c/Users/[YourWindowsUsername]/Documents
# 주의: Windows 파일에 chmod를 사용해도 실제 권한은 변경되지 않을 수 있음

# WSL 설정 파일 확인 (기존 설정이 있는지 확인)
if [ -f /etc/wsl.conf ]; then
    cat /etc/wsl.conf
fi

# WSL 자동 마운트 옵션 설정 (신중하게 진행)
sudo bash -c 'cat > /etc/wsl.conf << EOF
[automount]
enabled = true
options = "metadata,umask=22,fmask=11"
mountFsTab = false

[interop]
enabled = true
appendWindowsPath = true
EOF'

# WSL 재시작 필요
# PowerShell에서: wsl --shutdown
# 그 후 WSL 다시 시작
```

> **⚠️ 주의**: `/etc/wsl.conf` 수정 후 반드시 WSL을 재시작해야 설정이 적용됩니다. `metadata` 옵션은 Linux 권한을 Windows 파일에 저장할 수 있게 하지만, 모든 Windows 애플리케이션이 이를 존중하지는 않습니다.

##### 실시간 동기화 설정
```bash
# inotify 도구 설치 (파일 변경 감지)
sudo apt install inotify-tools

# 파일 변경 시 자동 동기화 스크립트
cat > ~/sync-obsidian.sh << 'EOF'
#!/bin/bash
VAULT_PATH="/mnt/c/Users/[YourWindowsUsername]/Documents/Obsidian Vault"
inotifywait -m -r -e modify,create,delete "$VAULT_PATH" |
while read path action file; do
    echo "Detected $action on $file"
    # 필요한 동기화 작업 수행
done
EOF

chmod +x ~/sync-obsidian.sh
```

#### 유용한 스크립트 및 별칭

```bash
# .bashrc에 Obsidian 관련 별칭 추가
cat >> ~/.bashrc << 'EOF'
# Obsidian 관련 별칭
alias obs="cd ~/ObsidianVault"
alias obsidian="~/Obsidian-*.AppImage --no-sandbox"
alias obsidian-bg="~/Obsidian-*.AppImage --no-sandbox &"

# 새 노트 생성 함수
obsidian-note() {
    local note_name="${1:-$(date +%Y-%m-%d)-note}"
    local note_path="~/ObsidianVault/${note_name}.md"
    cat > "$note_path" << EON
# $note_name

생성일: $(date '+%Y-%m-%d %H:%M')

## 내용



#note #$(date +%Y-%m-%d)
EON
    echo "노트 생성됨: $note_path"
}

# Claude Code 작업을 Obsidian에 기록하는 함수
claude-log() {
    local message="$1"
    local date=$(date '+%Y-%m-%d %H:%M')
    local log_file="~/ObsidianVault/Claude-Code-Log.md"
    
    # 로그 파일이 없으면 생성
    if [ ! -f "$log_file" ]; then
        cat > "$log_file" << EON
# Claude Code 작업 로그

## 작업 기록

EON
    fi
    
    echo "- [$date] $message" >> "$log_file"
    echo "로그 추가됨: $message"
}

# 프로젝트 시작 시 Obsidian 노트 자동 생성
start-project() {
    local project_name="$1"
    if [ -z "$project_name" ]; then
        echo "사용법: start-project <프로젝트명>"
        return 1
    fi
    
    local note_path="~/ObsidianVault/Projects/${project_name}.md"
    mkdir -p ~/ObsidianVault/Projects
    mkdir -p ~/projects
    
    cat > "$note_path" << EON
# $project_name

## 프로젝트 정보
- **생성일**: $(date '+%Y-%m-%d %H:%M')
- **경로**: ~/projects/$project_name
- **상태**: 🚀 시작

## 목표


## 기술 스택


## Claude Code 명령 기록


## 진행 상황
- [ ] 프로젝트 초기화
- [ ] 기본 구조 설정
- [ ] 개발 환경 구성

## 메모


#project #claude-code #active #$(date +%Y-%m-%d)
EON
    
    echo "Obsidian 노트 생성됨: $note_path"
    cd ~/projects && mkdir -p "$project_name" && cd "$project_name"
    
    # Claude Code 실행 여부 확인
    if command -v claude &> /dev/null; then
        echo "Claude Code를 실행하시겠습니까? (y/n)"
        read -r response
        if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
            claude
        fi
    else
        echo "Claude Code가 설치되지 않았습니다."
    fi
}

# Obsidian Vault 상태 확인
vault-status() {
    echo "=== Obsidian Vault 상태 ==="
    echo "위치: ~/ObsidianVault"
    echo "노트 수: $(find ~/ObsidianVault -name "*.md" | wc -l)"
    echo "최근 수정된 노트:"
    find ~/ObsidianVault -name "*.md" -type f -exec ls -lt {} + | head -5
}
EOF

source ~/.bashrc
```

#### 추천 Obsidian 설정

1. **파일 및 링크 설정**:
   - 설정 > 파일 및 링크 > 새 노트 기본 위치: "지정된 폴더"
   - 첨부 파일 폴더: "./attachments"

2. **편집기 설정**:
   - 설정 > 편집기 > 기본 편집 모드: "소스 모드" (코드 작업 시 유용)
   - Vim 키 바인딩 사용 (선택사항)

3. **커뮤니티 플러그인 추천**:
   - **Obsidian Git**: 자동 백업 및 버전 관리
   - **Templater**: 템플릿 자동화
   - **Dataview**: 프로젝트 상태 대시보드 생성
   - **Execute Code**: 노트 내에서 코드 실행

## 구현 체크리스트

### 기본 설치
- [ ] Windows 버전 확인 (Windows 10 2004 이상)
- [ ] PowerShell 관리자 권한으로 WSL 설치
- [ ] 시스템 재부팅
- [ ] Ubuntu 사용자 계정 생성
- [ ] 시스템 패키지 업데이트
- [ ] Node.js 설치 (NVM 사용)
- [ ] NPM 전역 디렉토리 설정
- [ ] Claude Code 설치
- [ ] Anthropic API 키 설정
- [ ] 첫 프로젝트 생성 및 테스트
- [ ] 기본 명령어 테스트 (how do I log an error?)
- [ ] 보안 및 신뢰 설정 확인

### 선택적 설정
- [ ] VSCode 연동 (Remote - WSL 확장 설치)
- [ ] MCP 서버 설정
- [ ] Obsidian 연동 방법 선택:
  - [ ] 옵션 1: Windows 파일시스템에 Vault 생성
  - [ ] 옵션 2: WSL에 Obsidian 설치 (**권장 - 초보자용**)
  - [ ] 옵션 3: 하이브리드 접근
- [ ] 파일 권한 문제 해결 (필요시)
- [ ] 동기화 스크립트 설정 (선택사항)

### Obsidian 초보자를 위한 빠른 시작 (5분 설정)

옵션 2를 사용한 가장 간단한 설정 방법:

```bash
# 1. AppImage 다운로드 및 설정 (한 번에 실행)
cd ~
wget $(curl -s https://api.github.com/repos/obsidianmd/obsidian-releases/releases/latest | grep "browser_download_url.*AppImage" | grep -v "arm64" | cut -d : -f 2,3 | tr -d \") && \
chmod +x Obsidian-*.AppImage && \
mkdir -p ~/ObsidianVault/.obsidian && \
echo '{"legacyEditor":false,"livePreview":true,"showLineNumber":true}' > ~/ObsidianVault/.obsidian/app.json

# 2. 환영 노트 생성
cat > ~/ObsidianVault/시작하기.md << 'EOF'
# Obsidian과 Claude Code 시작하기

## 첫 단계 완료! 🎉
- ✅ Obsidian 설치 완료
- ✅ Vault 생성 완료
- ✅ Claude Code 연동 준비 완료

## 다음 할 일
1. GUI에서 Obsidian 열기: `./Obsidian-*.AppImage --no-sandbox`
2. Vault 위치 선택: `/home/사용자명/ObsidianVault`
3. 첫 노트 만들기: [[새 노트]]

## Claude Code 사용법
- 노트 읽기: Read 도구에서 경로 `/home/사용자명/ObsidianVault/파일명.md`
- 노트 쓰기: Write 도구 사용

#시작 #가이드 #claude-code
EOF

# 3. 실행 별칭 설정
echo 'alias obsidian="~/Obsidian-*.AppImage --no-sandbox"' >> ~/.bashrc
source ~/.bashrc

echo "🎉 설정 완료! 이제 'obsidian' 명령어로 실행하세요!"
```

**첫 실행 방법**:
1. WSL Ubuntu 터미널에서 `obsidian` 입력
2. Vault 폴더로 `/home/사용자명/ObsidianVault` 선택
3. "Trust author and enable plugins" 클릭
4. 완료!

## 연결된 노트

- **상위 개념**: [[Claude Code 종합 가이드]]
- **하위 세부사항**: [[Claude Code 명령어 참조]]
- **병렬 주제**: [[Claude Code macOS 설치 가이드]]
- **실전 활용**: [[Claude Code 프로젝트 실습]]
- **관련 도구**: [[WSL 심화 가이드]]
- **문제 해결**: [[Claude Code 트러블슈팅]]

## 추가 리소스

- [Anthropic 공식 문서](https://docs.anthropic.com/en/docs/claude-code)
- [Claude Code 시작 가이드](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Claude Code CLI 참조](https://docs.anthropic.com/en/docs/claude-code/cli-usage)
- [WSL 공식 문서](https://docs.microsoft.com/en-us/windows/wsl/)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [YouTube 튜토리얼 - 공식](https://youtu.be/mo4OOCFy58c)
- [YouTube 튜토리얼 - 챗과장](https://youtu.be/J0IWxZXczxs)
- [챗과장 설치 가이드](https://principled-learning-2c9.notion.site/216dc93a597c80f6953ef4d048d55926)

---

**💡 Pro Tip**: 프로젝트 디렉토리에서 Claude Code를 실행하면 더 정확한 컨텍스트를 이해하고 도움을 제공합니다. 터미널 기반 워크플로우에 익숙해지면 GUI 없이도 효율적인 개발이 가능합니다.