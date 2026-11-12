# ชุด Prompt สำหรับ ChatGPT Images — BEV 3D Benefits Reel

ใช้เจนภาพ 5 ใบ (+ปก 1 ใบ) แล้วเอากลับมาใส่ในคลิป 3D เป็น "ภาพโพลารอยด์" ที่เด้งขึ้นมาในแต่ละช่วง

## วิธีทำ (3 ขั้น)

1. เปิด ChatGPT → วาง **Style block** ด้านล่างก่อน 1 ครั้ง แล้ววาง prompt ทีละภาพในแชตเดียวกัน (สไตล์จะต่อเนื่องกัน)
2. ดาวน์โหลดภาพ แล้ว **ตั้งชื่อไฟล์ตามตาราง** (png / jpg / webp ได้หมด)
3. กลับมาที่ Claude: แนบภาพทั้ง 5 ใบในแชต แล้วพิมพ์ว่า
   **"ใส่ภาพ ChatGPT ลงคลิป BEV 3D แล้วเรนเดอร์ใหม่"**
   (หรือวางไฟล์เองที่ `examples/bev-3d-promo/assets/gpt/` แล้วรัน `node render.js range 0 24 <โฟลเดอร์เฟรม>`)

| ไฟล์ | ช่วงในคลิป | คำใหญ่ |
|---|---|---|
| `01_zipline.png` | 4.2–7.2 วิ | BRAVE |
| `02_boat.png` | 7.2–10.2 วิ | TEAMWORK |
| `03_trampoline.png` | 10.2–13.2 วิ | ACTIVE |
| `04_balance.png` | 13.2–16.2 วิ | FOCUS |
| `05_dinosaur.png` | 16.2–19.4 วิ | SPEAK UP |
| `00_cover.png` | ปกคลิป (ไม่อยู่ในวิดีโอ) | — |

ภาพที่ไม่มีไฟล์ = คลิปข้ามช่องนั้นไปเอง ไม่พัง

## Style block (วางก่อน 1 ครั้ง)

```
I will ask for a set of 6 illustrations in ONE consistent style. Keep this style for every image:

STYLE: cute stylized 3D cartoon render, soft clay/vinyl-toy look, rounded simple shapes, chibi proportions (big head, small body), dot eyes, small smile, rosy cheeks. Bright friendly palette: fresh grass green, sky blue, sunny yellow #FFC93C, coral red, warm wood. Soft daylight, gentle shadows, shallow depth of field, clean uncluttered background of round green trees and blue sky.
CHARACTERS: stylized Thai children aged about 5–8, black hair, casual T-shirts and shorts in solid bright colours. They are cartoon characters, not real or photorealistic children.
FORMAT: vertical 4:5 portrait, subject centred, leave a little empty space around the subject.
RULES: no text, no letters, no numbers, no logos, no watermark, no speech bubbles. No adults in focus. Safety gear always visible where relevant (helmet and harness on zipline, life jacket in boat).
Reply "ready" and wait for my scene prompts.
```

## Prompt ทีละภาพ

**01_zipline — BRAVE**
```
Scene 1: A child wearing a yellow helmet and safety harness glides down a zipline between two wooden towers, legs kicked forward, huge joyful open-mouth smile, arms holding the handle. Camera slightly below looking up, blue sky behind, tree tops under their feet. Feeling: brave and thrilled.
```

**02_boat — TEAMWORK**
```
Scene 2: Two children in orange life jackets paddle a small yellow boat together on a calm blue pond, paddles in sync, looking at each other and laughing. A red arched wooden bridge crosses the pond behind them. Feeling: teamwork.
```

**03_trampoline — ACTIVE**
```
Scene 3: A girl with two small hair buns jumps high in mid-air above a round blue-and-yellow trampoline, arms and legs spread like a star, hair bouncing. A friend claps beside the trampoline. Feeling: energetic, full of movement.
```

**04_balance — FOCUS**
```
Scene 4: A child walks carefully along a low wooden balance beam with arms stretched out to the sides, tongue slightly out in concentration, eyes on the beam. Colourful triangle flags and wooden stepping stumps in the background. Feeling: calm focus and determination.
```

**05_dinosaur — SPEAK UP**
```
Scene 5: Two children look up in amazement and point at a huge friendly green long-neck dinosaur statue in a park; the dinosaur has big kind eyes and a gentle smile and leans its head down toward them. One child has a mouth open as if calling out. A small orange baby dinosaur statue and big eggs nearby. Feeling: wonder and confidence to speak.
```

**00_cover — ปกคลิป (9:16)**
```
Cover image, vertical 9:16: aerial three-quarter view of a small round green island surrounded by bright blue sea, same toy-like 3D style. On the island: a zipline between two wooden towers, a blue pond with a yellow boat and a red arched bridge, a round trampoline, a low balance beam, a big friendly green dinosaur, a small café with a red-and-white striped awning. Tiny happy children at each activity. Keep the top third as clear sky and the bottom quarter as calm sea so text can be added later. No text.
```

## ถ้าภาพออกมาไม่ตรง — พิมพ์แก้ต่อในแชตเดิม

- หน้าดูสมจริงเกิน: `Make the children more stylized and toy-like, simpler faces, same scene.`
- มีตัวหนังสือ/โลโก้โผล่: `Remove all text and logos, keep everything else identical.`
- สไตล์เพี้ยนจากใบแรก: `Match the exact style, colours and character design of Scene 1.`
- ไม่มีอุปกรณ์เซฟตี้: `Add a helmet and harness (or life jacket), keep everything else.`

## ข้อควรระวังของแบรนด์

- ภาพชุดนี้เป็น **ภาพประกอบการ์ตูน** ไม่ใช่ภาพกิจกรรมจริงของ BEV — ใส่บรรทัดนี้ในแคปชั่น: "ภาพประกอบสร้างด้วย AI ไม่ใช่ภาพกิจกรรมจริง"
- ไม่ใช้ ChatGPT สร้างโลโก้ BEV — ใช้ไฟล์โลโก้จริงวางทับตอนตัดต่อ
- ไม่ใส่ภาพเด็กจริงเข้าไปให้ AI แปลงหน้า/ร่างกาย
