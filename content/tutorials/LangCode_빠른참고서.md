---
title: "LangCode 빠른 참고서 - 치트시트"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - LangCode
  - 참고서
  - 치트시트
  - 빠른참조
status: "진행중"
type: "참고자료"
priority: "high"
---

# LangCode 빠른 참고서 - 치트시트

## ⚡ 즉시 사용 가능한 명령어

### 기본 3가지 명령어

```bash
# 1. 질문하기 (Chat)
langcode chat
langcode chat --llm claude
langcode chat --mode deep

# 2. 새 기능 만들기 (Feature)
langcode feature "기능 설명"
langcode feature "기능 설명" --test-cmd "npm test"
langcode feature "기능 설명" --apply

# 3. 버그 고치기 (Fix)
langcode fix "버그 설명"
langcode fix --log error.log "버그 설명"
langcode fix "버그" --test-cmd "npm test"
```

---

## 📊 명령어 옵션 전체 정리

### Chat 명령어

```bash
langcode chat [옵션]

# 옵션들
--llm claude              # Claude 사용
--llm gemini              # Gemini 사용
--mode react              # 빠른 모드 (기본값)
--mode deep               # 깊은 분석
--router                  # 자동 AI 선택
--priority cost           # 비용 중시
--priority speed          # 속도 중시
--priority quality        # 품질 중시
--priority balanced       # 균형 (기본값)
```

### Feature 명령어

```bash
langcode feature "기능 설명" [옵션]

# 옵션들
--test-cmd "명령어"       # 테스트 명령어
--apply                   # 자동 적용 (물어보지 말고)
--llm claude              # LLM 선택
--llm gemini
--router                  # 자동 AI 선택
--priority [옵션]         # 우선순위
```

### Fix 명령어

```bash
langcode fix "버그 설명" [옵션]
langcode fix --log error.log "버그 설명" [옵션]

# 옵션들
--log 파일명              # 에러 로그 파일
--test-cmd "명령어"       # 테스트 명령어
--apply                   # 자동 적용
--llm [claude|gemini]     # LLM 선택
--router                  # 자동 AI 선택
--priority [옵션]         # 우선순위
```

---

## 🎯 상황별 최적 명령어

### 상황 1: 코드 이해하고 싶음

```bash
langcode chat --llm claude

질문: "이 함수가 뭐 하는 거야?"
```

### 상황 2: 새 기능 빠르게 만들기

```bash
langcode feature "기능" --mode react --priority cost --llm gemini
```

### 상황 3: 중요한 기능 완벽하게 구현

```bash
langcode feature "기능" --mode deep --priority quality --llm claude --test-cmd "npm test"
```

### 상황 4: 버그 찾아서 고치기

```bash
langcode fix --log crash.log "버그 설명" --test-cmd "npm test" --apply
```

### 상황 5: 성능 최적화

```bash
langcode analyze "성능 문제" --mode deep --llm claude --priority quality
```

### 상황 6: 급한 상황

```bash
langcode fix "긴급 버그" --priority speed --llm claude
```

### 상황 7: 예산이 부족함

```bash
langcode feature "기능" --router --priority cost --llm gemini
```

---

## 🔀 AI 선택 가이드

### 빠른 비교표

| 특징 | Claude | Gemini | Ollama |
|-----|--------|--------|--------|
| 속도 | 중간 | 빠름 | 매우 빠름 |
| 품질 | 최고 | 좋음 | 중간 |
| 가격 | 비쌈 | 저렴 | 무료 |
| 추천 | 중요한 작업 | 학습용 | 로컬용 |

### 선택 기준

```
예산이 제한적?        → Gemini 또는 Ollama
품질이 최우선?        → Claude
속도가 중요함?        → Gemini
프라이버시 중요?      → Ollama
```

---

## ⚙️ Mode 선택

### ReAct Mode (기본값)

```
언제: 간단한 작업, 빠른 답변 필요
속도: 빠름 (1-3초)
비용: 낮음
품질: 좋음

사용: langcode chat --mode react
```

### Deep Mode

```
언제: 복잡한 문제, 깊은 분석
속도: 느림 (10-30초)
비용: 높음
품질: 최고

사용: langcode chat --mode deep
```

---

## 🎛️ Priority 선택

### Balanced (기본값)

```bash
langcode feature "..." --priority balanced
# 또는 생략 (기본값)
langcode feature "..."
```

### Cost (비용 우선)

```bash
langcode feature "..." --router --priority cost
# 추천: 학생, 개인 프로젝트, 많은 호출 필요
```

### Speed (속도 우선)

```bash
langcode fix "..." --priority speed
# 추천: 긴급 상황, 사용자가 기다리는 중
```

### Quality (품질 우선)

```bash
langcode feature "..." --priority quality
# 추천: 중요한 프로젝트, 금융 서비스, 의료
```

---

## 📁 프로젝트 설정

### 최소 설정 파일

