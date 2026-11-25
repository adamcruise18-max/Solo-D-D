// Cell streamer: loads the cells the player needs, in priority order, without
// blocking, and unloads cells when a budget is passed.
// load(key) is async and returns the cell's representation (for example the
// places and houses in the cell, or 3D street meshes later). unload(key, data)
// frees it. State (what exists) is never in here: only representation.
//
// Priority of a cell = its tier (active first), then last use.
//
// Each key has at most one entry and at most one load in flight:
//   loading   -> loaded            (load done)
//   loading   -> cancelled         (not needed now; the load still runs)
//   cancelled -> loading           (needed again: the same load is kept, not started again)
//   cancelled -> (gone)            (load done: its data is freed with unload)
//   loading   -> failed            (load error: retried after a wait that doubles)
//   loaded    -> (gone)            (unloaded: out of range or over budget)
//   loading   -> failed            (no answer in loadTimeoutMs: the load is abandoned;
//                                  its late result is freed with unload and ignored)
//
// maxInFlight counts live loads only: an abandoned load may still run in the
// background until it answers.
//
// Each load has a generation token. A result whose token is not the key's current
// token is late and obsolete: it is freed and never shown. unload(key, data) must
// free that data only (another load of the same key can be live).
import { TIER_INFO, TIER_ORDER, tierOf } from './cells.js';

