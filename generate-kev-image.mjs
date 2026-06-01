import { higgsfield, config } from '@higgsfield/client/v2';
import { writeFileSync } from 'fs';
import { createWriteStream } from 'fs';
import https from 'https';
import http from 'http';

// Reads HF_CREDENTIALS from environment: export HF_CREDENTIALS="KEY_ID:KEY_SECRET"
if (!process.env.HF_CREDENTIALS) {
  console.error('Error: HF_CREDENTIALS environment variable not set.');
  console.error('Usage: HF_CREDENTIALS="KEY_ID:KEY_SECRET" node generate-kev-image.mjs');
  process.exit(1);
}

config({ credentials: process.env.HF_CREDENTIALS });

const prompt = `
Professional digital agency hero image for "Kev Digital", a Miami-based web design company.
Dark navy blue background, glowing teal cyan neon accents (#00C2CB color), Miami city skyline
silhouette at night with reflections on water, sleek modern laptop displaying a beautiful
professional website, floating UI elements and code snippets, dynamic light rays,
cinematic lighting, ultra-detailed, 8k, photorealistic, tech-forward aesthetic.
Text overlay reads "Kev Digital" in bold modern sans-serif font with teal glow effect.
`.trim().replace(/\n/g, ' ');

console.log('Generating Kev Digital AI image via Higgsfield...');
console.log('Prompt:', prompt.slice(0, 80) + '...');

const jobSet = await higgsfield.subscribe('flux-pro/kontext/max/text-to-image', {
  input: {
    aspect_ratio: '16:9',
    prompt,
    safety_tolerance: 2,
    seed: 786800,
  },
  withPolling: true,
});

if (!jobSet.isCompleted) {
  console.error('Generation failed. Status:', JSON.stringify(jobSet, null, 2));
  process.exit(1);
}

const imageUrl = jobSet.jobs[0].results?.raw?.url;
if (!imageUrl) {
  console.error('No image URL in result:', JSON.stringify(jobSet.jobs[0], null, 2));
  process.exit(1);
}

console.log('Image generated:', imageUrl);

// Download and save to public/
const outputPath = 'public/kev-digital-ai.jpg';
const file = createWriteStream(outputPath);
const client = imageUrl.startsWith('https') ? https : http;

await new Promise((resolve, reject) => {
  client.get(imageUrl, (res) => {
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(); });
  }).on('error', reject);
});

console.log(`Saved to ${outputPath}`);

// Save metadata for reference
writeFileSync('public/kev-digital-ai-meta.json', JSON.stringify({
  url: imageUrl,
  generatedAt: new Date().toISOString(),
  model: 'flux-pro/kontext/max/text-to-image',
  aspectRatio: '16:9',
}, null, 2));

console.log('Done! Image is at public/kev-digital-ai.jpg');