```bash
mkdir -p .langcode

cat > .langcode/langcode.md << 'EOF'
# Project Configuration

## Tech Stack
- Framework: [프레임워크]
- Language: [언어]
- Database: [데이터베이스]

## Commands
- Test: [테스트 명령어]
- Build: [빌드 명령어]
- Dev: [개발 명령어]
EOF
```

### 환경 변수 설정

```bash
# 터미널에서 한 번만 설정
export ANTHROPIC_API_KEY="your_claude_key"
export GOOGLE_API_KEY="your_gemini_key"

# 또는 .env 파일에 저장
cat > .env << 'EOF'
ANTHROPIC_API_KEY=your_key
GOOGLE_API_KEY=your_key
EOF
```

---

## 🐛 자주 하는 실수

### ❌ 나쁜 예

```bash
# 지시가 불명확함
langcode feature "뭔가 만들어"

# 환경 변수 없음
langcode chat  # API 키 오류!

# --apply를 무분별하게 사용
langcode feature "..." --apply  # 변경 사항 확인 안 함!
```

### ✅ 좋은 예

```bash
# 명확한 지시
langcode feature "사용자 로그인: JWT 토큰 기반"

# 환경 변수 확인
echo $ANTHROPIC_API_KEY

# 먼저 결과 확인 후 apply
langcode feature "..."
# (결과 검토)
langcode feature "..." --apply
```

---

## 🚀 속도 최적화 팁

### 빠르게 하기

```bash
# 1. ReAct Mode 사용
langcode chat --mode react

# 2. Gemini 사용 (빠름)
langcode chat --llm gemini

# 3. 간단한 질문
langcode chat
"이 함수 설명해줘"  # 대신 전체 코드
```

### 비용 절감

```bash
# 1. Router + Cost Priority
langcode feature "..." --router --priority cost

# 2. Gemini 사용
langcode chat --llm gemini

# 3. 로컬 LLM
langcode chat --llm ollama
```

### 품질 향상

```bash
# 1. Deep Mode
langcode feature "..." --mode deep

# 2. Claude 사용
langcode feature "..." --llm claude

# 3. Quality Priority
langcode feature "..." --priority quality

# 4. 상세한 지시
# (명확하게 요구사항 설명)
```

---

## 📞 도움말 및 단축키

### Chat 중 명령어

```bash
# Chat이 시작된 상태에서:
/clear          # 대화 히스토리 삭제
/select         # 메뉴로 돌아가기
/exit           # 종료
/quit           # 종료
/help           # 도움말
```

### 터미널 명령어

```bash
langcode --version         # 버전 확인
langcode --help            # 도움말

langcode chat --help       # Chat 명령어 도움말
langcode feature --help    # Feature 명령어 도움말
langcode fix --help        # Fix 명령어 도움말
```

---

## 📋 작업별 체크리스트

### 새 기능 구현

```
□ 요구사항 정의
□ Chat으로 설계 검토
□ Feature로 코드 생성
□ 로컬 테스트 실행
□ 테스트 통과 확인
□ Git 커밋
```

### 버그 수정

```
□ 버그 재현
□ 오류 로그 저장
□ Fix 명령어 실행
□ 테스트 실행
□ 오류 수정 확인
□ Git 커밋
```

### 코드 검토

```
□ Chat으로 코드 분석
□ 개선 사항 파악
□ Feature로 수정
□ 테스트 재실행
□ 변경사항 확인
```

---

## 🎬 30초 튜토리얼

### 1. 설치 (1분)

```bash
pip install langchain-code
export ANTHROPIC_API_KEY="your_key"
```

### 2. Chat 시작 (10초)

```bash
langcode chat

# 질문 입력
"Python list 뭐야?"
```

### 3. 기능 만들기 (30초)

```bash
langcode feature "더하기 함수 만들어"

# 코드가 자동 생성됨!
```

### 4. 버그 고치기 (30초)

```bash
langcode fix "이 함수가 오류를 낸다"

# 버그가 자동 수정됨!
```

---

## 🌐 웹에서 찾기

### 공식 문서

```
LangCode GitHub:
https://github.com/zamalali/langchain-code

설치:
pip install langchain-code

문제 해결:
GitHub Issues 참고
```

---

## 📚 관련 노트

[[LangCode_입문_완전_가이드_Part_1|Part 1: 기초 개념 및 설치]]
[[LangCode_입문_완전_가이드_Part_2|Part 2: 핵심 명령어 마스터]]
[[LangCode_입문_완전_가이드_Part_3|Part 3: 고급 기능과 최적화]]
[[LangCode_입문_완전_가이드_Part_4|Part 4: 실제 프로젝트 적용]]

---

## 💡 한 줄 팁

- **Claude vs Gemini?** → 중요하면 Claude, 빠르면 Gemini
- **ReAct vs Deep?** → 급하면 ReAct, 깊으면 Deep
- **--apply?** → 항상 먼저 결과 확인하고!
- **비용 줄이기?** → Router + Cost Priority
- **품질 높이기?** → Deep Mode + Claude + Quality Priority

---

**이 페이지를 북마크하면 언제든지 빠르게 참고할 수 있습니다!** 🚀

