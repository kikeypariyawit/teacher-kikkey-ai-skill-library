---
name: veo-shot-planner
description: Engineer generation-ready AI-video shots from an approved model route, choose start/end-frame strategy, build motion-safe prompt packs, and preserve continuity with practical fallbacks.
version: 3.1.0
---

# veo-shot-planner

## Purpose

Turn an approved script/cinematic scene and model-routing decision into the fewest reliable AI-video shots needed for clarity, emotion, pace and continuity. Own shot engineering, frame strategy, prompt structure, continuity anchors, generated-versus-used duration and shot-level fallback design.

`ai-video-model-router` owns which provider/model/tool should perform the shot. This skill consumes that routing decision and adapts the shot to it. If no route exists, keep planning model-neutral or request/trigger routing rather than inventing current capabilities.

## Use when

Use for:
- Veo / Flow-style shot breakdowns
- Seedance / Omni / Kling or mixed-model shot packs after routing
- start-frame and end-frame planning
- image-to-video or reference-driven shots
- scene continuity and transition control
- generation-ready prompt packs

## Required inputs

Use the best available combination of:
- approved script/scene
- retention function when relevant
- approved performance beat
- cinematic staging intent
- reference-first asset bindings
- primary/fallback model route when available
- target duration/aspect ratio
- dialogue/audio requirements
- continuity state from prior shot/episode

Do not require generated video to exist before planning.

## Decision ownership

This skill owns:
- shot decomposition
- generation mode within the approved route
- start/end-frame necessity
- frame prompt construction
- motion prompt construction
- shot duration / edit handle logic
- shot-specific continuity anchors
- prompt-safe simplification
- fallback engineering when the same route can be repaired

It does not own:
- story → `ai-drama-story-engine`
- vertical retention → `vertical-drama-retention-director`
- acting objectives → `performance-director`
- camera intent → `cinematic-director`
- reference ownership → `reference-first-visual-production`
- provider/model choice → `ai-video-model-router`

## Workflow

1. **Assign stable IDs**
   - use scene and shot IDs that survive revisions, such as `EP03-S02-SH04`
   - do not renumber unrelated shots unnecessarily

2. **Define the dramatic beat**
   State what changes: information, emotion, power, danger, attraction, decision, reveal or spatial understanding.

3. **Read the performance handoff**
   Preserve objective, tactic, gaze, reaction timing and landing state without over-choreographing every micro-movement.

4. **Read the cinematic handoff**
   Preserve approved blocking, composition/camera intent, light direction and geography.

5. **Read the reference map**
   Resolve Character Masters, Look Masters, Location Master, Scene Anchor and previous accepted handoff frame when relevant.

6. **Consume model routing**
   Record:
   - primary tool/model role
   - evidence status
   - fallback route
   - capability constraints actually verified for the selected interface

   Do not infer unsupported controls from the model name alone.

7. **Use the fewest shots that work**
   Avoid overcutting because each extra generation increases continuity risk. Split only when performance, geography, reveal, transition or generation reliability justifies it.

   For grand scenes, read [grand-scene-decomposition.md](references/grand-scene-decomposition.md). If the same shot combines several high-complexity dimensions (multiple named identities, dense crowd, complex contact, camera path, VFX, dialogue and exact landing state), decompose the scene before adding prompt length.

8. **Choose generation mode inside the route**
   Select one when supported:
   - text-to-video
   - reference-driven video
   - start-frame only
   - start + end frame
   - image-to-video
   - still/keyframe generation only

9. **Decide frame locking**
   Use a start frame when identity, composition, wardrobe, prop state, screen direction, environment or pose needs control.

   Add an end frame only when destination state materially matters:
   - exact reveal composition
   - required object state
   - transition match
   - pose/position needed by the next shot
   - identity-critical landing frame

   Avoid start+end locking when it makes organic acting, crying, breathing, walking, fighting, kissing, cloth/hair motion or camera movement unnaturally stiff.

10. **Design frame prompts before motion prompts**
   Frame prompt order:
   - explicit reference roles / identity anchor
   - wardrobe/hair/makeup state
   - body pose and expression
   - interaction / prop state
   - composition and camera intent
   - location/time/light
   - continuity-critical constraints
   - allowed-to-change fields where useful

