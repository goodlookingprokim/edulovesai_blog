# Premium Design System - Obsidian Blog

> Vercel React Best Practices 기반 최고급 디자인 시스템

---

## 1. 개요

### 1.1 디자인 철학

현재 **Neo Brutalism** 스타일을 유지하면서 **Vercel의 성능 최적화 패턴**을 적용한 프리미엄 디자인 시스템입니다.

| 원칙 | 설명 |
|------|------|
| **Bold & Playful** | 두꺼운 테두리, 하드 섀도우, 대담한 색상 |
| **Performance First** | CSS content-visibility, 최적화된 애니메이션 |
| **Accessibility** | WCAG 2.1 AA 준수, 시맨틱 HTML |
| **Progressive Enhancement** | 핵심 기능은 JS 없이 동작 |

### 1.2 기술 스택

```
CSS: Vanilla CSS + CSS Custom Properties
Fonts: Space Grotesk (Display) + Inter (Body) + JetBrains Mono (Code)
Icons: Inline SVG (barrel import 회피)
Build: Static HTML Generation
```

---

## 2. Design Tokens

### 2.1 Color Palette

```css
:root {
  /* ===== Core Neo Brutalism Colors ===== */
  --nb-black: #000000;
  --nb-white: #ffffff;
  --nb-cream: #fffef0;

  /* Primary Accent Colors */
  --nb-yellow: #ffde59;      /* Primary */
  --nb-pink: #ff90e8;        /* Secondary */
  --nb-blue: #90e0ff;        /* Info/Links */
  --nb-green: #a8f0c6;       /* Success */
  --nb-orange: #ff8c42;      /* Warning/CTA */
  --nb-purple: #c4b5fd;      /* Accent */
  --nb-red: #ff6b6b;         /* Error */

  /* ===== Semantic Colors ===== */
  --color-bg: var(--nb-cream);
  --color-bg-elevated: var(--nb-white);
  --color-text-primary: var(--nb-black);
  --color-text-secondary: #374151;
  --color-text-muted: #6b7280;

  /* ===== Category Colors ===== */
  --cat-ai-tools: var(--nb-yellow);
  --cat-claude-code: var(--nb-orange);
  --cat-mcp: var(--nb-blue);
  --cat-development: var(--nb-green);
  --cat-tutorials: var(--nb-pink);
  --cat-obsidian: var(--nb-purple);
}
```

### 2.2 Typography Scale

```css
:root {
  /* Font Families */
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-code: 'JetBrains Mono', 'Fira Code', monospace;

  /* Type Scale (1.25 ratio) */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### 2.3 Spacing System

```css
:root {
  /* Spacing (4px base) */
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* Container Widths */
  --container-xs: 320px;
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
  --container-2xl: 1400px;
}
```

### 2.4 Neo Brutalism Effects

```css
:root {
  /* Borders */
  --border-thin: 2px solid var(--nb-black);
  --border-medium: 3px solid var(--nb-black);
  --border-thick: 4px solid var(--nb-black);
  --border-dashed: 2px dashed var(--nb-black);

  /* Hard Shadows (no blur!) */
  --shadow-xs: 2px 2px 0 var(--nb-black);
  --shadow-sm: 3px 3px 0 var(--nb-black);
  --shadow-md: 5px 5px 0 var(--nb-black);
  --shadow-lg: 8px 8px 0 var(--nb-black);
  --shadow-xl: 12px 12px 0 var(--nb-black);

  /* Hover Transform */
  --hover-lift: translate(-4px, -4px);
  --hover-lift-sm: translate(-2px, -2px);

  /* Transitions */
  --transition-fast: 100ms ease;
  --transition-base: 150ms ease;
  --transition-slow: 300ms ease;

  /* Border Radius (minimal for brutalism) */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 9999px;
}
```

---

## 3. Component Library

### 3.1 Buttons

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border: var(--border-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  background: var(--nb-white);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
}

.btn:hover {
  transform: var(--hover-lift-sm);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translate(0, 0);
  box-shadow: none;
}

/* Button Variants */
.btn--primary {
  background: var(--nb-yellow);
}

.btn--secondary {
  background: var(--nb-pink);
}

.btn--cta {
  background: var(--nb-orange);
  box-shadow: var(--shadow-md);
}

.btn--cta:hover {
  box-shadow: var(--shadow-lg);
}

/* Button Sizes */
.btn--sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-xs);
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  box-shadow: var(--shadow-md);
}
```

