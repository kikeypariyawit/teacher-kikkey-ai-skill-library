---
name: ai-drama-episode-producer
description: Orchestrate a complete AI-drama episode from canon lock through script, cinematic staging, shot planning, frame prompts, continuity, and final pre-generation QA.
version: 1.0.0
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

1. **Canon lock** — summarize only continuity-critical facts and contradictions.
2. **Episode intent** — define emotional promise, episode question, hook, escalation, payoff, and cliffhanger.
3. **Episode script** — produce finished scene-by-scene action and dialogue at plausible runtime.
4. **Cinematic pass** — choose blocking, compositions, reveals, visual motifs, and camera language that serve the drama.
5. **Storyboard / master shot plan** — assign stable scene and shot IDs; use the fewest shots that preserve clarity, emotion, and pace.
6. **Generation routing** — assign each asset to the appropriate available model/tool. When the project uses a still/keyframe generator plus a motion generator, use the still model for character references/start/end frames and the motion model for video shots unless the user specifies otherwise.
7. **Prompt pack** — provide ready-to-paste start-frame, end-frame, and video prompts where needed, with continuity anchors and failure-safe fallbacks.
8. **Continuity delta** — record what changed by the end of the episode and what the next episode must inherit.
9. **Pre-generation QA** — repair critical story, timing, visual, continuity, and generation-risk issues before presenting the package.
10. **Final approval package** — return the corrected production-ready version, not a list of unresolved suggestions.

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
15. Episode QA scorecard and corrected final verdict
16. Optional thumbnail/title/caption handoff only when requested or clearly part of the deliverable

## Handoff discipline

- Story engine decides causality and episode beats.
- Character architect decides identity and character-state specification.
- Dialogue writer decides spoken language and subtext.
- Cinematic director decides staging and cinematic language.
- Veo shot planner decides shot engineering, frame use, and generation prompts.
- Continuity supervisor decides cross-shot/cross-episode state.
- Episode QA audits and repairs; it does not randomly reinvent working material.

## Final QA

- Hook is understandable immediately and creates a specific question.
- Every scene changes information, power, danger, relationship, or emotion.
- Dialogue sounds speakable and avoids exposition dumps.
- Character actions follow motives and prior state.
- Major visual beats can be generated with the stated production tools.
- Start/end frames are used only where they materially improve identity, composition, object state, or transition control.
- Shot IDs, wardrobe, props, screen direction, injuries, time, and location state are internally consistent.
- Cliffhanger creates a concrete reason to watch the next episode.
- Final package is ready for generation without requiring an intermediate approval step.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not hard-code volatile model versions, prices, dates, or project state into this universal skill.
- Do not invent missing asset approvals or claim media was reviewed when it was not supplied.
- Prefer decisive finished production packets over generic advice.
- Reuse approved assets and decisions rather than regenerating them unnecessarily.
- If an external action requires an unavailable tool or permission, finish all upstream production work and state only the blocked action.
