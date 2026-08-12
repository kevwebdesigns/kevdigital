import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const deck = 'file://' + path.join(dir, 'deck.html');
const outPdf = path.join(dir, 'Kevin-Hernandez-10-Year-Dream-Keynote.pdf');
const shots = path.join(dir, 'preview');

const browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--font-render-hinting=none'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
await page.goto(deck, { waitUntil: 'networkidle' });
await page.waitForFunction(() => document.fonts.status === 'loaded');

await page.pdf({
  path: outPdf,
  width: '13.333in',
  height: '7.5in',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  pageRanges: '1-5',
});

fs.mkdirSync(shots, { recursive: true });
const slides = await page.$$('.slide');
for (let i = 0; i < slides.length; i++) {
  await slides[i].screenshot({ path: path.join(shots, `slide-${String(i + 1).padStart(2, '0')}.png`) });
}

await browser.close();
console.log(`PDF: ${outPdf}`);
console.log(`Slides rendered: ${slides.length}`);
