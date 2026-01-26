---
title: Factory CLI + CLIProxyAPI 완벽 가이드 - 초보자도 따라하는 AI 구독 활용법
created: '2025-01-13'
last_modified: '2025-01-13'
tags:
  - Claude-Code
  - Factory-CLI
  - CLIProxyAPI
  - 프록시
  - API
  - 자동화
  - 개발도구
  - 튜토리얼
  - 초보자가이드
  - AI도구
  - ChatGPT
  - Anthropic
status: 완료
type: 가이드
priority: high
source: https://github.com/luispater/CLIProxyAPI
share_link: ""
version: v6.0.15+
---

# Factory CLI + CLIProxyAPI 완벽 초보 가이드 📚

> **"월 3만원 구독으로 수백만원 API처럼 사용하는 마법의 다리 🌉"**
> 이 가이드는 완전 초보자도 쉽게 이해하고 따라할 수 있도록 파인만 기법으로 작성되었습니다.

## ⚠️ 매우 중요한 경고사항 - 반드시 읽어주세요!

> **이 방법을 사용하기 전 반드시 알아야 할 위험사항**
>
> 🔴 **서비스 약관 위반 위험**
> - Anthropic(Claude), OpenAI(ChatGPT) 등의 서비스 약관을 위반할 수 있습니다
> - 이는 교육 및 실험 목적으로만 사용해야 합니다
>
> 🔴 **계정 정지 위험**
> - AI 제공업체가 이러한 사용 패턴을 감지할 수 있습니다
> - 계정 정지, 영구 차단, 유료 구독 손실이 발생할 수 있습니다
>
> 🔴 **예고 없는 중단**
> - API나 인증 방식이 언제든 변경될 수 있습니다
> - 갑자기 작동하지 않을 수 있습니다
>
> **⚡ 모든 책임은 사용자 본인에게 있습니다**

