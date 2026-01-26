---
title: "교사 관찰 기록 생성기 (NEIS 포맷) 코드"
date: 2025-10-05
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "교사-관찰-기록-생성기-neis-포맷-코드"
category: "tutorials"
excerpt: "교사 관찰 기록 생성기 (NEIS 포맷) 코드"
tags:
  - tutorial
  - guide
reading_time: 15
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

<title>교사 관찰 기록 생성기 (NEIS 포맷)</title>

<script src="https://cdn.tailwindcss.com"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">

<style>

body {

font-family: 'Noto Sans KR', sans-serif;

}

.tooltip {

position: relative;

display: inline-block;

}

.tooltip .tooltiptext {

visibility: hidden;

width: 250px;

background-color: #555;

color: #fff;

text-align: center;

border-radius: 6px;

padding: 5px;

position: absolute;

z-index: 1;

bottom: 125%;

left: 50%;

margin-left: -125px;

opacity: 0;

transition: opacity 0.3s;

}

.tooltip .tooltiptext::after {

content: "";

position: absolute;

top: 100%;

left: 50%;

margin-left: -5px;

border-width: 5px;

border-style: solid;

border-color: #555 transparent transparent transparent;

}

.tooltip:hover .tooltiptext {

visibility: visible;

opacity: 1;

}

table th, table td {

border: 1px solid #e2e8f0;

padding: 12px;

text-align: left;

}

.calculated-value {

background-color: #e0f2fe;

font-weight: 500;

}

.copy-btn-feedback {

background-color: #28a745 !important;

color: white;

}

</style>

</head>

<body class="bg-gray-100 flex items-center justify-center min-h-screen">

<div class="container mx-auto p-4 md:p-8 max-w-5xl w-full">

<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">

<div class="text-center mb-6">

<h1 class="text-3xl font-bold text-gray-800">교사 관찰 기록 생성기</h1>

<p class="text-gray-500 mt-2">NEIS 형식에 맞는 학생의 강점 및 관찰 기록을 생성합니다.</p>

<p class="text-xs text-blue-600 mt-1">✓ 글자수와 바이트수는 브라우저에서 자동으로 정확하게 계산됩니다</p>

</div>

  

<div class="mb-6">

<label for="studentData" class="block text-sm font-medium text-gray-700 mb-2">

학생 활동 데이터 입력

<div class="tooltip inline-block">

<span class="ml-2 text-xs text-white bg-gray-400 hover:bg-gray-500 rounded-full px-2 py-1 cursor-pointer align-middle">입력 방법</span>

<span class="tooltiptext">

학생 데이터를 입력하세요. 여러 학생의 경우, 각 학생 데이터 사이에 '---' 구분 기호를 넣어주세요.<br><br>

예시:<br>

학번: 202301, 이름: 김철수...<br>

---<br>

학번: 202302, 이름: 이영희...

</span>

</div>

</label>

<textarea id="studentData" rows="10" class="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="이곳에 학생 활동 데이터를 붙여넣으세요.&#10;여러 학생의 데이터를 입력할 경우, 각 학생의 데이터는 '---'로 구분해주세요."></textarea>

<div id="inputDataCounter" class="text-right text-sm text-gray-500 mt-1 pr-1"></div>

</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">

<div>

<label for="charCountInput" class="block text-sm font-medium text-gray-700">목표 글자 수 (선택)</label>

<input type="number" id="charCountInput" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="예: 150">

</div>

<div>

<label for="byteCountInput" class="block text-sm font-medium text-gray-700">목표 바이트 수 (선택)</label>

<input type="number" id="byteCountInput" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="예: 450">

</div>

</div>

<p class="text-xs text-gray-500 mb-6">한쪽 값을 입력하면 다른 쪽 값이 자동으로 계산됩니다. (한글 3바이트 기준)</p>

  

<div class="text-center flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">

<button id="guideButton" class="w-full sm:w-auto bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-transform transform hover:scale-105 duration-300">

사용자 가이드

</button>

<button id="newPostButton" class="w-full sm:w-auto bg-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-transform transform hover:scale-105 duration-300">

새글

</button>

