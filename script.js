/* ═══════════════════════════════════
   UNIONE CREATIVA DELLA BISSA — script.js
   ═══════════════════════════════════ */

(function () {

  // Aggiunge js-loaded al body: solo con JS attivo gli elementi
  // vengono nascosti e poi rivelati con animazione
  document.documentElement.classList.add('js-loaded');
  // Anche body potrebbe non essere pronto, usiamo documentElement
  // e il CSS usa .js-loaded .reveal

  function initReveal() {
    var elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function(el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    elements.forEach(function(el) { observer.observe(el); });
  }

  function initNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initReveal();
      initNav();
    });
  } else {
    initReveal();
    initNav();
  }

})();
