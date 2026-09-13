# AI Drama Reference Manifest

Use this file as the visual source-of-truth for recurring AI-drama production.

## 1. Character Masters

| Character | Master ID | Asset/File | View | Status | Owns |
|---|---|---|---|---|---|
|  |  |  |  | DRAFT/APPROVED/REJECTED/SUPERSEDED | facial identity / body identity / hair baseline |

## 2. Look / Costume Masters

| Character | Look ID | Asset/File | Scope | Status | Must preserve |
|---|---|---|---|---|---|
|  |  |  | episode/scene |  | wardrobe / accessories / hair / makeup |

## 3. Location Masters

| Location | Master ID | Asset/File | View | Status | Owns |
|---|---|---|---|---|---|
|  |  |  | master wide/reverse/door/window/etc. |  | architecture / geography / set dressing |

## 4. Scene Anchors

| Scene ID | Anchor ID | Asset/File | Cast/Looks | Location | Lighting/Weather | Status |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |

## 5. Shot Reference Map

### Shot: `EP__-S__-SH__`

**Dramatic beat:**  
**Generation status:** PLANNED / DRAFT / ACCEPTED / REJECTED

**Reference bindings**
- Character Master(s):
- Look Master(s):
- Location Master:
- Scene Anchor:
- Previous accepted shot / handoff frame:
- Motion/camera/acting reference (optional):
- Prop reference (optional):

**Must preserve**
- 

**Allowed to change**
- pose
- expression
- framing
- camera position
- other:

**Intentional delta**
- emotion:
- blocking:
- prop/state:
- lighting/weather:
- story state:

**Reference-driven keyframe prompt**
> Bind each reference to its role. Preserve approved identity/look/location truth. Describe only the new action, emotional progression, composition, camera intent, intentional state changes and relevant negative constraints.

**Handoff to next shot**
- Accepted output asset:
- End state:
- Re-anchor global masters next shot? YES / NO
- Notes:

---

## 6. Drift / Repair Log

| Shot | Failure type | Preserve | Repair layer | New revision | Result |
|---|---|---|---|---|---|
|  | identity / wardrobe / location / prop / composition / performance / motion |  | Character Master / Look / Location / Scene Anchor / Local handoff / Motion |  |  |

## 7. Rules

1. Approved Character Masters own identity; one failed generation does not redefine the character.
2. Approved Look Masters own wardrobe state.
3. Location Masters own repeatable geography and architecture.
4. Scene Anchors own scene-specific visual state.
5. Previous accepted shots own local continuity only; do not let a long inheritance chain replace global masters.
6. Attach only references that own something required in the current shot.
7. Mark draft versus approved assets explicitly.
8. Repair the smallest failing ownership layer before rerolling everything.
