# AI drama workflow example

## Full-episode request

Request:
> Continue the next episode from approved canon. Finish the script, storyboard, master shots, start/end-frame prompts, video prompts, continuity update, and QA. Do not stop for intermediate approval; wait only for final approval.

Lead:
`ai-drama-episode-producer`

Route:
1. `ai-drama-story-engine`
2. `character-architect` only if a new/changed character specification is required
3. `dialogue-subtext-writer`
4. `cinematic-director`
5. `veo-shot-planner`
6. `continuity-supervisor`
7. `episode-qa`

Expected output:
- canon carried from prior episode
- hook + retention map + cliffhanger
- final script
- storyboard
- master shot list with stable IDs
- generation routing
- start-frame prompts where justified
- end-frame prompts where justified
- ready-to-paste video prompts
- dialogue/audio/SFX notes
- continuity anchors and fallbacks
- next-episode continuity delta
- repaired pre-generation QA verdict

Important:
- preserve approved character identity and prior canon;
- start/end frames are not mandatory;
- use them only when they materially improve identity, composition, object state, transition destination, or next-shot continuity;
- if a still/keyframe model and a motion model are both available, route exact frame creation to the still model and moving shots to the motion model unless the project says otherwise;
- do not require a generated-video upload for planning or pre-generation QA.

## Focused scene request

Request:
> Improve Scene 4 dialogue and chemistry, but keep the approved faces, wardrobe, location, and story beat.

Route:
1. `dialogue-subtext-writer`
2. `veo-shot-planner` only if revised timing/performance changes affected prompts
3. `continuity-supervisor` / `episode-qa` only if needed

Do not rerun the full producer chain when a narrow revision is enough.
