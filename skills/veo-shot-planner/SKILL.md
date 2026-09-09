---
name: veo-shot-planner
description: Engineer generation-ready AI-video shots, choose start/end-frame strategy, route still/keyframe versus motion generation, and produce continuity-safe prompt packs with fallbacks.
version: 2.1.0
---

# veo-shot-planner

## Purpose

Turn an approved script/cinematic scene into the fewest reliable AI-video shots needed for clarity, emotion, pace, and continuity. Own shot engineering, generation mode, frame strategy, prompt structure, continuity anchors, and fallback plans.

## Use when

Use for:
- Veo / Flow shot breakdowns
- start-frame and end-frame planning
- image-to-video or reference-driven shots
- model routing between still/keyframe and motion generation
- scene continuity and transition control
- prompt packs for AI-video production

## Required inputs

Use the best available combination of:
- approved script/scene
- cinematic staging intent
- approved character/location references
- target motion model
- available still/keyframe model
- target duration/aspect ratio
- dialogue/audio requirements
- available start/end images
- continuity state from prior shot/episode

Do not require generated video to exist before planning.

## Workflow

1. **Assign stable IDs**
   - use scene and shot IDs that survive revisions, such as `EP03-S02-SH04`
   - do not renumber unrelated shots unnecessarily after a local revision

2. **Define the dramatic beat**
   For each shot state what changes: information, emotion, power, danger, attraction, decision, reveal, or spatial understanding.

3. **Use the fewest shots that work**
   - avoid overcutting because each extra generation increases continuity risk
   - split only when a performance beat, spatial change, reveal, transition, or generation limitation justifies it

4. **Choose generation mode**
   Select one:
   - text-to-video
   - reference-driven video
   - start-frame only
   - start + end frame
   - still/keyframe generation only

5. **Route models by job**
   - use the user-specified motion model for moving shots
   - when a separate still/keyframe generator is available, prefer it for character references, exact compositions, start frames, end frames, inserts, and difficult identity-critical frames
   - when the project specifically uses a still model plus Veo/Flow, do not ask the motion model to recreate a frame that is better locked as a still asset
   - do not hard-code model versions into this universal skill

6. **Decide frame locking**
   Use a start frame when identity, composition, wardrobe, prop state, screen direction, environment, or pose needs control.

   Add an end frame only when the destination materially matters, for example:
   - exact reveal composition
   - required object state
   - transition match
   - pose/position needed by the next shot
   - identity-critical close-up destination
   - difficult wardrobe/hair change that must land correctly

   Avoid start+end locking when it makes organic acting, walking, kissing, fighting, cloth/hair motion, or camera movement unnaturally stiff.

7. **Design start/end frame prompts before the video prompt**
   Frame prompt order:
   - character identity anchor
   - wardrobe/hair/makeup state
   - body pose and expression
   - interaction / prop state
   - composition and lens feel
   - location/time/light
   - continuity-critical constraints

8. **Write the video prompt action-first**
   Preferred order:
   - subject action and performance
   - physical interaction
   - camera behavior
   - environment motion
   - emotional tone
   - lighting/atmosphere
   - dialogue/lip-sync/audio instruction when supported/required
   - continuity constraints

   Describe what should happen, not a long list of adjectives.

9. **Control performance**
   - specify gaze, breathing, hesitation, touch, hand placement, body distance, reaction timing, and emotional transition only when they matter
   - avoid impossible simultaneous actions
   - for intimate or high-emotion scenes, prioritize believable body mechanics and clear consent/context implied by the script rather than excessive choreography

10. **Protect continuity**
   Carry only critical anchors:
   - face/identity
   - hair state
   - wardrobe and accessories
   - injuries/makeup
   - prop hand/state
   - screen direction and relative positions
   - location/time/weather/light
   - relationship/emotional state when it affects performance

11. **Identify likely failure modes**
   Examples:
   - face drift
   - extra fingers/limbs
   - prop teleportation
   - hand-through-body contact
   - wardrobe mutation
   - screen-direction reversal
   - overactive camera
   - stiff start/end interpolation
   - lip-sync conflict
   - unwanted smiling or wrong emotional intensity

12. **Provide a fallback**
   Prefer one of:
   - simplify camera movement
   - shorten action
   - split one shot into two
   - remove unnecessary end-frame lock
   - create a stronger start frame
   - use an insert/reaction shot to bridge continuity
   - change from text-to-video to reference-driven generation

## Output contract

For each shot return:
- Shot ID
- Duration target
- Dramatic beat
- Composition / shot size / camera intent
- Generation tool/model role
- Generation mode
- Start-frame: yes/no + reason
- Start-frame prompt if needed
- End-frame: yes/no + reason
- End-frame prompt if needed
- Ready-to-paste video prompt
- Dialogue / audio / SFX note
- Continuity anchors
- Negative constraints / failure risks
- Fallback plan
- Handoff state to next shot

For a full episode also return a compact master shot table before the detailed prompt pack.

## No-upload dependency rule

Pre-generation planning must never require the user to upload a generated video. If no video exists, complete the shot plan, frame prompts, video prompts, continuity notes, and generation-risk QA. Reviewing the generated result is a separate optional post-generation pass.

## Final QA

- Every shot has a clear dramatic purpose.
- Shot count is low enough to reduce continuity risk but high enough for pacing and clarity.
- Start/end frames are justified, not automatic.
- Prompts are action-forward and paste-ready.
- Character and wardrobe identity are explicit where needed.
- Body mechanics and spatial relationships are plausible.
- Camera instructions do not fight the character action.
- Handoff state is clear for the next shot.
- Risky shots have practical fallbacks.
- Model routing matches the project's stated tools without hard-coding obsolete versions.

## Motion-preserving frame and render strategy

Read [frame-and-generation-strategy.md](references/frame-and-generation-strategy.md) for prompt packs or rendered sequences. Verify the exact provider surface and model before asserting settings, limits, price, audio or reference support; record source and date in project adapters. Continue model-neutral planning when a label is unresolved. A new still generator does not imply video support.

Each final prompt must bind actual references and expand relevant identity/location details. Separate generated duration, edit duration and handles. Keep Thai speech plus listening and action within time. Pilot the hardest representative shot and change strategy after two failed repairs of the same issue. Distinguish requested prompts from assets actually generated and inspected.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing references, asset approvals, model capabilities, or generated results.
- Stable skill rules must not hard-code volatile model versions, prices, or project facts.
- Prefer finished prompt packs over generic prompt-writing advice.
- Reuse approved frames and character references rather than recreating them without reason.
- If a requested external generation action is unavailable, finish all planning and prompt assets and state only the blocked action.