export function createStreamer({
  load, unload = () => {}, maxLoaded = 40, maxInFlight = 4, now = () => Date.now(),
  cost = () => 1, budget = Infinity, retryMs = 1000, maxRetryMs = 30000,
  loadTimeoutMs = 30000,
} = {}) {
  if (typeof load !== 'function') throw new Error('The streamer needs a load(key) function');
  const cells = new Map(); // key -> { status, data, lastUsed, cost, token, tries, retryAt }
  const lastCost = new Map(); // key -> cost of its last load (to skip cells that do not fit)
  let dropped = new Set(); // keys dropped for the budget: not loaded again until the next update()
  let inFlight = 0;
  let token = 0;
  const abandoned = new Set(); // tokens of loads that timed out (already out of inFlight)
  const stats = { requests: 0, loaded: 0, unloaded: 0, failed: 0, cancelled: 0, timedOut: 0, late: 0, hits: 0, listenerErrors: 0, latencyMs: [] };
  let lastTiers = new Map();
  const listeners = new Set();

  const isLoaded = (c) => c.status === 'loaded';
  const usedCost = () => { let s = 0; for (const c of cells.values()) if (isLoaded(c)) s += c.cost; return s; };
  const rank = (key) => TIER_ORDER.indexOf(tierOf(lastTiers, key));

  function tell(ev) {
    for (const fn of [...listeners]) {
      try { fn(ev); } catch (err) {
        stats.listenerErrors++;
        if (typeof console !== 'undefined') console.error('Streamer listener failed', err);
      }
    }
  }

  // Run pump() again after ms of real time (load timeouts, retry waits).
  function wake(ms) {
    const timer = setTimeout(() => pump(), ms);
    timer?.unref?.(); // do not keep Node tests running
  }

  function start(key) {
    const t0 = now();
    const my = ++token;
    const prev = cells.get(key);
    cells.set(key, { status: 'loading', data: null, lastUsed: t0, cost: 0, token: my, tries: prev?.tries || 0, t0 });
    inFlight++;
    stats.requests++;
    // Wake up when this load is due to time out, even if nothing else happens
    // (the player may stand still). unref: do not keep Node tests running.
    if (Number.isFinite(loadTimeoutMs)) wake(loadTimeoutMs + 1);
    Promise.resolve().then(() => load(key)).then(
      (data) => done(key, my, data),
      (err) => fail(key, my, err),
    );
  }

  // A late result of an abandoned load: free it, change nothing else.
  function late(my, key, data, ok) {
    if (!abandoned.delete(my)) return false;
    stats.late++;
    if (ok) unload(key, data);
    pump();
    return true;
  }

  function done(key, my, data) {
    if (late(my, key, data, true)) return;
    inFlight--;
    const cur = cells.get(key);
    if (!cur || cur.token !== my) { unload(key, data); return pump(); } // should not happen: free it anyway
    if (cur.status === 'cancelled') {
      cells.delete(key);
      stats.cancelled++;
      unload(key, data); // nothing else of this key is loaded, so this is safe
      return pump();
    }
    cur.status = 'loaded';
    cur.data = data;
    cur.tries = 0;
    cur.cost = cost(key, data);
    lastCost.set(key, cur.cost);
    stats.loaded++;
    stats.latencyMs.push(now() - cur.t0);
    if (stats.latencyMs.length > 100) stats.latencyMs.shift();
    tell({ type: 'loaded', key, data });
    trim();
    pump();
  }

  function fail(key, my, err) {
    if (late(my, key, null, false)) return;
    inFlight--;
    const cur = cells.get(key);
    stats.failed++;
    if (cur && cur.token === my) {
      if (cur.status === 'cancelled') cells.delete(key);
      else {
        cur.status = 'failed';
        cur.tries += 1;
        const wait = Math.min(maxRetryMs, retryMs * 2 ** (cur.tries - 1));
        cur.retryAt = now() + wait;
        wake(wait + 1);
      }
    }
    tell({ type: 'failed', key, error: err });
    pump();
  }

  function wanted() {
    return [...lastTiers.entries()]
      .filter(([, t]) => TIER_INFO[t].loaded)
      .sort((a, b) => TIER_ORDER.indexOf(a[1]) - TIER_ORDER.indexOf(b[1]));
  }

  // Room for this cell? When full, a cell loads only if it is more important than the
  // least important loaded cell (which trim() then drops). Its cost from an earlier
  // load is counted, so a cell that cannot fit is not loaded and dropped in a loop.
  function fits(key) {
    let n = 0;
    let worst = -1;
    for (const [k, c] of cells) {
      if (c.status === 'loading' || c.status === 'loaded') n++;
      if (isLoaded(c)) worst = Math.max(worst, rank(k));
    }
    const full = n >= maxLoaded || usedCost() + (lastCost.get(key) || 0) > budget;
    return !full || rank(key) < worst;
  }

  // Loads with no answer in loadTimeoutMs free their slot and count as failed.
  function expire() {
    const t = now();
    for (const [key, c] of [...cells.entries()]) {
      if ((c.status !== 'loading' && c.status !== 'cancelled') || t - c.t0 < loadTimeoutMs) continue;
      abandoned.add(c.token);
      if (abandoned.size > 1000) abandoned.delete(abandoned.values().next().value); // loads that never answer
      inFlight--;
      stats.timedOut++;
      stats.failed++;
      if (c.status === 'cancelled') { cells.delete(key); continue; }
      c.status = 'failed';
      c.token = ++token;
      c.tries += 1;
      const wait = Math.min(maxRetryMs, retryMs * 2 ** (c.tries - 1));
      c.retryAt = t + wait;
      wake(wait + 1);
      tell({ type: 'failed', key, error: new Error(`load timed out after ${loadTimeoutMs} ms`) });
    }
  }

  function pump() {
    expire();
    const t = now();
    for (const [key] of wanted()) {
      if (inFlight >= maxInFlight) break;
      const c = cells.get(key);
      if (c?.status === 'cancelled') { c.status = 'loading'; continue; } // still in flight: keep it
      if (c?.status === 'failed' && t >= c.retryAt && fits(key)) { start(key); continue; }
      if (c || dropped.has(key)) continue;
      if (fits(key)) start(key);
    }
  }

  function drop(key, why) {
    const c = cells.get(key);
    if (!c) return;
    // A load in flight is never forgotten: done() frees its data when it ends.
    if (c.status === 'loading' || c.status === 'cancelled') { c.status = 'cancelled'; return; }
    cells.delete(key);
    if (isLoaded(c)) {
      if (why === 'budget') dropped.add(key);
      unload(key, c.data);
      stats.unloaded++;
      tell({ type: 'unloaded', key });
    }
  }

  // Keep at most maxLoaded cells and the cost budget: drop the lowest priority first.
  function trim() {
    const loaded = [...cells.entries()].filter(([, c]) => isLoaded(c));
    let n = loaded.length;
    let used = usedCost();
    if (n <= maxLoaded && used <= budget) return;
    loaded.sort((a, b) => rank(b[0]) - rank(a[0]) || a[1].lastUsed - b[1].lastUsed);
    for (const [key, c] of loaded) {
      if (n <= maxLoaded && used <= budget) break;
      if (tierOf(lastTiers, key) === 'active') continue; // never drop the player's cell
      drop(key, 'budget');
      n--;
      used -= c.cost;
    }
  }

  // Call when the player moves (or each frame in a 3D view). tiers = classify(...).
  function update(tiers) {
    lastTiers = tiers;
    dropped = new Set();
    const t = now();
    for (const [key, c] of [...cells.entries()]) {
      const info = TIER_INFO[tierOf(tiers, key)];
      if (!info.loaded && !info.keep) {
        if (c.status === 'failed') cells.delete(key);
        else drop(key, 'range');
      } else {
        c.lastUsed = t;
        if (c.status === 'cancelled') c.status = 'loading'; // wanted again: keep its load
      }
    }
    trim();
    pump();
  }

  function get(key) {
    const c = cells.get(key);
    if (c && isLoaded(c)) { stats.hits++; c.lastUsed = now(); return c.data; }
    return null;
  }

  function report() {
    const lat = stats.latencyMs;
    let loaded = 0;
    for (const c of cells.values()) if (isLoaded(c)) loaded++;
    return {
      loaded, loading: inFlight, cost: usedCost(),
      requests: stats.requests, unloaded: stats.unloaded, failed: stats.failed, cancelled: stats.cancelled,
      timedOut: stats.timedOut, late: stats.late,
      hits: stats.hits, listenerErrors: stats.listenerErrors,
      avgLatencyMs: lat.length ? lat.reduce((a, b) => a + b, 0) / lat.length : null,
    };
  }

  // Resolves true when nothing is loading, or false after timeoutMs of real time
  // (tests, loading screens). Real time, not loop turns: a slow disk is not a hang.
  async function idle({ timeoutMs = 10000, clock = () => Date.now() } = {}) {
    const end = clock() + timeoutMs;
    while (inFlight > 0) {
      pump(); // expire loads past loadTimeoutMs, start due retries
      if (inFlight === 0) break;
      if (clock() >= end) return false;
      await new Promise((r) => setTimeout(r, 1));
    }
    return true;
  }

  return {
    update, get, report, idle,
    status: (key) => { const st = cells.get(key)?.status; return st === 'loaded' || st === 'loading' ? st : 'unloaded'; },
    loadedKeys: () => [...cells.entries()].filter(([, c]) => isLoaded(c)).map(([k]) => k),
    on: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
  };
}
