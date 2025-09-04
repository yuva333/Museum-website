// Toggle navbar
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fade zoom scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-zoom').forEach(el => {
    const triggerBottom = window.innerHeight * 0.9;
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('show');
    }
  });
});

// Show hero on load (for fade-zoom)
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-zoom').forEach(el => {
    el.classList.add('show');
  });
});

