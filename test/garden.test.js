// Garden (research step 8): sow in season, grow by warmth and water, frost
// kills tender crops, harvest fresh food, ripe crops rot if left.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { weatherSystem } from '../src/engine/systems.js';
import { gardenDaily, plant, canPlant, waterGarden, harvest, gardenInfo, dayGrowth } from '../src/engine/garden.js';

function withBeds(seed = 51) {
  const s = newGame(seed);
  s.home.projects = { ...(s.home.projects || {}), garden_beds: true };
  s.home.storage.seeds = 6;
  s.home.rawGal = 100;
  return s;
}
// Jump to a day of the game (day 0 = 2026-11-24); runs the weather each day.
function toDay(s, day) {
  const from = Math.floor(s.time / 1440);
  for (let d = from + 1; d <= day; d++) { s.time = d * 1440 + 6 * 60; weatherSystem.daily(s, d); gardenDaily(s, d); }
}

test('garden: needs beds and the season', () => {
  const s = newGame(50);
  s.home.storage.seeds = 1;
  assert.match(canPlant(s, 'kale'), /beds/);
  const g = withBeds();
  assert.match(canPlant(g, 'beans'), /season/); // November: no beans
  assert.equal(canPlant(g, 'garlic'), null); // November: garlic yes
});

test('garden: potatoes sown in April are ready by late summer and feed you', () => {
  const s = withBeds(52);
  toDay(s, 130); // early April 2027
  assert.ok(plant(s, 'potatoes'));
  for (let d = 131; d <= 280; d++) { toDay(s, d); if (d % 3 === 0) waterGarden(s); }
  const info = gardenInfo(s);
  assert.ok(info.planted.some((b) => b.ready), JSON.stringify(info.planted));
  const got = harvest(s);
  assert.equal(got.potatoes, 15);
  assert.ok(s.home.storage.potatoes >= 15);
});

test('garden: frost kills tender beans, not hardy kale', () => {
  const s = withBeds(53);
  toDay(s, 255); // August
  s.home.storage.seeds = 6;
  assert.ok(plant(s, 'kale'));
  s.garden.beds.push({ crop: 'beans', day: 255, growth: 0.5, water: 1, ripeDay: null, dead: false });
  s.weather.low = 28; s.weather.high = 45; s.weather.type = 'clear';
  gardenDaily(s, 256);
  const [kale, beans] = s.garden.beds;
  assert.equal(beans.dead, true);
  assert.equal(kale.dead, false);
});

test('garden: no water, slow growth; a ripe crop rots after 30 days', () => {
  assert.ok(dayGrowth('kale', 65, 0) < dayGrowth('kale', 65, 1) / 2);
  const s = withBeds(54);
  s.garden.beds.push({ crop: 'kale', day: 0, growth: 1, water: 1, ripeDay: 10, dead: false });
  s.weather.low = 40; s.weather.high = 50; s.weather.type = 'rain';
  gardenDaily(s, 40);
  assert.equal(s.garden.beds[0].dead, true);
});

test('garden: watering uses rain barrel water', () => {
  const s = withBeds(55);
  plant(s, 'garlic');
  s.garden.beds[0].water = 0;
  const raw = s.home.rawGal;
  assert.equal(waterGarden(s), 1);
  assert.equal(s.home.rawGal, raw - 2);
});

test('garden: kale grows back after a harvest (up to 4 cuts); the garage has snare wire', () => {
  const s = withBeds(56);
  s.garden.beds.push({ crop: 'kale', day: 0, growth: 1, water: 1, ripeDay: 5, dead: false });
  for (let i = 1; i <= 3; i++) {
    assert.equal(harvest(s).kale, 8);
    assert.equal(s.garden.beds.length, 1, `cut ${i}: the plant stays`);
    assert.equal(s.garden.beds[0].growth, 0.5);
    s.garden.beds[0].growth = 1;
  }
  assert.equal(harvest(s).kale, 8);
  assert.equal(s.garden.beds.length, 0, 'after 4 cuts the bed is free');
  assert.equal(newGame(1).home.storage.snare_wire, 1);
});

test('garden: winter greens sown in November give a first cut by late winter', () => {
  const s = withBeds(53);
  assert.ok(plant(s, 'greens'));
  let ripe = null;
  for (let d = 1; d <= 110 && ripe == null; d++) { toDay(s, d); if (d % 3 === 0) waterGarden(s); if (s.garden.beds[0].growth >= 1) ripe = d; }
  assert.ok(ripe != null && ripe <= 100, `greens ripe on day ${ripe}`);
});

test('garden: fava beans sown in November are ready in spring, not before', () => {
  const s = withBeds(54);
  assert.ok(plant(s, 'fava'));
  let ripe = null;
  for (let d = 1; d <= 220 && ripe == null; d++) { toDay(s, d); if (d % 3 === 0) waterGarden(s); if (s.garden.beds[0].growth >= 1) ripe = d; }
  assert.ok(ripe != null && ripe >= 130 && ripe <= 200, `fava ripe on day ${ripe}`);
});
