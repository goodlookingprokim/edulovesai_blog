---
title: "**Claude Code 슬래시 명령어 가이드: 공식 문서 기반**"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "0-claude-code-slash-명령어-가이드"
category: "claude-code"
excerpt: "Claude Code 슬래시 명령어 가이드: 공식 문서 기반"
tags:
  - claude-code
  - ai-coding
reading_time: 10
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# **Claude Code 슬래시 명령어 가이드: 공식 문서 기반**

부제: 21개 공식 명령어로 Claude Code 마스터하기  
출처: Anthropic 공식 문서 (https://docs.anthropic.com/en/docs/claude-code/slash-commands)

---

## **목차**

### **Part 1. 기본 시작 (Essential Start)**
- 도움말 & 모델 설정: `/help`, `/model`
- 프로젝트 초기화: `/init`, `/memory`

### **Part 2. 대화 관리 (Conversation Management)** 
- 대화 제어: `/clear`, `/compact`
- 코드 검토: `/review`

### **Part 3. 시스템 & 계정 (System & Account)**
- 계정 관리: `/login`, `/logout`, `/status`
- 시스템 관리: `/doctor`, `/config`, `/cost`
- 권한 설정: `/permissions`

### **Part 4. 고급 기능 (Advanced Features)**
- 작업 환경: `/add-dir`, `/terminal-setup`, `/vim`
- 외부 연동: `/mcp`, `/pr_comments`
- AI 에이전트: `/agents`
- 문제 해결: `/bug`

### **Part 5. 실무 활용 가이드**
- 21개 명령어 학습 순서
- 사용 빈도별 명령어 분류
- 실제 사용 패턴 인사이트

---

## **Part 1. 기본 시작 (Essential Start)**

### **`/help`** - 도움말 시스템
```bash
> /help
> /help compact
```
- 공식 기능: Show help for commands
- 사용 시점: 명령어에 대해 알고 싶을 때

**상세 기능:**
- 모든 사용 가능한 슬래시 명령어 목록 표시
- `.claude/commands/`의 프로젝트 커스텀 명령어 포함 (project 표시)
- `~/.claude/commands/`의 개인 커스텀 명령어 포함 (user 표시)
- 연결된 MCP 서버의 명령어도 함께 표시

### **`/model`** - AI 모델 선택
```bash
> /model
```
- 공식 기능: Select or change the AI model
- 사용 시점: 작업에 적합한 모델로 변경하고 싶을 때

**상세 기능:**
- 현재 세션에서 실시간으로 모델 전환 가능
- Claude 3.5 Sonnet, Haiku, Opus 등 사용 가능한 모델 목록 표시
- 세션 종료 시까지 선택한 모델 유지
- 작업 복잡도에 따라 최적 모델 선택 가능

### **`/init`** - 프로젝트 초기화
```bash
> /init
```
- 공식 기능: Initialize project with CLAUDE.md guide
- 사용 시점: 새 프로젝트를 시작할 때

**상세 기능:**
- 프로젝트 전체를 분석하여 CLAUDE.md 파일 자동 생성
- 프로젝트 구조, 기술 스택, 파일 관계 파악
- 향후 Claude Code 세션에서 자동으로 컨텍스트 제공
- 팀 프로젝트에서 공유 가능한 프로젝트 메모리 생성

### **`/memory`** - 메모리 파일 편집
```bash
> /memory
```
- 공식 기능: Edit CLAUDE.md memory files
- 사용 시점: 프로젝트 정보를 업데이트하고 싶을 때

**상세 기능:**
- CLAUDE.md 파일 직접 편집 인터페이스 제공
- 프로젝트 컨벤션, 결정사항, 중요 컨텍스트 문서화
- 모든 Claude Code 세션에서 자동으로 프롬프트에 포함
- 살아있는 문서로서 지속적 업데이트 권장

---

## **Part 2. 대화 관리 (Conversation Management)**

### **`/clear`** - 대화 기록 완전 삭제
```bash
> /clear
```
- 공식 기능: Clear conversation history
- 사용 시점: 새로운 주제로 완전히 시작하고 싶을 때

**상세 기능:**
- 대화 기록과 컨텍스트 완전 초기화
- 토큰 카운트 0으로 리셋되어 새 세션 시작
- 세션 종료 후 재시작보다 빠른 새로고침
- 민감한 정보 논의 후 정리에 유용

### **`/compact`** - 대화 압축
```bash
> /compact
> /compact [instructions]
```
- 공식 기능: Compact conversation with optional focus instructions
- 사용 시점: 대화가 너무 길어졌을 때

**상세 기능:**
- 현재 대화를 요약하며 핵심 정보 보존
- 전체 토큰 카운트 감소로 긴 대화 지속 가능
- 선택적 지시사항으로 특정 주제만 보존 가능
- 컨텍스트 한계 도달 전에 예방적 사용 권장

### **`/review`** - 코드 리뷰 요청
```bash
> /review
```
- 공식 기능: Request code review
- 사용 시점: 코드를 작성하고 피드백이 필요할 때

**상세 기능:**
- 작성된 코드에 대한 자동 품질 분석
- 베스트 프랙티스, 보안, 성능 관점에서 검토
- 구체적인 개선 제안 및 코드 예시 제공
- 현재 세션에서 작업한 모든 코드 대상

---

## **Part 3. 시스템 & 계정 (System & Account)**

### **`/login`** - Anthropic 계정 전환
```bash
> /login
```
- 공식 기능: Switch Anthropic accounts
- 사용 시점: 다른 계정으로 전환하고 싶을 때

**상세 기능:**
- 여러 Anthropic 계정 간 전환 기능
- 개인/업무 계정 또는 팀 계정 번갈아 사용
- 계정별 권한 및 설정 자동 적용
- 대화 기록도 계정별로 분리 관리

### **`/logout`** - 계정 로그아웃
```bash
> /logout
```
- 공식 기능: Logout from current account
- 사용 시점: 현재 계정에서 로그아웃하고 싶을 때

**상세 기능:**
- 현재 세션에서 안전하게 로그아웃
- 보안상 민감한 작업 후 계정 정리
- 공유 컴퓨터에서 사용 후 사생활 보호
- 다른 계정으로 다시 로그인 가능

### **`/status`** - 계정 및 시스템 상태 확인
```bash
> /status
```
- 공식 기능: Show account and system status
- 사용 시점: 현재 상태를 확인하고 싶을 때

**상세 기능:**
- 현재 로그인된 계정 정보 표시
- 사용 중인 AI 모델 및 설정 상태
- MCP 서버 연결 상태 및 개수
- 작업 디렉토리 및 권한 설정 정보
- 네트워크 연결 및 API 키 상태

### **`/doctor`** - 시스템 건강 상태 점검
```bash
> /doctor
```
- 공식 기능: Run system diagnostics
- 사용 시점: 시스템 문제를 진단하고 싶을 때

**상세 기능:**
- Claude Code 설치 상태 자동 진단
- Node.js 버전 호환성 및 패키지 상태 검사
- API 키 설정 및 네트워크 연결 테스트
- 파일 권한 및 접근 가능성 확인
- 개선 및 해결 방법 자동 제안

### **`/config`** - 설정 보기/수정
```bash
> /config
```
- 공식 기능: View and edit configuration
- 사용 시점: 설정을 확인하거나 수정하고 싶을 때

**상세 기능:**
- 현재 설정 상태 JSON 형식으로 표시
- 모델, 권한, 환경변수, 상태라인 등 설정 관리
- 대화형 인터페이스로 각 설정 항목 수정 가능
- CLI를 통한 고급 설정 제어 지원 (claude config)
- 글로벌 및 프로젝트별 설정 분리 관리

### **`/cost`** - 사용량 통계
```bash
> /cost
```
- 공식 기능: Show token usage statistics
- 사용 시점: 사용량을 확인하고 싶을 때

**상세 기능:**
- 오늘, 이번 주, 이번 달, 전체 토큰 사용량 표시
- 토큰 사용량에 따른 예상 비용 계산
- 현재 세션에서의 토큰 사용량 실시간 모니터링
- 비용 최적화를 위한 사용 패턴 분석
- API 레이트 리미트 및 사용량 경고

### **`/permissions`** - 권한 설정 보기/수정
```bash
> /permissions
```
- 공식 기능: View and edit permissions
- 사용 시점: 권한을 확인하거나 수정하고 싶을 때

**상세 기능:**
- 파일 시스템 접근 권한 세밀한 제어
- Bash 명령어 실행 권한 패턴 기반 관리
- 파일 읽기/쓰기 작업 및 네트워크 연결 권한
- 와일드카드 패턴 지원으로 유연한 권한 설정
- allow/deny 리스트로 세밀한 보안 제어

---

## **Part 4. 고급 기능 (Advanced Features)**

### **`/add-dir`** - 작업 디렉토리 추가
```bash
> /add-dir
```
- 공식 기능: Add additional working directories
- 사용 시점: 추가 디렉토리를 작업 범위에 포함하고 싶을 때

**상세 기능:**
- 현재 작업 디렉토리 목록 표시
- 새로운 디렉토리를 Claude Code 접근 범위에 추가
- 여러 관련 프로젝트를 하나의 세션에서 작업 가능
- 공유 라이브러리나 공통 모듈 디렉토리 포함
- 권한 설정에 따라 디렉토리 접근 제어

### **`/terminal-setup`** - 터미널 설정
```bash
> /terminal-setup
```
- 공식 기능: Install Shift+Enter key binding
- 사용 시점: 터미널 환경을 설정하고 싶을 때

**상세 기능:**
- Shift+Enter 키 바인딩으로 메시지 전송
- 멀티라인 입력 모드 활성화
- 명령 이력 탐색 및 자동완성 기능
- 터미널 사용성 개선을 위한 키 바인딩 최적화
- 다양한 터미널 환경에서의 호환성 설정

### **`/vim`** - Vim 모드
```bash
> /vim
```
- 공식 기능: Enter vim mode for alternating insert and command modes
- 사용 시점: Vim 스타일 편집을 원할 때

**상세 기능:**
- 삽입 모드와 명령 모드 간 전환 방식
- Vim 키 바인딩 및 단축키 지원
- 다중 모드 편집 환경 제공
- 긴 텍스트 입력이나 복잡한 코드 편집에 유용
- Vim 숙련된 사용자에게 친숙한 인터페이스

### **`/mcp`** - MCP 서버 관리
```bash
> /mcp
```
- 공식 기능: Manage MCP server connections and OAuth authentication
- 사용 시점: 외부 서비스와 연동하고 싶을 때

**상세 기능:**
- Model Context Protocol 서버 연결 상태 관리
- OAuth 인증을 통한 외부 서비스 연동
- GitHub, Jira, Slack 등 다양한 MCP 서버 지원
- 연결된 MCP 서버에서 제공하는 슬래시 명령어 자동 등록
- 서버별 기능 및 인증 상태 모니터링

### **`/pr_comments`** - Pull Request 댓글
```bash
> /pr_comments
```
- 공식 기능: View pull request comments
- 사용 시점: GitHub PR의 댓글을 확인하고 싶을 때

**상세 기능:**
- GitHub Pull Request의 모든 댓글 직접 조회
- 리뷰어, 작성자, 시간 순 정렬된 댓글 목록
- 코드 리뷰 피드백 및 제안 사항 확인
- PR 승인 상태 및 요청 사항 명확화
- 협업 효율성 증대를 위한 빠른 댓글 검토

### **`/agents`** - AI 에이전트 관리
```bash
> /agents
```
- 공식 기능: Manage custom AI subagents for specialized tasks
- 사용 시점: 특화된 AI 에이전트가 필요할 때

**상세 기능:**
- 코드 리뷰, 보안 감사, 성능 최적화 등 전문 에이전트
- 에이전트 활성화/비활성화 및 설정 관리
- 커스텀 AI 에이전트 생성 및 구성
- 특정 작업에 특화된 전문 에이전트 선택
- 다중 에이전트 동시 운영 및 협업 지원

### **`/bug`** - 버그 신고
```bash
> /bug "설명"
```
- 공식 기능: Submit bug reports with conversation context
- 사용 시점: 버그를 신고하고 싶을 때

**상세 기능:**
- 현재 대화 내역을 자동으로 Anthropic에 전송
- 시스템 정보(버전, OS, 브라우저 등) 자동 포함
- 버그 리포트 ID 생성 및 추적 가능
- Claude Code 개선을 위한 직접적인 피드백 채널
- ⚠️ 주의: 대화 내역 전송에 따른 민감 정보 고려 필요

---

## **Part 5. 실무 활용 가이드**

### **21개 명령어 학습 순서**

### **1단계: 필수 시작 (4개)**
1. `/help` - 도움말 확인
2. `/status` - 시스템 상태 확인  
3. `/model` - AI 모델 선택
4. `/init` - 프로젝트 초기화

### **2단계: 기본 활용 (4개)**
5. `/review` - 코드 리뷰
6. `/cost` - 사용량 확인
7. `/clear` - 대화 삭제
8. `/compact` - 대화 압축

### **3단계: 시스템 관리 (6개)**
9. `/login` - 계정 로그인
10. `/logout` - 계정 로그아웃  
11. `/doctor` - 시스템 진단
12. `/config` - 설정 관리
13. `/memory` - 메모리 파일 편집
14. `/permissions` - 권한 설정

### **4단계: 고급 기능 (7개)**
15. `/add-dir` - 디렉토리 추가
16. `/terminal-setup` - 터미널 설정
17. `/vim` - Vim 모드
18. `/mcp` - MCP 서버 관리
19. `/pr_comments` - PR 댓글 보기
20. `/agents` - AI 에이전트 관리
21. `/bug` - 버그 신고

---

### **사용 빈도별 명령어 분류**

### **🔥 매일 사용 (High Frequency)**
1. **`/help`** - 새로운 명령어나 기능 확인시
2. **`/review`** - 코드 작성 후 품질 검토
3. **`/cost`** - 토큰 사용량 모니터링
4. **`/status`** - 문제 발생시 첫 번째 확인

### **⚡ 주 3-5회 사용 (Regular Use)**
5. **`/compact`** - 긴 대화 세션 정리
6. **`/doctor`** - 시스템 문제 진단
7. **`/model`** - 작업 특성에 따른 모델 전환

### **📅 주 1-2회 사용 (Periodic Use)**
8. **`/config`** - 설정 조정
9. **`/memory`** - 프로젝트 정보 업데이트
10. **`/permissions`** - 권한 설정 검토

### **🌙 월 1회 이하 (Occasional Use)**
11. **`/init`** - 새 프로젝트 시작시
12. **`/clear`** - 완전한 새 시작 필요시
13. **`/login`/`/logout`** - 계정 전환시

### **🎯 상황별 사용 (Situational)**
14. **`/add-dir`** - 다중 프로젝트 작업시
15. **`/terminal-setup`** - 초기 환경 설정시
16. **`/vim`** - Vim 사용자만
17. **`/mcp`** - 외부 서비스 연동시
18. **`/pr_comments`** - GitHub PR 작업시
19. **`/agents`** - 전문 작업 필요시
20. **`/bug`** - 문제 발생시

### **💡 실제 사용 패턴 인사이트**

**개발자 일과 기준:**
- 아침: `/status` → `/cost` (상태 점검)
- 코딩 중: `/review` (품질 확인)
- 오후: `/compact` (대화 정리)
- 문제시: `/doctor` → `/help` (문제 해결)

**프로젝트 단계별:**
- 시작: `/init` → `/config` → `/permissions`
- 진행: `/review` → `/cost` → `/compact`
- 협업: `/pr_comments` → `/agents`
- 마무리: `/memory` → `/clear`

**핵심 추천:** 가장 중요한 4개 명령어는 `/help`, `/review`, `/cost`, `/status`로, 이것들만 익혀도 Claude Code의 80% 이상을 활용할 수 있습니다.

---

*이 가이드는 Anthropic 공식 문서를 기반으로 작성되었습니다.*  
*최신 정보는 https://docs.anthropic.com/en/docs/claude-code/slash-commands 에서 확인하세요.*