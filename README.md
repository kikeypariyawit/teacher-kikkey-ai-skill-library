# Teacher Kikkey AI Skill Library v1

A curated **20-skill Agent Skills library** for recurring work across Bangyai English Village, social content, AI drama, image direction, educational products, and creator monetization.

The goal is not to collect hundreds of prompts. The goal is to create a small, high-quality operating system with clear routing, handoffs, QA, and version control.

## Skill catalog

- `bev-content-strategist` — Plan fresh, useful, non-repetitive content for Bangyai English Village that builds trust, engagement, and enrollment intent among parents.
- `bev-creative-director` — Create premium, modern, high-converting visual directions for Bangyai English Village without generic AI-poster or cheap-template aesthetics.
- `bev-parent-copywriter` — Write persuasive, warm, credible Thai parent-facing copy for BEV that feels human, specific, and education-first rather than salesy.
- `bev-education-researcher` — Turn child-development, English-learning, outdoor-play, and parenting topics into accurate, practical BEV content with careful evidence handling.
- `bev-campaign-qa` — Audit a complete BEV campaign or promotional asset for factual accuracy, consistency, conversion clarity, and visual/copy readiness.
- `social-viral-strategist` — Design social content concepts, hooks, and beat structures with high retention and shareability while protecting credibility and brand fit.
- `caption-conversion-writer` — Write social captions that keep the user's natural warmth while improving clarity, trust, engagement, and conversion.
- `ai-drama-story-engine` — Develop bingeable short-form AI drama using premise, character wounds/secrets, escalation, setup/payoff, twists, cliffhangers, and continuity.
- `character-architect` — Build original, production-ready fictional characters with distinctive psychology, visual identity, behavior, voice, and long-term arc.
- `dialogue-subtext-writer` — Write natural English dramatic dialogue with subtext, character voice, internal monologue, and playable emotion.
- `cinematic-director` — Translate story beats into cinematic staging, performance, camera, lighting, blocking, and emotional visual language for AI film production.
- `veo-shot-planner` — Plan AI-video shots and decide when start/end frames are useful while keeping action fluid and prompts model-friendly.
- `continuity-supervisor` — Maintain character, wardrobe, prop, location, timeline, screen-direction, and story-state continuity across AI-generated episodes and shots.
- `episode-qa` — Perform rigorous story and production QA on an AI-drama episode before generation or release.
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

## Recommended first tests

**BEV**
> Create one genuinely fresh BEV parent post. Avoid our common screen-time/outdoor angle. Use the relevant skills and QA it.

**AI drama**
> Improve Episode 1 so the hook lands within 3 seconds, dialogue is in English, performance has strong inner emotion, and choose only the Veo shots that truly need start/end frames.

**Digital product**
> Build a sellable English printable pack for Thai parents with children aged 5–7, then create a validation-first launch plan.

## Versioning

- Patch `1.0.1`: wording / QA refinements
- Minor `1.1.0`: meaningful workflow/resources added
- Major `2.0.0`: routing or output-contract changes

## Security

Third-party skills can contain instructions and scripts. Review them before installing or running them. Never place API keys, passwords, tokens, or credentials in this repository.

## Next upgrade path

v1.1 should add:
- project-specific reference packs,
- structured BEV canonical facts,
- richer AI-drama continuity schemas,
- scored visual QA rubrics,
- real eval cases based on successful/failed outputs.
