import { gsap } from 'gsap';
import { STEPS } from '../content.js';
import { createTabs } from './tabs.js';

export function initHow() {
  const panel = document.querySelector('[data-how-panel]');

  createTabs({
    tabsEl: document.querySelector('[data-how-tabs]'),
    dotsEl: document.querySelector('[data-how-dots]'),
    prevEl: document.querySelector('[data-how-prev]'),
    nextEl: document.querySelector('[data-how-next]'),
    labels: STEPS.map((s) => s.title.replace(/\.$/, '')),
    onChange(i, prev) {
      const s = STEPS[i];
      const dir = i > prev ? 1 : -1;
      const render = () => {
        panel.innerHTML = `
          <div class="how__text">
            <span class="how__num">${s.kicker}</span>
            <h3 class="h3">${s.title}</h3>
            <p>${s.body}</p>
          </div>
          <div class="frame how__media" data-slot="${s.slot}">
            <img src="${s.img}" alt="" />
          </div>`;
        gsap.fromTo(panel.querySelector('.how__text'), { x: 40 * dir, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
        gsap.fromTo(panel.querySelector('.how__media'), { clipPath: dir > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0%)', duration: 0.8, ease: 'power4.inOut' });
      };
      if (prev < 0) return render();
      gsap.to(panel.children, { opacity: 0, x: -30 * dir, duration: 0.25, ease: 'power2.in', onComplete: render });
    },
  });
}