<button id="generateButton" class="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105 duration-300">

생성하기

</button>

</div>

  

<div id="loader" class="hidden my-6 text-center">

<p class="text-gray-600">관찰 기록을 생성 중입니다. 잠시만 기다려주세요...</p>

<div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">

<div id="progressBar" class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>

</div>

</div>

  

<div id="error" class="hidden my-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg"></div>

  

<div id="result" class="mt-8 overflow-x-auto"></div>

</div>

</div>

  

<!-- User Guide Modal -->

<div id="guideModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">

<div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">

<button id="closeModalButton" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">

<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>

</button>

<h2 class="text-2xl font-bold mb-4 text-gray-800">사용자 가이드</h2>

<h3 class="text-lg font-semibold mt-6 mb-2 text-gray-700">간단 사용법</h3>

<ol class="list-decimal list-inside space-y-2 text-gray-600 bg-gray-50 p-4 rounded-md">

<li>'학생 활동 데이터 입력'란에 학생 데이터를 붙여넣습니다. (입력창 하단에서 각 학생 데이터의 글자/바이트 수를 실시간으로 확인할 수 있습니다.)</li>

<li>'목표 글자 수' 또는 '목표 바이트 수'는 선택 사항입니다. 입력하지 않으면 기본값으로 생성되며, 길이를 조절하고 싶을 경우에만 입력하세요.</li>

<li>학생이 여러 명일 경우, 각 학생의 데이터는 <code class="bg-gray-200 text-red-500 font-mono px-1 rounded">---</code> 로 구분해주세요.</li>

<li>'생성하기' 버튼을 클릭하여 관찰 기록을 생성합니다.</li>

<li>'새글' 버튼을 누르면 입력된 내용과 결과가 초기화됩니다.</li>

</ol>

  

<h3 class="text-lg font-semibold mt-6 mb-2 text-gray-700">결과 활용하기</h3>

<ul class="list-disc list-inside space-y-2 text-gray-600 bg-gray-50 p-4 rounded-md">

<li><b>개별 기록 복사:</b> '교사 관찰 기록' 셀 위에 마우스를 올리면 나타나는 복사 아이콘을 클릭하여 해당 내용을 클립보드에 복사할 수 있습니다.</li>

<li><b>테이블 전체 복사:</b> '테이블 복사' 버튼을 클릭하면 전체 표의 내용이 클립보드에 복사되어, 엑셀이나 구글 스프레드시트에 바로 붙여넣을 수 있습니다.</li>

<li><b>엑셀로 내보내기:</b> '엑셀 파일로 내보내기' 버튼을 클릭하면 전체 표를 .xlsx 파일로 다운로드할 수 있습니다.</li>

</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-gray-700">입력 예시</h3>

<div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-4">

<p class="font-bold">입력 형식 안내</p>

<p>자유로운 형식으로 학생의 활동 내용을 입력할 수 있습니다. 아래 예시처럼 항목을 나누어 정리하거나, 간단히 서술하여 입력해도 좋습니다.</p>

</div>

  

<h4 class="text-md font-semibold mt-4 mb-2 text-gray-600"># 요소를 구분하여 입력한 예시</h4>

<pre class="bg-gray-100 p-4 rounded-md text-sm text-gray-800 overflow-x-auto"><code>학번: 202401, 이름: 김지혜

활동: 과학 프로젝트 '식물 성장 관찰'에서 팀장 역할 수행. 실험 설계 및 데이터 분석 주도. 최종 보고서 작성 기여도 높음.

성취: 교내 과학 경진대회 은상 수상.

태도: 탐구심이 강하고, 문제 해결 과정에서 논리적 사고력이 돋보임. 팀원들과의 협업 능력 우수.</code></pre>

<h4 class="text-md font-semibold mt-6 mb-2 text-gray-600"># 서울형으로 기록한 내용 입력 예시</h4>

