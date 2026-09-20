# Teacher Kikkey AI Skill Library v4

A curated Agent Skills library for recurring work across Bangyai English Village, social content, AI drama, Roblox game product design, image direction, educational products, and creator monetization.

The goal is not to collect hundreds of prompts. The goal is to build a small, high-quality operating system with clear decision ownership, routing, handoffs, QA, canonical project state, reference-first visuals, and version control.

## Core AI drama idea

For serialized AI drama, do **not** treat each shot as an independent prompt.

Use this production logic:

**Canon → Story → Retention → Character → Dialogue → References → Performance → Cinematography → Model Routing → Shot Engineering → Continuity → QA**

Approved references define identity/state. Prompts direct what those approved assets do next.

## Skill catalog

### Bangyai English Village
- `bev-content-strategist` — Fresh, non-repetitive parent content strategy.
- `bev-creative-director` — Premium BEV visual direction.
- `bev-parent-copywriter` — Warm, credible parent-facing Thai copy.
- `bev-education-researcher` — Research-backed child-development / English-learning content.
- `bev-campaign-qa` — Campaign accuracy, consistency and conversion QA.

### Social
- `social-viral-strategist` — Hooks, concepts and social retention.
- `caption-conversion-writer` — Finished captions with clarity, trust and conversion.

### AI Drama Studio
- `ai-drama-episode-producer` — Lead orchestrator for complete episodes and final-approve packages.
- `ai-drama-story-engine` — Causal episode structure, escalation, setup/payoff, twists and cliffhangers.
- `vertical-drama-retention-director` — Vertical hook, viewer-question chain, reveal pacing and attention architecture.
- `character-architect` — Character psychology, identity invariants, voice and arc.
- `dialogue-subtext-writer` — Dialogue, subtext and inner monologue.
- `reference-first-visual-production` — Character/Look/Location Masters, scene anchors, reference bindings and drift repair.
- `performance-director` — Playable acting, gaze, breath, body behavior, tactics and emotional turns.
- `cinematic-director` — Blocking, camera, lighting, production design, reveal strategy and visual language.
- `ai-video-model-router` — Per-shot still/video model routing, evidence status, cost-quality-risk allocation and fallbacks.
- `veo-shot-planner` — Start/end-frame strategy, shot engineering and ready-to-paste motion prompt packs after routing.
- `continuity-supervisor` — Cross-shot/cross-episode character, wardrobe, prop, location and story-state continuity.
- `episode-qa` — Pre-generation and post-generation episode QA and repair.

### Roblox Game Studio
- `roblox-retention-game-director` — FTUE, core/session/meta loops, replayability, progression, social play, analytics instrumentation, discovery-signal diagnosis, mobile performance, and Codex implementation handoffs.
- `roblox-economy-monetization-director` — currencies, sources/sinks, passes, developer products, subscriptions, pricing, purchase funnels, receipt integrity, and policy-aware monetization.
- Dated platform evidence lives in `docs/ROBLOX_PLATFORM_RESEARCH_2026-09-20.md`; current platform claims should be re-verified before implementation.

### Image
- `image-art-director` — Premium image concepts and art direction.
- `visual-qa` — Composition, typography, crop, face integrity and commercial-polish QA.

### Products / Business
- `educational-product-builder` — Sellable English-learning resources.
- `digital-product-launcher` — Offer, packaging, validation and launch plan.
- `monetization-strategist` — Realistic creator revenue systems.
- `workflow-router` — Routes complex requests to the smallest useful skill chain.

## Repository structure

```text
.
├── AGENTS.md
├── README.md
├── CHANGELOG.md
├── skills/<skill-name>/SKILL.md
├── templates/
├── examples/
├── evals/
└── scripts/validate_skills.py
```

## AI drama default workflow

For a narrow request, use the narrowest specialist skill.

For requests like “ทำ EP ถัดไปให้จบ”, “script + storyboard + prompt ทั้งหมด”, or “ทำให้เสร็จแล้วรอ final approve”, use `ai-drama-episode-producer` as lead.

### Full vertical-drama chain

```text
ai-drama-episode-producer
  → ai-drama-story-engine
  → vertical-drama-retention-director
  → character-architect (only when needed)
  → dialogue-subtext-writer
  → reference-first-visual-production
  → performance-director
  → cinematic-director
  → ai-video-model-router
  → veo-shot-planner
  → continuity-supervisor
  → episode-qa
```

For cinematic/non-vertical work, invoke `vertical-drama-retention-director` only when short-form/social attention architecture is relevant.

## Decision ownership

The Studio v4 system deliberately separates decisions that are often mixed into one huge prompt:

- **Story engine** — what happens and why.
- **Retention director** — why the viewer keeps watching the next beat.
- **Reference-first production** — what visual truth must stay the same.
- **Performance director** — what the actor wants, hides, does and feels.
- **Cinematic director** — how the scene is staged, lit and photographed.
- **Model router** — which current model/tool should attempt each shot and why.
- **Shot planner** — how to engineer the selected route into reliable start/end/motion prompts.
- **Continuity supervisor** — what state survives into the next shot/episode.

