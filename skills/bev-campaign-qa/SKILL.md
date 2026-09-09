---
name: bev-campaign-qa
description: Audit a complete BEV campaign or promotional asset for factual accuracy, consistency, conversion clarity, and visual/copy readiness.
version: 1.0.0
---

# bev-campaign-qa

## Purpose

Audit a complete BEV campaign or promotional asset for factual accuracy, consistency, conversion clarity, and visual/copy readiness.

## Use when

Use for Before publishing a BEV campaign, poster set, carousel, event promo, landing section, or paid-ad creative.

## Required inputs

- Creative/copy/assets
- Known event facts
- Brand rules
- Platform/ratio

## Workflow

1. Extract factual claims: event, date, time, price, inclusions, contact, age, CTA.
2. Cross-check repeated facts for conflicts.
3. Inspect mobile hierarchy: first, second, and third read.
4. Check Thai/English spelling, punctuation, numeric formatting, and price presentation.
5. Check visual consistency, logo use, face/photo integrity, and crop safety.
6. Assess whether the message is understandable without reading every line.
7. Return fixes prioritized as critical, important, and polish.

## Output contract

- Launch verdict
- Critical fixes
- Important fixes
- Polish opportunities
- Final publish checklist

## Final QA

- No factual conflicts
- CTA visible
- Offer understandable in seconds
- No missing required data

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
