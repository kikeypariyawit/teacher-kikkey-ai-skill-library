---
name: character-architect
description: Build original, production-ready fictional characters with distinctive psychology, visual identity, behavior, voice, long-term arc, and reference-ready identity invariants.
version: 2.1.0
---

# character-architect

## Purpose

Build original, production-ready fictional characters with distinctive psychology, visual identity, behavior, voice, long-term arc, and a clean identity specification that can be represented by approved visual references.

## Use when

Use for Character creation, redesign, character bibles, cast differentiation, AI image/video consistency references, and creation of Character Master requirements.

## Required inputs

- Role in story
- Genre/tone
- Age range/general appearance
- Narrative function
- Constraints

## Workflow

1. Define external goal, internal need, wound, fear, secret, moral line, and contradiction.
2. Create recognizable behavioral tells, speech rhythm, and stress behavior.
3. Build relationships through asymmetric wants and leverage.
4. Define visual identity with silhouette, wardrobe logic, grooming, and recurring props without copying a real person.
5. Separate **identity invariants** from **scene-changeable traits**.
6. Define the minimum Character Master Pack needed to visually represent the approved identity.
7. Write an arc built on meaningful decisions.
8. Hand approved identity invariants and reference requirements to `reference-first-visual-production`; do not make each downstream shot redesign the character from prose.

## Identity invariants versus mutable state

### Identity invariants
These should remain stable unless the user explicitly redesigns the character:
- facial proportions and recognizable identity
- age impression
- body identity / general proportions
- baseline hair identity
- distinctive permanent marks when story-relevant
- core silhouette logic

### Mutable state
These may change intentionally by episode/scene:
- expression
- pose
- wardrobe/look ID
- temporary hair styling
- makeup
- injury state
- dirt/wetness
- lighting
- emotional intensity

Do not encode temporary state as permanent identity.

## Character Master Pack contract

For principal recurring characters, define a preferred master pack rather than endlessly regenerating a new face. Typical useful assets:
- clean face portrait
- 3/4 portrait
- side profile when useful
- full-body front
- full-body side or 3/4
- neutral expression
- story-relevant expression references

The pack defines what visual evidence is useful; it does **not** mean every image must be attached to every generation. `reference-first-visual-production` chooses the smallest useful subset per shot.

Record for each approved master asset when available:
- stable asset ID
- angle/view
- approval status
- revision
- what identity truth it owns
- path/file reference

Text descriptions help define identity but do not replace actual approved visual references when visual continuity is required.

## Output contract

- Character summary
- Psychology
- Voice
- Visual bible
- Relationship dynamics
- Arc
- Identity invariants
- Mutable state categories
- Character Master Pack requirements
- Approved reference IDs/paths when available

## Final QA

- Distinct from cast
- No celebrity dependency
- Motivation supports plot
- Visual traits reproducible
- Identity invariants are separated from temporary styling/state
- Reference pack is sufficient but not redundant
- Arc has causal decisions

## Ensemble and performance bible

Separate immutable identity and actual reference assets from mutable expression, pose, costume state and light. Record character ID, approved face references, useful angles, body presence, wardrobe IDs, voice ID, stress behavior, baseline/trigger/peak/recovery and relationship-specific distance/register. Text or seed repetition does not guarantee identity.

For every principal include want, need, wound, lie/belief, secret, moral boundary, contradiction, sacrifice and decisions that change the arc. Distinguish the ensemble by strategy, rhythm, silhouette and behavior, not only clothing color. Antagonists need motives and limits. Preserve established approvals; do not recast characters during an episode upgrade. Track who knows which secret and when they learn it.

## Reference-first handoff

When an identity has been approved:
- stop redesigning it during shot generation
- hand the approved Character Master IDs to `reference-first-visual-production`
- let look/costume masters own wardrobe state
- let scene anchors own scene-specific light and environment
- let prompts own action, expression progression and intentional shot changes

If a downstream image drifts, classify whether the failure is identity or temporary styling before changing the character bible. Do not rewrite the canonical character because one generation failed.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.

## Cinematic production extension

Read [story-performance.md](../ai-drama-episode-producer/references/story-performance.md) for this pass. If used separately, keep this reference available with the producer bundle.

Separate identity, approved looks and changing emotional/knowledge state. Differentiate cast through silhouette, gesture, voice and behavior. A makeover must preserve facial identity. Record reference filenames and approval evidence; a prose description cannot verify an unavailable approved face.
