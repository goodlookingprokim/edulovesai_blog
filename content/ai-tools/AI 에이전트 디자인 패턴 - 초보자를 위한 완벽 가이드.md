---
title: "AI 에이전트 디자인 패턴 - 초보자를 위한 완벽 가이드"
created: '2025-10-11'
last_modified: '2025-10-11'
tags:
  - AI/에이전트
  - AI/디자인패턴
  - 프로그래밍/초보자
  - 교육/튜토리얼
  - 개발/AI
  - 파인만기법
  - 스토리텔링
status: "완료"
type: "교육자료"
priority: "high"
share_link: ""
---

# 🤖 AI 에이전트 디자인 패턴: 초보 개발자를 위한 완벽 가이드

> 💡 **이 노트의 목적**: 복잡한 AI 에이전트 시스템을 **5살 아이도 이해할 수 있게** 설명하고, 실제로 **당신이 직접 만들 수 있도록** 돕는 것입니다.

## 📋 목차
1. [[#프롤로그 - AI 에이전트와의 첫 만남]]
2. [[#AI 에이전트란 무엇인가 - 로봇 비서 이야기]]
3. [[#7가지 핵심 디자인 패턴 - 레고 블록처럼 조립하기]]
4. [[#초보자를 위한 단계별 실습]]
5. [[#실전 프로젝트 - 나만의 AI 비서 만들기]]
6. [[#용어 사전 - 어려운 말 쉽게 이해하기]]
7. [[#더 나아가기 - 성장 로드맵]]

---

## 프롤로그 - AI 에이전트와의 첫 만남

### 🎭 이야기로 시작하는 AI 에이전트

상상해보세요. 당신은 작은 카페를 운영하고 있습니다. 매일 아침:
- ☕ 커피 원두 재고를 확인해야 하고
- 📦 필요하면 자동으로 주문해야 하고
- 💬 고객의 문의에 답변해야 하고
- 📊 매출을 정리해야 합니다

**"이 모든 걸 알아서 해주는 직원이 있다면 얼마나 좋을까?"**

바로 이것이 **AI 에이전트**입니다!

### 🎯 파인만 기법으로 이해하기

> "복잡한 것을 단순하게 설명할 수 없다면, 그것을 제대로 이해한 것이 아니다" - 리처드 파인만

**AI 에이전트를 5살 아이에게 설명한다면?**
```
AI 에이전트 = 똑똑한 로봇 친구
- 혼자서 일을 할 수 있어요
- 필요한 도구를 찾아 쓸 수 있어요
- 실수하면 다시 고칠 수 있어요
- 친구들과 협력할 수 있어요
```

---

## AI 에이전트란 무엇인가 - 로봇 비서 이야기

### 🤔 일반 프로그램 vs AI 에이전트

#### 📱 일반 프로그램 (전통적인 앱)
```python
# 전통적인 프로그램: 정해진 대로만 동작
def traditional_coffee_order():
    if inventory < 10:
        order_coffee()  # 무조건 10개 이하면 주문
    else:
        pass  # 아니면 아무것도 안 함
```

**특징**:
- 🔴 정해진 규칙대로만 동작
- 🔴 예외 상황에 대처 못 함
- 🔴 학습하지 않음

#### 🧠 AI 에이전트
```python
# AI 에이전트: 상황을 판단하고 결정
class CoffeeAgent:
    def think_and_act(self):
        # 1. 상황 파악
        context = analyze_situation()  # "요즘 판매 추세는? 날씨는?"

        # 2. 계획 수립
        plan = create_plan(context)  # "비 오는 날이니 따뜻한 커피 더 준비"

        # 3. 실행과 학습
        result = execute(plan)
        learn_from_result(result)  # "오늘 전략이 효과적이었나?"
```

**특징**:
- ✅ 스스로 판단하고 결정
- ✅ 실수에서 배움
- ✅ 상황에 맞게 적응

### 🎨 실생활 비유로 이해하기

| 구분 | 일반 프로그램 | AI 에이전트 |
|------|--------------|-------------|
| 비유 | 📖 **요리책 레시피** | 👨‍🍳 **전문 요리사** |
| 설명 | 정확한 순서대로만 따라함 | 재료와 상황 보고 조절 |
| 예시 | "소금 1스푼 넣기" | "맛 보고 간 조절하기" |
| 유연성 | 재료 없으면 멈춤 | 대체 재료 찾아 사용 |

---

## 7가지 핵심 디자인 패턴 - 레고 블록처럼 조립하기

### 🧩 패턴 1: Prompt Chaining (프롬프트 체이닝)
**"릴레이 경주처럼 작업 이어가기"**

#### 📚 초보자 설명
토스트를 만드는 과정을 상상해보세요:
1. 🍞 빵 꺼내기 →
2. 🔥 토스터에 넣기 →
3. ⏰ 기다리기 →
4. 🧈 버터 바르기

각 단계의 **결과**가 다음 단계의 **시작**이 됩니다!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 간단한 체인**
```python
# 레벨 1: 아주 간단한 체인
def make_story():
    # 단계 1: 주인공 만들기
    character = create_character("용감한 개발자")

    # 단계 2: 배경 만들기 (주인공 정보 활용)
    setting = create_setting(character)

    # 단계 3: 이야기 완성 (이전 정보들 모두 활용)
    story = write_story(character, setting)

    return story

# 실행 예시
print(make_story())
# 출력: "용감한 개발자가 실리콘밸리에서 AI 에이전트를 만들었습니다..."
```

**🌿 초급자용 - 에러 처리 추가**
```python
# 레벨 2: 에러 처리가 있는 체인
class StoryChain:
    def __init__(self):
        self.steps = []

    def add_step(self, step_name, function):
        """체인에 단계 추가"""
        self.steps.append((step_name, function))

    def run(self, initial_input):
        """체인 실행 - 에러 발생시 안전하게 처리"""
        result = initial_input

        for step_name, function in self.steps:
            try:
                print(f"🔄 {step_name} 실행 중...")
                result = function(result)
            except Exception as e:
                print(f"❌ {step_name} 실패: {e}")
                return None

        return result

# 사용 예시
chain = StoryChain()
chain.add_step("캐릭터 생성", create_character)
chain.add_step("배경 설정", create_setting)
chain.add_step("플롯 구성", create_plot)
story = chain.run("모험 이야기")
```

**🌳 중급자용 - 비동기 처리와 로깅**
```python
# 레벨 3: 실무에서 사용하는 체인
import asyncio
import logging
from typing import Any, Callable, List

class AdvancedChain:
    def __init__(self, name: str):
        self.name = name
        self.steps: List[Callable] = []
        self.logger = logging.getLogger(name)

    async def add_step(self, step_func: Callable,
                       timeout: int = 30):
        """비동기 단계 추가"""
        self.steps.append({
            'func': step_func,
            'timeout': timeout
        })

    async def execute(self, initial_data: Any) -> Any:
        """체인 실행 - 타임아웃과 재시도 포함"""
        current_data = initial_data

        for i, step in enumerate(self.steps):
            self.logger.info(f"Step {i+1}/{len(self.steps)} 시작")

            try:
                # 타임아웃 설정
                current_data = await asyncio.wait_for(
                    step['func'](current_data),
                    timeout=step['timeout']
                )
            except asyncio.TimeoutError:
                self.logger.error(f"Step {i+1} 타임아웃")
                # 재시도 로직 또는 대체 처리
                current_data = await self.fallback_handler(current_data)

        return current_data

# 실제 사용 예시
async def main():
    chain = AdvancedChain("customer_service")

    # 고객 서비스 체인 구성
    chain.add_step(analyze_customer_query, timeout=10)
    chain.add_step(search_knowledge_base, timeout=20)
    chain.add_step(generate_response, timeout=15)
    chain.add_step(personalize_tone, timeout=5)

    response = await chain.execute("제품 환불 문의")
    print(response)
```

### 🧩 패턴 2: Routing (라우팅)
**"교통 신호등처럼 길 안내하기"**

#### 📚 초보자 설명
고객 센터에 전화했을 때를 생각해보세요:
- "주문 문의는 1번" → 주문팀
- "배송 문의는 2번" → 배송팀
- "환불 문의는 3번" → 환불팀

AI도 이렇게 **질문 유형에 따라** 다른 처리를 합니다!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 단순 분기**
```python
# 레벨 1: if-else로 간단한 라우팅
def customer_service_bot(message):
    # 메시지 내용으로 어디로 보낼지 결정
    if "주문" in message:
        return handle_order(message)
    elif "배송" in message:
        return handle_shipping(message)
    elif "환불" in message:
        return handle_refund(message)
    else:
        return "죄송합니다. 이해하지 못했습니다."

# 테스트
print(customer_service_bot("주문한 제품이 언제 오나요?"))
# 출력: "주문 번호를 알려주시면 배송 상태를 확인해드리겠습니다."
```

**🌿 초급자용 - 딕셔너리 활용**
```python
# 레벨 2: 더 깔끔한 라우터
class SmartRouter:
    def __init__(self):
        # 키워드와 처리 함수 매핑
        self.routes = {
            "주문": self.handle_order,
            "배송": self.handle_shipping,
            "환불": self.handle_refund,
            "교환": self.handle_exchange
        }

    def route(self, message):
        """메시지 분석 후 적절한 핸들러로 라우팅"""
        # 키워드 찾기
        for keyword, handler in self.routes.items():
            if keyword in message:
                return handler(message)

        # 기본 처리
        return self.handle_default(message)

    def handle_order(self, msg):
        return f"📦 주문 관련: {msg}"

    def handle_shipping(self, msg):
        return f"🚚 배송 관련: {msg}"

    # ... 다른 핸들러들

router = SmartRouter()
print(router.route("배송이 너무 늦어요"))
```

**🌳 중급자용 - AI 기반 라우팅**
```python
# 레벨 3: AI로 의도 파악하여 라우팅
import openai
from enum import Enum
from typing import Dict, Optional

class Intent(Enum):
    ORDER = "order"
    SHIPPING = "shipping"
    REFUND = "refund"
    TECHNICAL = "technical"
    GENERAL = "general"

class AIRouter:
    def __init__(self, api_key: str):
        self.client = openai.Client(api_key=api_key)
        self.handlers = {
            Intent.ORDER: OrderHandler(),
            Intent.SHIPPING: ShippingHandler(),
            Intent.REFUND: RefundHandler(),
            Intent.TECHNICAL: TechSupportHandler(),
            Intent.GENERAL: GeneralHandler()
        }

    async def classify_intent(self, message: str) -> Intent:
        """AI로 사용자 의도 분류"""
        prompt = f"""
        사용자 메시지: {message}

        위 메시지의 의도를 분류하세요:
        - order: 주문 관련
        - shipping: 배송 관련
        - refund: 환불/교환 관련
        - technical: 기술 지원
        - general: 일반 문의

        의도:
        """

        response = await self.client.completions.create(
            model="gpt-4",
            prompt=prompt,
            max_tokens=10
        )

        intent_str = response.choices[0].text.strip()
        return Intent[intent_str.upper()]

    async def process(self, message: str) -> str:
        """메시지 처리 - 의도 파악 후 적절한 핸들러 실행"""
        # 1. AI로 의도 파악
        intent = await self.classify_intent(message)

        # 2. 신뢰도 체크 (선택적)
        confidence = await self.get_confidence(message, intent)

        if confidence < 0.7:
            # 신뢰도 낮으면 사람에게 전달
            return await self.escalate_to_human(message)

        # 3. 적절한 핸들러로 처리
        handler = self.handlers[intent]
        return await handler.process(message)

# 실제 사용
router = AIRouter(api_key="your-key")
response = await router.process("제품이 고장났는데 AS 받고 싶어요")
# AI가 'technical'로 분류 → TechSupportHandler가 처리
```

### 🧩 패턴 3: Parallelization (병렬 처리)
**"여러 일을 동시에 처리하기"**

#### 📚 초보자 설명
요리할 때를 생각해보세요:
- 🍚 밥솥에 밥 하면서
- 🥘 찌개도 끓이고
- 🥗 샐러드도 만들기

하나씩 하면 3시간, **동시에 하면 1시간**!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 동시 실행 체험**
```python
# 레벨 1: 순차 처리 vs 병렬 처리 비교
import time
import concurrent.futures

# 느린 방법: 하나씩 처리
def sequential_processing():
    start = time.time()

    weather = get_weather()      # 2초
    news = get_news()            # 2초
    stock = get_stock_price()    # 2초

    print(f"순차 처리 시간: {time.time() - start}초")  # 약 6초
    return weather, news, stock

# 빠른 방법: 동시에 처리
def parallel_processing():
    start = time.time()

    with concurrent.futures.ThreadPoolExecutor() as executor:
        # 모든 작업을 동시에 시작
        future_weather = executor.submit(get_weather)
        future_news = executor.submit(get_news)
        future_stock = executor.submit(get_stock_price)

        # 결과 수집
        weather = future_weather.result()
        news = future_news.result()
        stock = future_stock.result()

    print(f"병렬 처리 시간: {time.time() - start}초")  # 약 2초
    return weather, news, stock
```

**🌿 초급자용 - 실용적인 병렬 처리**
```python
# 레벨 2: 여러 API 동시 호출
import asyncio
import aiohttp

class ParallelDataFetcher:
    def __init__(self):
        self.apis = {
            "weather": "https://api.weather.com/data",
            "news": "https://api.news.com/latest",
            "traffic": "https://api.traffic.com/current"
        }

    async def fetch_one(self, session, name, url):
        """하나의 API 호출"""
        try:
            async with session.get(url) as response:
                data = await response.json()
                return {name: data}
        except Exception as e:
            return {name: f"Error: {e}"}

    async def fetch_all(self):
        """모든 API 동시 호출"""
        async with aiohttp.ClientSession() as session:
            # 모든 작업을 동시에 실행
            tasks = [
                self.fetch_one(session, name, url)
                for name, url in self.apis.items()
            ]

            # 모든 결과 대기
            results = await asyncio.gather(*tasks)

            # 결과 합치기
            combined = {}
            for result in results:
                combined.update(result)

            return combined

# 사용 예시
fetcher = ParallelDataFetcher()
data = asyncio.run(fetcher.fetch_all())
print(f"받은 데이터: {data}")
```

**🌳 중급자용 - 지능적인 병렬 처리**
```python
# 레벨 3: 작업 의존성 관리와 동적 병렬화
from dataclasses import dataclass
from typing import List, Set, Dict, Any
import asyncio

@dataclass
class Task:
    id: str
    func: callable
    dependencies: Set[str] = None

    def __post_init__(self):
        if self.dependencies is None:
            self.dependencies = set()

class SmartParallelExecutor:
    def __init__(self):
        self.tasks: Dict[str, Task] = {}
        self.results: Dict[str, Any] = {}

    def add_task(self, task: Task):
        """작업 추가"""
        self.tasks[task.id] = task

    async def execute_task(self, task_id: str):
        """단일 작업 실행"""
        task = self.tasks[task_id]

        # 의존성 있는 작업들의 결과 수집
        deps_results = {
            dep_id: self.results[dep_id]
            for dep_id in task.dependencies
        }

        # 작업 실행
        result = await task.func(deps_results)
        self.results[task_id] = result
        return result

    async def execute_all(self):
        """모든 작업을 의존성 고려하여 실행"""
        # 작업을 레벨별로 그룹화
        levels = self.topological_sort()

        for level in levels:
            # 같은 레벨의 작업들은 병렬 실행
            tasks = [
                self.execute_task(task_id)
                for task_id in level
            ]
            await asyncio.gather(*tasks)

            print(f"레벨 {levels.index(level)} 완료: {level}")

        return self.results

    def topological_sort(self) -> List[List[str]]:
        """의존성 기반 작업 레벨 분류"""
        levels = []
        processed = set()

        while len(processed) < len(self.tasks):
            current_level = []

            for task_id, task in self.tasks.items():
                if task_id not in processed:
                    # 의존성이 모두 처리되었는지 확인
                    if task.dependencies.issubset(processed):
                        current_level.append(task_id)

            levels.append(current_level)
            processed.update(current_level)

        return levels

# 실제 사용 예시
executor = SmartParallelExecutor()

# 작업 정의 (일부는 서로 의존)
executor.add_task(Task("user_data", fetch_user_data))
executor.add_task(Task("preferences", fetch_preferences, {"user_data"}))
executor.add_task(Task("history", fetch_history, {"user_data"}))
executor.add_task(Task("recommendations", generate_recommendations,
                      {"preferences", "history"}))

# 실행 - 자동으로 최적 병렬화
results = await executor.execute_all()
# user_data 먼저 → preferences와 history 동시 → recommendations
```

### 🧩 패턴 4: Reflection (반성/개선)
**"실수에서 배우는 AI"**

#### 📚 초보자 설명
수학 문제를 풀 때:
1. 📝 문제 풀기
2. 🔍 답 확인하기
3. ❌ 틀렸다면 왜 틀렸는지 분석
4. ✏️ 다시 풀기

AI도 이렇게 **자기 답을 검토하고 개선**합니다!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 간단한 자기 검증**
```python
# 레벨 1: 기본적인 반성 패턴
class SimpleReflectiveBot:
    def answer_with_reflection(self, question):
        # 1단계: 첫 번째 답변 생성
        first_answer = self.generate_answer(question)
        print(f"초안: {first_answer}")

        # 2단계: 답변 검토
        issues = self.find_issues(first_answer)

        if issues:
            print(f"발견된 문제: {issues}")
            # 3단계: 개선된 답변 생성
            final_answer = self.improve_answer(first_answer, issues)
            print(f"최종: {final_answer}")
            return final_answer

        return first_answer

    def find_issues(self, answer):
        issues = []
        if len(answer) < 10:
            issues.append("너무 짧음")
        if "죄송" in answer:
            issues.append("너무 소극적")
        return issues

# 사용 예시
bot = SimpleReflectiveBot()
bot.answer_with_reflection("Python이 뭔가요?")
# 초안: "프로그래밍 언어입니다"
# 발견된 문제: ['너무 짧음']
# 최종: "Python은 배우기 쉽고 강력한 프로그래밍 언어로..."
```

**🌿 초급자용 - 체계적인 검증**
```python
# 레벨 2: 여러 관점에서 검증
class ReflectiveWriter:
    def __init__(self):
        self.validators = [
            self.check_accuracy,
            self.check_completeness,
            self.check_clarity,
            self.check_tone
        ]

    def write_with_reflection(self, topic, max_iterations=3):
        """반복적으로 개선하며 글쓰기"""
        content = self.initial_draft(topic)

        for i in range(max_iterations):
            print(f"\n=== 반복 {i+1} ===")

            # 모든 검증기로 검토
            all_feedback = []
            for validator in self.validators:
                feedback = validator(content)
                if feedback:
                    all_feedback.append(feedback)

            # 피드백이 없으면 완료
            if not all_feedback:
                print("✅ 모든 검증 통과!")
                break

            # 피드백 기반 개선
            print(f"피드백: {all_feedback}")
            content = self.revise(content, all_feedback)

        return content

    def check_accuracy(self, content):
        """정확성 검증"""
        # 실제로는 팩트 체크 API 호출
        if "잘못된 정보" in content:
            return "사실 확인 필요"
        return None

    def check_completeness(self, content):
        """완성도 검증"""
        if len(content.split()) < 50:
            return "내용 보충 필요"
        return None

    def revise(self, content, feedback_list):
        """피드백 반영하여 수정"""
        revised = content
        for feedback in feedback_list:
            if "보충" in feedback:
                revised += "\n추가 설명..."
            # ... 다른 수정 로직
        return revised
```

**🌳 중급자용 - AI 기반 자기 개선**
```python
# 레벨 3: LLM을 활용한 고급 반성
import json
from typing import Dict, List, Optional

class AdvancedReflectiveAgent:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.reflection_history = []

    async def solve_with_reflection(
        self,
        problem: str,
        max_attempts: int = 3
    ) -> Dict:
        """문제 해결 with 자기 반성"""

        attempt = 0
        best_solution = None
        best_score = 0

        while attempt < max_attempts:
            attempt += 1

            # 1. 해결책 생성
            solution = await self.generate_solution(
                problem,
                self.reflection_history
            )

            # 2. 자기 평가
            evaluation = await self.self_evaluate(
                problem,
                solution
            )

            # 3. 반성 및 학습
            reflection = await self.reflect(
                problem,
                solution,
                evaluation
            )

            self.reflection_history.append({
                'attempt': attempt,
                'solution': solution,
                'evaluation': evaluation,
                'reflection': reflection
            })

            # 4. 개선 여부 판단
            if evaluation['score'] > best_score:
                best_score = evaluation['score']
                best_solution = solution

            if evaluation['score'] >= 0.9:  # 충분히 좋음
                break

            print(f"시도 {attempt}: 점수 {evaluation['score']}")
            print(f"반성: {reflection['key_insights']}")

        return {
            'solution': best_solution,
            'score': best_score,
            'attempts': attempt,
            'learning': self.extract_learnings()
        }

    async def self_evaluate(self, problem: str, solution: str) -> Dict:
        """해결책 자기 평가"""
        prompt = f"""
        문제: {problem}
        제안된 해결책: {solution}

        이 해결책을 다음 기준으로 평가하세요:
        1. 정확성 (0-1)
        2. 완성도 (0-1)
        3. 효율성 (0-1)
        4. 창의성 (0-1)

        JSON 형식으로 답하세요.
        """

        response = await self.llm.generate(prompt)
        return json.loads(response)

    async def reflect(
        self,
        problem: str,
        solution: str,
        evaluation: Dict
    ) -> Dict:
        """해결 과정 반성"""
        prompt = f"""
        문제: {problem}
        시도한 해결책: {solution}
        평가 결과: {json.dumps(evaluation)}

        다음을 분석하세요:
        1. 무엇이 잘 되었는가?
        2. 무엇이 부족했는가?
        3. 어떻게 개선할 수 있는가?
        4. 다음 시도에서 주의할 점은?
        """

        reflection = await self.llm.generate(prompt)
        return {
            'key_insights': self.extract_insights(reflection),
            'improvement_areas': self.identify_improvements(reflection),
            'next_approach': self.suggest_approach(reflection)
        }

# 실제 사용 예시
agent = AdvancedReflectiveAgent(llm_client)
result = await agent.solve_with_reflection(
    "사용자 이탈률을 줄이는 방법을 제안하세요"
)

print(f"최종 해결책: {result['solution']}")
print(f"학습된 내용: {result['learning']}")
```

### 🧩 패턴 5: Tool Use (도구 사용)
**"적절한 도구 찾아 쓰기"**

#### 📚 초보자 설명
목수가 일할 때:
- 🔨 못 박을 때는 망치
- 🪚 자를 때는 톱
- 📏 측정할 때는 자

AI도 **필요에 따라 다양한 도구**를 사용합니다!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 간단한 도구 사용**
```python
# 레벨 1: 기본 도구 사용
class SimpleToolBot:
    def __init__(self):
        # 사용 가능한 도구들
        self.tools = {
            "calculator": self.calculate,
            "translator": self.translate,
            "weather": self.get_weather
        }

    def process_request(self, request):
        """요청 처리 - 적절한 도구 선택"""
        if "계산" in request or "+" in request:
            return self.tools["calculator"](request)
        elif "번역" in request:
            return self.tools["translator"](request)
        elif "날씨" in request:
            return self.tools["weather"](request)
        else:
            return "도구를 찾을 수 없습니다"

    def calculate(self, expr):
        # 실제로는 eval 대신 안전한 파서 사용
        return f"답: {eval(expr.replace('계산', ''))}"

    def translate(self, text):
        # 실제로는 번역 API 호출
        return f"번역 결과: [translated text]"

    def get_weather(self, location):
        # 실제로는 날씨 API 호출
        return f"오늘 날씨: 맑음, 20도"

# 사용
bot = SimpleToolBot()
print(bot.process_request("3 + 5 계산해줘"))
# 출력: "답: 8"
```

**🌿 초급자용 - 도구 체인**
```python
# 레벨 2: 여러 도구를 연결하여 사용
class ToolChainBot:
    def __init__(self):
        self.tools = {
            "search": GoogleSearchTool(),
            "summarize": SummarizerTool(),
            "translate": TranslatorTool(),
            "save": FileSaverTool()
        }

    async def research_and_report(self, topic, language="ko"):
        """연구 후 보고서 작성 - 여러 도구 활용"""

        # 1. 검색 도구로 정보 수집
        print(f"🔍 '{topic}' 검색 중...")
        search_results = await self.tools["search"].search(topic)

        # 2. 요약 도구로 핵심 정리
        print("📝 내용 요약 중...")
        summary = await self.tools["summarize"].summarize(
            search_results,
            max_length=500
        )

        # 3. 번역 도구로 언어 변환
        if language != "en":
            print(f"🌐 {language}로 번역 중...")
            summary = await self.tools["translate"].translate(
                summary,
                target_lang=language
            )

        # 4. 저장 도구로 파일 저장
        print("💾 결과 저장 중...")
        file_path = await self.tools["save"].save(
            content=summary,
            filename=f"{topic}_report.txt"
        )

        return {
            "topic": topic,
            "summary": summary,
            "saved_to": file_path
        }

# 사용 예시
bot = ToolChainBot()
report = await bot.research_and_report(
    "인공지능 최신 동향",
    language="ko"
)
```

**🌳 중급자용 - 동적 도구 선택**
```python
# 레벨 3: AI가 스스로 도구 선택
from typing import List, Dict, Any
import inspect

class Tool:
    """도구 베이스 클래스"""
    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description

    def get_schema(self) -> Dict:
        """도구 사용법 스키마 반환"""
        return {
            "name": self.name,
            "description": self.description,
            "parameters": self._extract_parameters()
        }

    def _extract_parameters(self):
        """함수 파라미터 자동 추출"""
        sig = inspect.signature(self.execute)
        params = {}
        for name, param in sig.parameters.items():
            if name != 'self':
                params[name] = {
                    "type": param.annotation.__name__
                    if param.annotation != inspect.Parameter.empty
                    else "string",
                    "required": param.default == inspect.Parameter.empty
                }
        return params

class SmartToolAgent:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.tools: Dict[str, Tool] = {}

    def register_tool(self, tool: Tool):
        """도구 등록"""
        self.tools[tool.name] = tool

    async def process(self, user_query: str) -> Any:
        """사용자 쿼리 처리 - AI가 도구 선택"""

        # 1. 사용 가능한 도구 목록 생성
        tools_desc = self._format_tools_description()

        # 2. AI에게 도구 선택 요청
        tool_selection = await self._select_tools(
            user_query,
            tools_desc
        )

        # 3. 선택된 도구들 실행
        results = []
        for tool_call in tool_selection:
            tool_name = tool_call['tool']
            params = tool_call['parameters']

            if tool_name in self.tools:
                tool = self.tools[tool_name]
                result = await tool.execute(**params)
                results.append({
                    'tool': tool_name,
                    'result': result
                })

        # 4. 결과 종합
        final_response = await self._synthesize_results(
            user_query,
            results
        )

        return final_response

    async def _select_tools(
        self,
        query: str,
        tools_desc: str
    ) -> List[Dict]:
        """AI가 필요한 도구 선택"""
        prompt = f"""
        사용자 요청: {query}

        사용 가능한 도구:
        {tools_desc}

        이 요청을 처리하기 위해 필요한 도구와 파라미터를 선택하세요.
        여러 도구를 순서대로 사용할 수 있습니다.

        JSON 배열 형식으로 답하세요:
        [
            {{
                "tool": "도구이름",
                "parameters": {{...}},
                "reason": "선택 이유"
            }}
        ]
        """

        response = await self.llm.generate(prompt)
        return json.loads(response)

# 실제 도구 구현 예시
class WebSearchTool(Tool):
    def __init__(self):
        super().__init__(
            name="web_search",
            description="웹에서 정보를 검색합니다"
        )

    async def execute(self, query: str, max_results: int = 5) -> List:
        # 실제 검색 API 호출
        results = await search_api.search(query, max_results)
        return results

class DatabaseTool(Tool):
    def __init__(self, connection_string):
        super().__init__(
            name="database",
            description="데이터베이스 쿼리를 실행합니다"
        )
        self.db = Database(connection_string)

    async def execute(self, sql: str) -> List[Dict]:
        return await self.db.query(sql)

# 사용 예시
agent = SmartToolAgent(llm_client)
agent.register_tool(WebSearchTool())
agent.register_tool(DatabaseTool("postgresql://..."))
agent.register_tool(EmailTool())

response = await agent.process(
    "최근 판매 데이터를 분석하고 보고서를 이메일로 보내줘"
)
# AI가 자동으로:
# 1. DatabaseTool로 데이터 조회
# 2. 내장 분석 기능으로 처리
# 3. EmailTool로 전송
```

### 🧩 패턴 6: Planning (계획 수립)
**"목표 달성을 위한 로드맵 만들기"**

#### 📚 초보자 설명
여행 계획처럼:
1. 🎯 목적지 정하기 (목표)
2. 🗺️ 경로 계획 (단계)
3. 🎒 준비물 챙기기 (자원)
4. 🚗 출발! (실행)

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 단순 계획**
```python
# 레벨 1: 간단한 단계별 계획
class SimplePlanner:
    def make_plan(self, goal):
        """목표에 따른 계획 생성"""
        if goal == "웹사이트 만들기":
            return [
                "1. 요구사항 분석",
                "2. 디자인 스케치",
                "3. HTML/CSS 코딩",
                "4. JavaScript 추가",
                "5. 테스트",
                "6. 배포"
            ]
        elif goal == "앱 개발":
            return [
                "1. 아이디어 구체화",
                "2. 화면 설계",
                "3. 백엔드 구축",
                "4. 프론트엔드 개발",
                "5. 통합 테스트",
                "6. 출시"
            ]

    def execute_plan(self, plan):
        """계획 실행"""
        for step in plan:
            print(f"실행 중: {step}")
            # 실제 작업 수행
            self.do_work(step)
            print(f"✅ 완료: {step}")

planner = SimplePlanner()
plan = planner.make_plan("웹사이트 만들기")
planner.execute_plan(plan)
```

**🌿 초급자용 - 동적 계획**
```python
# 레벨 2: 상황에 맞는 계획 생성
class DynamicPlanner:
    def __init__(self):
        self.task_templates = {
            "research": ["조사", "분석", "정리", "보고"],
            "development": ["설계", "구현", "테스트", "배포"],
            "learning": ["개념 이해", "실습", "프로젝트", "복습"]
        }

    def create_plan(self, goal, context):
        """목표와 맥락 기반 계획 생성"""
        plan = Plan(goal)

        # 목표 분석
        task_type = self.analyze_goal(goal)
        template = self.task_templates.get(task_type, [])

        # 맥락 반영
        for step_template in template:
            step = self.customize_step(step_template, context)
            plan.add_step(step)

        # 시간 및 리소스 할당
        plan.allocate_resources(context.get("resources", {}))
        plan.estimate_time()

        return plan

    def analyze_goal(self, goal):
        """목표 유형 분석"""
        if "조사" in goal or "분석" in goal:
            return "research"
        elif "개발" in goal or "구축" in goal:
            return "development"
        elif "배우" in goal or "학습" in goal:
            return "learning"
        return "general"

    def customize_step(self, template, context):
        """단계를 맥락에 맞게 커스터마이즈"""
        step = Step(template)

        if context.get("deadline"):
            step.set_deadline(context["deadline"])

        if context.get("team_size"):
            step.assign_resources(context["team_size"])

        return step

class Plan:
    def __init__(self, goal):
        self.goal = goal
        self.steps = []
        self.total_time = 0

    def add_step(self, step):
        self.steps.append(step)

    def allocate_resources(self, resources):
        """리소스 할당"""
        for step in self.steps:
            step.resources = resources.get(step.name, {})

    def estimate_time(self):
        """시간 추정"""
        self.total_time = sum(step.estimated_time for step in self.steps)

# 사용 예시
planner = DynamicPlanner()
context = {
    "deadline": "2024-12-31",
    "team_size": 3,
    "resources": {"budget": 10000}
}
plan = planner.create_plan("AI 챗봇 개발", context)
```

**🌳 중급자용 - AI 기반 계획**
```python
# 레벨 3: AI가 스스로 계획 수립 및 조정
class AIPlanner:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.execution_history = []

    async def plan_and_execute(self, goal: str, constraints: Dict):
        """목표 달성을 위한 계획 수립 및 실행"""

        # 1. 초기 계획 생성
        initial_plan = await self.generate_plan(goal, constraints)

        # 2. 계획 검증
        validation = await self.validate_plan(initial_plan)

        if not validation['is_valid']:
            # 3. 문제점 기반 재계획
            initial_plan = await self.revise_plan(
                initial_plan,
                validation['issues']
            )

        # 4. 적응형 실행
        results = await self.adaptive_execution(initial_plan)

        return {
            'goal': goal,
            'plan': initial_plan,
            'execution_results': results,
            'success': self.evaluate_success(results, goal)
        }

    async def generate_plan(self, goal: str, constraints: Dict) -> Dict:
        """AI로 계획 생성"""
        prompt = f"""
        목표: {goal}
        제약사항: {json.dumps(constraints, ensure_ascii=False)}

        이 목표를 달성하기 위한 상세한 계획을 수립하세요.

        다음 형식으로 답하세요:
        {{
            "steps": [
                {{
                    "id": "step_1",
                    "action": "구체적인 행동",
                    "dependencies": [],
                    "estimated_time": "1h",
                    "required_resources": [],
                    "success_criteria": "완료 기준"
                }}
            ],
            "total_estimated_time": "총 시간",
            "critical_path": ["중요 경로의 step_id들"],
            "risk_factors": ["잠재적 위험"],
            "fallback_strategies": {{}}
        }}
        """

        response = await self.llm.generate(prompt)
        return json.loads(response)

    async def adaptive_execution(self, plan: Dict) -> List[Dict]:
        """적응형 계획 실행"""
        results = []
        executed_steps = set()

        while len(executed_steps) < len(plan['steps']):
            # 실행 가능한 단계 찾기
            ready_steps = self.find_ready_steps(
                plan['steps'],
                executed_steps
            )

            if not ready_steps:
                # 교착 상태 해결
                await self.resolve_deadlock(plan, executed_steps)
                continue

            # 병렬 실행 가능한 단계들 동시 실행
            step_results = await asyncio.gather(*[
                self.execute_step(step)
                for step in ready_steps
            ])

            # 결과 처리 및 계획 조정
            for step, result in zip(ready_steps, step_results):
                results.append(result)
                executed_steps.add(step['id'])

                if not result['success']:
                    # 실패 시 재계획
                    plan = await self.replan_on_failure(
                        plan,
                        step,
                        result['error']
                    )

        return results

    def find_ready_steps(self, steps, executed):
        """실행 가능한 단계 찾기"""
        ready = []
        for step in steps:
            if step['id'] not in executed:
                deps = set(step.get('dependencies', []))
                if deps.issubset(executed):
                    ready.append(step)
        return ready

    async def replan_on_failure(self, plan, failed_step, error):
        """실패 시 재계획"""
        prompt = f"""
        실행 중 실패 발생:
        실패한 단계: {json.dumps(failed_step)}
        에러: {error}
        현재 계획: {json.dumps(plan)}

        대체 계획을 제시하세요.
        """

        new_plan = await self.llm.generate(prompt)
        return json.loads(new_plan)

# 실제 사용 예시
planner = AIPlanner(llm_client)
result = await planner.plan_and_execute(
    goal="고객 서비스 챗봇 구축",
    constraints={
        "budget": 50000,
        "deadline": "2024-06-01",
        "team_size": 2,
        "tech_stack": ["Python", "FastAPI", "PostgreSQL"]
    }
)

print(f"계획: {result['plan']}")
print(f"실행 결과: {result['execution_results']}")
print(f"성공 여부: {result['success']}")
```

### 🧩 패턴 7: Multi-Agent (다중 에이전트)
**"팀워크로 문제 해결하기"**

#### 📚 초보자 설명
회사처럼:
- 👔 CEO: 전체 방향 결정
- 💼 관리자: 작업 분배
- 👷 직원들: 실제 작업
- 📊 분석가: 결과 검토

여러 AI가 **각자의 역할**을 맡아 협업!

#### 💻 코드 예시 (수준별)

**🌱 입문자용 - 간단한 협업**
```python
# 레벨 1: 기본 멀티 에이전트
class SimpleMultiAgent:
    def __init__(self):
        # 각 에이전트 정의
        self.researcher = ResearchAgent()
        self.writer = WriterAgent()
        self.editor = EditorAgent()

    def create_article(self, topic):
        """기사 작성 - 3개 에이전트 협업"""

        # 1. 연구원이 자료 수집
        print("🔍 연구원: 자료 수집 중...")
        research_data = self.researcher.gather_info(topic)

        # 2. 작가가 초안 작성
        print("✍️ 작가: 글 작성 중...")
        draft = self.writer.write_draft(research_data)

        # 3. 편집자가 검토 및 수정
        print("📝 편집자: 검토 및 수정 중...")
        final_article = self.editor.edit(draft)

        return final_article

class ResearchAgent:
    def gather_info(self, topic):
        # 실제로는 웹 검색, DB 조회 등
        return f"{topic}에 대한 연구 자료..."

class WriterAgent:
    def write_draft(self, research):
        return f"제목: ...\n\n본문: {research}를 바탕으로..."

class EditorAgent:
    def edit(self, draft):
        return draft.replace("...", "[수정됨]")

# 사용
team = SimpleMultiAgent()
article = team.create_article("AI의 미래")
```

**🌿 초급자용 - 메시지 기반 협업**
```python
# 레벨 2: 메시지 전달 시스템
from queue import Queue
from threading import Thread

class Agent:
    def __init__(self, name, role):
        self.name = name
        self.role = role
        self.inbox = Queue()
        self.running = True

    def send_message(self, recipient, message):
        """다른 에이전트에게 메시지 전송"""
        recipient.inbox.put({
            'from': self.name,
            'content': message
        })

    def process_messages(self):
        """받은 메시지 처리"""
        while self.running:
            if not self.inbox.empty():
                message = self.inbox.get()
                self.handle_message(message)

    def handle_message(self, message):
        """메시지 처리 (하위 클래스에서 구현)"""
        pass

class ProjectManager(Agent):
    def __init__(self):
        super().__init__("PM", "프로젝트 관리")
        self.team = {}

    def add_team_member(self, agent):
        self.team[agent.name] = agent

    def assign_task(self, task):
        """작업 분배"""
        if "개발" in task:
            self.send_message(self.team["Developer"], task)
        elif "디자인" in task:
            self.send_message(self.team["Designer"], task)
        elif "테스트" in task:
            self.send_message(self.team["Tester"], task)

    def handle_message(self, message):
        if "완료" in message['content']:
            print(f"✅ {message['from']}가 작업 완료!")
            # 다음 작업 할당
            self.assign_next_task()

class Developer(Agent):
    def __init__(self):
        super().__init__("Developer", "개발")

    def handle_message(self, message):
        print(f"💻 개발자: {message['content']} 작업 중...")
        # 작업 수행
        result = self.do_development(message['content'])
        # 완료 보고
        self.send_message(message['from'], f"개발 완료: {result}")

# 팀 구성 및 실행
pm = ProjectManager()
dev = Developer()
designer = Designer()
tester = Tester()

pm.add_team_member(dev)
pm.add_team_member(designer)
pm.add_team_member(tester)

# 프로젝트 시작
pm.assign_task("로그인 기능 개발")
```

**🌳 중급자용 - 자율 협업 시스템**
```python
# 레벨 3: 고급 멀티 에이전트 시스템
import asyncio
from enum import Enum
from typing import Dict, List, Any, Optional
from dataclasses import dataclass

class AgentRole(Enum):
    COORDINATOR = "coordinator"
    SPECIALIST = "specialist"
    REVIEWER = "reviewer"
    EXECUTOR = "executor"

@dataclass
class Task:
    id: str
    description: str
    required_skills: List[str]
    priority: int
    dependencies: List[str]
    status: str = "pending"
    assigned_to: Optional[str] = None
    result: Optional[Any] = None

class AutonomousAgent:
    def __init__(self, agent_id: str, role: AgentRole, skills: List[str]):
        self.id = agent_id
        self.role = role
        self.skills = skills
        self.task_queue = asyncio.Queue()
        self.knowledge_base = {}
        self.llm_client = None  # LLM 연결

    async def think(self, context: Dict) -> Dict:
        """상황 분석 및 의사결정"""
        prompt = f"""
        에이전트 역할: {self.role.value}
        전문 분야: {self.skills}
        현재 상황: {context}

        다음 행동을 결정하세요.
        """

        decision = await self.llm_client.generate(prompt)
        return json.loads(decision)

    async def collaborate(self, other_agents: List['AutonomousAgent'], task: Task):
        """다른 에이전트와 협업"""
        # 필요한 전문가 찾기
        experts = self.find_experts(other_agents, task.required_skills)

        if not experts:
            return await self.handle_solo(task)

        # 협업 전략 수립
        strategy = await self.plan_collaboration(task, experts)

        # 작업 분배
        subtasks = await self.decompose_task(task, strategy)

        # 비동기 협업 실행
        results = await asyncio.gather(*[
            expert.execute_subtask(subtask)
            for expert, subtask in zip(experts, subtasks)
        ])

        # 결과 통합
        return await self.integrate_results(results)

    def find_experts(self, agents: List['AutonomousAgent'], skills: List[str]):
        """필요한 기술을 가진 전문가 찾기"""
        experts = []
        for skill in skills:
            for agent in agents:
                if skill in agent.skills and agent not in experts:
                    experts.append(agent)
                    break
        return experts

class MultiAgentSystem:
    def __init__(self):
        self.agents: Dict[str, AutonomousAgent] = {}
        self.task_pool: List[Task] = []
        self.communication_bus = asyncio.Queue()

    def add_agent(self, agent: AutonomousAgent):
        """에이전트 추가"""
        self.agents[agent.id] = agent

    async def solve_problem(self, problem: str) -> Dict:
        """문제 해결 - 전체 시스템 조율"""

        # 1. 문제 분석 및 작업 분해
        tasks = await self.decompose_problem(problem)

        # 2. 조율자 선출
        coordinator = self.elect_coordinator()

        # 3. 작업 할당 전략 수립
        allocation = await coordinator.plan_allocation(tasks, self.agents)

        # 4. 병렬 작업 실행
        results = []
        for task in tasks:
            assigned_agents = allocation[task.id]

            if len(assigned_agents) > 1:
                # 협업 필요
                result = await self.collaborative_execution(
                    task,
                    assigned_agents
                )
            else:
                # 단독 실행
                result = await assigned_agents[0].execute(task)

            results.append(result)

            # 중간 결과 공유
            await self.broadcast_progress(task, result)

        # 5. 최종 결과 통합
        final_result = await self.synthesize_results(results)

        return {
            'problem': problem,
            'solution': final_result,
            'agents_involved': [a.id for a in self.agents.values()],
            'tasks_completed': len(tasks)
        }

    async def collaborative_execution(
        self,
        task: Task,
        agents: List[AutonomousAgent]
    ):
        """협업 실행 관리"""

        # 리더 선출
        leader = self.select_leader(agents, task)

        # 리더가 작업 조율
        subtasks = await leader.decompose_for_team(task, agents)

        # 동시 실행
        async def execute_with_communication(agent, subtask):
            result = await agent.execute(subtask)

            # 진행 상황 공유
            await self.communication_bus.put({
                'agent': agent.id,
                'subtask': subtask.id,
                'status': 'completed',
                'result': result
            })

            return result

        results = await asyncio.gather(*[
            execute_with_communication(agent, subtask)
            for agent, subtask in zip(agents, subtasks)
        ])

        # 리더가 결과 검증 및 통합
        return await leader.validate_and_integrate(results)

    async def broadcast_progress(self, task: Task, result: Any):
        """진행 상황 전파"""
        message = {
            'type': 'progress',
            'task': task.id,
            'status': task.status,
            'result': result
        }

        # 모든 에이전트에게 전달
        for agent in self.agents.values():
            await agent.receive_update(message)

# 실제 사용 예시
async def main():
    # 멀티 에이전트 시스템 구성
    system = MultiAgentSystem()

    # 다양한 전문가 에이전트 추가
    system.add_agent(AutonomousAgent(
        "architect",
        AgentRole.SPECIALIST,
        ["system_design", "architecture"]
    ))
    system.add_agent(AutonomousAgent(
        "backend_dev",
        AgentRole.EXECUTOR,
        ["python", "database", "api"]
    ))
    system.add_agent(AutonomousAgent(
        "frontend_dev",
        AgentRole.EXECUTOR,
        ["javascript", "react", "ui"]
    ))
    system.add_agent(AutonomousAgent(
        "qa_engineer",
        AgentRole.REVIEWER,
        ["testing", "quality_assurance"]
    ))

    # 복잡한 문제 해결
    result = await system.solve_problem(
        "전자상거래 플랫폼 구축"
    )

    print(f"해결책: {result['solution']}")
    print(f"참여 에이전트: {result['agents_involved']}")

asyncio.run(main())
```

---

## 초보자를 위한 단계별 실습

### 🎓 레벨 1: Hello Agent! (첫 번째 에이전트)

```python
# step1_hello_agent.py
"""
목표: 가장 간단한 AI 에이전트 만들기
시간: 10분
"""

class MyFirstAgent:
    def __init__(self, name):
        self.name = name
        self.memory = []  # 기억 저장소

    def listen(self, user_input):
        """사용자 입력 듣기"""
        self.memory.append(user_input)
        return f"{self.name}이(가) 들었습니다: {user_input}"

    def think(self):
        """생각하기 (간단한 처리)"""
        if self.memory:
            last_input = self.memory[-1]
            if "안녕" in last_input:
                return "인사"
            elif "?" in last_input:
                return "질문"
            else:
                return "일반"
        return "없음"

    def respond(self):
        """응답하기"""
        thought = self.think()

        responses = {
            "인사": "안녕하세요! 반갑습니다 😊",
            "질문": "좋은 질문이네요! 함께 생각해봐요.",
            "일반": "흥미롭네요. 더 말씀해주세요.",
            "없음": "무엇을 도와드릴까요?"
        }

        return responses.get(thought, "이해하지 못했습니다.")

# 실습하기
agent = MyFirstAgent("도우미")

print(agent.listen("안녕하세요!"))
print(agent.respond())

print(agent.listen("오늘 날씨 어때?"))
print(agent.respond())

# 도전 과제:
# 1. 에이전트가 사용자 이름을 기억하게 만들기
# 2. 대화 맥락을 이해하게 만들기
# 3. 감정을 표현하게 만들기
```

### 🎓 레벨 2: 체인 만들기 (작업 연결)

```python
# step2_chain_agent.py
"""
목표: 여러 단계를 연결하는 에이전트
시간: 20분
"""

class ChainAgent:
    def __init__(self):
        self.steps = []
        self.results = {}

    def add_step(self, name, function):
        """단계 추가"""
        self.steps.append({
            'name': name,
            'function': function
        })
        return self

    def execute(self, initial_input):
        """체인 실행"""
        current_data = initial_input

        print("🚀 체인 시작!")
        print("-" * 30)

        for i, step in enumerate(self.steps, 1):
            print(f"Step {i}: {step['name']}")

            try:
                # 이전 결과를 다음 단계로 전달
                current_data = step['function'](current_data)
                self.results[step['name']] = current_data
                print(f"✅ 결과: {current_data[:50]}...")  # 처음 50자만
            except Exception as e:
                print(f"❌ 오류 발생: {e}")
                break

            print("-" * 30)

        print("🎉 체인 완료!")
        return current_data

# 실습: 블로그 포스트 생성 체인
def generate_title(topic):
    """제목 생성"""
    return f"초보자를 위한 {topic} 완벽 가이드"

def create_outline(title):
    """개요 작성"""
    return f"""
    제목: {title}

    1. 서론
    2. 기본 개념
    3. 실습 예제
    4. 활용 방법
    5. 결론
    """

def write_intro(outline):
    """서론 작성"""
    return f"""
    {outline}

    서론:
    이 글에서는 초보자도 쉽게 이해할 수 있도록...
    """

def add_examples(content):
    """예제 추가"""
    return f"""
    {content}

    예제 1: Hello World
    예제 2: 실전 활용
    """

# 체인 구성 및 실행
blog_chain = ChainAgent()
blog_chain.add_step("제목 생성", generate_title) \
          .add_step("개요 작성", create_outline) \
          .add_step("서론 작성", write_intro) \
          .add_step("예제 추가", add_examples)

result = blog_chain.execute("Python")
print("\n최종 결과:")
print(result)

# 도전 과제:
# 1. 에러 발생 시 재시도 기능 추가
# 2. 각 단계 실행 시간 측정
# 3. 중간 결과 저장 기능
```

### 🎓 레벨 3: 도구 사용 에이전트

```python
# step3_tool_agent.py
"""
목표: 도구를 사용하는 똑똑한 에이전트
시간: 30분
"""

import random
import json
from datetime import datetime

class ToolAgent:
    def __init__(self, name):
        self.name = name
        self.tools = {}

    def register_tool(self, tool_name, tool_function, description):
        """도구 등록"""
        self.tools[tool_name] = {
            'function': tool_function,
            'description': description
        }
        print(f"🔧 도구 등록: {tool_name}")

    def list_tools(self):
        """사용 가능한 도구 목록"""
        print(f"\n📦 {self.name}의 도구상자:")
        for name, tool in self.tools.items():
            print(f"  - {name}: {tool['description']}")

    def use_tool(self, tool_name, *args, **kwargs):
        """도구 사용"""
        if tool_name not in self.tools:
            return f"❌ 도구 '{tool_name}'을 찾을 수 없습니다."

        try:
            result = self.tools[tool_name]['function'](*args, **kwargs)
            return f"✅ {tool_name} 결과: {result}"
        except Exception as e:
            return f"❌ 오류: {e}"

    def auto_select_tool(self, task):
        """작업에 맞는 도구 자동 선택"""
        task_lower = task.lower()

        # 간단한 키워드 매칭
        if "계산" in task_lower or "+" in task_lower or "-" in task_lower:
            return "calculator"
        elif "날씨" in task_lower:
            return "weather"
        elif "시간" in task_lower or "몇시" in task_lower:
            return "clock"
        elif "주사위" in task_lower or "랜덤" in task_lower:
            return "dice"
        else:
            return None

    def process_task(self, task):
        """작업 처리"""
        print(f"\n📋 작업: {task}")

        # 적절한 도구 선택
        tool = self.auto_select_tool(task)

        if tool:
            print(f"🎯 선택된 도구: {tool}")

            # 도구별 파라미터 추출 (실제로는 더 정교하게)
            if tool == "calculator":
                # 간단한 계산식 추출
                import re
                numbers = re.findall(r'\d+', task)
                if len(numbers) >= 2:
                    return self.use_tool(tool, int(numbers[0]), int(numbers[1]))
            else:
                return self.use_tool(tool)
        else:
            return "🤔 이 작업에 적합한 도구를 찾지 못했습니다."

# 도구 함수들
def calculator(a, b, operation="+"):
    """계산기"""
    ops = {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b if b != 0 else "0으로 나눌 수 없음"
    }
    return ops.get(operation, a + b)

def weather_tool():
    """날씨 정보 (시뮬레이션)"""
    weathers = ["맑음 ☀️", "흐림 ☁️", "비 🌧️", "눈 ❄️"]
    temp = random.randint(10, 30)
    return f"{random.choice(weathers)}, {temp}도"

def clock_tool():
    """현재 시간"""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def dice_tool(sides=6):
    """주사위 던지기"""
    return f"🎲 {random.randint(1, sides)}"

# 에이전트 생성 및 도구 등록
agent = ToolAgent("똑똑이")

agent.register_tool("calculator", calculator, "숫자 계산")
agent.register_tool("weather", weather_tool, "날씨 확인")
agent.register_tool("clock", clock_tool, "현재 시간")
agent.register_tool("dice", dice_tool, "주사위 던지기")

# 도구 목록 확인
agent.list_tools()

# 다양한 작업 처리
tasks = [
    "10 + 20 계산해줘",
    "지금 몇시야?",
    "오늘 날씨 어때?",
    "주사위 던져줘",
    "이메일 보내기"  # 도구 없음
]

for task in tasks:
    result = agent.process_task(task)
    print(f"결과: {result}\n")

# 도전 과제:
# 1. 새로운 도구 추가 (번역기, 검색 등)
# 2. 여러 도구를 조합해서 사용
# 3. 도구 사용 기록 저장
```

---

## 실전 프로젝트 - 나만의 AI 비서 만들기

### 🚀 프로젝트: 개인 업무 도우미 에이전트

```python
# personal_assistant.py
"""
실전 프로젝트: 모든 패턴을 활용한 개인 비서
- 일정 관리
- 작업 자동화
- 정보 검색
- 리마인더
"""

import asyncio
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class PersonalAssistant:
    def __init__(self, user_name):
        self.user_name = user_name
        self.memory = []  # 대화 기록
        self.tasks = []   # 할 일 목록
        self.schedule = {}  # 일정
        self.tools = self._initialize_tools()
        self.agents = self._initialize_agents()

    def _initialize_tools(self):
        """도구 초기화"""
        return {
            'calendar': CalendarTool(),
            'todo': TodoTool(),
            'search': SearchTool(),
            'reminder': ReminderTool(),
            'email': EmailTool()
        }

    def _initialize_agents(self):
        """전문 에이전트 초기화"""
        return {
            'scheduler': SchedulerAgent(),
            'researcher': ResearchAgent(),
            'writer': WriterAgent(),
            'analyzer': AnalyzerAgent()
        }

    async def process_command(self, command: str):
        """명령 처리 - 라우팅 패턴"""

        # 1. 의도 파악
        intent = self.analyze_intent(command)

        # 2. 적절한 처리 방법 선택
        if intent == 'schedule':
            return await self.handle_schedule(command)
        elif intent == 'task':
            return await self.handle_task(command)
        elif intent == 'search':
            return await self.handle_search(command)
        elif intent == 'complex':
            return await self.handle_complex(command)
        else:
            return await self.handle_general(command)

    def analyze_intent(self, command: str) -> str:
        """의도 분석"""
        command_lower = command.lower()

        schedule_keywords = ['일정', '약속', '미팅', '회의']
        task_keywords = ['할일', '작업', 'todo', '해야']
        search_keywords = ['검색', '찾아', '알려줘', '뭐야']

        if any(k in command_lower for k in schedule_keywords):
            return 'schedule'
        elif any(k in command_lower for k in task_keywords):
            return 'task'
        elif any(k in command_lower for k in search_keywords):
            return 'search'
        elif len(command.split()) > 10:  # 복잡한 요청
            return 'complex'
        else:
            return 'general'

    async def handle_complex(self, command: str):
        """복잡한 작업 처리 - 멀티 에이전트 + 병렬 처리"""

        print("🤖 복잡한 작업 감지. 팀 구성 중...")

        # 작업 분해 (Planning 패턴)
        subtasks = self.decompose_task(command)

        # 병렬 처리 (Parallelization 패턴)
        results = await asyncio.gather(*[
            self.process_subtask(subtask)
            for subtask in subtasks
        ])

        # 결과 통합 및 검증 (Reflection 패턴)
        final_result = self.integrate_and_validate(results)

        return final_result

    def decompose_task(self, command: str) -> List[Dict]:
        """작업 분해"""
        # 실제로는 AI를 사용하여 더 정교하게
        subtasks = []

        if "보고서" in command:
            subtasks = [
                {'type': 'research', 'topic': '주제 조사'},
                {'type': 'write', 'content': '초안 작성'},
                {'type': 'review', 'target': '검토 및 수정'}
            ]
        elif "분석" in command:
            subtasks = [
                {'type': 'collect', 'data': '데이터 수집'},
                {'type': 'analyze', 'method': '분석 실행'},
                {'type': 'visualize', 'format': '시각화'}
            ]

        return subtasks

    async def process_subtask(self, subtask: Dict):
        """하위 작업 처리"""
        task_type = subtask.get('type')

        if task_type == 'research':
            return await self.agents['researcher'].research(subtask)
        elif task_type == 'write':
            return await self.agents['writer'].write(subtask)
        elif task_type == 'analyze':
            return await self.agents['analyzer'].analyze(subtask)
        else:
            return f"처리됨: {subtask}"

    def integrate_and_validate(self, results: List) -> str:
        """결과 통합 및 검증"""
        # Reflection 패턴 - 결과 검토
        integrated = "\n".join(str(r) for r in results)

        # 자기 검증
        issues = self.validate_results(integrated)

        if issues:
            # 문제 발견 시 개선
            integrated = self.improve_results(integrated, issues)

        return f"""
        ✅ 작업 완료!

        {integrated}

        처리된 하위 작업: {len(results)}개
        """

    def validate_results(self, results: str) -> List[str]:
        """결과 검증"""
        issues = []

        if len(results) < 50:
            issues.append("내용이 너무 짧음")

        # 추가 검증 로직...

        return issues

    def improve_results(self, results: str, issues: List[str]) -> str:
        """결과 개선"""
        improved = results

        for issue in issues:
            if "짧음" in issue:
                improved += "\n\n[추가 내용...]"

        return improved

# 전문 에이전트들
class SchedulerAgent:
    """일정 관리 전문 에이전트"""

    async def schedule(self, task):
        # 일정 최적화 로직
        return f"일정 등록: {task}"

class ResearchAgent:
    """조사 전문 에이전트"""

    async def research(self, topic):
        # 실제로는 웹 검색, DB 조회 등
        await asyncio.sleep(1)  # 시뮬레이션
        return f"조사 완료: {topic}"

class WriterAgent:
    """작성 전문 에이전트"""

    async def write(self, content):
        await asyncio.sleep(1)
        return f"작성 완료: {content}"

class AnalyzerAgent:
    """분석 전문 에이전트"""

    async def analyze(self, data):
        await asyncio.sleep(1)
        return f"분석 완료: {data}"

# 도구들
class CalendarTool:
    def add_event(self, event):
        return f"📅 일정 추가: {event}"

class TodoTool:
    def add_task(self, task):
        return f"✅ 할일 추가: {task}"

class SearchTool:
    def search(self, query):
        return f"🔍 검색 결과: {query}"

class ReminderTool:
    def set_reminder(self, reminder):
        return f"⏰ 리마인더 설정: {reminder}"

class EmailTool:
    def send(self, email):
        return f"📧 이메일 전송: {email}"

# 실제 사용
async def main():
    # 비서 생성
    assistant = PersonalAssistant("사용자")

    # 다양한 명령 처리
    commands = [
        "내일 오후 2시에 회의 일정 잡아줘",
        "Python 공부하기를 할일 목록에 추가해",
        "AI 에이전트에 대해 검색해줘",
        "다음 주 프로젝트 진행 상황 보고서를 작성하고 팀원들에게 이메일로 보내줘"
    ]

    for cmd in commands:
        print(f"\n👤 사용자: {cmd}")
        result = await assistant.process_command(cmd)
        print(f"🤖 비서: {result}")

# 실행
if __name__ == "__main__":
    asyncio.run(main())
```

---

## 용어 사전 - 어려운 말 쉽게 이해하기

### 📚 핵심 용어 설명

| 용어 | 어려운 설명 | 쉬운 설명 | 비유 |
|------|------------|----------|------|
| **Agent (에이전트)** | 자율적으로 작동하는 AI 시스템 | 스스로 판단하고 행동하는 AI | 🤖 로봇 비서 |
| **LLM** | Large Language Model | 많이 학습한 AI 언어 모델 | 📚 백과사전을 다 외운 친구 |
| **Prompt** | AI에게 주는 명령이나 질문 | AI와 대화하는 방법 | 💬 말 걸기 |
| **Chain** | 순차적 처리 파이프라인 | 작업을 순서대로 연결 | 🔗 도미노 |
| **Routing** | 조건부 분기 처리 | 상황에 따라 다른 길 선택 | 🚦 교통 신호 |
| **Parallelization** | 병렬 처리 | 여러 일을 동시에 | 🎯 멀티태스킹 |
| **Reflection** | 자기 검토 및 개선 | 스스로 확인하고 고치기 | 🪞 거울 보기 |
| **Tool Use** | 도구 활용 | 필요한 도구 찾아 쓰기 | 🧰 공구상자 |
| **Planning** | 계획 수립 | 미리 계획 세우기 | 📋 여행 일정표 |
| **Multi-Agent** | 다중 에이전트 시스템 | 여러 AI가 협력 | 👥 팀워크 |
| **Context** | 맥락, 문맥 | 대화의 흐름과 상황 | 📖 이야기 배경 |
| **Token** | 텍스트 처리 단위 | AI가 이해하는 글자 조각 | 🧩 퍼즐 조각 |
| **Embedding** | 벡터 변환 | 글을 숫자로 바꾸기 | 🔢 암호화 |
| **Fine-tuning** | 모델 미세 조정 | AI를 특별히 훈련시키기 | 🎯 맞춤 교육 |
| **API** | Application Programming Interface | 프로그램끼리 대화하는 방법 | 📞 전화번호 |
| **Async/Await** | 비동기 처리 | 기다리지 않고 다른 일 하기 | ⏱️ 요리하며 빨래 |
| **Exception** | 예외, 오류 | 뭔가 잘못됐을 때 | ⚠️ 경고등 |
| **Recursion** | 재귀 | 자기 자신을 다시 부르기 | 🔄 마트료시카 인형 |
| **Orchestration** | 오케스트레이션 | 여러 요소를 조화롭게 관리 | 🎼 지휘자 |
| **Pipeline** | 파이프라인 | 데이터가 흐르는 통로 | 🚰 수도관 |
| **Fallback** | 대체 방안 | 실패했을 때 플랜 B | 🪂 예비 낙하산 |

### 💡 자주 나오는 코드 패턴 설명

```python
# 1. async/await - 비동기 처리
async def 함수():
    결과 = await 오래걸리는작업()
    # "오래걸리는작업 끝날 때까지 다른 일 하다가 와"

# 2. try/except - 오류 처리
try:
    위험한_작업()
except:
    안전한_대안()
    # "혹시 실패하면 이렇게 해"

# 3. List Comprehension - 리스트 간단히 만들기
numbers = [x*2 for x in range(10)]
# "0부터 9까지 각각 2배 해서 리스트 만들어"

# 4. Lambda - 간단한 함수
add = lambda x, y: x + y
# "이름 없는 작은 함수"

# 5. *args, **kwargs - 유연한 매개변수
def 함수(*args, **kwargs):
    # args: 개수 모를 때
    # kwargs: 이름 있는 것 받을 때
```

---

## 더 나아가기 - 성장 로드맵

### 🗺️ 학습 경로

#### 📍 1단계: 기초 다지기 (1-2개월)
- [ ] Python 기본 문법
- [ ] 함수와 클래스 이해
- [ ] 기본 데이터 구조
- [ ] 파일 입출력

#### 📍 2단계: AI 기초 (2-3개월)
- [ ] API 사용법 (OpenAI, Claude)
- [ ] 프롬프트 엔지니어링
- [ ] 간단한 챗봇 만들기
- [ ] 기본 패턴 1-2개 구현

#### 📍 3단계: 에이전트 개발 (3-4개월)
- [ ] 모든 패턴 실습
- [ ] 실제 프로젝트 구현
- [ ] 오류 처리 및 최적화
- [ ] 배포 및 운영

#### 📍 4단계: 고급 기술 (지속적)
- [ ] 복잡한 멀티 에이전트
- [ ] 실시간 처리
- [ ] 대규모 시스템
- [ ] 오픈소스 기여

### 📚 추천 학습 자료

#### 온라인 강의
- 🎓 **Coursera**: "AI For Everyone" - Andrew Ng
- 🎓 **Fast.ai**: 실용적인 딥러닝
- 🎓 **유튜브**: "Two Minute Papers" - AI 최신 동향

#### 책
- 📖 **입문**: "점프 투 파이썬"
- 📖 **중급**: "Hands-On Machine Learning"
- 📖 **고급**: "Designing Data-Intensive Applications"

#### 실습 환경
- 💻 **Google Colab**: 무료 클라우드 환경
- 💻 **Replit**: 온라인 코딩 환경
- 💻 **GitHub**: 코드 공유 및 협업

### 🎯 프로젝트 아이디어

#### 초급 프로젝트
1. **일기 작성 도우미**: 매일 질문하고 일기 작성 도움
2. **레시피 추천봇**: 재료 입력하면 요리 추천
3. **공부 도우미**: 문제 내고 설명해주는 선생님 봇

#### 중급 프로젝트
1. **개인 비서**: 일정, 메모, 리마인더 통합 관리
2. **뉴스 요약봇**: 매일 뉴스 수집하고 요약
3. **코드 리뷰어**: 코드 분석하고 개선점 제안

#### 고급 프로젝트
1. **팀 협업 시스템**: 여러 에이전트가 프로젝트 관리
2. **자동 거래 시스템**: 시장 분석 및 자동 거래
3. **교육 플랫폼**: 개인 맞춤형 학습 경로 생성

---

## 마무리 - 당신도 할 수 있습니다!

### 🌟 기억해야 할 핵심

1. **작게 시작하기**: 완벽한 시스템보다 작동하는 프로토타입
2. **실패는 학습**: 오류는 성장의 기회
3. **공유하고 배우기**: 커뮤니티 참여
4. **꾸준한 실습**: 매일 조금씩

### 💬 격려의 말

> "모든 전문가도 한때는 초보자였습니다.
> 중요한 것은 시작하는 용기와 계속하는 끈기입니다.
> 당신의 첫 AI 에이전트가 'Hello World'를 출력하는 순간,
> 당신은 이미 AI 개발자입니다!"

### 🤝 다음 단계

1. 이 노트의 코드를 하나씩 실행해보세요
2. 작은 부분을 수정해보세요
3. 자신만의 아이디어를 추가해보세요
4. 만든 것을 공유하고 피드백 받으세요

**행운을 빕니다! 🚀**

---

## 연결된 노트
- [[AI 에이전트 개발 실전 가이드]]
- [[프롬프트 엔지니어링 마스터 클래스]]
- [[Python 프로그래밍 기초]]
- [[LLM API 활용법]]
- [[멀티 에이전트 시스템 설계]]
- [[실전 프로젝트 모음]]

## 참고 자료
- 원본: "Agentic Design Patterns" by Antonio Gulli
- OpenAI Documentation
- LangChain Framework
- AutoGen Microsoft
- Claude API Documentation

---

*마지막 업데이트: 2025-10-11*
*작성자: Claude AI Assistant*
*검토 및 피드백 환영: [GitHub Issues]*