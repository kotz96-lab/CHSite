import { gsap } from 'gsap';

const EMBERS = 36;

export function initHero(reduceMotion) {
  const embers = document.querySelector('.hero__embers');
  for (let i = 0; i < EMBERS; i++) {
    const e = document.createElement('i');
    e.style.left = `${Math.random() * 100}%`;
    e.style.animationDelay = `${-Math.random() * 8}s`;
    e.style.animationDuration = `${5 + Math.random() * 6}s`;
    e.style.setProperty('--drift', `${(Math.random() - 0.5) * 160}px`);
    e.style.setProperty('--s', (0.5 + Math.random()).toFixed(2));
    embers.appendChild(e);
  }

  if (reduceMotion) return;

  const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
  intro
    .from('.hero__bg', { scale: 1.25, duration: 2.2, ease: 'power2.out' })
    .from('.hero__char', { yPercent: 30, opacity: 0, duration: 1.4 }, 0.2)
    .from('.hero__title span', { yPercent: 110, rotate: -4, duration: 1.1, stagger: 0.12 }, 0.45)
    .from('.hero__content .kicker, .hero__tag, .hero__ctas', { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.9);

  // Scroll-out parallax: each layer moves at its own depth. Uses `y` (not
  // yPercent/scale) on bg + char so it doesn't fight the intro tweens.
  const out = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true };
  gsap.to('.hero__bg', { y: () => innerHeight * 0.25, scrollTrigger: out, ease: 'none' });
  gsap.to('.hero__horde', { yPercent: 15, scrollTrigger: out, ease: 'none' });
  gsap.to('.hero__char', { y: () => innerHeight * -0.12, scale: 1.08, scrollTrigger: out, ease: 'none' });
  gsap.to('.hero__hands', { yPercent: -35, scrollTrigger: out, ease: 'none' });
  gsap.to('.hero__content', { yPercent: 40, opacity: 0, scrollTrigger: out, ease: 'none' });

  // Pointer parallax on desktop.
  if (matchMedia('(pointer: fine)').matches) {
    const char = gsap.quickTo('.hero__char img', 'x', { duration: 0.8, ease: 'power3' });
    const bg = gsap.quickTo('.hero__bg', 'x', { duration: 1.2, ease: 'power3' });
    window.addEventListener('pointermove', (ev) => {
      const nx = ev.clientX / innerWidth - 0.5;
      char(nx * -30);
      bg(nx * 20);
    });
  }
}
