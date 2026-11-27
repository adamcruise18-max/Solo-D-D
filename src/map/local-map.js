// The self-hosted map (research tool list, Adam 2026-11-27): one PMTiles file on GitHub Pages
// (docs/map/portland.pmtiles) plus the saved style, sprites and fonts in docs/map/.
// Built by tools/map/build-pmtiles.mjs and tools/map/build-style.mjs. map.js tries this first and
// falls back to OpenFreeMap when the file cannot be read (for example a server with no byte ranges).
import { Protocol, PMTiles } from 'pmtiles';

const DIR = 'map/';
let protocol = null;

// Make "./x" and relative URLs in the saved style full URLs under docs/map/.
export function absolutize(style, baseHref) {
  const base = new URL(DIR, baseHref).href;
  const abs = (u) => (u.startsWith('./') ? base + u.slice(2) : u);
  const s = JSON.parse(JSON.stringify(style));
  if (s.sprite) s.sprite = abs(s.sprite);
  if (s.glyphs) s.glyphs = abs(s.glyphs);
  for (const src of Object.values(s.sources || {})) {
    if (src.url && src.url.startsWith('pmtiles://./')) src.url = 'pmtiles://' + base + src.url.slice('pmtiles://./'.length);
  }
  return s;
}

// Returns the local style, or null when the map file or style cannot be used.
export async function localStyle(maplibregl, { timeoutMs = 5000, baseHref = location.href } = {}) {
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), timeoutMs);
    const res = await fetch(new URL(DIR + 'style.json', baseHref), { signal: ctl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const style = absolutize(await res.json(), baseHref);
    const url = style.sources.openmaptiles.url.slice('pmtiles://'.length);
    // Read the header: this fails when the file is missing or the server sends no byte ranges.
    const file = new PMTiles(url);
    await Promise.race([file.getHeader(), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), timeoutMs))]);
    if (!protocol) {
      protocol = new Protocol();
      maplibregl.addProtocol('pmtiles', protocol.tile);
    }
    protocol.add(file);
    return style;
  } catch {
    return null;
  }
}
