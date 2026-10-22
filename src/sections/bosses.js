import { gsap } from 'gsap';
import { BOSSES } from '../content.js';

export function initBosses() {
  const row = document.querySelector('[data-bosses]');
  row.innerHTML = BOSSES.map((b, i) => `
    <article class="boss${i === 0 ? ' is-open' : ''}" style="--boss:${b.color}" data-slot="boss-${b.id}" tabindex="0">
      <div class="boss__skew">
        <div class="boss__art"><img src="/img/boss-${b.id}.webp" alt="${b.name}" loading="lazy" /></div>
        <div class="boss__text">
          <span class="boss__world">${b.world}</span>
          <h3 class="boss__name">${b.name}</h3>
          <p class="boss__line">${b.line}</p>
        </div>
      </div>
    </article>`).join('');

  const cards = [...row.children];
  const open = (card) => cards.forEach((c) => c.classList.toggle('is-open', c === card));
  cards.forEach((c) => {
    c.addEventListener('mouseenter', () => open(c));
    c.addEventListener('focus', () => open(c));
    c.addEventListener('click', () => open(c));
  });

  gsap.from(cards, {
    yPercent: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
    scrollTrigger: { trigger: row, start: 'top 80%' },
  });
}
