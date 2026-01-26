---
title: "`/config` 명령어 설정 가이드"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "3-3-config"
category: "claude-code"
excerpt: "`/config` 명령어 사용 시점과 설정 항목 완전 가이드 - VS Code 연결 상태 확인/설정 - 에디터 통합 기능 활성화 - 확장 프로그램 설정 관리 - verbose 모드 on/off (상세 로그) ..."
tags:
  - claude-code
  - ai-coding
reading_time: 2
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# `/config` 명령어 설정 가이드

`/config` 명령어 사용 시점과 설정 항목 완전 가이드

## 🔧 `/config` 명령어 사용 시점

### 1. **환경 설정 관리**
- VS Code 연결 상태 확인/설정
- 에디터 통합 기능 활성화
- 확장 프로그램 설정 관리

### 2. **시스템 설정 변경**
- verbose 모드 on/off (상세 로그)
- 출력 형식 조정
- 디버깅 옵션 설정

### 3. **초기 환경 구성**
- 새 컴퓨터 설치 후
- 개발 환경 최적화
- 개인 선호도 설정

## 💡 **실제 사용 예시**

### 방금 실행한 경우:
```
/config
결과: verbose를 true로 설정
→ 이제 더 상세한 정보가 표시됨
```

### 일반적인 활용:
- **문제 해결 시**: verbose 모드로 상세 정보 확인
- **새 환경**: IDE 연결 및 기본 설정
- **성능 조정**: 출력 최적화 설정

## 📋 **설정 항목 상세 설명**

### 1. **Auto-compact** (현재: true)
- **기능**: 대화가 길어지면 자동으로 압축
- **효과**: 성능 최적화, 응답 속도 개선
- **권장**: true (메모리 효율성)

### 2. **Use todo list** (현재: true)
- **기능**: 작업 목록 자동 생성/관리
- **효과**: 복잡한 작업 체계적 진행
- **권장**: true (작업 추적)

### 3. **Show tips** (현재: true)
- **기능**: 도움말 팁 표시
- **효과**: 사용법 가이드와 힌트 제공
- **권장**: true (학습 효과)

### 4. **Verbose output** (현재: false)
- **기능**: 상세한 실행 정보 표시
- **효과**: 디버깅과 문제 해결에 유용
- **사용**: 문제 발생 시 true, 일반 사용 시 false

### 5. **Theme** (현재: Dark mode)
- **기능**: 화면 테마 설정
- **옵션**: Dark mode / Light mode
- **선택**: 개인 선호도

### 6. **Notifications** (현재: Auto)
- **기능**: 알림 표시 방식
- **옵션**: Auto / On / Off
- **효과**: 작업 완료 알림 관리

### 7. **Output style** (현재: default)
- **기능**: 출력 형식 스타일
- **효과**: 코드 표시 방식 조정
- **옵션**: default / Explanatory / Learning

### 8. **Editor mode** (현재: normal)
- **기능**: 편집기 동작 모드
- **옵션**: normal / vim
- **선택**: 익숙한 편집 스타일

### 9. **Model** (현재: Default)
- **기능**: 기본 AI 모델 설정
- **효과**: 성능과 비용 균형
- **권장**: Default (최적 균형)

### 10. **Diff tool** (현재: auto)
- **기능**: 파일 비교 도구 설정
- **효과**: 코드 변경사항 비교 시 사용할 도구 선택
- **옵션**: auto / terminal
- **권장**: auto (자동 최적 선택)

### 11. **Auto-install IDE extension** (현재: true)
- **기능**: IDE 확장 프로그램 자동 설치
- **효과**: VS Code 연동 자동화
- **권장**: true (편의성)

## 🔍 **현재 설정 분석**

### 최적화된 설정:
당신의 설정은 **생산성과 디버깅에 최적화**되어 있습니다.
- 자동화 기능들 활성화 ✅
- 상세 정보 표시 활성화 ✅
- 작업 관리 도구 활성화 ✅

## 🎯 **핵심**
**`/config`는 Claude Code의 작동 방식을 내 환경에 맞게 조정하는 설정 도구입니다. 개발 스타일과 작업 패턴에 맞춰 최적화하여 생산성을 향상시킬 수 있습니다.**