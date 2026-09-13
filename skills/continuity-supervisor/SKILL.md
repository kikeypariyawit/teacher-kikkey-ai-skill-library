---
name: continuity-supervisor
description: Maintain character, wardrobe, prop, location, timeline, screen-direction, story-state, and approved visual-reference continuity across AI-generated episodes and shots.
version: 2.1.0
---

# continuity-supervisor

## Purpose

Maintain character, wardrobe, prop, location, timeline, screen-direction, story-state, and visual-reference continuity across AI-generated episodes and shots.

## Use when

Use for multi-shot or multi-episode productions where generated assets may drift.

## Required inputs

- Scripts/shot lists
- Character references
- Generated assets when available
- Prior continuity bible
- Reference binding map when reference-driven production is used

## Workflow

1. Track immutable identifiers separately from scene-changeable states.
2. Maintain a scene-state ledger for wardrobe, injuries, props, weather, time, location, and emotion.
3. Track object ownership and exact state changes.
4. Track accepted visual asset IDs and the role each asset owns: character, look, location, scene anchor, previous-shot handoff, prop, motion/camera reference.
5. Check entrances/exits, plot-critical hand positions, eyelines, screen direction, and geography.
6. Check that directly continuous shots inherit the correct local state without losing their global Character/Look/Location masters.
7. Record intentional continuity breaks as new canonical state.
8. Generate compact continuity anchors and downstream repair lists for future prompts.

## Visual reference continuity

Distinguish three things:

### Canonical identity/state
What is true in the story and production bible.

### Global visual masters
Approved assets that represent stable truth across many shots, such as character identity, principal looks and recurring locations.

### Local handoff state
The accepted frame or asset that records where the immediately previous shot left the character, prop, blocking, lighting or environment.

For directly connected shots, local handoff state should normally supplement global masters, not replace them indefinitely. A long chain of `previous shot -> next shot -> next shot` can compound drift; require periodic re-anchoring to approved global masters.

## Reference binding checks

For each shot where continuity matters, verify when available:
- Character Master ID(s)
- Look/Costume Master ID(s)
- Location Master ID
- Scene Anchor ID
- Previous accepted shot/handoff frame
- prop state/owner/hand
- must-preserve fields
- allowed-to-change fields
- intentional delta
- asset approval status

If a shot uses a contradictory draft reference against an approved master, flag it rather than silently merging the two.

## Output contract

- Continuity ledger
- Visual reference binding ledger when relevant
- Detected conflicts
- Canonical correction
- Prompt/reference anchors
- Downstream repair list
- Next-scene state

## Final QA

- No unexplained reset
- Timeline possible
- Props persist logically
- Invariants unchanged
- Approved global masters remain authoritative
- Local previous-shot references do not compound unchecked drift
- Intentional changes documented
- Draft/rejected assets are not silently promoted to canon

## State dependencies and evidence

Generated assets are optional when checking planned continuity. Track character knowledge and mistaken beliefs, audience knowledge, relationship leverage and emotional residue alongside wardrobe/prop/light/position. Record stable shot and asset IDs, actual paths, revisions, accepted/draft status and reference bindings. Mark missing canon unknown.

Check first/last-frame feasibility and the match between previous exit and next entry. Re-anchor accepted references when iterative generation drifts. Prop ownership/hand, crowd density, set dressing and voice/room perspective persist unless shown changing. A local change produces an explicit downstream repair list; preserve unrelated scenes and approvals. Reading a prompt cannot prove visual continuity.

## Repair ownership

When a visual continuity failure occurs, classify it before changing canon:
- face/identity drift → repair through `reference-first-visual-production` using the approved Character Master
- wardrobe drift → repair current Look binding
- environment/geography drift → repair Location/Scene Anchor binding
- wrong handoff state → repair previous-shot/local binding
- story-state contradiction → continuity supervisor owns the canonical correction

Do not rewrite canonical character identity because a generated image failed to match it.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.

## Cinematic production extension

Read [continuity-delivery.md](../ai-drama-episode-producer/references/continuity-delivery.md) for this pass. If used separately, keep this reference available with the producer bundle.

Generated assets are optional for planning. Record source and target state per shot, including hand/prop ownership, geometry, character knowledge and relationship change. Keep draft events separate from approved canon. Track dependencies for local revisions. Planning checks must not be reported as visual inspection of unseen media.
