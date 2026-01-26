---
title: "Obsidian Bases 프로젝트 및 작업 관리 완벽 가이드"
created: '2025-07-07'
last_modified: '2025-07-07'
tags:
  - Obsidian/Bases
  - 프로젝트/관리
  - 작업/관리
  - 생산성/향상
  - PKM/시스템
  - 템플릿/활용
  - 출처/YouTube
status: "완료"
type: "가이드"
priority: "high"
share_link: ""
---

# Obsidian Bases 프로젝트 및 작업 관리 완벽 가이드

## 📚 학습 목표
이 가이드를 통해 다음을 완전히 마스터할 수 있습니다:
- ✅ Obsidian Bases 코어 플러그인의 **최신 기능 활용법**
- ✅ **계층적 프로젝트 관리 시스템** 구축 방법
- ✅ **템플릿 자동 생성**과 동적 속성 관리
- ✅ **Notion과 같은 데이터베이스** 기능 구현
- ✅ **AI와 연동한 프로젝트 관리** 워크플로우

## 📋 목차
1. [[#개요]]
2. [[#Obsidian Bases 최신 업데이트]]
3. [[#계층적 프로젝트 관리 시스템]]
4. [[#Bases 설정 및 초기 구성]]
5. [[#템플릿 시스템 구축]]
6. [[#속성 및 필터 관리]]
7. [[#뷰와 대시보드 설계]]
8. [[#동적 기능 및 자동화]]
9. [[#실전 워크플로우]]
10. [[#AI 통합 활용법]]
11. [[#고급 팁과 최적화]]

## 개요

**Obsidian Bases**는 최근 대폭 업데이트되어 **Notion 수준의 프로젝트 관리** 기능을 Obsidian에서 구현할 수 있게 되었습니다. 이제 테이블 뷰에서 직접 노트를 추가하고, 모든 속성을 자동으로 상속받는 **템플릿 생성기** 역할을 수행합니다.

### 🎯 핵심 가치 제안
> **"Obsidian + Notion의 장점 결합: 마크다운 파워 + 데이터베이스 기능"**

- **템플릿 자동 생성**: 테이블에서 직접 노트 생성시 모든 속성 자동 적용
- **동적 속성**: 시간 기반 자동 계산 (예: 마감일까지 남은 일수)
- **계층적 관리**: Project → Epic → Story → Task 구조
- **완전한 통합**: 다른 Obsidian 플러그인과 완벽 연동

### 🚀 변화의 임팩트
```markdown
기존 Obsidian 한계:
├── 테이블 기능 부족
├── 프로젝트 관리 도구 부재
├── 템플릿 수동 적용 필요
└── 데이터베이스 기능 제한

새로운 Bases 활용:
├── Notion 수준 테이블 기능
├── 완전한 프로젝트 관리 시스템
├── 자동 템플릿 적용
└── 동적 속성 및 계산 기능
```

## Obsidian Bases 최신 업데이트

### 🆕 주요 신기능

#### 1. 직접 노트 추가 기능
```markdown
기능: 테이블 뷰에서 바로 노트 생성
혜택:
- 모든 테이블 속성 자동 상속
- 템플릿 생성기 역할 수행
- 필터링 자동 적용
- 속성 일관성 보장
```

#### 2. 동적 함수 시스템
```markdown
기능: 시간 기반 자동 계산
예시:
- 마감일까지 남은 일수
- 프로젝트 진행률 계산
- 상태별 자동 분류
- 관련 노트 자동 연결
```

#### 3. 고급 필터링 및 뷰
```markdown
기능: 다차원 필터링 시스템
특징:
- 뷰별 독립 필터 설정
- 임베드 뷰 지원
- 카드 뷰 레이아웃
- 동적 대시보드 생성
```

### ⚠️ 접근 권한
- **현재 상태**: Catalyst 멤버 전용 (얼리 액세스)
- **정식 출시**: 추후 모든 사용자에게 공개 예정
- **버전**: 1.9.4 최신 업데이트 기준

## 계층적 프로젝트 관리 시스템

### 🏗️ 4단계 계층 구조

```markdown
Project (프로젝트)
├── Epic (에픽) - 주요 단계/페이즈
│   ├── Story (스토리) - 개별 주요 작업
│   │   ├── Task (작업) - 세부 실행 항목
│   │   ├── Task
│   │   └── Task
│   ├── Story
│   └── Story
├── Epic
└── Epic

+ Idea (아이디어) - 모든 단계로 승격 가능
+ Bug (버그) - 개발 프로젝트용 추가 항목
```

### 📊 계층별 활용 예시

#### 블로그 프로젝트 예시
```markdown
프로젝트: "나의 기술 블로그"
├── 에픽: "100일 글쓰기 챌린지"
│   ├── 스토리: "Obsidian 활용법 시리즈"
│   │   ├── 작업: 아이디어 수집
│   │   ├── 작업: 개요 작성
│   │   ├── 작업: 초안 작성
│   │   ├── 작업: 편집 및 검토
│   │   └── 작업: 발행
│   ├── 스토리: "AI 도구 리뷰 시리즈"
│   └── 스토리: "생산성 팁 모음"
└── 에픽: "독자 커뮤니티 구축"
```

#### 앱 개발 프로젝트 예시
```markdown
프로젝트: "Obsidian 플러그인 개발"
├── 에픽: "기본 기능 구현"
│   ├── 스토리: "사용자 인터페이스 설계"
│   ├── 스토리: "핵심 로직 개발"
│   └── 스토리: "테스트 및 디버깅"
├── 에픽: "고급 기능 추가"
└── 에픽: "출시 및 마케팅"
```

### 🔄 아이디어 승격 시스템
```markdown
아이디어 → 작업: 단순 실행 항목
아이디어 → 스토리: 주요 기능/결과물
아이디어 → 에픽: 프로젝트 주요 단계
아이디어 → 프로젝트: 완전히 새로운 프로젝트
```

## Bases 설정 및 초기 구성

### 1️⃣ Bases 플러그인 활성화

```markdown
📌 설정 단계:
1. Settings → Core plugins
2. Bases 플러그인 활성화
3. 앱 재시작 (필요시)
4. 새 Base 생성 테스트
```

### 2️⃣ 첫 번째 Base 생성

```markdown
📝 기본 구성:
1. 새 노트 생성: "Project Management"
2. Base 뷰 추가
3. 초기 필터 설정: kind is not empty
4. 기본 속성 정의
```

### 3️⃣ 핵심 속성 정의

```yaml
# 표준 프로젝트 속성 구조
---
kind: "project"        # project/epic/story/task/idea/bug
status: "진행중"       # 백로그/시작전/진행중/완료
priority: "high"       # high/medium/low
due_date: "2025-07-15" # 마감일
tags: ["개발", "웹"]   # 프로젝트 태그
parent: ""             # 상위 항목 링크
project: ""            # 최상위 프로젝트 링크
description: ""        # 간단한 설명
cover_image: ""        # 커버 이미지 (카드 뷰용)
---
```

## 템플릿 시스템 구축

### 🎯 템플릿 생성 전략

#### 1. 마스터 템플릿 생성
```markdown
목적: 모든 속성이 포함된 기준 템플릿
위치: Templates 폴더
이름: "Project Template"
내용: 모든 가능한 속성 포함
```

#### 2. 속성 타입 최적화
```markdown
중요: 리스트 타입 속성 활용
이유: 드롭다운 자동 완성 기능
설정: 테스트 노트에 모든 옵션 미리 정의

예시:
- status: ["백로그", "시작전", "진행중", "완료"]
- priority: ["high", "medium", "low"] 
- kind: ["project", "epic", "story", "task", "idea", "bug"]
```

### 📁 템플릿 파일 구조

```markdown
Templates/
├── project-template.md     # 프로젝트용
├── epic-template.md        # 에픽용
├── story-template.md       # 스토리용
├── task-template.md        # 작업용
├── idea-template.md        # 아이디어용
└── bug-template.md         # 버그용
```

### 🔧 템플릿 자동 적용 시스템

```markdown
1. Base에서 "New" 버튼 클릭
2. 자동으로 kind 속성 미리 채움
3. 다른 필수 속성들 드롭다운으로 선택
4. 저장시 자동으로 해당 뷰에 필터링
```

## 속성 및 필터 관리

### 🎛️ 필터 시스템 설계

#### 전역 필터 (All Views)
```markdown
목적: 모든 뷰에 공통 적용
설정:
- kind is not empty (프로젝트 관리 노트만)
- kind is not "test" (테스트 노트 제외)
- status is not "완료" (완료 항목 숨김)
```

#### 뷰별 개별 필터
```markdown
All Projects: kind contains "project"
All Epics: kind contains "epic"  
All Stories: kind contains "story"
All Tasks: kind contains "task"
All Ideas: kind contains "idea"
All Bugs: kind contains "bug"
```

### 📊 동적 속성 활용

#### 마감일 계산 예시
```javascript
// Days Until Due 속성
relative(due, "days")

결과: "4일 후", "-2일 전" 등 자동 계산
```

#### 프로젝트 진행률 계산
```javascript
// 완료율 계산 (향후 구현 예정)
round((완료된작업수 / 전체작업수) * 100) + "%"
```

## 뷰와 대시보드 설계

### 🎨 뷰 타입별 활용법

#### 1. 테이블 뷰
```markdown
용도: 상세 정보 관리 및 편집
특징:
- 모든 속성 표시
- 인라인 편집 가능
- 정렬 및 그룹화
- 벌크 작업 지원
```

#### 2. 카드 뷰  
```markdown
용도: 시각적 프로젝트 개요
특징:
- 커버 이미지 표시
- 핵심 정보만 선별 표시
- 드래그 앤 드롭 (예정)
- 대시보드 스타일
```

### 🏠 프로젝트 대시보드 구축

#### 임베드 뷰 시스템
```markdown
# 프로젝트 대시보드 구조

## 프로젝트 개요
![[project-management.base#project-files]]

## 관련 에픽
![[project-management.base#project-epics]]

## 현재 작업
![[project-management.base#project-tasks]]

## 아이디어 백로그
![[project-management.base#project-ideas]]
```

#### 동적 필터링
```markdown
필터 설정: project contains this file
결과: 현재 프로젝트와 관련된 항목만 자동 표시
장점: 프로젝트별 독립적 대시보드 생성
```

### 📱 뷰 최적화 설정

#### 카드 뷰 설정
```markdown
이미지: cover_image 속성 사용
카드 크기: 중간 (조정 가능)
종횡비: 16:9 또는 4:3
표시 속성: title, status, priority만 선별
```

#### 테이블 뷰 설정
```markdown
필수 열: kind, title, status, priority, due_date
선택 열: parent, project, tags, description
정렬: due_date 오름차순 (마감일 임박순)
그룹: status별 그룹화
```

## 동적 기능 및 자동화

### ⚡ 동적 계산 함수

#### 시간 관련 함수
```javascript
// 마감일까지 남은 일수
relative(due, "days")

// 생성일로부터 경과 일수  
relative(created, "days")

// 특정 날짜와의 차이
dateutils.diff(due_date, today(), "days")
```

#### 텍스트 조작 함수
```javascript
// 제목 자동 생성
"[" + kind + "] " + title

// 상태 이모지 추가
if(status == "완료", "✅", 
   if(status == "진행중", "🔄", "⏸️")) + " " + title
```

### 🔗 관계 기반 자동화

#### 하위 항목 자동 집계
```javascript
// 관련 작업 수 계산
length(filter(tasks, parent == this.file))

// 완료율 계산
round(length(filter(tasks, parent == this.file && status == "완료")) / 
      length(filter(tasks, parent == this.file)) * 100) + "%"
```

#### 자동 태그 상속
```javascript
// 상위 프로젝트 태그 자동 상속
if(parent, parent.tags, [])
```

## 실전 워크플로우

### 🎯 일일 작업 관리

#### 아침 루틴
```markdown
1. All Tasks 뷰 열기
2. 오늘 마감 작업 확인 (due_date 필터)
3. 진행중 작업 상태 업데이트
4. 새로운 작업 추가
5. 우선순위 재조정
```

#### 주간 검토
```markdown
1. All Projects 보드 뷰 확인
2. 완료된 항목 아카이브로 이동
3. 새로운 에픽/스토리 계획
4. 다음 주 우선순위 설정
5. 블로킹 이슈 해결
```

### 📝 아이디어에서 실행까지

#### 아이디어 캡처
```markdown
1. All Ideas 뷰에서 "New" 클릭
2. kind: "idea" 자동 설정됨
3. 간단한 제목과 설명 입력
4. 관련 프로젝트 연결 (있다면)
5. 저장
```

#### 아이디어 승격 과정
```markdown
아이디어 검토 → 실행 가능성 평가 → 승격 결정

승격 방법:
1. 아이디어 노트 열기
2. kind 속성 변경 (idea → task/story/epic/project)
3. 추가 속성 입력 (parent, due_date 등)
4. 자동으로 해당 뷰에 나타남
```

### 🔄 프로젝트 생명주기

#### 프로젝트 시작
```markdown
1. All Projects에서 새 프로젝트 생성
2. 프로젝트 템플릿 적용
3. 커버 이미지 설정
4. 초기 에픽들 계획
5. 프로젝트 대시보드 설정
```

#### 진행 중 관리
```markdown
1. 정기적 상태 업데이트
2. 블로킹 이슈 추적
3. 마일스톤 체크
4. 팀원과 진행사항 공유
5. 스코프 조정
```

#### 프로젝트 완료
```markdown
1. 모든 하위 항목 완료 확인
2. 프로젝트 상태를 "완료"로 변경
3. 자동으로 아카이브로 이동
4. 회고 노트 작성
5. 다음 프로젝트 계획
```

## AI 통합 활용법

### 🤖 AI 프로젝트 매니저 활용

#### 프로젝트 계획 수립
```markdown
AI 프롬프트 예시:
"다음 프로젝트를 Obsidian Bases 구조에 맞춰 분해해줘:
[프로젝트 설명]

다음 형식으로:
- Project: 
- Epics (3-5개):
- Stories (각 Epic당 3-7개):
- Initial Tasks (주요 Story당):
```

#### 작업 우선순위 결정
```markdown
AI 활용:
"현재 진행중인 작업들을 분석해서 우선순위를 추천해줘:
[현재 작업 목록]

고려사항:
- 마감일
- 의존관계  
- 비즈니스 임팩트
- 리소스 가용성"
```

### 🧠 AI 기반 자동화

#### 스마트 태그 제안
```markdown
기능: 노트 내용 분석 후 관련 태그 자동 제안
구현: Smart Connections 플러그인 연동
활용: 프로젝트 분류 정확도 향상
```

#### 진행률 예측
```markdown
기능: 과거 데이터 기반 완료 시점 예측
데이터: 작업 완료 패턴, 소요 시간 분석
결과: 현실적인 마감일 설정 도움
```

## 고급 팁과 최적화

### ⚡ 성능 최적화

#### 대용량 프로젝트 관리
```markdown
문제: 수백 개 노트로 인한 성능 저하
해결책:
1. 아카이브 Base 별도 운영
2. 프로젝트별 Base 분리
3. 불필요한 속성 제거
4. 인덱싱 최적화
```

#### 필터 최적화
```markdown
권장사항:
- 복잡한 OR 조건 최소화
- 인덱스된 속성 우선 사용
- 정규식 필터 제한적 사용
- 전역 필터 간소화
```

### 🎨 사용자 경험 개선

#### 키보드 단축키 설정
```markdown
추천 설정:
- Ctrl+Shift+P: 새 프로젝트
- Ctrl+Shift+T: 새 작업
- Ctrl+Shift+I: 새 아이디어
- Ctrl+Shift+A: 아카이브 보기
```

#### 시각적 구분
```markdown
색상 코딩:
- 프로젝트: 파란색 커버
- 에픽: 초록색 커버
- 스토리: 노란색 커버
- 작업: 회색 커버
- 아이디어: 보라색 커버
```

### 🔧 고급 구성

#### 다중 워크스페이스 연동
```markdown
설정:
1. 개인 프로젝트 Base
2. 업무 프로젝트 Base  
3. 학습 프로젝트 Base
4. 통합 대시보드 Base
```

#### 외부 도구 연동
```markdown
가능한 연동:
- GitHub Issues → Obsidian Tasks
- Jira Tickets → Stories
- Calendar Events → Milestones
- Time Tracking → Progress
```

### 📊 분석 및 리포팅

#### 생산성 대시보드
```markdown
메트릭:
- 주간 완료 작업 수
- 평균 작업 완료 시간
- 프로젝트 진행률
- 마감일 준수율
- 아이디어 실행율
```

#### 트렌드 분석
```markdown
추적 항목:
- 월별 프로젝트 수
- 카테고리별 작업 분포
- 우선순위별 완료율
- 반복 패턴 식별
```

## 문제 해결 및 FAQ

### ❓ 자주 묻는 질문

#### Q: Bases가 느려질 때는?
```markdown
A: 해결 방법
1. 뷰당 표시 항목 수 제한 (100개 이하)
2. 복잡한 함수 최소화
3. 아카이브 분리 운영
4. 불필요한 속성 정리
5. Obsidian 재시작
```

#### Q: 템플릿이 적용되지 않을 때는?
```markdown
A: 체크 포인트
1. 템플릿 폴더 위치 확인
2. 속성 이름 정확성 검증
3. kind 속성 존재 여부
4. 필터 설정 재확인
5. 캐시 클리어 후 재시도
```

#### Q: 뷰가 제대로 필터링되지 않을 때는?
```markdown
A: 문제 해결
1. 필터 구문 오타 확인
2. 속성 타입 일치 여부
3. 전역 필터와 충돌 검사
4. 대소문자 구분 주의
5. 정규식 문법 검증
```

### 🚨 일반적인 문제와 해결책

#### 성능 문제
```markdown
증상: Base 로딩 지연, 응답 없음
원인: 과도한 노트 수, 복잡한 필터
해결: 아카이브 분리, 필터 최적화
```

#### 동기화 문제
```markdown
증상: 다른 기기에서 Base 깨짐
원인: Catalyst 플러그인 버전 차이
해결: 모든 기기 동일 버전 사용
```

#### 데이터 손실
```markdown
예방: 정기 백업, Git 버전 관리
복구: .obsidian/workspace.json 복원
```

## 연결된 노트

### 🔗 상위 개념
- [[Obsidian 프로젝트 관리 전략]]
- [[PKM 시스템 구축 가이드]]
- [[생산성 도구 최적화]]

### 🔗 하위 세부사항
- [[Obsidian Bases 함수 레퍼런스]]
- [[프로젝트 템플릿 라이브러리]]
- [[Base 최적화 체크리스트]]

### 🔗 병렬 주제
- [[Notion vs Obsidian 비교]]
- [[Dataview vs Bases 선택 가이드]]
- [[AI 프로젝트 관리 도구]]

### 🔗 실전 활용
- [[개발자를 위한 Bases 활용법]]
- [[콘텐츠 크리에이터 프로젝트 관리]]
- [[팀 협업 Bases 구축 가이드]]

---

## 📚 출처 및 참고자료

### 🎬 주요 출처
- **동영상 제목**: How To Easily Organize Projects & Tasks With Obsidian Bases
- **채널명**: Wandloots (Callum)
- **원본 링크**: https://youtu.be/6UZemN4EVA0?si=vnqBeb_mUrZefgCj
- **분석 일자**: 2025년 7월 7일
- **내용 언어**: 영어 (한국어 분석)
- **동영상 길이**: 약 45분

### 🔗 핵심 참고자료
- **Obsidian Bases 공식 문서**: Core plugin 가이드 및 업데이트
- **Catalyst 라이선스**: 얼리 액세스 프로그램 정보
- **Obsidian 1.9.4 업데이트**: 최신 기능 및 개선사항
- **Smart Connections 플러그인**: AI 기반 노트 검색 시스템

### 💡 실습 관련 자료
- **Bases 함수 문법**: 동적 속성 계산 가이드
- **템플릿 시스템**: Obsidian 템플릿 최적화 방법
- **필터링 구문**: 고급 필터 설정 예제
- **뷰 임베딩**: 대시보드 구축 기법


### 🛠️ 추가 학습 자료
- **Obsidian 공식 문서**: Core plugins 및 워크플로우 가이드
- **Notion 마이그레이션 가이드**: Notion → Obsidian 전환 전략
- **프로젝트 관리 방법론**: Agile, Scrum, Kanban 적용법
- **AI 통합 플러그인**: Smart Connections, Text Generator

### 🎯 관련 도구 및 플랫폼
- **Obsidian**: 메인 노트 앱 (v1.9.4+)
- **Bases Plugin**: 코어 플러그인 (Catalyst 전용)
- **Templater**: 고급 템플릿 기능
- **Dataview**: 기존 쿼리 시스템 (비교 참조)

### 📊 인용된 기능 및 업데이트
- **직접 노트 추가**: 테이블에서 바로 노트 생성 기능
- **동적 함수**: 시간 기반 자동 계산 (relative() 함수)
- **카드 뷰**: 시각적 프로젝트 보드 기능
- **임베드 뷰**: 동적 대시보드 구축 기능

### 📚 추가 시리즈 자료
- **Video 1**: Obsidian Bases 기초 소개
- **Video 2**: Bases 최신 업데이트 상세 가이드
- **Molecular Zettelkasten**: 창작자의 노트 테이킹 시스템
- **AI & Obsidian 플레이리스트**: AI 통합 활용법

---

**💡 Pro Tip**: Obsidian Bases는 단순한 테이블 기능을 넘어서 **완전한 프로젝트 관리 생태계**를 제공합니다. 작은 프로젝트부터 시작해서 점진적으로 시스템을 확장해 나가세요!

**🎯 다음 학습 목표**: 실제 프로젝트에 Bases를 적용하여 Notion 수준의 프로젝트 관리 시스템을 Obsidian에서 완전 구현하기