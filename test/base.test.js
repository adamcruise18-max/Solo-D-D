import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { listActions } from '../src/engine/actions.js';
import { advanceTime } from '../src/engine/tick.js';
import { projectStatus, built } from '../src/engine/base.js';
import { PROJECT_BY_ID, PROJECTS } from '../src/data/projects.js';
import { ITEMS } from '../src/data/items.js';

function rested(seed = 7) {
  const s = newGame(seed);
  Object.assign(s.player, { food: 90, water: 90, warmth: 90, energy: 60, health: 90, morale: 60 });
  return s;
}
const give = (s, items) => Object.entries(items).forEach(([id, q]) => { s.home.storage[id] = (s.home.storage[id] || 0) + q; });

test('every project uses known items and known projects', () => {
  for (const p of PROJECTS) {
    for (const id of [...Object.keys(p.needs), ...(p.tools || [])]) assert.ok(ITEMS[id], `${p.id}: ${id}`);
    for (const r of p.requires || []) assert.ok(PROJECT_BY_ID[r], `${p.id}: ${r}`);
  }
});

test('a project is blocked without parts, then built with them', () => {
  const s = rested();
  const proj = PROJECT_BY_ID.led_lights;
  assert.equal(projectStatus(s, proj).blocked, 'Missing parts');
  give(s, { wiring: 1, hardware_parts: 1 });
  assert.match(projectStatus(s, proj).blocked, /tool kit/);
  give(s, { toolkit: 1 });
  assert.equal(projectStatus(s, proj).canWork, true);
  const t0 = s.time;
  perform(s, 'action', 'build', 'led_lights');
  assert.ok(built(s, 'led_lights'));
  assert.equal(s.time - t0, 120);
  assert.equal(s.home.storage.wiring || 0, 0, 'parts are used up');
  assert.equal(s.home.storage.toolkit, 1, 'tools are kept');
});

test('long projects take several work blocks; parts are taken only once', () => {
  const s = rested();
  s.home.projects.insulate_living = true;
  give(s, { stove_kit: 1, pipe_fittings: 1, hardware_parts: 2, toolkit: 1 });
  let blocks = 0;
  while (!built(s, 'wood_stove') && blocks < 20) {
    s.player.energy = 60; s.player.food = 90; s.player.water = 90; s.player.warmth = 90;
    perform(s, 'action', 'build', 'wood_stove');
    blocks++;
  }
  assert.equal(blocks, 8);
  assert.equal(s.home.storage.stove_kit || 0, 0);
  // The stove burns a bundle for 4 h
  s.home.storage.firewood = 1;
  perform(s, 'action', 'add_wood');
  assert.ok(s.home.fireHours > 3.5);
});

test('requires: the second battery needs the lights first', () => {
  const s = rested();
  give(s, { battery_module: 1, wiring: 2, toolkit: 1 });
  assert.match(projectStatus(s, PROJECT_BY_ID.second_battery).blocked, /Build first/);
  s.home.projects.led_lights = true;
  for (let i = 0; i < 4; i++) { s.player.energy = 60; perform(s, 'action', 'build', 'second_battery'); }
  assert.equal(s.home.batteryMax, 27);
});

test('rain barrels fill in the rain, and the filter station cleans water', () => {
  const s = rested();
  s.home.projects.rain_barrels = true;
  s.home.projects.filter_station = true;
  s.weather.type = 'rain';
  const before = s.home.rawGal;
  advanceTime(s, 120, 'rest');
  assert.ok(s.home.rawGal > before, 'rain fills the barrels');
  assert.ok(listActions(s).some((a) => a.id === 'filter_water'));
  const safe = s.home.safeGal;
  perform(s, 'action', 'filter_water');
  assert.ok(s.home.safeGal > safe);
});

test('the rocket stove lets you cook with no fire and an empty battery', () => {
  const s = rested();
  s.home.battery = 0;
  s.home.fireHours = 0;
  assert.ok(listActions(s).find((a) => a.id === 'cook').disabled);
  s.home.projects.rocket_stove = true;
  assert.ok(!listActions(s).find((a) => a.id === 'cook').disabled);
});

test('old saves without project data still work', () => {
  const s = rested();
  delete s.home.projects;
  delete s.home.work;
  assert.equal(built(s, 'led_lights'), false);
  give(s, { wiring: 1, hardware_parts: 1, toolkit: 1 });
  perform(s, 'action', 'build', 'led_lights');
  assert.ok(built(s, 'led_lights'));
});
