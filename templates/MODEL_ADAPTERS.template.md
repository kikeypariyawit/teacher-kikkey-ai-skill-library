# MODEL_ADAPTERS.md

Use this file to store **volatile, current provider/model/interface facts** outside stable skill logic.

Do not put unverified claims here as facts. Every provider-specific statement should include an evidence status and date checked.

## Evidence status
- `VERIFIED_CURRENT` — confirmed from a current authoritative source or active provider interface
- `USER_CONFIRMED` — confirmed by the user from their current account/interface
- `KNOWN_PROJECT_TEST` — observed in a recorded project test
- `PROVISIONAL` — plausible but not currently verified

## Available tools / subscriptions

| Provider / Tool | Account / Surface | Available? | Credits / plan notes | Evidence status | Checked date | Source / note |
|---|---|---:|---|---|---|---|
|  |  |  |  |  |  |  |

## Model capability matrix

| Model / Interface | Still / Video | T2V | I2V | Character refs | Start frame | End frame | Audio / dialogue | Typical strength | Known weakness | Evidence status | Checked date |
|---|---|---:|---:|---:|---:|---:|---:|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  | PROVISIONAL |  |

## Production routing notes

Record only observations that change routing decisions.

### Model / surface: ____________________
- Best for:
- Avoid for:
- Identity consistency:
- Subtle performance:
- Multi-character interaction:
- Camera motion:
- Environment motion:
- Start/end-frame behavior:
- Dialogue/audio:
- Speed:
- Cost/credit behavior:
- Reliable shot duration:
- Evidence status:
- Checked date:
- Source / project test:

## Known project tests

| Test ID | Model / Surface | Shot type | Inputs / refs | Result | Failure mode | Repair attempted | Final routing lesson | Date |
|---|---|---|---|---|---|---|---|---|
| `TEST-001` |  |  |  |  |  |  |  |  |

## Routing policy
1. Do not choose one model for the whole episode by habit.
2. Use shot requirements to route per shot.
3. Keep exact character/location composition still-first when that produces more reliable control.
4. Avoid unnecessary end-frame locking on subtle performance.
5. After two materially similar failures, diagnose and change strategy instead of only expanding the prompt.
6. Mark any unsupported current capability `PROVISIONAL`.
7. Re-check time-sensitive model facts before a major production or purchase decision.

## Current preferred routes

These are project-specific and should be revised as tests change.

| Shot class | Preferred route | Primary tool/model | Fallback | Evidence status | Why |
|---|---|---|---|---|---|
| Identity-critical close-up |  |  |  | PROVISIONAL |  |
| Dialogue / subtle acting |  |  |  | PROVISIONAL |  |
| Two-character interaction |  |  |  | PROVISIONAL |  |
| Action / movement |  |  |  | PROVISIONAL |  |
| Environment / spectacle |  |  |  | PROVISIONAL |  |
| Utility insert / reaction |  |  |  | PROVISIONAL |  |
