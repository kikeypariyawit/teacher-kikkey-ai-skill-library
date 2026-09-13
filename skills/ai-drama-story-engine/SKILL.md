---
name: ai-drama-story-engine
description: Design bingeable short-form AI drama with causal episode structure, character-driven escalation, setup/payoff, twists, cliffhangers and continuity-aware handoffs.
version: 2.3.0
---

# ai-drama-story-engine

## Purpose

Build the dramatic engine of short-form AI series and episodic vertical films. Own story causality, episode architecture, escalation, setup/payoff, reveal logic, relationship progression and cliffhanger meaning.

For vertical social drama, this skill supplies the dramatic material and structural hook; `vertical-drama-retention-director` owns the detailed attention architecture, viewer-question chain, reveal spacing and visual-reset cadence.

Do not own final acting direction, camera engineering or model-specific video prompts.

## Use when

Use for:
- AI short films and vertical drama
- season/episode architecture
- rewriting weak or repetitive episodes
- planning a next episode from approved prior state
- improving motivation, escalation, twists, romance tension, suspense or emotional payoff
- creating a production-ready story handoff for downstream retention/dialogue/performance/cinematic/shot skills

## Required inputs

Use the best available combination of:
- premise or existing story
- approved canon / prior episode state
- target runtime and episode count
- genre, tone, language, platform
- character constraints
- production constraints and available generation tools

If the user already approved characters, relationships, visual identities or prior episodes, treat them as locked canon unless explicitly changed.

## Core story model

For the series define:
- **Audience promise** — the emotional experience viewers return for
- **Core dramatic question** — the unresolved question carrying the season
- **Character pressure system** — goals, wounds, fears, secrets, leverage, contradictions, loyalties
- **Escalation ladder** — consequences become more costly, intimate, public, dangerous or irreversible
- **Setup/payoff ledger** — important reveals are supported before payoff
- **Relationship engine** — attraction, trust, resentment, dependency, rivalry, debt, power or misunderstanding evolve through decisions and consequences

## Workflow

1. **Canon lock**
   - inherit prior physical, emotional, relational and information state
   - identify unresolved setups and promises
   - flag contradictions instead of silently rewriting canon

2. **Define the episode question**
   - one specific question should pull the viewer through the episode
   - define what changes by the end even if the larger conflict remains unresolved

3. **Design the structural hook**
   - open on danger, desire, contradiction, accusation, discovery, unusual action or an emotionally loaded decision when appropriate
   - avoid vague narration or context-setting as the only opening device
   - hand the hook to `vertical-drama-retention-director` for detailed vertical pacing when applicable

4. **Build the decision chain**
   - important events must come from character decisions, pressure, mistakes, secrets or prior consequences
   - coincidence may trigger a problem but should not solve one

5. **Map scenes**
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

6. **Control exposition**
   - reveal character through action, subtext, behavior, environment, props, silence, reactions and consequences
   - keep dialogue for conflict, desire, misdirection, vulnerability, humor or choice rather than explaining visible facts

7. **Escalate relationships deliberately**
   - intensity changes because of proximity, risk, disclosure, jealousy, protection, betrayal, vulnerability, sacrifice or changed power
   - avoid unsupported emotional jumps

8. **Design twists**
   - a strong twist reinterprets prior information or changes the meaning of a relationship/goal
   - seed support before payoff
   - preserve character intelligence unless established otherwise

9. **End with a specific cliffhanger**
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

10. **Run story QA and repair**
   - remove redundant beats
   - repair motivation gaps
   - strengthen weak scene turns
   - make the final beat earn the next episode

## Vertical-retention handoff

For short vertical work, provide to `vertical-drama-retention-director`:
- audience promise
- episode question
- structural opening hook
- reveal inventory
- scene/beat order
- emotional peaks and quiet beats
- cliffhanger meaning
- facts that must not be spoiled early

Do not force a rigid every-N-seconds formula inside story architecture. Retention timing is an editorial heuristic, not story causality.

## Final-approve behavior

When the user asks to make or continue an episode end-to-end, do not stop after outlining the story to request approval. Produce the complete story handoff needed by downstream skills. Only stop for a canon conflict that would invalidate the rest of the episode.

## Output contract

For a full episode handoff include:
- episode premise upgrade
- canon inherited from prior episode
- episode question
- structural hook
- character decision chain
- scene-by-scene beats
- scene objectives and reversals
- setup/payoff map
- relationship progression
- reveal inventory / spoiler constraints
- cliffhanger
- continuity-critical notes
- production-risk notes
- vertical-retention handoff when applicable

## Final QA

- Opening creates immediate dramatic potential.
- Every scene changes information, power, danger, relationship or emotion.
- Events follow character decisions and prior causes.
- Twists have visible support in hindsight.
- Exposition is minimized.
- Relationship changes are earned.
- Stakes escalate without becoming random.
- Cliffhanger creates one clear next question.
- Episode can plausibly fit the target runtime.
- Story remains feasible for the stated production method.

## Advanced story and scale

Build premise → goal/wound/secret → pressure and causal escalation → emotional beats → planted evidence/payoff → earned twist → consequential cliffhanger → arc. For long form, use act/sequence turns appropriate to its runtime; do not force vertical-drama timing onto every film.

Give the antagonist a defensible worldview, private cost and active tactic. Escalate through a failed tactic that forces a harder choice. Connect public spectacle to private stakes. Structure major set pieces through objective, geography, obstacle, reversal, costly choice and aftermath. Alternate intensity with earned silence, tenderness or humor so peaks have contrast. Track dramatic irony: audience knowledge may differ from each character's knowledge. Give recurring motifs new meaning at payoff.

## Operating rules

- Preserve explicit user constraints over defaults.
- Stable skill rules must not hard-code volatile model versions, prices, dates or project facts.
- Do not invent missing asset approvals, research support or prior episode facts.
- Prefer concrete finished episode architecture over generic advice.
- Preserve approved characters and prior canon unless the user changes them.
- Keep the output easy to hand off to retention, character, dialogue, performance, cinematic, shot-planning, continuity and QA skills.
- If an external action needs an unavailable tool or permission, complete every possible upstream story step and state the blocked action clearly.

## Cinematic production extension

Read [story-performance.md](../ai-drama-episode-producer/references/story-performance.md) for this pass. Use the series pressure system and scene decision chain from the reference. For a grand production brief, make each signature sequence cause a consequential character choice and hand scale requirements to direction. Track planted evidence and who knows it. Avoid mechanical escalation or guaranteed-viral claims.