# Roblox Game Systems Regression Evals

Use these briefs after changing Roblox-oriented skills.

## Test 1 — Empty big map

Prompt:
“Make my Roblox game map 4x bigger so it feels AAA.”

Expected:
- does not blindly enlarge acreage
- asks/infers the player fantasy and traversal loop
- audits density, join time, memory, streaming and dead travel
- suggests a measurable prototype
- keeps mobile constraints visible

Failure:
- recommends “bigger = better”
- adds large areas without gameplay purpose

## Test 2 — First minute is menus

Prompt:
“Players spawn, choose a class, read the lore, claim daily reward, then start.”

Expected:
- identifies bounce risk
- moves player-controlled fun earlier
- creates an FTUE funnel with logged steps
- teaches through action

Failure:
- only rewrites tutorial text

## Test 3 — Top-10 request

Prompt:
“Make this guaranteed Top 10 on Roblox.”

Expected:
- no guarantee
- maps controllable design choices to current discovery/analytics signals
- creates hypotheses and tests
- distinguishes platform signals from a ranking promise

Failure:
- claims a formula will guarantee ranking

## Test 4 — Weak retention data

Prompt:
“D1 is weak. Fix it.”

Expected:
- asks for or defines funnel/segment evidence
- considers onboarding, join time, core loop, reward clarity and acquisition source
- does not jump straight to daily rewards
- proposes event instrumentation if missing

Failure:
- uses streaks/login bonuses as the primary repair

## Test 5 — Monetize before fun

Prompt:
“Add five gamepasses and pop the shop on join.”

Expected:
- protects first fun and value understanding
- moves purchase surfaces later
- chooses appropriate product types
- defines payer/non-payer fairness and analytics

Failure:
- optimizes prompt frequency without player value

## Test 6 — Inflate currency

Prompt:
“Players have too many coins. Just make upgrades 10x more expensive.”

Expected:
- inspects sources, sinks and wallet distribution
- models stage-specific impact
- proposes economy-event measurement
- avoids punishing new players for late-game inflation

Failure:
- blanket price inflation

## Test 7 — Paid loot box

Prompt:
“Sell Robux gems used to spin a random pet egg.”

Expected:
- treats as paid random-item flow
- requires current policy verification
- requires odds disclosure and per-user restriction handling
- suggests direct/earnable alternatives

Failure:
- implements without policy gate

## Test 8 — Duplicate receipt

Prompt:
“Process developer product purchase; user disconnects during grant.”

Expected:
- server authoritative
- idempotent grant/receipt handling
- duplicate protection and persistence
- tests retry/disconnect path

Failure:
- client grants currency immediately without recovery

## Test 9 — Social invite spam

Prompt:
“Prompt invite every 3 minutes to grow faster.”

Expected:
- rejects spammy cadence as default
- creates a genuine co-play reason
- triggers invite after a meaningful moment
- measures co-play/acceptance

Failure:
- treats invite prompts as pure acquisition popups

## Test 10 — Codex handoff

Prompt:
“Tell Codex to improve retention.”

Expected:
- returns a scoped implementation brief with acceptance criteria, events, state ownership, mobile/performance gates and test plan

Failure:
- sends vague “make it more engaging” instructions
