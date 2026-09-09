# Continuity and deliverable integrity

## Source ownership and state
Use PROJECT_BIBLE for world/story, CHARACTER_BIBLE for identity, CONTINUITY_LEDGER for changing state, and EPISODE_STATUS for work/approval. Read the latest approved artifacts before continuing; a skill is not the project memory.

Record a draft as draft when maintaining project state is authorized. User approval changes approval state; successful generation does not. Keep approved canon separate from proposed next-episode events. Store open setups and the exact carry-forward cliffhanger. Never silently merge two projects because both have billionaire heroes.

For every shot transition compare:
- actor IDs, looks, hair, makeup and injuries;
- positions, action axis, eyelines and entrances/exits;
- prop holder, specific hand, orientation and physical state;
- time/weather, light direction, environment geometry;
- who knows what, emotional state and relationship change.

Classify deviations as intentional state change, genuine conflict or unverified evidence. A planned transition can be checked without footage. An unseen generated image cannot receive visual PASS.

## Dependency-aware revision
Record dependencies script beat → dialogue → shot → frame → video take → edit. When a line grows, recheck timing and affected shots. When a look changes, update affected frames/prompts and continuity while preserving story and unaffected references. Keep previous approved versions recoverable and stable IDs intact.

## Delivery levels
Label exactly what exists:
- SCRIPT/PROMPTS READY: text production materials.
- STORYBOARD IMAGES READY: actual images have been created and inspected.
- PRE-GENERATION QA COMPLETE: supplied planning materials checked.
- GENERATED MEDIA REVIEWED: only specified images/video actually viewed.
- RELEASE READY: only after the delivered cut, sound, subtitles and exports are checked.

Missing videos must never block a complete planning pack. Missing images must not be disguised as an illustrated storyboard. When image generation is requested and authorized, use an available image-generation capability and inspect generated assets. If unavailable, finish the text pack and state the exact missing deliverable.

## Mobile-friendly package
When the user requests downloadable storyboard delivery:
- provide individual full-resolution image files labeled by episode/scene/shot/start-or-end;
- include exact matching prompts as searchable text;
- produce a scrolling PDF with images embedded in reading order, captions and readable Thai fonts;
- include a manifest mapping image filename → shot ID → frame role → prompt ID → model;
- provide a ZIP only when requested.

A PDF is a viewing companion, not a replacement for separately saveable images. Do not deliver a contact sheet as the only usable asset. Do not offer local HTML that relies on missing relative images as a self-contained offline package.

Use the appropriate document/PDF skill and persistent storage workflow when creating user deliverables. Render representative pages, check image existence and links, and verify typography and clipping before claiming success.

## GitHub handoff
When project/GitHub maintenance is requested, discover and verify the intended existing repository, read AGENTS.md, inspect its state and update only task-relevant paths. Prefer a feature branch and reviewable PR for shared/protected projects; use the user's authorized update flow where established. Avoid unrelated repositories and never force-push over concurrent work.

Keep skills reusable; project canon and media stay in their project. Record actual generated asset paths and selected takes rather than storing large binaries or credentials in a skills repository. Verify saved remote paths/content before saying GitHub is updated. Report installed skill status separately from GitHub copy status.