### 3.2 Cards

```css
/* Base Card */
.card {
  background: var(--nb-white);
  border: var(--border-medium);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  overflow: hidden;
}

.card:hover {
  transform: var(--hover-lift);
  box-shadow: var(--shadow-lg);
}

/* Card Variants */
.card--featured {
  border-width: 4px;
  box-shadow: var(--shadow-lg);
}

.card--compact {
  box-shadow: var(--shadow-sm);
}

/* Card Content */
.card__image {
  aspect-ratio: 16 / 10;
  border-bottom: var(--border-medium);
  overflow: hidden;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.card:hover .card__image img {
  transform: scale(1.02);
}

.card__body {
  padding: var(--space-4);
}

.card__meta {
  padding-top: var(--space-3);
  border-top: var(--border-dashed);
}
```

### 3.3 Badges & Tags

```css
/* Badge */
.badge {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--border-thin);
  background: var(--nb-yellow);
  color: var(--color-text-primary);
}

/* Category Badge Colors */
.badge--ai-tools { background: var(--cat-ai-tools); }
.badge--claude-code { background: var(--cat-claude-code); }
.badge--mcp { background: var(--cat-mcp); }
.badge--development { background: var(--cat-development); }
.badge--tutorials { background: var(--cat-tutorials); }
.badge--obsidian { background: var(--cat-obsidian); }

/* Tag */
.tag {
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  border: var(--border-thin);
  background: var(--nb-white);
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.tag:hover {
  background: var(--nb-pink);
  transform: var(--hover-lift-sm);
  box-shadow: var(--shadow-xs);
}
```

### 3.4 Forms

```css
/* Input */
.input {
  width: 100%;
  padding: var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border: var(--border-medium);
  background: var(--color-bg);
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:focus {
  outline: none;
  background: var(--nb-yellow);
  box-shadow: var(--shadow-sm);
}

/* Input with Icon */
.input-group {
  position: relative;
}

.input-group .input {
  padding-left: var(--space-12);
}

.input-group__icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
}

/* Textarea */
.textarea {
  min-height: 150px;
  resize: vertical;
  line-height: var(--leading-relaxed);
}
```

---

## 4. Performance Optimizations

Vercel React Best Practices 적용 사항:

### 4.1 CSS content-visibility (rendering-content-visibility)

긴 리스트에 적용하여 초기 렌더링 성능 향상:

```css
/* Long list optimization */
.article-card {
  content-visibility: auto;
  contain-intrinsic-size: 0 400px;
}

.sidebar-post {
  content-visibility: auto;
  contain-intrinsic-size: 0 80px;
}
```

### 4.2 SVG Animation Wrapper (rendering-animate-svg-wrapper)

SVG 직접 애니메이션 대신 wrapper div 사용:

```html
<!-- Wrong: animate SVG directly -->
<svg class="animate-spin">...</svg>

<!-- Correct: animate wrapper -->
<div class="animate-spin">
  <svg>...</svg>
</div>
```

### 4.3 Hoisted Static JSX (rendering-hoist-jsx)

정적 요소를 컴포넌트 외부에 정의:

```javascript
// Module-level static element
const loadingSkeleton = `
  <div class="skeleton animate-pulse"></div>
`;

// Use in templates
function renderCard(article) {
  if (!article) return loadingSkeleton;
  // ...
}
```

### 4.4 CSS Class Batching (js-batch-dom-css)

스타일 변경 시 classList 활용:

```javascript
// Wrong: multiple style changes
element.style.width = '100px';
element.style.height = '100px';
element.style.background = 'yellow';

// Correct: single class toggle
element.classList.add('card--active');
```

### 4.5 Lazy Image Loading

```html
<img src="image.jpg" loading="lazy" decoding="async" alt="...">
```

---

## 5. Animation Guidelines

### 5.1 Hover Animations

