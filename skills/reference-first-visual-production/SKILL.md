---
name: reference-first-visual-production
description: Build reference-driven AI drama visuals that preserve character identity, wardrobe, locations, lighting and shot continuity while leaving composition, performance and cinematic staging creatively flexible.
version: 1.0.0
---

# reference-first-visual-production

## Purpose

Turn AI drama from prompt-first generation into a reference-first production system. The skill decides what must be visually locked, which approved asset should own each invariant, how references should be inherited from shot to shot, and what the image/video model is still free to invent.

The core principle is:

**References define the film. Prompts direct what the approved references do next.**

A reference-driven generation is not a Photoshop collage. The model still synthesizes a new image or video, but approved visual assets provide stronger anchors for identity, wardrobe, environment, state and continuity than prose alone.

## Use when

Use for:
- serialized AI drama or cinematic shorts
- recurring characters across many shots or episodes
- character-consistent keyframes
- start-frame / end-frame preparation
- image-to-video preparation
- scene anchors and location continuity
- costume continuity
- reference packs for Astra/Work or another image model
- Dreamina / Seedance / Veo / Kling or other reference-capable video workflows
- repairing face drift, wardrobe drift, set drift or lighting drift
- deciding which reference images belong in a generation request

Do not invoke this skill for a one-off unrelated image where continuity does not matter.

## Decision ownership

This skill owns:
- visual reference architecture
- reference bindings per shot
- global versus local anchors
- reference priority and conflict resolution
- visual asset reuse
- reference-budget decisions
- anchor inheritance between shots
- generation invariants versus creative freedom

It does not own:
- story causality → `ai-drama-story-engine`
- character psychology → `character-architect`
- dialogue → `dialogue-subtext-writer`
- cinematic staging/camera intent → `cinematic-director`
- motion-model shot engineering → `veo-shot-planner`
- cross-episode factual state → `continuity-supervisor`

## Reference hierarchy

Use references in this priority order unless the user explicitly overrides it:

1. **Approved Character Master** — facial identity, age impression, body identity, hair baseline
2. **Approved Costume / Look Master** — clothing, accessories, makeup, hair state when look-specific
3. **Approved Location Master** — architecture, furniture, geography, recurring set dressing
4. **Approved Scene Anchor** — scene-specific lighting, blocking baseline, atmosphere and spatial layout
5. **Previous Accepted Shot / Handoff Frame** — local continuity from the immediately preceding shot
6. **Motion / Camera / Acting Reference** — movement, pacing, blocking or camera behavior only
7. **Text Prompt** — action, emotional progression, shot-specific changes and intentional deviations

When references conflict, do not average them silently. Resolve the conflict by the hierarchy above and state the override in the shot binding.

## Global versus local references

### Global anchors
Persist across many shots or episodes:
- character master
- principal costume/look IDs
- recurring location master
- signature prop
- approved overall look bible when represented visually

### Local anchors
Apply only to a scene or adjacent shots:
- scene master frame
- previous accepted shot
- temporary injury/makeup state
- prop-in-hand state
- transient lighting/weather
- pose or blocking state

Use both when needed:

**Global anchor = who/what this is.**

**Local anchor = where the last shot left it.**

Never let local inheritance replace the global character master for long chains. Re-anchor to the global master periodically or whenever drift appears.

## Reference budget

Do not overload every generation with every available image.

Choose only references that own something the shot must preserve.

Typical budgets:
- close-up single character: character master + current look + previous shot when continuous
- two-character confrontation: both character masters + current location/scene anchor + previous shot if necessary
- establishing shot: location master + scene anchor; character refs only if characters are visually important
- costume reveal: character master + costume master + location/scene anchor
- motion-critical shot: identity refs + minimal location anchor + motion/camera reference

If a reference does not own a required invariant, omit it.

## Canonical asset states

