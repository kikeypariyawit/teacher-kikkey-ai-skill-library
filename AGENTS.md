# Teacher Kikkey AI Studio — AGENTS.md

## Mission
A reusable operating system for recurring creative, education, marketing, AI-film, Roblox game-product, and digital-product work.

## First principles
- Use the **smallest useful skill chain**.
- One skill owns each major decision.
- Creation happens before QA.
- Keep volatile project facts in the project repository, not in universal skills.
- When facts conflict, surface the conflict instead of guessing.
- For recurring production, preserve approved canon and only revise the smallest affected downstream chain.
- For serialized AI drama visuals, use **reference-first production**: approved visual references define identity/state; prompts direct what changes next.
- For vertical drama, separate **story causality**, **retention architecture**, **performance**, **cinematography**, and **model routing** instead of forcing one prompt to own all five.
- Route AI-video models **per shot**, not by habit for the whole episode.
- For Roblox, treat analytics instrumentation, mobile performance and player value as product design inputs rather than post-launch cleanup.
- For Roblox monetization, make the core play valuable before purchase prompts and verify current platform/policy details before implementation.

## Default routing

### Orchestration
- Multi-domain or broad request → `workflow-router`

### Bangyai English Village
- Fresh content / strategy → `bev-content-strategist`
- Parent-facing copy → `bev-parent-copywriter`
- Research-backed content → `bev-education-researcher`
- Visual campaign direction → `bev-creative-director`
- Final campaign audit → `bev-campaign-qa`

### Social
- Viral concept / hooks / retention → `social-viral-strategist`
- Finished social caption → `caption-conversion-writer`

### AI Drama
- Full next episode / do everything / finish for final approval → `ai-drama-episode-producer`
- Story causality / episode architecture → `ai-drama-story-engine`
- Vertical hook / viewer-question chain / retention pacing → `vertical-drama-retention-director`
- Character bible → `character-architect`
- Dialogue / inner monologue → `dialogue-subtext-writer`
- Character/location/look reference packs, scene anchors, reference binding, keyframe continuity → `reference-first-visual-production`
- Acting / playable emotion / gaze / body behavior / reaction timing → `performance-director`
- Staging / cinematic language / lighting / blocking / camera intent → `cinematic-director`
- Per-shot model choice / still-first vs motion route / quality-cost-risk allocation → `ai-video-model-router`
- Veo/Flow-style shots / start-end frames / generation prompts → `veo-shot-planner`
- Cross-shot / cross-episode state → `continuity-supervisor`
- Episode audit → `episode-qa`

### Roblox
- Core game concept / FTUE / retention / replayability / progression / social / live-ops / analytics / mobile product design → `roblox-retention-game-director`
- Currencies / sources-sinks / passes / developer products / subscriptions / pricing / purchase flow / receipt integrity / monetization policy → `roblox-economy-monetization-director`
- Full commercial-game system pass → retention director as lead, economy director only when purchase/economy scope is relevant
- Current Roblox platform claims → verify official Creator Hub; use dated research notes rather than silently hard-coding volatile limits

### Image
- Concept + prompt + art direction → `image-art-director`
- Final visual audit → `visual-qa`

### Products / Business
- Worksheets / e-books / learning resources → `educational-product-builder`
- Offer + launch → `digital-product-launcher`
- Revenue system / prioritization → `monetization-strategist`

## Canonical project-state rule
Before execution on recurring projects, read the project's current source-of-truth (for example `PROJECT_BIBLE.md`, `CHARACTER_BIBLE.md`, `CONTINUITY_LEDGER.md`, `EPISODE_STATUS.md`, latest approved brief, or approved character references). Stable skills should not hard-code volatile dates, prices, schedules, model versions, provider limits, or campaign state.

If a character identity, face, costume state, relationship, prior episode, or production choice is already approved, keep it locked unless the user explicitly changes it.

For AI drama, prefer these project files when available:
1. `PROJECT_BIBLE.md`
2. `CHARACTER_BIBLE.md`
3. `CONTINUITY_LEDGER.md`
4. `EPISODE_STATUS.md`
5. `ASSET_REGISTRY.md`
6. `MODEL_ADAPTERS.md`

The first four are canonical story/state files. `ASSET_REGISTRY.md` tracks approved visual masters and generated assets. `MODEL_ADAPTERS.md` stores volatile provider/interface evidence separately from stable skills.

## Reference-first visual production standard
For serialized AI drama, do not default to creating each image as an independent prompt-first artwork.

When continuity matters:
1. Resolve approved Character Master(s), current Look/Costume Master(s), Location Master and current Scene Anchor when available.
2. Bind only the references that own something the shot must preserve.
3. Use the previous accepted shot/handoff frame as a local continuity reference when the shots are directly connected.
4. Keep global masters in the chain so repeated previous-shot inheritance does not compound visual drift.
5. State `must preserve`, `allowed to change`, and `intentional delta` before generation.
6. Let the image model/director create composition, performance, camera nuance and atmosphere unless these are continuity-critical.
7. Do not treat reference-driven generation as literal compositing; the model still synthesizes a new frame while references anchor approved visual truth.
8. If one ownership layer fails, repair that layer first instead of automatically regenerating the entire image.

