// Dev view: opens the first-person view for one floor plan with stub game callbacks.
// room.html?cat=house|supermarket|hardware|...&key=1&q=medium|low&x=0&z=-2&yaw=0
import { buildInterior, buildHome } from '../../src/engine/interior.js';
import '../../src/ui/inside3d.js';

const q = new URLSearchParams(location.search);
const cat = q.get('cat') || 'house';
const plan = cat === 'home' ? buildHome(() => true) : buildInterior(cat, q.get('key') || 'dev1', +(q.get('zones') || 6));
const fixed = { plan, title: q.get('key') || 'Dev room', subtitle: cat, dark: false, night: false, stock: 1, items: [], zoneItems: [] };
const opts = { ...fixed };
for (const k of ["canQuickLoad", "describe", "describeItem", "gameDiag", "getStatus", "hasFlashlight", "hasLoot", "isCounterOpen", "isDead", "isDone", "isLightOn", "isOpened", "items", "lightHours", "notice", "onCounter", "onLeave", "onOpenContainer", "onPickUp", "onSeeZone", "onTakeAll", "onWalk", "panel", "projectInfo", "quickSave", "quickUse", "toggleLight", "useItem", "getScene"]) opts[k] = /^(is|has|can)/.test(k) ? () => false : k === 'items' ? () => [] : k === 'lightHours' ? () => 0 : () => '';
opts.getScene = () => undefined;
window.__h = window.LLInside3D.openInside(opts);
setTimeout(() => {
  const h = window.__h;
  const x = +(q.get('x') || 0), z = +(q.get('z') || -1.5), yaw = +(q.get('yaw') || 0);
  const L = window.__llInside; if (L) { L.pos.x = x; L.pos.z = z; L.look(yaw, +(q.get('pitch') || 0)); }
  window.__ready = true;
}, 1500);
