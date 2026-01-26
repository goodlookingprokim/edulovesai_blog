---
title: Claude Code 오류 해결 완벽 가이드
created: 2025-01-14
last_modified: 2025-01-14
tags:
  - Claude-Code
  - 오류해결
  - 개발도구
  - 문제해결
  - 성능최적화
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/td09qyve#D68lMDw2Fk7zT/aK+bweXFUy44cDpDqB15pMDTpMnkI
share_updated: 2025-09-27T19:10:18+09:00
---

# Claude Code 오류 해결 완벽 가이드

> **🎯 목표**: Claude Code 사용 중 발생하는 주요 오류들을 초보 개발자도 쉽게 해결할 수 있도록 단계별로 안내합니다.

## 📋 목차
1. [[#개요 및 주요 문제들]]
2. [[#가장 흔한 문제 속도 저하 해결]]
3. [[#설치 및 인증 문제 해결]]
4. [[#파일 권한 및 접근 문제]]
5. [[#네트워크 및 연결 문제]]
6. [[#메모리 및 성능 문제]]
7. [[#고급 문제 해결]]
8. [[#예방 및 유지관리]]

---

## 개요 및 주요 문제들

Claude Code 사용 중 자주 발생하는 문제들을 카테고리별로 정리했습니다.

### 🚨 가장 흔한 문제들
1. **속도 저하**: `.claude.json` 파일 크기 증가로 인한 성능 저하
2. **인증 오류**: API 키 만료 또는 설정 문제
3. **파일 접근 문제**: 권한 부족으로 인한 파일 읽기/쓰기 실패
4. **네트워크 오류**: 인터넷 연결 또는 방화벽 문제
5. **메모리 부족**: 대용량 파일 처리 시 시스템 리소스 부족

---

## 가장 흔한 문제 속도 저하 해결

### 🔍 문제 증상
- Claude Code 실행이 점점 느려짐
- 명령어 입력 후 응답 지연이 길어짐
- 파일 로드 시간이 오래 걸림

### 💡 원인 분석
`.claude.json` 파일에 대화 기록이 누적되어 파일 크기가 커지면서 발생하는 문제입니다.

### 🛠️ 해결 방법

#### **1단계: 파일 위치 찾기**

**macOS/Linux 사용자:**
```bash
# 홈 디렉토리에서 찾기
find ~ -name ".claude.json" -type f 2>/dev/null

# 또는 직접 확인
ls -la ~/.claude.json
```

**Windows 사용자:**
```cmd
# 사용자 폴더에서 찾기
dir C:\Users\%USERNAME%\.claude.json

# 또는 탐색기에서 다음 경로 이동
%USERPROFILE%\.claude.json
```

#### **2단계: 파일 크기 확인**

**macOS/Linux:**
```bash
ls -lh ~/.claude.json
# 출력 예: -rw-r--r-- 1 user staff 45M Jan 14 10:30 .claude.json
```

**Windows:**
```cmd
dir /-c %USERPROFILE%\.claude.json
```

> **⚠️ 주의**: 파일이 10MB 이상이면 성능에 영향을 줄 수 있습니다.

#### **3단계: 안전한 백업**

**macOS/Linux:**
```bash
# 백업 생성 (날짜 포함)
cp ~/.claude.json ~/.claude.json.backup.$(date +%Y%m%d)

# 백업 확인
ls -la ~/.claude.json*
```

**Windows:**
```cmd
# 백업 생성
copy %USERPROFILE%\.claude.json %USERPROFILE%\.claude.json.backup.%date:~0,4%%date:~5,2%%date:~8,2%
```

#### **4단계: 원본 파일 삭제**

**macOS/Linux:**
```bash
rm ~/.claude.json
```

**Windows:**
```cmd
del %USERPROFILE%\.claude.json
```

#### **5단계: Claude Code 재시작**

```bash
# Claude Code 종료
pkill claude
# 또는 Ctrl+C로 종료

# 다시 시작
claude
```

### ✅ 결과 확인
- Claude Code 실행 속도가 빨라졌는지 확인
- 새로운 `.claude.json` 파일이 자동 생성되었는지 확인
- 필요시 백업 파일에서 중요한 설정 복원

---

## 설치 및 인증 문제 해결

### 🚨 인증 오류

#### 증상
```
Error: Authentication failed
Error: Invalid API key
Error: Token expired
```

#### 해결 방법

**1. API 키 재설정**
```bash
# 기존 인증 정보 삭제
claude auth logout

# 새로운 API 키로 재인증
claude auth login
```

**2. 수동으로 키 확인**
```bash
# 현재 설정 확인
claude auth status

# 설정 파일 직접 편집 (고급 사용자)
nano ~/.claude/config.json
```

### 🔧 설치 문제

#### Node.js 버전 문제
```bash
# Node.js 버전 확인
node --version

# 최신 버전으로 업데이트 (macOS)
brew install node

# npm으로 Claude Code 재설치
npm uninstall -g claude-code
npm install -g claude-code@latest
```

---

## 파일 권한 및 접근 문제

### 🚫 권한 오류

#### 증상
```
Error: Permission denied
Error: Cannot read file
EACCES: permission denied
```

#### 해결 방법

**1. 파일 권한 확인**
```bash
# 현재 디렉토리 권한 확인
ls -la

# 특정 파일 권한 확인
ls -la 파일명
```

**2. 권한 수정**
```bash
# 읽기/쓰기 권한 부여
chmod 644 파일명

# 실행 권한 추가
chmod +x 파일명

# 디렉토리 전체 권한 수정
chmod -R 755 디렉토리명
```

**3. 소유권 변경 (필요시)**
```bash
# 현재 사용자로 소유권 변경
sudo chown -R $USER:$USER 디렉토리명
```

### 📁 작업 디렉토리 문제

#### 현재 위치 확인
```bash
# 현재 디렉토리 확인
pwd

# 올바른 프로젝트 디렉토리로 이동
cd /path/to/your/project
```

---

## 네트워크 및 연결 문제

### 🌐 연결 오류

#### 증상
```
Error: Network timeout
Error: Connection refused
Error: DNS resolution failed
```

#### 해결 방법

**1. 기본 연결 테스트**
```bash
# 인터넷 연결 확인
ping google.com

# Claude API 서버 연결 확인
curl -I https://claude.ai
```

**2. 방화벽 설정 확인**
```bash
# macOS 방화벽 상태 확인
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate

# 방화벽에서 Claude Code 허용 추가
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add $(which claude)
```

**3. 프록시 설정 (회사 네트워크)**
```bash
# 환경변수로 프록시 설정
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# 또는 claude 설정으로 프록시 설정
claude config set proxy http://proxy.company.com:8080
```

---

## 메모리 및 성능 문제

### 💾 메모리 부족

#### 증상
```
Error: Out of memory
Error: Heap out of memory
Process killed
```

#### 해결 방법

**1. 시스템 리소스 확인**
```bash
# macOS/Linux
top
htop
free -h

# Windows
taskmgr
```

**2. Node.js 메모리 증가**
```bash
# 메모리 제한 증가 (4GB)
export NODE_OPTIONS="--max-old-space-size=4096"

# 또는 실행 시 직접 지정
node --max-old-space-size=4096 $(which claude)
```

**3. 대용량 파일 처리**
```bash
# 파일을 청크 단위로 처리
claude --chunk-size 1000 large-file.txt

# 또는 파일을 작은 단위로 분할
split -l 1000 large-file.txt chunk_
```

---

## 고급 문제 해결

### 🔧 디버그 모드 활성화

```bash
# 자세한 로그 출력
claude --verbose

# 디버그 모드로 실행
DEBUG=claude:* claude

# 로그 파일에 저장
claude --log-file debug.log
```

### 📊 성능 프로파일링

```bash
# 실행 시간 측정
time claude your-command

# 메모리 사용량 모니터링
/usr/bin/time -v claude your-command
```

### 🗂️ 설정 파일 위치

```bash
# 설정 파일들 위치
~/.claude/config.json      # 기본 설정
~/.claude.json            # 세션 데이터
~/.claude/cache/          # 캐시 파일
~/.claude/logs/           # 로그 파일
```

---

## 예방 및 유지관리

### 🔄 정기 유지보수

#### **주간 점검 사항**
```bash
# 1. 캐시 정리
claude cache clear

# 2. 로그 파일 크기 확인
ls -lh ~/.claude/logs/

# 3. 설정 파일 크기 확인
ls -lh ~/.claude.json
```

#### **월간 점검 사항**
```bash
# 1. Claude Code 업데이트
npm update -g claude-code

# 2. Node.js 업데이트 확인
npm outdated -g

# 3. 시스템 정리
# macOS
sudo periodic daily weekly monthly

# Linux
sudo apt autoremove && sudo apt autoclean
```

### ⚙️ 성능 최적화 설정

#### **~/.claude/config.json 최적화**
```json
{
  "cache": {
    "enabled": true,
    "maxSize": "100MB",
    "ttl": 3600
  },
  "performance": {
    "maxConcurrentRequests": 5,
    "timeoutMs": 30000,
    "chunkSize": 1000
  },
  "logging": {
    "level": "info",
    "maxFileSize": "10MB",
    "maxFiles": 5
  }
}
```

### 📝 모니터링 스크립트

#### **간단한 상태 확인 스크립트**
```bash
#!/bin/bash
# claude-health-check.sh

echo "=== Claude Code 상태 확인 ==="

# 1. 프로세스 확인
if pgrep -f claude > /dev/null; then
    echo "✅ Claude Code 실행 중"
else
    echo "❌ Claude Code 실행 중 아님"
fi

# 2. 설정 파일 크기 확인
if [ -f ~/.claude.json ]; then
    size=$(ls -lh ~/.claude.json | awk '{print $5}')
    echo "📁 설정 파일 크기: $size"

    # 10MB 이상이면 경고
    if [ $(stat -c%s ~/.claude.json 2>/dev/null || stat -f%z ~/.claude.json) -gt 10485760 ]; then
        echo "⚠️  설정 파일이 큽니다. 정리를 고려하세요."
    fi
fi

# 3. 디스크 공간 확인
df -h . | tail -1 | awk '{print "💾 디스크 사용률: " $5}'

# 4. 메모리 사용률 확인
if command -v free > /dev/null; then
    free | awk 'NR==2{printf "🧠 메모리 사용률: %.2f%%\n", $3*100/$2 }'
elif command -v vm_stat > /dev/null; then
    vm_stat | awk '
    /Pages free/ { free=$3 }
    /Pages active/ { active=$3 }
    /Pages inactive/ { inactive=$3 }
    /Pages speculative/ { spec=$3 }
    /Pages wired/ { wired=$3 }
    END {
        total=free+active+inactive+spec+wired
        used=total-free
        printf "🧠 메모리 사용률: %.2f%%\n", used*100/total
    }'
fi

echo "=== 확인 완료 ==="
```

### 🆘 응급 복구 스크립트

```bash
#!/bin/bash
# claude-emergency-fix.sh

echo "🚨 Claude Code 응급 복구 시작..."

# 1. 기존 프로세스 종료
pkill -f claude
sleep 2

# 2. 설정 파일 백업
if [ -f ~/.claude.json ]; then
    cp ~/.claude.json ~/.claude.json.emergency.$(date +%Y%m%d_%H%M%S)
    echo "✅ 설정 파일 백업 완료"
fi

# 3. 캐시 및 임시 파일 정리
rm -rf ~/.claude/cache/*
rm -rf ~/.claude/temp/*
echo "✅ 캐시 정리 완료"

# 4. 설정 파일 재생성
rm -f ~/.claude.json
echo "✅ 설정 파일 재생성 준비 완료"

# 5. Claude Code 재시작
echo "🔄 Claude Code 재시작 중..."
claude --version

echo "✅ 응급 복구 완료!"
echo "💡 Claude Code를 다시 실행해보세요."
```

---

## 🆘 긴급 상황 대응

### 즉시 해결해야 할 문제들

1. **Claude Code가 완전히 멈춤**
   ```bash
   sudo pkill -9 claude
   rm ~/.claude.json
   claude
   ```

2. **설정이 완전히 망가짐**
   ```bash
   mv ~/.claude ~/.claude.broken.$(date +%Y%m%d)
   claude auth login
   ```

3. **디스크 공간 부족**
   ```bash
   # 로그 파일 정리
   rm ~/.claude/logs/*

   # 캐시 정리
   rm -rf ~/.claude/cache/*

   # 백업 파일 정리
   rm ~/.claude.json.backup.*
   ```

---

## 📞 추가 도움 받기

- **공식 문서**: https://docs.claude.ai/
- **GitHub Issues**: https://github.com/anthropics/claude-code/issues
- **커뮤니티 포럼**: Claude Code 사용자 그룹
- **디스코드**: Claude 개발자 커뮤니티

---

## 연결된 노트
- [[Claude Code 완벽 가이드]]
- [[Claude Code MCP 서버 설정]]
- [[개발 환경 최적화]]
- [[터미널 명령어 모음집]]

# 허민 대표팀의 추가 팁

## 단계별 해결 가이드: 비유로 쉽게 따라 하기
'과부하된 컴퓨터를 청소하는 청소부'처럼 접근하세요. 아래 단계를 따르세요.

## 진단 단계: 파일을 백업하세요. 비유: '중요한 서류를 복사해 두는' 과정.
bashcp ~/.claude.json ~/.claude.json.backup

## 압축 단계: CLI에서 압축 명령어를 실행하세요. 비유: '일기장을 요약하는' 작업.
bashclaude /compact
버그 시:
bashclaude /clear
claude /resume
claude /compact

## 리셋 단계: 필요 시 파일 삭제 후 재시작. 비유: '새 노트북으로 갈아타는' 느낌.
bashrm ~/.claude.json
claude --init  # 초기화

## 최적화 단계: 환경 변수를 설정하세요. 비유: '엔진 튜닝'.
bashexport CLAUDE_CODE_DISABLE_FINE_GRAINED_TOOL_STREAMING=1