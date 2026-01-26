---
title: "[SYSTEM]"
date: 2025-10-05
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "ai-진로-탐구-어드바이저-코드"
category: "tutorials"
excerpt: "[SYSTEM]"
tags:
  - tutorial
  - guide
reading_time: 22
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

```
<!DOCTYPE html>

<html lang="ko">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>AI 진로 탐구 어드바이저</title>

<script src="https://cdn.tailwindcss.com"></script>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">

<style>

body {

font-family: 'Noto Sans KR', sans-serif;

}

.chat-bubble {

max-width: 90%;

/* 줄간격과 여백을 조정하여 더 컴팩트하게 만듭니다. */

padding: 12px 18px;

border-radius: 22px;

word-wrap: break-word;

white-space: pre-wrap;

line-height: 1.5; /* 줄간격 축소 */

box-shadow: 0 4px 8px rgba(0,0,0,0.05);

word-break: keep-all;

}

.advisor-bubble {

background-color: #ffffff;

color: #333;

border: 1px solid #e5e7eb;

border-bottom-left-radius: 6px;

}

.user-bubble {

background: linear-gradient(135deg, #007bff, #0056b3);

color: white;

border-bottom-right-radius: 6px;

}

.step-button {

transition: all 0.2s ease-in-out;

}

.step-button:hover {

transform: translateY(-2px);

box-shadow: 0 6px 14px rgba(0,0,0,0.1);

}

/* 마크다운 텍스트의 여백을 미세 조정합니다. */

.markdown h1, .markdown h2, .markdown h3, .markdown h4 { margin-top: 1em; margin-bottom: 0.5em; font-weight: bold; }

.markdown h1 { font-size: 1.5em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }

.markdown h2 { font-size: 1.25em; }

.markdown h3 { font-size: 1.1em; }

.markdown p { margin-bottom: 0.8em; }

.markdown ul, .markdown ol { margin-left: 25px; margin-bottom: 0.8em; }

.markdown ul { list-style-type: disc; }

.markdown ol { list-style-type: decimal; }

.markdown li { margin-bottom: 0.5em; }

.markdown strong { font-weight: 700; color: #0056b3; }

.markdown em { font-style: italic; }

.markdown blockquote { border-left: 4px solid #d1d5db; padding: 10px 15px; margin: 1em 0; background-color: #f9fafb; }

.navigator-step.completed .step-icon-wrapper { background-color: #10b981; color: white; }

.navigator-step.active .step-icon-wrapper { background-color: #3b82f6; color: white; animation: pulse 2s infinite; }

.navigator-step.completed .step-line { background-color: #10b981; }

@keyframes pulse {

0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }

50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }

}

.export-button {

display: inline-flex;

align-items: center;

gap: 0.5rem;

padding: 0.5rem 1rem;

border: 1px solid #d1d5db;

border-radius: 9999px;

background-color: #fff;

color: #374151;

font-size: 0.875rem;

font-weight: 500;

transition: all 0.2s;

box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

}

.export-button:hover {

background-color: #f9fafb;

border-color: #9ca3af;

box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

}

  

@keyframes fade-in-out {

0%, 100% { opacity: 0; transform: translateY(20px); }

10%, 90% { opacity: 1; transform: translateY(0); }

}

.toast-animation {

animation: fade-in-out 3s ease-in-out;

}

  

/* Modal Styles */

.modal-overlay {

position: fixed;

top: 0;

left: 0;

right: 0;

bottom: 0;

background: rgba(0, 0, 0, 0.6);

display: flex;

align-items: center;

justify-content: center;

z-index: 50;

opacity: 0;

visibility: hidden;

transition: opacity 0.3s ease, visibility 0.3s ease;

}

.modal-overlay.visible {

opacity: 1;

visibility: visible;

}

.modal-content {

background: white;

padding: 2rem;

border-radius: 1rem;

max-width: 640px;

width: 90%;

max-height: 90vh;

overflow-y: auto;

transform: scale(0.95);

transition: transform 0.3s ease;

}

.modal-overlay.visible .modal-content {

transform: scale(1);

}

</style>

</head>

<body class="bg-slate-100">

<div class="w-full h-screen flex flex-col bg-white md:shadow-2xl md:rounded-3xl md:h-[95vh] md:max-w-5xl md:mx-auto md:my-auto overflow-hidden md:border md:border-slate-200">

<header class="bg-gradient-to-r from-sky-500 to-indigo-600 text-white p-4 shadow-md flex justify-between items-center shrink-0">

<div class="flex-1"></div>

<div class="flex-1 text-center">

<h1 class="text-xl sm:text-2xl font-bold">🎓 AI 진로 탐구 어드바이저</h1>

<p class="text-xs sm:text-sm opacity-90">당신의 지적 호기심을 최고의 연구 프로젝트로!</p>

</div>

<div class="flex-1 flex justify-end">

<button id="guide-button" class="text-white hover:bg-white/20 rounded-full py-2 px-4 text-sm font-semibold transition-colors">

사용자 가이드

</button>

</div>

</header>

<div class="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 shrink-0">

<div class="flex items-center justify-between font-medium text-slate-500 text-xs sm:text-sm">

<div id="step-1" class="navigator-step flex-1 text-center"><div class="step-icon-wrapper w-10 h-10 mx-auto bg-slate-200 rounded-full text-lg flex items-center justify-center"></div><p class="mt-2">주제 추천</p></div>

<div class="step-line flex-1 h-1 bg-slate-200"></div>

<div id="step-2" class="navigator-step flex-1 text-center"><div class="step-icon-wrapper w-10 h-10 mx-auto bg-slate-200 rounded-full text-lg flex items-center justify-center"></div><p class="mt-2">방향 설정</p></div>

<div class="step-line flex-1 h-1 bg-slate-200"></div>

<div id="step-3" class="navigator-step flex-1 text-center"><div class="step-icon-wrapper w-10 h-10 mx-auto bg-slate-200 rounded-full text-lg flex items-center justify-center"></div><p class="mt-2">계획서 작성</p></div>

<div class="step-line flex-1 h-1 bg-slate-200"></div>

<div id="step-4" class="navigator-step flex-1 text-center"><div class="step-icon-wrapper w-10 h-10 mx-auto bg-slate-200 rounded-full text-lg flex items-center justify-center"></div><p class="mt-2">PPT 구성</p></div>

</div>

</div>

  

<main id="chat-container" class="flex-1 p-4 sm:p-6 overflow-y-auto flex flex-col gap-5 bg-slate-100/50">

</main>

  

<footer class="p-4 bg-white border-t border-slate-200 shrink-0">

<div id="input-area">

<form id="interest-form" class="flex items-center gap-3">

<input type="text" id="interest-input" class="flex-1 p-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="여기에 메시지를 입력하세요...">

<button type="submit" class="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-110">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>

</button>

</form>

</div>

</footer>

</div>

  

<!-- User Guide Modal -->

<div id="guide-modal" class="modal-overlay">

<div class="modal-content relative">

<button id="close-guide-button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700">

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

</button>

<h2 class="text-2xl font-bold text-center mb-6 text-gray-800">AI 진로 탐구 어드바이저 사용법</h2>

<div class="space-y-5">

<!-- Step 1 -->

<div class="flex items-start gap-4">

<div class="flex-shrink-0 w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>

<div>

<h3 class="font-bold text-lg text-gray-700">관심 분야 입력 & 주제 추천</h3>

<p class="text-gray-600 mt-1">채팅창에 관심사를 입력하면 AI가 탐구 주제 3~5개를 추천합니다. 추천된 주제가 마음에 들지 않으면 <b>'다른 주제 추천받기'</b> 버튼으로 새로운 주제를 계속 탐색할 수 있어요.</p>

</div>

</div>

<!-- Step 2 -->

<div class="flex items-start gap-4">

<div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>

<div>

<h3 class="font-bold text-lg text-gray-700">연구 스타일 정하기</h3>

<p class="text-gray-600 mt-1">마음에 드는 주제를 선택하면 두 가지 연구 스타일이 제시됩니다. <br><b>A트랙</b>은 설문조사처럼 사람들의 생각을 알아보는 사회 탐구, <b>B트랙</b>은 데이터를 분석해 기술적인 해결책을 찾는 기술 분석 방식이에요.</p>

</div>

</div>

<!-- Step 3 & 4 -->

<div class="flex items-start gap-4">

<div class="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>

<div>

<h3 class="font-bold text-lg text-gray-700">계획서 작성 & PPT 구성</h3>

<p class="text-gray-600 mt-1">선택한 스타일에 맞춰 AI가 연구 계획서와 PPT 구성안을 멋진 카드로 만들어 줍니다. 내용을 수정하고 싶다면 채팅으로 편하게 요청하세요. 모든 과정이 끝나면 결과물을 내보낼 수 있습니다.</p>

</div>

</div>

  

<!-- NEW SECTION: Exporting -->

<div class="border-t pt-6 mt-6">

<h3 class="text-xl font-bold text-center mb-4 text-gray-800">💡 결과물 활용하기 (내보내기 가이드)</h3>

<div class="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg">

<p class="font-bold">중요! (보안 안내)</p>

<p class="text-sm mt-1">학생 여러분의 소중한 구글 계정을 보호하기 위해, 이 프로그램은 파일을 직접 만들지 않아요. 대신 '내보내기' 버튼은 **내용을 클립보드에 복사**하는 기능으로 안전하게 작동합니다. 복사한 내용을 새 Google 문서에 붙여넣어 주세요!</p>

</div>

<div class="mt-6">

<h4 class="font-bold text-lg text-gray-700">📋 Google Slides 붙여넣기 TIP!</h4>

<p class="text-gray-600 mt-1 text-sm">복사한 PPT 구성안을 슬라이드로 쉽게 옮기는 방법이에요.</p>

<ol class="list-decimal list-inside text-gray-600 mt-2 space-y-2 text-sm">

<li>'Google Slides로 내보내기' 버튼을 클릭해 전체 구성안을 복사하세요.</li>

<li>먼저, 새 <b>Google Docs</b> 문서를 열고 복사한 내용을 모두 붙여넣으세요. 발표 대본처럼 사용하면 편리합니다.</li>

<li>다음으로, 새 <b>Google Slides</b> 프레젠테이션을 열어주세요.</li>

<li>Docs에 옮겨둔 내용에서 첫 번째 슬라이드의 <b>제목</b>을 복사해, Slides의 <b class="text-red-500">제목 칸</b>에 붙여넣습니다.</li>

<li>다시 Docs에서 첫 번째 슬라이드의 <b>본문 내용</b>을 복사해, Slides의 <b class="text-blue-500">본문 칸</b>에 붙여넣습니다.</li>

<li>Slides에서 새 슬라이드를 추가하고, 모든 내용이 옮겨질 때까지 4~5번 과정을 반복하면 멋진 발표 초안이 완성됩니다!</li>

</ol>

</div>

</div>

</div>

</div>

</div>

  
  

<script>

const chatContainer = document.getElementById('chat-container');

const interestForm = document.getElementById('interest-form');

const interestInput = document.getElementById('interest-input');

const guideButton = document.getElementById('guide-button');

const guideModal = document.getElementById('guide-modal');

const closeGuideButton = document.getElementById('close-guide-button');

let currentStep = 0;

let conversationHistory = [];

let state = { interest: '', selectedTopic: '', selectedTrack: '', researchPlan: '', pptStructure: '' };

  

const systemPrompt = `

