---
name: continuity-supervisor
description: Maintain character, wardrobe, prop, location, timeline, screen-direction, and story-state continuity across AI-generated episodes and shots.
version: 1.0.0
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

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
