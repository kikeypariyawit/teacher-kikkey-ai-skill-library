// usage: node render.js probe t1 t2 ...   |   node render.js range a b   |   node render.js all
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), http = require('http');
const ROOT = __dirname, FPS = 30;
const html = fs.readFileSync(path.join(ROOT, 'film.html'), 'utf8')
  .replaceAll('__BASE__', '/node_modules/three').replaceAll('__FONTS__', '/node_modules/@fontsource');
fs.writeFileSync(path.join(ROOT, '_render.html'), html);
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.woff2': 'font/woff2' };
const srv = http.createServer((q, r) => { const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' }); r.end(d); }); }).listen(+process.env.PORT || 8766);
(async () => {
  const [mode, ...args] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const pg = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  pg.on('console', m => { if (m.type() !== 'log') console.log('[console]', m.type(), m.text()); });
  pg.on('pageerror', e => console.log('[pageerror]', e.message));
  await pg.goto('http://localhost:' + (process.env.PORT || 8766) + '/_render.html');
  await pg.waitForFunction('window.__ready === true', null, { timeout: 300000 });
  const shot = async (t, file) => { await pg.evaluate(t => window.seek(t), t); await pg.screenshot({ path: file, type: 'jpeg', quality: 93 }); };
  if (mode === 'probe') { fs.mkdirSync(path.join(ROOT, process.env.PROBE || 'probe'), { recursive: true });
    for (const t of args) { await shot(+t, path.join(ROOT, process.env.PROBE || 'probe', `p_${(+t).toFixed(2)}.jpg`)); console.log('probe', t); } }
  else { const D = await pg.evaluate(() => window.DURATION); const a = mode === 'range' ? +args[0] : 0, z = mode === 'range' ? +args[1] : D;
    fs.mkdirSync(path.join(ROOT, 'frames'), { recursive: true }); const t0 = Date.now();
    for (let f = Math.round(a * FPS); f < Math.round(z * FPS); f++) { await shot(f / FPS, path.join(ROOT, 'frames', `f_${String(f).padStart(4, '0')}.jpg`));
      if (f % 30 === 0) console.log('frame', f, ((Date.now() - t0) / 1000).toFixed(0) + 's'); } }
  await b.close(); srv.close();
})();
