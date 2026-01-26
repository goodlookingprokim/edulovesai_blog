---
title: "Claude Skills 완벽 가이드 Part 2 - 실전 활용: 창의성과 개발"
created: 2025-10-17
last_modified: 2025-10-17
tags:
  - AI/Claude
  - AI/Skills
  - 개발/실전
  - 창의성
  - 자동화
status: 완료
type: 학습가이드
priority: high
share_link: https://share.note.sx/smds37on#OPnKfJ/VJ42Y9jsEcxwDTl/HP8nLEh7HvZAmeakpsUQ
share_updated: 2025-10-17T20:14:15+09:00
---

# Claude Skills 완벽 가이드 Part 2 - 실전 활용: 창의성과 개발

> **🎯 이 가이드의 목표**: 실제 프로젝트에서 바로 사용할 수 있는 Skills를 단계별 예제와 함께 배웁니다.

---

## 📋 목차

1. [[#창의적 Skills로 예술가처럼 작업하기]]
2. [[#개발자 Skills로 프로처럼 코딩하기]]
3. [[#실전 프로젝트 - 포트폴리오 웹사이트 만들기]]
4. [[#Skills 조합의 마법 - 여러 Skill 함께 사용하기]]
5. [[#문제 해결 가이드 - 자주 묻는 질문]]
6. [[#용어 사전 Part 2]]
7. [[#다음 단계]]

---

## 창의적 Skills로 예술가처럼 작업하기

### 📖 이야기로 시작하기

미술 수업 시간을 떠올려보세요. 선생님이 **"자유롭게 그려보세요"**라고 하면 막막하죠? 하지만 **"이 색상 팔레트를 사용해서, 추상화를 그려보세요"**라고 구체적으로 말씀하시면 훨씬 쉽게 시작할 수 있어요.

Claude의 창의적 Skills도 마찬가지입니다:
- **일반 Claude**: "디자인 해줘" → 막연함
- **Skill 활용**: "canvas-design 스킬로 미니멀 포스터 만들어줘" → 명확한 방향!

---

### 1. 알고리즘 아트 (algorithmic-art) - 프로그래밍으로 예술 만들기

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: 코드로 움직이는 아름다운 그림을 자동으로 그려주는 마법사예요.

**실생활 비유**:
- 만화경을 돌리면 무늬가 계속 변하는 것처럼
- 컴퓨터가 수학 공식으로 예술 작품을 "계산"해서 만들어요

**기술 스택**: p5.js (자바스크립트 기반 그래픽 라이브러리)

---

#### 🌱 기초 예제: "무작위 원 패턴"

**목표**: 화면에 크기와 색상이 다른 원들을 무작위로 그리기

```javascript
// algorithmic-art 스킬 사용 예제
// 프롬프트: "algorithmic-art 스킬로 무작위 원 패턴 만들어줘"

function setup() {
  createCanvas(400, 400);  // 400x400 픽셀 캔버스 생성
  background(255);         // 흰색 배경
}

function draw() {
  // 무작위 위치에 원 그리기
  let x = random(width);   // 0~400 사이 무작위 x좌표
  let y = random(height);  // 0~400 사이 무작위 y좌표
  let size = random(10, 50); // 10~50 사이 무작위 크기

  // 무작위 색상 (투명도 50)
  fill(random(255), random(255), random(255), 50);
  noStroke();              // 테두리 없음

  circle(x, y, size);      // 원 그리기
}

/*
설명:
- setup(): 한 번만 실행되는 초기 설정
- draw(): 계속 반복 실행 (초당 60번)
- random(max): 0부터 max까지 무작위 숫자
- fill(): 채우기 색상 지정
*/
```

**결과**: 마우스 클릭 없이도 끊임없이 새로운 원들이 그려지는 추상화!

**🤔 생각해보기**:
- `random(255)`를 `150`으로 바꾸면 어떻게 될까요? (힌트: 더 어두운 색들)
- `size`를 고정값 `30`으로 바꾸면? (힌트: 모든 원이 같은 크기)

---

#### 🌿 중급 예제: "입자 흐름 시스템"

**목표**: 마우스를 따라다니는 입자들의 흐름 만들기 (실제 앱 로딩 화면에 쓰임!)

```javascript
// 프롬프트: "algorithmic-art 스킬로 입자 흐름 애니메이션 만들어줘"

let particles = [];  // 입자들을 담을 배열

function setup() {
  createCanvas(800, 600);
  background(20);  // 어두운 배경

  // 100개의 입자 생성
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20, 20, 30, 25);  // 잔상 효과 (투명도 25)

  // 모든 입자 업데이트 & 그리기
  for (let p of particles) {
    p.update();
    p.show();
  }
}

// 입자 클래스 정의
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));  // 위치
    this.vel = createVector(0, 0);  // 속도
    this.acc = createVector(0, 0);  // 가속도
  }

  update() {
    // 마우스 방향으로 이동
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);  // 방향 계산
    dir.setMag(0.5);  // 속도 조절

    this.acc = dir;
    this.vel.add(this.acc);
    this.vel.limit(4);  // 최대 속도 제한
    this.pos.add(this.vel);

    // 화면 밖으로 나가면 반대편에서 나타남
    this.edges();
  }

  show() {
    stroke(100, 150, 255, 150);  // 파란색 계열
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

/*
핵심 개념:
- Vector: 방향과 크기를 가진 값 (예: 속도, 힘)
- 입자 시스템: 많은 작은 객체들이 독립적으로 움직임
- 잔상 효과: 이전 프레임을 살짝 남겨서 궤적 표현
*/
```

**실용성**:
- 웹사이트 로딩 애니메이션
- 프레젠테이션 배경
- 앱 splash 화면

**⚠️ 주의사항**:
- 입자가 너무 많으면 (1000개 이상) 느려질 수 있어요
- `background(20, 20, 30, 25)`의 투명도를 높이면 잔상이 더 길어져요

---

#### 🌳 고급 예제: "플로우 필드 (Flow Field)"

**목표**: 보이지 않는 힘의 장을 따라 입자들이 유기적으로 움직이는 복잡한 패턴

```javascript
// 프롬프트: "algorithmic-art 스킬로 펄린 노이즈 플로우 필드 만들어줘"

let particles = [];
let flowField = [];
let cols, rows;
let resolution = 20;  // 격자 해상도

function setup() {
  createCanvas(800, 800);
  cols = floor(width / resolution);
  rows = floor(height / resolution);

  // 플로우 필드 초기화
  flowField = new Array(cols * rows);

  // 5000개 입자 생성
  for (let i = 0; i < 5000; i++) {
    particles[i] = new Particle();
  }

  background(0);
}

function draw() {
  // 플로우 필드 업데이트 (시간에 따라 변화)
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;

      // 펄린 노이즈로 각도 계산 (자연스러운 무작위성)
      let angle = noise(xoff, yoff, frameCount * 0.001) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowField[index] = v;

      xoff += 0.1;
    }
    yoff += 0.1;
  }

  // 입자 업데이트
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;
    this.prevPos = this.pos.copy();  // 이전 위치 저장 (선 그리기용)
  }

  follow(vectors) {
    // 현재 위치에 해당하는 플로우 필드 벡터 찾기
    let x = floor(this.pos.x / resolution);
    let y = floor(this.pos.y / resolution);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);  // 가속도 리셋
  }

  show() {
    stroke(255, 255, 255, 5);  // 매우 투명한 흰색
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}

/*
고급 개념:
1. 펄린 노이즈 (Perlin Noise):
   - random()보다 자연스러운 무작위성
   - 인접한 값들이 비슷함 (부드러운 변화)
   - 지형, 구름, 불꽃 표현에 사용

2. 플로우 필드 (Flow Field):
   - 공간의 각 지점마다 방향 벡터 배치
   - 입자들이 이 벡터를 따라 움직임
   - 유기적이고 자연스러운 흐름 생성

3. 성능 최적화:
   - 입자는 점이 아닌 선으로 그림 (궤적 표현)
   - 매우 낮은 투명도 (alpha=5)로 누적 효과
*/
```

**결과**:
- 수천 개 입자들이 보이지 않는 힘의 강을 따라 흐르는 듯한 아름다운 패턴
- 시간이 지나면서 계속 변화하는 유기적인 형태

**실전 활용**:
- 음악 비주얼라이저
- 인터랙티브 설치 미술
- 기업 홍보 영상 배경
- NFT 생성 아트

---

### 2. 캔버스 디자인 (canvas-design) - 전문가급 그래픽 디자인

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: 포토샵이나 일러스트레이터 없이도 전문가 수준의 포스터, 배너, 인포그래픽을 만들어주는 디자이너 AI

**핵심 기능**:
- 디자인 원칙 자동 적용 (여백, 타이포그래피, 색상 조화)
- PNG, PDF 형식으로 출력
- 다양한 디자인 철학 (미니멀, 모던, 레트로 등)

---

#### 🌱 기초 예제: "명함 디자인"

```markdown
프롬프트:
"canvas-design 스킬을 사용해서 미니멀 스타일 명함을 만들어줘.

정보:
- 이름: 김민수
- 직책: 프론트엔드 개발자
- 이메일: minsu@example.com
- 폰: 010-1234-5678
- 색상: 파란색 계열
- 크기: 90mm x 50mm (표준 명함 크기)"
```

**결과**:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            김민수
    Frontend Developer

    ✉ minsu@example.com
    ☎ 010-1234-5678
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[깔끔한 파란색 그라데이션 배경]
[모던 산세리프 폰트]
[적절한 여백과 정렬]
```

**디자인 원칙 적용**:
- **시각적 계층**: 이름이 가장 큼 → 직책 → 연락처
- **여백의 미**: 텍스트가 캔버스의 50%만 차지
- **색상 조화**: 단일 색상 계열로 통일감

---

#### 🌿 중급 예제: "소셜 미디어 포스트 (인스타그램)"

```markdown
프롬프트:
"canvas-design 스킬로 인스타그램 정사각형 포스트 만들어줘.

콘텐츠:
- 주제: "Claude Skills 배우기"
- 메인 텍스트: "AI와 함께하는 생산성 혁명"
- 서브 텍스트: "당신의 작업을 10배 빠르게"
- 스타일: 모던, 그라데이션 배경
- 크기: 1080x1080px
- 아이콘: 로켓 🚀"
```

**Claude가 생성하는 레이아웃**:

```
┌─────────────────────────────────┐
│                                 │
│          🚀                     │
│                                 │
│   AI와 함께하는                │
│   생산성 혁명                   │
│                                 │
│   당신의 작업을 10배 빠르게     │
│                                 │
│   #ClaudeSkills #AI #생산성    │
│                                 │
└─────────────────────────────────┘

[보라-파랑 그라데이션 배경]
[대비가 뚜렷한 흰색 텍스트]
[하단 해시태그 영역]
```

**실용성**:
- 매일 SNS에 올릴 콘텐츠를 1분 만에 제작
- 브랜드 일관성 유지 (색상, 폰트 자동 적용)
- 여러 버전을 빠르게 테스트 가능

---

#### 🌳 고급 예제: "데이터 인포그래픽"

**목표**: 복잡한 데이터를 시각적으로 쉽게 전달하는 인포그래픽

```markdown
프롬프트:
"canvas-design 스킬로 연간 성장률 인포그래픽을 만들어줘.

데이터:
- 2023년: 1,200명 사용자
- 2024년: 3,500명 (192% 증가)
- 2025년 예상: 8,000명 (129% 증가)

요구사항:
- 바 차트 또는 라인 그래프 사용
- 각 수치를 명확하게 표시
- 증가율을 화살표로 표현
- A4 세로 (210mm x 297mm)
- 색상: 녹색 계열 (성장 의미)"
```

**결과 구조**:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📊 연간 사용자 성장 추이
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2023년 ████████░░░░░░░░░░ 1,200명

         ↗ +192%

2024년 ███████████████████░ 3,500명

         ↗ +129%

2025년 ████████████████████ 8,000명
(예상)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 핵심 인사이트:
- 2년간 567% 성장
- 월평균 225명 신규 가입
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[녹색 그라데이션 바]
[증가 화살표 애니메이션 효과]
[깔끔한 수치 정렬]
```

**고급 기능**:
- **데이터 자동 시각화**: 수치만 입력하면 최적의 차트 선택
- **색상 심리학**: 녹색 = 성장, 빨강 = 경고
- **타이포그래피 계층**: 제목 32pt, 수치 28pt, 설명 14pt

---

### 3. Slack GIF 생성기 (slack-gif-creator) - 팀 커뮤니케이션 강화

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: Slack에서 쓸 수 있는 짧고 재미있는 애니메이션 GIF를 자동으로 만들어줘요.

**특별한 점**:
- Slack의 파일 크기 제한 준수 (최대 5MB)
- 최적화된 해상도 (480x360px)
- 무한 루프 재생

---

#### 🌱 기초 예제: "축하 애니메이션"

```markdown
프롬프트:
"slack-gif-creator 스킬로 '배포 성공' 축하 GIF 만들어줘.

요구사항:
- 텍스트: "배포 성공! 🎉"
- 애니메이션: 폭죽 터지는 효과
- 길이: 2초
- 루프: 무한 반복"
```

**생성되는 GIF 프레임 구조**:

```
프레임 1 (0.0초): 배포 성공! (작은 글씨)
프레임 2 (0.2초): 배포 성공! (중간 글씨)
프레임 3 (0.4초): 배포 성공! 🎉 (큰 글씨)
프레임 4 (0.6초): [폭죽 파티클 확산]
프레임 5 (0.8초): [파티클 계속 확산]
...
프레임 10 (2.0초): [페이드 아웃] → 반복
```

**사용 시나리오**:
- CI/CD 파이프라인 완료 시 자동 전송
- 팀원 생일 축하
- 프로젝트 마일스톤 달성

---

#### 🌿 중급 예제: "로딩 인디케이터"

```markdown
프롬프트:
"slack-gif-creator 스킬로 '처리 중' 로딩 GIF 만들어줘.

요구사항:
- 텍스트: '데이터 분석 중...'
- 애니메이션: 회전하는 원 3개
- 색상: 파란색
- 길이: 1.5초 루프"
```

**GIF 구조**:

```
  ⭕ ⚪ ⚪  데이터 분석 중...
  ⚪ ⭕ ⚪  데이터 분석 중...
  ⚪ ⚪ ⭕  데이터 분석 중...

[3개 원이 순서대로 색상 전환]
[부드러운 페이드 인/아웃]
```

**실용성**:
- 봇이 응답 준비 중일 때
- 긴 작업 진행 상황 표시
- 사용자 대기 시간을 재미있게 만듦

---

## 개발자 Skills로 프로처럼 코딩하기

### 1. React 아티팩트 빌더 (artifacts-builder)

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: 복잡한 React 웹 애플리케이션을 자동으로 생성해주는 숙련된 프론트엔드 개발자

**기술 스택**:
- **React**: UI 컴포넌트 라이브러리
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **shadcn/ui**: 고품질 UI 컴포넌트 세트

---

#### 🌱 기초 예제: "할일 목록 앱"

```markdown
프롬프트:
"artifacts-builder 스킬로 간단한 할일 목록 앱을 만들어줘.

기능:
- 할일 추가 (입력창 + 버튼)
- 할일 완료 체크
- 할일 삭제
- 완료된 항목은 취소선"
```

**생성되는 코드 구조**:

```jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

function TodoApp() {
  // 상태 관리
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 할일 추가 함수
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
      setInputValue('');  // 입력창 비우기
    }
  };

  // 완료 토글 함수
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">할일 목록</h1>

      {/* 입력 영역 */}
      <div className="flex gap-2 mb-4">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="할일을 입력하세요..."
        />
        <Button onClick={addTodo}>추가</Button>
      </div>

      {/* 할일 리스트 */}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2 p-2 border rounded">
            <Checkbox
              checked={todo.done}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.done ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <Button
              variant="destructive"
              size="sm"
              className="ml-auto"
              onClick={() => deleteTodo(todo.id)}
            >
              삭제
            </Button>
          </li>
        ))}
      </ul>

      {/* 통계 */}
      <div className="mt-4 text-sm text-gray-600">
        전체: {todos.length} | 완료: {todos.filter(t => t.done).length}
      </div>
    </div>
  );
}

export default TodoApp;

/*
핵심 React 개념:
1. useState: 컴포넌트의 데이터 상태 관리
2. 이벤트 핸들링: onClick, onChange 등
3. 조건부 렌더링: done ? 스타일A : 스타일B
4. 배열 메서드: map, filter (리스트 조작)
*/
```

**학습 포인트**:
- **State (상태)**: `todos`와 `inputValue`가 변경되면 화면 자동 업데이트
- **불변성**: `[...todos, newTodo]` - 원본 배열을 수정하지 않고 새 배열 생성
- **Key prop**: `key={todo.id}` - React가 항목을 구별하는 고유 ID

---

#### 🌿 중급 예제: "실시간 검색 필터 대시보드"

```markdown
프롬프트:
"artifacts-builder 스킬로 제품 대시보드를 만들어줘.

기능:
- 제품 목록 표시 (카드 형식)
- 실시간 검색 (이름, 카테고리)
- 가격 범위 필터 (슬라이더)
- 정렬 (가격순, 이름순)
- 다크모드 토글"
```

**핵심 코드 (일부)**:

```jsx
import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const products = [
  { id: 1, name: '노트북', price: 1200000, category: '전자제품' },
  { id: 2, name: '마우스', price: 45000, category: '전자제품' },
  { id: 3, name: '책상', price: 250000, category: '가구' },
  // ... 더 많은 제품
];

function ProductDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [sortBy, setSortBy] = useState('name');
  const [darkMode, setDarkMode] = useState(false);

  // useMemo로 필터링 성능 최적화
  const filteredProducts = useMemo(() => {
    return products
      .filter(p =>
        p.name.includes(searchTerm) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
      )
      .sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        return a.name.localeCompare(b.name);
      });
  }, [searchTerm, priceRange, sortBy]);  // 의존성 배열

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        {/* 제어 패널 */}
        <div className="mb-6 space-y-4">
          {/* 검색 */}
          <Input
            placeholder="제품 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* 가격 슬라이더 */}
          <div>
            <label>가격 범위: ₩{priceRange[0]} - ₩{priceRange[1]}</label>
            <Slider
              min={0}
              max={2000000}
              step={10000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>

          {/* 다크모드 */}
          <div className="flex items-center gap-2">
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <span>다크 모드</span>
          </div>
        </div>

        {/* 제품 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 결과 없음 */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500">검색 결과가 없습니다</p>
        )}
      </div>
    </div>
  );
}

/*
고급 개념:
1. useMemo: 계산 결과를 캐싱 (불필요한 재계산 방지)
2. Tailwind의 dark: prefix (다크모드 스타일)
3. Responsive Grid: md:grid-cols-3 (화면 크기별 레이아웃)
*/
```

**실전 활용**:
- 전자상거래 제품 카탈로그
- 사내 도구 라이브러리
- 데이터 테이블 UI

---

### 2. MCP 서버 생성 (mcp-server) - 외부 세계와 연결

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: Claude가 외부 API나 데이터베이스와 대화할 수 있게 해주는 "통역 서버"를 만들어줘요.

**MCP란?**: Model Context Protocol - Claude와 외부 시스템을 연결하는 표준 방식

**비유**:
- Claude = 한국어만 하는 사람
- 외부 API = 영어만 하는 사람
- MCP 서버 = 통역사

---

#### 🌱 기초 예제: "날씨 정보 MCP 서버"

**목표**: Claude가 실시간 날씨를 조회할 수 있게 하기

```python
# weather_mcp_server.py
from fastmcp import FastMCP

mcp = FastMCP("Weather Service")

@mcp.tool()
def get_weather(city: str) -> dict:
    """특정 도시의 현재 날씨를 가져옵니다.

    Args:
        city: 도시 이름 (예: "서울", "부산")

    Returns:
        날씨 정보 딕셔너리
    """
    # 실제로는 OpenWeatherMap API 등을 호출
    # 여기서는 예시 데이터
    weather_data = {
        "서울": {"temp": 15, "condition": "맑음"},
        "부산": {"temp": 18, "condition": "흐림"},
    }

    if city in weather_data:
        return {
            "city": city,
            "temperature": weather_data[city]["temp"],
            "condition": weather_data[city]["condition"],
            "status": "success"
        }
    else:
        return {"status": "error", "message": "도시를 찾을 수 없습니다"}

# 서버 실행
if __name__ == "__main__":
    mcp.run()

"""
사용 방법:
1. 터미널에서 실행: python weather_mcp_server.py
2. Claude에서 사용: "서울 날씨 알려줘"
3. Claude가 자동으로 get_weather("서울") 함수 호출
"""
```

**동작 과정**:
```
사용자: "서울 날씨 어때?"
   ↓
Claude: [weather MCP 서버에 요청]
   ↓
MCP 서버: get_weather("서울") 실행
   ↓
외부 API: 실시간 데이터 조회
   ↓
Claude: "서울은 현재 15도이며 맑습니다 ☀️"
```

---

#### 🌿 중급 예제: "GitHub 통합 MCP 서버"

**목표**: Claude가 GitHub 이슈를 생성하고 조회할 수 있게 하기

```python
# github_mcp_server.py
from fastmcp import FastMCP
import requests
import os

mcp = FastMCP("GitHub Integration")

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # 환경 변수에서 토큰 가져오기
REPO = "username/my-project"

@mcp.tool()
def create_issue(title: str, body: str, labels: list = None) -> dict:
    """새 GitHub 이슈를 생성합니다.

    Args:
        title: 이슈 제목
        body: 이슈 내용
        labels: 라벨 목록 (선택)

    Returns:
        생성된 이슈 정보
    """
    url = f"https://api.github.com/repos/{REPO}/issues"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }

    data = {
        "title": title,
        "body": body,
        "labels": labels or []
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 201:
        issue = response.json()
        return {
            "status": "success",
            "issue_number": issue["number"],
            "url": issue["html_url"]
        }
    else:
        return {"status": "error", "message": response.text}

@mcp.tool()
def list_issues(state: str = "open", labels: str = None) -> list:
    """이슈 목록을 조회합니다.

    Args:
        state: 이슈 상태 ("open", "closed", "all")
        labels: 필터링할 라벨 (쉼표로 구분)

    Returns:
        이슈 목록
    """
    url = f"https://api.github.com/repos/{REPO}/issues"
    params = {"state": state}
    if labels:
        params["labels"] = labels

    headers = {"Authorization": f"token {GITHUB_TOKEN}"}
    response = requests.get(url, params=params, headers=headers)

    if response.status_code == 200:
        issues = response.json()
        return [
            {
                "number": issue["number"],
                "title": issue["title"],
                "state": issue["state"],
                "created_at": issue["created_at"]
            }
            for issue in issues[:10]  # 최근 10개만
        ]
    else:
        return []

"""
실전 사용 시나리오:

1. 버그 발견 시:
   사용자: "TypeError 발생하는 버그 이슈 생성해줘"
   Claude: [create_issue 호출] "이슈 #42가 생성되었습니다!"

2. 진행 상황 확인:
   사용자: "열려있는 버그 이슈 몇 개야?"
   Claude: [list_issues 호출] "현재 5개의 버그 이슈가 열려있습니다"
"""
```

**보안 주의사항**:
- ⚠️ GitHub 토큰은 절대 코드에 직접 넣지 마세요
- ✅ 환경 변수 사용: `export GITHUB_TOKEN=your_token`
- ✅ `.env` 파일 사용하고 `.gitignore`에 추가

---

### 3. 웹 앱 테스트 (webapp-testing) - Playwright 자동화

#### 무엇을 하는 Skill일까요?

**쉬운 설명**: 사람처럼 웹사이트를 클릭하고 테스트하는 로봇을 만들어줘요.

**Playwright란?**:
- 브라우저 자동화 도구
- 클릭, 입력, 스크롤 등 모든 사용자 행동 시뮬레이션
- 크롬, 파이어폭스, 사파리 모두 지원

---

#### 🌱 기초 예제: "로그인 테스트"

```python
# test_login.py
from playwright.sync_api import sync_playwright

def test_login():
    """로그인 기능을 테스트합니다."""
    with sync_playwright() as p:
        # 브라우저 실행 (헤드리스 모드 끄기 = 화면에 보임)
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        # 웹사이트 방문
        page.goto("https://example.com/login")

        # 요소 찾아서 입력
        page.fill('input[name="username"]', 'testuser')  # 사용자명 입력
        page.fill('input[name="password"]', 'testpass')  # 비밀번호 입력

        # 로그인 버튼 클릭
        page.click('button[type="submit"]')

        # 결과 확인 (페이지 이동 대기)
        page.wait_for_url("**/dashboard")  # 대시보드로 이동됐는지

        # 검증: 환영 메시지 있는지 확인
        welcome_text = page.locator('.welcome-message').text_content()
        assert "환영합니다" in welcome_text, "로그인 실패!"

        print("✅ 로그인 테스트 성공!")

        # 스크린샷 저장
        page.screenshot(path="login_success.png")

        browser.close()

if __name__ == "__main__":
    test_login()

"""
핵심 개념:
1. Selector: 요소를 찾는 방법
   - CSS: 'button.login'
   - ID: '#submit-btn'
   - 텍스트: 'text=로그인'

2. Waiting: 로딩 대기
   - wait_for_url: URL 변경 대기
   - wait_for_selector: 요소 나타날 때까지
   - wait_for_load_state: 페이지 완전 로드

3. Assertion: 검증
   - assert 조건, "에러 메시지"
"""
```

**실행 결과**:
```
$ python test_login.py
[브라우저 창 자동으로 열림]
→ example.com 방문
→ 사용자명, 비밀번호 자동 입력
→ 로그인 버튼 클릭
→ 대시보드 페이지로 이동 확인
✅ 로그인 테스트 성공!
[login_success.png 저장됨]
```

---

#### 🌿 중급 예제: "장바구니 전체 플로우 테스트"

```python
# test_shopping_cart.py
from playwright.sync_api import sync_playwright
import pytest

@pytest.fixture
def browser_context():
    """브라우저 컨텍스트 설정 (테스트마다 재사용)"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=100)  # 느리게 실행
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},  # 화면 크기
            locale='ko-KR'  # 한국어
        )
        yield context
        browser.close()

def test_shopping_flow(browser_context):
    """상품 검색 → 장바구니 추가 → 결제 플로우 테스트"""
    page = browser_context.new_page()

    # 1단계: 상품 검색
    page.goto("https://example-shop.com")
    page.fill('input[placeholder="상품 검색"]', '노트북')
    page.press('input[placeholder="상품 검색"]', 'Enter')

    # 검색 결과 로딩 대기
    page.wait_for_selector('.product-list')

    # 첫 번째 상품 클릭
    page.click('.product-card:first-child')

    # 2단계: 장바구니 추가
    page.wait_for_selector('.product-detail')
    page.click('button:has-text("장바구니 담기")')

    # 알림 확인
    notification = page.locator('.notification')
    assert notification.is_visible(), "장바구니 추가 알림 없음!"

    # 3단계: 장바구니로 이동
    page.click('a[href="/cart"]')

    # 장바구니 항목 확인
    cart_items = page.locator('.cart-item').count()
    assert cart_items == 1, f"장바구니에 {cart_items}개 항목 (1개 예상)"

    # 가격 확인
    price_text = page.locator('.total-price').text_content()
    print(f"총 가격: {price_text}")

    # 4단계: 결제 페이지
    page.click('button:has-text("구매하기")')

    # 로그인 페이지로 리다이렉트 (비로그인 상태 가정)
    assert "login" in page.url, "로그인 페이지로 이동 안 됨"

    print("✅ 전체 플로우 테스트 완료!")

    # 각 단계별 스크린샷
    page.screenshot(path="step4_login_required.png")

"""
고급 테스트 패턴:
1. 페이지 객체 모델 (POM): 각 페이지를 클래스로 분리
2. 픽스처 (Fixture): 반복 코드 재사용
3. 병렬 실행: 여러 테스트 동시 수행
4. CI/CD 통합: GitHub Actions에서 자동 실행
"""
```

---

## 실전 프로젝트 - 포트폴리오 웹사이트 만들기

### 프로젝트 개요

**목표**: 여러 Skills를 조합하여 완전한 포트폴리오 웹사이트 제작

**사용할 Skills**:
1. `artifacts-builder` - React 앱 구조
2. `canvas-design` - 로고 및 배너 이미지
3. `webapp-testing` - 자동 테스트

---

### 단계별 가이드

#### Step 1: 디자인 에셋 생성

```markdown
프롬프트 1 (로고):
"canvas-design 스킬로 내 로고를 만들어줘.

요구사항:
- 텍스트: 'MK' (내 이니셜)
- 스타일: 미니멀, 기하학적
- 색상: 네이비 블루 (#1a365d)
- 크기: 200x200px
- 파일: PNG (투명 배경)"
```

```markdown
프롬프트 2 (히어로 배너):
"canvas-design 스킬로 메인 배너 이미지를 만들어줘.

내용:
- 메인 텍스트: '프론트엔드 개발자 김민수'
- 서브 텍스트: 'React & TypeScript 전문'
- 배경: 그라데이션 (네이비 → 보라)
- 크기: 1920x600px"
```

---

#### Step 2: React 앱 구조 생성

```markdown
프롬프트:
"artifacts-builder 스킬로 포트폴리오 웹사이트를 만들어줘.

섹션:
1. Hero (배너 영역)
   - 이름, 직업
   - 소셜 링크 (GitHub, LinkedIn)

2. About (자기소개)
   - 간단한 소개 텍스트
   - 기술 스택 아이콘

3. Projects (프로젝트 카드 3개)
   - 썸네일 이미지
   - 제목, 설명
   - 기술 태그
   - GitHub 링크

4. Contact (연락처 폼)
   - 이름, 이메일, 메시지 입력
   - 전송 버튼

스타일:
- 다크 테마
- 스크롤 시 섹션 페이드 인 애니메이션
- 반응형 (모바일 지원)"
```

**생성되는 주요 코드**:

```jsx
// Portfolio.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // 애니메이션 라이브러리

function Portfolio() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/banner.png)' }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">김민수</h1>
        <p className="text-2xl text-blue-400">Frontend Developer</p>
        <div className="mt-6 space-x-4">
          <a href="https://github.com/minsu" className="text-white hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/minsu" className="text-white hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

// Projects 컴포넌트
function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "React + Tailwind로 만든 관리자 대시보드",
      tags: ["React", "Tailwind", "Chart.js"],
      image: "/project1.png",
      github: "https://github.com/minsu/ecommerce-dashboard"
    },
    // ... 더 많은 프로젝트
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}  // 호버 시 확대
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
}

export default Portfolio;
```

---

#### Step 3: 자동 테스트 작성

```markdown
프롬프트:
"webapp-testing 스킬로 포트폴리오 사이트 테스트를 만들어줘.

테스트 케이스:
1. 모든 섹션이 렌더링 되는지
2. 프로젝트 카드 3개가 보이는지
3. Contact 폼 작동 확인
4. 소셜 링크 클릭 시 새 탭 열리는지
5. 모바일 반응형 (375px 너비)
6. 스크린샷 각 섹션별 저장"
```

**생성되는 테스트 코드**:

```python
# test_portfolio.py
from playwright.sync_api import sync_playwright
import pytest

def test_portfolio_sections():
    """모든 섹션이 정상적으로 표시되는지 테스트"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        page.goto("http://localhost:3000")

        # 각 섹션 존재 확인
        sections = ["Hero", "About", "Projects", "Contact"]
        for section in sections:
            selector = f'section:has-text("{section}")'
            assert page.locator(selector).is_visible(), f"{section} 섹션 없음"

            # 섹션별 스크린샷
            page.screenshot(path=f"screenshot_{section.lower()}.png")

        browser.close()

def test_project_cards():
    """프로젝트 카드 개수와 내용 확인"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # 프로젝트 섹션으로 스크롤
        page.locator('text=Projects').scroll_into_view_if_needed()

        # 카드 개수 확인
        project_cards = page.locator('.project-card')
        assert project_cards.count() == 3, "프로젝트 카드 3개 아님"

        # 각 카드에 필수 요소 있는지
        for i in range(3):
            card = project_cards.nth(i)
            assert card.locator('img').is_visible(), f"카드 {i+1} 이미지 없음"
            assert card.locator('h3').is_visible(), f"카드 {i+1} 제목 없음"
            assert card.locator('a[href*="github"]').is_visible(), f"카드 {i+1} GitHub 링크 없음"

        browser.close()

def test_contact_form():
    """연락처 폼 작동 테스트"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Contact 섹션으로 이동
        page.click('text=Contact')

        # 폼 입력
        page.fill('input[name="name"]', '테스트 사용자')
        page.fill('input[name="email"]', 'test@example.com')
        page.fill('textarea[name="message"]', '안녕하세요, 테스트 메시지입니다.')

        # 전송 버튼 클릭
        page.click('button[type="submit"]')

        # 성공 메시지 확인
        success_msg = page.locator('.success-message')
        success_msg.wait_for(state='visible', timeout=5000)
        assert "전송되었습니다" in success_msg.text_content()

        browser.close()

def test_responsive_mobile():
    """모바일 반응형 테스트"""
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # 모바일 viewport 설정
        context = browser.new_context(
            viewport={'width': 375, 'height': 667},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
        )
        page = context.new_page()
        page.goto("http://localhost:3000")

        # 햄버거 메뉴 확인 (모바일에서만 표시)
        hamburger = page.locator('.hamburger-menu')
        assert hamburger.is_visible(), "모바일 메뉴 버튼 없음"

        # 프로젝트 카드가 1열로 배치되는지
        page.locator('text=Projects').scroll_into_view_if_needed()
        first_card = page.locator('.project-card').first
        second_card = page.locator('.project-card').nth(1)

        # 두 카드의 Y좌표가 다르면 세로 배치
        box1 = first_card.bounding_box()
        box2 = second_card.bounding_box()
        assert box2['y'] > box1['y'] + box1['height'], "카드가 가로로 배치됨"

        # 모바일 스크린샷
        page.screenshot(path="screenshot_mobile.png", full_page=True)

        browser.close()

# pytest 실행
if __name__ == "__main__":
    pytest.main([__file__, "-v"])
```

---

## Skills 조합의 마법 - 여러 Skill 함께 사용하기

### 조합 패턴 1: 디자인 + 개발 + 테스트

**시나리오**: 새 기능 추가 전체 파이프라인

```markdown
프롬프트 (한 번에 요청):
"다음 작업을 순서대로 진행해줘:

1. canvas-design 스킬로 '새 기능 출시' 배너 만들기
   - 텍스트: 'AI 챗봇 기능 출시!'
   - 크기: 1200x400px

2. artifacts-builder 스킬로 배너를 홈페이지에 추가
   - Hero 섹션 아래에 배치
   - 모바일에서는 세로 배너로 변경

3. webapp-testing 스킬로 테스트 작성
   - 배너가 모든 화면 크기에서 보이는지
   - 애니메이션 작동 확인"
```

**Claude의 작업 흐름**:
```
[Step 1] canvas-design 실행
  → banner_new_feature.png 생성

[Step 2] artifacts-builder로 코드 수정
  → Hero.jsx에 배너 컴포넌트 추가
  → 반응형 CSS 적용

[Step 3] webapp-testing으로 테스트 생성
  → test_banner_display.py 작성
  → 자동 실행하여 결과 보고

✅ 전체 프로세스 완료!
```

---

### 조합 패턴 2: MCP + React = 실시간 데이터 앱

**시나리오**: 실시간 주식 정보 대시보드

```markdown
프롬프트:
"stock-price MCP 서버와 artifacts-builder 스킬을 함께 써서
실시간 주식 가격 대시보드를 만들어줘.

요구사항:
1. MCP 서버: 주식 API에서 현재가 가져오기
2. React 앱:
   - 5초마다 자동 갱신
   - 상승/하락 색상 표시 (빨강/파랑)
   - 차트 그래프 (최근 10개 데이터)
3. 종목: 삼성전자, SK하이닉스, 네이버"
```

**생성되는 통합 시스템**:

```python
# stock_mcp_server.py
from fastmcp import FastMCP
import requests

mcp = FastMCP("Stock Price Service")

@mcp.tool()
def get_stock_price(symbol: str) -> dict:
    """실시간 주식 가격 조회"""
    # 실제로는 금융 API 호출
    # 예시 데이터
    prices = {
        "005930": {"name": "삼성전자", "price": 71000, "change": 1.5},
        "000660": {"name": "SK하이닉스", "price": 135000, "change": -0.8},
        "035420": {"name": "NAVER", "price": 230000, "change": 2.3}
    }
    return prices.get(symbol, {"error": "종목 없음"})
```

```jsx
// StockDashboard.jsx
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function StockDashboard() {
  const [stocks, setStocks] = useState([]);
  const [history, setHistory] = useState({});

  // 5초마다 데이터 갱신
  useEffect(() => {
    const fetchStocks = async () => {
      // Claude가 MCP 서버 호출
      const symbols = ["005930", "000660", "035420"];
      const data = await Promise.all(
        symbols.map(symbol => claude.callTool("get_stock_price", { symbol }))
      );

      setStocks(data);

      // 히스토리 업데이트 (차트용)
      const now = new Date().toLocaleTimeString();
      setHistory(prev => {
        const newHistory = { ...prev };
        data.forEach(stock => {
          if (!newHistory[stock.name]) newHistory[stock.name] = [];
          newHistory[stock.name].push({ time: now, price: stock.price });
          // 최근 10개만 유지
          if (newHistory[stock.name].length > 10) {
            newHistory[stock.name].shift();
          }
        });
        return newHistory;
      });
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">📈 실시간 주식 현황</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stocks.map(stock => (
          <StockCard key={stock.name} stock={stock} history={history[stock.name] || []} />
        ))}
      </div>
    </div>
  );
}

function StockCard({ stock, history }) {
  const isUp = stock.change > 0;
  const color = isUp ? 'text-red-500' : 'text-blue-500';

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-2">{stock.name}</h2>
      <div className="text-3xl font-bold text-white mb-1">
        ₩{stock.price.toLocaleString()}
      </div>
      <div className={`text-lg ${color}`}>
        {isUp ? '▲' : '▼'} {Math.abs(stock.change)}%
      </div>

      {/* 미니 차트 */}
      <div className="mt-4">
        <LineChart width={250} height={100} data={history}>
          <XAxis dataKey="time" hide />
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke={isUp ? '#ef4444' : '#3b82f6'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default StockDashboard;
```

**마법 같은 결과**:
- MCP 서버가 백그라운드에서 실시간 데이터 가져옴
- React 앱이 자동으로 UI 업데이트
- 사용자는 새로고침 없이 라이브 데이터 확인!

---

## 문제 해결 가이드 - 자주 묻는 질문

### Q1: Skill이 로딩되지 않아요

**증상**:
```
Error: Skill 'pdf' not found
```

**해결 방법**:
1. **Claude.ai 사용자**: Skills 메뉴에서 활성화 확인
   ```
   설정 → Skills → pdf 토글 ON
   ```

2. **Claude Code 사용자**: 플러그인 설치 확인
   ```bash
   /plugin list  # 설치된 플러그인 확인
   /plugin marketplace add anthropics/skills  # 재설치
   ```

3. **API 사용자**: skills 파라미터 확인
   ```python
   # 잘못된 예
   skills=["pdf-skill"]  # ❌ 하이픈 포함

   # 올바른 예
   skills=["pdf"]  # ✅ 정확한 이름
   ```

---

### Q2: 생성된 코드가 작동하지 않아요

**증상**:
```javascript
Uncaught ReferenceError: React is not defined
```

**해결 방법**:

1. **의존성 설치 확인**:
   ```bash
   # package.json 확인
   cat package.json

   # 누락된 패키지 설치
   npm install react react-dom
   ```

2. **import 문 확인**:
   ```jsx
   // 파일 맨 위에 있어야 함
   import React from 'react';
   import ReactDOM from 'react-dom';
   ```

3. **빌드 도구 설정**:
   ```bash
   # Vite 프로젝트라면
   npm run dev

   # Create React App이라면
   npm start
   ```

**⚠️ 주의**: Claude가 생성한 코드는 대부분 정확하지만, 환경 설정은 직접 확인 필요!

---

### Q3: Playwright 테스트가 실패해요

**증상**:
```
TimeoutError: Waiting for selector "button.login" to be visible
```

**해결 방법**:

1. **Selector 확인**:
   ```python
   # Chrome DevTools로 정확한 selector 찾기
   # 1. 웹사이트에서 F12
   # 2. Elements 탭에서 요소 선택
   # 3. 마우스 우클릭 → Copy → Copy selector

   # 정확한 selector 사용
   page.click('button.submit-button')  # ✅
   ```

2. **로딩 시간 늘리기**:
   ```python
   # 기본 30초에서 60초로 증가
   page.wait_for_selector('button', timeout=60000)
   ```

3. **헤드리스 모드 끄기** (문제 확인용):
   ```python
   browser = p.chromium.launch(
       headless=False,  # 브라우저 화면 보임
       slow_mo=1000  # 각 동작 1초씩 느리게
   )
   ```

---

### Q4: MCP 서버 연결이 안 돼요

**증상**:
```
Connection refused: localhost:8080
```

**해결 방법**:

1. **서버 실행 확인**:
   ```bash
   # 터미널에서 서버 실행 중인지 확인
   ps aux | grep mcp_server

   # 실행 안 됐으면 시작
   python weather_mcp_server.py
   ```

2. **포트 번호 확인**:
   ```python
   # 서버 코드
   mcp.run(port=8080)  # 포트 명시

   # Claude 설정
   claude.configure_mcp("weather", "localhost:8080")
   ```

3. **방화벽 확인**:
   ```bash
   # macOS
   sudo lsof -i :8080

   # 사용 중이면 다른 포트 사용
   mcp.run(port=8081)
   ```

---

## 용어 사전 Part 2

### 🎨 프론트엔드 용어

#### **React Hooks**
**쉬운 설명**: React 함수 컴포넌트에서 상태와 라이프사이클을 사용하는 특별한 함수들
**주요 Hooks**:
- `useState`: 데이터 저장
- `useEffect`: 부수 효과 처리 (API 호출 등)
- `useMemo`: 계산 결과 캐싱

**예시**:
```jsx
const [count, setCount] = useState(0);  // count 상태 생성
```

#### **Tailwind CSS**
**쉬운 설명**: HTML에 직접 스타일을 클래스로 적용하는 CSS 프레임워크
**장점**: CSS 파일 작성 없이 빠른 스타일링
**예시**:
```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  {/* bg-blue-500: 파란 배경 */}
  {/* text-white: 흰색 텍스트 */}
  {/* p-4: 패딩 1rem */}
  {/* rounded-lg: 둥근 모서리 */}
</div>
```

#### **Props vs State**
**Props (속성)**:
- 부모 컴포넌트가 자식에게 전달하는 데이터
- 읽기 전용 (수정 불가)
- 함수의 매개변수와 비슷

**State (상태)**:
- 컴포넌트 내부에서 관리하는 데이터
- 수정 가능 (setState로)
- 변경되면 화면 자동 업데이트

**비유**:
```
Props = 선물 (받기만 함, 바꿀 수 없음)
State = 내 물건 (마음대로 바꿀 수 있음)
```

---

### 🧪 테스팅 용어

#### **Selector (선택자)**
**쉬운 설명**: 웹 페이지에서 특정 요소를 찾는 방법
**종류**:
```python
# CSS Selector
page.click('.button')  # 클래스
page.click('#submit')  # ID
page.click('button')   # 태그

# Text Selector
page.click('text=로그인')  # 텍스트 내용

# XPath (고급)
page.click('//button[@type="submit"]')
```

#### **Assertion (단언)**
**쉬운 설명**: "이것이 참이어야 한다"고 주장하는 검증 코드
**예시**:
```python
assert 1 + 1 == 2  # ✅ 통과
assert 1 + 1 == 3  # ❌ 실패 (AssertionError 발생)

# 실전 사용
actual_price = page.locator('.price').text_content()
assert actual_price == "₩10,000", f"가격 오류: {actual_price}"
```

#### **Headless 모드**
**쉬운 설명**: 브라우저 창을 실제로 띄우지 않고 백그라운드에서 실행
**사용 이유**:
- 서버에서 자동 테스트 (화면 없음)
- 빠른 속도
- 리소스 절약

**비교**:
```python
# Headless: 화면 안 보임, 빠름
browser = p.chromium.launch(headless=True)

# Headed: 화면 보임, 디버깅 편함
browser = p.chromium.launch(headless=False)
```

---

### 🔌 MCP & API 용어

#### **REST API**
**쉬운 설명**: HTTP 프로토콜로 데이터를 주고받는 표준 방식
**주요 메서드**:
- `GET`: 데이터 조회 (읽기)
- `POST`: 데이터 생성 (쓰기)
- `PUT`: 데이터 전체 수정
- `DELETE`: 데이터 삭제

**비유**: 레스토랑 주문
```
GET    = 메뉴판 보기
POST   = 음식 주문하기
PUT    = 주문 전체 변경
DELETE = 주문 취소
```

#### **JSON (JavaScript Object Notation)**
**쉬운 설명**: 데이터를 텍스트로 표현하는 가벼운 형식
**특징**: 사람이 읽기 쉽고, 프로그램이 파싱하기 쉬움
**예시**:
```json
{
  "name": "김민수",
  "age": 25,
  "skills": ["Python", "React"],
  "employed": true
}
```

#### **환경 변수 (Environment Variable)**
**쉬운 설명**: 코드 밖에 저장하는 설정 값 (비밀번호, API 키 등)
**사용 이유**:
- 보안 (코드에 비밀번호 노출 방지)
- 환경별 다른 값 사용 (개발/운영)

**예시**:
```bash
# 환경 변수 설정
export GITHUB_TOKEN=ghp_abcd1234

# Python에서 사용
import os
token = os.getenv("GITHUB_TOKEN")
```

---

### 📊 데이터 시각화 용어

#### **Chart.js / Recharts**
**쉬운 설명**: 데이터를 그래프로 그려주는 라이브러리
**차트 종류**:
- Line Chart: 시간에 따른 변화 (주가, 기온 등)
- Bar Chart: 항목별 비교 (판매량, 인구 등)
- Pie Chart: 비율 표현 (시장 점유율 등)

**간단 예시**:
```jsx
<LineChart width={400} height={300} data={stockData}>
  <Line dataKey="price" stroke="#8884d8" />
</LineChart>
```

#### **Responsive Design (반응형 디자인)**
**쉬운 설명**: 화면 크기에 따라 레이아웃이 자동으로 변하는 디자인
**Breakpoint (중단점)**:
- Mobile: ~ 640px
- Tablet: 641px ~ 1024px
- Desktop: 1025px ~

**Tailwind 예시**:
```jsx
<div className="
  grid
  grid-cols-1      /* 기본: 1열 (모바일) */
  md:grid-cols-2   /* 중간: 2열 (태블릿) */
  lg:grid-cols-3   /* 큰 화면: 3열 (데스크탑) */
">
```

---

## 다음 단계

### 🎓 지금까지 배운 것 (복습)

**Part 1에서**:
- ✅ Skills 기본 개념 (AI를 위한 레시피 카드)
- ✅ 간단한 Skill 만들기
- ✅ 기본 용어 이해

**Part 2에서**:
- ✅ 창의적 Skills (algorithmic-art, canvas-design)
- ✅ 개발자 Skills (artifacts-builder, MCP, webapp-testing)
- ✅ 실전 프로젝트 (포트폴리오 사이트)
- ✅ Skills 조합 패턴
- ✅ 문제 해결 가이드

---

### 📚 Part 3 예고편

**Part 3: Skills 고급 활용 - 기업용 & 맞춤 제작**에서는:

1. **기업 워크플로우 Skills**
   - 📧 내부 커뮤니케이션 자동화
   - 🎨 브랜드 가이드라인 적용
   - 📊 데이터 분석 리포트 생성

2. **나만의 Skill 제작 마스터**
   - 🛠️ skill-creator로 전문 Skill 개발
   - 📦 Skills 패키징 및 배포
   - 🔄 버전 관리 및 업데이트

3. **document-skills 심화**
   - 📄 DOCX, PDF, PPTX, XLSX 완벽 활용
   - 🔀 문서 변환 및 자동화
   - 📊 복잡한 보고서 생성

4. **고급 통합 패턴**
   - 🤖 AI 에이전트 워크플로우
   - 🔗 CI/CD 파이프라인 통합
   - ☁️ 클라우드 배포 자동화

---

### 🚀 실습 과제

스스로 도전해보세요!

#### 과제 1: "나만의 작품 갤러리" (난이도 ⭐⭐)
- algorithmic-art로 5가지 다른 패턴 생성
- canvas-design으로 각 작품에 설명 카드 만들기
- artifacts-builder로 갤러리 웹페이지 제작

#### 과제 2: "자동 블로그 포스터" (난이도 ⭐⭐⭐)
- MCP 서버로 RSS 피드 읽기
- 새 글 발견 시 자동으로 요약
- canvas-design으로 소셜 미디어 카드 생성
- 자동 포스팅 (선택)

#### 과제 3: "E2E 테스트 스위트" (난이도 ⭐⭐⭐⭐)
- webapp-testing으로 전체 쇼핑몰 플로우 테스트
- 모든 화면 크기 테스트 (모바일, 태블릿, 데스크탑)
- 성능 메트릭 측정
- 시각적 회귀 테스트 (스크린샷 비교)

---

### 💬 학습 커뮤니티 & 리소스

**공식 문서**:
- [Claude Skills 문서](https://docs.claude.com/en/docs/skills)
- [anthropics/skills GitHub](https://github.com/anthropics/skills)

**실전 예제**:
- [Playwright 공식 예제](https://playwright.dev/docs/intro)
- [React 튜토리얼](https://react.dev/learn)
- [Tailwind 컴포넌트](https://tailwindui.com/)

**커뮤니티**:
- Anthropic Discord
- #ClaudeSkills 해시태그

---

## 연결된 노트

- [[Claude Skills 완벽 가이드 Part 1 - 기본 개념과 시작하기]]
- [[Claude Skills 완벽 가이드 Part 3 - 고급 활용과 맞춤 제작]]
- [[React 기초부터 실전까지]]
- [[Playwright 테스트 자동화 가이드]]
- [[MCP 서버 개발 완벽 가이드]]

---

**📌 핵심 요약**:

> Skills는 단독으로도 강력하지만, **조합할 때 진정한 마법**이 일어납니다.
> 디자인 → 개발 → 테스트의 전체 파이프라인을 자동화하여 생산성을 10배 향상시키세요!

**다음 학습 목표**: Part 3에서 기업 환경에서 실제로 사용되는 고급 패턴과 나만의 전문 Skill을 만드는 방법을 배웁니다. 🚀

---

*이 문서는 실전 프로젝트를 통해 Skills를 체득할 수 있도록 단계별 예제 중심으로 작성되었습니다.*