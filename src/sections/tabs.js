// Shared tab controller: renders tab buttons + optional dots, wires arrows,
// and calls `onChange(index, prevIndex)` when the active item changes.
export function createTabs({ tabsEl, dotsEl, prevEl, nextEl, labels, onChange }) {
  let current = -1;

  const tabs = labels.map((label, i) => {
    const b = document.createElement('button');
    b.className = 'tab';
    b.role = 'tab';
    b.textContent = label;
    b.addEventListener('click', () => go(i));
    tabsEl.appendChild(b);
    return b;
  });

  const dots = dotsEl
    ? labels.map((label, i) => {
        const d = document.createElement('button');
        d.className = 'dot';
        d.ariaLabel = label;
        d.addEventListener('click', () => go(i));
        dotsEl.appendChild(d);
        return d;
      })
    : [];

  function go(i) {
    const next = (i + labels.length) % labels.length;
    if (next === current) return;
    const prev = current;
    current = next;
    tabs.forEach((t, j) => t.setAttribute('aria-selected', j === next));
    dots.forEach((d, j) => d.classList.toggle('is-active', j === next));
    onChange(next, prev);
  }

  prevEl?.addEventListener('click', () => go(current - 1));
  nextEl?.addEventListener('click', () => go(current + 1));
  go(0);
  return { go, get index() { return current; } };
}
