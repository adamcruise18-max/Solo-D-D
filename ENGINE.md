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
  loads only if it is more important than the least important loaded cell, and a cell
  dropped for the budget is not loaded again before the next update. One load per cell
  at a time: a cell that is cancelled and wanted again keeps its load. Failed loads wait
  1 s, 2 s, 4 s ... (at most 30 s) before a retry. Never drops the player's cell.
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
- Errors have a code (`SaveError`): `quota` (no space; the last good save is kept) and
  `broken` (the slot has saves, but every copy is bad). A broken slot is never shown as
  an empty slot, so the game cannot start a new run over it by mistake. An upgrade
  error (for example a save from a newer game) is passed up, not hidden by `~prev`.
- The live game (`src/engine/save.js`, localStorage) does not drop a save it cannot load
  (for example one from a newer game): `loadGame()` moves it to
  `lastlight.save.v1.unreadable` before a new run can write over it, and
  `loadProblem()` says why. `unreadableSave()` gives its text for a backup download.
- Save timing (`npm run bench:save`, and IndexedDB numbers in `npm run check:browser`),
  2026-11-24: a real 47-day bot save is about 48 KB. In Chromium IndexedDB, a save of
  both copies takes about 27 ms at 1 MB, 158 ms at 5 MB, 292 ms at 10 MB, 708 ms at
  25 MB. The checksum is about 11 ms per MB in Node. Saves are far below 1 MB now, so
  no worker is needed yet; check again when the map state grows.
- `askPersistentStorage()` asks the browser not to clear the saves (Safari can clear
  site storage after 7 days without a visit). The backup file is the safe copy.

## Rules for new code

1. No browser code in `src/core/` or `src/engine/` (no `window`, `document`, three.js).
2. Every random roll comes from the seed (`stream()` or the old `rand(state)`), never
   `Math.random()` in rules.
3. A new rule set is a system file with its own fields. If it changes the shape of saved
   fields, raise its `version` and add a migration. A system made from old code whose
   fields were already in old saves gets `legacy: true` (old saves then skip its `init`).
4. Content is data. `npm test` checks the links.
5. Time costs and risks are declared on the action, not written by hand in the panel.
6. Only the clock moves time. A system that calls `advance()` inside a step is an error
   ("time charged twice").
7. A system lists the top-level state fields it owns (`owns`). With dev checks on
   (tests and the replay), a system that changes a field another system owns stops the
   run ("Dual write"). Rules 1 and 2 are checked by `test/architecture.test.js`.
8. A system says how it catches up (`catchUp`: `exact`, `approx` or `event`). Reduced or
   abstract simulation must not skip time for a system that has not said it
   (`systems.missingCatchUp()`). Test the claim: 10 one-day steps against 1 ten-day step.

## Field ownership (until all rules are systems)

| State | Who writes it |
| --- | --- |
| `weather` | the weather system (`src/engine/systems.js`) |
| Item pick-ups | PR #9 model: `zoneItems`, `taken[pid]`, `opened[cid]` |
| Other place changes (doors, damage, discovered) | `world.changes` (`src/core/changes.js`) |
| `pacer` | the event pacer (`src/engine/pacer.js`, stream `pacer`) |
| `decay` | the slow breakdown (`src/engine/decay.js`) |
| `home` | the home system (`src/engine/home.js`: heat, battery, barrels, tap, filter); project actions in `base.js` |
| `dog` | the dog system (`src/engine/dog.js`, after the legacy rules); player actions (feed, play, follow) also change it |
| All other fields | the legacy system (old rules in `src/engine/tick.js`) |
| `time` | the clock only |

## Tools

Built files: `docs/game.js` and `docs/inside3d.js` are generated. A pull request must carry a fresh build (CI fails otherwise). After a merge, the "Fresh bundle" workflow (`.github/workflows/bundle.yml`) builds main again and commits the result when the merge left a stale bundle.

