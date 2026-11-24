# Engine for Last Light: Portland

This file is for the people and agents who build the game. The plan for Adam is in the
Claude Doc "Last Light: Portland engine plan".

The engine is made only for this game. It gives every rule set the same shape, so a new
feature is a new file and not an edit to one large function, and so a change can be
tested before it ships.

## The central rule: exists, simulated, loaded, rendered

These are four different things, and the engine keeps them apart:

| | What | Where it lives | Example |
| --- | --- | --- | --- |
| Exists | Everything in the world | The save: content data + seed + change records | A can of beans on a Safeway shelf, 6 miles away |
| Simulated | What the rules update now | Systems, at the cell's simulation tier | Weather and the player every step; a far cell once a day |
| Loaded | Representation in memory | The streamer, per cell | The place list and houses of the 25 cells around you |
| Rendered | What the GPU draws | The render kernel (later) | The shelf in front of you at LOD0, the far wall at LOD2 |

A location that is not loaded keeps no graphics, no physics and no full simulation.
It is made again from its base (seed + content data) plus its change records.

## Folders

| Folder | What | Browser code? |
| --- | --- | --- |
| `src/core/` | Engine core: clock, systems list, actions list, events, random streams, saves, content check | No |
| `src/engine/` | Game rules (systems). They move into the core shape step by step | No |
| `src/render/` | 3D kernel for rooms (step 4, not started) | Yes |
| `src/ui/` | Map, panels, 3D view today | Yes |
| `tools/` | Headless bot, sim, replay check, browser check | Node only |

## Core modules (`src/core/`)

- `clock.js`: `createClock({ systems, events }).advance(state, minutes, mode)`. Steps of 10 game
  minutes. When a step passes 5 AM, every system's `daily` hook runs before the step. Same
  order as the old `advanceTime()` in `src/engine/tick.js`.
- `systems.js`: a system is `{ id, order, init, step, daily, version, migrations }`. Lower
  `order` runs first. Unknown fields are refused, so a typo (`stepp`) fails at once.
- `actions.js`: an action is `{ id, group, label, when, minutes, risk, run }`. `preview()`
  gives the screen the label, the reason it is blocked, the time cost and the risk, the
  same way for every action. `legacyActions()` wraps the old `listActions()`/`doAction()`.
- `events.js`: `on`, `once`, `emit`, `drain`. Rules emit events; the journal, log, stats,
  sound and screen listen. A broken listener never stops the rules.
- `rng.js`: `stream(state, 'loot')` gives a random stream per system, from the seed and the
  name. Its position is saved in `state.rngStreams`. A new roll in one system does not
  change the rolls of another system.
- `save.js`: save envelope, upgrades (`migrate`) for the whole game and per system,
  backends (IndexedDB, localStorage, memory), slots, backup file (`exportSave`,
  `importSave`). Old saves with no envelope still load.
- `content.js`: `checkContent({ items, categories, projects })` lists broken links. A test
  runs it on the real data.
- `cells.js`: the play area cut into square cells (default 256 m). `classify()` gives
  each cell a tier from the player's position and heading: active (3x3 with near),
  loaded (5x5), edge (7x7, kept if loaded so cells do not flicker), far (9x9), dormant.
  Cells ahead of the player load early. `simDue()` says when a reduced (hourly) or
  abstract (daily) cell runs.
- `streamer.js`: loads the cells a tier asks for, async, most important first, at most
  `maxInFlight` at a time, inside `maxLoaded` and a cost budget. When full, a new cell
  loads only if it is more important than the least important loaded cell. Failed loads
  are retried on the next update, not in a loop. Never drops the player's cell.
- `changes.js`: change records (taken, opened, closed, emptied, moved, damaged,
  discovered, set) per location key. `applyChanges(base, records)` rebuilds the current
  version. A later record for the same object replaces the earlier one.
- `profiler.js`: frame time, time per section, counters (draw calls, triangles, visible
  objects), memory by subsystem, and the budgets below.
- `index.js`: `createEngine({ systems, actions })` puts it together.

## Budgets

