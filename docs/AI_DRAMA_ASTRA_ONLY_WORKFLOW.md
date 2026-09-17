# AI Drama — Astra-Only Story + Dreamina Cost-First Workflow

Status: active alternative workflow
Updated: 2026-09-18

## Goal
Produce serialized cinematic vertical AI drama without Claude Opus. GPT-6 Astra owns story development, scriptwriting, story editing, production planning and continuity. Dreamina remains the visual/video production stack, with Seedance 2.0 Mini as the default video model for cost control.

## Recommended Astra reasoning profile
Use reasoning effort by task, not one fixed setting for everything.

### Astra High — default creative mode
Use for most story and script work:
- premise development
- episode architecture
- scene writing
- dialogue and subtext
- emotional beats
- twist ideation
- cliffhangers
- character progression
- shot-plan conversion after script lock

This is the default because it gives deep reasoning without spending maximum allowance on every pass.

### Astra XHigh — difficult architecture mode
Use selectively for:
- season arc design
- mystery / reveal structure
- multi-episode setup/payoff map
- complicated relationship arcs
- timeline or reincarnation logic
- major mid-season turn
- finale architecture
- deep plot-hole audit

### Astra Max — exceptional audit / redesign mode
Use only when available and when the problem genuinely benefits from maximum reasoning:
- rebuilding a broken season architecture
- checking a dense 20–30 episode continuity graph
- solving multiple contradictory canon constraints
- final high-stakes story audit before locking a season/finale

Do not use Max for ordinary dialogue polish, simple scene rewrites, routine shot prompts or repetitive production formatting. Higher effort can consume more allowance and does not guarantee a better result.

### Astra Medium / Low — utility mode
Use for low-risk follow-up work if available:
- formatting approved content
- converting a locked shot list into templates
- metadata / naming / tables
- simple summaries
- minor prompt rewrites that do not alter story logic

## Astra-only story workflow

### Pass 1 — Story Architect (Astra XHigh for new season, otherwise High)
Lock:
- core premise
- audience promise
- protagonist goal / wound / need / secret
- antagonist strategy
- relationship engine
- season question
- major reveals
- setup/payoff map
- season midpoint
- finale direction

Output a compact Story Bible, not prose scenes yet.

### Pass 2 — Episode Architect (Astra High)
For each episode define:
- opening hook
- viewer question
- objective
- opposition
- escalation
- emotional turn
- reveal / reversal
- setup or payoff movement
- cliffhanger
- continuity delta

Avoid random twists. Every major reveal must have cause, setup or consequence.

### Pass 3 — Script Writer (Astra High)
Write the final episode script with:
- playable actions
- natural dialogue
- subtext
- inner monologue only when useful
- reaction beats
- silence where dramatically useful
- scene transitions
- plausible runtime

Do not mix detailed video prompting into the first script draft. Story first, production second.

### Pass 4 — Script Critic / Rewrite (Astra High; XHigh only if structurally difficult)
Audit:
- predictable beats
- weak motivation
- exposition
- repetitive dialogue
- unearned twist
- character inconsistency
- emotional flatness
- continuity risk
- cliffhanger strength

Rewrite only affected sections. Do not restart working canon without reason.

### Pass 5 — Production Director (Astra High)
After story lock, batch-convert the episode into:
- scene breakdown
- stable Shot IDs
- reference selection
- performance direction
- camera / composition
- lighting intent
- Seedream 5.0 Pro keyframe prompts where needed
- Seedance 2.0 Mini motion prompts by default
- frame strategy
- continuity constraints
- failure risks
- fallback routes

Prefer 1–3 substantial Astra requests per episode instead of one Astra request per ordinary shot.

## Dreamina visual pipeline

### Seedream 5.0 Pro
Preferred for:
- Character Masters
- wardrobe / look masters
- Location Masters
- storyboard frames
- hero keyframes
- necessary Start Frames

Reuse approved masters. Do not regenerate visual identity from scratch for every shot.

### Seedance 2.0 Mini — default video model
Target approximately 80–90% of generated footage when technically suitable.
Use first for:
- dialogue coverage
- close-ups
- reactions
- medium shots
- walking / simple blocking
- establishing shots
- inserts
- atmosphere
- simple camera motion

Default shot length: about 3–8 seconds.

### Seedance 2.5 — escalation only
Target roughly 10–20% or less.
Use for:
- difficult multi-character interaction
- complex blocking / action
- high-value hero / reveal moments
- shots where Mini materially fails after diagnosis

After around two materially similar failed Mini attempts, change the route instead of endlessly rewriting the same prompt.

## Frame strategy
- None: organic acting / motion matters most
- Start Frame: identity, wardrobe, location, composition, pose, screen direction or prop state needs control
- Start + End: only when exact landing state, reveal, transition match or continuity-critical endpoint matters

Never lock every shot mechanically.

## Cost discipline
Default priority:
Story → Emotion → Continuity → Retention → Generation Reliability → Cost Efficiency → Spectacle

Use Astra High for most creative work. Reserve XHigh/Max for architecture and difficult audits. Spend premium video generation only where viewers can perceive the value.

## Social series default
- 9:16 vertical
- approximately 60–90 seconds per episode unless story needs another runtime
- strong first-seconds hook
- specific viewer-question chain
- meaningful cliffhanger
- cross-post master asset to TikTok, YouTube Shorts, Facebook Reels and Instagram Reels
- periodically combine connected episodes into longer YouTube compilations

## Cross-account bootstrap
When using another account:
1. Load `AGENTS.md`.
2. Load this workflow.
3. Load current Notion AI DRAMA STUDIO sources: AI Drama Production Workflow, Series Bible, Characters, Episodes, Scenes & Shots, Prompt Library and latest production pack.
4. Resolve newest approved canon before writing.
5. Use Astra High by default; increase to XHigh/Max only for clearly difficult architecture/audit tasks.
