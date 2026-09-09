# Shot, keyframe and model adapter contract

## Evidence before model claims
Treat a model's advertised name, provider, interface and capability as separate facts. Do not infer what “Lite”, “Mini”, “Flash”, “Omni” or a version number supports. For the intended surface verify official documentation or a supplied UI screenshot: model identifier, duration options, aspect ratio, start/end-frame support, reference inputs, audio/dialogue support, limits and price if requested. Record source and checked date.

If the exact capability cannot be verified, continue with a model-neutral plan and label routing PROVISIONAL. Provide a start-image-only or editing fallback for uncertain end-frame support. Do not silently substitute another model. Recheck volatile claims when producing tool-specific instructions. Never invent current credits, duration caps or reference counts.

Keep creative shot intent stable while adapting controls to the tool. A prompt can share its dramatic core across engines; parameters and supported features are not universally transferable. UI instructions and API-only controls must be distinguished. Negative instructions belong in a dedicated field only if the surface provides one; otherwise use concise supported prompt language.

## Master shot table
Use stable IDs such as EP04-S02-SH03. Include:
- timeline in/out and edit duration;
- scene purpose and shot beat;
- character/look IDs, location ID and input state;
- shot size, blocking, camera behavior and light;
- exact generator/model label or PROVISIONAL role;
- generation mode, generation duration and chosen edit segment;
- start-frame asset ID, end-frame asset ID or N/A with reason;
- prompt IDs, dialogue/audio, output filename;
- next-shot state and risk/fallback.

Every ID must resolve to its asset or prompt block. Keep scene, shot, frame and take IDs distinct. Do not renumber unaffected shots after a revision.

## Frame prompts
Write separate ready-to-paste blocks for each required frame. Include approved reference filenames, identity and look, concrete pose/hand/prop state, expression/eyeline, environment anchors, composition, light and relevant constraints. Do not use “same as above” as the sole identity or costume specification.

A start frame is a still instant before the primary action. An end frame is a still instant after it; neither should describe an entire sequence. Make the state change physically reachable within the shot, with coherent body position, handedness, lens and geography. Use start+end locks only where supported and useful. For a reverse angle, create a new view anchored to the same world; do not blindly reuse the prior end frame.

If the user explicitly requests both frames but a tool cannot consume an end frame, still provide the end-frame design and prompt as an editing/continuity target, clearly labeled as not an input to that tool.

## Motion prompt
Provide one complete block per shot:
1. Primary action and observable performance transition.
2. Interaction and simple action sequence.
3. Camera behavior and landing.
4. Background movement and lighting continuity.
5. Exact speaker-tagged dialogue and audio only if supported.
6. Critical identity, wardrobe, prop and geography constraints.

Limit simultaneous choreography rather than stripping emotion. Choose generation duration from verified tool options and plan trim handles separately from final edit duration. Record whether lip-sync is generated, added later or unverified.

## Fallback
For risky contact, crowds, transformations or intricate objects: isolate action, simplify movement, hold a stronger reference, split into reaction/insert/return, or use sound/off-screen action. Preserve the scene's causal evidence. A reveal cannot depend on text too small to read; create precise text in post when necessary.

Retry only the affected asset within an agreed or conservative bounded generation budget; do not endlessly regenerate approved material. Actual image/video generation and paid credits require task authorization. A skill upgrade or prompt request alone does not authorize buying credits or submitting video jobs.
