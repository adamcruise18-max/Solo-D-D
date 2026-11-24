import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { weatherOutlook, actionTiming, tripPreview, weatherEffects, nextDayStart } from '../src/engine/preview.js';
import { estimateTrip } from '../src/engine/travel.js';

test('preview: the next weather change is the next 5 AM', () => {
  assert.equal(nextDayStart(300), 1440 + 300);
  assert.equal(nextDayStart(299), 300);
  assert.equal(nextDayStart(1000), 1440 + 300);
  const s = newGame(5);
  const o = weatherOutlook(s);
  assert.equal(o.next.at, nextDayStart(s.time));
  assert.equal(o.next.atText, '5:00 AM');
  assert.equal(o.lowF, Math.round(s.weather.low));
});

test('preview: an action that passes 5 AM says so', () => {
  const s = newGame(5);
  s.time = 4 * 60 + 17; // 4:17 AM
  const a = actionTiming(s, 35);
  assert.equal(a.endText, '4:52 AM');
  assert.equal(a.crossesDayStart, false);
  const b = actionTiming(s, 60);
  assert.equal(b.crossesDayStart, true);
  assert.match(b.dayStartText, /5:00 AM/);
});

test('preview: weather effects follow the weather rules', () => {
  const s = newGame(5);
  s.weather.type = 'snow';
  s.weather.wind = 5;
  assert.ok(weatherEffects(s).some((e) => e.id === 'slow'));
  s.weather.type = 'rain';
  s.player.worn.rain = false;
  assert.match(weatherEffects(s).find((e) => e.id === 'wet').text, /get wet/);
  s.player.worn.rain = true;
  assert.equal(weatherEffects(s).find((e) => e.id === 'wet').level, 'ok');
  s.weather.type = 'windstorm';
  s.weather.wind = 45;
  const wind = weatherEffects(s).find((e) => e.id === 'wind');
  assert.equal(wind.level, 'danger');
  assert.match(wind.text, /23 °F colder/); // feltTemp: 5 °F per 10 mph
});

test('preview: a trip preview uses the same numbers as the walk rules', () => {
  const s = newGame(5);
  const dest = { lat: s.pos.lat + 0.01, lon: s.pos.lon };
  const p = tripPreview(s, dest);
  const e = estimateTrip(s, dest);
  assert.equal(p.minutes, e.minutes);
  assert.equal(p.energy, e.energy);
  assert.equal(p.end, s.time + e.minutes);
  const before = JSON.stringify(s);
  tripPreview(s, dest);
  assert.equal(JSON.stringify(s), before, 'a preview changes nothing');
});
