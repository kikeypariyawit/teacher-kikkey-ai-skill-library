# THE GLASS HOUSE REMEMBERS — VISUAL MASTER PRODUCTION PACK

Status: DRAFT SPEC READY FOR GENERATION
Scope: recurring character masters, EP01 look masters, principal location masters, EP01 scene anchor, hero portrait prop
Production rule: generate and approve global identity/location masters before using them as downstream references.

## Global visual language
Prestige gothic mystery romance with restrained modern realism. Black stone, aged oak, iron, glass, linen, wool, oxidized brass and museum-grade restoration materials. Warm tungsten interiors contrast with cold rainy window light. Skin remains natural and cinematic, never beauty-filtered. Avoid glossy fashion-ad posing, fantasy-goth costumes, cheap horror makeup, excessive fog, teal-orange grading, waxy skin, over-sharpening and generic AI symmetry.

Characters must be original fictional people and should not intentionally resemble any identifiable real person.

## Reference hierarchy
1. Character Master = stable face, age impression, body proportions, baseline hair identity.
2. Look Master = current wardrobe, grooming and scene-specific hair state.
3. Location Master = architecture and repeatable geography.
4. Scene Anchor = EP01 night lighting, furniture placement and local spatial relationships.
5. Hero Prop Master = Evelyn portrait / plaque state.
6. Previous accepted shot = local continuity only, never the sole identity source.

---

# 1. MARA VALE — CHARACTER MASTER PACK

Master ID: `MARA_CHARACTER_MASTER_R1`
Age impression: 27
Build: slim athletic, practical physicality, not model posing
Stable identity: dark-brown shoulder-length naturally textured hair; hazel-green eyes; intelligent steady gaze; understated natural face; crescent birthmark beneath left collarbone
Identity behavior: observant, contained, emotionally readable through eyes/jaw/breath more than large gestures

## Required renders
- `MARA_CM_R1_FACE_FRONT` — clean neutral head-and-shoulders front
- `MARA_CM_R1_FACE_3Q` — clean neutral three-quarter view
- `MARA_CM_R1_FACE_SIDE` — clean side profile
- `MARA_CM_R1_FULL_FRONT` — full body front, relaxed natural posture
- `MARA_CM_R1_FULL_3Q` — full body three-quarter
- `MARA_CM_R1_EXPR_INVESTIGATE` — focused professional concentration
- `MARA_CM_R1_EXPR_SUSPICION` — restrained suspicion, jaw beginning to tighten
- `MARA_CM_R1_EXPR_RECOGNITION` — quiet shock, breath held, no screaming

## Master portrait prompt
Original fictional woman, age 27, intelligent art conservator, slim athletic build, dark brown shoulder-length naturally textured hair with subtle imperfect strands, hazel-green eyes, balanced but distinctive facial structure, expressive brows, natural skin texture with subtle real-world asymmetry, understated appearance, calm investigative gaze, clean neutral studio background, soft diffused cinematic key light, realistic 50mm portrait photography, no glamour styling, no heavy makeup, no jewelry emphasis, no celebrity resemblance, no beauty-filter skin, identity reference image, highly coherent facial anatomy.

## Full-body prompt
Same approved Mara identity, full-body standing naturally with practical balanced posture, slim athletic proportions, simple neutral fitted clothing only for body-shape reference, hands relaxed, no fashion pose, clean neutral studio background, soft even reference lighting, accurate body anatomy, full figure visible head to shoes, identity sheet realism.

## Identity invariants
Must preserve: facial proportions, eye shape/color family, nose/mouth structure, jawline, age impression, baseline hair length/texture, body proportions.
Allowed to change later: hairstyle arrangement within same length/texture, expression, working posture, wardrobe, light, camera angle.
Do not drift toward: high-fashion model, overly youthful teen face, hyper-glamorous makeup, straightened glossy salon hair.

---

# 2. ADRIAN BLACKTHORN — CHARACTER MASTER PACK

Master ID: `ADRIAN_CHARACTER_MASTER_R1`
Age impression: 31
Build: tall, lean, composed
Stable identity: black-brown hair slightly long at front; grey eyes; restrained old-money presence; calm face whose emotion reads mainly through gaze and breath

