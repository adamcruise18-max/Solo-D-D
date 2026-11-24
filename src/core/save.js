// Saves: a versioned envelope, upgrades (migrations) for old saves, and storage
// backends: IndexedDB (best), localStorage (fallback), memory (tests, private mode).
// One life per run stays the rule: the game keeps one autosave slot per run.
// A backup file can be downloaded and loaded again (exportSave / importSave).

export const SAVE_FORMAT = 'lastlight-save';
export const ENGINE_SAVE_VERSION = 1;

// ---------- envelope ----------
export function wrapSave(state, now = Date.now()) {
  return { format: SAVE_FORMAT, engine: ENGINE_SAVE_VERSION, savedAt: now, state };
}

// Accepts a new envelope or an old bare state (version 1 saves before the engine).
export function unwrapSave(data) {
  if (!data || typeof data !== 'object') throw new Error('Not a Last Light save file');
  if (data.format === SAVE_FORMAT) {
    if (!data.state) throw new Error('The save file has no game in it');
    return data.state;
  }
  if (data.player && data.home && data.version != null) return data; // old bare save
  throw new Error('Not a Last Light save file');
}

// ---------- upgrades ----------
// gameMigrations: { 2: (state) => {...}, 3: ... } upgrades state.version step by step.
// systems: optional systems list; each system upgrades its own fields
// (state.systemVersions[id] -> system.version).
export function migrate(state, { version, gameMigrations = {}, systems = null } = {}) {
  let s = structuredCloneSafe(state);
  if (s.version == null) s.version = 1;
  s.version = Number(s.version);
  if (!Number.isInteger(s.version) || s.version < 1) throw new Error(`Bad save version: ${state.version}`);
  if (version != null) {
    if (s.version > version) throw new Error(`This save is from a newer game (v${s.version}). Update the game first.`);
    while (s.version < version) {
      const to = s.version + 1;
      const fn = gameMigrations[to];
      if (typeof fn !== 'function') throw new Error(`No upgrade from save v${s.version} to v${to}`);
      s = fn(s) || s;
      s.version = to;
    }
  }
  if (systems) {
    if (!s.systemVersions) {
      // A save from before the engine: all its fields are already there (version 1).
      // Do not run init, because init would overwrite the saved values.
      s.systemVersions = Object.fromEntries(systems.list().map((sys) => [sys.id, 1]));
    }
    for (const sys of systems.list()) {
      let v = s.systemVersions[sys.id];
      if (v == null) {
        // System is new since this save: let it add its fields.
        if (sys.init) sys.init(s, {});
        s.systemVersions[sys.id] = sys.version;
        continue;
      }
      if (v > sys.version) throw new Error(`Save has ${sys.id} v${v}, game has v${sys.version}`);
      while (v < sys.version) {
        v += 1;
        s = sys.migrations[v](s) || s;
      }
      s.systemVersions[sys.id] = v;
    }
  }
  return s;
}

function structuredCloneSafe(o) {
  return typeof structuredClone === 'function' ? structuredClone(o) : JSON.parse(JSON.stringify(o));
}

// ---------- backup file ----------
export function exportSave(state, now) {
  return JSON.stringify(wrapSave(state, now));
}

export function importSave(text, opts = {}) {
  let data;
  try { data = JSON.parse(text); } catch { throw new Error('The file is not a save file (not JSON)'); }
  return migrate(unwrapSave(data), opts);
}

// ---------- backends ----------
// Every backend is async: get(key), set(key, value), remove(key), keys().

export function memoryBackend() {
  const m = new Map();
  return {
    name: 'memory',
    async get(k) { return m.has(k) ? structuredCloneSafe(m.get(k)) : null; },
    async set(k, v) { m.set(k, structuredCloneSafe(v)); },
    async remove(k) { m.delete(k); },
    async keys() { return [...m.keys()]; },
  };
}

export function localStorageBackend(ls = globalThis.localStorage, prefix = 'lastlight.slot.') {
  if (!ls) throw new Error('localStorage is not available');
  return {
    name: 'localStorage',
    async get(k) { const raw = ls.getItem(prefix + k); return raw == null ? null : JSON.parse(raw); },
    async set(k, v) { ls.setItem(prefix + k, JSON.stringify(v)); },
    async remove(k) { ls.removeItem(prefix + k); },
    async keys() {
      const out = [];
      for (let i = 0; i < ls.length; i++) {
        const k = ls.key(i);
        if (k && k.startsWith(prefix)) out.push(k.slice(prefix.length));
      }
      return out;
    },
  };
}