<pre class="bg-gray-100 p-4 rounded-md text-sm text-gray-800 overflow-x-auto"><code>10301 홍길동 수학 교사를 목표로 학생들의 공부량과 성적간의 관계를 파악하면서 공부에 어려움을 겪고 있는 학생들에게 도움을 줄 수 있을 것 같다.api 를 이용해 보고 싶어 계속 노력을 했으나 오류가 나와 다른 방향으로 챗봇을 만들었다. 앱을 만드는데 많은 노력이 필요 하다는것을 알게되었고 api 오픈챗봇을 만들기 위해 더 시도해 볼 예정이다.코드를 직접 짜면서 여러가지 문제점을 발생했지만 해결하며 문제해결능력을 키웠다.</code></pre>

  

<h3 class="text-lg font-semibold mt-8 mb-2 text-gray-700">목표 글자 수 설정 안내</h3>

<div class="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md">

<p class="font-bold">AI 생성 길이 관련 참고사항</p>

<p class="mt-1 text-sm">목표 글자 수를 설정하면 AI는 해당 길이를 '지향점'으로 인식하여 최대한 근접하게 생성하려고 노력합니다. 하지만 AI의 최우선 목표는 내용의 완성도와 문장의 자연스러움이므로, 설정한 값과 실제 결과물 사이에 약간의 차이가 발생할 수 있습니다.</p>

<p class="mt-2 text-sm">이 기능은 생성될 내용의 길이를 대략적으로 조절하는 용도로 활용하시는 것이 좋습니다.</p>

</div>

  

<h3 class="text-lg font-semibold mt-8 mb-2 text-gray-700">결과 화면 예시</h3>

<div class="overflow-x-auto border border-gray-200 rounded-lg">

<table class="min-w-full bg-white">

<thead class="bg-gray-50">

<tr>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">학번</th>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">차별화된 강점</th>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">교사 관찰 기록</th>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">글자수</th>

<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">바이트수</th>

</tr>

</thead>

<tbody class="divide-y divide-gray-200">

<tr>

<td class="px-6 py-4 whitespace-nowrap text-sm">202401</td>

<td class="px-6 py-4 whitespace-nowrap text-sm">김지혜</td>

<td class="px-6 py-4 text-sm align-top">• 뛰어난 과학 탐구 및 분석 능력<br>• 리더십과 협업 능력</td>

<td class="px-6 py-4 text-sm align-top">과학 분야에 대한 깊은 탐구심과 지적 호기심을 바탕으로 자기주도적 학습 능력이 탁월함. 특히 과학 프로젝트에서 팀장 역할을 맡아 실험 설계부터 데이터 분석, 보고서 작성까지 전 과정을 주도적으로 이끌며 뛰어난 리더십을 보여줌. 복잡한 문제 상황에서 논리적 사고를 통해 해결책을 찾아내는 능력이 우수하며, 팀원들과의 원활한 소통과 협업을 통해 공동의 목표를 성공적으로 달성하는 데 핵심적인 역할을 수행함.</td>

<td class="px-6 py-4 text-sm calculated-value">148</td>

<td class="px-6 py-4 text-sm calculated-value">440</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

  
  

<script>

const generateButton = document.getElementById('generateButton');

const newPostButton = document.getElementById('newPostButton');

const guideButton = document.getElementById('guideButton');

const guideModal = document.getElementById('guideModal');

const closeModalButton = document.getElementById('closeModalButton');

const studentDataInput = document.getElementById('studentData');

const charCountInput = document.getElementById('charCountInput');

const byteCountInput = document.getElementById('byteCountInput');

const inputDataCounter = document.getElementById('inputDataCounter');

const loader = document.getElementById('loader');

const resultDiv = document.getElementById('result');

const errorDiv = document.getElementById('error');

let progressInterval = null;

  

// 글자수와 바이트 수 자동 변환

charCountInput.addEventListener('input', () => {

const chars = parseInt(charCountInput.value, 10);

if (!isNaN(chars)) {

byteCountInput.value = Math.round(chars * 3);

} else {

byteCountInput.value = '';

}

});

  

byteCountInput.addEventListener('input', () => {

const bytes = parseInt(byteCountInput.value, 10);

if (!isNaN(bytes)) {

charCountInput.value = Math.round(bytes / 3);

} else {

charCountInput.value = '';

}

});

  

// 입력 데이터 글자 수 및 바이트 수 실시간 계산

