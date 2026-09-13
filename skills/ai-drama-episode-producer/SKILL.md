---
name: ai-drama-episode-producer
description: Create or continue cinematic AI drama with canon lock, story, vertical retention, cast, reference architecture, performance, production design, storyboard, model routing, start/end frames, prompts, edit/sound and continuity QA.
version: 3.0.0
---

# ai-drama-episode-producer

## Purpose

Coordinate the smallest useful AI-drama skill chain and return a complete, generation-ready episode package. This skill owns orchestration and final coherence; specialist skills still own story, retention, character, dialogue, visual references, performance, cinematography, model routing, shot engineering, continuity, and QA decisions.

## Use when

Use for requests such as:
- make the next episode end-to-end
- continue from the approved episode/characters
- finish everything and wait for final approval
- create script + storyboard + master shots + prompts
- prepare an episode for Veo / Seedance / Omni / Kling / Flow or mixed-model production
- rebuild an episode after a story, character, visual or model-routing change

Do not use when the user only wants one narrow task such as dialogue polishing or one video prompt.

## Preferred canonical project files

Read when available:
1. `PROJECT_BIBLE.md`
2. `CHARACTER_BIBLE.md`
3. `CONTINUITY_LEDGER.md`
4. `EPISODE_STATUS.md`
5. `ASSET_REGISTRY.md`
6. `MODEL_ADAPTERS.md`

### Source ownership
- Story/world canon → `PROJECT_BIBLE.md`
- Character identity/behavior canon → `CHARACTER_BIBLE.md`
- Cross-shot/cross-episode state → `CONTINUITY_LEDGER.md`
- Workflow/approval status → `EPISODE_STATUS.md`
- Approved visual masters / generated assets / paths → `ASSET_REGISTRY.md`
- Current provider/model capability evidence and project tests → `MODEL_ADAPTERS.md`

If files disagree, use the newest explicit user approval or clearly newer approved artifact and flag the conflict. Do not silently merge incompatible versions.

## Canon-first rule

Before producing an episode, resolve the current source of truth from available project materials. Lock:
- approved character identity and face references
- age, role, relationships, secrets, wounds, goals, knowledge and emotional state
- wardrobe/hair/makeup state
- locations, props, injuries, weather/time-of-day and object state
- unresolved setups/payoffs and prior cliffhanger
- platform, aspect ratio, runtime, language and tone
- approved visual masters and current scene anchors
- user-available generation tools, subscriptions or constraints when known

If a character or visual identity has already been approved, preserve it unless the user explicitly requests a redesign.

## Execution modes

### Final-approve mode
Default when the user asks to finish the episode, continue the next episode, or says to wait for final approval.

Run the relevant decision passes without stage-gating:
1. `ai-drama-story-engine`
2. `vertical-drama-retention-director` for short vertical/social drama
3. `character-architect` only when new/changed characters or identity details are required
4. `dialogue-subtext-writer`
5. `reference-first-visual-production`
6. `performance-director`
7. `cinematic-director`
8. `ai-video-model-router`
9. `veo-shot-planner` or the compatible shot-planning pass for the chosen interface
10. `continuity-supervisor`
11. `episode-qa`

Do not stop after script, storyboard or shot planning to ask for approval unless a genuinely unresolved canon conflict would invalidate later work.

### Focused-revision mode
When the user changes one element, revise the smallest affected downstream chain.

Examples:
- weak hook / flat pacing → retention + affected cinematic/edit/shot decisions
- dialogue-only change → dialogue + performance + downstream timing if affected
- flat acting → performance + affected camera/shot prompts
- face drift → reference-first visual production + affected shot/QA
- wrong wardrobe → look/reference binding + continuity + affected frame prompts
- wrong model choice → model router + shot planner only
- story beat change → story + every affected downstream pass

## Workflow

1. **Read project state** — load canonical files and latest approved artifacts.
2. **Canon lock** — summarize only continuity-critical facts and conflicts.
3. **Episode intent** — define emotional promise, episode question, escalation, payoff and cliffhanger.
4. **Vertical retention pass** — when applicable, define hook, viewer-question chain, reveal spacing and attention resets without breaking causality.
5. **Episode script** — produce finished scene-by-scene action and dialogue at plausible runtime.
6. **Reference architecture** — resolve Character Masters, Look Masters, Location Masters, Scene Anchors, previous-shot handoffs and ownership boundaries.
7. **Performance pass** — define objectives, tactics, subtext, gaze, body distance, reaction timing and emotional transitions.
8. **Cinematic pass** — choose blocking, compositions, reveals, motifs, camera and lighting that serve story and performance.
9. **Storyboard / master shot plan** — assign stable scene and shot IDs; use the fewest shots that preserve clarity, emotion and pace.
10. **Generation routing** — choose still-first, reference-driven, image-to-video, start-frame, start+end-frame or text-to-video route per shot. Assign primary/fallback model roles based on verified or clearly labeled capability evidence.
11. **Prompt pack** — provide ready-to-paste frame and motion prompts with actual reference ownership, continuity anchors and practical fallbacks.
12. **Edit and sound map** — define intended edit duration, reaction holds, transitions, dialogue/SFX/music cues and generated-versus-used duration where relevant.
13. **Continuity delta** — record what changed by episode end and what the next episode inherits.
14. **Project-state update plan** — specify exact post-approval updates for canonical files.
15. **Pre-generation QA** — repair critical story, retention, performance, visual, continuity and generation-risk issues.
16. **Final approval package** — return the corrected production-ready version, not an unresolved suggestion list.