export function indexedDbBackend(idb = globalThis.indexedDB, dbName = 'lastlight', storeName = 'saves') {
  if (!idb) throw new Error('IndexedDB is not available');
  let dbp = null;
  const open = () => (dbp ??= new Promise((resolve, reject) => {
    const req = idb.open(dbName, 1);
    req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains(storeName)) req.result.createObjectStore(storeName); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => { dbp = null; reject(req.error || new Error('Cannot open the save database')); };
    req.onblocked = () => { dbp = null; reject(new Error('The save database is busy in another tab. Close the other tab and try again.')); };
  }));
  const tx = async (mode, fn) => {
    const db = await open();
    return new Promise((resolve, reject) => {
      const t = db.transaction(storeName, mode);
      const req = fn(t.objectStore(storeName));
      t.oncomplete = () => resolve(req?.result ?? null);
      t.onerror = () => reject(t.error || req?.error || new Error('Save failed'));
      t.onabort = () => reject(t.error || new Error('Save was stopped'));
    });
  };
  return {
    name: 'indexedDB',
    get: (k) => tx('readonly', (s) => s.get(k)).then((v) => v ?? null),
    set: (k, v) => tx('readwrite', (s) => s.put(v, k)).then(() => undefined),
    remove: (k) => tx('readwrite', (s) => s.delete(k)).then(() => undefined),
    keys: () => tx('readonly', (s) => s.getAllKeys()).then((ks) => (ks || []).map(String)),
  };
}

// Best backend in this browser: IndexedDB, else localStorage, else memory.
export function bestBackend(env = globalThis) {
  try { if (env.indexedDB) return indexedDbBackend(env.indexedDB); } catch { /* fall through */ }
  try { if (env.localStorage) { env.localStorage.getItem('x'); return localStorageBackend(env.localStorage); } } catch { /* private mode */ }
  return memoryBackend();
}

// ---------- integrity ----------
// FNV-1a over the JSON text of the state: finds a cut or changed save.
export function checksum(state) {
  const str = JSON.stringify(state);
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}

export function verify(env) {
  if (!env || env.format !== SAVE_FORMAT) return true; // old bare save: nothing to check
  return env.sum == null || env.sum === checksum(env.state);
}

// Ask the browser not to clear our storage (Safari can clear it after 7 days).
export async function askPersistentStorage(nav = globalThis.navigator) {
  try { return nav?.storage?.persist ? await nav.storage.persist() : false; } catch { return false; }
}

// ---------- slots ----------
// Safe writes: the last good save is copied to "<slot>~prev" before the new save is
// written, and every save has a checksum. If the newest save is cut or broken, load()
// falls back to the last good one. A broken write never destroys the last good save.
export function createSaveStore(backend = bestBackend(), opts = {}) {
  const PREV = '~prev';
  return {
    backend: backend.name,
    lastLoad: null, // { from: 'current' | 'previous', problem? }
    async save(slot, state) {
      const env = wrapSave(state);
      env.sum = checksum(state);
      const cur = await backend.get(slot);
      if (cur != null && verify(cur)) await backend.set(slot + PREV, cur);
      await backend.set(slot, env);
      return true;
    },
    async load(slot) {
      for (const [key, from] of [[slot, 'current'], [slot + PREV, 'previous']]) {
        let data;
        try { data = await backend.get(key); } catch (err) { this.lastLoad = { from, problem: String(err) }; continue; }
        if (data == null) continue;
        if (!verify(data)) { this.lastLoad = { from, problem: 'checksum does not match' }; continue; }
        try {
          const st = migrate(unwrapSave(data), opts);
          this.lastLoad = { from, problem: from === 'previous' ? this.lastLoad?.problem || 'newest save missing' : null };
          return st;
        } catch (err) {
          this.lastLoad = { from, problem: String(err.message || err) };
        }
      }
      return null;
    },
    async list() {
      const out = [];
      for (const k of await backend.keys()) {
        if (k.endsWith(PREV)) continue;
        const d = await backend.get(k);
        if (d?.format === SAVE_FORMAT) out.push({ slot: k, savedAt: d.savedAt, time: d.state?.time, dead: !!d.state?.dead });
        else if (d?.player && d?.home) out.push({ slot: k, savedAt: 0, time: d.time, dead: !!d.dead });
      }
      return out.sort((a, b) => b.savedAt - a.savedAt);
    },
    async remove(slot) { await backend.remove(slot); await backend.remove(slot + PREV); },
  };
}
