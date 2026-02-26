/* ═══════════════════════════════════════════
   İsmail Kıvanç Türkmen — Portfolio
   script.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. COUNTER ANIMATION ── */
  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = target / (1400 / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + '+';
    }, 16);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); counterObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));


  /* ── 2. SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('iv'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.rv').forEach(el => revealObs.observe(el));


  /* ── 3. SKILL BARS ── */
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('iv'); skillObs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.sk-box').forEach(el => skillObs.observe(el));


  /* ── 4. TIMELINE ITEMS ── */
  const tlObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('iv'); tlObs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tl-it').forEach(el => tlObs.observe(el));


  /* ── 5. ACTIVE NAV LINK ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-ul a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });


  /* ── 6. CONTACT FORM ── */
  const form = document.querySelector('.cf');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.fb-btn');
      const original = btn.textContent;
      btn.textContent = 'Sent ✓';
      btn.style.background = '#10b981';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

});