studentDataInput.addEventListener('input', () => {

const text = studentDataInput.value;

if (text) {

const students = text.split('---');

const countsText = students.map((studentText, index) => {

const trimmedText = studentText.trim();

if (trimmedText) {

const { totalChars, totalBytes } = calculateNEIS(trimmedText);

return `학생 ${index + 1}: ${totalChars}자 / ${totalBytes}바이트`;

}

return null;

}).filter(Boolean).join('<br>'); // Use <br> for line breaks in HTML

  

inputDataCounter.innerHTML = countsText; // Use innerHTML to render line breaks

} else {

inputDataCounter.innerHTML = ''; // Clear if textarea is empty

}

});

  
  

// NEIS 바이트 계산 함수

function calculateNEIS(text) {

const koreanCount = (text.match(/[가-힣]/g) || []).length;

const englishCount = (text.match(/[a-zA-Z]/g) || []).length;

const numberCount = (text.match(/[0-9]/g) || []).length;

const spaceCount = (text.match(/ /g) || []).length;

const newlineCount = (text.match(/\n/g) || []).length;

const totalChars = text.length;

const specialCount = totalChars - koreanCount - englishCount - numberCount - spaceCount - newlineCount;

const totalBytes = (koreanCount * 3) + englishCount + numberCount + spaceCount + specialCount + newlineCount;

return {

totalChars,

totalBytes,

};

}

  

generateButton.addEventListener('click', async () => {

const studentData = studentDataInput.value.trim();

  

if (!studentData) {

showError("학생 활동 데이터를 입력해주세요.");

return;

}

  

showLoader(true);

clearResults();

  

try {

const desiredChars = charCountInput.value;

const desiredBytes = byteCountInput.value;

const modelResponse = await callGenerativeAI(studentData, desiredChars, desiredBytes);

displayResult(modelResponse);

} catch (e) {

console.error("최종 생성 실패:", e);

showError(`오류가 발생했습니다: ${e.message}. 잠시 후 다시 시도해주세요.`);

} finally {

showLoader(false);

}

});

  

newPostButton.addEventListener('click', () => {

studentDataInput.value = '';

charCountInput.value = '';

byteCountInput.value = '';

inputDataCounter.innerHTML = '';

clearResults();

studentDataInput.focus();

});

  

guideButton.addEventListener('click', () => {

guideModal.classList.remove('hidden');

});

  

closeModalButton.addEventListener('click', () => {

guideModal.classList.add('hidden');

});

  

guideModal.addEventListener('click', (event) => {

if (event.target === guideModal) {

guideModal.classList.add('hidden');

}

});

  

function showLoader(isLoading) {

const progressBar = document.getElementById('progressBar');

loader.classList.toggle('hidden', !isLoading);

generateButton.disabled = isLoading;

newPostButton.disabled = isLoading;

guideButton.disabled = isLoading;

generateButton.classList.toggle('opacity-50', isLoading);

newPostButton.classList.toggle('opacity-50', isLoading);

guideButton.classList.toggle('opacity-50', isLoading);

generateButton.classList.toggle('cursor-not-allowed', isLoading);

newPostButton.classList.toggle('cursor-not-allowed', isLoading);

guideButton.classList.toggle('cursor-not-allowed', isLoading);

  

if (isLoading) {

progressBar.style.width = '0%';

let progress = 0;

progressInterval = setInterval(() => {

progress += Math.random() * 5;

if (progress > 95) {

progress = 95;

clearInterval(progressInterval);

}

progressBar.style.width = progress + '%';

}, 300);

} else {

if (progressInterval) {

clearInterval(progressInterval);

progressInterval = null;

}

progressBar.style.width = '100%';

setTimeout(() => {

progressBar.style.width = '0%';

}, 500);

}

}

  

function showError(message) {

errorDiv.textContent = message;

errorDiv.classList.remove('hidden');

}

  

function clearResults() {

resultDiv.innerHTML = '';

errorDiv.classList.add('hidden');

}

  

function parseMarkdownTable(markdown) {

const lines = markdown.trim().split('\n');

if (lines.length < 2) return null;

  

const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);

