import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';
import { seasonOf, overgrowth } from '../src/engine/season.js';
import { seasonPaint, parseColor } from '../src/ui/winter-style.js';
import { detailFeatures } from '../src/ui/details.js';

const day = (d) => d * 1440 + 600;
const lum = (s) => { const c = parseColor(s); return (0.3 * c.r + 0.59 * c.g + 0.11 * c.b) / 255; };

test('seasons follow the calendar from the late-November start', () => {
  assert.equal(seasonOf(day(0)), 'winter'); // 24 Nov: the game starts in winter
  assert.equal(seasonOf(day(10)), 'winter'); // 4 Dec
  assert.equal(seasonOf(day(110)), 'spring'); // mid March
  assert.equal(seasonOf(day(220)), 'summer'); // early July
  assert.equal(seasonOf(day(300)), 'fall'); // late September
  assert.equal(seasonOf(day(345)), 'winter'); // early November
});

test('the city gets more overgrown each month, up to a limit', () => {
  let last = -1;
  for (let m = 0; m < 30; m++) {
    const g = overgrowth(day(m * 30));
    assert.ok(g >= last);
    last = g;
  }
  assert.equal(overgrowth(day(2000)), 1);
});

test('every season and growth level keeps the map light and in color', () => {
  for (const s of ['winter', 'spring', 'summer', 'fall']) {
    for (const g of [0, 0.5, 1]) {
      const paint = Object.fromEntries(seasonPaint(s, g).map(([id, , c]) => [id, c]));
      assert.ok(lum(paint.background) > 0.82, `${s} ${g} background`);
      const park = parseColor(paint.park);
      assert.ok(park.g >= park.r && park.g >= park.b - 5, `${s} ${g} parks stay green-ish`);
    }
  }
  const p0 = parseColor(seasonPaint('summer', 0).find(([id]) => id === 'park')[2]);
  const p1 = parseColor(seasonPaint('summer', 1).find(([id]) => id === 'park')[2]);
  assert.ok(p1.g - p1.r > p0.g - p0.r, 'wild summer is greener than first summer');
});

test('street details are fixed in place and include the expected kinds', () => {
  const places = [
    { id: 'h1', cat: 'hospital', lat: 45.5, lon: -122.8 },
    { id: 's1', cat: 'supermarket', lat: 45.49, lon: -122.85 },
  ];
  const a = detailFeatures(places, { lat: 45.49, lon: -122.87 });
  const b = detailFeatures(places, { lat: 45.49, lon: -122.87 });
  assert.deepEqual(a, b);
  const types = new Set(a.features.map((f) => f.properties.type));
  for (const t of ['car', 'barricade', 'sign', 'tent', 'trash', 'bush']) assert.ok(types.has(t), t);
  const greens = a.features.filter((f) => f.properties.type === 'bush' || f.properties.type === 'tree');
  assert.ok(greens.some((f) => f.properties.g > 0.5), 'some overgrowth only shows later');
});

test('the journal notes a new season and monthly changes', () => {
  const s = newGame(3);
  for (let i = 0; i < 100; i++) {
    Object.assign(s.player, { food: 90, water: 90, warmth: 90, energy: 90, health: 100 });
    s.home.indoorTemp = 65;
    advanceTime(s, 1440, 'rest');
  }
  const story = s.log.filter((e) => e.kind === 'story').map((e) => e.text).join(' ');
  assert.match(story, /^(?!.*Winter\.).*$/s, 'no new-season line while it is still winter');
  assert.match(story, /Spring\./);
  assert.match(story, /Moss grows/);
});