## Required renders
- `ADRIAN_CM_R1_FACE_FRONT`
- `ADRIAN_CM_R1_FACE_3Q`
- `ADRIAN_CM_R1_FACE_SIDE`
- `ADRIAN_CM_R1_FULL_FRONT`
- `ADRIAN_CM_R1_FULL_3Q`
- `ADRIAN_CM_R1_EXPR_GUARDED`
- `ADRIAN_CM_R1_EXPR_GUILT`
- `ADRIAN_CM_R1_EXPR_PROTECTIVE`

## Master portrait prompt
Original fictional man, age 31, tall lean architectural historian and inherited-estate owner, black-brown hair slightly long at the front with natural texture, grey eyes, composed restrained face, refined but not model-perfect facial structure, pale-to-neutral natural skin texture, quiet intelligence, emotionally controlled gaze, understated old-money presence without arrogance, clean neutral studio background, soft cinematic reference lighting, realistic 50mm portrait photography, no celebrity resemblance, no beard unless extremely light natural stubble, no fashion-campaign pose, no glossy retouching.

## Identity invariants
Must preserve: facial structure, grey-eye impression, hairline/length, tall lean body, mature 31-year-old presence.
Allowed to change: expression, coat/shirt state, sleeve state, posture, light.
Do not drift toward: generic billionaire archetype, bodybuilder proportions, vampire styling, smug villain expression.

---

# 3. MRS. ELEANOR ROWAN — CHARACTER MASTER PACK

Master ID: `ROWAN_CHARACTER_MASTER_R1`
Age impression: 68
Stable identity: silver hair in a low twist; elegant severe posture; intelligent warm eyes; immaculate hands; physically capable, not frail

## Required renders
- `ROWAN_CM_R1_FACE_FRONT`
- `ROWAN_CM_R1_FACE_3Q`
- `ROWAN_CM_R1_FACE_SIDE`
- `ROWAN_CM_R1_FULL_FRONT`
- `ROWAN_CM_R1_FULL_3Q`
- `ROWAN_CM_R1_EXPR_WARM`
- `ROWAN_CM_R1_EXPR_RECOGNITION`
- `ROWAN_CM_R1_EXPR_CERTAINTY`

## Master portrait prompt
Original fictional woman, age 68, long-serving estate steward, silver hair arranged in a low practical twist, elegant severe posture, fine age lines and natural skin texture, intelligent observant eyes capable of genuine warmth, composed mouth, physically capable and self-possessed rather than frail, clean neutral studio background, soft cinematic reference light, realistic portrait photography, no horror styling, no witch archetype, no exaggerated pallor, no celebrity resemblance.

## Identity invariants
Must preserve: age, face proportions, silver hair identity, posture, capable physical presence.
Do not drift toward: stereotypical creepy servant, ghostly makeup, hunched frailty, caricature villain.

---

# 4. EVELYN BLACKTHORN — DERIVED PERIOD IDENTITY

Master ID: `EVELYN_CHARACTER_DERIVED_R1`
Age impression in 1975: 27
Relationship to Mara: unmistakable structural resemblance without being a literal duplicate.

## Derivation rule
Use approved `MARA_CHARACTER_MASTER_R1` as structural resemblance reference. Preserve recognizable relationship in eye spacing, cheekbone family, mouth shape and overall facial architecture, but intentionally alter enough details to read as a different woman: slightly different brow shape, softer lower face, subtly different nose bridge/nostril shape, period grooming, more socially polished posture, visible emotional fatigue.

## Required renders
- `EVELYN_R1_FACE_3Q_1975`
- `EVELYN_R1_FACE_FRONT_1975`
- `EVELYN_R1_PORTRAIT_POSE_1975`

## Evelyn identity prompt
Create an original fictional woman aged 27 in 1975 using the approved Mara reference only as family-level structural resemblance, not as a duplicate. Similar eye spacing, cheekbone family and mouth architecture, but different brow grooming, slightly softer lower-face shape, subtly different nose bridge, more socially polished posture and an emotionally tired gaze. Period-appropriate 1975 dark-brown hair styling with natural volume, understated elegant makeup, no modern beauty styling, no celebrity resemblance.

