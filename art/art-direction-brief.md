# Art-direction brief: 3D assets

This brief follows the `create-game-assets` skill (gamedev-skills/awesome-gamedev-agent-skills).
Use it before you add or change a 3D asset. All assets are made in code; the game loads no
model files.

## Visual target

Stylized, warm, soft 3D cartoon (Adam's reference sheets, 2026-11-25). Clean rounded shapes,
soft light, rich colors, simple made-up labels with Pacific Northwest motifs (mountains, pine
trees). Portland, late November 2026, three months after the collapse: things are dusty,
picked over and knocked down, but not gory.

## Style axes

| Axis | Rule |
| --- | --- |
| Shape | Simple solids with soft edges. Boxes of 4 cm and more get rounded edges (`gBox` in TOON). Thin parts (cards, labels) stay flat. |
| Silhouette | Each item must read at 2 m from its outline only: one main shape plus 1 to 3 parts that stick out (handle, cap, strap). |
| Value | Mid-tone bodies, darker details, light labels. No pure black and no pure white large areas. |
| Color | Warm and rich. Labels use 2 to 3 colors. No orange as a UI accent. No red-cross emblem. |
| Edge | Rounded edges on solid parts; no hard outlines or ink lines. |
| Material | `MeshStandardMaterial` only. Roughness 0.4 to 0.85 for most things; metalness only on real metal. Color maps in sRGB, data maps linear. |
| Light | Rooms: hemisphere fill + environment + a few spots, ACES tone mapping. Streets: hemisphere + one sun, no tone mapping (kept as it is now). |
| Detail | Fine parts (screws, seams, bevels) only inside `if (FINE)` (Medium/High). Low quality keeps the older shapes. |
| Camera | First person, eye at about 1.6 m; items seen from 0.5 to 3 m, shelves from 1 to 11 m. |
| Text | Made-up brands and labels only. No real logos. Real store names are only on the map. |

## Content limits

- No gore. Bodies are adult only. Children only in pictures (photos, billboards).
- No real people, no real brand logos, no copied art or UI from other games.

## Technical frame

- Units are meters. Origin at the bottom center of the object; front faces +z (shelf stock faces +x).
- `bake()` merges parts by material: new parts add triangles, not draw calls. Add at most
  1 new material for each asset.
- Limits for each asset are in `art/asset-budgets.json`; `test/asset-budget.test.js` fails when an
  asset is over its limit. The asset list with source, licence, numbers and pass/fail is
  `art/asset-manifest.json` (generate with `node tools/asset-detail.mjs --manifest art/asset-manifest.json`).
- Level of detail: shelf stock is in pieces of about 4 m; each piece shows a copy with fewer sides
  farther than `SHELF_LOD_M` (4.5 m). Shelf faces farther than 8 m (11 m on High) are hidden.

## How to check a change

1. `node tools/asset-detail.mjs --compare <old.json>`: parts, triangles, draw calls per asset.
2. `node tools/asset-gallery/shoot.mjs <repo> <out> group:from:n`: picture grid of assets.
3. `node tools/asset-gallery/rooms.mjs` and `streets.mjs`: the asset in its place, near and far
   (the skill asks for 3 distances: hand, room, far).
4. `node tools/asset-gallery/probe.mjs <repo> <out> medium room:supermarket:0:-3:0 street:0:12:0`:
   lights, shadows, tone mapping, color maps not in sRGB, same-look materials that are not shared,
   draw calls, triangles and frame time (SwiftShader, so compare runs only).
5. `node --test test/asset-budget.test.js`.

## Drift signals (stop and fix)

- An item looks realistic or noisy next to the others (too many small parts, photo-like textures).
- Hard black outlines, neon colors, or a dark, gray room.
- A label with a real brand name or logo.
- Draw calls of an asset go up after a detail pass (a new material for each small part).
