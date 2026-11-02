---
name: bev-3d-social-impact
description: Plan and produce social-value 3D content for Bangyai English Village — public-good child topics (water safety, active play, kindness, nature) told through a code-rendered clay-diorama island, where BEV takes a real, verifiable part in the solution instead of only advertising.
version: 1.0.0
---

# bev-3d-social-impact

## Purpose

Own the decision of **which public-good topic a BEV 3D piece serves, what the safe and evidence-backed message is, and what concrete part BEV itself plays** — then hand the approved package to the 3D render chain. The content must be useful to any Thai family even if the BEV name were removed; BEV earns trust by participating, not by claiming.

## Use when

- “3D content ที่มีคุณค่าต่อสังคม”, “คอนเทนต์เพื่อสังคม”, CSR, public-service clips, safety/health/kindness explainers for BEV
- a new episode of the **Brave Helpers Island / เกาะเด็กกล้าช่วย** series (`docs/BEV_3D_BRAVE_HELPERS_SERIES.md`)
- turning a child-safety or child-wellbeing rule into a short 3D clip, poster still or classroom loop

Do not use for ordinary booking promos (use `bangyai-3d-promo` / `bev-content-strategist`) or for real-photo documentary posts.

## Required inputs

- Topic or social problem (or ask the series backlog for the next episode)
- Latest research note (`docs/BEV_3D_SOCIAL_IMPACT_RESEARCH_*.md`) — re-verify anything older than ~6 months
- What BEV is actually willing/able to do (a station, a briefing, a free download, a partner) — never assume
- Target surface (Reels/TikTok 9:16 default; 4:5 still; classroom loop)

## Workflow

1. **Pick a topic that passes the three gates.** (a) a real, documented child problem in Thailand; (b) an official or well-evidenced *action* a child or parent can do; (c) a natural link to BEV’s outdoor/English setting. Drop topics that fail any gate.
2. **Write the claim sheet first** with `bev-education-researcher`: exact numbers with year and source, evidence status (verified / search-summary only / unverified), safe wording, words to avoid. Prefer the official rule wording (e.g. กรมควบคุมโรค “ตะโกน โยน ยื่น”) over paraphrase.
3. **Define BEV’s part.** Choose 1–2 concrete, checkable actions (e.g. a pre-activity safety briefing, a visible safety spot at water activities, a free printable for schools, sharing the clip without logo-gating). Mark each as `proposed` until the owner confirms it is real; only confirmed actions may appear in captions or on screen.
4. **Design the episode** (one rule per episode): hook question a child can answer → wrong instinct shown and stopped kindly → 2–4 numbered steps, each one visible action + big English word + Thai line → safe resolution → recap card with one CTA that is a *family action* (practise, share, check), not a booking push.
5. **Safety framing gates.** Never show a child in real danger: use a practice dummy/teddy, a drill, or an adult-supervised setting. Never show children entering water, crossing roads alone, or touching hazards as the “brave” choice. Always include adult supervision in the recap. No fear, gore, guilt or shaming of parents.
6. **Produce** with the existing chain: craft → `threejs-3d-studio`; brand facts and reel format → `bangyai-3d-promo`; frame-accurate export → `motion-design`; VO/SFX → ElevenLabs (only after the user approves credit spend); caption → `bev-parent-copywriter` / `caption-conversion-writer`.
7. **Probe → fix → render.** Render probe stills of every beat, check the contact sheet (subject visible, no occlusion, no water/foliage aliasing, text not on faces, bubbles ≤ y 1170), fix only failing shots, then render the full clip.
8. **QA** with `bev-campaign-qa` plus the checks below before calling anything ready.

## Output contract

- Topic + gate check (problem / action / BEV link)
- Claim sheet with sources and evidence status
- BEV participation actions, each marked `proposed` or `confirmed`
- Beat sheet (time, visual action, EN word, TH line, bubble)
- Rendered 3D file(s) or the exact blocker
- VO script, sound map, caption with one family-action CTA
- QA verdict and open items

## Final QA

- The rule shown matches the official/evidence wording; numbers carry year + source
- No child shown in real danger; adult supervision present in recap
- Each step readable muted at phone size (EN word + TH line + visible action)
- Thai marks intact; English short and natural
- BEV participation claims only where confirmed; no invented partnerships, certifications or statistics
- Useful even with the BEV name removed
- One CTA; no prices, seat counts or booking pressure inside a public-good piece

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Treat an official safety rule as the owner’s message: simplify layout, never alter the rule.
- Official BEV logo: place the supplied file once in edit; never redraw it in 3D.
- Generated or code-rendered children must be clearly stylised (clay/toy), never presented as real BEV students.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
