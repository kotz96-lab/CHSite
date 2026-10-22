import { gsap } from 'gsap';
import { WORLDS } from '../content.js';
import { createTabs } from './tabs.js';

export function initWorlds() {
  const bgsEl = document.querySelector('[data-worlds-bgs]');
  const info = document.querySelector('[data-worlds-info]');
  const section = document.querySelector('.worlds');

  const bgs = WORLDS.map((w) => {
    const d = document.createElement('div');
    d.className = 'worlds__bg';
    d.dataset.slot = `world-${w.id}`;
    d.style.backgroundImage = `url(/img/world-${w.id}.webp)`;
    bgsEl.appendChild(d);
    return d;
  });

  gsap.to(bgsEl, {
    yPercent: 12, ease: 'none',
    scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
  });

  createTabs({
    tabsEl: document.querySelector('[data-worlds-tabs]'),
    prevEl: document.querySelector('[data-worlds-prev]'),
    nextEl: document.querySelector('[data-worlds-next]'),
    labels: WORLDS.map((w) => w.name.replace(/^The /, '')),
    onChange(i, prev) {
      const w = WORLDS[i];
      section.style.setProperty('--world', w.color);

      // Previous world stays visible underneath while the new one wipes in.
      bgs.forEach((b, j) => {
        b.classList.toggle('is-active', j === i);
        b.classList.toggle('is-prev', j === prev);
      });
      gsap.fromTo(bgs[i],
        { clipPath: 'circle(0% at 50% 60%)', scale: 1.15 },
        { clipPath: 'circle(150% at 50% 60%)', scale: 1, duration: prev < 0 ? 0 : 1.1, ease: 'power3.inOut' });

      info.innerHTML = `
        <h3 class="worlds__name">${w.name}</h3>
        <p class="worlds__body">${w.body}</p>
        <ul class="worlds__levels">${w.levels.map((l) => `<li>${l}</li>`).join('')}<li class="is-boss">${w.boss}</li></ul>`;
      gsap.from(info.children, { y: 24, opacity: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', delay: prev < 0 ? 0 : 0.3 });
    },
  });
}
