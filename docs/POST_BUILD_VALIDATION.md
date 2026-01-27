# Post-Build Validation System

## Overview

빌드 완료 후 자동으로 실행되는 검증 시스템으로, 발행 전 문제를 사전에 발견합니다.

---

## Discovered Issues (2026-01-27)

오늘 대화에서 발견된 문제들:

| # | 문제 | 원인 | 해결 |
|---|------|------|------|
| 1 | 저널리스트 아바타 누락 | 페르소나 SVG 파일 미생성 | 4개 SVG 생성 |
| 2 | 대표 이미지 404 | 존재하지 않는 파일 참조 | 이미지 존재 검증 필요 |
| 3 | 코드블록 내 이미지 선택 | regex가 코드블록 무시 안함 | build.js 수정 완료 |
| 4 | Nav와 Explore Topics 불일치 | 템플릿마다 다른 카테고리 링크 | 모든 템플릿 통일 |
| 5 | Untitled 기사 30개 | frontmatter에 title 없음 | 파일명에서 제목 자동 생성 |

---

## Validation Checklist

### 1. Asset Validation (자산 검증)

#### 1.1 Image Existence Check
```
[ ] 모든 기사의 og:image가 실제 존재하는지 확인
[ ] placeholder 이미지가 아닌 경우, 실제 파일 존재 여부 확인
[ ] 이미지 참조 경로가 올바른지 확인 (/assets/images/...)
```

#### 1.2 Journalist Avatar Check
```
[ ] PERSONAS.md에 정의된 모든 페르소나 아바타 파일 존재 확인
[ ] site/public/assets/personas/*.svg 파일 존재 확인
[ ] 빌드 출력에 아바타가 복사되었는지 확인
```

#### 1.3 Category Placeholder Check
```
[ ] 모든 카테고리에 대한 placeholder.svg 존재 확인
[ ] 카테고리 맵에 정의된 카테고리와 placeholder 매칭 확인
```

### 2. Content Validation (콘텐츠 검증)

#### 2.1 Article Title Check (필수)
```
[x] 모든 기사에 유효한 제목이 있는지 확인
[x] "Untitled" 또는 빈 제목 기사 감지
[x] title이 없으면 파일명에서 자동 생성
    예: chapter_06_Planning.md → "Chapter 06 Planning"
```

#### 2.2 Frontmatter Completeness
```
[ ] 필수 필드 존재: title, created, tags, status
[ ] status가 "완료"인 기사만 발행되었는지 확인
[ ] 날짜 형식 유효성 (YYYY-MM-DD)
```

#### 2.3 Article Quality
```
[ ] 제목이 비어있지 않은지 확인
[ ] 본문 내용이 최소 길이 이상인지 확인
[ ] 읽기 시간이 계산되었는지 확인
```

### 3. Link Validation (링크 검증)

#### 3.1 Nav/Category Consistency (필수)
```
[x] 상단 Nav의 카테고리 링크가 실제 존재하는 카테고리 페이지 가리킴
[x] Nav 카테고리에 최소 1개 이상의 기사 존재
[x] Nav, Explore Topics, Footer 카테고리 일치
```

#### 3.2 Internal Links
```
[ ] 기사 간 내부 링크가 유효한지 확인
[ ] 카테고리 링크가 존재하는 카테고리를 가리키는지 확인
[ ] 저널리스트 링크가 유효한지 확인
```

#### 3.3 External Resources
```
[ ] CSS, JS 파일이 존재하는지 확인
[ ] favicon.svg 존재 확인
```

### 4. Build Output Validation (빌드 출력 검증)

#### 4.1 Generated Files
```
[ ] index.html 생성 확인
[ ] feed.xml (RSS) 생성 확인
[ ] sitemap.xml 생성 확인
[ ] 모든 기사 HTML 파일 생성 확인
```

