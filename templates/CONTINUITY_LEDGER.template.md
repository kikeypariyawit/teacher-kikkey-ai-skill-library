# AI Drama Continuity Ledger

> Track only state that can affect later shots or episodes. Update after every approved episode and after any approved revision that changes canon.

## A. Episode handoff state
- Project:
- Episode:
- Previous approved episode:
- Story date / time at episode start:
- Story date / time at episode end:
- Episode cliffhanger:
- Next episode must inherit:

## B. Character state ledger
| Character | Scene/Shot | Wardrobe | Hair/Makeup | Physical state | Emotional state | Knowledge / belief | Relationship state | Prop carried | Canonical change |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

## C. Prop / object state
| Prop ID | Object | Owner / holder | Start state | Change | End state | Last seen Scene/Shot | Must persist? |
|---|---|---|---|---|---|---|---|
| P01 | | | | | | | YES/NO |

## D. Location state
| Location ID | Scene/Shot | Time / lighting | Weather | Furniture / object state | Damage / mess | Entry / exit positions | Notes for next use |
|---|---|---|---|---|---|---|---|
| LOC01 | | | | | | | |

## E. Screen direction / spatial continuity
| Scene | Character A position | Character B position | Eyeline | Movement direction | Camera side / axis | Continuity lock |
|---|---|---|---|---|---|---|
| | | | | | | |

## F. Injury / appearance continuity
| Character | Condition | First appears | Visible where | Severity | Healing progression | Current state |
|---|---|---|---|---|---|---|
| | | | | | | |

## G. Information continuity
| Fact / secret | Audience knows? | Character(s) who know | Character(s) who believe false version | Last changed | Next consequence |
|---|---|---|---|---|---|
| | | | | | |

## H. Setup / payoff continuity
| Setup ID | Current status | Latest reinforcement | Who noticed | Required future payoff / consequence |
|---|---|---|---|---|
| S01 | OPEN | | | |

## I. Shot-to-shot generation anchors
Use only for shots where visual generation continuity is important.

| Shot ID | Identity anchor | Wardrobe anchor | Location anchor | Prop anchor | Start-frame dependency | End-frame dependency | Next-shot carryover |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## J. Continuity risks discovered during QA
| Risk | Severity | Affected Scene/Shot | Fix applied | Remaining risk |
|---|---|---|---|---|
| | Critical/Important/Polish | | | |

## K. End-of-episode delta
Record only what changed compared with the beginning of the episode.

- Character changes:
- Relationship changes:
- Knowledge changes:
- Wardrobe / appearance changes:
- Injury changes:
- Prop changes:
- Location changes:
- Setup/payoff changes:
- New promises to audience:
- New unresolved questions:

## L. Mandatory inheritance for next episode
- Faces / identity:
- Wardrobe:
- Hair / makeup:
- Injuries:
- Props:
- Location / time:
- Emotional state:
- Knowledge / secrets:
- Relationship state:
- Open setups:
- Cliffhanger continuation:

---

## Operating rules
- Do not log decorative details unless they can create a later continuity error.
- Use stable Scene IDs and Shot IDs from the production package.
- If a generated result visibly changes canon, do not silently adopt it. Mark it as a generation error unless approved as a story change.
- At the start of a new episode, read `PROJECT_BIBLE.md`, `CHARACTER_BIBLE.md`, this ledger, and `EPISODE_STATUS.md` before writing new scenes.