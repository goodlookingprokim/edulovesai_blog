---
title: "금융 서비스 AI 에이전트 구축 가이드 - Part 1: 기초편"
created: '2025-11-16'
last_modified: '2025-11-16'
tags:
  - AI/에이전트
  - 금융서비스/AI
  - Anthropic/Claude
  - AWS/Bedrock
  - 초보자가이드
  - 파인만기법
status: "완료"
type: "학습가이드"
priority: "high"
source: "ANTH-2551_Anthropic_AWS_FinServ_Agents_ebook_092325.pdf"
---

# 금융 서비스 AI 에이전트 구축 가이드 - Part 1: 기초편

> **🎯 이 가이드의 목표**: 초보 개발자도 금융권 AI 에이전트를 이해하고 구축할 수 있도록 돕습니다.
> **📚 학습 방식**: 파인만 기법 + 스토리텔링 + 3단계 예제 (기초→중급→고급)

---

## 📋 목차

### Part 1: 기초편 (현재 문서)
1. [[#AI 에이전트란 무엇인가요]]
2. [[#금융 기관에 AI 에이전트가 필요한 이유]]
3. [[#Claude와 AWS가 만나면 생기는 일]]
4. [[#금융권 AI 활용 사례]]
5. [[#용어 사전 (Glossary)]]

### Part 2: 실전편 (별도 문서)
- 아키텍처 패턴과 시스템 설계
- 구현 로드맵과 타임라인
- 팀 구성과 역할
- 실제 성공 사례 분석

---

## AI 에이전트란 무엇인가요?

### 🌱 일상 비유로 이해하기

AI 에이전트를 **"디지털 비서"**로 생각해보세요. 

예를 들어볼까요?

**일반 챗봇 (단순 응답기)**
```
사용자: "내 계좌 잔액 알려줘"
챗봇: "계좌 조회는 앱에서 직접 확인해주세요!"
→ 정보만 전달하고 끝
```

**AI 에이전트 (자율 실행자)**
```
사용자: "내 계좌 잔액 알려줘"
AI 에이전트:
  1. 은행 시스템에 접속 (도구 사용)
  2. 사용자 계좌 확인
  3. 잔액 조회
  4. "현재 잔액은 1,234,500원입니다. 
      이번 달 지출이 평소보다 20% 높네요. 
      절약 팁을 알려드릴까요?"
→ 스스로 판단하고 행동
```

### 💡 핵심 차이점

| 구분 | 챗봇 | AI 에이전트 |
|------|------|-------------|
| **역할** | 안내원 | 실행자 |
| **능력** | 정보 제공 | 작업 수행 |
| **도구 사용** | ❌ | ✅ |
| **학습** | 제한적 | 지속적 |
| **자율성** | 낮음 | 높음 |

### 🔍 왜 "자율적(Autonomous)"인가요?

AI 에이전트는 마치 **숙련된 직원**처럼:
- ✅ **목표를 이해**하고
- ✅ **스스로 계획**을 세우고
- ✅ **도구를 선택**해서
- ✅ **문제를 해결**합니다

---

## 금융 기관에 AI 에이전트가 필요한 이유

### 📖 스토리: 은행원 김민수 씨의 하루

**오전 9시 - 대출 신청서 검토**
```
❌ 기존 방식:
- 신청서 PDF 다운로드 (5분)
- 5개 시스템에 수동으로 정보 입력 (20분)
- 신용점수 조회 (10분)
- 리스크 분석 보고서 작성 (30분)
= 총 65분 소요

✅ AI 에이전트 활용:
- 신청서 자동 분석 (1분)
- 모든 시스템 자동 조회 (2분)
- 리스크 분석 및 보고서 생성 (2분)
= 총 5분 소요 (92% 시간 절약!)
```

### 💰 현재 금융권이 직면한 3가지 문제

#### 1️⃣ **사람들이 반복 작업에 묻혀 있어요**

**문제 상황**
```
상업 대출 한 건을 처리하려면:
├─ 시스템 A: 고객 정보 입력
├─ 시스템 B: 신용 평가
├─ 시스템 C: 담보 확인
├─ 시스템 D: 리스크 분석
└─ 시스템 E: 승인 처리

각 단계마다 사람이 수동으로 데이터를 복사-붙여넣기!
→ 오류 발생, 시간 낭비, 직원 번아웃
```

**AI 에이전트 솔루션**
```python
# 🌱 초보자용 - 개념 설명
"""
AI 에이전트가 모든 시스템을 자동으로 연결합니다.
마치 '디지털 비서'가 여러 앱을 동시에 사용하는 것처럼!
"""

# 🌿 중급 - 실무 패턴
async def process_loan_application(application_id):
    # 1. 고객 정보 자동 수집
    customer_data = await fetch_customer_info(application_id)
    
    # 2. 병렬로 여러 시스템 조회
    credit_score, collateral, risk = await asyncio.gather(
        check_credit(customer_data),
        verify_collateral(customer_data),
        analyze_risk(customer_data)
    )
    
    # 3. 종합 보고서 자동 생성
    return generate_approval_report(credit_score, collateral, risk)

# 🌳 고급 - 최적화 패턴
class LoanProcessingAgent:
    """
    여러 에이전트가 협력하는 고급 패턴
    """
    def __init__(self):
        self.data_agent = DataCollectionAgent()
        self.analysis_agent = RiskAnalysisAgent()
        self.decision_agent = DecisionMakingAgent()
    
    async def process(self, application):
        # 각 에이전트가 전문 영역을 처리
        data = await self.data_agent.collect(application)
        analysis = await self.analysis_agent.evaluate(data)
        decision = await self.decision_agent.decide(analysis)
        
        return decision
```

#### 2️⃣ **고객들이 더 나은 경험을 원해요**

**고객의 기대**
```
"스마트폰으로 식사 비용을 즉시 나눌 수 있는데,
 왜 계좌 개설은 3일이나 걸리나요?"
```

**현실의 문제**
```
전통적인 은행 프로세스:
Day 1: 지점 방문 → 서류 제출
Day 2: 심사 대기
Day 3: 승인 통보
Day 4: 카드 발급
Day 5: 카드 수령

VS.

핀테크 경쟁사:
10분 만에 완료! 📱
```

**AI 에이전트로 경쟁력 확보**
```
실시간 계좌 개설 프로세스:
1. 고객 신원 확인 (AI 얼굴 인식) - 30초
2. 신용 평가 (AI 자동 분석) - 1분
3. 계좌 생성 및 카드 발급 - 2분
4. 모바일 지갑 등록 완료 - 30초

총 4분! ⚡
```

#### 3️⃣ **규제가 점점 복잡해져요**

**규제 준수의 어려움**
```
매년 증가하는 규제:
- KYC (고객 확인) 규정
- AML (자금세탁방지) 규정
- 개인정보보호법
- 금융소비자보호법
- 바젤 III 자본 규제

→ 사람이 모든 규정을 따라가기 불가능
→ 실수 시 수억원 벌금!
```

**AI 에이전트의 역할**
```
✅ 24시간 규정 모니터링
✅ 이상 거래 자동 탐지
✅ 컴플라이언스 보고서 자동 생성
✅ 규정 변경 시 즉시 시스템 업데이트
```

### 🎯 AI 에이전트가 바꾸는 게임의 룰

**핵심 전략: 작게 시작하고, 가치를 증명하고, 확장하기**

```
📍 Phase 1: 파일럿 (2-3개월)
└─ 하나의 고통스러운 문제 선택
   예: 고객 문의 응대 자동화

📍 Phase 2: 확장 (3-6개월)
└─ 성공 사례 기반으로 다른 영역 적용
   예: 대출 심사, 사기 탐지

📍 Phase 3: 전사 적용 (6-12개월)
└─ 여러 에이전트가 협력하는 생태계
   예: 종합 금융 플랫폼
```

---

## Claude와 AWS가 만나면 생기는 일

### 🤔 왜 Claude인가요?

**Claude를 "금융권 전문 AI 컨설턴트"로 생각해보세요**

#### 비유: 신입 직원 vs Claude

| 특성 | 신입 직원 | Claude AI |
|------|-----------|-----------|
| **학습 속도** | 몇 개월 | 즉시 |
| **실수율** | 초기 높음 | 낮고 일정 |
| **규정 이해** | 교육 필요 | 내장됨 |
| **작업 속도** | 시간당 10건 | 시간당 1000건 |
| **설명 능력** | 경험 필요 | 항상 설명 가능 |

#### Claude의 3가지 모델 선택

```
🌱 Claude Haiku (초고속 모델)
용도: 고객 문의 응대, 문서 분류
특징: 빠르고 저렴
예시: "계좌 잔액은 얼마인가요?" → 0.1초 응답

🌿 Claude Sonnet (균형 모델)
용도: 금융 분석, 리스크 평가
특징: 성능과 속도의 균형
예시: 복잡한 대출 심사 → 5초 분석

🌳 Claude Opus (최고 성능 모델)
용도: 종합 투자 전략, 심층 분석
특징: 최고 수준의 추론 능력
예시: 포트폴리오 최적화 → 정교한 분석
```

### 🌿 중급 예제: 모델 선택 가이드

```python
def choose_claude_model(task_type, complexity, budget):
    """
    작업 특성에 따라 적절한 Claude 모델 선택
    """
    if task_type == "customer_service":
        # 고객 서비스: 빠른 응답이 중요
        if complexity == "simple":
            return "claude-3-haiku"  # 간단한 문의
        else:
            return "claude-3-sonnet"  # 복잡한 문제
    
    elif task_type == "financial_analysis":
        # 금융 분석: 정확도가 중요
        if complexity == "high" or budget == "high":
            return "claude-3-opus"  # 최고 성능
        else:
            return "claude-3-sonnet"  # 균형잡힌 선택
    
    elif task_type == "document_processing":
        # 문서 처리: 대량 처리
        return "claude-3-haiku"  # 비용 효율적

# 실제 사용 예시
model = choose_claude_model(
    task_type="financial_analysis",
    complexity="high",
    budget="medium"
)
print(f"선택된 모델: {model}")  # claude-3-sonnet
```

### 🏗️ AWS Bedrock이란?

**비유: AWS Bedrock = "AI 아파트 관리 서비스"**

여러분이 AI 모델(Claude)을 사용하려면:
- ❌ **직접 관리**: 서버 구매, 보안 설정, 업데이트... (복잡!)
- ✅ **Bedrock 사용**: 버튼 클릭으로 즉시 사용 (간단!)

```
AWS Bedrock이 해주는 일:

🔒 보안
└─ 금융 데이터 암호화
└─ 접근 권한 관리
└─ 감사 로그 기록

⚡ 성능
└─ 자동 확장 (사용자 폭증 시)
└─ 글로벌 분산 (빠른 응답)
└─ 고가용성 (99.9% 가동)

💰 비용
└─ 사용한 만큼만 지불
└─ 인프라 관리 비용 제로
└─ 예측 가능한 가격
```

### 🌳 고급 예제: Bedrock 통합 아키텍처

```python
import boto3
import json

class FinancialAgentOrchestrator:
    """
    AWS Bedrock을 활용한 금융 에이전트 오케스트레이터
    """
    def __init__(self):
        self.bedrock = boto3.client('bedrock-runtime')
        self.model_id = 'anthropic.claude-3-sonnet-20240229-v1:0'
    
    async def analyze_loan_application(self, application_data):
        """
        대출 신청서를 종합 분석
        """
        # 1. 프롬프트 구성
        prompt = f"""
        다음 대출 신청서를 분석해주세요:
        
        신청자: {application_data['name']}
        신청 금액: {application_data['amount']:,}원
        소득: {application_data['income']:,}원
        신용점수: {application_data['credit_score']}
        
        다음 항목을 평가해주세요:
        1. 대출 승인 가능성 (%)
        2. 적정 대출 한도
        3. 리스크 요인
        4. 권장 금리
        """
        
        # 2. Bedrock API 호출
        response = self.bedrock.invoke_model(
            modelId=self.model_id,
            contentType='application/json',
            accept='application/json',
            body=json.dumps({
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": 2000,
                "messages": [{
                    "role": "user",
                    "content": prompt
                }]
            })
        )
        
        # 3. 결과 파싱
        result = json.loads(response['body'].read())
        analysis = result['content'][0]['text']
        
        return {
            "analysis": analysis,
            "timestamp": datetime.now(),
            "model": self.model_id,
            "compliance": self.check_compliance(analysis)
        }
    
    def check_compliance(self, analysis):
        """
        규제 준수 여부 확인
        """
        # 금융규제 체크로직
        return {
            "kyc_verified": True,
            "aml_checked": True,
            "gdpr_compliant": True
        }

# 사용 예시
agent = FinancialAgentOrchestrator()

application = {
    "name": "김철수",
    "amount": 50_000_000,
    "income": 60_000_000,
    "credit_score": 780
}

result = await agent.analyze_loan_application(application)
print(result['analysis'])
```

### 🛠️ 추가 도구들

#### 1. **Financial Analysis Solution (FAS)**

```
금융 전문 데이터 연결:
├─ FactSet (시장 데이터)
├─ S&P Capital IQ (기업 정보)
├─ Morningstar (펀드 분석)
├─ Databricks (내부 데이터)
└─ Excel/PowerPoint 자동화

→ "금융 데이터 슈퍼마켓"
```

#### 2. **Model Context Protocol (MCP)**

**비유: MCP = "AI의 USB 포트"**

```
AI 에이전트가 사용할 수 있는 도구:
└─ MCP로 연결
    ├─ 은행 시스템
    ├─ 신용평가 시스템
    ├─ 리스크 관리 시스템
    └─ 고객 관계 관리 (CRM)
```

#### 3. **Strands Agents SDK**

**비유: "AI 에이전트 조립 키트"**

```python
# 🌱 초보자도 쉽게!
from strands import Agent

# 3줄로 에이전트 생성
agent = Agent(
    name="고객지원",
    tools=["계좌조회", "이체실행"],
    model="claude-3-sonnet"
)

agent.run("잔액 확인 후 100만원 이체해줘")
```

---

## 금융권 AI 활용 사례

### 💼 Use Case 1: 사기 탐지 및 예방

#### 📖 스토리: 밤 11시의 이상 거래

```
🕚 23:00 - 수상한 거래 발생
└─ 평소 거래 패턴: 낮 시간, 소액 결제
└─ 이번 거래: 새벽, 해외, 고액 (500만원)

❌ 기존 시스템: 룰 기반
IF (금액 > 100만원) AND (시간 > 22:00) THEN 차단
→ 오탐지 많음 (정상 거래도 차단)

✅ AI 에이전트: 패턴 학습
- 고객의 6개월 거래 이력 분석
- 현재 위치, 시간, 금액 종합 판단
- 실시간 리스크 스코어 계산
→ 정확한 사기 탐지!
```

#### 🌿 중급 예제: 실시간 사기 탐지

```python
import asyncio
from datetime import datetime

class FraudDetectionAgent:
    """
    실시간 사기 거래 탐지 에이전트
    """
    def __init__(self, claude_client, risk_threshold=0.7):
        self.claude = claude_client
        self.threshold = risk_threshold
    
    async def analyze_transaction(self, transaction):
        """
        거래를 실시간으로 분석하여 사기 여부 판단
        """
        # 1. 고객의 거래 이력 조회
        history = await self.get_transaction_history(
            customer_id=transaction['customer_id'],
            days=180  # 6개월
        )
        
        # 2. 다차원 분석
        analysis_tasks = [
            self.check_pattern_anomaly(transaction, history),
            self.check_location_anomaly(transaction, history),
            self.check_amount_anomaly(transaction, history),
            self.check_merchant_risk(transaction)
        ]
        
        results = await asyncio.gather(*analysis_tasks)
        
        # 3. 종합 리스크 스코어 계산
        risk_score = self.calculate_risk_score(results)
        
        # 4. 의사결정
        if risk_score > self.threshold:
            return {
                "decision": "BLOCK",
                "risk_score": risk_score,
                "reason": self.explain_decision(results),
                "recommended_action": "고객 확인 필요"
            }
        else:
            return {
                "decision": "APPROVE",
                "risk_score": risk_score,
                "monitoring": risk_score > 0.5
            }
    
    async def check_pattern_anomaly(self, transaction, history):
        """
        거래 패턴 이상 탐지
        """
        prompt = f"""
        다음 거래가 이상한지 판단해주세요:
        
        현재 거래:
        - 시간: {transaction['time']}
        - 금액: {transaction['amount']:,}원
        - 가맹점: {transaction['merchant']}
        
        최근 6개월 패턴:
        - 평균 거래 시간: 14:00
        - 평균 거래 금액: 50,000원
        - 주요 가맹점: 편의점, 카페
        
        이상 여부와 이유를 설명해주세요.
        """
        
        response = await self.claude.analyze(prompt)
        return response
    
    def calculate_risk_score(self, analysis_results):
        """
        여러 분석 결과를 종합하여 리스크 스코어 계산
        """
        weights = {
            'pattern': 0.3,
            'location': 0.25,
            'amount': 0.25,
            'merchant': 0.2
        }
        
        weighted_score = sum(
            result['score'] * weights[result['type']]
            for result in analysis_results
        )
        
        return min(weighted_score, 1.0)  # 0-1 범위로 정규화

# 실제 사용
agent = FraudDetectionAgent(claude_client)

suspicious_transaction = {
    "customer_id": "C12345",
    "time": "2025-11-16 23:30:00",
    "amount": 5_000_000,
    "merchant": "해외 온라인 쇼핑몰",
    "location": "싱가포르"
}

result = await agent.analyze_transaction(suspicious_transaction)

if result['decision'] == 'BLOCK':
    print(f"⚠️ 거래 차단! (위험도: {result['risk_score']:.0%})")
    print(f"사유: {result['reason']}")
else:
    print(f"✅ 거래 승인 (위험도: {result['risk_score']:.0%})")
```

### 💬 Use Case 2: 고객 서비스 자동화

#### 📖 스토리: 24시간 일하는 디지털 상담원

```
고객: "해외 송금 한도를 늘리고 싶어요"

🤖 AI 에이전트의 사고 과정:

1단계: 의도 파악
└─ "한도 증액 요청"으로 분류

2단계: 정보 수집
├─ 고객 계좌 정보 조회
├─ 현재 한도 확인 (일 300만원)
├─ 송금 이력 분석
└─ 신용등급 체크

3단계: 정책 확인
└─ 은행 내규: 우수고객 일 500만원까지 가능
└─ 해당 고객: 우수등급 해당

4단계: 응답 생성
"고객님의 현재 한도는 일 300만원입니다.
우수고객으로 확인되어 500만원까지 증액 가능합니다.
지금 바로 처리해드릴까요?"

5단계: 실행
└─ 고객 동의 시 한도 자동 증액
```

#### 🌿 중급 예제: 옴니채널 고객 지원

```python
class CustomerServiceAgent:
    """
    다채널 고객 지원 AI 에이전트
    """
    def __init__(self):
        self.claude = ClaudeClient()
        self.channels = {
            'chat': ChatInterface(),
            'voice': VoiceInterface(),
            'email': EmailInterface()
        }
        self.context_memory = ConversationMemory()
    
    async def handle_inquiry(self, message, channel, customer_id):
        """
        채널에 상관없이 일관된 서비스 제공
        """
        # 1. 이전 대화 내용 복원
        context = self.context_memory.get(customer_id)
        
        # 2. 의도 분석
        intent = await self.classify_intent(message, context)
        
        # 3. 전문 에이전트에게 라우팅
        if intent == "account_inquiry":
            response = await self.account_agent.handle(message)
        elif intent == "loan_application":
            response = await self.loan_agent.handle(message)
        elif intent == "complaint":
            # 복잡한 문제는 사람에게 에스컬레이션
            return await self.escalate_to_human(message, context)
        
        # 4. 채널에 맞게 응답 포맷팅
        formatted_response = self.channels[channel].format(response)
        
        # 5. 대화 내용 저장
        self.context_memory.update(customer_id, message, response)
        
        return formatted_response
    
    async def escalate_to_human(self, message, context):
        """
        사람 상담원에게 부드럽게 전환
        """
        summary = await self.claude.summarize_conversation(context)
        
        return {
            "type": "human_handoff",
            "message": "전문 상담원에게 연결해드리겠습니다.",
            "context_for_agent": summary,
            "priority": self.calculate_urgency(message)
        }
```

### 📊 Use Case 3: 포트폴리오 최적화 및 자문

#### 🌳 고급 예제: AI 투자 자문 에이전트

```python
class InvestmentAdvisorAgent:
    """
    개인화된 투자 자문 AI 에이전트
    """
    def __init__(self):
        self.market_agent = MarketAnalysisAgent()
        self.risk_agent = RiskAssessmentAgent()
        self.compliance_agent = ComplianceAgent()
    
    async def generate_personalized_strategy(self, client_profile):
        """
        고객 맞춤형 투자 전략 생성
        """
        # 1. 병렬로 데이터 수집
        market_data, client_risk, compliance_rules = await asyncio.gather(
            self.market_agent.get_market_outlook(),
            self.risk_agent.assess_client_risk(client_profile),
            self.compliance_agent.get_applicable_rules(client_profile)
        )
        
        # 2. Claude를 활용한 전략 생성
        strategy_prompt = f"""
        다음 정보를 바탕으로 투자 전략을 수립해주세요:
        
        고객 정보:
        - 나이: {client_profile['age']}세
        - 투자 목표: {client_profile['goal']}
        - 투자 기간: {client_profile['horizon']}년
        - 위험 허용도: {client_risk['tolerance']}
        
        시장 전망:
        {market_data['outlook']}
        
        규제 요건:
        {compliance_rules}
        
        다음 형식으로 제안해주세요:
        1. 추천 자산 배분
        2. 예상 수익률 및 위험도
        3. 리밸런싱 전략
        4. 세금 최적화 방안
        """
        
        strategy = await self.claude.generate(strategy_prompt)
        
        # 3. 백테스팅
        backtest_results = await self.backtest_strategy(
            strategy,
            historical_period=10  # 10년
        )
        
        # 4. 최종 보고서 생성
        return {
            "strategy": strategy,
            "expected_return": backtest_results['return'],
            "risk_metrics": backtest_results['risk'],
            "explanation": self.explain_in_simple_terms(strategy),
            "compliance_approved": True
        }
    
    def explain_in_simple_terms(self, strategy):
        """
        복잡한 투자 전략을 쉬운 말로 설명
        """
        prompt = f"""
        다음 투자 전략을 초등학생도 이해할 수 있게 설명해주세요:
        
        {strategy}
        
        비유와 예시를 활용해서 설명해주세요.
        """
        
        return self.claude.generate(prompt)
```

### 🔧 Use Case 4: 레거시 시스템 현대화

#### 📖 스토리: 40년 된 COBOL 코드의 변신

```
문제 상황:
└─ 1980년대 작성된 COBOL 코드
└─ 원래 개발자 퇴사
└─ 문서화 부족
└─ 유지보수 불가능

AI 에이전트 솔루션:
1. 코드 분석 및 문서화
2. 현대 언어로 자동 변환
3. 테스트 코드 자동 생성
4. 클라우드 마이그레이션
```

#### 🌿 중급 예제: COBOL → Python 변환

```python
class LegacyModernizationAgent:
    """
    레거시 시스템 현대화 에이전트
    """
    async def modernize_cobol_code(self, cobol_file_path):
        """
        COBOL 코드를 Python으로 변환
        """
        # 1. COBOL 코드 읽기
        with open(cobol_file_path, 'r') as f:
            cobol_code = f.read()
        
        # 2. 비즈니스 로직 분석
        analysis_prompt = f"""
        다음 COBOL 코드의 비즈니스 로직을 분석해주세요:
        
        ```cobol
        {cobol_code}
        ```
        
        다음 정보를 제공해주세요:
        1. 주요 기능
        2. 입력/출력 데이터
        3. 비즈니스 룰
        4. 엣지 케이스
        """
        
        business_logic = await self.claude.analyze(analysis_prompt)
        
        # 3. Python 코드 생성
        conversion_prompt = f"""
        다음 비즈니스 로직을 최신 Python 코드로 변환해주세요:
        
        {business_logic}
        
        요구사항:
        - Type hints 사용
        - Docstring 작성
        - 에러 처리 포함
        - Pydantic을 사용한 데이터 검증
        """
        
        python_code = await self.claude.generate(conversion_prompt)
        
        # 4. 테스트 코드 자동 생성
        test_code = await self.generate_tests(
            python_code,
            business_logic
        )
        
        return {
            "modern_code": python_code,
            "tests": test_code,
            "documentation": business_logic,
            "migration_guide": self.create_migration_guide(
                cobol_code,
                python_code
            )
        }
```

---

## 용어 사전 (Glossary)

### AI / 머신러닝 관련

**🔤 AI 에이전트 (AI Agent)**
- **쉬운 설명**: 스스로 판단하고 행동하는 디지털 비서
- **비유**: 숙련된 직원처럼 업무를 자율적으로 처리
- **예시**: "대출 심사 에이전트"는 서류 검토부터 승인까지 스스로 진행

**🔤 LLM (Large Language Model / 대규모 언어 모델)**
- **쉬운 설명**: 엄청나게 많은 텍스트를 학습한 AI
- **비유**: 모든 책을 읽은 박사님
- **예시**: Claude, GPT, Gemini 등

**🔤 프롬프트 (Prompt)**
- **쉬운 설명**: AI에게 주는 명령이나 질문
- **비유**: 직원에게 주는 업무 지시서
- **예시**: "이 대출 신청서를 분석하고 리스크를 평가해줘"

**🔤 Constitutional AI**
- **쉬운 설명**: AI가 안전하고 윤리적으로 행동하도록 만드는 기술
- **비유**: 헌법처럼 AI의 행동 원칙을 정함
- **예시**: "개인정보를 절대 유출하지 않음"

### 금융 서비스 관련

**🔤 KYC (Know Your Customer / 고객 확인)**
- **쉬운 설명**: 고객이 누구인지 확인하는 절차
- **법적 요구**: 자금세탁 방지를 위한 필수 절차
- **예시**: 계좌 개설 시 신분증 확인

**🔤 AML (Anti-Money Laundering / 자금세탁방지)**
- **쉬운 설명**: 불법 자금이 금융 시스템에 들어오는 것을 막는 것
- **비유**: 공항 세관의 금융 버전
- **예시**: 대규모 현금 거래 모니터링

**🔤 컴플라이언스 (Compliance)**
- **쉬운 설명**: 법규와 규정을 준수하는 것
- **왜 중요**: 위반 시 수억원의 벌금
- **예시**: 금융소비자보호법 준수

**🔤 리스크 스코어 (Risk Score)**
- **쉬운 설명**: 위험도를 숫자로 표현한 것
- **범위**: 보통 0~100 또는 0~1
- **예시**: 사기 위험도 85% = 매우 위험

### AWS / 클라우드 관련

**🔤 Amazon Bedrock**
- **쉬운 설명**: AWS가 제공하는 AI 모델 사용 서비스
- **비유**: AI 모델 대여점
- **장점**: 서버 관리 불필요, 즉시 사용 가능

**🔤 VPC (Virtual Private Cloud)**
- **쉬운 설명**: 클라우드 안의 나만의 사설 네트워크
- **비유**: 아파트 단지 안의 우리 집
- **보안**: 외부에서 접근 불가

**🔤 API (Application Programming Interface)**
- **쉬운 설명**: 프로그램끼리 대화하는 방법
- **비유**: 레스토랑의 메뉴판 (주문 방법을 정해놓음)
- **예시**: Claude API를 호출하여 분석 요청

**🔤 Lambda (AWS Lambda)**
- **쉬운 설명**: 필요할 때만 실행되는 코드 조각
- **비유**: 택시 (탈 때만 비용 발생)
- **장점**: 서버 없이 코드 실행 가능

### 아키텍처 / 시스템 설계

**🔤 MCP (Model Context Protocol)**
- **쉬운 설명**: AI가 다양한 도구와 연결되는 표준 방식
- **비유**: 스마트폰의 USB-C 포트
- **예시**: Claude가 데이터베이스, API 등에 접근

**🔤 오케스트레이션 (Orchestration)**
- **쉬운 설명**: 여러 에이전트를 조율하여 협력시키는 것
- **비유**: 오케스트라 지휘자
- **예시**: 분석 에이전트 + 리스크 에이전트 + 의사결정 에이전트

**🔤 파이프라인 (Pipeline)**
- **쉬운 설명**: 데이터가 순차적으로 처리되는 흐름
- **비유**: 공장의 조립 라인
- **예시**: 데이터 수집 → 분석 → 의사결정 → 실행

**🔤 백테스팅 (Backtesting)**
- **쉬운 설명**: 과거 데이터로 전략을 시험해보는 것
- **목적**: 실제 돈 쓰기 전에 검증
- **예시**: 10년 전 데이터로 투자 전략 테스트

---

## 🤔 생각해보기

### 퀴즈 1: 개념 이해
```
Q: AI 에이전트와 일반 챗봇의 가장 큰 차이는?

A) 속도
B) 자율적으로 도구를 사용하는 능력
C) 대화 능력
D) 가격

정답: B
설명: AI 에이전트는 스스로 판단하여 필요한 도구(API, 데이터베이스 등)를 
     선택하고 사용할 수 있습니다. 단순히 정보를 제공하는 챗봇과의 
     핵심 차이점입니다.
```

### 퀴즈 2: 실무 적용
```
Q: 다음 중 Claude Haiku 모델을 사용하기에 가장 적합한 업무는?

A) 복잡한 M&A 실사 분석
B) 고객 계좌 잔액 문의 응대
C) 종합 투자 전략 수립
D) 레거시 시스템 현대화

정답: B
설명: Haiku는 빠르고 저렴한 모델로, 단순 문의 응대에 최적입니다.
     복잡한 분석은 Sonnet이나 Opus를 사용해야 합니다.
```

### 실습 과제
```
🎯 과제: 나만의 AI 에이전트 설계하기

1. 우리 조직의 가장 고통스러운 반복 업무 찾기
2. 그 업무를 AI 에이전트로 자동화하는 방법 구상
3. 필요한 데이터와 도구 목록 작성
4. 예상 효과 계산 (시간 절감, 비용 절감)

템플릿:
---
업무: _______________________
현재 소요 시간: _____ 시간/일
AI 에이전트 도입 후: _____ 시간/일
절감 효과: _____% 
---
```

---

## ⚠️ 주의사항

### 초보자가 자주 하는 실수

**1️⃣ 너무 큰 프로젝트로 시작**
```
❌ 나쁜 예: "전 시스템을 AI로 대체!"
✅ 좋은 예: "고객 문의 10%를 AI로 자동 응대"
```

**2️⃣ 규제/보안 간과**
```
❌ 나쁜 예: 고객 데이터를 외부 API로 전송
✅ 좋은 예: VPC 내부에서 프라이빗하게 처리
```

**3️⃣ 사람의 역할 무시**
```
❌ 나쁜 예: AI가 모든 것을 결정하게 함
✅ 좋은 예: 중요한 결정은 사람이 최종 승인
```

**4️⃣ 잘못된 모델 선택**
```
❌ 나쁜 예: 단순 작업에 Opus 사용 (비용 낭비)
✅ 좋은 예: 작업 복잡도에 맞는 모델 선택
```

---

## 📚 연결된 노트

- [[금융_서비스_AI_에이전트_구축_가이드_Part2]] - 실전 편
- [[Claude_소개_및_활용_가이드]]
- [[AWS_Bedrock_완벽_가이드]]
- [[금융권_AI_규제_준수_가이드]]
- [[AI_에이전트_프롬프트_엔지니어링]]

---

## 📖 다음 단계

**Part 2에서 배울 내용:**
1. 🏗️ 아키텍처 패턴 (단일 vs 멀티 에이전트)
2. 🗺️ 실제 구현 로드맵 (4-12개월 계획)
3. 👥 팀 구성 및 역할 분담
4. 💼 실제 성공 사례 심층 분석 (NBIM, Verisk)
5. 🚀 시작하기 가이드

**지금 바로 [[금융_서비스_AI_에이전트_구축_가이드_Part2]]를 확인하세요!**

---

**💡 Pro Tip**: 이 가이드를 읽고 난 후, 여러분의 조직에서 가장 먼저 자동화할 업무를 하나 선택해보세요. 작게 시작하는 것이 성공의 비결입니다!

---

*최종 수정: 2025-11-16*
*출처: Anthropic & AWS Financial Services Guide*
*작성자: Claude Code with Feynman Technique*