const rows = lines.slice(2).map(line => {

const cells = line.split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|')).filter(Boolean);

return cells;

});

  

return { headers, rows };

}

function copyToClipboard(text, button) {

const textarea = document.createElement('textarea');

textarea.value = text;

textarea.style.position = 'absolute';

textarea.style.left = '-9999px';

document.body.appendChild(textarea);

textarea.select();

try {

document.execCommand('copy');

const originalContent = button.innerHTML;

button.innerHTML = '✓';

button.classList.add('copy-btn-feedback');

setTimeout(() => {

button.innerHTML = originalContent;

button.classList.remove('copy-btn-feedback');

}, 1500);

} catch (err) {

console.error('클립보드 복사 실패:', err);

}

document.body.removeChild(textarea);

}

  

function exportToExcel() {

const table = document.querySelector('#result-table');

if (!table) {

showError('내보낼 데이터가 없습니다.');

return;

}

// 복사 버튼을 제외하고 내보내기 위해 테이블 복제 및 수정

const tableClone = table.cloneNode(true);

const copyButtons = tableClone.querySelectorAll('.copy-btn-container');

copyButtons.forEach(btn => btn.remove());

const wb = XLSX.utils.table_to_book(tableClone, { sheet: "교사 관찰 기록" });

XLSX.writeFile(wb, "교사_관찰_기록.xlsx");

}

function copyTableToClipboard(button) {

const table = document.querySelector('#result-table');

if (!table) {

showError('복사할 데이터가 없습니다.');

return;

}

  

let tsv = '';

const rows = table.querySelectorAll('tr');

  

rows.forEach(row => {

const cells = row.querySelectorAll('th, td');

const rowData = [];

cells.forEach(cell => {

const cellClone = cell.cloneNode(true);

const copyBtn = cellClone.querySelector('.copy-btn-container');

if (copyBtn) {

copyBtn.remove();

}

let cellText = cellClone.innerHTML.replace(/<br\s*\/?>/gi, ' ').trim();

const tempDiv = document.createElement('div');

tempDiv.innerHTML = cellText;

cellText = (tempDiv.textContent || tempDiv.innerText || "").replace(/\s+/g, ' ').trim();

rowData.push(`"${cellText}"`); // 따옴표로 감싸서 셀 내 줄바꿈 등을 유지

});

tsv += rowData.join('\t') + '\n';

});

const textarea = document.createElement('textarea');

textarea.value = tsv;

textarea.style.position = 'absolute';

textarea.style.left = '-9999px';

document.body.appendChild(textarea);

textarea.select();

try {

document.execCommand('copy');

const originalContent = button.innerHTML;

button.innerHTML = '✓ 복사 완료!';

button.classList.add('copy-btn-feedback');

setTimeout(() => {

button.innerHTML = originalContent;

button.classList.remove('copy-btn-feedback');

}, 2000);

} catch (err) {

console.error('테이블 복사 실패:', err);

showError('테이블 복사에 실패했습니다.');

}

document.body.removeChild(textarea);

}

  

