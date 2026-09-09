---
name: ai-drama-story-engine
description: Design bingeable short-form AI drama with causal episode structure, character-driven escalation, visual storytelling, setup/payoff, retention beats, twists, cliffhangers, and continuity-aware handoffs.
version: 2.2.0
---

# ai-drama-story-engine

## Purpose

Build the dramatic engine of short-form AI series and episodic vertical films. Own story causality, episode architecture, escalation, setup/payoff, reveal timing, and cliffhanger design. Do not own final camera engineering or model-specific video prompts.

## Use when

Use for:
- AI short films and vertical drama
- season/episode architecture
- rewriting weak or repetitive episodes
- planning a next episode from an approved prior state
- improving hooks, retention, twists, romance tension, comedy, suspense, or emotional payoff
- creating a production-ready story handoff for downstream dialogue/cinematic/shot skills

## Required inputs

Use the best available combination of:
- premise or existing story
- approved canon / prior episode state
- target runtime and episode count
- genre, tone, language, platform
- character constraints
- production constraints and available generation tools

If the user already approved characters, relationships, visual identities, or prior episodes, treat them as locked canon unless explicitly changed.

## Core story model

For the series define:
- **Audience promise** — what emotional experience viewers return for
- **Core dramatic question** — the unresolved question carrying the season
- **Character pressure system** — goals, wounds, fears, secrets, leverage, contradictions, loyalties
- **Escalation ladder** — consequences must become more costly, intimate, public, dangerous, or irreversible
- **Setup/payoff ledger** — important reveals must be supported before payoff
- **Relationship engine** — attraction, trust, resentment, dependency, rivalry, debt, power, or misunderstanding must evolve through decisions and consequences

## Workflow

1. **Canon lock**
   - inherit the prior episode's final physical, emotional, relational, and information state
   - identify unresolved setups and promises
   - flag contradictions instead of silently rewriting canon

2. **Define the episode question**
   - one specific question should pull the viewer through the episode
   - define what changes by the end even if the larger conflict remains unresolved

3. **Design the opening hook**
   - for short social drama, aim for a hook within the first 1–3 seconds with danger, desire, contradiction, accusation, discovery, unusual visual action, or an emotionally loaded decision
   - avoid hooks that are only vague narration or context-setting

4. **Build the retention map**
   - for short social drama, consider a meaningful shift roughly every 10–20 seconds depending on runtime and tone; do not enforce a clockwork pattern
   - shifts can be reveal, reversal, emotional beat, new obstacle, status change, visual surprise, comedic turn, attraction spike, threat, or decision
   - vary the mechanism; do not use repeated mini-cliffhangers with identical rhythm

5. **Build the decision chain**
   - important events must come from character decisions, pressure, mistakes, secrets, or prior consequences
   - random coincidence may trigger a problem but should not solve one

6. **Map scenes**
   For every scene define:
   - scene objective
   - conflict/obstacle
   - power position at entry
   - turn/reversal
   - new information or changed belief
   - emotional shift
   - visual storytelling opportunity
   - setup/payoff function
   - production complexity

7. **Control exposition**
   - reveal character through action, subtext, behavior, environment, props, silence, reactions, and consequences
   - keep dialogue for conflict, desire, misdirection, vulnerability, humor, or choice rather than explaining what the audience can already see

8. **Escalate relationships deliberately**
   - romantic or interpersonal intensity must change because of proximity, risk, disclosure, jealousy, protection, betrayal, vulnerability, sacrifice, or changed power
   - avoid instant emotional jumps unsupported by prior behavior

9. **Design twists**
   - a strong twist reinterprets prior information or changes the meaning of a relationship/goal
   - seed support before payoff
   - preserve character intelligence unless the story explicitly establishes otherwise

10. **End with a specific cliffhanger**
   Choose among:
   - revelation
   - irreversible decision
   - arrival/discovery
   - betrayal
   - danger
   - intimate interruption
   - identity/status reveal
   - moral dilemma
   - reversal of power
   - unanswered evidence/question

11. **Run story QA and repair**
   - remove redundant beats
   - repair motivation gaps
   - strengthen weak scene turns
   - make the final beat earn the next episode

## Final-approve behavior

When the user asks to make or continue an episode end-to-end, do not stop after outlining the story to request approval. Produce the complete story handoff needed by the next production skills. Only stop for a canon conflict that would invalidate the rest of the episode.

## Output contract

Return the level of detail required by the downstream task. For a full episode handoff include:
- episode premise upgrade
- canon inherited from prior episode
- episode question
- hook
- retention map
- character decision chain
- scene-by-scene beats
- scene objectives and reversals
- setup/payoff map
- relationship progression
- cliffhanger
- continuity-critical notes
- production-risk notes

## Final QA

- Opening creates immediate curiosity, tension, desire, or surprise.
- Every scene changes information, power, danger, relationship, or emotion.
- Events follow character decisions and prior causes.
- Twists have visible support in hindsight.
- Exposition is minimized.
- Relationship changes are earned.
- Stakes escalate without becoming random.
- Cliffhanger creates one clear next question.
- Episode can plausibly fit the target runtime.
- Story remains feasible for the stated production method.

## Advanced story and scale

Build premise → goal/wound/secret → pressure and causal escalation → emotional beats → planted evidence/payoff → earned twist → consequential cliffhanger → arc. For long form, use act/sequence turns appropriate to its runtime; do not force every film into vertical-drama timing. Hook/shift timing is an editorial heuristic, not guaranteed retention.

Give the antagonist a defensible worldview, private cost and active tactic. Escalate through a failed tactic that forces a harder choice. Connect public spectacle to private stakes. Structure major set pieces through objective, geography, obstacle, reversal, costly choice and aftermath. Alternate intensity with earned silence, tenderness or humor so peaks have contrast. Track dramatic irony: audience knowledge may differ from each character's knowledge. Give recurring motifs new meaning at payoff.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Stable skill rules must not hard-code volatile model versions, prices, dates, or current project facts.
- Do not invent missing asset approvals, research support, or prior episode facts.
- Prefer concrete finished episode architecture over generic advice.
- Preserve approved characters and prior canon unless the user changes them.
- Keep the output easy to hand off to character, dialogue, cinematic, shot-planning, continuity, and QA skills.
- If an external action needs an unavailable tool or permission, complete every possible upstream story step and state the blocked action clearly.

## Cinematic production extension

Read [story-performance.md](../ai-drama-episode-producer/references/story-performance.md) for this pass. If used separately, keep this reference available with the producer bundle.

Use the series pressure system and scene decision chain from the reference. For a grand production brief, make each signature sequence cause a consequential character choice and hand its scale requirements to direction. Track planted evidence and who knows it. Adapt retention beats to emotion; avoid mechanical escalation or a guaranteed-viral claim.
