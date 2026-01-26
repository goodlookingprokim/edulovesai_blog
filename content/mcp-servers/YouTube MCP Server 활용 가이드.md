---
title: "YouTube MCP Server 활용 가이드"
created: '2025-07-04'
last_modified: '2025-07-04'
tags:
  - MCP
  - YouTube
  - 자동화
  - 강의노트
  - Claude-Code
status: "완료"
type: "가이드"
priority: "high"
---

# YouTube MCP Server 활용 가이드

## 개요
- **핵심 주제**: YouTube MCP Server를 활용한 강의 노트 자동 생성
- **목적**: YouTube 영상의 자막, 메타데이터를 자동으로 추출하여 Obsidian 노트 생성
- **범위**: YouTube MCP Server 설정부터 실제 활용까지

## YouTube MCP Server 주요 기능

### 1. 영상 정보 추출
- **메타데이터**: 제목, 채널, 조회수, 게시일 등
- **자막 추출**: 영어/한국어 자막 지원
- **타임스탬프**: 자막과 함께 시간 정보 제공
- **채널 정보**: 채널 상세 정보 및 구독자 수

### 2. Claude Code와 연동 방법

#### 기본 명령어
```bash
# YouTube 영상 자막 가져오기
mcp__youtube-transcript__get_transcript --url "YouTube URL"

# 채널 정보 가져오기
mcp__youtube-transcript__get_channel_info --channel_id "채널ID"

# 영상 정보 가져오기
mcp__youtube-transcript__get_video_info --video_id "영상ID"
```

## 강의 노트 생성 워크플로우

### 1단계: YouTube URL 준비
```
예시: https://www.youtube.com/watch?v=VIDEO_ID
```

### 2단계: Claude Code에서 실행
```markdown
1. YouTube MCP Server로 영상 정보 추출
2. 자막 내용을 기반으로 구조화
3. YouTube 강의 노트 템플릿에 적용
4. Obsidian Vault에 노트 생성
```

### 3단계: 자동 생성 예시 명령
```
"YouTube URL [URL]의 내용을 YouTube MCP Server로 추출하여 
'YouTube 강의 노트 템플릿'을 사용해 Obsidian 노트를 생성해줘"
```

## 실제 활용 예시

### 프로그래밍 강의
```markdown
1. 코딩 튜토리얼 영상의 코드 예제 자동 추출
2. 시간대별 주요 개념 정리
3. 실습 코드와 설명 분리 정리
```

### 기술 컨퍼런스
```markdown
1. 발표 슬라이드 내용 타임스탬프와 매칭
2. Q&A 세션 별도 정리
3. 핵심 인사이트 자동 요약
```

### 온라인 강의
```markdown
1. 챕터별 내용 자동 분류
2. 과제 및 실습 내용 추출
3. 추가 학습 자료 링크 정리
```

## 고급 활용 팁

### 1. 시리즈 강의 일괄 처리
```markdown
# 재생목록의 모든 영상을 순차적으로 처리
for video in playlist:
    create_note_from_youtube(video)
```

### 2. 자동 태그 생성
- 영상 제목에서 키워드 추출
- 채널명을 태그로 자동 추가
- 카테고리별 자동 분류

### 3. 크로스 레퍼런싱
- 같은 주제의 다른 강의 노트 자동 연결
- 관련 프로젝트나 실습 노트와 링크

## 템플릿 커스터마이징

### 특정 채널용 템플릿
```markdown
# 예: Coursera 강의 전용 템플릿
- 주차별 구분 추가
- 과제 제출 체크리스트
- 퀴즈 문제 정리 섹션
```

### 언어별 템플릿
```markdown
# 영어 강의용
- 주요 표현 및 용어 정리 섹션
- 한국어 번역 노트 추가
```

## 트러블슈팅

### 자막이 없는 경우
- 자동 생성 자막 활용
- 영상 설명(description) 활용
- 댓글에서 주요 내용 추출

### 긴 영상 처리
- 챕터 단위로 분할 처리
- 핵심 부분만 선택적 추출
- 요약본 먼저 생성 후 상세 정리

## 연결된 노트
- [[YouTube 강의 노트 템플릿]]
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[인기있는 MCP 서버 및 활용사례]]
- [[개인 지식 관리]]

## 실전 명령 예시

### 기본 강의 노트 생성
```
YouTube URL https://www.youtube.com/watch?v=example의 
내용을 YouTube MCP Server로 추출하여 
'/Documents/Obsidian Vault/R - Resources/강의노트' 폴더에 
'YouTube 강의 노트 템플릿'을 사용해 노트를 생성해줘
```

### 시리즈 강의 처리
```
이 재생목록의 모든 영상에 대해 강의 노트를 생성하고,
각 노트를 '[[시리즈명]] - 1강, 2강...' 형식으로 연결해줘
```

## 초기 설정 완료 내역

### 생성된 파일들
1. **YouTube 강의 노트 템플릿**
   - 위치: `/90. setting/templates/YouTube 강의 노트 템플릿.md`
   - 강의 정보, 목차, 실습 예제, 핵심 요약 등 체계적 구조
   - 타임스탬프 기반 내용 정리 지원

2. **YouTube MCP Server 활용 가이드** (현재 문서)
   - 위치: `/R - Resources/MCP 및 자동화/YouTube MCP Server 활용 가이드.md`
   - MCP 서버 기능 설명 및 사용법
   - 강의 노트 생성 워크플로우

3. **YouTube MCP 실전 활용 예시**
   - 위치: `/R - Resources/MCP 및 자동화/YouTube MCP 실전 활용 예시.md`
   - 실제 사용 명령어 예시
   - 다양한 유형별 활용법 (프로그래밍, 컨퍼런스, 온라인 강의)

### 빠른 시작 가이드
YouTube 강의 노트를 만들 때 다음과 같이 요청하세요:
```
"YouTube URL [영상주소]의 내용을 YouTube MCP를 사용해 추출하고,
'YouTube 강의 노트 템플릿'으로 Obsidian 노트를 만들어줘"
```

### 설정 확인사항
- ✅ YouTube 강의 노트 템플릿 생성 완료
- ✅ MCP 서버 연동 가이드 작성 완료
- ✅ 실전 활용 예시 문서 작성 완료
- ✅ Obsidian Vault 구조에 통합 완료

---

## 변경 이력
- 2025-07-04: 초안 작성 및 YouTube MCP Server 연동 가이드 완성
- 2025-07-04: 초기 설정 완료 내역 및 빠른 시작 가이드 추가