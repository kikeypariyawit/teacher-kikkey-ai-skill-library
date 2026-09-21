---
name: workflow-router
description: Route complex requests to the smallest useful combination of Teacher Kikkey AI Studio skills and define handoffs between them.
version: 1.2.0
---

# workflow-router

## Purpose

Route complex requests to the smallest useful combination of Teacher Kikkey AI Studio skills and define handoffs between them.

## Use when

Use for Tasks spanning multiple domains, 'do everything' requests, or ambiguous ownership.

## Required inputs

- User request
- Available assets/tools
- Desired final artifact
- Constraints/deadline

## Workflow

1. Identify the final deliverable before selecting skills.
2. Resolve canonical project facts first when changing dates, prices, assets, or continuity matter; flag conflicts rather than guessing.
3. Choose one lead skill responsible for end-to-end coherence.
   - For AI-drama requests involving a major recurring environment, add `ai-production-designer`; for a true crowd/event/epic signature sequence, add `cinematic-setpiece-director`. Do not add either to ordinary dialogue coverage by default.
   - For Roblox game requests, use `roblox-retention-game-director` as lead for product/retention/gameplay. Add `roblox-economy-monetization-director` only when currencies, purchases or monetization are materially in scope.
   - For current Roblox platform/policy claims, require official-source verification rather than relying on stale skill text.
4. Add only supporting skills with distinct capabilities.
5. Define the handoff artifact between skills.
6. Avoid overlapping skills for the same decision.
7. Place QA skills after creation rather than mixing them into ideation.
8. Return a compact chain and then execute it unless planning only was requested.

## Output contract

- Lead skill
- Supporting skills
- Execution order
- Canonical facts/conflicts if relevant
- Handoff artifacts
- Final QA

## Final QA

- One clear owner per decision
- No redundant skill calls
- Volatile facts not silently invented
- Final output coherent
- QA before completion

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent missing facts, dates, prices, references, research support, or asset state.
- Prefer concrete decisions and finished outputs over generic advice.
- Keep the result easy to hand off to the next skill.
- If an external action needs an unavailable tool or permission, complete every possible upstream step and state the blocked action clearly.
