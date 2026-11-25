import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD_GRID, cellKeyAt, WORLD_CELL_METERS } from '../src/engine/worldgrid.js';
import { HOME } from '../src/engine/state.js';

test('world grid: HOME is in cell 0,0; 256 m cells; keys are stable', () => {
  assert.equal(WORLD_CELL_METERS, 256);
  assert.equal(cellKeyAt(HOME), '0,0');
  // 300 m east of HOME is the next cell east.
  const east = { lat: HOME.lat, lon: HOME.lon + 300 / (111320 * Math.cos((HOME.lat * Math.PI) / 180)) };
  assert.equal(cellKeyAt(east), '1,0');
  assert.ok(WORLD_GRID.inArea('0,0'));
});
