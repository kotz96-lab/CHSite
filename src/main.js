import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/hero.css';
import './styles/gameplay.css';
import './styles/run.css';
import './styles/worlds.css';
import './styles/bosses.css';
import './styles/arsenal.css';
import { PLAY_URL } from './content.js';
import { initHero } from './sections/hero.js';
import { initHow } from './sections/how.js';
import { initRun } from './sections/run.js';
import { initWorlds } from './sections/worlds.js';
import { initBosses } from './sections/bosses.js';
import { initArsenal } from './sections/arsenal.js';
import { initReveals } from './sections/reveals.js';
import { initSlots } from './slots.js';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const lenis = new Lenis({ lerp: 0.09, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

document.querySelectorAll('[data-play-link]').forEach((a) => (a.href = PLAY_URL));

const nav = document.querySelector('[data-nav]');
ScrollTrigger.create({
  start: 80,
  end: 'max',
  onToggle: (self) => nav.classList.toggle('is-solid', self.isActive),
});

initHero(reduceMotion);
initHow();
initRun(reduceMotion);
initWorlds();
initBosses();
initArsenal();
initReveals(reduceMotion);
initSlots();
