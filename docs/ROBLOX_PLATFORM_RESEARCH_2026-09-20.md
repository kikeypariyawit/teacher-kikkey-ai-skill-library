# Roblox Platform Research Snapshot — 2026-09-20

Purpose: dated evidence for the Roblox game-design skills. This file may become stale. Re-verify official Roblox Creator Hub documentation before implementation-critical decisions.

## 1. Discovery signals

Official Roblox Discovery documentation currently says Recommended for You uses per-user behavioral signals and emphasizes long-term retention.

Signals described as most important include:
- play-through rate after recommendation impression
- first-play bounce rate, including very short first sessions
- play days per user
- playtime per user

Other important signals include:
- intentional co-play days per user
- qualified play sessions per user
- spend days per user
- Robux spent per user

Roblox explicitly says these averages do not inherently favor larger experiences and recommends focusing on high-quality engaging gameplay rather than optimizing a single signal.

Source:
https://create.roblox.com/docs/discovery

## 2. Analytics priority

Roblox Analytics guidance recommends improving retention, engagement and monetization before heavily scaling acquisition.

Current guidance highlights:
- D1 retention and average session time first
- D7 and D30 retention for long-term progress/return behavior
- payer conversion and ARPPU for monetization
- acquisition/play-through rate after product quality is stronger
- monitor impact after each update

Similar-experience benchmarks are available when traffic eligibility is met and are guidance, not a direct discovery-ranking input.

Sources:
https://create.roblox.com/docs/production/analytics
https://create.roblox.com/docs/production/analytics/analytics-dashboard

## 3. FTUE / onboarding

Roblox describes FTUE as the first few minutes and ties onboarding success to D1 retention plus onboarding-goal completion. Funnel analytics and experiments should be used to find leaks.

Source:
https://create.roblox.com/docs/production/game-design/onboarding

## 4. Event instrumentation

AnalyticsService supports:
- economy events for sources, sinks and wallet balance
- funnel events for onboarding, progression and shop
- custom events for game-specific behavior/adoption

Custom events are server-sent in published experiences and unlock Explore analytics after data begins populating.

Sources:
https://create.roblox.com/docs/production/analytics/event-types
https://create.roblox.com/docs/production/analytics/custom-events

## 5. Economy analytics

Roblox economy analytics can inspect total sources/sinks, top categories and average wallet balances. Current Creator Hub guidance suggests rising net balances can indicate a need for stronger sinks.

Source:
https://create.roblox.com/docs/production/analytics/economy-events

## 6. Monetization primitives

Current Roblox monetization documentation includes:
- passes
- developer products
- subscriptions
- private servers
- paid access
- avatar/commerce-related systems
- managed/price optimization features where eligible

Roblox also cautions that disliked monetization strategies can result in negative player feedback.

Sources:
https://create.roblox.com/docs/monetize-experiences
https://create.roblox.com/docs/production/monetization

## 7. Developer product implementation change

Current Developer Products docs state cross-game developer-product sales were disabled starting May 30, 2026. They also require receipt processing and validation for granting repeat-purchase products.

Source:
https://create.roblox.com/docs/production/monetization/developer-products

## 8. Price optimization

As of this snapshot, Roblox says price optimization generally needs enough transaction volume to reach statistical significance and notes that in most cases this means at least 60,000 transactions over the previous 30 days.

The same documentation emphasizes dynamically retrieved product prices instead of hard-coded UI values for managed pricing/price optimization.

This threshold is volatile and must be re-verified before use.

Source:
https://create.roblox.com/docs/production/monetization/price-optimization

## 9. Paid random items

Current policy guidance requires numerical odds disclosure for paid random items, including indirect paid-currency random mechanics. PolicyService information must be used to respect per-user restrictions, including ArePaidRandomItemsRestricted and IsPaidItemTradingAllowed.

Source:
https://create.roblox.com/docs/production/monetization/paid-random-items

## 10. Social and return systems

Roblox currently supports:
- player invite prompts with launch data
- experience events and updates
- opt-in experience notifications for eligible users/experiences

These tools should support genuine gameplay/social value rather than generic spam.

Sources:
https://create.roblox.com/docs/production/promotion/invite-prompts
https://create.roblox.com/docs/production/promotion/experience-events
https://create.roblox.com/docs/production/promotion/experience-notifications

## 11. Performance as retention

Roblox performance guidance links low frame rate, memory pressure and long join time to poorer player experience and retention. Large worlds can benefit from instance streaming.

Sources:
https://create.roblox.com/docs/performance-optimization
https://create.roblox.com/docs/performance-optimization/improve

## Research conclusion used by our skills

For a small creator using AI/Codex, the operating order should be:

1. Make the core action fun and immediately readable.
2. Instrument FTUE/core/progression/economy before guessing.
3. Fix first-play bounce and D1/session quality.
4. Build meaningful progression and social value.
5. Keep mobile performance healthy while expanding content.
6. Add monetization that amplifies value rather than replacing play.
7. Use post-update data to decide the next change.
8. Scale acquisition only after the product has evidence of healthy engagement.

Do not interpret this order as a guaranteed path to Roblox discovery or a Top-10 ranking.
