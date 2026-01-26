---
title: "Claude Code를 윈도우즈에서 쉽게 설치하기"
created: '2025-01-26'
last_modified: '2025-01-26'
tags:
  - Claude-Code
  - 개발도구/설치
  - Windows
  - AI코딩
  - 설치가이드
  - 초보자
status: "완료"
type: "가이드"
priority: "high"
---


# Claude Code를 윈도우즈에서 쉽게 설치하기

## 🚀 준비 사항
- **Claude Code 사용 준비**
  - Windows 환경에서 Node.js 18 버전 이상 필수
  - Anthropic 계정 및 API 키 (또는 Claude Pro/Max 멤버십)
  - **관련 자료 수집**: 공식 문서, YouTube 튜토리얼, 커뮤니티 가이드 참고
  - **실습 환경 준비**: Cursor IDE, GitHub 계정, Netlify 계정

## 💡 실행 단계

### Claude Code 학습 3단계 이해
- **1단계: 핵심 개념 및 전체 구조 파악**
  - Claude Code의 작동 원리와 기본 명령어 이해
  - CLI 도구로서의 장점과 활용 범위 파악
- **2단계: 다른 AI 코딩 도구와의 공통점과 차이점 이해**
  - GitHub Copilot, Cursor AI와의 비교
  - Claude Code만의 독특한 기능 (MCP, 파일 시스템 직접 접근)
- **3단계: 실전 프로젝트로 질문하고 설명하기**
  - 무더위쉼터 찾기 웹앱 프로젝트 실습
  - 프롬프트 작성법과 코드 생성 패턴 학습

## 주요 내용

### 1. Claude Code로 전체 흐름 파악하기
- **공식 문서 활용**
  - Anthropic 공식 문서에서 핵심 용어 확인
  - CLI, MCP, API 키 등 기본 개념 이해
- **YouTube 튜토리얼 활용**
  - 필로소피 AI 교육 영상으로 전체 흐름 파악
  - 설치부터 배포까지 전 과정 시청
- **커뮤니티 가이드 확인**
  - GitHub Issues, Discord 등에서 FAQ 확인
  - 사용자들의 경험과 팁 수집

### 2. 핵심 프롬프트 활용으로 깊이 있는 학습
- **프롬프트 1: "다른 AI 코딩 도구와 달리 Claude Code만의 가장 중요한 기능은 무엇인가요?"**
  - 파일 시스템 직접 접근의 강점 파악
  - MCP 서버를 통한 확장성 이해
  - Cursor 유료 버전 대체 가능성 탐구

- **프롬프트 2: "Claude Pro 회원과 API 키 사용자의 차이점은 무엇이고, 각각 어떤 장단점이 있나요?"**
  - 비용 효율성 비교
  - 사용 제한 및 기능 차이 파악
  - 개인 상황에 맞는 선택 기준 제시

- **프롬프트 3: "이 사이트를 좀 더 세련되게 만들어줘라고 요청했을 때 Claude Code가 어떤 근거로 디자인을 개선하나요?"**
  - AI의 디자인 개선 로직 이해
  - 효과적인 프롬프트 작성법
  - 바이브 코딩의 핵심 원리

- **프롬프트 4: "Claude Code를 비판하는 사람들의 주장과 그 근거는 무엇인가요?"**
  - CLI 환경의 진입장벽
  - API 키 관리의 복잡성
  - 개선 방향과 대안 탐색

### 3. 구현 방법/활용법

