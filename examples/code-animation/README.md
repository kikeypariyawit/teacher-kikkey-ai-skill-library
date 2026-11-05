# Code animation samples

ตัวอย่างจากสกิล `code-animation-prompts` (ไฟล์ HTML แก้ไขได้ เรนเดอร์เป็น MP4 ได้)

| ไฟล์ | สไตล์ | งาน | สเปก |
|---|---|---|---|
| `bev-red-leaf-L17.html` | L17 蜡笔儿童绘本 สมุดภาพสีเทียน | บางใหญ่ อิงลิช วิลเลจ — คำศัพท์ "red leaf" | 1080×1920, 30 fps, 12 วิ, ไม่มีเสียง |
| `ghost-shadow-tree-M12.html` | M12 剪纸皮影 หนังเงา (ปรับโทนเป็นผีไทย) | ทีเซอร์เรื่องผี "เงาใต้ต้นไม้" | 1080×1920, 30 fps, 12 วิ, ไม่มีเสียง |

## แก้ข้อความ
แก้ที่ `CONFIG` ด้านบนของแต่ละไฟล์ (ข้อความ, คำศัพท์, คำบรรยาย, สี)

## ดูตัวอย่าง / เรนเดอร์
- เปิดไฟล์ HTML ผ่านเว็บเซิร์ฟเวอร์ในเครื่อง เช่น `python -m http.server` แล้วเข้า `http://localhost:8000/bev-red-leaf-L17.html` (ฟอนต์อยู่ในโฟลเดอร์ `fonts/`)
- เรนเดอร์ MP4:
  ```bash
  python .claude/skills/code-animation-prompts/scripts/render_video.py examples/code-animation/bev-red-leaf-L17.html \
    --output out/bev-red-leaf-L17.mp4 --duration 12 --fps 30 --width 1080 --height 1920
  ```
  ต้องมี Playwright (Python) + Chromium และ ffmpeg — เพิ่มเสียงด้วย `--audio voice.wav` (เช่นเสียงจาก ElevenLabs)

## ฟอนต์
Mali และ Sriracha (Google Fonts, SIL Open Font License — ดู `fonts/OFL-*.txt`)

## ข้อควรรู้
- คลิปผีเป็นเรื่องที่แต่งขึ้นเอง ไม่ได้อ้างตำนานจริง
- คลิปบางใหญ่เป็นภาพวาดเด็กแบบการ์ตูน ไม่ใช่ภาพเด็กจริง
