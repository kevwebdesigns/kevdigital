import { createWriteStream } from 'fs';
import https from 'https';

const prompt = [
  'professional digital agency hero image for Kev Digital a Miami web design company,',
  'dark navy blue background, glowing teal cyan neon accents, Miami city skyline at night,',
  'sleek laptop displaying a beautiful modern website, floating UI elements,',
  'cinematic lighting, ultra-detailed photorealistic 8k, tech-forward aesthetic',
].join(' ');

const width = 1280;
const height = 720;
const model = 'flux';
const seed = 786800;

const encodedPrompt = encodeURIComponent(prompt);
const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=${model}&seed=${seed}&nologo=true`;

const outputPath = 'public/kev-digital-ai.jpg';

console.log('Generating Kev Digital AI image (free, no API key)...');
console.log('URL:', url.slice(0, 100) + '...\n');

function download(urlStr, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    const get = (u) => {
      https.get(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }).on('error', reject);
    };
    get(urlStr);
  });
}

await download(url, outputPath);
console.log(`Saved to ${outputPath}`);
