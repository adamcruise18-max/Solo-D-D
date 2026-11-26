// 3D street cells: data files (docs/data/streets/) and the cell geometry.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import { buildCell, roofFn, collide } from '../src/render/streets/geometry.js';
import { FORMAT_VERSION, ROOF } from '../src/data/streets.js';
import { cellKeyAt, WORLD_GRID } from '../src/engine/worldgrid.js';
import { HOME } from '../src/engine/state.js';

const DIR = path.resolve('docs/data/streets');
const index = JSON.parse(fs.readFileSync(path.join(DIR, 'index.json'), 'utf8'));
const readCell = (key) => JSON.parse(fs.readFileSync(path.join(DIR, `${key.replace(',', '_')}.json`), 'utf8'));

test('streets: the index lists the pilot cells, with credit, on the world grid', () => {
  assert.equal(index.v, FORMAT_VERSION);
  assert.equal(index.cellMeters, WORLD_GRID.cellMeters);
  assert.ok(index.cells.length >= 36, `cells: ${index.cells.length}`);
  assert.ok(index.cells.includes(cellKeyAt(HOME)), 'the home cell has 3D streets');
  assert.match(index.credit, /OpenStreetMap contributors/);
  for (const key of index.cells) assert.ok(fs.existsSync(path.join(DIR, `${key.replace(',', '_')}.json`)), key);
});

test('streets: each cell file is inside the budget (150 KB gzipped) and valid', () => {
  for (const key of index.cells) {
    const text = fs.readFileSync(path.join(DIR, `${key.replace(',', '_')}.json`));
    assert.ok(zlib.gzipSync(text).length < 150 * 1024, `${key} too big`);
    const d = JSON.parse(text);
    assert.equal(d.k, key);
    for (const b of d.b) {
      assert.ok(b[6].length >= 6 && b[6].length % 2 === 0, `${key}: footprint`);
      assert.ok(b[2] >= 24, `${key}: height at least 2.4 m`);
      assert.ok(b[3] >= 0 && b[3] < b[2], `${key}: roof rise below the height`);
    }
  }
});

test('streets: the home cell builds walls, roofs, ground faces up, colliders and doors', () => {
  const m = buildCell(readCell(cellKeyAt(HOME)));
  assert.ok(m.ground && m.roofs && m.wallsHouse && m.props);
  assert.ok(m.colliders.length > 50);
  assert.ok(m.doors.length > 5);
  const p = m.ground.attributes.position.array;
  let down = 0;
  for (let i = 0; i < p.length; i += 9) {
    const ux = p[i + 3] - p[i], uz = p[i + 5] - p[i + 2], vx = p[i + 6] - p[i], vz = p[i + 8] - p[i + 2];
    if (uz * vx - ux * vz < -1e-2) down++; // (tiny slivers do not count)
  }
  assert.equal(down, 0, 'no ground triangle faces down');
  // low detail: no props
  assert.equal(buildCell(readCell(cellKeyAt(HOME)), { lod: 1 }).props, null);
});

test('streets: roofs: gable is highest on the ridge, eave at the edges; hipped ends slope', () => {
  const box = { cx: 0, cz: 0, hu: 6, hv: 4, ang: 0 };
  const g = roofFn({ h: 6, rise: 2, roof: ROOF.gabled, box });
  assert.equal(g.y(0, 0), 6); // ridge
  assert.equal(g.y(0, 4), 4); // long side: eave
  assert.equal(g.y(6, 0), 6); // gable end: the ridge reaches the wall
  const h = roofFn({ h: 6, rise: 2, roof: ROOF.hipped, box });
  assert.equal(h.y(6, 0), 4); // hipped end: eave
  assert.equal(h.y(0, 0), 6);
  assert.equal(roofFn({ h: 5, rise: 0, roof: ROOF.flat, box }).y(1, 1), 5);
});

test('streets: collide pushes the player out of a wall', () => {
  const [x, z] = collide(0.1, 0, 0.35, [[0, -5, 0, 5]]);
  assert.ok(Math.abs(x - 0.35) < 1e-9 && z === 0);
});

test('streets: real stores in the pilot area get a door with their game place id', () => {
  let found = 0;
  for (const key of index.cells) {
    const d = readCell(key);
    if (!d.b.some((b) => b[8])) continue;
    found += buildCell(d, { lod: 1 }).doors.filter((x) => x.placeId).length;
  }
  assert.ok(found >= 3, `store doors: ${found}`);
});

test('streets: abandoned cars are the same each time, inside the cell and searchable', () => {
  const data = readCell(cellKeyAt(HOME));
  const a = buildCell(data).doors.filter((d) => d.kind === 'car');
  const b = buildCell(data).doors.filter((d) => d.kind === 'car');
  assert.ok(a.length >= 5, `cars: ${a.length}`);
  assert.deepEqual(a.map((d) => [d.id, d.x, d.z]), b.map((d) => [d.id, d.x, d.z]));
  assert.equal(new Set(a.map((d) => d.id)).size, a.length, 'car ids are unique');
  for (const d of a) assert.ok(d.x > 0 && d.z > 0 && d.x < 256 && d.z < 256, d.id);
  // no cars at low detail (the far ring)
  assert.equal(buildCell(data, { lod: 1 }).doors.filter((d) => d.kind === 'car').length, 0);
});

test('streets: look: seasons, overgrowth and snow change the colours', async () => {
  const { tones, normLook, snowFromScene } = await import('../src/render/streets/look.js');
  const { Color } = await import('three');
  const grass = new Color(0x7f9a58);
  const g = (look) => tones(look).green(grass).getHex();
  assert.notEqual(g({ season: 'winter' }), g({ season: 'summer' }));
  assert.ok(tones({ season: 'winter', snow: 1 }).green(grass).r > 3 * tones({ season: 'winter' }).green(grass).r, 'deep snow is white');
  const road = new Color(0x5f6062);
  assert.ok(tones({ growth: 1 }).road(road).g > tones({ growth: 0 }).road(road).g, 'roads turn green');
  assert.equal(tones({ season: 'winter' }).bare, true);
  assert.equal(normLook({ season: 'x', growth: 5 }).season, 'winter');
  assert.equal(normLook({ growth: 5 }).growth, 1);
  assert.ok(snowFromScene({ precip: 'snow', precipStrength: 1 }) === 1);
  assert.equal(snowFromScene({ precip: 'rain', airF: 45 }), 0);
  assert.ok(snowFromScene({ precip: 'none', airF: 20 }) > 0, 'frost');
});

test('streets: more grass in the cracks as the city grows over (and the cell stays in budget)', () => {
  const data = readCell(cellKeyAt(HOME));
  const tris = (m) => ['ground', 'wallsHouse', 'wallsShop', 'wallsPlain', 'roofs', 'props'].reduce((n, k) => n + (m[k] ? m[k].attributes.position.count / 3 : 0), 0);
  const young = tris(buildCell(data, { look: { season: 'summer', growth: 0.08 } }));
  const old = tris(buildCell(data, { look: { season: 'summer', growth: 1 } }));
  assert.ok(old > young, `${old} > ${young}`);
  assert.ok(old < 40000, `one cell: ${old} triangles`); // 9 full cells stay far under 500k
});
