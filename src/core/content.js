// Content check. Items, place types, loot tables and home projects are plain data.
// This check finds broken links (a loot table or a project that names an item
// that does not exist, a project that needs a project that does not exist ...).
// Tests run it, so a content change that breaks a link fails before it ships.
// It returns a list of problems: an empty list means the content is good.

export function checkContent({ items = {}, categories = {}, projects = [] } = {}) {
  const problems = [];
  const bad = (where, text) => problems.push(`${where}: ${text}`);

  for (const [id, it] of Object.entries(items)) {
    if (!it || typeof it !== 'object') { bad(`item ${id}`, 'is not an object'); continue; }
    if (!it.name) bad(`item ${id}`, 'has no name');
    if (!(typeof it.weight === 'number' && it.weight >= 0)) bad(`item ${id}`, 'weight must be a number from 0');
    if (!it.kind) bad(`item ${id}`, 'has no kind');
    if (it.portion != null && !(it.portion > 0 && it.portion <= 1)) bad(`item ${id}`, 'portion must be more than 0 and at most 1');
  }

  for (const [cid, cat] of Object.entries(categories)) {
    const where = `place type ${cid}`;
    if (!cat || typeof cat !== 'object') { bad(where, 'is not an object'); continue; }
    if (!cat.label) bad(where, 'has no label');
    if (!(cat.stock >= 0 && cat.stock <= 1)) bad(where, 'stock must be 0 to 1');
    if (!(Number.isInteger(cat.zones) && cat.zones > 0)) bad(where, 'zones must be a whole number above 0');
    if (!(cat.zoneMinutes > 0)) bad(where, 'zoneMinutes must be above 0');
    if (!Array.isArray(cat.loot) || !cat.loot.length) { bad(where, 'has no loot table'); continue; }
    const seen = new Set();
    for (const e of cat.loot) {
      if (!e || !e.id) { bad(where, 'loot has an entry with no id'); continue; }
      if (!items[e.id]) bad(where, `loot names unknown item "${e.id}"`);
      if (!(e.w > 0)) bad(where, `loot weight for "${e.id}" must be above 0`);
      if (seen.has(e.id)) bad(where, `loot lists "${e.id}" two times`);
      seen.add(e.id);
    }
  }

  projects = projects.filter((p, i) => {
    if (!p || typeof p.id !== 'string' || !p.id) { bad(`project #${i}`, 'has no id'); return false; }
    return true;
  });
  const projIds = new Set();
  for (const p of projects) {
    if (projIds.has(p.id)) bad(`project ${p.id}`, 'id is used two times');
    projIds.add(p.id);
  }
  for (const p of projects) {
    const where = `project ${p.id}`;
    if (!(p.hours > 0)) bad(where, 'hours must be above 0');
    for (const [id, q] of Object.entries(p.needs || {})) {
      if (!items[id]) bad(where, `needs unknown item "${id}"`);
      if (!(q > 0)) bad(where, `needs a quantity above 0 of "${id}"`);
    }
    for (const id of p.tools || []) if (!items[id]) bad(where, `tool "${id}" is not an item`);
    for (const id of p.requires || []) if (!projIds.has(id)) bad(where, `requires unknown project "${id}"`);
  }
  // A project chain that loops can never be built.
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
  const visiting = new Set();
  const done = new Set();
  const visit = (id, path) => {
    if (done.has(id) || !byId[id]) return;
    if (visiting.has(id)) { bad(`project ${id}`, `requires itself through ${path.join(' -> ')}`); return; }
    visiting.add(id);
    for (const r of byId[id].requires || []) visit(r, [...path, r]);
    visiting.delete(id);
    done.add(id);
  };
  for (const p of projects) visit(p.id, [p.id]);

  return problems;
}
