---
name: ai-video-model-router
description: Route each AI-drama shot to the most suitable available still, reference, image-to-video or text-to-video model based on identity control, motion, audio, camera, cost, speed and failure risk.
version: 1.0.0
---

# ai-video-model-router

## Purpose

Choose the best generation route **per shot**, not per project by habit. This skill evaluates shot requirements and maps them to the available still/image/video models, interfaces and reference modes while separating stable production logic from volatile provider capabilities.

Examples of model families that may appear in a project include Veo, Seedance, Omni, Kling, Dreamina, image generators and provider-specific wrappers. These names are examples only; capability claims must be verified when current details matter.

## Use when

Use for:
- choosing among multiple AI-video models
- deciding still-first versus direct video generation
- routing reference-heavy character shots
- selecting a cheaper/faster model for simple coverage and a stronger model for hero shots
- deciding which shots deserve premium generation attempts
- planning fallbacks when one model repeatedly fails
- comparing quality, controllability, latency or cost for a production plan

## Decision ownership

This skill owns:
- model/tool role assignment per shot
- routing confidence
- still-first vs direct motion strategy
- hero-shot versus utility-shot allocation
- capability evidence status
- fallback model route
- cost/quality/risk tradeoff logic

It does not own:
- story → `ai-drama-story-engine`
- acting → `performance-director`
- framing/camera intent → `cinematic-director`
- actual start/end-frame prompt engineering → shot planner
- reference architecture → `reference-first-visual-production`

## Evidence rule

Model capabilities, prices, duration limits, reference counts, audio support and UI-specific controls change frequently.

For every provider-specific routing claim, classify evidence as:
- `VERIFIED_CURRENT` — confirmed from a current authoritative source or active interface
- `USER_CONFIRMED` — supplied by the user from their current account/interface
- `KNOWN_PROJECT_TEST` — observed in a recorded project test
- `PROVISIONAL` — plausible but not currently verified

Never present `PROVISIONAL` capability as fact.

## Shot requirement vector

For every shot score or classify:
- identity sensitivity: low / medium / high
- multi-character complexity
- wardrobe/prop continuity sensitivity
- location/geography sensitivity
- performance subtlety
- physical interaction complexity
- camera-motion complexity
- environment-motion complexity
- exact landing-state requirement
- dialogue/lip-sync/audio need
- target duration
- target aspect ratio
- iteration budget
- render speed priority
- cost sensitivity

## Routing workflow

1. Read the approved shot intent and references.
2. Identify what the shot absolutely cannot lose.
3. Build the shot requirement vector.
4. Inspect currently available models/interfaces and evidence status.
5. Choose a primary route from:
   - still/keyframe generation only
   - still master → image-to-video
   - reference-driven video
   - start-frame only video
   - start + end frame video
   - text-to-video
   - hybrid split-shot route
6. Assign the primary model/tool and explain why in one sentence.
7. Assign one practical fallback route.
8. Flag any capability assumption that remains provisional.
9. After repeated failure, change route instead of endlessly rewriting the same prompt.

## Routing heuristics

Use these as model-neutral production heuristics:
- identity-critical close-up → favor approved character reference + controlled start/keyframe route
- exact costume/location composition → create/approve still first when possible
- subtle acting → avoid unnecessary end-frame lock
- complex physical interaction → simplify choreography or split coverage before escalating prompt length
- establishing/environment spectacle → favor the model/interface with strongest spatial/environment motion evidence
- exact destination state needed for next cut → consider end-frame control if the interface supports it reliably
- dialogue shot → prioritize performance/audio compatibility and plausible duration over elaborate camera motion
- utility reaction/insert → use the fastest reliable route that preserves canon
- hero reveal → spend higher quality/iteration budget only where viewers will notice it

## Cost-aware production tiers

When cost matters, optionally classify shots:
- **Tier A Hero** — identity/performance/reveal shots worth premium attempts
- **Tier B Core** — story-essential coverage requiring reliable continuity
- **Tier C Utility** — inserts, transitions, atmosphere and low-risk coverage suitable for cheaper/faster routes

Do not reduce quality blindly across the entire episode. Allocate budget by dramatic value and failure risk.

## Failure-based rerouting

After two materially similar failed attempts, diagnose before retrying:
- wrong model for identity → switch to stronger reference/still-first route
- motion too complex → simplify or split the shot
- stiff interpolation → remove end frame or reduce landing constraints
- camera fighting performance → simplify camera
- scene drift → strengthen reference ownership before changing motion model
- audio conflict → separate audio generation/post where appropriate

## Output contract

For each shot return:
- Shot ID
- Requirement summary
- Primary route
- Primary model/tool role
- Evidence status
- Why this route
- Still/keyframe dependency
- Reference dependency
- Audio dependency
- Quality tier A/B/C when useful
- Main failure risk
- Fallback route
- Re-route trigger

For a full episode, return a compact routing table before detailed shot prompts.

## Final QA

- Routing is per shot, not one-model-fits-all.
- Provider-specific claims are evidence-labeled.
- Identity-critical shots use sufficient reference control.
- Start/end locking is not automatic.
- Cost is concentrated on shots with dramatic or technical value.
- Failed routes have a concrete alternative.
- The model router does not rewrite story, character or cinematography decisions.

## Operating rules

- Verify current capabilities when the answer depends on them.
- Never hard-code current prices or limits into this universal skill.
- Respect the user's actual subscriptions, credits and available interfaces.
- If capability evidence is unavailable, keep the production plan model-neutral and mark the route provisional.
- Prefer a reliable simple shot over a fragile spectacular shot that does not serve the story.