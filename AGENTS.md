# Instructions for coding agents (OpenCode and others)

This repository is **Last Light: Portland**, a solo survival game in the browser on the
real map of the Portland area. Read `README.md` (what the game does) and `ENGINE.md`
(how the engine works) before you change code.

## Writing

- Write all text for people (README, ENGINE.md, game text, commit messages, PR text)
  in ASD-STE100 Simplified Technical English: short sentences, active voice, one word
  for one meaning.

## Rules

- Obey "Rules for new code" in `ENGINE.md`. The most important:
  - No browser code (`window`, `document`, three.js) in `src/core/` or `src/engine/`.
  - No `Math.random()` in rules. Every roll comes from the seed (`stream()` or `rand(state)`).
  - Only the clock moves time.
  - If you change the shape of saved fields, raise the system `version` and add a migration.
    Old saves must load.
- Content is data (`src/data/`). Do not write content into rule code.
- Do not edit `docs/game.js`, `docs/inside3d.js` or `docs/devtools.js` by hand.
  `npm run build` makes them.
- Do not record new golden replay files (`npm run replay -- --record`) unless the
  change is a rule change that is meant. Then say so in the PR.
- Never put API keys or passwords in the repository.

## Checks before you finish

1. `npm test`
2. `npm run replay`
3. `npm run build` (commit the changed `docs/*.js` files)
4. To look at the game: `npm run serve`, then open port 8080.

## Work flow

- Work on a new branch. Do not push to `main`.
- Make small changes and tell the user what you changed and why.
