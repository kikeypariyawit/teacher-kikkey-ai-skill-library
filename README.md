# Teacher Kikkey AI Skill Library v1.3

A curated **21-skill Agent Skills library** for recurring work across Bangyai English Village, social content, AI drama, image direction, educational products, and creator monetization.

The goal is not to collect hundreds of prompts. The goal is to create a small, high-quality operating system with clear routing, handoffs, QA, and version control.

## Skill catalog

- `bev-content-strategist` — Plan fresh, useful, non-repetitive content for Bangyai English Village that builds trust, engagement, and enrollment intent among parents.
- `bev-creative-director` — Create premium, modern, high-converting visual directions for Bangyai English Village without generic AI-poster or cheap-template aesthetics.
- `bev-parent-copywriter` — Write persuasive, warm, credible Thai parent-facing copy for BEV that feels human, specific, and education-first rather than salesy.
- `bev-education-researcher` — Turn child-development, English-learning, outdoor-play, and parenting topics into accurate, practical BEV content with careful evidence handling.
- `bev-campaign-qa` — Audit a complete BEV campaign or promotional asset for factual accuracy, consistency, conversion clarity, and visual/copy readiness.
- `social-viral-strategist` — Design social content concepts, hooks, and beat structures with high retention and shareability while protecting credibility and brand fit.
- `caption-conversion-writer` — Write social captions that keep the user's natural warmth while improving clarity, trust, engagement, and conversion.
- `ai-drama-episode-producer` — Orchestrate a complete AI-drama episode from canon lock through script, cinematic staging, shot planning, frame/video prompts, continuity, and final pre-generation QA.
- `ai-drama-story-engine` — Design bingeable short-form AI drama with causal episode structure, character-driven escalation, retention beats, setup/payoff, twists, and cliffhangers.
- `character-architect` — Build original, production-ready fictional characters with distinctive psychology, visual identity, behavior, voice, and long-term arc.
- `dialogue-subtext-writer` — Write natural Thai or English dramatic dialogue with subtext, character voice, internal monologue, and playable emotion.
- `cinematic-director` — Translate story beats into cinematic staging, performance, camera, lighting, blocking, and emotional visual language for AI film production.
- `veo-shot-planner` — Engineer generation-ready AI-video shots, choose start/end-frame strategy, route still/keyframe versus motion generation, and produce prompt packs with fallbacks.
- `continuity-supervisor` — Maintain character, wardrobe, prop, location, timeline, screen-direction, and story-state continuity across AI-generated episodes and shots.
- `episode-qa` — Perform rigorous pre-generation and post-generation QA, repair critical issues, and return a clear generation or release verdict.
- `image-art-director` — Develop distinctive, premium image concepts, prompts, and art direction before generation or editing.
- `visual-qa` — Inspect generated or edited visual assets for composition, typography, spelling, face integrity, crop, realism, and commercial polish.
- `educational-product-builder` — Design practical, sellable English-learning products for children, parents, and teachers with clear age fit, objectives, activities, and answer support.
- `digital-product-launcher` — Turn an educational or creator digital-product idea into a validated offer, packaging, pricing logic, sales assets, and launch plan.
- `monetization-strategist` — Build realistic creator revenue systems across content, digital products, services, affiliates, and platform monetization without fantasy projections.
- `workflow-router` — Route complex requests to the smallest useful combination of Teacher Kikkey AI Studio skills and define handoffs between them.

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

For requests like “ทำ EP ถัดไปให้จบ”, “script + storyboard + prompt ทั้งหมด”, or “ทำให้เสร็จแล้วรอ final approve”, use `ai-drama-episode-producer` as the lead orchestrator.

Default full-episode chain:

```text
ai-drama-episode-producer
  → ai-drama-story-engine
  → character-architect (only when needed)
  → dialogue-subtext-writer
  → cinematic-director
  → veo-shot-planner
  → continuity-supervisor
  → episode-qa
```

Important production rules:
- preserve approved character identity and prior canon unless explicitly changed;
- do not stop for intermediate approval when final-approve mode is requested;
- use start/end frames only when they materially improve identity, composition, state, or transitions;
- when the project has both a still/keyframe model and a motion model, route exact frame creation to the still model and moving shots to the motion model unless the user specifies otherwise;
- planning and pre-generation QA do **not** require an uploaded/generated video;
- post-generation visual review is optional and only applies when media is actually supplied.

## Recommended first tests

**BEV**
> Create one genuinely fresh BEV parent post. Avoid our common screen-time/outdoor angle. Use the relevant skills and QA it.

**AI drama — full episode**
> Continue the next episode from approved canon. Finish the script, storyboard, master shots, start/end-frame prompts, video prompts, continuity update, and pre-generation QA. Do not stop for intermediate approval; wait only for final approval.

**AI drama — focused task**
> Improve this one scene's chemistry and dialogue, then update only the affected shots and prompts without redesigning approved characters.

**Digital product**
> Build a sellable English printable pack for Thai parents with children aged 5–7, then create a validation-first launch plan.

## Versioning

- Patch `1.1.1`: wording / QA refinements
- Minor `1.2.0`: meaningful workflow/resources added without changing core ownership
- Major `2.0.0`: broad routing or repository-wide output-contract changes

## Security

Third-party skills can contain instructions and scripts. Review them before installing or running them. Never place API keys, passwords, tokens, or credentials in this repository.

## Next upgrade path

Suggested next additions:
- richer `PROJECT_BIBLE.md` and episode-state schemas for long-running drama;
- prompt adapters per model family kept separate from stable universal skills;
- scored continuity/visual QA rubrics based on real generation failures;
- project-specific reference packs for active series;
- regression evals from successful and failed episode outputs.

## Cinematic drama upgrade — v1.3.0

The eight existing drama skills now cover an ambitious production from story/ensemble through world design, heightened acting, motivated camera/light, selective spectacle, sound/editing, motion-preserving frames and evidence-based QA. “Production 100 ล้าน” describes creative ambition, not an actual budget or guaranteed result.

Start with `ai-drama-episode-producer` for a complete episode. Supporting craft references live inside the producer, cinematic director and shot planner bundles. Use `templates/CINEMATIC_TREATMENT.template.md` for a new ambitious project and `templates/SHOT_RENDER_MANIFEST.template.md` to track generation and editing.

Example: “ใช้ ai-drama-episode-producer ทำ EP ต่อจาก canon เดิม ให้ภาพและการแสดงแบบ cinematic production 100 ล้าน มีบท ฉาก แสง เสียง และ prompt รายช็อต เลือก start/end frame เท่าที่จำเป็น ตรวจแผนทั้งหมดก่อนส่ง”

Saving this repository does not itself install its skills in every chat product; use the product's supported skill mechanism or explicitly supply the relevant source files. Existing project canon remains in each project's own files.
