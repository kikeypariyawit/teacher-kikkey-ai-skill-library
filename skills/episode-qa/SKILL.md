---
name: episode-qa
description: Perform rigorous story and production QA on an AI-drama episode before generation or release.
version: 1.0.0
---

# episode-qa

## Purpose

Perform rigorous story and production QA on an AI-drama episode before generation or release.

## Use when

Use for After drafting an episode, scene pack, or generated cut and before moving to the next episode.

## Required inputs

- Episode script/shot plan
- Series bible
- Prior episode state
- Target runtime/platform

## Workflow

1. Score the opening hook for immediate clarity and tension.
2. Check scene purpose, escalation, emotional turn, and information gain.
3. Check character motivation and dialogue naturalness.
4. Verify setup/payoff, foreshadowing, and twist logic.
5. Check continuity against prior state.
6. Assess whether the cliffhanger creates a specific next-question.
7. Identify production-risk shots and simplify without reducing story impact.
8. Prioritize fixes as critical, important, or polish.

## Output contract

- QA scorecard
- Critical fixes
- Story fixes
- Dialogue fixes
- Continuity fixes
- Production fixes
- Release verdict

## Final QA

- No unresolved logic hole
- Runtime plausible
- Cliffhanger earns continuation
- Fixes actionable
- Do not rewrite working material unnecessarily

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
