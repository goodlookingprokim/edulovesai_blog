---
title: "Permissions 권한 옵션별 설정 예시"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "3-4-permissions"
category: "claude-code"
excerpt: "Permissions 권한 옵션별 설정 예시"
tags:
  - claude-code
  - ai-coding
reading_time: 1
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# Permissions 권한 옵션별 설정 예시

## 1. 🟢 **Allow (허용)** - 자동 실행
```
설정 예시:
• 도구: File System (파일 읽기/쓰기)
• 범위: 현재 프로젝트 폴더
• 상황: 자주 사용하는 코드 편집 작업

결과: Claude가 파일을 묻지 않고 바로 수정
```

## 2. 🟡 **Ask (질문)** - 매번 확인
```
설정 예시:
• 도구: GitHub API (커밋, 푸시)
• 범위: 전체 워크스페이스
• 상황: 코드 리포지토리 업로드

결과: "GitHub에 코드를 푸시하시겠습니까?" 매번 질문
```

## 3. 🔴 **Deny (거부)** - 완전 차단
```
설정 예시:
• 도구: System Commands (시스템 명령어)
• 범위: 전체 시스템
• 상황: 중요한 시스템 파일 접근

결과: Claude가 시스템 명령어 실행 완전 차단
```

## 4. 📁 **Workspace (작업공간)** - 범위 설정
```
설정 예시:
• 전체 워크스페이스: "/Users/username/Projects"
• 특정 폴더: "/Users/username/Projects/MyApp"
• 제한된 폴더: "/Users/username/Projects/MyApp/src"

적용: 설정한 폴더 범위에서만 권한 적용
```

## 💡 **실제 조합 예시**

### **안전한 학습 환경**
- File System: **Ask** + 현재 프로젝트만
- GitHub: **Ask** + 전체 워크스페이스
- Browser: **Allow** + 전체 워크스페이스

### **신뢰하는 개발 환경**
- File System: **Allow** + 개발 폴더만
- GitHub: **Allow** + 특정 리포지토리
- System Commands: **Deny** + 전체

이렇게 **도구별 + 권한별 + 범위별** 조합으로 세밀하게 제어할 수 있습니다.