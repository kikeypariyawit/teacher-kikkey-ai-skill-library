# Changelog

## 1.1.0 — 2026-09-09
- Added `ai-drama-episode-producer` as the lead orchestrator for full-episode/final-approve workflows.
- Upgraded `ai-drama-story-engine` to v2.0.0 with canon lock, retention mapping, decision-chain logic, relationship escalation, and stronger story handoffs.
- Upgraded `veo-shot-planner` to v2.0.0 with stable shot IDs, still-vs-motion routing, start/end-frame prompt design, continuity anchors, and practical fallbacks.
- Upgraded `episode-qa` to v2.0.0 with separate pre-generation/post-generation modes, automatic repair, scorecard/verdict, and no video-upload dependency for planning.
- Updated `AGENTS.md` routing so full next-episode and “wait for final approval” requests run end-to-end without unnecessary stage-gating.
- Added regression smoke tests for approved-character preservation, no-upload pre-generation planning, justified start/end-frame use, and focused revisions.
- Expanded the AI drama workflow example and README documentation.

## 1.0.0 — 2026-09-09
- Initial release.
- Added 20 curated skills.
- Added routing rules, project-state guidance, templates, examples, smoke tests, and validation script.
