import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseColor, coolColor, winterizeStyle } from '../src/ui/winter-style.js';

const lum = (s) => { const c = parseColor(s); return (0.3 * c.r + 0.59 * c.g + 0.11 * c.b) / 255; };

test('parseColor reads hex, rgb and hsl', () => {
  assert.deepEqual(parseColor('#fff'), { r: 255, g: 255, b: 255, a: 1 });
  assert.equal(parseColor('rgba(10, 20, 30, 0.5)').a, 0.5);
  const h = parseColor('hsl(0,100%,50%)');
  assert.equal(Math.round(h.r), 255);
  assert.equal(parseColor('not a color'), null);
});

test('coolColor keeps colors light (the map must not go dark)', () => {
  for (const c of ['#f8f4f0', '#fea', 'rgb(158,189,255)', 'hsla(98,61%,72%,0.7)']) {
    assert.ok(lum(coolColor(c)) >= lum(c) - 0.08, c);
  }
});

test('winterizeStyle gives a light, colored map', () => {
  const style = {
    version: 8, sources: {},
    layers: [
      { id: 'background', type: 'background', paint: { 'background-color': '#f8f4f0' } },
      { id: 'water', type: 'fill', 'source-layer': 'water', paint: { 'fill-color': 'rgb(158,189,255)' } },
      { id: 'road_minor', type: 'line', paint: { 'line-color': '#fff' } },
      { id: 'road_motorway', type: 'line', paint: { 'line-color': ['interpolate', ['linear'], ['zoom'], 5, 'hsl(26,87%,62%)', 6, '#fc8'] } },
      { id: 'label_city', type: 'symbol', layout: { 'text-field': '{name}' }, paint: { 'text-color': '#000' } },
    ],
  };
  const w = winterizeStyle(style);
  const paint = Object.fromEntries(w.layers.map((l) => [l.id, l.paint]));
  assert.ok(lum(paint.background['background-color']) > 0.85, 'background is light');
  const water = parseColor(paint.water['fill-color']);
  assert.ok(water.b > water.r + 40, 'water stays blue');
  assert.equal(paint.road_minor['line-color'], '#ffffff');
  assert.equal(paint.road_motorway['line-color'], '#e9cf96');
  assert.ok(lum(paint.label_city['text-color']) < 0.3, 'labels are dark and easy to read');
  assert.equal(style.layers[0].paint['background-color'], '#f8f4f0', 'input is not changed');
});
