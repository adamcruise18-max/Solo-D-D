import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { absolutize } from '../src/map/local-map.js';

test('self-hosted map: the saved style points at docs/map/ and the PMTiles file', () => {
  const style = JSON.parse(readFileSync(new URL('../docs/map/style.json', import.meta.url)));
  const s = absolutize(style, 'https://example.org/Solo-D-D/index.html');
  assert.equal(s.sources.openmaptiles.url, 'pmtiles://https://example.org/Solo-D-D/map/portland.pmtiles');
  assert.equal(s.glyphs, 'https://example.org/Solo-D-D/map/fonts/{fontstack}/{range}.pbf');
  assert.equal(s.sprite, 'https://example.org/Solo-D-D/map/sprites/ofm');
  assert.match(s.sources.openmaptiles.attribution, /OpenStreetMap/);
  assert.ok(!s.sources.ne2_shaded);
  // GitHub limit: 100 MB per file.
  assert.ok(statSync(new URL('../docs/map/portland.pmtiles', import.meta.url)).size < 95e6);
});
