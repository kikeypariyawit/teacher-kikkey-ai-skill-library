---
name: ai-production-designer
description: Build coherent recurring cinematic worlds and locations for AI drama using architecture, materials, spatial anchors, practical light, dressing, status cues and generation-safe environment design.
version: 1.0.0
---

# ai-production-designer

## Purpose

Turn a story location into an authored, repeatable production environment that looks specific rather than generic and can remain consistent across AI-generated shots.

## Use when

Use for:
- major recurring locations
- prestige interiors/exteriors
- large halls, mansions, hospitals, campuses, offices, ceremonies, dorms, courts, clubs, fantasy environments
- location redesign when outputs look generic or inconsistent
- building Location Masters and Scene Anchors

## Decision ownership

This skill owns:
- architecture and spatial identity
- material palette and wear
- practical light sources
- status/class/institutional cues
- recurring set dressing
- spatial anchors
- foreground/midground/background environment design
- crowd-use zones from a production-design perspective
- environment continuity requirements

It does not own:
- story causality
- acting tactics
- final camera grammar
- provider/model routing
- motion prompt syntax

## Location bible

For each important location define:

### Identity
- Location ID
- narrative role
- era / cultural context
- public/private function
- emotional contradiction

### Architecture
- overall volume
- ceiling height
- floor count
- dominant lines/shapes
- entrances/exits
- stairs/elevators/corridors
- windows/openings
- three repeatable landmarks

### Materials
- floor
- walls
- structural material
- furniture
- reflective surfaces
- wear/maintenance level

### Light
- practical sources
- daylight direction
- motivated night sources
- warm/cool separation
- areas intentionally kept quiet/dark

### Dressing
- hero prop
- recurring signage/art/object categories
- lived-in evidence
- institutional/service details
- what must never randomly appear

### Spatial layers
- foreground opportunities
- midground action zone
- background depth
- negative space
- camera-safe sides

### Population logic
- who belongs here
- what background people normally do
- peak vs quiet density
- how service/staff/student/crowd behavior expresses the institution

## Status and wealth rule

Do not communicate prestige only through gold, marble and chandeliers.

Show status through:
- scale and access
- spacing
- maintenance
- material quality
- service behavior
- security/control
- acoustics
- order
- custom objects
- who is allowed where

## Generation-safe design

Prefer a few strong, repeatable anchors over dozens of tiny decorations.

Define:
- must-preserve anchors
- allowed variation
- temporary scene dressing
- crowd density state
- weather/time variant
- VFX interaction zones

If an environment will recur, create a Location Master or scene anchor before generating many shots.

## Output contract

Return:
- Location ID / name
- Narrative function
- Architecture
- Materials
- Practical lighting
- Dressing / hero prop
- Three repeatable spatial anchors
- Foreground/midground/background plan
- Population/crowd logic
- Status cues
- Day/night/weather variants
- Must-preserve vs allowed-to-change
- Generation risks
- Location-master prompt / scene-anchor handoff when requested

## Final QA

- Location is identifiable without relying on a text label.
- Architecture supports the scene's blocking.
- Materials/status cues fit the story world.
- Practical lights explain the image.
- Background behavior matches the institution.
- Recurring anchors can survive across shots.
- Design is rich but not prompt-cluttered.
- The location does not become a generic marble lobby or generic school corridor.

## Operating rules

- Preserve established location canon.
- Do not invent current provider controls.
- Keep design specific enough to reproduce but flexible enough for shot variation.
- Hand final camera decisions to cinematic-director.
- Hand reference ownership to reference-first-visual-production.
