---
title: MacBook에서 mcp-chrome 설치 가이드
created: 2025-07-06
last_modified: 2025-07-06
tags:
  - MCP/Chrome
  - 설치가이드/macOS
  - 브라우저/확장프로그램
  - 자동화/브리지
  - 개발도구/설정
status: 완료
type: 가이드
priority: high
source_url: https://github.com/hangwin/mcp-chrome
share_link: https://share.note.sx/i48c06ea#stUgwDG/cj1dcjn03/dAWRdKS7ujiWnMiYIcd3mRI2U
share_updated: 2025-07-06T16:55:54+09:00
---

# MacBook에서 mcp-chrome 설치 가이드

## 📋 목차
1. [[#개요]]
2. [[#사전 준비]]
3. [[#확장 프로그램 다운로드]]
4. [[#브리지 CLI 설치]]
5. [[#크롬에 확장 로드]]
6. [[#정상 동작 확인]]
7. [[#STDIO 모드 설정]]
8. [[#문제 해결]]
9. [[#요약]]

## 개요
`mcp-chrome`(Chrome MCP Server) 확장과 **mcp-chrome-bridge** CLI를 MacBook(macOS)에 설치·구동하는 전체 과정을 정리했습니다.  
모든 단계는 **체크리스트** 형식이라, Obsidian에서 한 단계씩 완료할 때 `⌘ + ↵`(완료 표시)로 관리할 수 있습니다.

### 주요 특징
- **Chrome MCP Server**: 브라우저와 AI 도구 간 직접 연결
- **체크리스트 기반**: 단계별 진행 관리 가능
- **macOS 최적화**: Homebrew 기반 설치 방법
- **실시간 연결**: HTTP 127.0.0.1:12306 포트 사용

## 사전 준비

### 1. 필수 소프트웨어 설치
- [ ] **Google Chrome** 설치 또는 최신 버전 확인  
- [ ] **Homebrew**(없다면 설치): <https://brew.sh>  
- [ ] **Node.js ≥ 18**  
  ```bash
  brew install node
  ```

### 2. pnpm 설치
- [ ] **pnpm 설치**
  ```bash
  brew install pnpm
  ```

> [!info] pnpm 주의사항
> pnpm은 post-install 스크립트를 기본 차단합니다. 아래 단계에서 `enable-pre-post-scripts` 옵션을 켜 줍니다.

## 확장 프로그램 다운로드

### GitHub 릴리스에서 다운로드
- [ ] **GitHub 릴리스 페이지 이동** → 최신 `mcp-chrome-*.zip` 다운로드
  - 링크: https://github.com/hangwin/mcp-chrome/releases
- [ ] **압축 해제** → 예: `~/Downloads/mcp-chrome`

## 브리지 CLI 설치

### 방법 1: npm (단순)
- [ ] **npm으로 전역 설치**
  ```bash
  npm install -g mcp-chrome-bridge
  ```

### 방법 2: pnpm (권장)
- [ ] **pnpm 스크립트 활성화**
  ```bash
  pnpm config set enable-pre-post-scripts true   # 스크립트 허용
  ```
- [ ] **pnpm으로 전역 설치**
  ```bash
  pnpm install -g mcp-chrome-bridge
  ```

### 자동 등록 실패 시
- [ ] **수동 등록 실행**
  ```bash
  mcp-chrome-bridge register
  ```

## 크롬에 확장 로드

### 개발자 모드 활성화
- [ ] **Chrome 확장 관리 페이지 열기**
  - 주소창에 `chrome://extensions` 입력 → 엔터
- [ ] **우측 상단 개발자 모드 ON**
- [ ] **압축해제된 확장 프로그램 로드** → 위에서 압축 해제한 폴더 선택
- [ ] **툴바 퍼즐 아이콘** → Chrome MCP Server 핀📌 → 아이콘 클릭 → **Connect**

### 연결 확인
- [ ] **연결 성공 시**: `http://127.0.0.1:12306/mcp` 가 생성됨을 확인

## 정상 동작 확인

### HTTP 엔드포인트 테스트
- [ ] **Health 체크 실행**
  ```bash
  curl http://127.0.0.1:12306/health
  ```
- [ ] **응답 확인**: `{"status":"ok"}` 가 반환되면 정상

### LLM 설정 예시
- [ ] **MCP 서버 설정 추가**
  ```json
  {
    "mcpServers": {
      "chrome-mcp-server": {
        "type": "streamableHttp",
        "url": "http://127.0.0.1:12306/mcp"
      }
    }
  }
  ```

## STDIO 모드 설정

### 전역 설치 위치 확인
- [ ] **설치 경로 확인**
  ```bash
  npm list -g mcp-chrome-bridge
  ```

### LLM 설정 등록
- [ ] **STDIO 경로 등록**
  - `.../mcp-server-stdio.js` 경로를 LLM 설정에 등록

## 문제 해결

### 일반적인 문제와 해결 방법

| 증상 | 해결 방법 |
|------|-----------|
| Connect가 빨간색·미연결 | • Chrome 재시작<br>• 방화벽/VPN에서 12306 포트 허용 |
| 브리지 명령어 인식 안 됨 | 터미널 재로그인 → $PATH에 npm/pnpm 전역 경로 포함 확인 |
| pnpm 스크립트 차단 오류 | `pnpm config set enable-pre-post-scripts true` 후 재설치 |

### 추가 디버깅 방법
- [ ] **Chrome 개발자 도구** → Console 탭에서 오류 메시지 확인
- [ ] **포트 충돌 확인**
  ```bash
  lsof -i :12306
  ```
- [ ] **프로세스 재시작**
  ```bash
  pkill -f mcp-chrome-bridge
  mcp-chrome-bridge register
  ```

## 요약

### 설치 과정 한눈에 보기
1. **Node 18 + pnpm** 설치
2. **GitHub 릴리스 zip** 다운로드 & 압축해제
3. **npm install -g mcp-chrome-bridge** 실행
4. **크롬 개발자 모드** → 폴더 로드 → Connect
5. **http://127.0.0.1:12306/mcp** 열리면 완료 🎉

### 체크리스트 최종 확인
- [ ] 모든 설치 단계 완료
- [ ] Chrome 확장 프로그램 연결 상태 확인
- [ ] HTTP 엔드포인트 정상 동작 확인
- [ ] LLM 도구와 연동 테스트
- [ ] 문제 발생 시 해결 방법 숙지

## 실무 적용점

### 1. 개발 환경 최적화
- **브라우저 자동화**: 웹 페이지 스크래핑 및 상호작용
- **AI 도구 연동**: Claude, ChatGPT 등과 Chrome 브라우저 직접 연결
- **워크플로우 자동화**: 반복적인 웹 작업 자동화

### 2. 사용 사례
- **콘텐츠 분석**: 웹 페이지 내용 실시간 분석
- **데이터 수집**: 동적 웹 페이지 데이터 추출
- **테스트 자동화**: 웹 애플리케이션 테스트 시나리오

### 3. 보안 고려사항
- **로컬 연결만 허용**: 127.0.0.1 바인딩으로 외부 접근 차단
- **포트 관리**: 12306 포트 방화벽 설정
- **권한 최소화**: 필요한 Chrome 권한만 부여

## 연결된 노트
- **상위 개념**: [[MCP 프로토콜 개요]]
- **관련 도구**: [[Chrome 확장 프로그램 개발]]
- **설치 가이드**: [[Node.js macOS 설치]], [[Homebrew 설치 가이드]]
- **자동화**: [[브라우저 자동화 도구]]
- **문제 해결**: [[macOS 개발 환경 문제 해결]]

---

*GitHub mcp-chrome 프로젝트 기반 | macOS 설치 가이드 | 2025년 7월 작성*