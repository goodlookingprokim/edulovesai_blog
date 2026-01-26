---
title: "Docling - 문서 처리 AI 도구 완벽 가이드 (Part 1: 기초편)"
created: '2025-10-14'
last_modified: '2025-10-14'
tags:
  - AI/문서처리
  - Docling
  - PDF분석
  - 문서변환
  - Python/라이브러리
  - 초보자가이드
  - 오픈소스
status: "완료"
type: "분석"
priority: "high"
source: "https://github.com/docling-project/docling"
---

# Docling - 문서 처리 AI 도구 완벽 가이드 (Part 1: 기초편)

> **한 줄 요약**: Docling은 PDF, DOCX, PPTX 등 다양한 문서를 AI로 읽고 분석하여 Markdown, HTML 등으로 변환해주는 Python 라이브러리입니다.

---

## 📋 목차

### Part 1: 기초편 (현재 문서)
1. [[#Docling이란 무엇인가]]
2. [[#왜 Docling이 필요한가]]
3. [[#Docling의 핵심 기능]]
4. [[#설치 방법]]
5. [[#첫 번째 문서 변환하기]]
6. [[#용어 사전]]

### Part 2: 실전편 (별도 문서)
- 고급 사용법
- 다양한 문서 형식 처리
- AI 에이전트 연동
- 실무 활용 사례

---

## Docling이란 무엇인가

### 🎯 상황극으로 이해하기

#### 시나리오 1: 학생 민수의 고민
```
민수: "교수님이 200페이지 PDF 논문을 요약하래...
      손으로 다 읽고 정리하려면 며칠 걸릴 것 같아..."

Docling: "PDF 파일 경로만 알려줘.
         자동으로 읽고 Markdown으로 정리해줄게!"
```

#### 시나리오 2: 회사원 지은의 업무
```
지은: "고객이 보낸 계약서 50개를 데이터베이스에 입력해야 해.
      일일이 복사 붙여넣기 하면 하루 종일 걸려..."

Docling: "모든 계약서를 한 번에 처리해서
         깔끔한 텍스트로 변환해줄게!"
```

### 🔍 기술적 정의

**Docling**은 IBM Research에서 개발한 **오픈소스 문서 처리 라이브러리**입니다.

#### 핵심 역할
1. **문서 읽기**: PDF, DOCX, PPTX, 이미지 등을 AI로 이해
2. **구조 분석**: 제목, 표, 그림, 코드 등을 자동으로 구분
3. **형식 변환**: Markdown, HTML, JSON 등으로 변환
4. **정보 추출**: 필요한 정보만 골라서 가져오기

---

## 왜 Docling이 필요한가

### 🤔 문제 상황들

#### Level 1 (초보자): 단순 텍스트 추출의 어려움
```python
# ❌ 기존 방법의 문제점
"PDF에서 텍스트 복사하면 줄바꿈이 엉망이에요..."
"표 형태가 다 깨져서 나와요..."
"이미지 설명이 어디 있는지 모르겠어요..."
```

**Docling의 해결책**:
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("복잡한문서.pdf")
print(result.document.export_to_markdown())

# ✅ 결과: 깔끔하게 정리된 Markdown
# - 제목은 ##로
# - 표는 Markdown 테이블로
# - 이미지는 설명과 함께
```

#### Level 2 (중급자): 대량 문서 처리의 비효율
```python
# ❌ 문제: 파일 100개를 일일이 처리
for file in files:
    manually_open(file)
    manually_copy_paste()
    manually_format()
    # 😫 하루 종일...
```

**Docling의 해결책**:
```python
# ✅ 자동화: 커피 한 잔 마시는 동안 완료
converter = DocumentConverter()

for pdf_file in pdf_files:
    result = converter.convert(pdf_file)
    save_as_markdown(result)

# ☕ 5분 후 모든 파일 처리 완료!
```

#### Level 3 (고급자): AI 시스템 구축 시 데이터 전처리
```python
# ❌ 문제: RAG(검색증강생성) 시스템 구축 시
"PDF 문서를 AI가 이해할 수 있는 형태로 바꿔야 해요"
"문서 구조를 유지하면서 벡터 DB에 넣어야 해요"
```

**Docling의 해결책**:
```python
# ✅ AI 친화적 형식으로 자동 변환
from docling.document_converter import DocumentConverter
from langchain.text_splitter import MarkdownTextSplitter

converter = DocumentConverter()
result = converter.convert("technical_manual.pdf")

# LangChain, LlamaIndex 등과 즉시 연동 가능
markdown_text = result.document.export_to_markdown()
```

### 📊 실제 효과 비교

| 작업 | 수동 처리 | Docling 사용 |
|------|-----------|--------------|
| 100페이지 PDF 텍스트 추출 | 2시간 | 2분 |
| 표 형식 유지 | 불가능/매우 어려움 | 자동 |
| 이미지 위치 파악 | 수동 확인 | 자동 인식 |
| 수식 인식 | 직접 입력 | 자동 인식 |
| 여러 파일 일괄 처리 | 하루 이상 | 10분 이내 |

---

## Docling의 핵심 기능

### 🗂️ 기능 1: 다양한 문서 형식 지원

#### 지원하는 입력 형식
```
📄 문서:
- PDF (가장 강력!)
- DOCX (Word 문서)
- PPTX (PowerPoint)
- XLSX (Excel)
- HTML (웹페이지)

🖼️ 이미지:
- PNG, JPEG, TIFF 등

🎙️ 오디오:
- WAV, MP3 (음성 인식)

📹 자막:
- VTT (비디오 자막)
```

#### Level별 활용 예시

**Level 1 (초보자)**: PDF 하나 변환하기
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("report.pdf")
markdown_text = result.document.export_to_markdown()

# 📝 결과를 파일로 저장
with open("report.md", "w") as f:
    f.write(markdown_text)
```

**Level 2 (중급자)**: 여러 형식 한 번에 처리
```python
files = [
    "presentation.pptx",
    "report.pdf",
    "data.xlsx",
    "image.png"
]

converter = DocumentConverter()

for file in files:
    result = converter.convert(file)
    # 각 파일을 동일한 형식(Markdown)으로 통일
    save_result(result, format="markdown")
```

**Level 3 (고급자)**: 웹 URL에서 직접 처리
```python
# 온라인 PDF도 즉시 처리 가능
url = "https://arxiv.org/pdf/2408.09869"
converter = DocumentConverter()
result = converter.convert(url)

# AI 학습 데이터로 바로 활용
training_data = result.document.export_to_json()
```

### 📑 기능 2: 고급 PDF 이해 능력

Docling의 진짜 강점은 **PDF를 단순히 읽는 게 아니라 '이해'한다**는 것입니다.

#### 무엇을 이해하는가?

##### 1) 페이지 레이아웃 분석
```
┌─────────────────────────────────┐
│  제목: 큰 굵은 글씨 (인식!)      │
│  ───────────────────────────    │
│  본문: 일반 단락 (인식!)         │
│                                  │
│  ┌──────┐  옆의 박스는          │
│  │ 표   │  표로 인식!           │
│  └──────┘                        │
│                                  │
│  [이미지] ← 이미지 위치 파악!    │
│  그림 1. 설명 ← 캡션도 연결!    │
└─────────────────────────────────┘
```

**실제 코드 예시**:
```python
result = converter.convert("논문.pdf")

# 문서 구조를 그대로 유지
print(result.document.export_to_markdown())

# 출력 예시:
# # 논문 제목        (PDF의 제목을 인식)
# ## 초록            (섹션 구조 파악)
# 본문 내용...
#
# | 항목 | 값 |       (표를 Markdown 테이블로)
# |------|-----|
# | A    | 1   |
#
# ![그림1](image_1.png)  (이미지 추출)
```

##### 2) 읽는 순서 파악 (Reading Order)
```
일반 PDF 리더:
왼쪽 위 → 오른쪽 → 아래
(단순 순서, 구조 무시)

Docling:
제목 → 초록 → 본문 → 표 → 그림 설명
(논리적 순서, 구조 이해)
```

**왜 중요한가?**
```python
# ❌ 일반 PDF 추출 결과:
"표 1. 데이터... 그림 1... 본문 내용... 제목"
# 😵 순서가 뒤죽박죽!

# ✅ Docling 결과:
"제목 → 초록 → 본문 → 표 1 → 그림 1 설명"
# 😊 읽기 편한 순서!
```

##### 3) 표 구조 인식
```python
# PDF에 이런 표가 있다면:
┌──────┬──────┬──────┐
│ 이름  │ 나이  │ 직업  │
├──────┼──────┼──────┤
│ 철수  │  25  │ 개발자│
│ 영희  │  30  │ 디자이너│
└──────┴──────┴──────┘

# Docling이 자동으로 변환:
| 이름 | 나이 | 직업 |
|------|------|------|
| 철수 | 25 | 개발자 |
| 영희 | 30 | 디자이너 |

# 또는 JSON으로:
{
  "table": [
    {"이름": "철수", "나이": 25, "직업": "개발자"},
    {"이름": "영희", "나이": 30, "직업": "디자이너"}
  ]
}
```

##### 4) 수식 인식
```python
# PDF에 수학 공식이 있으면:
E = mc²

# Docling이 LaTeX 형식으로 추출:
$E = mc^2$

# AI나 다른 시스템에서 바로 사용 가능!
```

##### 5) 코드 블록 인식
```python
# PDF에 코드가 있으면:
def hello():
    print("Hello")

# Docling이 코드 블록으로 보존:
```python
def hello():
    print("Hello")
\```
```

##### 6) 이미지 분류
```python
# Docling이 이미지를 자동으로 분류:
result = converter.convert("document.pdf")

for image in result.document.images:
    print(f"Type: {image.type}")
    # Type: chart (그래프)
    # Type: photo (사진)
    # Type: diagram (다이어그램)
    # Type: screenshot (스크린샷)
```

### 🔄 기능 3: 다양한 출력 형식

#### 출력 형식 선택 가이드

| 형식 | 용도 | 특징 |
|------|------|------|
| **Markdown** | 블로그, 문서화 | 읽기 쉽고 편집 가능 |
| **HTML** | 웹페이지 | 브라우저에서 즉시 표시 |
| **JSON** | 프로그램 처리 | 구조화된 데이터 |
| **DocTags** | AI 학습 | 문서 구조 태그 포함 |

#### 실전 예시

**예시 1: 블로그 포스트 만들기**
```python
# PDF 논문을 블로그 포스트로
converter = DocumentConverter()
result = converter.convert("research_paper.pdf")

# Markdown으로 변환
blog_post = result.document.export_to_markdown()

# 바로 블로그에 게시 가능!
with open("blog_post.md", "w") as f:
    f.write(blog_post)
```

**예시 2: 웹사이트에 표시하기**
```python
# HTML로 변환하여 웹사이트에 임베드
result = converter.convert("manual.pdf")
html_content = result.document.export_to_html()

# 웹 페이지에 삽입
website.add_content(html_content)
```

**예시 3: 데이터 분석을 위한 JSON**
```python
# JSON으로 추출하여 데이터 분석
result = converter.convert("report.pdf")
data = result.document.export_to_json()

# Python에서 데이터 처리
import json
parsed = json.loads(data)

for section in parsed["sections"]:
    analyze(section["content"])
```

### 🔒 기능 4: 로컬 실행 (인터넷 불필요)

#### 왜 중요한가?

**시나리오**: 회사 기밀 문서 처리
```
❌ 온라인 서비스:
"문서를 인터넷으로 전송... 보안 위험!"

✅ Docling (로컬 실행):
"내 컴퓨터에서만 처리... 안전!"
```

#### 설치 및 사용
```python
# 인터넷 연결 없이도 작동
pip install docling

# 완전히 오프라인 환경에서 실행
converter = DocumentConverter()
result = converter.convert("confidential.pdf")

# 데이터가 외부로 전송되지 않음!
```

### 🤖 기능 5: AI 에이전트 통합

#### 주요 AI 프레임워크와 연동

**LangChain과 함께 사용**
```python
from docling.document_converter import DocumentConverter
from langchain.text_splitter import MarkdownTextSplitter

# 1단계: Docling으로 PDF 변환
converter = DocumentConverter()
result = converter.convert("textbook.pdf")
markdown = result.document.export_to_markdown()

# 2단계: LangChain으로 AI 챗봇 구축
splitter = MarkdownTextSplitter()
chunks = splitter.split_text(markdown)

# 3단계: AI가 문서 내용을 이해하고 답변
chatbot.add_knowledge(chunks)
answer = chatbot.ask("이 교과서의 주요 내용은?")
```

**LlamaIndex로 검색 시스템 구축**
```python
from docling.document_converter import DocumentConverter
from llama_index import VectorStoreIndex

# 문서 변환
converter = DocumentConverter()
docs = [converter.convert(f"doc{i}.pdf") for i in range(10)]

# 검색 가능한 인덱스 생성
index = VectorStoreIndex.from_documents(docs)

# 자연어로 검색
result = index.query("계약 기간은 얼마나 되나요?")
```

---

## 설치 방법

### 🎯 단계별 설치 가이드

#### Level 1 (초보자): 가장 기본적인 설치

**사전 준비물**:
- Python 3.9 이상 (확인: `python --version`)
- pip 패키지 관리자 (Python 설치 시 자동 포함)

**설치 명령어**:
```bash
# 터미널(명령 프롬프트)에서 실행
pip install docling
```

**설치 확인**:
```python
# Python 실행 후 테스트
python

>>> from docling.document_converter import DocumentConverter
>>> print("설치 성공!")
```

#### Level 2 (중급자): 추가 기능 포함 설치

**OCR 기능 추가** (스캔된 문서 처리):
```bash
pip install docling[ocr]
```

**이미지 처리 강화**:
```bash
pip install docling[image]
```

**모든 기능 설치**:
```bash
pip install docling[all]
```

#### Level 3 (고급자): 개발 환경 설정

**가상 환경 생성 및 설치**:
```bash
# 1. 가상 환경 생성
python -m venv docling_env

# 2. 가상 환경 활성화
# Windows:
docling_env\Scripts\activate
# macOS/Linux:
source docling_env/bin/activate

# 3. Docling 설치
pip install docling

# 4. 추가 개발 도구 설치
pip install jupyter notebook  # 노트북 환경
pip install black flake8      # 코드 품질 도구
```

**GitHub에서 최신 개발 버전 설치**:
```bash
git clone https://github.com/docling-project/docling.git
cd docling
pip install -e .
```

### 🔧 운영체제별 참고사항

#### Windows
```bash
# Windows에서 일부 의존성 문제가 있을 수 있음
# Visual C++ 재배포 패키지 설치 필요할 수 있음

# 또는 Anaconda 사용 권장:
conda create -n docling python=3.10
conda activate docling
pip install docling
```

#### macOS
```bash
# Apple Silicon (M1/M2/M3)에서 특별한 설정 불필요
pip install docling

# Intel Mac도 동일하게 작동
```

#### Linux
```bash
# Ubuntu/Debian:
sudo apt-get update
sudo apt-get install python3-pip python3-dev

# CentOS/RHEL:
sudo yum install python3-pip python3-devel

# 그 후 Docling 설치:
pip install docling
```

---

## 첫 번째 문서 변환하기

### 🚀 3분 만에 시작하기

#### Step 1: 가장 단순한 예제

**목표**: PDF 파일을 Markdown으로 변환하기

```python
# 1. 필요한 라이브러리 불러오기
from docling.document_converter import DocumentConverter

# 2. 변환기 준비
converter = DocumentConverter()

# 3. PDF 파일 변환
result = converter.convert("내문서.pdf")

# 4. Markdown으로 출력
markdown_text = result.document.export_to_markdown()

# 5. 결과 확인
print(markdown_text)
```

**실행 결과 예시**:
```markdown
# 문서 제목

## 섹션 1
본문 내용이 여기에 나타납니다...

| 열1 | 열2 |
|-----|-----|
| 데이터1 | 데이터2 |

![그림1](image_0.png)
```

#### Step 2: 파일로 저장하기

```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("input.pdf")

# Markdown 파일로 저장
with open("output.md", "w", encoding="utf-8") as f:
    f.write(result.document.export_to_markdown())

print("✅ 변환 완료! output.md 파일을 확인하세요.")
```

#### Step 3: 온라인 PDF 처리하기

```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()

# 인터넷 URL에서 직접 변환
url = "https://arxiv.org/pdf/2408.09869"
result = converter.convert(url)

# 결과 출력
print(result.document.export_to_markdown())
```

### 🎓 단계별 학습 예제

#### 예제 1 (초급): 여러 페이지 PDF 처리
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()

# 긴 문서도 동일한 방법으로
result = converter.convert("100페이지_논문.pdf")

# 첫 500자만 미리보기
markdown = result.document.export_to_markdown()
print(markdown[:500])
print("\n... (계속)")
```

#### 예제 2 (중급): 여러 파일 일괄 처리
```python
from docling.document_converter import DocumentConverter
import os

converter = DocumentConverter()

# 폴더 내 모든 PDF 파일 찾기
pdf_files = [f for f in os.listdir("./documents")
             if f.endswith(".pdf")]

# 모든 파일 변환
for pdf_file in pdf_files:
    print(f"변환 중: {pdf_file}")

    result = converter.convert(f"./documents/{pdf_file}")

    # 원본 파일명으로 Markdown 저장
    output_name = pdf_file.replace(".pdf", ".md")
    with open(f"./output/{output_name}", "w", encoding="utf-8") as f:
        f.write(result.document.export_to_markdown())

    print(f"✅ 완료: {output_name}")

print(f"\n총 {len(pdf_files)}개 파일 변환 완료!")
```

#### 예제 3 (고급): 문서 구조 분석
```python
from docling.document_converter import DocumentConverter
import json

converter = DocumentConverter()
result = converter.convert("복잡한_문서.pdf")

# JSON으로 변환하여 구조 분석
doc_json = json.loads(result.document.export_to_json())

# 문서 통계 출력
print("=== 문서 분석 결과 ===")
print(f"제목: {doc_json.get('title', '없음')}")
print(f"페이지 수: {len(doc_json['pages'])}")
print(f"표 개수: {len([e for e in doc_json['elements'] if e['type'] == 'table'])}")
print(f"이미지 개수: {len([e for e in doc_json['elements'] if e['type'] == 'image'])}")
print(f"코드 블록 개수: {len([e for e in doc_json['elements'] if e['type'] == 'code'])}")
```

**출력 예시**:
```
=== 문서 분석 결과 ===
제목: Docling Technical Report
페이지 수: 15
표 개수: 8
이미지 개수: 12
코드 블록 개수: 5
```

### 💡 자주하는 실수와 해결방법

#### 실수 1: 파일 경로 오류
```python
# ❌ 잘못된 예:
result = converter.convert("문서.pdf")
# FileNotFoundError: No such file

# ✅ 올바른 예:
# 절대 경로 사용
result = converter.convert("/Users/myname/Documents/문서.pdf")

# 또는 현재 폴더 기준
result = converter.convert("./문서.pdf")
```

#### 실수 2: 한글 인코딩 문제
```python
# ❌ 잘못된 예:
with open("output.md", "w") as f:
    f.write(markdown)  # 한글 깨짐

# ✅ 올바른 예:
with open("output.md", "w", encoding="utf-8") as f:
    f.write(markdown)  # 한글 정상 출력
```

#### 실수 3: 메모리 부족
```python
# ❌ 문제 상황:
# 500페이지 PDF를 한 번에 처리하면 메모리 부족

# ✅ 해결책: 페이지 단위로 처리
converter = DocumentConverter()

# 페이지 범위 지정 (곧 지원 예정)
# 또는 PDF를 여러 파일로 분할 후 처리
```

---

## 용어 사전

### 기본 용어

#### 📄 PDF (Portable Document Format)
**쉬운 설명**: 어떤 컴퓨터에서 열어도 똑같이 보이는 문서 형식
```
예시:
- 논문, 계약서, 보고서 등
- 편집은 어렵지만 원본 모습 유지
```

#### 🔤 Markdown
**쉬운 설명**: 간단한 기호로 문서 형식을 표현하는 방법
```
예시:
# 제목          → 큰 제목
## 소제목        → 중간 제목
**굵게**        → 굵은 글씨
- 항목          → 목록
```

#### 📋 JSON (JavaScript Object Notation)
**쉬운 설명**: 컴퓨터가 읽기 쉬운 데이터 형식
```
예시:
{
  "이름": "홍길동",
  "나이": 25,
  "직업": "개발자"
}
```

### 기술 용어

#### 🤖 OCR (Optical Character Recognition)
**쉬운 설명**: 이미지에서 글자를 읽어내는 기술
```
사용 예:
- 스캔한 문서 → 텍스트로 변환
- 사진 속 간판 글자 → 텍스트로 추출
```

#### 🏗️ Document Structure
**쉬운 설명**: 문서의 구조 (제목, 본문, 표 등의 배치)
```
예시:
제목
  ├─ 소제목 1
  │   ├─ 본문
  │   └─ 표
  └─ 소제목 2
      └─ 본문
```

#### 🔄 Export
**쉬운 설명**: 다른 형식으로 내보내기
```
예시:
PDF → Markdown (export)
Word → PDF (export)
Excel → CSV (export)
```

#### 🎯 Parser
**쉬운 설명**: 문서를 읽고 이해하는 프로그램
```
역할:
1. 파일 열기
2. 내용 읽기
3. 구조 분석
4. 데이터 추출
```

### AI/ML 용어

#### 🧠 LLM (Large Language Model)
**쉬운 설명**: 방대한 텍스트를 학습한 거대 AI 모델
```
예시:
- ChatGPT
- Claude
- Gemini

Docling과의 관계:
Docling → 문서를 텍스트로 변환
LLM → 그 텍스트를 이해하고 답변
```

#### 🔍 RAG (Retrieval-Augmented Generation)
**쉬운 설명**: 문서를 검색해서 답변을 생성하는 AI 기술
```
동작 방식:
1. 사용자 질문 받기
2. 관련 문서 검색 (Docling으로 변환한 문서들)
3. 찾은 내용 바탕으로 답변 생성

예시:
질문: "계약서의 해지 조건은?"
→ Docling으로 변환한 계약서들 검색
→ 해지 조건 부분 찾기
→ 답변 생성
```

#### 🔗 Vector Database
**쉬운 설명**: 의미가 비슷한 문장을 찾아주는 데이터베이스
```
동작 예시:
저장: "강아지가 뛰어놀고 있다" → [0.2, 0.8, 0.5, ...]
검색: "개가 운동하고 있다" → 유사한 문장 찾기

Docling과의 활용:
1. Docling으로 문서 변환
2. 문장을 벡터로 변환하여 저장
3. 질문과 유사한 문장 검색
```

### 프로그래밍 용어

#### 🐍 Python
**쉬운 설명**: Docling을 사용하는 프로그래밍 언어
```
특징:
- 배우기 쉬움
- 많은 라이브러리
- 데이터 처리에 강함
```

#### 📦 Library (라이브러리)
**쉬운 설명**: 미리 만들어진 코드 모음
```
비유:
- 레고 블록처럼 조립해서 사용
- 처음부터 만들 필요 없음

Docling도 라이브러리:
pip install docling  # 라이브러리 설치
```

#### 🔌 API (Application Programming Interface)
**쉬운 설명**: 프로그램끼리 대화하는 방법
```
예시:
converter.convert()  # ← Docling의 API
- convert()는 "문서 변환해줘"라는 명령
```

#### 🌐 URL (Uniform Resource Locator)
**쉬운 설명**: 인터넷 주소
```
예시:
https://arxiv.org/pdf/2408.09869
        ↑
    이 주소의 PDF를 직접 변환 가능
```

---

## 다음 단계

### 📚 Part 2에서 다룰 내용

Part 2 문서에서는 더욱 고급 기능과 실무 활용법을 다룹니다:

1. **고급 사용법**
   - 변환 옵션 상세 설정
   - OCR 활용법
   - 배치 처리 최적화

2. **다양한 문서 형식**
   - Word, PowerPoint, Excel 처리
   - 이미지와 스캔 문서
   - 오디오 파일 텍스트 변환

3. **AI 에이전트 연동**
   - LangChain 실전 활용
   - LlamaIndex로 검색 시스템 구축
   - Crew AI, Haystack 통합

4. **실무 활용 사례**
   - 문서 자동화 시스템
   - 지식 베이스 구축
   - 계약서 분석 시스템

### 🔗 관련 노트 링크

- [[Docling_문서처리_AI_도구_완벽_가이드_Part2|Part 2: 실전편]]
- [[LLM_RAG_시스템_구축_가이드|RAG 시스템 구축]]
- [[Python_초보자_가이드|Python 기초 학습]]
- [[AI_에이전트_개발_입문|AI 에이전트 개발]]

### 🎯 학습 체크리스트

- [ ] Docling 설치 완료
- [ ] 첫 번째 PDF 변환 성공
- [ ] Markdown 출력 확인
- [ ] 여러 파일 일괄 처리 시도
- [ ] 용어 사전 숙지

---

## 참고 자료

- **공식 문서**: https://docling-project.github.io/docling/
- **GitHub 저장소**: https://github.com/docling-project/docling
- **기술 보고서**: https://arxiv.org/abs/2408.09869
- **PyPI 패키지**: https://pypi.org/project/docling/

---

## 연결된 노트

- [[Docling_문서처리_AI_도구_완벽_가이드_Part2]]
- [[PDF_처리_도구_비교_분석]]
- [[문서_자동화_시스템_구축]]
- [[AI_문서_처리_파이프라인]]
- [[Python_라이브러리_활용_가이드]]

---

**마지막 업데이트**: 2025-10-14
**작성자**: Claude AI (Obsidian Vault 자동화 시스템)
**난이도**: 초급 (입문자 친화적)
**예상 학습 시간**: 30-60분