---

# 5. EP01 LOOK MASTERS

## MARA_LOOK_EP01_R1
Wardrobe: charcoal-blue cotton work shirt, sleeves casually rolled to forearm; dark fitted practical trousers; restoration gloves only when working; minimal small earrings optional; no visible necklace; hair mostly loose with one side tucked behind ear.
Look prompt: Use Mara Character Master as identity source. Preserve face, age, body and baseline hair. Dress her as a working art conservator in a charcoal-blue cotton shirt with subtle natural creases, sleeves rolled to forearm, dark practical fitted trousers, understated shoes, minimal grooming, one side of hair tucked behind ear. Functional professional realism, no fashion styling.

## ADRIAN_LOOK_EP01_R1
Wardrobe: deep navy soft-structured jacket or long overshirt, white or stone shirt, dark trousers; no tie; understated expensive materials; hair controlled but not rigid.
Look prompt: Use Adrian Character Master as identity source. Preserve face/body/hair. Dress him in understated old-money evening house clothing: deep navy soft-structured jacket over a stone or white shirt, dark trousers, no tie, restrained expensive materials, no visible luxury logos, natural grooming.

## ROWAN_LOOK_EP01_R1
Wardrobe: dark charcoal practical dress with high clean neckline; subtle waist structure; small ring; antique key set at waist; silver hair low twist.
Look prompt: Use Rowan Character Master as identity source. Preserve age, face and hair identity. Dark charcoal practical estate dress, elegant clean neckline, functional silhouette, antique brass keys at waist, immaculate but lived-in fabric, no costume-goth exaggeration.

## EVELYN_LOOK_1975_R1
Wardrobe: ivory high-neck silk-blend blouse or dress upper, deep forest/black-green period garment, restrained 1975 elegance; small heirloom pendant may be added only if kept consistent later.
Look prompt: Use Evelyn Derived Master as identity source. Elegant but restrained upper-class 1975 styling, ivory high-neck silk-blend blouse with subtle period construction, deep forest green or black-green companion garment, natural period hair volume, subdued makeup, emotionally tired posture, authentic materials, no modern retro-fashion editorial look.

---

# 6. RESTORATION STUDIO LOCATION MASTER

Master ID: `RESTORATION_STUDIO_MASTER_R1`
Purpose: architectural truth for EP01 recurring room.

## Geometry lock
- converted historic library in Blackthorn House
- tall rain-streaked windows on one long wall
- dark aged oak built-ins / selective shelves
- central restoration easel slightly off-center
- conservation work table beside easel
- large doorway visible from work area, capable of framing Adrian/Rowan entrances
- black-glass-front cabinet or dark reflective surface near Mara's work position
- warm adjustable museum/restoration task lamps
- enough negative space for vertical two-shots

## Required renders
- `STUDIO_R1_MASTER_WIDE` — master geography wide
- `STUDIO_R1_REVERSE_WIDE` — reverse orientation
- `STUDIO_R1_DOOR_RELATION` — easel-to-door relationship
- `STUDIO_R1_WINDOW_RELATION` — easel-to-window relationship
- `STUDIO_R1_NIGHT_LIGHT` — EP01 rain/night lighting reference

## Location prompt
Prestige modern-gothic art restoration studio converted from an old private library inside an English-style isolated estate, dark aged oak built-ins, black stone accents, tall rain-streaked windows, one large clear doorway, museum conservation worktable, professional restoration easel, archival lamps, magnifier and restrained conservation tools, warm tungsten pools of task light against cold blue-grey rainy glass, elegant negative space, believable functional room geography, expensive but lived-in, cinematic realism, no fantasy castle clutter, no haunted-house cobwebs, no excessive candles.

---

# 7. EP01 SCENE ANCHOR

Asset ID: `EP01_RESTORATION_STUDIO_NIGHT_ANCHOR_R1`
Aspect: 9:16
Purpose: lock local EP01 geometry and light while leaving shot compositions flexible.

