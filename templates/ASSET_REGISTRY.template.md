# ASSET_REGISTRY.md

Use this file as the production inventory for approved and generated AI-drama assets. It tracks **what exists**, **what it owns**, **where it lives**, and **whether downstream shots may trust it**.

## Status values
- `DRAFT`
- `APPROVED`
- `REJECTED`
- `SUPERSEDED`

## Character Masters

| Asset ID | Character | View | Owner / truth controlled | Status | Revision | Path / URL | Notes |
|---|---|---|---|---|---|---|---|
| `CHAR_NAME_MASTER_R1` |  |  | facial identity / body identity | DRAFT | R1 |  |  |

## Look / Costume Masters

| Asset ID | Character | Look ID | Owner / truth controlled | Scope | Status | Revision | Path / URL |
|---|---|---|---|---|---|---|---|
| `CHAR_NAME_LOOK_A_R1` |  | LOOK_A | wardrobe / accessories / hair state | episode | DRAFT | R1 |  |

## Location Masters

| Asset ID | Location | View / orientation | Owner / truth controlled | Status | Revision | Path / URL | Notes |
|---|---|---|---|---|---|---|---|
| `LOC_NAME_MASTER_WIDE_R1` |  | master wide | architecture / geography | DRAFT | R1 |  |  |

## Scene Anchors

| Asset ID | Episode / Scene | Cast / looks | Location | State owned | Status | Path / URL | Notes |
|---|---|---|---|---|---|---|---|
| `EP01-S01-ANCHOR_R1` | EP01 / S01 |  |  | blocking / light / atmosphere | DRAFT |  |  |

## Props / Story Objects

| Asset ID | Prop | Owner / truth controlled | Scope | Status | Path / URL | Notes |
|---|---|---|---|---|---|---|
|  |  | design / damage / object state |  | DRAFT |  |  |

## Shot Assets

| Shot ID | Asset role | Asset ID / filename | Status | Generation route | Primary model/tool | Reference inputs | Handoff state | Notes |
|---|---|---|---|---|---|---|---|---|
| `EP01-S01-SH01` | START / END / VIDEO / INSERT |  | DRAFT |  |  |  |  |  |

## Approval rules
1. Only `APPROVED` masters may silently propagate downstream.
2. A rejected exploratory image must never become a character/location master by accident.
3. When replacing a master, mark the old one `SUPERSEDED` and record the new asset ID.
4. Previous-shot frames are local anchors; they do not replace global Character/Look/Location Masters.
5. Record the smallest ownership statement possible: face, costume, room geography, prop state, lighting state, etc.
6. Do not claim an unavailable image was visually inspected.

## Current approved set

### Characters
- 

### Looks
- 

### Locations
- 

### Scene anchors
- 

### Props
- 
