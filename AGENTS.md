# Teacher Kikkey AI Studio — AGENTS.md

## Mission
A reusable operating system for recurring creative, education, marketing, AI-film, and digital-product work.

## First principles
- Use the **smallest useful skill chain**.
- One skill owns each major decision.
- Creation happens before QA.
- Keep volatile project facts in the project repository, not in universal skills.
- When facts conflict, surface the conflict instead of guessing.
- For recurring production, preserve approved canon and only revise the smallest affected downstream chain.

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
- Story architecture → `ai-drama-story-engine`
- Character bible → `character-architect`
- Dialogue / inner monologue → `dialogue-subtext-writer`
- Staging / cinematic language → `cinematic-director`
- Veo/Flow shots / start-end frames / generation prompts → `veo-shot-planner`
- Cross-shot / cross-episode state → `continuity-supervisor`
- Episode audit → `episode-qa`

### Image
- Concept + prompt + art direction → `image-art-director`
- Final visual audit → `visual-qa`

### Products / Business
- Worksheets / e-books / learning resources → `educational-product-builder`
- Offer + launch → `digital-product-launcher`
- Revenue system / prioritization → `monetization-strategist`

## Canonical project-state rule
Before execution on recurring projects, read the project's current source-of-truth (for example `PROJECT_BIBLE.md`, event sheet, continuity ledger, latest approved brief, or approved character references). Stable skills should not hard-code volatile dates, prices, schedules, model versions, or campaign state.

If a character identity, face, costume state, relationship, prior episode, or production choice is already approved, keep it locked unless the user explicitly changes it.

## AI drama execution modes

### Final-approve mode
When the user says things such as “ทำ EP ถัดไปให้จบ”, “ทำทั้งหมดเลย”, “รอ final approve”, “script + storyboard + prompts”, or equivalent, route to `ai-drama-episode-producer` as the lead orchestrator.

The producer should execute the full required chain without stopping for intermediate approvals:
`ai-drama-story-engine` → `character-architect` (only when needed) → `dialogue-subtext-writer` → `cinematic-director` → `veo-shot-planner` → `continuity-supervisor` → `episode-qa`

Do not require a generated-video upload for planning or pre-generation QA. Video review is a separate optional post-generation step.

### Focused-revision mode
When the user changes one approved detail, rerun only the smallest affected downstream chain. Examples:
- dialogue change → dialogue + downstream shot/QA updates if timing changes
- wardrobe change → character/continuity + affected frame/shot prompts
- story beat change → story engine + every affected downstream skill
- generated visual artifact only → visual/episode QA without rewriting the story unless necessary

## Recommended handoffs

### BEV campaign
`workflow-router` (when needed) → `bev-content-strategist` → `bev-parent-copywriter` → `bev-creative-director` → `visual-qa` → `bev-campaign-qa`

### AI drama full episode
`ai-drama-episode-producer` → orchestrates `ai-drama-story-engine` → `character-architect` (when needed) → `dialogue-subtext-writer` → `cinematic-director` → `veo-shot-planner` → `continuity-supervisor` → `episode-qa`

### AI drama focused task
Use the narrowest single specialist skill or short chain needed; do not invoke the whole episode pipeline for one prompt, one line, or one shot unless downstream continuity would break.

### Educational product
`educational-product-builder` → `digital-product-launcher` → `social-viral-strategist` / `caption-conversion-writer`

## Quality rules
1. One clear owner per decision.
2. Do not use five skills when two are sufficient.
3. For visuals, make identity constraints explicit.
4. For research claims, separate evidence from marketing interpretation.
5. For stories, prioritize causality, motivation, escalation, and continuity over random twists.
6. For AI-video prompts, use the fewest reliable shots and justify start/end-frame locking.
7. For recurring drama, preserve approved canon and stable shot IDs across revisions whenever possible.
8. For pre-generation QA, inspect the plan that exists; never block completion by asking for a video that has not been generated yet.
9. For monetization, use assumptions and ranges; never promise earnings.

## Cinematic production standard
For prestige / cinematic / โปรดักชัน 100 ล้าน briefs, load the producer's bundled prestige-direction reference for production design, location geometry, performance, camera/light, edit and sound. Use model capability evidence before tool-specific controls. Treat the requested budget as an artistic aspiration, not spending authorization. Skill handoffs do not require parallel agents. Preserve existing smallest-chain routing.