# [SYSTEM]

## [1] 정체성(Persona) 정의

너는 "AI 진로 탐구 어드바이저"이다. 학생들의 지적 호기심을 실제 연구 프로젝트로 발전시키는 최고의 연구 컨설턴트이다. 너의 임무는 [관심 분야 입력] → [탐구 주제 추천] → [연구 계획서 작성] → [발표 PPT 구성]으로 이어지는 연구의 전 과정을 체계적으로 관리하고 지원하는 것이다. 너는 항상 학생의 눈높이에서 명확하고 논리적인 가이드를 제공해야 한다.

  

## [2] 핵심 기능 및 프로세스 (4-Step Workflow)

너는 다음 4단계 워크플로우를 순서대로, 그리고 반드시 사용자의 확인과 선택을 받은 후 진행해야 한다.

  

* **1단계: 🔍 탐구 주제 추천 (Topic Recommendation)**

1. 자신을 "AI 진로 탐구 어드바이저"로 소개하고, 사용자(학생)에게 연구하고 싶은 **관심 분야**를 질문한다.

2. 입력받은 관심 분야와 관련된 구체적이고 독창적인 탐구 주제 3~5개를 제안한다.

3. **[중요]** 이 주제들은 너의 내부 지식에만 의존하지 말고, **반드시 실시간 웹 검색을 활용**하여 최신 기술 동향, 사회적 이슈, 학술적 논의를 반영해야 한다.

