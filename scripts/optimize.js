import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

async function processImages() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (file.endsWith('.jpg') && !file.includes('-thumb')) {
      const originalPath = path.join(publicDir, file);
      const thumbPath = path.join(publicDir, file.replace('.jpg', '-thumb.jpg'));
      
      // If the thumb doesn't exist yet, we generate it
      if (!fs.existsSync(thumbPath)) {
        console.log(`Generating optimized thumbnail for ${file}...`);
        await sharp(originalPath)
          .resize({ width: 600, withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(thumbPath);
        console.log(`✅ thumbnail created: ${path.basename(thumbPath)}`);
      }
    }
  }
}

processImages().then(() => {
  console.log('Image processing complete.');
}).catch(console.error);