#### 4.2 File Integrity
```
[ ] HTML 파일이 비어있지 않은지 확인
[ ] HTML 구조가 유효한지 확인 (열고 닫는 태그)
```

---

## Implementation Plan

### Phase 1: Validator Module 생성

**파일:** `site/src/validators/post-build-validator.js`

```javascript
// 검증 결과 구조
{
  passed: boolean,
  errors: [{
    type: 'error' | 'warning',
    category: string,
    message: string,
    file?: string,
    suggestion?: string
  }],
  summary: {
    total: number,
    passed: number,
    warnings: number,
    errors: number
  }
}
```

### Phase 2: 검증 함수 구현

1. **validateAssets(articles, buildDir)**
   - 이미지 파일 존재 확인
   - 아바타 파일 확인
   - placeholder 확인

2. **validateContent(articles)**
   - frontmatter 검증
   - 콘텐츠 품질 검증

3. **validateLinks(articles, buildDir)**
   - 내부 링크 검증
   - 리소스 파일 검증

4. **validateBuildOutput(buildDir)**
   - 필수 파일 생성 확인
   - 파일 무결성 확인

### Phase 3: build.js 통합

```javascript
async function build() {
  // ... existing build code ...

  // Post-build validation
  const validationResult = await postBuildValidator.validate(articles, CONFIG);

  if (validationResult.errors.length > 0) {
    console.log('\n⚠️  Validation Issues Found:\n');
    validationResult.errors.forEach(e => {
      console.log(`  [${e.type.toUpperCase()}] ${e.category}: ${e.message}`);
      if (e.suggestion) console.log(`    → ${e.suggestion}`);
    });
  }

  console.log(`\n📋 Validation: ${validationResult.summary.passed}/${validationResult.summary.total} checks passed`);
}
```

### Phase 4: CLI 옵션 추가

```bash
# 검증만 실행
npm run validate

# 빌드 + 검증
npm run build          # 기본적으로 검증 포함

# 검증 스킵 (빠른 빌드)
npm run build:fast     # 검증 생략
```

---

## Validation Output Example (현재 구현됨)

```
>> Building AI & Development Journal...

Found 80 published articles

Built: index.html
...
Built: sitemap.xml

📋 Post-Build Validation
========================

✅ Images: 80/80 exist
✅ Avatars: 5/5 exist
✅ Placeholders: 8/8 exist
✅ Required Files: 4/4 exist
✅ Article Titles: 80/80 valid          ← 필수: Untitled 검증
✅ Article Pages: 80/80 generated
✅ Nav Categories: 6/6 valid            ← 필수: Nav/Explore 일치
⚠️ Internal Links: 689/1004 valid

------------------------
✅ Summary: 952/1267 checks passed
   ⚠️  315 warning(s)

>> Build complete in 1234ms
```

---

## Current Validation Checks (구현 완료)

| # | 검증 항목 | 상태 | 우선순위 |
|---|-----------|------|----------|
| 1 | Images | ✅ 구현됨 | P0 |
| 2 | Avatars | ✅ 구현됨 | P0 |
| 3 | Placeholders | ✅ 구현됨 | P1 |
| 4 | Required Files | ✅ 구현됨 | P1 |
| 5 | **Article Titles** | ✅ 구현됨 | **P0 필수** |
| 6 | Article Pages | ✅ 구현됨 | P1 |
| 7 | **Nav Categories** | ✅ 구현됨 | **P0 필수** |
| 8 | Internal Links | ✅ 구현됨 | P2 |

---

## Related Files

- `site/src/build.js` - 메인 빌드 스크립트
- `site/src/validators/post-build-validator.js` - 검증 모듈 ✅
- `site/src/utils/frontmatter-transformer.js` - 제목 자동 생성
- `docs/PERSONAS.md` - 페르소나 정의
- `site/src/utils/category-mapper.js` - 카테고리 매핑

---

**Created:** 2026-01-27
**Status:** Planning
