// Weather and light effects drawn on top of the map: falling snow or rain,
// fog at the edges, and a soft blue tint at night. They are light layers:
// the map below always stays easy to see.

const FX_KEY = 'lastlight.fx';

export function fxEnabled() {
  try {
    const v = localStorage.getItem(FX_KEY);
    if (v !== null) return v === '1';
  } catch { /* no storage */ }
  return !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export function setFxEnabled(on) {
  try { localStorage.setItem(FX_KEY, on ? '1' : '0'); } catch { /* no storage */ }
}

export function createFx(wrap) {
  const layer = document.createElement('div');
  layer.className = 'fx';
  layer.innerHTML = '<div class="fx-season"></div><div class="fx-night"></div><div class="fx-fog"></div><div class="fx-haze"></div><canvas class="fx-fall"></canvas><div class="fx-grid"></div><div class="fx-vignette"></div>';
  wrap.appendChild(layer);
  const canvas = layer.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  let kind = 'none'; // none | snow | rain | leaves
  let strength = 0; // 0..1
  let wind = 0;
  let parts = [];
  let raf = 0;
  let enabled = fxEnabled();

  function resize() {
    const r = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, r.width * dpr);
    canvas.height = Math.max(1, r.height * dpr);
    canvas.style.width = `${r.width}px`;
    canvas.style.height = `${r.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(w, h, anywhere) {
    const snow = kind === 'snow' || kind === 'leaves';
    return {
      x: Math.random() * (w + 200) - 100,
      y: anywhere ? Math.random() * h : -10,
      r: kind === 'leaves' ? 2.5 + Math.random() * 2.5 : snow ? 1.1 + Math.random() * 2.4 : 0.6 + Math.random() * 0.6,
      c: ['#b5652b', '#c9952f', '#8f4a2a', '#a8892f'][Math.floor(Math.random() * 4)],
      v: snow ? 0.4 + Math.random() * 0.9 : 7 + Math.random() * 5,
      p: Math.random() * Math.PI * 2,
    };
  }

  function frame() {
    raf = 0;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    if (!enabled || kind === 'none' || document.hidden) return;
    const want = Math.round((kind === 'snow' ? 160 : kind === 'leaves' ? 40 : 220) * strength * Math.min(1, (w * h) / 600000 + 0.3));
    while (parts.length < want) parts.push(spawn(w, h, true));
    if (parts.length > want) parts.length = want;
    const drift = wind / 12;
    if (kind === 'snow') {
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.shadowColor = 'rgba(80,110,140,0.55)';
      ctx.shadowBlur = 2;
      for (const s of parts) {
        s.p += 0.02;
        s.y += s.v;
        s.x += Math.sin(s.p) * 0.4 + drift;
        if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    } else if (kind === 'leaves') {
      for (const s of parts) {
        s.p += 0.05;
        s.y += s.v * 0.9;
        s.x += Math.sin(s.p) * 0.8 + drift * 1.5;
        if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.p);
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.ellipse(0, 0, s.r, s.r * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    } else {
      ctx.strokeStyle = 'rgba(60,90,120,0.38)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const s of parts) {
        s.y += s.v;
        s.x += drift * 3;
        if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + drift * 3, s.y + s.v * 1.6);
      }
      ctx.stroke();
    }
    raf = requestAnimationFrame(frame);
  }

  function run() {
    if (!raf) raf = requestAnimationFrame(frame);
  }

  new ResizeObserver(resize).observe(wrap);
  resize();
  document.addEventListener('visibilitychange', run);

  return {
    // weather: a weather type id from data/climate.js; night: true or false; windMph: number.
    update({ weather, night, windMph, season }) {
      const windy = weather === 'windstorm' || (windMph || 0) >= 12;
      const nextKind = weather === 'snow' ? 'snow' : weather === 'rain' || weather === 'heavy_rain' || weather === 'ice_storm' ? 'rain'
        : season === 'fall' && windy ? 'leaves' : 'none';
      if (nextKind !== kind) parts = [];
      kind = nextKind;
      strength = weather === 'heavy_rain' ? 1 : weather === 'rain' ? 0.5 : weather === 'ice_storm' ? 0.6 : weather === 'snow' ? 0.8 : nextKind === 'leaves' ? 1 : 0;
      for (const s of ['winter', 'spring', 'summer', 'fall']) layer.classList.toggle(`is-${s}`, season === s);
      wind = (windMph || 0) * (weather === 'windstorm' ? 1.5 : 1);
      layer.classList.toggle('is-night', !!night);
      layer.classList.toggle('is-fog', weather === 'fog');
      // Rare weather: wildfire smoke (orange sky), a heat wave (pale warm haze), an ice storm (cold glaze).
      // Light tints only: the map stays readable.
      layer.classList.toggle('is-smoke', weather === 'smoke');
      layer.classList.toggle('is-heat', weather === 'heat_wave');
      layer.classList.toggle('is-ice', weather === 'ice_storm');
      layer.classList.toggle('is-storm', weather === 'windstorm' || weather === 'heavy_rain');
      layer.classList.toggle('off', !enabled);
      run();
    },
    setEnabled(on) {
      enabled = on;
      setFxEnabled(on);
      layer.classList.toggle('off', !on);
      if (!on) ctx.clearRect(0, 0, canvas.width, canvas.height);
      run();
    },
    get enabled() { return enabled; },
  };
}
