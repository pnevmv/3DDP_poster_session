import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

const URL = 'http://localhost:5175/3DDP_poster_session/';
const OUT = 'poster-a0.pdf';

// A0 landscape: 1189 × 841 mm
// At 96 CSS dpi: 4492 × 3179 px
// Design viewport: 1600px wide → zoom factor = 4492 / 1600 = 2.8075
const DESIGN_W = 1600;
const DESIGN_H = Math.round(DESIGN_W * (841 / 1189)); // 1132
const ZOOM = 4492 / DESIGN_W; // ≈ 2.8075

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: DESIGN_W, height: DESIGN_H, deviceScaleFactor: 1 });

await page.goto(URL, { waitUntil: 'networkidle0' });

// Scale the design up to A0 and strip outer padding
await page.addStyleTag({
  content: `
    html { zoom: ${ZOOM}; }
    body > div, #root > div {
      padding: 0 !important;
      min-height: unset !important;
    }
  `
});

await new Promise(r => setTimeout(r, 500));

const pdf = await page.pdf({
  width:  '1189mm',
  height: '841mm',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

writeFileSync(OUT, pdf);
console.log(`Saved ${OUT}`);
await browser.close();
