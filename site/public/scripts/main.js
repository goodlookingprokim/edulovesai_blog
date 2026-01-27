/**
 * AI Cosmetics Journal - Main JavaScript
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', 
        siteNav.classList.contains('active') ? 'true' : 'false'
      );
    });
  }

  // Copy Link Button
  const copyButtons = document.querySelectorAll('.share-btn--copy');
  
  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const url = this.dataset.url || window.location.href;
      
      navigator.clipboard.writeText(url).then(function() {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        
        setTimeout(function() {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
      });
    });
  });

  // Lazy Loading Images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // Newsletter Form (placeholder handler)
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const submitBtn = this.querySelector('button[type="submit"]');
      const email = emailInput.value;
      
      // Placeholder - replace with actual newsletter service integration
      submitBtn.textContent = 'Subscribing...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        submitBtn.textContent = 'Subscribed!';
        submitBtn.style.background = '#10b981';
        emailInput.value = '';
        
        setTimeout(function() {
          submitBtn.textContent = 'Subscribe';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Reading Progress Bar (for article pages)
  const articleContent = document.querySelector('.article-content');
  
  if (articleContent) {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress__bar"></div>';
    document.body.appendChild(progressBar);
    
    const bar = progressBar.querySelector('.reading-progress__bar');
    
    // Add styles dynamically
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      z-index: 101;
      background: rgba(0, 0, 0, 0.1);
    `;
    
    bar.style.cssText = `
      height: 100%;
      background: linear-gradient(90deg, #6366f1, #ec4899);
      width: 0%;
      transition: width 0.1s ease;
    `;
    
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min((scrolled / documentHeight) * 100, 100);
      bar.style.width = progress + '%';
    });
  }

  // External Links - Open in New Tab
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Table of Contents (auto-generate for articles)
  const articleBody = document.querySelector('.article-content');
  
  if (articleBody) {
    const headings = articleBody.querySelectorAll('h2');
    
    if (headings.length >= 3) {
      const toc = document.createElement('nav');
      toc.className = 'table-of-contents';
      toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';
      
      const tocList = toc.querySelector('ul');
      
      headings.forEach(function(heading, index) {
        const id = 'section-' + (index + 1);
        heading.id = id;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
      });
      
      // Add styles (dark theme)
      toc.style.cssText = `
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5rem;
        border: 1px dashed #333;
        margin-bottom: 2rem;
      `;
      
      toc.querySelector('h4').style.cssText = `
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #888;
        margin-bottom: 1rem;
      `;
      
      toc.querySelector('ul').style.cssText = `
        list-style: none;
        padding: 0;
        margin: 0;
      `;
      
      toc.querySelectorAll('li').forEach(function(li) {
        li.style.cssText = `margin-bottom: 0.5rem;`;
      });
      
      toc.querySelectorAll('a').forEach(function(a) {
        a.style.cssText = `
          color: #fff;
          text-decoration: none;
          font-size: 0.9375rem;
        `;
      });
      
      // Insert at the beginning of article content
      const container = articleBody.querySelector('.container');
      if (container) {
        container.insertBefore(toc, container.firstChild);
      }
    }
  }

  // Console message
  console.log('%cAI & Development Journal',
    'font-size: 18px; font-weight: bold; color: #fff;');
  console.log('%cPowered by Obsidian + AI',
    'font-size: 12px; color: #6b7280;');

  // ================================
  // Search Functionality
  // ================================

  const searchContainer = document.querySelector('.search-container');
  const searchToggle = document.querySelector('.search-toggle');
  const searchDropdown = document.querySelector('.search-dropdown');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let searchIndex = null;
  let searchTimeout = null;
  let selectedIndex = -1;

  // Toggle search dropdown
  if (searchToggle && searchDropdown) {
    searchToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = searchContainer.classList.toggle('active');
      if (isOpen) {
        searchInput.focus();
        loadSearchIndex();
      }
    });
  }

  // Close search when clicking outside
  document.addEventListener('click', function(e) {
    if (searchContainer && !searchContainer.contains(e.target)) {
      searchContainer.classList.remove('active');
      clearSearchResults();
    }
  });

  // Load search index (lazy load)
  function loadSearchIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);

    return fetch('/search-index.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        searchIndex = data;
        return data;
      })
      .catch(function(err) {
        console.error('Failed to load search index:', err);
        return null;
      });
  }

  // Debounce search input
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const query = this.value.trim();

      if (query.length < 2) {
        clearSearchResults();
        return;
      }

      searchTimeout = setTimeout(function() {
        performSearch(query);
      }, 150);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      const results = searchResults.querySelectorAll('.search-result-item');

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
        updateSelectedResult(results);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelectedResult(results);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          const link = results[selectedIndex].querySelector('a');
          if (link) link.click();
        }
      } else if (e.key === 'Escape') {
        searchContainer.classList.remove('active');
        searchInput.blur();
        clearSearchResults();
      }
    });
  }

  function updateSelectedResult(results) {
    results.forEach(function(item, index) {
      if (index === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function performSearch(query) {
    loadSearchIndex().then(function(data) {
      if (!data || !data.articles) return;

      const normalizedQuery = query.toLowerCase();
      const results = data.articles.filter(function(article) {
        const title = (article.title || '').toLowerCase();
        const excerpt = (article.excerpt || '').toLowerCase();
        const category = (article.categoryName || '').toLowerCase();
        const tags = (article.tags || []).join(' ').toLowerCase();
        const author = (article.author || '').toLowerCase();

        return title.includes(normalizedQuery) ||
               excerpt.includes(normalizedQuery) ||
               category.includes(normalizedQuery) ||
               tags.includes(normalizedQuery) ||
               author.includes(normalizedQuery);
      });

      displaySearchResults(results.slice(0, 8), query);
    });
  }

  function displaySearchResults(results, query) {
    selectedIndex = -1;

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">검색 결과가 없습니다</div>';
      return;
    }

    var html = results.map(function(article) {
      var highlightedTitle = highlightMatch(article.title, query);
      return '<div class="search-result-item">' +
        '<a href="' + article.url + '">' +
          '<div class="search-result-category" style="background-color: var(--nb-yellow)">' +
            escapeHtml(article.categoryName) +
          '</div>' +
          '<div class="search-result-title">' + highlightedTitle + '</div>' +
          '<div class="search-result-excerpt">' + escapeHtml(truncate(article.excerpt, 60)) + '</div>' +
        '</a>' +
      '</div>';
    }).join('');

    searchResults.innerHTML = html;
  }

  function highlightMatch(text, query) {
    if (!text || !query) return escapeHtml(text || '');
    var escaped = escapeHtml(text);
    var regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function truncate(str, maxLen) {
    if (!str) return '';
    if (str.length <= maxLen) return str;
    return str.substring(0, maxLen) + '...';
  }

  function clearSearchResults() {
    if (searchResults) {
      searchResults.innerHTML = '';
    }
    selectedIndex = -1;
  }

})();

/**
 * Copy code from code block
 * Called by onclick in code block copy buttons
 */
function copyCode(codeId) {
  const codeElement = document.getElementById(codeId);
  if (!codeElement) return;

  const text = codeElement.textContent;
  navigator.clipboard.writeText(text).then(function() {
    const btn = document.querySelector('[data-code-id="' + codeId + '"]');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied!</span>';
      setTimeout(function() {
        btn.innerHTML = originalHtml;
      }, 2000);
    }
  }).catch(function(err) {
    console.error('Failed to copy code:', err);
  });
}

/**
 * Toggle TOC visibility
 * Called by onclick in TOC toggle buttons
 */
function toggleToc(button) {
  const toc = button.closest('.toc');
  if (!toc) return;

  const list = toc.querySelector('.toc__list');
  if (!list) return;

  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !isExpanded);
  list.style.display = isExpanded ? 'none' : 'block';

  const svg = button.querySelector('svg');
  if (svg) {
    svg.style.transform = isExpanded ? 'rotate(-90deg)' : '';
  }
}