11. **Write video prompt action-first**
   Preferred order:
   - subject action and performance progression
   - physical interaction
   - camera behavior
   - environment motion
   - emotional tone
   - lighting/atmosphere
   - dialogue/lip-sync/audio instruction only when supported/required
   - continuity constraints

12. **Protect performance**
   Use concrete behavior such as gaze, breath, hesitation, touch, hand placement, body distance and reaction timing only where it matters. Avoid impossible simultaneous actions or adjective piles.

13. **Protect continuity**
   Carry only critical anchors:
   - face/identity
   - hair state
   - wardrobe/accessories
   - injuries/makeup
   - prop hand/state
   - screen direction / relative positions
   - location/time/weather/light
   - emotional landing state when it affects the next shot

14. **Separate generated duration from edit duration**
   Record:
   - generated duration target
   - intended edit in/out or usable duration
   - handles when useful

   Runtime is based on the final edit, not the sum of all raw generation lengths.

15. **Identify likely failure modes**
   Examples:
   - face drift
   - extra limbs/fingers
   - prop teleportation
   - wardrobe mutation
   - screen-direction reversal
   - overactive camera
   - stiff interpolation
   - lip-sync conflict
   - wrong emotional intensity

16. **Provide a fallback**
   First try shot-level repairs compatible with the route:
   - simplify camera movement
   - shorten action
   - split one shot into two
   - remove unnecessary end-frame lock
   - create a stronger start frame
   - use an insert/reaction bridge

   If repeated failure indicates the model/route itself is wrong, hand back to `ai-video-model-router` instead of endlessly rewriting the prompt.

## Output contract

For each shot return:
- Shot ID
- Generated duration target
- Intended edit duration / handles when useful
- Dramatic beat
- Retention function when applicable
- Performance turn
- Composition / shot size / camera intent
- Reference owners / asset IDs
- Primary routed model/tool + evidence status
- Generation mode
- Start-frame: yes/no + reason
- Start-frame prompt if needed
- End-frame: yes/no + reason
- End-frame prompt if needed
- Ready-to-paste video prompt
- Dialogue / audio / SFX note
- Continuity anchors
- Negative constraints / failure risks
- Shot-level fallback
- Re-route trigger
- Handoff state to next shot

For a full episode, return a compact master shot table before the detailed prompt pack.

## No-upload dependency rule

Pre-generation planning must never require the user to upload a generated video. If no video exists, complete the shot plan, frame prompts, video prompts, continuity notes and generation-risk QA. Reviewing generated results is a separate optional pass.

## Final QA

- Every shot has a clear dramatic purpose.
- Shot count is low enough to reduce continuity risk but high enough for pace and clarity.
- Grand scenes are decomposed only where doing so protects identity, geography, emotion or model reliability.
- Approved performance turns remain playable.
- Start/end frames are justified, not automatic.
- Prompts are action-forward and paste-ready.
- Character/reference ownership is explicit where needed.
- Body mechanics and spatial relationships are plausible.
- Camera instructions do not fight the character action.
- Handoff state is clear for the next shot.
- Model capability assumptions match the router's evidence status.
- Risky shots have practical fallbacks or clear re-route triggers.

## Operating rules

- Preserve explicit user constraints over defaults.
- Do not invent references, approvals, provider controls, model capabilities or generated results.
- Stable skill rules must not hard-code volatile model versions, prices or provider limits.
- Prefer finished prompt packs over generic prompt-writing advice.
- Reuse approved frames and references rather than recreating them without reason.
- If a requested external generation action is unavailable, finish all planning and prompt assets and state only the blocked action.

## Cinematic production extension

Read [shot-prompts.md](../ai-drama-episode-producer/references/shot-prompts.md), [frame-and-generation-strategy.md](references/frame-and-generation-strategy.md), and [grand-scene-decomposition.md](references/grand-scene-decomposition.md) as relevant. Verify the exact provider, model and interface before asserting settings, limits, duration, references or audio support. Record volatile evidence in project adapters rather than this stable skill.