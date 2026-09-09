---
name: ai-drama-episode-producer
description: Orchestrate a complete AI-drama episode from canon lock through script, cinematic staging, shot planning, frame prompts, continuity, and final pre-generation QA.
version: 1.3.0
---

# ai-drama-episode-producer

## Purpose

Coordinate the smallest useful AI-drama skill chain and return a complete, generation-ready episode package. This skill owns orchestration and final coherence; specialist skills still own story, character, dialogue, cinematography, shot engineering, continuity, and QA decisions.

## Use when

Use for requests such as:
- make the next episode end-to-end
- continue from the approved episode/characters
- finish everything and wait for final approval
- create script + storyboard + master shots + prompts
- prepare an episode for Veo / Flow / still-frame generation
- rebuild an episode after a story or character change

Do not use when the user only wants one narrow task such as dialogue polishing or one video prompt.

## Required inputs

Minimum useful input is one of:
- current project repository containing the canonical project files
- latest approved episode plus character / continuity state
- explicit user brief sufficient to establish canon for a new project

Preferred canonical project files:
1. `PROJECT_BIBLE.md`
2. `CHARACTER_BIBLE.md`
3. `CONTINUITY_LEDGER.md`
4. `EPISODE_STATUS.md`

## Canonical project read order

When these files exist, read them before writing a new episode in this order:

1. `PROJECT_BIBLE.md` — world, story, platform, visual, production, setup/payoff truth
2. `CHARACTER_BIBLE.md` — identity, psychology, voice, approved looks, relationships, current character state
3. `CONTINUITY_LEDGER.md` — state changes that must survive between scenes/shots/episodes
4. `EPISODE_STATUS.md` — what is approved, in progress, rejected, blocked, or next
5. latest approved episode / scene / shot artifacts when available

If the files disagree, use the newest explicit user approval or clearly newer approved artifact and flag the exact conflict. Do not silently merge incompatible versions.

### Source ownership
- Story/world canon → `PROJECT_BIBLE.md`
- Character identity/behavior canon → `CHARACTER_BIBLE.md`
- Cross-shot/cross-episode state → `CONTINUITY_LEDGER.md`
- Workflow/approval status → `EPISODE_STATUS.md`

Do not duplicate ownership across files unless a brief handoff summary is useful.

## Canon-first rule

Before producing an episode, resolve the current source of truth from available project materials. Lock:
- approved character identity and face references
- age, role, relationships, secrets, wounds, goals, and current emotional state
- wardrobe/hair/makeup state
- locations, props, injuries, weather/time-of-day, and object state
- unresolved setups/payoffs and prior cliffhanger
- platform, aspect ratio, runtime, language, tone, and generation constraints

If a character or visual identity has already been approved, preserve it unless the user explicitly requests a redesign.

## Execution modes

### Final-approve mode
Default when the user asks to finish the episode, continue the next episode, or says to wait for final approval.

Run the full chain without stage-gating:
1. `ai-drama-story-engine`
2. `character-architect` only when new/changed characters or identity details are required
3. `dialogue-subtext-writer`
4. `cinematic-director`
5. `veo-shot-planner`
6. `continuity-supervisor`
7. `episode-qa`

Do not stop after script, storyboard, or shot planning to ask for approval unless a genuinely unresolved canon conflict would make later work invalid.

### Focused-revision mode
When the user changes one element, revise the smallest affected downstream chain. Example: dialogue-only feedback should not redesign approved characters.

## Workflow

