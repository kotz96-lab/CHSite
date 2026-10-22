import { gsap } from 'gsap';

// Pinned "The Run" moment: scroll scrubs a 0:00 → 5:00 clock through the
// three phases of a run, then the screen shakes as THE WALL slams in.
export function initRun(reduceMotion) {
  const clock = document.querySelector('[data-run-clock]');
  const phases = gsap.utils.toArray('.run__phases p');
  if (reduceMotion) {
    phases.forEach((p) => (p.style.opacity = 1));
    return;
  }

  const time = { s: 0 };
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.run', start: 'top top', end: '+=2600', scrub: 0.6, pin: '.run__pin' },
  });

  tl.to(time, {
    s: 300, duration: 10, ease: 'none',
    onUpdate: () => {
      const s = Math.floor(time.s);
      clock.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    },
  }, 0);

  phases.forEach((p, i) => {
    tl.fromTo(p, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, i * 3);
    if (i < phases.length - 1) tl.to(p, { opacity: 0.2, duration: 1 }, i * 3 + 2.5);
  });

  tl.to('.run__bg', { '--heat': 1, duration: 4, ease: 'power2.in' }, 4)
    .to('.run__clock, .run__phases', { opacity: 0.12, duration: 1 }, 5.5)
    .fromTo('.run__wall', { scale: 3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power4.in' }, 5.5)
    .to('.run__pin', { x: 12, duration: 0.08, repeat: 7, yoyo: true, ease: 'none' }, 6.7)
    .to('.run__pin', { x: 0, duration: 0.1 });
}
