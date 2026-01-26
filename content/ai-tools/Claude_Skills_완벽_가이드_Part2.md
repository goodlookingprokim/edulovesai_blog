---
title: Claude Skills 완벽 가이드 Part 2 - Skills 둘러보기
created: 2025-10-24
last_modified: 2025-10-24
tags:
  - AI/Claude
  - Claude/Skills
  - 개발도구/AI
  - 초보자가이드
  - Skills컬렉션
status: 완료
type: 가이드
priority: high
osba:
  version: 1
  lastAnalyzed: 2025-12-20T14:40:31.099Z
  confidenceScore: 0.9
  related:
    - path: R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_완벽_가이드_Part1.md
      score: 0.95
      relation: extends
    - path: R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_완벽_가이드_Part3.md
      score: 0.92
      relation: supports
    - path: R - Resources/AI 및 개발/AI 기술 자료/Claude Skills/Claude Skills 완벽 가이드 Part 3 - 고급 활용과 맞춤 제작.md
      score: 0.88
      relation: related
    - path: R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_종합색인.md
      score: 0.9
      relation: related
    - path: R - Resources/AI 및 개발/AI 기술 자료/Claude Skills/Claude Skills 저장소 활용 완벽 가이드.md
      score: 0.85
      relation: supports
  gaps:
    - topic: 나머지 카테고리 Skills 상세 소개 (개발 도구, 데이터 분석, 글쓰기 & 연구 등)
      priority: high
    - topic: Skills 간 조합 및 고급 사용법
      priority: medium
    - topic: Skills 설치 및 활성화 실전 가이드
      priority: medium
---

# 🎨 Claude Skills 완벽 가이드 Part 2 - Skills 둘러보기

> **이번 Part에서는:**
> 
> - 80+ Skills를 카테고리별로 소개해요! 📚
> - 각 Skill이 정확히 뭘 하는지 배워요! 🎯
> - 실전 사용 예제를 봐요! 💡
> - 나에게 필요한 Skill을 찾아요! 🔍

---

## 📋 목차

