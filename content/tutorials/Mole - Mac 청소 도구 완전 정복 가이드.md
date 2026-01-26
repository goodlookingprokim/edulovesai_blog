---
title: Mole - Mac 청소 도구 완전 정복 가이드
created: 2025-10-06
last_modified: 2025-10-06
tags:
  - Mac/시스템관리
  - 개발도구/CLI
  - 시스템/최적화
  - 튜토리얼/초보자
  - Bash/스크립트
status: 완료
type: 가이드
priority: high
github_repo: https://github.com/tw93/Mole
share_link: https://share.note.sx/w8j9tly2#KS4uJT4/xoyP3H92cfCjTsQYgwYZRqC5WQxcQF4Yw8k
share_updated: 2025-10-06T22:53:40+09:00
---

# Mole - Mac 청소 도구 완전 정복 가이드

## 📋 목차
1. [[#Mole이 뭔가요 두더지가 Mac을 파헤친다]]
2. [[#왜 Mac은 느려질까 숨겨진 쓰레기들]]
3. [[#Mole의 3대 핵심 기능]]
4. [[#설치부터 첫 사용까지]]
5. [[#실전 활용 예제]]
6. [[#내부 작동 원리 이해하기]]
7. [[#문제 해결 가이드]]
8. [[#핵심 정리]]

---

## Mole이 뭔가요? 두더지가 Mac을 파헤친다!

### 🐹 실생활 이야기로 시작하기

> 여러분의 Mac을 **거대한 집**이라고 상상해보세요. 매일 살다 보면 먼지가 쌓이고, 안 쓰는 물건들이 쌓이고, 곳곳에 숨겨진 쓰레기들이 생기죠. 하지만 벽 뒤, 천장 위, 바닥 밑에 숨어있는 쓰레기는 보이지 않습니다!

**Mole은 바로 이런 숨겨진 쓰레기를 찾아내는 "두더지"입니다!** 🐹

### 📖 5살 아이에게 설명한다면

"Mole은 Mac 컴퓨터 안에 숨어있는 쓰레기를 찾아서 깨끗이 치워주는 청소 로봇이에요.
마치 두더지가 땅속을 파고 들어가듯이, Mole도 컴퓨터 깊숙한 곳까지 들어가서
안 보이는 쓰레기를 찾아낸답니다!"

### 🎯 핵심 개념 (WHY → WHAT → HOW)

#### WHY (왜 필요한가요?)

**문제 상황**:
```
새로 산 Mac: 250GB 여유 공간
6개월 후: 50GB만 남음 (200GB가 어디로?!)
1년 후: 10GB 경고! (앱도 별로 안 깔았는데...)
```

**범인들**:
- 앱 캐시 파일 (보이지 않는 임시 저장 공간)
- 로그 파일 (앱들이 남긴 일기장들)
- 휴지통에서 완전히 삭제 안 된 파일들
- 앱 삭제 후 남은 찌꺼기들

#### WHAT (무엇을 하나요?)

Mole의 3가지 마법:

1. **🧹 깊은 청소 (Deep Clean)**
   - 22개 이상의 숨겨진 장소를 탐색
   - 일반 청소 도구는 1곳, Mole은 22곳!

2. **🗑️ 완전 삭제 (Thorough Uninstall)**
   - 앱을 휴지통에 버리면 → 30% 만 삭제
   - Mole로 삭제하면 → 100% 완전 제거!

3. **📊 공간 분석 (Disk Analyzer)**
   - 어떤 폴더가 큰지 한눈에 파악
   - 큰 파일 즉시 발견하고 삭제

#### HOW (어떻게 작동하나요?)

```
사용자가 명령어 입력
    ↓
Mole이 Mac 구석구석 탐색
    ↓
숨겨진 쓰레기 발견
    ↓
안전하게 삭제 (중요한 건 건드리지 않음)
    ↓
공간 확보 완료! ✨
```

---

## 왜 Mac은 느려질까? 숨겨진 쓰레기들

### 🕵️ 보이지 않는 쓰레기의 정체

#### 1. 캐시 파일 (Cache Files)

**실생활 비유**: 식당의 재료 창고

```
식당 (앱)
├─ 주방 (프로그램 파일) ← 실제 요리하는 곳
└─ 재료 창고 (캐시) ← 자주 쓰는 재료 보관

캐시의 역할:
- 빠른 접근을 위해 임시 저장
- 자주 쓰는 데이터를 가까이 둠
- 시간이 지나면 상한 재료처럼 쓸모없어짐
```

**캐시 파일 위치**:
```
~/Library/Caches/              ← 앱 캐시
~/Library/Logs/                ← 앱 로그
/System/Library/Caches/        ← 시스템 캐시
/Library/Caches/               ← 전체 시스템 캐시
```

**실제 크기 예시**:
```
Chrome 캐시: 8.4GB    (웹페이지 임시 저장)
Xcode 캐시: 9.1GB     (개발 도구 임시 파일)
Spotify 캐시: 3.1GB   (음악 임시 다운로드)
Node.js 캐시: 14.2GB  (프로그래밍 패키지)
```

#### 2. 로그 파일 (Log Files)

**실생활 비유**: 앱들이 쓰는 일기장

```
앱 A의 일기:
"2025-01-01: 정상 시작"
"2025-01-02: 사용자가 버튼 클릭"
"2025-01-03: 오류 발생!"
...
[365일 * 수십 개 앱 = 수 GB]
```

**문제점**:
- 계속 쌓임 (자동 삭제 안 됨)
- 대부분 다시 안 봄
- 공간만 차지

#### 3. 앱 삭제 후 잔해물

**일반 삭제 (휴지통)**:
```
/Applications/Photoshop.app 삭제
                           ↓
           30%만 삭제됨! ❌

남아있는 70%:
~/Library/Preferences/com.adobe.Photoshop.plist
~/Library/Application Support/Adobe/Photoshop/
~/Library/Caches/Adobe Photoshop/
~/Library/Logs/Adobe/
~/Library/Cookies/com.adobe.Photoshop.binarycookies
... (52개 파일, 12개 위치)
```

**Mole 삭제**:
```
mo uninstall → Photoshop 선택
                      ↓
              100% 완전 삭제! ✅

22개 위치 모두 검사:
✓ Applications
✓ Library/Preferences
✓ Library/Application Support
✓ Library/Caches
✓ Library/Logs
✓ Library/Cookies
... (22개 위치 전부!)
```

---

## Mole의 3대 핵심 기능

### 🧹 기능 1: 시스템 청소 (mo clean)

#### 청소 대상 목록

```
┌─────────────────────────────────────┐
│ 🎯 시스템 필수 청소                   │
├─────────────────────────────────────┤
│ ✓ 사용자 앱 캐시 (45.2GB)            │
│ ✓ 사용자 앱 로그 (2.1GB)             │
│ ✓ 휴지통 (12.3GB)                    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 🌐 브라우저 청소                      │
├─────────────────────────────────────┤
│ ✓ Chrome 캐시 (8.4GB)                │
│ ✓ Safari 캐시 (2.1GB)                │
│ ✓ Firefox 캐시 (1.8GB)               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 💻 개발자 도구                        │
├─────────────────────────────────────┤
│ ✓ Xcode Derived Data (9.1GB)        │
│ ✓ Node.js npm 캐시 (14.2GB)          │
│ ✓ Python pip 캐시 (3.5GB)            │
│ ✓ Homebrew 캐시 (5.6GB)              │
└─────────────────────────────────────┘

총 회수 가능: 95.50GB!
```

#### 🌱 기초 예제: 첫 번째 청소

**Step 1: 안전 모드로 미리보기**
```bash
# --dry-run: 삭제하지 않고 미리보기만
mo clean --dry-run
```

**결과**:
```
🔍 Scanning system...

▶ System essentials
  - User app cache: 45.2GB → Will be cleaned
  - User app logs: 2.1GB → Will be cleaned
  - Trash: 12.3GB → Will be emptied

▶ Browser cleanup
  - Chrome cache: 8.4GB → Will be cleaned
  - Safari cache: 2.1GB → Will be cleaned

====================================================================
💾 PREVIEW ONLY (--dry-run mode)
📊 Potential space to free: 71.1GB
====================================================================

To actually clean, run: mo clean
```

**🤔 생각해보기**: --dry-run은 왜 중요할까요?
<details>
<summary>답변 보기</summary>

마치 수술 전에 CT 찍는 것과 같아요!
- 어떤 파일이 삭제될지 미리 확인
- 중요한 파일 있으면 보호 조치
- 안전하게 청소 계획 수립
- 실수로 중요한 것 삭제 방지

**항상 첫 실행은 --dry-run으로!**
</details>

**Step 2: 실제 청소 실행**
```bash
mo clean
```

**진행 과정**:
```
🧹 Starting deep clean...

▶ System essentials
  ✓ Cleaning user app cache... (45.2GB freed)
    [████████████████████] 100%
  ✓ Cleaning user app logs... (2.1GB freed)
    [████████████████████] 100%
  ✓ Emptying trash... (12.3GB freed)
    [████████████████████] 100%

▶ Browser cleanup
  ✓ Chrome cache... (8.4GB freed)
  ✓ Safari cache... (2.1GB freed)

⏱️  Time elapsed: 45 seconds

====================================================================
🎉 CLEANUP COMPLETE!
💾 Space freed: 71.1GB
💾 Free space now: 223.5GB (was 152.4GB)
====================================================================
```

---

### 🌿 중급 예제: 화이트리스트로 중요 캐시 보호

**시나리오**: 개발자가 자주 쓰는 캐시는 남기고 싶다!

```bash
mo clean --whitelist
```

**인터랙티브 메뉴**:
```
🛡️  Select Caches to PROTECT (won't be deleted)
════════════════════════════════════════════════

  ☑ Homebrew cache (5.6GB) ← 보호
  ☑ Node.js packages (14.2GB) ← 보호
  ☐ Chrome cache (8.4GB) ← 삭제
  ☐ Safari cache (2.1GB) ← 삭제
  ☑ Xcode derived data (9.1GB) ← 보호

Use arrow keys to navigate, SPACE to toggle, ENTER to confirm
```

**보호 이유 예시**:
```yaml
Homebrew cache:
  이유: 재다운로드하면 시간 오래 걸림
  크기: 5.6GB
  보호: ✅

Node.js packages:
  이유: 프로젝트마다 다시 설치 귀찮음
  크기: 14.2GB
  보호: ✅

Chrome cache:
  이유: 웹서핑 속도 약간 느려질 뿐
  크기: 8.4GB
  보호: ❌ (삭제해도 큰 문제 없음)
```

**설정 저장**:
```bash
# 설정이 저장되는 위치
~/.config/mole/whitelist.conf

[protected_caches]
homebrew=true
nodejs=true
xcode=true
chrome=false
safari=false
```

다음부터는 `mo clean`만 해도 자동으로 보호!

---

### 🗑️ 기능 2: 앱 완전 삭제 (mo uninstall)

#### 일반 삭제 vs Mole 삭제 비교

**일반 방법 (휴지통으로 드래그)**:
```
1. /Applications/Adobe Creative Cloud.app 삭제
   → 단 1곳만 삭제!

2. 남은 찌꺼기 (70%):
   ❌ ~/Library/Preferences/com.adobe.*
   ❌ ~/Library/Application Support/Adobe/
   ❌ ~/Library/Caches/Adobe/
   ❌ ~/Library/Logs/Adobe/
   ❌ ~/Library/Cookies/com.adobe.*
   ❌ ... (52개 파일)

결과: 12.4GB 중 3.7GB만 삭제 (30%)
```

**Mole 방법**:
```
1. mo uninstall 실행

2. 앱 선택:
   ☑ Adobe Creative Cloud (12.4GB) | Old
   ☐ WeChat (2.1GB) | Recent
   ☐ Final Cut Pro (3.8GB) | Recent

3. Mole이 22개 위치 검사:
   ✓ /Applications/
   ✓ ~/Library/Preferences/
   ✓ ~/Library/Application Support/
   ✓ ~/Library/Caches/
   ✓ ~/Library/Logs/
   ✓ ~/Library/Cookies/
   ✓ ~/Library/WebKit/
   ✓ ~/Library/Saved Application State/
   ✓ ~/Library/LaunchAgents/
   ✓ ~/Library/LaunchDaemons/
   ... (총 22개 위치)

결과: 12.8GB 완전 삭제 (100%)
```

#### 🌱 기초 예제: 첫 앱 삭제

```bash
mo uninstall
```

**화면 표시**:
```
🗑️  Select Apps to Remove
═══════════════════════════════════════════════

Apps sorted by: Installation date (oldest first)

  ☐ Adobe Creative Cloud    (12.4G) | Old      ← 오래된 앱
  ☐ Slack                    (156M) | Old
  ☐ Discord                  (284M) | Recent
  ☐ WeChat                   (2.1G) | Recent   ← 최근 앱
  ☐ Final Cut Pro            (3.8G) | Recent

Total if all selected: 18.9GB

────────────────────────────────────────────────
↑/↓: Navigate | SPACE: Toggle | ENTER: Confirm
Q/ESC: Cancel
```

**Adobe Creative Cloud 선택 후**:
```
🗑️  Uninstalling: Adobe Creative Cloud
════════════════════════════════════════════════

[1/3] Scanning related files...
  Found 52 files across 12 locations

[2/3] Removing application...
  ✓ /Applications/Adobe Creative Cloud.app
    [████████████████████] 100%

[3/3] Cleaning related files...
  ✓ Preferences (12 files)
  ✓ Application Support (18 files)
  ✓ Caches (8 files)
  ✓ Logs (6 files)
  ✓ Cookies (3 files)
  ✓ WebKit storage (2 files)
  ✓ Launch agents (2 files)
  ✓ System files (1 file, requires sudo)

====================================================================
🎉 UNINSTALLATION COMPLETE!
💾 Space freed: 12.8GB
📊 Files removed: 53
📁 Locations cleaned: 12
====================================================================
```

---

### 📊 기능 3: 디스크 분석 (mo analyze)

#### 🌿 중급 예제: 큰 파일 찾아서 삭제하기

```bash
mo analyze
```

**인터랙티브 탐색기**:
```
📊 Disk Space Analyzer
═══════════════════════════════════════════════
Current: /Users/YourName
Total: 156.8GB

├─ 📁 Library                         45.2GB  ← 가장 큰 폴더
│  ├─ 📁 Caches                       28.4GB
│  └─ 📁 Application Support          16.8GB
├─ 📁 Downloads                       32.6GB
│  ├─ 📄 Xcode-14.3.1.dmg            12.3GB  ← 큰 파일!
│  ├─ 📄 backup_2023.zip              8.6GB  ← 오래된 백업
│  └─ 📦 old_projects.tar.gz          5.2GB
├─ 📁 Movies                          28.9GB
│  ├─ 📄 vacation_2023.mov           15.4GB  ← 동영상
│  └─ 📄 screencast_raw.mp4           8.8GB
├─ 📁 Documents                       18.4GB
└─ 📁 Desktop                         12.7GB

────────────────────────────────────────────────
↑/↓: Navigate | ENTER: Open | ←: Back | DEL: Delete
Q: Quit | /: Search
```

**큰 파일 삭제하기**:
```
1. Downloads 폴더 선택 (ENTER)
   ↓
2. Xcode-14.3.1.dmg 선택
   ↓
3. DELETE 키 누르기
   ↓
4. 확인 메시지:

   ⚠️  Delete File?
   ─────────────────────────────
   Xcode-14.3.1.dmg (12.3GB)

   This action cannot be undone!

   [Y] Yes, delete  [N] Cancel

5. Y 입력
   ↓
6. 삭제 완료:
   ✓ Deleted: Xcode-14.3.1.dmg (12.3GB freed)
```

**검색 기능**:
```
/ 키를 누르면 검색 모드

Search: mp4

Results:
  📄 screencast_raw.mp4 (8.8GB)
  📄 tutorial_final.mp4 (2.3GB)
  📄 demo_video.mp4 (1.1GB)
```

---

### 🌳 고급 예제: 배치 스크립트로 자동화

#### 시나리오: 매월 자동 청소 스크립트

```bash
#!/bin/bash
# monthly_clean.sh - 매월 자동 Mac 청소

echo "🐹 Monthly Mac Cleanup Started"
echo "Date: $(date)"
echo ""

# 1. 현재 상태 기록
echo "📊 Before cleanup:"
df -h / | tail -1 | awk '{print "Free space: " $4}'
echo ""

# 2. 미리보기 실행 (선택사항)
echo "🔍 Preview mode..."
mo clean --dry-run
echo ""

# 3. 사용자 확인
read -p "Proceed with cleanup? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 0
fi

# 4. 실제 청소
echo "🧹 Cleaning..."
mo clean

# 5. 결과 기록
echo ""
echo "📊 After cleanup:"
df -h / | tail -1 | awk '{print "Free space: " $4}'

# 6. 로그 저장
echo "Cleanup completed at $(date)" >> ~/cleanup_log.txt

echo ""
echo "✨ Done! Log saved to ~/cleanup_log.txt"
```

**Cron으로 자동 실행 설정**:
```bash
# Crontab 편집
crontab -e

# 매월 1일 오전 2시에 실행
0 2 1 * * /path/to/monthly_clean.sh
```

**알림 추가 (선택)**:
```bash
# macOS 알림 보내기
osascript -e 'display notification "Mac cleanup completed!" with title "Mole"'
```

---

## 내부 작동 원리 이해하기

### 🔬 Mole의 아키텍처

```
mole (메인 스크립트)
│
├─ lib/
│  ├─ common.sh        ← 공통 함수들
│  ├─ colors.sh        ← 컬러 출력
│  └─ utils.sh         ← 유틸리티
│
├─ bin/
│  ├─ clean.sh         ← 청소 로직
│  ├─ uninstall.sh     ← 삭제 로직
│  └─ analyze.sh       ← 분석 로직
│
└─ install.sh          ← 설치 스크립트
```

### 📝 핵심 코드 분석

#### clean.sh의 작동 원리

```bash
# 1. 청소 대상 정의
CACHE_DIRS=(
    "$HOME/Library/Caches"
    "$HOME/Library/Logs"
    "/Library/Caches"
    "/System/Library/Caches"
)

# 2. 각 디렉토리 순회
for dir in "${CACHE_DIRS[@]}"; do
    if [[ -d "$dir" ]]; then
        # 크기 계산
        size=$(du -sh "$dir" | cut -f1)

        # 삭제 (dry-run 모드 체크)
        if [[ "$DRY_RUN" == "true" ]]; then
            echo "Would delete: $dir ($size)"
        else
            rm -rf "$dir"/*
            echo "✓ Deleted: $dir ($size)"
        fi
    fi
done
```

**안전 장치**:
```bash
# 중요 파일 보호
PROTECTED_FILES=(
    "*.plist"              # 설정 파일
    "Application Support"  # 앱 데이터
    "*.db"                # 데이터베이스
    "*.sqlite"            # SQLite DB
)

# 삭제 전 체크
for file in *; do
    for pattern in "${PROTECTED_FILES[@]}"; do
        if [[ "$file" == $pattern ]]; then
            echo "⚠️  Skipping protected file: $file"
            continue 2  # 외부 루프로 건너뛰기
        fi
    done

    # 안전한 파일만 삭제
    rm -rf "$file"
done
```

#### uninstall.sh의 검색 로직

```bash
# 앱 관련 파일 찾기
find_app_files() {
    local app_name="$1"
    local bundle_id="$2"  # com.adobe.Photoshop

    local search_locations=(
        "$HOME/Library/Preferences"
        "$HOME/Library/Application Support"
        "$HOME/Library/Caches"
        "$HOME/Library/Logs"
        "$HOME/Library/Cookies"
        "$HOME/Library/WebKit"
        "$HOME/Library/Saved Application State"
        "$HOME/Library/LaunchAgents"
        "/Library/LaunchDaemons"
        "/Library/Application Support"
        "/Library/Preferences"
        "/Library/Logs"
    )

    local found_files=()

    for location in "${search_locations[@]}"; do
        if [[ -d "$location" ]]; then
            # Bundle ID로 검색
            while IFS= read -r -d '' file; do
                found_files+=("$file")
            done < <(find "$location" -name "*$bundle_id*" -print0 2>/dev/null)

            # 앱 이름으로 검색
            while IFS= read -r -d '' file; do
                found_files+=("$file")
            done < <(find "$location" -name "*$app_name*" -print0 2>/dev/null)
        fi
    done

    # 중복 제거
    printf '%s\n' "${found_files[@]}" | sort -u
}
```

---

## 실전 활용 예제

### 💡 팁 1: 개발 환경 최적화

**상황**: Node.js 프로젝트가 많아서 npm 캐시가 너무 큼

```bash
# 1. npm 캐시만 선택적으로 청소
npm cache clean --force

# 2. Mole로 전체 청소 (npm 제외)
mo clean --whitelist
# → Node.js packages 체크하여 보호

# 3. 오래된 node_modules 찾기
find ~ -name "node_modules" -type d -prune -print | \
    xargs du -sh | sort -rh | head -10

# 4. 안 쓰는 프로젝트의 node_modules 삭제
# 각 프로젝트 폴더에서:
rm -rf node_modules
```

**자동화 스크립트**:
```bash
#!/bin/bash
# clean_old_node_modules.sh

# 1년 이상 수정 안 된 node_modules 찾기
find ~ -name "node_modules" -type d -mtime +365 -print | while read dir; do
    size=$(du -sh "$dir" | cut -f1)
    echo "Found: $dir ($size)"

    # 삭제 여부 확인
    read -p "Delete? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf "$dir"
        echo "✓ Deleted!"
    fi
done
```

### 💡 팁 2: 프로젝트별 청소 전략

```yaml
웹 개발자:
  청소 주기: 주 1회
  보호 대상:
    - Node.js packages
    - npm cache
  삭제 대상:
    - 브라우저 캐시
    - 임시 빌드 파일

iOS 개발자:
  청소 주기: 주 2회
  보호 대상:
    - Xcode derived data (현재 프로젝트)
    - CocoaPods 캐시
  삭제 대상:
    - 오래된 빌드
    - 시뮬레이터 로그

일반 사용자:
  청소 주기: 월 1회
  보호 대상:
    - 없음 (전부 삭제 OK)
  삭제 대상:
    - 모든 캐시
    - 모든 로그
```

### 💡 팁 3: 공간 확보 우선순위 전략

```
1단계: 빠른 승리 (Quick Wins)
  → mo clean
  예상 효과: 20-50GB

2단계: 큰 파일 정리
  → mo analyze
  → Downloads, Movies 폴더 정리
  예상 효과: 30-100GB

3단계: 앱 정리
  → mo uninstall
  → 안 쓰는 앱 삭제
  예상 효과: 10-50GB

4단계: 수동 정리
  → 프로젝트 폴더
  → 백업 파일
  예상 효과: 변동 큼
```

---

## 문제 해결 가이드

### ⚠️ 문제 1: "Permission denied" 오류

**증상**:
```bash
$ mo clean
Error: Permission denied
Cannot delete /Library/Caches/
```

**원인**: 시스템 폴더는 관리자 권한 필요

**해결책**:
```bash
# 방법 1: sudo로 실행
sudo mo clean

# 방법 2: 사용자 폴더만 청소 (권한 불필요)
mo clean --user-only  # (이 옵션은 가정)
```

### ⚠️ 문제 2: 앱 삭제 후 작동 안 함

**증상**:
```
앱을 Mole로 삭제했는데
다시 설치해도 실행이 안 됨
```

**원인**: Launch Agent가 충돌

**해결책**:
```bash
# 1. Launch Agent 확인
ls ~/Library/LaunchAgents/

# 2. 관련 파일 수동 삭제
rm ~/Library/LaunchAgents/com.app-name.*

# 3. Mac 재시작
sudo shutdown -r now
```

### ⚠️ 문제 3: 청소 후 앱이 느려짐

**증상**:
```
Chrome이 청소 후 느려졌어요!
```

**원인**: 캐시가 전부 삭제되어 처음부터 다시 생성 중

**해결책**:
```
이건 정상입니다!

첫 실행: 느림 (캐시 재생성 중)
        ↓
두 번째부터: 정상 속도

▶ 대기 시간:
  - Chrome: 10-30초
  - 일반 앱: 5-10초
  - 개발 도구: 1-5분
```

### ⚠️ 문제 4: Homebrew 캐시 삭제 후 문제

**증상**:
```bash
$ brew install new-package
Error: Could not download...
매우 느림
```

**원인**: Homebrew 캐시가 삭제됨

**복구**:
```bash
# 1. Homebrew 업데이트
brew update

# 2. 캐시 다시 생성
brew cleanup

# 3. 다음부터는 보호
mo clean --whitelist
# → Homebrew 체크!
```

---

## 핵심 정리

### ✅ 꼭 기억할 7가지

1. **항상 --dry-run으로 먼저 확인**
   ```bash
   mo clean --dry-run
   ```
   - 안전 제일!
   - 삭제될 파일 미리 보기

2. **화이트리스트로 중요 캐시 보호**
   ```bash
   mo clean --whitelist
   ```
   - 개발 도구 캐시 보호
   - 재다운로드 시간 절약

3. **정기적 청소 (월 1회 권장)**
   ```
   ✅ 적절: 월 1회, 공간 부족 시
   ❌ 과도: 매일, 매주
   ```

4. **앱 삭제는 Mole로**
   ```
   휴지통: 30% 삭제
   Mole: 100% 완전 제거
   ```

5. **큰 파일부터 정리**
   ```bash
   mo analyze
   ```
   - 큰 파일 우선 삭제
   - 효과 즉시 체감

6. **안전한 파일만 삭제됨**
   ```
   ✅ 삭제: 캐시, 로그, 임시 파일
   ❌ 보호: 설정, 데이터, 문서
   ```

7. **백업은 별도로**
   ```
   Mole ≠ 백업 도구
   중요 파일은 Time Machine으로!
   ```

---

### 📊 청소 효과 통계

| 사용자 유형 | 평균 회수 공간 | 권장 주기 |
|------------|--------------|----------|
| 일반 사용자 | 20-30GB | 월 1회 |
| 개발자 | 50-80GB | 주 1회 |
| 디자이너 | 30-50GB | 격주 1회 |
| 파워 유저 | 80-150GB | 주 2회 |

---

### 🎯 청소 체크리스트

매번 청소할 때:

- [ ] **백업 확인** - Time Machine 최신인가?
- [ ] **미리보기** - `mo clean --dry-run` 실행
- [ ] **화이트리스트** - 중요 캐시 보호 설정
- [ ] **실행** - `mo clean` 실행
- [ ] **확인** - 공간 확보량 체크
- [ ] **앱 테스트** - 주요 앱 정상 작동 확인
- [ ] **불필요 앱 삭제** - `mo uninstall`로 청소
- [ ] **큰 파일 정리** - `mo analyze`로 탐색

---

### 🔧 고급 팁

#### Tip 1: 특정 앱 캐시만 삭제

```bash
# Chrome 캐시만 삭제
rm -rf ~/Library/Caches/Google/Chrome/

# Safari 캐시만 삭제
rm -rf ~/Library/Caches/com.apple.Safari/

# Xcode 캐시만 삭제
rm -rf ~/Library/Developer/Xcode/DerivedData/
```

#### Tip 2: 시스템 상태 모니터링

```bash
# 현재 디스크 사용량
df -h

# 가장 큰 폴더 Top 10
du -sh ~/* | sort -rh | head -10

# 캐시 크기 확인
du -sh ~/Library/Caches

# 로그 크기 확인
du -sh ~/Library/Logs
```

#### Tip 3: 청소 전후 비교

```bash
#!/bin/bash
# compare_cleanup.sh

# 청소 전
echo "Before cleanup:"
df -h / | tail -1
du -sh ~/Library/Caches ~/Library/Logs

# 청소
mo clean

# 청소 후
echo "After cleanup:"
df -h / | tail -1
du -sh ~/Library/Caches ~/Library/Logs
```

---

## 연결된 노트
- [[Mac 시스템 관리 가이드]]
- [[Bash 스크립트 기초]]
- [[CLI 도구 모음]]
- [[시스템 최적화 전략]]
- [[개발 환경 설정]]
- [[Homebrew 완전 정복]]

---

## 참고 자료
- **공식 GitHub**: https://github.com/tw93/Mole
- **사용 가이드 (중문)**: https://github.com/tw93/Mole/blob/main/GUIDE.md
- **Issue 트래커**: https://github.com/tw93/Mole/issues
- **Mac 시스템 관리**: https://support.apple.com/

---

**💬 마지막 조언**

> "Mole은 강력한 도구지만, 모든 도구가 그렇듯 올바르게 사용해야 합니다. 첫 실행은 항상 `--dry-run`으로, 중요한 데이터는 Time Machine으로 백업하세요. 그리고 한 달에 한 번 정도 청소하는 것만으로도 Mac을 쾌적하게 유지할 수 있습니다!"

**Happy cleaning! 🐹✨**
