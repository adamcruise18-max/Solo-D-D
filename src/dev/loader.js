// Loads docs/devtools.js (stats-gl + lil-gui) only when asked: ?dev=1 in the address, or the
// first F3 (or `) press. The normal player load never fetches it. Later presses toggle it.
let state = 'off'; // off | loading | on

function load() {
  if (state !== 'off') return;
  state = 'loading';
  const s = document.createElement('script');
  s.src = 'devtools.js';
  s.onload = () => { state = 'on'; };
  s.onerror = () => { state = 'off'; console.warn('dev tools: devtools.js did not load'); };
  document.head.appendChild(s);
}

export function initDevLoader() {
  if (typeof window === 'undefined') return;
  if (new URLSearchParams(location.search).get('dev') === '1') load();
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'F3' && e.code !== 'Backquote') return;
    if (state === 'off') load();
    else if (state === 'on' && window.LLDev) window.LLDev.toggle();
  }, true);
}
