---
title: "Skill Seeker 완벽 가이드 Part 3 - 고급 기능과 문제 해결"
created: '2025-10-24'
last_modified: '2025-10-24'
tags:
  - AI/도구
  - Claude/Skills
  - 개발도구/문서화
  - 고급가이드
  - 문제해결
  - 최적화
status: "완료"
type: "가이드"
priority: "high"
---

# 🔧 Skill Seeker 완벽 가이드 Part 3 - 고급 기능과 문제 해결

> **이번 Part는 이런 분들을 위한 거예요:**
> 
> - 기본 Skill 만들기는 해봤어요! 💪
> - 더 빠르고 효율적으로 만들고 싶어요! ⚡
> - 큰 문서 사이트도 도전하고 싶어요! 📚
> - 문제가 생겼을 때 해결하고 싶어요! 🔧

---

## 📋 목차

1. [[#대용량 문서 처리하기 (10K+ 페이지)]]
2. [[#MCP 서버로 Claude Code와 연동]]
3. [[#성능 최적화 전략]]
4. [[#문제 해결 완벽 가이드]]
5. [[#프로 사용자 팁과 트릭]]
6. [[#실전 케이스 스터디]]

---

## 대용량 문서 처리하기 (10K+ 페이지)

### 🌊 대용량의 도전

**왜 어려울까요?**

```
일반 문서: 200~500 페이지
→ 20~40분 완료 ✅

대용량 문서: 10,000~40,000 페이지
→ 예상 시간: 20~40시간! 😱
→ 파일 크기: 수백 MB
→ Claude 업로드 제한 초과
→ 성능 저하
```

**실제 사례:**

| 문서 | 페이지 수 | 예상 시간 | 문제점 |
|------|----------|-----------|--------|
| Godot | 40,000 | 30+ 시간 | 업로드 불가 |
| AWS Docs | 25,000 | 20+ 시간 | 메모리 부족 |
| MS Docs | 35,000 | 28+ 시간 | 파일 크기 초과 |

### 🎯 해결 전략: 분할 정복

**기본 아이디어:**
```
40,000 페이지 하나의 Skill
    ↓ 분할
5개의 8,000페이지 Skill
    ↓ 더 좋은 방법
1개 Router + 5개 전문 Skill
```

**Router Skill이 뭔가요?**

> **비유: 안내 데스크**
> 
> 큰 병원에 처음 가면:
> - 안내 데스크에 "어디로 가야 하나요?" 물어봐요
> - 안내원이 "내과는 2층, 외과는 3층" 알려줘요
> - 해당 층으로 가서 진료 받아요
> 
> Router Skill:
> - 사용자 질문 분석
> - "이건 Scripting Skill에 물어봐야겠다"
> - 적절한 Sub-Skill로 안내

### 🌱 초급 - 자동 분할

#### Step 1: 페이지 수 확인

```bash
# 먼저 얼마나 큰지 확인
python3 cli/estimate_pages.py configs/godot.json

# 결과:
📊 ESTIMATION RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Pages Discovered: 38,450
📈 Estimated Total: 42,000
⚠️  WARNING: Very large documentation!
💡 Recommendation: Use split strategy

Suggested approach:
1. Use --strategy router
2. Split into 5-8 sub-skills
3. Target: ~5,000 pages per skill
```

#### Step 2: 자동 분할 설정

```bash
# 자동으로 최적 분할 수행
python3 cli/split_config.py configs/godot.json --strategy auto

# 진행:
🔍 Analyzing documentation structure...
📊 Discovered categories:
   - Scripting (8,500 pages)
   - 2D Game (7,200 pages)
   - 3D Game (9,800 pages)
   - Physics (5,400 pages)
   - Shaders (10,600 pages)

💡 Recommended split: 5 sub-skills + 1 router

✅ Generated configs:
   - configs/godot-router.json
   - configs/godot-scripting.json
   - configs/godot-2d.json
   - configs/godot-3d.json
   - configs/godot-physics.json
   - configs/godot-shaders.json
```

#### Step 3: 병렬 스크래핑

```bash
# 방법 1: 터미널 5개 띄워서 각각 실행
# Terminal 1:
python3 cli/doc_scraper.py --config configs/godot-scripting.json

# Terminal 2:
python3 cli/doc_scraper.py --config configs/godot-2d.json

# Terminal 3:
python3 cli/doc_scraper.py --config configs/godot-3d.json

# ... (나머지도 동일)

# 방법 2: 백그라운드 실행 (Mac/Linux)
for config in configs/godot-*.json; do
  python3 cli/doc_scraper.py --config $config &
done
wait

echo "All sub-skills completed!"
```

**시간 절약:**

```
순차 실행:
Scripting (6시간) + 2D (5시간) + 3D (7시간) + ...
= 총 30시간 😱

병렬 실행 (5개 동시):
max(6, 5, 7, 4, 8) = 8시간 ✨
→ 73% 시간 절약!
```

#### Step 4: Router Skill 생성

```bash
# 자동으로 Router 생성
python3 cli/generate_router.py configs/godot-*.json

# 생성되는 Router Skill:
output/godot-router/
├── SKILL.md
└── routing_rules.json

# SKILL.md 내용:
"""
# Godot Engine Router Skill

## Purpose
이 Skill은 Godot 관련 질문을 분석하여
적절한 전문 Skill로 안내합니다.

## Routing Rules

### Scripting 질문 → godot-scripting skill
- GDScript 문법
- 변수, 함수, 클래스
- 신호(Signal), 노드

### 2D 질문 → godot-2d skill
- 2D 노드 (Sprite, AnimatedSprite)
- 타일맵, 충돌 감지
- 2D 물리

... (계속)

## How to Use
사용자의 질문을 읽고 키워드를 분석합니다.
그 다음 적절한 Sub-Skill을 추천합니다.

Example:
User: "GDScript에서 변수는 어떻게 선언하나요?"
→ Keywords: GDScript, 변수
→ Route to: godot-scripting skill
"""
```

#### Step 5: 모든 Skill 패키징

```bash
# 한 번에 모두 패키징
python3 cli/package_multi.py output/godot*/

# 결과:
✅ Packaged 6 skills:
   - godot-router.zip (0.5 MB)
   - godot-scripting.zip (15 MB)
   - godot-2d.zip (12 MB)
   - godot-3d.zip (18 MB)
   - godot-physics.zip (9 MB)
   - godot-shaders.zip (20 MB)

📊 Total size: 74.5 MB
💡 All files within upload limits! ✅
```

#### Step 6: Claude에 업로드

```
1. 6개 .zip 파일 모두 업로드
2. Router를 먼저 업로드
3. Sub-skills도 차례로 업로드

사용 예:
사용자: "Godot에서 캐릭터 점프 구현하는 법?"
Router: "이 질문은 2D 게임 개발 관련이네요!
         godot-2d skill을 확인해보세요."
Claude: [godot-2d skill 활용]
        "CharacterBody2D의 velocity를 조절하면 됩니다..."
```

### 🌿 중급 - 수동 분할 전략

#### 카테고리별 분할

**언제 사용할까요?**
- 문서 구조가 명확할 때
- 주제별로 나눠져 있을 때
- 직접 컨트롤하고 싶을 때

**설정 파일 작성:**

```json
// configs/godot-split.json
{
  "name": "godot",
  "base_url": "https://docs.godotengine.org/",
  "split_strategy": "category",
  "split_config": {
    "categories": {
      "scripting": {
        "url_patterns": ["/gdscript", "/classes", "/scripting"],
        "max_pages": 8000,
        "description": "GDScript and scripting"
      },
      "2d": {
        "url_patterns": ["/2d", "/physics2d", "/sprite"],
        "max_pages": 7000,
        "description": "2D game development"
      },
      "3d": {
        "url_patterns": ["/3d", "/physics3d", "/mesh"],
        "max_pages": 10000,
        "description": "3D game development"
      }
    },
    "create_router": true
  }
}
```

**실행:**

```bash
python3 cli/split_config.py configs/godot-split.json

# 각 카테고리별 config 자동 생성
# 그 다음 Part 2처럼 실행!
```

### 🌳 고급 - 크기 기반 분할

**언제 사용할까요?**
- 문서 구조가 불명확할 때
- 카테고리 구분이 어려울 때
- 단순히 크기만 줄이고 싶을 때

```json
{
  "split_strategy": "size",
  "split_config": {
    "target_pages_per_skill": 5000,
    "overlap_pages": 100,
    "create_router": false
  }
}
```

**작동 방식:**

```
전체 20,000 페이지
→ 5,000페이지씩 4개로 분할

Skill 1: Page 1 ~ 5,100 (100 overlap)
Skill 2: Page 5,000 ~ 10,100
Skill 3: Page 10,000 ~ 15,100
Skill 4: Page 15,000 ~ 20,000

Overlap = 경계 부분 중복
→ 연속성 유지
→ 정보 누락 방지
```

---

## MCP 서버로 Claude Code와 연동

### 🤖 MCP가 뭔가요?

**Model Context Protocol (MCP)**

> **비유: 번역기**
> 
> Claude Code (영어만 함) ←→ Skill Seeker (한국어만 함)
> 
> MCP 서버가 중간에서:
> - Claude의 요청을 Skill Seeker 명령어로 번역
> - Skill Seeker 결과를 Claude가 이해할 수 있게 번역

**MCP 없을 때:**
```
사용자: "React skill 만들어줘"
→ 직접 터미널 열어서
→ python3 cli/doc_scraper.py --config configs/react.json
→ 타이핑, 오타, 귀찮음 😰
```

**MCP 있을 때:**
```
사용자 (Claude Code에서): "React skill 만들어줘"
Claude: "알겠습니다!" 
        [자동으로 명령어 실행]
        ✅ 완료!
```

### 🌱 초급 - MCP 설치하기

#### Step 1: 설치 스크립트 실행

```bash
# Skill Seeker 폴더에서
cd ~/Desktop/Skill_Seekers

# 설치 스크립트 실행
./setup_mcp.sh

# 진행:
🔧 MCP Server Setup
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Creating virtual environment... ✅
2. Installing dependencies... ✅
3. Configuring Claude Code... ✅
4. Testing connection... ✅

✅ Setup complete!

Next steps:
1. Restart Claude Code
2. Ask: "List all available configs"
3. Enjoy! 🎉
```

#### Step 2: Claude Code 재시작

```
1. Claude Code 완전히 종료
2. 다시 열기
3. 새 채팅 시작
```

#### Step 3: 테스트

**Claude Code에서 이렇게 물어보세요:**

```
사용자: List all available configs
```

**Claude 응답:**

```
Using MCP tool: list_configs

Available configurations:
1. ansible-core.json
2. django.json
3. fastapi.json
4. godot.json
5. react.json
6. vue.json

Would you like to use any of these?
```

✅ **성공! MCP 연동 완료!**

### 🌿 중급 - MCP로 Skill 만들기

#### 자연어로 명령하기

**Before (터미널):**
```bash
cd ~/Desktop/Skill_Seekers
source venv/bin/activate
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --enhance-local
python3 cli/package_skill.py output/react/
```

**After (Claude Code):**
```
사용자: "React skill을 만들어줘. 
        AI 향상 기능도 사용하고,
        완성되면 패키징까지 해줘."

Claude: [MCP 도구 자동 실행]
        1. ✅ Scraping React docs...
        2. ✅ Enhancing with AI...
        3. ✅ Packaging skill...
        
        Done! react.zip is ready at output/
```

#### 사용 가능한 MCP 도구들

**1. list_configs - 설정 파일 목록**
```
사용자: "어떤 preset이 있어?"
Claude: [MCP: list_configs]
```

**2. scrape_docs - 문서 스크래핑**
```
사용자: "Vue 문서 스크랩해줘"
Claude: [MCP: scrape_docs]
        --config configs/vue.json
```

**3. enhance_skill - AI 향상**
```
사용자: "React skill을 향상시켜줘"
Claude: [MCP: enhance_skill]
        output/react/
```

**4. package_skill - 패키징**
```
사용자: "Django skill 패키징해줘"
Claude: [MCP: package_skill]
        output/django/
```

**5. upload_skill - 업로드**
```
사용자: "React skill 업로드해줘"
Claude: [MCP: upload_skill]
        output/react.zip
```

**6. create_config - 새 설정 생성**
```
사용자: "Tailwind CSS skill 설정 파일 만들어줘
        https://tailwindcss.com/docs"
        
Claude: [MCP: create_config]
        Created: configs/tailwind.json
```

**7. estimate_pages - 페이지 수 예측**
```
사용자: "React 문서가 몇 페이지나 될까?"
Claude: [MCP: estimate_pages]
        Result: ~230 pages
```

**8. split_config - 대용량 분할**
```
사용자: "Godot 문서가 너무 커.
        자동으로 분할해줘"
        
Claude: [MCP: split_config]
        Created 6 configs (router + 5 subs)
```

**9. full_workflow - 전체 워크플로**
```
사용자: "Tailwind skill을 처음부터 끝까지
        자동으로 만들어줘"
        
Claude: [MCP: full_workflow]
        1. Config created ✅
        2. Scraping... ✅
        3. Enhancing... ✅
        4. Packaging... ✅
        5. Uploaded! ✅
```

### 🌳 고급 - MCP 커스터마이징

#### 나만의 MCP 도구 추가

**파일: mcp/custom_tools.py**

```python
# 예: 품질 점검 도구
@mcp.tool()
def check_skill_quality(skill_path: str) -> dict:
    """
    Skill의 품질을 점검합니다.
    
    Args:
        skill_path: Skill 폴더 경로
    
    Returns:
        품질 점수와 개선 제안
    """
    skill_md = Path(skill_path) / "SKILL.md"
    
    # 점검 항목
    checks = {
        "has_examples": check_code_examples(skill_md),
        "has_categories": check_categories(skill_path),
        "file_size_ok": check_file_size(skill_path),
        "markdown_valid": check_markdown(skill_md)
    }
    
    score = sum(checks.values()) / len(checks) * 100
    
    return {
        "score": score,
        "checks": checks,
        "suggestions": generate_suggestions(checks)
    }
```

**사용:**

```
사용자: "React skill의 품질을 점검해줘"
Claude: [MCP: check_skill_quality]
        
        📊 Quality Report
        ━━━━━━━━━━━━━━━━
        Overall Score: 85/100
        
        ✅ Has code examples
        ✅ Categories present
        ✅ File size OK
        ⚠️  Markdown formatting issues
        
        💡 Suggestions:
        - Fix heading levels in SKILL.md
        - Add more beginner examples
```

---

## 성능 최적화 전략

### ⚡ 속도 향상 팁

#### 1. 병렬 처리 활용

**PDF 스크래핑 최적화:**

```bash
# 일반 모드: 15분
python3 cli/pdf_scraper.py --pdf manual.pdf --name myskill

# 병렬 모드: 5분 (3배 빠름!)
python3 cli/pdf_scraper.py \
  --pdf manual.pdf \
  --name myskill \
  --parallel \
  --workers 8
```

**웹 스크래핑 최적화:**

```json
{
  "name": "react",
  "rate_limit": 0.2,  // 더 빠르게 (위험 ⚠️)
  "max_concurrent": 5  // 5개 동시 요청
}
```

**⚠️ 주의사항:**

```
rate_limit 너무 낮추면:
❌ 서버에서 차단될 수 있어요
❌ IP 밴 위험
❌ 불완전한 데이터

추천 설정:
✅ 테스트: rate_limit = 0.3
✅ 안전: rate_limit = 0.5
✅ 매우 안전: rate_limit = 1.0
```

#### 2. 캐싱 전략

**첫 실행:**
```bash
python3 cli/doc_scraper.py --config configs/react.json
# 30분 소요
```

**캐시 활용:**
```bash
# 데이터는 그대로, Skill만 재생성
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --skip-scrape
# 1분 미만!
```

**캐시 파일 위치:**
```
output/
├── react_data/          ← 캐시!
│   ├── pages/
│   │   ├── page_001.json
│   │   ├── page_002.json
│   │   └── ...
│   └── summary.json
└── react/               ← Skill
```

**캐시 관리:**

```bash
# 캐시 확인
ls -lh output/*_data/

# 특정 캐시 삭제
rm -rf output/react_data/

# 모든 캐시 삭제 (주의!)
rm -rf output/*_data/

# 캐시 크기 확인
du -sh output/*_data/
```

#### 3. 체크포인트 시스템

**왜 필요한가요?**

```
상황:
Godot 문서 스크래핑 중 (40,000 페이지)
12,450 페이지까지 완료 (5시간 소요)
갑자기 정전! 💥

체크포인트 없으면:
❌ 처음부터 다시 (5시간 날림)

체크포인트 있으면:
✅ 12,450부터 이어서 시작!
```

**설정:**

```json
{
  "name": "godot",
  "checkpoint": {
    "enabled": true,
    "interval": 1000  // 1000페이지마다 저장
  }
}
```

**재개:**

```bash
# 중단된 스크래핑 재개
python3 cli/doc_scraper.py \
  --config configs/godot.json \
  --resume

# 화면:
🔄 Resuming from checkpoint...
✅ Found checkpoint at page 12,450
⏭️  Skipping first 12,450 pages...
🚀 Continuing from page 12,451...
```

**체크포인트 파일:**

```
output/
└── godot_data/
    ├── .checkpoint  ← 체크포인트 정보
    ├── pages/
    └── summary.json
```

---

## 문제 해결 완벽 가이드

### 🔧 일반적인 문제들

#### 문제 1: "No module named 'requests'"

**증상:**
```bash
$ python3 cli/doc_scraper.py ...
ModuleNotFoundError: No module named 'requests'
```

**원인:**
가상환경이 활성화되지 않았거나, 라이브러리 미설치

**해결 단계:**

```bash
# 1. 가상환경 활성화 확인
# 프롬프트에 (venv) 표시 있나요?

# 없으면 활성화:
source venv/bin/activate

# 2. 라이브러리 설치 확인
pip list | grep requests

# 없으면 설치:
pip install requests beautifulsoup4

# 3. 다시 실행
python3 cli/doc_scraper.py --config configs/react.json
```

#### 문제 2: "Empty pages scraped"

**증상:**
```
✅ 200 pages scraped
📊 But content is empty! 
```

**원인:**
잘못된 CSS 선택자

**진단:**

```python
# 테스트 스크립트: test_selector.py
from bs4 import BeautifulSoup
import requests

url = "https://react.dev/learn"
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

# 여러 선택자 테스트
selectors = [
    'article',
    'main',
    'div.content',
    'div[role="main"]'
]

for sel in selectors:
    result = soup.select_one(sel)
    if result:
        print(f"✅ '{sel}' works!")
        print(f"   Content preview: {result.text[:100]}...")
    else:
        print(f"❌ '{sel}' failed")
```

**실행:**

```bash
python3 test_selector.py

# 결과:
❌ 'article' failed
✅ 'main' works!
   Content preview: Learn React Quick Start...
❌ 'div.content' failed
✅ 'div[role="main"]' works!
   Content preview: Learn React Quick Start...
```

**수정:**

```json
{
  "selectors": {
    "main_content": "main"  ← 작동하는 선택자로 변경!
  }
}
```

#### 문제 3: "Rate limit exceeded"

**증상:**
```
🌐 Fetching page 145...
❌ Error: HTTP 429 Too Many Requests
⏸️  Paused due to rate limiting
```

**원인:**
너무 빠른 요청으로 서버 차단

**해결:**

```json
{
  "rate_limit": 1.0,  // 0.5 → 1.0으로 증가
  "retry_config": {
    "max_retries": 3,
    "backoff_factor": 2  // 실패 시 대기 시간 2배씩 증가
  }
}
```

**진행 화면:**

```
🌐 Fetching page 145...
❌ Error: HTTP 429
⏳ Waiting 2 seconds... (retry 1/3)
🌐 Retrying...
❌ Error: HTTP 429
⏳ Waiting 4 seconds... (retry 2/3)
🌐 Retrying...
✅ Success!
```

#### 문제 4: "Out of memory"

**증상:**
```
📥 Processing page 8,542...
💥 MemoryError: Unable to allocate array
```

**원인:**
메모리 부족 (대용량 문서)

**해결책 1: 분할 전략**

```bash
# 한 번에 전부 말고
python3 cli/doc_scraper.py --config configs/godot.json  # ❌

# 분할해서
python3 cli/split_config.py configs/godot.json --strategy auto
# 그 다음 각각 실행  # ✅
```

**해결책 2: 배치 크기 줄이기**

```json
{
  "processing": {
    "batch_size": 100,  // 1000 → 100으로 감소
    "clear_cache_interval": 500  // 주기적으로 캐시 정리
  }
}
```

**해결책 3: 스왑 메모리 증가 (Linux/Mac)**

```bash
# 현재 메모리 확인
free -h

# 스왑 파일 생성 (8GB)
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

#### 문제 5: "SSL Certificate Error"

**증상:**
```
❌ SSLError: certificate verify failed
```

**원인:**
SSL 인증서 문제 (회사 방화벽, 오래된 인증서)

**해결 (임시 - 보안 주의!):**

```bash
# 환경 변수 설정
export PYTHONHTTPSVERIFY=0

# 또는 코드에서:
python3 cli/doc_scraper.py \
  --config configs/mysite.json \
  --no-ssl-verify
```

**해결 (영구):**

```bash
# Mac:
/Applications/Python\ 3.11/Install\ Certificates.command

# Linux:
sudo apt-get install ca-certificates
sudo update-ca-certificates
```

---

## 프로 사용자 팁과 트릭

### 💎 비밀 기능들

#### 1. 다중 Base URL

**시나리오:**
```
React 문서가 여러 URL에 분산되어 있어요:
- https://react.dev/learn
- https://react.dev/reference
- https://react.dev/blog
```

**설정:**

```json
{
  "name": "react",
  "base_urls": [  // 복수형!
    "https://react.dev/learn",
    "https://react.dev/reference"
  ],
  "url_patterns": {
    "exclude": ["/blog"]  // 블로그 제외
  }
}
```

#### 2. 커스텀 헤더

**시나리오:**
```
사이트가 User-Agent를 체크해요
Robot이면 차단!
```

**설정:**

```json
{
  "request_headers": {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://google.com"
  }
}
```

#### 3. JavaScript 렌더링

**문제:**
```
React 문서가 JavaScript로 동적 생성돼요
일반 스크래핑으로는 내용이 없어요!
```

**해결:**

```json
{
  "rendering": {
    "enabled": true,
    "engine": "playwright",  // 또는 "selenium"
    "wait_time": 2000  // 2초 대기
  }
}
```

**설치:**

```bash
# Playwright 설치
pip install playwright
playwright install chromium

# 사용
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --render-js
```

#### 4. 증분 업데이트

**시나리오:**
```
이미 React skill 만들었는데
새 버전 문서가 나왔어요
전부 다시? 아니면 새 것만?
```

**해결:**

```bash
# 증분 업데이트 모드
python3 cli/doc_scraper.py \
  --config configs/react.json \
  --incremental

# 진행:
🔍 Checking existing data...
✅ Found 180 pages from 2025-09-15

🌐 Checking for updates...
📊 Discovered 12 new/modified pages

⏬ Downloading only new content...
[====>] 12/12 (100%)

✅ Updated! 180 → 192 pages
```

#### 5. 품질 필터

**문제:**
```
스크랩한 페이지 중 일부는
내용이 거의 없어요
(예: "Coming soon", "Under construction")
```

**해결:**

```json
{
  "quality_filters": {
    "min_content_length": 500,  // 최소 500자
    "min_code_blocks": 1,       // 최소 1개 코드 블록
    "exclude_keywords": [
      "coming soon",
      "under construction",
      "404"
    ]
  }
}
```

---

## 실전 케이스 스터디

### 📚 케이스 1: 회사 API 문서 → Skill

**배경:**
```
회사: 핀테크 스타트업
문서: 내부 API 문서 (500페이지)
목표: 팀원들이 Claude에게 API 질문할 수 있게
제약: 외부 공유 불가 (보안)
```

**도전 과제:**
1. 인증이 필요한 사이트
2. 회사 내부망에만 접근 가능
3. 민감 정보 포함

**해결 과정:**

```bash
# 1. 설정 파일 작성
{
  "name": "company-api",
  "base_url": "https://internal-docs.company.com/api",
  "request_headers": {
    "Authorization": "Bearer ${API_TOKEN}",
    "X-Internal-Access": "true"
  },
  "quality_filters": {
    "exclude_keywords": ["CONFIDENTIAL", "INTERNAL USE ONLY"]
  }
}

# 2. 환경 변수 설정
export API_TOKEN="your-token-here"

# 3. 실행 (회사 네트워크 내에서)
python3 cli/doc_scraper.py --config configs/company-api.json

# 4. 민감 정보 필터링
python3 cli/filter_sensitive.py output/company-api/

# 5. 로컬에만 유지 (업로드 X)
# Claude Code 로컬 모드로 사용
```

**결과:**
```
✅ 500페이지 문서화 완료
✅ 민감 정보 자동 제거
✅ 팀원 만족도 ⭐⭐⭐⭐⭐
✅ API 질문 응답 시간: 30분 → 30초
```

### 📚 케이스 2: 게임 개발 튜토리얼 모음

**배경:**
```
목표: Godot 게임 엔진 완벽 가이드
소스:
- 공식 문서 (40,000페이지)
- 튜토리얼 사이트 (2,000페이지)
- PDF 책 2권 (800페이지)
총 42,800페이지!
```

**전략:**

```
1단계: 분할 정복
- 공식 문서 → 5개 Sub-skill
- 튜토리얼 → 1개 Skill
- PDF 책 → 2개 Skill

2단계: Router 생성
- 메인 Router: 질문 분류
- 각 Sub-skill로 라우팅

3단계: 병렬 처리
- 8개 Skill 동시 스크래핑
- 예상 시간: 8시간
```

**실행:**

```bash
# 1. 공식 문서 분할
python3 cli/split_config.py configs/godot.json --strategy router

# 2. 튜토리얼 사이트
python3 cli/doc_scraper.py \
  --name godot-tutorials \
  --url https://godottutorials.com/ \
  --enhance-local

# 3. PDF 책들
python3 cli/pdf_scraper.py \
  --pdf books/godot_basics.pdf \
  --name godot-book1 \
  --parallel

python3 cli/pdf_scraper.py \
  --pdf books/godot_advanced.pdf \
  --name godot-book2 \
  --parallel \
  --extract-tables

# 4. 모두 병렬 실행
for config in configs/godot-*.json; do
  python3 cli/doc_scraper.py --config $config &
done
wait

# 5. 통합 Router 생성
python3 cli/generate_master_router.py \
  output/godot*/  \
  output/godot-tutorials/  \
  output/godot-book*/

# 6. 패키징
python3 cli/package_multi.py output/godot*

# 7. 업로드
python3 cli/upload_multi.py output/*.zip
```

**결과:**
```
📦 총 9개 Skill:
   - godot-master-router.zip
   - godot-scripting.zip
   - godot-2d.zip
   - godot-3d.zip
   - godot-physics.zip
   - godot-shaders.zip
   - godot-tutorials.zip
   - godot-book1.zip
   - godot-book2.zip

⏱️  총 소요 시간: 8시간 (병렬)
💾 총 크기: 245 MB
✅ 모두 업로드 성공!
```

**사용 경험:**

```
사용자: "Godot에서 3D 캐릭터 컨트롤러 만드는 법?"

Master Router: 
"3D 관련 질문이네요!
godot-3d skill을 확인합니다..."

Claude (godot-3d skill):
"CharacterBody3D를 사용하는 게 좋아요.
튜토리얼은 godot-tutorials skill에도 있어요..."

Claude (godot-tutorials skill):
"단계별 튜토리얼:
1. CharacterBody3D 노드 생성
2. CollisionShape3D 추가
3. 스크립트 작성:
   [자세한 코드 예제]
   
고급 기술은 godot-book2 skill을 참고하세요..."
```

### 📚 케이스 3: 다국어 문서

**배경:**
```
Vue.js 문서:
- 영어판: https://vuejs.org/
- 한국어판: https://ko.vuejs.org/
- 일본어판: https://ja.vuejs.org/

목표: 3개 언어 모두 Skill로
```

**접근:**

```json
// configs/vue-multilang.json
{
  "name": "vue",
  "languages": {
    "en": {
      "base_url": "https://vuejs.org/",
      "suffix": "-en"
    },
    "ko": {
      "base_url": "https://ko.vuejs.org/",
      "suffix": "-ko"
    },
    "ja": {
      "base_url": "https://ja.vuejs.org/",
      "suffix": "-ja"
    }
  },
  "merge_strategy": "separate"  // 또는 "unified"
}
```

**실행:**

```bash
# 각 언어별 Skill 생성
python3 cli/doc_scraper_multilang.py \
  --config configs/vue-multilang.json

# 결과:
output/vue-en/
output/vue-ko/
output/vue-ja/

# 패키징
python3 cli/package_multi.py output/vue-*/
```

**사용:**

```
사용자: "Vue의 Composition API를 한국어로 설명해줘"
Claude: [vue-ko skill 활용]
        "Composition API는 재사용 가능한 로직을
         구성하는 새로운 방법이에요..."
```

---

## 🎯 Part 3 마무리

### 🎓 고급 기술 마스터!

✅ **대용량 문서 정복**
- 분할 전략
- Router Skill
- 병렬 처리

✅ **MCP 마스터**
- 자연어 명령
- 9가지 도구
- 커스터마이징

✅ **성능 최적화**
- 병렬 처리
- 캐싱 전략
- 체크포인트

✅ **문제 해결**
- 5대 일반 문제
- 진단 방법
- 해결 전략

✅ **프로 팁**
- 비밀 기능
- 고급 설정
- 실전 케이스

### 🏆 이제 당신은...

```
🥉 초급 → "기본 Skill 만들 수 있어요"
🥈 중급 → "커스텀 설정, AI 향상 가능해요"
🥇 고급 → "대용량, MCP, 최적화 마스터!"
```

### 🚀 다음 도전

**이제 할 수 있는 것들:**

1. **팀 생산성 향상**
   - 회사 문서 → Skill
   - API 레퍼런스 → Skill
   - 내부 가이드 → Skill

2. **학습 가속화**
   - 공부하는 기술 → Skill
   - 온라인 강의 → Skill (PDF)
   - 기술 서적 → Skill (PDF)

3. **커뮤니티 기여**
   - 유용한 Skill 공유
   - 프리셋 만들어 PR
   - 튜토리얼 작성

4. **사이드 프로젝트**
   - Skill 제작 서비스
   - 자동화 도구 개발
   - MCP 플러그인 개발

---

## 🎁 보너스: 치트시트

### ⚡ 빠른 명령어 모음

```bash
# === 기본 사용 ===
# 프리셋 사용
python3 cli/doc_scraper.py --config configs/react.json

# 대화형 모드
python3 cli/doc_scraper.py --interactive

# 빠른 모드
python3 cli/doc_scraper.py --name myskill --url https://...

# === AI 향상 ===
# 스크래핑 + 향상
python3 cli/doc_scraper.py --config configs/react.json --enhance-local

# 향상만
python3 cli/enhance_skill_local.py output/react/

# === PDF ===
# 기본 PDF
python3 cli/pdf_scraper.py --pdf docs/manual.pdf --name myskill

# 고급 PDF
python3 cli/pdf_scraper.py --pdf docs/manual.pdf --name myskill \
  --extract-tables --parallel --workers 8

# === 대용량 ===
# 페이지 예측
python3 cli/estimate_pages.py configs/godot.json

# 자동 분할
python3 cli/split_config.py configs/godot.json --strategy auto

# === 패키징 & 업로드 ===
# 패키징
python3 cli/package_skill.py output/react/

# 자동 업로드
python3 cli/package_skill.py output/react/ --upload

# === 관리 ===
# 캐시 확인
du -sh output/*_data/

# 캐시 삭제
rm -rf output/react_data/

# 재개
python3 cli/doc_scraper.py --config configs/godot.json --resume
```

### 📋 설정 템플릿

```json
{
  "name": "myframework",
  "description": "When to use this skill",
  "base_url": "https://docs.myframework.com/",
  
  "selectors": {
    "main_content": "article",
    "title": "h1",
    "code_blocks": "pre code"
  },
  
  "url_patterns": {
    "include": ["/docs", "/guide"],
    "exclude": ["/blog", "/about"]
  },
  
  "categories": {
    "getting_started": ["intro", "install", "setup"],
    "api": ["api", "reference", "methods"],
    "guides": ["tutorial", "guide", "how-to"]
  },
  
  "rate_limit": 0.5,
  "max_pages": 500,
  
  "checkpoint": {
    "enabled": true,
    "interval": 1000
  },
  
  "quality_filters": {
    "min_content_length": 500,
    "min_code_blocks": 1
  }
}
```

---

## 🔗 연결된 노트

- [[Skill_Seeker_완벽_가이드_Part1]] - 기본 개념과 설치
- [[Skill_Seeker_완벽_가이드_Part2]] - 실전 사용법
- [[MCP 프로토콜 심화 가이드]]
- [[Claude Code 고급 활용]]
- [[성능 최적화 베스트 프랙티스]]

---

**💡 Final Pro Tip:**

```
이 가이드를 북마크하세요!
문제가 생기면:
1. Part 1: 개념 다시 확인
2. Part 2: 기본 사용법 복습
3. Part 3: 고급 문제 해결

그리고 가장 중요한 건:
직접 해보면서 배우는 것! 🚀

Happy Skill Building! 🎉
```

---

*마지막 업데이트: 2025-10-24*
*난이도: ⭐⭐⭐ 고급*
*예상 학습 시간: 60분*
*실습 권장 시간: 3시간+*