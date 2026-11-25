import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detailFeatures } from '../src/ui/details.js';

test('every abandoned car on the map has a unique id and a position', () => {
  const places = [{ id: 'p1', cat: 'supermarket', lat: 45.5, lon: -122.8 }, { id: 'p2', cat: 'gas', lat: 45.51, lon: -122.81 }];
  const fc = detailFeatures(places, { lat: 45.49, lon: -122.87 });
  const cars = fc.features.filter((f) => f.properties.type === 'car');
  assert.ok(cars.length >= 3);
  const ids = cars.map((f) => f.properties.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const f of cars) {
    assert.match(f.properties.id, /^car:/);
    assert.ok(Number.isFinite(f.geometry.coordinates[0]) && Number.isFinite(f.geometry.coordinates[1]));
  }
});
