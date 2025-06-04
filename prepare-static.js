import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

console.log('Preparing static build for direct browser opening...');

// Read the index.html file
const indexPath = path.join(distPath, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Ensure all paths are relative
indexContent = indexContent.replace(/src="\//g, 'src="./');
indexContent = indexContent.replace(/href="\//g, 'href="./');
indexContent = indexContent.replace(/url\(\//g, 'url(./');

// Write the modified content back
fs.writeFileSync(indexPath, indexContent);

console.log('Static build preparation complete!');
console.log('You can now zip the "dist" folder and share it for direct browser opening.');
