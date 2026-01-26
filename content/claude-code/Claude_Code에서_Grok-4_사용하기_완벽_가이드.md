---
title: Claude Code에서 Grok-4 사용하기 완벽 가이드
created: 2025-10-23
last_modified: 2025-10-23
tags:
  - Claude-Code
  - Grok
  - AI/LLM
  - 개발도구/설정
  - 가이드/초보자용
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/blpfnudu#j811R+B/785EfoMYorRuu3qOs0KacDEm75GWnflbmps
share_updated: 2025-10-23T23:43:31+09:00
---

# Claude Code에서 Grok-4 사용하기 완벽 가이드

## 📋 목차
1. [[#개요]]
2. [[#왜 Grok-4를 사용하나요]]
3. [[#설치 및 설정 과정]]
4. [[#핵심 설정 항목 상세 설명]]
5. [[#실전 사용법]]
6. [[#문제 해결]]
7. [[#주의사항]]

---

## 개요

이 가이드는 **Claude Code Router**를 통해 **Grok-4 모델**을 Claude Code에서 사용하는 방법을 초보자도 쉽게 따라할 수 있도록 단계별로 설명합니다.

- **대상**: Claude Code 사용자
- **소요 시간**: 약 5-10분
- **난이도**: ⭐⭐☆☆☆ (초급)
- **필요 사항**: 
  - Node.js 설치
  - npm 사용 가능 환경
  - Grok API 키

---

## 왜 Grok-4를 사용하나요?

### 🎯 Grok-4의 장점

| 특징 | 설명 |
|------|------|
| **대용량 컨텍스트** | 최대 160만 토큰 처리 가능 (Claude의 약 8배!) |
| **빠른 속도** | grok-4-fast 모델로 신속한 응답 |
| **다양한 모델** | grok-code-fast-1, grok-vision-beta, grok-4-fast 등 |
| **비용 효율** | 작업 유형에 따라 적절한 모델 선택 가능 |

### 💡 언제 Grok-4를 쓰면 좋을까요?

- ✅ **대규모 코드베이스 분석**: 전체 프로젝트 구조 파악
- ✅ **긴 문서 처리**: 여러 파일을 동시에 분석
- ✅ **복잡한 아키텍처 설계**: 많은 맥락 정보가 필요한 작업
- ✅ **빠른 코드 생성**: 간단한 작업을 신속하게 처리

---

## 설치 및 설정 과정

### 🌱 1단계: Claude Code Router 설치 (초보자용)

**이것은 마치 Claude Code에 '번역기'를 설치하는 것과 같아요!**

터미널을 열고 아래 명령어를 복사해서 붙여넣기 하세요:

```bash
npm install -g @musistudio/claude-code-router
```

**설명**: 
- `npm install`: 프로그램을 설치하는 명령어
- `-g`: 컴퓨터 전체에서 사용 가능하게 설치 (global)
- `@musistudio/claude-code-router`: 설치할 프로그램 이름

**💬 완료 메시지**: 설치가 끝나면 `added 1 package` 같은 메시지가 나타나요!

---

### 🌿 2단계: 설정 UI 열기 (중급)

설치가 완료되면 설정 화면을 열어봅시다:

```bash
ccr ui
```

**설명**:
- `ccr`: Claude Code Router의 줄임말
- `ui`: 설정 화면을 열어주는 명령어

**💻 실행 결과**: 웹 브라우저가 자동으로 열리면서 설정 페이지가 나타납니다!

---

### 🌳 3단계: Grok Provider 추가 및 설정 (고급)

이제 본격적으로 Grok을 설정해볼까요?

#### 3-1. Provider 추가

설정 페이지에서 **"Add Provider"** 버튼을 클릭하세요.

#### 3-2. 필수 정보 입력

아래 정보를 **정확히** 입력해야 해요:

| 항목 | 입력값 | 설명 |
|------|--------|------|
| **Name** | `grok` | Provider 이름 (자유롭게 설정 가능) |
| **API Full URL** | `https://api.x.ai/v1/chat/completions` | Grok API 주소 (반드시 정확히!) |
| **API Key** | `xai-xxxxxxxxx` | 본인의 Grok API 키 (x.ai에서 발급) |

**⚠️ 주의**: API Key는 절대 공개하지 마세요!

#### 3-3. 모델 추가

**Models** 섹션에서 아래 모델들을 추가하세요:

```
grok-code-fast-1
grok-vision-beta
grok-4-fast
```

**추가 방법**:
1. 모델 입력 상자에 모델 이름 입력
2. **Enter** 키 또는 **"Add Model"** 버튼 클릭
3. 모든 모델이 추가될 때까지 반복

#### 3-4. Provider Transformer 설정

**Provider Transformer** 드롭다운에서 **`grok`**을 선택하세요.

**💡 이것은 왜 필요할까요?**
- Claude Code와 Grok이 서로 다른 "언어"를 사용해요
- Transformer는 그 "통역사" 역할을 합니다!

#### 3-5. 저장

**"Save"** 버튼을 클릭해서 설정을 저장하세요! ✅

---

### 🎨 4단계: Router 설정 (핵심!)

Provider를 추가했다면, 이제 **언제 어떤 모델을 쓸지** 결정해야 해요!

오른쪽 **Router** 섹션에서 설정합니다:

| 작업 유형 | 추천 모델 | 설정값 |
|-----------|-----------|--------|
| **Background** | `grok, grok-4-fast` | 백그라운드 작업용 |
| **Think** | `grok, grok-4-fast` | 일반 사고/응답 |
| **Long Context** | `grok, grok-4-fast` | 긴 컨텍스트 처리 |
| **Web Search** | `grok, grok-4-fast` | 웹 검색 작업 |
| **Image (beta)** | `grok, grok-vision-beta` | 이미지 분석 |

---

## 핵심 설정 항목 상세 설명

### 🔢 Context Threshold: 1,600,000

**이것은 마치 책가방의 크기예요!**

#### 📚 쉬운 비유로 이해하기

> 여러분이 학교에 책가방을 들고 가는 상황을 상상해보세요!
> 
> - **작은 가방** (Claude 기본): 교과서 2-3권 정도 (20만 토큰)
> - **큰 가방** (Grok-4): 교과서 10-15권 + 공책들 (160만 토큰)
> 
> Context Threshold는 "이 가방에 책을 얼마나 담을 수 있는가"를 정하는 거예요!

#### 🎯 왜 1,600,000으로 설정하나요?

```
Context Threshold = 모델이 한 번에 처리할 수 있는 최대 정보량
```

**Grok-4의 최대 용량**: 2백만 토큰
**권장 설정**: 60-80%인 **1.2M~1.6M 토큰**

**⚠️ 너무 높게 설정하면**: 
- 응답이 느려질 수 있어요
- 비용이 많이 나올 수 있어요
- 불안정할 수 있어요

**💡 적절한 설정 (70%)**: 
- 안정성 ✅
- 속도 ✅
- 비용 효율성 ✅

#### 📊 실전 사용 예시

```markdown
# 예시 1: 프롬프트 설계
- 역할(1): 목적(1) 제약(3 이하) 예시(1-2) 메타지시(검증/정식)
- 최소 컨텍스트 필요

# 예시 2: RAG 입력값
- 벡터 유사도 상위 k + 스코어 > t를 함께 사용
- 시작값은 cosine 0.78-0.82, k=3-5

# 예시 3: 길이 관리
- 모델별 context window의 60-80%를 상한으로 설정
- 나머지는 시스템/출력 형식용

# 예시 4: 평가
- threshold 전후로 정확도/근거 일치율/자기모순율을 A/B로 측정
```

---

## 실전 사용법

### 🚀 5단계: Claude Code에서 모델 전환

모든 설정이 끝났으면 이제 사용해볼 차례예요!

#### 방법 1: 터미널에서 직접 시작

```bash
ccr code
```

이 명령어를 실행하면 Claude Code가 Router를 통해 실행됩니다!

#### 방법 2: 모델 변경

Claude Code가 실행된 상태에서:

```bash
/model grok-4-1-fast
```

여기서 잠깐~ 다음과 같이 클로드 코드 라우터에서 정한이름, 쉼표, 모델명을 입력해야 합니다.
예를 들면 저의 경우에는

```bash
/model grok, grok-4-1-fast
```

```bash
/model [claude code router에서 정한 이름], grok-4-1-fast
```




**💬 확인 메시지**: 
```
Model switched to grok-4-1-fast
```




#### 방법 3: 작업별 자동 전환

Router 설정대로 자동으로 적절한 모델이 선택됩니다!

- 긴 코드 분석 → `grok-4-fast` (Long Context)
- 이미지 분석 → `grok-vision-beta` (Image)
- 일반 대화 → `grok-4-fast` (Think)

---

### 🤔 생각해보기

1. **내가 주로 하는 작업**은 어떤 모델이 적합할까요?
2. **Context Threshold**를 내 작업에 맞게 조정하려면 어떻게 해야 할까요?
3. **비용과 성능**의 균형을 어떻게 맞출 수 있을까요?

---

## 문제 해결

### ❌ 자주 발생하는 문제들

#### 문제 1: "ccr: command not found"

**원인**: Claude Code Router가 제대로 설치되지 않았어요.

**해결 방법**:
```bash
# 다시 설치해보세요
npm install -g @musistudio/claude-code-router

# 설치 확인
ccr --version
```

---

#### 문제 2: "API Key Invalid"

**원인**: API 키가 잘못 입력되었거나 만료되었어요.

**해결 방법**:
1. [x.ai 콘솔](https://console.x.ai)에서 API 키 확인
2. ccr ui → Provider 설정에서 API Key 다시 입력
3. 저장 후 재시작

---

#### 문제 3: 응답이 너무 느려요

**원인**: Context Threshold가 너무 높거나, 네트워크 문제

**해결 방법**:
1. Context Threshold를 100만으로 줄여보기
2. 더 빠른 모델(`grok-code-fast-1`) 사용
3. 인터넷 연결 확인

---

#### 문제 4: 모델 전환이 안 돼요

**원인**: Router 설정이 저장되지 않았어요.

**해결 방법**:
1. `ccr ui`로 설정 페이지 재확인
2. "Save and Restart" 버튼 클릭
3. 터미널 재시작 후 `ccr code` 다시 실행

---

## 주의사항

### ⚠️ 반드시 기억하세요!

1. **API Key 보안**
   - API 키는 절대 공개 저장소에 올리지 마세요
   - `.env` 파일이나 안전한 곳에 보관하세요

2. **비용 관리**
   - Grok-4는 사용량에 따라 비용이 발생해요
   - [x.ai 대시보드](https://console.x.ai)에서 사용량 모니터링

3. **모델 선택**
   - 간단한 작업: `grok-code-fast-1` (빠르고 저렴)
   - 복잡한 분석: `grok-4-fast` (강력하지만 비용 높음)
   - 이미지 처리: `grok-vision-beta` 전용

4. **Context 관리**
   - 불필요하게 큰 파일을 모두 포함하지 마세요
   - 필요한 부분만 선택적으로 제공하세요

---

## 구현 체크리스트

### 설치 및 설정
- [ ] Node.js와 npm 설치 확인
- [ ] Claude Code Router 설치 완료
- [ ] Grok API 키 발급받기

### Provider 설정
- [ ] Provider 이름: `grok` 입력
- [ ] API Full URL: `https://api.x.ai/v1/chat/completions` 입력
- [ ] API Key 입력
- [ ] 모델 3개 추가 (grok-code-fast-1, grok-vision-beta, grok-4-fast)
- [ ] Provider Transformer: `grok` 선택
- [ ] 설정 저장

### Router 설정
- [ ] Background: `grok, grok-4-fast` 설정
- [ ] Think: `grok, grok-4-fast` 설정
- [ ] Long Context: `grok, grok-4-fast` 설정
- [ ] Context Threshold: `1600000` 입력
- [ ] Web Search: `grok, grok-4-fast` 설정
- [ ] Image: `grok, grok-vision-beta` 설정
- [ ] Save and Restart 클릭

### 테스트
- [ ] `ccr code` 명령어 실행
- [ ] `/model grok-4-fast`로 모델 전환 확인
- [ ] 간단한 질문으로 응답 테스트
- [ ] 긴 코드 분석 작업 테스트

---

## 연결된 노트

### 관련 가이드
- [[Claude Code 시작하기]]
- [[API 키 관리 베스트 프랙티스]]
- [[LLM 모델 선택 가이드]]
- [[Context Window 최적화 전략]]

### 심화 학습
- [[대규모 코드베이스 분석 전략]]
- [[AI 모델 비용 최적화]]
- [[Multi-Model 워크플로우 설계]]

### 관련 도구
- [[Claude Code Router 고급 설정]]
- [[Grok API 완벽 가이드]]
- [[LLM 성능 비교 분석]]

---

## 마치며

축하합니다! 🎉 이제 Claude Code에서 Grok-4의 강력한 성능을 활용할 수 있어요!

**다음 단계**:
1. 실제 프로젝트에 적용해보기
2. 다양한 모델 비교해보기
3. 자신만의 최적 설정 찾기

**궁금한 점이 있으면**:
- [Claude Code 공식 문서](https://docs.anthropic.com/claude-code)
- [Grok API 문서](https://docs.x.ai)
- 커뮤니티 포럼

행복한 코딩 되세요! 💻✨
