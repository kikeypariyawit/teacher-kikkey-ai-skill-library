# Brave Helpers Island — EP01 “Shout · Throw · Reach” (3D pilot source)

Code-rendered 3D clip (three.js r186, classic WebGLRenderer) for the BEV social-value series.
Series bible: `docs/BEV_3D_BRAVE_HELPERS_SERIES.md` · Skill: `skills/bev-3d-social-impact/`.

Everything on screen is a pure function of `t` via `window.seek(t)`, so renders are deterministic.

## Render

```bash
npm i three@0.186.0 @fontsource/kanit @fontsource/fredoka   # Playwright + Chromium must already be available
node render.js probe 0.6 4.3 11.3 16.5 19.4 21.8              # stills → probe/
./sheet.sh "$PWD/probe"                                       # contact sheet (5 per row)
node render.js all                                            # 720 frames → frames/ (~4 s/frame on SwiftShader)
ffmpeg -framerate 30 -i frames/f_%04d.jpg -c:v libx264 -preset veryfast -threads 2 -crf 17 \
  -pix_fmt yuv420p -colorspace bt709 -color_primaries bt709 -color_trc bt709 -movflags +faststart ep01_silent.mp4
```

`film.html` uses `__BASE__` (three) and `__FONTS__` (@fontsource) placeholders that `render.js` replaces with local paths.
Open `_render.html?play` through the same local server to preview in real time, or `?t=12.5` for one frame.

Generated frames and videos are build outputs — keep them out of git.
