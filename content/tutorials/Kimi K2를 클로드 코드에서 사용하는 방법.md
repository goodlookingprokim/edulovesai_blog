---
share_link: https://share.note.sx/wp19s5sf#b14Y2nRXNuA8GC0ffgLmA1VxDs9B2AjjTRwL8wdnhOs
share_updated: 2025-09-06T11:51:03+09:00
---


## 1. 문제 상황

  

“터미널에서 kimi라는 명령어를 입력하면, Claude(클로드) 모델을 Kimi API를 통해 실행할 수 있게 만들고 싶다.”

하지만 터미널은 기본적으로 kimi라는 명령어를 모르죠.

그래서 우리가 해야 할 일은 “터미널에게 kimi라는 명령어를 알려주고, 그 명령어를 실행했을 때 Claude가 돌아가도록 연결” 하는 것입니다.

---

## 2. 준비물

- 터미널 : 컴퓨터와 대화하는 창
    
- ~/.zshrc 파일 : 터미널이 시작될 때 “규칙”을 읽어오는 노트 같은 것
    
- Kimi API 키 : 인터넷에 있는 Claude 서버와 연결할 수 있는 비밀번호 같은 열쇠
    
- claude 명령어 : Claude AI를 터미널에서 실행할 수 있는 명령어
    

---

## 3. 단계별 설명

  

### (1) nano ~/.zshrc

- ~/.zshrc 파일은 터미널이 켜질 때 항상 읽는 규칙집이에요.
    
- nano는 그 파일을 편집할 수 있는 작은 메모장 같은 프로그램이에요.
    
    즉, “터미널 규칙집을 열어서 고치겠다” 라는 의미입니다.
    

---

### (2) API 키 발급받기

- https://platform.moonshot.ai/console/account에 들어가서 1달러 결제 후 API 키 발급
    
- API 키는 sk-XXXXXXX처럼 생긴 문자열인데, 이게 있어야 Claude와 통신할 수 있습니다.
    
    즉, “열쇠 없이는 문이 안 열리듯, API 키 없이는 Claude에 연결할 수 없다” 는 개념입니다.
    

---

### (3) 키를 환경변수로 등록하기

```
export KIMI_API_KEY="sk-YOUR-KIMI-API-KEY"
```

- “내 컴퓨터야, KIMI_API_KEY라는 이름으로 이 비밀번호(API 키)를 기억해 줘.“라는 뜻입니다.
    
- 이걸 해두면 터미널에서 KIMI_API_KEY를 호출할 수 있습니다.
    

---

### (4) kimi 함수 만들기

```
kimi() {
  export ANTHROPIC_BASE_URL=https://api.moonshot.ai/anthropic
  export ANTHROPIC_AUTH_TOKEN=$KIMI_API_KEY
  claude $1
}
```

- 여기서 kimi()는 “kimi라는 새로운 명령어를 만들겠다” 라는 뜻이에요.
    
- 안에 들어있는 내용은 다음과 같아요:
    
    - Claude 서버 주소 등록: Claude가 어디 있는지 알려줌
        
    - 인증 키 등록: “내가 진짜 사용자야!” 하고 증명
        
    - claude 실행: 실제 Claude 프로그램 실행
        
    

  

즉, kimi → Claude API 서버에 접속해서 실행하기 라는 단축키를 만든 셈입니다.

---

### (5) 저장 & 종료

- Ctrl + O → 파일 저장
    
- Enter → 저장 파일 이름 확인 (~/.zshrc)
    
- Ctrl + X → 편집기 종료
    

  

즉, “규칙집 수정 완료!”

---

### (6) 규칙 적용하기

- 규칙집을 수정했지만, 터미널은 아직 몰라요.
    
- 그래서 터미널을 껐다 켜거나 source ~/.zshrc를 실행해야 합니다.
    
    이는 “새 규칙 다시 읽어라!” 라는 뜻이에요.
    

---

### (7) 테스트하기

- 터미널에서 kimi라고 입력 → Claude 실행 준비 완료.
    
- 입력창에 /model kimi-k2-0905-preview라고 입력 → Kimi의 최신 모델 사용 가능.
    

  

즉, 이제는 한 줄로 Claude를 불러낼 수 있게 된 것입니다.

---

## 4. 요약 (아주 단순하게)

1. 규칙집(~/.zshrc) 열기
    
2. API 키 받기
    
3. 키를 터미널이 기억하도록 설정하기
    
4. kimi라는 새로운 명령어 정의하기
    
5. 저장 후 규칙 적용하기
    
6. kimi 입력 → Claude 실행!
    

---

👉 비유로 말하면:

- ~/.zshrc = 터미널의 알람 시계 설정
    
- API 키 = 문 열쇠
    
- kimi 함수 = 엘리베이터 버튼 (누르면 Claude 층으로 이동)
    
- source ~/.zshrc = 새로운 알람 시계 설정을 적용
    

---

![[Pasted image 20250906115045.png]]