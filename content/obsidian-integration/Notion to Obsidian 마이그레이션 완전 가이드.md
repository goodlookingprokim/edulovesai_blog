---
title: "Notion to Obsidian 마이그레이션 완전 가이드"
created: '2025-10-06'
last_modified: '2025-10-06'
tags:
  - Obsidian/마이그레이션
  - Notion/내보내기
  - 개발도구/CLI
  - 지식관리/전환
  - 튜토리얼/초보자
status: "완료"
type: "가이드"
priority: "high"
github_repo: "https://github.com/bitbonsai/notion2obsidian"
---

# Notion to Obsidian 마이그레이션 완전 가이드

## 📋 목차
1. [[#왜 Notion에서 Obsidian으로 옮기나요]]
2. [[#notion2obsidian이 뭔가요]]
3. [[#어떻게 작동하나요]]
4. [[#설치하고 사용하기]]
5. [[#실전 마이그레이션 예제]]
6. [[#문제 해결 가이드]]
7. [[#핵심 정리]]

---

## 왜 Notion에서 Obsidian으로 옮기나요?

### 📖 실생활 이야기로 이해하기

> 여러분의 모든 노트가 한 회사의 서버에만 있다고 상상해보세요. 마치 모든 일기를 남의 집 창고에 보관하는 것과 같죠. 언젠가 그 창고가 문을 닫거나, 요금이 너무 비싸지면 어떡할까요?

**Notion의 문제점**:
- 인터넷 없이는 접근 어려움 (비행기에서 노트를 볼 수 없어요!)
- 데이터가 Notion 서버에만 존재 (내 컴퓨터에 진짜 파일이 없어요)
- 다른 앱으로 옮기기 어려움 (한번 들어가면 나오기 힘든 호텔 캘리포니아 같아요)

**Obsidian의 장점**:
- 내 컴퓨터에 실제 파일로 저장 (`.md` 마크다운 파일)
- 인터넷 없이도 언제나 사용 가능
- 다른 앱에서도 쉽게 열림 (메모장으로도 볼 수 있어요!)

이것은 마치 **임대 아파트에서 내 집으로 이사하는 것**과 같습니다! 🏠

---

## notion2obsidian이 뭔가요?

### 📦 택배 정리 도우미 비유

notion2obsidian은 **이사 짐 정리 전문가**라고 생각하면 됩니다.

Notion에서 내보낸 파일은 이렇게 엉망입니다:
```
내 일기 abc123def456789012345678901234567.md
여행 계획 xyz789uvw456rst123mno456pqr789.md
```

이 도구는 이렇게 깔끔하게 정리해줍니다:
```
내 일기.md
여행 계획.md
```

**무엇을 하는 도구인가요?**
- Notion에서 내보낸 지저분한 파일들을 Obsidian용으로 **자동 변환**
- 32자짜리 이상한 ID를 **자동으로 제거**
- 링크를 Obsidian 형식으로 **자동 변경**
- 파일에 메타데이터(설명 정보)를 **자동 추가**

### 🎯 핵심 개념 (5살 아이에게 설명한다면)

"notion2obsidian은 지저분한 장난감 상자를 받아서, 모든 장난감을 깨끗이 정리하고, 라벨을 붙이고, 제자리에 놓아주는 마법 상자예요!"

---

## 어떻게 작동하나요?

### 🔄 처리 과정 (WHY → WHAT → HOW)

#### 1️⃣ WHY (왜 이 과정이 필요할까요?)

Notion은 내보낼 때 모든 파일에 **고유 ID**를 붙입니다. 이건 마치 도서관에서 책마다 바코드 번호를 붙이는 것과 같아요. 하지만 집에서 책을 읽을 때 바코드가 필요할까요? 아니죠!

#### 2️⃣ WHAT (무엇을 변환하나요?)

**변환 전 (Notion 형식)**:
```markdown
[다른 노트 보기](My%20Note%20abc123def456.md)
```

**변환 후 (Obsidian 형식)**:
```markdown
[[My Note|다른 노트 보기]]
```

#### 3️⃣ HOW (어떻게 작동하나요?)

마치 **공장 생산 라인**처럼 단계별로 처리합니다:

```
📥 1단계: 파일 분석
    ↓
🔍 2단계: 이상한 ID 찾기
    ↓
✂️  3단계: ID 제거하기
    ↓
🔗 4단계: 링크 변환하기
    ↓
📝 5단계: 메타데이터 추가
    ↓
✅ 6단계: 완성!
```

---

## 설치하고 사용하기

### 🌱 기초 예제 (초보자용)

#### 준비물
- 컴퓨터 (Mac, Windows, Linux 모두 가능)
- Notion에서 내보낸 ZIP 파일
- 10분의 시간

#### Step 1: Bun 설치 (실행 엔진)

**Bun이 뭔가요?**
- JavaScript를 빠르게 실행해주는 프로그램
- 마치 자동차를 움직이는 엔진 같은 존재

**설치 방법** (Mac/Linux):
```bash
# 이 명령어 하나만 복사해서 터미널에 붙여넣기!
curl -fsSL https://bun.sh/install | bash
```

**설치 방법** (Windows):
```powershell
# PowerShell에서 실행
irm bun.sh/install.ps1 | iex
```

#### Step 2: notion2obsidian 다운로드

```bash
# 1. 프로젝트 폴더 받기
git clone https://github.com/bitbonsai/notion2obsidian.git

# 2. 폴더로 이동
cd notion2obsidian

# 3. 필요한 도구들 설치 (자동으로 설치됨)
bun install

# 4. 실행 권한 주기 (Mac/Linux만)
chmod +x notion2obsidian.js
```

**🤔 생각해보기**: `bun install`은 왜 필요할까요?
<details>
<summary>답변 보기</summary>
프로그램이 작동하려면 여러 보조 도구들이 필요해요. 마치 요리할 때 재료가 필요한 것처럼요! `bun install`은 필요한 모든 재료를 자동으로 준비해줍니다.
</details>

#### Step 3: 첫 번째 변환 (가장 간단한 방법)

```bash
# Notion에서 내보낸 파일을 변환하기
./notion2obsidian.js ./Export-abc123.zip
```

**실행하면 이런 화면이 나옵니다**:
```
📦 Extracting zip file...
Extracting to: Export-2d6f-extracted

✓ Extracted 542 files

📦 Notion to Obsidian
Found 542 markdown files
Found 23 directories

Press ENTER to proceed...
```

**ENTER를 누르면 자동으로 변환이 시작됩니다!** 🎉

---

### 🌿 중급 예제 (실무 적용)

이제 실제로 자주 사용하는 옵션들을 배워봅시다!

#### 옵션 1: 미리보기 모드 (안전하게 확인하기)

```bash
# --dry-run: 실제로 변환하지 않고 미리보기만
./notion2obsidian.js ./Export-abc123.zip --dry-run
```

**이것은 마치 옷을 사기 전에 먼저 입어보는 것과 같아요!**

**미리보기 결과 예시**:
```
═══ MIGRATION PREVIEW ═══

Files to rename: 542

Sample:
  − My Note abc123def456...xyz.md
  + My Note.md

Directories to rename: 23

Sample frontmatter:
---
title: "My Note"
tags: [projects, work]
---

Press ENTER to proceed, or Ctrl+C to cancel...
```

#### 옵션 2: 출력 폴더 지정하기

```bash
# -o 옵션: 변환된 파일을 원하는 곳에 저장
./notion2obsidian.js ./Export-abc123.zip -o ~/Documents/Obsidian/내Vault
```

**실생활 비유**: 택배를 받을 때 "현관문 앞에 놔주세요" vs "경비실에 맡겨주세요"를 선택하는 것과 같아요!

#### 옵션 3: 여러 ZIP 파일 한 번에 처리

```bash
# *.zip: 현재 폴더의 모든 ZIP 파일 처리
./notion2obsidian.js *.zip -o ~/Documents/Obsidian
```

**🤔 생각해보기**: `*.zip`에서 `*`는 무슨 뜻일까요?
<details>
<summary>답변 보기</summary>
`*`는 "모든 것"을 의미하는 와일드카드예요. `*.zip`는 "이름이 뭐든 상관없이 .zip으로 끝나는 모든 파일"이라는 뜻입니다!
</details>

---

### 🌳 고급 예제 (심화 학습)

#### 복잡한 시나리오: 대량 파일 + 커스텀 설정

```bash
# 여러 옵션을 동시에 사용하기
./notion2obsidian.js \
  Export-*.zip \
  -o ~/Documents/Obsidian/ImportedNotes \
  --dataview \
  --verbose
```

**각 옵션 설명**:
- `Export-*.zip`: Export로 시작하는 모든 ZIP 파일
- `-o`: 저장할 폴더 지정
- `--dataview`: 데이터베이스를 Dataview 플러그인용으로 변환
- `--verbose`: 자세한 처리 과정 표시

#### 성능 최적화 (대용량 파일용)

notion2obsidian은 **배치 처리(Batch Processing)**를 사용합니다.

**배치 처리란?**
- 한 번에 하나씩 처리 ❌ (느림)
- 50개씩 묶어서 동시 처리 ✅ (빠름)

```javascript
// 코드 내부 설정 (고급 사용자용)
const BATCH_SIZE = 50; // 기본값

// 메모리가 적은 컴퓨터라면?
const BATCH_SIZE = 25; // 반으로 줄이기
```

**실생활 비유**:
- 접시 하나씩 설거지 vs 여러 접시를 한꺼번에 담가두고 설거지
- 당연히 한꺼번에 하는 게 빠르겠죠!

---

## 실전 마이그레이션 예제

### 🎯 완전한 실전 예제

#### 상황
수진이는 Notion에 3년간 작성한 1,200개의 노트를 Obsidian으로 옮기고 싶습니다.

#### 전체 과정 (A부터 Z까지)

**1단계: Notion에서 내보내기**
```
Notion → Settings & Members → Settings → Export all workspace content
→ Export format: Markdown & CSV
→ Include subpages: Yes
→ Export 클릭!
```

다운로드되는 파일: `Export-20251006.zip`

**2단계: 안전하게 미리보기**
```bash
# 먼저 어떻게 변환될지 확인
./notion2obsidian.js Export-20251006.zip --dry-run
```

**결과**:
```
Found 1,200 markdown files
Found 87 directories
⚠ Warning: 15 duplicate filenames found

Sample transformation:
  − 프로젝트 계획 abc123def456.md → 프로젝트 계획.md
  − 회의록 xyz789uvw456.md → 회의록.md

Press ENTER to proceed or Ctrl+C to cancel
```

**3단계: 실제 변환 실행**
```bash
# 이제 진짜 변환! Obsidian 폴더에 바로 저장
./notion2obsidian.js Export-20251006.zip -o ~/Documents/Obsidian/Notion-Import
```

**4단계: 결과 확인**
```
✅ Migration complete!

Summary:
   📄 Added frontmatter to 1,200 files
   🔗 Converted 3,456 links
   ✏️  Renamed 1,200 files
   📁 Renamed 87 directories

Your files are ready at:
~/Documents/Obsidian/Notion-Import
```

**5단계: Obsidian에서 열기**
- Obsidian 열기
- "Open folder as vault" 클릭
- `~/Documents/Obsidian/Notion-Import` 선택
- 완료! 🎉

---

## 문제 해결 가이드

### ⚠️ 자주 발생하는 문제들

#### 문제 1: "Permission denied" 오류

**증상**:
```
bash: ./notion2obsidian.js: Permission denied
```

**원인**: 파일에 실행 권한이 없어요.

**해결책**:
```bash
# 실행 권한 주기 (Mac/Linux)
chmod +x notion2obsidian.js

# 다시 실행
./notion2obsidian.js Export-abc123.zip
```

**실생활 비유**: 자물쇠 걸린 문을 열쇠로 여는 것과 같아요!

---

#### 문제 2: 중복 파일명 경고

**증상**:
```
⚠ Warning: 15 duplicate filenames found
These will be disambiguated using folder paths
```

**원인**: Notion에서 다른 폴더에 같은 이름의 파일이 있었어요.

**해결책**: 걱정하지 마세요! 자동으로 처리됩니다.

**처리 방법**:
```yaml
# 파일 1 (Work/Projects/계획.md)
---
title: "계획"
folder: "Work/Projects"
---

# 파일 2 (Personal/Life/계획.md)
---
title: "계획"
folder: "Personal/Life"
---
```

폴더 정보가 메타데이터에 저장되어 구분됩니다!

---

#### 문제 3: 링크가 깨졌어요

**증상**: Obsidian에서 링크를 클릭하면 "파일을 찾을 수 없음"

**원인**:
1. 원본 Notion에서 이미 깨진 링크였거나
2. 특수문자가 포함된 파일명

**해결책**:
```bash
# 변환 후 Obsidian의 "Find orphaned files" 기능 사용
# Settings → Files & Links → Detect all broken links
```

---

#### 문제 4: 메모리 부족 (대용량 파일)

**증상**:
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**원인**: 10,000개 이상의 파일을 한 번에 처리하려고 할 때

**해결책 1**: 배치 크기 줄이기
```bash
# notion2obsidian.js 파일 편집
# 50 → 25로 변경
const BATCH_SIZE = 25;
```

**해결책 2**: ZIP 파일 나누기
```bash
# 큰 ZIP을 작은 ZIP으로 나누어 처리
./notion2obsidian.js Part1.zip -o ~/Obsidian/Import1
./notion2obsidian.js Part2.zip -o ~/Obsidian/Import2
```

---

## 핵심 정리

### ✅ 꼭 기억할 5가지

1. **항상 --dry-run으로 먼저 확인하기**
   ```bash
   ./notion2obsidian.js file.zip --dry-run
   ```

2. **출력 폴더를 명시하면 안전**
   ```bash
   ./notion2obsidian.js file.zip -o ~/safe-location
   ```

3. **중복 파일은 자동으로 처리됨** (걱정 No!)

4. **원본 ZIP 파일은 항상 백업 보관**

5. **문제 생기면 다시 실행하면 됨** (멱등성 보장)

---

### 📊 Before & After 비교

#### 변환 전 (Notion 형식)
```
📁 내보낸파일/
├── 프로젝트abc123def456789.md
├── 회의록xyz789uvw456rst.md
└── 이미지폴더mno456pqr789/
    └── 스크린샷abc123.png
```

**파일 내용**:
```markdown
# 프로젝트

[관련 문서](회의록%20xyz789.md)를 참고하세요.
```

#### 변환 후 (Obsidian 형식)
```
📁 내보낸파일/
├── 프로젝트.md
├── 회의록.md
└── 이미지폴더/
    └── 스크린샷.png
```

**파일 내용**:
```markdown
---
title: "프로젝트"
tags: [work, projects]
notion-id: "abc123def456789"
created: 2025-10-06
---

# 프로젝트

[[회의록|관련 문서]]를 참고하세요.
```

---

### 🎓 다음 단계 학습

notion2obsidian을 마스터했다면:

1. **Obsidian Dataview 플러그인** 배우기
   - 데이터베이스처럼 노트 쿼리하기

2. **Templater 플러그인** 활용
   - 자동화된 노트 생성

3. **Graph View** 활용
   - 지식 네트워크 시각화

---

### 💡 Pro Tips

#### Tip 1: 태그 자동 생성 활용
```yaml
# 폴더 구조: Work/Projects/2025/AI
# 자동 생성되는 태그:
tags: [work, projects, 2025, ai]
```

#### Tip 2: 원본 파일명 보존
```yaml
# aliases에 원본 이름이 저장됨
aliases:
  - "프로젝트 abc123def456789"
```

나중에 원본 이름으로도 검색 가능!

#### Tip 3: Notion ID로 역추적
```yaml
# 문제 생기면 원본 찾기 쉬움
notion-id: "abc123def456789"
```

---

## 연결된 노트
- [[Obsidian 시작 가이드]]
- [[PARA 시스템으로 노트 정리하기]]
- [[Dataview 플러그인 완전 정복]]
- [[마크다운 문법 총정리]]
- [[지식관리 시스템 구축하기]]

---

## 참고 자료
- **공식 GitHub**: https://github.com/bitbonsai/notion2obsidian
- **공식 문서**: https://bitbonsai.github.io/notion2obsidian/
- **Obsidian 포럼**: https://forum.obsidian.md
- **Notion 내보내기 가이드**: https://www.notion.so/help/export-your-content

---

**💬 마지막 조언**

> "처음엔 어려워 보여도 괜찮아요! 한 번 성공하면 다음엔 5분 만에 할 수 있게 됩니다. 실수해도 원본 ZIP 파일만 있으면 언제든 다시 시작할 수 있으니 용기내서 시도해보세요!"

**Happy migrating! 🚀**
