---
title: "Playwright Skill 가이드: 실무 활용 & 심화 (Part 3)"
created: '2025-10-23'
last_modified: '2025-10-23'
tags:
  - Playwright/실무
  - 자동화/프로덕션
  - 웹봇/
  - 스케줄링/
  - 보안/
  - 모니터링/
status: "진행중"
type: "가이드"
priority: "high"
share_link: ""
---

# 🎬 Playwright Skill 가이드: 실무 활용 & 심화 (Part 3)

> **이 노트는 무엇인가요?**
> Part 1, 2에서 배운 기술을 **실제 프로젝트에 적용**하는 방법을 배웁니다. 정기적 실행, 데이터 저장, 모니터링, 보안까지!

## 📋 목차

1. [[#실제 프로젝트 사례]]
2. [[#자동화 스크립트 배포]]
3. [[#정기 실행 설정]]
4. [[#데이터 저장 및 분석]]
5. [[#모니터링 및 알림]]
6. [[#보안 고려사항]]
7. [[#문제 해결 가이드]]

---

## 실제 프로젝트 사례

### 🌳 프로젝트 1: 직업 구인 사이트 자동 모니터링

**상황**: 매일 새로 등록되는 채용 공고를 자동으로 감시하고 싶다면?

```javascript
// job-monitor.js
// 매일 새로운 채용 공고를 자동으로 감시하고 이메일 알림

const { chromium } = require('@playwright/test');
const fs = require('fs');

class JobMonitor {
  constructor(keywords) {
    this.keywords = keywords; // ['JavaScript', 'React', 'Node.js']
    this.seenJobs = this.loadSeenJobs();
  }

  // 이전에 본 공고 목록 로드
  loadSeenJobs() {
    try {
      return JSON.parse(fs.readFileSync('seen-jobs.json', 'utf8'));
    } catch {
      return {};
    }
  }

  // 이전에 본 공고 목록 저장
  saveSeenJobs() {
    fs.writeFileSync('seen-jobs.json', JSON.stringify(this.seenJobs, null, 2));
  }

  // 메인 모니터링 함수
  async monitor() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log('🔍 채용 공고 검색 중...\n');

    const newJobs = [];

    // 각 키워드별로 검색
    for (const keyword of this.keywords) {
      console.log(`🔎 "${keyword}" 검색 중...`);

      // 검색 페이지로 이동
      await page.goto(
        `https://www.linkedin.com/jobs/search/?keywords=${keyword}`
      );

      // 채용 공고 추출
      const jobs = await page.locator('.base-card')
        .all();

      for (const jobElement of jobs) {
        try {
          // 공고 정보 추출
          const title = await jobElement
            .locator('h3')
            .textContent();

          const company = await jobElement
            .locator('.base-search-card__subtitle')
            .textContent();

          const jobId = await jobElement
            .getAttribute('data-job-id');

          // 이전에 본 공고인지 확인
          if (!this.seenJobs[jobId]) {
            newJobs.push({
              id: jobId,
              title: title.trim(),
              company: company.trim(),
              keyword,
              foundAt: new Date().toISOString()
            });

            // 새로운 공고로 표시
            this.seenJobs[jobId] = true;
          }
        } catch (error) {
          // 개별 공고 추출 실패해도 계속
          continue;
        }
      }

      // 페이지 간 대기
      await page.waitForTimeout(1000);
    }

    // 새로운 공고 저장
    this.saveSeenJobs();

    // 결과 출력
    console.log(`\n📊 총 ${newJobs.length}개의 새로운 공고 발견!\n`);

    newJobs.forEach((job, index) => {
      console.log(`${index + 1}. ${job.title}`);
      console.log(`   회사: ${job.company}`);
      console.log(`   키워드: ${job.keyword}\n`);
    });

    // 새로운 공고를 파일에 저장
    if (newJobs.length > 0) {
      const existingJobs = this.loadAllJobs();
      fs.writeFileSync(
        'new-jobs.json',
        JSON.stringify([...newJobs, ...existingJobs], null, 2)
      );
      console.log('✅ 새로운 공고가 저장되었습니다!');
    }

    await browser.close();
  }

  loadAllJobs() {
    try {
      return JSON.parse(fs.readFileSync('new-jobs.json', 'utf8'));
    } catch {
      return [];
    }
  }
}

// 실행
const monitor = new JobMonitor(['JavaScript', 'React', 'Node.js']);
monitor.monitor().catch(console.error);
```

**결과:**
```
🔍 채용 공고 검색 중...
🔎 "JavaScript" 검색 중...
🔎 "React" 검색 중...
🔎 "Node.js" 검색 중...

📊 총 5개의 새로운 공고 발견!

1. Senior JavaScript Developer
   회사: Google
   키워드: JavaScript

2. React Developer (Remote)
   회사: Meta
   키워드: React

✅ 새로운 공고가 저장되었습니다!
```

---

### 🌳 프로젝트 2: 가격 변동 추적 및 알림

**상황**: 좋아하는 상품의 가격이 내려가면 자동으로 알려주고 싶다면?

```javascript
// price-tracker.js
// 상품 가격 자동 추적 및 가격 인하 시 알림

const { chromium } = require('@playwright/test');
const nodemailer = require('nodemailer');
const fs = require('fs');

class PriceTracker {
  constructor(products) {
    this.products = products; // [{url, targetPrice, name}]
    this.priceHistory = this.loadPriceHistory();
  }

  loadPriceHistory() {
    try {
      return JSON.parse(fs.readFileSync('price-history.json', 'utf8'));
    } catch {
      return {};
    }
  }

  savePriceHistory() {
    fs.writeFileSync(
      'price-history.json',
      JSON.stringify(this.priceHistory, null, 2)
    );
  }

  // 이메일 전송 (가격 인하 시)
  async sendEmail(product, currentPrice) {
    // Gmail 또는 다른 이메일 서비스 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ALERT_EMAIL,
      subject: `🎉 가격 인하 알림: ${product.name}`,
      html: `
        <h2>${product.name}</h2>
        <p><strong>목표 가격:</strong> $${product.targetPrice}</p>
        <p><strong>현재 가격:</strong> $${currentPrice}</p>
        <p><strong>할인폭:</strong> $${(product.targetPrice - currentPrice).toFixed(2)}</p>
        <p><a href="${product.url}">상품 보기</a></p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`📧 이메일 전송 완료: ${product.name}`);
    } catch (error) {
      console.log(`❌ 이메일 전송 실패: ${error.message}`);
    }
  }

  // 메인 추적 함수
  async track() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log('💰 상품 가격 추적 중...\n');

    for (const product of this.products) {
      try {
        console.log(`🔍 ${product.name} 확인 중...`);

        // 상품 페이지로 이동
        await page.goto(product.url);

        // 가격 추출 (선택자는 사이트별로 다름)
        const priceText = await page
          .locator('.price, [data-price], .product-price')
          .textContent();

        const currentPrice = parseFloat(
          priceText.replace(/[^0-9.]/g, '')
        );

        console.log(`   현재 가격: $${currentPrice}`);
        console.log(`   목표 가격: $${product.targetPrice}`);

        // 가격 기록
        if (!this.priceHistory[product.name]) {
          this.priceHistory[product.name] = [];
        }

        this.priceHistory[product.name].push({
          price: currentPrice,
          date: new Date().toISOString()
        });

        // 가격이 목표치 이하로 내려갔는지 확인
        if (currentPrice <= product.targetPrice) {
          console.log(`✅ 가격 인하 감지! 알림 전송 중...`);
          await this.sendEmail(product, currentPrice);
        } else {
          const diff = (currentPrice - product.targetPrice).toFixed(2);
          console.log(`⏳ 아직 $${diff} 더 필요\n`);
        }

      } catch (error) {
        console.log(`❌ 오류: ${error.message}\n`);
      }
    }

    this.savePriceHistory();
    await browser.close();
  }
}

// 실행
const tracker = new PriceTracker([
  {
    name: 'MacBook Pro 16"',
    url: 'https://www.amazon.com/Apple-MacBook-MKGR3LL/dp/B0DHHWVH4V',
    targetPrice: 2000
  },
  {
    name: 'iPhone 15 Pro',
    url: 'https://www.apple.com/shop/buy-iphone',
    targetPrice: 900
  }
]);

tracker.track().catch(console.error);
```

---

## 자동화 스크립트 배포

### 📦 프로덕션 구조

```
my-automation-project/
├── src/
│   ├── scrapers/           # 각 사이트별 스크래퍼
│   │   ├── job-monitor.js
│   │   ├── price-tracker.js
│   │   └── news-collector.js
│   ├── utils/              # 공통 유틸리티
│   │   ├── logger.js
│   │   ├── emailer.js
│   │   └── database.js
│   └── config/             # 설정 파일
│       └── config.json
├── data/                   # 데이터 저장소
│   ├── seen-jobs.json
│   ├── price-history.json
│   └── reports/
├── logs/                   # 로그 파일
│   └── app.log
├── package.json
├── .env                    # 환경 변수 (Git에서 제외)
└── README.md
```

### 🔧 package.json 설정

```json
{
  "name": "web-automation",
  "version": "1.0.0",
  "description": "Playwright를 사용한 웹 자동화",
  "scripts": {
    "job-monitor": "node src/scrapers/job-monitor.js",
    "price-tracker": "node src/scrapers/price-tracker.js",
    "news-collect": "node src/scrapers/news-collector.js",
    "all": "npm run job-monitor && npm run price-tracker",
    "dev": "nodemon src/scrapers/job-monitor.js",
    "test": "jest"
  },
  "dependencies": {
    "@playwright/test": "^latest",
    "nodemailer": "^6.x",
    "axios": "^1.x"
  },
  "devDependencies": {
    "nodemon": "^latest"
  }
}
```

---

## 정기 실행 설정

### ⏰ MacOS/Linux - Cron으로 정기 실행

**1️⃣ Crontab 편집**

```bash
crontab -e
```

**2️⃣ 정기 실행 일정 설정**

```bash
# 매일 오전 9시에 job 모니터링 실행
0 9 * * * cd /path/to/automation && node src/scrapers/job-monitor.js >> logs/job-monitor.log 2>&1

# 매일 정오와 오후 6시에 가격 추적 실행
0 12,18 * * * cd /path/to/automation && node src/scrapers/price-tracker.js >> logs/price-tracker.log 2>&1

# 매주 월요일 오전 8시에 뉴스 수집
0 8 * * 1 cd /path/to/automation && node src/scrapers/news-collector.js >> logs/news.log 2>&1
```

**Cron 시간 형식:**
```
분 시 일 월 요일
│  │  │  │  │
│  │  │  │  └─── 0(일) ~ 6(토)
│  │  │  └────── 1(1월) ~ 12(12월)
│  │  └───────── 1 ~ 31
│  └──────────── 0 ~ 23
└─────────────── 0 ~ 59
```

**자주 사용하는 패턴:**
```bash
0 9 * * *       # 매일 오전 9시
0 */6 * * *     # 6시간마다
0 0 * * 0       # 매주 일요일 자정
0 1 1 * *       # 매월 1일 오전 1시
```

### 🪟 Windows - Task Scheduler 사용

**1️⃣ Task Scheduler 열기**
```
검색 → "작업 스케줄러" → 열기
```

**2️⃣ 새 작업 만들기**
- 작업 이름: "Job Monitor"
- 설정: "컴퓨터를 켠 후 30분 뒤부터 시작"
- 반복: "매일"

**3️⃣ 작업 설정**
```
프로그램/스크립트: C:\Program Files\nodejs\node.exe
인수 추가: C:\path\to\automation\src\scrapers\job-monitor.js
시작 위치: C:\path\to\automation
```

---

## 데이터 저장 및 분석

### 💾 데이터베이스 저장 (SQLite)

```javascript
// database-manager.js
// 결과를 데이터베이스에 저장하고 분석하기

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('automation.db');

class DatabaseManager {
  // 테이블 초기화
  initDatabase() {
    db.serialize(() => {
      // 채용 공고 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS jobs (
          id INTEGER PRIMARY KEY,
          job_id TEXT UNIQUE,
          title TEXT,
          company TEXT,
          keyword TEXT,
          found_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // 가격 기록 테이블
      db.run(`
        CREATE TABLE IF NOT EXISTS prices (
          id INTEGER PRIMARY KEY,
          product_name TEXT,
          price REAL,
          recorded_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
    });
  }

  // 데이터 삽입
  addJob(jobId, title, company, keyword) {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT OR IGNORE INTO jobs (job_id, title, company, keyword) VALUES (?, ?, ?, ?)',
        [jobId, title, company, keyword],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  // 데이터 조회
  getJobsByKeyword(keyword) {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM jobs WHERE keyword = ? ORDER BY found_at DESC LIMIT 10',
        [keyword],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }

  // 통계
  getStatistics() {
    return new Promise((resolve, reject) => {
      db.all(
        `
        SELECT 
          COUNT(*) as total_jobs,
          COUNT(DISTINCT company) as unique_companies,
          COUNT(DISTINCT keyword) as keyword_count
        FROM jobs
        `,
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows[0]);
        }
      );
    });
  }

  // 데이터베이스 닫기
  close() {
    return new Promise((resolve, reject) => {
      db.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

module.exports = DatabaseManager;
```

**사용 예:**
```javascript
const dbManager = new DatabaseManager();
dbManager.initDatabase();

// 새로운 공고 추가
await dbManager.addJob('123', 'Developer', 'Google', 'JavaScript');

// 키워드별 조회
const jobs = await dbManager.getJobsByKeyword('JavaScript');
console.log(jobs); // 모든 JavaScript 관련 공고

// 통계
const stats = await dbManager.getStatistics();
console.log(`총 ${stats.total_jobs}개 공고, ${stats.unique_companies}개 회사`);
```

---

## 모니터링 및 알림

### 📊 로깅 시스템

```javascript
// logger.js
// 상세한 로그 기록

const fs = require('fs');
const path = require('path');

class Logger {
  constructor(logFile = 'logs/app.log') {
    this.logFile = logFile;
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const dir = path.dirname(this.logFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };

    const logLine = JSON.stringify(logEntry);

    // 콘솔에 출력
    console.log(`[${level}] ${message}`);

    // 파일에 저장
    fs.appendFileSync(this.logFile, logLine + '\n');
  }

  info(message, data) { this.log('INFO', message, data); }
  error(message, data) { this.log('ERROR', message, data); }
  warn(message, data) { this.log('WARN', message, data); }
  debug(message, data) { this.log('DEBUG', message, data); }

  // 로그 파일 크기가 커지면 자동 회전
  rotateIfNeeded(maxSize = 10 * 1024 * 1024) {
    const size = fs.statSync(this.logFile).size;
    if (size > maxSize) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const newName = this.logFile.replace('.log', `-${timestamp}.log`);
      fs.renameSync(this.logFile, newName);
    }
  }
}

module.exports = Logger;
```

**사용 예:**
```javascript
const logger = new Logger('logs/job-monitor.log');

logger.info('Job monitoring started');
logger.debug('Found 5 new jobs', { count: 5 });
logger.error('Failed to send email', { error: 'SMTP error' });
```

---

## 보안 고려사항

### 🔒 환경 변수 관리

**.env 파일**
```bash
# API 키 및 비밀번호 저장
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
DATABASE_URL=sqlite:///automation.db
PROXY_URL=http://proxy.example.com:8080
```

**환경 변수 로드**
```javascript
// config.js
require('dotenv').config();

module.exports = {
  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD
  },
  database: {
    url: process.env.DATABASE_URL
  },
  proxy: {
    url: process.env.PROXY_URL
  }
};
```

### 🚫 .gitignore 설정

```
# 민감한 정보 제외
.env
.env.local
.env.*.local

# 일시 파일
*.log
logs/

# 데이터
data/
*.db
*.json (필요시)

# 의존성
node_modules/

# 운영체제
.DS_Store
Thumbs.db
```

### 🛡️ User-Agent 및 헤더 설정

```javascript
// 브라우저처럼 보이도록 설정
const browser = await chromium.launch({
  args: ['--disable-blink-features=AutomationControlled']
});

const page = await browser.newPage();

// User-Agent 설정
await page.setUserAgent(
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
);

// 헤더 설정
await page.setExtraHTTPHeaders({
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.google.com/'
});
```

---

## 문제 해결 가이드

### 🐛 자주 나오는 오류

| 오류 | 원인 | 해결책 |
|------|-----|--------|
| Timeout error | 페이지 로드 시간 초과 | `waitForLoadState` 시간 증가 |
| Element not found | 선택자 변경됨 | 웹사이트 구조 재분석 |
| Connection refused | 인터넷 끊김 | 인터넷 연결 확인 |
| Permission denied | 권한 문제 | 파일 권한 확인 |
| Out of memory | 메모리 부족 | 브라우저 수 줄이기 |

### 🧪 디버깅 팁

```javascript
// 1️⃣ 스크린샷으로 상태 확인
await page.screenshot({ path: 'debug-screenshot.png' });

// 2️⃣ 페이지의 모든 로그 출력
page.on('console', msg => console.log('PAGE LOG:', msg.text()));

// 3️⃣ 요소 존재 확인
const exists = await page.locator('.selector').isVisible();
console.log(`Element visible: ${exists}`);

// 4️⃣ HTML 내용 확인
const html = await page.content();
console.log(html);

// 5️⃣ 선택자 검증
const count = await page.locator('.selector').count();
console.log(`Found ${count} elements`);
```

---

## 📊 프로덕션 체크리스트

### ✅ 배포 전 필수 확인사항

- [ ] 모든 환경 변수 설정됨
- [ ] 에러 처리 완료됨
- [ ] 로깅 기능 추가됨
- [ ] 데이터 백업 계획 수립됨
- [ ] 스케줄링 테스트 완료됨
- [ ] 보안 검사 완료됨
- [ ] 문서화 완료됨
- [ ] 성능 테스트 통과됨
- [ ] 모니터링 설정됨
- [ ] 종료 절차 준비됨

### 📋 운영 가이드

```
일일:
- [ ] 로그 확인
- [ ] 오류 알림 확인
- [ ] 데이터 품질 검사

주간:
- [ ] 통계 리뷰
- [ ] 성능 분석
- [ ] 데이터 백업

월간:
- [ ] 전체 감시 대상 검토
- [ ] 선택자 유효성 확인
- [ ] 데이터베이스 최적화
```

---

## 🎓 고급 주제

### 다음 단계 학습:
1. **프록시 사용**: IP 차단 회피
2. **핸들러 가 쿠키/세션**: 로그인 자동화
3. **JavaScript 실행**: 동적 사이트 처리
4. **PDF/파일 다운로드**: 자동 저장
5. **이미지 처리**: OCR을 통한 텍스트 추출
6. **Docker 배포**: 컨테이너화

---

## 📚 전체 가이드 완료!

### 🎊 축하합니다!

이제 당신은:
- ✅ Playwright의 기본부터 심화까지 학습
- ✅ 실제 프로젝트 구현 가능
- ✅ 프로덕션 환경 배포 준비 완료
- ✅ 자동화 전문가 수준

### 📚 학습 경로:
```
Part 1 (기초)
    ↓
Part 2 (중급 & 고급)
    ↓
Part 3 (실무 & 심화) ← 현재 위치
    ↓
🚀 실제 프로젝트 구현!
```

---

## 📞 추가 리소스

- [[Playwright_Skill_가이드_Part1]]
- [[Playwright_Skill_가이드_Part2]]
- 공식 Playwright 문서: https://playwright.dev
- Node.js 가이드
- 보안 모범 사례

---

**작성자**: Claude Code  
**마지막 수정**: 2025-10-23  
**난이도**: 🌳 고급  
**소요 시간**: 40분 (읽기) + 1시간 (실습 및 배포)