1. **Read project state** — load the four canonical files and latest approved artifacts when available.
2. **Canon lock** — summarize only continuity-critical facts and contradictions.
3. **Episode intent** — define emotional promise, episode question, hook, escalation, payoff, and cliffhanger.
4. **Episode script** — produce finished scene-by-scene action and dialogue at plausible runtime.
5. **Cinematic pass** — choose blocking, compositions, reveals, visual motifs, and camera language that serve the drama.
6. **Storyboard / master shot plan** — assign stable scene and shot IDs; use the fewest shots that preserve clarity, emotion, and pace.
7. **Generation routing** — assign each asset to the appropriate available model/tool. When the project uses a still/keyframe generator plus a motion generator, use the still model for character references/start/end frames and the motion model for video shots unless the user specifies otherwise.
8. **Prompt pack** — provide ready-to-paste start-frame, end-frame, and video prompts where needed, with continuity anchors and failure-safe fallbacks.
9. **Continuity delta** — record what changed by the end of the episode and what the next episode must inherit.
10. **Project-state update plan** — specify exact updates needed for the four canonical files after approval. When repository write access is available and the user has asked for project state to be maintained, update those files after approval rather than before approval.
11. **Pre-generation QA** — repair critical story, timing, visual, continuity, and generation-risk issues before presenting the package.
12. **Final approval package** — return the corrected production-ready version, not a list of unresolved suggestions.

## No-upload dependency rule

Planning and pre-generation QA must not require the user to upload or generate a video first. If no generated video is supplied, evaluate the script, frames, prompts, timing, and continuity and return a pre-generation verdict. Post-generation visual review is a separate optional pass.

## Output contract

Return, when relevant:
1. Episode header: number/title/runtime/platform/tone
2. Canon carried in from prior episode
3. Hook + retention map + cliffhanger
4. Final episode script
5. Scene storyboard with scene purpose and visual beat
6. Master shot list with stable shot IDs
7. Generation routing per shot/asset
8. Start-frame prompt(s)
9. End-frame prompt(s)
10. Video prompt(s)
11. Dialogue/audio/SFX notes
12. Continuity anchors and negative constraints
13. Fallback generation strategy for risky shots
14. Continuity ledger delta for the next episode
15. Exact post-approval updates for `PROJECT_BIBLE.md`, `CHARACTER_BIBLE.md`, `CONTINUITY_LEDGER.md`, and `EPISODE_STATUS.md`
16. Episode QA scorecard and corrected final verdict
17. Optional thumbnail/title/caption handoff only when requested or clearly part of the deliverable

## Handoff discipline

- Story engine decides causality and episode beats.
- Character architect decides identity and character-state specification.
- Dialogue writer decides spoken language and subtext.
- Cinematic director decides staging and cinematic language.
- Veo shot planner decides shot engineering, frame use, and generation prompts.
- Continuity supervisor decides cross-shot/cross-episode state.
- Episode QA audits and repairs; it does not randomly reinvent working material.

## Final QA

- Canonical project files were read when available.
- Hook is understandable immediately and creates a specific question.
- Every scene changes information, power, danger, relationship, or emotion.
- Dialogue sounds speakable and avoids exposition dumps.
- Character actions follow motives and prior state.
- Major visual beats can be generated with the stated production tools.
- Start/end frames are used only where they materially improve identity, composition, object state, or transition control.
- Shot IDs, wardrobe, props, screen direction, injuries, time, and location state are internally consistent.
- Cliffhanger creates a concrete reason to watch the next episode.
- Approved assets are not unnecessarily regenerated.
- Final package is ready for generation without requiring an intermediate approval step.

## Cinematic production upgrade

For ambitious cinematic episodes, read [production-handoff.md](references/production-handoff.md). Have cinematic-director develop world/production design, a performance curve, selective spectacle, a look bible and edit/sound cues. Keep specialist decision ownership. Treat “100 ล้าน” as visual/dramatic ambition, not a verified budget or promise. Do not shrink the requested scale by default; engineer achievable layered coverage. Deliver actual requested assets when tools and authorization permit, and label script-only and uninspected media accurately.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not hard-code volatile model versions, prices, dates, or project state into this universal skill.
- Do not invent missing asset approvals or claim media was reviewed when it was not supplied.
- Prefer decisive finished production packets over generic advice.
- Reuse approved assets and decisions rather than regenerating them unnecessarily.
- Update canonical project files only after approval unless the user explicitly asks to record a draft state.
- If an external action requires an unavailable tool or permission, finish all upstream production work and state only the blocked action.