```css
/* Standard hover lift */
.interactive:hover {
  transform: var(--hover-lift);
  box-shadow: var(--shadow-lg);
}

/* Active/pressed state */
.interactive:active {
  transform: translate(0, 0);
  box-shadow: none;
}
```

### 5.2 Page Transitions

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn var(--transition-slow) ease-out;
}

/* Slide up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp var(--transition-slow) ease-out;
}
```

### 5.3 Loading States

```css
/* Skeleton pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--nb-white) 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: pulse 2s ease-in-out infinite;
}
```

---

## 6. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Base: Mobile (< 640px) */

/* Small: >= 640px */
@media (min-width: 640px) { }

/* Medium: >= 768px */
@media (min-width: 768px) { }

/* Large: >= 1024px */
@media (min-width: 1024px) { }

/* XL: >= 1280px */
@media (min-width: 1280px) { }

/* 2XL: >= 1536px */
@media (min-width: 1536px) { }
```

### 6.1 Grid System

```css
/* Auto-fit grid */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

/* Fixed column grids */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 7. Accessibility Guidelines

### 7.1 Focus States

```css
/* Visible focus outline */
:focus-visible {
  outline: 3px solid var(--nb-black);
  outline-offset: 2px;
}

/* Custom focus for buttons */
.btn:focus-visible {
  outline-color: var(--nb-orange);
  background: var(--nb-yellow);
}
```

### 7.2 Color Contrast

| 조합 | Contrast Ratio | WCAG Level |
|------|----------------|------------|
| Black on Yellow | 12.6:1 | AAA |
| Black on White | 21:1 | AAA |
| Black on Cream | 19.8:1 | AAA |
| Black on Pink | 5.2:1 | AA |

### 7.3 Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Dark Mode Support (Future)

```css
/* Dark mode tokens (planned) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1a1a1a;
    --color-bg-elevated: #2d2d2d;
    --color-text-primary: var(--nb-white);
    --color-text-secondary: #d1d5db;

    /* Adjusted shadows for dark mode */
    --shadow-md: 5px 5px 0 rgba(255, 255, 255, 0.2);
  }
}
```

---

## 9. File Organization

```
site/
├── public/
│   └── styles/
│       ├── main.css            # Combined styles (production)
│       ├── tokens/
│       │   ├── colors.css      # Color variables
│       │   ├── typography.css  # Font variables
│       │   └── spacing.css     # Spacing variables
│       └── components/
│           ├── buttons.css     # Button styles
│           ├── cards.css       # Card styles
│           ├── forms.css       # Form styles
│           └── layout.css      # Layout utilities
└── src/
    └── pages/
        ├── index.html          # Homepage template
        ├── article.html        # Article template
        ├── category.html       # Category template
        ├── journalist.html     # Journalist template
        └── tag.html            # Tag template
```

---

## 10. Usage Guidelines

### 10.1 새 컴포넌트 추가 시

1. Design Tokens 사용 (하드코딩 금지)
2. BEM-like 네이밍: `.component__element--modifier`
3. 호버/포커스 상태 필수 정의
4. 모바일 우선 반응형 작성

### 10.2 성능 체크리스트

- [ ] `content-visibility: auto` 적용 (긴 리스트)
- [ ] SVG 애니메이션은 wrapper에 적용
- [ ] 이미지에 `loading="lazy"` 추가
- [ ] CSS 변경 시 classList 사용
- [ ] 정적 요소는 모듈 레벨에 호이스팅

### 10.3 접근성 체크리스트

- [ ] 시맨틱 HTML 사용 (`<article>`, `<nav>`, `<main>`)
- [ ] ARIA 라벨 추가 (아이콘 버튼)
- [ ] 키보드 네비게이션 테스트
- [ ] 색상 대비 4.5:1 이상
- [ ] `prefers-reduced-motion` 대응

---

## Changelog

### v2.0.0 (2026-01-27)

- Vercel React Best Practices 기반 성능 최적화 적용
- Design Token 시스템 구축
- 컴포넌트 라이브러리 문서화
- 접근성 가이드라인 추가
- 다크 모드 지원 준비

### v1.0.0 (2026-01-27)

- 초기 Neo Brutalism 디자인 시스템
