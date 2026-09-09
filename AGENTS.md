# Teacher Kikkey AI Studio — AGENTS.md

## Mission
A reusable operating system for recurring creative, education, marketing, AI-film, and digital-product work.

## First principles
- Use the **smallest useful skill chain**.
- One skill owns each major decision.
- Creation happens before QA.
- Keep volatile project facts in the project repository, not in universal skills.
- When facts conflict, surface the conflict instead of guessing.

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
- Story architecture → `ai-drama-story-engine`
- Character bible → `character-architect`
- Dialogue / inner monologue → `dialogue-subtext-writer`
- Staging / cinematic language → `cinematic-director`
- Veo shots / start-end frames → `veo-shot-planner`
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
Before execution on recurring projects, read the project's current source-of-truth (for example `PROJECT_BIBLE.md`, event sheet, continuity ledger, or latest approved brief). Stable skills should not hard-code volatile dates, prices, schedules, model versions, or campaign state.

## Recommended handoffs

### BEV campaign
`workflow-router` (when needed) → `bev-content-strategist` → `bev-parent-copywriter` → `bev-creative-director` → `visual-qa` → `bev-campaign-qa`

### AI drama episode
`workflow-router` (when needed) → `ai-drama-story-engine` → `character-architect` (when needed) → `dialogue-subtext-writer` → `cinematic-director` → `veo-shot-planner` → `continuity-supervisor` → `episode-qa`

### Educational product
`educational-product-builder` → `digital-product-launcher` → `social-viral-strategist` / `caption-conversion-writer`

## Quality rules
1. One clear owner per decision.
2. Do not use five skills when two are sufficient.
3. For visuals, make identity constraints explicit.
4. For research claims, separate evidence from marketing interpretation.
5. For stories, prioritize causality, motivation, escalation, and continuity over random twists.
6. For monetization, use assumptions and ranges; never promise earnings.
