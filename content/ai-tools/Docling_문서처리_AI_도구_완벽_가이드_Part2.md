---
title: "Docling - 문서 처리 AI 도구 완벽 가이드 (Part 2: 실전편)"
created: '2025-10-14'
last_modified: '2025-10-14'
tags:
  - AI/문서처리
  - Docling
  - 고급활용
  - 실전사례
  - AI연동
  - 자동화
  - 프로덕션
status: "완료"
type: "분석"
priority: "high"
source: "https://github.com/docling-project/docling"
---

# Docling - 문서 처리 AI 도구 완벽 가이드 (Part 2: 실전편)

> **Part 2 요약**: Docling의 고급 기능, AI 연동, 실무 활용 사례를 상세히 다룹니다.

---

## 📋 목차

1. [[#고급 변환 옵션과 설정]]
2. [[#다양한 문서 형식 처리]]
3. [[#OCR과 스캔 문서 처리]]
4. [[#AI 프레임워크 연동]]
5. [[#CLI 명령줄 도구 활용]]
6. [[#대량 문서 처리와 최적화]]
7. [[#실무 활용 사례]]
8. [[#문제 해결과 팁]]

---

## 고급 변환 옵션과 설정

### 🎛️ DocumentConverter 세부 설정

#### Level 1 (초보자): 기본 옵션 이해하기

**변환기 생성 시 설정할 수 있는 것들**:
```python
from docling.document_converter import DocumentConverter
from docling.datamodel.base_models import InputFormat

# 기본 설정으로 생성
converter = DocumentConverter()

# 또는 특정 형식만 허용
converter = DocumentConverter(
    allowed_formats=[
        InputFormat.PDF,
        InputFormat.DOCX,
        InputFormat.PPTX
    ]
)
```

**왜 이렇게 할까?**
```python
# 시나리오: PDF만 처리하는 시스템
converter = DocumentConverter(
    allowed_formats=[InputFormat.PDF]
)

# 실수로 다른 파일을 넣으면:
try:
    converter.convert("image.png")
except Exception as e:
    print("PNG는 지원하지 않습니다!")
    # 에러를 미리 잡아서 안전하게 처리
```

#### Level 2 (중급자): 변환 품질 조절

**해상도와 품질 설정**:
```python
from docling.document_converter import DocumentConverter, PdfFormatOption
from docling.datamodel.pipeline_options import PdfPipelineOptions

# PDF 처리 옵션 설정
pdf_options = PdfPipelineOptions()
pdf_options.do_ocr = True  # OCR 활성화
pdf_options.do_table_structure = True  # 표 구조 인식

converter = DocumentConverter(
    format_options={
        InputFormat.PDF: PdfFormatOption(
            pipeline_options=pdf_options
        )
    }
)
```

**실전 예시 - 스캔 문서 vs 디지털 문서**:
```python
# 스캔된 PDF (OCR 필수)
scanned_options = PdfPipelineOptions()
scanned_options.do_ocr = True
scanned_options.ocr_engine = "tesseract"  # OCR 엔진 선택

# 디지털 PDF (OCR 불필요)
digital_options = PdfPipelineOptions()
digital_options.do_ocr = False  # 빠른 처리

# 상황에 맞는 변환기 사용
if is_scanned(pdf_file):
    converter = DocumentConverter(
        format_options={InputFormat.PDF: PdfFormatOption(pipeline_options=scanned_options)}
    )
else:
    converter = DocumentConverter(
        format_options={InputFormat.PDF: PdfFormatOption(pipeline_options=digital_options)}
    )
```

#### Level 3 (고급자): 성능 최적화 설정

**병렬 처리 설정**:
```python
from docling.document_converter import DocumentConverter
from concurrent.futures import ThreadPoolExecutor
import os

# CPU 코어 수에 맞춰 병렬 처리
num_workers = os.cpu_count()

converter = DocumentConverter()

# 여러 파일을 병렬로 처리
files = ["doc1.pdf", "doc2.pdf", "doc3.pdf", "doc4.pdf"]

with ThreadPoolExecutor(max_workers=num_workers) as executor:
    results = list(executor.map(converter.convert, files))

print(f"{len(results)}개 파일 동시 처리 완료!")
```

**메모리 효율적 처리**:
```python
from docling.document_converter import DocumentConverter

def process_large_pdf_batch(pdf_files):
    """
    대량의 PDF를 메모리 효율적으로 처리
    """
    converter = DocumentConverter()

    for pdf_file in pdf_files:
        # 파일 하나씩 처리
        result = converter.convert(pdf_file)

        # 즉시 저장하고 메모리에서 해제
        output_file = pdf_file.replace('.pdf', '.md')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(result.document.export_to_markdown())

        # 명시적으로 메모리 정리
        del result

        print(f"✅ {pdf_file} 처리 완료")

# 사용 예시
large_batch = [f"document_{i}.pdf" for i in range(1000)]
process_large_pdf_batch(large_batch)
```

### 🎨 출력 형식 커스터마이징

#### Markdown 출력 옵션

```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("document.pdf")

# 기본 Markdown
basic_md = result.document.export_to_markdown()

# 이미지 포함 여부 선택
md_with_images = result.document.export_to_markdown(
    include_images=True  # 이미지 포함
)

md_without_images = result.document.export_to_markdown(
    include_images=False  # 텍스트만
)
```

#### HTML 출력 커스터마이징

```python
# HTML로 변환
html = result.document.export_to_html()

# 스타일 추가
styled_html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {{
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }}
        table {{
            border-collapse: collapse;
            width: 100%;
        }}
        th, td {{
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }}
    </style>
</head>
<body>
    {html}
</body>
</html>
"""

with open("styled_output.html", "w", encoding="utf-8") as f:
    f.write(styled_html)
```

#### JSON 구조 활용

```python
import json

# JSON으로 변환
json_output = result.document.export_to_json()
doc_data = json.loads(json_output)

# 구조 탐색
print("=== 문서 구조 분석 ===")

# 제목 추출
if 'title' in doc_data:
    print(f"제목: {doc_data['title']}")

# 모든 표 추출
tables = [elem for elem in doc_data['elements']
          if elem['type'] == 'table']
print(f"표 개수: {len(tables)}")

# 첫 번째 표 내용 출력
if tables:
    first_table = tables[0]
    print("\n첫 번째 표:")
    print(json.dumps(first_table, indent=2, ensure_ascii=False))

# 이미지 목록
images = [elem for elem in doc_data['elements']
          if elem['type'] == 'image']
print(f"\n이미지 개수: {len(images)}")

# 코드 블록 추출
code_blocks = [elem for elem in doc_data['elements']
               if elem['type'] == 'code']
print(f"코드 블록 개수: {len(code_blocks)}")
```

---

## 다양한 문서 형식 처리

### 📄 Word 문서 (DOCX) 처리

#### 기본 처리
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()

# Word 문서 변환
result = converter.convert("report.docx")

# Markdown으로 내보내기
markdown = result.document.export_to_markdown()
print(markdown)
```

#### 실전 예시: 회사 보고서 일괄 처리
```python
import os
from docling.document_converter import DocumentConverter

def convert_all_docx_in_folder(folder_path):
    """
    폴더 내 모든 Word 문서를 Markdown으로 변환
    """
    converter = DocumentConverter()

    # .docx 파일 찾기
    docx_files = [f for f in os.listdir(folder_path)
                  if f.endswith('.docx') and not f.startswith('~$')]

    print(f"발견한 파일: {len(docx_files)}개")

    for docx_file in docx_files:
        file_path = os.path.join(folder_path, docx_file)

        print(f"\n처리 중: {docx_file}")

        try:
            result = converter.convert(file_path)

            # 같은 이름으로 .md 파일 생성
            output_name = docx_file.replace('.docx', '.md')
            output_path = os.path.join(folder_path, output_name)

            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(result.document.export_to_markdown())

            print(f"✅ 완료: {output_name}")

        except Exception as e:
            print(f"❌ 오류: {docx_file} - {str(e)}")

# 사용 예시
convert_all_docx_in_folder("./회사문서")
```

### 📊 PowerPoint (PPTX) 처리

#### 슬라이드를 Markdown으로
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()
result = converter.convert("presentation.pptx")

# 슬라이드별로 구분된 Markdown
markdown = result.document.export_to_markdown()

print(markdown)
```

**출력 예시**:
```markdown
# 프레젠테이션 제목

---

## 슬라이드 1: 소개
본문 내용...

---

## 슬라이드 2: 주요 포인트
- 포인트 1
- 포인트 2

![차트](chart_1.png)

---

## 슬라이드 3: 결론
결론 내용...
```

#### 실전 예시: 강의 자료 변환
```python
from docling.document_converter import DocumentConverter
import re

def pptx_to_study_notes(pptx_file):
    """
    PowerPoint를 학습 노트로 변환
    """
    converter = DocumentConverter()
    result = converter.convert(pptx_file)

    markdown = result.document.export_to_markdown()

    # 슬라이드 번호 추가
    slides = markdown.split('\n---\n')

    study_notes = "# 학습 노트\n\n"
    study_notes += f"원본 파일: {pptx_file}\n\n"
    study_notes += "---\n\n"

    for i, slide in enumerate(slides, 1):
        study_notes += f"## 📝 슬라이드 {i}\n\n"
        study_notes += slide + "\n\n"
        study_notes += "### 노트:\n\n\n\n"
        study_notes += "---\n\n"

    return study_notes

# 사용
notes = pptx_to_study_notes("lecture.pptx")
with open("lecture_notes.md", "w", encoding="utf-8") as f:
    f.write(notes)

print("✅ 학습 노트 생성 완료!")
```

### 📈 Excel (XLSX) 처리

```python
from docling.document_converter import DocumentConverter
import json

converter = DocumentConverter()
result = converter.convert("data.xlsx")

# JSON으로 변환하여 데이터 추출
json_output = json.loads(result.document.export_to_json())

# 표 데이터 추출
tables = [elem for elem in json_output['elements']
          if elem['type'] == 'table']

print(f"발견한 시트/표: {len(tables)}개")

# 첫 번째 시트 데이터
if tables:
    first_sheet = tables[0]
    print("\n첫 번째 시트 내용:")
    print(json.dumps(first_sheet, indent=2, ensure_ascii=False))
```

### 🖼️ 이미지 문서 처리

#### 단일 이미지
```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()

# PNG, JPEG, TIFF 등 지원
result = converter.convert("document_scan.png")

# OCR로 텍스트 추출
text = result.document.export_to_markdown()
print(text)
```

#### 여러 이미지를 하나의 문서로
```python
from docling.document_converter import DocumentConverter

def images_to_document(image_files):
    """
    여러 이미지 파일을 하나의 문서로 통합
    """
    converter = DocumentConverter()

    combined_text = "# 스캔 문서\n\n"

    for i, img_file in enumerate(image_files, 1):
        print(f"처리 중: {img_file}")

        result = converter.convert(img_file)
        text = result.document.export_to_markdown()

        combined_text += f"## 페이지 {i}\n\n"
        combined_text += text + "\n\n"
        combined_text += "---\n\n"

    return combined_text

# 사용 예시
image_pages = [
    "scan_page1.jpg",
    "scan_page2.jpg",
    "scan_page3.jpg"
]

document = images_to_document(image_pages)

with open("scanned_document.md", "w", encoding="utf-8") as f:
    f.write(document)
```

### 🎙️ 오디오 파일 처리 (음성 인식)

```python
from docling.document_converter import DocumentConverter

converter = DocumentConverter()

# 오디오 파일에서 텍스트 추출
result = converter.convert("interview.mp3")

# 음성 인식 결과를 텍스트로
transcript = result.document.export_to_markdown()

print("=== 음성 인식 결과 ===")
print(transcript)
```

**실전 예시: 회의록 자동 생성**
```python
from docling.document_converter import DocumentConverter
from datetime import datetime

def audio_to_meeting_minutes(audio_file):
    """
    회의 녹음 파일을 회의록으로 변환
    """
    converter = DocumentConverter()
    result = converter.convert(audio_file)

    transcript = result.document.export_to_markdown()

    # 회의록 템플릿
    minutes = f"""# 회의록

## 회의 정보
- 날짜: {datetime.now().strftime('%Y-%m-%d')}
- 녹음 파일: {audio_file}

## 회의 내용

{transcript}

## 액션 아이템
- [ ] TODO 1
- [ ] TODO 2

## 다음 회의
- 날짜:
- 안건:
"""

    return minutes

# 사용
minutes = audio_to_meeting_minutes("team_meeting.mp3")
with open("meeting_minutes.md", "w", encoding="utf-8") as f:
    f.write(minutes)

print("✅ 회의록 생성 완료!")
```

---

## OCR과 스캔 문서 처리

### 🔍 OCR이란?

**쉬운 설명**:
```
일반 텍스트: 복사 가능 ✅
"안녕하세요" → Ctrl+C 가능

스캔/이미지: 복사 불가 ❌
[이미지: 안녕하세요] → Ctrl+C 불가

OCR의 역할:
[이미지: 안녕하세요] → OCR → "안녕하세요" ✅
```

### 📸 스캔 문서 처리하기

#### Level 1 (초보자): 기본 OCR 사용
```python
from docling.document_converter import DocumentConverter
from docling.datamodel.pipeline_options import PdfPipelineOptions
from docling.document_converter import PdfFormatOption
from docling.datamodel.base_models import InputFormat

# OCR 활성화
pdf_options = PdfPipelineOptions()
pdf_options.do_ocr = True

converter = DocumentConverter(
    format_options={
        InputFormat.PDF: PdfFormatOption(
            pipeline_options=pdf_options
        )
    }
)

# 스캔된 PDF 처리
result = converter.convert("scanned_document.pdf")
text = result.document.export_to_markdown()

print(text)
```

#### Level 2 (중급자): 이미지 품질에 따른 처리
```python
from docling.document_converter import DocumentConverter
from docling.datamodel.pipeline_options import PdfPipelineOptions

def process_scanned_pdf(pdf_file, quality='high'):
    """
    스캔 품질에 따라 다른 설정 적용
    """
    pdf_options = PdfPipelineOptions()
    pdf_options.do_ocr = True

    if quality == 'high':
        # 고품질 스캔: 빠른 처리
        pdf_options.ocr_options = {
            'lang': 'kor+eng',  # 한국어 + 영어
            'psm': 3  # Fully automatic page segmentation
        }

    elif quality == 'low':
        # 저품질 스캔: 정확도 우선
        pdf_options.ocr_options = {
            'lang': 'kor+eng',
            'psm': 6,  # Uniform block of text
            'oem': 1   # Neural nets LSTM OCR Engine
        }

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pdf_options
            )
        }
    )

    return converter.convert(pdf_file)

# 사용
result = process_scanned_pdf("old_document.pdf", quality='low')
```

#### Level 3 (고급자): 전처리 + OCR 파이프라인
```python
from PIL import Image, ImageEnhance
import pdf2image
from docling.document_converter import DocumentConverter

def preprocess_and_ocr(pdf_file):
    """
    이미지 전처리 후 OCR 실행
    """
    # 1. PDF를 이미지로 변환
    pages = pdf2image.convert_from_path(pdf_file, dpi=300)

    processed_pages = []

    for i, page in enumerate(pages):
        # 2. 이미지 품질 개선
        # 대비 증가
        enhancer = ImageEnhance.Contrast(page)
        page = enhancer.enhance(1.5)

        # 선명도 증가
        enhancer = ImageEnhance.Sharpness(page)
        page = enhancer.enhance(1.2)

        # 임시 파일로 저장
        temp_file = f"temp_page_{i}.png"
        page.save(temp_file, 'PNG')
        processed_pages.append(temp_file)

    # 3. Docling으로 OCR 실행
    converter = DocumentConverter()

    full_text = ""
    for temp_file in processed_pages:
        result = converter.convert(temp_file)
        full_text += result.document.export_to_markdown() + "\n\n"

        # 임시 파일 삭제
        import os
        os.remove(temp_file)

    return full_text

# 사용
text = preprocess_and_ocr("poor_quality_scan.pdf")
```

### 🌍 다국어 OCR

```python
from docling.document_converter import DocumentConverter

# 한국어 문서
korean_result = converter.convert("한국어문서.pdf")

# 일본어 문서
japanese_result = converter.convert("日本語文書.pdf")

# 중국어 문서
chinese_result = converter.convert("中文文档.pdf")

# 여러 언어 혼합 문서
mixed_result = converter.convert("multilingual.pdf")
```

---

## AI 프레임워크 연동

### 🦜 LangChain 통합

#### Level 1 (초보자): 기본 통합
```python
from docling.document_converter import DocumentConverter
from langchain.text_splitter import MarkdownTextSplitter
from langchain.schema import Document

# 1. Docling으로 PDF 변환
converter = DocumentConverter()
result = converter.convert("textbook.pdf")
markdown_text = result.document.export_to_markdown()

# 2. LangChain Document 객체 생성
doc = Document(
    page_content=markdown_text,
    metadata={"source": "textbook.pdf"}
)

# 3. 텍스트 분할 (AI가 처리하기 좋은 크기로)
splitter = MarkdownTextSplitter(chunk_size=1000, chunk_overlap=100)
chunks = splitter.split_documents([doc])

print(f"총 {len(chunks)}개의 청크로 분할됨")
print(f"\n첫 번째 청크:\n{chunks[0].page_content[:200]}...")
```

#### Level 2 (중급자): RAG 시스템 구축
```python
from docling.document_converter import DocumentConverter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import os

def build_rag_system(pdf_files):
    """
    PDF 파일들로 RAG 시스템 구축
    """
    # 1. 모든 PDF를 Markdown으로 변환
    converter = DocumentConverter()
    documents = []

    for pdf_file in pdf_files:
        print(f"변환 중: {pdf_file}")
        result = converter.convert(pdf_file)
        markdown = result.document.export_to_markdown()

        doc = Document(
            page_content=markdown,
            metadata={"source": pdf_file}
        )
        documents.append(doc)

    # 2. 텍스트 분할
    splitter = MarkdownTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = splitter.split_documents(documents)
    print(f"총 {len(chunks)}개 청크 생성")

    # 3. 벡터 데이터베이스 생성
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_documents(chunks, embeddings)
    print("벡터 DB 생성 완료")

    # 4. RAG 체인 생성
    qa_chain = RetrievalQA.from_chain_type(
        llm=OpenAI(),
        chain_type="stuff",
        retriever=vectorstore.as_retriever()
    )

    return qa_chain

# 사용 예시
pdf_files = [
    "manual1.pdf",
    "manual2.pdf",
    "manual3.pdf"
]

qa_system = build_rag_system(pdf_files)

# 질문하기
question = "제품 보증 기간은 얼마인가요?"
answer = qa_system.run(question)
print(f"\n질문: {question}")
print(f"답변: {answer}")
```

#### Level 3 (고급자): 실시간 업데이트 RAG 시스템
```python
from docling.document_converter import DocumentConverter
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

class PDFWatcher(FileSystemEventHandler):
    """
    PDF 파일 변경 감지 및 자동 업데이트
    """
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.converter = DocumentConverter()

    def on_created(self, event):
        if event.src_path.endswith('.pdf'):
            print(f"새 PDF 발견: {event.src_path}")
            self.add_to_vectorstore(event.src_path)

    def add_to_vectorstore(self, pdf_path):
        """PDF를 벡터 DB에 추가"""
        result = self.converter.convert(pdf_path)
        markdown = result.document.export_to_markdown()

        doc = Document(
            page_content=markdown,
            metadata={"source": pdf_path}
        )

        # 벡터 DB에 추가
        self.vectorstore.add_documents([doc])
        print(f"✅ {pdf_path} 추가 완료")

def create_live_rag_system(watch_folder):
    """
    실시간 업데이트되는 RAG 시스템
    """
    # 벡터 DB 초기화
    embeddings = OpenAIEmbeddings()
    vectorstore = Chroma(
        embedding_function=embeddings,
        persist_directory="./chroma_db"
    )

    # 파일 감시자 설정
    event_handler = PDFWatcher(vectorstore)
    observer = Observer()
    observer.schedule(event_handler, watch_folder, recursive=False)
    observer.start()

    print(f"📁 {watch_folder} 폴더 감시 시작...")
    print("새 PDF 파일이 추가되면 자동으로 처리됩니다.")

    return vectorstore, observer

# 사용
vectorstore, observer = create_live_rag_system("./documents")

# 시스템 실행 (Ctrl+C로 종료할 때까지)
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
    observer.join()
```

### 🦙 LlamaIndex 통합

```python
from docling.document_converter import DocumentConverter
from llama_index import VectorStoreIndex, SimpleDirectoryReader, Document
from llama_index.node_parser import SimpleNodeParser

def create_llamaindex_system(pdf_files):
    """
    LlamaIndex 검색 시스템 구축
    """
    converter = DocumentConverter()
    documents = []

    # PDF 변환
    for pdf_file in pdf_files:
        result = converter.convert(pdf_file)
        markdown = result.document.export_to_markdown()

        doc = Document(
            text=markdown,
            metadata={"file_name": pdf_file}
        )
        documents.append(doc)

    # 인덱스 생성
    index = VectorStoreIndex.from_documents(documents)

    # 쿼리 엔진 생성
    query_engine = index.as_query_engine()

    return query_engine

# 사용
pdf_files = ["doc1.pdf", "doc2.pdf", "doc3.pdf"]
engine = create_llamaindex_system(pdf_files)

# 검색
response = engine.query("주요 결론은 무엇인가?")
print(response)
```

---

## CLI 명령줄 도구 활용

### 💻 기본 CLI 사용법

#### 단일 파일 변환
```bash
# 기본 사용
docling document.pdf

# 결과는 같은 폴더에 document.md로 저장됨
```

#### 출력 경로 지정
```bash
# 특정 폴더에 저장
docling document.pdf --output ./converted/

# 파일명 지정
docling document.pdf --output result.md
```

#### 여러 파일 처리
```bash
# 여러 파일 한 번에
docling file1.pdf file2.pdf file3.pdf

# 와일드카드 사용
docling *.pdf

# 특정 패턴
docling report_*.pdf
```

### 🎨 고급 CLI 옵션

#### Visual Language Model 사용
```bash
# GraniteDocling 모델로 처리 (더 정확한 이해)
docling --pipeline vlm --vlm-model granite_docling document.pdf

# Apple Silicon에서 MLX 가속 자동 사용
```

#### OCR 옵션
```bash
# OCR 활성화
docling --ocr document.pdf

# 특정 언어 지정
docling --ocr --ocr-lang kor+eng document.pdf
```

#### 출력 형식 선택
```bash
# Markdown (기본)
docling document.pdf

# HTML로 출력
docling --format html document.pdf

# JSON으로 출력
docling --format json document.pdf
```

### 🔧 실전 스크립트 예시

#### Bash 스크립트: 폴더 일괄 처리
```bash
#!/bin/bash
# convert_all.sh

INPUT_DIR="./input"
OUTPUT_DIR="./output"

# 출력 폴더 생성
mkdir -p "$OUTPUT_DIR"

# 모든 PDF 파일 처리
for pdf in "$INPUT_DIR"/*.pdf; do
    echo "처리 중: $(basename "$pdf")"

    # Docling으로 변환
    docling "$pdf" --output "$OUTPUT_DIR/"

    echo "완료: $(basename "$pdf")"
done

echo "전체 처리 완료!"
```

**사용법**:
```bash
chmod +x convert_all.sh
./convert_all.sh
```

#### Python 스크립트: 진행 상황 표시
```python
#!/usr/bin/env python3
# batch_convert.py

import subprocess
import os
from tqdm import tqdm

def batch_convert(input_folder, output_folder):
    """
    진행 표시줄과 함께 배치 변환
    """
    # PDF 파일 목록
    pdf_files = [f for f in os.listdir(input_folder)
                 if f.endswith('.pdf')]

    print(f"발견한 PDF: {len(pdf_files)}개")

    # 진행 표시줄
    for pdf_file in tqdm(pdf_files, desc="변환 중"):
        input_path = os.path.join(input_folder, pdf_file)
        output_path = os.path.join(output_folder, pdf_file.replace('.pdf', '.md'))

        # Docling CLI 실행
        subprocess.run([
            'docling',
            input_path,
            '--output', output_path
        ], check=True, capture_output=True)

    print("\n✅ 모든 파일 변환 완료!")

if __name__ == "__main__":
    batch_convert("./pdfs", "./markdown")
```

**사용법**:
```bash
python batch_convert.py
```

---

## 대량 문서 처리와 최적화

### ⚡ 성능 최적화 전략

#### 전략 1: 병렬 처리
```python
from docling.document_converter import DocumentConverter
from concurrent.futures import ProcessPoolExecutor
import os

def convert_single_file(pdf_file):
    """단일 파일 변환 (별도 프로세스에서 실행)"""
    converter = DocumentConverter()
    result = converter.convert(pdf_file)

    output_file = pdf_file.replace('.pdf', '.md')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(result.document.export_to_markdown())

    return output_file

def parallel_convert(pdf_files, max_workers=4):
    """
    여러 CPU 코어를 활용한 병렬 처리
    """
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(convert_single_file, pdf_files))

    return results

# 사용
pdf_files = [f"document_{i}.pdf" for i in range(100)]
results = parallel_convert(pdf_files, max_workers=8)

print(f"✅ {len(results)}개 파일 처리 완료!")
```

#### 전략 2: 캐싱 시스템
```python
import hashlib
import json
import os
from docling.document_converter import DocumentConverter

class CachedConverter:
    """
    변환 결과를 캐싱하는 변환기
    """
    def __init__(self, cache_dir=".cache"):
        self.converter = DocumentConverter()
        self.cache_dir = cache_dir
        os.makedirs(cache_dir, exist_ok=True)

    def _get_file_hash(self, file_path):
        """파일 해시 계산"""
        with open(file_path, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()

    def convert(self, file_path):
        """캐시를 확인하고 변환"""
        file_hash = self._get_file_hash(file_path)
        cache_file = os.path.join(self.cache_dir, f"{file_hash}.json")

        # 캐시 확인
        if os.path.exists(cache_file):
            print(f"💾 캐시 사용: {file_path}")
            with open(cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)

        # 새로 변환
        print(f"🔄 변환 중: {file_path}")
        result = self.converter.convert(file_path)
        markdown = result.document.export_to_markdown()

        # 캐시 저장
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump({'markdown': markdown}, f)

        return {'markdown': markdown}

# 사용
cached_converter = CachedConverter()

# 첫 실행: 변환 수행
result1 = cached_converter.convert("large_doc.pdf")  # 느림

# 두 번째 실행: 캐시 사용
result2 = cached_converter.convert("large_doc.pdf")  # 매우 빠름!
```

#### 전략 3: 배치 처리 with 진행률
```python
from docling.document_converter import DocumentConverter
from tqdm import tqdm
import time

def batch_convert_with_progress(pdf_files):
    """
    진행 상황을 시각적으로 표시하는 배치 처리
    """
    converter = DocumentConverter()

    results = []
    failed = []

    # 진행 표시줄
    pbar = tqdm(total=len(pdf_files), desc="전체 진행률")

    for pdf_file in pdf_files:
        try:
            # 변환 시작 시간
            start_time = time.time()

            result = converter.convert(pdf_file)

            # 처리 시간 계산
            elapsed = time.time() - start_time

            results.append({
                'file': pdf_file,
                'status': 'success',
                'time': elapsed
            })

            # 진행 상황 업데이트
            pbar.set_postfix({
                'current': pdf_file,
                'time': f'{elapsed:.2f}s'
            })

        except Exception as e:
            failed.append({
                'file': pdf_file,
                'error': str(e)
            })

        pbar.update(1)

    pbar.close()

    # 결과 요약
    print(f"\n=== 처리 완료 ===")
    print(f"✅ 성공: {len(results)}개")
    print(f"❌ 실패: {len(failed)}개")

    if failed:
        print(f"\n실패한 파일:")
        for item in failed:
            print(f"  - {item['file']}: {item['error']}")

    return results, failed

# 사용
pdf_files = [f"doc_{i}.pdf" for i in range(50)]
results, failed = batch_convert_with_progress(pdf_files)
```

### 💾 메모리 관리

#### 대용량 파일 처리
```python
from docling.document_converter import DocumentConverter
import gc

def process_large_files(pdf_files):
    """
    메모리 효율적으로 대용량 파일 처리
    """
    converter = DocumentConverter()

    for pdf_file in pdf_files:
        print(f"처리 중: {pdf_file}")

        # 변환
        result = converter.convert(pdf_file)

        # 즉시 저장
        output_file = pdf_file.replace('.pdf', '.md')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(result.document.export_to_markdown())

        # 메모리 해제
        del result
        gc.collect()

        print(f"✅ 완료: {output_file}")

# 사용
large_files = ["huge1.pdf", "huge2.pdf", "huge3.pdf"]
process_large_files(large_files)
```

---

## 실무 활용 사례

### 📚 사례 1: 연구 논문 관리 시스템

```python
from docling.document_converter import DocumentConverter
import os
import json
from datetime import datetime

class ResearchPaperManager:
    """
    연구 논문 자동 정리 시스템
    """
    def __init__(self, library_path="./papers"):
        self.library_path = library_path
        self.converter = DocumentConverter()
        self.index_file = os.path.join(library_path, "index.json")

        os.makedirs(library_path, exist_ok=True)

        # 인덱스 로드
        if os.path.exists(self.index_file):
            with open(self.index_file, 'r') as f:
                self.index = json.load(f)
        else:
            self.index = {}

    def add_paper(self, pdf_file, metadata=None):
        """
        논문 추가 및 변환
        """
        print(f"논문 추가 중: {pdf_file}")

        # 변환
        result = self.converter.convert(pdf_file)
        markdown = result.document.export_to_markdown()

        # 파일명 생성
        paper_id = os.path.basename(pdf_file).replace('.pdf', '')
        md_file = os.path.join(self.library_path, f"{paper_id}.md")

        # Markdown 저장
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(markdown)

        # 메타데이터 추출
        paper_info = {
            'id': paper_id,
            'original_file': pdf_file,
            'markdown_file': md_file,
            'added_date': datetime.now().isoformat(),
            'metadata': metadata or {}
        }

        # 인덱스 업데이트
        self.index[paper_id] = paper_info
        self._save_index()

        print(f"✅ 추가 완료: {paper_id}")

        return paper_id

    def search(self, keyword):
        """
        키워드로 논문 검색
        """
        results = []

        for paper_id, info in self.index.items():
            md_file = info['markdown_file']

            # Markdown 파일 읽기
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            # 키워드 검색
            if keyword.lower() in content.lower():
                results.append({
                    'paper_id': paper_id,
                    'file': md_file,
                    'metadata': info['metadata']
                })

        return results

    def _save_index(self):
        """인덱스 저장"""
        with open(self.index_file, 'w') as f:
            json.dump(self.index, f, indent=2)

# 사용 예시
manager = ResearchPaperManager("./my_papers")

# 논문 추가
manager.add_paper(
    "transformer_paper.pdf",
    metadata={
        'title': 'Attention Is All You Need',
        'authors': ['Vaswani et al.'],
        'year': 2017,
        'tags': ['NLP', 'Transformer', 'Attention']
    }
)

# 검색
results = manager.search("attention mechanism")
print(f"검색 결과: {len(results)}개")
```

### 📋 사례 2: 계약서 분석 시스템

```python
from docling.document_converter import DocumentConverter
import re
from dataclasses import dataclass
from typing import List

@dataclass
class ContractClause:
    """계약 조항"""
    type: str
    content: str
    page: int

class ContractAnalyzer:
    """
    계약서 자동 분석 시스템
    """
    def __init__(self):
        self.converter = DocumentConverter()

    def analyze(self, contract_pdf):
        """
        계약서 분석
        """
        print(f"계약서 분석 중: {contract_pdf}")

        # PDF 변환
        result = self.converter.convert(contract_pdf)
        markdown = result.document.export_to_markdown()

        # 주요 조항 추출
        clauses = self._extract_clauses(markdown)

        # 분석 리포트 생성
        report = self._generate_report(contract_pdf, clauses)

        return report

    def _extract_clauses(self, markdown_text):
        """주요 조항 추출"""
        clauses = []

        # 기간 관련
        period_pattern = r'(\d+년|\d+개월|\d+일)'
        if re.search(period_pattern, markdown_text):
            clauses.append(ContractClause(
                type='계약 기간',
                content=self._extract_context(markdown_text, period_pattern),
                page=1
            ))

        # 금액 관련
        money_pattern = r'(\d{1,3}(,\d{3})*원|\$\d{1,3}(,\d{3})*)'
        if re.search(money_pattern, markdown_text):
            clauses.append(ContractClause(
                type='금액',
                content=self._extract_context(markdown_text, money_pattern),
                page=1
            ))

        # 해지 조건
        if '해지' in markdown_text or '종료' in markdown_text:
            clauses.append(ContractClause(
                type='해지 조건',
                content=self._extract_context(markdown_text, '해지|종료'),
                page=1
            ))

        return clauses

    def _extract_context(self, text, pattern, context_size=100):
        """패턴 주변 문맥 추출"""
        match = re.search(pattern, text)
        if match:
            start = max(0, match.start() - context_size)
            end = min(len(text), match.end() + context_size)
            return text[start:end]
        return ""

    def _generate_report(self, contract_file, clauses):
        """분석 리포트 생성"""
        report = f"""# 계약서 분석 리포트

## 계약서 정보
- 파일: {contract_file}
- 분석 날짜: {datetime.now().strftime('%Y-%m-%d')}

## 주요 조항

"""
        for clause in clauses:
            report += f"""### {clause.type}
```
{clause.content}
```

"""

        report += """## 주의사항
- [ ] 계약 기간 확인
- [ ] 금액 및 지불 조건 확인
- [ ] 해지 조건 검토
- [ ] 법률 자문 필요 시 전문가 상담

"""

        return report

# 사용 예시
analyzer = ContractAnalyzer()
report = analyzer.analyze("contract.pdf")

# 리포트 저장
with open("contract_analysis.md", "w", encoding="utf-8") as f:
    f.write(report)

print("✅ 계약서 분석 완료!")
```

### 📖 사례 3: 교육 콘텐츠 변환 시스템

```python
from docling.document_converter import DocumentConverter
import os

class EducationContentConverter:
    """
    교육 자료를 다양한 형식으로 변환
    """
    def __init__(self):
        self.converter = DocumentConverter()

    def convert_lesson(self, source_file, output_format='markdown'):
        """
        강의 자료 변환
        """
        print(f"변환 중: {source_file}")

        result = self.converter.convert(source_file)

        if output_format == 'markdown':
            content = self._to_student_friendly_markdown(result)
        elif output_format == 'html':
            content = self._to_interactive_html(result)
        elif output_format == 'study_guide':
            content = self._to_study_guide(result)

        return content

    def _to_student_friendly_markdown(self, result):
        """학생 친화적 Markdown"""
        markdown = result.document.export_to_markdown()

        # 학습 포인트 추가
        enhanced = f"""# 📚 학습 자료

## 학습 목표
- 이 내용을 통해 무엇을 배울 수 있나요?
- [ ] 목표 1
- [ ] 목표 2

---

{markdown}

---

## 📝 정리 노트

**주요 개념:**
-

**어려운 부분:**
-

**질문:**
-

## 🎯 복습 문제
1.
2.
3.

"""
        return enhanced

    def _to_interactive_html(self, result):
        """인터랙티브 HTML"""
        markdown = result.document.export_to_markdown()

        html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>학습 자료</title>
    <style>
        body {{
            font-family: 'Noto Sans KR', sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }}
        .highlight {{
            background-color: #fff3cd;
            padding: 2px 5px;
            cursor: pointer;
        }}
        .note-box {{
            border-left: 4px solid #007bff;
            padding-left: 15px;
            margin: 20px 0;
            background: #f8f9fa;
        }}
    </style>
    <script>
        function addNote(element) {{
            const note = prompt("메모 입력:");
            if (note) {{
                element.title = note;
                element.style.backgroundColor = '#ffc107';
            }}
        }}
    </script>
</head>
<body>
    <h1>📖 인터랙티브 학습 자료</h1>
    <p>중요한 부분을 클릭하면 메모를 추가할 수 있습니다.</p>
    <hr>
    <div id="content">
        {markdown}
    </div>
</body>
</html>
"""
        return html

    def _to_study_guide(self, result):
        """학습 가이드 생성"""
        markdown = result.document.export_to_markdown()

        # 섹션 분할
        sections = markdown.split('\n## ')

        guide = """# 📖 학습 가이드

## 사용 방법
1. 각 섹션을 천천히 읽습니다
2. 이해가 안 되는 부분은 표시합니다
3. 예제를 직접 실습합니다
4. 복습 문제를 풉니다

---

"""

        for i, section in enumerate(sections[1:], 1):
            guide += f"""## {i}. {section.split('\n')[0]}

{section}

### ✅ 체크포인트
- [ ] 이 섹션의 핵심 개념을 이해했나요?
- [ ] 예제를 직접 실습해봤나요?
- [ ] 관련 질문에 답할 수 있나요?

---

"""

        return guide

# 사용
converter = EducationContentConverter()

# Markdown으로
markdown_content = converter.convert_lesson(
    "lecture.pdf",
    output_format='markdown'
)

with open("student_material.md", "w", encoding="utf-8") as f:
    f.write(markdown_content)

# HTML로
html_content = converter.convert_lesson(
    "lecture.pdf",
    output_format='html'
)

with open("interactive_lesson.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("✅ 교육 콘텐츠 변환 완료!")
```

---

## 문제 해결과 팁

### 🔧 자주 발생하는 문제

#### 문제 1: 설치 오류
```bash
# 오류: "No module named 'docling'"

# 해결책 1: pip 업그레이드
pip install --upgrade pip
pip install docling

# 해결책 2: 가상 환경 재생성
python -m venv new_env
source new_env/bin/activate  # Windows: new_env\Scripts\activate
pip install docling

# 해결책 3: 사용자 디렉토리에 설치
pip install --user docling
```

#### 문제 2: 메모리 부족
```python
# 증상: 큰 PDF 처리 시 "MemoryError"

# 해결책: 페이지 단위 처리 또는 파일 분할
import PyPDF2

def split_large_pdf(input_pdf, pages_per_chunk=50):
    """
    큰 PDF를 작은 조각으로 분할
    """
    pdf_reader = PyPDF2.PdfReader(input_pdf)
    total_pages = len(pdf_reader.pages)

    for chunk_num in range(0, total_pages, pages_per_chunk):
        pdf_writer = PyPDF2.PdfWriter()

        for page_num in range(chunk_num, min(chunk_num + pages_per_chunk, total_pages)):
            pdf_writer.add_page(pdf_reader.pages[page_num])

        output_filename = f"chunk_{chunk_num//pages_per_chunk + 1}.pdf"
        with open(output_filename, 'wb') as output_pdf:
            pdf_writer.write(output_pdf)

        print(f"생성됨: {output_filename}")

# 사용
split_large_pdf("huge_document.pdf", pages_per_chunk=30)
```

#### 문제 3: 한글 깨짐
```python
# 잘못된 예
with open("output.md", "w") as f:
    f.write(markdown)  # 한글 깨짐

# 올바른 예
with open("output.md", "w", encoding="utf-8") as f:
    f.write(markdown)  # 정상 출력

# 또는 명시적 설정
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
```

#### 문제 4: OCR 정확도 낮음
```python
# 해결책: 이미지 전처리

from PIL import Image, ImageEnhance, ImageFilter

def improve_ocr_accuracy(image_path):
    """
    OCR 정확도를 높이기 위한 이미지 전처리
    """
    img = Image.open(image_path)

    # 1. 그레이스케일 변환
    img = img.convert('L')

    # 2. 대비 향상
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(2.0)

    # 3. 선명도 향상
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.5)

    # 4. 노이즈 제거
    img = img.filter(ImageFilter.MedianFilter(size=3))

    # 저장
    processed_path = "processed_" + image_path
    img.save(processed_path)

    return processed_path

# 사용
processed_image = improve_ocr_accuracy("scan.png")
result = converter.convert(processed_image)
```

### 💡 성능 향상 팁

#### 팁 1: 파일 타입 사전 필터링
```python
def filter_valid_files(files):
    """
    처리 가능한 파일만 선택
    """
    valid_extensions = {
        '.pdf', '.docx', '.pptx', '.xlsx',
        '.png', '.jpg', '.jpeg', '.tiff'
    }

    valid_files = []

    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in valid_extensions:
            valid_files.append(file)
        else:
            print(f"⚠️ 건너뜀: {file} (지원하지 않는 형식)")

    return valid_files

# 사용
all_files = os.listdir("./documents")
valid_files = filter_valid_files(all_files)
```

#### 팁 2: 에러 로깅
```python
import logging
from datetime import datetime

# 로거 설정
logging.basicConfig(
    filename=f'docling_{datetime.now().strftime("%Y%m%d")}.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def safe_convert(pdf_file):
    """
    에러를 로깅하면서 안전하게 변환
    """
    try:
        logging.info(f"변환 시작: {pdf_file}")
        converter = DocumentConverter()
        result = converter.convert(pdf_file)
        logging.info(f"변환 성공: {pdf_file}")
        return result

    except Exception as e:
        logging.error(f"변환 실패: {pdf_file} - {str(e)}")
        return None

# 사용
result = safe_convert("document.pdf")
if result:
    print("성공!")
else:
    print("실패! 로그 파일을 확인하세요.")
```

#### 팁 3: 진행 상황 저장
```python
import json
import os

class ProgressTracker:
    """
    배치 처리 진행 상황 추적
    """
    def __init__(self, progress_file="progress.json"):
        self.progress_file = progress_file

        if os.path.exists(progress_file):
            with open(progress_file, 'r') as f:
                self.progress = json.load(f)
        else:
            self.progress = {
                'completed': [],
                'failed': [],
                'remaining': []
            }

    def mark_completed(self, file):
        """완료 표시"""
        if file in self.progress['remaining']:
            self.progress['remaining'].remove(file)
        if file not in self.progress['completed']:
            self.progress['completed'].append(file)
        self._save()

    def mark_failed(self, file, error):
        """실패 표시"""
        if file in self.progress['remaining']:
            self.progress['remaining'].remove(file)
        self.progress['failed'].append({
            'file': file,
            'error': str(error)
        })
        self._save()

    def get_remaining(self):
        """남은 파일 목록"""
        return self.progress['remaining']

    def _save(self):
        """진행 상황 저장"""
        with open(self.progress_file, 'w') as f:
            json.dump(self.progress, f, indent=2)

# 사용
tracker = ProgressTracker()

# 처리할 파일 목록 설정
all_files = ["doc1.pdf", "doc2.pdf", "doc3.pdf"]
tracker.progress['remaining'] = all_files
tracker._save()

# 처리
converter = DocumentConverter()
for file in tracker.get_remaining():
    try:
        result = converter.convert(file)
        tracker.mark_completed(file)
        print(f"✅ {file}")
    except Exception as e:
        tracker.mark_failed(file, e)
        print(f"❌ {file}: {e}")

# 중단 후 재개 가능!
```

---

## 마무리

### 🎓 학습 요약

**Part 2에서 배운 내용**:
1. ✅ 고급 변환 옵션 및 성능 최적화
2. ✅ 다양한 문서 형식 처리 (DOCX, PPTX, XLSX, 이미지, 오디오)
3. ✅ OCR과 스캔 문서 처리 기법
4. ✅ LangChain, LlamaIndex 등 AI 프레임워크 통합
5. ✅ CLI 도구 활용 및 스크립팅
6. ✅ 대량 문서 처리 최적화 전략
7. ✅ 실무 활용 사례 (논문 관리, 계약서 분석, 교육 콘텐츠)
8. ✅ 문제 해결 및 실전 팁

### 🚀 다음 단계

#### 초보자
- [ ] 다양한 문서 형식으로 실습
- [ ] CLI 명령어 연습
- [ ] 간단한 자동화 스크립트 작성

#### 중급자
- [ ] AI 프레임워크 연동 프로젝트
- [ ] 배치 처리 시스템 구축
- [ ] 성능 최적화 실험

#### 고급자
- [ ] 프로덕션 시스템 설계
- [ ] 커스텀 파이프라인 개발
- [ ] 오픈소스 기여

### 🔗 관련 노트

- [[Docling_문서처리_AI_도구_완벽_가이드_Part1|Part 1: 기초편]]
- [[LangChain_실전_활용_가이드]]
- [[LlamaIndex_검색_시스템_구축]]
- [[Python_자동화_스크립트_작성]]
- [[OCR_기술_완벽_가이드]]
- [[배치_처리_최적화_전략]]

### 📚 추가 자료

- **공식 문서**: https://docling-project.github.io/docling/
- **예제 모음**: https://docling-project.github.io/docling/examples/
- **통합 가이드**: https://docling-project.github.io/docling/integrations/
- **GitHub Issues**: https://github.com/docling-project/docling/issues

---

**마지막 업데이트**: 2025-10-14
**작성자**: Claude AI (Obsidian Vault 자동화 시스템)
**난이도**: 중급-고급
**예상 학습 시간**: 1-2시간