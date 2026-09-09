# Smoke tests

1. "คิด content BEV ใหม่ 1 โพส อย่าซ้ำเรื่องลดหน้าจอ"
Expected lead: `bev-content-strategist`.

2. "เขียน caption สำหรับโปสเตอร์ BEV event นี้"
Expected lead: `bev-parent-copywriter` or `caption-conversion-writer`, with BEV facts preserved.

3. "ทำ EP1 ให้ dialogue อังกฤษและเลือก start/end frame ที่จำเป็น"
Expected lead: `ai-drama-story-engine` for story architecture, with support from `dialogue-subtext-writer` + `veo-shot-planner`. Do not invoke the full producer unless the user also asks to complete the whole episode package.

4. "ทำ EP ถัดไปต่อจากตัวละครที่ approve แล้ว ขอ script storyboard master shot start/end frame prompt และ video prompt ให้ครบ รอ final approve เลย"
Expected lead: `ai-drama-episode-producer`.
Expected behavior:
- preserve approved character identity/canon;
- run the complete required specialist chain without intermediate approval;
- return generation-ready prompts and continuity delta;
- finish with pre-generation `episode-qa` verdict.

5. "ตอนนี้ยังไม่มีวีดีโอ อยากให้คิดภาพและ prompt ให้เสร็จก่อน ไม่ต้องเช็ค video upload"
Expected lead: `ai-drama-episode-producer` or `veo-shot-planner` depending on scope.
Expected behavior: do not request a generated-video upload; complete planning/pre-generation QA from the available script, frames, prompts, and canon.

6. "แก้แค่ dialogue scene 4 ให้ chemistry แรงขึ้น แต่หน้าตัวละครกับชุด approve แล้ว"
Expected lead: `dialogue-subtext-writer`.
Expected behavior: preserve approved identity/wardrobe and revise only affected downstream timing/shot prompts if necessary.

7. "ตรวจภาพนี้ก่อนลง Facebook ว่ามีคำผิดหรือหน้าเด็กเปลี่ยนไหม"
Expected lead: `visual-qa`; add `bev-campaign-qa` if campaign facts are involved.

8. "ทำ printable pack ขายเด็ก 5-7 ปี"
Expected lead: `educational-product-builder`; optional `digital-product-launcher`.

Failure conditions:
- Multiple skills own the same primary decision without a handoff.
- A QA skill becomes the primary creator.
- A full-episode final-approve request is stage-gated after script/storyboard instead of completed end-to-end.
- Pre-generation planning is blocked because no generated video was uploaded.
- Approved character identity/canon is silently redesigned.
- Start/end frames are added to every shot without justification.
- Volatile model versions or project facts are hard-coded into universal skills.
- Research-dependent claims are presented as facts without verification.

## Cinematic drama regressions

1. New 105-second Thai drama: request a prestige auction betrayal episode with script, storyboard text and prompts only. Verify Thai dialogue, causal reveal, runtime math, specific location/light/sound, separate prompts, and no generated-media claims.
2. Continue an episode whose approved references are named but unavailable. Verify preserved textual canon, clearly unverified visual match and completion of unaffected planning; no invented face approval.
3. User asks for start/end frames with an unverified model nickname. Verify capability uncertainty, separate endpoint design and a start-only fallback; no invented limits or credits.
4. Replace one line from 4 to 12 seconds. Verify timing and affected downstream shot changes without recasting or unrelated renumbering.
5. Request an illustrated PDF and individually saveable images. Verify actual embedded images, separate source assets and prompt/shot manifest; a text-only document must not receive storyboard-images-ready status.