1. [[#문서 관리 Skills (가장 인기!)]]
2. [[#창작 & 디자인 Skills]]
3. [[#개발 도구 Skills]]
4. [[#데이터 분석 Skills]]
5. [[#글쓰기 & 연구 Skills]]
6. [[#학습 & 지식관리 Skills]]
7. [[#미디어 & 콘텐츠 Skills]]
8. [[#협업 & 프로젝트 관리 Skills]]
9. [[#보안 & 테스트 Skills]]
10. [[#유틸리티 & 자동화 Skills]]

---

## 문서 관리 Skills (가장 인기!)

### 📊 Excel Skill (xlsx)

**이런 분들에게:**
```
✅ 데이터 정리 자주 하시는 분
✅ 보고서 만드는 직장인
✅ 가계부 관리하시는 분
✅ 통계 자료 다루는 학생
```

**할 수 있는 것:**

🌱 **초급 예제: 간단한 표 만들기**
```
사용자: "우리 팀 멤버 명단 엑셀로 만들어줘.
        이름, 직책, 이메일, 전화번호 항목으로"

Claude: [xlsx Skill 활성화]

✅ team_members.xlsx 생성
내용:
| 이름   | 직책      | 이메일            | 전화번호      |
|--------|-----------|-------------------|---------------|
| 홍길동 | 팀장      | hong@company.com  | 010-1234-5678 |
| 김철수 | 대리      | kim@company.com   | 010-2345-6789 |
| 이영희 | 사원      | lee@company.com   | 010-3456-7890 |
```

🌿 **중급 예제: 수식과 차트**
```
사용자: "이번 달 매출 데이터로 엑셀 만들어줘.
        - 일별 매출 입력
        - 총합계 수식
        - 추세 그래프"

Claude:
✅ sales_october.xlsx

Sheet1: 원본 데이터
| 날짜  | 매출      |
|-------|-----------|
| 10/1  | 1,230,000 |
| 10/2  | 1,450,000 |
| ...   | ...       |
| 합계  | =SUM(B2:B32) ← 자동 수식!

Sheet2: 차트
📈 매출 추세 그래프 자동 생성
```

🌳 **고급 예제: 복잡한 분석**
```
사용자: "고객 데이터베이스 CSV 파일을
        분석해서 피벗 테이블 만들어줘.
        - 지역별 매출
        - 연령대별 구매 패턴
        - 월별 트렌드"

Claude:
✅ customer_analysis.xlsx

Sheet1: 지역별 피벗 테이블
Sheet2: 연령대별 분석
Sheet3: 월별 트렌드
Sheet4: 종합 대시보드
→ 자동 조건부 서식
→ 색상 코딩
→ 필터 설정
```

---

### 📄 Word Skill (docx)

**이런 분들에게:**
```
✅ 문서 작업 많은 직장인
✅ 리포트 쓰는 학생
✅ 계약서 만드는 분
✅ 매뉴얼 작성자
```

**할 수 있는 것:**

🌱 **초급: 기본 문서**
```
사용자: "회의록 템플릿 만들어줘"

Claude:
✅ meeting_minutes.docx

내용:
━━━━━━━━━━━━━━━━━━━
       회의록
━━━━━━━━━━━━━━━━━━━

일시: [날짜/시간]
장소: [회의실]
참석자: [이름 나열]

안건:
1. _______________
2. _______________

결정사항:
□ _______________
□ _______________

다음 회의: [날짜]
```

🌿 **중급: 서식과 스타일**
```
사용자: "제안서 만들어줘.
        - 표지
        - 목차 자동
        - 헤더/푸터
        - 페이지 번호"

Claude:
✅ proposal.docx

구조:
1. 표지 (회사 로고, 제목)
2. 목차 (자동 생성, 링크)
3. 본문 (스타일 적용)
4. 부록
→ 전문적인 서식!
```

🌳 **고급: 추적 변경 & 주석**
```
사용자: "계약서 검토본 만들어줘.
        수정 사항 추적하고
        법무팀 확인 필요한 곳 주석 달아줘"

Claude:
✅ contract_review.docx

기능:
→ Track Changes 활성화
→ 주석으로 검토 의견
→ 버전 관리
→ 비교 기능
```

---

### 📕 PDF Skill

**이런 분들에게:**
```
✅ PDF 편집 필요한 분
✅ 문서 변환 자주 하는 분
✅ 계약서 관리하는 분
✅ 논문 읽는 학생
```

**할 수 있는 것:**

🌱 **초급: PDF 변환**
```
사용자: "이 Word 파일을 PDF로 변환해줘"

Claude:
✅ document.pdf
→ 레이아웃 유지
→ 폰트 임베드
→ 하이퍼링크 보존
```

🌿 **중급: PDF 편집**
```
사용자: "이 PDF에서:
        - 3, 5, 7페이지 삭제
        - 새 표지 추가
        - 페이지 순서 변경"

Claude:
✅ edited.pdf
→ 요청대로 수정 완료
```

🌳 **고급: PDF 분석**
```
사용자: "이 100페이지 계약서에서
        '책임' 관련 조항 모두 찾아서
        별도 PDF로 추출해줘"

Claude:
[PDF 텍스트 분석]
✅ liability_clauses.pdf
→ 관련 섹션만 추출
→ 하이라이트 표시
→ 목차 자동 생성
```

---

### 🎬 PowerPoint Skill (pptx)

**이런 분들에게:**
```
✅ 발표 자주 하는 분
✅ 영업 제안하는 분
✅ 교육 자료 만드는 선생님
✅ 학회 발표하는 연구자
```

**할 수 있는 것:**

🌱 **초급: 기본 슬라이드**
```
사용자: "제품 소개 PPT 만들어줘.
        5페이지 정도로"

Claude:
✅ product_intro.pptx

슬라이드:
1. 표지 (제목, 로고)
2. 문제 정의
3. 우리 솔루션
4. 주요 기능
5. 연락처
```

🌿 **중급: 데이터 시각화**
```
사용자: "분기별 매출 데이터를
        PPT로 만들어줘.
        그래프와 차트 포함"

Claude:
✅ quarterly_sales.pptx

내용:
→ 막대 그래프 (분기별 비교)
→ 파이 차트 (제품별 비율)
→ 꺾은선 그래프 (트렌드)
→ 애니메이션 효과
```

🌳 **고급: 인터랙티브 프레젠테이션**
```
사용자: "대화형 교육 자료 만들어줘.
        퀴즈 슬라이드 포함"

Claude:
✅ interactive_training.pptx

기능:
→ 하이퍼링크로 페이지 이동
→ 버튼으로 정답 확인
→ 애니메이션 효과
→ 동영상 임베드
```

---

## 창작 & 디자인 Skills

### 🎨 Canvas Design Skill

**비유:**
```
Canva 같은 디자인 도구
+ Claude의 AI 능력
= 자동 디자인!
```

🌱 **초급: 소셜 미디어 포스트**
```
사용자: "인스타그램 포스트 디자인해줘.
        내용: 신제품 출시 알림"

Claude:
✅ instagram_post.png (1080x1080)

디자인:
📱 ┌─────────────┐
   │  📢 NEW!    │
   │             │
   │  신제품     │
   │  출시!      │
   │             │
   │ 10% 할인    │
   └─────────────┘
```

🌿 **중급: 브랜드 일관성**
```
사용자: "우리 브랜드 컬러로
        명함 디자인해줘"

Claude:
✅ business_card.pdf

스타일:
→ 회사 로고 배치
→ 브랜드 컬러 (#FF5733)
→ 폰트 일관성
→ 전/후면 디자인
```

---

## 개발 도구 Skills

### 💻 Artifacts Builder

**이런 분들에게:**
```
✅ 웹 개발자
✅ UI/UX 디자이너
✅ 프로토타입 만드는 분
```

🌱 **초급: 간단한 웹페이지**
```
사용자: "로그인 페이지 만들어줘"

Claude:
✅ login.html + login.css

```html
<!DOCTYPE html>
<html>
<head>
    <title>로그인</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="login-box">
        <h2>로그인</h2>
        <form>
            <input type="email" placeholder="이메일">
            <input type="password" placeholder="비밀번호">
            <button>로그인</button>
        </form>
    </div>
</body>
</html>
```
→ 바로 실행 가능!
```

🌿 **중급: React 컴포넌트**
```
사용자: "할 일 목록 React 컴포넌트 만들어줘"

Claude:
```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```
→ 작동하는 코드!
```

---

## 데이터 분석 Skills

### 📊 CSV Data Summarizer

**할 수 있는 것:**

🌱 **초급: 기본 통계**
```
사용자: "sales.csv 파일 분석해줘"

Claude:
📊 분석 결과:

총 행: 1,234
총 열: 5

수치 통계:
- 매출 평균: 1,234,567원
- 최대: 5,000,000원
- 최소: 100,000원
- 표준편차: 456,789원
```

🌿 **중급: 시각화**
```
사용자: "월별 매출 그래프 그려줘"

Claude:
✅ sales_chart.png

📈 [막대 그래프]
   월별 매출 추이
   → 상승 트렌드 확인
   → 12월 최고점
```

---

## 🎯 Part 2 핵심 정리

### 📊 Skills 선택 가이드

**업무별 추천:**

| 직종 | 필수 Skills | 선택 Skills |
|------|-------------|-------------|
| 사무직 | Excel, Word, PPT | PDF |
| 개발자 | Artifacts, MCP | Git Worktrees |
| 디자이너 | Canvas Design, Theme | Brand Guidelines |
| 연구자 | PDF, Excel | Article Extractor |
| 마케터 | PPT, Canvas | Social Media |

### ⚡ 시작하기 좋은 Top 5

```
1. 📊 Excel Skill
   → 데이터 정리 자동화
   → 가장 실용적!

2. 📄 Word Skill
   → 문서 작성 편리
   → 서식 자동 적용

3. 🎬 PPT Skill
   → 발표 자료 제작
   → 시각화 도구

4. 📕 PDF Skill
   → PDF 편집/변환
   → 필수 도구

5. 🎨 Canvas Design
   → 디자인 자동화
   → 비디자이너도 OK
```

---

## 🔗 연결된 노트

- [[Claude_Skills_완벽_가이드_Part1]] - 기본 개념
- [[Claude_Skills_완벽_가이드_Part3]] - 실전 활용
- [[Claude AI 활용 케이스 스터디]]
- [[업무 자동화 완벽 가이드]]

---

**💡 Pro Tip:**
처음엔 1~2개 Skill만 마스터하세요!
욕심내서 많이 배우려다 보면
아무것도 제대로 못 써요!

Excel + PPT만 잘 써도
생산성 2배 상승! 🚀

---

*마지막 업데이트: 2025-10-24*
*난이도: ⭐⭐ 초급-중급*
*예상 학습 시간: 45분*
*소개된 Skills: 80+*

## 🧠 Connected Insights

> 📅 Last analyzed: 2025. 12. 20. 오후 11:40:30
> 💰 Analysis cost: $0.0208

### 🔗 Related Notes

- 🔼 [[R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_완벽_가이드_Part1.md]]
  - extends: Part2는 Part1의 기초 개념(Claude Skills란 무엇인가, 작동 원리, 시작하기)을 확장하여 구체적인 Skills 카테고리와 예제를 소개하며, 목차에서 Part1을 직접 참조함. 논리적 연속성으로 시리즈의 자연스러운 후속.
  - Confidence: █████ (95%)

- ✅ [[R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_완벽_가이드_Part3.md]]
  - supports: Part2의 문서 관리 Skills(Excel, Word 등) 예제가 Part3의 실전 사례(월간 보고서 자동화)에서 직접 활용되어 지지. Part2 예제를 바탕으로 Skills 조합 전략을 제시함.
  - Confidence: █████ (92%)

- 🔗 [[R - Resources/AI 및 개발/AI 기술 자료/Claude Skills/Claude Skills 완벽 가이드 Part 3 - 고급 활용과 맞춤 제작.md]]
  - related: Part2의 기본 Skills 소개(문서 관리, 디자인)가 고급 Part3의 기업 커뮤니케이션 및 문서 처리 심화로 개념적으로 연결되며, Skills 제작 팁으로 확장 가능.
  - Confidence: ████░ (88%)

- 🔗 [[R - Resources/AI 및 개발/AI 기술 자료/Claude_Skills_종합색인.md]]
  - related: 종합 색인(MOC)이 Part2의 구조(문서 관리 Skills 등)를 직접 링크하고 전체 학습 경로를 안내하여 네비게이션 지원. Part2를 'Skills 둘러보기' 섹션으로 인덱싱.
  - Confidence: █████ (90%)

- ✅ [[R - Resources/AI 및 개발/AI 기술 자료/Claude Skills/Claude Skills 저장소 활용 완벽 가이드.md]]
  - supports: Part2에서 소개된 Skills(Excel, Canvas 등)이 anthropics/skills 저장소의 document-skills 등에서 유래하며, 저장소 구조와 예제 카탈로그가 Part2 예제를 뒷받침.
  - Confidence: ████░ (85%)

### 📚 Knowledge Gaps

- 🔴 **나머지 카테고리 Skills 상세 소개 (개발 도구, 데이터 분석, 글쓰기 & 연구 등)**
  - Part2 목차에 10개 카테고리 언급되었으나 문서 관리와 창작&디자인만 상세 예제 제공. 다른 카테고리의 구체적 기능과 예제가 없어 초보자 학습 경로 불완전.
  - Suggested resources: Claude_Skills_완벽_가이드_Part3.md (실전 사례 보완), anthropics/skills GitHub 저장소 (공식 Skills 카탈로그)

- 🟡 **Skills 간 조합 및 고급 사용법**
  - 개별 Skills 예제는 풍부하나, 예를 들어 Excel + PPT + PDF 워크플로우 조합이나 오류 처리 방법이 부족. Part3에서 일부 다루나 Part2에서 예시 필요.
  - Suggested resources: Claude_Skills_완벽_가이드_Part3.md (Skills 조합 전략), Claude Skills 저장소 활용 완벽 가이드.md (심층 활용법)

- 🟡 **Skills 설치 및 활성화 실전 가이드**
  - 예제에서 '[xlsx Skill 활성화]' 언급되나 구체적 설치 단계(예: 코드 실행 환경 설정)가 생략되어 초보자 장벽. Part1에서 기본 언급하나 Skills별 상세 필요.
  - Suggested resources: Claude_Skills_완벽_가이드_Part1.md (시작하기 섹션), anthropics/skills 저장소 문서

### 💡 AI Insights

이 노트는 Claude Skills 시리즈의 핵심 중간 단계로, 80+ Skills를 카테고리화하고 초/중/고급 예제를 통해 실용성을 강조. 문서 관리 Skills가 가장 인기 강조되며 비유와 시각적 예제로 접근성 높임. 그러나 내용이 truncated되어 전체 카테고리 커버 부족으로 시리즈 완성도 의존적. MOC와 연계 시 강력한 학습 허브 역할.
