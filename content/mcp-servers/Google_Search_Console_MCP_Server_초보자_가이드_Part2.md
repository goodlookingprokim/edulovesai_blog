---
title: "Google Search Console MCP Server 초보자 완벽 가이드 (Part 2)"
created: '2025-10-14'
last_modified: '2025-10-14'
tags:
  - MCP/서버
  - Google/Search-Console
  - SEO/분석
  - 초보자/가이드
  - Claude-Code/통합
  - 실전/설정
status: "완료"
type: "가이드"
priority: "high"
---

# 🚀 Google Search Console MCP Server 초보자 완벽 가이드 (Part 2)

> **Part 2에서 배울 내용**
> - Google Cloud Platform 설정하기 (스크린샷처럼 자세하게!)
> - OAuth 인증 완벽 이해하기
> - MCP Server 설치 및 설정하기
> - 3단계 실전 예제 (초급 → 중급 → 고급)
> - 문제 해결 완전 정복

---

## 📋 목차 (Part 2)

1. [[#Step 1 Google Cloud Platform GCP 설정하기]]
2. [[#Step 2 OAuth 20 인증 설정하기]]
3. [[#Step 3 Refresh Token 받기]]
4. [[#Step 4 MCP Server 설정하기]]
5. [[#실전 예제 3단계]]
6. [[#문제 해결 트러블슈팅]]
7. [[#자주 묻는 질문 FAQ]]

---

## Step 1: Google Cloud Platform (GCP) 설정하기 ☁️

### 🎬 시작하기 전 이야기

> 여러분이 아파트를 빌리려고 한다고 상상해보세요. 그러려면:
> 1. 부동산에 가서 (GCP 접속)
> 2. 계약서 작성하고 (프로젝트 만들기)
> 3. 열쇠 받고 (API 활성화)
> 4. 출입 카드 만들어야 합니다 (OAuth 설정)
>
> GCP 설정도 똑같은 과정입니다!

---

### 1-1. GCP 프로젝트 만들기

#### 🌱 기초 예제: 첫 프로젝트 만들기

**단계별 진행:**

```
1단계: Google Cloud Console 접속
   → 브라우저 주소창에 입력: https://console.cloud.google.com/
   → Google 계정으로 로그인

2단계: 프로젝트 선택 버튼 클릭
   → 화면 위쪽에 "프로젝트 선택" 또는 "Select a project" 보임
   → 그 옆에 있는 ▼ 드롭다운 클릭

3단계: 새 프로젝트 만들기
   → 팝업 창에서 "새 프로젝트" 또는 "New Project" 클릭

4단계: 프로젝트 정보 입력
   프로젝트 이름: my-search-console-project
   (이름은 자유롭게! 알아보기 쉽게 지으세요)

   → "만들기" 버튼 클릭
```

**🤔 생각해보기:**
- 왜 프로젝트 이름이 중요할까요?
  → 나중에 여러 프로젝트를 관리할 때 헷갈리지 않으려면 명확한 이름이 필요해요!

**⚠️ 주의사항:**
```
❌ 나쁜 프로젝트 이름: "project1", "test", "aaa"
✅ 좋은 프로젝트 이름: "blog-seo-analytics", "my-website-search"
```

---

#### 🌿 중급 예제: 프로젝트 구성 최적화

**실무에서는 이렇게 합니다:**

```
프로젝트 구조:
- 개발용 프로젝트: "mysite-dev"
- 운영용 프로젝트: "mysite-prod"

이렇게 분리하면:
✅ 테스트 중 실제 데이터 건드릴 위험 없음
✅ 개발과 운영 비용 분리 가능
✅ 권한 관리 깔끔
```

**설정 방법:**

```yaml
프로젝트 1 (개발용):
  이름: "mywebsite-search-dev"
  용도: 테스트 및 개발
  팀원: 개발자만 접근

프로젝트 2 (운영용):
  이름: "mywebsite-search-prod"
  용도: 실제 서비스
  팀원: 제한된 인원만 접근
```

---

### 1-2. Search Console API 활성화하기

#### 🌱 기초 예제: API 켜기

**마치 스위치를 켜는 것처럼 간단합니다!**

```
1단계: API 라이브러리로 이동
   → 왼쪽 메뉴에서 "API 및 서비스" 클릭
   → "라이브러리" 클릭

2단계: Search Console API 찾기
   → 검색창에 "Search Console" 입력
   → "Google Search Console API" 클릭

3단계: API 활성화
   → "사용" 또는 "Enable" 버튼 클릭
   → 잠시 기다리면... 활성화 완료! 🎉
```

**일상 비유로 이해하기:**
```
API 활성화 = 케이블TV 채널 구독

활성화 전: 채널은 있지만 안 보임 📺❌
활성화 후: 채널 시청 가능 📺✅

무료 채널이니 걱정 마세요!
(일정 사용량까지는 무료)
```

**🤔 생각해보기:**
- 왜 API를 활성화해야 할까요?
  → Google이 무한정 데이터를 주면 서버가 터져요! 그래서 "나 쓸게요" 라고 등록하는 거예요.

---

#### 🌿 중급 예제: Indexing API도 함께 활성화

**더 강력한 기능 사용하기:**

```
Search Console API: 데이터 조회 (읽기)
Indexing API: URL 제출 (쓰기)

둘 다 활성화하면:
✅ 검색 데이터 분석
✅ 새 글 자동 색인 요청
✅ 삭제한 글 색인 제거 요청
```

**활성화 방법:**
```
1. API 라이브러리에서 "Indexing API" 검색
2. "Indexing API" 클릭
3. "사용" 버튼 클릭
```

**실무 활용 사례:**
```python
# 블로그에 새 글 올린 직후
자동화 스크립트:
1. 새 글 URL 감지
2. Indexing API로 Google에 알림
3. 일반적으로 며칠 걸리던 색인이 몇 시간으로 단축!
```

---

### 1-3. 할당량(Quota) 이해하기

#### 🌱 기초 예제: 무료 한도 확인

**무료로 얼마나 쓸 수 있나요?**

```
Search Console API 무료 한도:
📊 하루 2,000번 요청 가능
📊 100초당 600번 요청 가능

이게 얼마나 많은 양인지 계산해볼까요?

예시 1: 개인 블로그
- 하루 1번 데이터 체크 = 1번 요청
- 한 달 = 30번 요청
→ 2,000번 한도의 1.5%만 사용! 🎉

예시 2: 작은 회사
- 하루 10번 데이터 체크 = 10번 요청
- 한 달 = 300번 요청
→ 2,000번 한도의 15%만 사용!

예시 3: 큰 회사 (여러 사이트 관리)
- 사이트 10개, 각 하루 20번 체크 = 200번 요청
- 한 달 = 6,000번 요청
→ 한도 초과 (유료 전환 필요)
```

**🤔 생각해보기:**
- 대부분의 개인 사용자는 무료 한도로 충분해요!
- 한도를 넘으면 어떻게 되나요?
  → 일시적으로 요청이 차단되지만, 다음날 다시 풀려요.

---

#### 🌿 중급 예제: 할당량 모니터링

**사용량 확인 방법:**

```
1. GCP Console → "API 및 서비스" → "대시보드"
2. "Search Console API" 클릭
3. "할당량" 탭 클릭

여기서 볼 수 있는 것:
📈 오늘 사용한 요청 수
📈 시간대별 사용 패턴
📈 한도까지 남은 양
```

**최적화 팁:**
```python
# 비효율적 (요청 낭비)
for day in last_30_days:
    get_analytics(day)  # 30번 요청

# 효율적 (요청 절약)
get_analytics(start_date=30_days_ago,
              end_date=today)  # 1번 요청으로 해결!
```

---

## Step 2: OAuth 2.0 인증 설정하기 🔐

### 🎬 OAuth를 왜 배워야 할까요?

> **이야기로 이해하기:**
>
> 친구에게 집 비밀번호를 알려주지 않고도
> 임시 출입 카드를 만들어줄 수 있다면 얼마나 좋을까요?
>
> - 카드는 언제든 취소 가능 ✅
> - 비밀번호는 안전하게 보관 ✅
> - 필요한 방만 접근 가능 (거실 OK, 침실 NO) ✅
>
> OAuth가 바로 이런 "임시 출입 카드" 시스템입니다!

---

### 2-1. OAuth 동의 화면 구성

#### 🌱 기초 예제: 동의 화면 만들기

**왜 필요한가요?**
```
사용자가 로그인할 때 보게 될 화면:

"[여러분 앱 이름]이(가) 다음 권한을 요청합니다:
✅ Google Search Console 데이터 읽기
✅ 사이트 목록 확인

허용하시겠습니까? [허용] [거부]"

→ 이 화면을 미리 만들어야 해요!
```

**설정 단계:**

```
1단계: OAuth 동의 화면으로 이동
   GCP Console → "API 및 서비스" → "OAuth 동의 화면"

2단계: 사용자 유형 선택
   두 가지 선택지:

   ⚠️ 내부 (Internal):
   - 회사 내부 사람만 사용
   - Google Workspace 필요

   ✅ 외부 (External): ← 대부분 이걸 선택하세요!
   - 아무 Google 계정이나 가능
   - 개인 프로젝트에 적합

3단계: 앱 정보 입력
   앱 이름: "My SEO Analytics Tool"
   (무엇이든 좋아요! 나중에 변경 가능)

   사용자 지원 이메일: [여러분 Gmail]

   개발자 연락처 이메일: [여러분 Gmail]

4단계: 저장 및 계속
   → "저장 후 계속" 버튼 클릭
```

**🤔 생각해보기:**
- 앱 이름을 뭐라고 지으면 좋을까요?
  → 나중에 로그인할 때 보이는 이름이에요. 알아보기 쉽게!

---

#### 🌿 중급 예제: 테스트 사용자 추가 (중요!)

**⚠️ 이거 안 하면 99% 오류 발생!**

```
문제 상황:
OAuth 동의 화면 상태 = "Testing" (테스트 모드)

테스트 모드에서는:
❌ 등록된 사용자만 로그인 가능
❌ 등록 안 된 사용자 = "access_denied" 오류

해결책:
✅ 테스트 사용자에 본인 이메일 추가!
```

**설정 방법:**

```
1. OAuth 동의 화면 페이지에서
2. "테스트 사용자" 섹션 찾기
3. "+ ADD USERS" 버튼 클릭
4. 여러분 Gmail 주소 입력
5. "저장" 클릭

예시:
test.users@gmail.com
myemail@gmail.com
```

**실제 사례:**
```
초보자 A: "OAuth 설정 다 했는데 access_denied 오류가 나요 😢"
→ 원인: 테스트 사용자 등록 안 함

초보자 B: "테스트 사용자에 추가했더니 바로 해결됐어요! 😊"
→ 이 단계가 제일 중요해요!
```

---

### 2-2. OAuth 2.0 Client ID 만들기

#### 🌱 기초 예제: Client ID 생성

**Client ID가 뭐였죠?**
```
복습:
Client ID = 여러분 앱의 "주민등록번호"
Client Secret = 여러분 앱의 "비밀번호"

둘 다 있어야 Google과 통신 가능!
```

**생성 단계:**

```
1단계: 사용자 인증 정보 페이지로 이동
   GCP Console → "API 및 서비스" → "사용자 인증 정보"

2단계: 사용자 인증 정보 만들기
   → 위쪽에 "+ 사용자 인증 정보 만들기" 버튼
   → "OAuth 2.0 클라이언트 ID" 선택

3단계: 애플리케이션 유형 선택
   ⚠️ 여기가 중요해요!

   여러 선택지가 나오지만...

   ✅ "데스크톱 앱" (Desktop app) 선택!

   왜냐하면:
   - 웹 앱 ❌: 서버가 필요함 (복잡)
   - 데스크톱 앱 ✅: 로컬에서 바로 사용 가능 (간단)

4단계: 이름 입력
   이름: "Search Console Desktop Client"

   → "만들기" 클릭

5단계: 인증 정보 다운로드
   팝업 창이 뜨면:
   - Client ID 복사 → 메모장에 저장
   - Client Secret 복사 → 메모장에 저장

   또는

   - "JSON 다운로드" 버튼 클릭
   → credentials.json 파일로 저장
```

**생성 후 확인:**
```
Client ID 형식:
12345-abcdefg.apps.googleusercontent.com

Client Secret 형식:
GOCSPX-abcd1234efgh5678

→ 이런 형태면 정상이에요!
```

**⚠️ 주의사항:**
```
❌ GitHub에 업로드 금지!
❌ 블로그에 공개 금지!
❌ 다른 사람에게 공유 금지!

✅ 안전한 곳에 보관:
   - 비밀번호 관리 앱
   - 암호화된 파일
   - .env 파일 (gitignore에 추가)
```

---

#### 🌿 중급 예제: 리다이렉트 URI 설정

**리다이렉트 URI가 뭔가요?**

```
일상 비유:
Google: "로그인 완료! 어디로 돌아갈까요?"
여러분: "http://localhost:8080 으로 보내주세요!"

→ 리다이렉트 URI = "돌아갈 주소"
```

**설정 방법:**

```
1. 방금 만든 Client ID 클릭
2. "승인된 리디렉션 URI" 섹션 찾기
3. "+ URI 추가" 클릭
4. 입력: http://localhost:8080

   ⚠️ 주의:
   - https 아님! http로 시작
   - 마지막 슬래시(/) 없음!
   - 포트 번호 8080 (다른 숫자면 변경 가능)

5. "저장" 클릭
```

**여러 URI 설정 (고급):**
```
실무에서는 이렇게 여러 개 설정:

http://localhost:8080          ← 로컬 개발
http://localhost:3000          ← React 개발 서버
https://myapp.com/callback     ← 운영 환경

→ 환경별로 다른 URI 사용 가능!
```

---

### 2-3. Scopes (권한 범위) 이해하기

#### 🌱 기초 예제: 최소 권한 설정

**Scope가 뭔가요?**

```
일상 비유:
집에 들어온 손님에게 허용할 구역:

전체 접근: 거실, 주방, 침실, 화장실 (위험!)
최소 접근: 거실만 (안전!)

→ Scope = "허용할 접근 범위"
```

**이 프로젝트에 필요한 Scope:**

```
1. 읽기 전용 (안전):
   https://www.googleapis.com/auth/webmasters.readonly

   허용:
   ✅ 사이트 목록 보기
   ✅ 검색 데이터 읽기
   ✅ 사이트맵 정보 보기

   불가능:
   ❌ 데이터 수정
   ❌ 설정 변경

2. 쓰기 포함 (주의):
   https://www.googleapis.com/auth/webmasters

   허용:
   ✅ 위의 모든 것 +
   ✅ 데이터 수정 가능

3. Indexing API (URL 제출):
   https://www.googleapis.com/auth/indexing

   허용:
   ✅ URL 색인 요청
   ✅ URL 삭제 요청
```

**🤔 생각해보기:**
- 어떤 Scope를 선택해야 할까요?
  → 처음엔 읽기 전용으로 시작! 나중에 필요하면 추가하세요.

---

## Step 3: Refresh Token 받기 🎫

### 🎬 Refresh Token이 왜 필요한가요?

> **이야기로 이해하기:**
>
> 헬스장 회원권을 생각해보세요:
>
> 일일권 (Access Token):
> - 당일만 사용 가능
> - 매일 새로 사야 함 😫
>
> 연간 회원권 (Refresh Token):
> - 1년 내내 사용 가능
> - 입구에서 일일권 자동 발급 😊
>
> → Refresh Token = 영구 회원권!

---

### 3-1. 인증 도구 실행하기

#### 🌱 기초 예제: 첫 인증

**준비물 확인:**
```
✅ Client ID (복사해둠)
✅ Client Secret (복사해둠)
✅ 터미널 (Mac: Terminal, Windows: Command Prompt)
```

**실행 단계:**

```bash
1단계: 터미널 열기
   Mac: Command + Space → "Terminal" 검색
   Windows: 윈도우 키 + R → "cmd" 입력

2단계: 인증 도구 실행
   터미널에 이 명령어 입력:

   npx -y -p google-search-console-mcp-server google-search-console-mcp-setup

   설명:
   npx = 프로그램 즉시 실행
   -y = 자동으로 "예" 대답
   -p google-search-console-mcp-server = 패키지 이름
   google-search-console-mcp-setup = 실행할 명령어

3단계: 정보 입력
   프로그램이 물어봅니다:

   "Enter your GOOGLE_CLIENT_ID:"
   → 복사한 Client ID 붙여넣기 + Enter

   "Enter your GOOGLE_CLIENT_SECRET:"
   → 복사한 Client Secret 붙여넣기 + Enter

   "Enter your GOOGLE_REDIRECT_URI (or press Enter for default):"
   → 그냥 Enter (기본값 사용)

4단계: 브라우저 자동 열림
   브라우저가 자동으로 열리며 Google 로그인 페이지 표시
```

---

#### 🌿 중급 예제: 수동 인증 (자동 실패 시)

**브라우저가 안 열릴 때:**

```bash
# 터미널에 URL이 표시됩니다:
Please visit this URL to authorize:
https://accounts.google.com/o/oauth2/v2/auth?client_id=...

# 이 URL을 복사해서:
1. 수동으로 브라우저에 붙여넣기
2. 로그인 진행
3. 인증 완료 후 돌아오기
```

**포트가 사용 중일 때:**

```bash
# 오류: Port 8080 is already in use

# 해결: 다른 포트 사용
1. Client ID 설정에서 새 포트 추가:
   http://localhost:3000

2. 인증 시 명시:
   GOOGLE_REDIRECT_URI=http://localhost:3000

3. 다시 실행
```

---

### 3-2. Google 로그인 및 권한 부여

#### 🌱 기초 예제: 권한 허용하기

**화면에 뭐가 나타나나요?**

```
1. Google 계정 선택 화면
   → 여러분 Gmail 계정 클릭

2. 앱 확인 화면
   "My SEO Analytics Tool이(가)
   Google 계정 액세스 권한을 요청합니다"

   → "계속" 클릭

3. 권한 상세 화면
   "다음 항목에 액세스합니다:
   ✅ Search Console 데이터 보기
   ✅ 사이트 목록 확인"

   → "허용" 버튼 클릭

4. 완료 화면
   "인증이 완료되었습니다.
   이 창을 닫아도 됩니다."
```

**⚠️ 주의: 이런 경고가 나올 수 있어요**

```
"⚠️ 이 앱은 Google에서 확인하지 않았습니다"

걱정하지 마세요! 이건 정상이에요.

이유:
- 여러분이 직접 만든 앱이라서
- Google 공식 인증을 받지 않아서
- 하지만 여러분 자신은 신뢰할 수 있죠!

진행 방법:
1. "고급" 또는 "Advanced" 클릭
2. "안전하지 않은 페이지로 이동" 클릭
3. 계속 진행
```

---

### 3-3. Refresh Token 저장하기

#### 🌱 기초 예제: 토큰 복사

**인증 완료 후:**

```bash
터미널에 이런 메시지가 나타납니다:

========================================
✅ Authentication successful!
========================================

Your MCP configuration:
----------------------------------------

{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": [
        "-y",
        "-p",
        "google-search-console-mcp-server",
        "google-search-console-mcp"
      ],
      "env": {
        "GOOGLE_CLIENT_ID": "12345-abcde.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "GOCSPX-xyz123abc",
        "GOOGLE_REFRESH_TOKEN": "1//abcdefgh-very-long-token-string"
      }
    }
  }
}

Copy this configuration to your .mcp.json file
```

**다음 단계:**
```
1. 위의 JSON 전체를 복사 (Ctrl+C / Cmd+C)
2. 메모장에 임시 저장
3. 다음 Step에서 사용할 거예요!
```

---

#### 🌿 중급 예제: 환경변수로 관리 (더 안전)

**보안 강화 방법:**

```bash
# .env 파일 생성
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=your-refresh-token

# .mcp.json에서 참조
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": [...],
      "env": {
        "GOOGLE_CLIENT_ID": "${GOOGLE_CLIENT_ID}",
        "GOOGLE_CLIENT_SECRET": "${GOOGLE_CLIENT_SECRET}",
        "GOOGLE_REFRESH_TOKEN": "${GOOGLE_REFRESH_TOKEN}"
      }
    }
  }
}
```

**장점:**
```
✅ 민감 정보 분리
✅ .gitignore에 .env 추가하면 안전
✅ 환경별로 다른 값 사용 가능
```

---

## Step 4: MCP Server 설정하기 ⚙️

### 🎬 드디어! 실제 사용 준비 단계입니다!

> **비유:**
> 지금까지는 자동차 면허 따는 과정이었다면,
> 이제는 실제로 자동차를 운전하는 단계예요!

---

### 4-1. .mcp.json 파일 생성

#### 🌱 기초 예제: 설정 파일 만들기

**파일 위치:**
```
여러분 프로젝트 폴더 루트(최상위)에 만들기

예시 구조:
my-project/
  ├── .mcp.json          ← 여기에 만들기!
  ├── src/
  ├── package.json
  └── README.md
```

**파일 내용:**

```json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": [
        "-y",
        "-p",
        "google-search-console-mcp-server",
        "google-search-console-mcp"
      ],
      "env": {
        "GOOGLE_CLIENT_ID": "여기에-복사한-Client-ID",
        "GOOGLE_CLIENT_SECRET": "여기에-복사한-Client-Secret",
        "GOOGLE_REFRESH_TOKEN": "여기에-복사한-Refresh-Token"
      }
    }
  }
}
```

**각 부분 설명:**

```javascript
{
  "mcpServers": {          // MCP 서버들의 목록
    "google-search-console": {  // 서버 이름 (마음대로 변경 가능)
      "command": "npx",     // 실행 명령어
      "args": [             // 명령어 인자들
        "-y",               // ← 중요! 자동 확인
        "-p",               // ← 중요! 패키지 지정
        "google-search-console-mcp-server",  // 패키지 이름
        "google-search-console-mcp"          // 실행 파일 이름
      ],
      "env": {              // 환경 변수 (인증 정보)
        "GOOGLE_CLIENT_ID": "...",
        "GOOGLE_CLIENT_SECRET": "...",
        "GOOGLE_REFRESH_TOKEN": "..."
      }
    }
  }
}
```

**⚠️ 흔한 실수:**

```json
// ❌ 잘못된 예시
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["google-search-console-mcp-server"],  // 불완전!
      ...
    }
  }
}

// ✅ 올바른 예시
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": [
        "-y",                                    // 이게 있어야 함!
        "-p", "google-search-console-mcp-server",  // 이것도!
        "google-search-console-mcp"              // 이것도!
      ],
      ...
    }
  }
}
```

---

#### 🌿 중급 예제: 여러 MCP 서버 함께 설정

**실무에서는 여러 서버를 동시에 사용:**

```json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "-p", "google-search-console-mcp-server", "google-search-console-mcp"],
      "env": {
        "GOOGLE_CLIENT_ID": "...",
        "GOOGLE_CLIENT_SECRET": "...",
        "GOOGLE_REFRESH_TOKEN": "..."
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "..."
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_DIRECTORIES": "/Users/myname/projects"
      }
    }
  }
}
```

**관리 팁:**
```
서버가 많아지면:
1. 주석 추가 (JSON은 주석 불가능하므로 README 작성)
2. 사용 안 하는 서버는 주석 처리 대신 삭제
3. 환경별로 다른 .mcp.json 사용
   - .mcp.dev.json (개발용)
   - .mcp.prod.json (운영용)
```

---

### 4-2. Claude Code에서 MCP Server 활성화

#### 🌱 기초 예제: 서버 연결 확인

**Claude Code 시작:**

```
1단계: Claude Code 열기
   (또는 재시작)

2단계: MCP 상태 확인
   - 왼쪽 하단에 MCP 아이콘 확인
   - 또는 Command Palette (Cmd/Ctrl + Shift + P)
   - "MCP: Show Server Status" 입력

3단계: 서버 목록 확인
   ✅ google-search-console: Connected

   또는

   ❌ google-search-console: Failed
   (이러면 설정 다시 확인!)

4단계: 테스트 질문
   Claude에게 물어보기:
   "Show me my Google Search Console sites"

   성공하면 사이트 목록이 나타남! 🎉
```

---

#### 🌿 중급 예제: 연결 문제 디버깅

**서버가 Failed로 나타날 때:**

```
1. 에러 로그 확인:
   MCP 상태 화면에서 해당 서버 클릭
   → stderr (에러 출력) 확인

2. 일반적인 오류:

   오류: "invalid_client"
   → Client ID 또는 Secret이 틀림
   → .mcp.json 다시 확인

   오류: "refresh_token expired"
   → Token이 만료됨
   → 다시 인증 (Step 3 반복)

   오류: "API not enabled"
   → Search Console API 활성화 안 됨
   → GCP Console에서 활성화

3. 수동 테스트:
   터미널에서 직접 실행해보기

   export GOOGLE_CLIENT_ID="..."
   export GOOGLE_CLIENT_SECRET="..."
   export GOOGLE_REFRESH_TOKEN="..."
   npx -y google-search-console-mcp-server

   → 에러 메시지 확인하기 쉬움
```

---

## 실전 예제: 3단계 🚀

### 레벨 1: 초급 - 사이트 목록 가져오기 🌱

#### 개념 이해하기

**무엇을 하는 건가요?**
```
여러분이 관리하는 모든 웹사이트 목록을 가져오는 가장 기본적인 작업

일상 비유:
- 은행에 가서 "제 계좌 목록 보여주세요" 하는 것과 같아요
- 어떤 사이트들을 분석할 수 있는지 먼저 확인하는 거예요
```

**왜 이것부터 시작하나요?**
```
✅ 가장 간단한 작업
✅ 인증이 제대로 됐는지 확인 가능
✅ 다음 단계의 기초
```

#### 실습 코드

```
# Claude Code에서 입력:

Show me all my Google Search Console sites
```

**또는 한국어로:**

```
내 Google Search Console 사이트 목록 보여줘
```

#### 예상 결과

```
여기 당신이 접근 가능한 Search Console 사이트들입니다:

1. https://myblog.com/
   - 권한: 소유자
   - 등록일: 2024-01-15

2. https://mycompany.com/
   - 권한: 전체 사용자
   - 등록일: 2024-03-20

3. sc-domain:example.com
   - 권한: 소유자
   - 유형: 도메인 속성
   - 등록일: 2023-12-01

총 3개의 사이트를 관리 중입니다.
```

#### 🤔 생각해보기

**Q: 내 사이트가 안 나타나요!**
```
A: 체크리스트:
□ Search Console에 사이트가 등록되어 있나요?
□ 소유권 확인을 완료했나요?
□ 같은 Google 계정으로 인증했나요?
```

**Q: sc-domain: 이게 뭔가요?**
```
A: 도메인 속성입니다!

두 가지 유형:
1. URL 접두어: https://example.com/
   - 특정 URL만 추적
   - 예: https://example.com과 http://example.com은 별개

2. 도메인 속성: sc-domain:example.com
   - 모든 하위 도메인 포함
   - 예: blog.example.com, shop.example.com 모두 포함
```

---

### 레벨 2: 중급 - 검색 분석 데이터 가져오기 🌿

#### 개념 이해하기

**무엇을 하는 건가요?**
```
지난 7일간 검색 성과 데이터 분석

포함되는 정보:
- 얼마나 많이 노출되었나? (Impressions)
- 얼마나 많이 클릭되었나? (Clicks)
- 클릭률은? (CTR)
- 평균 순위는? (Position)
```

**실무 활용:**
```
📊 마케팅 팀:
   "지난주 대비 트래픽이 늘었나요?"

📝 콘텐츠 팀:
   "어떤 키워드로 사람들이 들어오나요?"

🔍 SEO 담당자:
   "순위가 올랐나요, 내려갔나요?"
```

#### 실습 코드

**🌱 가장 기본 형태:**

```
# Claude Code에서:

Get search performance data for https://myblog.com/
for the last 7 days
```

**한국어:**

```
https://myblog.com/ 의 지난 7일간 검색 성과 데이터를 가져와줘
```

#### 예상 결과

```
📊 myblog.com 검색 성과 (2025-10-07 ~ 2025-10-14)

전체 요약:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
총 노출수:    12,450회
총 클릭수:       623회
평균 CTR:       5.0%
평균 순위:      3.2위
━━━━━━━━━━━━━━━━━━━━━━━━━━━

일별 추이:
  날짜        노출    클릭   CTR    순위
  2025-10-14  1,890    95   5.0%   3.1
  2025-10-13  1,820    89   4.9%   3.2
  2025-10-12  1,750    88   5.0%   3.3
  2025-10-11  1,680    85   5.1%   3.1
  ...

💡 인사이트:
✅ 노출수가 꾸준히 증가 추세
✅ CTR 5%는 평균 이상 (good!)
⚠️ 순위를 조금 더 올리면 더 좋을 듯
```

#### 🌿 중급: 검색어별 분석

```
Get top 10 search queries for https://myblog.com/
in the last 7 days
```

**결과:**

```
🔍 상위 검색어 Top 10

1. "블로그 만들기"
   노출: 2,340  클릭: 156  CTR: 6.7%  순위: 2.1

2. "초보 블로그 시작"
   노출: 1,890  클릭: 98   CTR: 5.2%  순위: 3.5

3. "티스토리 수익"
   노출: 1,560  클릭: 45   CTR: 2.9%  순위: 8.2
   ⚠️ 순위가 낮아 CTR도 낮음 → 개선 필요!

4. "블로그 글쓰기 팁"
   노출: 1,234  클릭: 87   CTR: 7.1%  순위: 1.8
   ✅ 최고 성과! 이 주제로 더 쓰면 좋을 듯

...
```

#### 🤔 생각해보기

**Q: 이 데이터를 어떻게 활용하나요?**
```
A: 실전 활용법:

1. CTR이 낮은 키워드 찾기
   → 제목과 설명 개선

2. 순위가 낮은데 노출은 많은 키워드
   → SEO 최적화 집중

3. 잘되는 키워드 찾기
   → 비슷한 주제로 더 쓰기

4. 새로운 키워드 발견
   → 예상 못 한 검색어로 유입될 수 있음
```

---

### 레벨 3: 고급 - 기간 비교 분석 🌳

#### 개념 이해하기

**무엇을 하는 건가요?**
```
이번 주 vs 지난주 성과 비교
→ 개선되었는지, 악화되었는지 한눈에 파악!

일상 비유:
이번 달 용돈: 50,000원
지난 달 용돈: 40,000원
→ 10,000원 증가! (+25%) 😊
```

**실무 시나리오:**
```
월요일 아침 회의:
팀장: "지난주 대비 성과가 어떤가요?"
여러분: (Claude에게 물어보고) "클릭이 15% 증가했습니다!"
팀장: "좋아요! 무엇이 효과적이었나요?"
여러분: (분석 결과 공유)
```

#### 실습 코드

```
Compare this week vs last week search performance
for https://myblog.com/
```

**한국어:**

```
https://myblog.com/ 의 이번 주와 지난주 검색 성과를 비교해줘
```

#### 예상 결과

```
📈 기간 비교 분석

비교 기간:
  현재: 2025-10-07 ~ 2025-10-14 (이번 주)
  이전: 2025-09-30 ~ 2025-10-06 (지난 주)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
지표          현재      이전      변화
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
노출수      12,450   10,890   +1,560 (+14.3%) 📈
클릭수         623      543      +80 (+14.7%) 📈
CTR           5.0%     5.0%       +0 (  0.0%) ➡️
평균순위       3.2      3.5     -0.3 ( -8.6%) 📈
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 핵심 인사이트:

✅ 긍정적 변화:
   • 노출수 14% 증가 - 콘텐츠가 더 많이 보이고 있음
   • 클릭수 15% 증가 - 더 많은 방문자 유입
   • 순위 상승 (3.5 → 3.2) - SEO 개선 효과

➡️ 유지:
   • CTR 변화 없음 - 안정적이지만 개선 여지 있음

⚠️ 주의 필요:
   (없음 - 모든 지표 양호!)

🎯 액션 아이템:
   1. 현재 전략 유지
   2. 상위 키워드에 더 집중
   3. CTR 개선 테스트 (제목 A/B 테스트)
```

#### 🌳 고급: 쿼리별 상세 비교

```
Compare top queries performance between
current period (2025-10-07 to 2025-10-14) and
previous period (2025-09-30 to 2025-10-06)
for https://myblog.com/
```

**결과:**

```
🔍 검색어별 성과 비교

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
검색어: "블로그 만들기"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           현재     이전     변화
노출:     2,340   1,980   +360 (+18.2%)
클릭:       156     120    +36 (+30.0%)  🎉
CTR:       6.7%    6.1%   +0.6% ( +9.8%)
순위:       2.1     2.8    -0.7 (-25.0%)  ⭐

→ 이 키워드가 대박! 순위 상승 + 클릭 폭증!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
검색어: "티스토리 수익"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           현재     이전     변화
노출:     1,560   1,890   -330 (-17.5%)  ⚠️
클릭:        45      52     -7 (-13.5%)
CTR:       2.9%    2.8%   +0.1% ( +3.6%)
순위:       8.2     7.5    +0.7 ( +9.3%)  ⚠️

→ 주의! 순위 하락으로 노출과 클릭 감소
   액션: 이 주제 콘텐츠 보강 필요

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
검색어: "블로그 글쓰기 팁"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           현재     이전     변화
노출:     1,234   1,190    +44 ( +3.7%)
클릭:        87      78     +9 (+11.5%)
CTR:       7.1%    6.6%   +0.5% ( +7.6%)
순위:       1.8     2.0    -0.2 (-10.0%)

→ 안정적 성장세. 현재 전략 유지!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 종합 분석:

💪 강점:
   • "블로그 만들기" 키워드가 핵심 성장 동력
   • 상위권 키워드들의 순위 개선 중

⚠️ 약점:
   • "티스토리 수익" 키워드 하락세
   • 중하위권 키워드 관리 필요

🎯 추천 전략:
   1. "블로그 만들기" 관련 콘텐츠 더 작성
   2. "티스토리 수익" 기존 글 업데이트 및 SEO 개선
   3. 새로운 롱테일 키워드 발굴
```

#### 🤔 생각해보기

**Q: 어떤 기간을 비교하면 좋을까요?**
```
A: 목적에 따라 다릅니다:

단기 분석 (주간):
- 이번 주 vs 지난 주
- 빠른 피드백
- 최근 변화 감지

중기 분석 (월간):
- 이번 달 vs 지난 달
- 전략 효과 확인
- 계절성 파악

장기 분석 (분기, 연간):
- 올해 vs 작년
- 전체 트렌드 파악
- 성장률 측정
```

**Q: 개선 액션을 어떻게 정하나요?**
```
A: 우선순위 매트릭스:

높은 노출 + 낮은 CTR:
→ 제목/설명 개선 (급함!)

높은 노출 + 낮은 순위:
→ SEO 최적화 (중요!)

낮은 노출 + 높은 CTR:
→ 콘텐츠 더 작성 (기회!)

낮은 노출 + 낮은 CTR:
→ 키워드 재검토 (나중에)
```

---

## 문제 해결 (트러블슈팅) 🔧

### 일반적인 오류와 해결법

#### 오류 1: "invalid_client"

```
증상:
  OAuth 인증 시 오류 발생
  "Error 400: invalid_client"

원인:
  ❌ Client ID와 Secret이 맞지 않음
  ❌ Client ID가 잘못 복사됨
  ❌ Secret이 재생성되어 기존 것이 무효화됨

해결책:
  1. GCP Console에서 Client ID 재확인
  2. Secret도 다시 확인 (필요시 재생성)
  3. .mcp.json 파일의 값들을 정확히 업데이트
  4. 공백이나 숨은 문자 없는지 확인

확인 방법:
  # 터미널에서 수동으로 테스트
  export GOOGLE_CLIENT_ID="복사한값"
  export GOOGLE_CLIENT_SECRET="복사한값"
  npx -y -p google-search-console-mcp-server google-search-console-mcp-setup

  → 여전히 오류면 Client 자체가 문제
```

---

#### 오류 2: "redirect_uri_mismatch"

```
증상:
  "Error 400: redirect_uri_mismatch"

원인:
  ❌ Redirect URI가 일치하지 않음

해결책:
  1. GCP Console → 해당 Client ID 클릭
  2. "승인된 리디렉션 URI" 확인
  3. 다음 URI가 있는지 확인:
     http://localhost:8080

  4. 없으면 추가:
     ⚠️ https 아님! http
     ⚠️ 마지막 슬래시 없음
     ⚠️ 포트 번호 정확히

올바른 예시:
  ✅ http://localhost:8080
  ❌ https://localhost:8080 (https X)
  ❌ http://localhost:8080/ (슬래시 X)
  ❌ http://localhost:3000 (다른 포트)
```

---

#### 오류 3: "access_denied"

```
증상:
  "Error 403: access_denied"
  "This app is blocked"

원인 (여러 가지):
  1. ❌ OAuth 동의 화면이 "Testing" 모드
     + 테스트 사용자에 미등록

  2. ❌ API가 활성화 안 됨

  3. ❌ 계정에 권한이 없음

해결책:

  Case 1: 테스트 사용자 문제
  ───────────────────────────
  1. GCP Console → "OAuth 동의 화면"
  2. "Publishing status" 확인
  3. "Testing"이면:
     - "테스트 사용자" 섹션 찾기
     - "+ ADD USERS" 클릭
     - 본인 Gmail 추가
     - "저장"

  Case 2: API 비활성화
  ───────────────────
  1. GCP Console → "API 및 서비스" → "라이브러리"
  2. "Google Search Console API" 검색
  3. "사용" 버튼이 보이면 클릭
  4. "Indexing API"도 동일하게

  Case 3: Search Console 권한
  ─────────────────────────
  1. Search Console 접속
  2. 해당 사이트에 대한 권한 확인
  3. 최소 "전체 사용자" 권한 필요
  4. 없으면 사이트 소유자에게 요청
```

---

#### 오류 4: "could not determine executable to run"

```
증상:
  "Error: could not determine executable to run"

원인:
  ❌ .mcp.json의 args 설정이 불완전함

잘못된 설정:
  ❌ "args": ["google-search-console-mcp-server"]

올바른 설정:
  ✅ "args": [
       "-y",
       "-p",
       "google-search-console-mcp-server",
       "google-search-console-mcp"
     ]

설명:
  -y: npx 자동 확인
  -p google-search-console-mcp-server: 패키지 이름
  google-search-console-mcp: 실행 파일 이름 (다름!)

해결책:
  .mcp.json 파일을 위 올바른 형식으로 수정
```

---

#### 오류 5: Token Expired

```
증상:
  "Error: invalid_grant"
  "Token has been expired or revoked"

원인:
  ❌ Refresh Token이 만료됨
  ❌ 보안상 이유로 취소됨

해결책:
  1. 다시 인증 프로세스 진행:

     npx -y -p google-search-console-mcp-server google-search-console-mcp-setup

  2. 새 Refresh Token 받기
  3. .mcp.json 업데이트
  4. Claude Code 재시작

예방:
  - Token을 안전하게 보관
  - 정기적으로 갱신 (6개월~1년)
  - 여러 환경에서 같은 Token 공유 금지
```

---

### 디버깅 체크리스트

```
문제가 생기면 순서대로 확인:

□ 1. GCP 프로젝트 설정
   □ 프로젝트가 생성되어 있나요?
   □ Search Console API가 활성화되어 있나요?
   □ (선택) Indexing API도 활성화되어 있나요?

□ 2. OAuth 설정
   □ OAuth 동의 화면을 구성했나요?
   □ Client ID (Desktop app)를 만들었나요?
   □ Redirect URI에 http://localhost:8080이 있나요?
   □ 테스트 사용자에 본인이 등록되어 있나요?

□ 3. 인증 정보
   □ Client ID를 정확히 복사했나요?
   □ Client Secret을 정확히 복사했나요?
   □ Refresh Token을 받았나요?
   □ .mcp.json에 모두 입력했나요?

□ 4. 파일 구성
   □ .mcp.json이 프로젝트 루트에 있나요?
   □ JSON 형식이 올바른가요? (괄호, 쉼표 등)
   □ args 배열이 완전한가요?

□ 5. Claude Code
   □ Claude Code를 재시작했나요?
   □ MCP 서버 상태가 "Connected"인가요?
   □ 에러 로그를 확인했나요?

□ 6. Search Console
   □ 사이트가 Search Console에 등록되어 있나요?
   □ 소유권 확인을 완료했나요?
   □ 같은 Google 계정으로 인증했나요?
```

---

## 자주 묻는 질문 (FAQ) ❓

### 기본 사용

**Q1: 이거 설정하는 데 얼마나 걸리나요?**
```
A: 처음이면 약 30분~1시간

시간 분배:
- GCP 설정: 10분
- OAuth 설정: 10분
- 인증: 5분
- MCP 설정: 5분
- 테스트: 10분

두 번째부터는 5분이면 충분!
```

**Q2: 비용이 드나요?**
```
A: 대부분 무료입니다!

무료:
✅ Google Cloud 무료 등급
✅ Search Console API (일일 2,000건)
✅ Claude Code
✅ MCP Server

유료가 될 수 있는 경우:
⚠️ API 할당량 초과 시 (개인 사용자는 거의 없음)
⚠️ 다른 GCP 서비스 사용 시
```

**Q3: 여러 사이트를 관리할 수 있나요?**
```
A: 네! 한 번 설정하면 모든 사이트 관리 가능

예시:
1. https://myblog.com/
2. https://mycompany.com/
3. sc-domain:example.com

→ 모두 한꺼번에 조회 및 분석 가능!
```

---

### 보안

**Q4: 내 데이터가 안전한가요?**
```
A: 네, 안전합니다!

보안 방식:
✅ OAuth 2.0 (업계 표준)
✅ Refresh Token은 로컬에만 저장
✅ 비밀번호는 Google에만 전달됨
✅ 언제든 권한 취소 가능

주의사항:
⚠️ .mcp.json을 Git에 올리지 마세요
⚠️ Client Secret을 공유하지 마세요
⚠️ Token을 안전한 곳에 보관하세요
```

**Q5: Token을 잃어버리면 어떡하나요?**
```
A: 괜찮습니다! 다시 생성하면 돼요.

1. 인증 도구 다시 실행:
   npx -y -p google-search-console-mcp-server google-search-console-mcp-setup

2. 새 Token 받기
3. .mcp.json 업데이트

기존 Token은 자동으로 무효화됩니다.
```

---

### 고급 사용

**Q6: 자동화할 수 있나요?**
```
A: 네! 여러 방법이 있어요.

방법 1: Claude Code 스케줄러
  - 매일 아침 자동 리포트

방법 2: Cron Job
  - 서버에서 주기적 실행

방법 3: GitHub Actions
  - Push 시 자동 분석

예시 (일일 리포트):
"매일 아침 9시에 어제의 검색 데이터를 분석해서
Slack 채널에 자동으로 전송해줘"
```

**Q7: 다른 MCP 서버와 함께 쓸 수 있나요?**
```
A: 네! 조합해서 더 강력하게 사용 가능!

예시 조합:

Search Console + GitHub:
  "검색 데이터를 분석해서 GitHub 이슈에 등록해줘"

Search Console + Slack:
  "순위가 하락한 페이지를 Slack에 알려줘"

Search Console + Notion:
  "월간 SEO 리포트를 Notion 데이터베이스에 저장해줘"
```

---

### 문제 해결

**Q8: "API 할당량 초과" 오류가 나요**
```
A: 일시적인 현상입니다.

원인:
- 하루 2,000번 또는 100초당 600번 초과

해결:
1. 잠시 기다리기 (다음날 자동 리셋)
2. 요청 최적화:
   - 날짜 범위를 한꺼번에 요청
   - rowLimit 줄이기
   - 불필요한 요청 제거

예방:
- 자주 요청하지 않기
- 캐싱 활용
- 꼭 필요한 데이터만 요청
```

**Q9: 데이터가 실시간이 아니에요**
```
A: 정상입니다!

Google Search Console 특성:
- 데이터 지연: 2-3일
- 완전한 데이터: 약 72시간 후

예시:
오늘: 2025-10-14
→ 2025-10-11 데이터까지 확인 가능
→ 최신 2-3일은 불완전

실시간 확인 방법:
- Google Analytics 사용
- 서버 로그 분석
```

---

## 다음 단계 및 학습 자료 📚

### 더 배우기

**추천 학습 순서:**

```
1주차: 기본 익히기
  □ 사이트 목록 조회
  □ 간단한 검색 데이터 보기
  □ 오류 발생 시 해결 연습

2주차: 활용하기
  □ 검색어별 분석
  □ 기간별 비교
  □ 페이지별 성과 확인

3주차: 자동화하기
  □ 일일 리포트 자동화
  □ 다른 MCP 서버와 연동
  □ 대시보드 구축

4주차: 고급 활용
  □ 트렌드 예측
  □ 경쟁사 분석
  □ SEO 전략 수립
```

---

### 관련 자료

**공식 문서:**
```
Google Search Console API:
https://developers.google.com/webmaster-tools

MCP 프로토콜:
https://modelcontextprotocol.io/

Claude Code:
https://docs.claude.com/claude-code
```

**커뮤니티:**
```
GitHub Issues:
- 버그 리포트
- 기능 요청
- 다른 사용자 질문 확인

Discord:
- MCP 커뮤니티
- 실시간 도움

Stack Overflow:
- Google Search Console API 태그
- MCP 태그
```

---

## 🎉 축하합니다!

Part 1과 Part 2를 모두 완료하셨습니다!

**여러분이 배운 것:**
```
✅ Google Search Console MCP Server의 개념
✅ GCP 프로젝트 설정
✅ OAuth 2.0 인증 구성
✅ MCP Server 설치 및 설정
✅ 3단계 실전 예제 (초급 → 중급 → 고급)
✅ 문제 해결 방법
✅ 보안 및 모범 사례
```

**이제 여러분은:**
```
🎯 혼자서 설정할 수 있습니다
🎯 문제가 생겨도 해결할 수 있습니다
🎯 실무에 바로 적용할 수 있습니다
🎯 다른 사람을 도와줄 수 있습니다
```

**다음 도전:**
```
1. 본인 사이트에 직접 적용해보기
2. 일일 리포트 자동화하기
3. 다른 MCP 서버와 연동하기
4. 팀원들과 지식 공유하기
```

---

## 연결된 노트

- [[Google_Search_Console_MCP_Server_초보자_가이드_Part1]] - 기초 개념
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[인기있는 MCP 서버 및 활용사례]]
- [[LLM 활용 가이드]]
- [[SEO 최적화 전략]]

---

**📝 작성자 노트**: 막히는 부분이 있으면 언제든지 질문하세요! 함께 배워나가요! 💪

**🔄 최종 업데이트**: 2025-10-14