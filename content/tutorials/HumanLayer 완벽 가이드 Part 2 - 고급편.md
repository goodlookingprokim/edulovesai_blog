---
title: "HumanLayer 완벽 가이드 Part 2 - 고급편 (실전 활용부터 마스터까지)"
created: '2025-10-13'
last_modified: '2025-10-13'
tags:
  - AI/코딩도구
  - 개발도구/HumanLayer
  - 고급가이드
  - 실전활용
  - 문제해결
status: "완료"
type: "가이드"
priority: "high"
---

# HumanLayer 완벽 가이드 Part 2 - 고급편

> **"이제 진짜 실력을 발휘할 시간입니다"**
> HumanLayer의 고급 기능과 실전 노하우를 마스터해보세요.

**📌 이전 내용**: [[HumanLayer 완벽 가이드 Part 1 - 기초편]]을 먼저 읽고 오세요!

---

## 📋 목차 (Part 2 - 고급편)

### 실전 활용
1. [[#레벨별 실전 시나리오]]
2. [[#팀 협업 워크플로우]]
3. [[#레거시 코드 현대화 프로젝트]]
4. [[#성능 최적화 전략]]

### 고급 기능
5. [[#Context Engineering 심화]]
6. [[#커스텀 워크플로우 만들기]]
7. [[#AI 프롬프트 최적화]]
8. [[#원격 클라우드 워커 활용]]

### 문제 해결
9. [[#일반적인 문제와 해결책]]
10. [[#성능 튜닝 가이드]]
11. [[#디버깅 팁]]

### 참고 자료
12. [[#FAQ 자주 묻는 질문]]
13. [[#용어 설명 사전]]
14. [[#커뮤니티 리소스]]
15. [[#학습 로드맵]]

---

## 레벨별 실전 시나리오

### 🌱 레벨 1: 주니어 개발자 (경력 1년 미만)

#### 시나리오 1: 버그 수정 미션

**상황**: 프로덕션에서 버그 발견
```
에러 로그:
ERROR: division by zero in calculate_discount()
File: backend/pricing.py, Line: 45
```

**일반적 접근 (3시간)**:
```
1. 파일 찾기 (10분)
   - pricing.py가 어디 있지?
   - 관련 파일 뭐가 있지?

2. 코드 이해 (1시간)
   - calculate_discount() 뭐하는 함수?
   - 어디서 호출되지?
   - 왜 0으로 나누지?

3. 수정 (30분)
   - if문으로 체크 추가
   - 테스트 케이스는?

4. 테스트 (1시간)
   - 수동 테스트
   - 다른 곳 영향은?

5. PR 작성 (20분)
   - 커밋 메시지 뭐라 쓰지?
   - 설명은?
```

**HumanLayer 활용 (15분)**:
```bash
# 1단계: 버그 리포트 (2분)
humanlayer fix "backend/pricing.py의 calculate_discount()
division by zero 에러 수정
- 0으로 나누는 경우 처리
- 테스트 케이스 추가
- 로깅 개선"

# 2단계: AI 자동 처리 (10분)
[AI #1 - Bug Fix]
✓ 에러 위치 파악: line 45
✓ 원인 분석: quantity가 0일 때
✓ 수정 코드 작성:
  def calculate_discount(price, quantity):
      if quantity == 0:
          logger.warning("Quantity is zero")
          return 0
      return price / quantity

[AI #2 - Testing]
✓ 버그 재현 테스트 추가
✓ Edge case 테스트 5개
✓ 모든 테스트 통과

[AI #3 - Documentation]
✓ 함수 독스트링 추가
✓ CHANGELOG.md 업데이트
✓ PR 템플릿 작성

# 3단계: 검토 및 승인 (3분)
변경 사항 확인 → 승인 → PR 자동 생성

총 시간: 15분 (12배 빠름!)
```

---

#### 시나리오 2: 새 기능 구현 학습

**미션**: "좋아요" 기능 추가

**학습 목표**:
- REST API 설계
- 데이터베이스 스키마
- 프론트엔드 연동

**HumanLayer 튜터 모드**:
```bash
humanlayer learn "좋아요 기능 구현하면서
각 단계마다 설명해줘
- 왜 이렇게 하는지
- 대안은 무엇인지
- 베스트 프랙티스는"

# AI가 교육용 코드 작성
[Step 1: 데이터베이스 스키마]
AI: "먼저 likes 테이블을 만들어요:

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  created_at TIMESTAMP,
  UNIQUE(user_id, post_id)  ← 중복 좋아요 방지!
);

💡 UNIQUE 제약을 왜 쓸까요?
→ 한 사용자가 같은 게시물에 여러 번 좋아요 못 하게

💡 대안은?
→ 애플리케이션 레벨에서 체크 가능
   하지만 데이터베이스 제약이 더 안전해요

계속할까요? (Y/n)"

[Step 2: API 엔드포인트]
AI: "POST /api/posts/{id}/like 만들어요:

@router.post('/posts/{post_id}/like')
async def like_post(
    post_id: int,
    current_user: User = Depends(get_current_user)
):
    # 이미 좋아요 했는지 확인
    existing = await db.get_like(current_user.id, post_id)
    if existing:
        raise HTTPException(409, '이미 좋아요함')

    # 좋아요 추가
    await db.add_like(current_user.id, post_id)

    return {'status': 'success'}

💡 왜 409 Conflict 에러?
→ 이미 존재하는 리소스에 대한 요청이니까

💡 대안: 200 OK + 'already_liked' 메시지?
→ 가능하지만 RESTful하지 않아요

이해되셨나요? (Y/n)"

[Step 3: 프론트엔드]
AI: "React 컴포넌트 만들어요:

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      await api.post(`/posts/${postId}/like`);
      setLiked(true);
    } catch (error) {
      if (error.status === 409) {
        // 이미 좋아요 했음
        setLiked(true);
      }
    }
  };

  return (
    <button onClick={handleLike}>
      {liked ? '❤️' : '🤍'}
    </button>
  );
}

💡 useState는 왜 필요해요?
→ UI 상태 관리용. 좋아요 누르면 즉시 반영

💡 에러 처리는 왜?
→ 네트워크 문제 대비. 사용자 경험 개선

더 알고 싶은 게 있나요?"
```

**학습 효과**:
- ✅ 코드 작성법
- ✅ 설계 이유
- ✅ 베스트 프랙티스
- ✅ 실전 예제

---

### 🚀 레벨 2: 중급 개발자 (경력 1-3년)

#### 시나리오 1: 마이크로서비스 분리

**배경**: 모놀리스 → 마이크로서비스

**기존 구조**:
```
monolith/
├── users/
├── products/
├── orders/
├── payments/
└── notifications/
```

**목표**: Payment 서비스 분리

**HumanLayer 활용**:
```bash
humanlayer microservice "payments 모듈을
독립 마이크로서비스로 분리
- FastAPI 신규 서비스
- REST API 설계
- 데이터베이스 분리 (PostgreSQL)
- 기존 코드와 호환성 유지
- Docker 컨테이너화
- 통합 테스트"

# Multi-Agent 실행
[AI #1 - Service Architecture]
✓ 새 FastAPI 프로젝트 생성
✓ 서비스 경계 정의
✓ API 계약 설계
✓ 데이터 모델 분리

[AI #2 - Migration]
✓ 기존 payments/ 코드 복사
✓ 의존성 제거
✓ 인터페이스 어댑터 생성
✓ 호환성 레이어 추가

[AI #3 - Infrastructure]
✓ Dockerfile 작성
✓ docker-compose.yml
✓ Kubernetes 매니페스트
✓ CI/CD 파이프라인

[AI #4 - Testing]
✓ 단위 테스트 마이그레이션
✓ 통합 테스트 작성
✓ Contract testing
✓ 부하 테스트

완료! (45분)
```

**생성된 구조**:
```
payment-service/
├── app/
│   ├── main.py
│   ├── api/
│   │   └── v1/
│   ├── models/
│   ├── services/
│   └── utils/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md
```

---

#### 시나리오 2: 성능 병목 해결

**문제**: API 응답 느림 (3초 → 300ms 목표)

**분석**:
```bash
humanlayer analyze "API 성능 병목 찾아서 최적화
- /api/products 엔드포인트
- 현재 응답 시간: 3초
- 목표: 300ms 이하
- 프로파일링 후 최적화"

[AI #1 - Profiling]
🔍 병목 지점 발견:
1. N+1 쿼리 문제 (2초)
   - Product 조회 시 Category 별도 조회
   - 100개 제품 = 101번 쿼리

2. 불필요한 JSON 직렬화 (500ms)
   - 전체 객체 직렬화 후 필터링

3. 동기 I/O (500ms)
   - 이미지 URL 검증을 동기로 처리

[AI #2 - Optimization]
✓ N+1 해결: select_related() 사용
  products = Product.objects.select_related('category').all()
  쿼리 101번 → 1번

✓ JSON 최적화: 필요한 필드만 선택
  .values('id', 'name', 'price', 'category__name')

✓ 비동기 I/O: asyncio.gather()
  await asyncio.gather(*[
      validate_image_url(p.image) for p in products
  ])

[AI #3 - Caching]
✓ Redis 캐싱 추가
  @cache(ttl=300)  # 5분 캐시
  async def get_products():
      ...

결과:
- 첫 요청: 280ms ✅
- 캐시 히트: 15ms 🚀
- 목표 달성!
```

---

### 💼 레벨 3: 시니어 개발자 (경력 3년+)

#### 시나리오 1: 시스템 아키텍처 설계

**프로젝트**: 실시간 채팅 서비스

**요구사항**:
- 동시 접속 10만 명
- 메시지 지연 < 100ms
- 99.9% 가용성

**HumanLayer 협업**:
```bash
humanlayer design "실시간 채팅 시스템 설계
요구사항:
- 동시 접속: 100k users
- 지연시간: <100ms
- 가용성: 99.9%
- 메시지 영속성 보장

고려사항:
- WebSocket vs Server-Sent Events
- 수평 확장 전략
- 메시지 큐 선택
- 데이터베이스 샤딩
- 캐싱 전략
- 모니터링"

[AI #1 - Architecture Design]
📐 시스템 아키텍처 제안:

┌─────────┐
│ Clients │ (100k+ WebSocket connections)
└────┬────┘
     │
┌────▼─────────────────────────────────┐
│   Load Balancer (HAProxy)            │
│   - WebSocket support                │
│   - Session affinity                 │
└────┬─────────────────────────────────┘
     │
┌────▼──────────────────────────────┐
│  API Gateway (Kong)                │
│  - Rate limiting                   │
│  - Authentication                  │
│  - Protocol translation            │
└────┬───────────────────────────────┘
     │
┌────▼────────────────────────────────┐
│  WebSocket Servers (10+ instances)  │
│  - Node.js + Socket.io              │
│  - Horizontal auto-scaling          │
│  - Redis Pub/Sub for coordination   │
└────┬────────────────────────────────┘
     │
┌────▼─────────────────────────────────┐
│  Message Queue (Kafka)               │
│  - Partitioning by chat room         │
│  - Message ordering guarantee        │
│  - At-least-once delivery            │
└────┬─────────────────────────────────┘
     │
┌────▼──────────────────────────────┐
│  Message Service (Microservice)    │
│  - Go for performance              │
│  - Handles business logic          │
└────┬───────────────────────────────┘
     │
┌────▼─────────────────────────────────┐
│  Storage Layer                       │
│  ├─ PostgreSQL (metadata)            │
│  ├─ Cassandra (message history)      │
│  └─ Redis (online status, cache)     │
└──────────────────────────────────────┘

📊 성능 예측:
- Latency: 50-80ms (목표 달성 ✅)
- Throughput: 500k msg/sec
- Cost: ~$5k/month (AWS)

⚠️ Trade-offs:
1. 복잡도 증가 vs 확장성
2. 비용 vs 성능
3. 일관성 vs 가용성 (CAP)

대안 아키텍처도 제시할까요? (Y/n)
```

**AI가 제시한 대안**:
```
대안 1: 서버리스 (AWS Lambda + API Gateway)
  장점: 관리 부담 낮음, 탄력적 확장
  단점: WebSocket 제약, 비용 예측 어려움

대안 2: Elixir/Phoenix
  장점: 경량 프로세스, 내장 Pub/Sub
  단점: 팀 러닝 커브, 생태계 작음

대안 3: Firebase (Managed)
  장점: 즉시 사용 가능, 관리 불필요
  단점: 벤더 락인, 커스터마이징 제한
```

---

#### 시나리오 2: 레거시 시스템 마이그레이션

**배경**:
- PHP 5.6 → Python FastAPI
- MySQL → PostgreSQL
- 15년 된 코드베이스
- 다운타임 최소화

**전략적 접근**:
```bash
humanlayer migrate-plan "PHP → Python 마이그레이션 전략 수립
현황:
- 코드: PHP 5.6, 50만 줄
- DB: MySQL 5.7
- Traffic: 1M requests/day
- 다운타임 허용: 최대 1시간

단계별 계획:
1. 분석 및 우선순위
2. 점진적 마이그레이션 (Strangler Pattern)
3. 데이터 동기화 전략
4. 롤백 계획"

[AI #1 - Analysis & Prioritization]
📊 코드베이스 분석 완료:

모듈별 복잡도:
├─ auth/ (5k lines) - Priority: HIGH
│  → 모든 요청 거침, 독립적
├─ api/ (20k lines) - Priority: HIGH
│  → 외부 의존도 낮음
├─ admin/ (10k lines) - Priority: MEDIUM
│  → 트래픽 낮음
├─ cron/ (5k lines) - Priority: MEDIUM
├─ legacy/ (30k lines) - Priority: LOW
│  → 거의 안 씀
└─ core/ (10k lines) - Priority: HIGH
   → 모든 모듈이 의존

권장 마이그레이션 순서:
1. auth/ (2주)
2. api/ (4주)
3. core/ (6주)
4. admin/ (2주)
5. cron/ (1주)
6. legacy/ (보류/재작성)

[AI #2 - Strangler Pattern Implementation]
🔄 점진적 마이그레이션 설계:

┌─────────────────────────────────┐
│  Nginx Routing Layer            │
│  - /api/v1/* → Python (new)     │
│  - /api/* → PHP (legacy)        │
│  - Gradual traffic shifting     │
└─────────────────────────────────┘

Phase 1: Proxy Setup (1주)
✓ Nginx 라우팅 규칙
✓ Health check 엔드포인트
✓ 로깅 및 모니터링

Phase 2: Auth Migration (2주)
✓ Python FastAPI auth 모듈
✓ JWT 토큰 호환
✓ 세션 공유 (Redis)
✓ A/B 테스트 (10% → 100%)

Phase 3: API Migration (4주)
✓ 엔드포인트별 마이그레이션
✓ 통합 테스트 자동화
✓ 점진적 트래픽 전환

Phase 4: Database Migration (병렬)
✓ MySQL → PostgreSQL 복제
✓ Dual write (both DBs)
✓ 데이터 검증
✓ 최종 전환

[AI #3 - Risk Mitigation]
⚠️ 리스크 및 대응:

Risk 1: 데이터 불일치
  → Dual write + reconciliation job
  → 자동 모니터링 알람

Risk 2: 성능 저하
  → Canary deployment
  → 즉시 롤백 스크립트

Risk 3: 버그 발생
  → Feature flag로 제어
  → Shadow mode로 검증

Risk 4: 팀 학습 곡선
  → 단계별 교육 자료
  → Pair programming

예상 총 기간: 15주
다운타임: 0시간 (점진적 전환)
```

---

## 팀 협업 워크플로우

### 👥 팀 설정 및 관리

#### 팀 구성 모범 사례

**소규모 팀 (3-5명)**:
```yaml
team_structure:
  shared_context:
    - 프로젝트 문서
    - 코딩 컨벤션
    - API 스펙

  individual_contexts:
    - 각자 담당 모듈
    - 개인 작업 히스토리

  collaboration:
    - PR 리뷰 공유
    - 공통 워크플로우
```

**중규모 팀 (10-20명)**:
```yaml
team_structure:
  squad_based:
    - Frontend Squad
    - Backend Squad
    - DevOps Squad

  shared_libraries:
    - Common components
    - Shared utilities

  integration:
    - Cross-squad reviews
    - Integration testing
```

---

#### 팀 워크플로우 설정

**예시: Feature 개발 흐름**

```bash
# 1. 팀 워크플로우 정의
humanlayer workflow create "feature-development"

# 2. 단계 정의
workflow:
  1. Design:
     - AI: 기술 스펙 작성
     - Human: 리뷰 및 승인

  2. Implementation:
     - AI #1: Backend
     - AI #2: Frontend
     - AI #3: Tests
     - Human: 코드 리뷰

  3. Testing:
     - AI: 자동 테스트 실행
     - Human: QA 체크리스트

  4. Documentation:
     - AI: 자동 문서 생성
     - Human: 최종 검토

  5. Deployment:
     - AI: Staging 배포
     - Human: Production 승인

# 3. 실행
humanlayer run-workflow feature-development \
  --feature "사용자 알림 시스템"

# 각 단계마다 팀원 승인 대기
```

---

### 🔄 코드 리뷰 자동화

**AI 기반 코드 리뷰**:
```bash
# PR 생성 시 자동 리뷰
humanlayer review-pr #123

[AI Code Reviewer]
📋 Pull Request #123 분석 중...

✅ Positive Points:
  - 테스트 커버리지: 95% (우수)
  - 타입 힌트 완벽
  - 문서화 충실

⚠️ Issues Found:
  1. [HIGH] SQL Injection 취약점
     File: api/users.py:45

     현재 코드:
     query = f"SELECT * FROM users WHERE id = {user_id}"

     권장 수정:
     query = "SELECT * FROM users WHERE id = %s"
     cursor.execute(query, (user_id,))

  2. [MEDIUM] N+1 쿼리 문제
     File: api/posts.py:78

     제안: select_related() 사용

  3. [LOW] 네이밍 컨벤션
     변수명 'usr' → 'user' 권장

💡 Suggestions:
  - Error handling 개선 권장
  - Logging 추가 고려
  - Cache 적용 가능

자동 수정할까요? (Y/n)
```

---

### 📊 팀 생산성 대시보드

**메트릭 추적**:
```bash
humanlayer team-stats --period last-month

┌─────────────────────────────────────┐
│   Team Productivity Dashboard       │
├─────────────────────────────────────┤
│ Total PRs: 156 (↑ 23% vs 지난달)   │
│ AI 작성 코드: 78%                   │
│ 평균 리뷰 시간: 15분 (↓ 45분)      │
│ 버그 발견율: 0.3/PR (↓ 60%)        │
│                                      │
│ Top Contributors:                   │
│ 1. Alice: 45 PRs                    │
│ 2. Bob: 38 PRs                      │
│ 3. Carol: 34 PRs                    │
│                                      │
│ Most Active AI Agents:              │
│ 1. Backend Agent: 234 tasks         │
│ 2. Frontend Agent: 189 tasks        │
│ 3. Testing Agent: 156 tasks         │
└─────────────────────────────────────┘
```

---

## Context Engineering 심화

### 🎯 Context 최적화 기법

#### 기법 1: 계층적 컨텍스트

**문제**: AI에게 너무 많은 정보
```
전체 코드베이스 → AI
= 10만 줄 → 토큰 초과 😵
```

**해결**: 3단계 계층
```
Layer 1: 즉시 필요 (Hot Context)
  ├─ 현재 작업 파일
  ├─ 직접 import한 파일
  └─ 에러 메시지

Layer 2: 참고용 (Warm Context)
  ├─ 관련 모듈
  ├─ 테스트 파일
  └─ 문서

Layer 3: 배경지식 (Cold Context)
  ├─ 프로젝트 전체 구조
  ├─ 아키텍처 문서
  └─ 히스토리
```

**설정**:
```yaml
# .humanlayer/context-strategy.yml
hot_context:
  max_files: 5
  max_tokens: 4000
  include:
    - current_file
    - direct_imports
    - error_stack

warm_context:
  max_files: 20
  max_tokens: 10000
  include:
    - related_modules
    - test_files
    - recent_changes

cold_context:
  summarize: true
  max_tokens: 2000
  include:
    - project_structure
    - architecture_docs
```

---

#### 기법 2: 동적 컨텍스트 확장

**개념**: 필요에 따라 컨텍스트 확장

```bash
# 초기 요청 (최소 컨텍스트)
humanlayer "로그인 함수 수정"

[AI]
현재 컨텍스트로 부족합니다.
다음 정보가 필요해요:
- 인증 방식 (JWT/Session?)
- 데이터베이스 스키마

추가 컨텍스트를 로드할까요? (Y/n) Y

[로딩...]
✓ auth/ 모듈 분석
✓ JWT 설정 파일
✓ User 모델

이제 작업 가능합니다!
```

---

#### 기법 3: 컨텍스트 캐싱

**문제**: 반복 작업 시 매번 분석
```
같은 프로젝트에서 10번 작업
= 10번 코드베이스 분석 😰
```

**해결**: 캐싱
```bash
# 첫 실행 (느림)
humanlayer "기능 A 추가"
→ 코드베이스 분석: 30초

# 두 번째 실행 (빠름)
humanlayer "기능 B 추가"
→ 캐시 사용: 0.5초 ⚡

# 캐시 갱신 (코드 변경 시)
humanlayer refresh-context
```

---

### 🧩 커스텀 컨텍스트 제공자

**상황**: 특수한 프로젝트 구조

**예시**: Monorepo
```javascript
// .humanlayer/context-provider.js
module.exports = {
  // 컨텍스트 수집 로직
  async collectContext(task) {
    const { packages } = await this.findWorkspaces();

    // 관련 패키지만 선택
    const relevantPackages = packages.filter(pkg =>
      task.includes(pkg.name)
    );

    return {
      files: await this.getFiles(relevantPackages),
      dependencies: await this.getDependencies(relevantPackages),
      sharedLibraries: await this.getSharedCode()
    };
  },

  // 컨텍스트 우선순위
  prioritize(contexts) {
    return contexts.sort((a, b) => {
      // 최근 수정 파일 우선
      if (a.lastModified > b.lastModified) return -1;
      // 의존성 깊이
      if (a.depth < b.depth) return -1;
      return 0;
    });
  }
};
```

---

## 커스텀 워크플로우 만들기

### 🔧 워크플로우 DSL

**기본 구조**:
```yaml
# .humanlayer/workflows/deploy.yml
name: "Smart Deploy"
description: "AI가 안전하게 배포"

triggers:
  - type: manual
  - type: schedule
    cron: "0 0 * * 1"  # 매주 월요일

steps:
  - name: "Pre-Deploy Checks"
    agent: quality-checker
    tasks:
      - run_tests
      - check_coverage
      - security_scan
    gates:
      - test_pass_rate > 95%
      - coverage > 80%
      - no_critical_vulnerabilities

  - name: "Build & Package"
    agent: builder
    tasks:
      - build_artifacts
      - create_docker_image
      - push_to_registry

  - name: "Staging Deploy"
    agent: deployer
    environment: staging
    tasks:
      - apply_migrations
      - deploy_services
      - smoke_tests

  - name: "Human Approval"
    type: human_gate
    approvers:
      - tech-lead
      - product-owner
    timeout: 24h

  - name: "Production Deploy"
    agent: deployer
    environment: production
    strategy: canary
    tasks:
      - deploy_canary    # 5% traffic
      - monitor_metrics  # 10분
      - full_rollout     # 100% traffic

    rollback_on:
      - error_rate > 1%
      - response_time > 500ms
```

---

### 🎛️ 조건부 워크플로우

**예시**: 긴급 핫픽스
```yaml
# hotfix.yml
name: "Hotfix Pipeline"

conditions:
  - branch: hotfix/*
  - severity: critical

steps:
  - name: "Fast Track Review"
    parallel: true
    agents:
      - security-scanner
      - code-reviewer
      - test-runner

    # 하나라도 실패하면 중단
    fail_fast: true

  - name: "Emergency Deploy"
    skip_staging: true  # 긴급 시 스테이징 스킵

    human_approval:
      required_approvers: 1  # 1명만 OK
      notify:
        - slack: "#incidents"
        - pager: on-call-engineer

    deploy:
      strategy: blue-green  # 안전한 배포
      automatic_rollback: true
```

---

## AI 프롬프트 최적화

### 📝 효과적인 프롬프트 작성

#### 원칙 1: 구체적으로

**❌ 나쁜 예**:
```bash
humanlayer "API 만들어줘"
```

**✅ 좋은 예**:
```bash
humanlayer "RESTful API 생성
엔드포인트:
- POST /api/users (사용자 생성)
- GET /api/users/{id} (조회)
- PUT /api/users/{id} (수정)
- DELETE /api/users/{id} (삭제)

요구사항:
- FastAPI 프레임워크
- Pydantic 모델 검증
- JWT 인증
- PostgreSQL 데이터베이스
- OpenAPI 문서 자동 생성
- 단위 테스트 (pytest)"
```

---

#### 원칙 2: 맥락 제공

**❌ 맥락 없음**:
```bash
humanlayer "성능 개선"
```

**✅ 맥락 있음**:
```bash
humanlayer "제품 목록 API 성능 개선
현재 상황:
- 엔드포인트: GET /api/products
- 응답 시간: 3초
- 데이터: 10,000개 제품
- 문제: N+1 쿼리

목표:
- 응답 시간: 300ms 이하
- 페이지네이션 추가
- Redis 캐싱 도입"
```

---

#### 원칙 3: 예제 포함

**❌ 예제 없음**:
```bash
humanlayer "에러 처리 추가"
```

**✅ 예제 있음**:
```bash
humanlayer "전체 API에 일관된 에러 처리 추가
현재:
def get_user(user_id):
    user = db.query(User).filter(User.id == user_id).first()
    return user  # None 반환 가능

원하는 형태:
def get_user(user_id):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=404,
            detail={
                'error': 'USER_NOT_FOUND',
                'message': 'User not found',
                'user_id': user_id
            }
        )
    return user

모든 API 엔드포인트에 적용해줘"
```

---

### 🎨 프롬프트 템플릿

**템플릿 저장**:
```bash
# 템플릿 생성
humanlayer template create "feature-template"

# 템플릿 내용
template:
  name: "New Feature"
  variables:
    - feature_name
    - description
    - endpoints

  prompt: |
    새 기능 구현: {{feature_name}}

    설명:
    {{description}}

    API 엔드포인트:
    {{endpoints}}

    기본 요구사항:
    - RESTful API 설계
    - 입력 검증
    - 에러 처리
    - 로깅
    - 단위 테스트 (90% 커버리지)
    - API 문서
    - CHANGELOG 업데이트

# 템플릿 사용
humanlayer use-template feature-template \
  --feature_name "사용자 알림" \
  --description "실시간 푸시 알림 시스템" \
  --endpoints "POST /api/notifications, GET /api/notifications"
```

---

## 문제 해결

### 🐛 일반적인 문제와 해결책

#### 문제 1: "AI가 잘못된 코드 생성"

**증상**:
```python
# AI가 생성한 코드 (잘못됨)
def calculate_total(items):
    total = 0
    for item in items:
        total += item.price
    return total  # 세금 계산 누락!
```

**원인**: 불충분한 컨텍스트

**해결**:
```bash
# 명확한 요구사항 제공
humanlayer "calculate_total 함수 수정
요구사항:
- 상품 가격 합계
- 세금 10% 추가
- 할인 코드 적용
- 소수점 2자리 반올림

테스트 케이스:
items = [
  Item(price=100),
  Item(price=200)
]
discount = 0.1  # 10% 할인
result = calculate_total(items, discount)
assert result == 297.00  # (300 * 0.9) * 1.1"
```

---

#### 문제 2: "API 키 에러"

**증상**:
```
Error: ANTHROPIC_API_KEY not found
```

**해결책**:
```bash
# 1. 환경 변수 확인
echo $ANTHROPIC_API_KEY

# 2. 없으면 설정
export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 3. 영구 설정 (.bashrc 또는 .zshrc)
echo 'export ANTHROPIC_API_KEY="sk-ant-xxxxx"' >> ~/.bashrc
source ~/.bashrc

# 4. 검증
humanlayer config check
```

---

#### 문제 3: "느린 응답 시간"

**증상**:
```
요청 후 3분 대기...
```

**원인**:
- 큰 코드베이스
- 과도한 컨텍스트

**해결**:
```yaml
# .humanlayer/performance.yml
optimization:
  # 컨텍스트 제한
  max_context_files: 10
  max_tokens_per_request: 8000

  # 캐싱 활성화
  enable_cache: true
  cache_ttl: 3600

  # 병렬 처리
  max_concurrent_agents: 3

  # 증분 처리
  incremental_mode: true
```

```bash
# 컨텍스트 프리워밍 (미리 로드)
humanlayer warm-cache

# 이후 요청이 빨라짐
humanlayer "기능 추가"  # 3분 → 10초
```

---

#### 문제 4: "Git 충돌"

**증상**:
```
CONFLICT (content): Merge conflict in api/users.py
```

**HumanLayer 해결**:
```bash
humanlayer resolve-conflict api/users.py

[AI Conflict Resolver]
충돌 분석 중...

📍 충돌 위치: api/users.py:45-60

<<<<<<< HEAD (AI #1)
def get_user(user_id):
    return db.query(User).get(user_id)
=======
def get_user(user_id):
    user = cache.get(f"user:{user_id}")
    if not user:
        user = db.query(User).get(user_id)
        cache.set(f"user:{user_id}", user)
    return user
>>>>>>> feature-branch (AI #2)

📊 분석:
- AI #1: 간단한 DB 조회
- AI #2: 캐싱 로직 추가

💡 권장 해결:
AI #2의 변경을 채택 (캐싱이 성능 향상)

자동 해결할까요? (Y/n) Y

✅ 충돌 해결 완료
```

---

### ⚡ 성능 튜닝 가이드

#### 튜닝 1: 컨텍스트 최적화

**Before** (느림):
```yaml
context:
  include: "**/*"  # 모든 파일!
```

**After** (빠름):
```yaml
context:
  include:
    - "src/**/*.py"
    - "tests/**/*.py"
  exclude:
    - "**/__pycache__/**"
    - "**/node_modules/**"
    - "**/*.pyc"
    - ".git/**"
```

---

#### 튜닝 2: 병렬 처리

```bash
# 순차 실행 (느림)
humanlayer "기능 A 추가"  # 10분
humanlayer "기능 B 추가"  # 10분
humanlayer "기능 C 추가"  # 10분
# 총 30분

# 병렬 실행 (빠름)
humanlayer parallel \
  "기능 A 추가" \
  "기능 B 추가" \
  "기능 C 추가"
# 총 10분 (3배 빠름!)
```

---

## FAQ (자주 묻는 질문)

### 💰 가격 관련

**Q1: HumanLayer는 무료인가요?**
```
A: 현재는 Early Access 기간:
   - 대기자 명단 가입 필요
   - 초기 사용자는 무료/할인

   향후 예상 플랜:
   - Free: 개인 프로젝트, 제한적
   - Pro: $50/월, 개인 사용
   - Team: $200/월, 5명 팀
   - Enterprise: 맞춤형
```

**Q2: Claude API 비용은요?**
```
A: 별도로 발생:
   - Claude Sonnet: ~$3/1M 입력 토큰
   - 일반적 사용: $10-50/월
   - 많이 사용 시: $100-500/월

   팁: 캐싱으로 70% 절약 가능
```

---

### 🔒 보안 관련

**Q3: 내 코드가 학습되나요?**
```
A: NO! 절대 학습 안 됨
   - Claude API는 학습 안 함
   - HumanLayer도 저장 안 함
   - 요청 시에만 전송
   - 종료 후 즉시 삭제
```

**Q4: API 키 보안은?**
```
A: 안전하게 관리:
   - 로컬 환경 변수
   - .env 파일 (gitignore)
   - 암호화 저장
   - 절대 코드에 하드코딩 금지
```

---

### 🔧 기술 관련

**Q5: 어떤 언어를 지원하나요?**
```
A: 주요 언어 모두 지원:
   ✅ Python
   ✅ JavaScript/TypeScript
   ✅ Go
   ✅ Rust
   ✅ Java
   ✅ C#
   ✅ Ruby
   ✅ PHP

   프레임워크:
   ✅ FastAPI, Django, Flask
   ✅ React, Vue, Angular
   ✅ Express, NestJS
   ✅ Spring Boot
   ...
```

**Q6: 기존 IDE와 함께 쓸 수 있나요?**
```
A: 네! 통합 가능:
   - VS Code 확장 (개발 중)
   - CLI로 터미널에서 사용
   - Git 훅 연동
   - CI/CD 파이프라인 통합
```

---

### 🤔 사용법 관련

**Q7: 학습이 어렵나요?**
```
A: 매우 쉬움:
   - 기본: 30분
   - 중급: 2시간
   - 고급: 1일

   기존 Claude Code 사용 경험 있으면
   → 10분이면 시작 가능
```

**Q8: 팀 협업은 어떻게?**
```
A: 여러 방식:
   1. 공유 설정 파일 (.humanlayer/)
   2. 커스텀 워크플로우 공유
   3. 컨텍스트 전략 표준화
   4. [Enterprise] 중앙 관리 서버
```

---

## 용어 설명 사전

### A-C

**Agent (에이전트)**
- **쉬운 설명**: AI 로봇 조수
- **기술적**: Claude API를 활용한 자율적 작업 단위
- **예시**: Backend Agent, Testing Agent

**Claude Code**
- **쉬운 설명**: Anthropic의 AI 코딩 도구
- **기술적**: Claude 기반 코드 생성/수정 시스템
- **관계**: HumanLayer는 Claude Code 위에 구축됨

**Context Engineering**
- **쉬운 설명**: AI에게 필요한 정보만 정확하게 주는 기술
- **비유**: 의사에게 증상 정확히 설명하기
- **중요성**: 컨텍스트가 좋을수록 AI 결과물 좋음

**Canary Deployment (카나리 배포)**
- **쉬운 설명**: 일부만 먼저 배포해서 테스트
- **비유**: 탄광의 카나리아 (위험 감지)
- **예시**: 5% 사용자 → 문제없으면 100%

---

### D-I

**DSL (Domain Specific Language)**
- **쉬운 설명**: 특정 작업용 전용 언어
- **예시**: SQL (데이터베이스), HTML (웹)
- **HumanLayer**: 워크플로우 정의용 YAML

**Human Gate**
- **쉬운 설명**: 사람이 확인하는 단계
- **예시**: "배포 전에 CTO 승인 필요"
- **사용 이유**: 중요한 결정은 사람이 판단

**Incremental (증분)**
- **쉬운 설명**: 조금씩 나눠서 처리
- **반대**: 한 번에 전부
- **장점**: 빠름, 에러 시 영향 적음

---

### M-P

**MULTICLAUD**
- **쉬운 설명**: 여러 Claude AI 동시 실행
- **비유**: 요리사 여러 명이 동시에 요리
- **효과**: 작업 시간 단축

**N+1 Query Problem**
- **쉬운 설명**: 데이터베이스를 너무 많이 조회하는 문제
- **예시**:
  ```python
  # 나쁜 예 (N+1)
  posts = Post.objects.all()  # 1번 조회
  for post in posts:
      post.author  # N번 조회 (각 post마다)

  # 좋은 예
  posts = Post.objects.select_related('author')  # 1번만!
  ```

**Prompt Engineering**
- **쉬운 설명**: AI에게 잘 물어보는 기술
- **중요성**: 질문이 좋아야 답변도 좋음
- **예시**: "고쳐줘" vs "이 버그를 이렇게 고쳐줘"

---

### S-W

**Strangler Pattern**
- **쉬운 설명**: 옛날 시스템을 조금씩 교체
- **비유**: 집 리모델링 (한 방씩)
- **반대**: Big Bang (전체 동시 교체)

**Token**
- **쉬운 설명**: AI가 이해하는 단어 조각
- **예시**: "안녕하세요" ≈ 2-3 토큰
- **중요성**: 비용 계산 기준

**Worktree**
- **쉬운 설명**: Git 브랜치를 별도 폴더에서 작업
- **예시**:
  ```
  project/main/     # main 브랜치
  project/feature/  # feature 브랜치
  → 동시 작업 가능!
  ```

---

## 학습 로드맵

### 📚 4주 마스터 계획

#### Week 1: 기초 (Part 1)
- [ ] Day 1-2: 개념 이해
  - HumanLayer가 뭔지
  - 3가지 핵심 개념
  - 설치 및 설정

- [ ] Day 3-4: 기본 사용
  - 첫 프로젝트 (5분 실습)
  - 간단한 버그 수정
  - AI 프롬프트 연습

- [ ] Day 5-7: 워크플로우
  - 기본 워크플로우 이해
  - 실전 프로젝트 1개 완성
  - 체크리스트 완료

**목표**: 혼자서 기본 작업 가능

---

#### Week 2: 중급 (Part 2 시작)
- [ ] Day 8-10: 실전 시나리오
  - 레벨별 예시 따라하기
  - 자기 프로젝트에 적용
  - 팀 협업 시도

- [ ] Day 11-12: Context Engineering
  - 계층적 컨텍스트 이해
  - 최적화 기법 적용
  - 성능 개선 체감

- [ ] Day 13-14: 커스텀 워크플로우
  - 자주 하는 작업 자동화
  - 팀 워크플로우 만들기
  - 프롬프트 템플릿 작성

**목표**: 효율적으로 활용

---

#### Week 3: 고급
- [ ] Day 15-17: 마이크로서비스
  - 서비스 분리 실습
  - 복잡한 아키텍처 다루기
  - 시스템 설계 AI 협업

- [ ] Day 18-19: 성능 최적화
  - 병목 지점 찾기
  - 최적화 전략 수립
  - 모니터링 설정

- [ ] Day 20-21: 레거시 마이그레이션
  - Strangler Pattern 적용
  - 점진적 전환 전략
  - 리스크 관리

**목표**: 복잡한 프로젝트 가능

---

#### Week 4: 마스터
- [ ] Day 22-24: 팀 스케일링
  - 팀 워크플로우 정립
  - 코드 리뷰 자동화
  - 생산성 메트릭 추적

- [ ] Day 25-26: 고급 커스터마이징
  - 커스텀 컨텍스트 제공자
  - 플러그인 개발
  - 통합 자동화

- [ ] Day 27-28: 베스트 프랙티스
  - 케이스 스터디 분석
  - 자기 워크플로우 완성
  - 팀 가이드 작성

**목표**: HumanLayer 전문가

---

### 🎯 레벨별 목표

**🌱 초급 (Week 1-2)**
```
할 수 있는 것:
✓ 간단한 기능 구현
✓ 버그 수정
✓ 테스트 작성
✓ 문서 자동 생성

생산성: 2-3배 향상
```

**🚀 중급 (Week 3)**
```
할 수 있는 것:
✓ 복잡한 기능 구현
✓ 리팩토링
✓ 성능 최적화
✓ 아키텍처 설계 보조

생산성: 5-7배 향상
```

**💎 고급 (Week 4)**
```
할 수 있는 것:
✓ 시스템 설계
✓ 마이그레이션 프로젝트
✓ 팀 프로세스 구축
✓ 커스텀 자동화

생산성: 10배+ 향상
```

---

## 마치며

### 🎓 핵심 요약 (Part 2)

**5가지 고급 스킬**:
1. 🎯 **Context Engineering**: 정확한 정보만 제공
2. 🔄 **워크플로우 자동화**: 반복 작업 제거
3. 🤝 **팀 협업**: 함께 10배 개발자 되기
4. ⚡ **성능 최적화**: 느린 부분 빠르게
5. 🔧 **문제 해결**: 막혔을 때 돌파구

**실전 적용 3단계**:
```
1. 작게 시작
   → 하나의 프로젝트부터

2. 점진적 확대
   → 팀원에게 공유

3. 표준화
   → 팀 전체 프로세스로
```

---

### 🚀 다음 단계

**지금 바로 실행**:
1. [ ] 대기자 명단 가입
2. [ ] 첫 프로젝트 시작
3. [ ] 팀원에게 공유
4. [ ] 피드백 제공

**커뮤니티 참여**:
- 💬 Discord: 질문하고 답변받기
- 🐙 GitHub: 이슈 제기 및 기여
- 📧 이메일: contact@humanlayer.dev

---

### 🌟 성공 스토리가 되세요!

```
"1주일 전 HumanLayer를 시작했어요.
 이제는 하루에 10개 PR을 찍어내고 있어요.
 팀원들도 모두 놀랐어요!"

 - 당신의 이름, 1주일 후
```

---

**💬 피드백 환영**:
- 이 가이드가 도움되었나요?
- 더 알고 싶은 내용이 있나요?
- GitHub에서 Issue로 제안해주세요!

---

## 체크리스트 (Part 2 완료 확인)

### 실전 적용
- [ ] 레벨별 시나리오 3개 이상 완료
- [ ] 팀 협업 워크플로우 구축
- [ ] 커스텀 워크플로우 1개 이상 작성

### 고급 기능
- [ ] Context Engineering 최적화
- [ ] AI 프롬프트 템플릿 작성
- [ ] 성능 튜닝 적용

### 문제 해결
- [ ] 일반적인 문제 5가지 해결 경험
- [ ] 디버깅 프로세스 확립

### 마스터
- [ ] 4주 로드맵 완료
- [ ] 팀에 HumanLayer 소개
- [ ] 커뮤니티 기여 (Issue/PR)

**완료율**: ___% (___/12)

---

## 연결된 노트

### 이전 단계
- [[HumanLayer 완벽 가이드 Part 1 - 기초편]] - 기초부터 시작

### 관련 주제
- [[Claude Code 완벽 가이드]] - 기반 기술
- [[AI 코딩 도구 비교]] - 다른 도구와 비교
- [[Context Engineering 심화]] - 맥락 관리 전문
- [[팀 개발 프로세스 최적화]] - 협업 전략

### 확장 학습
- [[마이크로서비스 아키텍처]] - 고급 설계
- [[성능 최적화 실전]] - 속도 개선
- [[레거시 시스템 현대화]] - 마이그레이션

---

**🎉 축하합니다!**
HumanLayer 완벽 가이드 Part 2를 완료하셨습니다!

이제 당신은 HumanLayer 고급 사용자입니다. 🚀

**작성일**: 2025-10-13
**Part**: 2/2 (고급편)
**난이도**: ⭐⭐⭐⭐☆ (고급)
**예상 학습 시간**: 2시간

Happy Coding with AI! 🤖✨