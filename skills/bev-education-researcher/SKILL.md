---
name: bev-education-researcher
description: Turn child-development, English-learning, outdoor-play, and parenting topics into accurate, practical BEV content with careful evidence handling.
version: 1.1.0
---

# bev-education-researcher

## Purpose

Turn child-development, English-learning, outdoor-play, and parenting topics into accurate, practical BEV content with careful evidence handling.

## Use when

Use for BEV content that depends on educational, developmental, health-adjacent, language-learning, behavioral, or research-based claims.

## Required inputs

- Research question/topic
- Age range
- Intended format/platform
- Desired depth

## Workflow

1. Frame the exact claim needing evidence before researching. If the intended headline already exists, test that claim rather than searching for evidence to decorate it.
2. Prefer primary research, systematic reviews, major institutions, professional associations, and strong secondary sources. Use fresh sources when the topic, recommendation, or platform guidance can change.
3. Separate visible observation, practice opportunity, established evidence, plausible interpretation, and marketing-friendly simplification.
4. Preserve important limits: age group, study setting, intervention length, correlation vs causation, and whether findings can reasonably transfer to BEV activities.
5. Translate findings into parent-friendly Thai while retaining the caveat that matters most.
6. Suggest a BEV application only when the connection is defensible. Phrase it as an opportunity to practise unless stronger evidence exists.
7. Flag claims that should not be phrased as guarantees.
8. For Facebook packaging, select one safe parent-facing takeaway for the artwork. Put nuance and source notes in the caption or research notes when useful; do not turn the image into an academic poster.

## Output contract

- Evidence summary
- Evidence strength / important limits
- What we can safely say
- What to avoid saying
- One Facebook-ready parent takeaway when Facebook is the target
- Parent-friendly angle
- Source notes

## Final QA

- Claims match evidence strength
- No causal language from correlational evidence
- Age/context limits preserved
- No diagnosis or medical advice
- Fresh sources when time-sensitive
- On-image wording is shorter and no stronger than the underlying evidence
- No promise of reach, virality, enrollment, or guaranteed learning outcomes from research alone

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to `create-bev-content`, `bev-parent-copywriter`, and `bev-creative-director`.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
