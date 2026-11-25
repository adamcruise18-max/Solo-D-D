// Architecture rules for the rule code (src/core and src/engine).
// These rules keep the game deterministic and testable without a browser:
//  - no Math.random(): rules use the seeded rng or a named stream (src/core/rng.js);
//  - no browser objects (window, document) and no UI or 3D imports.
// Save backends in src/core/save.js get browser storage passed in (globalThis
// default arguments), so the rules stay testable with the memory backend.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('../src/', import.meta.url));
const DIRS = ['core', 'engine'];

// Allowed: the default seed of a new game and the default random start point.
// Both run once before the game exists; the seed is then saved.
const ALLOWED_RANDOM = [
  /^export function randomStartPoint\(rng = Math\.random\)/,
  /^export function newGame\(seed = Math\.floor\(Math\.random\(\) \* 2 \*\* 31\)/,
];

// Files in src/core and src/engine (with subfolders), plus the shared rule
// helpers they import from src/ (rng.js, sun.js, data/).
function files() {
  const out = [];
  const walk = (d) => {
    for (const e of readdirSync(join(ROOT, d), { withFileTypes: true })) {
      const rel = join(d, e.name);
      if (e.isDirectory()) walk(rel);
      else if (e.name.endsWith('.js')) out.push(rel);
    }
  };
  for (const d of DIRS) walk(d);
  walk('data');
  for (const f of ['rng.js', 'sun.js']) out.push(f);
  return out;
}

// Browser storage is reached only in the two save files, through globalThis
// (a default argument or a guarded lookup), so tests can pass a fake one.
const STORAGE_FILES = new Set(['core/save.js', 'engine/save.js']);

// Remove comments and string contents so words in text do not count.
function code(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .map((l) => l.replace(/(^|[^:])\/\/.*$/, '$1').replace(/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/g, "''"))
    .join('\n');
}

test('architecture: no Math.random in rule code (use a seeded rng or a named stream)', () => {
  const bad = [];
  for (const f of files()) {
    const lines = readFileSync(join(ROOT, f), 'utf8').split('\n');
    lines.forEach((line, i) => {
      if (!/Math\.random/.test(code(line))) return;
      if (ALLOWED_RANDOM.some((re) => re.test(line.trim()))) return;
      bad.push(`src/${f}:${i + 1}: ${line.trim()}`);
    });
  }
  assert.deepEqual(bad, [], `Math.random found in rule code:\n${bad.join('\n')}`);
});

test('architecture: rule code uses no browser objects (storage only in the save files)', () => {
  const bad = [];
  for (const f of files()) {
    const src = code(readFileSync(join(ROOT, f), 'utf8'));
    src.split('\n').forEach((line, i) => {
      if (/(^|[^.\w])(window|document|navigator)\s*\./.test(line)) bad.push(`src/${f}:${i + 1}: ${line.trim()}`);
      if (/\b(localStorage|sessionStorage|indexedDB)\b/.test(line) && !STORAGE_FILES.has(f.split('\\').join('/'))) bad.push(`src/${f}:${i + 1}: ${line.trim()}`);
    });
  }
  assert.deepEqual(bad, [], `Browser objects in rule code:\n${bad.join('\n')}`);
});

test('architecture: rule code does not import UI, 3D or map code', () => {
  const bad = [];
  for (const f of files()) {
    const src = readFileSync(join(ROOT, f), 'utf8');
    for (const m of src.matchAll(/^\s*import[^'"]*['"]([^'"]+)['"]/gm)) {
      const spec = m[1];
      if (/^(three|maplibre-gl)/.test(spec) || /\/ui\//.test(spec) || /(^|\/)render\//.test(spec)) bad.push(`src/${f}: ${spec}`);
    }
  }
  assert.deepEqual(bad, [], `UI or 3D imports in rule code:\n${bad.join('\n')}`);
});

test('architecture: the checks find a bad line (self-test)', () => {
  assert.ok(/Math\.random/.test(code('const x = Math.random();')));
  assert.ok(!/Math\.random/.test(code('// Math.random is not allowed')));
  assert.ok(!/Math\.random/.test(code("log('Math.random')")));
});
