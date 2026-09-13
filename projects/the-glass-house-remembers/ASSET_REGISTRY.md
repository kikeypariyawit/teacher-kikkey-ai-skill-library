# THE GLASS HOUSE REMEMBERS — ASSET REGISTRY

Status: visual specifications ready; no generated visual asset is considered approved until explicit user approval.
Reference specs:
- `VISUAL_MASTER_PRODUCTION_PACK.md`
- `EP01_REFERENCE_BINDING_MAP.md`

## Character Masters
| Asset ID | Owner | Status | Purpose |
|---|---|---|---|
| MARA_CHARACTER_MASTER_R1 | Mara Vale | TO_GENERATE — SPEC_READY | global face/body identity across series |
| ADRIAN_CHARACTER_MASTER_R1 | Adrian Blackthorn | TO_GENERATE — SPEC_READY | global face/body identity across series |
| ROWAN_CHARACTER_MASTER_R1 | Mrs. Rowan | TO_GENERATE — SPEC_READY | global face/body identity across series |
| EVELYN_CHARACTER_DERIVED_R1 | Evelyn Blackthorn | TO_GENERATE_AFTER_MARA — SPEC_READY | 1975 related-but-distinct identity derived from approved Mara structure |
| SEBASTIAN_CHARACTER_MASTER_R1 | Sebastian Blackthorn | TO_GENERATE_LATER | global face/body identity across series |

## Character Master sub-renders
### Mara
- MARA_CM_R1_FACE_FRONT
- MARA_CM_R1_FACE_3Q
- MARA_CM_R1_FACE_SIDE
- MARA_CM_R1_FULL_FRONT
- MARA_CM_R1_FULL_3Q
- MARA_CM_R1_EXPR_INVESTIGATE
- MARA_CM_R1_EXPR_SUSPICION
- MARA_CM_R1_EXPR_RECOGNITION

### Adrian
- ADRIAN_CM_R1_FACE_FRONT
- ADRIAN_CM_R1_FACE_3Q
- ADRIAN_CM_R1_FACE_SIDE
- ADRIAN_CM_R1_FULL_FRONT
- ADRIAN_CM_R1_FULL_3Q
- ADRIAN_CM_R1_EXPR_GUARDED
- ADRIAN_CM_R1_EXPR_GUILT
- ADRIAN_CM_R1_EXPR_PROTECTIVE

### Rowan
- ROWAN_CM_R1_FACE_FRONT
- ROWAN_CM_R1_FACE_3Q
- ROWAN_CM_R1_FACE_SIDE
- ROWAN_CM_R1_FULL_FRONT
- ROWAN_CM_R1_FULL_3Q
- ROWAN_CM_R1_EXPR_WARM
- ROWAN_CM_R1_EXPR_RECOGNITION
- ROWAN_CM_R1_EXPR_CERTAINTY

### Evelyn
- EVELYN_R1_FACE_3Q_1975
- EVELYN_R1_FACE_FRONT_1975
- EVELYN_R1_PORTRAIT_POSE_1975

## Look Masters
| Asset ID | Owner | Status | Purpose |
|---|---|---|---|
| MARA_LOOK_EP01_R1 | Mara | TO_GENERATE_AFTER_CHARACTER_MASTER — SPEC_READY | restoration work wardrobe / hair state |
| ADRIAN_LOOK_EP01_R1 | Adrian | TO_GENERATE_AFTER_CHARACTER_MASTER — SPEC_READY | house-night wardrobe |
| ROWAN_LOOK_EP01_R1 | Rowan | TO_GENERATE_AFTER_CHARACTER_MASTER — SPEC_READY | estate wardrobe / key set |
| EVELYN_LOOK_1975_R1 | Evelyn | TO_GENERATE_AFTER_DERIVED_MASTER — SPEC_READY | 1975 styling distinct from Mara |

## Location Masters
| Asset ID | Status | Purpose |
|---|---|---|
| BLACKTHORN_HOUSE_EXTERIOR_MASTER_R1 | TO_GENERATE_LATER | estate architecture truth |
| RESTORATION_STUDIO_MASTER_R1 | TO_GENERATE — SPEC_READY | EP01 primary location truth |
| GLASS_CONSERVATORY_MASTER_R1 | TO_GENERATE_BEFORE_EP03 | recurring signature location |
| EAST_WING_MASTER_R1 | TO_GENERATE_LATER | archive/fire-scarred location |

### Restoration Studio coverage
- STUDIO_R1_MASTER_WIDE
- STUDIO_R1_REVERSE_WIDE
- STUDIO_R1_DOOR_RELATION
- STUDIO_R1_WINDOW_RELATION
- STUDIO_R1_NIGHT_LIGHT

## Scene Anchors
| Asset ID | Status | Purpose |
|---|---|---|
| EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1 | TO_GENERATE_AFTER_LOCATION_LOOKS — SPEC_READY | easel/door/window/table/light geometry and EP01 night state |

## Hero Props
| Asset ID | Status | Purpose |
|---|---|---|
| EVELYN_PORTRAIT_R1_CLEAN_REFERENCE | TO_GENERATE_AFTER_EVELYN_MASTER — SPEC_READY | canonical underlying 1975 painting identity |
| EVELYN_PORTRAIT_R1_SMOKE_DAMAGED | TO_DERIVE_FROM_CLEAN | EP01 beginning state |
| EVELYN_PORTRAIT_R1_EYE_REVEAL | TO_DERIVE_FROM_CLEAN | Shot 01–02 state |
| EVELYN_PORTRAIT_R1_PARTIAL_FACE | TO_DERIVE_FROM_CLEAN | Shot 03–07 state |
| EVELYN_BRASS_PLAQUE_R1 | TO_GENERATE — SPEC_READY | readable insert: EVELYN BLACKTHORN / 1948–1975 |
| WHITE_CAMELLIA_BUNDLE_R1 | TO_GENERATE_OR_SCENE_PROP | Rowan recurring motif |

## Reference binding rules
- Character Master owns stable face/body identity.
- Look Master owns wardrobe, hair and grooming state.
- Location Master owns architecture/material language.
- Scene Anchor owns local spatial geometry, light direction and atmosphere.
- Hero Prop Master owns prop identity/state.
- Previous accepted frame may guide local continuity but must not replace global owner references.
- Attach only references that own a required invariant; more references are not automatically better.
- Re-anchor to global Character/Location masters periodically to prevent inherited drift.

## Generation order
1. Mara Character Master.
2. Adrian Character Master.
3. Rowan Character Master.
4. Evelyn derived identity from approved Mara.
5. EP01 Look Masters.
6. Restoration Studio Master coverage.
7. EP01 Night Scene Anchor.
8. Clean Evelyn Portrait, then derive all smoke/restoration states from that exact underlying painting.
9. Brass plaque.
10. EP01 keyframes and moving shots using `EP01_REFERENCE_BINDING_MAP.md`.

## Approval rule
Do not mark assets APPROVED merely because they were generated. Approval requires explicit user acceptance or clearly accepted downstream use. Rejected exploratory generations must not become continuity anchors.
