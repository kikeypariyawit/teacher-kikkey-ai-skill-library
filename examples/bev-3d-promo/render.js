// Render film.html (window.seek(t)) to stills / frames with Playwright.
//   node render.js probe 1 3.5 8 ...        -> out/probe/t_*.jpg + out/probe/sheet.jpg
//   node render.js range <a> <b> <framesDir> -> frames %05d.jpg for seconds [a,b)
//   node render.js encode <framesDir> <out.mp4>
// Add --noimg to ignore assets/gpt images.
const http = require('http'), fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const ROOT = __dirname, FPS = 30;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json' };
function serve() {
  return new Promise(res => {
    const s = http.createServer((q, r) => {
      const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
      if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end(); }
      r.writeHead(200, { 'content-type': MIME[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(r);
    }).listen(0, '127.0.0.1', () => res(s));
  });
}
async function open(noimg) {
  const srv = await serve();
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('PAGE ERROR', e.message));
  page.on('console', m => { if (m.type() === 'error' && !/404/.test(m.text())) console.error('console:', m.text()); });
  await page.goto(`http://127.0.0.1:${srv.address().port}/film.html${noimg ? '?noimg' : ''}`);
  await page.waitForFunction('window.ready===true', null, { timeout: 120000 });
  const shot = async (t, file) => { await page.evaluate(t => window.seek(t), t); await page.screenshot({ path: file, type: 'jpeg', quality: 95 }); };
  return { shot, close: async () => { await browser.close(); srv.close(); } };
}
(async () => {
  const args = process.argv.slice(2).filter(a => a !== '--noimg'), noimg = process.argv.includes('--noimg'), mode = args[0];
  if (mode === 'probe') {
    const dir = path.join(ROOT, 'out/probe'); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    const r = await open(noimg); const ts = args.slice(1).map(Number);
    for (const t of ts) await r.shot(t, path.join(dir, `t_${t.toFixed(2).padStart(5, '0')}.jpg`));
    await r.close();
    const cols = Math.min(6, ts.length), rows = Math.ceil(ts.length / cols);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-pattern_type', 'glob', '-i', path.join(dir, 't_*.jpg'), '-vf', `scale=360:640,tile=${cols}x${rows}`, '-frames:v', '1', '-update', '1', path.join(dir, 'sheet.jpg')]);
    console.log('sheet', path.join(dir, 'sheet.jpg'));
  } else if (mode === 'range') {
    const a = Number(args[1]), b = Number(args[2]), dir = args[3]; fs.mkdirSync(dir, { recursive: true });
    const r = await open(noimg); const f0 = Math.round(a * FPS), f1 = Math.round(b * FPS), t0 = Date.now();
    for (let f = f0; f < f1; f++) { await r.shot(f / FPS, path.join(dir, String(f).padStart(5, '0') + '.jpg')); if ((f - f0) % 30 === 29) console.log(`f${f} ${((Date.now() - t0) / (f - f0 + 1) / 1000).toFixed(2)}s/frame`); }
    await r.close();
  } else if (mode === 'encode') {
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(args[1], '%05d.jpg'), '-c:v', 'libx264', '-preset', 'veryfast', '-threads', '2', '-crf', '17',
      '-vf', 'scale=in_range=pc:out_range=tv:out_color_matrix=bt709,format=yuv420p', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv', '-movflags', '+faststart', args[2]], { stdio: 'inherit' });
    console.log('wrote', args[2]);
  } else console.log('usage: probe|range|encode');
})();