#### Step 1: Node.js 설치하기
- [Node.js 공식 사이트](https://nodejs.org)에서 Windows용 설치 파일 다운로드
- LTS(Long Term Support) 버전 권장
- 설치 시 "Add to PATH" 옵션 체크 필수

#### Step 2: Claude Code 설치하기
```bash
# cmd 창에서 실행
npm install -g @anthropic-ai/claude-code
```
- 전역 설치(-g)로 어디서든 실행 가능
- 설치 완료 후 'claude' 명령어 사용 가능

#### Step 3: Claude Code 실행하기
```bash
# cmd 창에서 실행
claude
```
- 처음 실행 시 API 키 입력 필요
- [Anthropic Console](https://console.anthropic.com)에서 API 키 발급

#### Step 4: Cursor에서 Claude 불러오기
- Cursor IDE에서 Claude Code Extension 설치
- Extensions 메뉴에서 "Claude Code" 검색
- 설치 후 설정에서 API 키 입력

#### Step 5: 실전 프로젝트 - 학습앱 만들기
- HTML, CSS, JavaScript를 활용한 웹앱 개발
- Claude Code로 코드 생성 및 수정
- Netlify를 통한 배포까지 완성

##### 영상에서 보여준 Claude Code 활용 팁

1. **효과적인 프롬프트 사용**
   ```
   "이 사이트를 좀 더 세련되게 만들어줘"
   ```
   - 간단한 명령으로도 전체적인 디자인 개선 가능
   - Claude Code가 자동으로 폰트, 색상, 레이아웃 개선

2. **권한 관리 옵션**
   - `1`: 개별 파일 수정 승인
   - `2`: 모든 변경사항 자동 승인
   - `3`: 다른 작업으로 전환

3. **바이브 코딩(Vibe Coding) 개념**
   - AI와 대화하며 실시간으로 코드 작성
   - 프로그래밍 지식 없이도 웹사이트 제작 가능
   - "우리가 만들지 못했던 것들을 만들 수 있는 시대"

### 4. 사례 및 예시

#### 무더위쉼터 찾기 웹앱 프로젝트
- **참고 영상**: [Claude Code를 활용한 바이브 코딩](https://youtu.be/ktKhthCeX4U)
- **제작자**: 필로소피 AI 교육
- **영상 길이**: 약 15분
- **주요 내용**:
  - Windows에서 Claude Code 설치부터 실제 웹사이트 제작까지 전 과정 시연
  - 공공데이터포털의 무더위쉼터 정보 활용
  - HTML, CSS, JavaScript를 활용한 웹앱 개발
  - Cursor IDE와 Claude Code Extension 연동
  - GitHub 저장소 생성 및 Netlify 배포

##### 영상에서 다룬 핵심 내용

1. **Claude Code 설치 과정**
   - Anthropic 공식 문서 참조
   - Node.js 18버전 이상 필수
   - CMD에서 간단한 명령어로 설치

2. **Cursor와 Claude Code 통합**
   - Cursor의 유료 버전 없이도 Claude 유료 회원은 활용 가능
   - Claude Code Extension 설치로 편리한 코드 편집
   - 터미널에서 `claude` 명령으로 즉시 실행

3. **실습 프로젝트: 무더위쉼터 찾기 사이트**
   - 공공데이터포털에서 서울시 무더위쉼터 데이터 활용
   - CSV 파일로 20개 쉼터 정보 표시
   - Claude Code에 "사이트를 좀 더 세련되게 만들어줘" 명령
   - 자동으로 UI/UX 개선 및 스타일링 적용

4. **배포 프로세스**
   - 4개 파일(HTML, CSS, JS, CSV) GitHub에 업로드
   - Netlify와 GitHub 연동
   - 자동 배포로 즉시 웹사이트 공개

##### 프로젝트 파일 구조
```
shelter-finder/
├── index.html     # 메인 HTML 파일
├── style.css      # 스타일링
├── script.js      # 기능 구현
└── shelters.csv   # 무더위쉼터 데이터
```

### 5. 장단점 분석

#### 장점
- 터미널에서 직접 AI와 대화하며 코딩 가능
- 파일 시스템 직접 접근으로 빠른 편집
- MCP 서버를 통한 확장 기능
- 무료 사용 가능 (API 사용량 제한)
- **Cursor 유료 버전 대체 가능**: Claude 유료 회원은 Cursor 유료 기능 대부분 활용
- **초보자 친화적**: 영상처럼 간단한 명령어로 전문적인 웹사이트 제작

#### 단점
- 명령줄 인터페이스에 익숙하지 않은 사용자 진입장벽
- API 키 관리 필요
- 인터넷 연결 필수

### 6. 향후 전망/발전 방향
- 더 많은 IDE와의 통합 예정
- MCP 생태계 확장으로 더 많은 기능 추가
- 로컬 모델 지원 가능성

### 7. 실무 적용점
- 빠른 프로토타이핑
- 반복적인 코드 작업 자동화
- 코드 리뷰 및 디버깅 지원
- 학습 도구로 활용

## 학습 체크리스트

### 필수 준비 사항
- [x] Node.js 설치 및 PATH 설정 확인
- [x] Claude Code npm 패키지 전역 설치
- [x] API 키 발급 및 설정 (또는 Claude 계정 연동)

### 기본 학습 단계
- [ ] Claude Code 공식 문서 정독
- [ ] YouTube 튜토리얼 시청 및 따라하기
- [ ] 기본 명령어 실습 (`claude`, `claude --help`)
- [ ] 첫 번째 코드 생성 요청하기

### 심화 학습 단계
- [ ] Cursor IDE 설치 및 Claude Code Extension 추가
- [ ] MCP 서버 개념 이해 및 설치
- [ ] 프롬프트 최적화 기법 학습
- [ ] 다른 AI 코딩 도구와 비교 분석

### 실전 프로젝트 단계
- [ ] 공공데이터포털 회원가입 및 API 키 발급
- [ ] GitHub 계정 생성 및 저장소 설정
- [ ] Netlify 계정 생성 및 GitHub 연동
- [ ] 무더위쉼터 찾기 프로젝트 완성
- [ ] 자신만의 프로젝트 기획 및 구현

## 실습 프로젝트 단계별 가이드

### 핵심 프롬프트 활용 예시

#### 초급 프롬프트 (단순 요청)
```
"무더위쉼터 정보를 보여주는 웹사이트를 만들어줘"
```
- AI가 기본적인 HTML 구조 생성
- 단순한 요약으로 끝날 가능성

#### 중급 프롬프트 (구체적 요구사항)
```
"무더위쉼터 CSV 데이터를 읽어서 
HTML 테이블로 표시하고, 
검색 기능과 필터링을 추가해줘. 
반응형 디자인으로 만들어줘"
```
- 구체적인 기능 명시
- 여러 요구사항 동시 처리

#### 고급 프롬프트 (차별화된 요청)
```
"다른 무더위쉼터 사이트와 달리, 
우리 사이트만의 독특한 기능을 추가해줘:
1. 현재 위치에서 가장 가까운 쉼터 표시
2. 쉼터별 혼잡도 실시간 업데이트
3. 사용자 리뷰 및 평점 기능"
```
- 차별화 포인트 명확히 제시
- 세부 기능 단계별 설명

### 무더위쉼터 찾기 사이트 만들기

1. **데이터 준비**
   - [공공데이터포털](https://www.data.go.kr) 접속
   - "무더위쉼터" 검색 후 CSV 다운로드
   - 필요한 정보만 추출 (이름, 주소, 운영시간 등)

2. **기본 파일 생성**
   ```bash
   # Cursor에서 새 터미널 열기
   claude
   
   # Claude에게 요청
   "무더위쉼터 정보를 보여주는 웹사이트를 만들어줘. 
   HTML, CSS, JavaScript 파일을 생성하고 CSV 데이터를 읽어서 표시해줘"
   ```

3. **디자인 개선**
   ```bash
   "이 사이트를 좀 더 세련되게 만들어줘. 
   모던한 디자인에 반응형으로 만들고, 검색 기능도 추가해줘"
   ```

4. **GitHub 업로드**
   - 새 저장소 생성 (예: shelter-finder)
   - 4개 파일 업로드
   - Commit 후 저장

5. **Netlify 배포**
   - "Import an existing project" 클릭
   - GitHub 연동 및 저장소 선택
   - Deploy 클릭으로 자동 배포

## 문제 해결 가이드

### 자주 발생하는 오류
1. **'claude' is not recognized** 
   - 해결: npm 전역 경로를 PATH에 추가
   
2. **EACCES 권한 오류**
   - 해결: 관리자 권한으로 cmd 실행

3. **API 키 인증 실패**
   - 해결: API 키 재발급 및 올바른 입력 확인

## 학습 후 평가 질문
- "내가 만든 사이트에서 가장 중요한 코드 부분은 무엇인가요?"
- "Claude Code가 생성한 코드의 품질을 어떻게 평가하나요?"
- "다른 개발자들은 이 프로젝트를 어떻게 개선할 수 있을까요?"

## 학습 자료 추천
- **공식 문서**: [Anthropic Claude Code Docs](https://docs.anthropic.com/claude-code)
- **YouTube 튜토리얼**: 필로소피 AI 교육 채널
- **커뮤니티**: GitHub Discussions, Discord Claude 채널
- **실습 자료**: 공공데이터포털 API 문서

## 연결된 노트
- **상위 개념**: [[Claude Code 종합 가이드]]
- **하위 세부사항**: [[Claude Code MCP 서버 설정]]
- **병렬 주제**: [[왕초보를 위한 윈도우즈에서 클로드 코드 완벽 설치]]
- **실전 활용**: [[Claude Code를 활용한 프로젝트 사례집]]
- **학습 방법론**: [[노트북LM은 이렇게 쓰는 겁니다 (프롬프트 꿀팁 방출)]]