| Budget | Value |
| --- | --- |
| Frame | 30 FPS = 33.3 ms first; 60 FPS later |
| Sections | simulation 5 ms, physics 4, animation 3, render prep 5, render 12, margin 4.3 |
| Memory test tiers | 512 MB (phone), 1 GB, 2 GB. Do not fix a memory problem by raising the budget |
| Streaming | 4 loads at a time, 40 cells loaded at most (both settings) |

The browser cannot report its real memory on GitHub Pages (that needs special headers),
so every subsystem counts its own bytes with `profiler.memory(name, bytes)`.

## Saves

- Every save has a checksum. Before a new save is written, the last good save is copied
  to `<slot>~prev`. If the newest save is cut or broken, `load()` uses the previous one
  and says so in `store.lastLoad`. A failed write never destroys the last good save.
- `migrate()` upgrades the whole game (`state.version`) and each system
  (`state.systemVersions`). A save from before the engine keeps all its values.
- `askPersistentStorage()` asks the browser not to clear the saves (Safari can clear
  site storage after 7 days without a visit). The backup file is the safe copy.

## Rules for new code

1. No browser code in `src/core/` or `src/engine/` (no `window`, `document`, three.js).
2. Every random roll comes from the seed (`stream()` or the old `rand(state)`), never
   `Math.random()` in rules.
3. A new rule set is a system file with its own fields. If it changes the shape of saved
   fields, raise its `version` and add a migration.
4. Content is data. `npm test` checks the links.
5. Time costs and risks are declared on the action, not written by hand in the panel.

## Tools

| Command | What it does |
| --- | --- |
| `npm test` | All node tests, with the content check and the replay test |
| `npm run sim -- --runs 50 --days 90` | The bot plays many runs fast; shows days survived and causes of death |
| `npm run replay` | Bot plays seeds 42, 1234, 777 for 30 days; compares with `test/golden/replay.json` |
| `npm run replay -- --record` | Writes a new golden file. Only when a rule change is meant, and say so in the PR |
| `npm run check:browser` | Chromium: the game page loads with no errors; saves and the fallback work in IndexedDB |

## Moving old code into the engine

Steps 2 to 4 start after PR 9 (pick-up items) merges, because it edits the same files.

1. Before a move, `npm run replay` must pass.
2. Move one part (for example the dog in `tick.js`) into a system file. Do not change numbers.
3. `npm run replay` must still pass with no new recording. If it fails, the move is wrong.
4. One part per PR, so each PR is small to review.

The golden replay gives the same result on main and on the PR 9 branch (checked 2026-11-24),
so it stays valid when PR 9 merges.

## Agent roles (from Adam's development prompt, adapted to this game)

| Role | Owns here |
| --- | --- |
| Lead architect | This file, interfaces, reviews of every engine PR (the engine thread) |
| Core runtime | `src/core/` clock, events, profiler, config |
| World and cells | `cells.js`, `streamer.js`, cell data made at build time from OpenStreetMap |
| Persistence and saves | `changes.js`, `save.js` |
| Rendering and LOD | `src/render/` (later), with the pick-up items thread, which owns the 3D room files today |
| Simulation | game systems in `src/engine/` moved into the systems list |
| Testing | `test/`, `tools/` bot, replay, stress tests, browser check |
| Performance | profiler, budgets, the in-game overlay |

Not in this game (rules from the setting): no other humans, so no character AI, dialogue
or combat. Animals and the dog are the only other living things.

## Interfaces owned by other threads

Do not change these without asking the pick-up items thread first: `openInside` options,
the `buildInterior` plan format, `makeItemModel` / `makeShelfFill` / `makeProp`,
`setupLook`.

## Decisions

| Date | Decision |
| --- | --- |
| 2026-11-24 | Engine only for this game, in new folders; old code moves in after PR 9 |
| 2026-11-24 | 3D streets: decide later (Adam). Build the shared parts first; ask before 3D street work |
| 2026-11-24 | Cells 256 m; rings 3x3 / 5x5 / 7x7 kept / 9x9 known (from the research thread) |
| 2026-11-24 | Change records instead of copies of locations; base made again from seed + content |
