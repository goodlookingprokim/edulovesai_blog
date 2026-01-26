---
title: "Claude Code + Obsidian으로 노트 10배 활용하기 - McKay의 AI 에이전트 워크플로우"
created: '2025-01-30'
last_modified: '2025-01-30'
tags:
  - Claude-Code
  - Obsidian
  - AI-워크플로우
  - 노트테이킹
  - MCP
  - 자동화
  - 에이전트
  - 생산성
status: "완료"
type: "가이드"
priority: "high"
source: "https://youtu.be/d7Pb73dbcIM"
---

# Claude Code + Obsidian으로 노트 10배 활용하기

## 📋 목차
1. [[#개요]]
2. [[#필수 준비사항]]
3. [[#10가지 핵심 워크플로우]]
4. [[#고급 활용 팁]]
5. [[#실전 적용 가이드]]

## 개요

McKay Wrigley가 소개하는 Claude Code와 Obsidian을 결합한 AI 에이전트 워크플로우입니다. Claude Code를 단순 코딩 도구가 아닌 "Claude Agent"로 활용하여 유연한 에이전틱 워크플로우를 구축하는 방법을 다룹니다.

### 핵심 개념
- **Claude Agent**: Claude Code의 코딩 능력을 확장하여 다양한 일상 작업에 적용
- **에이전틱 워크플로우**: AI가 자율적으로 도구를 선택하고 사용하는 시스템
- **통합 자동화**: Obsidian + Claude Code + MCP + 외부 도구 연동

## 필수 준비사항

### 1. Obsidian 설치
- 무료 다운로드: [obsidian.md](https://obsidian.md)
- 데스크톱 버전 필수

### 2. Claude Code 설치
```bash
# docs.anthropic.com에서 제공하는 설치 명령어
# 터미널에서 실행
```

### 3. Claude 구독
- Anthropic Claude 플랜 ($20/월부터)
- 또는 Claude API 키

## 10가지 핵심 워크플로우

### 워크플로우 1: Claude 규칙 시스템 설정
**목적**: 모든 요청에 적용되는 시스템 프롬프트 구성

1. 새 Vault에서 `/init` 명령 실행
2. `CLAUDE.md` 파일 자동 생성
3. Vault 전체에 적용되는 최상위 규칙 정의

**핵심 포인트**:
- 모든 세션에 자동으로 주입되는 규칙
- 개인화된 노트 작성 스타일 정의 가능
- 응답 품질에 큰 영향

### 워크플로우 2: 기본 채팅 기능
**대화형 모드의 핵심 기능들**

- **파일 생성**: 자연어로 노트 생성 요청
- **파일 편집**: `@파일명`으로 특정 파일 태그
- **파일 삭제**: 불필요한 파일 제거
- **폴더 관리**: 자동으로 폴더 생성 및 파일 이동
- **세션 초기화**: `/clear`로 메시지 기록 삭제

### 워크플로우 3: Speech-to-Text 도구 활용
**생산성 4배 향상 도구**

- 추천 도구: Whisper Flow (Flow)
- 타이핑 대비 4배 빠른 입력 속도
- 모바일 앱과 데스크톱 동기화
- 긴 프롬프트나 복잡한 요청에 특히 유용

### 워크플로우 4: Cursor Tab 통합 (선택사항)
**코드 에디터를 노트 에디터로 활용**

- Cursor의 Tab 자동완성 기능 활용
- 긴 노트 편집 시 효율적
- Markdown 파일의 실시간 동기화
- 반복적인 편집 작업 자동화

### 워크플로우 5: Plan Mode 활용
**복잡한 작업의 계획 수립**

- `Shift+Tab` 두 번으로 Plan Mode 활성화
- 실행 전 계획 검토 및 승인
- 웹 검색 기능 통합
- 다단계 작업의 체계적 관리

**활용 예시**:
- 문서 조사 및 정리
- API 문서 분석
- 복잡한 노트 재구성

### 워크플로우 6: 커스텀 명령어 생성
**재사용 가능한 프롬프트 템플릿**

1. `.claude/commands/` 폴더에 마크다운 파일 생성
2. `$ARGUMENTS` 키워드로 동적 입력 처리
3. 세션 재시작 후 `/명령어`로 사용

**예시**: 일일 템플릿, Git 작업, 연구 작업 등

### 워크플로우 7: 자동 태그 및 링크 시스템
**지식 관리 자동화**

1. `TAGS.md` 파일로 태그 체계 정의
2. `CLAUDE.md`에 태그 규칙 참조 추가
3. Wiki 스타일 링크 자동 생성
4. 파일/폴더 자동 구성

### 워크플로우 8: 서브 에이전트 활용
**병렬 작업 처리**

- 여러 작업 동시 실행
- 연구 작업에 특히 유용
- 웹 검색과 결합하여 정보 수집
- `deep thinking` 모드와 함께 사용 가능

### 워크플로우 9: MCP 서버 통합
**외부 도구와의 연동**

- Context7: 최신 문서 정보 검색
- Google Drive: 파일 가져오기/내보내기
- Notion: 페이지 동기화
- Stripe: 비즈니스 데이터 조회
- 커스텀 MCP 서버 구축 가능

**설정 방법**:
1. MCP 서버 설치 명령 실행
2. `!`로 bash 모드 전환
3. `/mcp`로 연결된 서버 확인

### 워크플로우 10: GitHub Actions 통합
**클라우드에서 자율 실행**

1. Git 저장소 초기화
2. `/install-github-app` 실행
3. 모바일에서 Issue 생성으로 작업 트리거
4. 자동으로 노트 생성/수정

**활용 시나리오**:
- 외출 중 연구 작업 요청
- 버전 관리와 백업
- 팀 협업 워크플로우

## 고급 활용 팁

### 권한 관리
- Auto-accept 모드: `Shift+Tab`으로 토글
- 신중하게 사용 (특히 대규모 Vault)
- 규칙 파일에서 기본 권한 설정

### 성능 최적화
- 서브 에이전트로 병렬 처리
- MCP 서버로 외부 데이터 캐싱
- 커스텀 명령어로 반복 작업 최소화

### 보안 고려사항
- Private 저장소 사용
- 민감한 정보는 별도 Vault
- API 키 안전 관리

## 실전 적용 가이드

### 초보자 추천 순서
1. 기본 채팅 기능 익히기
2. Speech-to-Text 도입
3. 태그 시스템 구축
4. 간단한 커스텀 명령어 생성
5. MCP 서버 연동

### 고급 사용자 팁
- 여러 Vault로 목적별 분리
- 커스텀 MCP 서버 개발
- GitHub Actions로 완전 자동화
- 팀 협업 워크플로우 구축

## 연결된 노트
- [[Claude_Code_완벽_가이드_-_실습형_노트]]
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[인기있는 MCP 서버 및 활용사례]]
- [[Obsidian_템플릿_고도화_설계_가이드]]

## 참고 자료
- 원본 영상: [YouTube - How To 10x Your Notes: Obsidian + Claude AI Agents](https://youtu.be/d7Pb73dbcIM)
- McKay Wrigley의 블로그: Claude Agent 포스트
- Anthropic 공식 문서: [docs.anthropic.com](https://docs.anthropic.com)
- MCP 프로토콜 문서

---
**💡 핵심 메시지**: Claude Code는 단순한 코딩 도구가 아닌 다목적 AI 에이전트입니다. 유연하고 맞춤 설정이 가능하여 개인의 워크플로우에 완벽하게 통합될 수 있습니다.