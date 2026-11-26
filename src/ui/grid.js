// Grid inventory (Adam, 2026-11-25): items are tiles on a grid of cells, sized by the item,
// that you drag to place, and drag between "found here" and your pack. Our own look.
// Layout is pure (tested); the drag code works with mouse and touch (pointer events).
import { sizeOf } from '../data/gridsize.js';

// One tile per stack: 7 cans with 2 per tile make 4 tiles. key = "id#n".
export function tilesFor(bag, order = Object.keys(bag)) {
  const out = [];
  for (const id of order) {
    let q = bag[id] || 0;
    if (q <= 1e-9) continue;
    const s = sizeOf(id);
    let n = 0;
    while (q > 1e-9) {
      const take = Math.min(s.stack, q);
      out.push({ key: `${id}#${n}`, id, q: Math.round(take * 1000) / 1000, w: s.w, h: s.h });
      q -= take;
      n++;
      if (n > 60) break; // safety
    }
  }
  return out;
}

// Put tiles on a grid `cols` wide. `rows` is the real size; tiles that do not fit go below it
// (overflow rows). saved: { key: [x, y, rot] } from earlier drags, kept when still free.
export function layoutGrid(tiles, cols, rows, saved = {}) {
  const occ = [];
  const free = (x, y, w, h) => {
    if (x < 0 || y < 0 || x + w > cols) return false;
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (occ[j]?.[i]) return false;
    return true;
  };
  const mark = (x, y, w, h, key) => {
    for (let j = y; j < y + h; j++) { occ[j] ||= []; for (let i = x; i < x + w; i++) occ[j][i] = key; }
  };
  const placed = [];
  const rest = [];
  for (const t of tiles) {
    const s = saved[t.key];
    if (s) {
      const rot = !!s[2];
      const w = rot ? t.h : t.w; const h = rot ? t.w : t.h;
      if (w <= cols && s[1] + h <= rows && free(s[0], s[1], w, h)) {
        mark(s[0], s[1], w, h, t.key);
        placed.push({ ...t, x: s[0], y: s[1], w, h, rot });
        continue;
      }
    }
    rest.push(t);
  }
  // Bigger tiles first, so they find room; same size keeps the given order.
  const order = rest.map((t, i) => [t, i]).sort((a, b) => b[0].w * b[0].h - a[0].w * a[0].h || a[1] - b[1]).map((e) => e[0]);
  for (const t of order) {
    let spot = null;
    for (let y = 0; !spot && y < rows + 400; y++) {
      for (let x = 0; x < cols && !spot; x++) {
        if (t.w <= cols && free(x, y, t.w, t.h) && (y + t.h <= rows || y >= rows)) spot = { x, y, w: t.w, h: t.h, rot: false };
        else if (t.h <= cols && t.w !== t.h && free(x, y, t.h, t.w) && (y + t.w <= rows || y >= rows)) spot = { x, y, w: t.h, h: t.w, rot: true };
      }
      // a tile wider than the grid: lay it down on its own row
      if (!spot && t.w > cols && t.h > cols && y >= rows) spot = { x: 0, y, w: Math.min(cols, t.w), h: t.h, rot: false };
    }
    if (!spot) continue;
    mark(spot.x, spot.y, spot.w, spot.h, t.key);
    placed.push({ ...t, ...spot });
  }
  const used = placed.reduce((m, p) => Math.max(m, p.y + p.h), 0);
  const overflow = placed.filter((p) => p.y + p.h > rows).length;
  return { tiles: placed, cols, rows, height: Math.max(rows, used), overflow };
}

// Can a tile (w x h) go at x, y in this layout (ignoring the tile itself)?
export function fitsAt(layout, key, x, y, w, h) {
  if (x < 0 || y < 0 || x + w > layout.cols || y + h > layout.rows) return false;
  return !layout.tiles.some((t) => t.key !== key && x < t.x + t.w && t.x < x + w && y < t.y + t.h && t.y < y + h);
}

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
