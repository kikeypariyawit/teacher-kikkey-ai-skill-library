---
name: veo-shot-planner
description: Plan AI-video shots and decide when start/end frames are useful while keeping action fluid and prompts model-friendly.
version: 1.0.0
---

# veo-shot-planner

## Purpose

Plan AI-video shots and decide when start/end frames are useful while keeping action fluid and prompts model-friendly.

## Use when

Use for Veo/Flow shot breakdowns, start/end-frame planning, image-to-video shots, scene continuity, or prompt packs.

## Required inputs

- Script/scene
- Character/location references
- Target model
- Shot duration
- Available start/end images

## Workflow

1. Break the scene into the fewest shots needed for clarity and emotion.
2. For each shot decide text-to-video, start-frame only, start+end frame, or reference-driven generation.
3. Use start/end frames only when identity, spatial continuity, object state, transition destination, or exact composition materially benefits.
4. Avoid locking both frames when it would make movement stiff.
5. Describe subject action first, then camera movement, environment motion, performance, and atmosphere.
6. Carry only continuity-critical details between prompts.
7. Mark likely failure modes and fallback generation.

## Output contract

- Shot/duration
- Generation mode
- Start-frame need
- End-frame need
- Prompt
- Continuity anchor
- Fallback

## Final QA

- No unnecessary frame locking
- Action-forward prompts
- Continuity preserved
- Shot count supports pacing
- Model constraints respected

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
