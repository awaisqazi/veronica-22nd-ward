// Shared motion engine: reveal-on-scroll for .animate-in, count-ups,
// countdown chips, and marquee pausing when offscreen.
export const REDUCED = matchMedia('(prefers-reduced-motion: reduce)');

export function daysUntil(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  const now = new Date();
  const a = Date.UTC(y, m - 1, d);
  const b = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((a - b) / 86400000);
}

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

function initCountUps() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const run = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    if (REDUCED.matches) { el.textContent = prefix + target.toLocaleString() + suffix; return; }
    const start = performance.now();
    const dur = 1400;
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
}

function initTickers() {
  const tickers = document.querySelectorAll('[data-ticker]');
  if (!tickers.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-offscreen', !entry.isIntersecting));
  });
  tickers.forEach((t) => io.observe(t));
}

function initCountdowns() {
  document.querySelectorAll('[data-days-until]').forEach((el) => {
    el.textContent = String(Math.max(0, daysUntil(el.dataset.daysUntil)));
  });
}

export function initMotion() {
  document.querySelectorAll('.animate-in').forEach((el) => reveal.observe(el));
  initCountUps();
  initTickers();
  initCountdowns();
}
