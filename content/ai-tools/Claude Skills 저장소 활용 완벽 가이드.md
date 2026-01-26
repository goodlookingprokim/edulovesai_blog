---
title: anthropics/skills 저장소 활용 완벽 가이드
created: 2025-10-17
last_modified: 2025-10-17
tags:
  - AI/Claude
  - AI/Skills
  - GitHub
  - 오픈소스
  - 개발자
status: 완료
type: 실전가이드
priority: high
share_link: https://share.note.sx/8d83tdui#DOxJbPKACYT9NFKdvgcZr3wkSWjwPparSuUPTUfKEfo
share_updated: 2025-10-17T20:30:50+09:00
---

# anthropics/skills 저장소 활용 완벽 가이드

> **🎯 이 가이드의 목표**: Anthropic 공식 Skills 저장소를 100% 활용하여 생산성을 극대화하는 방법을 배웁니다.

---

## 📋 목차

1. [[#저장소란 무엇인가? - 비유로 이해하기]]
2. [[#anthropics skills 저장소 구조 완전 분석]]
3. [[#Skills 설치 및 사용 - 환경별 가이드]]
4. [[#예제 Skills 카탈로그 - 언제 무엇을 쓸까?]]
5. [[#document-skills 심층 활용법]]
6. [[#나만의 Skills 만들고 기여하기]]
7. [[#용어 사전]]
8. [[#FAQ - 자주 묻는 질문]]

---

## 저장소란 무엇인가? - 비유로 이해하기

### 📖 실생활 이야기

여러분이 **공립 도서관**에 간다고 상상해보세요.

**일반 도서관 (일반 GitHub 저장소)**:
- 📚 책들이 정리되어 있어요
- 📖 누구나 와서 읽을 수 있어요
- 📝 메모는 할 수 있지만, 책에 직접 쓸 수는 없어요

**특별한 도서관 (anthropics/skills 저장소)**:
- 📦 **레시피 카드 도서관**입니다
- 🧑‍🍳 각 카드에는 "요리 만드는 법" (Skill 사용법)이 적혀 있어요
- 🏠 **카드를 집으로 가져갈 수 있어요** (설치)
- 👨‍🍳 **직접 요리해볼 수 있어요** (사용)
- ✏️ **나만의 레시피를 추가할 수도 있어요** (기여)

---

### anthropics/skills 저장소 = "Claude용 레시피 카드 도서관"

**무엇이 들어있나요?**:
1. **예제 Skills**: Anthropic이 만든 실전 Skill 모음
2. **Document Skills**: Word, PDF, Excel 등을 다루는 전문 Skills
3. **템플릿**: 나만의 Skill을 만들 때 쓰는 기본 틀
4. **가이드**: 어떻게 사용하고 만드는지 설명

**왜 중요한가요?**:
- ✅ **검증됨**: Anthropic이 직접 만들고 테스트한 고품질
- ✅ **오픈소스**: 무료로 사용하고 수정 가능
- ✅ **학습 자료**: 전문가의 코드를 보며 배우기
- ✅ **실전 즉시 적용**: 복사해서 바로 사용

---

## anthropics skills 저장소 구조 완전 분석

### 📁 저장소 디렉토리 맵

```
anthropics/skills/
├── 📄 README.md                    # 저장소 소개 (우리가 읽은 파일!)
├── 📄 LICENSE                      # Apache 2.0 (자유롭게 사용)
│
├── 🎨 CREATIVE & DESIGN/
│   ├── algorithmic-art/           # 생성 예술
│   │   └── SKILL.md              # Skill 정의 파일
│   ├── canvas-design/             # 그래픽 디자인
│   └── slack-gif-creator/         # GIF 애니메이션
│
├── 💻 DEVELOPMENT & TECHNICAL/
│   ├── artifacts-builder/         # React 앱 빌더
│   ├── mcp-server/                # MCP 서버 생성
│   └── webapp-testing/            # Playwright 테스트
│
├── 🏢 ENTERPRISE & COMMUNICATION/
│   ├── brand-guidelines/          # 브랜드 가이드라인
│   ├── internal-comms/            # 내부 커뮤니케이션
│   └── theme-factory/             # 테마 시스템
│
├── 🛠️ META SKILLS/
│   ├── skill-creator/             # Skill 제작 가이드
│   └── template-skill/            # 템플릿
│
└── 📄 DOCUMENT SKILLS/ (특별!)
    ├── docx/                      # Word 문서
    ├── pdf/                       # PDF 문서
    ├── pptx/                      # PowerPoint
    └── xlsx/                      # Excel
```

---

### 🔍 SKILL.md 파일 해부하기

모든 Skill의 핵심은 `SKILL.md` 파일입니다.

**구조**:

```markdown
---
name: my-awesome-skill              # Skill 고유 ID
description: 이 Skill이 무엇을 하는지 명확한 설명
---

# My Awesome Skill

## 이 Skill은 언제 사용하나요?
[사용 시나리오 설명]

## 기능
- 기능 1
- 기능 2

## 사용 예시
\```
예제 코드
\```

## 주의사항
[중요한 제한사항]
```

**비유**:
- `---` (YAML 프론트매터) = 책 표지 (제목, 저자)
- 나머지 마크다운 = 책 내용 (본문)

---

## Skills 설치 및 사용 - 환경별 가이드

### 환경 1: Claude Code (개발자용 CLI)

#### 🌱 기초: 저장소 전체 설치

**목표**: anthropics/skills 저장소의 모든 Skills를 한 번에 설치

```bash
# Claude Code 터미널에서 실행
/plugin marketplace add anthropics/skills
```

**무슨 일이 일어나나요?**:
```
1. GitHub에서 저장소 다운로드
2. 모든 SKILL.md 파일 인식
3. Claude Code의 플러그인 목록에 추가
4. 이제 Skills 이름만 말하면 자동 활성화!
```

**확인 방법**:
```bash
/plugin list
# 출력: anthropics/skills 포함된 목록
```

---

#### 🌿 중급: 특정 Skill만 사용

**시나리오**: PDF 문서만 다루고 싶어요

**방법 1: 이름으로 호출**
```
프롬프트: "pdf 스킬을 사용해서 계약서.pdf에서 텍스트 추출해줘"
```

**방법 2: 명시적 활성화**
```bash
/skill use pdf
```

**Claude의 반응**:
```
✅ PDF Skill 활성화됨
이제 PDF 관련 작업을 수행할 수 있습니다:
- 텍스트 추출
- 표 추출
- 양식 필드 읽기
- PDF 생성
- 문서 병합/분할
```

---

#### 🌳 고급: 로컬 커스터마이징

**목표**: 저장소를 로컬에 복사하고 수정하기

```bash
# 1. 저장소 클론
git clone https://github.com/anthropics/skills.git
cd skills

# 2. 특정 Skill 수정 (예: brand-guidelines)
cd brand-guidelines
nano SKILL.md  # 또는 원하는 에디터

# 3. 우리 회사 브랜드 색상으로 변경
# (SKILL.md 파일에서 Anthropic 색상 → 우리 회사 색상)

# 4. 로컬 버전 사용
/plugin marketplace add file:///path/to/skills
```

**실전 활용**:
- 회사 브랜드 가이드라인을 `brand-guidelines` Skill에 추가
- 자주 쓰는 코드 리뷰 체크리스트를 `skill-creator`에 반영
- 팀 커뮤니케이션 톤을 `internal-comms`에 맞춤 설정

---

### 환경 2: Claude.ai (웹 인터페이스)

#### 🌱 기초: 웹에서 바로 사용

**준비물**:
- Claude Pro, Team, 또는 Enterprise 플랜

**사용 방법** (완전 자동!):
```
1. claude.ai 로그인
2. 새 대화 시작
3. 그냥 "pdf 스킬로 문서 만들어줘" 입력
4. Claude가 자동으로 Skill 로딩 ✨
```

**마법처럼 작동하는 이유**:
- anthropics/skills의 모든 예제 Skills가 **이미 설치됨**
- 이름만 언급하면 자동 인식
- 별도 설치 불필요!

---

#### 🌿 중급: 커스텀 Skill 업로드

**목표**: 나만의 Skill을 Claude.ai에 추가

**단계별 가이드**:

```markdown
1. SKILL.md 파일 생성
   ---
   name: my-company-report
   description: 우리 회사 표준 보고서 양식으로 문서 생성
   ---
   # 회사 보고서 Skill
   [내용...]

2. 폴더 구조 만들기
   my-company-report/
   └── SKILL.md

3. ZIP 파일로 압축
   my-company-report.zip

4. Claude.ai 업로드
   - 설정 (⚙️) 클릭
   - Skills 탭 선택
   - "Upload Custom Skill" 버튼
   - ZIP 파일 선택
```

**확인**:
```
프롬프트: "my-company-report 스킬로 Q3 보고서 만들어줘"
Claude: "회사 표준 양식을 적용하여 보고서를 생성하겠습니다..."
```

---

### 환경 3: Claude API (프로그래밍)

#### 🌱 기초: API로 Skill 사용

**Python 예제**:

```python
import anthropic

client = anthropic.Anthropic(api_key="YOUR_API_KEY")

# Skills 사용하여 메시지 전송
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    skills=["pdf"],  # PDF Skill 활성화
    messages=[{
        "role": "user",
        "content": "PDF 파일을 생성해줘. 제목: '월간 보고서', 내용: 판매량 20% 증가"
    }]
)

print(response.content)
```

**출력**:
```
[PDF 파일 바이너리 데이터 또는 다운로드 링크]
```

---

#### 🌿 중급: 커스텀 Skill API 업로드

```python
# 1. Skill 정의
skill_definition = """
---
name: sales-analyzer
description: 판매 데이터를 분석하고 인사이트 제공
---
# 판매 분석 Skill
[Skill 내용]
"""

# 2. API로 업로드
response = client.skills.create(
    name="sales-analyzer",
    content=skill_definition
)

print(f"Skill ID: {response.id}")

# 3. 사용
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    skills=[response.id],  # 업로드한 Skill 사용
    messages=[{"role": "user", "content": "지난달 판매 데이터 분석해줘"}]
)
```

---

## 예제 Skills 카탈로그 - 언제 무엇을 쓸까?

### 🎨 Creative & Design Skills

#### 1. algorithmic-art

**언제 사용?**:
- 웹사이트 배경 애니메이션
- 예술 프로젝트
- 프레젠테이션 비주얼
- NFT 생성 아트

**실전 사용법**:
```
프롬프트: "algorithmic-art 스킬로 파란색 계열의 플로우 필드 만들어줘. 입자 1000개, 부드러운 움직임"

Claude 결과:
→ p5.js 코드 생성
→ HTML 파일로 실행 가능
→ 실시간 인터랙티브 애니메이션
```

**tip**: `frameCount`, `noise()`, `random()` 값을 조절하여 무한한 변형 가능

---

#### 2. canvas-design

**언제 사용?**:
- 소셜 미디어 포스트 (인스타, 페북)
- 이벤트 포스터
- 명함 디자인
- 프레젠테이션 슬라이드

**실전 사용법**:
```
프롬프트: "canvas-design 스킬로 Tech Conference 2025 포스터 만들어줘.
크기: 1080x1350 (인스타 세로),
색상: 사이버펑크 느낌 (네온 핑크, 파랑),
텍스트: 제목, 날짜(11월 15일), 장소(서울 코엑스)"

Claude 결과:
→ 전문가급 디자인 PNG 생성
→ 색상 이론 자동 적용
→ 타이포그래피 계층 구조
→ 다운로드 가능
```

---

#### 3. slack-gif-creator

**언제 사용?**:
- 팀 채팅방 분위기 메이커
- CI/CD 성공/실패 알림
- 축하 메시지
- 로딩 인디케이터

**실전 사용법**:
```
프롬프트: "slack-gif-creator 스킬로 '배포 성공!' 축하 GIF 만들어줘. 2초 루프, 5MB 이하"

Claude 결과:
→ 최적화된 GIF (파일 크기 준수)
→ Slack에 바로 업로드 가능
→ 애니메이션 프레임 자동 조정
```

**⚠️ 주의**: Slack은 최대 5MB 제한 → 이 Skill이 자동으로 압축!

---

### 💻 Development & Technical Skills

#### 1. artifacts-builder

**언제 사용?**:
- 프로토타입 빠르게 만들기
- 인터랙티브 데모
- 랜딩 페이지
- 관리자 대시보드

**실전 사용법**:
```
프롬프트: "artifacts-builder 스킬로 Todo 앱 만들어줘.
기능: 추가, 완료 체크, 삭제, 필터(전체/완료/미완료),
디자인: shadcn/ui, 다크모드 지원"

Claude 결과:
→ 완전한 React 컴포넌트
→ Tailwind CSS 스타일
→ 상태 관리 (useState)
→ 즉시 실행 가능한 코드
```

**고급 팁**: "Framer Motion으로 애니메이션 추가" 요청하면 더 멋지게!

---

#### 2. mcp-server

**언제 사용?**:
- Claude를 외부 API와 연결
- 데이터베이스 통합
- 자동화 워크플로우
- 커스텀 도구 생성

**실전 사용법**:
```
프롬프트: "mcp-server 스킬로 날씨 API MCP 서버 만들어줘.
API: OpenWeatherMap,
기능: 현재 날씨, 5일 예보,
도시: 서울, 부산, 제주"

Claude 결과:
→ FastMCP 서버 코드
→ API 키 환경변수 처리
→ 에러 핸들링
→ 문서화 포함
```

**실행**:
```bash
python weather_mcp_server.py
# 이제 Claude가 실시간 날씨 조회 가능!
```

---

#### 3. webapp-testing

**언제 사용?**:
- 웹사이트 QA 자동화
- 회귀 테스트 (Regression Testing)
- E2E 테스트
- 스크린샷 비교

**실전 사용법**:
```
프롬프트: "webapp-testing 스킬로 내 쇼핑몰 테스트해줘.
URL: http://localhost:3000,
시나리오:
1. 로그인 (test@example.com / test123)
2. 상품 검색 '노트북'
3. 첫 번째 상품 장바구니 담기
4. 결제 페이지까지 이동
5. 각 단계 스크린샷"

Claude 결과:
→ Playwright 테스트 코드
→ 자동 실행
→ 스크린샷 5장 저장
→ 문제 발견 시 상세 보고
```

---

### 🏢 Enterprise & Communication Skills

#### 1. brand-guidelines

**언제 사용?**:
- 회사 공식 문서
- 마케팅 자료
- 프레젠테이션
- 외부 커뮤니케이션

**실전 사용법**:
```
프롬프트: "brand-guidelines 스킬로 투자자 피치덱 만들어줘.
Anthropic 브랜드 색상 사용,
10 슬라이드,
내용: 회사 소개, 문제점, 솔루션, 시장 규모, 비즈니스 모델"

Claude 결과:
→ 브랜드 색상 자동 적용
→ 공식 폰트 사용
→ 일관된 디자인
→ PPTX 또는 PDF 출력
```

**커스터마이징**: Anthropic 색상을 우리 회사 색상으로 바꾸려면?
```markdown
SKILL.md 파일 수정:
- Primary: #F55036 → #YOUR_COLOR
- Secondary: #FFF4E6 → #YOUR_COLOR
```

---

#### 2. internal-comms

**언제 사용?**:
- 주간 뉴스레터
- 전사 공지
- 팀 업데이트
- FAQ 문서

**실전 사용법**:
```
프롬프트: "internal-comms 스킬로 개발팀 주간 뉴스레터 작성해줘.
완료: 신규 기능 3개 배포
진행중: 성능 최적화 (80%)
다음주: 모바일 앱 리뉴얼 시작
MVP: 김민수 (버그 수정 20개)"

Claude 결과:
→ 구조화된 뉴스레터
→ 친근한 톤
→ 이모지 적절히 사용
→ 섹션별 명확한 구분
```

---

#### 3. theme-factory

**언제 사용?**:
- 아티팩트 스타일링
- 일관된 디자인 시스템
- 빠른 프로토타입

**실전 사용법**:
```
프롬프트: "theme-factory 스킬로 '미니멀 모던' 테마 적용한 포트폴리오 페이지 만들어줘"

Claude 결과:
→ 사전 정의된 테마 자동 적용
→ 색상, 폰트, 간격 일관성
→ 다크/라이트 모드 지원
```

**10가지 테마**:
1. Minimal
2. Bold
3. Corporate
4. Playful
5. Elegant
6. Tech
7. Warm
8. Cool
9. Vintage
10. Futuristic

---

## document-skills 심층 활용법

### 왜 특별한가요?

**일반 Skills vs Document Skills**:

| 항목 | 일반 Skills | Document Skills |
|------|------------|-----------------|
| 복잡도 | 중간 | 매우 높음 |
| 파일 형식 | 텍스트 기반 | 바이너리 |
| 유지보수 | 커뮤니티 | Anthropic 공식 |
| 사용 | 오픈소스 | Source-Available* |
| 포함 여부 | 수동 설치 | Claude에 내장 |

*Source-Available: 코드는 볼 수 있지만 수정 배포에 제한

---

### 1. PDF Skill - 실전 활용

#### 🌱 기초: 텍스트 추출

```
프롬프트: "pdf 스킬로 계약서.pdf에서 텍스트 전체 추출해줘"

Claude:
→ PDF 파싱
→ 텍스트 추출
→ 마크다운 형식으로 출력
→ 테이블도 구조 유지
```

---

#### 🌿 중급: 양식 필드 읽기

**시나리오**: 100개의 신청서 PDF에서 정보 추출

```python
# 프롬프트:
"pdf 스킬로 /applications/ 폴더의 모든 PDF에서 다음 정보 추출해서 CSV로:
- 이름
- 이메일
- 전화번호
- 신청 항목"

# Claude 결과: applications_data.csv
```

**CSV 출력 예시**:
```csv
이름,이메일,전화번호,신청항목
김민수,minsu@example.com,010-1234-5678,개발자
이지은,jieun@example.com,010-8765-4321,디자이너
...
```

---

#### 🌳 고급: PDF 생성 + 병합

```
프롬프트: "pdf 스킬로:
1. 월간 보고서 PDF 생성 (제목, 차트 3개, 요약)
2. 기존 상세 데이터 PDF와 병합
3. 목차 추가
4. 페이지 번호 자동 삽입"

Claude 결과:
→ report_final.pdf (전문가급 품질)
→ 하이퍼링크 목차
→ 자동 페이지 번호
```

---

### 2. XLSX Skill - 데이터 마법사

#### 🌱 기초: 데이터 읽기

```
프롬프트: "xlsx 스킬로 sales_2025.xlsx 읽고 총 매출 계산해줘"

Claude:
→ 파일 로드
→ 데이터 분석
→ "총 매출: ₩450,000,000"
```

---

#### 🌿 중급: 자동 리포트 생성

```
프롬프트: "xlsx 스킬로 분기 리포트 만들어줘:
1. Q3_data.xlsx 분석
2. 신규 시트 'Summary' 추가
3. 피벗 테이블 (제품별 매출)
4. 차트 3개 (막대, 파이, 라인)
5. 조건부 서식 (증가=녹색, 감소=빨강)"

Claude 결과:
→ 경영진용 완벽한 Excel 파일
→ 클릭 한 번으로 필터링
→ 차트 자동 업데이트
```

---

#### 🌳 고급: 대시보드 자동화

```python
# 매일 자동 실행되는 스크립트
프롬프트: "xlsx 스킬로 자동화 대시보드:
1. DB에서 최신 데이터 쿼리
2. Excel 템플릿에 데이터 삽입
3. 차트 자동 갱신
4. 경영진에게 이메일 발송
5. 매일 오전 9시 실행"

결과:
→ 완전 자동화된 보고 시스템
→ 사람 개입 불필요
→ 항상 최신 데이터
```

---

### 3. DOCX & PPTX - 문서 자동화

#### 실전 조합 예제

```
프롬프트: "내 월간 보고서 자동 생성 시스템 만들어줘:

1. xlsx 스킬: 판매 데이터 분석 → 인사이트 추출
2. docx 스킬: Word 보고서 생성 (서론, 데이터, 결론)
3. pptx 스킬: 요약 프레젠테이션 (5 슬라이드)
4. pdf 스킬: 최종 PDF 변환

모두 우리 회사 브랜드 가이드라인 적용"

Claude 결과:
→ 4개 파일 자동 생성
→ 일관된 브랜딩
→ 30분 작업 → 3분으로 단축
```

---

## 나만의 Skills 만들고 기여하기

### Step 1: template-skill로 시작

```bash
# 1. 저장소 클론
git clone https://github.com/anthropics/skills.git
cd skills

# 2. 템플릿 복사
cp -r template-skill my-new-skill
cd my-new-skill
```

---

### Step 2: SKILL.md 작성

```markdown
---
name: meeting-summarizer
description: 회의록을 구조화된 요약으로 자동 변환. 액션 아이템, 결정 사항, 다음 단계 추출.
---

# 회의 요약 Skill

## 사용 시점
- 회의 후 빠른 요약 필요 시
- 장문의 회의록을 간결하게 정리
- 액션 아이템 트래킹

## 입력 형식
회의록 텍스트 (또는 음성 전사 텍스트)

## 출력 형식

### 📋 회의 요약

**날짜**: [자동 추출]
**참석자**: [자동 추출]

#### 💡 핵심 논의
- [주요 논의 내용 1]
- [주요 논의 내용 2]

#### ✅ 결정 사항
- [결정 1]
- [결정 2]

#### 📌 액션 아이템
- [ ] [담당자] [작업 내용] (마감: [날짜])
- [ ] [담당자] [작업 내용] (마감: [날짜])

#### 🔜 다음 회의
- 날짜: [제안]
- 안건: [제안]

## 예시

### 입력
"오늘 제품 기획 회의에서 김민수, 이지은, 박철수가 모였습니다.
신규 기능에 대해 논의했고, 다크모드를 우선 개발하기로 했습니다.
민수님이 다음 주까지 디자인 시안을 만들고,
지은님은 기술 검토를 목요일까지 완료하기로 했습니다..."

### 출력
📋 회의 요약

**날짜**: 2025-10-17
**참석자**: 김민수, 이지은, 박철수

💡 핵심 논의
- 신규 기능 우선순위 결정

✅ 결정 사항
- 다크모드를 최우선 기능으로 개발

📌 액션 아이템
- [ ] 김민수: 디자인 시안 작성 (마감: 다음 주)
- [ ] 이지은: 기술 검토 완료 (마감: 목요일)

🔜 다음 회의
- 날짜: 다음 주 월요일 제안
- 안건: 디자인 검토
```

---

### Step 3: 테스트

```
# Claude에서 테스트
프롬프트: "meeting-summarizer 스킬로 이 회의록 요약해줘: [회의록 텍스트]"

# 결과 확인 → 수정 → 반복
```

---

### Step 4: GitHub 기여 (선택)

```bash
# 1. Fork anthropics/skills

# 2. 브랜치 생성
git checkout -b add-meeting-summarizer

# 3. 커밋
git add my-new-skill/
git commit -m "Add meeting-summarizer skill"

# 4. Push
git push origin add-meeting-summarizer

# 5. Pull Request 생성
# GitHub 웹에서 PR 작성
# 제목: "Add meeting-summarizer skill"
# 설명: 기능, 사용 사례, 테스트 결과
```

**기여 가이드라인**:
- ✅ 명확한 `description`
- ✅ 실전 예시 포함
- ✅ 주의사항 명시
- ✅ 테스트 완료

---

## 용어 사전

### 🏗️ 저장소 관련

#### **GitHub Repository (저장소)**
**쉬운 설명**: 코드와 파일을 온라인에 저장하는 구글 드라이브 같은 곳
**비유**: 공개 도서관
**예시**: `anthropics/skills`는 주소, `skills`는 도서관 이름

#### **Clone (클론)**
**쉬운 설명**: 온라인 저장소를 내 컴퓨터로 복사
**명령어**: `git clone https://github.com/...`
**비유**: 도서관 책을 집으로 복사해오기 (책은 그대로 있음)

#### **Fork (포크)**
**쉬운 설명**: 다른 사람 저장소를 내 계정으로 복사
**목적**: 원본 건드리지 않고 실험
**비유**: 레시피 카드를 복사해서 내 버전 만들기

#### **Pull Request (PR)**
**쉬운 설명**: 내가 만든 변경사항을 원본 저장소에 제안
**과정**: Fork → 수정 → PR 생성 → 관리자 검토 → 승인/거절
**비유**: "제가 레시피를 개선했어요! 도서관에 추가해주세요" 요청

---

### 📄 Skills 관련

#### **SKILL.md**
**쉬운 설명**: Skill의 설명서가 담긴 마크다운 파일
**필수 요소**: YAML 프론트매터 + 본문
**위치**: 각 Skill 폴더 안

#### **YAML Frontmatter (프론트매터)**
**쉬운 설명**: 문서 맨 위의 메타데이터
**형식**:
```yaml
---
name: skill-name
description: 설명
---
```
**비유**: 책의 표지 정보

#### **Apache 2.0 License**
**쉬운 설명**: 자유롭게 사용, 수정, 배포 가능한 라이선스
**조건**:
- ✅ 상업적 사용 OK
- ✅ 수정 OK
- ✅ 재배포 OK
- ⚠️ 원저작자 표시 필수

---

### 🔧 기술 용어

#### **Source-Available (소스 공개)**
**오픈소스와의 차이**:
- 오픈소스: 코드 보기 + 수정 + 배포 모두 자유
- Source-Available: 코드는 볼 수 있지만, 사용에 제한

**document-skills 경우**:
- ✅ 코드 볼 수 있음 (학습용)
- ⚠️ 수정하여 배포 불가
- ✅ 참고하여 비슷한 것 만들기는 OK

#### **Plugin Marketplace (플러그인 마켓플레이스)**
**쉬운 설명**: Claude Code에서 Skills를 찾고 설치하는 앱 스토어
**사용법**: `/plugin marketplace add [저장소명]`
**비유**: 스마트폰의 앱 스토어

#### **MCP (Model Context Protocol)**
**쉬운 설명**: Claude가 외부 도구/API와 대화하는 표준 방법
**목적**: 통일된 방식으로 확장 기능 추가
**비유**: USB 포트 (어떤 장치든 같은 방식으로 연결)

---

## FAQ - 자주 묻는 질문

### Q1: anthropics/skills 저장소는 무료인가요?

**A**: 네, 완전 무료입니다!
- ✅ 저장소 접근: 무료
- ✅ Skills 다운로드: 무료
- ✅ 수정 및 사용: 무료 (Apache 2.0)
- ⚠️ Claude API 사용료는 별도 (사용량 기반)

---

### Q2: document-skills를 수정해서 써도 되나요?

**A**: 학습용으로는 OK, 재배포는 NO
- ✅ 코드 보고 공부: OK
- ✅ 비슷한 Skill 새로 만들기: OK
- ❌ 수정해서 배포: NO (Source-Available 제한)
- ✅ 개인/회사 내부 사용: OK

---

### Q3: Skills가 작동하지 않아요

**체크리스트**:
1. **설치 확인**:
   ```bash
   /plugin list  # anthropics/skills 있는지
   ```

2. **이름 정확히**:
   ```
   ❌ "PDF 스킬"  (공백, 대문자)
   ✅ "pdf 스킬" (소문자, 하이픈)
   ```

3. **경로 확인**:
   ```bash
   ls skills/pdf/SKILL.md  # 파일 존재하는지
   ```

4. **재설치**:
   ```bash
   /plugin marketplace remove anthropics/skills
   /plugin marketplace add anthropics/skills
   ```

---

### Q4: 어떤 Skill을 먼저 배워야 하나요?

**추천 학습 순서**:

**1주차: 문서 Skills (즉시 활용)**
- `pdf`: PDF 읽기/쓰기
- `docx`: Word 문서 자동화
- `xlsx`: Excel 보고서

**2주차: 개발 Skills (개발자용)**
- `artifacts-builder`: React 앱
- `webapp-testing`: 자동 테스트
- `mcp-server`: API 통합

**3주차: 창의 Skills (디자이너용)**
- `canvas-design`: 그래픽 디자인
- `algorithmic-art`: 생성 예술
- `slack-gif-creator`: GIF 애니메이션

**4주차: 메타 Skills (고급)**
- `skill-creator`: Skill 만들기
- `template-skill`: 템플릿 활용

---

### Q5: 회사에서 Skills를 써도 되나요?

**A**: 네! 그게 목적입니다.

**상업적 사용 OK 시나리오**:
- ✅ 사내 업무 자동화
- ✅ 고객용 서비스 개발
- ✅ 제품에 통합
- ✅ 컨설팅 프로젝트

**주의사항**:
- 📄 Apache 2.0 라이선스 준수 (저작권 표시)
- 🔒 민감 정보는 커스텀 Skill에만 (공개 X)
- 💼 Enterprise 플랜 고려 (대규모 사용 시)

---

### Q6: Skills와 Prompts의 차이는?

**Prompts (프롬프트)**:
```
"이 PDF에서 텍스트 추출하고, 요약하고,
중요한 날짜만 리스트로 정리해줘"
```
- 매번 길게 설명해야 함
- 일관성 부족
- 재사용 어려움

**Skills (스킬)**:
```
"pdf 스킬로 요약해줘"
```
- 한 번 정의하면 반복 사용
- 일관된 품질
- 팀 전체가 같은 방식으로 사용

**비유**:
- Prompt = 요리사에게 매번 레시피 설명
- Skill = 레시피 카드를 건네줌

---

## 최종 실전 프로젝트 아이디어

### 프로젝트 1: "자동 주간 보고서 시스템"

**목표**: 판매 데이터 → 보고서 자동 생성

**사용 Skills**:
1. `xlsx`: 판매 데이터 분석
2. `docx`: Word 보고서 작성
3. `pptx`: 요약 프레젠테이션
4. `internal-comms`: 이메일 문구

**결과**: 버튼 하나로 전체 보고 패키지 완성

---

### 프로젝트 2: "디자인 자동화 파이프라인"

**목표**: 텍스트 → 소셜 미디어 포스트

**사용 Skills**:
1. `canvas-design`: 인스타 포스트 디자인
2. `slack-gif-creator`: 트위터용 GIF
3. `brand-guidelines`: 브랜드 색상 적용

**결과**: 멀티채널 콘텐츠 동시 생성

---

### 프로젝트 3: "개발 워크플로우 자동화"

**목표**: PR 생성 → 테스트 → 리뷰 → 배포

**사용 Skills**:
1. `webapp-testing`: 자동 E2E 테스트
2. `mcp-server`: GitHub API 통합
3. Custom Skill: 코드 리뷰 자동화

**결과**: CI/CD 파이프라인 완성

---

## 연결된 노트

- [[Claude Skills 완벽 가이드 Part 1 - 기본 개념과 시작하기]]
- [[Claude Skills 완벽 가이드 Part 2 - 실전 활용 창의성과 개발]]
- [[Claude Skills 완벽 가이드 Part 3 - 고급 활용과 맞춤 제작]]
- [[GitHub 기초 가이드]]
- [[오픈소스 기여 방법]]

---

**🎉 마무리**

anthropics/skills 저장소는 단순한 예제 모음이 아닙니다.
**전문가들의 노하우가 담긴 실전 도구 상자**입니다.

**다음 단계**:
1. ⭐ GitHub에서 저장소에 Star 주기 (북마크)
2. 📥 관심 있는 Skill부터 설치해보기
3. 🛠️ 나만의 첫 Skill 만들어보기
4. 🤝 커뮤니티에 기여하기

**Remember**: 최고의 학습은 직접 만들어보는 것입니다.
작게 시작하고, 꾸준히 개선하세요! 🚀

---

*이 가이드는 anthropics/skills 저장소의 공식 README.md를 기반으로 초보자가 실전에서 바로 활용할 수 있도록 작성되었습니다.*