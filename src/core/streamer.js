// Cell streamer: loads the cells the player needs, in priority order, without
// blocking, and unloads cells when a budget is passed.
// load(key) is async and returns the cell's representation (for example the
// places and houses in the cell, or 3D street meshes later). unload(key, data)
// frees it. State (what exists) is never in here: only representation.
//
// Priority of a cell = its tier (active first), then distance, then last use.
import { TIER_INFO, TIER_ORDER, tierOf } from './cells.js';

export function createStreamer({ load, unload = () => {}, maxLoaded = 40, maxInFlight = 4, now = () => Date.now(), cost = () => 1, budget = Infinity } = {}) {
  if (typeof load !== 'function') throw new Error('The streamer needs a load(key) function');
  const cells = new Map(); // key -> { status: 'loading'|'loaded', data, lastUsed, cost, token }
  let inFlight = 0;
  let token = 0;
  const stats = { requests: 0, loaded: 0, unloaded: 0, failed: 0, cancelled: 0, hits: 0, latencyMs: [] };
  let lastTiers = new Map();
  const listeners = new Set();

  const usedCost = () => [...cells.values()].filter((c) => c.status === 'loaded').reduce((a, c) => a + c.cost, 0);
  const rank = (key) => TIER_ORDER.indexOf(tierOf(lastTiers, key));

  function start(key) {
    const t0 = now();
    const my = ++token;
    const c = { status: 'loading', data: null, lastUsed: t0, cost: 0, token: my };
    cells.set(key, c);
    inFlight++;
    stats.requests++;
    Promise.resolve()
      .then(() => load(key))
      .then((data) => {
        inFlight--;
        const cur = cells.get(key);
        if (!cur || cur.token !== my) { stats.cancelled++; unload(key, data); pump(); return; }
        cur.status = 'loaded';
        cur.data = data;
        cur.cost = cost(key, data);
        stats.loaded++;
        stats.latencyMs.push(now() - t0);
        if (stats.latencyMs.length > 100) stats.latencyMs.shift();
        for (const fn of listeners) fn({ type: 'loaded', key, data });
        trim();
        pump();
      })
      .catch((err) => {
        inFlight--;
        const cur = cells.get(key);
        // Keep a 'failed' mark so pump() does not retry at once in a loop.
        // The next update() (the player moves or the view asks again) clears it.
        if (cur && cur.token === my) { cur.status = 'failed'; cur.data = null; }
        stats.failed++;
        for (const fn of listeners) fn({ type: 'failed', key, error: err });
        pump();
      });
  }

  function wanted() {
    return [...lastTiers.entries()]
      .filter(([, t]) => TIER_INFO[t].loaded)
      .sort((a, b) => TIER_ORDER.indexOf(a[1]) - TIER_ORDER.indexOf(b[1]));
  }

  // Full: no room for more cells (failed marks do not count). A new cell then loads only when it is more
  // important than the least important loaded cell (which trim() then drops).
  // Without this rule, a full budget would load and drop the same cells forever.
  function full() {
    let n = 0;
    for (const c of cells.values()) if (c.status !== 'failed') n++;
    return n >= maxLoaded || usedCost() >= budget;
  }
  function worstRank() {
    let w = -1;
    for (const [k, c] of cells) if (c.status === 'loaded') w = Math.max(w, rank(k));
    return w;
  }

  function pump() {
    for (const [key] of wanted()) {
      if (inFlight >= maxInFlight) break;
      if (cells.has(key)) continue;
      if (full() && rank(key) >= worstRank()) continue;
      start(key);
    }
  }

  function drop(key) {
    const c = cells.get(key);
    if (!c) return;
    cells.delete(key);
    if (c.status === 'loaded') { unload(key, c.data); stats.unloaded++; }
    for (const fn of listeners) fn({ type: 'unloaded', key });
  }

  // Keep at most maxLoaded cells and the cost budget: drop the lowest priority first.
  function trim() {
    const loaded = [...cells.entries()].filter(([, c]) => c.status === 'loaded');
    const over = () => loaded.length > maxLoaded || usedCost() > budget;
    if (!over()) return;
    loaded.sort((a, b) => rank(b[0]) - rank(a[0]) || a[1].lastUsed - b[1].lastUsed);
    while (loaded.length && over()) {
      const [key] = loaded.shift();
      if (tierOf(lastTiers, key) === 'active') break; // never drop the player's cell
      drop(key);
    }
  }

  // Call when the player moves (or each frame in a 3D view). tiers = classify(...).
  function update(tiers) {
    lastTiers = tiers;
    const t = now();
    for (const [key, c] of [...cells.entries()]) {
      if (c.status === 'failed') { cells.delete(key); continue; }
      const tier = tierOf(tiers, key);
      if (!TIER_INFO[tier].loaded && !TIER_INFO[tier].keep) {
        if (c.status === 'loading') { cells.delete(key); stats.cancelled++; } else drop(key);
      } else c.lastUsed = t;
    }
    trim();
    pump();
  }

  function get(key) {
    const c = cells.get(key);
    if (c?.status === 'loaded') { stats.hits++; c.lastUsed = now(); return c.data; }
    return null;
  }

  function report() {
    const lat = stats.latencyMs;
    return {
      loaded: [...cells.values()].filter((c) => c.status === 'loaded').length,
      loading: inFlight,
      cost: usedCost(),
      requests: stats.requests, unloaded: stats.unloaded, failed: stats.failed, cancelled: stats.cancelled, hits: stats.hits,
      avgLatencyMs: lat.length ? lat.reduce((a, b) => a + b, 0) / lat.length : null,
    };
  }

  // Resolves when nothing is loading (tests, loading screens).
  async function idle() {
    for (let i = 0; i < 10000 && inFlight > 0; i++) await new Promise((r) => setTimeout(r, 0));
  }

  return {
    update, get, report, idle,
    status: (key) => { const st = cells.get(key)?.status; return st && st !== 'failed' ? st : 'unloaded'; },
    loadedKeys: () => [...cells.entries()].filter(([, c]) => c.status === 'loaded').map(([k]) => k),
    on: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
  };
}
