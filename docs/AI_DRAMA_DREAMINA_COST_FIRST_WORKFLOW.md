# AI Drama — Dreamina Cost-First Production Profile

Status: active project profile
Updated: 2026-09-18

## Goal
Produce serialized cinematic vertical AI drama with strong story continuity and the best practical quality-per-baht. The workflow is Dreamina-first and treats expensive reasoning/video models as selective tools rather than defaults.

## Core role split

### 1) Story Writer — Claude Opus 5
Use primarily for:
- premise and season architecture
- character psychology, wound/want/need/secret
- episode beats and escalation
- dialogue, subtext, inner monologue
- setup/payoff, twist, cliffhanger

Usage discipline:
- prefer a few large passes per episode rather than many tiny prompts
- keep the Story Bible and current episode context compact and reusable
- finish the story/script substantially before production prompting

### 2) Production Director / Story Editor — GPT-6 Astra
Use after story is substantially locked for:
- logic and continuity review
- scene breakdown
- shot list
- reference selection
- performance beats
- camera/lighting intent
- Seedream prompts
- Seedance 2.0 Mini motion prompts
- fallback strategy

Usage discipline:
- prefer 1–3 substantial batch requests per episode
- do not spend Astra one shot at a time unless the shot is genuinely difficult
- output the whole production pack in one structured pass whenever possible

### 3) Still / Keyframe Department — Seedream 5.0 Pro
Default uses:
- Character Masters
- wardrobe/look masters
- Location Masters
- storyboard frames
- hero keyframes
- necessary Start Frames

Rules:
- approved masters own identity and look truth
- reuse approved assets rather than regenerating from scratch
- previous accepted frames are local continuity anchors, not replacements for global masters

### 4) Video Department — Seedance 2.0 Mini first
Default target: roughly 80–90% of generated footage.

Best default coverage:
- close-ups and reactions
- dialogue coverage
- medium shots
- walking / simple movement
- establishing shots
- simple camera motion
- utility inserts and transitions

Shot duration default: approximately 3–8 seconds. Use longer takes only when uninterrupted performance genuinely benefits the scene.

### 5) Escalation Model — Seedance 2.5 only when justified
Target: roughly 10–20% or less.

Escalate only for:
- difficult multi-character interaction
- complex blocking or physical action
- high-value hero/reveal shots
- shots where Mini has already failed materially

After about two materially similar failed Mini attempts, diagnose before retrying. Simplify choreography, split the shot, strengthen references, or escalate. Do not burn credits by rewriting the same prompt repeatedly.

### 6) Edit / Delivery — Dreamina + CapCut
Use for:
- assembly
- dialogue / SFX / music
- subtitle pass
- pacing / reaction holds
- 9:16 master export
- platform-specific cuts

## Frame strategy
- None: when organic acting and motion matter more than exact anchors
- Start Frame: when identity, wardrobe, environment, composition, pose or prop state must be locked
- Start + End: only when landing state, reveal, transition match or continuity-critical endpoint truly matters

Do not mechanically lock every shot.

## Cost tiers
Classify every shot:
- Tier A Hero — premium attention/iteration justified
- Tier B Core — story-essential, reliable continuity required
- Tier C Utility — fastest reliable low-cost route

Spend premium generation only where viewers can perceive the value.

## Episode production sequence
1. Load Series Bible, Character Bible, continuity state, latest episode and approved visual masters.
2. Opus 5 writes/repairs the episode story and final dialogue.
3. Astra performs one batch production pass: scenes, shots, references, Seedream prompts, Seedance prompts, camera, acting, continuity and fallbacks.
4. Seedream 5.0 Pro creates only missing/changed masters and necessary keyframes.
5. Seedance 2.0 Mini generates the majority of shots.
6. Repair failed variables without regenerating unrelated approved assets.
7. Escalate only justified shots to Seedance 2.5.
8. Edit in Dreamina/CapCut.
9. Run continuity QA and update canon only after intentional approval.

## Default episode format
- vertical 9:16
- approximately 60–90 seconds per social episode unless the story needs another runtime
- strong hook in the opening seconds
- clear viewer-question chain
- every scene changes information, power, danger, relationship or emotion
- concrete cliffhanger or compelling forward pull

## Publishing system
One master episode should feed:
- TikTok — primary discovery / serial viewing
- YouTube Shorts — discovery + channel growth
- Facebook Reels — additional reach
- Instagram Reels — additional reach
- YouTube long-form compilations — periodically combine multiple episodes when continuity supports it

## Monetization direction
Treat the project as original entertainment IP, not an “AI channel.” Potential layers:
- platform monetization where eligible
- premium/paid episode bundles where supported
- sponsorship / disclosed story-compatible product placement
- licensing and character/IP extensions
- digital extras, alternate endings, spin-offs or longer cuts

Verify current platform rules and AI-label requirements before making monetization or eligibility claims.

## Cross-account rule
A different ChatGPT/Claude account must not rely on memory from another account. Before continuing production, load the current Notion AI DRAMA STUDIO sources and this GitHub production profile.

Canonical Notion sources to load when available:
- AI Drama Production Workflow
- Series Bible
- Characters
- Episodes
- Scenes & Shots
- Prompt Library
- latest current-project drafts / production packs

See also: `docs/CROSS_ACCOUNT_MASTER_PROMPT_AI_DRAMA.md`.