## Model-routing evidence rule

Provider/model capabilities, price, duration, reference limits, audio and UI-specific controls are volatile.

For provider-specific routing, label evidence as one of:
- `VERIFIED_CURRENT`
- `USER_CONFIRMED`
- `KNOWN_PROJECT_TEST`
- `PROVISIONAL`

Never state a provisional capability as fact. If current evidence is unavailable, keep routing model-neutral and provide a fallback.

## Reference-first rule

For recurring characters or connected shots:
- use approved visual masters as identity/state owners
- use previous accepted shot/handoff frame only as a local continuity anchor
- periodically re-anchor to global masters to prevent cumulative drift
- define `must preserve`, `allowed to change`, and `intentional delta`
- do not redesign character, outfit or location in every prompt

## Start/end-frame rule

Use a start frame when identity, pose, composition, wardrobe, prop state, screen direction or environment needs control.

Use an end frame only when the landing state materially matters, such as:
- exact reveal composition
- object state required by the next cut
- transition match
- continuity-critical pose/location
- difficult identity-critical destination

Avoid over-locking organic acting, dialogue, crying, breathing, hair/cloth motion, kissing, fighting or walking when interpolation would become stiff.

## No-upload dependency rule

Planning and pre-generation QA must not require the user to upload or generate a video first. If no generated video is supplied, evaluate the script, frames, prompts, timing, routing and continuity and return a pre-generation verdict. Post-generation visual review is a separate optional pass.

## Output contract

Return, when relevant:
1. Episode header: number/title/runtime/platform/tone
2. Canon carried in from prior episode
3. Episode question, hook, retention map and cliffhanger
4. Final episode script
5. Reference architecture and required approved assets
6. Performance map by scene/shot
7. Scene storyboard with purpose and visual beat
8. Master shot list with stable shot IDs
9. Per-shot generation routing table with evidence status
10. Start-frame prompt(s)
11. End-frame prompt(s)
12. Video prompt(s)
13. Dialogue/audio/SFX/edit notes
14. Continuity anchors and negative constraints
15. Fallback generation strategy for risky shots
16. Continuity ledger delta for the next episode
17. Exact post-approval updates for project files
18. Episode QA scorecard and corrected final verdict
19. Optional title/thumbnail/caption handoff only when requested

## Master shot table minimum fields

- Shot ID
- Edit duration target
- Dramatic beat
- Viewer question / retention function when vertical
- Character performance turn
- Composition / camera intent
- Reference owners
- Primary generation route
- Model/tool role + evidence status
- Start frame yes/no + reason
- End frame yes/no + reason
- Main continuity anchors
- Main failure risk
- Fallback
- Handoff state

## Handoff discipline

- Story engine decides causality and episode beats.
- Retention director decides vertical attention architecture, not plot logic.
- Character architect decides identity and character-state specification.
- Dialogue writer decides spoken language and subtext wording.
- Reference-first production decides visual ownership and bindings.
- Performance director decides playable acting and emotional progression.
- Cinematic director decides staging, composition, camera and light.
- Model router decides per-shot generation route and primary/fallback model role.
- Shot planner decides frame engineering, motion prompts and generation-safe handoff.
- Continuity supervisor decides cross-shot/cross-episode state.
- Episode QA audits and repairs; it does not randomly reinvent working material.

## Final QA

- Canonical project files were read when available.
- Hook is immediately legible and creates a specific question when vertical retention matters.
- Every scene changes information, power, danger, relationship or emotion.
- Dialogue sounds speakable and avoids exposition dumps.
- Performance beats have objectives, triggers and readable transitions.
- Approved references own identity/look/location truth where needed.
- Cinematic choices serve story and performance rather than generic spectacle.
- Major visual beats can be generated with the stated production tools.
- Model routing is per shot and capability evidence is labeled.
- Start/end frames are justified, not automatic.
- Shot IDs, wardrobe, props, screen direction, injuries, time and location state are internally consistent.
- Cliffhanger creates a concrete reason to watch the next episode.
- Approved assets are not unnecessarily regenerated.
- Final package is ready for generation without requiring an intermediate approval step.

## Cinematic production upgrade

For ambitious cinematic episodes, read the producer references as needed:
- `references/story-performance.md`
- `references/prestige-direction.md`
- `references/shot-prompts.md`
- `references/continuity-delivery.md`
- `references/quality-rubric.md`

Treat “100 ล้าน” as visual/dramatic ambition, not a verified budget or promise. Do not shrink scale by default; engineer achievable layered coverage. Runtime is the final edit total, not the sum of all generated source lengths.

For high-emotion scenes, heightened or stage-level inner intensity is allowed when requested, but emotional changes must still have triggers, tactics and contrast.

## Operating rules

- Preserve explicit user constraints over defaults.
- Do not hard-code volatile model versions, prices, limits or current project state into this universal skill.
- Do not invent missing asset approvals or claim media was reviewed when it was not supplied.
- Prefer decisive finished production packets over generic advice.
- Reuse approved assets and decisions rather than regenerating them unnecessarily.
- Update canonical project files only after approval unless the user explicitly asks to record draft state.
- If an external generation action requires an unavailable tool or permission, finish all upstream production work and state only the blocked action.