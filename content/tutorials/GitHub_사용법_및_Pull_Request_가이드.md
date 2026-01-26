---
title: GitHub 사용법 및 Pull Request 가이드
created: 2025-06-14
last_modified: 2025-06-14
tags:
  - GitHub
  - Git
  - 버전관리
  - 협업
  - Pull-Request
  - 개발도구
  - VCS
status: completed
type: guide
priority: high
share_link: https://share.note.sx/0hnzgc3n#WijE33G0Ds2dnMj6YquXEmrVGhsHU1vh3EX++DLdhsw
share_updated: 2025-06-26T10:50:20+09:00
---

# GitHub 사용법 및 Pull Request 가이드

## 📋 목차
1. [[#개요]]
2. [[#Git과 GitHub 기초]]
3. [[#기본 워크플로우]]
4. [[#Pull Request 이해하기]]
5. [[#Pull Request 작성 방법]]
6. [[#협업 시나리오]]
7. [[#고급 기능]]
8. [[#베스트 프랙티스]]
9. [[#문제 해결]]

## 개요
- **핵심 주제**: GitHub를 활용한 소스 코드 버전 관리 및 협업
- **목적**: GitHub의 기본 사용법부터 Pull Request를 통한 협업까지 실무 가이드 제공
- **범위**: Git 기초 명령어, GitHub 저장소 관리, Pull Request 워크플로우

## Git과 GitHub 기초

### Git이란?
- 분산 버전 관리 시스템(DVCS)
- 코드 변경 이력을 추적하고 여러 개발자 간 협업 지원
- 로컬 저장소와 원격 저장소 개념

### GitHub이란?
- Git 저장소를 호스팅하는 웹 기반 플랫폼
- 코드 공유, 이슈 추적, 프로젝트 관리 기능 제공
- 오픈소스 프로젝트의 중심 허브

### 주요 용어
- **Repository (저장소)**: 프로젝트의 모든 파일과 변경 이력을 담는 공간
- **Commit**: 코드 변경사항을 저장하는 단위
- **Branch**: 독립적인 개발 라인
- **Merge**: 한 브랜치의 변경사항을 다른 브랜치에 통합

## 기본 워크플로우

### 1. 저장소 생성
```bash
# GitHub에서 New repository 버튼 클릭
# 저장소 이름 입력 (예: test)
# Add a README file 옵션 선택 여부 결정
```

### 2. 저장소 복제 (Clone)
```bash
# 저장소를 로컬로 복제
git clone https://github.com/username/repository-name

# 예시
git clone https://github.com/wow/test
```

### 3. 코드 수정 및 커밋
```bash
# 파일 수정 후

# 새로운 파일을 스테이징 영역에 추가
git add .

# 또는 특정 파일만 추가
git add filename.txt

# 변경사항 커밋
git commit -m "변경 내용에 대한 설명"

# 모든 추적된 파일의 변경사항을 한번에 커밋
git commit -a -m "수정한 내용에 대한 설명"
```

### 4. 원격 저장소에 푸시
```bash
# 로컬 변경사항을 GitHub에 업로드
git push

# 처음 푸시하는 경우
git push -u origin main
```

### 5. 변경사항 가져오기
```bash
# 다른 사람이 수정한 코드를 가져올 때
git pull
```

## Pull Request 이해하기

### Pull Request란?
- **정의**: 한 브랜치의 변경사항을 다른 브랜치로 병합하기 위한 제안
- **목적**: 코드 리뷰, 토론, 품질 관리를 통한 안전한 코드 통합
- **의미**: "내 코드를 가져가서(pull) 검토하고 병합해주세요"라는 요청

### Pull Request의 장점
1. **코드 리뷰**: 다른 개발자가 코드를 검토하여 품질 향상
2. **토론**: 변경사항에 대한 의견 교환 및 개선
3. **이력 관리**: 왜 변경했는지, 어떤 논의가 있었는지 기록
4. **자동화**: CI/CD 파이프라인과 연동하여 자동 테스트

## Pull Request 작성 방법

### 방법 1: Fork를 통한 PR
```bash
# 1. 원본 저장소를 Fork
# GitHub에서 Fork 버튼 클릭

# 2. Fork한 저장소를 Clone
git clone https://github.com/your-username/repository-name

# 3. 새 브랜치 생성
git checkout -b feature/new-feature

# 4. 코드 수정 및 커밋
git add .
git commit -m "Add new feature"

# 5. Fork한 저장소에 Push
git push origin feature/new-feature

# 6. GitHub에서 Pull Request 생성
# Fork한 저장소에서 "New pull request" 버튼 클릭
```

### 방법 2: Collaborator로서 PR
```bash
# 1. 저장소 Clone (이미 권한이 있는 경우)
git clone https://github.com/organization/repository-name

# 2. 새 브랜치 생성
git checkout -b feature/new-feature

# 3. 코드 수정 및 커밋
git add .
git commit -m "Add new feature"

# 4. 브랜치 Push
git push origin feature/new-feature

# 5. GitHub에서 Pull Request 생성
```

### Pull Request 작성 팁
1. **명확한 제목**: 변경사항을 한 줄로 요약
2. **상세한 설명**: 
   - 무엇을 변경했는지
   - 왜 변경했는지
   - 어떻게 테스트했는지
3. **이슈 연결**: `Closes #123` 형식으로 관련 이슈 자동 종료
4. **체크리스트**: 리뷰어가 확인해야 할 사항 명시

### Pull Request 템플릿 예시
```markdown
## 변경 사항
- 기능 A 추가
- 버그 B 수정

## 변경 이유
이슈 #123을 해결하기 위해...

## 테스트 방법
1. 기능 A 실행
2. 결과 확인

## 체크리스트
- [ ] 코드 스타일 가이드 준수
- [ ] 테스트 통과
- [ ] 문서 업데이트
```

## 협업 시나리오

### 시나리오 1: 두 명이 협업하는 경우
```
1. A가 코드 수정 후 GitHub에 Push
2. B가 Pull로 A의 변경사항을 받음
3. B가 추가 수정 후 다시 Push
4. A가 Pull로 B의 변경사항을 받음
```

### 시나리오 2: 오픈소스 기여
```
1. 원본 저장소 Fork
2. 기능 개발 또는 버그 수정
3. Pull Request 제출
4. 메인테이너 리뷰
5. 수정 요청 대응
6. 최종 병합
```

### 시나리오 3: 팀 프로젝트
```
1. main 브랜치는 보호 (직접 Push 금지)
2. 각 기능별로 feature 브랜치 생성
3. 개발 완료 후 Pull Request
4. 최소 1명 이상의 리뷰 필수
5. 모든 테스트 통과 후 병합
```

## 고급 기능

### 브랜치 전략
```bash
# 브랜치 생성 및 전환
git checkout -b feature/login

# 브랜치 목록 확인
git branch -a

# 브랜치 삭제
git branch -d feature/login
```

### 버전 되돌리기

Git에서 과거 버전으로 되돌리는 세 가지 주요 명령어가 있으며, 각각 다른 목적과 결과를 가집니다.

#### Git Reset - 커밋 이력 재작성
**목적**: 로컬 저장소의 커밋 이력을 변경하고 싶을 때 사용

```bash
# Soft Reset - 커밋만 취소, 변경사항은 스테이징 영역에 유지
git reset --soft HEAD~1

# Mixed Reset (기본값) - 커밋 취소, 변경사항은 작업 디렉토리에 유지
git reset HEAD~1
git reset --mixed HEAD~1  # 위와 동일

# Hard Reset - 커밋과 모든 변경사항 완전히 삭제
git reset --hard HEAD~1

# 특정 커밋으로 되돌리기
git reset --hard abc123
```

**특징**:
- 브랜치 포인터를 이동시킴
- 공유된 브랜치에서는 사용 주의 (히스토리 재작성)
- 최근 N개의 커밋만 취소 가능 (중간 커밋만 선택 불가)

**사용 예시**:
```bash
# 실수로 커밋한 경우
git reset --soft HEAD~1  # 커밋 취소, 파일은 스테이징 상태 유지

# 작업 내용을 완전히 버리고 싶은 경우
git reset --hard origin/main  # 원격 main 브랜치 상태로 완전 초기화
```

#### Git Revert - 안전한 커밋 취소
**목적**: 특정 커밋의 변경사항을 되돌리는 새로운 커밋을 생성

```bash
# 특정 커밋 되돌리기
git revert abc123

# 여러 커밋 되돌리기
git revert HEAD~3..HEAD

# 병합 커밋 되돌리기
git revert -m 1 merge-commit-hash

# 커밋 메시지 편집 없이 자동 커밋
git revert --no-edit abc123
```

**특징**:
- 새로운 커밋을 생성 (이력 보존)
- 공개 저장소에서 안전하게 사용 가능
- 특정 커밋만 선택적으로 되돌리기 가능

**사용 예시**:
```bash
# 배포된 버그 수정
git revert abc123  # 버그를 일으킨 커밋 되돌리기
git push           # 안전하게 원격에 푸시

# 여러 관련 커밋 한번에 되돌리기
git revert --no-commit HEAD~3..HEAD
git commit -m "Revert feature X due to critical bug"
```

#### Git Checkout - 임시로 과거 상태 확인
**목적**: 파일이나 전체 프로젝트를 특정 시점의 상태로 임시 전환

```bash
# 특정 커밋으로 HEAD 이동 (Detached HEAD 상태)
git checkout abc123

# 특정 파일만 과거 버전으로 복원
git checkout abc123 -- file.txt

# 브랜치 전환
git checkout feature-branch

# 변경사항 버리고 최신 커밋 상태로 복원
git checkout -- file.txt
```

**특징**:
- HEAD만 이동, 브랜치는 그대로
- Detached HEAD 상태에서는 새 커밋 주의
- 파일 단위로 선택적 복원 가능

**사용 예시**:
```bash
# 과거 버전 확인
git checkout v1.0.0  # 태그로 이동
# 확인 후 원래 브랜치로 복귀
git checkout main

# 실수로 삭제한 파일 복구
git checkout HEAD~1 -- deleted-file.txt
```

#### 명령어 선택 가이드

| 상황 | 추천 명령어 | 이유 |
|------|------------|------|
| 아직 푸시하지 않은 커밋 취소 | `git reset` | 로컬 이력 정리 가능 |
| 이미 공유된 커밋 취소 | `git revert` | 이력 보존하며 안전하게 되돌리기 |
| 특정 파일만 이전 상태로 | `git checkout -- file` | 파일 단위 복원 |
| 과거 코드 임시 확인 | `git checkout commit` | 읽기 전용 확인 |
| 스테이징 취소 | `git reset HEAD file` | add 취소 |

#### 실전 시나리오

**시나리오 1: 잘못된 커밋 수정**
```bash
# 방금 커밋한 내용 수정
git reset --soft HEAD~1
# 파일 수정
git add .
git commit -c ORIG_HEAD  # 이전 커밋 메시지 재사용
```

**시나리오 2: 프로덕션 버그 긴급 수정**
```bash
# 문제가 되는 커밋 찾기
git log --oneline
# 해당 커밋 되돌리기
git revert abc123
# 즉시 배포
git push origin hotfix
```

**시나리오 3: 실험적 변경 후 원복**
```bash
# 실험 전 현재 상태 기록
git stash
# 실험 진행...
# 원래 상태로 복원
git reset --hard HEAD
git stash pop
```

### 충돌 해결
```bash
# Pull 시 충돌 발생한 경우
git pull origin main

# 충돌 파일 수정 후
git add .
git commit -m "Resolve merge conflicts"
git push
```

### GitHub CLI 사용
```bash
# GitHub CLI 설치 후
# Pull Request 생성
gh pr create --title "Add new feature" --body "Description"

# Pull Request 목록 확인
gh pr list

# Pull Request 체크아웃
gh pr checkout 123
```

## 베스트 프랙티스

### 커밋 메시지 작성
1. **첫 줄**: 50자 이내로 변경사항 요약
2. **본문**: 72자 줄바꿈, 상세 설명
3. **형식 예시**:
   ```
   feat: 사용자 로그인 기능 추가
   
   - JWT 토큰 기반 인증 구현
   - 소셜 로그인 (구글, 카카오) 지원
   - 자동 로그인 옵션 추가
   
   Closes #45
   ```

### Pull Request 크기
- **작고 집중된 PR**: 리뷰하기 쉽고 버그 가능성 감소
- **하나의 목적**: 기능 추가와 리팩토링을 분리
- **500줄 이하**: 가능하면 변경 라인 수 제한

### 코드 리뷰 에티켓
1. **건설적인 피드백**: 문제점과 함께 해결책 제시
2. **구체적인 제안**: 코드 예시와 함께 설명
3. **긍정적인 부분도 언급**: 잘한 부분 칭찬
4. **질문 활용**: "이렇게 하면 어떨까요?"

### 보안 주의사항
- **민감 정보 제외**: API 키, 비밀번호 커밋 금지
- **.gitignore 활용**: 불필요한 파일 제외
- **환경 변수 사용**: 설정값은 별도 관리

## 문제 해결

### 자주 발생하는 문제
1. **Permission denied**: SSH 키 설정 또는 권한 확인
2. **Merge conflict**: 수동으로 충돌 해결 필요
3. **Rejected push**: 먼저 pull 후 push
4. **Large file error**: Git LFS 사용 고려

### 유용한 명령어
```bash
# 상태 확인
git status

# 변경 내용 확인
git diff

# 커밋 이력 확인
git log --oneline --graph

# 원격 저장소 정보
git remote -v

# 스테이징 취소
git reset HEAD filename

# 마지막 커밋 수정
git commit --amend
```

## 구현 체크리스트
- [ ] GitHub 계정 생성 및 설정
- [ ] Git 설치 및 기본 설정
- [ ] 첫 저장소 생성 및 클론
- [ ] 기본 Git 명령어 숙지
- [ ] 첫 Pull Request 작성
- [ ] 코드 리뷰 참여
- [ ] 브랜치 전략 이해
- [ ] CI/CD 연동 (선택사항)

## 연결된 노트
- **상위 개념**: [[버전 관리 시스템]], [[소프트웨어 개발 협업]]
- **하위 세부사항**: [[Git 고급 명령어]], [[GitHub Actions]]
- **병렬 주제**: [[GitLab 사용법]], [[Bitbucket 가이드]]
- **실전 활용**: [[오픈소스 기여 가이드]], [[팀 프로젝트 Git 전략]]

## 참고 자료
- [GitHub 공식 문서](https://docs.github.com)
- [Pro Git Book](https://git-scm.com/book/ko/v2)
- [GitHub Skills](https://skills.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git)
- [제주 베이스캠프 GitHub 핵심 개념 교안](https://paullabworkspace.notion.site/GitHub-435ec8074bcf4353afb947f601a030df)
- [제주 베이스캠프 GitHub 사용법 교안](https://www.books.weniv.co.kr/basecamp-github)
- [제주 베이스캠프 GitHub 사용법 영상](https://youtube.com/playlist?list=PLkfUwwo13dlV7jjrTZnlPgJQQXbxbqK6t&si=nGuLe3ffZgAGdhZJ)
- [제주 베이스캠프 GitHub 협업_Pull_Request 사용법 교안](https://www.books.weniv.co.kr/github/chapter05/05-3)
- [제주 베이스캠프 GitHub 협업 Pull_Request 사용법 영상](https://youtu.be/1e9MaoflQ3A)
- [Claude Code와의 연결_GitHub Action_Code Review](https://revfactory.github.io/claude-code-mastering/)