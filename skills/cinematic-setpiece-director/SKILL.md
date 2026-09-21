---
name: cinematic-setpiece-director
description: Design emotionally necessary large-scale AI-drama sequences with coherent geography, reveal hierarchy, crowd logic, hero images, practical coverage and a reduced-complexity fallback.
version: 1.0.0
---

# cinematic-setpiece-director

## Purpose

Design signature cinematic sequences that feel large, expensive and authored while remaining practical for AI-video production.

This skill owns **set-piece architecture**. It does not own final provider choice or prompt syntax.

## Use when

Use for:
- prestige / epic / grand scenes
- ceremonies, galas, campus orientation, public confrontations, mansion reveals, hospital emergencies, escapes, storms, fires, fantasy reveals or large environments
- scenes with crowd, architecture, event choreography or strong visual scale
- "production 100 million" style requests
- scenes repeatedly failing because too many things are packed into one generation

Do not invoke for an ordinary two-person dialogue scene unless scale is a meaningful story function.

## Decision ownership

This skill owns:
- why the scene needs scale
- set-piece dramatic spine
- geography and reveal hierarchy
- hero image / signature visual
- human anchor inside spectacle
- crowd/event zones
- coverage architecture
- reduced-complexity fallback that preserves the story turn

It does not own:
- plot causality → ai-drama-story-engine
- actor psychology/tactics → performance-director
- detailed production design → ai-production-designer
- camera/light execution → cinematic-director
- current provider/model choice → ai-video-model-router
- generation prompt engineering → veo-shot-planner

## Required inputs

Use the best available combination of:
- approved scene purpose and story turn
- current canon and continuity state
- performance beat
- location/world constraints
- target runtime and aspect ratio
- available reference assets
- known generation constraints

## Workflow

### 1. State the dramatic reason for scale
Complete:
"Without the large environment/event/crowd, this scene would lose ______."

If nothing meaningful is lost, scale may be decorative.

### 2. Build the set-piece spine
Use:
**objective → geography → obstacle → tactic → reversal → costly choice → aftermath**

Every stage should alter what the protagonist can do.

### 3. Establish the human anchor
Define:
- whose experience organizes the sequence
- what they notice first
- what they fail to notice
- what changes their decision
- where the audience must read the face clearly

### 4. Design reveal hierarchy
Order what the viewer learns:
- first impression
- withheld spatial fact
- social/crowd information
- decisive reveal
- consequence

Do not reveal the entire location and story state at once unless that is the intended shock.

### 5. Map geography
Define:
- entrances/exits
- protagonist path
- antagonist/ally zone
- crowd zones
- stage/platform/stairs/door/window anchors
- action axis
- safe camera sides
- where the decisive beat lands

### 6. Assign one hero image
The hero image should combine:
- scale
- character state
- story meaning

Examples:
- a first-year student tiny beneath a three-story atrium while every table is already full
- a daughter alone at the foot of an awards stage while hundreds turn toward her
- a protagonist crossing a smoke-filled corridor toward one trapped person

### 7. Build coverage, not one impossible shot
Default coverage pattern:
1. geography/scale master
2. protagonist anchor
3. controlled movement/approach
4. decisive interaction or reveal
5. insert/evidence if required
6. reaction/consequence
7. aftermath/exit state

Use fewer shots when possible. Add shots only when they protect clarity, emotion or generation reliability.

### 8. Crowd logic
Divide extras into readable zones:
- static/low-motion background
- one or two medium-motion groups
- limited foreground crossings
- selected reaction group

Avoid bespoke synchronized behavior across the whole crowd.

### 9. Complexity budget
Mark each beat low / medium / high for:
- identities
- contact/choreography
- camera motion
- crowd motion
- VFX
- prop continuity
- exact landing state

If too many dimensions are high in one shot, split the coverage.

### 10. Reduced-complexity fallback
Create a fallback that preserves:
- the same decision
- the same reveal
- the same emotional power

Reduce only:
- crowd specificity
- camera complexity
- simultaneous choreography
- VFX density
- number of visible named characters

Do not reduce the story stakes just to make generation easier.

## Output contract

Return:
- Set-piece title / scene ID
- Dramatic reason for scale
- Set-piece spine
- Human anchor
- Reveal hierarchy
- Geography map in text
- Hero image
- Crowd/event zones
- Coverage architecture
- Complexity map
- Critical continuity anchors
- Primary cinematic risks
- Reduced-complexity fallback
- Handoff to ai-production-designer / cinematic-director / model router / shot planner

## Final QA

- Scale changes the story, not just the background.
- Geography is understandable.
- The protagonist remains emotionally readable.
- Crowd behavior is zoned and plausible.
- There is one memorable hero image.
- The decisive beat is not buried under motion.
- Coverage can be split into practical AI generations.
- Fallback preserves the same story turn.
- No provider capability is invented.

## Operating rules

- Preserve approved canon and references.
- Do not redesign characters while solving spectacle.
- Prefer authored spatial logic over adjective-heavy prompts.
- Use the fewest shots that preserve scale and clarity.
- Treat "100-million production" as an artistic ambition, not a budget claim.
- For current provider capabilities, hand off to ai-video-model-router with evidence status.
