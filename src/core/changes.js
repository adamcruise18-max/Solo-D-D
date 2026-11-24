// Change records: the world stays the same as you left it, without keeping it in memory.
// A location (store, house, room, street cell) has a BASE that is made again from the
// seed and the content data at any time. Only what the player CHANGED is saved, as small
// records. When the location is built again: base -> apply changes -> current version.
//
//   recordChange(state, 'place:n123', { o: 'z3:i7', k: 'taken' })
//   const now = applyChanges(base, changesFor(state, 'place:n123'))
//
// Record kinds (k): taken, opened, closed, emptied, moved, damaged, discovered, set.
// A later record for the same object and kind replaces the earlier one.

export const CHANGE_KINDS = ['taken', 'opened', 'closed', 'emptied', 'moved', 'damaged', 'discovered', 'set'];

function log(state) {
  state.world = state.world || {};
  state.world.changes = state.world.changes || {};
  return state.world.changes;
}

export function recordChange(state, locKey, change) {
  if (!locKey) throw new Error('A change needs a location key');
  if (!change || !change.o) throw new Error('A change needs an object id (o)');
  if (!CHANGE_KINDS.includes(change.k)) throw new Error(`Unknown change kind "${change.k}"`);
  const list = (log(state)[locKey] = log(state)[locKey] || []);
  const rec = { o: String(change.o), k: change.k };
  if (change.v !== undefined) rec.v = change.v;
  if (state.time != null) rec.t = Math.round(state.time);
  // opened/closed replace each other; other kinds replace the same kind.
  const same = (r) => r.o === rec.o && (r.k === rec.k || (['opened', 'closed'].includes(r.k) && ['opened', 'closed'].includes(rec.k)));
  const i = list.findIndex(same);
  if (i >= 0) list[i] = rec; else list.push(rec);
  return rec;
}

export const changesFor = (state, locKey) => state.world?.changes?.[locKey] || [];
export const hasChange = (state, locKey, o, k) => changesFor(state, locKey).some((r) => r.o === String(o) && r.k === k);

// base: { objects: { id: { ...fields } } }. Returns a new object; base is not changed.
export function applyChanges(base, changes) {
  const objects = {};
  for (const [id, o] of Object.entries(base.objects || {})) objects[id] = { ...o };
  const out = { ...base, objects, discovered: !!base.discovered };
  for (const r of changes) {
    if (r.k === 'discovered' && (r.o === '*' || r.o === '')) { out.discovered = true; continue; }
    const o = objects[r.o];
    if (!o) continue; // the content changed and the object is gone: ignore the old record
    switch (r.k) {
      case 'taken': o.taken = true; break;
      case 'opened': o.open = true; break;
      case 'closed': o.open = false; break;
      case 'emptied': o.empty = true; o.contents = {}; break;
      case 'moved': o.pos = r.v; break;
      case 'damaged': o.damage = r.v ?? 1; break;
      case 'discovered': o.discovered = true; break;
      case 'set': Object.assign(o, r.v); break;
      default:
    }
  }
  return out;
}

// Size of all change records in bytes (for the memory and save-size report).
export const changesBytes = (state) => JSON.stringify(state.world?.changes || {}).length;