function displayResult(response) {

const tableRegex = /(\|.+\|\r?\n\|-+.+\|(\r?\n\|.+\|)+)/;

const match = response.match(tableRegex);

  

if (!match) {

showError("생성된 결과에서 유효한 테이블을 찾을 수 없습니다. 모델이 예상치 못한 형식으로 응답했을 수 있습니다.");

console.log("Raw response:", response);

return;

}

const markdownTable = match[0];

const parsedTable = parseMarkdownTable(markdownTable);

  

if (!parsedTable) {

showError("결과 테이블을 파싱하는 데 실패했습니다.");

return;

}

  

const { headers, rows } = parsedTable;

  

const table = document.createElement('table');

table.id = "result-table";

table.className = "min-w-full bg-white border border-gray-200 rounded-lg shadow";

  

const thead = document.createElement('thead');

thead.className = "bg-gray-50";

const headerRow = document.createElement('tr');

headers.forEach(headerText => {

const th = document.createElement('th');

th.textContent = headerText;

th.className = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

headerRow.appendChild(th);

});

thead.appendChild(headerRow);

table.appendChild(thead);

  

const tbody = document.createElement('tbody');

tbody.className = "bg-white divide-y divide-gray-200";

rows.forEach(rowData => {

const tr = document.createElement('tr');

tr.className = "hover:bg-gray-50 transition-colors";

const observationIndex = headers.findIndex(h => h.includes('교사 관찰 기록'));

const charCountIndex = headers.findIndex(h => h.includes('글자수'));

const byteCountIndex = headers.findIndex(h => h.includes('바이트'));

let calculatedChars = null;

let calculatedBytes = null;

if (observationIndex !== -1 && rowData[observationIndex]) {

const observationText = rowData[observationIndex].trim();

const calculation = calculateNEIS(observationText);

calculatedChars = calculation.totalChars;

calculatedBytes = calculation.totalBytes;

}

rowData.forEach((cellData, index) => {

const td = document.createElement('td');

if (index === charCountIndex && calculatedChars !== null) {

td.textContent = calculatedChars;

td.className = "px-6 py-4 text-sm text-gray-700 calculated-value";

td.title = "브라우저에서 정확하게 계산된 값";

} else if (index === byteCountIndex && calculatedBytes !== null) {

td.textContent = calculatedBytes;

td.className = "px-6 py-4 text-sm text-gray-700 calculated-value";

td.title = "나이스(NEIS) 기준으로 정확하게 계산된 값";

} else {

td.className = "px-6 py-4 whitespace-pre-wrap text-sm text-gray-700 align-top";

if (index === observationIndex) {

td.style.minWidth = '350px';

td.classList.add('relative', 'group');

  

const textSpan = document.createElement('span');

textSpan.innerHTML = cellData.replace(/•/g, '<br>• ').replace(/^<br>/, '');

td.appendChild(textSpan);

  

const copyContainer = document.createElement('div');

copyContainer.className = 'copy-btn-container absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity';

const copyButton = document.createElement('button');

copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM8.5 2h-1v1h1v-1z"/></svg>`;

copyButton.className = "p-1.5 bg-gray-200 hover:bg-gray-300 rounded text-gray-600";

copyButton.title = "기록 내용 복사";

copyButton.addEventListener('click', (e) => {

e.stopPropagation();

copyToClipboard(textSpan.textContent, copyButton);

});

copyContainer.appendChild(copyButton);

td.appendChild(copyContainer);

  

} else {

td.innerHTML = cellData.replace(/•/g, '<br>• ').replace(/^<br>/, '');

}

if (headers[index].includes('차별화된 강점')) {

td.style.minWidth = '250px';

}

}

tr.appendChild(td);

});

tbody.appendChild(tr);

});

table.appendChild(tbody);

  

const infoDiv = document.createElement('div');

infoDiv.className = "mt-4 p-3 bg-blue-50 text-blue-700 text-sm rounded-lg";

infoDiv.innerHTML = `

<strong>ℹ️ 알림:</strong> 파란색 배경의 글자수와 바이트수는 나이스(NEIS) 기준으로 브라우저에서 정확하게 계산된 값입니다.<br>

<span class="text-xs text-blue-600">• 한글: 3바이트 | 영문/숫자/공백/특수문자: 1바이트 | 줄바꿈: 1바이트</span>

`;

  

const exportButtonContainer = document.createElement('div');

exportButtonContainer.className = 'mt-4 flex flex-col sm:flex-row gap-2 justify-end';

  

const exportButton = document.createElement('button');

exportButton.id = 'exportButton';

exportButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel inline-block mr-2" viewBox="0 0 16 16"><path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.64L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 1A1.5 1.5 0 0 0 8 2.5v1A1.5 1.5 0 0 0 9.5 5h1A1.5 1.5 0 0 0 12 3.5v-1A1.5 1.5 0 0 0 10.5 1h-1z"/></svg>엑셀 파일로 내보내기`;

exportButton.className = "w-full sm:w-auto bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-300";

exportButton.addEventListener('click', exportToExcel);

  

const copyTableButton = document.createElement('button');

copyTableButton.id = 'copyTableButton';

copyTableButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check inline-block mr-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3z"/></svg>테이블 복사`;

copyTableButton.className = "w-full sm:w-auto bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 transition-transform transform hover:scale-105 duration-300";

copyTableButton.addEventListener('click', () => copyTableToClipboard(copyTableButton));

exportButtonContainer.appendChild(copyTableButton);

exportButtonContainer.appendChild(exportButton);

  
  

resultDiv.appendChild(infoDiv);

resultDiv.appendChild(table);

resultDiv.appendChild(exportButtonContainer);

}

  

