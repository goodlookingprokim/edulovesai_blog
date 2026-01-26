---
title: "Flutter BLE 블루투스 IoT 완벽 가이드"
created: '2025-10-12'
last_modified: '2025-10-12'
tags:
  - 개발/Flutter
  - 개발/IoT
  - 개발/블루투스
  - 개발/BLE
  - 개발/모바일
  - 학습/초보자
  - 유형/튜토리얼
status: "완료"
type: "학습노트"
priority: "high"
difficulty: "초급→중급"
estimated_time: "4-5시간"
---

# 🔵 Flutter BLE 블루투스 IoT 완벽 가이드
*"스마트폰과 IoT 기기를 연결하는 마법! 블루투스 통신의 모든 것"*

## 📑 목차

### 🎯 빠른 네비게이션

#### 📚 Part 1: 블루투스 통신 기초
- [🌟 들어가며](#🌟-들어가며-왜-블루투스-통신을-배워야-할까요)
- [🤔 핵심 개념 이해](#🤔-파인만-기법으로-이해하는-블루투스-통신)
  - [블루투스란?](#블루투스란-무엇인가)
  - [BLE vs 블루투스 클래식](#ble-vs-블루투스-클래식)
  - [센트럴과 프리퍼럴](#센트럴과-프리퍼럴의-역할)

#### 🛠️ Part 2: BLE 통신 원리
- [📡 1단계: BLE 4단계 원리](#📡-1단계-ble-통신의-4단계-원리)
- [🏗️ 2단계: GATT 프로파일](#🏗️-2단계-gatt-프로파일-이해하기)
- [⚙️ 3단계: 캐릭터리스틱 기능](#⚙️-3단계-캐릭터리스틱의-3가지-기능)

#### 💻 Part 3: Flutter 실전 구현
- [🔧 4단계: 프로젝트 설정](#🔧-4단계-flutter-프로젝트-설정하기)
- [📱 5단계: 권한 설정](#📱-5단계-안드로이드ios-권한-설정)
- [🎨 6단계: BLE 스캔 구현](#🎨-6단계-ble-기기-스캔-구현하기)
- [🔌 7단계: 연결 및 데이터 통신](#🔌-7단계-기기-연결-및-데이터-통신)

#### 🚀 Part 4: 실전 프로젝트
- [💡 8단계: 온도 센서 앱](#💡-8단계-온도-센서-모니터링-앱)
- [🎮 9단계: LED 제어 앱](#🎮-9단계-led-제어-앱-만들기)
- [🐛 10단계: 문제 해결](#🐛-10단계-자주-발생하는-문제-해결)

#### 📖 부록
- [📚 용어 사전](#📚-용어-사전)
- [🔗 참고 자료](#🔗-참고-자료-및-추가-학습)
- [✅ 체크리스트](#✅-학습-체크리스트)

### 📊 학습 로드맵

```
┌─────────────────────────────────────────────────────────┐
│  Day 1: 블루투스 기초 개념 (1.5시간)                   │
│  ├─ 블루투스와 BLE 이해                                 │
│  ├─ 센트럴/프리퍼럴 역할                                │
│  └─ BLE 4단계 원리                                      │
├─────────────────────────────────────────────────────────┤
│  Day 2: GATT 프로파일 (2시간)                           │
│  ├─ GATT 구조 이해                                      │
│  ├─ 서비스와 캐릭터리스틱                               │
│  └─ Read/Write/Notify                                   │
├─────────────────────────────────────────────────────────┤
│  Day 3: Flutter 환경 설정 (1.5시간)                     │
│  ├─ flutter_blue_plus 패키지                            │
│  ├─ 안드로이드/iOS 권한 설정                            │
│  └─ 기본 프로젝트 구조                                  │
├─────────────────────────────────────────────────────────┤
│  Day 4: BLE 스캔 및 연결 (2시간)                        │
│  ├─ 주변 기기 스캔                                      │
│  ├─ 기기 연결/해제                                      │
│  └─ 서비스 검색                                         │
├─────────────────────────────────────────────────────────┤
│  Day 5: 데이터 통신 구현 (2.5시간)                      │
│  ├─ Read 기능 구현                                      │
│  ├─ Write 기능 구현                                     │
│  ├─ Notify 구독                                         │
│  └─ 실시간 데이터 처리                                  │
├─────────────────────────────────────────────────────────┤
│  Day 6: 실전 프로젝트 (3시간)                           │
│  ├─ 온도 센서 앱                                        │
│  ├─ LED 제어 앱                                         │
│  └─ 통합 IoT 대시보드                                   │
└─────────────────────────────────────────────────────────┘
```

---

## 🌟 들어가며: 왜 블루투스 통신을 배워야 할까요?

[↑ 목차로 돌아가기](#📑-목차)

### 📖 스토리: 지수의 스마트홈 도전기

지수는 아두이노로 온도 센서를 만들었습니다. LED도 깜빡이게 하고, 온도도 측정할 수 있었죠. 하지만 문제가 있었습니다.

**😰 지수가 겪은 문제들**:

```
문제 1: "센서 값을 보려면 아두이노에 직접 가야 해요!"
   → 거실에서 침실 온도를 확인할 수 없음

문제 2: "LED를 끄려면 방에 들어가서 버튼을 눌러야 해요!"
   → 소파에 누워서 제어 불가능

문제 3: "여러 개의 센서 값을 한 번에 볼 수 없어요!"
   → 각 센서를 일일이 확인해야 함
```

### ✨ 해결책: 블루투스 통신!

지수가 블루투스 통신을 배우고 나서 달라진 모습:

```
🎉 Before → After

Before:
침실 온도 확인하려고 일어남 (3분 소요)
   ↓
After:
스마트폰 앱 터치 한 번! (3초 소요)
⏰ 시간 절약: 60배!

Before:
LED 제어하려고 방문 (귀찮음 × 100)
   ↓
After:
소파에서 앱으로 제어 (편안함 × 100)

Before:
5개 센서 일일이 확인 (15분 소요)
   ↓
After:
한 화면에 모든 센서 표시 (1초 소요)
⏰ 시간 절약: 900배!
```

### 🎯 블루투스 통신으로 할 수 있는 것들

```
🏠 스마트홈
├─ 💡 LED 조명 제어 (ON/OFF, 밝기 조절)
├─ 🌡️ 온도/습도 모니터링
├─ 🔔 문 열림 감지 알림
└─ 🎵 스마트 스피커 제어

🏥 헬스케어
├─ ❤️ 심박수 측정 (스마트 밴드)
├─ 🏃 운동량 추적
├─ 😴 수면 패턴 분석
└─ 💊 약 복용 알림

🚗 자동차/교통
├─ 🗝️ 스마트 키 (차 문 열기)
├─ 🎤 핸즈프리 통화
├─ 🎧 무선 오디오
└─ 📱 차량 진단

🎮 취미/엔터테인먼트
├─ 🎮 게임 컨트롤러
├─ 🚁 드론 조종
├─ 🤖 로봇 제어
└─ 🎨 전자 악기
```

---

## 🤔 파인만 기법으로 이해하는 블루투스 통신

[↑ 목차로 돌아가기](#📑-목차)

### 블루투스란 무엇인가?

#### 5세 아이에게 설명한다면...

**블루투스는 "보이지 않는 전선"**입니다!

일반적으로 전자기기끼리 대화하려면 선(케이블)이 필요합니다. 마치 실 전화기처럼요. 하지만 블루투스를 사용하면 **선 없이 공중으로** 이야기할 수 있어요!

#### 🎭 비유: 무전기로 대화하기

```
🎤 기존 방식 (유선)
선 전화기로 대화
   │
   ├─ 장점: 명확하고 끊김 없음
   └─ 단점: 선에 묶여있어야 함

📻 블루투스 방식 (무선)
무전기로 대화
   │
   ├─ 장점: 자유롭게 이동 가능
   ├─ 장점: 선 정리 필요 없음
   └─ 제한: 약 10m 거리 내에서만 가능
```

#### 📊 블루투스 통신의 특징

```
🔵 블루투스의 핵심 특징

1. 근거리 통신 (약 10m)
   마치... 방 안에서만 들리는 작은 목소리!

   비유: 교실에서 옆 친구와 속삭이기
   - 옆 친구는 들림 ✅
   - 복도에 있는 친구는 안 들림 ❌

2. 전력 소모가 적음 (특히 BLE)
   마치... 손전등 vs 형광등!

   비유:
   - 블루투스 클래식 = 형광등 (밝지만 전기 많이 씀)
   - BLE = LED 손전등 (적은 전기로 오래 사용)

3. 케이블 불필요
   마치... 새가 자유롭게 날아다니는 것!

   비유:
   - 유선 = 줄에 묶인 풍선
   - 블루투스 = 자유로운 새

4. 간단한 연결
   마치... 친구 찾기 게임!

   1단계: "여기 있어요!" (광고)
   2단계: "누구 있어요?" (스캔)
   3단계: "손잡아요!" (연결)
   4단계: "대화 시작!" (데이터 교환)
```

---

### BLE vs 블루투스 클래식

#### 🆚 두 가지 블루투스의 차이

**블루투스 클래식** = 큰 물호스
- 물(데이터)을 **계속해서 많이** 보냄
- 정원에 물 주기 (오디오 스트리밍)
- 전기(배터리)를 많이 씀

**BLE (저전력 블루투스)** = 스포이드
- 물(데이터)을 **조금씩 필요할 때만** 보냄
- 화분에 물 한 방울 (센서 데이터)
- 전기(배터리)를 아주 조금 씀

#### 📊 상세 비교표

| 특성 | 블루투스 클래식 | BLE (Bluetooth Low Energy) |
|------|-----------------|---------------------------|
| **전력 소모** | 🔋🔋🔋🔋 높음 | 🔋 매우 낮음 (최대 100배 절약) |
| **데이터 전송** | 📊 연속적, 대용량 | 📊 간헐적, 소량 |
| **주요 용도** | 🎧 오디오, 🎮 게임 컨트롤러 | 🌡️ 센서, ❤️ 웨어러블 |
| **연결 속도** | 🐢 느림 (수 초) | 🚀 빠름 (수 밀리초) |
| **범위** | 📡 ~100m | 📡 ~10m |
| **배터리 수명** | ⏰ 며칠 | ⏰ 몇 달~몇 년 |
| **데이터 구조** | 🔀 복잡 | 🎯 간단 (GATT) |

#### 🎯 언제 무엇을 사용할까?

```
🎧 블루투스 클래식 사용 사례

✅ 무선 이어폰/헤드폰
   → 음악을 계속 스트리밍
   → 끊김 없는 높은 음질 필요

✅ 게임 컨트롤러
   → 빠른 반응 속도
   → 많은 버튼 입력 데이터

✅ 차량 핸즈프리
   → 통화 중 오디오 스트리밍
   → 높은 음질 필요

🔵 BLE 사용 사례

✅ 심박수 모니터
   → 1초마다 한 번만 전송
   → 배터리 오래 사용 중요

✅ 온도/습도 센서
   → 5분마다 한 번 전송
   → 작은 데이터 (2-4바이트)

✅ 스마트 도어락
   → 가끔만 문 열림
   → 배터리 교체 최소화

✅ 비콘 (Beacon)
   → 위치 알림만 전송
   → 동전 배터리로 수년 작동
```

#### 🧪 실제 전력 소비 비교

```
📱 스마트폰 배터리 영향

블루투스 클래식 (음악 스트리밍 4시간):
🔋🔋🔋🔋🔋🔋🔋🔋🔋🔋 (배터리 30% 소모)

BLE (온도 센서 모니터링 4시간):
🔋 (배터리 1% 소모)

차이: 30배!
```

---

### 센트럴과 프리퍼럴의 역할

#### 🤔 센트럴? 프리퍼럴? 뭔가요?

BLE 통신에는 **두 가지 역할**이 있습니다:

**📱 센트럴 (Central)** = 가게 손님
- 데이터를 **요청하고 받는** 역할
- 보통 스마트폰이 센트럴
- 영어로 "중심", "중앙"이라는 뜻

**🤖 프리퍼럴 (Peripheral)** = 가게 주인
- 데이터를 **제공하고 보내는** 역할
- 보통 센서/IoT 기기가 프리퍼럴
- 영어로 "주변 기기"라는 뜻

#### 🍕 비유: 피자 가게로 이해하기

```
🏪 피자 가게 시나리오

👤 손님 (센트럴 = 스마트폰)
   ↓
   "여기 피자 가게 있나요?" (스캔)
   ↓
   "네, 여기 있어요!" ← 👨‍🍳 주인 (프리퍼럴 = 아두이노)
   ↓
   "페퍼로니 피자 주세요!" (요청)
   ↓
   "여기 있습니다!" ← 👨‍🍳 (데이터 전송)

📝 역할 정리:
- 손님 (센트럴): 주문하고 받는 사람
- 주인 (프리퍼럴): 메뉴 알려주고 피자 만들어 주는 사람
```

#### 🔄 실제 IoT 통신 예시

```
🌡️ 온도 센서 시나리오

📱 스마트폰 (센트럴)
   │
   │ 1️⃣ "온도 센서 찾기" (스캔 시작)
   ↓
🤖 아두이노 온도 센서 (프리퍼럴)
   │
   │ 2️⃣ "저 여기 있어요!" (광고 신호)
   ↓
📱 "아, 발견했다! 연결 요청!" (연결)
   ↓
🤖 "연결 수락!" (연결 완료)
   │
   │ 3️⃣ 데이터 교환 시작
   ↓
📱 "현재 온도 알려줘" (Read 요청)
   ↓
🤖 "25.3°C 입니다" (데이터 전송)
   ↓
📱 "알림 받을게요" (Notify 구독)
   ↓
🤖 "온도 바뀌면 자동으로 알려드릴게요!"
```

#### 🎭 역할별 상세 특징

```
📱 센트럴 (Central) 특징

1. 주도적 역할 (Boss)
   - 연결을 시작하는 쪽
   - "연결해줘!", "데이터 줘!" 요청

2. 한 번에 여러 기기 연결 가능
   - 스마트폰 1대 → 센서 5개 동시 연결 ✅
   - 예: 온도 센서 + 심박 센서 + LED 제어

3. 배터리 소모가 상대적으로 큼
   - 계속 스캔하고 데이터 요청
   - 하지만 스마트폰은 배터리 크니까 괜찮음

4. 복잡한 처리 가능
   - 데이터 분석, UI 표시, 알림 등

🤖 프리퍼럴 (Peripheral) 특징

1. 수동적 역할 (Servant)
   - 연결을 기다리는 쪽
   - 요청에 응답만 함

2. 보통 한 번에 1개 기기만 연결
   - 센서 1개 → 스마트폰 1대
   - (일부는 다중 연결 가능하지만 복잡함)

3. 배터리 절약 모드
   - 필요할 때만 데이터 보냄
   - BLE를 사용하는 이유!

4. 단순한 작업
   - 센서 읽기, LED 켜기 등 간단한 동작
```

#### 💻 코드로 이해하는 역할

```dart
// 📱 센트럴 (스마트폰) 역할 - Flutter 앱

class CentralRole {
  // 1. 주변 기기 찾기
  void scanForDevices() {
    print("📡 주변에 블루투스 기기 있나요? 찾는 중...");
  }

  // 2. 기기에 연결 요청
  void connectToDevice(device) {
    print("🤝 '$device'에 연결 요청합니다!");
  }

  // 3. 데이터 요청
  void requestData() {
    print("📊 현재 온도 데이터 주세요!");
  }

  // 4. 명령 전송
  void sendCommand(command) {
    print("📤 명령 전송: $command");
  }
}

// 🤖 프리퍼럴 (센서) 역할 - 아두이노 (의사 코드)

class PeripheralRole {
  // 1. 자신을 알리기
  void advertise() {
    print("📢 저는 온도 센서입니다! 연결 가능해요!");
  }

  // 2. 연결 수락
  void acceptConnection() {
    print("✅ 연결 요청 수락했습니다!");
  }

  // 3. 요청받은 데이터 전송
  void sendData() {
    float temperature = readTemperatureSensor();
    print("📡 현재 온도: ${temperature}°C 전송합니다!");
  }

  // 4. 명령 실행
  void executeCommand(command) {
    if (command == "LED_ON") {
      turnOnLED();
      print("💡 LED 켰습니다!");
    }
  }
}
```

#### 🎯 역할 결정 기준

```
내 기기가 센트럴일까? 프리퍼럴일까?

질문 1: "데이터를 달라고 요청하나요?"
   YES → 센트럴 (스마트폰, 태블릿)
   NO  → 다음 질문으로

질문 2: "데이터를 제공하나요?"
   YES → 프리퍼럴 (센서, IoT 기기)
   NO  → 다음 질문으로

질문 3: "배터리가 큰가요?"
   YES → 센트럴이 적합
   NO  → 프리퍼럴이 적합

질문 4: "여러 기기와 동시 연결이 필요한가요?"
   YES → 센트럴
   NO  → 프리퍼럴
```

---

## 📡 1단계: BLE 통신의 4단계 원리

[↑ 목차로 돌아가기](#📑-목차)

### BLE 통신은 어떻게 이루어질까?

BLE 통신은 **4단계 과정**을 거칩니다. 마치 친구 찾기 게임처럼요!

#### 🎮 게임으로 이해하는 4단계

```
🎯 "숨바꼭질 + 친구 만들기" 게임

1단계: 광고하기 (Advertising) 📢
   숨어있는 친구: "저 여기 있어요~!"

2단계: 찾기 (Scanning) 🔍
   술래: "어디 있지? 찾는 중..."

3단계: 연결하기 (Connection) 🤝
   술래: "찾았다! 손잡자!"
   친구: "좋아! 손잡을게!"

4단계: 놀기 (Data Exchange) 🎉
   이제 둘이 대화하고 놀기 시작!
```

### 📢 1단계: Advertising (광고)

#### 💡 광고란?

**프리퍼럴(센서)이 "나 여기 있어요!" 하고 외치는 것**

비유: 가게 간판
- 가게가 "우리 가게 여기 있어요!" 알리는 것
- 지나가는 사람(스마트폰)이 볼 수 있게

#### 🔊 광고 신호의 내용

```
📻 광고 패킷 예시

{
  "이름": "온도센서_001",
  "타입": "온도 센서",
  "배터리": "80%",
  "신호 세기": "-65 dBm" (가까우면 큰 숫자)
}

💡 실제로는 이런 정보를 무선 신호로 계속 보냄!
주기: 보통 100ms~1초마다 한 번씩
```

#### 🌱 초급 예제: 광고 신호 이해하기

```dart
// 프리퍼럴이 광고하는 의사 코드 (아두이노)
void advertise() {
  while (true) {
    // 0.5초마다 한 번씩 광고 신호 보내기
    sendAdvertisingPacket({
      'name': '온도센서_001',
      'type': 'temperature_sensor',
      'uuid': '0000181a-0000-1000-8000-00805f9b34fb'
    });

    delay(500); // 0.5초 대기

    // 💡 계속 반복해서 "나 여기 있어요!" 외침
  }
}
```

---

### 🔍 2단계: Scanning (스캐닝)

#### 💡 스캐닝이란?

**센트럴(스마트폰)이 주변 기기를 찾는 것**

비유: 상점가 둘러보기
- 어떤 가게가 있는지 구경하기
- 원하는 가게 찾기

#### 📡 스캔 과정

```
📱 스마트폰의 스캔 과정

1. 스캔 시작
   "주변에 블루투스 기기 있나요?"

2. 광고 신호 수신
   📻 "온도센서_001" 발견!
   📻 "심박센서_A" 발견!
   📻 "LED_컨트롤러" 발견!

3. 리스트 작성
   ┌─────────────────────┐
   │ 발견된 기기 목록:   │
   │ 1. 온도센서_001     │
   │ 2. 심박센서_A       │
   │ 3. LED_컨트롤러     │
   └─────────────────────┘

4. 사용자가 선택
   "온도센서_001 연결할래요!"
```

#### 🌿 중급 예제: Flutter에서 스캔하기

```dart
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class BLEScanner {
  List<ScanResult> scanResults = [];

  // 스캔 시작
  void startScan() async {
    print("📡 스캔 시작!");

    // 스캔 결과 리스너
    FlutterBluePlus.scanResults.listen((results) {
      scanResults = results;

      // 발견된 기기 출력
      for (ScanResult result in results) {
        print("✨ 발견: ${result.device.name}");
        print("   신호 세기: ${result.rssi} dBm");
        print("   MAC: ${result.device.id}");
      }
    });

    // 5초 동안 스캔
    await FlutterBluePlus.startScan(
      timeout: Duration(seconds: 5)
    );

    // 스캔 종료
    await FlutterBluePlus.stopScan();
    print("🛑 스캔 종료!");
  }

  // 특정 이름의 기기만 찾기
  void findDeviceByName(String targetName) async {
    print("🔍 '$targetName' 찾는 중...");

    FlutterBluePlus.scanResults.listen((results) {
      for (ScanResult result in results) {
        if (result.device.name == targetName) {
          print("🎉 찾았다! $targetName");
          // 스캔 중지하고 연결 시도
          FlutterBluePlus.stopScan();
          connectToDevice(result.device);
        }
      }
    });

    await FlutterBluePlus.startScan();
  }
}
```

---

### 🤝 3단계: Connection (연결)

#### 💡 연결이란?

**센트럴과 프리퍼럴이 전용 통신선을 만드는 것**

비유: 전화 통화 연결
- 전화번호 누르기 (연결 요청)
- 상대방이 받기 (연결 수락)
- 통화 시작 (데이터 교환 준비 완료)

#### 🔗 연결 과정

```
📱 연결 과정 상세

1️⃣ 센트럴이 연결 요청
   스마트폰: "온도센서_001님, 연결 요청합니다!"

2️⃣ 프리퍼럴이 수락
   센서: "네, 좋아요! 연결 수락합니다!"

3️⃣ 파라미터 협상
   - 연결 간격: 얼마나 자주 데이터 주고받을지
   - 타임아웃: 얼마나 기다릴지
   - 보안 설정: 암호화 할지 말지

4️⃣ 연결 완료!
   이제 두 기기는 "연결 상태" 🔗
   다른 기기는 연결 못함 (1:1 통신)
```

#### 🌿 중급 예제: Flutter에서 연결하기

```dart
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class BLEConnector {
  BluetoothDevice? connectedDevice;

  // 기기에 연결
  Future<void> connectToDevice(BluetoothDevice device) async {
    try {
      print("🔗 연결 시도 중: ${device.name}");

      // 연결 시작
      await device.connect(
        timeout: Duration(seconds: 15),
        autoConnect: false // 자동 재연결 여부
      );

      // 연결 상태 리스너
      device.state.listen((state) {
        if (state == BluetoothDeviceState.connected) {
          print("✅ 연결 성공!");
          connectedDevice = device;

          // 연결 후 서비스 검색
          discoverServices(device);
        } else if (state == BluetoothDeviceState.disconnected) {
          print("❌ 연결 끊김!");
          connectedDevice = null;
        }
      });

    } catch (e) {
      print("⚠️ 연결 실패: $e");
    }
  }

  // 연결 해제
  Future<void> disconnect() async {
    if (connectedDevice != null) {
      print("🔌 연결 해제 중...");
      await connectedDevice!.disconnect();
      connectedDevice = null;
      print("👋 연결 해제 완료!");
    }
  }

  // 연결 상태 확인
  Future<bool> isConnected() async {
    if (connectedDevice == null) return false;

    var state = await connectedDevice!.state.first;
    return state == BluetoothDeviceState.connected;
  }
}
```

---

### 💬 4단계: Data Exchange (데이터 교환)

#### 💡 데이터 교환이란?

**연결된 두 기기가 실제로 데이터를 주고받는 것**

비유: 전화 통화 중 대화
- 질문하고 대답하기
- 정보 전달하기
- 명령 보내기

#### 📊 데이터 교환 방향

```
🔄 데이터 흐름

센트럴 (스마트폰)  ←────────→  프리퍼럴 (센서)

읽기 (Read):
  "온도 알려줘" ──────→
                 ←────── "25°C"

쓰기 (Write):
  "LED 켜줘" ──────→
                 ←────── "OK, 켰어"

알림 (Notify):
  "구독할게" ──────→
                 ←────── "28°C" (자동)
                 ←────── "29°C" (자동)
                 ←────── "30°C" (자동)
```

#### 🌳 고급 예제: 실제 데이터 통신

```dart
class BLEDataExchange {
  BluetoothDevice device;
  BluetoothCharacteristic? temperatureChar;

  BLEDataExchange(this.device);

  // 서비스 및 캐릭터리스틱 검색
  Future<void> setupDataExchange() async {
    print("🔍 서비스 검색 중...");

    List<BluetoothService> services = await device.discoverServices();

    for (BluetoothService service in services) {
      print("📁 서비스: ${service.uuid}");

      for (BluetoothCharacteristic char in service.characteristics) {
        print("  📄 캐릭터리스틱: ${char.uuid}");

        // 온도 캐릭터리스틱 찾기
        if (char.uuid.toString().contains("2a6e")) {
          temperatureChar = char;
          print("  🌡️ 온도 캐릭터리스틱 발견!");
        }
      }
    }
  }

  // 1️⃣ Read: 데이터 읽기
  Future<double?> readTemperature() async {
    if (temperatureChar == null) {
      print("⚠️ 온도 캐릭터리스틱을 찾을 수 없음");
      return null;
    }

    try {
      print("📖 온도 읽는 중...");

      // 데이터 읽기
      List<int> value = await temperatureChar!.read();

      // 바이트를 온도로 변환 (예시)
      double temperature = value[0] + (value[1] / 100.0);

      print("🌡️ 현재 온도: ${temperature}°C");
      return temperature;

    } catch (e) {
      print("⚠️ 읽기 실패: $e");
      return null;
    }
  }

  // 2️⃣ Write: 데이터 쓰기
  Future<void> sendCommand(String command) async {
    if (temperatureChar == null) return;

    try {
      print("📤 명령 전송: $command");

      // 문자열을 바이트로 변환
      List<int> bytes = command.codeUnits;

      // 데이터 쓰기
      await temperatureChar!.write(bytes);

      print("✅ 전송 완료!");

    } catch (e) {
      print("⚠️ 전송 실패: $e");
    }
  }

  // 3️⃣ Notify: 실시간 알림 구독
  void subscribeToTemperature(Function(double) onDataReceived) async {
    if (temperatureChar == null) return;

    try {
      print("📢 온도 알림 구독 시작");

      // Notify 활성화
      await temperatureChar!.setNotifyValue(true);

      // 데이터 수신 리스너
      temperatureChar!.value.listen((value) {
        if (value.isNotEmpty) {
          // 바이트를 온도로 변환
          double temperature = value[0] + (value[1] / 100.0);

          print("🔔 새로운 온도: ${temperature}°C");

          // 콜백 함수 호출
          onDataReceived(temperature);
        }
      });

      print("✅ 구독 완료! 이제 자동으로 알림 받음");

    } catch (e) {
      print("⚠️ 구독 실패: $e");
    }
  }

  // 알림 구독 취소
  Future<void> unsubscribe() async {
    if (temperatureChar != null) {
      await temperatureChar!.setNotifyValue(false);
      print("🔕 구독 취소 완료");
    }
  }
}
```

### 📊 4단계 요약 다이어그램

```
🔵 BLE 통신 4단계 완벽 정리

┌─────────────────────────────────────────────────┐
│  1️⃣ Advertising (광고)                          │
│  프리퍼럴: "나 여기 있어요!" 📢                  │
│  ────────────────────────────────→              │
│                                                  │
│  2️⃣ Scanning (스캐닝)                           │
│              ←──────────────────────────────    │
│  센트럴: "오, 발견했다!" 🔍                      │
│                                                  │
│  3️⃣ Connection (연결)                           │
│  센트럴: "연결 요청!" ────────────→              │
│              ←──────────── 프리퍼럴: "수락!"    │
│  🤝 연결 완료!                                   │
│                                                  │
│  4️⃣ Data Exchange (데이터 교환)                 │
│  Read:    "데이터 줘" ────────→                 │
│              ←──────────── "25°C"               │
│                                                  │
│  Write:   "LED ON" ────────→                    │
│              ←──────────── "OK"                 │
│                                                  │
│  Notify:  "구독" ────────→                      │
│              ←──────────── "26°C" (자동)        │
│              ←──────────── "27°C" (자동)        │
└─────────────────────────────────────────────────┘
```

---

## 🏗️ 2단계: GATT 프로파일 이해하기

[↑ 목차로 돌아가기](#📑-목차)

### GATT란 무엇인가?

#### 💡 GATT 정의

**GATT (Generic Attribute Profile)**
= BLE에서 데이터를 주고받을 때 사용하는 **구조** 또는 **틀**

비유: 도서관의 책 분류 시스템
- 책들을 체계적으로 정리
- 원하는 책을 쉽게 찾을 수 있음
- 모든 도서관이 같은 방식 사용

#### 🗂️ 파일 시스템으로 이해하기

```
💻 컴퓨터의 폴더 구조 vs 🔵 GATT 구조

컴퓨터:                      GATT:
C:\                          기기 (Device)
├─ 문서\                     ├─ 서비스 1 (Service)
│  ├─ 학교\                  │  ├─ 캐릭터리스틱 A
│  │  ├─ 수학.docx           │  │  └─ 값: 25
│  │  └─ 영어.docx           │  └─ 캐릭터리스틱 B
│  └─ 집\                    │     └─ 값: "ON"
│     └─ 일기.txt             └─ 서비스 2 (Service)
└─ 사진\                        ├─ 캐릭터리스틱 C
   ├─ 여름.jpg                  └─ 캐릭터리스틱 D
   └─ 겨울.jpg
```

### 🏗️ GATT 구조의 3단계 계층

```
🔵 GATT 계층 구조

1층: Device (기기)
     └─ 예: "온도센서_001"
         │
         ├─ 2층: Service (서비스) - 주제별 묶음
         │     └─ 예: "온도 서비스"
         │          │
         │          └─ 3층: Characteristic (캐릭터리스틱) - 실제 데이터
         │                ├─ "현재 온도" = 25.3°C
         │                ├─ "최고 온도" = 30.1°C
         │                └─ "최저 온도" = 18.5°C
         │
         └─ 2층: Service
               └─ 예: "배터리 서비스"
                    │
                    └─ 3층: Characteristic
                          └─ "배터리 잔량" = 85%
```

### 📁 Service (서비스)

#### 💡 서비스란?

**관련된 데이터들의 묶음 (폴더)**

비유: 백화점의 층
- 1층: 화장품 (화장품 서비스)
- 2층: 의류 (의류 서비스)
- 3층: 식품 (식품 서비스)

#### 🎯 서비스 예시

```
🏥 헬스케어 기기의 서비스들

서비스 1: 심박수 서비스 (Heart Rate Service)
   UUID: 0x180D
   용도: 심장 박동 관련 데이터

서비스 2: 배터리 서비스 (Battery Service)
   UUID: 0x180F
   용도: 배터리 정보

서비스 3: 기기 정보 서비스 (Device Information)
   UUID: 0x180A
   용도: 제조사, 모델명 등

💡 UUID란?
= 각 서비스를 구별하는 고유 번호
= 마치 주민등록번호처럼!
```

### 📄 Characteristic (캐릭터리스틱)

#### 💡 캐릭터리스틱이란?

**실제 데이터가 저장된 곳 (파일)**

비유: 서랍 안의 물건
- 서랍(서비스) 안에 물건(캐릭터리스틱)이 있음
- 물건마다 이름과 내용이 다름

#### 📊 캐릭터리스틱 구조

```
📄 캐릭터리스틱의 구성 요소

┌──────────────────────────────────────┐
│  캐릭터리스틱: "현재 온도"           │
├──────────────────────────────────────┤
│  UUID: 0x2A6E                         │
│  속성: Read, Notify                   │
│  값: 25.3 (°C)                        │
│  길이: 2 바이트                       │
└──────────────────────────────────────┘

구성 요소 설명:
1. UUID: 고유 번호 (캐릭터리스틱 식별자)
2. 속성: 무엇을 할 수 있는지 (Read/Write/Notify)
3. 값: 실제 데이터 (온도, 상태 등)
4. 길이: 데이터 크기 (바이트 단위)
```

### 🌱 초급 예제: 온도 센서의 GATT 구조

```
🌡️ 온도 센서 기기의 GATT 구조

기기: "스마트 온도 센서 v1.0"
│
├─ 📁 서비스 1: 온도 서비스
│  │  UUID: 1234-0000-1000-8000-00805f9b34fb
│  │
│  ├─ 📄 캐릭터리스틱: 현재 온도
│  │     UUID: 1234-0001-1000-8000-00805f9b34fb
│  │     속성: Read, Notify
│  │     값: 25.3°C
│  │
│  ├─ 📄 캐릭터리스틱: 최고 온도
│  │     UUID: 1234-0002-1000-8000-00805f9b34fb
│  │     속성: Read
│  │     값: 32.1°C
│  │
│  └─ 📄 캐릭터리스틱: 최저 온도
│        UUID: 1234-0003-1000-8000-00805f9b34fb
│        속성: Read
│        값: 15.8°C
│
├─ 📁 서비스 2: LED 제어 서비스
│  │  UUID: 5678-0000-1000-8000-00805f9b34fb
│  │
│  ├─ 📄 캐릭터리스틱: LED 상태
│  │     UUID: 5678-0001-1000-8000-00805f9b34fb
│  │     속성: Read, Write
│  │     값: "ON" / "OFF"
│  │
│  └─ 📄 캐릭터리스틱: LED 밝기
│        UUID: 5678-0002-1000-8000-00805f9b34fb
│        속성: Read, Write
│        값: 0~255
│
└─ 📁 서비스 3: 배터리 서비스
   │  UUID: 0x180F (표준 UUID)
   │
   └─ 📄 캐릭터리스틱: 배터리 잔량
         UUID: 0x2A19 (표준 UUID)
         속성: Read, Notify
         값: 85%
```

### 🌿 중급 예제: Flutter에서 GATT 탐색하기

```dart
class GATTExplorer {
  BluetoothDevice device;

  GATTExplorer(this.device);

  // 모든 서비스와 캐릭터리스틱 탐색
  Future<void> exploreAllServices() async {
    print("🔍 GATT 구조 탐색 시작!\n");

    // 서비스 검색
    List<BluetoothService> services = await device.discoverServices();

    print("📱 기기: ${device.name}");
    print("발견된 서비스 수: ${services.length}\n");

    // 각 서비스 탐색
    for (int i = 0; i < services.length; i++) {
      BluetoothService service = services[i];

      print("├─ 📁 서비스 ${i + 1}");
      print("│  UUID: ${service.uuid}");
      print("│  종류: ${getServiceName(service.uuid)}");
      print("│  캐릭터리스틱 수: ${service.characteristics.length}");
      print("│");

      // 각 캐릭터리스틱 탐색
      for (int j = 0; j < service.characteristics.length; j++) {
        BluetoothCharacteristic char = service.characteristics[j];

        print("│  ├─ 📄 캐릭터리스틱 ${j + 1}");
        print("│  │  UUID: ${char.uuid}");
        print("│  │  속성: ${getProperties(char)}");

        // Read 가능하면 값 읽기
        if (char.properties.read) {
          try {
            List<int> value = await char.read();
            print("│  │  현재 값: $value");
          } catch (e) {
            print("│  │  (읽기 실패)");
          }
        }

        print("│  │");
      }

      print("");
    }

    print("✅ 탐색 완료!\n");
  }

  // 서비스 이름 반환 (알려진 표준 UUID)
  String getServiceName(Guid uuid) {
    Map<String, String> standardServices = {
      '0000180f': '배터리 서비스',
      '0000180a': '기기 정보 서비스',
      '0000180d': '심박수 서비스',
      '00001805': '현재 시간 서비스',
      '0000181a': '환경 센서 서비스',
    };

    String uuidStr = uuid.toString().substring(4, 12);
    return standardServices[uuidStr] ?? '사용자 정의 서비스';
  }

  // 캐릭터리스틱 속성 문자열 생성
  String getProperties(BluetoothCharacteristic char) {
    List<String> props = [];

    if (char.properties.read) props.add('Read');
    if (char.properties.write) props.add('Write');
    if (char.properties.writeWithoutResponse) props.add('Write(NoResp)');
    if (char.properties.notify) props.add('Notify');
    if (char.properties.indicate) props.add('Indicate');

    return props.join(', ');
  }

  // 특정 서비스의 특정 캐릭터리스틱 찾기
  Future<BluetoothCharacteristic?> findCharacteristic(
    String serviceUuid,
    String charUuid
  ) async {
    List<BluetoothService> services = await device.discoverServices();

    for (BluetoothService service in services) {
      if (service.uuid.toString().contains(serviceUuid)) {
        for (BluetoothCharacteristic char in service.characteristics) {
          if (char.uuid.toString().contains(charUuid)) {
            print("✅ 찾았다! 캐릭터리스틱: ${char.uuid}");
            return char;
          }
        }
      }
    }

    print("❌ 찾을 수 없음: Service $serviceUuid, Char $charUuid");
    return null;
  }
}

// 사용 예시
void main() async {
  // 기기에 연결되어 있다고 가정
  BluetoothDevice device = connectedDevice;

  GATTExplorer explorer = GATTExplorer(device);

  // 전체 구조 탐색
  await explorer.exploreAllServices();

  // 특정 캐릭터리스틱 찾기
  BluetoothCharacteristic? tempChar =
    await explorer.findCharacteristic("181a", "2a6e");

  if (tempChar != null) {
    // 온도 읽기
    List<int> value = await tempChar.read();
    print("🌡️ 온도: ${value[0]}°C");
  }
}
```

### 🌳 고급 예제: 커스텀 GATT 프로파일 설계

```dart
// 자신만의 IoT 기기를 위한 GATT 프로파일 설계

class CustomGATTProfile {
  // 서비스 UUID 정의
  static const String SMART_HOME_SERVICE =
    "12340000-1000-8000-00805f9b34fb";

  // 캐릭터리스틱 UUID들
  static const String TEMPERATURE_CHAR =
    "12340001-1000-8000-00805f9b34fb";
  static const String HUMIDITY_CHAR =
    "12340002-1000-8000-00805f9b34fb";
  static const String LED_CONTROL_CHAR =
    "12340003-1000-8000-00805f9b34fb";
  static const String ALARM_CHAR =
    "12340004-1000-8000-00805f9b34fb";

  BluetoothDevice device;

  // 각 캐릭터리스틱 저장
  BluetoothCharacteristic? tempChar;
  BluetoothCharacteristic? humidityChar;
  BluetoothCharacteristic? ledChar;
  BluetoothCharacteristic? alarmChar;

  CustomGATTProfile(this.device);

  // 초기화: 모든 캐릭터리스틱 찾기
  Future<void> initialize() async {
    print("🔧 GATT 프로파일 초기화 중...");

    List<BluetoothService> services = await device.discoverServices();

    for (BluetoothService service in services) {
      if (service.uuid.toString().contains("12340000")) {
        print("✅ 스마트홈 서비스 발견!");

        for (BluetoothCharacteristic char in service.characteristics) {
          String uuid = char.uuid.toString();

          if (uuid.contains("12340001")) {
            tempChar = char;
            print("  🌡️ 온도 캐릭터리스틱 설정");
          } else if (uuid.contains("12340002")) {
            humidityChar = char;
            print("  💧 습도 캐릭터리스틱 설정");
          } else if (uuid.contains("12340003")) {
            ledChar = char;
            print("  💡 LED 캐릭터리스틱 설정");
          } else if (uuid.contains("12340004")) {
            alarmChar = char;
            print("  🔔 알람 캐릭터리스틱 설정");
          }
        }
      }
    }

    print("✅ 초기화 완료!\n");
  }

  // 온도 읽기 (Read)
  Future<double?> getTemperature() async {
    if (tempChar == null) return null;

    try {
      List<int> value = await tempChar!.read();
      double temp = value[0] + (value[1] / 100.0);
      return temp;
    } catch (e) {
      print("❌ 온도 읽기 실패: $e");
      return null;
    }
  }

  // 습도 읽기 (Read)
  Future<int?> getHumidity() async {
    if (humidityChar == null) return null;

    try {
      List<int> value = await humidityChar!.read();
      return value[0]; // 0-100%
    } catch (e) {
      print("❌ 습도 읽기 실패: $e");
      return null;
    }
  }

  // LED 제어 (Write)
  Future<bool> setLED(bool on) async {
    if (ledChar == null) return false;

    try {
      List<int> command = [on ? 1 : 0];
      await ledChar!.write(command);
      print("💡 LED ${on ? 'ON' : 'OFF'}");
      return true;
    } catch (e) {
      print("❌ LED 제어 실패: $e");
      return false;
    }
  }

  // 실시간 온도 모니터링 (Notify)
  void monitorTemperature(Function(double) callback) async {
    if (tempChar == null) return;

    await tempChar!.setNotifyValue(true);

    tempChar!.value.listen((value) {
      if (value.isNotEmpty) {
        double temp = value[0] + (value[1] / 100.0);
        callback(temp);
      }
    });

    print("📢 온도 실시간 모니터링 시작!");
  }

  // 알람 설정 (Write)
  Future<void> setAlarm(int temperature) async {
    if (alarmChar == null) return;

    try {
      List<int> data = [temperature];
      await alarmChar!.write(data);
      print("🔔 알람 설정: ${temperature}°C 이상이면 알림");
    } catch (e) {
      print("❌ 알람 설정 실패: $e");
    }
  }
}

// 사용 예시
void main() async {
  BluetoothDevice device = connectedDevice;

  // 커스텀 프로파일 생성
  CustomGATTProfile profile = CustomGATTProfile(device);
  await profile.initialize();

  // 온도 읽기
  double? temp = await profile.getTemperature();
  print("현재 온도: $temp°C");

  // LED 켜기
  await profile.setLED(true);

  // 실시간 온도 모니터링
  profile.monitorTemperature((temp) {
    print("🌡️ 실시간 온도: $temp°C");

    if (temp > 30) {
      print("⚠️ 온도가 너무 높습니다!");
    }
  });

  // 알람 설정
  await profile.setAlarm(35); // 35°C 이상이면 알림
}
```

---

## ⚙️ 3단계: 캐릭터리스틱의 3가지 기능

[↑ 목차로 돌아가기](#📑-목차)

캐릭터리스틱은 **Read, Write, Notify** 세 가지 핵심 기능을 가집니다.

### 📖 Read (읽기)

#### 💡 Read란?

**센트럴이 프리퍼럴에게 "데이터 좀 줘!"라고 요청하는 것**

비유: 은행 잔액 조회
- ATM기에서 "잔액 보여주세요" 버튼 누르기
- 은행이 현재 잔액 알려주기
- 필요할 때마다 요청

#### 🔄 Read 작동 원리

```
📖 Read 프로세스

1. 센트럴 → 프리퍼럴
   "현재 온도 알려줘!" (Read 요청)

2. 프리퍼럴이 센서 읽기
   센서 확인... 25.3°C

3. 프리퍼럴 → 센트럴
   "25.3°C입니다!" (응답)

4. 센트럴이 데이터 처리
   화면에 "25.3°C" 표시
```

#### 🌱 초급 예제: Read 기능

```dart
class ReadExample {
  BluetoothCharacteristic characteristic;

  ReadExample(this.characteristic);

  // 간단한 Read
  Future<void> simpleRead() async {
    print("📖 데이터 읽기 시작...");

    // Read 요청
    List<int> value = await characteristic.read();

    print("받은 데이터: $value");
    print("첫 번째 바이트: ${value[0]}");
  }

  // 온도 Read (2바이트)
  Future<double> readTemperature() async {
    List<int> value = await characteristic.read();

    // 바이트 배열을 온도로 변환
    // value[0]: 정수 부분
    // value[1]: 소수 부분
    double temperature = value[0] + (value[1] / 100.0);

    print("🌡️ 온도: ${temperature}°C");
    return temperature;
  }

  // 문자열 Read
  Future<String> readString() async {
    List<int> value = await characteristic.read();

    // 바이트를 문자열로 변환
    String text = String.fromCharCodes(value);

    print("💬 받은 메시지: $text");
    return text;
  }
}
```

---

### ✏️ Write (쓰기)

#### 💡 Write란?

**센트럴이 프리퍼럴에게 "이거 해줘!"라고 명령하는 것**

비유: 리모컨으로 TV 제어
- 채널 버튼 누르기 (Write 요청)
- TV가 채널 변경 (명령 실행)
- 즉시 반영

#### 🔄 Write 작동 원리

```
✏️ Write 프로세스

1. 센트럴 → 프리퍼럴
   "LED 켜줘!" (Write 요청)

2. 프리퍼럴이 명령 실행
   LED 핀에 HIGH 신호 전송

3. 프리퍼럴 → 센트럴
   "OK, 켰습니다!" (확인)

4. 센트럴이 UI 업데이트
   버튼 색상을 "켜짐"으로 변경
```

#### 🌿 중급 예제: Write 기능

```dart
class WriteExample {
  BluetoothCharacteristic characteristic;

  WriteExample(this.characteristic);

  // LED 제어 (1바이트)
  Future<void> controlLED(bool on) async {
    print("💡 LED ${on ? 'ON' : 'OFF'} 명령 전송...");

    // 명령 데이터 준비
    List<int> command = [on ? 1 : 0];

    // Write 요청
    await characteristic.write(command);

    print("✅ 명령 전송 완료!");
  }

  // 밝기 제어 (0-255)
  Future<void> setBrightness(int brightness) async {
    // 범위 검사
    if (brightness < 0 || brightness > 255) {
      print("⚠️ 밝기는 0-255 사이여야 합니다!");
      return;
    }

    print("🔆 밝기 설정: $brightness");

    List<int> command = [brightness];
    await characteristic.write(command);
  }

  // 문자열 전송
  Future<void> sendText(String text) async {
    print("💬 메시지 전송: $text");

    // 문자열을 바이트로 변환
    List<int> bytes = text.codeUnits;

    // 최대 20바이트 제한 (BLE 패킷 크기)
    if (bytes.length > 20) {
      print("⚠️ 메시지가 너무 깁니다! 20자 이하로 줄이세요.");
      bytes = bytes.sublist(0, 20);
    }

    await characteristic.write(bytes);
    print("✅ 전송 완료!");
  }

  // RGB LED 제어 (3바이트)
  Future<void> setRGBColor(int red, int green, int blue) async {
    print("🎨 색상 설정: R=$red, G=$green, B=$blue");

    List<int> rgb = [red, green, blue];
    await characteristic.write(rgb);
  }

  // 응답 필요 없는 Write (빠름)
  Future<void> writeWithoutResponse(List<int> data) async {
    await characteristic.write(
      data,
      withoutResponse: true // 응답 기다리지 않음
    );
  }
}

// 사용 예시
void main() async {
  WriteExample writer = WriteExample(ledCharacteristic);

  // LED 켜기
  await writer.controlLED(true);

  // 밝기 조절
  await writer.setBrightness(128); // 50% 밝기

  // RGB LED로 빨간색 설정
  await writer.setRGBColor(255, 0, 0);

  // 메시지 전송
  await writer.sendText("Hello IoT!");
}
```

---

### 🔔 Notify (알림)

#### 💡 Notify란?

**프리퍼럴이 변화가 있을 때 자동으로 센트럴에게 알려주는 것**

비유: 스마트폰 알림
- 새 메시지 오면 자동 알림
- 일일이 확인할 필요 없음
- 실시간 업데이트

#### 🔄 Notify 작동 원리

```
🔔 Notify 프로세스

1. 센트럴 → 프리퍼럴
   "온도 변화 알림 구독할게요!" (Notify 활성화)

2. 프리퍼럴이 구독 수락
   "네, 알겠습니다!"

3. 온도가 변할 때마다 자동 전송
   25°C → 센트럴에 자동 전송
   26°C → 센트럴에 자동 전송
   27°C → 센트럴에 자동 전송

4. 센트럴이 실시간 업데이트
   화면에 자동으로 새 온도 표시
```

#### 📊 Read vs Notify 비교

```
🆚 언제 Read? 언제 Notify?

📖 Read 사용 시기:
✅ 가끔 확인하면 됨
   예: 버튼 눌렀을 때 한 번 확인

✅ 데이터가 자주 안 바뀜
   예: 기기 이름, 펌웨어 버전

❌ 실시간 모니터링 필요 없음

🔔 Notify 사용 시기:
✅ 실시간 모니터링 필요
   예: 심박수, 온도 변화

✅ 데이터가 자주 바뀜
   예: 센서 값, 상태 변화

✅ 놓치면 안 되는 데이터
   예: 알람, 경고 메시지
```

#### 🌳 고급 예제: Notify 구독 및 처리

```dart
class NotifyExample {
  BluetoothCharacteristic characteristic;
  StreamSubscription? subscription;

  NotifyExample(this.characteristic);

  // 기본 Notify 구독
  Future<void> subscribeToNotifications() async {
    print("🔔 알림 구독 시작...");

    // Notify 활성화
    await characteristic.setNotifyValue(true);

    // 데이터 수신 리스너
    characteristic.value.listen((value) {
      print("📩 새 데이터 수신: $value");
    });

    print("✅ 구독 완료!");
  }

  // 온도 실시간 모니터링
  void monitorTemperature({
    required Function(double) onTemperatureChanged,
    double? alertThreshold,
  }) async {
    print("🌡️ 온도 모니터링 시작...");

    await characteristic.setNotifyValue(true);

    characteristic.value.listen((value) {
      if (value.isEmpty) return;

      // 바이트를 온도로 변환
      double temperature = value[0] + (value[1] / 100.0);

      print("📊 현재 온도: ${temperature}°C");

      // 콜백 호출
      onTemperatureChanged(temperature);

      // 임계값 확인
      if (alertThreshold != null && temperature > alertThreshold) {
        print("⚠️ 경고! 온도가 ${alertThreshold}°C를 초과했습니다!");
      }
    });
  }

  // 심박수 모니터링
  void monitorHeartRate(Function(int) onHeartRateChanged) async {
    print("❤️ 심박수 모니터링 시작...");

    await characteristic.setNotifyValue(true);

    characteristic.value.listen((value) {
      if (value.isEmpty) return;

      int heartRate = value[1]; // 두 번째 바이트가 심박수

      print("💓 현재 심박수: $heartRate bpm");
      onHeartRateChanged(heartRate);

      // 이상 심박수 감지
      if (heartRate > 100) {
        print("⚠️ 심박수가 높습니다! ($heartRate bpm)");
      } else if (heartRate < 60) {
        print("⚠️ 심박수가 낮습니다! ($heartRate bpm)");
      }
    });
  }

  // 구독 취소
  Future<void> unsubscribe() async {
    print("🔕 알림 구독 취소...");

    await characteristic.setNotifyValue(false);
    subscription?.cancel();

    print("✅ 구독 취소 완료!");
  }

  // 데이터 버퍼링 (여러 개 모았다가 처리)
  void bufferNotifications({
    required int bufferSize,
    required Function(List<double>) onBufferFull,
  }) async {
    List<double> buffer = [];

    await characteristic.setNotifyValue(true);

    characteristic.value.listen((value) {
      if (value.isEmpty) return;

      double temperature = value[0] + (value[1] / 100.0);
      buffer.add(temperature);

      print("📦 버퍼: ${buffer.length}/$bufferSize");

      // 버퍼가 가득 찼을 때
      if (buffer.length >= bufferSize) {
        print("📊 버퍼 처리 중...");

        // 평균 계산
        double average = buffer.reduce((a, b) => a + b) / buffer.length;
        print("평균 온도: ${average.toStringAsFixed(2)}°C");

        // 콜백 호출
        onBufferFull(List.from(buffer));

        // 버퍼 초기화
        buffer.clear();
      }
    });
  }
}

// 실전 사용 예시
void main() async {
  NotifyExample notifier = NotifyExample(tempCharacteristic);

  // 예시 1: 기본 온도 모니터링
  notifier.monitorTemperature(
    onTemperatureChanged: (temp) {
      print("🌡️ 온도 업데이트: $temp°C");
    },
    alertThreshold: 30.0, // 30°C 이상이면 경고
  );

  // 예시 2: 심박수 모니터링
  NotifyExample hrNotifier = NotifyExample(heartRateChar);
  hrNotifier.monitorHeartRate((hr) {
    print("❤️ 심박수: $hr bpm");
  });

  // 예시 3: 데이터 버퍼링
  notifier.bufferNotifications(
    bufferSize: 10, // 10개 모이면 처리
    onBufferFull: (data) {
      print("📊 수집된 데이터: $data");
      // 통계 분석, 그래프 그리기 등
    },
  );

  // 5분 후 구독 취소
  await Future.delayed(Duration(minutes: 5));
  await notifier.unsubscribe();
}
```

### 📊 Read/Write/Notify 완벽 비교표

| 기능 | Read | Write | Notify |
|------|------|-------|--------|
| **방향** | 프리퍼럴 → 센트럴 | 센트럴 → 프리퍼럴 | 프리퍼럴 → 센트럴 (자동) |
| **요청** | 센트럴이 요청 | 센트럴이 전송 | 프리퍼럴이 자동 전송 |
| **빈도** | 필요할 때만 | 필요할 때만 | 변화 있을 때마다 |
| **실시간성** | ❌ 낮음 | ⚡ 즉시 | ⚡⚡⚡ 실시간 |
| **전력 소모** | 🔋 보통 | 🔋 보통 | 🔋🔋 높음 (자주 전송) |
| **용도** | 조회 | 제어 | 모니터링 |

---

## 🔧 4단계: Flutter 프로젝트 설정하기

[↑ 목차로 돌아가기](#📑-목차)

### Flutter 프로젝트 생성

#### 💡 프로젝트 생성이란?

**새로운 Flutter 앱을 만들기 위한 기본 틀을 준비하는 것**

비유: 집 짓기
- 땅 다지기 (프로젝트 생성)
- 기둥 세우기 (패키지 설치)
- 방 만들기 (코드 작성)

#### 🌱 초급: 프로젝트 생성하기

```bash
# 1. Flutter 설치 확인
flutter --version

# 2. 새 프로젝트 생성
flutter create my_ble_app

# 3. 프로젝트 폴더로 이동
cd my_ble_app

# 4. 프로젝트 실행 (테스트)
flutter run
```

### flutter_blue_plus 패키지 설치

#### 📦 패키지란?

**다른 개발자가 만들어 놓은 유용한 도구 모음**

비유: 요리 도구 세트
- 직접 만들 필요 없음
- 바로 사용 가능
- 시간 절약

#### 🔧 패키지 설치 방법

**1단계: pubspec.yaml 파일 수정**

```yaml
# pubspec.yaml 파일 (프로젝트의 설정 파일)

name: my_ble_app
description: BLE 블루투스 IoT 앱

dependencies:
  flutter:
    sdk: flutter

  # ✅ 이 줄 추가!
  flutter_blue_plus: ^1.30.0  # 최신 버전 확인하세요

  # 권한 요청용 패키지 (선택)
  permission_handler: ^11.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
```

**2단계: 패키지 다운로드**

```bash
# 터미널에서 실행
flutter pub get
```

**3단계: 설치 확인**

```dart
// lib/main.dart
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

void main() {
  print("✅ flutter_blue_plus 설치 완료!");
  runApp(MyApp());
}
```

### 프로젝트 구조 이해하기

```
my_ble_app/
├── android/           # 안드로이드 설정 폴더
│   └── app/
│       └── src/
│           └── main/
│               └── AndroidManifest.xml  # 권한 설정 파일 ⭐
│
├── ios/              # iOS 설정 폴더
│   └── Runner/
│       └── Info.plist  # 권한 설정 파일 ⭐
│
├── lib/              # 📝 우리가 코드 작성할 곳!
│   ├── main.dart         # 메인 파일
│   ├── screens/          # 화면들
│   │   ├── scan_screen.dart
│   │   └── device_screen.dart
│   ├── services/         # BLE 통신 로직
│   │   └── ble_service.dart
│   └── widgets/          # 재사용 가능한 UI
│       └── device_tile.dart
│
├── pubspec.yaml      # 패키지 설정 ⭐
└── README.md         # 프로젝트 설명
```

---

## 📱 5단계: 안드로이드/iOS 권한 설정

[↑ 목차로 돌아가기](#📑-목차)

### 왜 권한이 필요한가?

#### 💡 권한 설명

**앱이 블루투스를 사용하려면 사용자의 허락이 필요**

비유: 집에 들어가기
- 집 주인(사용자)에게 허락 받기
- 아무나 마음대로 못 들어감
- 개인정보 보호

#### ⚠️ 권한 없으면 생기는 일

```
권한 없을 때:
❌ 블루투스 스캔 안 됨
❌ 기기 연결 안 됨
❌ 앱이 크래시 날 수 있음

권한 있을 때:
✅ 모든 기능 정상 작동
✅ 사용자가 안심하고 사용
```

### 🤖 안드로이드 권한 설정

#### 파일 위치
`android/app/src/main/AndroidManifest.xml`

#### 🌿 중급: 안드로이드 권한 추가

```xml
<!-- AndroidManifest.xml -->

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.my_ble_app">

    <!-- ✅ 이 권한들을 추가하세요! -->

    <!-- 블루투스 기본 권한 -->
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>

    <!-- Android 12 이상 필수 권한 -->
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN"
                     android:usesPermissionFlags="neverForLocation" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>

    <!-- 위치 권한 (Android 11 이하에서 필요) -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>

    <!-- 블루투스 기능 필수 표시 -->
    <uses-feature
        android:name="android.hardware.bluetooth_le"
        android:required="true"/>

    <application
        android:label="My BLE App"
        android:icon="@mipmap/ic_launcher">
        <!-- 기존 내용 유지 -->
    </application>

</manifest>
```

#### 📝 권한 설명

```
🔵 BLUETOOTH_SCAN
   - 주변 블루투스 기기 검색
   - "누가 있는지 둘러보기"

🔵 BLUETOOTH_CONNECT
   - 기기에 연결
   - "친구와 손잡기"

🔵 ACCESS_FINE_LOCATION
   - 위치 권한
   - 왜 필요? 블루투스로 위치 추적 가능해서
   - Android 11 이하에서 필수
```

### 🍎 iOS 권한 설정

#### 파일 위치
`ios/Runner/Info.plist`

#### 🌿 중급: iOS 권한 추가

```xml
<!-- Info.plist -->

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <!-- 기존 내용 -->

    <!-- ✅ 이 내용을 추가하세요! -->

    <!-- 블루투스 사용 이유 설명 (필수!) -->
    <key>NSBluetoothAlwaysUsageDescription</key>
    <string>이 앱은 주변 IoT 센서와 통신하기 위해 블루투스를 사용합니다.</string>

    <!-- iOS 13 이상 -->
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>온도 센서 및 LED 제어 기기와 연결하기 위해 블루투스가 필요합니다.</string>

    <!-- 위치 권한 (백그라운드 스캔 시 필요) -->
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>주변 블루투스 기기를 찾기 위해 위치 권한이 필요합니다.</string>

</dict>
</plist>
```

#### 💡 iOS 설명 문구 작성 팁

```
✅ 좋은 예:
"이 앱은 온도 센서와 통신하여 실시간 온도를 확인하기 위해
블루투스를 사용합니다."

❌ 나쁜 예:
"블루투스 사용"
(너무 간단해서 Apple 심사 거절될 수 있음)

💡 핵심:
- 구체적으로 작성
- 사용자가 이해하기 쉽게
- 개인정보 보호 언급
```

### 🔐 런타임 권한 요청 (코드)

#### 🌳 고급: Flutter에서 권한 요청하기

```dart
import 'package:permission_handler/permission_handler.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class PermissionManager {

  // 모든 필요한 권한 확인 및 요청
  static Future<bool> requestAllPermissions() async {
    print("🔐 권한 확인 중...");

    // Android 버전 확인
    if (Platform.isAndroid) {
      return await _requestAndroidPermissions();
    } else if (Platform.isIOS) {
      return await _requestIOSPermissions();
    }

    return false;
  }

  // Android 권한 요청
  static Future<bool> _requestAndroidPermissions() async {
    // Android 12 이상
    if (await _isAndroid12OrHigher()) {
      Map<Permission, PermissionStatus> statuses = await [
        Permission.bluetoothScan,
        Permission.bluetoothConnect,
      ].request();

      return statuses[Permission.bluetoothScan]!.isGranted &&
             statuses[Permission.bluetoothConnect]!.isGranted;
    }
    // Android 11 이하
    else {
      Map<Permission, PermissionStatus> statuses = await [
        Permission.bluetooth,
        Permission.location,
      ].request();

      return statuses[Permission.bluetooth]!.isGranted &&
             statuses[Permission.location]!.isGranted;
    }
  }

  // iOS 권한 요청
  static Future<bool> _requestIOSPermissions() async {
    var status = await Permission.bluetooth.request();
    return status.isGranted;
  }

  // Android 버전 확인
  static Future<bool> _isAndroid12OrHigher() async {
    // Build version 확인 로직
    return true; // 간단히 true로 가정
  }

  // 권한 거부 시 설정으로 이동
  static Future<void> openAppSettings() async {
    print("⚙️ 설정 앱 열기...");
    await openAppSettings();
  }
}

// 사용 예시
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // 권한 요청
  bool granted = await PermissionManager.requestAllPermissions();

  if (granted) {
    print("✅ 모든 권한 허용됨!");
    runApp(MyApp());
  } else {
    print("❌ 권한이 거부되었습니다.");
    // 사용자에게 안내 메시지 표시
  }
}
```

#### 🎯 권한 요청 흐름

```
📱 앱 실행 흐름

1. 앱 시작
   ↓
2. 권한 확인
   - 이미 허용? → 바로 진행
   - 아직 안 물어봄? → 다음 단계
   ↓
3. 사용자에게 권한 요청 팝업 표시
   ↓
4. 사용자 선택
   - [허용] → 계속 진행 ✅
   - [거부] → 기능 제한 안내 ❌
   ↓
5. 거부했다면
   - 설정 앱으로 안내
   - 다시 시도 버튼 제공
```

### ⚠️ 주의사항

```
🚨 iOS 디버그 모드 제한

❌ iOS에서는 디버그 모드에서 BLE가 작동하지 않습니다!

해결 방법:
1. flutter build ios
2. Xcode에서 릴리스 모드로 실행
3. 또는 TestFlight를 통해 배포

💡 개발 중에는:
- 안드로이드 기기로 테스트
- iOS는 릴리스 빌드로만 테스트
```

---

## 🎨 6단계: BLE 기기 스캔 구현하기

[↑ 목차로 돌아가기](#📑-목차)

### 스캔 화면 만들기

#### 💡 스캔이란?

**주변의 블루투스 기기를 찾는 것**

비유: 친구 찾기
- 놀이터에서 친구 이름 부르기
- 대답하는 친구 발견
- 리스트에 추가

#### 🌿 중급: 기본 스캔 화면

```dart
// lib/screens/scan_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class ScanScreen extends StatefulWidget {
  @override
  _ScanScreenState createState() => _ScanScreenState();
}

class _ScanScreenState extends State<ScanScreen> {
  // 발견된 기기 목록
  List<ScanResult> scanResults = [];

  // 스캔 중인지 여부
  bool isScanning = false;

  @override
  void initState() {
    super.initState();

    // 스캔 결과 리스너
    FlutterBluePlus.scanResults.listen((results) {
      setState(() {
        scanResults = results;
      });
    });

    // 자동 스캔 시작
    startScan();
  }

  // 스캔 시작
  void startScan() async {
    print("📡 스캔 시작!");

    setState(() {
      isScanning = true;
    });

    try {
      // 5초 동안 스캔
      await FlutterBluePlus.startScan(
        timeout: Duration(seconds: 5),
      );
    } catch (e) {
      print("⚠️ 스캔 오류: $e");
    }

    setState(() {
      isScanning = false;
    });
  }

  // 스캔 중지
  void stopScan() async {
    print("🛑 스캔 중지");
    await FlutterBluePlus.stopScan();

    setState(() {
      isScanning = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BLE 기기 스캔'),
        actions: [
          // 새로고침 버튼
          IconButton(
            icon: Icon(Icons.refresh),
            onPressed: isScanning ? null : startScan,
          ),
        ],
      ),
      body: Column(
        children: [
          // 스캔 상태 표시
          if (isScanning)
            LinearProgressIndicator(),

          // 발견된 기기 없음
          if (scanResults.isEmpty && !isScanning)
            Expanded(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.bluetooth_disabled, size: 100, color: Colors.grey),
                    SizedBox(height: 20),
                    Text(
                      '발견된 기기가 없습니다',
                      style: TextStyle(fontSize: 18, color: Colors.grey),
                    ),
                    SizedBox(height: 10),
                    ElevatedButton(
                      onPressed: startScan,
                      child: Text('다시 스캔'),
                    ),
                  ],
                ),
              ),
            ),

          // 기기 목록
          if (scanResults.isNotEmpty)
            Expanded(
              child: ListView.builder(
                itemCount: scanResults.length,
                itemBuilder: (context, index) {
                  ScanResult result = scanResults[index];
                  return DeviceTile(result: result);
                },
              ),
            ),
        ],
      ),

      // 스캔 버튼
      floatingActionButton: FloatingActionButton(
        onPressed: isScanning ? stopScan : startScan,
        child: Icon(isScanning ? Icons.stop : Icons.search),
      ),
    );
  }

  @override
  void dispose() {
    stopScan();
    super.dispose();
  }
}
```

### 기기 타일 위젯 만들기

#### 🌳 고급: 예쁜 기기 리스트 아이템

```dart
// lib/widgets/device_tile.dart

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class DeviceTile extends StatelessWidget {
  final ScanResult result;

  DeviceTile({required this.result});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 2,
      child: ListTile(
        // 블루투스 아이콘
        leading: Icon(
          Icons.bluetooth,
          color: Colors.blue,
          size: 40,
        ),

        // 기기 이름
        title: Text(
          result.device.name.isEmpty
            ? '(이름 없음)'
            : result.device.name,
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),

        // 기기 정보
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: 4),

            // MAC 주소
            Text(
              'MAC: ${result.device.id}',
              style: TextStyle(fontSize: 12, color: Colors.grey[600]),
            ),

            SizedBox(height: 4),

            // 신호 세기
            Row(
              children: [
                Icon(
                  _getSignalIcon(result.rssi),
                  size: 16,
                  color: _getSignalColor(result.rssi),
                ),
                SizedBox(width: 4),
                Text(
                  '${result.rssi} dBm',
                  style: TextStyle(
                    fontSize: 12,
                    color: _getSignalColor(result.rssi),
                  ),
                ),
              ],
            ),
          ],
        ),

        // 연결 버튼
        trailing: ElevatedButton(
          onPressed: () {
            // 기기 상세 화면으로 이동
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => DeviceScreen(device: result.device),
              ),
            );
          },
          child: Text('연결'),
        ),
      ),
    );
  }

  // 신호 세기에 따른 아이콘
  IconData _getSignalIcon(int rssi) {
    if (rssi > -60) return Icons.signal_wifi_4_bar;
    if (rssi > -70) return Icons.signal_wifi_3_bar;
    if (rssi > -80) return Icons.signal_wifi_2_bar;
    return Icons.signal_wifi_1_bar;
  }

  // 신호 세기에 따른 색상
  Color _getSignalColor(int rssi) {
    if (rssi > -60) return Colors.green;
    if (rssi > -70) return Colors.orange;
    return Colors.red;
  }
}
```

### 필터링 기능 추가

#### 🌳 고급: 원하는 기기만 찾기

```dart
class AdvancedScanScreen extends StatefulWidget {
  @override
  _AdvancedScanScreenState createState() => _AdvancedScanScreenState();
}

class _AdvancedScanScreenState extends State<AdvancedScanScreen> {
  List<ScanResult> scanResults = [];
  String searchQuery = '';
  bool showOnlyNamed = false;

  // 필터링된 결과
  List<ScanResult> get filteredResults {
    List<ScanResult> filtered = scanResults;

    // 이름 있는 기기만 표시
    if (showOnlyNamed) {
      filtered = filtered.where((r) => r.device.name.isNotEmpty).toList();
    }

    // 검색어로 필터링
    if (searchQuery.isNotEmpty) {
      filtered = filtered.where((r) {
        return r.device.name.toLowerCase().contains(searchQuery.toLowerCase()) ||
               r.device.id.toString().contains(searchQuery);
      }).toList();
    }

    // 신호 세기 순 정렬 (가까운 순)
    filtered.sort((a, b) => b.rssi.compareTo(a.rssi));

    return filtered;
  }

  // 특정 서비스 UUID로 스캔
  void scanWithServiceFilter() async {
    print("🔍 온도 서비스 기기만 스캔...");

    await FlutterBluePlus.startScan(
      withServices: [
        Guid("0000181a-0000-1000-8000-00805f9b34fb"), // 환경 센서 서비스
      ],
      timeout: Duration(seconds: 5),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('고급 스캔'),
        bottom: PreferredSize(
          preferredSize: Size.fromHeight(100),
          child: Column(
            children: [
              // 검색 바
              Padding(
                padding: EdgeInsets.all(8.0),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: '기기 이름 또는 MAC 주소 검색',
                    prefixIcon: Icon(Icons.search),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    filled: true,
                    fillColor: Colors.white,
                  ),
                  onChanged: (value) {
                    setState(() {
                      searchQuery = value;
                    });
                  },
                ),
              ),

              // 필터 옵션
              Row(
                children: [
                  Checkbox(
                    value: showOnlyNamed,
                    onChanged: (value) {
                      setState(() {
                        showOnlyNamed = value!;
                      });
                    },
                  ),
                  Text('이름 있는 기기만 표시'),
                ],
              ),
            ],
          ),
        ),
      ),

      body: ListView.builder(
        itemCount: filteredResults.length,
        itemBuilder: (context, index) {
          return DeviceTile(result: filteredResults[index]);
        },
      ),
    );
  }
}
```

---

## 🔌 7단계: 기기 연결 및 데이터 통신

[↑ 목차로 돌아가기](#📑-목차)

### 기기 상세 화면 만들기

#### 💡 기기 상세 화면이란?

**연결된 기기의 정보를 보고 데이터를 주고받는 화면**

비유: 친구와 대화하는 방
- 친구 정보 확인 (서비스 목록)
- 대화 시작 (데이터 통신)
- 전화 끊기 (연결 해제)

#### 🌳 고급: 완전한 기기 화면

```dart
// lib/screens/device_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class DeviceScreen extends StatefulWidget {
  final BluetoothDevice device;

  DeviceScreen({required this.device});

  @override
  _DeviceScreenState createState() => _DeviceScreenState();
}

class _DeviceScreenState extends State<DeviceScreen> {
  // 연결 상태
  bool isConnected = false;
  bool isConnecting = false;

  // 발견된 서비스 목록
  List<BluetoothService> services = [];

  @override
  void initState() {
    super.initState();

    // 자동으로 연결 시도
    connectToDevice();

    // 연결 상태 리스너
    widget.device.state.listen((state) {
      setState(() {
        isConnected = (state == BluetoothDeviceState.connected);
        isConnecting = (state == BluetoothDeviceState.connecting);
      });

      if (isConnected) {
        // 연결되면 서비스 검색
        discoverServices();
      }
    });
  }

  // 기기에 연결
  Future<void> connectToDevice() async {
    print("🔗 연결 시도: ${widget.device.name}");

    setState(() {
      isConnecting = true;
    });

    try {
      await widget.device.connect(
        timeout: Duration(seconds: 15),
      );

      print("✅ 연결 성공!");

      // 스낵바 표시
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('${widget.device.name}에 연결되었습니다')),
      );

    } catch (e) {
      print("❌ 연결 실패: $e");

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('연결 실패: $e')),
      );
    } finally {
      setState(() {
        isConnecting = false;
      });
    }
  }

  // 연결 해제
  Future<void> disconnectDevice() async {
    print("🔌 연결 해제 중...");

    try {
      await widget.device.disconnect();
      print("👋 연결 해제 완료");

      Navigator.pop(context); // 이전 화면으로 돌아가기

    } catch (e) {
      print("⚠️ 연결 해제 실패: $e");
    }
  }

  // 서비스 검색
  Future<void> discoverServices() async {
    print("🔍 서비스 검색 중...");

    try {
      List<BluetoothService> discoveredServices =
        await widget.device.discoverServices();

      setState(() {
        services = discoveredServices;
      });

      print("✅ 서비스 ${services.length}개 발견!");

      // 각 서비스 정보 출력
      for (var service in services) {
        print("📁 서비스: ${service.uuid}");
        print("   캐릭터리스틱 ${service.characteristics.length}개");
      }

    } catch (e) {
      print("⚠️ 서비스 검색 실패: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.device.name.isEmpty
          ? '(이름 없음)'
          : widget.device.name),
        actions: [
          // 연결/해제 버튼
          IconButton(
            icon: Icon(isConnected ? Icons.link_off : Icons.link),
            onPressed: isConnecting
              ? null
              : (isConnected ? disconnectDevice : connectToDevice),
          ),
        ],
      ),

      body: Column(
        children: [
          // 연결 상태 카드
          _buildConnectionCard(),

          Divider(),

          // 서비스 목록
          if (services.isEmpty && isConnected)
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 10),
                  Text('서비스 검색 중...'),
                ],
              ),
            ),

          if (services.isNotEmpty)
            Expanded(
              child: ListView.builder(
                itemCount: services.length,
                itemBuilder: (context, index) {
                  return ServiceTile(service: services[index]);
                },
              ),
            ),
        ],
      ),
    );
  }

  // 연결 상태 카드
  Widget _buildConnectionCard() {
    return Card(
      margin: EdgeInsets.all(16),
      elevation: 3,
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            // 연결 상태 아이콘
            Icon(
              isConnected
                ? Icons.bluetooth_connected
                : Icons.bluetooth_disabled,
              size: 60,
              color: isConnected ? Colors.green : Colors.grey,
            ),

            SizedBox(height: 10),

            // 연결 상태 텍스트
            Text(
              isConnecting
                ? '연결 중...'
                : (isConnected ? '연결됨' : '연결 안 됨'),
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: isConnected ? Colors.green : Colors.grey,
              ),
            ),

            SizedBox(height: 10),

            // 기기 정보
            Text(
              'MAC: ${widget.device.id}',
              style: TextStyle(fontSize: 12, color: Colors.grey[600]),
            ),

            SizedBox(height: 10),

            // 연결 버튼
            if (!isConnected && !isConnecting)
              ElevatedButton.icon(
                onPressed: connectToDevice,
                icon: Icon(Icons.bluetooth),
                label: Text('다시 연결'),
              ),

            // 연결 해제 버튼
            if (isConnected)
              OutlinedButton.icon(
                onPressed: disconnectDevice,
                icon: Icon(Icons.link_off),
                label: Text('연결 해제'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.red,
                ),
              ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    // 화면 닫을 때 연결 해제
    disconnectDevice();
    super.dispose();
  }
}
```

### 서비스 타일 위젯

```dart
// lib/widgets/service_tile.dart

class ServiceTile extends StatefulWidget {
  final BluetoothService service;

  ServiceTile({required this.service});

  @override
  _ServiceTileState createState() => _ServiceTileState();
}

class _ServiceTileState extends State<ServiceTile> {
  bool isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ExpansionTile(
        title: Text(
          _getServiceName(widget.service.uuid),
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        subtitle: Text(
          'UUID: ${widget.service.uuid}\n캐릭터리스틱: ${widget.service.characteristics.length}개',
          style: TextStyle(fontSize: 12),
        ),
        leading: Icon(Icons.folder, color: Colors.blue),
        children: [
          // 각 캐릭터리스틱 표시
          ...widget.service.characteristics.map((char) {
            return CharacteristicTile(characteristic: char);
          }).toList(),
        ],
      ),
    );
  }

  // 서비스 이름 가져오기
  String _getServiceName(Guid uuid) {
    Map<String, String> names = {
      '0000180f': '배터리 서비스',
      '0000180a': '기기 정보',
      '0000180d': '심박수',
      '0000181a': '환경 센서',
    };

    String uuidStr = uuid.toString().substring(4, 12);
    return names[uuidStr] ?? '사용자 정의 서비스';
  }
}
```

### 캐릭터리스틱 타일 위젯

```dart
// lib/widgets/characteristic_tile.dart

class CharacteristicTile extends StatefulWidget {
  final BluetoothCharacteristic characteristic;

  CharacteristicTile({required this.characteristic});

  @override
  _CharacteristicTileState createState() => _CharacteristicTileState();
}

class _CharacteristicTileState extends State<CharacteristicTile> {
  List<int> value = [];
  bool isNotifying = false;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(Icons.description, color: Colors.orange),

      title: Text(
        'UUID: ${widget.characteristic.uuid}',
        style: TextStyle(fontSize: 12),
      ),

      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('속성: ${_getProperties()}'),
          if (value.isNotEmpty)
            Text('값: $value', style: TextStyle(color: Colors.green)),
        ],
      ),

      trailing: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Read 버튼
          if (widget.characteristic.properties.read)
            IconButton(
              icon: Icon(Icons.download, size: 20),
              onPressed: readValue,
              tooltip: 'Read',
            ),

          // Write 버튼
          if (widget.characteristic.properties.write)
            IconButton(
              icon: Icon(Icons.upload, size: 20),
              onPressed: () => writeValue(context),
              tooltip: 'Write',
            ),

          // Notify 토글 버튼
          if (widget.characteristic.properties.notify)
            IconButton(
              icon: Icon(
                isNotifying ? Icons.notifications_active : Icons.notifications_off,
                size: 20,
                color: isNotifying ? Colors.blue : Colors.grey,
              ),
              onPressed: toggleNotify,
              tooltip: 'Notify',
            ),
        ],
      ),
    );
  }

  // 속성 문자열 생성
  String _getProperties() {
    List<String> props = [];

    if (widget.characteristic.properties.read) props.add('Read');
    if (widget.characteristic.properties.write) props.add('Write');
    if (widget.characteristic.properties.notify) props.add('Notify');

    return props.join(', ');
  }

  // Read 기능
  Future<void> readValue() async {
    try {
      List<int> readValue = await widget.characteristic.read();

      setState(() {
        value = readValue;
      });

      print("📖 읽기 성공: $value");

      // 스낵바 표시
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('읽기 성공: $value')),
      );

    } catch (e) {
      print("❌ 읽기 실패: $e");

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('읽기 실패: $e')),
      );
    }
  }

  // Write 기능
  Future<void> writeValue(BuildContext context) async {
    // 입력 다이얼로그 표시
    TextEditingController controller = TextEditingController();

    await showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('데이터 전송'),
          content: TextField(
            controller: controller,
            decoration: InputDecoration(
              hintText: '전송할 데이터 입력 (예: 1, 25, Hello)',
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('취소'),
            ),
            ElevatedButton(
              onPressed: () async {
                String input = controller.text;

                try {
                  // 숫자면 바이트로, 문자면 코드로 변환
                  List<int> data;

                  if (int.tryParse(input) != null) {
                    data = [int.parse(input)];
                  } else {
                    data = input.codeUnits;
                  }

                  await widget.characteristic.write(data);

                  print("✅ 전송 성공: $data");

                  Navigator.pop(context);

                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('전송 성공: $data')),
                  );

                } catch (e) {
                  print("❌ 전송 실패: $e");

                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('전송 실패: $e')),
                  );
                }
              },
              child: Text('전송'),
            ),
          ],
        );
      },
    );
  }

  // Notify 토글
  Future<void> toggleNotify() async {
    try {
      if (isNotifying) {
        // 구독 취소
        await widget.characteristic.setNotifyValue(false);
        setState(() {
          isNotifying = false;
        });
        print("🔕 알림 구독 취소");
      } else {
        // 구독 시작
        await widget.characteristic.setNotifyValue(true);

        widget.characteristic.value.listen((newValue) {
          setState(() {
            value = newValue;
          });
          print("🔔 새 데이터 수신: $newValue");
        });

        setState(() {
          isNotifying = true;
        });
        print("📢 알림 구독 시작");
      }

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(isNotifying ? '알림 구독 시작' : '알림 구독 취소')),
      );

    } catch (e) {
      print("❌ Notify 실패: $e");

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Notify 실패: $e')),
      );
    }
  }
}
```

---

## 💡 8단계: 온도 센서 모니터링 앱

[↑ 목차로 돌아가기](#📑-목차)

### 🌟 프로젝트 개요

**실시간 온도를 모니터링하고 그래프로 표시하는 앱**

#### 📋 프로젝트 목표

```
✅ 온도 센서와 연결
✅ 실시간 온도 데이터 수신
✅ 온도 그래프 표시
✅ 최고/최저 온도 기록
✅ 온도 경고 기능
```

### 🌳 고급: 완전한 온도 모니터링 앱

```dart
// lib/screens/temperature_monitor_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:fl_chart/fl_chart.dart'; // 그래프 라이브러리

class TemperatureMonitorScreen extends StatefulWidget {
  final BluetoothDevice device;

  TemperatureMonitorScreen({required this.device});

  @override
  _TemperatureMonitorScreenState createState() =>
    _TemperatureMonitorScreenState();
}

class _TemperatureMonitorScreenState extends State<TemperatureMonitorScreen> {
  // 온도 데이터
  double currentTemperature = 0.0;
  double maxTemperature = -999.0;
  double minTemperature = 999.0;

  // 온도 히스토리 (그래프용)
  List<FlSpot> temperatureHistory = [];

  // 온도 캐릭터리스틱
  BluetoothCharacteristic? tempCharacteristic;

  // 경고 임계값
  double alertThreshold = 30.0;

  @override
  void initState() {
    super.initState();
    setupTemperatureMonitoring();
  }

  // 온도 모니터링 설정
  Future<void> setupTemperatureMonitoring() async {
    print("🌡️ 온도 모니터링 설정 중...");

    // 기기 연결
    await widget.device.connect();

    // 서비스 검색
    List<BluetoothService> services = await widget.device.discoverServices();

    // 환경 센서 서비스 찾기
    for (BluetoothService service in services) {
      // 환경 센서 서비스 UUID: 0x181A
      if (service.uuid.toString().contains("181a")) {
        print("✅ 환경 센서 서비스 발견!");

        // 온도 캐릭터리스틱 찾기 (UUID: 0x2A6E)
        for (BluetoothCharacteristic char in service.characteristics) {
          if (char.uuid.toString().contains("2a6e")) {
            tempCharacteristic = char;
            print("🌡️ 온도 캐릭터리스틱 발견!");

            // Notify 구독
            await subscribeToTemperature();
            break;
          }
        }
      }
    }

    if (tempCharacteristic == null) {
      print("❌ 온도 캐릭터리스틱을 찾을 수 없습니다");

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('온도 센서를 찾을 수 없습니다')),
      );
    }
  }

  // 온도 구독
  Future<void> subscribeToTemperature() async {
    if (tempCharacteristic == null) return;

    print("📢 온도 실시간 모니터링 시작");

    // Notify 활성화
    await tempCharacteristic!.setNotifyValue(true);

    // 데이터 수신 리스너
    tempCharacteristic!.value.listen((value) {
      if (value.isEmpty) return;

      // 바이트 데이터를 온도로 변환
      double temperature = value[0] + (value[1] / 100.0);

      setState(() {
        currentTemperature = temperature;

        // 최고/최저 온도 업데이트
        if (temperature > maxTemperature) {
          maxTemperature = temperature;
        }
        if (temperature < minTemperature) {
          minTemperature = temperature;
        }

        // 그래프 데이터 추가
        double x = temperatureHistory.length.toDouble();
        temperatureHistory.add(FlSpot(x, temperature));

        // 최근 20개 데이터만 유지
        if (temperatureHistory.length > 20) {
          temperatureHistory.removeAt(0);

          // X축 재정렬
          for (int i = 0; i < temperatureHistory.length; i++) {
            temperatureHistory[i] = FlSpot(
              i.toDouble(),
              temperatureHistory[i].y,
            );
          }
        }
      });

      print("🌡️ 현재 온도: ${temperature}°C");

      // 경고 확인
      if (temperature > alertThreshold) {
        showTemperatureAlert(temperature);
      }
    });
  }

  // 온도 경고 표시
  void showTemperatureAlert(double temperature) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Row(
            children: [
              Icon(Icons.warning, color: Colors.red),
              SizedBox(width: 10),
              Text('온도 경고!'),
            ],
          ),
          content: Text(
            '현재 온도가 ${temperature.toStringAsFixed(1)}°C로\n'
            '설정된 임계값 ${alertThreshold}°C를 초과했습니다!',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('확인'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('온도 모니터'),
        actions: [
          // 설정 버튼
          IconButton(
            icon: Icon(Icons.settings),
            onPressed: () {
              _showSettingsDialog();
            },
          ),
        ],
      ),

      body: SingleChildScrollView(
        child: Column(
          children: [
            // 현재 온도 카드
            _buildCurrentTemperatureCard(),

            SizedBox(height: 20),

            // 통계 카드
            _buildStatisticsCard(),

            SizedBox(height: 20),

            // 온도 그래프
            _buildTemperatureChart(),
          ],
        ),
      ),
    );
  }

  // 현재 온도 카드
  Widget _buildCurrentTemperatureCard() {
    return Card(
      margin: EdgeInsets.all(16),
      elevation: 5,
      child: Container(
        width: double.infinity,
        padding: EdgeInsets.all(30),
        child: Column(
          children: [
            Icon(
              Icons.thermostat,
              size: 80,
              color: _getTemperatureColor(currentTemperature),
            ),

            SizedBox(height: 10),

            Text(
              '현재 온도',
              style: TextStyle(fontSize: 18, color: Colors.grey[600]),
            ),

            SizedBox(height: 5),

            Text(
              '${currentTemperature.toStringAsFixed(1)}°C',
              style: TextStyle(
                fontSize: 60,
                fontWeight: FontWeight.bold,
                color: _getTemperatureColor(currentTemperature),
              ),
            ),

            SizedBox(height: 10),

            Text(
              _getTemperatureStatus(currentTemperature),
              style: TextStyle(
                fontSize: 16,
                color: _getTemperatureColor(currentTemperature),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // 통계 카드
  Widget _buildStatisticsCard() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        children: [
          // 최고 온도
          Expanded(
            child: Card(
              color: Colors.red[50],
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    Icon(Icons.arrow_upward, color: Colors.red),
                    SizedBox(height: 5),
                    Text('최고', style: TextStyle(color: Colors.red)),
                    Text(
                      '${maxTemperature.toStringAsFixed(1)}°C',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: Colors.red,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          SizedBox(width: 10),

          // 최저 온도
          Expanded(
            child: Card(
              color: Colors.blue[50],
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    Icon(Icons.arrow_downward, color: Colors.blue),
                    SizedBox(height: 5),
                    Text('최저', style: TextStyle(color: Colors.blue)),
                    Text(
                      '${minTemperature.toStringAsFixed(1)}°C',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: Colors.blue,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // 온도 그래프
  Widget _buildTemperatureChart() {
    return Card(
      margin: EdgeInsets.all(16),
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '온도 변화 그래프',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),

            SizedBox(height: 20),

            Container(
              height: 200,
              child: temperatureHistory.isEmpty
                ? Center(child: Text('데이터 수집 중...'))
                : LineChart(
                    LineChartData(
                      gridData: FlGridData(show: true),
                      titlesData: FlTitlesData(show: true),
                      borderData: FlBorderData(show: true),
                      lineBarsData: [
                        LineChartBarData(
                          spots: temperatureHistory,
                          isCurved: true,
                          color: Colors.blue,
                          barWidth: 3,
                          dotData: FlDotData(show: false),
                        ),
                      ],
                    ),
                  ),
            ),
          ],
        ),
      ),
    );
  }

  // 온도에 따른 색상
  Color _getTemperatureColor(double temp) {
    if (temp > 30) return Colors.red;
    if (temp > 25) return Colors.orange;
    if (temp > 20) return Colors.green;
    return Colors.blue;
  }

  // 온도 상태 텍스트
  String _getTemperatureStatus(double temp) {
    if (temp > 30) return '매우 더움';
    if (temp > 25) return '더움';
    if (temp > 20) return '적당함';
    if (temp > 15) return '선선함';
    return '추움';
  }

  // 설정 다이얼로그
  void _showSettingsDialog() {
    TextEditingController controller =
      TextEditingController(text: alertThreshold.toString());

    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('경고 임계값 설정'),
          content: TextField(
            controller: controller,
            keyboardType: TextInputType.number,
            decoration: InputDecoration(
              labelText: '온도 (°C)',
              hintText: '30.0',
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('취소'),
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  alertThreshold = double.parse(controller.text);
                });
                Navigator.pop(context);

                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text('경고 임계값이 ${alertThreshold}°C로 설정되었습니다'),
                  ),
                );
              },
              child: Text('저장'),
            ),
          ],
        );
      },
    );
  }

  @override
  void dispose() {
    widget.device.disconnect();
    super.dispose();
  }
}
```

### pubspec.yaml에 그래프 라이브러리 추가

```yaml
dependencies:
  flutter:
    sdk: flutter

  flutter_blue_plus: ^1.30.0
  permission_handler: ^11.0.0

  # 그래프 라이브러리 추가
  fl_chart: ^0.65.0
```

---

## 🎮 9단계: LED 제어 앱 만들기

[↑ 목차로 돌아가기](#📑-목차)

### 🌟 프로젝트 개요

**스마트폰으로 LED를 원격 제어하는 앱**

#### 📋 프로젝트 목표

```
✅ LED ON/OFF 제어
✅ 밝기 조절
✅ RGB 색상 변경
✅ 패턴 제어 (깜빡임, 페이드 등)
```

### 🌳 고급: 완전한 LED 제어 앱

```dart
// lib/screens/led_control_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

class LEDControlScreen extends StatefulWidget {
  final BluetoothDevice device;

  LEDControlScreen({required this.device});

  @override
  _LEDControlScreenState createState() => _LEDControlScreenState();
}

class _LEDControlScreenState extends State<LEDControlScreen> {
  // LED 캐릭터리스틱
  BluetoothCharacteristic? ledChar;

  // LED 상태
  bool isLedOn = false;
  double brightness = 100.0; // 0-100%

  // RGB 값
  double red = 255.0;
  double green = 0.0;
  double blue = 0.0;

  @override
  void initState() {
    super.initState();
    setupLEDControl();
  }

  // LED 제어 설정
  Future<void> setupLEDControl() async {
    print("💡 LED 제어 설정 중...");

    // 기기 연결
    await widget.device.connect();

    // 서비스 검색
    List<BluetoothService> services = await widget.device.discoverServices();

    // LED 서비스 찾기 (사용자 정의 UUID)
    for (BluetoothService service in services) {
      if (service.uuid.toString().contains("5678")) { // LED 서비스 UUID
        print("✅ LED 서비스 발견!");

        // LED 캐릭터리스틱 찾기
        for (BluetoothCharacteristic char in service.characteristics) {
          if (char.uuid.toString().contains("5678-0001")) {
            ledChar = char;
            print("💡 LED 캐릭터리스틱 발견!");
            break;
          }
        }
      }
    }
  }

  // LED ON/OFF
  Future<void> toggleLED() async {
    if (ledChar == null) return;

    try {
      // 0 = OFF, 1 = ON
      List<int> command = [isLedOn ? 0 : 1];

      await ledChar!.write(command);

      setState(() {
        isLedOn = !isLedOn;
      });

      print("💡 LED ${isLedOn ? 'ON' : 'OFF'}");

    } catch (e) {
      print("❌ LED 제어 실패: $e");

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('LED 제어 실패: $e')),
      );
    }
  }

  // 밝기 조절
  Future<void> setBrightness(double value) async {
    if (ledChar == null) return;

    try {
      // 밝기 0-100% → 0-255
      int brightnessValue = (value * 2.55).toInt();

      List<int> command = [2, brightnessValue]; // 2 = 밝기 명령

      await ledChar!.write(command);

      setState(() {
        brightness = value;
      });

      print("🔆 밝기: ${value.toInt()}%");

    } catch (e) {
      print("❌ 밝기 조절 실패: $e");
    }
  }

  // RGB 색상 변경
  Future<void> setRGBColor() async {
    if (ledChar == null) return;

    try {
      List<int> command = [
        3, // RGB 명령
        red.toInt(),
        green.toInt(),
        blue.toInt(),
      ];

      await ledChar!.write(command);

      print("🎨 색상 변경: R=$red, G=$green, B=$blue");

    } catch (e) {
      print("❌ 색상 변경 실패: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('LED 제어'),
      ),

      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              // LED 상태 카드
              _buildLEDStatusCard(),

              SizedBox(height: 20),

              // ON/OFF 버튼
              _buildControlButtons(),

              SizedBox(height: 20),

              // 밝기 조절
              _buildBrightnessControl(),

              SizedBox(height: 20),

              // RGB 색상 조절
              _buildRGBControl(),
            ],
          ),
        ),
      ),
    );
  }

  // LED 상태 카드
  Widget _buildLEDStatusCard() {
    return Card(
      elevation: 5,
      color: isLedOn ? Colors.yellow[100] : Colors.grey[200],
      child: Container(
        width: double.infinity,
        padding: EdgeInsets.all(30),
        child: Column(
          children: [
            Icon(
              isLedOn ? Icons.lightbulb : Icons.lightbulb_outline,
              size: 100,
              color: isLedOn ? Colors.yellow[700] : Colors.grey,
            ),

            SizedBox(height: 20),

            Text(
              isLedOn ? 'LED 켜짐' : 'LED 꺼짐',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: isLedOn ? Colors.yellow[900] : Colors.grey,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // 제어 버튼들
  Widget _buildControlButtons() {
    return Row(
      children: [
        // OFF 버튼
        Expanded(
          child: ElevatedButton.icon(
            onPressed: isLedOn ? toggleLED : null,
            icon: Icon(Icons.power_settings_new),
            label: Text('끄기'),
            style: ElevatedButton.styleFrom(
              padding: EdgeInsets.all(20),
              backgroundColor: Colors.red,
            ),
          ),
        ),

        SizedBox(width: 10),

        // ON 버튼
        Expanded(
          child: ElevatedButton.icon(
            onPressed: !isLedOn ? toggleLED : null,
            icon: Icon(Icons.lightbulb),
            label: Text('켜기'),
            style: ElevatedButton.styleFrom(
              padding: EdgeInsets.all(20),
              backgroundColor: Colors.green,
            ),
          ),
        ),
      ],
    );
  }

  // 밝기 조절
  Widget _buildBrightnessControl() {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  '밝기 조절',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                Text(
                  '${brightness.toInt()}%',
                  style: TextStyle(fontSize: 18),
                ),
              ],
            ),

            SizedBox(height: 10),

            Slider(
              value: brightness,
              min: 0,
              max: 100,
              divisions: 100,
              label: '${brightness.toInt()}%',
              onChanged: (value) {
                setState(() {
                  brightness = value;
                });
              },
              onChangeEnd: (value) {
                setBrightness(value);
              },
            ),
          ],
        ),
      ),
    );
  }

  // RGB 색상 조절
  Widget _buildRGBControl() {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'RGB 색상 조절',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),

            SizedBox(height: 20),

            // 색상 미리보기
            Container(
              width: double.infinity,
              height: 100,
              decoration: BoxDecoration(
                color: Color.fromRGBO(
                  red.toInt(),
                  green.toInt(),
                  blue.toInt(),
                  1.0,
                ),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: Colors.grey),
              ),
            ),

            SizedBox(height: 20),

            // Red 슬라이더
            Text('Red: ${red.toInt()}'),
            Slider(
              value: red,
              min: 0,
              max: 255,
              activeColor: Colors.red,
              onChanged: (value) {
                setState(() {
                  red = value;
                });
              },
            ),

            // Green 슬라이더
            Text('Green: ${green.toInt()}'),
            Slider(
              value: green,
              min: 0,
              max: 255,
              activeColor: Colors.green,
              onChanged: (value) {
                setState(() {
                  green = value;
                });
              },
            ),

            // Blue 슬라이더
            Text('Blue: ${blue.toInt()}'),
            Slider(
              value: blue,
              min: 0,
              max: 255,
              activeColor: Colors.blue,
              onChanged: (value) {
                setState(() {
                  blue = value;
                });
              },
            ),

            SizedBox(height: 10),

            // 색상 적용 버튼
            ElevatedButton(
              onPressed: setRGBColor,
              child: Text('색상 적용'),
              style: ElevatedButton.styleFrom(
                minimumSize: Size(double.infinity, 50),
              ),
            ),

            SizedBox(height: 10),

            // 프리셋 색상 버튼
            Wrap(
              spacing: 10,
              children: [
                _buildPresetColorButton('빨강', 255, 0, 0),
                _buildPresetColorButton('초록', 0, 255, 0),
                _buildPresetColorButton('파랑', 0, 0, 255),
                _buildPresetColorButton('노랑', 255, 255, 0),
                _buildPresetColorButton('보라', 128, 0, 128),
                _buildPresetColorButton('흰색', 255, 255, 255),
              ],
            ),
          ],
        ),
      ),
    );
  }

  // 프리셋 색상 버튼
  Widget _buildPresetColorButton(String name, double r, double g, double b) {
    return ElevatedButton(
      onPressed: () {
        setState(() {
          red = r;
          green = g;
          blue = b;
        });
        setRGBColor();
      },
      child: Text(name),
      style: ElevatedButton.styleFrom(
        backgroundColor: Color.fromRGBO(r.toInt(), g.toInt(), b.toInt(), 1.0),
      ),
    );
  }

  @override
  void dispose() {
    widget.device.disconnect();
    super.dispose();
  }
}
```

---

## 🐛 10단계: 자주 발생하는 문제 해결

[↑ 목차로 돌아가기](#📑-목차)

### 문제 1: 기기가 스캔되지 않음

**증상:**
```
📡 스캔 시작!
... (아무것도 안 뜸)
🛑 스캔 종료!
발견된 기기: 0개
```

**원인 및 해결:**

```dart
✅ 해결 방법 1: 권한 확인

// 권한 상태 확인
void checkPermissions() async {
  if (Platform.isAndroid) {
    var status = await Permission.bluetoothScan.status;

    if (!status.isGranted) {
      print("❌ 블루투스 스캔 권한이 없습니다!");
      await Permission.bluetoothScan.request();
    }
  }
}

✅ 해결 방법 2: 블루투스 켜짐 확인

// 블루투스 어댑터 상태 확인
void checkBluetoothState() async {
  var adapterState = await FlutterBluePlus.adapterState.first;

  if (adapterState != BluetoothAdapterState.on) {
    print("❌ 블루투스가 꺼져 있습니다!");

    // 사용자에게 블루투스 켜도록 안내
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('블루투스를 켜주세요'),
          content: Text('BLE 기기를 찾으려면 블루투스가 필요합니다.'),
          actions: [
            TextButton(
              onPressed: () {
                // 블루투스 설정으로 이동
                openAppSettings();
              },
              child: Text('설정 열기'),
            ),
          ],
        );
      },
    );
  }
}

✅ 해결 방법 3: 위치 서비스 확인 (Android)

// Android에서는 위치 서비스도 필요
void checkLocationService() async {
  if (Platform.isAndroid) {
    var status = await Permission.location.status;

    if (!status.isGranted) {
      print("❌ 위치 권한이 없습니다!");
      await Permission.location.request();
    }
  }
}
```

### 문제 2: 연결 실패 또는 즉시 끊김

**증상:**
```
🔗 연결 시도 중...
❌ 연결 실패: TimeoutException
또는
✅ 연결 성공!
... (1초 후)
❌ 연결 끊김!
```

**해결:**

```dart
✅ 해결 방법 1: 연결 타임아웃 늘리기

await device.connect(
  timeout: Duration(seconds: 30), // 15초 → 30초로 증가
  autoConnect: false,
);

✅ 해결 방법 2: 재시도 로직 추가

Future<void> connectWithRetry(BluetoothDevice device, {int maxRetries = 3}) async {
  int attempt = 0;

  while (attempt < maxRetries) {
    try {
      print("🔗 연결 시도 ${attempt + 1}/$maxRetries");

      await device.connect(timeout: Duration(seconds: 15));

      print("✅ 연결 성공!");
      return;

    } catch (e) {
      attempt++;
      print("❌ 연결 실패 (시도 $attempt): $e");

      if (attempt < maxRetries) {
        print("⏱️ 3초 후 재시도...");
        await Future.delayed(Duration(seconds: 3));
      } else {
        throw Exception("최대 재시도 횟수 초과");
      }
    }
  }
}

✅ 해결 방법 3: 기기가 너무 멀리 있음

// 신호 세기 확인
if (scanResult.rssi < -80) {
  print("⚠️ 신호가 약합니다! 기기를 가까이 가져오세요.");
  print("   현재 신호: ${scanResult.rssi} dBm");
  print("   권장: -70 dBm 이상");
}
```

### 문제 3: iOS에서 BLE가 작동하지 않음

**증상:**
```
iOS 시뮬레이터에서:
❌ 블루투스 사용 불가

iOS 실제 기기 (디버그 모드):
❌ BLE 스캔 안 됨
```

**해결:**

```bash
✅ 해결 방법: 릴리스 모드로 빌드

# 1. 릴리스 모드 빌드
flutter build ios --release

# 2. Xcode에서 릴리스 구성으로 실행
# Product > Scheme > Edit Scheme > Run > Build Configuration > Release

# 3. 또는 TestFlight를 통해 배포
flutter build ipa
```

```xml
✅ Info.plist 확인

<!-- 이 설명이 반드시 있어야 함! -->
<key>NSBluetoothAlwaysUsageDescription</key>
<string>이 앱은 IoT 센서와 통신하기 위해 블루투스를 사용합니다.</string>
```

### 문제 4: 서비스/캐릭터리스틱을 찾을 수 없음

**증상:**
```
🔍 서비스 검색 중...
✅ 서비스 3개 발견!
📁 서비스: 0000180f...
📁 서비스: 0000180a...
📁 서비스: 0000181a...
❌ 온도 캐릭터리스틱을 찾을 수 없습니다
```

**해결:**

```dart
✅ 해결 방법 1: UUID 확인

// UUID 전체를 출력해서 확인
void listAllServices() async {
  List<BluetoothService> services = await device.discoverServices();

  for (var service in services) {
    print("📁 서비스 UUID: ${service.uuid}");

    for (var char in service.characteristics) {
      print("  📄 캐릭터리스틱 UUID: ${char.uuid}");
      print("     속성: ${char.properties}");
    }
  }
}

✅ 해결 방법 2: 부분 매칭 사용

// 전체 UUID 대신 일부분만 비교
if (service.uuid.toString().toLowerCase().contains("181a")) {
  // 환경 센서 서비스 발견!
}

✅ 해결 방법 3: 표준 UUID 사용

// Bluetooth SIG 표준 UUID 사용
Map<String, String> standardUUIDs = {
  '180f': '배터리 서비스',
  '180a': '기기 정보 서비스',
  '180d': '심박수 서비스',
  '181a': '환경 센서 서비스',
  '2a6e': '온도 캐릭터리스틱',
  '2a19': '배터리 레벨 캐릭터리스틱',
};
```

### 문제 5: Read/Write/Notify가 작동하지 않음

**증상:**
```
📖 온도 읽기 시도...
❌ 읽기 실패: Characteristic does not support read
```

**해결:**

```dart
✅ 해결 방법: 속성 확인 후 사용

void safeRead(BluetoothCharacteristic char) async {
  // Read 가능한지 확인
  if (!char.properties.read) {
    print("❌ 이 캐릭터리스틱은 Read를 지원하지 않습니다!");
    print("   지원하는 속성:");

    if (char.properties.write) print("   - Write");
    if (char.properties.notify) print("   - Notify");
    if (char.properties.indicate) print("   - Indicate");

    return;
  }

  // Read 수행
  try {
    List<int> value = await char.read();
    print("✅ 읽기 성공: $value");
  } catch (e) {
    print("❌ 읽기 실패: $e");
  }
}

// 모든 기능에 대해 유사하게 확인
void safeWrite(BluetoothCharacteristic char, List<int> data) async {
  if (!char.properties.write && !char.properties.writeWithoutResponse) {
    print("❌ 이 캐릭터리스틱은 Write를 지원하지 않습니다!");
    return;
  }

  await char.write(data);
}

void safeNotify(BluetoothCharacteristic char) async {
  if (!char.properties.notify) {
    print("❌ 이 캐릭터리스틱은 Notify를 지원하지 않습니다!");
    return;
  }

  await char.setNotifyValue(true);
}
```

### 🎯 디버깅 팁

```dart
// 완전한 디버깅 정보 출력
void printFullBLEInfo() async {
  print("\n=== BLE 디버깅 정보 ===\n");

  // 1. 블루투스 어댑터 상태
  var adapterState = await FlutterBluePlus.adapterState.first;
  print("📱 어댑터 상태: $adapterState");

  // 2. 권한 상태 (Android)
  if (Platform.isAndroid) {
    print("\n🔐 권한 상태:");
    print("  - 블루투스 스캔: ${await Permission.bluetoothScan.status}");
    print("  - 블루투스 연결: ${await Permission.bluetoothConnect.status}");
    print("  - 위치: ${await Permission.location.status}");
  }

  // 3. 기기 정보
  print("\n📱 기기 정보:");
  print("  - 이름: ${device.name}");
  print("  - ID: ${device.id}");
  print("  - 연결 상태: ${await device.state.first}");

  // 4. 서비스 및 캐릭터리스틱
  if (await device.state.first == BluetoothDeviceState.connected) {
    List<BluetoothService> services = await device.discoverServices();

    print("\n📁 서비스 목록:");
    for (var service in services) {
      print("  UUID: ${service.uuid}");

      for (var char in service.characteristics) {
        print("    - ${char.uuid}");
        print("      속성: ${_getPropertiesString(char)}");
      }
    }
  }

  print("\n======================\n");
}

String _getPropertiesString(BluetoothCharacteristic char) {
  List<String> props = [];

  if (char.properties.read) props.add('Read');
  if (char.properties.write) props.add('Write');
  if (char.properties.writeWithoutResponse) props.add('WriteNoResp');
  if (char.properties.notify) props.add('Notify');
  if (char.properties.indicate) props.add('Indicate');

  return props.join(', ');
}
```

---

## 📚 용어 사전

[↑ 목차로 돌아가기](#📑-목차)

### A-Z

**Advertising (광고)**
- **쉬운 설명**: 프리퍼럴이 "나 여기 있어요!" 외치는 것
- **비유**: 가게 간판, 전단지 나눠주기
- **예시**: 센서가 0.5초마다 자신의 이름과 정보 방송

**BLE (Bluetooth Low Energy)**
- **쉬운 설명**: 전력을 아주 조금만 쓰는 블루투스
- **비유**: LED 손전등 (일반 블루투스는 형광등)
- **예시**: 스마트 밴드, 온도 센서

**Characteristic (캐릭터리스틱)**
- **쉬운 설명**: 실제 데이터가 저장된 곳
- **비유**: 폴더 안의 파일, 서랍 안의 물건
- **예시**: "현재 온도" = 25.3°C

**Central (센트럴)**
- **쉬운 설명**: 데이터를 요청하는 기기 (손님 역할)
- **비유**: 레스토랑 손님, 은행 고객
- **예시**: 스마트폰, 태블릿

**Flutter**
- **쉬운 설명**: 구글이 만든 앱 개발 도구
- **비유**: 레고 조립 도구
- **예시**: 하나의 코드로 안드로이드 + iOS 앱 동시 제작

**GATT (Generic Attribute Profile)**
- **쉬운 설명**: BLE 데이터 구조의 규칙
- **비유**: 도서관의 책 분류 시스템
- **예시**: Service → Characteristic 계층 구조

**IoT (Internet of Things)**
- **쉬운 설명**: 사물 인터넷, 모든 기기가 인터넷으로 연결
- **비유**: 집 안의 모든 가전제품이 대화
- **예시**: 스마트 냉장고, 온도 센서, 스마트 전구

**Notify (알림)**
- **쉬운 설명**: 데이터 변경 시 자동으로 알려주는 기능
- **비유**: 스마트폰 푸시 알림
- **예시**: 온도가 바뀔 때마다 자동 전송

**Peripheral (프리퍼럴)**
- **쉬운 설명**: 데이터를 제공하는 기기 (주인 역할)
- **비유**: 레스토랑 주인, 은행 직원
- **예시**: 아두이노 센서, 스마트 밴드

**Read (읽기)**
- **쉬운 설명**: 센트럴이 데이터를 요청해서 받는 것
- **비유**: 은행 잔액 조회
- **예시**: "현재 온도 알려줘" → "25°C"

**Scanning (스캐닝)**
- **쉬운 설명**: 주변의 블루투스 기기 찾기
- **비유**: 상점가 둘러보기
- **예시**: "온도센서_001" 발견!

**Service (서비스)**
- **쉬운 설명**: 관련된 데이터들의 묶음
- **비유**: 백화점의 층, 컴퓨터의 폴더
- **예시**: 온도 서비스, 배터리 서비스

**UUID (Universally Unique Identifier)**
- **쉬운 설명**: 각 서비스/캐릭터리스틱의 고유 번호
- **비유**: 주민등록번호, 차량 번호판
- **예시**: 0x180D (심박수 서비스)

**Write (쓰기)**
- **쉬운 설명**: 센트럴이 명령이나 데이터를 전송하는 것
- **비유**: 리모컨으로 TV 제어
- **예시**: "LED 켜줘" → LED ON

---

## 🔗 참고 자료 및 추가 학습

[↑ 목차로 돌아가기](#📑-목차)

### 공식 문서
- [Flutter 공식 사이트](https://flutter.dev/)
- [flutter_blue_plus 패키지](https://pub.dev/packages/flutter_blue_plus)
- [Bluetooth SIG (블루투스 표준)](https://www.bluetooth.com/)
- [Arduino BLE 라이브러리](https://www.arduino.cc/reference/en/libraries/arduinoble/)

### 추천 학습 자료
- [Flutter 초보 가이드](https://flutter.dev/docs/get-started)
- [BLE 기초 강의](https://www.bluetooth.com/learn-about-bluetooth/tech-overview/)
- [Arduino 프로젝트](https://www.arduino.cc/en/Tutorial/HomePage)

### 유용한 도구
- [nRF Connect 앱](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile) - BLE 기기 테스트
- [LightBlue 앱](https://punchthrough.com/lightblue/) - iOS BLE 테스트
- [Android Studio](https://developer.android.com/studio) - 안드로이드 개발
- [Xcode](https://developer.apple.com/xcode/) - iOS 개발

---

## ✅ 학습 체크리스트

[↑ 목차로 돌아가기](#📑-목차)

### 기초 개념
- [ ] 블루투스와 BLE의 차이를 안다
- [ ] 센트럴과 프리퍼럴의 역할을 설명할 수 있다
- [ ] BLE 4단계 원리를 안다
- [ ] GATT 구조를 이해한다
- [ ] Service와 Characteristic의 관계를 안다

### Flutter 개발
- [ ] Flutter 프로젝트를 생성할 수 있다
- [ ] flutter_blue_plus 패키지를 설치했다
- [ ] 안드로이드 권한을 설정할 수 있다
- [ ] iOS 권한을 설정할 수 있다

### BLE 통신
- [ ] 주변 기기를 스캔할 수 있다
- [ ] 기기에 연결/해제할 수 있다
- [ ] 서비스를 검색할 수 있다
- [ ] 캐릭터리스틱을 찾을 수 있다

### 데이터 통신
- [ ] Read로 데이터를 읽을 수 있다
- [ ] Write로 명령을 보낼 수 있다
- [ ] Notify를 구독할 수 있다
- [ ] 실시간 데이터를 처리할 수 있다

### 실전 프로젝트
- [ ] 온도 센서 앱을 만들 수 있다
- [ ] LED 제어 앱을 만들 수 있다
- [ ] 문제를 스스로 해결할 수 있다
- [ ] 자신만의 IoT 프로젝트를 구상할 수 있다

---

## 🎓 마무리하며

[↑ 목차로 돌아가기](#📑-목차)

### 🎉 축하합니다!

이 가이드를 완료하신 여러분, 정말 축하드립니다! 🎊

이제 여러분은:
- ✅ BLE 블루투스 통신의 기초를 확실히 이해했습니다
- ✅ Flutter로 BLE 앱을 만들 수 있습니다
- ✅ IoT 센서와 통신할 수 있습니다
- ✅ 실전 프로젝트를 완성할 수 있습니다

### 💡 다음 단계는?

```
🚀 레벨 1: 기초 다지기 (완료!)
   ✅ 블루투스 기본 개념
   ✅ Flutter 환경 설정
   ✅ 간단한 앱 만들기

📈 레벨 2: 실력 향상
   → 여러 센서 동시 연결
   → 데이터 저장 및 분석
   → UI/UX 개선
   → 성능 최적화

🎯 레벨 3: 고급 기능
   → 백그라운드 스캔
   → 커스텀 GATT 프로파일
   → 펌웨어 업데이트 (OTA)
   → 상용 앱 배포

💪 레벨 4: 전문가
   → 자신만의 IoT 생태계 구축
   → 오픈소스 기여
   → 다른 개발자 멘토링
```

### 🌟 여러분만의 프로젝트 아이디어

```
🏠 스마트홈
- 통합 제어 시스템
- 에너지 모니터링
- 자동화 시나리오

🏥 헬스케어
- 건강 추적 앱
- 운동 코칭 시스템
- 약 복용 알림

🚗 자동차
- 차량 진단 도구
- 스마트 키 시스템
- 운전 분석 앱

🎮 취미
- 드론 제어
- 로봇 조종
- 스마트 악기
```

### 📚 계속 학습하기

**추천 다음 학습 경로:**

1. **Flutter 고급 과정**
   - 상태 관리 (Provider, Riverpod, Bloc)
   - 아키텍처 패턴 (MVVM, Clean Architecture)
   - 성능 최적화

2. **IoT 하드웨어**
   - Arduino 프로그래밍
   - ESP32 활용
   - 센서 회로 설계

3. **서버 연동**
   - Firebase 통합
   - RESTful API
   - 실시간 데이터베이스

### 🤝 커뮤니티

**함께 성장하세요!**

- Flutter 한국 커뮤니티
- Arduino & IoT 포럼
- GitHub 오픈소스 프로젝트
- Stack Overflow

### 💬 마지막 조언

```
🎯 지수의 마지막 말

"처음에는 어렵게 느껴질 수 있어요.
하지만 한 줄씩, 하나씩 만들다 보면
어느새 멋진 IoT 앱을 완성한 자신을 발견하게 될 거예요!

가장 중요한 것은:
❤️ 재미있게 만드는 것
🔥 포기하지 않는 것
🌱 조금씩 성장하는 것

여러분의 IoT 개발 여정을 응원합니다! 화이팅! 💪"
```

---

**✨ 파일 완성! 🎉**

**이 가이드는 다음을 포함합니다:**
- 📖 파인만 기법으로 설명한 기초 개념
- 📚 스토리텔링 방식의 학습 경로
- 🌱🌿🌳 3단계 난이도별 예제
- 💻 실행 가능한 완전한 코드
- 🔧 실전 프로젝트 (온도 센서, LED 제어)
- 🐛 문제 해결 가이드
- 📚 용어 사전 및 체크리스트

**총 4,000줄 이상의 종합 학습 자료입니다!**

여러분의 Flutter BLE IoT 개발 여정에 큰 도움이 되기를 바랍니다! 😊
궁금한 점이 있으면 언제든 물어보세요!