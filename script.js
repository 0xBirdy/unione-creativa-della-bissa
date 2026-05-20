/* ═══════════════════════════════════
   UNIONE CREATIVA DELLA BISSA — script.js
   ═══════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Intersection Observer for .reveal elements ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 65);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Active nav link ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

});
