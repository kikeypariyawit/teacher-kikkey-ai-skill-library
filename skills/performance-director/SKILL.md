---
name: performance-director
description: Direct playable screen performance for AI drama through objectives, subtext, body language, gaze, rhythm, emotional transitions and shot-safe acting instructions.
version: 1.0.0
---

# performance-director

## Purpose

Translate story and dialogue into believable, intentional acting that an image/video generator can perform. Own performance beats, playable objectives, subtext, body behavior, gaze, proximity, reaction timing and emotional progression.

This skill separates **inner intensity** from indiscriminate melodrama. The user may request large theatrical emotion, but every visible action should still have a clear psychological cause.

## Use when

Use for:
- AI drama acting direction
- emotional close-ups and reaction shots
- romance, confrontation, grief, fear, revenge and power-play scenes
- inner monologue scenes
- shots that look visually correct but emotionally empty
- converting dialogue into physical performance notes
- designing acting that remains achievable in AI video generation

## Decision ownership

This skill owns:
- character objective inside the moment
- playable action verbs
- subtext and concealment
- gaze behavior
- breath and hesitation
- posture and spatial distance
- touch/contact intent
- expression progression
- reaction timing
- performance intensity curve

It does not own:
- plot causality → `ai-drama-story-engine`
- final dialogue wording → `dialogue-subtext-writer`
- camera/lens/blocking language → `cinematic-director`
- model capability or generation settings → `ai-video-model-router` / shot planner

## Core performance model

For each beat define:
- **Objective** — what the character wants from the other person right now
- **Obstacle** — what prevents them getting it
- **Tactic** — intimidate, charm, deflect, test, plead, conceal, provoke, protect, seduce, freeze out, etc.
- **Subtext** — what is felt or intended but not spoken
- **Mask** — what emotion the character is trying to show instead
- **Leak** — the involuntary detail that betrays the truth
- **Turn** — the moment the internal strategy changes

## Workflow

1. Read current emotional, relational and knowledge state from canon.
2. Define the character's moment objective and hidden fear/desire.
3. Break the scene into playable beats rather than broad emotion labels.
4. Assign one primary tactic per beat.
5. Design physical behavior:
   - gaze target and avoidance
   - breath rhythm
   - jaw/shoulder/hand tension
   - body orientation
   - distance from scene partner
   - touch or refusal to touch
   - reaction delay
6. Build an emotional progression with a clear starting state, trigger, internal processing and landing state.
7. Distinguish what should be visible from what should remain internal.
8. Simplify actions that would conflict physically or overload an AI-video shot.
9. Hand camera-independent performance intent to `cinematic-director` and model-safe motion notes to shot planning.

## Performance intensity scale

Use only when useful:
- 1 — almost hidden, micro-expression
- 2 — restrained and readable
- 3 — openly emotional but controlled
- 4 — heightened dramatic performance
- 5 — operatic / stage-level intensity

Do not set every beat to 5. Strong drama needs contrast.

## Close-up rule

For a close-up, prefer a specific emotional transition over an adjective pile.

Weak:
"She is shocked, sad, angry, devastated, cinematic."

Better:
"She holds eye contact for one second as if refusing to understand; her breath stops, lower eyelid tightens, then her gaze drops to the ring and anger replaces disbelief without a smile."

## Dialogue-performance rule

For spoken lines, define when useful:
- who the line is aimed at
- whether the character means it literally
- breath before/after the line
- interruption or hesitation
- eye contact
- physical action during or after the line
- reaction beat before the next line

Avoid stacking too many simultaneous gestures.

## Start/end-frame interaction

Performance direction should not automatically demand an end frame.
- Use start-frame anchoring when identity, pose or composition must be controlled.
- Leave subtle crying, breathing, hesitation, trembling, eye movement and emotional transition free when an end frame would stiffen the performance.
- Recommend an end frame only when the landing pose/expression is continuity-critical for the next shot.

## Output contract

For a scene return:
- performance intention by character
- beat-by-beat objectives/tactics/subtext
- visible behavior
- gaze and body-distance notes
- intensity curve
- key reaction moments
- physical-contact notes when relevant
- model-risk simplifications
- handoff notes to direction and shot planning

For a shot return a compact performance card:
- Shot ID
- Character
- Objective
- Tactic
- Starting mask
- Trigger
- Emotional turn
- Physical behavior
- Gaze
- Breath/rhythm
- Landing state
- Must-not-do behaviors

## Final QA

- Performance follows character psychology and prior state.
- Each emotional change has a trigger.
- Body language and dialogue do not contradict accidentally.
- Reactions have enough time to register.
- Intensity varies instead of staying maxed out.
- AI-video instructions are physically plausible.
- The acting direction is concrete enough to generate, but not so over-choreographed that motion becomes robotic.

## Operating rules

- Preserve approved character behavior and relationship history.
- Do not invent trauma, motives or romantic consent not supported by canon.
- Avoid generic instructions such as "act cinematic" without playable behavior.
- When the user requests theatrical inner emotion, increase commitment and readability while keeping beat causality clear.
- Keep performance notes concise enough to survive into generation prompts.