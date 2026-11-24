# Engine for Last Light: Portland

This file is for the people and agents who build the game. The plan for Adam is in the
Claude Doc "Last Light: Portland engine plan".

The engine is made only for this game. It gives every rule set the same shape, so a new
feature is a new file and not an edit to one large function, and so a change can be
tested before it ships.

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
- `index.js`: `createEngine({ systems, actions })` puts it together.

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
| `npm run check:browser` | Chromium: the game page loads with no errors; saves work in IndexedDB |

## Moving old code into the engine

Steps 2 to 4 start after PR 9 (pick-up items) merges, because it edits the same files.

1. Before a move, `npm run replay` must pass.
2. Move one part (for example the dog in `tick.js`) into a system file. Do not change numbers.
3. `npm run replay` must still pass with no new recording. If it fails, the move is wrong.
4. One part per PR, so each PR is small to review.

The golden replay gives the same result on main and on the PR 9 branch (checked 2026-11-24),
so it stays valid when PR 9 merges.
