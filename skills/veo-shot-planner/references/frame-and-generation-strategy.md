# Frame strategy and generation control

## Choose per shot
| Mode | Choose when | Tradeoff / fallback |
|---|---|---|
| Text-to-video | Environment or anonymous action without critical identity bindings | More freedom; use approved reference conditioning if identity becomes important |
| Reference-conditioned video | Supported character/location references can guide a free performance | Verify what references the actual surface supports |
| Start frame only | Entry composition, identity, wardrobe or prop state matters | Allow expression, blocking and camera to evolve from the real frame |
| Start and end frames | A specific endpoint is essential to a reveal, match cut or next-shot state | Verify compatible endpoints and supported controls; remove end lock if acting becomes interpolation |
| End frame only | The chosen surface explicitly supports it and the destination matters more than entry | Otherwise use a supported route; never invent this option |

State yes/no and a concrete reason for each start/end frame. Never generate both by default. Match camera side, lens-feel, anatomy, wardrobe, lighting, prop state and feasible travel between endpoints. A static-looking pair can flatten performance; design different readable states with a feasible path when a pair is justified. Do not chain every shot to the previous final frame: re-anchor identity and location when drift appears.

## Start/end and video prompt pack
Use stable EP-SC-SH IDs. Provide separate, independently copyable blocks for each requested still and moving shot. Expand relevant character/location anchors in each final block; IDs alone are not descriptive bindings. List actual input filenames and their roles. If assets are absent, label them as needed inputs, never as approved or attached.

A still prompt describes exactly one visible instant: subject identity and expression, pose/hand/prop state, geography, composition, motivated light. A motion prompt describes entry → trigger/action → reaction → exit, exact speaker/line, camera behavior, environmental motion, sound intent, and essential continuity. Avoid packing multiple locations, several speakers, transformation, fighting and an orbit into a short shot. Split action only where readability or tool reliability requires it.

Separate editorial timing from provider settings. Timing tables must fit speech, movement, listening and breathing; estimate Thai speech through actual delivery/read-aloud, never whitespace counts. Exact model IDs, limits, audio/reference support, cost units and settings need current official documentation or tool-schema verification. Record source and checked date in the project model adapter. Veo/Flow consumer UI and API options may differ. Ambiguous names remain unresolved; provide useful model-neutral work while resolving execution details.

## Asset plan and execution
Create only references needed for the task: a stable portrait plus useful angles/expression examples for recurring characters; wardrobe looks; an establishing layout and coverage anchors for recurring sets; identity-critical props. Keep asset IDs, revision, source, approval state, path and shot dependencies. Do not regenerate accepted identity anchors to make every frame fresh.

Test the highest-risk representative shot before a broad render. Inspect the actual result, diagnose identity/motion/geography/dialogue problems, and repair the responsible control. After two failed attempts on the same defect change technique, simplify the staging while preserving the beat, or report the execution limit. Avoid endless rerenders. Estimate costs only from verified prices and explicit retry assumptions; quality ambition does not authorize an unlimited paid batch.

Maintain a render manifest: shot ID, prompt version, model/surface and verified settings, reference bindings, attempt, accepted output, final edit in/out, issue and next action. Distinguish written prompts, generated assets, inspected assets, assembled cut and release state. Never claim that “4K”, “8K”, “film grain” or an upscale recovered missing detail or measured native resolution.
