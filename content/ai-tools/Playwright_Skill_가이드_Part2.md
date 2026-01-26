---
title: "Playwright Skill 가이드: 중급 & 고급 예제 (Part 2)"
created: '2025-10-23'
last_modified: '2025-10-23'
tags:
  - Playwright/중급
  - Playwright/고급
  - 웹스크래핑/
  - 데이터추출/
  - E2E테스트/
  - 자동화/
status: "진행중"
type: "가이드"
priority: "high"
share_link: ""
---

# 🎬 Playwright Skill 가이드: 중급 & 고급 (Part 2)

> **이 노트는 무엇인가요?**
> Part 1에서 기초를 배웠다면, 이제 **실제 프로젝트에 사용 가능한** 중급 & 고급 기술을 배웁니다.

## 📋 목차

1. [[#중급 레벨 예제]]
2. [[#데이터 추출하기]]
3. [[#여러 페이지 자동 순회]]
4. [[#에러 처리]]
5. [[#고급 레벨 예제]]
6. [[#성능 최적화]]
7. [[#실무 체크리스트]]

---

## 중급 레벨 예제

### 🌿 예제 1: 웹페이지에서 데이터 추출하기

**상황**: 뉴스 사이트에서 기사 제목들을 자동으로 수집하고 싶다면?

```javascript
// playwright-intermediate-scrape.js
// 웹페이지에서 정보를 "긁어서" 모으기

const { chromium } = require('@playwright/test');

async function scrapeNewsHeadlines() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1️⃣ BBC News 홈페이지로 이동
  await page.goto('https://www.bbc.com/news');
  
  // 2️⃣ 페이지 완전히 로드될 때까지 대기
  await page.waitForLoadState('networkidle');
  
  // 3️⃣ 모든 기사 제목 찾기
  // h2, h3 태그들이 보통 뉴스 제목
  const headlines = await page.locator('h2, h3')
    .allTextContents();
  
  // 4️⃣ 첫 10개 제목만 출력
  console.log('📰 BBC News 최신 기사:\n');
  headlines.slice(0, 10).forEach((headline, index) => {
    console.log(`${index + 1}. ${headline}`);
  });
  
  // 5️⃣ 총 수집된 제목 개수
  console.log(`\n✅ 총 ${headlines.length}개의 제목을 수집했습니다!`);
  
  await browser.close();
}

scrapeNewsHeadlines().catch(console.error);
```

**실행 결과:**
```
📰 BBC News 최신 기사:

1. Breaking: Major news story
2. Another important update
3. Sport highlights
...
(총 156개의 제목을 수집했습니다!)
```

### 💡 새로운 개념들

| 개념 | 의미 | 비유 |
|------|------|-----|
| **waitForLoadState()** | 페이지가 완전히 로드될 때까지 대기 | 📚 책이 완전히 열려질 때까지 기다리기 |
| **locator()** | 요소 선택하기 | 🔍 특정 부분 찾기 |
| **allTextContents()** | 모든 텍스트 수집 | 📝 모든 문장 모으기 |

### 🌿 예제 2: 여러 상품 정보 수집 (실무 예제)

**상황**: 온라인 쇼핑몰에서 상품명과 가격을 자동으로 수집하고 싶다면?

```javascript
// playwright-intermediate-ecommerce.js
// 전자상거래 사이트 데이터 수집

const { chromium } = require('@playwright/test');
const fs = require('fs');

async function scrapeProductData() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1️⃣ 쇼핑몰 페이지로 이동
  await page.goto('https://example-shop.com/products');
  
  // 2️⃣ 모든 상품 상자 찾기
  const productElements = await page.locator('.product-card')
    .all();
  
  // 3️⃣ 각 상품의 정보를 수집
  const products = [];
  
  for (const product of productElements) {
    // 상품명 추출
    const name = await product
      .locator('.product-name')
      .textContent();
    
    // 가격 추출
    const price = await product
      .locator('.product-price')
      .textContent();
    
    // URL 추출
    const url = await product
      .locator('a')
      .getAttribute('href');
    
    // 수집한 데이터를 배열에 추가
    products.push({
      name: name.trim(),
      price: price.trim(),
      url: url
    });
  }
  
  // 4️⃣ 수집한 데이터를 파일로 저장
  fs.writeFileSync(
    'products.json',
    JSON.stringify(products, null, 2)
  );
  
  // 5️⃣ 결과 출력
  console.log(`✅ ${products.length}개의 상품을 수집했습니다!\n`);
  
  // 첫 5개 상품 미리보기
  products.slice(0, 5).forEach((product, index) => {
    console.log(`${index + 1}. ${product.name}`);
    console.log(`   가격: ${product.price}`);
    console.log(`   링크: ${product.url}\n`);
  });
  
  await browser.close();
}

scrapeProductData().catch(console.error);
```

**저장되는 JSON 파일 예:**
```json
[
  {
    "name": "무선 마우스",
    "price": "$29.99",
    "url": "/product/wireless-mouse"
  },
  {
    "name": "키보드",
    "price": "$79.99",
    "url": "/product/keyboard"
  }
]
```

---

## 데이터 추출하기

### 📊 다양한 추출 방법

#### **방법 1: 텍스트만 추출**

```javascript
// 단순 텍스트 추출
const text = await page.locator('.title').textContent();
console.log(text); // "안녕하세요"
```

#### **방법 2: 속성값 추출 (href, src 등)**

```javascript
// 링크 주소 추출
const link = await page.locator('a').getAttribute('href');
console.log(link); // "/products/item1"

// 이미지 주소 추출
const imgSrc = await page.locator('img').getAttribute('src');
console.log(imgSrc); // "/images/photo.jpg"
```

#### **방법 3: HTML 코드 추출**

```javascript
// 전체 HTML 추출
const html = await page.locator('.container').innerHTML();
console.log(html); // "<div>...</div>"

// 외부 HTML 추출
const outerHtml = await page.locator('.container').outerHTML();
```

#### **방법 4: 다중 요소 추출**

```javascript
// 여러 요소의 텍스트 추출
const allTitles = await page.locator('h2').allTextContents();
console.log(allTitles); // ["제목1", "제목2", "제목3", ...]

// 여러 요소의 개수 확인
const count = await page.locator('.item').count();
console.log(`총 ${count}개의 아이템`);
```

---

## 여러 페이지 자동 순회

### 🌿 예제 3: 페이지네이션 처리하기

**상황**: 10개 페이지에 걸친 상품을 모두 수집하고 싶다면?

```javascript
// playwright-intermediate-pagination.js
// 여러 페이지를 순회하며 데이터 수집

const { chromium } = require('@playwright/test');

async function scrapeMultiplePages() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  let allProducts = [];
  let currentPage = 1;
  const maxPages = 3; // 3페이지만 수집
  
  // 1️⃣ 반복문으로 여러 페이지 처리
  while (currentPage <= maxPages) {
    console.log(`📄 페이지 ${currentPage} 처리 중...`);
    
    // 각 페이지 URL 생성
    const url = `https://example-shop.com/products?page=${currentPage}`;
    
    // 해당 페이지로 이동
    await page.goto(url);
    
    // 페이지 로드 대기
    await page.waitForLoadState('networkidle');
    
    // 현재 페이지의 상품 수집
    const productNames = await page
      .locator('.product-name')
      .allTextContents();
    
    // 전체 배열에 추가
    allProducts = [...allProducts, ...productNames];
    
    console.log(`✅ ${productNames.length}개 상품 수집됨`);
    
    // 다음 페이지로 이동
    currentPage++;
  }
  
  // 2️⃣ 최종 결과
  console.log(`\n🎉 완료! 총 ${allProducts.length}개 상품을 수집했습니다!\n`);
  
  // 처음 10개 표시
  allProducts.slice(0, 10).forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
  });
  
  await browser.close();
}

scrapeMultiplePages().catch(console.error);
```

**실행 결과:**
```
📄 페이지 1 처리 중...
✅ 20개 상품 수집됨
📄 페이지 2 처리 중...
✅ 20개 상품 수집됨
📄 페이지 3 처리 중...
✅ 20개 상품 수집됨

🎉 완료! 총 60개 상품을 수집했습니다!

1. 상품1
2. 상품2
...
```

### 💡 페이지네이션 패턴

```javascript
// 패턴: "다음" 버튼이 있을 때까지 반복
while (await page.locator('.next-button:not([disabled])').isVisible()) {
  // 현재 페이지 데이터 수집
  const data = await collectData();
  
  // "다음" 버튼 클릭
  await page.locator('.next-button').click();
  
  // 페이지 로드 대기
  await page.waitForLoadState('networkidle');
}
```

---

## 에러 처리

### 🌿 예제 4: 안전한 자동화 (에러 처리 포함)

**상황**: 요소가 없거나 로드가 실패해도 계속 진행하고 싶다면?

```javascript
// playwright-intermediate-error-handling.js
// 에러가 발생해도 프로그램이 중단되지 않게 하기

const { chromium } = require('@playwright/test');

async function safeWebScraping() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // 1️⃣ 페이지로 이동 (실패 가능성 있음)
    console.log('🌐 페이지로 이동 중...');
    await page.goto('https://example.com', {
      waitUntil: 'networkidle',
      timeout: 30000 // 30초 대기
    });
    console.log('✅ 페이지 로드 성공');
    
  } catch (error) {
    // 페이지 로드 실패 시 처리
    console.log('❌ 페이지 로드 실패:', error.message);
    console.log('🔄 대체 페이지로 이동...');
    await page.goto('https://backup-example.com');
  }
  
  try {
    // 2️⃣ 특정 요소 찾기 (없을 수도 있음)
    console.log('🔍 제목 요소 찾는 중...');
    const title = await page.locator('h1').textContent({
      timeout: 5000 // 5초 대기
    });
    console.log(`✅ 제목: ${title}`);
    
  } catch (error) {
    // 요소를 찾지 못한 경우
    console.log('⚠️ 제목을 찾을 수 없습니다. 대체 선택자 사용...');
    
    try {
      // 대체 선택자로 재시도
      const title = await page.locator('.page-title').textContent();
      console.log(`✅ 제목: ${title}`);
    } catch (innerError) {
      // 여전히 실패하면 기본값 사용
      console.log('⚠️ 제목: [제목 없음]');
    }
  }
  
  // 3️⃣ 여러 요소 처리 (일부 실패 허용)
  console.log('📦 상품 정보 추출 중...');
  const products = [];
  
  const productElements = await page
    .locator('.product')
    .all();
  
  for (const product of productElements) {
    try {
      const name = await product
        .locator('.name')
        .textContent();
      
      const price = await product
        .locator('.price')
        .textContent();
      
      products.push({ name, price });
      
    } catch (error) {
      // 개별 상품 추출 실패해도 계속 진행
      console.log('⚠️ 상품 정보 추출 실패. 다음 상품으로 진행...');
    }
  }
  
  console.log(`✅ ${products.length}개 상품 추출 성공\n`);
  
  await browser.close();
}

safeWebScraping();
```

**실행 결과:**
```
🌐 페이지로 이동 중...
✅ 페이지 로드 성공
🔍 제목 요소 찾는 중...
✅ 제목: 환영합니다!
📦 상품 정보 추출 중...
✅ 20개 상품 추출 성공

(에러가 발생했어도 프로그램은 계속 실행됨!)
```

---

## 고급 레벨 예제

### 🌳 예제 5: 스크린샷 저장 및 성능 측정

**상황**: 웹페이지의 모습을 저장하고 로딩 시간을 측정하고 싶다면?

```javascript
// playwright-advanced-screenshot.js
// 스크린샷 저장 + 성능 측정 + 상세 리포트

const { chromium } = require('@playwright/test');
const fs = require('fs');

async function advancedWebAnalysis() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1️⃣ 성능 측정 시작
  const startTime = Date.now();
  console.log('⏱️ 성능 측정 시작...\n');
  
  // 페이지로 이동
  await page.goto('https://www.wikipedia.org');
  
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  
  // 2️⃣ 페이지 정보 수집
  const pageInfo = {
    title: await page.title(),
    url: page.url(),
    loadTime: `${loadTime}ms`,
    timestamp: new Date().toISOString()
  };
  
  console.log('📊 페이지 정보:');
  console.log(`  제목: ${pageInfo.title}`);
  console.log(`  URL: ${pageInfo.url}`);
  console.log(`  로딩 시간: ${pageInfo.loadTime}`);
  console.log(`  측정 시간: ${pageInfo.timestamp}\n`);
  
  // 3️⃣ 스크린샷 저장
  const screenshotPath = `./screenshot-${Date.now()}.png`;
  await page.screenshot({ path: screenshotPath });
  console.log(`📸 스크린샷 저장됨: ${screenshotPath}\n`);
  
  // 4️⃣ 뷰포트 크기별 스크린샷 (반응형 확인)
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1920, height: 1080 }
  ];
  
  console.log('📱 반응형 스크린샷 생성...\n');
  
  for (const viewport of viewports) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });
    
    const path = `./screenshot-${viewport.name}.png`;
    await page.screenshot({ path: path });
    console.log(`✅ ${viewport.name}: ${path}`);
  }
  
  // 5️⃣ 성능 메트릭 추출
  console.log('\n⚡ 성능 메트릭 분석...\n');
  
  const metrics = await page.evaluate(() => {
    const perf = window.performance;
    return {
      // 네비게이션 시작부터 로드 완료까지
      totalLoadTime: perf.timing.loadEventEnd - perf.timing.navigationStart,
      // 서버 응답 시간
      serverTime: perf.timing.responseEnd - perf.timing.requestStart,
      // DOM 파싱 시간
      domParsing: perf.timing.domComplete - perf.timing.domLoading
    };
  });
  
  console.log(`📊 로드 시간:   ${metrics.totalLoadTime}ms`);
  console.log(`📊 서버 응답:   ${metrics.serverTime}ms`);
  console.log(`📊 DOM 파싱:    ${metrics.domParsing}ms\n`);
  
  // 6️⃣ 리포트 파일 저장
  const report = {
    pageInfo,
    metrics,
    screenshots: [screenshotPath, ...viewports.map(v => `./screenshot-${v.name}.png`)]
  };
  
  fs.writeFileSync(
    'analysis-report.json',
    JSON.stringify(report, null, 2)
  );
  console.log('📄 분석 리포트 저장됨: analysis-report.json');
  
  await browser.close();
}

advancedWebAnalysis().catch(console.error);
```

**생성되는 파일들:**
```
✅ screenshot-1697903401234.png (전체 페이지)
✅ screenshot-mobile.png (모바일)
✅ screenshot-tablet.png (태블릿)
✅ screenshot-desktop.png (데스크톱)
✅ analysis-report.json (분석 리포트)
```

---

## 성능 최적화

### 🌳 예제 6: 병렬 처리로 속도 높이기

**상황**: 여러 페이지를 동시에 처리해서 시간을 줄이고 싶다면?

```javascript
// playwright-advanced-parallel.js
// 여러 페이지를 동시에 처리 (병렬 처리)

const { chromium } = require('@playwright/test');

async function parallelScraping() {
  const browser = await chromium.launch();
  
  // 처리할 URL 목록
  const urls = [
    'https://news.google.com',
    'https://www.bbc.com/news',
    'https://www.reuters.com',
    'https://www.theguardian.com/international'
  ];
  
  const startTime = Date.now();
  console.log(`⏱️ 4개 뉴스 사이트 동시 처리 시작...\n`);
  
  // Promise.all()을 사용해서 모두 동시에 처리
  const results = await Promise.all(
    urls.map(async (url) => {
      const page = await browser.newPage();
      
      try {
        // 각 페이지로 이동
        await page.goto(url, { timeout: 30000 });
        
        // 페이지 제목 추출
        const title = await page.title();
        
        // 첫 3개 헤드라인 추출
        const headlines = await page
          .locator('h1, h2, h3')
          .allTextContents()
          .then(h => h.slice(0, 3));
        
        return {
          site: new URL(url).hostname,
          title,
          headlines,
          status: '✅'
        };
        
      } catch (error) {
        return {
          site: new URL(url).hostname,
          error: error.message,
          status: '❌'
        };
      } finally {
        await page.close();
      }
    })
  );
  
  const endTime = Date.now();
  const totalTime = endTime - startTime;
  
  // 3️⃣ 결과 출력
  console.log('📰 수집된 뉴스 사이트:\n');
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.site} ${result.status}`);
    
    if (result.headlines) {
      result.headlines.forEach(headline => {
        console.log(`   • ${headline.substring(0, 50)}...`);
      });
    } else if (result.error) {
      console.log(`   오류: ${result.error}`);
    }
    console.log('');
  });
  
  console.log(`⏱️ 총 소요 시간: ${totalTime}ms`);
  console.log(`💡 순차 처리했다면 약 ${totalTime * 4}ms 소요 예상`);
  
  await browser.close();
}

parallelScraping().catch(console.error);
```

**성능 비교:**
```
병렬 처리:  📊 ████  (5초)
순차 처리:  📊 ████████████████  (20초)

🚀 4배 더 빠름!
```

---

## 실무 체크리스트

### ✅ 프로젝트 시작 전 확인사항

- [ ] Node.js 설치됨
- [ ] Playwright Skill 설치됨
- [ ] 기본 문법 이해함
- [ ] 대상 웹사이트의 구조 분석함
- [ ] 요소 선택자(selector) 확인함
- [ ] 에러 처리 계획 수립함
- [ ] 데이터 저장 형식 결정함
- [ ] 성능 테스트 완료함
- [ ] 로그 기능 추가함
- [ ] 정기적 실행 스케줄 설정함

### 📋 자주 사용하는 패턴

```javascript
// 1️⃣ 기본 구조
const { chromium } = require('@playwright/test');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('URL');
// ... 작업 ...
await browser.close();

// 2️⃣ 요소 찾기
await page.locator('selector').click();
await page.locator('selector').fill('text');
await page.locator('selector').textContent();
await page.locator('selector').getAttribute('attr');

// 3️⃣ 대기
await page.waitForLoadState('networkidle');
await page.waitForTimeout(2000);
await page.locator('selector').waitFor();

// 4️⃣ 에러 처리
try {
  // 코드
} catch (error) {
  // 처리
}
```

---

## 🎓 실습 과제

### 레벨 1️⃣: 기초
- [ ] 자신이 자주 방문하는 웹사이트의 제목 추출
- [ ] 검색창에 단어를 입력하고 검색

### 레벨 2️⃣: 중급
- [ ] 특정 웹사이트에서 10개 상품 정보 수집
- [ ] 3개 페이지에서 모든 제목 추출

### 레벨 3️⃣: 고급
- [ ] 에러 처리가 포함된 자동화 스크립트 작성
- [ ] 4개 이상의 웹사이트를 병렬로 처리
- [ ] 스크린샷과 성능 리포트 생성

---

## 📚 다음 단계

### Part 3에서는:
- 🔐 **실제 서비스 구현**: 자동 봇 만들기
- 📅 **정기 실행**: cron/스케줄러 설정
- 🌐 **API 연동**: 결과를 서버로 전송
- 📊 **대시보드**: 결과를 시각화하기
- 🔒 **보안**: 안전한 자동화 방법

---

## 📚 관련 노트

- [[Playwright_Skill_가이드_Part1]]
- [[웹스크래핑 윤리 및 법적 고려사항]]
- [[성능 최적화 기법]]

---

**작성자**: Claude Code  
**마지막 수정**: 2025-10-23  
**난이도**: 🌿 중급 ~ 🌳 고급  
**소요 시간**: 30분 (읽기) + 30분 (실습)