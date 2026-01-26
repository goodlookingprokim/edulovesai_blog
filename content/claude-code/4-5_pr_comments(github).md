---
title: "4-5. /pr_comments - Pull Request 댓글 보기"
date: 2025-09-28
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "4-5-pr-comments-github"
category: "claude-code"
excerpt: "4-5. /prcomments - Pull Request 댓글 보기"
tags:
  - claude-code
  - ai-coding
reading_time: 2
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# 4-5. /pr_comments - Pull Request 댓글 보기

## 🎯 사용 시점
- GitHub PR의 댓글을 확인하고 싶을 때
- 리뷰 피드백을 빠르게 파악하고 싶을 때
- 협업 과정에서 토론 내용을 정리하고 싶을 때

## 📝 기본 사용법

### 명령어
```bash
> /pr_comments
```

### 공식 기능
- **풀 리퀘스트 댓글 보기**
- GitHub Pull Request의 모든 댓글을 터미널에서 직접 조회

## 🔧 상세 기능

### 주요 특징
- **댓글 직접 조회**: GitHub Pull Request의 모든 댓글을 한 번에 확인
- **시간순 정렬**: 리뷰어, 작성자, 시간 순으로 정렬된 댓글 목록
- **피드백 확인**: 코드 리뷰 피드백 및 제안 사항을 빠르게 파악
- **승인 상태 명확화**: PR 승인 상태 및 요청 사항을 명확히 표시
- **협업 효율성**: 빠른 댓글 검토로 협업 효율성 증대

## 💡 실제 사용 예시

### 1. PR 작업 시작 전 댓글 확인
```bash
# GitHub에서 PR을 받았을 때
> /pr_comments

# Claude가 표시하는 정보:
# - 모든 리뷰 댓글
# - 일반 댓글
# - 승인/변경요청 상태
# - 댓글 작성 시간순 정렬
```

### 2. 코드 수정 후 피드백 확인
```bash
# 코드를 수정한 후 새로운 댓글이 있는지 확인
> /pr_comments

# 새로운 댓글이나 리뷰를 바로 확인 가능
```

### 3. 협업 시나리오
```bash
팀원: "API 엔드포인트 수정했는데 리뷰 부탁드려요"

개발자: > /pr_comments
# 결과: 모든 댓글을 한눈에 보고 빠르게 응답 가능
```

## ✅ 언제 사용하면 좋을까?

- **PR 리뷰를 시작하기 전** - 전체 맥락 파악
- **코드 수정 후 새 피드백 확인할 때** - 실시간 반영 상황 체크
- **복잡한 PR의 토론 내용을 정리할 때** - 긴 토론 요약
- **승인 상태와 요청사항을 빠르게 파악할 때** - 현재 상태 확인

## ⚠️ 중요한 한계사항

### GitHub 전용 기능
```bash
❌ 사용 불가능한 경우:
- GitLab Merge Request
- Bitbucket Pull Request
- Azure DevOps Pull Request
- 로컬 Git만 사용하는 경우
- 개인 프로젝트 (PR이 없는 경우)
```

### 대상 사용자
- ✅ **GitHub 사용 팀** - 매우 유용
- ❌ **다른 Git 플랫폼 사용자** - 완전히 무용지물
- ❌ **로컬 개발만 하는 경우** - 의미 없음

### 사용 빈도
```
🎯 상황별 사용 명령어
- GitHub을 사용하는 팀에서만 의미가 있음
- 21개 명령어 중 가장 플랫폼 의존적인 명령어
```

## 🔄 대안 명령어

GitHub을 사용하지 않는 경우 이런 명령어들이 더 유용합니다:

```bash
/review    # 코드 리뷰 (어떤 Git 플랫폼이든 사용 가능)
/help      # 도움말
/status    # 시스템 상태 확인
/compact   # 대화 압축 (긴 리뷰 세션 후)
```

## 📊 요약

| 구분 | 내용 |
|------|------|
| **장점** | GitHub PR 댓글을 터미널에서 빠르게 확인 |
| **단점** | GitHub 전용으로 다른 플랫폼에서는 사용 불가 |
| **사용 빈도** | 상황별 (GitHub 사용 팀에서만) |
| **대체 명령어** | `/review` (범용 코드 리뷰) |

**결론: GitHub을 사용하지 않는다면 이 명령어는 무시해도 됩니다!**