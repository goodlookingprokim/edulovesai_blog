---
title: "4-4. mcp 명령어 사용 가이드"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "4-4-mcp"
category: "claude-code"
excerpt: "/mcp 명령어는 MCP(Model Context Protocol) 서버를 관리하는 명령어입니다. 외부 서비스와 Claude Code를 연결하는 브릿지 역할을 합니다. - 외부 서비스 연결: GitHub, 데이터베이스, API 등과 연결할 때 - ..."
tags:
  - claude-code
  - ai-coding
reading_time: 1
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# 4-4. mcp 명령어 사용 가이드

## 개요
`/mcp` 명령어는 **MCP(Model Context Protocol) 서버를 관리**하는 명령어입니다. 외부 서비스와 Claude Code를 연결하는 브릿지 역할을 합니다.

## 사용 시점

- **외부 서비스 연결**: GitHub, 데이터베이스, API 등과 연결할 때
- **연결 상태 확인**: 설치된 MCP 서버들이 제대로 작동하는지 점검할 때
- **인증 문제 해결**: OAuth 재인증이나 연결 오류를 해결할 때

## `/mcp` 명령어의 실제 기능

### ✅ **할 수 있는 것:**
- 현재 연결된 MCP 서버 목록 확인
- 각 서버의 연결 상태 점검 (✅ 연결됨, ❌ 연결 끊김, ⚠️ 오류)
- OAuth 인증 관리 (로그인/로그아웃/토큰 갱신)
- 연결 오류 진단 및 서버 재시작

### ❌ **할 수 없는 것:**
- **새로운 MCP 서버 설치** (별도 터미널 작업 필요)
- 설정 파일 자동 생성
- 의존성 패키지 설치

## 실제 사용 예시

### 연결 상태 확인
```
사용자: /mcp
Claude: 현재 연결된 MCP 서버:
- GitHub: ✅ 연결됨 (OAuth 인증 완료)
- Notion: ❌ 연결 끊김 (재인증 필요)
- Web Search: ✅ 연결됨
```

### 문제 해결
```
상황: 외부 서비스 연결이 안 될 때
해결: /mcp 실행 → 오류 메시지 확인 → 재인증 또는 재연결
```

## 설치 vs 관리 구분

**`/mcp`는 관리 도구입니다. 설치는 별도로 해야 합니다.**

- **설치**: 터미널에서 `npm install [mcp-server]` + 설정 파일 편집
- **관리**: Claude Code에서 `/mcp` 명령어로 상태 확인 및 문제 해결

## 문제 해결

- **연결 안 됨**: `/mcp` → 오류 메시지 확인 → 설정 파일이나 API 키 수정
- **인증 오류**: `/mcp` → 재인증 진행 → 필요 권한 부여
- **서버 응답 없음**: `/mcp` → 서버 재시작 → 설정 재확인

## 핵심 정리

**`/mcp`는 연결된 MCP 서버들의 "관제센터"입니다.**

- ✅ **관리**: 연결 상태, 인증, 문제 해결
- ❌ **설치**: 별도 터미널 작업 필요
- 🎯 **목적**: 외부 서비스와 Claude Code 연결 관리

MCP 서버를 통해 Claude Code가 GitHub, Notion, 데이터베이스 등과 직접 연동하여 더 강력한 개발 환경이 됩니다.