Every reusable visual asset should have:
- stable asset ID
- role: character / look / location / scene / previous-shot / motion / prop
- status: `DRAFT`, `APPROVED`, `REJECTED`, or `SUPERSEDED`
- owner: what visual truth this asset controls
- scope: global / episode / scene / shot
- revision
- source path or file reference when available

Never treat an unapproved exploratory image as a permanent master unless the user explicitly approves it.

## Character master pack

For a principal recurring character, prefer an approved pack containing useful views rather than endlessly regenerating a fresh identity:
- clean face portrait
- 3/4 view
- side profile when useful
- full-body front
- full-body side or 3/4
- neutral expression
- several story-relevant expressions

A master pack is not a demand to attach every angle to every generation. Select only the most useful identity evidence for that shot.

The character architect defines identity invariants; this skill binds the actual approved references that represent them.

## Costume / look master pack

Create stable look IDs such as `ELARA_LOOK_A`, not vague prose such as “same dress as before.”

Each look should define:
- garment silhouette
- materials / important textures
- color family
- accessories
- hair state if look-specific
- makeup state if relevant
- episode/scene scope

A look change must be intentional and recorded. Do not allow the generator to invent a new outfit merely because the camera angle changed.

## Location master pack

Recurring locations should have enough visual coverage to establish repeatable geography, for example:
- master wide
- reverse orientation
- doorway / entrance relationship
- important furniture or prop placement
- day/night or major lighting variant when narratively needed

Location references own architecture and geography. Do not force a location reference to also own a character pose or facial expression.

## Scene anchor

Before generating many dependent shots, create or approve a scene anchor that establishes the scene-specific combination of:
- cast present
- current looks
- spatial relationship
- location state
- time/weather
- lighting direction
- overall atmosphere

The scene anchor is a bridge between global masters and individual shots.

Do not make every shot a crop of the scene anchor. The cinematic director remains free to choose new compositions and camera positions within the established geography.

## Shot reference map

Before generating a shot, produce a compact binding map:

- Shot ID
- Character master(s)
- Look master(s)
- Location master
- Scene anchor
- Previous-shot handoff frame
- Optional motion/camera reference
- Must preserve
- Allowed to change
- Intentionally changed

Example logic:

`EP01-S01-SH03`
- Character: `ELARA_MASTER_R2`
- Look: `ELARA_LOOK_A_R1`
- Location: `BEDROOM_MASTER_R3`
- Scene anchor: `EP01-S01-ANCHOR_R1`
- Previous: `EP01-S01-SH02-END_ACCEPTED`
- Preserve: face, hair, dress, room geography, morning light direction
- Change: framing, hand pose, eye focus, emotional intensity
- Intentional delta: fear -> recognition

## Prompt construction rule

Do not use the prompt to redundantly redesign what the references already own.

Structure a reference-driven image prompt in this order:

1. bind each reference to its role
2. state immutable preservation requirements
3. describe the new action / pose / interaction
4. direct emotional progression
5. specify composition / camera intent supplied by the cinematic pass
6. specify scene light / atmosphere only where it changes or must be reinforced
7. state what is allowed to change
8. add only relevant negative constraints

Example pattern:

“Use Character Ref A as the identity source for Elara. Use Look Ref B for her current wardrobe. Use Location Ref C for the bedroom architecture and Scene Anchor D for morning-light direction. Preserve facial identity, hairstyle, dress construction and room geography. Change only pose, expression and framing: Elara raises both hands and studies them, moving from confusion to recognition. Medium close-up, slow visual tension, same morning-light direction. Do not redesign the face, clothing or set.”

Do not rely on phrases such as “same character” when actual approved references exist.

## Creative-freedom rule

Lock only what must remain continuous.

Keep the generator/director free to create:
- composition
- lens nuance
- micro-lighting variation compatible with the scene
- facial performance within the requested emotion
- natural body mechanics
- cinematic foreground/background choices
- atmosphere and texture

unless one of these is explicitly continuity-critical.

A good reference system should increase consistency without making every shot visually identical.

