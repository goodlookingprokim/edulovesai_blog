---
title: "LangCode 입문 완전 가이드 - Part 4: 실제 프로젝트 적용하기"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - LangCode
  - 실전/프로젝트
  - 사례연구
  - 워크플로우
status: "진행중"
type: "입문가이드"
priority: "high"
---

# LangCode 입문 완전 가이드 - Part 4: 실제 프로젝트 적용하기

## 📋 목차

1. [[#프로젝트_별_최적_설정]]
2. [[#사례연구_1_웹_애플리케이션]]
3. [[#사례연구_2_데이터_과학]]
4. [[#사례연구_3_모바일_앱]]
5. [[#팀_협업_가이드]]
6. [[#트러블_슈팅]]
7. [[#체크리스트]]

---

## 프로젝트별 최적 설정

### 🌐 웹 애플리케이션

**기술 스택:** Node.js, React, PostgreSQL

```bash
# 프로젝트 폴더 초기화
cd ~/my-web-app
mkdir -p .langcode

# 설정 파일 작성
cat > .langcode/langcode.md << 'EOF'
# Web Application Configuration

## Tech Stack
- Backend: Node.js + Express
- Frontend: React + TypeScript
- Database: PostgreSQL
- Testing: Jest + Supertest

## Naming Conventions
- Components: PascalCase (e.g., UserProfile.tsx)
- Functions: camelCase (e.g., getUserData())
- Constants: UPPER_SNAKE_CASE (e.g., API_TIMEOUT)
- Folders: kebab-case (e.g., user-management)

## Code Standards
- All functions require TypeScript types
- Components must have PropTypes or TypeScript interfaces
- Error handling: Always use try-catch for async functions
- Testing: Minimum 80% coverage required

## Common Tasks
- Test: npm test
- Build: npm run build
- Dev: npm run dev
- Lint: npm run lint

## Project Structure
```
src/
├── components/     # React components
├── pages/         # Page components
├── services/      # API services
├── hooks/         # Custom hooks
├── utils/         # Utility functions
└── tests/         # Test files
```
EOF
```

**권장 설정:**

```bash
langcode feature "새 기능 추가" \
  --llm claude \
  --mode deep \
  --test-cmd "npm test" \
  --priority quality
```

**이유:**
- Claude: 웹 개발에 최적
- Deep Mode: 복잡한 로직 분석
- Test: 품질 보증
- Quality Priority: 사용자가 쓰는 코드

### 🐍 Python 데이터 과학

**기술 스택:** Python, Pandas, TensorFlow, Jupyter

```bash
# 프로젝트 설정
mkdir -p .langcode

cat > .langcode/langcode.md << 'EOF'
# Data Science Project Configuration

## Python Environment
- Python: 3.10+
- Virtual Env: .venv
- Package Manager: pip + requirements.txt

## Key Libraries
- Data: pandas, numpy, scipy
- ML: scikit-learn, tensorflow, pytorch
- Viz: matplotlib, seaborn, plotly
- Testing: pytest

## Project Structure
```
project/
├── data/              # Raw and processed data
├── notebooks/         # Jupyter notebooks
├── src/
│   ├── preprocessing/
│   ├── models/
│   └── utils/
├── tests/
└── requirements.txt
```

## Code Standards
- All functions must have docstrings
- Use type hints (Python 3.6+)
- Test coverage: 75%+
- Use numpy for numerical operations
- Use pandas for data manipulation

## Testing
- Unit tests: pytest
- Integration tests: pytest with fixtures
- Data validation: great_expectations
EOF
```

**권장 설정:**

```bash
langcode feature "새로운 데이터 전처리 함수" \
  --llm gemini \  # 비용 절감
  --mode react \  # 빠른 구현
  --test-cmd "pytest tests/" \
  --priority cost  # 비용 우선
```

**이유:**
- Gemini: 비용 절감
- React Mode: 빠르게 구현
- Cost Priority: 학습 프로젝트면 충분

### 📱 모바일 앱 (Flutter)

**기술 스택:** Flutter, Dart, Firebase

```bash
# 프로젝트 설정
mkdir -p .langcode

cat > .langcode/langcode.md << 'EOF'
# Flutter App Configuration

## Development Environment
- Flutter SDK: Latest stable
- IDE: VS Code + Flutter extension
- Testing: flutter test, mockito

## Project Structure
```
lib/
├── screens/       # UI screens
├── widgets/       # Reusable widgets
├── models/        # Data models
├── services/      # Firebase, API calls
├── providers/     # State management (GetX/Riverpod)
└── utils/         # Utilities
```

## Code Standards
- Use provider pattern for state management
- All widgets must be documented
- Use null safety
- Follow Google Dart style guide
- Minimum test coverage: 70%

## Testing Commands
- Unit: flutter test
- Widget: flutter test
- Integration: flutter drive
EOF
```

**권장 설정:**

```bash
langcode feature "새로운 UI 스크린" \
  --llm claude \
  --mode deep \
  --test-cmd "flutter test" \
  --priority quality
```

---

## 사례연구 1: 웹 애플리케이션

### 📱 프로젝트: 투두 리스트 앱

**요구사항:**
- React + Node.js 백엔드
- 사용자 인증
- 실시간 동기화
- 모바일 반응형

### 🚀 Step 1: 프로젝트 초기화

```bash
# 프로젝트 생성
npx create-react-app todo-app
cd todo-app

# LangCode 설정
mkdir -p .langcode
cat > .langcode/langcode.md << 'EOF'
# Todo App Configuration
- Frontend: React + TypeScript
- Backend: Node.js + Express
- Database: MongoDB
- Auth: JWT
EOF

# Git 초기화
git init
git add .
git commit -m "Initial setup"
```

### 📋 Step 2: 백엔드 API 구조 설계

```bash
langcode chat --llm claude --mode deep

질문: "MongoDB를 사용하는 Todo API 설계에서
다음을 고려해야 할까?
- 응답 시간
- 확장성
- 보안"

결과: 설계 권장안 제시
```

### 🔨 Step 3: 인증 기능 구현

```bash
langcode feature "JWT 기반 사용자 인증 시스템:
- 회원가입 API
- 로그인 API
- 토큰 검증 미들웨어
- 패스워드 해싱 (bcrypt)" \
  --test-cmd "npm test -- auth.test.js" \
  --mode deep \
  --priority quality
```

### ✅ Step 4: 데이터베이스 스키마

```bash
langcode feature "MongoDB 스키마 정의:
- User 모델 (이메일, 패스워드 해시, created_at)
- Todo 모델 (제목, 설명, 완료 여부, user_id)" \
  --llm claude

# 결과: models/User.js, models/Todo.js 생성
```

### 🐛 Step 5: 로그인 버그 수정

```bash
# 테스트 실행 후 오류 발견
npm test

# 오류: "Invalid token"

langcode fix \
  --log test_output.log \
  "로그인 후 토큰이 생성되지 않는다" \
  --test-cmd "npm test"
```

### 📊 Step 6: 성능 최적화

```bash
langcode analyze "데이터베이스 쿼리 성능" \
  --mode deep \
  --llm claude \
  --priority quality

# 결과: 느린 쿼리 찾기, 인덱스 제시
```

### ✨ 최종 결과

```bash
# 완성된 API 서버
# - 인증 기능 ✅
# - CRUD 엔드포인트 ✅
# - 테스트 커버리지 85% ✅
# - 배포 준비 완료 ✅
```

---

## 사례연구 2: 데이터 과학

### 📊 프로젝트: 주택 가격 예측

**요구사항:**
- 데이터셋: 10,000+ 샘플
- 모델: 머신러닝 (Scikit-learn)
- 평가: R² score, RMSE
- 배포: Flask API

### 🚀 Step 1: 프로젝트 구조

```bash
mkdir housing-prediction
cd housing-prediction

# 가상 환경
python -m venv .venv
source .venv/bin/activate

# LangCode 설정
mkdir -p .langcode
cat > requirements.txt << 'EOF'
pandas==2.0.0
numpy==1.24.0
scikit-learn==1.2.0
tensorflow==2.12.0
matplotlib==3.7.0
pytest==7.2.0
EOF

pip install -r requirements.txt
```

### 📥 Step 2: 데이터 탐색

```bash
langcode feature "데이터 로드 및 기본 분석:
- 데이터셋 로드 (CSV 파일)
- 누락된 값 처리
- 기본 통계 출력
- 시각화 (matplotlib)" \
  --llm gemini \
  --priority cost

# src/data_loader.py 생성
```

### 🧹 Step 3: 데이터 전처리

```bash
langcode feature "데이터 전처리 파이프라인:
- 범주형 변수 인코딩
- 수치 변수 정규화
- 이상치 제거
- 훈련/테스트 분할" \
  --test-cmd "pytest src/test_preprocessing.py" \
  --priority quality
```

### 🤖 Step 4: 모델 개발

```bash
langcode feature "머신러닝 모델 구축:
- Linear Regression 기본 모델
- Random Forest 모델
- 하이퍼파라미터 튜닝 (GridSearchCV)
- 교차 검증" \
  --mode deep \
  --test-cmd "pytest src/test_model.py" \
  --priority quality
```

### 📈 Step 5: 모델 평가

```bash
langcode chat --llm claude

질문: "R² = 0.78, RMSE = 45000인 모델을
개선하려면 어떻게 해야 할까?"

결과: 개선 방법 제시
```

### 🔧 Step 6: API로 배포

```bash
langcode feature "Flask REST API:
- /predict 엔드포인트
- 입력 검증
- 모델 로드 및 예측
- JSON 응답" \
  --llm claude \
  --test-cmd "pytest src/test_api.py"
```

---

## 사례연구 3: 모바일 앱

### 📱 프로젝트: 운동 기록 앱

**요구사항:**
- Flutter + Dart
- Firebase 백엔드
- Local 데이터 저장소
- 운동 기록 및 통계

### 🚀 Step 1: 앱 생성

```bash
flutter create workout_tracker
cd workout_tracker

# LangCode 설정
mkdir -p .langcode
cat > .langcode/langcode.md << 'EOF'
# Flutter Workout App Configuration
- State Management: GetX
- Local Storage: Hive
- Backend: Firebase
- Testing: flutter test
EOF
```

### 🎨 Step 2: UI 구조 설계

```bash
langcode chat --llm claude --mode deep

질문: "운동 기록 앱의 스크린 구조:
- 홈 화면 (오늘의 운동)
- 운동 기록 화면
- 통계 화면
- 설정 화면

각 화면에 필요한 위젯은?"

결과: 상세한 UI/UX 설계
```

### 🏗️ Step 3: 데이터 모델

```bash
langcode feature "Dart 데이터 모델:
- Workout 모델 (이름, 시간, 강도)
- User 모델 (이름, 목표, 통계)
- 직렬화 (JSON)" \
  --test-cmd "flutter test" \
  --priority quality
```

### 🎛️ Step 4: 상태 관리

```bash
langcode feature "GetX 컨트롤러:
- 운동 기록 추가/삭제
- 통계 계산
- 로컬 저장소와 동기화" \
  --llm claude \
  --mode deep
```

### 🖼️ Step 5: UI 구현

```bash
langcode feature "홈 화면 UI:
- 오늘 운동 카드
- 최근 운동 목록
- FAB로 새 운동 추가" \
  --test-cmd "flutter test" \
  --priority quality
```

### 📊 Step 6: 통계 기능

```bash
langcode feature "운동 통계:
- 주간 칼로리 계산
- 운동 빈도 그래프
- 목표 진행도" \
  --mode deep \
  --priority quality
```

---

## 팀 협업 가이드

### 👥 팀 설정

```bash
# 프로젝트 루트의 .langcode/langcode.md
cat > .langcode/langcode.md << 'EOF'
# Team Configuration

## Team Guidelines
- All PRs must use LangCode for code generation
- Review process: 2+ approvals
- LangCode mode: Deep for features, ReAct for hotfixes
- Priority: Quality for main branch, Cost for dev

## Code Standards (enforced by LangCode)
- Language: English for code, Korean for comments
- Style: ESLint + Prettier
- Testing: 80%+ coverage
- Documentation: JSDoc for all functions

## Workflow
1. Create feature branch
2. Implement with LangCode
3. Run tests locally
4. Create PR
5. Code review
6. Merge to main
EOF
```

### 🔄 협업 워크플로우

**개발자 A: 새 기능 구현**

```bash
git checkout -b feature/user-auth
langcode feature "사용자 인증 추가" --mode deep
npm test
git push origin feature/user-auth
```

**개발자 B: 코드 리뷰**

```bash
langcode chat

질문: "이 인증 구현에서
보안 고려사항이 충분한가?"

# 코드 붙여넣기
```

**개발자 A: 개선**

```bash
langcode fix --log review_comments.txt \
  "보안 리뷰에서 지적된 사항 수정" \
  --mode deep

git add .
git commit -m "Review feedback: enhance security"
git push origin feature/user-auth
```

**개발자 B: 최종 승인**

```bash
git merge feature/user-auth
```

---

## 트러블 슈팅

### ❌ 문제 1: API 키 없음

**증상:**
```
Error: ANTHROPIC_API_KEY not found
```

**해결책:**

```bash
# 환경 변수 확인
echo $ANTHROPIC_API_KEY

# 없으면 설정
export ANTHROPIC_API_KEY="your_key_here"

# 또는 .env 파일
cat > .env << 'EOF'
ANTHROPIC_API_KEY=your_key_here
GOOGLE_API_KEY=your_gemini_key
EOF

# .langcode에서 읽기
cat > .langcode/langcode.md << 'EOF'
# Environment Variables
Check .env file for API keys
EOF
```

### ❌ 문제 2: 테스트 실패

**증상:**
```bash
langcode feature "..." --test-cmd "npm test"
# Test failed!
```

**해결책:**

```bash
# 1단계: 로컬에서 테스트 실행
npm test

# 2단계: 로그 저장
npm test > test_log.txt 2>&1

# 3단계: Fix로 자동 수정
langcode fix --log test_log.txt \
  "테스트 실패" \
  --test-cmd "npm test" \
  --mode deep
```

### ❌ 문제 3: 느린 응답

**증상:**
```bash
langcode chat
# 30초 이상 기다림
```

**해결책:**

```bash
# 1. 로컬 LLM 사용
langcode chat --llm ollama

# 2. ReAct Mode 사용
langcode chat --mode react

# 3. 더 짧은 질문
langcode chat
"이 함수 설명해줘" # 대신 "def foo(): ..."
```

### ❌ 문제 4: 잘못된 코드 생성

**증상:**
```bash
langcode feature "기능 추가"
# 생성된 코드가 이상함
```

**해결책:**

```bash
# 1. Deep Mode 사용
langcode feature "..." --mode deep

# 2. Claude 사용
langcode feature "..." --llm claude

# 3. 더 상세한 지시
# 나쁜: "로그인 만들어"
# 좋은: "JWT 토큰 기반 로그인:
#       - POST /login
#       - 이메일, 패스워드 검증
#       - 토큰 발급"

# 4. 컨텍스트 파일 제공
cat > .langcode/langcode.md << 'EOF'
Our authentication uses:
- Framework: Express.js
- Token: JWT
- Storage: Redis
- Password: bcrypt
EOF
```

---

## 체크리스트

### ✅ 프로젝트 시작 전

```
프로젝트 설정
□ 프로젝트 폴더 생성
□ .langcode 디렉토리 생성
□ langcode.md 파일 작성
□ API 키 설정 (.env 파일)
□ Git 초기화

LangCode 설정
□ LLM 선택 (Claude / Gemini)
□ Mode 선택 (ReAct / Deep)
□ Priority 설정 (Cost / Speed / Quality)
□ 테스트 명령어 확인
```

### ✅ 기능 구현 중

```
설계
□ 요구사항 명확화
□ Chat으로 설계 검토

구현
□ Feature로 코드 생성
□ 로컬에서 테스트
□ 오류 수정 (Fix)

검토
□ 코드 리뷰 (Chat)
□ 성능 확인 (Analyze)
□ 테스트 커버리지 확인 (80%+)
```

### ✅ 배포 전

```
최종 확인
□ 모든 테스트 통과
□ 린트 오류 없음
□ 보안 검토
□ 성능 최적화
□ 문서 작성
□ 변경 사항 정리 (git log)

배포 준비
□ 환경 변수 설정
□ 데이터베이스 마이그레이션 준비
□ 롤백 계획 수립
□ 모니터링 설정
```

---

## 🎓 결론

**LangCode 마스터 되셨습니다!**

이제 할 수 있는 것:
✅ 프로젝트 설정
✅ 웹 앱 개발
✅ 데이터 과학 프로젝트
✅ 모바일 앱 개발
✅ 팀 협업
✅ 문제 해결

**다음 단계:**
1. 자신의 프로젝트에 적용
2. MCP 통합 (Part 5)
3. 커스텀 워크플로우 개발

---

**행운을 빕니다! 🚀**

