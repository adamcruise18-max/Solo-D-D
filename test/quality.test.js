import { test } from 'node:test';
import assert from 'node:assert/strict';

const store = new Map();
globalThis.localStorage = { getItem: (k) => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const q = await import('../src/ui/quality.js');

test('quality: default is auto and uses the device guess', () => {
  store.clear();
  assert.equal(q.getQualityChoice(), 'auto');
  assert.equal(q.resolveQuality('high'), 'high');
});

test('quality: a manual choice wins over the device guess', () => {
  store.clear();
  q.setQualityChoice('low');
  assert.equal(q.resolveQuality('high'), 'low');
  q.setQualityChoice('high');
  assert.equal(q.resolveQuality('low'), 'high');
  q.setQualityChoice('auto');
  assert.equal(store.has('lastlight.quality.v1'), false);
});

test('quality: auto steps down after slow frames and never goes below low', () => {
  store.clear();
  assert.equal(q.autoStepDown('high'), 'medium');
  assert.equal(q.resolveQuality('high'), 'medium');
  assert.equal(q.autoStepDown('medium'), 'low');
  assert.equal(q.resolveQuality('high'), 'low');
  assert.equal(q.autoStepDown('low'), null);
  q.setQualityChoice('auto'); // a new choice clears what auto learned
  assert.equal(q.resolveQuality('high'), 'high');
});

test('quality: bad stored values fall back to auto', () => {
  store.clear();
  store.set('lastlight.quality.v1', 'ultra');
  assert.equal(q.getQualityChoice(), 'auto');
});
