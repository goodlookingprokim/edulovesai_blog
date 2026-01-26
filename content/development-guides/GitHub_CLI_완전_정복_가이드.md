---
title: GitHub CLI 완전 정복 가이드 - 파인만 방식 스토리텔링
created: 2025-01-04
last_modified: 2025-01-04
tags:
  - 개발/도구
  - GitHub/CLI
  - 버전관리/Git
  - 개발/워크플로우
  - 도구/명령어
  - 입문/가이드
  - 실습/예제
  - 스토리텔링/학습
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/ua11leh8#pnzEtHjJ8fybmYknAICGoY4G8xTl3Etb0A3VeIroUmA
share_updated: 2025-11-07T23:19:34+09:00
---

# GitHub CLI 완전 정복 가이드 - 파인만 방식 스토리텔링

## 개요
- **핵심 주제**: GitHub CLI(Command Line Interface) 완전 학습 가이드
- **목적**: 깃헙을 처음 사용하는 개발자도 쉽게 따라할 수 있는 실전형 가이드
- **범위**: 기초 개념부터 고급 워크플로우까지 파인만 학습법 적용

## 📋 목차
1. [[#프롤로그 - 왜 GitHub CLI인가]]
2. [[#Chapter 1 - GitHub CLI와의 첫 만남]]
3. [[#Chapter 2 - 저장소와 친해지기]]
4. [[#Chapter 3 - 이슈로 소통하는 법]]
5. [[#Chapter 4 - 풀 리퀘스트 마스터하기]]
6. [[#Chapter 5 - 협업의 고수가 되는 법]]
7. [[#Chapter 6 - 실전 워크플로우 시나리오]]
8. [[#에pilogue - GitHub CLI 마스터의 길]]

---

## 프롤로그 - 왜 GitHub CLI인가?

### 📖 개발자 민수의 하루

민수는 신입 개발자입니다. 매일 아침 출근해서 컴퓨터를 켜면 가장 먼저 하는 일이 있었죠.

1. **웹 브라우저를 열고** → GitHub.com 접속
2. **마우스로 클릭클릭** → 내 저장소 찾기
3. **또 클릭클릭** → 이슈 확인하기
4. **계속 클릭클릭** → 풀 리퀘스트 상태 보기

"아... 이거 너무 번거롭다. 개발자인데 왜 이렇게 마우스만 클릭하고 있지?"

그때 선배 개발자가 말했습니다:

> "민수야, 진짜 개발자는 키보드만으로도 GitHub의 모든 걸 다룰 수 있어야 해. GitHub CLI라는 게 있거든?"

**GitHub CLI가 뭘까요?**

간단히 말하면, 웹브라우저 없이도 터미널에서 GitHub의 모든 기능을 사용할 수 있게 해주는 도구입니다. 마치 마법의 지팡이처럼요!

### 🎯 이 가이드의 특별함

이 가이드는 **파인만 학습법**을 적용했습니다:

1. **복잡한 걸 간단하게** - 어려운 개념도 쉬운 말로 설명
2. **스토리로 기억하기** - 실제 상황에서 어떻게 쓰이는지 이야기로 설명
3. **직접 해보기** - 읽기만 하지 말고 따라하면서 학습
4. **다른 사람에게 설명하기** - 각 챕터 끝에 "친구에게 설명해보기" 코너

---

## Chapter 1 - GitHub CLI와의 첫 만남

### 🚀 설치부터 시작해보죠

#### 1단계: 설치하기

**Mac 사용자라면:**
```bash
# Homebrew로 간단히 설치
brew install gh
```

**Windows 사용자라면:**
```bash
# Winget으로 설치
winget install --id GitHub.cli
```

**Linux 사용자라면:**
```bash
# Ubuntu/Debian 계열
sudo apt install gh

# CentOS/RHEL 계열  
sudo yum install gh
```

#### 2단계: 로그인하기

설치가 끝났다면 이제 GitHub 계정과 연결해야 합니다.

```bash
gh auth login
```

그러면 이런 질문들이 나옵니다:

```
? What account do you want to log into? 
  > GitHub.com
    GitHub Enterprise Server

? What is your preferred protocol for Git operations? 
  > HTTPS
    SSH

? Authenticate Git with your GitHub credentials? 
  > Yes
    No

? How would you like to authenticate GitHub CLI?
  > Login with a web browser
    Paste an authentication token
```

**초보자 추천 선택:**
- GitHub.com 선택
- HTTPS 선택 (더 간단함)
- Yes 선택 (Git도 함께 인증)
- Login with a web browser 선택 (더 쉬움)

### 🎭 실습 시나리오: 첫 번째 명령어

민수가 처음으로 GitHub CLI를 사용해보는 이야기입니다.

```bash
# 내가 누구인지 확인해보기
gh auth status
```

결과:
```
✓ Logged in to github.com as minsu-dev (/Users/minsu/.config/gh/hosts.yml)
✓ Git operations for github.com configured to use https protocol.
✓ Token: *******************
```

"와! 진짜 연결됐다!" 민수가 신기해합니다.

### 🔍 기본 정보 확인하기

```bash
# GitHub CLI 버전 확인
gh --version

# 도움말 보기 (언제든 헷갈리면 이걸 치세요!)
gh --help

# 특정 명령어 도움말
gh repo --help
```

### 💡 친구에게 설명해보기

**친구**: "GitHub CLI가 뭐야?"

**당신**: "음... 쉽게 말하면 GitHub 웹사이트에서 할 수 있는 모든 걸 터미널에서 할 수 있게 해주는 도구야. 마우스 클릭 대신 키보드 타이핑으로 더 빠르게 작업할 수 있어!"

---

## Chapter 2 - 저장소와 친해지기

### 📦 저장소(Repository)란 무엇인가?

저장소를 **디지털 서랍장**이라고 생각해보세요. 

- 옷장에 옷을 정리해서 넣듯이
- 코드 저장소에는 프로젝트 파일들을 정리해서 넣습니다
- 다른 사람들도 이 서랍장을 볼 수 있고, 함께 정리할 수도 있어요

### 🎪 실습 시나리오: 민수의 첫 번째 프로젝트

민수가 "나만의 할일 관리 앱"을 만들기로 했습니다.

#### Step 1: 새 저장소 만들기

```bash
# 현재 폴더를 GitHub 저장소로 만들기
gh repo create my-todo-app --public --source=. --remote=origin --push
```

**명령어 뜯어보기:**
- `gh repo create` : 새 저장소를 만들어줘
- `my-todo-app` : 저장소 이름
- `--public` : 모든 사람이 볼 수 있게 해줘
- `--source=.` : 현재 폴더의 내용을 사용해줘
- `--remote=origin` : 원격 저장소 이름을 origin으로 해줘
- `--push` : 지금 바로 업로드해줘

#### Step 2: 다른 사람의 저장소 복사해오기 (Clone)

선배가 만든 훌륭한 프로젝트를 보고 싶습니다.

```bash
# 저장소 복사해오기
gh repo clone facebook/react

# 또는 내가 포크한 저장소 복사하기
gh repo clone my-username/react
```

**실생활 비유:**
- `clone`은 도서관에서 책을 **복사**해서 집으로 가져오는 것과 같아요
- 원본은 그대로 두고, 똑같은 복사본을 내 컴퓨터에 만드는 거죠

#### Step 3: 저장소 정보 구경하기

```bash
# 현재 저장소 정보 터미널에서 보기
gh repo view

# 특정 저장소 정보 보기
gh repo view facebook/react

# 웹브라우저에서 열어보기
gh repo view facebook/react --web
```

### 🍴 포크(Fork) - 내가 수정할 수 있는 복사본 만들기

#### 포크가 뭐죠?

**레스토랑 비유:**
- 유명한 레스토랑의 레시피(원본 저장소)가 있어요
- 나만의 레스토랑을 차리고 싶어서 그 레시피를 **복사**해와요 (포크)
- 내 레스토랑에서는 레시피를 내 맘대로 **수정**할 수 있어요
- 수정한 레시피가 좋으면 원본 레스토랑에 **제안**할 수도 있어요 (풀 리퀘스트)

#### 실제로 포크해보기

```bash
# 현재 저장소를 내 계정으로 포크하기
gh repo fork

# 특정 저장소 포크하기
gh repo fork cli/cli

# 포크하면서 바로 복사해오기
gh repo fork cli/cli --clone
```

### 📊 저장소 목록 보기

```bash
# 내가 소유한 저장소 목록
gh repo list

# 내가 소유한 저장소 중 공개된 것만
gh repo list --public

# 특정 사용자의 저장소 목록
gh repo list facebook

# 더 많은 정보와 함께 보기
gh repo list --limit 50 --json name,description,url
```

### 🎯 실전 연습문제

**연습 1: 유명한 오픈소스 프로젝트 탐험하기**
```bash
# Vue.js 저장소 구경하기
gh repo view vuejs/vue --web

# React 저장소 포크해보기
gh repo fork facebook/react

# 내가 포크한 저장소 목록 확인하기  
gh repo list --fork
```

**연습 2: 나만의 저장소 만들어보기**
```bash
# 새 폴더 만들고 이동
mkdir my-first-project
cd my-first-project

# README 파일 만들기
echo "# 내 첫 번째 프로젝트" > README.md

# Git 저장소로 초기화
git init
git add README.md
git commit -m "첫 커밋"

# GitHub에 저장소 만들고 업로드
gh repo create my-first-project --public --source=. --remote=origin --push
```

### 💡 친구에게 설명해보기

**친구**: "포크가 뭐야? 클론이랑 뭐가 달라?"

**당신**: "클론은 그냥 복사해오는 거고, 포크는 내 계정에 복사본을 만드는 거야. 예를 들어, 유명한 유튜버의 영상을 다운받는 건 클론이고, 내 채널에 리믹스 버전을 올리는 건 포크인 셈이지!"

---

## Chapter 3 - 이슈로 소통하는 법

### 🎫 이슈(Issue)란?

이슈는 **디지털 메모지**라고 생각하세요.

- 버그를 발견했을 때: "로그인이 안 돼요!" 🐛
- 새 기능을 제안할 때: "다크모드 추가해주세요!" ✨  
- 질문이 있을 때: "이 함수는 어떻게 사용하나요?" ❓
- 개선 아이디어: "성능을 더 빠르게 할 수 있을 것 같아요!" 🚀

### 🎭 실습 시나리오: 민수의 버그 발견기

민수가 할일 관리 앱을 만들다가 문제를 발견했습니다.

#### Step 1: 이슈 목록 확인하기

```bash
# 현재 저장소의 모든 이슈 보기
gh issue list

# 열린 이슈만 보기
gh issue list --state open

# 닫힌 이슈도 함께 보기
gh issue list --state all

# 내가 만든 이슈만 보기
gh issue list --author @me

# 나에게 할당된 이슈만 보기  
gh issue list --assignee @me
```

#### Step 2: 새 이슈 만들기

**방법 1: 대화형으로 만들기**
```bash
gh issue create
```

그러면 이런 질문들이 나옵니다:
```
? Title: 로그인 버튼이 작동하지 않습니다
? Body: <Received>
? What's next? Submit
```

**방법 2: 한 번에 만들기**
```bash
gh issue create \
  --title "로그인 버튼이 작동하지 않습니다" \
  --body "Chrome 브라우저에서 로그인 버튼을 클릭해도 반응이 없습니다. 콘솔에 JavaScript 오류가 표시됩니다."
```

**방법 3: 웹에서 만들기**
```bash
gh issue create --web
```

#### Step 3: 이슈에 라벨 추가하기

```bash
# 이슈 만들면서 라벨 추가
gh issue create \
  --title "다크모드 추가 요청" \
  --body "사용자들이 다크모드를 원합니다" \
  --label "enhancement,good first issue"

# 기존 이슈에 라벨 추가
gh issue edit 5 --add-label "bug,high-priority"
```

### 🔍 이슈 자세히 보기

```bash
# 특정 이슈 내용 보기
gh issue view 1

# 웹브라우저에서 보기
gh issue view 1 --web

# 이슈의 댓글도 함께 보기
gh issue view 1 --comments
```

### 💬 이슈에 댓글 달기

```bash
# 이슈에 댓글 추가
gh issue comment 1 --body "저도 같은 문제를 겪고 있습니다!"

# 댓글을 웹 에디터에서 작성
gh issue comment 1 --web
```

### 🎯 이슈 상태 관리하기

```bash
# 이슈 닫기
gh issue close 1

# 이슈 닫을 때 메시지 추가
gh issue close 1 --comment "버그가 수정되었습니다!"

# 이슈 다시 열기
gh issue reopen 1

# 이슈를 다른 사람에게 할당
gh issue edit 1 --assignee username

# 이슈를 나에게 할당
gh issue edit 1 --assignee @me
```

### 🏷️ 라벨 시스템 활용하기

```bash
# 저장소의 모든 라벨 보기
gh label list

# 새 라벨 만들기
gh label create "urgent" --description "긴급한 이슈" --color "ff0000"

# 라벨로 이슈 필터링
gh issue list --label "bug"
gh issue list --label "bug,urgent"
```

### 🎪 실전 시나리오: 팀 프로젝트에서의 이슈 활용

**상황**: 민수의 팀이 쇼핑몰 앱을 개발하고 있습니다.

#### 시나리오 1: 버그 리포트
```bash
# QA 테스터가 버그를 발견했을 때
gh issue create \
  --title "[BUG] 결제 페이지에서 카드 번호 입력 불가" \
  --body "## 재현 단계
1. 상품을 장바구니에 담기
2. 결제 페이지로 이동
3. 카드 번호 입력란 클릭

## 예상 결과
카드 번호를 입력할 수 있어야 함

## 실제 결과  
입력란이 비활성화됨

## 환경
- 브라우저: Chrome 96
- OS: Windows 10" \
  --label "bug,high-priority" \
  --assignee dev-team-leader
```

#### 시나리오 2: 기능 요청
```bash
# 고객이 새 기능을 요청했을 때
gh issue create \
  --title "[FEATURE] 찜하기 기능 추가" \
  --body "고객들이 상품을 찜할 수 있는 기능이 필요합니다.

## 요구사항
- [ ] 상품 페이지에 하트 버튼 추가
- [ ] 찜한 상품 목록 페이지
- [ ] 찜한 상품 알림 기능

## 예상 개발 시간
2주" \
  --label "enhancement,customer-request"
```

#### 시나리오 3: 이슈 트래킹
```bash
# 주간 이슈 현황 파악
gh issue list --state open --label "bug" | wc -l  # 열린 버그 개수
gh issue list --state open --assignee @me        # 내가 담당한 이슈들
```

### 🔧 고급 이슈 관리 기법

#### 이슈 템플릿 활용
```bash
# 이슈 템플릿으로 만들기 (저장소에 .github/ISSUE_TEMPLATE/ 폴더가 있을 때)
gh issue create --template bug_report.md
```

#### 이슈를 Pull Request로 연결
```bash
# 이슈를 해결하는 브랜치 만들기
git checkout -b fix-login-bug

# 작업 후 PR 만들면서 이슈 언급
gh pr create \
  --title "로그인 버그 수정" \
  --body "Fixes #1

로그인 버튼의 이벤트 리스너를 수정했습니다."
```

### 💡 친구에게 설명해보기

**친구**: "이슈가 그냥 할일 목록이야?"

**당신**: "비슷하긴 한데 더 강력해! 할일 목록은 혼자 쓰는 거지만, 이슈는 팀 전체가 함께 보고 토론할 수 있어. 마치 회사의 업무 게시판 같은 거야. 누구든지 문제를 올리고, 담당자를 정하고, 진행 상황을 추적할 수 있거든!"

---

## Chapter 4 - 풀 리퀘스트 마스터하기

### 🤝 풀 리퀘스트(Pull Request)란?

풀 리퀘스트를 **레스토랑 메뉴 제안**으로 생각해보세요.

1. **내가 새로운 요리를 개발** (코드 작성)
2. **셰프에게 메뉴 추가를 제안** (PR 생성)
3. **셰프가 요리를 맛보고 검토** (코드 리뷰)
4. **승인되면 메뉴에 추가** (머지)
5. **거절되면 레시피 수정 후 재제안** (수정 후 다시 PR)

### 🎭 실습 시나리오: 민수의 첫 번째 기여

민수가 오픈소스 프로젝트에 기여하기로 했습니다.

#### Step 1: 브랜치 만들고 작업하기

```bash
# 새 기능을 위한 브랜치 만들기
git checkout -b add-dark-mode

# 코드 작업 후 커밋
git add .
git commit -m "다크 모드 기능 추가"

# 원격 저장소에 브랜치 올리기
git push origin add-dark-mode
```

#### Step 2: 풀 리퀘스트 만들기

**방법 1: 대화형으로 만들기**
```bash
gh pr create
```

질문들이 나옵니다:
```
? Where should we push the 'add-dark-mode' branch? your-username/project-name
? Title: 다크 모드 기능 추가
? Body: <Received>
? What's next? Submit
```

**방법 2: 한 번에 만들기**
```bash
gh pr create \
  --title "다크 모드 기능 추가" \
  --body "## 변경 사항
- 다크 모드 토글 버튼 추가
- CSS 다크 테마 구현
- 사용자 설정 저장 기능

## 테스트
- [ ] Chrome에서 다크 모드 토글 테스트
- [ ] Firefox에서 색상 확인
- [ ] 모바일 브라우저 호환성 테스트

Closes #15" \
  --assignee reviewer-username \
  --label "feature,UI"
```

**방법 3: 웹에서 만들기**
```bash
gh pr create --web
```

#### Step 3: 다른 브랜치로 PR 보내기

```bash
# develop 브랜치로 PR 보내기 (기본은 main)
gh pr create --base develop

# 특정 저장소의 특정 브랜치로 PR 보내기
gh pr create --base upstream:main
```

### 📋 풀 리퀘스트 목록 보기

```bash
# 현재 저장소의 모든 PR 보기
gh pr list

# 내가 만든 PR만 보기
gh pr list --author @me

# 내가 리뷰어로 지정된 PR 보기
gh pr list --reviewer @me

# 특정 상태의 PR 보기
gh pr list --state merged  # 머지된 PR
gh pr list --state closed  # 닫힌 PR
gh pr list --state open    # 열린 PR

# 특정 라벨의 PR 보기
gh pr list --label "bug-fix"
```

### 🔍 풀 리퀘스트 자세히 보기

```bash
# PR 내용 보기
gh pr view 25

# 웹브라우저에서 보기
gh pr view 25 --web

# PR의 변경된 파일들 보기
gh pr diff 25

# PR과 관련된 커밋들 보기
gh pr view 25 --json commits
```

### 💻 풀 리퀘스트 체크아웃하기

```bash
# PR을 내 로컬로 가져와서 테스트하기
gh pr checkout 25

# PR 번호 대신 브랜치 이름으로도 가능
gh pr checkout add-dark-mode
```

이제 그 PR의 코드를 직접 실행해보고 테스트할 수 있습니다!

### 💬 풀 리퀘스트 리뷰하기

#### 리뷰 댓글 달기
```bash
# PR에 일반 댓글 달기
gh pr comment 25 --body "전반적으로 좋은 구현인 것 같습니다!"

# 특정 라인에 댓글 달기 (웹에서 하는 게 더 편함)
gh pr comment 25 --web
```

#### 리뷰 상태 설정하기
```bash
# 승인하기
gh pr review 25 --approve --body "LGTM! 훌륭한 구현입니다."

# 변경 요청하기
gh pr review 25 --request-changes --body "몇 가지 수정이 필요합니다. 댓글을 확인해 주세요."

# 일반 댓글 남기기
gh pr review 25 --comment --body "궁금한 점이 있어서 질문 남깁니다."
```

### 🎯 풀 리퀘스트 상태 관리

```bash
# PR 머지하기
gh pr merge 25

# 머지 방식 선택하기
gh pr merge 25 --merge     # 일반 머지
gh pr merge 25 --squash    # 스쿼시 머지 (커밋을 하나로 합침)
gh pr merge 25 --rebase    # 리베이스 머지

# PR 닫기 (머지하지 않고)
gh pr close 25

# PR 다시 열기
gh pr reopen 25

# PR을 draft로 변경 (아직 작업 중임을 표시)
gh pr ready 25 --undo
```

### 🔄 풀 리퀘스트 업데이트하기

```bash
# PR에 리뷰어 추가
gh pr edit 25 --add-reviewer alice,bob

# PR에 라벨 추가
gh pr edit 25 --add-label "urgent,bugfix"

# PR 제목이나 설명 수정
gh pr edit 25 --title "새로운 제목" --body "새로운 설명"
```

### 🎪 실전 시나리오: 코드 리뷰 프로세스

**상황**: 민수가 팀의 코드 리뷰어가 되었습니다.

#### 시나리오 1: 신입 개발자의 PR 리뷰

```bash
# 1. 새로운 PR 확인
gh pr list --author junior-dev

# 2. PR 내용 자세히 보기
gh pr view 30
gh pr diff 30

# 3. 로컬에서 테스트해보기
gh pr checkout 30
npm test  # 테스트 실행
npm start # 실제로 동작하는지 확인

# 4. 리뷰 댓글 작성
gh pr review 30 --comment --body "## 전반적인 평가
좋은 시도입니다! 몇 가지 개선점을 제안합니다.

## 수정 제안
1. 함수명을 더 명확하게 변경해주세요
2. 에러 처리를 추가해주세요
3. 테스트 케이스를 몇 개 더 추가하면 좋겠습니다

질문이 있으면 편하게 물어보세요! 😊"
```

#### 시나리오 2: 긴급 버그 수정 PR

```bash
# 1. 긴급 라벨이 붙은 PR 확인
gh pr list --label "urgent"

# 2. 빠른 검토 후 승인
gh pr view 31
gh pr review 31 --approve --body "긴급 수정이니 빠르게 승인합니다. 추후 리팩토링 이슈를 별도로 만들어주세요."

# 3. 즉시 머지
gh pr merge 31 --squash
```

#### 시나리오 3: 대규모 기능 PR

```bash
# 1. 큰 PR은 더 꼼꼼히 검토
gh pr view 32
gh pr diff 32 > pr-changes.txt  # 변경사항을 파일로 저장해서 검토

# 2. 다른 팀원들에게도 리뷰 요청
gh pr edit 32 --add-reviewer senior-dev1,senior-dev2

# 3. 변경 요청
gh pr review 32 --request-changes --body "## Architecture Review

전반적인 구조는 좋으나 다음 사항들을 검토해주세요:

### 성능 관련
- 데이터베이스 쿼리 최적화 필요
- 메모리 사용량 체크 필요

### 보안 관련  
- 입력값 검증 로직 추가
- SQL injection 방어 코드 필요

큰 기능이니 충분히 검토 후 다시 요청해주세요!"
```

### 🚀 고급 PR 워크플로우

#### PR 템플릿 활용
```bash
# PR 템플릿이 있는 저장소에서 (저장소에 .github/pull_request_template.md 파일이 있을 때)
gh pr create  # 자동으로 템플릿이 적용됨
```

#### CI/CD와 연동된 PR 관리
```bash
# PR의 CI 상태 확인
gh pr checks 25

# CI가 실패한 PR만 보기
gh pr list --json number,title,statusCheckRollupState | jq '.[] | select(.statusCheckRollupState == "FAILURE")'
```

#### PR 메트릭 확인
```bash
# 내가 만든 PR 통계
gh pr list --author @me --state all --json number,title,createdAt,mergedAt

# 팀의 PR 리뷰 현황
gh pr list --state open --json number,title,reviewRequests
```

### 💡 친구에게 설명해보기

**친구**: "풀 리퀘스트가 뭔지 아직도 헷갈려..."

**당신**: "친구야, 카카오톡 단체방을 생각해봐. 내가 '저녁 메뉴 치킨 어때?'라고 제안하면, 다른 친구들이 '좋아!', '아니 피자가 낫겠다', '치킨 찬성!' 이런 식으로 반응하잖아? PR도 똑같아. 내가 코드 변경을 제안하면, 다른 개발자들이 검토하고 의견을 말하는 거야. 모두가 OK하면 그 코드가 실제 프로젝트에 반영되는 거지!"

---

## Chapter 5 - 협업의 고수가 되는 법

### 👥 팀워크의 핵심: 상태 확인하기

협업에서 가장 중요한 건 **"지금 뭐가 일어나고 있는지 파악하는 것"**입니다.

#### 내 작업 현황 한눈에 보기

```bash
# 내 모든 작업 현황 보기
gh pr status
gh issue status
```

결과는 이런 식으로 나옵니다:
```
Relevant pull requests in facebook/react

Current branch
  #1234  Add dark mode support [your-branch]
  ✓ Checks passing - Review required

Created by you
  #1230  Fix memory leak in useEffect  [merged 2 days ago]
  #1228  Update documentation [closed]

Requesting a code review from you  
  #1235  Implement lazy loading [review-needed]
  #1232  Fix responsive design [changes-requested]
```

#### 팀 전체 현황 파악하기

```bash
# 팀원들이 올린 PR 확인
gh pr list --author alice,bob,charlie

# 리뷰가 필요한 PR들
gh pr list --reviewer @me

# 긴급한 이슈들
gh issue list --label "urgent,high-priority"
```

### 🎯 실전 협업 시나리오

#### 시나리오 1: 아침 일과 - 팀 현황 체크

**민수의 아침 루틴:**

```bash
# 1. 밤사이 변화된 내용 확인
gh pr status
gh issue status

# 2. 내가 리뷰해야 할 PR 확인
gh pr list --reviewer @me --state open

# 3. 내 PR에 온 코멘트 확인
gh pr list --author @me --state open

# 4. 긴급한 이슈가 있는지 확인
gh issue list --label "urgent" --state open
```

#### 시나리오 2: 코드 리뷰 시간

**효율적인 리뷰 프로세스:**

```bash
# 1. 리뷰할 PR 하나씩 체크아웃해서 테스트
gh pr list --reviewer @me | head -1  # 첫 번째 PR 확인
gh pr checkout 45  # PR을 로컬로 가져오기

# 2. 실제로 실행해보기
npm install
npm test
npm start

# 3. 문제없으면 승인, 문제있으면 변경 요청
gh pr review 45 --approve --body "LGTM! 테스트도 잘 통과합니다."
# 또는
gh pr review 45 --request-changes --body "함수명을 더 명확하게 바꿔주세요."
```

#### 시나리오 3: 릴리즈 준비

**배포 전 마지막 점검:**

```bash
# 1. 모든 PR이 머지되었는지 확인
gh pr list --state open --milestone "v2.1.0"

# 2. 중요한 버그가 모두 해결되었는지 확인  
gh issue list --label "bug,critical" --state open

# 3. 마지막 PR 머지
gh pr merge 50 --squash

# 4. 릴리즈 태그 생성 (별도 명령어 또는 웹에서)
gh release create v2.1.0 --title "Version 2.1.0" --notes "주요 기능 추가 및 버그 수정"
```

### 🏷️ 라벨과 마일스톤 활용법

#### 라벨 시스템 구축

```bash
# 우선순위 라벨
gh label create "priority-high" --color "ff0000" --description "높은 우선순위"
gh label create "priority-medium" --color "ffaa00" --description "중간 우선순위"  
gh label create "priority-low" --color "00ff00" --description "낮은 우선순위"

# 타입별 라벨
gh label create "type-bug" --color "d73a4a" --description "버그 수정"
gh label create "type-feature" --color "0075ca" --description "새로운 기능"
gh label create "type-docs" --color "0052cc" --description "문서 작업"

# 상태 라벨
gh label create "status-review" --color "fbca04" --description "리뷰 필요"
gh label create "status-blocked" --color "d4c5f9" --description "블로킹됨"
```

#### 마일스톤으로 버전 관리

```bash
# 새 마일스톤 생성 (웹에서 하는 게 더 편함)
gh api repos/:owner/:repo/milestones -f title="v2.1.0" -f description="2.1.0 버전 릴리즈"

# 특정 마일스톤의 이슈/PR 확인
gh issue list --milestone "v2.1.0"
gh pr list --milestone "v2.1.0"
```

### 🔄 브랜치 전략과 협업

#### 일반적인 브랜치 전략

```bash
# 1. 기능 개발
git checkout -b feature/user-authentication
# 작업...
gh pr create --base develop

# 2. 버그 수정
git checkout -b hotfix/login-error
# 수정...
gh pr create --base main

# 3. 릴리즈 준비
git checkout -b release/v2.1.0
# 준비...
gh pr create --base main
```

#### 여러 저장소 관리

```bash
# 내가 기여하는 모든 저장소의 이슈 확인
gh search issues --involves @me --state open

# 내가 만든 모든 PR 확인 (모든 저장소에서)
gh search prs --author @me --state open
```

### 📊 팀 생산성 모니터링

#### 간단한 메트릭 수집

```bash
# 이번 주에 머지된 PR 개수
gh pr list --state merged --json mergedAt,number | jq '[.[] | select(.mergedAt > "2024-01-01")] | length'

# 평균 PR 크기 (대략적으로)
gh pr list --state merged --limit 10 --json additions,deletions

# 리뷰 응답 시간 추적을 위한 데이터
gh pr list --state merged --json number,createdAt,mergedAt --limit 20
```

### 🚨 긴급 상황 대응

#### 핫픽스 워크플로우

```bash
# 1. 운영 서버에 버그 발견!
gh issue create \
  --title "[URGENT] 결제 시스템 오류" \
  --body "고객이 결제를 할 수 없는 상황입니다." \
  --label "urgent,bug,hotfix"

# 2. 빠른 수정
git checkout main
git pull origin main
git checkout -b hotfix/payment-error

# 수정 작업...
git add .
git commit -m "hotfix: 결제 시스템 오류 수정"
git push origin hotfix/payment-error

# 3. 긴급 PR 생성
gh pr create \
  --title "[HOTFIX] 결제 시스템 오류 수정" \
  --body "긴급 수정사항입니다. 즉시 리뷰 부탁드립니다." \
  --label "urgent,hotfix" \
  --assignee senior-dev

# 4. 팀원들에게 알림 (Slack 등으로)
echo "긴급 PR이 올라갔습니다: $(gh pr view --json url -q .url)"
```

### 🎪 대규모 팀 협업 전략

#### 권한 관리와 승인 프로세스

```bash
# 중요한 브랜치로의 PR은 특별 관리
gh pr create --base main \
  --title "중요한 변경사항" \
  --body "main 브랜치로의 머지이므로 시니어 개발자의 승인이 필요합니다." \
  --reviewer senior-dev1,senior-dev2

# PR 머지 전 자동 검사
gh pr merge 60 --auto  # CI가 통과하면 자동 머지
```

#### 코드 소유권 관리

```bash
# 특정 팀만 리뷰할 수 있는 PR 생성
gh pr create \
  --title "백엔드 API 수정" \
  --body "백엔드 팀의 리뷰가 필요합니다." \
  --team backend-team
```

### 💡 친구에게 설명해보기

**친구**: "혼자 개발할 때랑 팀으로 개발할 때랑 뭐가 달라?"

**당신**: "혼자 개발하는 건 혼자 방 정리하는 것 같고, 팀 개발은 가족들과 집 정리하는 것 같아. 혼자서는 마음대로 할 수 있지만, 팀에서는 '이 서랍 정리할게', '저는 거실 할게' 이런 식으로 소통하고 계획을 세워야 하잖아? GitHub CLI는 그런 소통을 더 쉽게 해주는 도구야!"

---

## Chapter 6 - 실전 워크플로우 시나리오

### 🎬 시나리오 1: 새 회사 첫 출근

**상황**: 민수가 새로운 회사에 입사했습니다. 첫 날 해야 할 일들을 GitHub CLI로 처리해봅시다.

#### 첫날 세팅

```bash
# 1. 회사 GitHub 조직의 저장소들 확인
gh repo list company-org

# 2. 메인 프로젝트 클론
gh repo clone company-org/main-product
cd main-product

# 3. 프로젝트 구조 파악
gh repo view  # 프로젝트 설명 읽기
gh issue list --label "good-first-issue"  # 초보자용 이슈 찾기

# 4. 팀원들이 어떤 작업을 하고 있는지 확인
gh pr list --state open  # 현재 진행 중인 PR들
gh issue list --assignee team-lead  # 팀 리더가 담당한 이슈들
```

#### 첫 번째 작업 시작

```bash
# 5. 초보자용 이슈 하나 선택
gh issue view 42
gh issue comment 42 --body "안녕하세요! 새로 합류한 민수입니다. 이 이슈 작업해도 될까요?"

# 6. 이슈를 나에게 할당 (또는 팀 리더에게 요청)
gh issue edit 42 --assignee @me

# 7. 작업용 브랜치 생성
git checkout -b fix-typo-in-readme
```

### 🎬 시나리오 2: 버그 발견과 수정

**상황**: 민수가 개발하다가 버그를 발견했습니다.

#### 버그 리포팅과 수정

```bash
# 1. 버그 발견! 먼저 이슈 생성
gh issue create \
  --title "사용자 프로필 이미지가 로드되지 않음" \
  --body "## 문제 상황
사용자가 프로필 이미지를 업로드했는데 화면에 표시되지 않습니다.

## 재현 단계
1. 로그인
2. 설정 → 프로필 이미지 업로드
3. 프로필 페이지 확인

## 예상 결과
업로드한 이미지가 표시되어야 함

## 실제 결과
기본 이미지가 계속 표시됨

## 추가 정보
- 브라우저: Chrome 96
- 파일 크기: 2MB
- 파일 형식: JPG" \
  --label "bug,high-priority"

# 2. 생성된 이슈 번호 확인 (예: #78)
gh issue list --author @me --limit 1

# 3. 버그 수정 브랜치 생성
git checkout -b fix-profile-image-upload

# 4. 코드 수정 작업
# ... 실제 수정 작업 ...

# 5. 수정 사항 커밋
git add .
git commit -m "fix: 프로필 이미지 업로드 버그 수정

- 파일 업로드 경로 수정
- 이미지 표시 로직 개선
- 에러 처리 추가

Fixes #78"

# 6. PR 생성
gh pr create \
  --title "프로필 이미지 업로드 버그 수정" \
  --body "## 변경 사항
- 파일 업로드 API 경로 수정
- 프로필 이미지 표시 로직 개선
- 파일 형식 검증 로직 추가

## 테스트
- [x] 로컬에서 이미지 업로드 테스트
- [x] 다양한 파일 형식 테스트 (JPG, PNG, GIF)
- [x] 파일 크기 제한 테스트

Fixes #78" \
  --assignee team-lead
```

### 🎬 시나리오 3: 기능 개발 프로젝트

**상황**: 민수가 새로운 댓글 시스템을 개발하기로 했습니다.

#### 기능 개발 전체 과정

```bash
# 1. 기능 요청 이슈 생성
gh issue create \
  --title "[FEATURE] 실시간 댓글 시스템 구현" \
  --body "## 기능 설명
사용자들이 게시글에 실시간으로 댓글을 달 수 있는 시스템

## 요구사항
- [ ] 댓글 작성/수정/삭제 기능
- [ ] 실시간 댓글 업데이트 (WebSocket)
- [ ] 댓글 좋아요 기능
- [ ] 대댓글 (답글) 기능
- [ ] 스팸 필터링

## 예상 개발 기간
3주

## 관련 이슈
연관된 이슈가 있다면 여기에 작성" \
  --label "feature,epic" \
  --milestone "v2.2.0"

# 2. 큰 기능이므로 작은 단위로 나누어 이슈 생성
gh issue create --title "[TASK] 댓글 DB 스키마 설계" --body "댓글 시스템을 위한 데이터베이스 스키마 설계"
gh issue create --title "[TASK] 댓글 API 엔드포인트 구현" --body "댓글 CRUD API 구현"
gh issue create --title "[TASK] 댓글 UI 컴포넌트 구현" --body "댓글 표시 및 작성 UI 구현"
gh issue create --title "[TASK] WebSocket 실시간 업데이트" --body "실시간 댓글 업데이트 기능"

# 3. 첫 번째 작업 시작
git checkout -b feature/comment-db-schema

# 작업 완료 후
git add .
git commit -m "feat: 댓글 시스템 DB 스키마 추가

- comments 테이블 생성
- 사용자-댓글 관계 설정
- 인덱스 최적화

Closes #85"

gh pr create \
  --title "댓글 시스템 DB 스키마 구현" \
  --body "첫 번째 단계인 DB 스키마를 구현했습니다.

## 변경사항
- `comments` 테이블 추가
- 외래키 관계 설정
- 성능 최적화를 위한 인덱스 추가

Closes #85
Related to #84" \
  --label "feature,database"

# 4. 다음 작업으로 이어가기
git checkout main
git pull origin main
git checkout -b feature/comment-api

# ... 반복 ...
```

### 🎬 시나리오 4: 코드 리뷰 스페셜리스트

**상황**: 민수가 팀의 주요 리뷰어가 되어 여러 PR을 효율적으로 리뷰해야 합니다.

#### 효율적인 리뷰 프로세스

```bash
# 1. 오늘 리뷰해야 할 PR들 확인
gh pr list --reviewer @me --state open

# 2. 우선순위 높은 PR부터 처리
gh pr list --reviewer @me --label "urgent" --state open

# 3. 각 PR 빠르게 스캔
for pr in $(gh pr list --reviewer @me --json number -q '.[].number'); do
    echo "=== PR #$pr ==="
    gh pr view $pr --json title,author,labels -q '.title + " by " + .author.login'
    echo ""
done

# 4. 첫 번째 PR 자세히 검토
gh pr view 123
gh pr diff 123

# 5. 로컬에서 테스트
gh pr checkout 123
npm test
npm run lint

# 6. 리뷰 결과에 따라 처리
# 승인할 경우:
gh pr review 123 --approve --body "코드 품질이 좋습니다. 테스트도 통과했어요! 👍"

# 수정 요청할 경우:
gh pr review 123 --request-changes --body "몇 가지 수정사항이 있습니다:

## 필수 수정사항
1. Line 42: 함수명을 더 명확하게 변경해주세요
2. Line 67: null 체크 로직이 누락되었습니다
3. 테스트 케이스를 추가해주세요

## 선택사항
- 주석을 좀 더 자세히 달아주시면 좋겠습니다

전반적으로 좋은 코드입니다! 수정 후 다시 리뷰 요청해주세요."

# 일반 댓글일 경우:
gh pr review 123 --comment --body "궁금한 점이 있어서 댓글 남깁니다. 이 부분은 왜 이렇게 구현하셨나요?"
```

### 🎬 시나리오 5: 오픈소스 기여하기

**상황**: 민수가 좋아하는 오픈소스 프로젝트에 기여하고 싶습니다.

#### 오픈소스 기여 전체 과정

```bash
# 1. 기여하고 싶은 프로젝트 찾기
gh repo view facebook/react
gh repo view --web facebook/react  # 웹에서 자세히 살펴보기

# 2. 프로젝트 포크하기
gh repo fork facebook/react --clone

# 3. 기여할 수 있는 이슈 찾기
cd react
gh issue list --label "good first issue,help wanted" --state open

# 4. 기여 가이드라인 확인
cat CONTRIBUTING.md  # 기여 가이드 읽기
cat CODE_OF_CONDUCT.md  # 행동 강령 읽기

# 5. 이슈 선택하고 작업 의사 표현
gh issue view 25847
gh issue comment 25847 --body "Hi! I'd like to work on this issue. Could you assign it to me?"

# 6. 개발 환경 설정
npm install
npm test  # 모든 테스트가 통과하는지 확인

# 7. 작업용 브랜치 생성
git checkout -b fix-documentation-typo

# 8. 작업 완료 후 커밋
git add .
git commit -m "docs: fix typo in React.memo documentation

Fix 'memozied' to 'memoized' in React.memo examples.

Fixes #25847"

# 9. 내 포크에 푸시
git push origin fix-documentation-typo

# 10. 원본 저장소에 PR 생성
gh pr create \
  --title "docs: fix typo in React.memo documentation" \
  --body "## Summary
Fixed a typo in the React.memo documentation.

## Changes
- Changed 'memozied' to 'memoized' in code examples
- Updated related comments for consistency

## Testing
- [x] Verified documentation builds successfully
- [x] Checked for similar typos in related files

Fixes #25847

Thank you for maintaining this amazing project! 🙏" \
  --base facebook:main
```

### 🎬 시나리오 6: 프로젝트 관리자 되기

**상황**: 민수가 팀 프로젝트의 관리자가 되어 전체 프로젝트를 관리해야 합니다.

#### 프로젝트 관리 워크플로우

```bash
# 1. 주간 계획 세우기 (월요일 아침)
echo "=== 이번 주 계획 ==="

# 이번 주 마일스톤 확인
gh issue list --milestone "Sprint-12" --state open
gh pr list --milestone "Sprint-12" --state open

# 2. 팀원별 작업 현황 확인
gh issue list --assignee alice --state open
gh issue list --assignee bob --state open
gh pr list --author alice,bob --state open

# 3. 우선순위 높은 이슈들 체크
gh issue list --label "high-priority,urgent" --state open

# 4. 블로킹 이슈들 확인
gh issue list --label "blocked" --state open

# 5. 주간 보고서 생성 (간단한 스크립트)
echo "## 이번 주 완료된 작업"
gh issue list --state closed --milestone "Sprint-12"

echo "## 진행 중인 작업"  
gh issue list --state open --milestone "Sprint-12"

echo "## 다음 주 계획"
gh issue list --milestone "Sprint-13" --state open

# 6. 릴리즈 준비 (스프린트 마지막 날)
echo "=== 릴리즈 체크리스트 ==="

# 모든 PR이 머지되었는지 확인
open_prs=$(gh pr list --milestone "Sprint-12" --state open --json number | jq length)
if [ $open_prs -eq 0 ]; then
    echo "✅ 모든 PR이 머지되었습니다"
else
    echo "❌ $open_prs 개의 PR이 아직 열려있습니다"
    gh pr list --milestone "Sprint-12" --state open
fi

# 중요한 버그가 해결되었는지 확인
critical_bugs=$(gh issue list --label "bug,critical" --state open --json number | jq length)
if [ $critical_bugs -eq 0 ]; then
    echo "✅ 중요한 버그가 모두 해결되었습니다"
else
    echo "❌ $critical_bugs 개의 중요한 버그가 남아있습니다"
fi
```

### 🎬 시나리오 7: 긴급상황 대응

**상황**: 운영 서버에 심각한 문제가 발생했습니다!

#### 긴급상황 대응 프로토콜

```bash
# 1. 긴급 이슈 생성
gh issue create \
  --title "🚨 [CRITICAL] 운영 서버 다운" \
  --body "## 긴급상황 발생!

**발생 시간**: $(date)
**영향 범위**: 전체 서비스
**상황**: 서버가 응답하지 않음

## 즉시 확인 필요
- [ ] 서버 로그 확인
- [ ] 데이터베이스 상태 확인  
- [ ] CDN 상태 확인
- [ ] 트래픽 패턴 분석

## 담당자
@devops-team @senior-dev @team-lead" \
  --label "critical,urgent,incident" \
  --assignee devops-lead

# 2. 긴급 대응팀 소집
gh issue comment $(gh issue list --label critical --limit 1 --json number -q '.[0].number') \
  --body "전체 개발팀에게 알립니다. 긴급상황이 발생했습니다. 

**온콜 담당자들은 즉시 대응 부탁드립니다.**
- DevOps: @john-devops
- Backend: @alice-backend  
- Frontend: @bob-frontend

Slack #incident 채널로 모여주세요."

# 3. 핫픽스 브랜치 준비
git checkout main
git pull origin main
git checkout -b hotfix/critical-server-issue

# 4. 빠른 수정 후 긴급 배포
# ... 수정 작업 ...

git add .
git commit -m "hotfix: 서버 다운 긴급 수정

- 메모리 누수 문제 해결
- 데이터베이스 연결 풀 크기 조정
- 에러 처리 로직 개선"

# 5. 긴급 PR 생성 (리뷰 최소화)
gh pr create \
  --title "🚨 [HOTFIX] 서버 다운 긴급 수정" \
  --body "## 긴급 수정사항

**문제**: 서버 메모리 누수로 인한 다운
**해결**: 메모리 관리 로직 수정

## 변경사항
- 메모리 누수 코드 수정
- DB 연결 풀 최적화
- 모니터링 로그 추가

**즉시 배포가 필요합니다!**

Fixes #$(gh issue list --label critical --limit 1 --json number -q '.[0].number')" \
  --label "critical,hotfix" \
  --assignee senior-dev1,devops-lead

# 6. 상황 종료 후 포스트모텀
gh issue create \
  --title "포스트모텀: 서버 다운 사건 분석" \
  --body "## 사건 요약
- 발생시간: $(date -d '1 hour ago')
- 해결시간: $(date)
- 영향: 전체 서비스 1시간 중단

## 원인 분석
- [ ] 근본 원인 파악
- [ ] 발생 과정 타임라인 작성
- [ ] 대응 과정 검토

## 개선 방안
- [ ] 모니터링 강화
- [ ] 알람 시스템 개선
- [ ] 대응 프로세스 개선

## 참석자
@all-team" \
  --label "postmortem,process-improvement"
```

### 💡 친구에게 설명해보기

**친구**: "실제 회사에서는 어떻게 이런 걸 다 관리해?"

**당신**: "회사마다 다르긴 하지만, 보통 이런 시나리오들이 반복돼. 마치 드라마처럼 말이야! 매일 새로운 에피소드가 있고, 때로는 로맨스(새 기능), 때로는 액션(버그 수정), 때로는 스릴러(긴급상황)가 펼쳐지지. GitHub CLI는 그런 드라마의 모든 장면에서 우리를 도와주는 만능 도구야!"

---

## Chapter 7 - 고급 활용과 생산성 극대화

### 🎪 GitHub CLI 자동화와 스크립트

#### 일일 업무 자동화 스크립트

**`daily-standup.sh` - 데일리 스탠드업 준비**
```bash
#!/bin/bash

echo "📅 $(date '+%Y-%m-%d') 데일리 스탠드업 리포트"
echo "=================================="

echo ""
echo "🔥 어제 완료한 작업:"
gh pr list --author @me --state merged --limit 5 --json title,mergedAt | \
  jq -r '.[] | "- " + .title + " (머지: " + (.mergedAt | split("T")[0]) + ")"'

echo ""
echo "🚀 오늘 할 일:"
gh issue list --assignee @me --state open --limit 5 --json title,labels | \
  jq -r '.[] | "- " + .title + " [" + (.labels | map(.name) | join(", ")) + "]"'

echo ""
echo "🚧 블로킹 이슈:"
gh issue list --assignee @me --label "blocked" --state open --json title,url | \
  jq -r '.[] | "- " + .title + " (" + .url + ")"'

echo ""
echo "👀 리뷰 요청:"
gh pr list --reviewer @me --state open --limit 3 --json title,author,url | \
  jq -r '.[] | "- " + .title + " by " + .author.login + " (" + .url + ")"'
```

**`weekly-report.sh` - 주간 보고서 생성**
```bash
#!/bin/bash

WEEK_AGO=$(date -d '7 days ago' '+%Y-%m-%d')

echo "📊 주간 개발 보고서 ($(date '+%Y-%m-%d'))"
echo "=================================="

echo ""
echo "✅ 이번 주 완료된 PR:"
gh pr list --author @me --state merged --json title,mergedAt | \
  jq --arg week_ago "$WEEK_AGO" -r '
    .[] | select(.mergedAt > $week_ago) | 
    "- " + .title + " (" + (.mergedAt | split("T")[0]) + ")"
  '

echo ""
echo "🐛 수정한 버그:"
gh issue list --author @me --state closed --label "bug" --json title,closedAt | \
  jq --arg week_ago "$WEEK_AGO" -r '
    .[] | select(.closedAt > $week_ago) | 
    "- " + .title
  '

echo ""
echo "📈 이번 주 통계:"
echo "- 생성한 PR: $(gh pr list --author @me --json createdAt | jq --arg week_ago "$WEEK_AGO" '[.[] | select(.createdAt > $week_ago)] | length')"
echo "- 리뷰한 PR: $(gh search prs --reviewed-by @me --json createdAt | jq --arg week_ago "$WEEK_AGO" '[.[] | select(.createdAt > $week_ago)] | length')"
echo "- 해결한 이슈: $(gh issue list --author @me --state closed --json closedAt | jq --arg week_ago "$WEEK_AGO" '[.[] | select(.closedAt > $week_ago)] | length')"
```

#### 팀 관리 자동화

**`team-health-check.sh` - 팀 상태 모니터링**
```bash
#!/bin/bash

echo "🏥 팀 건강도 체크 ($(date '+%Y-%m-%d'))"
echo "=================================="

echo ""
echo "🚨 긴급/높은 우선순위 이슈:"
gh issue list --label "urgent,high-priority" --state open --json title,assignee,createdAt | \
  jq -r '.[] | "- " + .title + " (담당: " + (.assignee.login // "미할당") + ", 생성: " + (.createdAt | split("T")[0]) + ")"'

echo ""
echo "⏰ 오래된 PR들 (7일 이상):"
gh pr list --state open --json title,author,createdAt | \
  jq -r '
    .[] | 
    select((now - (.createdAt | fromdateiso8601)) > (7 * 24 * 60 * 60)) | 
    "- " + .title + " by " + .author.login + " (" + (.createdAt | split("T")[0]) + ")"
  '

echo ""
echo "🔍 리뷰 대기 중인 PR:"
echo "리뷰어별 대기 현황:"
gh pr list --state open --json reviewRequests | \
  jq -r '.[] | .reviewRequests[]?.login' | sort | uniq -c | sort -nr
```

### 🎯 고급 검색과 필터링

#### 복잡한 검색 쿼리

```bash
# 내가 관련된 모든 이슈/PR 검색
gh search issues --involves @me --state open

# 특정 키워드로 검색
gh search issues "authentication bug" --repo myorg/myrepo

# 날짜 범위로 검색  
gh search prs --created "2024-01-01..2024-01-31" --author @me

# 여러 조건 조합 검색
gh search issues --label "bug" --assignee alice --state open --sort updated

# 코멘트가 많은 이슈들 (활발한 논의)
gh search issues --comments ">10" --repo myorg/myrepo

# 특정 파일을 수정한 PR들
gh search prs "filename:package.json" --repo myorg/myrepo
```

#### JSON 출력과 jq 활용

```bash
# PR 생성일과 머지일 분석
gh pr list --state merged --limit 20 --json title,createdAt,mergedAt | \
  jq '.[] | {
    title: .title,
    days_to_merge: ((.mergedAt | fromdateiso8601) - (.createdAt | fromdateiso8601)) / 86400 | round
  }'

# 라벨별 이슈 통계
gh issue list --state all --json labels | \
  jq -r '.[].labels[].name' | sort | uniq -c | sort -nr

# 월별 PR 생성 통계
gh pr list --state all --limit 100 --json createdAt | \
  jq -r '.[].createdAt | split("T")[0] | split("-")[0:2] | join("-")' | \
  sort | uniq -c
```

### ⚡ 성능 최적화와 효율성

#### 자주 사용하는 명령어 별칭 만들기

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
alias ghpr='gh pr list --reviewer @me --state open'
alias ghprs='gh pr status'
alias ghis='gh issue status'
alias ghprme='gh pr list --author @me --state open'
alias ghreview='gh pr list --reviewer @me --state open | head -5'

# 함수로 더 복잡한 별칭
ghquick() {
    echo "🔥 내 PR 상태:"
    gh pr list --author @me --state open --limit 3
    echo ""
    echo "👀 리뷰 요청:"
    gh pr list --reviewer @me --state open --limit 3
}
```

#### 캐싱과 성능 향상

```bash
# GitHub CLI 캐싱 설정
gh config set pager less
gh config set editor vim
gh config set prompt enabled

# API 호출 최소화를 위한 배치 처리
# 여러 정보를 한 번에 가져오기
gh api graphql -f query='
query {
  viewer {
    pullRequests(first: 10, states: OPEN) {
      nodes {
        title
        url
        createdAt
        reviewRequests(first: 5) {
          nodes {
            requestedReviewer {
              ... on User { login }
            }
          }
        }
      }
    }
  }
}'
```

### 🔧 커스텀 워크플로우 구축

#### Git Hooks와 연동

**`.git/hooks/pre-push` - 푸시 전 자동 검사**
```bash
#!/bin/bash

echo "🔍 푸시 전 검사를 시작합니다..."

# 브랜치명에서 이슈 번호 추출
BRANCH=$(git rev-parse --abbrev-ref HEAD)
ISSUE_NUM=$(echo $BRANCH | grep -o '#[0-9]\+' | tr -d '#')

if [ ! -z "$ISSUE_NUM" ]; then
    echo "📋 관련 이슈 #$ISSUE_NUM 확인 중..."
    ISSUE_STATE=$(gh issue view $ISSUE_NUM --json state -q .state)
    
    if [ "$ISSUE_STATE" = "CLOSED" ]; then
        echo "⚠️  경고: 관련 이슈 #$ISSUE_NUM이 이미 닫혀있습니다."
        read -p "계속 진행하시겠습니까? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
fi

echo "✅ 검사 완료!"
```

#### GitHub Actions와 연동

**`.github/workflows/auto-assign.yml` - 자동 할당**
```yaml
name: Auto-assign Issues and PRs

on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]

jobs:
  auto-assign:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Auto-assign based on labels
        uses: actions/github-script@v6
        with:
          script: |
            const { context } = require('@actions/github');
            
            if (context.eventName === 'issues') {
              const labels = context.payload.issue.labels.map(l => l.name);
              
              if (labels.includes('bug')) {
                await github.rest.issues.addAssignees({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  issue_number: context.payload.issue.number,
                  assignees: ['bug-team-lead']
                });
              }
            }
```

### 📊 분석과 인사이트

#### 팀 생산성 분석

**`team-analytics.sh` - 팀 분석 스크립트**
```bash
#!/bin/bash

echo "📊 팀 생산성 분석 (최근 30일)"
echo "=================================="

# 팀원 목록
TEAM_MEMBERS=("alice" "bob" "charlie" "diana")

echo ""
echo "👨‍💻 팀원별 기여도:"
for member in "${TEAM_MEMBERS[@]}"; do
    pr_count=$(gh pr list --author $member --state merged --limit 100 --json mergedAt | \
               jq --arg month_ago "$(date -d '30 days ago' '+%Y-%m-%d')" \
               '[.[] | select(.mergedAt > $month_ago)] | length')
    
    issue_count=$(gh issue list --author $member --state closed --limit 100 --json closedAt | \
                  jq --arg month_ago "$(date -d '30 days ago' '+%Y-%m-%d')" \
                  '[.[] | select(.closedAt > $month_ago)] | length')
    
    echo "- $member: $pr_count PRs, $issue_count Issues"
done

echo ""
echo "🏷️  라벨별 이슈 해결 현황:"
gh issue list --state closed --limit 200 --json labels,closedAt | \
  jq --arg month_ago "$(date -d '30 days ago' '+%Y-%m-%d')" -r '
    .[] | select(.closedAt > $month_ago) | .labels[].name
  ' | sort | uniq -c | sort -nr | head -10

echo ""
echo "⏱️  평균 PR 처리 시간:"
gh pr list --state merged --limit 50 --json createdAt,mergedAt | \
  jq -r '
    .[] | 
    (((.mergedAt | fromdateiso8601) - (.createdAt | fromdateiso8601)) / 86400)
  ' | awk '{sum+=$1; count++} END {printf "%.1f일\n", sum/count}'
```

#### 코드 품질 트렌드

```bash
# PR 크기 분석 (추가/삭제된 라인 수)
gh pr list --state merged --limit 30 --json additions,deletions,title | \
  jq -r '.[] | "\(.title): +\(.additions)/-\(.deletions) lines"'

# 리뷰 품질 분석
gh pr list --state merged --limit 20 --json reviews | \
  jq '.[] | .reviews | length' | \
  awk '{sum+=$1; count++} END {printf "평균 리뷰 수: %.1f\n", sum/count}'
```

### 🎮 재미있는 GitHub CLI 활용법

#### GitHub 프로필 꾸미기

```bash
# 내 GitHub 통계 확인
gh api user | jq '{
  name: .name,
  public_repos: .public_repos,
  followers: .followers,
  following: .following,
  created: .created_at
}'

# 내가 가장 많이 사용한 언어
gh repo list --limit 100 --json languages | \
  jq -r '.[].languages | keys[]' | sort | uniq -c | sort -nr
```

#### 개발 동기부여 스크립트

**`motivation.sh` - 일일 동기부여**
```bash
#!/bin/bash

# 오늘의 GitHub 활동
TODAY=$(date '+%Y-%m-%d')

commits_today=$(gh api /search/commits?q="author:@me+committer-date:$TODAY" | jq .total_count)
prs_today=$(gh pr list --author @me --json createdAt | jq --arg today "$TODAY" '[.[] | select(.createdAt | startswith($today))] | length')

echo "🎉 오늘의 개발 성과!"
echo "==================="
echo "📝 커밋: $commits_today개"
echo "🔀 PR: $prs_today개"

if [ $commits_today -gt 5 ]; then
    echo "🔥 오늘 정말 열심히 하셨네요!"
elif [ $commits_today -gt 0 ]; then
    echo "👍 좋은 하루입니다!"
else
    echo "💪 오늘도 화이팅!"
fi

echo ""
echo "💡 오늘의 개발 팁:"
tips=("작은 커밋을 자주 하세요" "코드 리뷰는 학습의 기회입니다" "테스트 코드는 미래의 나를 도와줍니다" "문서화는 팀을 위한 배려입니다")
echo "   ${tips[$((RANDOM % ${#tips[@]}))]}"
```

### 💡 친구에게 설명해보기

**친구**: "GitHub CLI가 이렇게까지 할 수 있어?"

**당신**: "GitHub CLI는 단순한 도구가 아니라 개발자의 생산성을 극대화하는 플랫폼이야! 마치 스마트폰이 단순한 전화기가 아니라 카메라, 컴퓨터, 게임기가 된 것처럼, GitHub CLI도 단순한 명령어 도구를 넘어서 자동화, 분석, 협업의 중심이 될 수 있어. 상상력만 있다면 무엇이든 가능해!"

---

## Epilogue - GitHub CLI 마스터의 길

### 🎓 졸업식: 당신은 이제 GitHub CLI 마스터입니다!

**축하합니다!** 이 긴 여정을 통해 당신은:

✅ GitHub CLI의 기본기를 완전히 익혔습니다  
✅ 실전 상황에서 유연하게 대응할 수 있습니다  
✅ 팀 협업을 효율적으로 이끌 수 있습니다  
✅ 자동화와 최적화로 생산성을 극대화할 수 있습니다  

### 🚀 다음 단계: 마스터에서 전문가로

#### 1. 커뮤니티 참여하기
```bash
# GitHub CLI 공식 저장소에 기여하기
gh repo fork cli/cli
gh issue list --repo cli/cli --label "good first issue"
```

#### 2. 자신만의 확장 도구 만들기
```bash
# GitHub CLI Extension 개발
gh extension create my-awesome-extension
```

#### 3. 지식 공유하기
- 팀 내에서 GitHub CLI 교육 진행
- 블로그에 활용법 공유
- 컨퍼런스에서 발표

### 🎯 마스터의 일일 루틴

**아침 (9:00)**
```bash
# 하루 시작 체크
gh pr status
gh issue status
ghquick  # 커스텀 함수
```

**점심 (12:00)**
```bash
# 중간 점검
gh pr list --reviewer @me --state open
```

**저녁 (18:00)**
```bash
# 하루 마무리
./daily-standup.sh > today-report.md
```

### 💎 마스터의 철칙 5가지

1. **"CLI First"** - 웹 브라우저보다 터미널을 먼저 생각하라
2. **"Automate Everything"** - 반복되는 작업은 모두 자동화하라  
3. **"Share Knowledge"** - 배운 것은 팀과 공유하라
4. **"Measure Progress"** - 데이터로 개선점을 찾아라
5. **"Stay Curious"** - 새로운 기능과 활용법을 끊임없이 탐구하라

### 🌟 전설이 된 개발자들의 GitHub CLI 활용법

#### 전설 1: "5분 PR 리뷰어" 김개발
```bash
# 김개발의 초고속 리뷰 스크립트
alias superreview='
for pr in $(gh pr list --reviewer @me --json number -q ".[].number"); do
  gh pr checkout $pr
  npm test --silent && echo "✅ PR #$pr 테스트 통과" || echo "❌ PR #$pr 테스트 실패"
done
'
```

#### 전설 2: "이슈 헌터" 박찾아
```bash
# 박찾아의 이슈 발굴 스크립트
gh search issues "is:open no:assignee sort:reactions-+1-desc" --limit 10
```

#### 전설 3: "자동화 마법사" 이자동
```bash
# 이자동의 완전 자동화 워크플로우
crontab -e
# 매일 오전 9시에 팀 상태 리포트 생성
0 9 * * * /home/user/scripts/team-health-check.sh | mail -s "Daily Team Report" team@company.com
```

### 🎪 최종 실전 테스트

**당신의 GitHub CLI 실력을 테스트해보세요!**

#### 미션 1: 신속 대응 (3분 안에 완료)
```bash
# 긴급 버그 리포트를 받았습니다. 다음을 수행하세요:
# 1. 긴급 이슈 생성
# 2. 핫픽스 브랜치 생성  
# 3. 팀에게 알림
# 4. PR 생성
```

#### 미션 2: 팀 리더 역할 (5분 안에 완료)
```bash
# 새로운 팀원이 합류했습니다. 다음을 도와주세요:
# 1. 적절한 첫 번째 이슈 찾기
# 2. 프로젝트 구조 설명
# 3. 개발 환경 가이드 제공
# 4. 멘토 지정
```

#### 미션 3: 데이터 분석가 (10분 안에 완료)
```bash
# CEO가 개발팀 생산성 보고서를 요청했습니다:
# 1. 이번 달 완료된 기능 수
# 2. 평균 PR 처리 시간
# 3. 버그 수정률
# 4. 팀원별 기여도
# 5. 다음 달 예상 일정
```

### 🎉 당신의 GitHub CLI 여정

이제 당신은 GitHub CLI로 무엇이든 할 수 있습니다:

- **민수처럼** 신입 개발자에서 시작해서
- **실전 경험을** 쌓으며  
- **팀의 핵심 멤버**가 되고
- **마침내 GitHub CLI 마스터**가 되었습니다!

### 🌈 마지막 메시지

> **"가장 좋은 도구는 당신이 사용하는 도구입니다."**
> 
> GitHub CLI는 단순한 명령어 모음이 아닙니다.  
> 그것은 개발자의 창의성과 효율성을 극대화하는 **파트너**입니다.
> 
> 이 가이드는 끝이지만, 당신의 GitHub CLI 모험은 이제 시작입니다!

**Happy Coding! 🚀**

---

## 구현 체크리스트

### 기본 설정
- [ ] GitHub CLI 설치 완료
- [ ] GitHub 계정 인증 완료  
- [ ] 기본 설정 구성 완료
- [ ] 첫 번째 명령어 실행 성공

### 저장소 관리
- [ ] 저장소 생성/복제 실습 완료
- [ ] 포크와 클론의 차이 이해
- [ ] 저장소 정보 조회 마스터
- [ ] 저장소 목록 관리 습득

### 이슈 관리  
- [ ] 이슈 생성/조회/편집 완료
- [ ] 라벨 시스템 활용 습득
- [ ] 이슈 댓글과 토론 참여
- [ ] 이슈 상태 관리 마스터

### 풀 리퀘스트
- [ ] PR 생성/관리 완전 습득
- [ ] 코드 리뷰 프로세스 마스터
- [ ] PR 체크아웃과 테스트 완료
- [ ] 머지 전략 이해와 적용

### 협업 워크플로우
- [ ] 팀 상태 모니터링 자동화
- [ ] 효율적인 리뷰 프로세스 구축
- [ ] 브랜치 전략 수립과 적용
- [ ] 긴급상황 대응 프로토콜 완료

### 고급 활용
- [ ] 자동화 스크립트 작성 완료
- [ ] 커스텀 워크플로우 구축
- [ ] 성능 최적화 적용
- [ ] 분석과 인사이트 도구 활용

## 연결된 노트
- [[Git 버전 관리 완전 가이드]]
- [[GitHub Actions 워크플로우 자동화]]
- [[오픈소스 기여 가이드]]
- [[팀 협업 도구 비교 분석]]
- [[개발자 생산성 향상 도구들]]
- [[명령줄 인터페이스 마스터하기]]

## 참고 자료
- [GitHub CLI 공식 문서](https://cli.github.com/manual/)
- [GitHub CLI GitHub 저장소](https://github.com/cli/cli)
- [GitHub API 문서](https://docs.github.com/en/rest)
- [jq 명령어 가이드](https://stedolan.github.io/jq/)
- [Bash 스크립팅 참고서](https://www.gnu.org/software/bash/manual/)

---

**💡 Pro Tip**: 이 가이드를 다 읽었다면, 이제 다른 사람에게 GitHub CLI에 대해 설명해보세요. 파인만 학습법의 마지막 단계입니다! 🎓