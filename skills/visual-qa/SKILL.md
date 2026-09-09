---
name: visual-qa
description: Inspect generated or edited visual assets for composition, typography, spelling, face integrity, crop, realism, and commercial polish.
version: 1.0.0
---

# visual-qa

## Purpose

Inspect generated or edited visual assets for composition, typography, spelling, face integrity, crop, realism, and commercial polish.

## Use when

Use for After image generation/editing and before publishing or requesting a final revision.

## Required inputs

- Image/asset
- Original references
- Required copy
- Brand rules
- Target platform

## Workflow

1. Check required facts and exact text first.
2. Inspect face identity, anatomy, hands, logos, product shapes, and high-risk generated details.
3. Check hierarchy at thumbnail/mobile size.
4. Check alignment, spacing rhythm, margins, optical centering, and edge safety.
5. Check lighting consistency, realism, cutout quality, and AI artifacts.
6. Recommend the smallest surgical edits with the largest quality impact.
7. Re-QA after every major edit.

## Output contract

- Pass/fail
- Critical errors
- Hierarchy findings
- Artifact findings
- Surgical edit list

## Final QA

- No hidden text error
- No prohibited face replacement
- No cropped critical elements
- Revision list prioritized
- Publish-ready only if critical list empty

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