| Command | What it does |
| --- | --- |
| `npm test` | All node tests, with the content check and the replay test |
| `npm run sim -- --runs 50 --days 90` | The bot plays many runs fast; shows days survived and causes of death |
| `npm run sim -- --smart` | The same with the careful-player policy (balance runs; `test/balance.test.js` guards day 21) |
| `npm run replay` | Bot plays seeds 42, 1234, 777 for 30 days; compares with `test/golden/replay.json` |
| `npm run replay -- --record` | Writes new golden files. Only when a rule change is meant, and say so in the PR |
| `npm run check:browser` | Chromium: the game page loads; a new run plays through the clock and the weather system; saves and the fallback work in IndexedDB; save timing |
| `npm run bench:save` | Save timing in Node at 1, 5, 10 and 25 MB |

CI (`.github/workflows/ci.yml`) runs `npm ci`, `npm test`, `npm run replay`, the build and
the browser check on every pull request and every push to main. On a failure it keeps
the browser screenshot and page errors as an artifact.

### Replay

`test/golden/replay.json` has one snapshot per game day. `test/golden/trace.json` has one
line per bot turn: turn, action, start and end time, minutes, rng before and after, and
the state paths that changed with a hash of each (`player.food`, `home.battery`,
`places.<id>`...). When the replay changes, the report names the first turn, its action
and game time, and the state paths that differ. Player text (`log`, `journal`) is not in
the trace, so a new wording is not a rule change. The golden files change only in a pull
request that says which rule change is meant and why.

## Event pacer and slow breakdown (research spec step 7)

- **Pacer** (`pacer`, after the rules in each step): tension rises 0.3 per quiet hour
  (+0.3 outside). Each hour the chance of an event is `clamp((tension - 20) / 200, 0, 0.12)`.
  An event lowers the tension (small 25, medium 50, big 100). No big event within 3 days
  of the last one, no repeat of an event within 2 days, big events are half as likely when
  the player has 2 or more need warnings or a fresh wound, and after 96 quiet hours the
  next hour has a small event. A 120-day simulation gives about 2.4 events a week with no
  gap of 5 days. Events are data in `src/data/events.js` (builder content).
- **Slow breakdown** (`decay`, daily): rows in `src/data/decay.js` start at their month
  (the game starts at month 3) and spread area by area with `chanceByDay`. The day each
  area fails comes from a hash of the seed, the row and the area, so catch-up is exact
  and nothing per area is saved. Rules ask `decayActive(state, id, area)` or
  `decayShare(state, id)`. The journal gets one line when a row first shows.
- For the F3 overlay: `pacerInfo(state)`, `decayInfo(state)`, and `sceneEnv(state)` for
  the hour and weather (`src/engine/scene.js`).

## Rare weather and sleep events (research spec step 7, part 3)

