---
title: "Claude Code Usage Monitor 완벽 가이드"
created: '2025-06-22'
last_modified: '2025-06-22'
tags:
  - Claude-Code
  - 토큰모니터링
  - Python
  - 개발도구
  - API사용량
  - 실시간모니터링
  - 비용관리
  - 터미널도구
status: "완료"
type: "분석"
priority: "high"
share_link: ""
---

# Claude Code Usage Monitor 완벽 가이드

## 개요
- **핵심 주제**: Claude AI 토큰 사용량을 실시간으로 모니터링하는 아름다운 터미널 도구
- **목적**: Claude Code 사용자가 토큰 소비량, 소진율, 예측 분석을 통해 효율적인 API 사용을 실현
- **범위**: 설치부터 고급 활용법, 최적화 전략까지 전체 워크플로우

## 📋 목차
1. [[#Claude Code Usage Monitor 소개]]
2. [[#핵심 기능 및 특징]]
3. [[#설치 및 설정]]
4. [[#기본 사용법]]
5. [[#고급 활용 전략]]
6. [[#실전 워크플로우]]
7. [[#문제 해결 및 최적화]]

## Claude Code Usage Monitor 소개

### 도구 개요
Claude Code Usage Monitor는 **실시간 터미널 모니터링 도구**로, Claude AI의 토큰 사용량을 시각적으로 추적하고 분석하는 Python 애플리케이션입니다.

### 핵심 가치 제안
- **실시간 모니터링**: 3초마다 부드러운 업데이트로 현재 상태 추적
- **예측 분석**: 현재 소진율 기반으로 토큰 고갈 시점 예측
- **시각적 인터페이스**: 컬러 코딩된 진행 막대와 이모지로 직관적 표시
- **자동 감지**: Pro 한계 초과 시 자동으로 custom_max 모드로 전환

### 기술 스택 및 의존성
```yaml
언어: Python 3.6+
핵심 의존성:
  - pytz: 타임존 처리
  - ccusage: Claude API 사용량 CLI 도구
기반 도구: 
  - ccusage by @ryoppippi
플랫폼: 
  - macOS, Linux, Windows (터미널 환경)
```

## 핵심 기능 및 특징

### 1. 실시간 모니터링 시스템

#### 자동 업데이트 메커니즘
```python
# 3초마다 자동 새로고침
time.sleep(3)
# 화면 깜빡임 없는 스마트 업데이트
print('\033[H', end='', flush=True)  # 커서를 상단으로 이동
```

#### 다중 세션 추적
- **5시간 롤링 윈도우**: Claude Code의 세션 시스템 완벽 지원
- **동시 세션 모니터링**: 여러 활성 세션의 토큰 사용량 통합 추적
- **세션 히스토리 분석**: 지난 1시간 데이터 기반 소진율 계산

### 2. 시각적 진행 막대 시스템

#### 토큰 사용량 진행 막대
```python
def create_token_progress_bar(percentage, width=50):
    green_bar = '█' * filled
    red_bar = '░' * (width - filled)
    return f"🟢 [{green}{green_bar}{red}{red_bar}{reset}] {percentage:.1f}%"
```

**컬러 코딩 시스템**:
- 🟢 **녹색**: 안전한 사용량 (0-70%)
- 🟡 **노란색**: 주의 구간 (70-90%)
- 🔴 **빨간색**: 위험 구간 (90-100%)

#### 시간 진행 막대
```python
def create_time_progress_bar(elapsed_minutes, total_minutes, width=50):
    # 세션 만료까지 남은 시간 시각화
    remaining_time = format_time(max(0, total_minutes - elapsed_minutes))
    return f"⏰ [{blue}{blue_bar}{red}{red_bar}{reset}] {remaining_time}"
```

### 3. 스마트 예측 엔진

#### 소진율 계산 알고리즘
```python
def calculate_hourly_burn_rate(blocks, current_time):
    """지난 1시간 동안의 모든 세션 데이터 기반 소진율 계산"""
    one_hour_ago = current_time - timedelta(hours=1)
    total_tokens = 0
    
    for block in blocks:
        # 세션 겹침 분석
        # 시간 가중 토큰 사용량 계산
        # 분당 토큰 소진율 반환
    
    return total_tokens / 60  # 분당 토큰
```

#### 예측 분석 기능
- **토큰 고갈 시점**: 현재 소진율 기반 정확한 시간 예측
- **위험 알림**: 세션 리셋 전 토큰 고갈 가능성 경고
- **소진 속도 표시**: 🐌(느림) → ➡️(보통) → 🚀(빠름) → ⚡(매우빠름)

### 4. 플랜 자동 감지 시스템

#### 지원 플랜 유형
```yaml
Plans:
  Pro: "~7,000 토큰"      # 기본 플랜
  Max5: "~35,000 토큰"    # 정기 개발용
  Max20: "~140,000 토큰"  # 대용량 프로젝트
  Custom_Max: "자동감지"   # 이전 세션 최대값 사용
```

#### 자동 전환 로직
```python
# Pro 한계 초과 시 자동 전환
if tokens_used > token_limit and args.plan == 'pro':
    new_limit = get_token_limit('custom_max', data['blocks'])
    if new_limit > token_limit:
        token_limit = new_limit
        # 사용자에게 전환 알림 표시
```

## 설치 및 설정

### 1. 시스템 요구사항

#### 필수 요구사항
```bash
# Python 버전 확인
python3 --version  # 3.6+ 필요

# Node.js 확인 (ccusage 설치용)
node --version     # 최신 LTS 권장
```

#### 의존성 도구 설치
```bash
# ccusage CLI 도구 전역 설치
npm install -g ccusage

# Python 타임존 라이브러리 설치
pip install pytz
```

### 2. 프로덕션 설치 (권장)

#### 가상환경 설정의 중요성
**왜 가상환경을 사용해야 하는가?**
- 🛡️ **격리**: 시스템 Python 환경 보호
- 📦 **이식성**: 다른 머신에서 동일한 환경 재현
- 🔄 **버전 고정**: 의존성 버전 충돌 방지
- 🧹 **깔끔한 제거**: 폴더 삭제만으로 완전 제거

#### 단계별 설치 과정
```bash
# 1. 저장소 클론
git clone https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor.git
cd Claude-Code-Usage-Monitor

# 2. 가상환경 생성
python3 -m venv venv

# 3. 가상환경 활성화
# macOS/Linux:
source venv/bin/activate
# Windows:
# venv\Scripts\activate

# 4. 의존성 설치
pip install pytz

# 5. 실행 권한 부여 (macOS/Linux)
chmod +x ccusage_monitor.py

# 6. 실행 테스트
python ccusage_monitor.py
```

### 3. 편의성 설정

#### Shell Alias 생성
```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
alias claude-monitor='cd ~/Claude-Code-Usage-Monitor && source venv/bin/activate && ./ccusage_monitor.py'

# 사용법
claude-monitor  # 간단한 명령으로 실행
```

#### Tmux 세션 설정
```bash
# 백그라운드 모니터링 세션 생성
tmux new-session -d -s claude-monitor './ccusage_monitor.py'

# 언제든지 세션 확인
tmux attach -t claude-monitor

# 세션 종료
tmux kill-session -t claude-monitor
```

## 기본 사용법

### 1. 명령어 옵션

#### 플랜 선택
```bash
# Pro 플랜 (기본값)
./ccusage_monitor.py --plan pro

# Max5 플랜
./ccusage_monitor.py --plan max5

# Max20 플랜
./ccusage_monitor.py --plan max20

# 자동 감지 (이전 세션 최대값 사용)
./ccusage_monitor.py --plan custom_max
```

#### 리셋 시간 커스터마이징
```bash
# 오전 9시에 리셋
./ccusage_monitor.py --reset-hour 9

# 자정에 리셋
./ccusage_monitor.py --reset-hour 0

# 오후 6시에 리셋
./ccusage_monitor.py --reset-hour 18
```

#### 타임존 설정
```bash
# 미국 동부 시간
./ccusage_monitor.py --timezone US/Eastern

# 도쿄 시간
./ccusage_monitor.py --timezone Asia/Tokyo

# 런던 시간
./ccusage_monitor.py --timezone Europe/London

# UTC 시간
./ccusage_monitor.py --timezone UTC
```

### 2. 화면 구성 요소 해석

#### 기본 디스플레이 구조
```
✦ ✧ ✦ ✧ CLAUDE TOKEN MONITOR ✦ ✧ ✦ ✧
============================================================

📊 Token Usage:    🟢 [████████████░░░░] 75.2%

⏳ Time to Reset:  ⏰ [██████░░░░░░░░░░] 2h 15m

🎯 Tokens:         5,265 / ~7,000 (1,735 left)
🔥 Burn Rate:      127.3 tokens/min

🏁 Predicted End: 16:42
🔄 Token Reset:   18:00

⏰ 14:27:33 📝 Smooth sailing... | Ctrl+C to exit 🟨
```

#### 정보 해석 가이드
- **Token Usage**: 현재 사용률과 시각적 진행 상태
- **Time to Reset**: 다음 토큰 리셋까지 남은 시간
- **Tokens**: 사용량/한계치 (남은 토큰)
- **Burn Rate**: 분당 토큰 소진율
- **Predicted End**: 현재 속도로 토큰 고갈 예상 시간
- **Token Reset**: 다음 리셋 예정 시간

## 고급 활용 전략

### 1. 워크플로우별 최적 설정

#### 모닝 개발자 워크플로우
```bash
# 오전 9시 시작, 동부 시간
./ccusage_monitor.py --reset-hour 9 --timezone US/Eastern --plan max5

# 일일 루틴:
# 09:00 - 새로운 토큰으로 주요 기능 개발
# 11:00 - 소진율 확인, 강도 조절
# 13:00 - 오후 세션 계획
# 14:00 - 새 세션 윈도우 활용
# 16:00 - 가벼운 작업으로 전환
```

#### 야간 개발자 워크플로우
```bash
# 자정 리셋, 유연한 스케줄
./ccusage_monitor.py --reset-hour 0 --plan max20

# 전략:
# - 자정 전후 최대 용량 활용
# - 심야 시간대 집중 개발
# - 소진율 모니터링으로 지속 가능한 속도 유지
```

#### 국제 팀 협업
```bash
# UTC 기준으로 일관된 관리
./ccusage_monitor.py --timezone UTC --reset-hour 12 --plan max5

# 장점:
# - 전 세계 팀원과 동일한 기준시
# - 예측 가능한 리셋 스케줄
# - 글로벌 프로젝트 일정 조율
```

### 2. 고급 모니터링 기법

#### 소진율 패턴 분석
```python
# 소진 속도별 작업 강도 조절
🐌 (< 50 tokens/min):  "안전 구간 - 복잡한 리팩토링 가능"
➡️ (50-150 tokens/min): "보통 구간 - 일반적인 개발 작업"
🚀 (150-300 tokens/min): "주의 구간 - 작업 강도 점검 필요"
⚡ (> 300 tokens/min):  "위험 구간 - 즉시 작업 강도 낮춤"
```

#### 예측 정확도 향상 팁
1. **모니터링 조기 시작**: 세션 시작과 함께 모니터링 개시
2. **지속적 관찰**: 최소 1시간 데이터 축적 후 예측 신뢰
3. **패턴 인식**: 개인의 코딩 스타일에 따른 소진 패턴 학습

### 3. 비용 최적화 전략

#### 플랜별 최적화 접근법

**Pro 플랜 (~7,000 토큰)**:
```bash
# 보수적 접근
./ccusage_monitor.py --plan pro

전략:
- 간단한 작업 위주 (코드 리뷰, 간단한 버그 수정)
- 토큰 효율성 높은 명령어 사용
- 50% 도달 시 작업 강도 조절
- 복잡한 리팩토링은 새 세션에서 시작
```

**Max5 플랜 (~35,000 토큰)**:
```bash
# 균형잡힌 접근
./ccusage_monitor.py --plan max5

전략:
- 일반적인 개발 작업 수행
- 70% 도달 시 모니터링 강화
- 중간 규모 프로젝트 적합
- 예측 분석 적극 활용
```

**Max20 플랜 (~140,000 토큰)**:
```bash
# 적극적 활용
./ccusage_monitor.py --plan max20

전략:
- 대규모 리팩토링 가능
- AI 페어 프로그래밍 적극 활용
- 복잡한 아키텍처 설계
- 85% 도달 시에야 제한 고려
```

## 실전 워크플로우

### 1. 대규모 프로젝트 개발

#### 프로젝트 시작 단계
```bash
# 고용량 플랜으로 설정
./ccusage_monitor.py --plan max20 --reset-hour 8 --timezone America/New_York

# 일일 개발 사이클:
# 08:00 - 새 토큰으로 주요 아키텍처 작업
# 10:00 - 소진율 체크, 필요시 강도 조절
# 12:00 - 오후 계획 수립
# 14:00 - 새 세션 활용 시작
# 16:00 - 복잡한 문제 해결
# 18:00 - 문서화 및 테스트
```

#### 모니터링 체크포인트
```yaml
25% (35,000 토큰): "순조로운 진행 - 계속 진행"
50% (70,000 토큰): "중간점 도달 - 소진율 점검"
75% (105,000 토큰): "주의 단계 - 작업 우선순위 재조정"
90% (126,000 토큰): "마무리 단계 - 핵심 작업만 진행"
```

### 2. 학습 및 실험 워크플로우

#### 효율적 학습 전략
```bash
# 학습용 유연한 설정
./ccusage_monitor.py --plan pro

# 학습 최적화:
# - 작은 코드 블록으로 나누어 질문
# - 단계별 설명 요청으로 토큰 절약
# - 핵심 개념 위주 질문
# - 실습 예제는 간결하게 요청
```

#### 실험 프로젝트 관리
```bash
# 자동 감지로 유연한 한계 설정
./ccusage_monitor.py --plan custom_max --reset-hour 6

# 실험 전략:
# - 작은 POC(Proof of Concept)부터 시작
# - 토큰 사용량 패턴 학습
# - 성공적인 실험은 별도 세션에서 확장
```

### 3. 팀 협업 워크플로우

#### 팀 표준 설정
```bash
# 팀 공통 설정 예시
./ccusage_monitor.py --plan max5 --timezone UTC --reset-hour 9

# 팀 규칙:
# - 모든 팀원 동일한 타임존 사용
# - 소진율 70% 도달 시 팀 채널에 공유
# - 주요 작업 전 토큰 상태 확인
# - 세션 리셋 시간에 맞춘 회의 스케줄
```

#### 리소스 공유 전략
```yaml
토큰 사용 우선순위:
  High: "긴급 버그 수정, 핵심 기능 개발"
  Medium: "코드 리뷰, 문서화"
  Low: "실험적 기능, 학습용 질문"

협업 규칙:
  - 대용량 작업 전 팀 공지
  - 토큰 절약 팁 공유
  - 효율적 프롬프트 패턴 표준화
```

## 문제 해결 및 최적화

### 1. 일반적인 문제 해결

#### "No active session found" 오류
```bash
# 해결 방법 1: Claude Code에서 메시지 2개 이상 전송
claude "Hello"  # 첫 번째 메시지
claude "Can you help me?"  # 두 번째 메시지

# 해결 방법 2: 설정 경로 지정
CLAUDE_CONFIG_DIR=~/.config/claude ./ccusage_monitor.py

# 해결 방법 3: Claude Code 재시작
pkill claude  # Claude 프로세스 종료
claude "New session"  # 새 세션 시작
```

#### 토큰 사용량 불일치
```bash
# ccusage 도구 직접 확인
ccusage blocks --json

# 캐시 정리
rm -rf ~/.config/claude/cache

# 설정 재설정
claude --reset
```

#### 모니터링 화면 깨짐
```bash
# 터미널 크기 조정 (최소 80자 너비 권장)
resize

# 터미널 초기화
reset

# 컬러 지원 확인
echo $TERM  # xterm-256color 등이 나와야 함
```

### 2. 성능 최적화

#### 터미널 환경 최적화
```bash
# 터미널 설정 확인
echo $TERM          # 컬러 지원 확인
tput cols          # 터미널 너비 확인 (80+ 권장)
tput colors        # 컬러 수 확인 (256+ 권장)

# 폰트 설정
# - 고정폭 폰트 사용
# - 이모지 지원 폰트 권장
# - 적절한 크기 설정 (12-14pt)
```

#### 시스템 리소스 최적화
```python
# 메모리 사용량 모니터링
import psutil
process = psutil.Process()
print(f"Memory usage: {process.memory_info().rss / 1024 / 1024:.1f} MB")

# CPU 사용률 확인
cpu_percent = psutil.cpu_percent(interval=1)
print(f"CPU usage: {cpu_percent}%")
```

### 3. 고급 커스터마이징

#### 설정 파일 생성
```python
# config.py 생성
CONFIG = {
    'default_plan': 'max5',
    'default_timezone': 'Asia/Seoul',
    'default_reset_hour': 9,
    'update_interval': 3,  # 초
    'progress_bar_width': 50,
    'warning_threshold': 0.85  # 85%
}
```

#### 커스텀 알림 시스템
```python
# notify.py 추가
import subprocess

def send_notification(title, message):
    # macOS
    subprocess.run(['osascript', '-e', f'display notification "{message}" with title "{title}"'])
    
    # Linux (notify-send 필요)
    subprocess.run(['notify-send', title, message])
    
    # Windows (plyer 라이브러리 사용)
    # pip install plyer
    from plyer import notification
    notification.notify(title=title, message=message, timeout=10)
```

### 4. 통합 개발 환경 설정

#### VSCode 통합
```json
// .vscode/tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start Claude Monitor",
            "type": "shell",
            "command": "cd ~/Claude-Code-Usage-Monitor && source venv/bin/activate && ./ccusage_monitor.py",
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "new"
            },
            "runOptions": {
                "runOn": "folderOpen"
            }
        }
    ]
}
```

#### iTerm2/Terminal 프로필 설정
```bash
# 전용 프로필 생성
# - 이름: Claude Monitor
# - 시작 명령: ~/Claude-Code-Usage-Monitor/run_monitor.sh
# - 색상: 어두운 배경
# - 폰트: Source Code Pro 또는 Fira Code
# - 크기: 100x30 이상
```

## 구현 체크리스트
- [x] Python 3.6+ 환경 확인
- [x] ccusage CLI 도구 설치
- [x] 가상환경 설정 및 의존성 설치
- [x] 기본 실행 및 동작 확인
- [ ] 개인 작업 패턴에 맞는 설정 최적화
- [ ] Shell alias 설정으로 편의성 개선
- [ ] 팀 설정 표준화 및 공유
- [ ] 모니터링 데이터 기반 개발 워크플로우 개선

## 연결된 노트
- **상위 개념**: [[Claude Code 완벽 가이드 - 실습형 노트]]
- **하위 세부사항**: [[Claude API 비용 최적화 전략]]
- **병렬 주제**: [[Claudia_설치_및_사용법_완벽_가이드]]
- **실전 활용**: [[Claude Code 팀 협업 워크플로우]]
- **관련 도구**: [[ccusage CLI 도구 심화 가이드]]
- **최적화 전략**: [[AI 개발 도구 비용 관리 전략]]

---

**💡 Pro Tips**: 
1. **조기 모니터링**: 세션 시작과 함께 모니터링을 시작하여 정확한 예측 확보
2. **패턴 학습**: 개인의 토큰 사용 패턴을 파악하여 더 효율적인 개발 계획 수립
3. **팀 표준화**: 팀 전체가 동일한 모니터링 설정을 사용하여 일관된 리소스 관리
4. **예측 활용**: 소진율 예측을 적극 활용하여 작업 우선순위 조정
5. **자동화 통합**: Shell alias와 IDE 통합으로 개발 워크플로우에 자연스럽게 통합