## Anchor composition
Mara at restoration easel in lower-middle foreground; portrait facing slightly toward camera; worktable within reach; doorway visible deep background/right or background/center-right; tall rainy windows along opposite side; dark reflective cabinet placed so Mara can plausibly catch her reflection; warm task lamp motivated from easel side; cold rain reflections behind.

## Anchor prompt
Vertical 9:16 cinematic scene anchor inside the approved Restoration Studio Master at night. Use Mara Look EP01 for wardrobe and approved location geometry. Mara stands at the restoration easel working on a smoke-darkened old oil portrait. The conservation table is within arm's reach. The large doorway remains clearly visible in deep background for later Adrian and Rowan entrances. Tall windows carry cold rainy reflections. A dark reflective cabinet is positioned so Mara can plausibly see her own face from the easel. Warm tungsten restoration lamp motivates the key light while the rest of the room falls into elegant darkness. Lock geography and light direction, but do not over-stage the final acting pose.

---

# 8. EVELYN PORTRAIT HERO PROP MASTER

Asset family: `EVELYN_PORTRAIT_MASTER_R1`
Medium: authentic oil portrait painted in 1975, aged by decades, later smoke-damaged.
Important: it must always read as a physical oil painting, never a printed photograph.

## Required prop states
- `EVELYN_PORTRAIT_R1_CLEAN_REFERENCE` — original 1975 painted state, for identity ownership
- `EVELYN_PORTRAIT_R1_SMOKE_DAMAGED` — beginning of EP01, face obscured by smoke-dark varnish
- `EVELYN_PORTRAIT_R1_EYE_REVEAL` — one eye exposed for Shot 01/02
- `EVELYN_PORTRAIT_R1_PARTIAL_FACE` — enough face restored for Shot 03–07 cliffhanger continuity

## Clean portrait prompt
Authentic 1975 oil portrait on canvas of Evelyn Blackthorn, using approved Evelyn Derived Master and Evelyn 1975 Look as identity/style references, formal but intimate three-quarter seated or standing portrait, emotionally tired composed gaze, period-authentic brushwork, layered oil pigments, subtle varnish, visible hand-painted texture, restrained dark-green and ivory palette, elegant estate portraiture, no photography texture, no digital painting sheen.

## Damage-state rule
Damage is additive over the same approved painting. Do not regenerate a different face for each restoration state. Smoke residue and darkened varnish may conceal or reveal the same underlying image.

---

# 9. BRASS PLAQUE HERO PROP

Asset ID: `EVELYN_BRASS_PLAQUE_R1`
Text ownership:
EVELYN BLACKTHORN
1948–1975

Prompt: Tarnished rectangular engraved brass portrait plaque from a private estate collection, authentic age and oxidation, centered engraved serif capitals reading exactly "EVELYN BLACKTHORN" and second line "1948–1975", photographed as a practical prop under warm restoration-studio light, clean legibility, no extra text.

---

# GENERATION ORDER

1. Generate Mara Character Master pack; approve one identity family.
2. Generate Adrian Character Master pack.
3. Generate Rowan Character Master pack.
4. Derive Evelyn from approved Mara master; approve resemblance level.
5. Generate EP01 Look Masters from approved character masters.
6. Generate Restoration Studio Master views.
7. Generate EP01 Night Scene Anchor from approved location + Mara look.
8. Generate clean Evelyn Portrait from Evelyn master, then derive smoke-damage/reveal states from the same approved portrait.
9. Generate plaque as independent hero insert.
10. Only after those approvals, create EP01 start/end frames and moving shots.

# MASTER APPROVAL CHECKLIST

A master is not APPROVED merely because it is attractive. Approve only when:
- face identity works from front, 3/4 and profile;
- age impression is stable;
- full-body anatomy and proportions are reusable;
- no accidental resemblance to an identifiable real person is intended;
- expressions remain recognizably the same person;
- look masters preserve identity rather than redesign it;
- Evelyn resembles Mara enough for the mystery but is clearly not a copy;
- location reverse view still describes the same room;
- EP01 anchor preserves usable vertical negative space and doorway geography;
- portrait damage states preserve exactly the same underlying painted identity.