- Part of the weather system (`src/engine/rareweather.js`, stream `weather-rare`).
  After the normal day roll, a spell can replace the day's type for some days:
  ice storm (Dec-Feb, about 1 winter in 2, 1-2 days), heat wave (Jul-Aug,
  about 1 summer in 2, 3-5 days, 98-106°F), wildfire smoke (Aug-Sep, about 1
  year in 2, 3-7 days). Snow stays on 28% of cold wet days (about 4 snow spells a
  winter). `state.weather.spell = { id, daysLeft, first }`, `baseType` = the
  normal type (tomorrow's roll uses it).
- Effects: ice storm = walk speed x0.5, d20 rain disadvantage, more road events,
  the `ice_trees_down` big event; heat wave = thirst x1.5 outside in the day;
  smoke = 1.5 health an hour outside without an N95 mask.
- `sceneEnv()` gives `haze` (sky tint color) and `ice` for the visuals.
- Sleep: `whereNow()` is `'asleep'` in sleep mode. Then only events with
  `where: 'asleep'` (written as a sound that wakes you) can happen; `'any'` means awake.

## Activity log and diagnostics (external review 3.4, milestone 3)

- `src/core/activity.js`: one record per player action (in memory only, never
  saved): the action, minutes, each journal line with the system and hook that
  wrote it (`currentSource()`, set by the systems runner), which random sources
  moved, and in deep mode the changed state paths (same paths as the replay trace).
- `src/engine/activity.js` holds the game's recorder; `perform()` opens and closes
  a record; `log()` adds lines.
- `src/engine/diagnostics.js`: `diagnostics(state)` gives weather (with spell),
  pacer, decay, systems and versions, rng positions, save size and recent records.
  `setDeepActivity(true)` while the F3 view is open; `activityText(r)` for a
  bug report. The F3 view itself is UI (builder).

## Heat by room (research step 8)

- `src/engine/home.js`: the living room is `home.indoorTemp` (fire, stove and heater
  are there). Kitchen, bedroom and bath (`home.rooms[id].temp`) trade heat with the
  outside (loss 0.05/h, more per broken window: +1.5 each, a boarded one +0.45)
  and with the living room through the door (0.15/h open, 0.02/h closed).
- `breakWindow`, `boardWindow`, `setDoor` for actions and events; `homeHeat(state)`
  gives the heat panel: outside air, sources, and each room's temp, windows, door, loss.
- Heat flows both ways through a door (a cold living room pulls the rooms down).
- Sleep uses the sleep spot (`sleepSpot`, `setSleepSpot`; bedroom bed or living-room
  couch): `tick.js` `feltTemp` uses `sleepTemp(state)` when you sleep at home.

## Garden (research step 8)

- `src/engine/garden.js`, system `garden` (order 1008, owns `garden`, catch-up exact).
  Crops in `src/data/crops.js` (sow months, days, frost line `frostF`, warmth `minF`, yield).
- Needs the `garden_beds` project (4 beds). Each day at 5 AM: rain waters a bed,
  dry days dry it (0.35 a day, 1.7x in a heat wave); growth = warmth x water / days;
  frost at or below `frostF` kills the crop; a ripe crop rots after 30 days.
- Player actions for the UI: `canPlant`, `plant` (uses one `seeds`), `waterGarden`
  (2 gal raw water a bed), `harvest` (fresh food into storage), `gardenInfo`.

## Overgrowth effects and a deeper dog (research step 9)

- `src/engine/season.js`: `overgrowthWalk(t)` (1 until a quarter grown in, then down
  to 0.85 in a grown-in summer; used by `walkSpeed` as "overgrown streets"),
  `animalCover(t)` 0..1 and `forageFactor(t)` (summer most, winter almost none)
  for hunting and foraging when they come.
- `src/engine/dog.js` (stream `dog`, the shared rng does not move):
  - finds: in a store or house, a dog with bond 40+ may find one item a visit;
  - warns: with bond 30+, the pacer's `feral_dogs` hazard costs 4% speed, not 10%,
    with one warning line a pack (`dogWarns`);
  - sickness: about 1% a day (more when hungry or in cold rain); a sick dog loses
    about 6 health a day and does not heal in sleep; it gets well by itself after
    4+ days if fed, or at once with antibiotics (`canTreatDog`, `treatDog`).
- Replay recorded again (only the new `dog` stream moved).

## Hunting and fishing (skills `fishing` and `hunting`)

- Spots: `src/data/wild.js` (real parks, wetlands, rivers inside the map; approximate
  pins). Location at a spot is `{ kind: 'wild', id }`; it counts as outside
  (`environment`, pacer `whereNow`). `goToSpot(state, id)`, `spotsNear(state, kind)`.
- `src/engine/wild.js`:
  - fishing (2 h): rod, or line and hooks; d20 vs DC 12 with skill, dawn/dusk +2,
    salmon run +3 (Willamette, spring and fall), cold water −2, small creek −2,
    hand line −1, frozen ground −2. 1 to 4 fish; cleaning 5 min each (15 with no knife).
  - hunting (3 h, bow or rifle): find chance from `animalCover`, dawn/dusk, night,
    scared game; then one shot (rabbit 13, duck/goose 14, deer 16; rifle +3). A
    rifle shot scares the spot for 24 h (disadvantage, fewer finds). A missed
    arrow can be lost. Ducks and geese only Oct to Mar. No dogs or cats.
  - snares: set (30 min, snare wire), check after 12 h (one roll a day, up to 3).
  - cleaning needs a knife or multitool; with none, 40% of the meat, double time.
  - meat and fish go to the pack as fresh food (`food.js` spoilage).
  - XP by use through `practice` (daily cap applies).
- Odds for buttons: `fishOdds`, `huntOdds` (find % and shot odds).
- Replay recorded again: new gear in outdoor store and house loot.

## Year sim tuning (research, 2026-11-25)

- Fishing spot pressure: each trip adds 1 (`state.wild.pressure[spot]`), recovering
  0.25 a day; catch × (1 − 0.15 × pressure), and −1 to −4 on the roll ("fished out").
  Winter (Dec to Feb) halves the catch; a salmon run is a salmon half the time.
  Catch is 1 to 3 fish by the roll. A skilled angler who rotates spots gets about
  500 kcal an hour at the bank, about 300 with the walk.
- Hunting gear: more bows and arrows in outdoor stores, a few in houses; snare wire in
  hardware stores.
- Bites: 25% infection if open for 6 h, 10% even if bandaged in time.

## Browser playtest 1 fixes

- Temperature curve (`world.js` `baseAirTemp`): before 5 AM the weather record is still
  yesterday's, so the night eases from its high to its `nextLow` (no jump at midnight).
  Rare spells no longer change this morning's low (no jump at 5 AM). The night low is
  never above the day's high − 3, so "Low tonight" (`preview.js`, with a cold snap) is
  the real low.
- Auto-wake (`tick.js`): sleep ends early when water < 15, food < 10, warmth < 30 or
  health < 30 is crossed during the sleep (one line in the journal). The clock
  (`src/core/clock.js`) stops an action when a rule sets `state._stop`.

## Playtest list 1 fixes (research, 700 bot runs)

- Antibiotics: once a course starts (`infection.abxH`), the infection does no more
  damage and health refills again (it took health until cured before).
- Cold retune (`tick.js`): clothes count at 80% (`CLOTHES_SHARE`), walking +8°F and
  work +6°F of body heat (`ACTIVITY_HEAT`), wet through outside −8°F (`WET_OUTSIDE`),
  new `warmthRate` bands down to −28/h. Week 1 with no fire in normal clothes now
  drops warmth to about 36; a soaked ice-storm walk in only a down coat loses about
  10 warmth an hour; full gear with a rain jacket stays warm.
- Pacer: events are 0.4x as likely asleep (`ASLEEP_RATE`); an event may carry its own
  weight factor `w` (events.js).
- Decay rows with rule effects:
  - `roof_leaks` (area = place or house key): paper items (`SOAKS`) are gone from the
    loot; in the rain you get damp inside (25% of outside rate) and it is 1°F over
    the air, not 5°F.
  - `trees_on_roads` (area `road:<place id>`): the walk there is 1.3x longer (1.1x
    with a phone signal); the first time, a world change `road:<id>` / `tree` is recorded.
  - `cell_towers` (area: grid cell of about 3 miles): `phoneSignal(state)` with a
    `phone` item. After that, a phone is only a light and a camera (UI).
- Tools: the careful bot gets the same idle guard as the replay bot, goes home for
  antibiotics; `sim` reports stuck runs (turn limit) instead of "alive".

## Moving old code into the engine

Done: time moves through the engine clock (`advanceTime()` calls `gameClock().advance()`).
The weather is the first system (`weather`, before `legacy`). The rest of the old rules
run as one `legacy` system until they move out. The golden replay did not change.

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
| 2026-11-24 | External review adopted as the build order: CI, weather, observability, dog, home base, balance |
| 2026-11-24 | Weather keeps the shared game rng for now, so its numbers stay the same. Its own `weather` stream is a separate change that re-records the golden files |

## Open points from the research review (PR #10)

1. Item pick-ups: PR #9 saves the rolled item list of each zone plus what was taken
   (`holder.zoneItems`, `holder.taken`). That stays the source of truth for items, because
   the rolled list is in the save, so its ids stay valid when loot tables change.
   `world.changes` is for other kinds (doors, containers emptied, places discovered,
   moved or damaged objects). New record ids must be content-based (zone + item + n),
   never a position in a list made again from content.
2. Save checksum: measured (see Saves). About 11 ms per MB; real saves are about 48 KB,
   so about 0.5 ms. No worker needed now.
3. Catch-up: `test/systems.test.js` checks that 10 one-day advances give the same game
   as one ten-day advance. Each system now declares `catchUp`.
4. A small diagnostics overlay (frame ms, sections, memory) behind a key, with the
   pick-up items thread, which owns the 3D view.
