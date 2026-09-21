---
name: cinematic-director
description: Translate approved story and performance beats into cinematic staging, camera, lighting, blocking, production design and emotional visual language for AI film production.
version: 4.0.0
---

# cinematic-director

## Purpose

Translate approved story, reference constraints, performance intent and (when present) production-design/set-piece handoffs into filmable cinematic staging. Own blocking, camera grammar, lighting, reveal strategy, spatial geography, visual motifs, edit intent and sound-image relationships.

`performance-director` owns playable acting. This skill **supports and photographs the performance** rather than independently redefining the character's inner objective, tactic or emotional turn.

## Use when

Use for:
- scene direction and visual storytelling
- blocking and screen geography
- camera grammar and composition
- production design usage and location staging
- lighting and atmosphere
- visual reveals and set-piece execution
- translating a grand-scene handoff into readable camera/blocking coverage
- turning an approved script/performance map into a filmable sequence

## Required inputs

Use the best available combination of:
- approved scene/script
- character bible and current continuity state
- reference-first visual invariants / scene anchor
- performance map when performance is important
- location geometry
- tone/look bible
- broad generation constraints

## Decision ownership

This skill owns:
- blocking and spatial relationships
- camera position / shot-size logic / visual point of view
- reveal strategy
- lens/composition intent
- lighting logic
- production design usage after environment identity is established
- environment staging
- edit intent and visual transitions
- sound cues tied to direction

It does not own:
- plot causality → `ai-drama-story-engine`
- vertical attention architecture → `vertical-drama-retention-director`
- character psychology → `character-architect`
- dialogue wording → `dialogue-subtext-writer`
- playable acting objectives/tactics → `performance-director`
- visual reference ownership → `reference-first-visual-production`
- recurring location architecture/material identity → `ai-production-designer`
- large-scene dramatic scale/geography/crowd architecture → `cinematic-setpiece-director`
- provider/model choice → `ai-video-model-router`
- generation-mode/frame engineering → `veo-shot-planner`

## Workflow

1. Identify the emotional center and visual point of view.
2. Read performance beats and preserve their triggers/turns.
3. Read reference-first invariants and location geometry.
4. If `ai-production-designer` was used, preserve its structural anchors, practical light sources and population logic. If `cinematic-setpiece-director` was used, preserve its human anchor, reveal hierarchy, hero image, geography and complexity constraints.
5. Stage blocking so distance, orientation and movement express relationships.
6. Choose camera grammar based on story/performance function, not decoration.
7. Design reveals, foreground/background use and composition changes around audience knowledge.
8. Use lighting, production design, weather and sound as narrative tools.
9. Maintain screen direction, geography and action continuity.
10. Keep shot intentions clear enough for downstream AI-video engineering.

## Performance-support rule

Do not replace the performance map with generic acting adjectives.

Instead specify how staging supports acting, for example:
- hold a close-up through the delayed reaction
- keep the antagonist soft in foreground while the protagonist processes the reveal
- preserve physical distance until the character chooses to cross it
- delay camera movement until the emotional turn lands

If the camera choice would make the approved performance unreadable or physically implausible, revise the camera/blocking plan rather than silently rewriting the acting objective.

## Output contract

- Director intent
- Scene geography / blocking
- Camera grammar and composition plan
- Reveal strategy
- Performance-support notes
- Lighting / production design
- Edit intent
- Sound cues
- Continuity risks
- Handoff notes to `ai-video-model-router` and shot planning

## Final QA

- Every camera choice has a dramatic purpose.
- Blocking preserves believable action and relationship distance.
- Approved performance turns remain readable.
- No impossible geography or screen-direction break.
- Lighting and design support story rather than decorate it.
- Scale is concentrated where dramatically useful.
- In grand scenes, the principal performance remains readable and camera ambition does not exceed the complexity budget without justification.
- Direction is specific without over-constraining motion generation.

## Premium cinematic craft

Read [cinematic-production.md](references/cinematic-production.md) for ambitious scenes and full episodes. For true signature set pieces, consume `cinematic-setpiece-director` first rather than duplicating its dramatic-scale decisions. For major recurring environments, consume `ai-production-designer` first rather than reinventing architecture shot by shot. Own the look bible, world/production design, set-piece geography, camera/light logic and edit/sound intent. Specify observable choices rather than stacking “cinematic, masterpiece, 8K” adjectives. Keep intimate dramatic truth legible within spectacle, and protect requested scale with feasible coverage.

## Operating rules

- Preserve explicit user constraints over defaults.
- Preserve approved performance intent unless a physical/geographic contradiction requires a flagged repair.
- Do not invent missing facts, references or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to model routing and shot engineering.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.

## Cinematic production extension

Read [prestige-direction.md](../ai-drama-episode-producer/references/prestige-direction.md) for this pass. Translate a “100-million production” request into a coherent look bible, repeatable location geometry, authored design, motivated lighting, selective spectacle, camera/blocking plans, edit map and sound cues. Treat the phrase as an artistic target, not a factual budget or spending authorization.