## 📋 목차
1. [[#이야기로 시작하기 넷플릭스처럼 AI 사용하기]]
2. [[#전체 그림 이해하기 5살 아이 버전]]
3. [[#핵심 개념 정리표]]
4. [[#사전 준비물 체크리스트]]
5. [[#단계별 설치 가이드 3단계 버전]]
6. [[#실전 문제 해결 가이드]]
7. [[#고급 활용 팁]]
8. [[#최종 점검 체크리스트]]

## 이야기로 시작하기 넷플릭스처럼 AI 사용하기

친구가 영화관을 운영한다고 상상해보세요. 🎬

**일반적인 방식 (API 키 구매)**:
- 영화 한 편 볼 때마다 티켓 구매 (토큰당 과금)
- 매우 비쌈 (월 수십~수백만원)
- 기업용, 대량 사용자용

**우리가 배울 방식 (구독 + 프록시)**:
- 넷플릭스처럼 월정액 구독 (월 3-4만원)
- 무제한 시청 가능
- 단, TV가 아닌 컴퓨터에서 보려면 특별한 연결장치(프록시) 필요

바로 이것이 **Factory CLI + CLIProxyAPI**의 역할입니다!

## 전체 그림 이해하기 5살 아이 버전

> "집에서 넷플릭스 보려면 TV, 리모컨, 인터넷이 필요하지? AI도 비슷해!"

### 🎯 각 부품의 역할

```
🖥️ Factory CLI (Droid)
    = TV 리모컨
    = 명령어로 AI와 대화하는 도구
    ↓
🔌 CLIProxyAPI
    = 스마트 TV 박스 (크롬캐스트 같은)
    = 구독을 API처럼 변환해주는 마법의 다리
    ↓
🤖 Claude/ChatGPT
    = 넷플릭스 서버
    = 실제 AI가 있는 곳
```

### 🔄 데이터 흐름 (물 흐르듯이)

```
당신이 질문 입력
    → Factory가 받아서
    → CLIProxyAPI가 번역해서
    → Claude/ChatGPT에 전달
    → 답변이 거꾸로 되돌아옴
```

## 핵심 개념 정리표

### 용어 사전 (처음 보는 사람용)

| 용어 | 쉬운 설명 | 비유 | 왜 필요한가? |
|------|----------|------|-------------|
| **Factory CLI (Droid)** | 터미널 명령어 도구 | TV 리모컨 | AI와 대화하기 위해 |
| **CLIProxyAPI** | 중간 연결 프로그램 | 통역사/어댑터 | 구독을 API로 변환 |
| **OAuth** | 로그인 방식 | 집 열쇠 | 안전한 인증 |
| **Bearer Token** | 임시 통행증 | 놀이공원 팔찌 | API 접근 권한 |
| **Port (포트)** | 프로그램 문 번호 | 아파트 호수 | 프로그램끼리 구분 |
| **localhost** | 내 컴퓨터 | 우리집 | 외부 접속 차단 |

### 지원 모델 목록 (2025년 1월 기준)

#### Claude (Anthropic) 모델
- `claude-sonnet-4-5-20250929` - Claude 4.5 Sonnet (최신, v6.0.15+ 필요)
- `claude-opus-4-1-20250805` - Claude 4.1 Opus
- `claude-sonnet-4-20250514` - Claude 4 Sonnet

#### ChatGPT (OpenAI) 모델
- `gpt-5` - GPT-5 기본
- `gpt-5-codex` - GPT-5 코딩 특화
- `gpt-5-minimal/low/medium/high` - 추론 노력 레벨별
- `gpt-5-codex-low/medium/high` - 코딩용 레벨별

## 사전 준비물 체크리스트

### 필수 준비물 ✅

- [ ] **운영체제**: Linux, macOS, 또는 Windows WSL2
- [ ] **Go 언어**: 1.24 버전 이상 (최신 1.25.1 권장)
- [ ] **Git**: 코드 다운로드용
- [ ] **구독**:
  - Claude Code Max 또는 Claude Pro (Anthropic)
  - ChatGPT Plus 또는 Pro (OpenAI)
- [ ] **Factory CLI**: 설치 필요
- [ ] **인터넷**: HTTPS 포트 열려있어야 함

### 포트 정보 📍
- **8317**: CLIProxyAPI 기본 포트
- **54545**: Anthropic OAuth 콜백
- **1455**: OpenAI OAuth 콜백

## 단계별 설치 가이드 3단계 버전

### 🌱 기초 예제: 첫 설치 (초보자용)

#### Step 1: Go 언어 설치

```bash
# macOS 사용자
brew install go

# Linux 사용자 (최신 버전)
wget https://go.dev/dl/go1.25.1.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.25.1.linux-amd64.tar.gz

# 환경변수 설정 (중요!)
export PATH=/usr/local/go/bin:$PATH
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$PATH

# 설치 확인
go version
# 출력: go version go1.25.1 linux/amd64
```

> 🤔 **왜 Go가 필요한가요?**
> CLIProxyAPI가 Go로 만들어졌어요. 마치 한국 요리하려면 한국 조미료가 필요한 것처럼!

#### Step 2: CLIProxyAPI 다운로드 및 빌드

```bash
# 1. 코드 다운로드 (Git으로)
git clone https://github.com/luispater/CLIProxyAPI.git
cd CLIProxyAPI

# 2. 프로그램 빌드 (조립하기)
go build -o cli-proxy-api ./cmd/server

# 3. 실행 권한 주기
chmod +x cli-proxy-api
```

> ⚠️ **중요**: Claude 4.5 Sonnet 지원은 v6.0.15+ 버전 필요!

#### Step 3: Factory CLI 설치

```bash
# 공식 설치 스크립트
curl -fsSL https://app.factory.ai/cli | sh

# 또는 npm으로 설치
npm install -g @factory-ai/cli

# 설치 확인
droid --version
```

### 🌿 중급 예제: 설정 및 인증 (실무 적용)

#### Step 4: 설정 파일 만들기

```yaml
# config.yaml 파일 생성
cat > config.yaml << 'EOF'
port: 8317
remote-management:
  allow-remote: false
  secret-key: ""
auth-dir: "~/.cli-proxy-api"
debug: false                    # true로 하면 자세한 로그
logging-to-file: false         # true로 하면 파일에 로그 저장
usage-statistics-enabled: true
proxy-url: ""
request-retry: 3               # 실패시 재시도 횟수
quota-exceeded:
  switch-project: true         # 할당량 초과시 프로젝트 전환
  switch-preview-model: true   # 할당량 초과시 모델 전환
auth:
  providers: []
generative-language-api-key: []
EOF

echo "✅ config.yaml 파일이 생성되었습니다!"
```

#### Step 5: OAuth 인증 (로그인)

##### Claude (Anthropic) 인증
```bash
# 브라우저가 자동으로 열립니다
./cli-proxy-api --claude-login

# 성공 메시지:
# "Authentication successful! Token saved to ~/.cli-proxy-api/claude-<email>.json"
```

##### ChatGPT (OpenAI) 인증
```bash
# 브라우저가 자동으로 열립니다
./cli-proxy-api --codex-login

# 성공 메시지:
# "Authentication successful! Token saved to ~/.cli-proxy-api/codex-<email>.json"
```

> 💡 **Tip: 원격 서버(SSH)에서 인증하기**
>
> 1. 로그인 명령 실행: `./cli-proxy-api --claude-login`
> 2. 출력된 URL 복사
> 3. 로컬 브라우저에서 URL 열기
> 4. 로그인 후 나온 `http://127.0.0.1:54545/callback?...` URL 복사
> 5. SSH에서: `curl '복사한_URL'`

#### Step 6: Factory CLI 설정

```bash
# Factory 설정 폴더 생성
mkdir -p ~/.factory

# 설정 파일 생성
cat > ~/.factory/config.json << 'EOF'
{
  "custom_models": [
    {
      "model": "claude-sonnet-4-5-20250929",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    },
    {
      "model": "claude-opus-4-1-20250805",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    },
    {
      "model": "gpt-5",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-codex",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    }
  ]
}
EOF

echo "✅ Factory CLI 설정 완료!"
```

> 🎯 **주의사항**:
> - Anthropic: base_url이 `/`로 끝남
> - OpenAI: base_url이 `/v1`로 끝남 (중요!)
> - api_key는 "dummy-not-used" 그대로 사용 (실제로는 안 씀)

### 🌳 고급 예제: 실행 및 자동화 (심화 학습)

#### Step 7: 프록시 서버 실행

```bash
# 기본 실행
./cli-proxy-api --config config.yaml

# 백그라운드 실행 (추천)
nohup ./cli-proxy-api --config config.yaml > proxy.log 2>&1 &

# 디버그 모드 (문제 해결용)
./cli-proxy-api --config config.yaml --debug
```

#### Step 8: Factory CLI로 테스트

```bash
# Factory CLI 시작
droid

# 모델 선택
/model
# claude-sonnet-4-5-20250929 선택

# 테스트 질문
"안녕하세요! 오늘 날씨 어때요?"

# 성공하면 AI의 답변이 나옵니다!
```

#### 완전 자동화 설치 스크립트

```bash
#!/bin/bash
# install-all.sh - 한 번에 모두 설치

set -e  # 에러 발생시 중단

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🚀 Factory CLI + CLIProxyAPI 자동 설치 시작${NC}"

# 1. Go 설치 확인
if ! command -v go &> /dev/null; then
    echo -e "${YELLOW}Go 설치 중...${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install go
    else
        wget https://go.dev/dl/go1.25.1.linux-amd64.tar.gz
        sudo tar -C /usr/local -xzf go1.25.1.linux-amd64.tar.gz
        export PATH=/usr/local/go/bin:$PATH
    fi
fi
echo -e "${GREEN}✅ Go 설치 완료${NC}"

# 2. CLIProxyAPI 설치
echo -e "${YELLOW}CLIProxyAPI 설치 중...${NC}"
git clone https://github.com/luispater/CLIProxyAPI.git
cd CLIProxyAPI
go build -o cli-proxy-api ./cmd/server
echo -e "${GREEN}✅ CLIProxyAPI 빌드 완료${NC}"

# 3. 설정 파일 생성
echo -e "${YELLOW}설정 파일 생성 중...${NC}"
cat > config.yaml << 'EOF'
port: 8317
remote-management:
  allow-remote: false
auth-dir: "~/.cli-proxy-api"
debug: false
request-retry: 3
EOF
echo -e "${GREEN}✅ 설정 파일 생성 완료${NC}"

# 4. Factory CLI 설치
echo -e "${YELLOW}Factory CLI 설치 중...${NC}"
curl -fsSL https://app.factory.ai/cli | sh
echo -e "${GREEN}✅ Factory CLI 설치 완료${NC}"

# 5. Factory 설정
mkdir -p ~/.factory
cat > ~/.factory/config.json << 'EOF'
{
  "custom_models": [
    {
      "model": "claude-sonnet-4-5-20250929",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    }
  ]
}
EOF
echo -e "${GREEN}✅ Factory 설정 완료${NC}"

echo -e "${GREEN}🎉 모든 설치가 완료되었습니다!${NC}"
echo -e "${YELLOW}다음 단계:${NC}"
echo "1. Claude 인증: ./cli-proxy-api --claude-login"
echo "2. 서버 시작: ./cli-proxy-api --config config.yaml"
echo "3. Factory 실행: droid"
```

## 실전 문제 해결 가이드

### ⚠️ 자주 발생하는 문제와 해결법

#### 문제 1: "404 /responses" 오류

```bash
# 원인: OpenAI base_url에 /v1 누락
# 해결: ~/.factory/config.json 수정

"base_url": "http://localhost:8317"     # ❌ 잘못됨
"base_url": "http://localhost:8317/v1"  # ✅ 올바름
```

#### 문제 2: "401 Unauthorized" 또는 "403 Forbidden"

```bash
# 원인: OAuth 토큰 만료
# 해결: 재인증

# 기존 토큰 삭제
rm -rf ~/.cli-proxy-api/*.json

# 다시 로그인
./cli-proxy-api --claude-login
./cli-proxy-api --codex-login
```

#### 문제 3: "Port 8317 already in use"

```bash
# 원인: 포트가 이미 사용 중
# 해결법 1: 기존 프로세스 종료
lsof -i :8317
kill -9 [PID]

# 해결법 2: 다른 포트 사용
# config.yaml 수정
port: 8318  # 다른 번호로 변경

# Factory 설정도 함께 변경
"base_url": "http://localhost:8318"
```

#### 문제 4: "Unsupported parameter: max_output_tokens"

```bash
# 원인: ChatGPT가 토큰 제한 필드 거부
# 해결: CLIProxyAPI v6.0.10+ 사용 (자동 수정됨)

# 버전 확인
cd CLIProxyAPI
git pull
git checkout v6.0.15
go build -o cli-proxy-api ./cmd/server
```

#### 문제 5: "A.match is not a function"

```bash
# 원인: Factory CLI 버그
# 해결: 디버그 로그 확인

# config.yaml에서 debug 활성화
debug: true
request-log: true

# 로그 확인
tail -f logs/*.log
```

### 🔍 디버그 체크리스트

1. **프록시 실행 중인가?**
   ```bash
   ps aux | grep cli-proxy-api
   ```

2. **포트 열려있는가?**
   ```bash
   netstat -an | grep 8317
   ```

3. **토큰 파일 있는가?**
   ```bash
   ls -la ~/.cli-proxy-api/
   ```

4. **Factory 설정 맞는가?**
   ```bash
   cat ~/.factory/config.json | jq .
   ```

## 고급 활용 팁

### 💡 생산성 향상 기법

#### 1. 별칭(Alias) 설정

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
alias ai="droid"
alias claude="droid --model claude-sonnet-4-5-20250929"
alias gpt="droid --model gpt-5"
alias code-review="droid --model gpt-5-codex --system 'You are a code reviewer'"

# 사용 예시
claude "Python으로 웹서버 만들어줘"
code-review < main.py
```

#### 2. systemd 서비스 등록 (Linux)

```ini
# /etc/systemd/system/cli-proxy-api.service
[Unit]
Description=CLI Proxy API for Factory
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/home/your-username/CLIProxyAPI
ExecStart=/home/your-username/CLIProxyAPI/cli-proxy-api --config config.yaml
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
# 서비스 등록 및 시작
sudo systemctl daemon-reload
sudo systemctl enable cli-proxy-api
sudo systemctl start cli-proxy-api
sudo systemctl status cli-proxy-api
```

#### 3. Docker 컨테이너화

```dockerfile
# Dockerfile
FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o cli-proxy-api ./cmd/server

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root
COPY --from=builder /app/cli-proxy-api .
COPY config.yaml .
EXPOSE 8317
CMD ["./cli-proxy-api", "--config", "config.yaml"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  cli-proxy-api:
    build: .
    ports:
      - "8317:8317"
    volumes:
      - ~/.cli-proxy-api:/root/.cli-proxy-api
      - ./config.yaml:/root/config.yaml
    restart: unless-stopped
```

```bash
# 실행
docker-compose up -d
```

#### 4. Python 연동 스크립트

```python
#!/usr/bin/env python3
# ai_helper.py - Python에서 Factory CLI 사용

import subprocess
import json

def ask_ai(prompt, model="claude-sonnet-4-5-20250929"):
    """AI에게 질문하고 답변 받기"""
    cmd = [
        "droid",
        "--model", model,
        "--json",
        prompt
    ]

    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True
    )

    if result.returncode == 0:
        return json.loads(result.stdout)
    else:
        return {"error": result.stderr}

# 사용 예시
response = ask_ai("파이썬으로 피보나치 함수 만들어줘")
print(response['content'])
```

#### 5. Git 커밋 메시지 자동 생성

```bash
#!/bin/bash
# git-ai-commit.sh

# 변경사항 가져오기
changes=$(git diff --staged)

if [ -z "$changes" ]; then
    echo "No staged changes"
    exit 1
fi

# AI에게 커밋 메시지 요청
message=$(echo "$changes" | droid \
    --model claude-sonnet-4-5-20250929 \
    --system "You are a git commit message writer. Write a concise, clear commit message in conventional commits format." \
    "Write a commit message for these changes" \
    --json | jq -r '.content')

# 커밋 실행
git commit -m "$message"
echo "Committed with message: $message"
```

## 보안 및 주의사항

### 🔒 보안 체크리스트

- [ ] 토큰 파일 권한 확인 (`chmod 600 ~/.cli-proxy-api/*.json`)
- [ ] 프록시는 localhost만 접근 가능 (외부 차단)
- [ ] 토큰을 Git에 커밋하지 않기 (.gitignore 추가)
- [ ] 정기적으로 토큰 갱신하기
- [ ] 로그 파일에 민감정보 없는지 확인

### ⚠️ 사용 제한사항

1. **개인 용도로만 사용**
2. **상업적 사용 금지**
3. **과도한 요청 자제** (rate limit 주의)
4. **토큰 공유 절대 금지**

## 최종 점검 체크리스트

### ✅ 설치 완료 확인

- [ ] Go 설치 (`go version`)
- [ ] Git 설치 (`git --version`)
- [ ] CLIProxyAPI 빌드 완료
- [ ] config.yaml 생성
- [ ] OAuth 인증 완료
- [ ] Factory CLI 설치 (`droid --version`)
- [ ] Factory 설정 완료
- [ ] 프록시 서버 실행
- [ ] 테스트 질문 성공

### 🎯 학습 목표 달성

- [ ] Factory CLI가 무엇인지 이해
- [ ] CLIProxyAPI 역할 이해
- [ ] OAuth 인증 과정 이해
- [ ] 전체 데이터 흐름 이해
- [ ] 문제 해결 능력 습득
- [ ] 실제 사용 가능

### 📊 성능 테스트

```bash
# 응답 시간 테스트
time echo "Hello" | droid --model claude-sonnet-4-5-20250929

# 연속 요청 테스트
for i in {1..5}; do
    echo "Test $i" | droid --model gpt-5
done

# 로그 확인
tail -f ~/.cli-proxy-api/logs/*.log
```

## 다음 단계 학습 로드맵

### 🚀 추천 학습 경로

1. **기초 완성** (현재 완료)
   - 설치 및 설정
   - 기본 사용법

2. **중급 스킬** (다음 단계)
   - 멀티 모델 전환
   - 스크립트 자동화
   - 에러 핸들링

3. **고급 기술**
   - 로드밸런싱
   - 캐싱 최적화
   - 커스텀 미들웨어

4. **전문가 레벨**
   - 클러스터링
   - 모니터링 (Prometheus/Grafana)
   - CI/CD 파이프라인

## 참고 자료

### 📚 공식 문서
- [CLIProxyAPI GitHub](https://github.com/luispater/CLIProxyAPI)
- [Factory CLI 문서](https://docs.factory.ai/cli)
- [Anthropic API 문서](https://docs.anthropic.com)
- [OpenAI API 문서](https://platform.openai.com/docs)

### 🔗 관련 가이드
- [[Claude_Code_CLI_활용_가이드]]
- [[Claude_Code_macOS_설치_가이드]]
- [[Claude_Code_Windows_WSL_설치_완벽_가이드]]
- [[Claude_Code_Sub-Agents_완전_가이드북_8.1]]

### 🛠️ 문제 해결
- [[(오류)Claude Code 오류 해결]]
- [[Claude_Code_완전_삭제_및_설치_가이드북]]

### 💼 실전 활용
- [[Claude Code로 90분만에 MVP 앱 구축하기 - 실전 가이드]]
- [[Claude Code로 월 380만원 수익 앱 1시간 만들기]]
- [[Claude Code로 블로그 자동화하기]]

---

## 커뮤니티 지원

### 💬 도움이 필요하신가요?

- **GitHub Issues**: [CLIProxyAPI Issues](https://github.com/luispater/CLIProxyAPI/issues)
- **Discord**: Factory CLI 커뮤니티
- **Reddit**: r/LocalLLM

### 🤝 기여하기

이 가이드를 개선하고 싶으시다면:
1. 오류나 개선점 발견시 피드백 주세요
2. 새로운 활용법을 공유해주세요
3. 번역이나 추가 설명을 도와주세요

---

> **"복잡한 것을 단순하게 설명할 수 없다면, 충분히 이해하지 못한 것이다."**
> - 리처드 파인만

**마지막 업데이트**: 2025-01-13
**다음 업데이트 예정**:
- Kubernetes 배포 가이드
- 멀티 유저 환경 설정
- 고급 모니터링 설정

💡 **최종 조언**: 처음엔 어려워 보여도 한 단계씩 따라하면 반드시 성공합니다. 막히는 부분이 있다면 에러 메시지를 잘 읽고, 이 가이드의 문제 해결 섹션을 참고하세요. 화이팅! 🚀