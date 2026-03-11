/* ============================================================
   Animal Crossing: New Horizons — Portfolio Scripts
   ============================================================ */

(function () {
  'use strict';

  /* --- Floating Leaves --- */
  const LEAF_SYMBOLS = ['🍃', '🌿', '🍂', '🌸'];
  const LEAF_INTERVAL = 3000; // ms between spawns
  const LEAF_DURATION_MIN = 8;  // seconds
  const LEAF_DURATION_MAX = 14;
  const MAX_LEAVES = 8;

  const leafContainer = document.getElementById('leaf-container');
  let activeLeaves = 0;

  function spawnLeaf() {
    if (!leafContainer || activeLeaves >= MAX_LEAVES) return;

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var leaf = document.createElement('span');
    leaf.classList.add('leaf');
    leaf.textContent = LEAF_SYMBOLS[Math.floor(Math.random() * LEAF_SYMBOLS.length)];
    leaf.setAttribute('aria-hidden', 'true');

    // Random horizontal position
    leaf.style.left = Math.random() * 100 + '%';

    // Random fall duration
    var duration = LEAF_DURATION_MIN + Math.random() * (LEAF_DURATION_MAX - LEAF_DURATION_MIN);
    leaf.style.animationDuration = duration + 's';

    // Random size variation
    var scale = 0.7 + Math.random() * 0.8;
    leaf.style.fontSize = scale + 'rem';

    // Random start delay for natural feel
    leaf.style.animationDelay = Math.random() * 1 + 's';

    leafContainer.appendChild(leaf);
    activeLeaves++;

    // Clean up after animation completes
    var cleanup = function () {
      if (leaf.parentNode) {
        leaf.parentNode.removeChild(leaf);
      }
      activeLeaves--;
    };
    setTimeout(cleanup, (duration + 2) * 1000);
  }

  // Start leaf spawning after page loads
  if (leafContainer) {
    // Spawn a few leaves initially with staggered timing
    setTimeout(function () { spawnLeaf(); }, 500);
    setTimeout(function () { spawnLeaf(); }, 1500);
    setTimeout(function () { spawnLeaf(); }, 3000);

    setInterval(spawnLeaf, LEAF_INTERVAL);
  }


  /* --- Scroll-triggered Fade-in Animations --- */
  function initScrollAnimations() {
    // Select elements to animate on scroll
    var targets = document.querySelectorAll(
      '.passport-card, .notice-card, .achievement-category, .farewell-sign'
    );

    // Add the fade-in class
    targets.forEach(function (el) {
      el.classList.add('fade-in');
    });

    // Use Intersection Observer for performant scroll detection
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      targets.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Stagger notice card animations --- */
  function staggerNoticeCards() {
    var cards = document.querySelectorAll('.notice-card');
    cards.forEach(function (card, i) {
      card.style.transitionDelay = (i * 0.15) + 's';
    });
  }


  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    staggerNoticeCards();
  });
})();