## Anchor inheritance

For directly continuous shots:

1. begin from approved global masters
2. bind the current scene anchor
3. use the previous accepted shot or its useful handoff frame as a local reference
4. generate the next keyframe
5. accept/reject before it becomes a downstream anchor
6. carry only accepted state forward

Do not create a long chain where Shot 12 derives only from Shot 11, which derives only from Shot 10, etc. That compounds drift. Periodically re-bind the original global character/look/location masters.

## Start-frame and end-frame logic

This skill prepares visual references; `veo-shot-planner` decides final motion engineering.

General guidance:
- use a start frame when identity, pose, composition, wardrobe, set state or screen direction needs control
- add an end frame only when the destination state materially matters
- avoid over-locking subtle acting, dialogue, crying, breathing or organic movement merely for consistency
- for performance shots, prefer a strong start anchor plus clear emotional direction when an end frame would make motion stiff

## Reference roles for video

When a video system supports multiple reference types, assign roles explicitly rather than assuming the system will infer them:
- identity reference
- wardrobe reference
- environment reference
- start frame
- end frame
- motion reference
- camera reference
- acting/pacing reference
- audio/voice reference when supported

Do not claim a provider supports a reference type without current evidence. Universal production logic remains model-neutral.

## Repair strategy

When a generation is mostly successful, do not regenerate everything by default.

Classify the failure:
- identity drift
- wardrobe drift
- location drift
- composition failure
- expression/performance failure
- prop/state failure
- camera/motion failure

Then preserve approved parts and repair the smallest failing ownership layer.

Examples:
- correct scene, wrong face → strengthen/rebind character master; preserve scene anchor
- correct face, wrong clothing → rebind look master; do not redesign character
- correct cast, wrong room geometry → strengthen location anchor
- correct start image, stiff motion → loosen/remove end-frame lock; do not rebuild character masters

## Reference QA scorecard

Before generation, check:
- identity owner present where needed
- current look owner present where needed
- location owner present where needed
- previous-shot state bound when continuity requires it
- no conflicting approved refs
- no unnecessary refs
- must-preserve versus allowed-to-change fields are explicit
- references are approved or clearly marked draft

After generation, when the actual media is available, check separately:
- face match
- hair match
- wardrobe match
- location/geography match
- lighting continuity
- prop/state continuity
- pose and screen direction
- emotional progression

Planning QA is not visual proof. Never claim an unseen generated asset passed visual QA.

## Output contract

For a project setup return:
- reference architecture
- required master packs
- stable asset IDs
- approval status
- missing anchors
- reference hierarchy

For a scene return:
- scene anchor plan
- shot reference map
- global/local reference bindings
- must-preserve / allowed-to-change rules
- re-anchoring points

For a single shot return:
- minimal reference set
- role of each reference
- reference-driven keyframe prompt
- handoff state to the motion planner
- likely drift risks and repair strategy

## Handoff to other skills

### To `cinematic-director`
Provide visual invariants and current scene geography, not camera choices unless already approved.

### To `veo-shot-planner`
Provide selected start/keyframe asset, optional end-frame candidate, actual reference IDs/paths, must-preserve state and local handoff state.

### To `continuity-supervisor`
Provide accepted asset IDs and any intentional visual-state changes that become canon.

## Golden rules

1. Reference first; prompt second.
2. Approved assets are reusable production assets, not disposable inspiration.
3. Global masters prevent identity drift; previous-shot refs prevent local discontinuity.
4. Never let a chain of previous shots replace the original master indefinitely.
5. Attach only references that own something important in the current shot.
6. Lock invariants; leave cinematic creativity unlocked.
7. Repair the failing layer instead of rerolling the whole image whenever possible.
8. Do not confuse textual memory with actual visual identity evidence.
9. Do not claim a reference was used, inspected or approved when the asset is unavailable.
10. Provider-specific capabilities, prices and model versions are volatile and must be verified separately.
