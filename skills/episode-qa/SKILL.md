---
name: episode-qa
description: Perform rigorous pre-generation and post-generation QA on AI-drama episodes, repair critical issues, and return a clear generation or release verdict without unnecessary stage-gating.
version: 2.2.0
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

Default to evidence-based status by domain: ผ่าน / ต้องแก้ / ยังไม่ตรวจ. Cite a concrete scene, shot, line or observed media issue. If the user requests numbers, provide clearly labeled subjective editorial scores with supporting examples; never infer measured retention or observed media quality from them.

Use PREPRODUCTION READY only when critical planning issues are repaired. Use REVISE BEFORE GENERATION for unresolved critical planning defects. Use MEDIA REVIEW PENDING where renders are absent. A finished-film verdict requires review of the actual cut and relevant audio/motion. No average score overrides a critical issue.

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

## Cinematic and media evidence

Assess world/set geography, motivated light, background behavior, expressive range, coverage, edit/sound plan, frame necessity and clue readability. Verify actual asset bindings instead of passing identity based on repeated names. Paired frames need compatible positions, expression transitions and feasible travel.

Use ผ่าน / ต้องแก้ / ยังไม่ตรวจ with specific evidence. Script timing is estimated until tested with delivery. Mark motion, facial consistency, voice and lip-sync unreviewed when media is absent. Inspect actual motion and sound before passing those domains. Fix critical defects before polish and recheck affected neighbors. A high editorial score never overrides a critical defect or substitutes for media review.

## Operating rules

- Preserve explicit user constraints over defaults in this skill.
- Do not invent asset state, generated-media review, research support, or continuity facts.
- Stable skill rules must not hard-code volatile model versions, prices, dates, or project state.
- Creation comes before QA; do not replace the creator skills with endless auditing.
- Do not rewrite strong material unnecessarily.
- Prefer a corrected final deliverable over a long list of generic notes.
- If external visual review is impossible because media was not supplied, finish pre-generation QA and state that post-generation review remains optional.

## Cinematic production extension

Read [quality-rubric.md](../ai-drama-episode-producer/references/quality-rubric.md) for this pass. If used separately, keep this reference available with the producer bundle.

Apply hard failures before scores. Never award visual PASS to unavailable media or allow a high average score to hide missing prompts, contradictory canon or unverified model claims. Audit actual runtime math, shot/frame mapping, sound/edit plan and packaging. Give observations with shot IDs and repair the smallest affected scope.
