import { gsap } from 'gsap';
import { ARSENAL } from '../content.js';

export function initArsenal() {
  const list = document.querySelector('[data-arsenal-list]');
  const panel = document.querySelector('[data-arsenal-panel]');

  list.innerHTML = ARSENAL.map((c) => `
    <div class="acc" data-id="${c.id}">
      <button class="acc__head" aria-expanded="false"><span>${c.title}</span><i aria-hidden="true"></i></button>
      <div class="acc__body"><p>${c.sub}</p></div>
    </div>`).join('');

  const items = [...list.children];

  function show(i) {
    const cat = ARSENAL[i];
    items.forEach((el, j) => {
      const on = j === i;
      el.classList.toggle('is-open', on);
      el.querySelector('.acc__head').setAttribute('aria-expanded', on);
    });
    panel.dataset.slot = `arsenal-${cat.id}`;
    panel.innerHTML = `<ul class="gear">${cat.items.map(([icon, name, desc]) => `
      <li class="gear__item${icon ? '' : ' gear__item--text'}">
        ${icon ? `<img src="/img/icon-${icon}.webp" alt="" loading="lazy" />` : `<span class="gear__glyph">${name[0]}</span>`}
        <b>${name}</b><small>${desc}</small>
      </li>`).join('')}</ul>`;
    gsap.from(panel.querySelectorAll('.gear__item'), {
      scale: 0.6, opacity: 0, duration: 0.5, stagger: 0.04, ease: 'back.out(2)',
    });
  }

  items.forEach((el, i) => el.querySelector('.acc__head').addEventListener('click', () => show(i)));
  show(0);
}
