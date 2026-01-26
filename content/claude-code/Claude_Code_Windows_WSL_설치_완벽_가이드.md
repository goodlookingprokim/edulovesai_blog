---
title: "Claude Code Windows WSL 설치 완벽 가이드"
created: '2025-01-06'
last_modified: '2025-01-06'
tags:
  - Claude/Code
  - Windows/WSL
  - 설치/가이드
  - 개발환경/설정
  - 바이브코딩/도구
status: "완료"
type: "가이드"
priority: "high"
share_link: ""
---

# Claude Code Windows WSL 설치 완벽 가이드

> **🚀 바이브 코딩의 필수 도구!** Windows에서 WSL을 통한 Claude Code 완벽 설치 및 설정 가이드

## 📋 목차
1. [[#설치 준비사항]]
2. [[#WSL 설치 과정]]
3. [[#개발 환경 구성]]
4. [[#Claude Code 설치]]
5. [[#인증 및 설정]]
6. [[#실전 사용법]]
7. [[#문제 해결]]
8. [[#고급 활용 팁]]

## 📊 설치 준비사항
- **핵심 주제**: Windows 환경에서 Claude Code 완벽 설치 가이드
- **목적**: WSL을 통한 안정적인 Claude Code 개발 환경 구축
- **범위**: 기본 설치부터 실전 활용까지
- **효과**: 바이브 코딩을 위한 최적화된 개발 환경

## 🔍 주요 내용

## 🛠️ WSL 설치 과정

**Windows Subsystem for Linux(WSL) 준비**
- **공식 문서**: Microsoft 공식 WSL 설치 가이드 참조
- **시스템 요구사항**: Windows 10 버전 2004 이상 또는 Windows 11
- **관리자 권한**: PowerShell 관리자 모드 실행 필수
- **재부팅**: 설치 완료 후 시스템 재시작 필요

**WSL 설치의 필요성**
- **호환성**: Claude Code의 Linux 환경 의존성
- **안정성**: Windows 네이티브 환경보다 안정적인 실행
- **개발 도구**: Linux 기반 개발 도구와의 완벽한 호환
- **성능**: 네이티브 Linux 환경과 유사한 성능

## ⚡ 개발 환경 구성

### 🚀 1단계: WSL 설치
**PowerShell 관리자 모드 실행**
1. **시작 메뉴**: Windows 키 + S로 검색
2. **PowerShell 검색**: "PowerShell" 검색 후 선택
3. **관리자 권한**: "관리자로 실행" 클릭
4. **UAC 승인**: 사용자 계정 컨트롤 승인

**WSL 설치 명령어**
```bash
wsl --install
```

**설치 과정의 특징**
- **자동 설치**: Ubuntu 배포판 자동 설치
- **기본 설정**: 최신 WSL2 커널 자동 설치
- **Virtual Machine Platform**: 필요한 Windows 기능 자동 활성화

### 🔧 2단계: 시스템 재시작 및 설정
**재부팅 후 초기 설정**
1. **자동 실행**: WSL Ubuntu 터미널 자동 실행
2. **사용자명 설정**: Unix 사용자명 입력 (영문 소문자 권장)
3. **비밀번호 설정**: UNIX 비밀번호 설정 (입력 시 화면에 표시되지 않음)
4. **설정 완료**: 기본 Ubuntu 환경 구성 완료

### 📦 3단계: 패키지 관리자 업데이트
**APT 패키지 관리자 업데이트**
```bash
sudo apt update
```

**업데이트 과정**
- **권한 확인**: sudo 명령어로 관리자 권한 실행
- **비밀번호 입력**: 앞서 설정한 UNIX 비밀번호 입력
- **보안 정책**: 입력 시 화면에 표시되지 않음 (정상 동작)
- **패키지 리스트**: 최신 패키지 정보 업데이트

## 🔧 Claude Code 설치

### 📦 Node.js 설치
**Node.js 설치 명령어**
```bash
# Node.js LTS 버전 설치
sudo apt install nodejs npm

# 설치 확인
node --version
npm --version
```

**설치 검증**
- **버전 확인**: node --version 명령어로 설치 확인
- **NPM 확인**: npm --version으로 패키지 매니저 확인
- **최신 버전**: LTS(Long Term Support) 버전 자동 설치

### ⚡ Claude Code 설치
**전역 설치 명령어**
```bash
# 권한 문제 발생 시
sudo npm install -g @anthropic/claude

# NPM 업데이트
sudo npm update -g npm

# 설치 확인
claude
```

**설치 문제 해결**
- **권한 오류**: sudo 명령어 사용으로 해결
- **Permission Denied**: 관리자 권한 부족 시 발생
- **네트워크 오류**: 인터넷 연결 상태 확인 필요

## 🔐 인증 및 설정

### 🎯 Claude 계정 연동
**초기 실행 및 설정**
```bash
claude
```

**테마 및 플랜 설정**
1. **테마 선택**: Dark mode/Light mode 선택 (기본: Dark mode 권장)
2. **플랜 선택**: 
   - Option 1: Claude 구독 플랜 (Pro/Team)
   - Option 2: Claude API 사용량 기반 (비용 높음)
3. **권장사항**: Claude Pro 구독 후 Option 1 선택

### 🌐 브라우저 인증
**웹 인증 프로세스**
1. **브라우저 자동 실행**: 인증 URL 자동 생성
2. **수동 접속**: 브라우저 실행 실패 시 URL 복사하여 수동 접속
3. **Claude 로그인**: 기존 Claude 계정으로 로그인
4. **계정 확인**: 연동할 계정 확인 및 승인
5. **승인 코드**: 생성된 인증 코드 복사
6. **터미널 입력**: 인증 코드를 터미널에 붙여넣기

### ⚠️ 보안 설정
**Prompt Injection 경고**
- **보안 위험**: AI가 악의적인 코드를 실행할 가능성
- **신뢰 확인**: 신뢰할 수 있는 프로젝트에서만 사용
- **권장사항**: 개인 프로젝트나 검증된 코드베이스에서 사용

## 🎯 실전 사용법

### 📁 프로젝트 설정
**개발 환경 구성**
1. **프로젝트 폴더**: 바탕화면에 'test' 폴더 생성
2. **Cursor IDE**: 프로젝트 폴더를 Cursor에서 열기
3. **터미널 설정**: Cursor 내장 터미널에서 WSL 프로필 선택
4. **Claude 실행**: 프로젝트 디렉토리에서 `claude` 명령어 실행

### 🚀 첫 번째 프로젝트
**간단한 HTML 웹사이트 생성**
```bash
# Claude Code 실행
claude

# 프롬프트 예시
"간단한 HTML 웹사이트를 만들어주세요"
```

**생성 과정**
- **파일 생성**: HTML, CSS, JavaScript 파일 자동 생성
- **구조 확인**: 생성된 파일 구조 확인
- **브라우저 테스트**: 생성된 HTML 파일을 브라우저에서 실행
- **결과 검증**: 웹사이트 정상 동작 확인

## ⚠️ 문제 해결

### 🔧 일반적인 설치 문제
**WSL 설치 실패**
- **Windows 버전**: Windows 10 버전 2004 이상 필요
- **가상화 설정**: BIOS에서 가상화 기능 활성화 필요
- **Windows 기능**: "Linux용 Windows 하위 시스템" 기능 수동 활성화

**Node.js 설치 문제**
- **저장소 업데이트**: `sudo apt update` 재실행
- **의존성 문제**: `sudo apt install build-essential` 추가 설치
- **권한 문제**: 모든 명령어에 `sudo` 사용

**Claude Code 인증 실패**
- **네트워크 연결**: 인터넷 연결 상태 확인
- **방화벽 설정**: 방화벽이 Node.js 브라우저 실행 차단하는지 확인
- **Claude 계정**: 유효한 Claude 계정 및 구독 상태 확인

### 🛠️ 성능 최적화
**WSL 성능 향상**
- **메모리 할당**: .wslconfig 파일로 메모리 할당량 조정
- **디스크 위치**: Windows 파일시스템보다 WSL 파일시스템에서 작업
- **백그라운드 프로세스**: 불필요한 Windows 백그라운드 프로세스 종료

## 🚀 고급 활용 팁

### 🔮 향후 학습 방향
**Claude Code 고급 기능**
- **메모리 기능**: 프로젝트별 컨텍스트 저장 및 활용
- **워크플로우**: 반복 작업 자동화
- **MCP 연동**: Model Context Protocol 활용
- **GitHub Actions**: CI/CD 파이프라인 연동
- **슬래시 명령어**: 커스텀 명령어 생성 및 활용

### 🎯 개발 환경 최적화
**통합 개발 환경**
- **Cursor + WSL**: 최적의 조합으로 설정
- **터미널 설정**: 기본 터미널을 WSL로 설정
- **파일 동기화**: Windows와 WSL 파일시스템 간 원활한 작업
- **확장 프로그램**: Cursor에서 WSL 관련 확장 프로그램 설치

### 💡 바이브 코딩 활용
**효과적인 프롬프트 작성**
- **명확한 요구사항**: 구체적이고 명확한 기능 요청
- **컨텍스트 제공**: 프로젝트 배경 및 기술 스택 명시
- **단계별 접근**: 복잡한 프로젝트는 단계별로 나누어 요청
- **반복 개선**: 생성된 코드를 점진적으로 개선

## 구현 체크리스트
- [ ] Windows 시스템 요구사항 확인
- [ ] PowerShell 관리자 모드에서 WSL 설치
- [ ] 시스템 재부팅 및 Ubuntu 초기 설정
- [ ] APT 패키지 매니저 업데이트
- [ ] Node.js 및 NPM 설치
- [ ] Claude Code 전역 설치
- [ ] Claude 계정 인증 및 연동
- [ ] 개발 환경(Cursor) 설정
- [ ] 첫 번째 프로젝트 생성 및 테스트
- [ ] 고급 기능 학습 계획 수립

## 연결된 노트
- **상위 개념**: [[Claude Code 완벽 가이드]]
- **하위 세부사항**: [[WSL 고급 설정 가이드]]
- **병렬 주제**: [[Claude Code macOS 설치 가이드]], [[Cursor IDE 최적화]]
- **실전 활용**: [[바이브 코딩 실전 워크플로우]]

## 참고 자료
- 원본 YouTube 영상: https://youtu.be/TX1t8HgbCCA
- Claude Code 공식 문서
- Microsoft WSL 공식 설치 가이드
- Node.js 공식 설치 문서

---

## 변경 이력
- 2025-01-06: 초안 작성 (YouTube 영상 분석 기반)