4. 각 주제와 함께 간단한 추천 이유를 덧붙이고, 사용자에게 가장 흥미로운 주제를 1개 선택하도록 요청한다.

  

* **2단계: 🧭 연구 방향 설정 (Setting Research Style)**

1. 사용자가 주제를 선택하면, 연구를 심화할 두 가지 접근 방식을 제시한다.

* **A트랙 (통계 기반 사회탐구):** 설문조사, 인터뷰, 문헌 분석 등을 통해 사회/문화 현상을 통계적으로 탐구하는 방식. (전국학생통계활용대회 사례집 형식)

* **B트랙 (데이터 기반 기술분석):** 공공 데이터, 실험 데이터 등을 활용해 특정 문제의 원인을 분석하고 해결책을 모델링하는 방식. (환경데이터 분석 사례집 형식)

2. "선택하신 주제를 어떤 스타일로 탐구하고 싶으신가요? A트랙과 B트랙 중 하나를 선택해 주세요."라고 질문한다.

  

* **3단계: ✍️ 연구 계획서 초안 작성 (Drafting Research Plan)**

1. 사용자가 선택한 연구 스타일에 따라, 아래의 지정된 형식에 맞춰 연구 계획서 초안을 작성한다.

2. **A트랙 (통계 기반 사회탐구) 선택 시:**

* **탐구 동기 및 목적:** 왜 이 연구가 필요한가?

* **연구 문제 및 가설:** 무엇을 밝히고 싶은가? 예상 결론은?

* **연구 대상 및 방법:** 누구를, 어떻게 연구할 것인가? (설문조사 기간, 대상, 방법 등 포함)

* **예상 결과 및 의의:** 연구를 통해 무엇을 얻을 수 있는가?

3. **B트랙 (데이터 기반 기술분석) 선택 시:**

* **연구 목표:** 무엇을 달성하고자 하는가?

* **활용 데이터:** 어떤 데이터를, 어디서 얻어 사용할 것인가? (데이터 출처 명시)

* **분석 방법:** 어떤 기술/모델(예: 회귀분석, 머신러닝)을 사용할 것인가?

* **예상 결과 및 기대 효과:** 분석을 통해 무엇을 알 수 있으며, 어떻게 활용될 수 있는가?

  

* **4.단계: 📊 발표 PPT 구성안 제안 (Proposing PPT Structure)**

1. 작성된 연구 계획서의 논리적 흐름에 맞춰, 발표용 PPT의 슬라이드 구성을 8~10장 내외로 제안한다.

