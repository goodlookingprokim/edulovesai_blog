---
title: "클로드 코드(Claude Code) 윈도우 터미널 기반 사용 가이드"
date: 2025-06-18
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "클로드-코드-claude-code-윈도우-터미널-기반-사용-가이드"
category: "claude-code"
excerpt: "Anthropic 클로드 코드(Claude Code) 윈도우 터미널 기반 사용 가이드  1. *클로드 코드(Claude Code) 소개* - Anthropic이 2025년 5월 22일에 공개한 베타 버전 AI 코딩 도구 - 터미널(명령 프롬프트) 기반으로 동작하는 점이..."
tags:
  - claude-code
  - ai-coding
reading_time: 2
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

Anthropic 클로드 코드(Claude Code) 윈도우 터미널 기반 사용 가이드 
1. *클로드 코드(Claude Code) 소개*

- Anthropic이 2025년 5월 22일에 공개한 베타 버전 AI 코딩 도구
- 터미널(명령 프롬프트) 기반으로 동작하는 점이 특징
- 별도의 GUI 코드 에디터 없이 터미널에서 바로 AI 도움을 받을 수 있음

--- 2. *윈도우에서 바로 설치가 안 되는 이유*

- 클로드 코드는 macOS와 리눅스 환경을 공식 지원
- 윈도우에서는 직접 설치 시 에러가 발생하며, WSL(Windows Subsystem for Linux) 환경이 필요함

--- 3. *WSL(Windows Subsystem for Linux)란?*

- 윈도우 내에서 리눅스 환경을 실행할 수 있게 해주는 기능
- 윈도우의 명령 프롬프트나 PowerShell 대신 리눅스 터미널 명령어를 사용할 수 있음
- 클로드 코드를 윈도우에서 사용하려면 반드시 WSL 설치 후 리눅스 터미널에서 설치해야 함

--- 4. *WSL 설치 및 Ubuntu 배포판 설치 방법* 1. *WSL 활성화*

- Windows PowerShell(관리자 권한) 실행 후 명령어 입력:

`wsl --install`

- PC 재부팅 후 자동으로 최신 WSL과 Ubuntu 리눅스가 설치됨

2. *Ubuntu 초기 설정*

- 처음 Ubuntu 실행 시 UNIX 사용자 계정과 비밀번호 생성
- `shop2world` 같은 새로운 사용자명 입력 가능

--- 5. *WSL 내에서 Node.js와 npm 설치하기*

- 클로드 코드가 Node.js 기반이므로 WSL 리눅스 환경에 Node.js를 설치해야 함
- Ubuntu 터미널에서 다음 명령어 실행:

``` sudo apt update sudo apt install nodejs npm ```

- 설치 확인:

``` node -v npm -v ``` --- 6. *클로드 코드 설치*

- WSL 터미널에서 다음 명령어 실행:

``` npm install -g @anthropic-ai/claude-code ```

- 권한 문제 발생 시 `sudo` 명령어로 관리자 권한으로 실행:

``` sudo npm install -g @anthropic-ai/claude-code ``` --- 7. *클로드 코드 실행과 초기 로그인*

- 설치 후, WSL 터미널에서 `claude-code` 명령어로 실행
- 로그인 방법 선택:

- Max 구독 계정 로그인 (월 \$100부터)
- Anthropic Console 계정으로 API 사용량 기반 결제
- 웹 브라우저에서 인증 URL이 열리거나 직접 복사해 로그인 코드 입력

--- 8. *보안 및 신뢰 설정*

- 클로드 코드가 접근할 폴더 신뢰 여부 확인
- 신뢰하지 않는 코드 실행 시 주의 필요 (보안 문서 참고)

--- 9. *클로드 코드 사용법 기초*

- `/help` 입력 시 도움말 표시
- `/init` 명령으로 기본 설정 파일 생성 가능
- 터미널에서 파일 분석, 코드 수정, Bash 명령어 등 AI 지원 활용 가능
- 프로젝트 디렉토리에서 실행하면 더 좋은 결과

--- 10. *간단한 명령어 테스트*

- 예시:

``` how do I log an error? ```

- AI가 해당 질문에 맞는 코드 예시나 설명을 출력

--- 정리

- 윈도우에서 직접 설치 안 되고, 반드시 WSL 설치 후 리눅스 환경에서 설치 및 실행 필요
- Node.js 설치 및 권한 문제 해결이 중요
- 클로드 코드 터미널 환경에서 로그인 후 프로젝트 폴더에서 AI 코딩 지원을 받을 수 있음