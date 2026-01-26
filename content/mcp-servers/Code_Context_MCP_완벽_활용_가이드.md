---
title: Code Context MCP 완벽 활용 가이드
created: 2025-01-29
last_modified: 2025-01-29
tags:
  - MCP
  - AI/코딩도구
  - 개발/도구
  - 시맨틱검색
  - 코드분석
  - Claude-Code
  - 벡터검색
  - AST
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/f8i6cfls#PV0OEZ1bYcuJvlE8qW/uWfpdLHaF4+j1D8ZIS0x2iUc
share_updated: 2025-07-29T11:54:37+09:00
---

# Code Context MCP 완벽 활용 가이드

## 개요
- **핵심 주제**: 코드베이스 전체에 대한 시맨틱 검색과 문맥 이해를 제공하는 MCP 서버
- **목적**: AI 코딩 어시스턴트(Claude, Gemini, Cursor)에 깊은 코드 이해 능력 부여
- **범위**: 설치부터 고급 활용까지 전체 워크플로우 다룸

## 주요 내용

### 1. 배경 및 맥락

#### Code Context란?
- Zilliz에서 개발한 오픈소스 MCP 서버
- 대규모 코드베이스에서 **시맨틱 검색** 지원
- AI 에이전트가 코드의 **문맥적 이해** 가능하게 함
- 기존 키워드 검색의 한계를 극복한 **의미 기반 검색**

#### 왜 필요한가?
- 대규모 프로젝트에서 관련 코드 찾기 어려움
- AI 코딩 도구의 제한된 컨텍스트 윈도우
- 코드의 의미와 관계를 이해하는 검색 필요
- 효율적인 코드 탐색과 이해 요구

### 2. 핵심 개념/기능

#### 핵심 기능
1. **시맨틱 코드 검색**
   - 자연어로 코드 기능 검색
   - 유사한 코드 패턴 발견
   - 문맥 기반 코드 이해

2. **증분 인덱싱 (Incremental Indexing)**
   - Merkle Tree 기반 효율적 인덱싱
   - 변경된 파일만 재인덱싱
   - 대규모 코드베이스 지원

3. **지능형 코드 청킹**
   - AST(Abstract Syntax Tree) 기반 분할
   - 언어별 최적화된 청킹
   - 의미 단위로 코드 분리

4. **다중 임베딩 제공자 지원**
   - OpenAI
   - VoyageAI
   - Ollama (로컬 실행)

#### 기술 아키텍처
```
┌─────────────────────────────────────┐
│         AI Coding Assistant         │
│    (Claude Code, Cursor, etc.)      │
└────────────────┬────────────────────┘
                 │ MCP Protocol
┌────────────────▼────────────────────┐
│      Code Context MCP Server        │
│  (@zilliz/code-context-mcp)         │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│    Code Context Core Engine         │
│  (@zilliz/code-context-core)        │
├─────────────────────────────────────┤
│ • AST Parser                        │
│ • Embedding Generator               │
│ • Vector Search                     │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│       Vector Database               │
│   (Zilliz Cloud / Milvus)           │
└─────────────────────────────────────┘
```

### 3. 구현 방법/활용법

#### 설치 방법

##### 1. 사전 준비
```bash
# Node.js 18+ 필요
node --version

# npm 또는 yarn 설치 확인
npm --version
```

##### 2. MCP 서버 설치
```bash
# npx를 통한 직접 실행 (권장)
npx @zilliz/code-context-mcp@latest

# 또는 전역 설치
npm install -g @zilliz/code-context-mcp
```

##### 3. 환경 변수 설정
```bash
# .env 파일 생성
cat > ~/.code-context.env << EOF
# 임베딩 제공자 설정
EMBEDDING_PROVIDER=openai
OPENAI_API_KEY=your-openai-api-key

# 벡터 데이터베이스 설정
VECTOR_DB_PROVIDER=zilliz
ZILLIZ_ENDPOINT=your-zilliz-endpoint
ZILLIZ_API_KEY=your-zilliz-api-key
ZILLIZ_COLLECTION_NAME=code_context

# 옵션: 로컬 Ollama 사용 시
# EMBEDDING_PROVIDER=ollama
# OLLAMA_MODEL=nomic-embed-text
EOF
```

##### 4. Claude Code 설정
```json
// claude_desktop_config.json에 추가
{
  "mcpServers": {
    "code-context": {
      "command": "npx",
      "args": ["@zilliz/code-context-mcp@latest"],
      "env": {
        "EMBEDDING_PROVIDER": "openai",
        "OPENAI_API_KEY": "your-key",
        "VECTOR_DB_PROVIDER": "zilliz",
        "ZILLIZ_ENDPOINT": "your-endpoint",
        "ZILLIZ_API_KEY": "your-key"
      }
    }
  }
}
```

#### 사용법

##### 1. 코드베이스 인덱싱
```typescript
// Claude Code에서 사용
// "프로젝트 폴더를 인덱싱해줘"
await mcp.indexCodebase({
  path: "/path/to/project",
  splitter: "ast"  // 또는 "langchain"
});
```

##### 2. 시맨틱 검색
```typescript
// "사용자 인증 관련 코드 찾아줘"
const results = await mcp.searchCode({
  path: "/path/to/project",
  query: "user authentication login session",
  limit: 10
});
```

##### 3. 인덱스 관리
```typescript
// 인덱스 초기화
await mcp.clearIndex({
  path: "/path/to/project"
});
```

### 4. 사례 및 예시

#### 실전 활용 시나리오