2. 구성안은 반드시 다음의 표준 구조를 따라야 하며, 각 항목은 '슬라이드'라는 단어로 시작해야 한다.

* 슬라이드 1: 제목, 연구자 정보

* 슬라이드 2: 연구 동기 및 필요성 (Introduction)

* 슬라이드 3: 연구 문제 및 핵심 가설 (Research Question)

* 슬라이드 4: 연구 설계 및 방법 (Methodology)

* 슬라이드 5-7: 연구 결과 및 데이터 분석 (Results & Analysis) - 핵심 그래프/표 예시 포함

* 슬라이드 8: 결론 및 시사점 (Conclusion)

* 슬라이드 9: 한계점 및 향후 연구 제안 (Limitations & Future Work)

* 슬라이드 10: Q&A

  

## [3] 상호작용 규칙 (Interaction Rules)

* 각 단계의 결과물을 제시한 후, 항상 "이 내용으로 다음 단계를 진행할까요? 수정하고 싶은 부분이 있다면 편하게 말씀해 주세요." 와 같이 사용자의 확인을 구한다.

* 전문 용어를 사용하되, 항상 쉬운 비유나 예시를 함께 제시한다.

* 답변은 항상 마크다운을 사용하여 목록, 제목, 강조 등을 명확하게 구분한다.

`;

const apiKey = "";

  

const stepIcons = [

`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,

`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`,

`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,

`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`

];

const checkmarkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  

function updateNavigator(stepIndex) {

for (let i = 1; i <= 4; i++) {

const stepEl = document.getElementById(`step-${i}`);

const iconWrapper = stepEl.querySelector('.step-icon-wrapper');

stepEl.classList.remove('active', 'completed');

const line = stepEl.previousElementSibling;

if (i < stepIndex + 1) {

stepEl.classList.add('completed');

iconWrapper.innerHTML = checkmarkIcon;

if (line && line.classList.contains('step-line')) line.classList.add('bg-green-500');

} else if (i === stepIndex + 1) {

stepEl.classList.add('active');

iconWrapper.innerHTML = stepIcons[i - 1];

if (line && line.classList.contains('step-line')) line.classList.remove('bg-green-500');

} else {

iconWrapper.innerHTML = stepIcons[i - 1];

if (line && line.classList.contains('step-line')) line.classList.remove('bg-green-500');

}

}

}

function addMessage(sender, text, options = {}) {

const messageWrapper = document.createElement('div');

messageWrapper.className = `w-full flex items-end gap-3 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

  

const bubbleContainer = document.createElement('div');

bubbleContainer.className = 'flex flex-col items-start w-full';

if (sender === 'advisor') {

const avatar = document.createElement('div');

avatar.className = 'w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-lg font-bold shadow-lg shrink-0';

avatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M4 14h16"/></svg>`;

messageWrapper.appendChild(avatar);

}

const messageElement = document.createElement('div');

messageElement.className = `chat-bubble ${sender === 'user' ? 'user-bubble' : 'advisor-bubble markdown'}`;

if (sender === 'advisor') {

messageElement.innerHTML = marked.parse(decodeHtmlEntities(text));

} else {

messageElement.textContent = text;

}

  

bubbleContainer.appendChild(messageElement);

  

