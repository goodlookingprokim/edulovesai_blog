---
title: Context Engineering 완전 정복 - 프롬프트를 넘어서
created: 2025-10-06
last_modified: 2025-10-06
tags:
  - AI/컨텍스트엔지니어링
  - 프롬프트/엔지니어링
  - AI/에이전트
  - 개발/자동화
  - 튜토리얼/초보자
status: 완료
type: 가이드
priority: high
github_repo: https://github.com/coleam00/context-engineering-intro
share_link: https://share.note.sx/hmokjhso#LeEirFPR+7aEB9zPzSoMF2+dYCP1lGZcyz9Iwd4CHOo
share_updated: 2025-10-06T23:33:55+09:00
---

# Context Engineering 완전 정복 - 프롬프트를 넘어서

## 📋 목차
1. [[#충격적인 진실 - 프롬프트 엔지니어링은 낡았다]]
2. [[#Context Engineering이 뭔가요]]
3. [[#왜 AI는 실패할까 컨텍스트 부족 문제]]
4. [[#Context Engineering의 핵심 구조]]
5. [[#PRP 워크플로우 완전 이해]]
6. [[#실전 예제로 배우기]]
7. [[#고급 테크닉과 베스트 프랙티스]]
8. [[#핵심 정리]]

---

## 충격적인 진실 - 프롬프트 엔지니어링은 낡았다!

### 🎭 시대의 변화

> "완벽한 프롬프트를 쓰면 AI가 원하는 걸 만들어줄 거야!"
>
> **→ 이건 2022년 이야기입니다. 2025년에는 완전히 다릅니다.**

### 📖 실생활 이야기로 이해하기

**상황**: 집을 짓고 싶다고 상상해보세요.

#### 옛날 방식 (Vibe Coding)
```
당신: "예쁜 집 지어줘~"
건축가: "...뭘 원하시는 거죠?"
```
**결과**: 😭 완전 망작

#### 2022년 방식 (Prompt Engineering)
```
당신: "현대적인 2층짜리 집을 지어줘.
      거실은 넓게, 방은 3개, 주방은 오픈형으로."
건축가: "알겠습니다!"
        → 집은 지었지만... 배관 위치 이상, 전기선 엉망
```
**결과**: 😐 절반만 성공

#### 2025년 방식 (Context Engineering)
```
당신: [완벽한 설계도 패키지 제공]
      - 상세 도면
      - 재료 명세서
      - 시공 순서
      - 검증 체크리스트
      - 비슷한 집 사진 10장
      - 시공 규칙 문서

건축가: "완벽합니다!"
        → 모든 것이 기대대로 작동하는 완벽한 집!
```
**결과**: 🎉 100% 성공!

### 🎯 핵심 통찰

**Context Engineering은 프롬프트의 10배, Vibe Coding의 100배 효과적입니다!**

---

## Context Engineering이 뭔가요?

### 🔄 패러다임의 전환

#### Prompt Engineering (옛날)
```
"이렇게 해줘"라는 한 장짜리 메모
```

#### Context Engineering (지금)
```
완벽한 시나리오가 담긴 영화 각본 전체
```

### 📝 5살 아이에게 설명한다면

> "Context Engineering은 AI에게 **모든 정보**를 주는 거예요.
>
> 마치 레고를 조립할 때 설명서 전체를 주는 것처럼,
> AI가 필요한 모든 것을 다 알려주는 거죠!"

### 🎯 WHY → WHAT → HOW

#### WHY (왜 필요한가?)

**AI 실패의 진짜 이유**:
```
❌ 모델이 멍청해서? → NO!
❌ 프롬프트가 나빠서? → NO!
✅ 컨텍스트가 부족해서! → YES!!!

대부분의 AI 실패는 "컨텍스트 실패"입니다.
```

**실제 통계**:
```yaml
AI 에이전트 실패 원인:
  컨텍스트 부족: 80%
  모델 한계: 15%
  프롬프트 문제: 5%
```

#### WHAT (무엇인가?)

Context Engineering은 **시스템**입니다:

```
Context Engineering =
  📚 문서 (Documentation) +
  📝 예제 (Examples) +
  📋 규칙 (Rules) +
  🎨 패턴 (Patterns) +
  ✅ 검증 (Validation)
```

#### HOW (어떻게 작동하나?)

```
1. 컨텍스트 준비
   ↓
2. PRP 생성 (Product Requirements Prompt)
   ↓
3. AI가 PRP 읽기
   ↓
4. 단계별 실행 + 검증
   ↓
5. 완벽한 결과물! ✨
```

---

## 왜 AI는 실패할까? 컨텍스트 부족 문제

### 🔍 컨텍스트 부족의 실제 사례

#### 사례 1: 코딩 스타일 불일치

**문제**:
```python
# 기존 코드 (당신의 스타일)
def calculate_total(items: List[Item]) -> Decimal:
    """Calculate total with tax."""
    subtotal = sum(item.price for item in items)
    return subtotal * Decimal('1.1')

# AI가 만든 코드 (컨텍스트 없이)
def calc_total(items):
    total = 0
    for item in items:
        total = total + item["price"]
    return total * 1.1  # 세금 포함
```

**문제점**:
- 타입 힌트 없음
- 변수명 축약
- Decimal 대신 float
- 다른 반복문 스타일

**Context Engineering으로 해결**:
```markdown
# CLAUDE.md (프로젝트 규칙)

## 코딩 스타일
- 모든 함수에 타입 힌트 필수
- Google 스타일 docstring
- 금액은 항상 Decimal 사용
- List comprehension 선호
```

**결과**: AI가 프로젝트 스타일 완벽 준수!

#### 사례 2: 테스트 미작성

**문제**:
```
사용자: "로그인 기능 만들어줘"
AI: [코드 생성]
     → 테스트 없음
     → 에러 핸들링 없음
     → 보안 검증 없음
```

**Context Engineering으로 해결**:
```markdown
# CLAUDE.md

## 테스트 규칙
- 모든 새 기능에 pytest 단위 테스트 필수
- 최소 3가지 테스트:
  1. 정상 작동 테스트
  2. 엣지 케이스 테스트
  3. 실패 케이스 테스트
```

**결과**: 자동으로 완벽한 테스트 생성!

---

## Context Engineering의 핵심 구조

### 🏗️ 5가지 핵심 요소

```
┌─────────────────────────────────────┐
│  1. CLAUDE.md (글로벌 규칙)          │
│     "프로젝트 헌법"                  │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  2. examples/ (코드 예제)            │
│     "실제 작동하는 샘플"             │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  3. INITIAL.md (기능 요청)           │
│     "무엇을 만들지 설명"             │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  4. PRP (구현 청사진)                │
│     "완벽한 설계도"                  │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  5. Validation (검증 게이트)         │
│     "품질 보증"                      │
└─────────────────────────────────────┘
```

### 📚 요소 1: CLAUDE.md - 프로젝트 헌법

**실생활 비유**: 회사 취업 규칙

```markdown
# CLAUDE.md 구조

### 🔄 프로젝트 인식
- PLANNING.md 읽기
- TASK.md 확인
- 일관된 네이밍 사용

### 🧱 코드 구조
- 파일 500줄 이하
- 모듈별로 분리
- 명확한 import

### 🧪 테스트
- pytest 사용
- 3가지 테스트 필수
- /tests 폴더 구조

### 📎 스타일
- Python 사용
- PEP8 준수
- 타입 힌트
- docstring 필수
```

**🌱 기초 예제**: 간단한 CLAUDE.md

```markdown
# My Project Rules

## 언어
- Python 3.11+
- 타입 힌트 필수

## 스타일
- 함수명: snake_case
- 클래스명: PascalCase
- 상수: UPPER_CASE

## 테스트
- 모든 함수에 테스트
- pytest 사용
```

**효과**: AI가 이 규칙을 **자동으로 따릅니다**!

---

### 📂 요소 2: examples/ - 실제 코드 샘플

**실생활 비유**: 요리 레시피 사진

> 말로 설명하는 것보다 실제 요리 사진을 보는 게 100배 낫습니다!

#### 🌿 중급 예제: 효과적인 예제 구조

```
examples/
├── README.md              # 각 예제 설명
├── cli.py                 # CLI 패턴
├── agent/
│   ├── agent.py          # 에이전트 생성 패턴
│   ├── tools.py          # 도구 구현 패턴
│   └── providers.py      # 멀티 프로바이더 패턴
└── tests/
    ├── test_agent.py     # 단위 테스트 패턴
    └── conftest.py       # pytest 설정
```

**예제 README.md**:
```markdown
# Examples Guide

## cli.py
CLI 인터페이스 구현 패턴입니다.

**사용하는 부분**:
- Click 사용법
- 인자 파싱
- 출력 포맷팅

**피해야 할 부분**:
- 에러 처리 방식 (프로젝트마다 다름)
- 특정 API 호출 (예제용)

## agent/
Pydantic AI 에이전트 구조입니다.

**따라야 할 패턴**:
- 에이전트 초기화
- 도구 등록 방식
- 프로바이더 전환

**주의사항**:
- 이 예제는 Pydantic AI용입니다
- LangChain 프로젝트라면 구조만 참고
```

**🤔 생각해보기**: 왜 예제가 중요할까요?
<details>
<summary>답변 보기</summary>

AI는 **패턴 매칭 기계**입니다!

실제 작동하는 코드를 보면:
1. 스타일을 정확히 따라함
2. 구조를 이해함
3. 실수를 줄임
4. 더 나은 코드 생성

예제 없이: 30% 성공률
예제 있음: 90% 성공률!
</details>

---

### 📝 요소 3: INITIAL.md - 기능 요청서

**실생활 비유**: 레스토랑 주문서

```markdown
## FEATURE:
무엇을 만들지 **구체적으로** 설명

## EXAMPLES:
examples/ 폴더의 어떤 파일을 참고할지

## DOCUMENTATION:
API 문서, 라이브러리 가이드 링크

## OTHER CONSIDERATIONS:
주의사항, 흔한 실수, 성능 요구사항
```

#### 나쁜 예 vs 좋은 예

**❌ 나쁜 INITIAL.md**:
```markdown
## FEATURE:
웹 스크래퍼 만들어줘
```

**✅ 좋은 INITIAL.md**:
```markdown
## FEATURE:
**비동기 웹 스크래퍼 구현**

요구사항:
- BeautifulSoup 사용
- 전자상거래 사이트에서 제품 데이터 추출
- Rate limiting 처리 (1초당 최대 5 요청)
- PostgreSQL에 결과 저장
- 재시도 로직 (최대 3회)
- 에러 로깅

성능:
- 동시 요청 10개까지 처리
- 타임아웃 30초

## EXAMPLES:
- `examples/async_client.py` - 비동기 HTTP 패턴
- `examples/db_handler.py` - PostgreSQL 연결 패턴
- `examples/retry_logic.py` - 재시도 데코레이터

## DOCUMENTATION:
- BeautifulSoup: https://beautiful-soup-4.readthedocs.io/
- aiohttp: https://docs.aiohttp.org/
- asyncpg: https://magicstack.github.io/asyncpg/

## OTHER CONSIDERATIONS:
- 일부 사이트는 User-Agent 체크함 → 설정 필요
- 동적 콘텐츠는 Selenium 필요 (이번엔 제외)
- Rate limit 초과 시 429 에러 → 백오프 전략
- 데이터베이스 연결 풀 사용 (최대 20개)
```

**차이점**:
```
나쁜 예: 10% 성공 확률
좋은 예: 95% 성공 확률
```

---

### 📋 요소 4: PRP (Product Requirements Prompt)

**실생활 비유**: 완벽한 건축 설계도

PRP는 PRD(Product Requirements Document)와 비슷하지만, **AI 전용으로 최적화**된 문서입니다.

#### PRP의 구조

```markdown
# Feature Name PRP

## 🎯 Goal
[무엇을 만들지 한 문장으로]

## 📋 Context
[배경 정보, 왜 필요한지]

## 🏗️ Architecture
[시스템 구조도]

## 📝 Implementation Steps

### Step 1: [작업명]
**What**: 무엇을 하는지
**Why**: 왜 필요한지
**How**: 어떻게 구현하는지
**Files**: 어떤 파일을 생성/수정하는지
**Validation**: 어떻게 검증하는지

### Step 2: [작업명]
...

## ✅ Success Criteria
[성공 조건 체크리스트]

## 🧪 Testing Strategy
[테스트 계획]

## 📚 Documentation
[참고 자료]

## ⚠️ Common Pitfalls
[흔한 실수]

## 🎚️ Confidence Score
[1-10점, AI가 자가 평가]
```

#### 🌳 고급 예제: 실제 PRP

```markdown
# Async Web Scraper PRP

## 🎯 Goal
Rate-limited async web scraper that extracts product data
from e-commerce sites and stores in PostgreSQL.

## 📋 Context
Current system lacks scraping capability. Need to collect
competitor pricing data for analysis. Must handle:
- Multiple concurrent requests
- Rate limiting
- Error recovery
- Data validation

## 🏗️ Architecture

```
┌─────────────┐
│   CLI       │ ← User interface
└──────┬──────┘
       │
┌──────▼──────────┐
│  ScraperManager │ ← Orchestration
└──────┬──────────┘
       │
   ┌───┴───┬──────────┬─────────┐
   │       │          │         │
┌──▼──┐ ┌─▼──┐    ┌──▼──┐  ┌──▼──┐
│Task1│ │Task2│    │Task3│  │Task4│ ← Async workers
└──┬──┘ └──┬─┘    └──┬──┘  └──┬──┘
   │       │          │         │
   └───┬───┴──────────┴─────────┘
       │
┌──────▼──────┐
│ PostgreSQL  │ ← Data storage
└─────────────┘
```

## 📝 Implementation Steps

### Step 1: Database Schema
**What**: Create products table with proper indexes
**Why**: Need structured storage for scraped data
**How**:
- Use SQLAlchemy ORM
- Add indexes on (url, scraped_at)
- Include retry_count for failed scrapes

**Files**:
- `models/product.py` (new)
- `alembic/versions/001_create_products.py` (new)

**Validation**:
```bash
pytest tests/test_models.py
alembic upgrade head
```

### Step 2: Rate Limiter
**What**: Implement token bucket rate limiter
**Why**: Prevent getting blocked by target sites
**How**:
- asyncio.Semaphore for concurrency control
- Track request timestamps
- Implement exponential backoff

**Files**:
- `utils/rate_limiter.py` (new)
- `tests/test_rate_limiter.py` (new)

**Validation**:
```python
# Must pass:
assert limiter.can_proceed() == True  # Initial
await limiter.acquire()
assert limiter.current_rate <= 5.0    # Max 5/sec
```

### Step 3: Scraper Core
**What**: Async scraper with BeautifulSoup
**Why**: Need to extract structured data
**How**:
- aiohttp for async HTTP
- BeautifulSoup for parsing
- Pydantic for validation

**Files**:
- `scraper/client.py` (new)
- `scraper/parser.py` (new)
- `tests/test_scraper.py` (new)

**Validation**:
```bash
pytest tests/test_scraper.py -v
# All 15 tests must pass
```

[... 더 많은 단계들 ...]

## ✅ Success Criteria

- [ ] Can scrape 100 products in under 30 seconds
- [ ] Rate limiter enforces 5 req/sec limit
- [ ] All data validated with Pydantic
- [ ] 95%+ test coverage
- [ ] Handles network errors gracefully
- [ ] Logs all operations with context
- [ ] Database migrations run successfully

## 🧪 Testing Strategy

**Unit Tests** (pytest):
- Rate limiter logic
- Parser extraction
- Data validation

**Integration Tests**:
- End-to-end scraping flow
- Database operations
- Error recovery

**Performance Tests**:
- Concurrent request handling
- Memory usage under load

## 📚 Documentation

- BeautifulSoup: https://beautiful-soup-4.readthedocs.io/
- aiohttp: https://docs.aiohttp.org/
- Pydantic: https://docs.pydantic.dev/
- Reference: `examples/async_client.py`

## ⚠️ Common Pitfalls

1. **Forgetting User-Agent**: Most sites check
   → Solution: Rotate user agents

2. **Not closing connections**: Memory leak
   → Solution: Use async context managers

3. **Ignoring robots.txt**: Legal issues
   → Solution: Check robots.txt first

4. **Blocking event loop**: Sync calls
   → Solution: Use asyncio.to_thread()

## 🎚️ Confidence Score: 9/10

**Strong areas**:
- Clear architecture
- Comprehensive validation
- Good examples provided

**Uncertain areas**:
- Specific CSS selectors (site-dependent)
- May need adjustment for dynamic content
```

**PRP의 효과**:
```
PRP 없이: 50% 성공률, 5번 재시도 필요
PRP 있음: 95% 성공률, 1번에 성공!
```

---

## PRP 워크플로우 완전 이해

### 🔄 전체 프로세스

```
사용자
  │
  ├─ 1. INITIAL.md 작성
  │    "웹 스크래퍼 만들어줘"
  │
  ▼
/generate-prp
  │
  ├─ 2. 코드베이스 분석
  │    - 패턴 찾기
  │    - 유사 구현 검색
  │
  ├─ 3. 문서 수집
  │    - API 문서 가져오기
  │    - 라이브러리 가이드
  │
  ├─ 4. PRP 생성
  │    - 단계별 계획
  │    - 검증 게이트
  │
  ▼
PRPs/web-scraper.md 생성
  │
  ▼
사용자 검토 (선택)
  │
  ▼
/execute-prp PRPs/web-scraper.md
  │
  ├─ 5. 컨텍스트 로드
  │    - PRP 전체 읽기
  │    - 예제 파일 로드
  │
  ├─ 6. 작업 계획
  │    - TodoWrite로 작업 생성
  │
  ├─ 7. 단계별 실행
  │    Step 1 실행 → 검증 → ✅
  │    Step 2 실행 → 검증 → ✅
  │    Step 3 실행 → 검증 → ✅
  │
  ├─ 8. 테스트 실행
  │    pytest → 실패 시 자동 수정
  │
  ├─ 9. 린트 체크
  │    black, mypy → 자동 수정
  │
  ▼
완성! 🎉
```

### 🎯 /generate-prp의 내부 작동

```bash
/generate-prp INITIAL.md
```

**Phase 1: Research (연구 단계)**
```
1. Read INITIAL.md
2. Search codebase for patterns
   → "어떻게 비슷한 기능을 구현했지?"
3. Analyze file structure
   → "프로젝트 구조는 어떻게 되어있지?"
4. Find conventions
   → "네이밍 규칙은 뭐지?"
```

**Phase 2: Documentation (문서 수집)**
```
1. Fetch API docs from URLs in INITIAL.md
2. Search for tutorials and guides
3. Identify gotchas and quirks
4. Gather best practices
```

**Phase 3: Blueprint Creation (청사진 생성)**
```
1. Break down feature into steps
2. Add validation for each step
3. Include test requirements
4. Add error handling strategies
```

**Phase 4: Quality Check (품질 확인)**
```
1. Self-evaluate confidence (1-10)
2. Identify missing context
3. Add warnings for uncertain areas
4. Suggest improvements
```

**출력**:
```
✓ PRP generated: PRPs/web-scraper.md
✓ Confidence: 9/10
✓ Ready for execution
```

### 🚀 /execute-prp의 내부 작동

```bash
/execute-prp PRPs/web-scraper.md
```

**Phase 1: Load Context (컨텍스트 로딩)**
```python
# AI가 읽는 것들:
1. PRP 전체 내용
2. CLAUDE.md (프로젝트 규칙)
3. examples/ 폴더의 샘플 코드
4. 관련 문서

# 결과: 완벽한 이해!
```

**Phase 2: Plan (계획 수립)**
```python
# TodoWrite 사용
todos = [
    "Step 1: Create database schema",
    "Step 2: Implement rate limiter",
    "Step 3: Build scraper core",
    # ... 모든 단계
]
```

**Phase 3: Execute with Validation (실행 + 검증)**
```python
for step in steps:
    # 구현
    implement(step)

    # 검증
    validation_result = validate(step)

    if validation_result.failed:
        # 자동으로 수정 시도!
        fix_issues(validation_result.errors)
        validate(step)  # 재검증
```

**Phase 4: Testing Loop (테스트 루프)**
```bash
while True:
    pytest_result = run_tests()

    if pytest_result.all_passed:
        break  # 성공!

    # 실패한 테스트 분석
    failures = analyze_failures(pytest_result)

    # 자동 수정
    fix_code_based_on_failures(failures)
```

**Phase 5: Final Checks (최종 확인)**
```bash
# 린트 체크
black .
mypy .

# 커버리지 체크
pytest --cov=. --cov-report=term

# Success Criteria 검증
verify_all_criteria_met()
```

**완료!**
```
====================================================================
🎉 FEATURE COMPLETE!
✓ All steps executed successfully
✓ All tests passed (127/127)
✓ Code coverage: 96%
✓ Linting passed
✓ All success criteria met
====================================================================
```

---

## 실전 예제로 배우기

### 🌱 기초 예제: 간단한 CLI 도구

**목표**: "Hello, World" CLI 만들기

#### Step 1: INITIAL.md 작성

```markdown
## FEATURE:
간단한 CLI 도구 만들기

기능:
- 사용자 이름을 입력받아서 인사
- --formal 플래그로 격식 있는 인사
- 결과를 파일로 저장하는 --output 옵션

## EXAMPLES:
- `examples/cli.py` - Click 사용 패턴

## DOCUMENTATION:
- Click: https://click.palletsprojects.com/

## OTHER CONSIDERATIONS:
- Python 3.11+ 사용
- 타입 힌트 필수
- pytest로 테스트
```

#### Step 2: /generate-prp 실행

```bash
/generate-prp INITIAL.md
```

**생성된 PRP** (간략화):
```markdown
# Hello CLI PRP

## Implementation Steps

### Step 1: CLI Structure
**Files**: `src/cli.py`
```python
import click

@click.command()
@click.argument('name')
@click.option('--formal', is_flag=True)
@click.option('--output', type=click.Path())
def hello(name: str, formal: bool, output: str | None):
    """Greet the user."""
    pass
```

### Step 2: Greeting Logic
**Files**: `src/greeter.py`
```python
def create_greeting(name: str, formal: bool) -> str:
    if formal:
        return f"Good day, {name}."
    return f"Hey {name}!"
```

### Step 3: Tests
**Files**: `tests/test_cli.py`
```python
def test_informal_greeting():
    result = runner.invoke(cli, ['Alice'])
    assert "Hey Alice!" in result.output

def test_formal_greeting():
    result = runner.invoke(cli, ['Bob', '--formal'])
    assert "Good day, Bob." in result.output
```

**Validation**: `pytest tests/`
```

#### Step 3: /execute-prp 실행

```bash
/execute-prp PRPs/hello-cli.md
```

**결과**:
```
✓ Created src/cli.py
✓ Created src/greeter.py
✓ Created tests/test_cli.py
✓ All tests passed (5/5)
✓ Feature complete!
```

**사용해보기**:
```bash
$ python src/cli.py Alice
Hey Alice!

$ python src/cli.py Bob --formal
Good day, Bob.

$ python src/cli.py Charlie --output greeting.txt
✓ Greeting saved to greeting.txt
```

---

### 🌿 중급 예제: Multi-Agent 시스템

**목표**: 리서치 에이전트 + 이메일 초안 에이전트

#### 아키텍처

```
Primary Agent (연구 + 이메일)
│
├─ Tool 1: Web Search (Brave API)
│
└─ Tool 2: Email Draft Agent ← 또 다른 AI 에이전트!
    │
    └─ Tool: Gmail API
```

#### INITIAL.md

```markdown
## FEATURE:
Pydantic AI 멀티 에이전트 시스템

**Primary Agent**: 리서치 에이전트
- 주제에 대해 웹 검색 (Brave API)
- 정보 요약
- 이메일 초안 작성 의뢰

**Sub-Agent**: 이메일 초안 에이전트
- 리서치 결과 받기
- 전문적인 이메일 초안 작성
- Gmail로 전송 준비

**CLI**: 사용자 인터페이스
- 리서치 주제 입력
- 결과 표시
- 이메일 확인 및 전송

## EXAMPLES:
- `examples/cli.py` - CLI 패턴
- `examples/agent/agent.py` - 에이전트 생성 패턴
- `examples/agent/tools.py` - 도구 구현 패턴
- `examples/agent/providers.py` - 멀티 프로바이더

## DOCUMENTATION:
- Pydantic AI: https://ai.pydantic.dev/
- Brave API: https://brave.com/search/api/
- Gmail API: https://developers.google.com/gmail/api

## OTHER CONSIDERATIONS:
- .env.example 포함
- README에 설정 가이드
- 프로젝트 구조 문서화
- venv 이미 설정됨
- python_dotenv 사용
```

#### 생성된 PRP 구조

```markdown
# Multi-Agent Research System PRP

## Architecture

```
User Input
    ↓
┌─────────────────────┐
│   CLI Interface     │
│   (click)           │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Research Agent     │ ← Primary Agent
│  (Pydantic AI)      │
└──────┬──────┬───────┘
       │      │
       │      └──────────────────┐
       ▼                         ▼
┌─────────────┐      ┌──────────────────┐
│ Web Search  │      │ Email Draft      │ ← Sub-Agent
│ Tool        │      │ Agent            │
│ (Brave API) │      │ (Pydantic AI)    │
└─────────────┘      └────────┬─────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │  Gmail Tool     │
                     │  (Gmail API)    │
                     └─────────────────┘
```

## Implementation Steps

### Step 1: Environment Setup
**Files**: `.env.example`, `requirements.txt`

### Step 2: Gmail Tool
**Files**: `src/tools/gmail_tool.py`
```python
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

class GmailTool:
    """Gmail API integration."""

    def __init__(self, credentials_path: str):
        self.creds = self._load_credentials(credentials_path)
        self.service = build('gmail', 'v1', credentials=self.creds)

    def create_draft(
        self,
        to: str,
        subject: str,
        body: str
    ) -> dict:
        """Create email draft."""
        pass
```

### Step 3: Web Search Tool
**Files**: `src/tools/search_tool.py`
```python
import httpx
from typing import List, Dict

class BraveSearchTool:
    """Brave Search API integration."""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.search.brave.com/res/v1"

    async def search(
        self,
        query: str,
        count: int = 5
    ) -> List[Dict]:
        """Perform web search."""
        pass
```

### Step 4: Email Draft Agent
**Files**: `src/agents/email_agent.py`
```python
from pydantic_ai import Agent
from src.tools.gmail_tool import GmailTool

def create_email_agent(gmail_tool: GmailTool) -> Agent:
    """Create email drafting agent."""

    agent = Agent(
        model='openai:gpt-4',
        system_prompt="""
        You are a professional email writer.
        Create concise, clear, and friendly emails.
        """,
        tools=[gmail_tool.create_draft]
    )

    return agent
```

### Step 5: Research Agent
**Files**: `src/agents/research_agent.py`
```python
from pydantic_ai import Agent
from src.tools.search_tool import BraveSearchTool
from src.agents.email_agent import create_email_agent

def create_research_agent(
    search_tool: BraveSearchTool,
    email_agent: Agent
) -> Agent:
    """Create research agent with email sub-agent."""

    agent = Agent(
        model='openai:gpt-4',
        system_prompt="""
        You are a research assistant.
        1. Search the web for information
        2. Summarize findings
        3. Use email agent to draft results
        """,
        tools=[
            search_tool.search,
            email_agent.run  # Sub-agent as tool!
        ]
    )

    return agent
```

### Step 6: CLI
**Files**: `src/cli.py`
```python
import click
import asyncio
from src.agents.research_agent import create_research_agent

@click.command()
@click.argument('topic')
@click.option('--email-to', help='Email recipient')
def research(topic: str, email_to: str | None):
    """Research topic and optionally email results."""

    agent = create_research_agent(...)

    result = asyncio.run(
        agent.run(f"Research: {topic}")
    )

    click.echo(result.data)

    if email_to:
        click.echo("Emailing results...")
```

### Step 7: Tests
**Files**: `tests/test_agents.py`
```python
import pytest
from src.agents.research_agent import create_research_agent

@pytest.mark.asyncio
async def test_research_flow():
    """Test full research workflow."""
    agent = create_research_agent(...)
    result = await agent.run("AI trends 2025")
    assert "AI" in result.data
    assert len(result.data) > 100

def test_email_agent_tool():
    """Test email agent as a tool."""
    research_agent = create_research_agent(...)
    tools = research_agent.tools
    assert any('email' in str(t) for t in tools)
```

## ✅ Success Criteria
- [ ] Research agent searches web successfully
- [ ] Email agent creates professional drafts
- [ ] Agents communicate correctly
- [ ] CLI works end-to-end
- [ ] All tests pass
- [ ] README includes setup guide
```

#### 실행 후 결과

```bash
$ python src/cli.py "AI trends 2025" --email-to boss@company.com

Searching: AI trends 2025...
Found 10 results.

Summarizing findings:
- Generative AI continues to grow
- Context engineering emerging
- Multi-agent systems gaining traction

Drafting email...

Email draft created:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
To: boss@company.com
Subject: AI Trends 2025 Research

Dear [Boss],

I've researched the latest AI trends for 2025.
Here are the key findings:

[... 전문적인 요약 ...]

Best regards,
[Your Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Draft saved to Gmail
```

---

### 🌳 고급 예제: 자동 수정 시스템

**목표**: AI가 스스로 버그를 찾고 고치기

#### Validation Loop 패턴

```python
# PRP에 포함된 자동 검증 로직

def execute_with_validation(step: Step):
    """Execute step with automatic fixing."""

    max_attempts = 3

    for attempt in range(max_attempts):
        # 1. 구현
        implement(step)

        # 2. 검증
        result = validate(step)

        if result.success:
            log_success(step)
            return True

        # 3. 실패 분석
        errors = analyze_errors(result)

        # 4. 자동 수정
        fixes = generate_fixes(errors)
        apply_fixes(fixes)

        # 5. 재시도
        log_retry(attempt + 1, errors)

    # 최대 시도 초과
    log_failure(step)
    return False
```

#### 실제 작동 예시

```
Step 3: Implement rate limiter

Attempt 1:
  ✗ Test failed: test_rate_limit_enforcement
  Error: AssertionError: 6.2 > 5.0
  Analysis: Rate limiter allows too many requests

  Auto-fix: Adjust token bucket algorithm
  ✓ Applied fix

Attempt 2:
  ✗ Test failed: test_concurrent_requests
  Error: RuntimeError: Lock not acquired
  Analysis: Race condition in semaphore

  Auto-fix: Add asyncio.Lock wrapper
  ✓ Applied fix

Attempt 3:
  ✓ All tests passed!
  ✓ Step 3 complete
```

**이것이 Context Engineering의 힘입니다!**

---

## 고급 테크닉과 베스트 프랙티스

### 💡 테크닉 1: 점진적 컨텍스트 확장

**문제**: 처음부터 완벽한 PRP 만들기 어려움

**해결책**: 반복적 개선

```
Iteration 1:
  INITIAL.md (간단) → PRP (기본)
  → 실행 → 70% 성공

Iteration 2:
  INITIAL.md (예제 추가) → PRP (개선)
  → 실행 → 85% 성공

Iteration 3:
  INITIAL.md (gotchas 추가) → PRP (완성)
  → 실행 → 98% 성공!
```

### 💡 테크닉 2: 예제 라이브러리 구축

**전략**: 성공한 코드를 examples/에 추가

```
examples/
├── patterns/
│   ├── async_retry.py      ← 재시도 패턴
│   ├── circuit_breaker.py  ← 서킷 브레이커
│   └── rate_limiter.py     ← 레이트 리미터
├── integrations/
│   ├── gmail_auth.py       ← Gmail 인증
│   ├── stripe_payment.py   ← Stripe 결제
│   └── aws_s3.py           ← S3 업로드
└── testing/
    ├── async_fixtures.py   ← 비동기 테스트
    └── mock_patterns.py    ← 모킹 패턴
```

**효과**:
- 새 프로젝트 시작 시 90% 빠름
- 일관된 코드 스타일
- 검증된 패턴 재사용

### 💡 테크닉 3: 컨텍스트 레이어링

```
Layer 1: 글로벌 규칙 (CLAUDE.md)
  ↓
Layer 2: 도메인 규칙 (docs/api-guidelines.md)
  ↓
Layer 3: 기능별 규칙 (PRP)
  ↓
Layer 4: 구현 세부사항 (코드)
```

**예시**:
```markdown
# Layer 1: CLAUDE.md
- 모든 함수에 타입 힌트

# Layer 2: docs/api-guidelines.md
- REST API는 FastAPI 사용
- JWT 인증 필수

# Layer 3: PRP
- 이 API는 OAuth2 사용
- 토큰 갱신 로직 포함

# Layer 4: 코드
- 구체적 구현
```

### 💡 테크닉 4: 신뢰도 점수 활용

PRP의 Confidence Score를 활용:

```markdown
## 🎚️ Confidence Score: 6/10

**Low confidence areas**:
- CSS selectors (site-specific) → 사전 조사 필요
- Rate limit values (unknown) → 실험 필요

**Action**:
1. Manually inspect target website
2. Test with small batch first
3. Adjust PRP based on findings
```

**낮은 점수 시**:
- 먼저 수동 조사
- PRP 업데이트
- 재생성

---

## 핵심 정리

### ✅ 기억할 10가지

1. **Context Engineering > Prompt Engineering**
   ```
   Prompt: 한 줄 명령
   Context: 완벽한 설계도
   ```

2. **AI 실패의 80%는 컨텍스트 부족**
   ```
   컨텍스트 제공 = 성공률 10배 상승
   ```

3. **5가지 핵심 요소**
   ```
   CLAUDE.md + examples/ + INITIAL.md + PRP + Validation
   ```

4. **PRP는 자가 수정형**
   ```
   실패 → 분석 → 자동 수정 → 재시도
   ```

5. **예제가 가장 중요**
   ```
   예제 없음: 30% 성공
   예제 있음: 90% 성공
   ```

6. **INITIAL.md는 구체적으로**
   ```
   "웹 스크래퍼 만들어" ❌
   "비동기 BeautifulSoup 스크래퍼 + PostgreSQL + rate limiting" ✅
   ```

7. **검증 게이트는 필수**
   ```
   각 단계마다 테스트 → 통과 확인 → 다음 단계
   ```

8. **반복적 개선**
   ```
   첫 시도: 70%
   예제 추가: 85%
   gotchas 추가: 98%
   ```

9. **컨텍스트 레이어링**
   ```
   글로벌 규칙 → 도메인 규칙 → 기능 규칙 → 구현
   ```

10. **신뢰도 점수 활용**
    ```
    <7점: 사전 조사 필요
    7-8점: 주의해서 진행
    9-10점: 바로 실행 OK
    ```

---

### 📊 성공률 비교

| 방법 | 성공률 | 시간 | 품질 |
|------|-------|------|------|
| Vibe Coding | 10% | 10시간 | 낮음 |
| Prompt Engineering | 50% | 5시간 | 중간 |
| Context Engineering | 95% | 1시간 | 높음 |

---

### 🎯 실전 체크리스트

시작하기 전:

- [ ] **CLAUDE.md 작성** - 프로젝트 규칙 정의
- [ ] **examples/ 준비** - 최소 3개 예제
- [ ] **INITIAL.md 작성** - 구체적으로!
- [ ] **문서 링크 수집** - API 문서, 가이드

PRP 생성 시:

- [ ] **/generate-prp 실행** - AI가 청사진 생성
- [ ] **Confidence Score 확인** - 7점 이상인지
- [ ] **Success Criteria 검토** - 명확한지
- [ ] **Common Pitfalls 추가** - 흔한 실수 기록

실행 시:

- [ ] **/execute-prp 실행** - 자동 구현
- [ ] **각 단계 검증** - 테스트 통과 확인
- [ ] **최종 테스트** - 전체 플로우 동작
- [ ] **문서 업데이트** - README 최신화

완료 후:

- [ ] **성공 패턴 저장** - examples/에 추가
- [ ] **실수 기록** - CLAUDE.md 업데이트
- [ ] **PRP 아카이브** - 재사용 가능하게

---

### 🚀 다음 단계

1. **템플릿 클론**
   ```bash
   git clone https://github.com/coleam00/context-engineering-intro.git
   cd context-engineering-intro
   ```

2. **간단한 기능으로 연습**
   ```markdown
   ## FEATURE:
   Hello World CLI
   ```

3. **점진적 확장**
   ```
   간단한 CLI → 웹 API → 비동기 처리 → 멀티 에이전트
   ```

4. **예제 라이브러리 구축**
   ```
   성공한 코드를 계속 examples/에 추가
   ```

5. **팀과 공유**
   ```
   CLAUDE.md를 팀 표준으로!
   ```

---

## 연결된 노트
- [[프롬프트 엔지니어링 기초]]
- [[AI 에이전트 아키텍처]]
- [[Pydantic AI 완전 가이드]]
- [[Claude Code 사용법]]
- [[RAG 시스템 구축]]
- [[LLM 최적화 전략]]

---

## 참고 자료
- **공식 GitHub**: https://github.com/coleam00/context-engineering-intro
- **Claude Code 문서**: https://docs.anthropic.com/en/docs/claude-code
- **Context Engineering 베스트 프랙티스**: https://www.philschmid.de/context-engineering
- **Pydantic AI**: https://ai.pydantic.dev/

---

**💬 마지막 조언**

> "Context Engineering은 마법이 아니라 **시스템**입니다.
>
> 처음엔 복잡해 보이지만, 한 번 익숙해지면 AI와의 협업이 10배 빠르고 정확해집니다.
>
> 가장 중요한 것은 **좋은 예제를 많이 모으는 것**입니다.
> 성공한 코드를 계속 examples/에 추가하면, 프로젝트마다 성공률이 올라갑니다!
>
> 작은 프로젝트로 시작하세요. Hello World부터 시작해서 점점 복잡한 기능으로 확장하면, 자연스럽게 마스터하게 됩니다!"

**Happy Context Engineering! 🚀✨**
