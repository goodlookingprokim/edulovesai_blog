---
title: "Kilo Code CLI 완전 정복 가이드 - Part 2: 실전편 (초보자용)"
created: '2025-10-24'
last_modified: '2025-10-24'
tags:
  - AI/도구
  - 개발/CLI
  - LLM/활용
  - 초보자/가이드
  - 실전/활용
  - 프로젝트/적용
status: "완료"
type: "튜토리얼"
priority: "high"
share_link: "https://kilocode.com"
---

# 🎯 Kilo Code CLI 완전 정복 가이드 - Part 2: 실전편

> **"이론 없는 실천은 맹목이고, 실천 없는 이론은 공허하다."** - 임마누엘 칸트

Part 1에서 기초를 다졌다면, 이제 **실전에서 활용**할 차례입니다! 실제 프로젝트에 어떻게 적용하는지 단계별로 배워봅시다! 💪

---

## 📋 목차

### 다양한 모드 마스터하기
1. [[#Ask 모드 실전 활용]]
2. [[#Debug 모드로 버그 잡기]]
3. [[#Architect 모드로 설계하기]]
4. [[#Orchestrate 모드로 자동화]]

### 실제 프로젝트 적용
5. [[#웹사이트 만들기 프로젝트]]
6. [[#간단한 앱 개발하기]]
7. [[#기존 코드 개선하기]]

### 팀 협업과 고급 활용
8. [[#팀에서 Kilo Code 활용하기]]
9. [[#CI CD 파이프라인 통합]]
10. [[#고급 기능과 팁]]

### 문제 해결
11. [[#자주 묻는 질문 FAQ]]
12. [[#트러블슈팅 가이드]]

### 용어 사전 (Part 2)
13. [[#용어 사전 Glossary Part 2]]

---

## Ask 모드 실전 활용

### 🗣️ Ask 모드란?

**간단 설명**:
- 질문하고 답변 받는 모드
- 가장 기본적이고 자주 쓰는 모드
- "구글 검색" 같은 역할

**언제 사용하나요?**
```
✅ 코드가 이해 안 될 때
✅ 에러 메시지 의미를 모를 때
✅ 프로그래밍 개념이 궁금할 때
✅ 코드 작성 방법을 물어볼 때
```

### 🌱 초보자 레벨: 기본 질문하기

#### 예제 1: 프로그래밍 개념 물어보기

**질문**:
```bash
kilocode ask "파이썬에서 리스트랑 튜플의 차이가 뭐야?"
```

**예상 답변**:
```
좋은 질문이에요! 쉽게 설명해드릴게요.

리스트 vs 튜플 = 공책 vs 책

📒 리스트 (List):
- 수정 가능한 공책
- 내용을 지우고 다시 쓸 수 있어요
- 대괄호 [] 사용

fruits = ["사과", "바나나"]
fruits[0] = "딸기"  # 수정 가능! ✅
print(fruits)  # ["딸기", "바나나"]

📕 튜플 (Tuple):
- 한번 인쇄된 책
- 내용을 절대 바꿀 수 없어요
- 소괄호 () 사용

coordinates = (3, 5)
coordinates[0] = 10  # 에러 발생! ❌
# TypeError: 'tuple' object does not support item assignment

언제 뭘 쓰나요?

리스트 사용:
- 쇼핑 목록 (추가/삭제 가능)
- 학생 명단 (변동 가능)

튜플 사용:
- GPS 좌표 (고정값)
- 생년월일 (바뀌지 않음)
- RGB 색상 (255, 0, 0)

핵심 정리:
변경 필요 → 리스트
고정 값 → 튜플
```

#### 예제 2: 코드 작성 요청

**질문**:
```bash
kilocode ask "1부터 100까지 숫자 중에서 3의 배수만 출력하는 코드 만들어줘"
```

**예상 답변**:
```python
# 1부터 100까지 3의 배수 출력하기

# 방법 1: 간단한 for문 (초보자용)
for number in range(1, 101):  # 1부터 100까지
    if number % 3 == 0:  # 3으로 나눈 나머지가 0이면
        print(number)

# 방법 2: range 활용 (중급)
for number in range(3, 101, 3):  # 3부터 100까지, 3씩 증가
    print(number)

# 방법 3: 리스트 컴프리헨션 (고급)
multiples_of_3 = [n for n in range(1, 101) if n % 3 == 0]
print(multiples_of_3)

# 출력 결과 (모두 동일):
# 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, ...

# 💡 추천:
# 처음 배우시면 방법 1
# 익숙해지면 방법 2
# 프로처럼 하고 싶으면 방법 3!
```

### 🌿 중급 레벨: 구체적인 상황 질문

#### 예제 3: 실제 문제 해결하기

**상황**: 웹사이트에서 버튼 클릭이 안 됨

**질문**:
```bash
kilocode ask "JavaScript에서 버튼 클릭 이벤트가 작동 안 해요.
<button id='myBtn'>클릭</button> 이 버튼을 클릭하면
알림창 띄우고 싶은데 안 돼요"
```

**예상 답변**:
```javascript
// 버튼 클릭 이벤트 만들기

// ❌ 흔한 실수들:

// 실수 1: HTML 로딩 전에 코드 실행
const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
    alert('클릭!');
});
// → HTML이 아직 안 읽혀서 button이 null!

// 실수 2: 오타
const buton = document.getElementById('myBtn');  // 오타!
// → 'buton'이 아니라 'button'

// ✅ 올바른 방법들:

// 방법 1: DOMContentLoaded 사용 (추천!)
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myBtn');
    button.addEventListener('click', function() {
        alert('버튼이 클릭되었습니다!');
    });
});

// 방법 2: 스크립트를 HTML 맨 아래에 배치
// HTML:
// ...
// <button id="myBtn">클릭</button>
// <script src="script.js"></script> <!-- 여기! -->
// </body>

// 방법 3: window.onload 사용
window.onload = function() {
    const button = document.getElementById('myBtn');
    button.addEventListener('click', function() {
        alert('클릭!');
    });
};

// 🔍 디버깅 체크리스트:
// 1. 버튼의 id가 정확한가? (대소문자 구분!)
// 2. script가 HTML보다 먼저 실행되진 않았나?
// 3. 콘솔에 에러 메시지는 없나? (F12 눌러서 확인)
```

### 🌳 고급 레벨: 최적화와 베스트 프랙티스

#### 예제 4: 코드 리뷰 요청

**질문**:
```bash
kilocode ask "이 코드를 더 효율적으로 개선할 수 있을까요?

function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}"
```

**예상 답변**:
```javascript
// 코드 리뷰 및 개선안

// 📊 원본 코드 분석:
// - 시간 복잡도: O(n³) (매우 느림!)
// - 중첩 반복문 + includes() 사용
// - 배열이 커지면 성능 급격히 저하

// ✅ 개선안 1: Set 활용 (추천!)
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

// 시간 복잡도: O(n) - 훨씬 빠름!

// ✅ 개선안 2: 한 줄로 (고급)
function findDuplicates(arr) {
    return [...new Set(arr.filter((item, index) =>
        arr.indexOf(item) !== index
    ))];
}

// 📈 성능 비교:
// 배열 크기 1,000개 기준
// - 원본: ~2초
// - 개선안 1: ~0.01초 (200배 빠름!)
// - 개선안 2: ~0.02초 (100배 빠름!)

// 💡 핵심 교훈:
// 1. 중첩 반복문 피하기
// 2. Set/Map 같은 적절한 자료구조 사용
// 3. 내장 메서드의 시간 복잡도 고려하기
//    (includes는 O(n)이므로 반복문 안에서 조심!)

// 🎯 추천:
// - 가독성 중요 → 개선안 1
// - 코드 간결성 중요 → 개선안 2
// - 처음 배우는 중 → 개선안 1로 시작!
```

---

## Debug 모드로 버그 잡기

### 🐛 Debug 모드란?

**간단 설명**:
- 코드의 문제를 찾아주는 탐정 모드
- 에러 메시지를 분석하고 해결책 제시
- 예상치 못한 동작의 원인 파악

**언제 사용하나요?**
```
✅ 에러가 발생했을 때
✅ 코드가 예상대로 작동 안 할 때
✅ 프로그램이 느려졌을 때
✅ 논리적 오류를 찾고 싶을 때
```

### 🌱 초보자 레벨: 기본 에러 해결

#### 예제 1: 문법 오류 (SyntaxError)

**상황**:
```python
# 코드
def greet(name)
    print("Hello, " + name)

greet("철수")
```

**에러 메시지**:
```
SyntaxError: invalid syntax
```

**Debug 명령**:
```bash
kilocode debug "파이썬 코드에서 SyntaxError가 나요.
def greet(name)
    print('Hello, ' + name)
이 부분인데 뭐가 문제인가요?"
```

**AI의 답변**:
```
🔍 문제를 찾았습니다!

❌ 문제:
함수 정의 줄 끝에 콜론(:)이 빠졌어요!

def greet(name)  ← 여기!
    print("Hello, " + name)

✅ 해결:
def greet(name):  ← 콜론 추가!
    print("Hello, " + name)

📖 설명:
Python에서 함수를 정의할 때는 반드시 콜론(:)으로 끝나야 해요.
이것은 "여기서부터 함수 내용이 시작됩니다"라는 표시예요.

비슷한 규칙:
- if문: if age > 18:
- for문: for i in range(10):
- while문: while True:
- 클래스: class Dog:

💡 팁:
코드 에디터(VS Code 등)를 사용하면
이런 오류를 자동으로 표시해줍니다!
```

#### 예제 2: 이름 오류 (NameError)

**상황**:
```python
age = 25
print("나이는", Age, "살입니다")
```

**에러 메시지**:
```
NameError: name 'Age' is not defined
```

**Debug 명령**:
```bash
kilocode debug "NameError: name 'Age' is not defined
이 에러가 나는데 age 변수는 분명 있는데 왜 그럴까요?"
```

**AI의 답변**:
```
🔍 오타를 발견했습니다!

❌ 문제:
age ≠ Age  (대소문자가 다릅니다!)

1번 줄: age = 25        ← 소문자 'age'
2번 줄: print("나이는", Age, ...)  ← 대문자 'Age'

Python은 대소문자를 구분합니다!

✅ 해결:
age = 25
print("나이는", age, "살입니다")  ← 모두 소문자로!

📖 쉬운 비유:
학교에서 '김철수'와 '김철수'는 같은 사람이지만,
Python에서 'age'와 'Age'는 완전히 다른 변수예요!

비슷한 실수 예방:
myName ≠ myname ≠ MyName ≠ MYNAME
user_age ≠ User_Age ≠ user_Age

💡 꿀팁:
변수명은 일관되게 사용하세요!
- Python: snake_case (user_age)
- JavaScript: camelCase (userAge)
```

### 🌿 중급 레벨: 논리 오류 찾기

#### 예제 3: 예상과 다른 결과

**상황**:
```python
# 평균 계산 함수
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    average = total / len(numbers)
    return average

scores = [80, 90, 100]
print(calculate_average(scores))  # 90이 나와야 하는데...

# 하지만 빈 리스트를 넣으면?
print(calculate_average([]))  # 에러 발생!
```

**에러**:
```
ZeroDivisionError: division by zero
```

**Debug 명령**:
```bash
kilocode debug "평균 계산 함수가 대부분은 잘 작동하는데,
빈 리스트를 넣으면 ZeroDivisionError가 나요. 어떻게 해야 하나요?"
```

**AI의 답변**:
```python
# 🔍 문제 분석:

# 원인:
# 빈 리스트 → len([]) = 0
# 0으로 나누기 → 에러!

# ✅ 해결 방법들:

# 방법 1: 예외 처리 (추천!)
def calculate_average(numbers):
    if not numbers:  # 빈 리스트 체크
        return 0  # 또는 None, 상황에 따라

    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

# 방법 2: try-except 사용
def calculate_average(numbers):
    try:
        total = sum(numbers)
        return total / len(numbers)
    except ZeroDivisionError:
        return 0  # 빈 리스트일 때 기본값

# 방법 3: 더 견고한 버전 (고급)
def calculate_average(numbers):
    """
    숫자 리스트의 평균을 계산
    빈 리스트는 0 반환
    """
    if not numbers:
        return 0

    # sum() 내장 함수 사용 (더 효율적!)
    return sum(numbers) / len(numbers)

# 📊 테스트:
print(calculate_average([80, 90, 100]))  # 90.0 ✅
print(calculate_average([]))              # 0 ✅
print(calculate_average([100]))           # 100.0 ✅

# 💡 핵심 교훈:
# 1. 엣지 케이스(특수 상황) 항상 고려하기
#    - 빈 리스트
#    - None 값
#    - 음수
#    - 0
# 2. 방어적 프로그래밍 (defensive programming)
# 3. 에러 메시지를 친구로 만들기!

# 🎯 실전 팁:
# 함수를 만들 때 항상 질문하기:
# "이상한 입력이 들어오면 어떻게 될까?"
```

### 🌳 고급 레벨: 성능 문제 디버깅

#### 예제 4: 프로그램이 너무 느려요

**상황**:
```python
# 느린 코드
def is_prime(n):
    """소수 판별 함수"""
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

# 1부터 100,000까지 소수 찾기
primes = [num for num in range(1, 100001) if is_prime(num)]
print(len(primes))
# ⏰ 엄청 오래 걸림...
```

**Debug 명령**:
```bash
kilocode debug "소수 찾는 프로그램이 너무 느려요.
100,000까지 찾는데 몇 분이 걸려요. 최적화할 방법 있나요?"
```

**AI의 답변**:
```python
# 🐌 성능 분석:

# 원본 코드 문제점:
# - 시간 복잡도: O(n²)
# - 100,000까지 확인 → 약 50억 번 계산!

# ✅ 최적화 방법들:

# 최적화 1: 제곱근까지만 확인 (기본)
import math

def is_prime_v1(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    # √n까지만 확인하면 충분!
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

# 최적화 2: 에라토스테네스의 체 (고급)
def sieve_of_eratosthenes(max_num):
    """훨씬 더 빠른 방법!"""
    is_prime = [True] * (max_num + 1)
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(math.sqrt(max_num)) + 1):
        if is_prime[i]:
            # i의 배수는 모두 소수가 아님
            for j in range(i*i, max_num + 1, i):
                is_prime[j] = False

    return [num for num, prime in enumerate(is_prime) if prime]

# 📊 성능 비교 (100,000까지):
# 원본:        ~120초 (2분)
# 최적화 1:    ~2초
# 최적화 2:    ~0.1초 (1200배 빠름!)

# 🎯 사용 방법:
# 간단한 소수 판별: is_prime_v1()
# 대량 소수 찾기: sieve_of_eratosthenes()

# 실행:
primes = sieve_of_eratosthenes(100000)
print(f"소수 개수: {len(primes)}")  # 9592개
print(f"처음 10개: {primes[:10]}")  # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

# 💡 최적화 핵심 원칙:
# 1. 불필요한 계산 줄이기
# 2. 적절한 알고리즘 선택
# 3. 반복 작업 최소화
# 4. 측정 → 분석 → 개선

# 🔧 성능 측정 코드:
import time

def measure_time(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    print(f"소요 시간: {end - start:.2f}초")
    return result
```

---

## Architect 모드로 설계하기

### 🏗️ Architect 모드란?

**간단 설명**:
- 프로그램의 구조를 설계하는 모드
- "집을 지을 때 설계도를 그리듯이"
- 코드를 짜기 전에 전체 구조를 계획

**언제 사용하나요?**
```
✅ 새 프로젝트를 시작할 때
✅ 기능 추가 전 구조 고민할 때
✅ 리팩토링 계획 세울 때
✅ 시스템 설계 조언이 필요할 때
```

### 🌱 초보자 레벨: 간단한 프로그램 설계

#### 예제 1: 할 일 관리 앱 (To-Do List)

**요청**:
```bash
kilocode architect "간단한 할 일 관리 프로그램을 만들고 싶어요.
추가, 삭제, 목록 보기 기능이 있었으면 좋겠어요.
Python으로 만들 건데 어떻게 설계하면 좋을까요?"
```

**AI의 설계안**:
```python
# 📐 할 일 관리 프로그램 설계

# 🎯 요구사항 정리:
# 1. 할 일 추가
# 2. 할 일 삭제
# 3. 목록 보기

# 🏗️ 구조 설계:

# 1. 데이터 저장 방법
# - 간단한 버전: 리스트 사용
# - 실전 버전: 파일 저장 (나중에)

# 2. 주요 기능 (함수)
"""
add_task()     - 할 일 추가
remove_task()  - 할 일 삭제
show_tasks()   - 목록 보기
main()         - 메인 프로그램
"""

# ✅ 구현 단계별 계획:

# 📁 파일 구조:
"""
todo_app/
  ├── main.py          # 메인 프로그램
  ├── tasks.txt        # 할 일 저장 (선택)
  └── README.md        # 사용 설명서
"""

# 🔨 1단계: 기본 버전 (메모리에만 저장)
class TodoList:
    def __init__(self):
        self.tasks = []  # 할 일 목록

    def add_task(self, task):
        """할 일 추가"""
        self.tasks.append(task)
        print(f"✅ '{task}' 추가됨!")

    def remove_task(self, index):
        """할 일 삭제"""
        if 0 <= index < len(self.tasks):
            removed = self.tasks.pop(index)
            print(f"❌ '{removed}' 삭제됨!")
        else:
            print("⚠️ 잘못된 번호입니다!")

    def show_tasks(self):
        """목록 보기"""
        if not self.tasks:
            print("📭 할 일이 없습니다!")
            return

        print("\n📋 할 일 목록:")
        for i, task in enumerate(self.tasks, 1):
            print(f"  {i}. {task}")
        print()

def main():
    """메인 프로그램"""
    todo = TodoList()

    while True:
        print("\n=== 할 일 관리 ===")
        print("1. 추가")
        print("2. 삭제")
        print("3. 보기")
        print("4. 종료")

        choice = input("선택: ")

        if choice == "1":
            task = input("할 일: ")
            todo.add_task(task)
        elif choice == "2":
            todo.show_tasks()
            index = int(input("삭제할 번호: ")) - 1
            todo.remove_task(index)
        elif choice == "3":
            todo.show_tasks()
        elif choice == "4":
            print("👋 종료합니다!")
            break
        else:
            print("⚠️ 1-4 중에 선택하세요!")

if __name__ == "__main__":
    main()

# 🎯 다음 단계 개선안:
# 1. 파일에 저장/불러오기
# 2. 완료 표시 기능
# 3. 우선순위 설정
# 4. 마감일 추가
# 5. 카테고리 분류

# 💡 배울 수 있는 것:
# - 클래스 사용법
# - 함수 설계
# - 사용자 입력 처리
# - 리스트 조작
```

### 🌿 중급 레벨: 웹 애플리케이션 설계

#### 예제 2: 간단한 블로그 시스템

**요청**:
```bash
kilocode architect "개인 블로그를 만들고 싶어요.
글 작성, 수정, 삭제, 읽기 기능이 필요합니다.
Flask로 만들 건데 데이터베이스는 SQLite 사용할게요.
전체 구조를 설계해주세요."
```

**AI의 설계안**:
```python
# 📐 블로그 시스템 설계

# 🎯 요구사항:
# - CRUD: Create(작성), Read(읽기), Update(수정), Delete(삭제)
# - 기술 스택: Flask + SQLite

# 🏗️ 아키텍처 설계:

"""
블로그 시스템 구조:

1. 프론트엔드 (사용자가 보는 화면)
   - 홈페이지
   - 글 목록
   - 글 상세보기
   - 글 작성/수정 폼

2. 백엔드 (서버 로직)
   - Flask 라우트 (URL 처리)
   - 데이터베이스 연동

3. 데이터베이스
   - SQLite (posts 테이블)
"""

# 📁 프로젝트 구조:
"""
blog_project/
  ├── app.py                 # 메인 애플리케이션
  ├── database.py            # 데이터베이스 설정
  ├── models.py              # 데이터 모델
  ├── templates/             # HTML 템플릿
  │   ├── base.html          # 기본 레이아웃
  │   ├── index.html         # 홈
  │   ├── post.html          # 글 상세
  │   └── edit.html          # 작성/수정
  ├── static/                # CSS, JS, 이미지
  │   └── style.css
  └── blog.db                # SQLite 데이터베이스
"""

# 🗄️ 데이터베이스 스키마:
"""
posts 테이블:
  - id (정수, 기본키, 자동증가)
  - title (문자열, 제목)
  - content (텍스트, 내용)
  - created_at (날짜시간, 작성일)
  - updated_at (날짜시간, 수정일)
"""

# ✅ 구현 코드:

# 1. models.py - 데이터 모델
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Post(db.Model):
    """블로그 글 모델"""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                          onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<Post {self.title}>'

# 2. app.py - 메인 애플리케이션
from flask import Flask, render_template, request, redirect, url_for
from models import db, Post

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db.init_app(app)

# 라우트 설계:

@app.route('/')
def index():
    """홈페이지 - 글 목록"""
    posts = Post.query.order_by(Post.created_at.desc()).all()
    return render_template('index.html', posts=posts)

@app.route('/post/<int:post_id>')
def view_post(post_id):
    """글 상세보기"""
    post = Post.query.get_or_404(post_id)
    return render_template('post.html', post=post)

@app.route('/create', methods=['GET', 'POST'])
def create_post():
    """글 작성"""
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']

        new_post = Post(title=title, content=content)
        db.session.add(new_post)
        db.session.commit()

        return redirect(url_for('index'))

    return render_template('edit.html', post=None)

@app.route('/edit/<int:post_id>', methods=['GET', 'POST'])
def edit_post(post_id):
    """글 수정"""
    post = Post.query.get_or_404(post_id)

    if request.method == 'POST':
        post.title = request.form['title']
        post.content = request.form['content']
        db.session.commit()

        return redirect(url_for('view_post', post_id=post.id))

    return render_template('edit.html', post=post)

@app.route('/delete/<int:post_id>', methods=['POST'])
def delete_post(post_id):
    """글 삭제"""
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()

    return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # 테이블 생성
    app.run(debug=True)

# 📊 URL 구조:
"""
GET  /                  → 글 목록
GET  /post/1            → 글 보기
GET  /create            → 작성 폼
POST /create            → 글 저장
GET  /edit/1            → 수정 폼
POST /edit/1            → 글 수정
POST /delete/1          → 글 삭제
"""

# 🎨 프론트엔드 템플릿 (간단 예시):
"""
<!-- templates/index.html -->
{% extends "base.html" %}

{% block content %}
<h1>내 블로그</h1>
<a href="{{ url_for('create_post') }}">새 글 작성</a>

{% for post in posts %}
  <div class="post-preview">
    <h2>
      <a href="{{ url_for('view_post', post_id=post.id) }}">
        {{ post.title }}
      </a>
    </h2>
    <p>{{ post.created_at.strftime('%Y-%m-%d') }}</p>
  </div>
{% endfor %}
{% endblock %}
"""

# 🚀 실행 방법:
"""
1. 필요한 패키지 설치:
   pip install flask flask-sqlalchemy

2. 실행:
   python app.py

3. 브라우저에서 접속:
   http://localhost:5000
"""

# 🔒 보안 개선사항 (다음 단계):
"""
1. 사용자 인증 추가
2. XSS 방어 (입력 검증)
3. CSRF 토큰
4. 비밀번호 해싱
5. 파일 업로드 검증
"""
```

---

## Orchestrate 모드로 자동화

### 🎼 Orchestrate 모드란?

**간단 설명**:
- 여러 작업을 한 번에 처리하는 지휘자 모드
- 복잡한 워크플로우 자동화
- "이것도 하고 저것도 하고..."를 한 번에!

**비유**:
```
오케스트라 지휘자가
여러 악기를 조율하듯이,

Orchestrate 모드는
여러 작업을 조율합니다!
```

### 🌱 초보자 레벨: 간단한 자동화

#### 예제 1: 프로젝트 초기 설정 자동화

**요청**:
```bash
kilocode orchestrate "새 Python 프로젝트를 시작하려고 해요.
1. 프로젝트 폴더 만들기
2. 가상환경 설정
3. requirements.txt 만들기
4. README.md 만들기
5. .gitignore 만들기
이것들을 자동으로 해주세요!"
```

**AI의 자동화 스크립트**:
```bash
#!/bin/bash
# 프로젝트 자동 설정 스크립트

# 📦 새 Python 프로젝트 설정

# 1️⃣ 프로젝트 폴더 생성
echo "📁 프로젝트 폴더 생성 중..."
PROJECT_NAME="my_awesome_project"
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# 2️⃣ 가상환경 생성
echo "🔧 가상환경 설정 중..."
python3 -m venv venv

# 3️⃣ requirements.txt 생성
echo "📄 requirements.txt 생성 중..."
cat > requirements.txt << EOF
# 기본 패키지
requests==2.31.0
python-dotenv==1.0.0

# 개발 도구
pytest==7.4.0
black==23.7.0
flake8==6.1.0
EOF

# 4️⃣ README.md 생성
echo "📝 README.md 생성 중..."
cat > README.md << EOF
# $PROJECT_NAME

## 설명
프로젝트 설명을 여기에 작성하세요.

## 설치

\`\`\`bash
# 가상환경 활성화
source venv/bin/activate  # Mac/Linux
# 또는
venv\\Scripts\\activate  # Windows

# 패키지 설치
pip install -r requirements.txt
\`\`\`

## 사용법
사용 방법을 여기에 작성하세요.

## 라이선스
MIT
EOF

# 5️⃣ .gitignore 생성
echo "🚫 .gitignore 생성 중..."
cat > .gitignore << EOF
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# 환경 변수
.env
.env.local

# 기타
*.log
.DS_Store
EOF

# 6️⃣ 기본 Python 파일 생성
echo "🐍 main.py 생성 중..."
cat > main.py << EOF
"""
메인 애플리케이션
"""

def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()
EOF

# 7️⃣ Git 초기화 (선택사항)
echo "📦 Git 저장소 초기화 중..."
git init
git add .
git commit -m "Initial commit: 프로젝트 설정"

echo "✅ 프로젝트 설정 완료!"
echo ""
echo "다음 단계:"
echo "1. cd $PROJECT_NAME"
echo "2. source venv/bin/activate"
echo "3. pip install -r requirements.txt"
echo "4. python main.py"
```

**Windows 사용자용 PowerShell 버전**:
```powershell
# 프로젝트 자동 설정 (PowerShell)

$PROJECT_NAME = "my_awesome_project"

# 1. 폴더 생성
Write-Host "📁 프로젝트 폴더 생성 중..."
New-Item -ItemType Directory -Name $PROJECT_NAME
Set-Location $PROJECT_NAME

# 2. 가상환경
Write-Host "🔧 가상환경 설정 중..."
python -m venv venv

# 3. requirements.txt
Write-Host "📄 requirements.txt 생성 중..."
@"
requests==2.31.0
python-dotenv==1.0.0
pytest==7.4.0
"@ | Out-File -FilePath requirements.txt

# 4. README.md
Write-Host "📝 README.md 생성 중..."
@"
# $PROJECT_NAME

프로젝트 설명
"@ | Out-File -FilePath README.md

# 5. .gitignore
Write-Host "🚫 .gitignore 생성 중..."
@"
__pycache__/
venv/
.env
"@ | Out-File -FilePath .gitignore

# 6. main.py
Write-Host "🐍 main.py 생성 중..."
@"
def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()
"@ | Out-File -FilePath main.py

Write-Host "✅ 완료!"
```

### 🌿 중급 레벨: 테스트 자동화

#### 예제 2: 자동 테스트 및 배포 파이프라인

**요청**:
```bash
kilocode orchestrate "코드를 수정할 때마다
1. 코드 스타일 검사
2. 유닛 테스트 실행
3. 테스트 통과하면 커밋
4. 자동으로 문서 업데이트
이것들을 자동화하고 싶어요"
```

**AI의 자동화 설정**:
```python
# 🤖 자동화 파이프라인 설정

# 📁 파일 구조:
"""
project/
  ├── .github/
  │   └── workflows/
  │       └── ci.yml        # GitHub Actions
  ├── tests/
  │   └── test_main.py
  ├── main.py
  ├── requirements.txt
  └── Makefile              # 명령어 단축
"""

# 1️⃣ Makefile - 명령어 단축키
```makefile
.PHONY: format lint test all

# 코드 포맷팅
format:
	@echo "🎨 코드 포맷팅 중..."
	black *.py
	@echo "✅ 포맷팅 완료!"

# 코드 스타일 검사
lint:
	@echo "🔍 코드 스타일 검사 중..."
	flake8 *.py
	@echo "✅ 스타일 검사 통과!"

# 테스트 실행
test:
	@echo "🧪 테스트 실행 중..."
	pytest tests/ -v
	@echo "✅ 테스트 통과!"

# 전체 실행
all: format lint test
	@echo "🎉 모든 검사 통과!"
```

# 2️⃣ pre-commit 훅 설정
# .git/hooks/pre-commit
```bash
#!/bin/bash
# Git commit 전 자동 검사

echo "🚀 커밋 전 검사 시작..."

# 코드 포맷팅
echo "1️⃣ 코드 포맷팅..."
make format
if [ $? -ne 0 ]; then
    echo "❌ 포맷팅 실패!"
    exit 1
fi

# 스타일 검사
echo "2️⃣ 스타일 검사..."
make lint
if [ $? -ne 0 ]; then
    echo "❌ 스타일 검사 실패!"
    exit 1
fi

# 테스트
echo "3️⃣ 테스트 실행..."
make test
if [ $? -ne 0 ]; then
    echo "❌ 테스트 실패!"
    exit 1
fi

echo "✅ 모든 검사 통과! 커밋 진행..."
```

# 3️⃣ GitHub Actions 워크플로우
# .github/workflows/ci.yml
```yaml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install black flake8 pytest

    - name: Format check
      run: black --check *.py

    - name: Lint
      run: flake8 *.py

    - name: Run tests
      run: pytest tests/ -v

    - name: Generate documentation
      run: |
        pip install pdoc3
        pdoc --html --output-dir docs/ main.py

    - name: Deploy docs (if on main)
      if: github.ref == 'refs/heads/main'
      run: |
        # 문서 배포 로직
        echo "📚 문서 업데이트 완료!"
```

# 4️⃣ Python 설정 파일
# setup.cfg
```ini
[flake8]
max-line-length = 88
exclude = venv/,.git/,__pycache__/

[tool:pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
```

# 5️⃣ 사용 방법
"""
로컬에서:
$ make all           # 모든 검사 실행
$ git commit -m "..."  # 자동 검사 후 커밋

GitHub에:
- PR 생성 시 자동으로 CI 실행
- main 브랜치 머지 시 문서 자동 업데이트
"""

# 💡 이점:
"""
1. 사람 실수 방지
2. 일관된 코드 품질
3. 자동 문서화
4. 팀 협업 효율 향상
5. 버그 조기 발견
"""
```

---

## 웹사이트 만들기 프로젝트

### 🌐 실전 프로젝트: 나만의 포트폴리오 사이트

**목표**: HTML/CSS/JavaScript로 개인 포트폴리오 만들기

### 🌱 Step 1: 프로젝트 설정

```bash
kilocode orchestrate "포트폴리오 웹사이트 프로젝트를 시작해줘.
HTML, CSS, JavaScript 파일 구조를 만들어줘"
```

**생성될 구조**:
```
portfolio/
  ├── index.html
  ├── style.css
  ├── script.js
  ├── images/
  └── README.md
```

### 🌿 Step 2: HTML 구조 만들기

```bash
kilocode ask "포트폴리오 사이트에 필요한 섹션들을
HTML로 만들어줘. 헤더, 소개, 프로젝트, 연락처 섹션이 필요해"
```

**생성되는 코드**:
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>김코딩의 포트폴리오</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 헤더 -->
    <header>
        <nav>
            <h1>김코딩</h1>
            <ul>
                <li><a href="#about">소개</a></li>
                <li><a href="#projects">프로젝트</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
        </nav>
    </header>

    <!-- 소개 섹션 -->
    <section id="about">
        <h2>안녕하세요!</h2>
        <p>저는 웹 개발을 배우고 있는 김코딩입니다.</p>
    </section>

    <!-- 프로젝트 섹션 -->
    <section id="projects">
        <h2>프로젝트</h2>
        <div class="project-grid">
            <div class="project-card">
                <h3>프로젝트 1</h3>
                <p>할 일 관리 앱</p>
            </div>
            <!-- 더 추가 가능 -->
        </div>
    </section>

    <!-- 연락처 섹션 -->
    <section id="contact">
        <h2>연락처</h2>
        <form id="contact-form">
            <input type="text" placeholder="이름" required>
            <input type="email" placeholder="이메일" required>
            <textarea placeholder="메시지" required></textarea>
            <button type="submit">보내기</button>
        </form>
    </section>

    <script src="script.js"></script>
</body>
</html>
```

### 🌳 Step 3: 스타일링 및 인터랙션

```bash
kilocode ask "이 HTML에 예쁜 CSS 스타일을 추가해줘.
모던하고 깔끔한 느낌으로"
```

---

## 용어 사전 (Glossary - Part 2)

### 고급 개발 용어

#### A

**Architecture (아키텍처)**
- **쉬운 설명**: 건물의 설계도처럼, 프로그램의 전체 구조
- **비유**: "집을 지을 때 방 배치를 먼저 계획하듯이"

#### C

**CI/CD**
- **정의**: Continuous Integration / Continuous Deployment
- **쉬운 설명**: 코드 변경 → 자동 테스트 → 자동 배포
- **비유**: "공장의 자동화 라인"

#### D

**Deploy (배포)**
- **쉬운 설명**: 만든 프로그램을 사용자가 쓸 수 있게 올리기
- **비유**: "음식을 만들어서 손님에게 서빙하기"

#### F

**Framework (프레임워크)**
- **쉬운 설명**: 프로그램 만들기 위한 기본 틀
- **예시**: Flask, Django, React
- **비유**: "레고 기본 세트"

#### O

**Orchestration (오케스트레이션)**
- **쉬운 설명**: 여러 작업을 조율하여 자동화
- **비유**: "오케스트라 지휘자"

#### R

**Refactoring (리팩토링)**
- **쉬운 설명**: 동작은 그대로, 코드를 더 깔끔하게
- **비유**: "방 청소 - 물건은 그대로, 정리만 다시"

---

## 다음 단계와 학습 로드맵

### 🎓 배운 내용 복습

✅ **Part 1에서 배운 것**:
- Kilo Code 설치 및 기본 사용
- 터미널 기초 명령어
- Ask 모드로 질문하기

✅ **Part 2에서 배운 것**:
- Debug 모드로 버그 잡기
- Architect 모드로 설계하기
- Orchestrate 모드로 자동화
- 실전 프로젝트 적용

### 📚 더 배우고 싶다면

1. **공식 문서 읽기**
   - https://kilocode.com/docs

2. **커뮤니티 참여**
   - Discord: 다른 개발자들과 대화
   - GitHub: 코드 공유

3. **프로젝트 만들기**
   - 작은 프로젝트부터 시작
   - 매일 조금씩 코딩하기

---

## 연결된 노트

### 이전 단계
- [[Kilo Code CLI 완전 정복 가이드 - Part 1 기초편]]

### 관련 가이드
- [[실전 프로젝트 아이디어 100선]]
- [[CI CD 파이프라인 구축하기]]
- [[테스트 자동화 완벽 가이드]]

### 상위 개념
- [[개발 도구 가이드]]
- [[AI 활용 개발 워크플로우]]

---

**🎉 축하합니다!**

Part 1과 Part 2를 모두 마치셨습니다!
이제 Kilo Code CLI를 실전에서 활용할 준비가 되었습니다.

**💪 다음 도전 과제**:
1. 작은 프로젝트 하나 직접 만들어보기
2. Kilo Code로 코드 리뷰 받아보기
3. 자동화 스크립트 만들어보기

**🤗 격려의 말**:
> "완벽한 코드는 없습니다.
> 하지만 매일 조금씩 나아지는 코드는 있습니다.
> Kilo Code와 함께라면 더 빠르게 성장할 수 있어요!"

---

*최종 업데이트: 2025-10-24*
*작성: Claude AI (실전 활용 최적화)*
