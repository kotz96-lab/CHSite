// Dev aid: open the site with ?slots to label every art placeholder with its
// ART_PROMPTS.md id. Uses a MutationObserver because tabs re-render panels.
export function initSlots() {
  if (!new URLSearchParams(location.search).has('slots')) return;
  document.documentElement.classList.add('show-slots');

  const tag = (el) => {
    if (el.querySelector(':scope > .slot-tag')) return;
    const t = document.createElement('span');
    t.className = 'slot-tag';
    t.textContent = el.dataset.slot;
    el.appendChild(t);
  };
  const scan = () => document.querySelectorAll('[data-slot]').forEach(tag);
  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
}
