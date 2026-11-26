// Grid inventory (Adam, 2026-11-25): items are tiles on a grid of cells, sized by the item,
// that you drag to place, and drag between "found here" and your pack. Our own look.
// Layout is pure (tested); the drag code works with mouse and touch (pointer events).

import { fitsAt } from '../engine/packgrid.js';
export { tilesFor, layoutGrid, fitsAt } from '../engine/packgrid.js';

// ---------- saved positions (this browser only; a convenience, safe to lose) ----------
const LS = 'lastlight.grid.v1';
let memo = null;
export function savedPos(which) {
  if (!memo) {
    memo = {};
    try { memo = JSON.parse(localStorage.getItem(LS) || '{}') || {}; } catch { memo = {}; }
  }
  return (memo[which] ||= {});
}
export function setPos(which, key, x, y, rot) {
  savedPos(which)[key] = [x, y, rot ? 1 : 0];
  try { localStorage.setItem(LS, JSON.stringify(memo)); } catch { /* private mode: keep in memory */ }
}

// ---------- HTML ----------
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const KIND_ICON = { food: '🥫', dogfood: '🦴', drink: '💧', med: '✚', tool: '🔧', batteries: '🔋', wear: '🧥', fuel: '⛽', part: '⚙', junk: '⚙', book: '📕', misc: '◆', comfort: '♥', warm: '♨' };

// which: 'pack' | 'here'. opts: { layout, name(id), kind(id), qtyText(q,id), icon(id) -> url|null,
// selected: key, label }
export function gridHtml(which, opts) {
  const L = opts.layout;
  const tiles = L.tiles.map((t) => {
    const url = opts.icon?.(t.id);
    // a tall, thin tile shows its (wide) picture turned on its side
    const img = url ? `<img src="${url}" alt="" draggable="false"${t.h >= t.w * 3 ? ' class="tall"' : t.w >= t.h * 3 ? ' class="wide"' : ''}>` : `<span class="ig">${KIND_ICON[opts.kind(t.id)] || '◆'}</span>`;
    const over = t.y + t.h > L.rows ? ' over' : '';
    const sel = opts.selected === `${which}:${t.key}` ? ' sel' : '';
    const qty = opts.qtyText(t.q, t.id);
    return `<div class="itile k-${esc(opts.kind(t.id))}${over}${sel}" data-gw="${which}" data-gk="${esc(t.key)}" data-gid="${esc(t.id)}" data-gq="${t.q}"
      style="--x:${t.x};--y:${t.y};--w:${t.w};--h:${t.h}" title="${esc(opts.name(t.id))} · ${esc(qty)}">${img}
      <span class="in">${esc(opts.name(t.id))}</span>${qty ? `<b class="iq">${esc(qty)}</b>` : ''}</div>`;
  }).join('');
  return `<div class="igrid igrid-${which}" data-grid="${which}" style="--cols:${L.cols};--rows:${L.height};--real:${L.rows}">
    ${L.height > L.rows ? `<div class="ig-over" style="--top:${L.rows}"><span>Over the edge: no room</span></div>` : ''}${tiles}</div>`;
}

// ---------- drag and drop ----------
// handlers: { move(which, key, x, y, rot), transfer(from, to, id, qty), select(which, key), layout(which) }
let H = null;
let bound = false;
export function setGridHandlers(h) {
  H = h;
  if (bound || typeof document === 'undefined') return;
  bound = true;
  let drag = null;
  document.addEventListener('pointerdown', (e) => {
    const t = e.target.closest?.('.itile');
    if (!t || e.button > 0) return;
    const r = t.getBoundingClientRect();
    drag = { el: t, which: t.dataset.gw, key: t.dataset.gk, id: t.dataset.gid, q: Number(t.dataset.gq), sx: e.clientX, sy: e.clientY, ox: e.clientX - r.left, oy: e.clientY - r.top, ghost: null, rot: false, w: Number(t.style.getPropertyValue('--w')), h: Number(t.style.getPropertyValue('--h')) };
    e.preventDefault();
  });
  document.addEventListener('pointermove', (e) => {
    if (!drag) return;
    if (!drag.ghost) {
      if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return;
      drag.ghost = drag.el.cloneNode(true);
      drag.ghost.classList.add('ghost');
      const r = drag.el.getBoundingClientRect();
      drag.ghost.style.width = `${r.width}px`; drag.ghost.style.height = `${r.height}px`;
      document.body.appendChild(drag.ghost);
      drag.el.classList.add('lifted');
    }
    drag.ghost.style.left = `${e.clientX - drag.ox}px`;
    drag.ghost.style.top = `${e.clientY - drag.oy}px`;
    showDrop(e);
  });
  const end = (e) => {
    if (!drag) return;
    const d = drag;
    drag = null;
    clearDrop();
    if (!d.ghost) return; // a tap: the click event selects (after this event is done)
    justDragged = performance.now();
    d.ghost.remove();
    d.el.classList.remove('lifted');
    const hit = dropTarget(e, d);
    if (!hit) return;
    if (hit.which === d.which) H?.move(d.which, d.key, hit.x, hit.y, hit.rot);
    else H?.transfer(d.which, hit.which, d.id, d.q, hit);
  };
  document.addEventListener('pointerup', end);
  let justDragged = 0;
  document.addEventListener('click', (e) => {
    const t = e.target.closest?.('.itile');
    if (!t || performance.now() - justDragged < 300) return;
    e.stopPropagation();
    setTimeout(() => H?.select(t.dataset.gw, t.dataset.gk), 0);
  }, true);
  document.addEventListener('pointercancel', () => { if (drag?.ghost) drag.ghost.remove(); drag?.el.classList.remove('lifted'); drag = null; clearDrop(); });
  document.addEventListener('keydown', (e) => {
    if (!drag?.ghost || (e.key !== 'r' && e.key !== 'R')) return;
    drag.rot = !drag.rot;
    [drag.w, drag.h] = [drag.h, drag.w];
    const gw = drag.ghost.offsetWidth; const gh = drag.ghost.offsetHeight;
    drag.ghost.style.width = `${gh}px`; drag.ghost.style.height = `${gw}px`;
    e.preventDefault(); e.stopPropagation();
  }, true);

  function dropTarget(e, d) {
    const g = d.ghost;
    g.style.display = 'none';
    const under = document.elementFromPoint(e.clientX, e.clientY);
    g.style.display = '';
    const grid = under?.closest?.('.igrid');
    if (!grid) return null;
    const which = grid.dataset.grid;
    const r = grid.getBoundingClientRect();
    const cols = Number(grid.style.getPropertyValue('--cols'));
    const cell = r.width / cols;
    const x = Math.round((e.clientX - d.ox - r.left) / cell);
    const y = Math.round((e.clientY - d.oy - r.top) / cell);
    const L = H?.layout?.(which);
    const ok = L ? fitsAt(L, which === d.which ? d.key : null, x, y, d.w, d.h) : true;
    return { which, x, y, rot: d.rot !== !!(L?.tiles.find((t) => t.key === d.key)?.rot), ok, grid, cell };
  }
  let mark = null;
  function showDrop(e) {
    const hit = dropTarget(e, drag);
    clearDrop();
    if (!hit) return;
    mark = document.createElement('div');
    mark.className = `idrop${hit.ok || hit.which !== drag.which ? '' : ' bad'}`;
    if (hit.which === drag.which) mark.style.cssText = `--x:${hit.x};--y:${hit.y};--w:${drag.w};--h:${drag.h}`;
    else mark.classList.add('all');
    hit.grid.appendChild(mark);
  }
  function clearDrop() { mark?.remove(); mark = null; }
}