This makes focused revisions safer: a face-drift problem should not rewrite the plot; a weak hook should not redesign the character; a model failure should not destroy approved cinematography.

## Reference-first visual production

For recurring characters:
1. Approve Character Masters.
2. Approve Look/Costume Masters.
3. Approve recurring Location Masters.
4. Create a Scene Anchor when many connected shots depend on the same state.
5. Bind only the references that own something the shot must preserve.
6. Use the previous accepted shot as a local continuity anchor, but keep global masters in the chain.
7. Record `must preserve`, `allowed to change`, and `intentional delta`.
8. Repair the failing ownership layer instead of regenerating everything.

Do not rely on “same character as before” when actual approved references exist.

## Start/end-frame rule

Use a start frame when identity, pose, composition, wardrobe, prop state, screen direction or environment needs control.

Use an end frame only when the landing state materially matters, such as an exact reveal, transition match, object state or continuity-critical destination.

Do **not** automatically use start+end frames for subtle acting, crying, breathing, kissing, walking, fighting or hair/cloth motion if it makes interpolation stiff.

## Per-shot model routing

Do not decide “this whole episode uses one model” by habit.

For each shot evaluate:
- identity sensitivity
- number of characters
- performance subtlety
- physical interaction complexity
- camera/environment motion
- exact landing-state need
- dialogue/audio requirements
- iteration budget / speed / cost sensitivity

Provider/model capability claims are volatile. Record them in project `MODEL_ADAPTERS.md` with one evidence state:
- `VERIFIED_CURRENT`
- `USER_CONFIRMED`
- `KNOWN_PROJECT_TEST`
- `PROVISIONAL`

Never present `PROVISIONAL` capability as fact.

## Canonical project files

For a recurring drama project, prefer:

```text
PROJECT_BIBLE.md
CHARACTER_BIBLE.md
CONTINUITY_LEDGER.md
EPISODE_STATUS.md
ASSET_REGISTRY.md
MODEL_ADAPTERS.md
```

Templates are provided in `/templates`.

`ASSET_REGISTRY.md` tracks approved Character/Look/Location Masters, Scene Anchors and shot assets. `MODEL_ADAPTERS.md` tracks current provider/model capability evidence and project tests separately from stable skill rules.

## Recommended first tests

**AI drama — full vertical episode**
> Continue the next episode from approved canon. Finish story, vertical-retention map, dialogue, reference bindings, performance map, cinematic storyboard, per-shot model routing, start/end-frame prompts, motion prompts, continuity update and pre-generation QA. Do not stop for intermediate approval; wait only for final approval.

**AI drama — focused face-drift repair**
> Preserve the approved story, acting and camera. Diagnose only the reference ownership failure and repair the smallest affected visual/shot chain.

**AI drama — model routing**
> Use the approved shot list. Route each shot independently across my available tools, label current capability evidence, allocate hero/core/utility quality tiers, and provide fallback routes before writing final motion prompts.

**Roblox — retention/product pass**
> Audit my current playable build as a mobile-first Roblox product. Define the player promise, FTUE funnel, core/session/meta/return/social loops, progression, analytics events, performance gates, highest-risk retention leaks, and a prioritized Codex implementation brief. Do not promise Top-10 placement.

**Roblox — economy/monetization pass**
> Design a fair economy and monetization layer only after the core loop is clear. Map currencies, sources/sinks, stage-specific wallet assumptions, SKU/value ladder, purchase moments, receipt/idempotency requirements, analytics events, policy gates, and post-launch rebalance rules.

**BEV**
> Create one genuinely fresh BEV parent post. Avoid our common screen-time/outdoor angle. Use the relevant skills and QA it.

## Security

Third-party skills can contain instructions and scripts. Review them before installing or running them. Never place API keys, passwords, tokens or credentials in this repository.

## Product-use note

Saving this repository does not itself install every skill into every ChatGPT surface automatically. Use the product's supported skill/app mechanism when available, or explicitly tell ChatGPT/Work to read `AGENTS.md` and the relevant `SKILL.md` files from the connected repository.

Recommended instruction for a new AI-drama Work task:

> Use `teacher-kikkey-ai-skill-library` as the production operating system. Read `AGENTS.md` first. Load only the smallest relevant AI-drama skill chain. Read the project's canonical files before changing approved canon. Use reference-first visual production and route video models per shot. Do not regenerate approved character identity unnecessarily.

## Versioning

- Patch: wording / QA refinements
- Minor: meaningful workflow/resources added without changing major ownership
- Major: repository-wide ownership or routing changes

Studio v4 adds an evidence-driven Roblox product/economy layer and upgrades AI drama with promise/debt control, anti-sag season architecture, production-aware complexity and analytics-based retention repair.