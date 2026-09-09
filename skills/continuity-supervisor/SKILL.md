---
name: continuity-supervisor
description: Maintain character, wardrobe, prop, location, timeline, screen-direction, and story-state continuity across AI-generated episodes and shots.
version: 2.0.0
---

# continuity-supervisor

## Purpose

Maintain character, wardrobe, prop, location, timeline, screen-direction, and story-state continuity across AI-generated episodes and shots.

## Use when

Use for Multi-shot or multi-episode productions where generated assets may drift.

## Required inputs

- Scripts/shot lists
- Character references
- Generated assets
- Prior continuity bible

## Workflow

1. Track immutable identifiers separately from scene-changeable states.
2. Maintain a scene-state ledger for wardrobe, injuries, props, weather, time, location, and emotion.
3. Track object ownership and exact state changes.
4. Check entrances/exits, plot-critical hand positions, eyelines, screen direction, and geography.
5. Record intentional continuity breaks as new canonical state.
6. Generate compact continuity anchors for future prompts.

## Output contract

- Continuity ledger
- Detected conflicts
- Canonical correction
- Prompt anchors
- Next-scene state

## Final QA

- No unexplained reset
- Timeline possible
- Props persist logically
- Invariants unchanged
- Intentional changes documented

## State dependencies and evidence

Generated assets are optional when checking planned continuity. Track character knowledge and mistaken beliefs, audience knowledge, relationship leverage and emotional residue alongside wardrobe/prop/light/position. Record stable shot and asset IDs, actual paths, revisions, accepted/draft status and reference bindings. Mark missing canon unknown.

Check first/last-frame feasibility and the match between previous exit and next entry. Re-anchor accepted references when iterative generation drifts. Prop ownership/hand, crowd density, set dressing and voice/room perspective persist unless shown changing. A local change produces an explicit downstream repair list; preserve unrelated scenes and approvals. Reading a prompt cannot prove visual continuity.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.

## Cinematic production extension

Read [continuity-delivery.md](../ai-drama-episode-producer/references/continuity-delivery.md) for this pass. If used separately, keep this reference available with the producer bundle.

Generated assets are optional for planning. Record source and target state per shot, including hand/prop ownership, geometry, character knowledge and relationship change. Keep draft events separate from approved canon. Track dependencies for local revisions. Planning checks must not be reported as visual inspection of unseen media.
