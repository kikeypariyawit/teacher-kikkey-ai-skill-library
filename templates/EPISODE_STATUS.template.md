# AI Drama Episode Status

> Fast operational dashboard for the current series. This file answers: what is approved, what is in progress, what comes next, and what must not be regenerated.

## 1. Current production state
- Project:
- Current episode:
- Current phase:
- Last fully approved episode:
- Last approved scene:
- Last approved shot:
- Next required deliverable:
- Final-approve mode: YES / NO

## 2. Episode pipeline
| Episode | Story | Script | Character state | Storyboard | Master shots | Frames | Video prompts | Continuity | QA | Final approval |
|---|---|---|---|---|---|---|---|---|---|---|
| EP01 | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT STARTED | NOT REQUESTED |
| EP02 | | | | | | | | | | |

Use: `NOT STARTED` / `IN PROGRESS` / `READY` / `APPROVED` / `REVISE`

## 3. Current episode objective
- Episode question:
- Emotional promise:
- Hook:
- Main escalation:
- Major reveal / payoff:
- Cliffhanger:
- Target runtime:

## 4. Approved assets — do not regenerate unless requested
| Asset ID | Type | Character / scene | Description | File / reference | Approved state |
|---|---|---|---|---|---|
| | Character face | | | | NOT REVIEWED |

## 5. Assets still needed
| Asset ID | Scene/Shot | Asset type | Generation route | Start frame? | End frame? | Status |
|---|---|---|---|---|---|---|
| | | | | | | |

## 6. Shot generation queue
| Priority | Shot ID | Scene | Mode | Still/keyframe model | Motion model | Prompt ready? | Generated? | Selected take | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |

## 7. Revision queue
| Priority | Item | Problem | Smallest required fix | Downstream assets affected | Status |
|---|---|---|---|---|---|
| Critical | | | | | OPEN |

## 8. Do-not-redo list
- Approved character faces:
- Approved wardrobe looks:
- Approved story beats:
- Approved frames:
- Approved shots / takes:
- User-rejected alternatives:

## 9. Current blockers
- Canon conflict:
- Missing reference:
- Tool / model limitation:
- Generation failure:
- None:

## 10. Continuity handoff from previous episode
- Story time / location:
- Character positions:
- Wardrobe / hair / makeup:
- Injuries:
- Props:
- Emotional state:
- Relationship state:
- Knowledge / secrets:
- Open setup/payoff IDs:
- Exact cliffhanger continuation:

## 11. Final approval checklist
- [ ] Script timing plausible
- [ ] Dialogue final
- [ ] Character identities locked
- [ ] Storyboard final
- [ ] Master shot IDs stable
- [ ] Generation route chosen per shot
- [ ] Start/end frame prompts ready where needed
- [ ] Video prompts ready
- [ ] Continuity checked
- [ ] Critical QA fixes applied
- [ ] No intermediate approval still required

## 12. Next command
Suggested minimal instruction after this file is current:

`Use the latest AI Drama Producer. Read the four canonical project files first, continue the next required episode work, complete all downstream production steps, and stop only at Final Approve unless there is a genuine canon conflict.`

---

## Operating rules
- Update this file after any approval, rejection, or major revision.
- Never mark an asset APPROVED merely because it was generated.
- Prefer the smallest revision chain: do not rebuild approved upstream work when only a downstream asset failed.
- This file tracks workflow state; story truth belongs in `PROJECT_BIBLE.md`, identity truth in `CHARACTER_BIBLE.md`, and state continuity in `CONTINUITY_LEDGER.md`.