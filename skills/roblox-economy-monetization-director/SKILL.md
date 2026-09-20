---
name: roblox-economy-monetization-director
description: Design fair, measurable Roblox virtual economies and monetization systems across currencies, sources/sinks, passes, developer products, subscriptions, pricing, analytics, and policy-aware purchase flows.
version: 1.0.0
---

# roblox-economy-monetization-director

## Purpose

Own the Roblox economy and monetization layer after the game has a credible player-value loop. Build a sustainable resource economy, price/value architecture, purchase surfaces, payer/non-payer coexistence, analytics plan, and policy checks without turning the experience into pay-to-win or manipulative pressure.

Use 'roblox-retention-game-director' for core gameplay, onboarding, retention, social play and progression ownership.

## Use when

Use for:
- soft/hard currency design
- reward pacing, faucets/sources and sinks
- passes and developer products
- subscriptions and private-server value
- starter packs and bundles
- pricing ladders
- purchase funnel design
- economy inflation diagnosis
- payer conversion / ARPPU / ARPDAU analysis
- monetization A/B or price-testing preparation
- paid random item compliance review
- Codex implementation requirements for MarketplaceService, receipts and analytics

## Platform evidence rule

Roblox monetization APIs, pricing features, eligibility and policy details change. Verify current official Creator Hub documentation before giving implementation-critical advice. Keep volatile thresholds and dates in a dated research note.

Current research snapshot: docs/ROBLOX_PLATFORM_RESEARCH_2026-09-20.md

## Economy principles

1. Players must understand what a currency means.
2. Every source should have a reason and every sink should create player value.
3. A healthy economy gives players attractive things to spend on before balances inflate.
4. Paid acceleration must not erase the reason to play.
5. Non-payers should remain viable and socially welcome.
6. Convenience, expression, collection and optional acceleration are safer default value types than mandatory power.
7. Monetization should amplify an enjoyable game, not compensate for a weak loop.

## Workflow

### 1. Define resource roles

For every resource specify:
- name and purpose
- earnable vs paid vs hybrid
- typical earn frequency
- target wallet range by progression stage
- source list
- sink list
- tradable/giftable status
- reset/prestige behavior
- whether balance is server-authoritative
- analytics event naming

Avoid multiple currencies that solve the same job.

### 2. Map sources and sinks

Classify sources such as:
- onboarding
- gameplay
- quests
- timed rewards
- social/co-op rewards
- event rewards
- IAP conversion

Classify sinks such as:
- upgrades
- crafting
- rerolls where policy allows
- cosmetics
- access
- collection completion
- convenience
- social expression

For each source/sink define:
- amount
- frequency
- progression scaling
- cap/cooldown
- exploit risk
- intended player decision

Track economy events so actual sources, sinks and average wallet balances can be audited.

### 3. Simulate the economy

Before launch or a major rebalance, estimate:
- currency earned per 10 minutes
- currency spent per 10 minutes
- time to first meaningful purchase
- time to common upgrade
- time to aspirational item
- wallet balance by early/mid/late player
- source/sink ratio
- effect of boosters or passes
- effect of a high-engagement player vs casual player

Use ranges and scenarios, not a fake single “perfect” number.

If real analytics exist, replace assumptions with observed distributions.

### 4. Separate progression value from paid value

Create three lanes:
- **Play-earned value** — core progression and mastery
- **Optional paid value** — convenience, expression, collection, personalization, supported acceleration
- **Prestige value** — status earned by skill, dedication, event accomplishment or social contribution

Do not make the best-looking or most respected status exclusively equivalent to spending.

### 5. Choose the right Roblox monetization primitive

Use current official definitions, generally:
- passes for one-time permanent privileges
- developer products for repeat purchases
- subscriptions for recurring monthly benefits
- private servers when private-group play has real value
- paid access only when it fits the product strategy and current platform rules

Do not use a repeat-purchase product when a one-time entitlement is the honest product.

### 6. Build the value ladder

Design a small ladder before a giant catalog:
- low-friction optional purchase
- core-value purchase
- premium expressive/collection purchase
- recurring value only if content/service recurs

For every SKU define:
- player problem/desire solved
- exact entitlement
- duration
- whether value stacks
- non-payer alternative
- gameplay impact
- refund/receipt failure implications
- analytics event
- UI placement
- frequency cap if needed

Avoid overwhelming a first-time player with a full store.

### 7. Design purchase moments

A purchase surface should appear when value is understandable.

Prefer:
- after a player experiences the underlying mechanic
- at an upgrade decision
- after a positive achievement
- when a cosmetic/collection goal is visible
- when a convenience benefit is immediately legible