##### 시나리오 1: 대규모 리팩토링
```bash
# 1. 프로젝트 인덱싱
"이 React 프로젝트를 인덱싱해줘"

# 2. 패턴 검색
"클래스 컴포넌트를 사용하는 모든 파일 찾아줘"

# 3. 의존성 분석
"useState 훅을 사용하는 컴포넌트들 보여줘"

# 4. 리팩토링 실행
"찾은 클래스 컴포넌트를 함수형으로 변환해줘"
```

##### 시나리오 2: 버그 수정
```bash
# 1. 오류 패턴 검색
"try-catch 블록이 없는 비동기 함수 찾아줘"

# 2. 관련 코드 탐색
"에러 핸들링 미들웨어 구현 보여줘"

# 3. 수정 적용
"찾은 함수들에 적절한 에러 핸들링 추가해줘"
```

##### 시나리오 3: 기능 구현 확인
```bash
# 1. 기능 검색
"JWT 토큰 검증 로직이 구현되어 있나?"

# 2. 보안 검토
"SQL 인젝션 방지 코드가 있는지 확인해줘"

# 3. 성능 분석
"N+1 쿼리 문제가 있을 수 있는 코드 찾아줘"
```

#### 검색 쿼리 예시
```typescript
// 1. 특정 기능 검색
"payment processing stripe integration"

// 2. 디자인 패턴 검색
"singleton pattern getInstance"

// 3. 보안 취약점 검색
"eval dynamic code execution"

// 4. 성능 이슈 검색
"nested loops O(n²) complexity"

// 5. API 엔드포인트 검색
"REST API POST user registration"
```

### 5. 장단점 분석

#### 장점
1. **깊은 코드 이해**
   - 단순 텍스트 매칭이 아닌 의미 기반 검색
   - 코드의 문맥과 관계 파악

2. **효율적인 탐색**
   - 대규모 코드베이스에서도 빠른 검색
   - 관련 코드 자동 발견

3. **AI 통합**
   - Claude Code와 완벽한 통합
   - 자연어로 코드 검색 가능

4. **증분 인덱싱**
   - 변경사항만 업데이트
   - 리소스 효율적

#### 단점
1. **초기 설정 복잡도**
   - API 키와 데이터베이스 설정 필요
   - 환경 변수 관리 필요

2. **외부 의존성**
   - 임베딩 API 비용 발생
   - 벡터 데이터베이스 필요

3. **인덱싱 시간**
   - 대규모 프로젝트 초기 인덱싱 시간 소요
   - 임베딩 생성 비용

### 6. 향후 전망/발전 방향

#### 예상 발전 방향
1. **더 많은 언어 지원**
   - 현재 지원 언어 외 추가 언어
   - 언어별 최적화 강화

2. **로컬 실행 옵션**
   - 완전한 오프라인 지원
   - 프라이버시 강화

3. **고급 분석 기능**
   - 코드 품질 메트릭
   - 보안 취약점 자동 탐지

4. **IDE 통합 확대**
   - 더 많은 에디터 지원
   - 실시간 코드 제안

### 7. 실무 적용점

#### 즉시 적용 가능한 사용 사례
1. **코드 리뷰 자동화**
   ```bash
   "이번 PR에서 변경된 함수들과 유사한 패턴 찾아줘"
   ```

2. **문서화 지원**
   ```bash
   "이 API의 모든 엔드포인트와 사용 예시 정리해줘"
   ```

3. **테스트 커버리지 개선**
   ```bash
   "테스트가 없는 public 메서드 모두 찾아줘"
   ```

4. **의존성 분석**
   ```bash
   "이 모듈을 사용하는 모든 파일 목록 보여줘"
   ```

## 구현 체크리스트
- [x] Code Context MCP 서버 이해
- [ ] Zilliz Cloud 계정 생성 및 설정
- [ ] OpenAI API 키 준비
- [ ] Claude Code에 MCP 서버 추가
- [ ] 테스트 프로젝트로 인덱싱 실습
- [ ] 시맨틱 검색 활용 연습
- [ ] 실제 프로젝트에 적용

## 연결된 노트
- **상위 개념**: [[MCP 시스템]], [[AI 코딩 도구]]
- **하위 세부사항**: [[벡터 검색 기술]], [[AST 파싱]]
- **병렬 주제**: [[Claude Code GitHub MCP 추가 + Agent 기능 활용법]], [[YouTube MCP Server 활용 가이드]]
- **실전 활용**: [[대규모 코드베이스 관리]], [[AI 기반 코드 분석]]

## 참고 자료
- [Code Context GitHub Repository](https://github.com/zilliztech/code-context)
- [Zilliz Cloud Documentation](https://docs.zilliz.com/)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)
- [OpenAI Embeddings Guide](https://platform.openai.com/docs/guides/embeddings)

## 추가 팁과 트릭

### 효과적인 검색 쿼리 작성법
1. **구체적인 키워드 사용**
   ```
   ❌ "데이터 처리"
   ✅ "PostgreSQL 트랜잭션 롤백 처리"
   ```

2. **기술 스택 명시**
   ```
   ❌ "API 호출"
   ✅ "axios POST 요청 에러 핸들링"
   ```

3. **의도 포함**
   ```
   ❌ "로그인"
   ✅ "JWT 토큰 기반 사용자 인증 미들웨어"
   ```

### 성능 최적화 팁
1. **선택적 인덱싱**
   - `node_modules`, `dist` 등 제외
   - 핵심 소스 코드만 인덱싱

2. **배치 검색**
   - 여러 검색을 한 번에 수행
   - 결과 캐싱 활용

3. **증분 업데이트**
   - 전체 재인덱싱 대신 변경분만 업데이트
   - Git 훅과 연동하여 자동화

---

## 변경 이력
- 2025-01-29: 초안 작성 및 완성