async function callGenerativeAI(studentData, desiredChars, desiredBytes) {

const finalChars = desiredChars || '150';

const finalBytes = desiredBytes || '450';

const lengthInstruction = `approximately ${finalChars} characters (${finalBytes} bytes)`;

  

const systemPrompt = `You are an experienced Korean teacher creating comprehensive student observation records for NEIS (National Education Information System).

  

Here is the student activity data you need to analyze:

  

<student_data>

${studentData}

</student_data>

  

## Your Task

  

For each student:

1. Identify 1-2 key differentiated strengths based on their activities.

2. Write a professional observation record that adheres strictly to the target length of ${lengthInstruction}.

  

## Observation Record Requirements

  

- Professional teacher perspective, third-person format.

- Focus on patterns and trends, not just listing achievements.

- Emphasize student strengths and connect to educational competencies.

- Use formal Korean endings consistently (e.g., ~함, ~임, ~남).

- Write in paragraph format without bullet points.

- **Critically important subject omission: Omit subjects like '학생은' or '이 학생은'. Start sentences by describing actions or competencies (e.g., "과학 분야에 대한 깊은 탐구심을 바탕으로...").**

- **CRITICAL REQUIREMENT - ADHERE TO LENGTH:** The observation record MUST be as close to ${finalChars} characters as possible. This is not a suggestion, but a strict rule. You must actively adjust sentence structure, add descriptive details, or combine sentences to precisely meet the target length of ${lengthInstruction}. Review and revise your writing to ensure it meets this requirement.

- Maintain a constructive, professional tone.

  

## Output Format

  

Create a markdown table with the following columns. Output ONLY this table.

  

| 학번 | 이름 | 차별화된 강점 | 교사 관찰 기록 | 글자수 | 바이트수 |

|------|------|----------------|----------------|--------|----------|

| [ID] | [Name] | • [Key strength 1]<br>• [Key strength 2] | [Observation record of the target length] | 0 | 0 |

  

**Important Notes:**

- For '글자수' and '바이트수' columns, you MUST put "0". These are calculated by the client-side code automatically.

- Focus on writing a high-quality observation record following all rules, especially the length requirement.

- Do NOT attempt to calculate character or byte counts yourself.

`;

  

const apiKey = "";

const model = 'gemini-2.5-flash-preview-05-20';

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

const payload = {

contents: [{

parts: [{ text: systemPrompt }]

}]

};

  

let response;

let retries = 3;

let delay = 1000;

while (retries > 0) {

try {

response = await fetch(API_URL, {

method: 'POST',

headers: {

'Content-Type': 'application/json',

},

body: JSON.stringify(payload),

});

  

if (response.ok) {

const result = await response.json();

if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts[0].text) {

return result.candidates[0].content.parts[0].text;

}

let errorMessage = '모델이 응답을 생성하지 못했습니다.';

if (result.promptFeedback && result.promptFeedback.blockReason) {

errorMessage += ` 이유: ${result.promptFeedback.blockReason}`;

}

throw new Error(errorMessage);

  

} else {

let errorData;

try {

errorData = await response.json();

} catch (e) {

throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);

}

const message = errorData?.error?.message || JSON.stringify(errorData);

throw new Error(`API 오류 (${response.status}): ${message}`);

}

} catch (error) {

console.error("API 호출 중 오류 발생:", error);

retries--;

if (retries === 0) {

throw error;

}

console.log(`Retrying in ${delay / 1000}s... (${retries} left)`);

await new Promise(res => setTimeout(res, delay));

delay *= 2; // Exponential backoff

}

}

}

</script>

</body>

</html>
```