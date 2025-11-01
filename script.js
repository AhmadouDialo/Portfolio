// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Figma embed toggles
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.toggle-figma');
  if (!btn) return;

  const card = btn.closest('.card');
  if (!card) return;
  const embedWrap = card.querySelector('.figma-embed');
  const iframe = embedWrap?.querySelector('iframe');
  if (!embedWrap || !iframe) return;

  const wasHidden = embedWrap.hasAttribute('hidden');
  if (wasHidden) {
    // Lazy set src only when opening
    const url = btn.getAttribute('data-figma-url');
    if (url && !iframe.src) iframe.src = url;
    embedWrap.removeAttribute('hidden');
    btn.textContent = 'Hide Figma';
  } else {
    embedWrap.setAttribute('hidden', '');
    btn.textContent = 'View Figma';
  }
});

// Smooth scroll for in‑page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    menu?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

