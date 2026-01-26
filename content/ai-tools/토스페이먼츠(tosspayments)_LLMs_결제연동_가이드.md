---
title: 토스페이먼츠 LLMs 결제연동 가이드
created: 2025-06-24
last_modified: 2025-06-24
tags:
  - AI/LLM활용
  - 개발/결제시스템
  - API/토스페이먼츠
  - MCP/서버
  - 자동화/AI도구
  - Claude-Code
  - 프롬프트/엔지니어링
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/iga5z1s2#qo9XdWHDnbU8NmLXZwitOpnGmBlckqXi0FT0iuORRHs
share_updated: 2025-06-25T00:12:22+09:00
---

# 🤖 토스페이먼츠 LLMs 결제연동 가이드

> 대규모 언어 모델(LLM)과 AI 개발 도구를 활용하여 토스페이먼츠 결제 시스템을 효과적으로 연동하는 방법을 안내합니다.

## 📋 목차
1. [[#개요]]
2. [[#llms.txt 활용하기]]
3. [[#MCP 서버란 무엇인가]]
4. [[#토스페이먼츠 MCP 서버 설정하기]]
5. [[#개발도구별 연결 방법]]
6. [[#효과적인 프롬프트 작성법]]
7. [[#실전 예제]]
8. [[#문제 해결 및 팁]]

## 개요

토스페이먼츠는 AI 시대에 맞춰 LLM을 활용한 결제 연동을 지원하기 위해 두 가지 핵심 도구를 제공합니다:

1. **llms.txt**: LLM이 토스페이먼츠 문서를 효과적으로 탐색할 수 있는 표준 형식
2. **MCP 서버**: AI 도구가 토스페이먼츠 연동 스펙을 정확히 이해하도록 돕는 컨텍스트 프로토콜

### 관련 문서
- [토스페이먼츠 결제 시작하기](https://docs.tosspayments.com/guides/v2/get-started)
- [결제위젯 이해하기](https://docs.tosspayments.com/guides/v2/payment-widget)
- [환경 설정하기](https://docs.tosspayments.com/guides/v2/get-started/environment)

## llms.txt 활용하기

### llms.txt란?

llms.txt는 AI 도구와 에이전트가 웹사이트 정보를 더 효과적으로 탐색할 수 있도록 돕는 새로운 표준 형식입니다.

### 토스페이먼츠 llms.txt

- **URL**: https://docs.tosspayments.com/llms.txt
- **용도**: AI 도구의 프롬프트에 포함하여 더 정확한 답변 유도
- **표준 사양**: [llmstxt.org](https://llmstxt.org) 참고

### 활용 예시

```bash
# AI 도구에 프롬프트 작성 시
"https://docs.tosspayments.com/llms.txt 를 참고하여 토스페이먼츠 결제위젯 연동 방법을 알려줘"
```

## MCP 서버란 무엇인가

### Model Context Protocol (MCP)

- **개발사**: Anthropic
- **목적**: LLM이 다양한 상황과 맥락을 잘 이해할 수 있도록 돕는 표준 프로토콜
- **장점**: 특정 도메인(토스페이먼츠 결제)에 대한 정확한 컨텍스트 제공

### 토스페이먼츠 MCP 서버가 제공하는 도구

| 도구명 | 설명 |
|--------|------|
| `get-v2-documents` | 토스페이먼츠 v2 문서 조회 (기본값) |
| `get-v1-documents` | 토스페이먼츠 v1 문서 조회 (명시적 요청 시) |
| `document-by-id` | 문서 ID로 전체 내용 조회 |

## 토스페이먼츠 MCP 서버 설정하기

### 기본 설정 (mcp.json)

```json
{
  "mcpServers": {
    "tosspayments-integration-guide": {
      "command": "npx",
      "args": ["-y", "@tosspayments/integration-guide-mcp@latest"]
    }
  }
}
```

### 작동 원리

1. AI 도구가 MCP 서버와 연결
2. 토스페이먼츠 관련 질문 시 MCP 서버가 적절한 문서 검색
3. LLM이 정확한 컨텍스트를 바탕으로 코드 생성

## 개발도구별 연결 방법

### 1. Cursor

#### 자동 연결 방법
[📎 클릭하여 Cursor에 토스페이먼츠 MCP 자동 연결](cursor://anysphere.cursor-deeplink/mcp/install?name=tosspayments-integration-guide&config=eyJjb21tYW5kIjoibnB4IC15IEB0b3NzcGF5bWVudHMvaW50ZWdyYXRpb24tZ3VpZGUtbWNwQGxhdGVzdCJ9)

#### 수동 설정 방법
```bash
# 1. 설정 파일 위치로 이동
cd ~/.cursor/

# 2. mcp.json 파일 생성 또는 편집
vim mcp.json

# 3. 위의 기본 설정 내용 추가
```

#### 참고 자료
- [Cursor 공식 MCP 가이드](https://docs.cursor.com/context/model-context-protocol)

### 2. VS Code

#### 자동 연결 방법
[📎 클릭하여 VS Code에 토스페이먼츠 MCP 자동 연결](https://vscode.dev/redirect?url=vscode:mcp/install?%7B%22name%22%3A%22tosspayments-integration-guide%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tosspayments%2Fintegration-guide-mcp%40latest%22%5D%7D)

#### 수동 설정 방법
```bash
# 프로젝트 루트에서
mkdir -p .vscode
cd .vscode
vim mcp.json
# 기본 설정 내용 추가
```

#### 참고 자료
- [VS Code 공식 MCP 가이드](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

### 3. Windsurf

```bash
# 설정 파일 위치
~/.codeium/windsurf/mcp_config.json

# 파일 생성 및 편집
mkdir -p ~/.codeium/windsurf/
vim ~/.codeium/windsurf/mcp_config.json
# 기본 설정 내용 추가
```

#### 참고 자료
- [Windsurf 공식 MCP 가이드](https://docs.windsurf.com/windsurf/cascade/mcp)

### 4. Claude Desktop

```bash
# 설정 파일 위치 (OS별로 다름)
# macOS: ~/Library/Application Support/Claude/
# Windows: %APPDATA%\Claude\
# Linux: ~/.config/Claude/

# claude_desktop_config.json 파일에 추가
```

#### 참고 자료
- [Claude MCP 빠른 시작 가이드](https://modelcontextprotocol.io/quickstart/user)

## 효과적인 프롬프트 작성법

### 기본 원칙

1. **버전 명시**: v1/v2 중 사용할 버전 명확히 지정
2. **기술 스택 언급**: 사용 언어, 프레임워크 명시
3. **구체적인 요구사항**: 원하는 기능을 상세히 설명

### 프롬프트 템플릿

```markdown
토스페이먼츠 V2 SDK를 사용하여 [기능]을 구현하고 싶습니다.

환경:
- 언어: [JavaScript/TypeScript/Python 등]
- 프레임워크: [React/Vue/Next.js 등]
- 서버: [Node.js/Spring/Django 등]

요구사항:
1. [구체적인 기능 1]
2. [구체적인 기능 2]
3. [에러 처리 포함]

코드를 작성해주세요.
```

### 실제 프롬프트 예시

#### 1. 결제위젯 통합
```markdown
"V2 SDK로 주문서 내에 결제위젯을 삽입하는 코드를 작성해줘"
```

```markdown
"토스페이먼츠 V2 SDK를 사용하여 React 앱에 결제위젯을 통합하는 코드를 작성해줘. 
주문서 페이지에 결제위젯을 삽입하고, 카드/계좌이체/토스페이 결제수단을 지원해야 해."
```

#### 2. 결제 승인 API
```markdown
"결제 승인 요청하는 코드를 작성해줘"
```

```markdown
"Node.js Express 서버에서 토스페이먼츠 결제 승인 API를 호출하는 코드를 작성해줘.
에러 처리와 로깅을 포함하고, TypeScript를 사용해줘."
```

#### 3. 웹훅 처리
```markdown
"토스페이먼츠 결제 상태 변경 웹훅을 처리하는 Spring Boot 컨트롤러를 작성해줘.
서명 검증과 중복 처리 방지 로직을 포함해줘."
```

#### 4. 빌링키 발급
```markdown
"자동결제를 위한 빌링키 발급 프로세스를 구현하는 코드를 작성해줘"
```

#### 5. 결제 취소 및 환불
```markdown
"부분 취소를 지원하는 결제 취소 API 연동 코드를 작성해줘"
```

## 실전 예제

### 1. 결제위젯 초기화 (React + TypeScript)

```typescript
// AI에게 요청할 프롬프트
"토스페이먼츠 V2 결제위젯을 React TypeScript 환경에서 초기화하는 
커스텀 훅을 만들어줘. 로딩 상태와 에러 처리를 포함해줘."

// 예상 결과 코드
import { useEffect, useState } from 'react';
import { loadTossPayments, TossPaymentsInstance } from '@tosspayments/tosspayments-sdk';

interface UsePaymentWidgetReturn {
  paymentWidget: TossPaymentsInstance | null;
  loading: boolean;
  error: Error | null;
}

export const usePaymentWidget = (clientKey: string): UsePaymentWidgetReturn => {
  const [paymentWidget, setPaymentWidget] = useState<TossPaymentsInstance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeWidget = async () => {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        setPaymentWidget(tossPayments);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    initializeWidget();
  }, [clientKey]);

  return { paymentWidget, loading, error };
};
```

### 2. 결제 승인 요청 (Node.js)

```javascript
// AI에게 요청할 프롬프트
"토스페이먼츠 V2 API로 결제 승인을 요청하는 Node.js 함수를 작성해줘.
axios를 사용하고, 에러 타입별로 처리를 구분해줘."

// 예상 결과 코드
const axios = require('axios');

async function confirmPayment(paymentKey, orderId, amount) {
  const secretKey = process.env.TOSS_SECRET_KEY;
  const basicToken = Buffer.from(`${secretKey}:`).toString('base64');

  try {
    const response = await axios.post(
      'https://api.tosspayments.com/v2/payments/confirm',
      {
        paymentKey,
        orderId,
        amount
      },
      {
        headers: {
          'Authorization': `Basic ${basicToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    // 에러 타입별 처리
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('잘못된 요청:', data.message);
          break;
        case 401:
          console.error('인증 실패');
          break;
        case 404:
          console.error('결제 정보를 찾을 수 없음');
          break;
        default:
          console.error('결제 승인 실패:', data.message);
      }
    }
    
    return {
      success: false,
      error: error.response?.data || error.message
    };
  }
}
```

### 3. 결제 취소 처리

```python
# AI에게 요청할 프롬프트
"Python Django에서 토스페이먼츠 V2 결제 취소 API를 호출하는 
서비스 클래스를 작성해줘. 부분 취소도 지원해야 해."

# 예상 결과 코드
import requests
from django.conf import settings
import base64

class TossPaymentsService:
    def __init__(self):
        self.secret_key = settings.TOSS_SECRET_KEY
        self.base_url = "https://api.tosspayments.com/v2"
        self.headers = {
            "Authorization": f"Basic {base64.b64encode(f'{self.secret_key}:'.encode()).decode()}",
            "Content-Type": "application/json"
        }
    
    def cancel_payment(self, payment_key, cancel_reason, cancel_amount=None):
        """
        결제 취소 요청
        
        Args:
            payment_key: 결제 키
            cancel_reason: 취소 사유
            cancel_amount: 부분 취소 금액 (None이면 전액 취소)
        
        Returns:
            dict: API 응답
        """
        url = f"{self.base_url}/payments/{payment_key}/cancel"
        
        data = {"cancelReason": cancel_reason}
        
        if cancel_amount is not None:
            data["cancelAmount"] = cancel_amount
        
        try:
            response = requests.post(url, json=data, headers=self.headers)
            response.raise_for_status()
            return {"success": True, "data": response.json()}
        except requests.exceptions.RequestException as e:
            return {
                "success": False, 
                "error": str(e),
                "status_code": getattr(e.response, 'status_code', None)
            }
```

## 문제 해결 및 팁

### 자주 발생하는 문제

#### 1. MCP 서버 연결 실패
```bash
# npx 캐시 클리어
npx clear-npx-cache

# 수동으로 패키지 설치
npm install -g @tosspayments/integration-guide-mcp@latest
```

#### 2. 버전 충돌
- 항상 프롬프트에 v1/v2 명시
- 기본값은 v2이므로 v1 사용 시 반드시 명시

#### 3. 컨텍스트 부족
- llms.txt URL을 프롬프트에 포함
- 구체적인 기술 스택 명시
- 예제 코드나 기존 코드 제공

### 성능 최적화 팁

1. **캐싱 활용**
   - MCP 서버는 문서를 캐싱하므로 반복 질문 시 빠른 응답

2. **구체적인 질문**
   - "결제 연동 방법" ❌
   - "React에서 토스페이먼츠 V2 결제위젯 초기화 방법" ✅

3. **단계별 접근**
   - 전체 시스템을 한 번에 요청하지 말고 단계별로 구현

### 추가 리소스

- 📚 [토스페이먼츠 개발자 문서](https://docs.tosspayments.com)
- 💬 [토스페이먼츠 개발자 커뮤니티](https://techchat.tosspayments.com)
- 📝 [토스 기술 블로그 - MCP 서버 구현기](https://toss.tech/article/tosspayments-mcp)
- 💻 [GitHub 샘플 코드](https://github.com/tosspayments?q=sample)

## 결론

토스페이먼츠의 llms.txt와 MCP 서버를 활용하면 AI 도구가 결제 연동에 필요한 정확한 컨텍스트를 이해하고, 더 나은 코드를 생성할 수 있습니다. 

특히 MCP 서버는 단순한 문서 검색을 넘어 토스페이먼츠의 결제 도메인 지식을 AI에게 효과적으로 전달하는 역할을 합니다.

### 핵심 요약
- ✅ llms.txt로 기본 컨텍스트 제공
- ✅ MCP 서버로 정확한 도메인 지식 전달
- ✅ 개발도구별 간편한 설정
- ✅ 구체적인 프롬프트로 정확한 코드 생성

---

## 연결된 노트
- [[AI 개발도구 활용법]]
- [[MCP 프로토콜 이해하기]]
- [[결제 시스템 아키텍처]]
- [[프롬프트 엔지니어링 가이드]]
- [[API 연동 베스트 프랙티스]]