---
title: Gemini CLI 무료 사용법 및 Cursor 대안 분석
created: 2025-07-05
last_modified: 2025-07-05
tags:
  - YouTube
  - 강의노트
  - Gemini
  - CLI
  - AI도구
  - 개발환경
  - MCP
  - 터미널
status: 완료
type: 강의정리
priority: high
youtube_url: https://youtu.be/f-Izv0ZIeQs
channel_name: ""
video_duration: ""
video_published: ""
share_link: https://share.note.sx/60ebuwy4#pdvReeK2GIudiLpGsWlE7lLVo+o+YnYkwpmU/yklCOk
share_updated: 2025-07-05T23:30:45+09:00
---

# Gemini CLI 무료 사용법 및 Cursor 대안 분석

## 📺 강의 정보
- **강의 제목**: 이거 보고 커서에디터 삭제했다 (Gemini CLI)
- **채널명**: 
- **영상 URL**: https://youtu.be/f-Izv0ZIeQs
- **영상 길이**: 
- **게시일**: 
- **강사/발표자**: 

## 🎯 학습 목표
- Gemini CLI 무료 사용법 익히기
- MCP 서버 연동 방법 이해
- 터미널 기반 AI 도구 활용법 마스터
- Cursor Editor 대안으로서의 Gemini 활용

## 📋 목차
1. [[#핵심 개념]]
2. [[#주요 내용 정리]]
3. [[#실습 예제]]
4. [[#핵심 요약]]
5. [[#추가 학습 자료]]
6. [[#실무 적용 방안]]

## 핵심 개념
### 용어 정의
- **Gemini CLI**: Google의 Gemini 모델을 터미널에서 사용할 수 있는 명령줄 도구
- **MCP 서버**: Model Context Protocol 서버로 AI와 외부 시스템 연동
- **Node.js LTS**: 장기 지원 버전의 Node.js 런타임 환경

### 선수 지식
- 기본적인 터미널/명령줄 사용법
- Node.js 및 npm 패키지 관리자 개념
- JSON 파일 편집 방법

## 주요 내용 정리

### 00:00 - Gemini 무료화 발표
- Google이 Gemini 사용을 무료로 전환
- 일일 1,000회 사용 제한 (사실상 평생 무료)
- GPT 대비 코딩 성능도 우수한 수준
- 터미널 기반 CLI 도구로 제공

### 설치 및 초기 설정
**1. Node.js 설치**
- Google에서 "Node.js LTS" 검색
- 운영체제에 맞는 버전 다운로드 및 설치
- npm이 함께 설치됨

**2. Gemini CLI 설치**
```bash
npm install -g @google/generative-ai-cli
```

**3. 터미널 실행**
- Windows: PowerShell 검색
- macOS: Terminal 검색

**4. 초기 설정**
- Google 로그인 필요
- 설정 과정에서 원하는 옵션 선택

### MCP 서버 연동 방법
**1. 설정 폴더 생성**
```bash
mkdir .fun
cd .fun
```

**2. settings.json 파일 생성**
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["@supabase/mcp-server"],
      "env": {
        "SUPABASE_URL": "your-url",
        "SUPABASE_ANON_KEY": "your-key"
      }
    }
  }
}
```

**3. Supabase MCP 서버 연동**
- Supabase에서 DB 호스팅 설정
- MCP 서버 통해 DB 데이터 자유롭게 조작 가능

### 실제 활용 사례들
**파일 조작 및 코딩**
- HTML 파일 생성 및 프랙탈 트리 그리기
- 물리 엔진 시뮬레이션 코드 작성
- 자동 파일 생성 및 코드 작성

**데이터베이스 연동**
- 데이터 파일을 DB에 자동 업로드
- API 생성 및 웹서버 구축
- 실시간 DB 데이터 조회 및 수정

**웹 크롤링 및 분석**
- URL 입력으로 웹페이지 내용 분석
- 구글 검색 기능
- 이미지 파일 일괄 변환 (Python 스크립트 자동 실행)

## 실습 예제
### 예제 1: 기본 AI 사용
```bash
gemini
# 프롬프트 창에서 질문 입력
```

### 예제 2: HTML 파일 생성
```bash
gemini "HTML 파일 만들어서 캔버스에 프랙탈 트리 그려줘"
```

### 예제 3: MCP 서버로 DB 연동
```bash
gemini "이 데이터 파일을 Supabase DB에 넣어줘"
```

### 예제 4: 웹 크롤링
```bash
gemini "이 URL 내용 분석해줘: https://example.com"
```

## 핵심 요약
### ⭐ 가장 중요한 3가지
1. **무료 사용**: 일일 1,000회 제한으로 사실상 무료 AI 코딩 도구
2. **MCP 연동**: 데이터베이스, 웹 API 등 외부 시스템과 자유로운 연동
3. **터미널 환경**: 개발자스러운 환경에서 AI 활용 가능

### 💡 인사이트
- Cursor Editor의 강력한 대안으로 부상
- 터미널 환경에 익숙하지 않은 사람도 쉽게 사용 가능
- 파일 조작부터 웹 개발까지 전방위적 활용 가능

### ⚠️ 주의사항
- 채팅 기록이 AI 학습에 사용될 수 있음 (유료 사용시 제외)
- 민감한 프로젝트 작업시 API 키 유료 결제 권장
- 터미널 사용에 대한 기본 지식 필요

## 추가 학습 자료
### 관련 영상
- Gemini API 활용 고급 가이드
- MCP 서버 구축 상세 튜토리얼

### 참고 문서
- [Google Generative AI CLI 공식 문서](https://developers.google.com/ai)
- [Supabase MCP 서버 가이드](https://supabase.com)

### 실습 환경
- Node.js LTS 버전
- 터미널 (PowerShell/Terminal)
- 코드 에디터 (선택사항)

## 실무 적용 방안
### 즉시 적용 가능
- [ ] 개발 환경에서 AI 코딩 어시스턴트로 활용
- [ ] 웹 스크래핑 및 데이터 분석 자동화
- [ ] 프로토타입 빠른 개발

### 추가 학습 필요
- [ ] MCP 서버 커스터마이징
- [ ] 고급 터미널 명령어 학습
- [ ] API 키 관리 및 보안 설정

### 프로젝트 아이디어
- 개인 프로젝트용 AI 개발 어시스턴트 구축
- 데이터 분석 파이프라인 자동화
- 웹 애플리케이션 프로토타입 개발

## Q&A 및 댓글 인사이트
### 주요 질문
- **Q**: 설치 중 오류가 발생하면?
  **A**: 관리자 모드에서 실행하거나 macOS의 경우 sudo 명령어 사용

### 유용한 댓글
- 스타벅스에서 사용하면 간지나 보임
- 코딩 입문자들의 최고의 맛보기 도구

## 연결된 노트
- **관련 강의**: [[Claude Code CLI YouTube MCP 설치 가이드]]
- **관련 프로젝트**: [[MCP 서버 구축 프로젝트]]
- **관련 기술**: [[터미널 기반 개발 환경]]
- **실습 노트**: [[Gemini CLI 실습 기록]]

## 개인 메모
### 이해도 체크
- [x] 전체 내용 이해
- [ ] 실습 완료
- [ ] MCP 서버 연동 테스트

### 후속 액션
- [ ] Gemini CLI 직접 설치 및 테스트
- [ ] Supabase MCP 서버 연동 실습
- [ ] Cursor Editor와 성능 비교 테스트

---

## 변경 이력
- 2025-07-05: YouTube MCP를 통한 영상 분석 및 초안 작성