Use `reference-first-visual-production` whenever a request involves recurring characters, multi-shot visual continuity, character-consistent storyboards, scene anchors, keyframes, start/end frames, image-to-video preparation, or visual drift repair.

## AI drama execution modes

### Final-approve mode
When the user says things such as “ทำ EP ถัดไปให้จบ”, “ทำทั้งหมดเลย”, “รอ final approve”, “script + storyboard + prompts”, or equivalent, route to `ai-drama-episode-producer` as the lead orchestrator.

The producer should execute the full required chain without stopping for intermediate approvals:

`ai-drama-story-engine` → `vertical-drama-retention-director` (for short vertical work) → `character-architect` (only when needed) → `dialogue-subtext-writer` → `reference-first-visual-production` → `performance-director` → `cinematic-director` → `ai-video-model-router` → `veo-shot-planner` → `continuity-supervisor` → `episode-qa`

Do not require a generated-video upload for planning or pre-generation QA. Video review is a separate optional post-generation step.

### Focused-revision mode
When the user changes one approved detail, rerun only the smallest affected downstream chain. Examples:
- hook/pacing weakness → retention director + affected direction/shot/edit notes; do not rewrite character identity
- dialogue change → dialogue + performance + downstream shot/QA updates if timing changes
- performance feels flat → performance + affected cinematic/shot prompts; do not rewrite plot unless motivation is actually broken
- wardrobe change → character/look state + reference binding + continuity + affected frame/shot prompts
- face/identity drift → reference-first visual production + affected visual/shot QA; do not rewrite story
- location drift → reference-first visual production + continuity + affected keyframes
- wrong model/tool for a shot → model router + shot planner; preserve approved story, acting and framing intent
- story beat change → story engine + every affected downstream skill
- generated visual artifact only → reference/visual/episode QA without rewriting the story unless necessary

## Recommended handoffs

### BEV campaign
`workflow-router` (when needed) → `bev-content-strategist` → `bev-parent-copywriter` → `bev-creative-director` → `visual-qa` → `bev-campaign-qa`

### AI drama full vertical episode
`ai-drama-episode-producer` → orchestrates `ai-drama-story-engine` → `vertical-drama-retention-director` → `character-architect` (when needed) → `dialogue-subtext-writer` → `reference-first-visual-production` → `performance-director` → `cinematic-director` → `ai-video-model-router` → `veo-shot-planner` → `continuity-supervisor` → `episode-qa`

### AI drama cinematic/non-vertical episode
Use the same chain but invoke `vertical-drama-retention-director` only when short-form/social attention architecture is relevant. Do not force vertical heuristics onto long-form scenes.

### AI drama focused task
Use the narrowest single specialist skill or short chain needed; do not invoke the whole episode pipeline for one prompt, one line, or one shot unless downstream continuity would break.

### Roblox commercial game
`roblox-retention-game-director` → `roblox-economy-monetization-director` (only when economy/monetization is in scope) → implementation handoff to Codex/Roblox Studio → post-release analytics feedback into the smallest affected skill

### Educational product
`educational-product-builder` → `digital-product-launcher` → `social-viral-strategist` / `caption-conversion-writer`

## Quality rules
1. One clear owner per decision.
2. Do not use five skills when two are sufficient.
3. For recurring visuals, bind actual approved reference assets instead of relying on prose memory alone.
4. For a shot, attach only references that own a required invariant; more references are not automatically better.
5. For research claims, separate evidence from marketing interpretation.
6. For stories, prioritize causality, motivation, escalation, and continuity over random twists.
7. For vertical retention, create a specific viewer-question chain without fake promises or mechanical cuts.
8. For performance, direct objectives, tactics, gaze, breath, body distance and emotional transitions rather than adjective piles.
9. For AI-video prompts, use the fewest reliable shots and justify start/end-frame locking.
10. Route models per shot and label volatile capability evidence as verified, user-confirmed, project-tested, or provisional.
11. For recurring drama, preserve approved canon, visual masters and stable shot IDs across revisions whenever possible.
12. For pre-generation QA, inspect the plan that exists; never block completion by asking for a video that has not been generated yet.
13. For monetization, use assumptions and ranges; never promise earnings.
14. For Roblox, instrument onboarding/progression/economy hypotheses before guessing from anecdotes when data can be collected.
15. For Roblox, do not trade join time, memory or low-end mobile usability for an unnecessarily large world.
16. For Roblox purchases, protect non-payer viability, receipt integrity and current paid-random-item policy compliance.

## Cinematic production standard
For prestige / cinematic / โปรดักชัน 100 ล้าน briefs, load the producer's bundled prestige-direction reference for production design, location geometry, performance, camera/light, edit and sound. Use model capability evidence before tool-specific controls. Treat the requested budget as an artistic aspiration, not spending authorization. Skill handoffs do not require parallel agents. Preserve existing smallest-chain routing.

For high-emotion performance, allow heightened or stage-level inner intensity when requested, but preserve psychological triggers and contrast. Do not set every beat to maximum emotion.

For current provider/model comparisons, verify time-sensitive capabilities outside the stable skill file and store the conclusion in `MODEL_ADAPTERS.md` with date/source when project persistence is useful.