if (options.buttons) {

const buttonContainer = document.createElement('div');

buttonContainer.className = `flex flex-wrap gap-3 mt-2 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

options.buttons.forEach(btn => {

const button = document.createElement('button');

button.textContent = btn.text;

button.className = btn.className || 'step-button bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-full shadow-sm hover:bg-blue-50';

button.onclick = () => { buttonContainer.remove(); btn.onClick(btn.payload); };

buttonContainer.appendChild(button);

});

bubbleContainer.appendChild(buttonContainer);

}

messageWrapper.appendChild(bubbleContainer);

chatContainer.appendChild(messageWrapper);

chatContainer.scrollTop = chatContainer.scrollHeight;

const indicator = document.getElementById('loading-indicator');

if (indicator) indicator.remove();

}

  

function toggleInput(enabled) {

interestInput.disabled = !enabled;

const button = interestForm.querySelector('button');

button.disabled = !enabled;

interestInput.placeholder = enabled ? '여기에 메시지를 입력하세요...' : '아래에서 다음 단계를 선택해주세요.';

}

  

function decodeHtmlEntities(text) {

if (typeof text !== 'string') return '';

const textarea = document.createElement('textarea');

textarea.innerHTML = text;

return textarea.value;

}

  

async function callGeminiAPI(prompt, useSearch = false, retryCount = 0) {

const maxRetries = 3;

const delay = Math.pow(2, retryCount) * 1000;

const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

const payload = {

contents: [...conversationHistory, { role: "user", parts: [{ text: prompt }] }],

systemInstruction: { parts: [{ text: systemPrompt }] },

};

if(useSearch) {

payload.tools = [{ "google_search": {} }];

}

  

try {

const response = await fetch(apiUrl, {

method: 'POST',

headers: { 'Content-Type': 'application/json' },

body: JSON.stringify(payload)

});

  

if (!response.ok) {

if (response.status === 429 && retryCount < maxRetries) {

console.warn(`Rate limited. Retrying in ${delay / 1000}s...`);

await new Promise(res => setTimeout(res, delay));

return callGeminiAPI(prompt, useSearch, retryCount + 1);

}

throw new Error(`HTTP error! status: ${response.status}`);

}

  

const result = await response.json();

const candidate = result.candidates?.[0];

  

if (candidate && candidate.content?.parts?.[0]?.text) {

return candidate.content.parts[0].text;

} else {

console.error("Invalid response structure:", result);

// AI 응답 구조가 예상과 다를 경우를 대비하여 오류 처리 로직을 보강했습니다.

const blockReason = result?.promptFeedback?.blockReason;

const errorText = blockReason ? blockReason.toString() : "API response was empty or invalid.";

return `죄송합니다, AI로부터 유효한 답변을 받지 못했습니다. (${errorText})`;

}

  

} catch (error) {

console.error("Error calling Gemini API:", error);

if (retryCount < maxRetries) {

console.warn(`API call failed. Retrying in ${delay / 1000}s...`);

await new Promise(res => setTimeout(res, delay));

return callGeminiAPI(prompt, useSearch, retryCount + 1);

}

return `죄송합니다, AI와 통신하는 중 오류가 발생했습니다: ${error.message}`;

}

}

function showLoading() {

const existingIndicator = document.getElementById('loading-indicator');

if (existingIndicator) return;

  

const loadingIndicator = document.createElement('div');

loadingIndicator.id = 'loading-indicator';

loadingIndicator.className = 'w-full flex items-end gap-3 justify-start';

loadingIndicator.innerHTML = `

<div class="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-lg font-bold shadow-lg shrink-0">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M4 14h16"/></svg>

</div>

<div class="chat-bubble advisor-bubble flex items-center gap-2">

<div class="w-3 h-3 bg-slate-400 rounded-full animate-pulse" style="animation-delay: 0s;"></div>

<div class="w-3 h-3 bg-slate-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>

<div class="w-3 h-3 bg-slate-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>

</div>

`;

chatContainer.appendChild(loadingIndicator);

chatContainer.scrollTop = chatContainer.scrollHeight;

}

function removeLoading() {

const indicator = document.getElementById('loading-indicator');

if (indicator) indicator.remove();

}

  

function showToast(message) {

const toast = document.createElement('div');

toast.textContent = message;

toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white py-2 px-5 rounded-full text-sm shadow-lg toast-animation z-50';

document.body.appendChild(toast);

setTimeout(() => {

toast.remove();

}, 3000);

}

  

function fallbackCopyToClipboard(text) {

const textArea = document.createElement('textarea');

textArea.value = text;

textArea.style.position = 'fixed';

textArea.style.top = '0';

textArea.style.left = '0';

textArea.style.opacity = '0';

document.body.appendChild(textArea);

textArea.focus();

textArea.select();

try {

const successful = document.execCommand('copy');

if (successful) {

showToast('내용이 복사되었습니다!');

} else {

showToast('복사에 실패했습니다.');

}

} catch (err) {

console.error('클립보드 복사 실패:', err);

showToast('복사에 실패했습니다.');

}

document.body.removeChild(textArea);

}

  
  

function copyPlanToClipboard() {

const planHtml = marked.parse(decodeHtmlEntities(state.researchPlan));

const tempDiv = document.createElement('div');

tempDiv.style.position = 'absolute';

tempDiv.style.left = '-9999px';

document.body.appendChild(tempDiv);

tempDiv.innerHTML = planHtml;

  

let plainText = '';

tempDiv.querySelectorAll('h1, h2, h3, h4, p, li').forEach(el => {

if (el.tagName.startsWith('H')) {

plainText += '\n' + el.textContent + '\n' + '-'.repeat(el.textContent.length) + '\n';

} else if (el.tagName === 'LI') {

plainText += ' - ' + el.textContent + '\n';

} else {

plainText += el.textContent + '\n\n';

}

});

const finalText = plainText.trim();

if (navigator.clipboard && window.isSecureContext) {

navigator.clipboard.writeText(finalText)

.then(() => showToast('연구 계획서 내용이 복사되었습니다!'))

.catch(err => {

console.warn('navigator.clipboard 실패, 대체 방법 시도:', err);

fallbackCopyToClipboard(finalText);

});

} else {

fallbackCopyToClipboard(finalText);

}

  

document.body.removeChild(tempDiv);

}

  

function copyPPTToClipboard() {

let plainText = "발표 PPT 구성안\n==================\n\n";

const slides = state.pptStructure.split(/(?=슬라이드 \d+:)/).filter(s => s.trim());

slides.forEach(slide => {

const parts = slide.match(/슬라이드 (\d+): (.*?)\n([\s\S]*)/);

if (parts) {

plainText += `[슬라이드 ${parts[1]}: ${parts[2].replace(/\*\*/g, '')}]\n\n`;

plainText += parts[3].replace(/-\s/g, ' - ').replace(/\*\*/g, '') + '\n\n';

}

});

  

const finalText = plainText.trim();

if (navigator.clipboard && window.isSecureContext) {

navigator.clipboard.writeText(finalText)

.then(() => showToast('PPT 구성안 내용이 복사되었습니다!'))

.catch(err => {

console.warn('navigator.clipboard 실패, 대체 방법 시도:', err);

fallbackCopyToClipboard(finalText);

});

} else {

fallbackCopyToClipboard(finalText);

}

}

function displayResearchPlan(planText) {

state.researchPlan = planText;

const existingContainer = document.getElementById('plan-container');

if (existingContainer) {

existingContainer.remove();

}

  

const container = document.createElement('div');

container.id = 'plan-container';

container.className = 'bg-slate-50 rounded-xl p-4 sm:p-6 my-4 shadow-sm border border-slate-200';

const parsedContent = marked.parse(decodeHtmlEntities(planText));

container.innerHTML = `

<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">

<h3 class="text-lg font-bold text-slate-700 flex items-center gap-2">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

<span>연구 계획서</span>

</h3>

<button onclick="copyPlanToClipboard()" class="export-button">

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 12.5 14 17l-4 4.5"></path></svg>

<span>Google Docs로 내보내기</span>

</button>

</div>

<div class="markdown bg-white p-4 sm:p-6 rounded-lg border border-slate-200">${parsedContent}</div>

`;

chatContainer.appendChild(container);

chatContainer.scrollTop = chatContainer.scrollHeight;

}

function displayPPTStructure(pptText) {

state.pptStructure = pptText;

  

const existingContainer = document.getElementById('ppt-container');

if (existingContainer) {

existingContainer.remove();

}

  

const container = document.createElement('div');

container.id = 'ppt-container';

container.className = 'w-full my-4';

container.innerHTML = `

<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 bg-slate-50 p-4 sm:p-6 rounded-t-xl border-x border-t border-slate-200">

<h3 class="text-lg font-bold text-slate-700 flex items-center gap-2">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 12h20"/><path d="M12 3v18"/></svg>

<span>발표 PPT 구성안</span>

</h3>

<button onclick="copyPPTToClipboard()" class="export-button">

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v14h5v4l4-4h5z"/></svg>

<span>Google Slides로 내보내기</span>

</button>

</div>

`;

const slidesContainer = document.createElement('div');

slidesContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-b-xl border-x border-b border-slate-200';

// '슬라이드' 외에 'Slide' 등 다양한 표현을 인식하도록 기준을 유연하게 변경했습니다.

const slides = pptText.split(/(?=\s*(슬라이드|Slide) \d+:)/).filter(s => s.trim());

slides.forEach(slide => {

const parts = slide.match(/(?:슬라이드|Slide) (\d+): (.*?)\n([\s\S]*)/);

if (!parts) return;

const slideCard = document.createElement('div');

slideCard.className = 'bg-white p-4 rounded-lg shadow-md border border-slate-200 flex flex-col h-full';

// h4 태그가 이미 bold체이므로, 제목 텍스트에서는 마크다운(**)을 제거하여 깔끔하게 표시합니다.

const cleanTitle = decodeHtmlEntities(parts[2].trim()).replace(/\*\*/g, '');

  

slideCard.innerHTML = `

<div class="flex items-center mb-3">

<span class="bg-blue-600 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full mr-3 shrink-0">${parts[1]}</span>

<h4 class="font-bold text-slate-800">${cleanTitle}</h4>

</div>

<div class="text-sm text-slate-600 flex-1 markdown">${marked.parse(decodeHtmlEntities(parts[3].trim()))}</div>

`;

slidesContainer.appendChild(slideCard);

});

container.appendChild(slidesContainer);

chatContainer.appendChild(container);

chatContainer.scrollTop = chatContainer.scrollHeight;

}

  

function displayFinalSummaryCard() {

const existingContainer = document.getElementById('final-summary-container');

if (existingContainer) {

existingContainer.remove();

}

  

const container = document.createElement('div');

container.id = 'final-summary-container';

container.className = 'bg-slate-50 rounded-xl p-4 sm:p-6 my-4 shadow-sm border border-slate-200';

container.innerHTML = `

<div class="text-center mb-4">

<h3 class="text-lg font-bold text-slate-700">🎉 탐구 활동 완료!</h3>

<p class="text-sm text-slate-500 mt-1">결과물을 아래 버튼으로 복사하여 활용해 보세요.</p>

</div>

<div class="flex flex-col sm:flex-row justify-center items-center gap-4">

<button onclick="copyPlanToClipboard()" class="export-button w-full sm:w-auto justify-center">

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 12.5 14 17l-4 4.5"></path></svg>

<span>Google Docs로 내보내기</span>

</button>

<button onclick="copyPPTToClipboard()" class="export-button w-full sm:w-auto justify-center">

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v14h5v4l4-4h5z"/></svg>

<span>Google Slides로 내보내기</span>

</button>

</div>

`;

chatContainer.appendChild(container);

chatContainer.scrollTop = chatContainer.scrollHeight;

}

  

async function handleUserInput(event) {

event.preventDefault();

const userInput = interestInput.value.trim();

if (!userInput) return;

  

addMessage('user', userInput);

conversationHistory.push({ role: "user", parts: [{ text: userInput }] });

interestInput.value = '';

toggleInput(false);

if (currentStep === 0) {

state.interest = userInput;

await getTopics(userInput);

} else {

await handleFollowUp(userInput);

}

}

  

async function getTopics(interest) {

showLoading();

const prompt = `관심 분야: "${interest}"\n위 관심 분야와 관련된 탐구 주제를 3~5개 추천해줘.`;

const response = await callGeminiAPI(prompt, true);

removeLoading();

if (!response || typeof response !== 'string') {

addMessage('advisor', '죄송합니다, 답변을 생성하는 데 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');

toggleInput(true);

return;

}

  

conversationHistory.push({ role: "model", parts: [{ text: response }] });

// AI 답변에서 숫자 목록을 우선으로, 없으면 글머리 기호 목록을 추출하도록 로직을 개선했습니다.

let topicRegex = /^\s*\d+\.\s+(.*)$/gm;

let topics = response.match(topicRegex);

  

// 숫자 목록이 없으면 글머리 기호 목록을 시도합니다.

if (!topics || topics.length === 0) {

console.warn("Numbered list regex failed. Trying bullet point regex.");

topicRegex = /^\s*(?:-|\*)\s+(.*)$/gm;

topics = response.match(topicRegex);

}

if (topics && topics.length > 0) {

const buttons = topics.map((topic, index) => ({

text: `주제 ${index + 1} 선택`,

payload: topic.replace(/^\s*(?:\d+\.|-|\*)\s+/, '').trim(),

onClick: handleTopicSelection

}));

buttons.push({

text: '다른 주제 추천받기',

payload: null,

onClick: handleTopicReRoll,

className: 'step-button bg-slate-100 border border-slate-400 text-slate-600 font-semibold py-2 px-4 rounded-full shadow-sm hover:bg-slate-200'

});

addMessage('advisor', response + "\n\n---\n어떤 주제가 가장 마음에 드시나요? 가장 흥미롭게 느껴지는 주제를 선택해주세요!", { buttons });

} else {

addMessage('advisor', response + "\n\n주제를 추출하는 데 실패했습니다. 다시 시도해주시겠어요?");

toggleInput(true);

}

currentStep = 1;

updateNavigator(1);

}

async function handleTopicReRoll() {

addMessage('user', '다른 주제를 추천해주세요.');

toggleInput(false);

  

const lastAdvisorResponse = conversationHistory.filter(m => m.role === 'model').pop()?.parts[0]?.text || "";

// 이전 주제 목록에서도 숫자 또는 글머리 기호 목록을 추출하도록 수정합니다.

const previousTopics = (lastAdvisorResponse.match(/^\s*(?:\d+\.|-|\*)\s+.*$/gm) || []).join('\n');

  

showLoading();

const prompt = `관심 분야: "${state.interest}"\n이전에 추천했던 주제들:\n${previousTopics}\n\n위 정보들을 바탕으로, 이전에 추천했던 것과는 다른 새로운 탐구 주제 3~5개를 추천해줘.`;

const response = await callGeminiAPI(prompt, true);

removeLoading();

  

if (!response || typeof response !== 'string') {

addMessage('advisor', '죄송합니다, 답변을 생성하는 데 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');

toggleInput(true);

return;

}

conversationHistory.push({ role: "model", parts: [{ text: response }] });

// 새로 추천된 주제 목록에서도 숫자 목록을 우선으로, 없으면 글머리 기호 목록을 추출하도록 로직을 개선했습니다.

let topicRegex = /^\s*\d+\.\s+(.*)$/gm;

let topics = response.match(topicRegex);

// 숫자 목록이 없으면 글머리 기호 목록을 시도합니다.

if (!topics || topics.length === 0) {

console.warn("Numbered list regex failed. Trying bullet point regex.");

topicRegex = /^\s*(?:-|\*)\s+(.*)$/gm;

topics = response.match(topicRegex);

}

if (topics && topics.length > 0) {

const buttons = topics.map((topic, index) => ({

text: `주제 ${index + 1} 선택`,

payload: topic.replace(/^\s*(?:\d+\.|-|\*)\s+/, '').trim(),

onClick: handleTopicSelection

}));

buttons.push({

text: '다른 주제 추천받기',

payload: null,

onClick: handleTopicReRoll,

className: 'step-button bg-slate-100 border border-slate-400 text-slate-600 font-semibold py-2 px-4 rounded-full shadow-sm hover:bg-slate-200'

});

addMessage('advisor', response + "\n\n---\n새롭게 추천해 드리는 주제입니다. 어떤 주제가 가장 마음에 드시나요?", { buttons });

} else {

addMessage('advisor', response + "\n\n새로운 주제를 찾는 데 실패했습니다. 다시 시도해주시겠어요?");

toggleInput(true);

}

}

  

function handleTopicSelection(topic) {

state.selectedTopic = topic;

// 주제 텍스트에서 마크다운 문법(**)을 제거하여 화면에 깔끔하게 표시합니다.

const cleanTopic = topic.replace(/\*\*/g, '');

addMessage('user', `"${cleanTopic}" 주제를 선택했습니다.`);

const prompt = `선택한 주제: "${topic}"\n\n이 주제를 탐구할 두 가지 연구 스타일(A트랙, B트랙)을 제시해줘.`;

showLoading();

callGeminiAPI(prompt).then(response => {

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

const buttons = [

{ text: 'A트랙 선택', payload: 'A', onClick: handleTrackSelection },

{ text: 'B트랙 선택', payload: 'B', onClick: handleTrackSelection }

];

addMessage('advisor', response, { buttons });

});

currentStep = 2;

updateNavigator(2);

}

  

function handleTrackSelection(track) {

state.selectedTrack = track;

addMessage('user', `${track}트랙을 선택했습니다.`);

  

const prompt = `선택한 주제: "${state.selectedTopic}"\n선택한 연구 스타일: ${track}트랙\n\n위 내용에 맞춰 연구 계획서 초안을 작성해줘.`;

  

showLoading();

callGeminiAPI(prompt).then(response => {

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

// 연구 계획서 텍스트와 별도로, 화면에 표시될 AI의 안내 메시지를 생성합니다.

const advisorIntroMessage = `네, 선택하신 주제인 **"${state.selectedTopic.replace(/\*\*/g, '')}"**와 **${track}트랙(${track === 'A' ? '통계 기반 사회탐구' : '데이터 기반 기술분석'})** 연구 스타일에 맞춰 연구 계획서 초안을 작성해 드리겠습니다.`;

// 연구 계획서 카드와 함께 AI 안내 메시지를 먼저 표시합니다.

addMessage('advisor', advisorIntroMessage);

displayResearchPlan(response);

  

const buttons = [

{ text: '네, 다음 단계로 진행할게요', payload: 'proceed', onClick: handlePlanConfirmation },

{ text: '수정하고 싶어요', payload: 'edit', onClick: handlePlanEdit }

];

addMessage('advisor', "연구 계획서 초안입니다. 이 내용으로 다음 단계를 진행할까요?", { buttons });

});

currentStep = 3;

updateNavigator(3);

}

function handlePlanConfirmation() {

addMessage('user', '네, 다음 단계로 진행할게요.');

const prompt = `작성된 연구 계획서:\n\n${state.researchPlan}\n\n위 계획서 내용을 바탕으로 발표용 PPT 구성안을 8~10장으로 제안해줘.`;

  

showLoading();

callGeminiAPI(prompt).then(response => {

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

displayPPTStructure(response);

displayFinalSummaryCard();

addMessage('advisor', "PPT 구성안입니다. 모든 탐구 과정이 마무리되었습니다! 아래에서 결과물을 내보내거나, 채팅으로 수정을 요청할 수 있습니다.");

toggleInput(true);

});

currentStep = 4;

updateNavigator(4);

}

function handlePlanEdit() {

addMessage('user', '수정하고 싶어요.');

addMessage('advisor', '네, 어떤 부분을 어떻게 수정하고 싶으신가요? 자유롭게 입력해주세요. 예를 들어, "연구 대상을 청소년 전체로 바꿔줘" 와 같이 말씀해주시면 됩니다.');

toggleInput(true);

}

  

async function handleFollowUp(userInput) {

let prompt = '';

showLoading();

if (currentStep === 3) { // 계획서 수정

prompt = `현재 연구 계획서:\n\n${state.researchPlan}\n\n사용자 수정 요청: "${userInput}"\n\n위 요청을 반영하여 연구 계획서를 수정해줘.`;

const response = await callGeminiAPI(prompt);

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

displayResearchPlan(response);

const buttons = [

{ text: '네, 다음 단계로 진행할게요', payload: 'proceed', onClick: handlePlanConfirmation },

{ text: '더 수정할래요', payload: 'edit', onClick: handlePlanEdit }

];

addMessage('advisor', "요청하신 대로 계획서를 수정했습니다. 어떠신가요?", { buttons });

  

} else if (currentStep === 4) { // PPT 수정

prompt = `현재 PPT 구성안:\n\n${state.pptStructure}\n\n사용자 수정 요청: "${userInput}"\n\n위 요청을 반영하여 PPT 구성안을 수정해줘.`;

const response = await callGeminiAPI(prompt);

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

displayPPTStructure(response);

displayFinalSummaryCard();

addMessage('advisor', "요청하신 대로 PPT 구성안을 수정했습니다. 더 수정하고 싶은 부분이 있다면 말씀해주세요.");

toggleInput(true);

}

}

  

// 초기화 함수

function init() {

updateNavigator(0);

const prompt = "AI 진로 탐구 어드바이저로서, 자신을 소개하고 사용자에게 관심 분야를 질문해줘.";

  

showLoading();

callGeminiAPI(prompt).then(response => {

removeLoading();

conversationHistory.push({ role: "model", parts: [{ text: response }] });

addMessage('advisor', response);

});

}

// 이벤트 리스너

interestForm.addEventListener('submit', handleUserInput);

guideButton.addEventListener('click', () => guideModal.classList.add('visible'));

closeGuideButton.addEventListener('click', () => guideModal.classList.remove('visible'));

guideModal.addEventListener('click', (e) => {

if (e.target === guideModal) {

guideModal.classList.remove('visible');

}

});

  

init();

</script>

</body>

</html>
```
