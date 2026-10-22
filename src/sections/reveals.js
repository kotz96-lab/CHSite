import { gsap } from 'gsap';

// Section headings slam in; the final CTA character rises from below.
export function initReveals(reduceMotion) {
  if (reduceMotion) return;

  gsap.utils.toArray('.section__head').forEach((head) => {
    gsap.from(head.children, {
      y: 60, opacity: 0, skewY: 4, duration: 0.9, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: head, start: 'top 85%' },
    });
  });

  gsap.utils.toArray('.tile').forEach((t, i) => {
    gsap.from(t, {
      y: 80, opacity: 0, duration: 1, delay: i * 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: '.gameplay__grid', start: 'top 80%' },
    });
  });

  const cta = { trigger: '.cta', start: 'top bottom', end: 'bottom bottom', scrub: true };
  gsap.fromTo('.cta__char', { yPercent: 40 }, { yPercent: 0, ease: 'none', scrollTrigger: cta });
  gsap.fromTo('.cta__burst', { rotate: -20, scale: 0.8 }, { rotate: 0, scale: 1.2, ease: 'none', scrollTrigger: cta });
}
