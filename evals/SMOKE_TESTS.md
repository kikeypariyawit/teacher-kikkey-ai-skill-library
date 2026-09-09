# Smoke tests

1. "คิด content BEV ใหม่ 1 โพส อย่าซ้ำเรื่องลดหน้าจอ"
Expected lead: `bev-content-strategist`.

2. "เขียน caption สำหรับโปสเตอร์ BEV event นี้"
Expected lead: `bev-parent-copywriter` or `caption-conversion-writer`, with BEV facts preserved.

3. "ทำ EP1 ให้ dialogue อังกฤษและเลือก start/end frame ที่จำเป็น"
Expected lead: `ai-drama-story-engine`, support `dialogue-subtext-writer` + `veo-shot-planner`.

4. "ตรวจภาพนี้ก่อนลง Facebook ว่ามีคำผิดหรือหน้าเด็กเปลี่ยนไหม"
Expected lead: `visual-qa`; add `bev-campaign-qa` if campaign facts are involved.

5. "ทำ printable pack ขายเด็ก 5-7 ปี"
Expected lead: `educational-product-builder`; optional `digital-product-launcher`.

Failure conditions:
- Multiple skills own the same primary decision without a handoff.
- A QA skill becomes the primary creator.
- Volatile project facts are hard-coded into universal skills.
- Research-dependent claims are presented as facts without verification.
