---
name: episode-qa
description: Perform rigorous pre-generation and post-generation QA on AI-drama episodes, repair critical issues, and return a clear generation or release verdict without unnecessary stage-gating.
version: 2.0.0
---

# episode-qa

## Purpose

Audit an AI-drama episode for story, dialogue, timing, cinematic clarity, generation feasibility, and continuity. Repair critical planning issues before generation and clearly distinguish pre-generation QA from post-generation visual review.

## Use when

Use after an episode script, storyboard, shot plan, prompt pack, or generated cut is available and before generation, publication, or moving to the next episode.

## Required inputs

Use the best available combination of:
- episode script
- storyboard / master shot list
- frame/video prompts
- series or project bible
- approved character references
- prior episode continuity state
- target runtime/platform
- available generated media, if any

Generated video is optional for pre-generation QA.

## QA modes

### Pre-generation QA
Use when the user wants the episode package checked before generating video.

Audit:
- story logic
- hook and retention
- character motivation
- dialogue naturalness
- setup/payoff
- cinematic clarity
- runtime plausibility
- shot necessity
- generation feasibility
- frame strategy
- continuity
- cliffhanger strength

Do not ask for a generated video in this mode.

### Post-generation QA
Use only when generated frames/video are actually supplied or the user explicitly asks for output review.

Add checks for:
- identity drift
- wardrobe/prop mutation
- body/hand artifacts
- camera mistakes
- wrong emotional performance
- lip-sync/audio mismatch
- screen-direction errors
- continuity breaks
- timing/edit rhythm

Never claim to have reviewed media that was not supplied.

## Workflow

1. **Hook check**
   - is the first 1–3 seconds immediately understandable and emotionally loaded?
   - does it create a specific reason to keep watching?

2. **Scene-purpose check**
   For every scene verify:
   - objective
   - conflict
   - turn
   - information gain
   - emotional/power change
   - contribution to setup/payoff or escalation

3. **Motivation check**
   - important actions must follow character goals, fears, secrets, wounds, relationships, pressure, or prior consequences
   - flag convenience, unexplained stupidity, or random behavior

4. **Dialogue check**
   - speakable and concise
   - no exposition the image already communicates
   - subtext, conflict, vulnerability, humor, or desire where appropriate
   - character voices remain distinct

5. **Retention and pacing check**
   - meaningful shifts occur often enough for the target runtime/platform
   - scenes do not repeat the same emotional beat
   - dialogue length and action plausibly fit the target duration

6. **Setup/payoff and twist check**
   - reveals have prior support
   - foreshadowing is visible in hindsight but not overexplained
   - twists change meaning rather than merely add random information

7. **Continuity check**
   Verify:
   - face/identity
   - hair/makeup
   - wardrobe/accessories
   - injuries
   - props and hand state
   - location/time/weather/light
   - screen direction and character positions
   - knowledge state
   - emotional/relationship state
   - unresolved setups from prior episodes

8. **Production feasibility check**
   - identify shots with excessive choreography, too many simultaneous actions, difficult hand contact, unstable crowd scenes, complex transformations, or unnecessary camera movement
   - simplify only where it preserves the dramatic beat

9. **Frame/prompt check**
   - start/end frames are justified
   - prompt instructions do not conflict
   - actions are physically plausible
   - continuity anchors are explicit only where needed
   - risky shots have fallbacks

10. **Cliffhanger check**
    - final beat changes the situation and creates one concrete next question
    - avoid a weak fade-out after the emotional peak

11. **Repair before verdict**
    - fix critical and important issues directly when possible
    - do not return only a critique if a corrected version can be produced from the available material
    - preserve working scenes and approved canon

## Scorecard

Score each 0–10:
- Hook
- Story causality
- Character motivation
- Dialogue/subtext
- Emotional escalation
- Retention/pacing
- Cinematic clarity
- Generation feasibility
- Continuity
- Cliffhanger

Total: /100

Suggested verdicts:
- `90–100`: FINAL APPROVAL PACK READY
- `80–89`: READY AFTER MINOR FIXES
- `<80`: REVISE BEFORE GENERATION

A lower score does not require asking the user to do another stage manually. Repair what can be repaired and rescore.

## Output contract

Return:
- QA mode
- Scorecard
- Critical issues
- Important issues
- Polish notes
- Repairs applied
- Remaining production risks
- Corrected final state or corrected episode package sections
- Verdict
- Continuity items that must carry into the next episode

## Final-approve behavior

When the user asked for an episode to be completed and then checked for final approval, the end state should be the repaired production package plus a clear verdict. Do not block completion by asking for a video upload unless the user specifically requested post-generation visual QA.

## Final QA

- No unresolved critical logic hole.
- Runtime is plausible.
- Character behavior is motivated.
- Dialogue is speakable.
- Generation-risk shots have fallbacks.
- Continuity is internally consistent.
- Cliffhanger earns continuation.
- Corrections are applied, not merely suggested.
- Verdict accurately reflects what was actually reviewed.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent asset state, generated-media review, research support, or continuity facts.
- Stable skill rules must not hard-code volatile model versions, prices, dates, or project state.
- Creation comes before QA; do not replace the creator skills with endless auditing.
- Do not rewrite strong material unnecessarily.
- Prefer a corrected final deliverable over a long list of generic notes.
- If external visual review is impossible because media was not supplied, finish pre-generation QA and state that post-generation review remains optional.
