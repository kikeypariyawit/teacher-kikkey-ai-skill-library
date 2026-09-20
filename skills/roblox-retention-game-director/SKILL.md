---
name: roblox-retention-game-director
description: Design and improve Roblox games for first-session clarity, replayability, social play, progression, live-ops readiness, analytics instrumentation, mobile performance, and long-term retention without copying hit games.
version: 1.0.0
---

# roblox-retention-game-director

## Purpose

Own Roblox game-product design from first click through repeat play. Turn a concept or playable prototype into a measurable retention system with a clear core loop, strong first-time user experience, session goals, progression, social reasons to return, content expansion paths, and instrumentation.

This skill does not promise rankings or virality. It optimizes controllable product signals and player value, then uses real analytics to decide what to change next.

## Use when

Use for:
- new Roblox concepts, MVPs, prototypes and commercial experiences
- “make this more fun”, “make players return”, “make the map feel bigger”
- first 60 seconds / FTUE / onboarding
- core-loop, session-loop, meta-loop and progression design
- replayability, collection, quests, social loops and live events
- retention diagnosis after playtests or Creator Analytics data
- product requirements for Codex or Roblox Studio implementation
- mobile-first scope and performance-aware world design

Use with 'roblox-economy-monetization-director' when revenue design is needed.

## Platform evidence rule

Roblox discovery, analytics, monetization features and policy details can change. Before making a current platform claim, verify official Roblox Creator Hub documentation. Keep volatile facts in a dated research note or project file rather than hard-coding them as permanent design truth.

Current research snapshot: docs/ROBLOX_PLATFORM_RESEARCH_2026-09-20.md

## Required inputs

Use the best available combination of:
- game premise and target fantasy
- current playable build or implementation notes
- target audience and device priority
- solo/team capacity and budget
- current map/content size
- existing progression/economy/social systems
- Creator Analytics, funnel data or playtest observations when available
- constraints from Roblox Studio/Codex architecture

Do not block on missing analytics for an early prototype. Define the instrumentation plan and proceed with explicit assumptions.

## Product model

Define five connected loops:

1. **Moment-to-moment loop** — what the player repeatedly does every 5–30 seconds.
2. **Session loop** — what creates a satisfying 5–20 minute play session.
3. **Progression loop** — what becomes meaningfully different across sessions.
4. **Social loop** — why another person improves the experience.
5. **Return loop** — why tomorrow or next week contains a new goal.

If one loop exists only as rewards/UI and not as enjoyable play, flag it.

## Workflow

### 1. Lock the player promise

Write one sentence:
“Players come here to feel ______ by doing ______.”

Then define:
- primary fantasy
- skill expression
- collection fantasy
- social fantasy
- surprise/novelty source
- what makes the game recognizably its own IP

Do not design from “what top games have” alone.

### 2. Audit first-play bounce risk

Inspect the earliest playable path:
- join/load time
- first readable objective
- first player-controlled action
- first success
- first interesting choice
- first visible reward/progression
- first reason to continue

Favor getting the player into the fun immediately. Remove lobby wandering, long exposition, mandatory menus and tutorial text that delays play.

Treat the first minute as an instrumented funnel, not a rigid cinematic script.

### 3. Build the FTUE funnel

Define named steps that can be logged, for example:
- Joined
- SpawnedPlayable
- UnderstoodGoal
- CompletedFirstAction
- EarnedFirstReward
- MadeFirstUpgrade
- BeganSecondLoop
- CompletedFirstSessionGoal

For each step specify:
- expected player action
- failure/confusion risk
- event to log
- recovery affordance
- what the player learns by doing

Never hide a weak FTUE behind free currency.

### 4. Strengthen the core loop

A strong loop contains:
- readable goal
- action
- feedback
- consequence
- reward or changed state
- meaningful next choice

Audit:
- decision frequency
- downtime
- control responsiveness
- reward clarity
- repeated-animation fatigue
- waiting and travel time
- whether failure teaches something
- whether mastery changes how the player plays

### 5. Design session shape

Each session should have:
- a fast re-entry goal
- one near-term attainable target
- one aspirational target
- one optional branch
- a satisfying stopping point
- a visible reason to return

Use layered goals so a player can stop after one small win or continue toward a larger one.

### 6. Build progression without filler

Separate:
- power progression
- access progression
- mastery progression
- collection progression
- expression/cosmetic progression
- social/status progression

Progression should unlock new decisions, spaces, strategies, stories or identity—not only bigger numbers.

Avoid:
- exponential grind without new play
- content gates that exist only to stretch time
- resets that erase value without a compelling new layer
- upgrade trees where one choice is always correct