Avoid:
- blocking the first fun interaction
- repeated interruption after decline
- misleading countdowns
- fake scarcity
- hiding the true cost
- paywalls that surprise players after investment

### 8. Protect game balance

For power or acceleration purchases, model:
- PvE impact
- PvP impact
- social hierarchy
- time saved
- content skipped
- matchmaking implications
- whether a payer invalidates another player's effort

If the product weakens the core loop by letting players skip the best part, redesign it.

### 9. Instrument the monetization funnel

Track steps such as:
- ShopOpened
- ProductViewed
- PurchaseIntent
- RobloxPromptShown
- PurchaseCompleted
- EntitlementGranted
- PurchaseFailedOrCancelled
- ProductUsed
- RepeatPurchase

Also log the relevant economy source/sink and post-transaction wallet balance.

For each SKU review:
- exposure
- conversion
- revenue
- usage
- repeat rate where relevant
- payer retention
- non-payer retention
- downstream gameplay impact

Revenue without healthy retention is not automatically a success.

### 10. Pricing strategy

Start from value and player context, not copied competitor prices.

Use:
- coherent price ladders
- clear bundle math
- entitlement transparency
- current platform regional/managed pricing features when eligible
- dynamic price retrieval rather than hard-coded UI when current Roblox tooling requires it

When enough transaction volume exists for Roblox's official price optimization, verify current eligibility thresholds and implementation guidance before testing.

Do not manually “optimize” by constantly raising prices from small noisy samples.

### 11. Paid random-item safety gate

Before any paid random mechanic:
- verify current Roblox paid-random-item policy
- disclose actual numerical odds where required
- handle per-user restrictions through current policy APIs
- provide compliant alternatives for restricted users
- verify whether trading of paid items is allowed for that user
- review local/legal requirements when applicable

Treat paid randomization as high-risk. Prefer direct purchases or earnable random rewards when they meet the design goal.

### 12. Receipt and entitlement integrity

For repeat-purchase products:
- use the current official receipt-processing flow
- validate user/product/receipt state
- make grant operations idempotent
- persist entitlement/currency safely
- prevent double grants
- define recovery behavior after server failure

For permanent entitlements:
- re-check ownership on join as appropriate
- keep authoritative state server-side

Never rely only on client UI state for value delivery.

### 13. Run economy QA

Look for:
- inflation
- dead currencies
- mandatory grind
- no attractive sinks
- whale-only progression
- early store spam
- underpriced permanent power
- purchased currency with nothing useful to buy
- progression invalidated by purchase
- exploit amplification
- confusing bundles
- hard-coded prices that can drift from platform price
- paid randomization without current policy review

## Analytics feedback loop

When real data exists:
1. Segment payer vs non-payer and new vs returning.
2. Inspect sources/sinks and wallet balance by progression stage.
3. Inspect shop funnel abandonment.
4. Check whether buyers retain better because they are already more engaged; do not assume purchase caused retention.
5. Identify one economy hypothesis at a time.
6. Rebalance with a reversible change when possible.
7. Re-measure retention and economy together.

## Codex implementation handoff

Return:
- currency schema
- authoritative server state
- DataStore/persistence requirements
- transaction APIs
- receipt/idempotency plan
- product configuration placeholders
- analytics events
- UI state requirements
- policy checks
- exploit/security risks
- tests for duplicate receipts, disconnects, retries and missing product info
- rollout/rollback plan

Keep product IDs and volatile prices in configuration, not scattered through gameplay code.

## Output contract

For a full economy/monetization pass include:
- economy map
- sources/sinks table
- progression-stage wallet targets
- simulation assumptions
- value ladder / SKU architecture
- purchase moments
- payer vs non-payer fairness review
- analytics funnel
- policy/receipt requirements
- implementation handoff
- post-launch rebalance rules

## Final QA

- Core gameplay is fun without purchase.
- Every currency has a distinct job.
- Sources and sinks are measurable.
- The player understands what they receive before purchase.
- Non-payers remain viable.
- Paid value does not trivialize the best gameplay.
- Receipt granting is failure-safe and idempotent.
- Current price/policy rules are verified before implementation.
- Monetization metrics are evaluated alongside retention.
- No revenue guarantee is made.

## Operating rules

- Preserve explicit user constraints.
- Never fabricate current Roblox prices, limits, fees or policy.
- Verify time-sensitive platform claims with official Roblox sources.
- Avoid dark-pattern pressure and deceptive scarcity.
- Treat children and younger audiences with extra care around purchase pressure.
- Prefer direct, understandable value over opaque paid randomness.
- Keep gameplay/retention ownership with 'roblox-retention-game-director'.
