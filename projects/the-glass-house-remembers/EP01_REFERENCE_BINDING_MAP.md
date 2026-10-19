# EP01 — REFERENCE BINDING MAP

Status: DRAFT SPEC READY FOR GENERATION
Episode: THE PORTRAIT
Purpose: define which approved visual assets own identity, wardrobe, location, lighting and prop truth for each EP01 shot.

## Global rule
Use only the minimum references that own required invariants. Do not attach every asset to every generation. Global masters remain the identity source; previous-shot handoffs are local continuity aids only.

## SHOT 01 — THE EYE
Primary references:
- `EVELYN_PORTRAIT_R1_SMOKE_DAMAGED` — underlying portrait identity/state
- `EVELYN_PORTRAIT_R1_EYE_REVEAL` — target reveal state if still-first route is used
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1` — light/atmosphere only
Optional:
- `MARA_LOOK_EP01_R1` only if enough hand/arm is visible to require sleeve/glove continuity
Must preserve: authentic oil texture, soot/dark varnish, warm restoration light, same portrait identity.
Allowed to change: macro framing, exact swab path, micro dust, shallow-focus behavior.
Do not require Mara face reference because her face is not visible.

## SHOT 02 — MATCH
Primary references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `EVELYN_PORTRAIT_R1_EYE_REVEAL`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
Must preserve: Mara facial identity, eye color family, current hair/wardrobe, painted-eye identity, light direction.
Allowed to change: profile angle, rack-focus emphasis, micro-expression.
Intentional delta: neutral concentration -> recognition.
Previous-shot handoff: optional Shot 01 accepted end frame for local portrait state.

## SHOT 03 — THE FACE EMERGES
Primary references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `EVELYN_PORTRAIT_R1_PARTIAL_FACE`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
Must preserve: both identities, Mara/Evelyn resemblance relationship, portrait oil texture, easel location, warm/cold lighting relationship.
Allowed to change: Mara hand placement, lateral camera position, emotional intensity.
End-frame requirement: YES. The accepted end frame becomes local handoff for Shots 04–07 portrait restoration state.

## SHOT 04 — ADRIAN ENTERS
Primary references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `ADRIAN_CHARACTER_MASTER_R1`
- `ADRIAN_LOOK_EP01_R1`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
- `EVELYN_PORTRAIT_R1_PARTIAL_FACE`
Optional local:
- Shot 03 accepted end frame
Must preserve: face identities, current looks, doorway/easel geography, portrait restoration state, screen direction.
Allowed to change: conversational blocking, distance between characters, framing/lens nuance, performance.
Do not lock an end frame; dialogue acting needs freedom.

## SHOT 05 — YOU KNEW
Primary references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `ADRIAN_CHARACTER_MASTER_R1`
- `ADRIAN_LOOK_EP01_R1`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
Optional local:
- accepted Shot 04 handoff frame
Must preserve: both faces/looks, same room geography, Mara near work zone, Adrian respecting personal-space boundary.
Allowed to change: over-shoulder bias, eye lines, breath, hand position, emotional intensity.
If two-character generation causes face drift, split into `SH05A_MARA` and `SH05B_ADRIAN` while preserving stable shot IDs as subshots.

## SHOT 06 — 1975
Primary insert references:
- `EVELYN_BRASS_PLAQUE_R1`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1` for light only
Reaction references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `ADRIAN_CHARACTER_MASTER_R1` only if visible in soft background
Must preserve: exact plaque text, tarnished brass identity, Mara face/age/wardrobe.
Allowed to change: insert angle, focus pull, reaction framing.
Preferred route: generate readable plaque as approved still; animate camera/parallax rather than relying on moving-text generation.

## SHOT 07 — MISS EVELYN
Primary references:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `ROWAN_CHARACTER_MASTER_R1`
- `ROWAN_LOOK_EP01_R1`
- `ADRIAN_CHARACTER_MASTER_R1`
- `ADRIAN_LOOK_EP01_R1`
- `EVELYN_PORTRAIT_R1_PARTIAL_FACE`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
Must preserve: Mara and Evelyn visible on same visual axis, Rowan in doorway, Adrian in midground/shadow, doorway/easel geography, portrait state.
Allowed to change: exact body pose, floral bundle angle, micro gaze, facial performance.
End-frame requirement: YES. Final landing frame must preserve all identity relationships and becomes the canonical EP01 cliffhanger frame.

## SHOT 08 — REACTION HOLD / BLACK
Primary reference:
- accepted Shot 07 end frame
Optional:
- `MARA_CHARACTER_MASTER_R1` as global re-anchor if expression drift occurs during reaction extension
Must preserve: Mara identity and final emotional state.
Allowed to change: only micro-breath, eye movement, tiny head movement, transition to black.

---

# RE-ANCHOR RULES

- Never let Shot 05 derive only from Shot 04 if global identity references can be attached.
- Re-bind Mara and Adrian Character Masters on any close-up or dialogue regeneration.
- Re-bind the Restoration Studio Scene Anchor whenever a camera reset risks changing doorway/window/easel geography.
- Re-bind `EVELYN_PORTRAIT_R1_PARTIAL_FACE` for every shot in which the portrait is readable.
- Use Shot 03 end frame and Shot 07 end frame only as local accepted handoffs, not as replacements for character/location masters.

# DRIFT FAILURE ROUTING

Face drift -> repair Character Master binding first.
Wardrobe drift -> repair Look Master binding.
Room geometry drift -> re-bind Location Master + Scene Anchor.
Portrait changes face across shots -> regenerate only from approved clean portrait/damage state lineage.
Plaque text mutation -> use approved still insert, not generated moving text.
Acting stiffness -> remove unnecessary end-frame lock before changing identity refs.

# EP01 READY GATE

EP01 keyframe generation may begin only after the following assets are visually approved:
- `MARA_CHARACTER_MASTER_R1`
- `MARA_LOOK_EP01_R1`
- `ADRIAN_CHARACTER_MASTER_R1`
- `ADRIAN_LOOK_EP01_R1`
- `ROWAN_CHARACTER_MASTER_R1`
- `ROWAN_LOOK_EP01_R1`
- `EVELYN_CHARACTER_DERIVED_R1`
- `EVELYN_LOOK_1975_R1`
- `RESTORATION_STUDIO_MASTER_R1`
- `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
- `EVELYN_PORTRAIT_R1_PARTIAL_FACE` plus its approved source lineage
- `EVELYN_BRASS_PLAQUE_R1`