### 7. Create replayability

Use a controlled mix of:
- variable objectives
- collectible sets
- rotating modifiers
- branching upgrades
- player-authored goals
- mastery challenges
- emergent interactions
- rare but understandable discoveries
- limited-time or update content only when core play already works

Novelty must alter play, not merely reskin rewards.

### 8. Design social value

Ask what becomes better with another player:
- cooperation
- competition
- trading where policy allows
- gifting
- shared construction
- rescue/help
- asynchronous comparison
- group goals
- private-server play
- inviting friends into a useful role

Do not bolt on an invite prompt before there is a genuine co-play benefit.

When appropriate, design an invite moment after a positive achievement or at a point where a friend clearly improves the next goal.

### 9. Plan return reasons and live ops

Return reasons can include:
- unfinished personal goal
- evolving collection
- social obligation or shared progress
- new challenge
- event
- update
- personalized consequence
- creator/community content

Do not rely on streak anxiety as the primary retention mechanic.

For every recurring system define:
- cadence
- content cost
- reuse strategy
- what changes gameplay
- what happens if the player misses it

### 10. Instrument before guessing

Use Roblox analytics categories deliberately:
- funnel events for onboarding, progression and shop steps
- economy events for resource sources, sinks and wallet balance
- custom events for game-specific adoption and core-loop behavior

Define event names before implementation and keep them stable enough to compare cohorts.

For each design hypothesis write:
- hypothesis
- metric
- segment
- expected directional change
- minimum observation window
- confounds
- keep / iterate / remove rule

Do not claim causation from one metric spike.

### 11. Use platform discovery signals as diagnostics

When current official documentation confirms them, inspect relevant signals such as:
- play-through rate from recommendations
- first-play bounce
- play days per user
- qualified play sessions
- intentional co-play
- playtime
- spend days / spend per user

Do not game one metric at the expense of player satisfaction. Optimize the product system behind the signal.

### 12. Mobile-first performance gate

Before expanding the world, audit:
- join time
- low-end mobile frame stability
- memory
- server heartbeat / script cost
- asset density
- UI readability and touch targets
- unnecessary persistent instances
- streaming suitability for large worlds

If a larger map creates dead travel, memory pressure or longer join time, improve density and traversal before adding acreage.

### 13. Prioritize the roadmap

Rank changes by:
- player pain solved
- expected retention impact
- confidence/evidence
- implementation cost
- content-maintenance cost
- regression risk

Prefer the smallest test that can prove or disprove the hypothesis.

## Analytics feedback loop

When real data is available:

1. Compare new vs returning players.
2. Segment by device/platform and acquisition source when possible.
3. Find the largest funnel leak or retention anomaly.
4. Map it back to a concrete gameplay beat.
5. Generate 1–3 competing explanations.
6. Change one major variable at a time when feasible.
7. Re-measure after release.
8. Keep a decision log so the AI does not repeat failed ideas.

If the experience has enough traffic for similar-experience benchmarks, use them as context—not as a direct discovery score.

## Codex implementation handoff

For implementation work provide:
- product goal
- player story
- acceptance criteria
- analytics events
- data model/state needed
- server/client ownership
- mobile UX constraints
- performance constraints
- failure states
- test plan
- rollout/rollback notes

Never send Codex “make it fun” without measurable acceptance criteria.

## Output contract

For a full game-retention pass return:
- player promise
- current-loop diagnosis
- FTUE funnel
- core/session/meta/return/social loops
- progression architecture
- replayability system
- map/world density recommendations
- analytics event plan
- discovery-signal mapping
- mobile/performance gates
- prioritized roadmap
- Codex implementation handoff
- post-release measurement plan

## Final QA

- The game is understandable through play, not walls of text.
- Fun begins quickly after join.
- Core play is enjoyable before monetization.
- Session goals have satisfying endpoints.
- Progression changes play or identity.
- Social mechanics create real player-to-player value.
- Return mechanics do not depend mainly on punishment or anxiety.
- Every major hypothesis has a measurable event or observation.
- Mobile performance is treated as a product constraint.
- The roadmap is realistic for the creator's capacity.
- No ranking, virality or revenue guarantee is made.

## Operating rules

- Preserve explicit user constraints over defaults.
- Do not clone another Roblox experience's protected expression, map, characters or branded assets.
- Competitive research should extract patterns and player needs, not copy content.
- Prefer a small, deep MVP over a wide empty world.
- Verify current Roblox platform/policy claims before relying on them.
- Use current project analytics when available instead of generic benchmarks.
- Keep monetization ownership with 'roblox-economy-monetization-director'.
