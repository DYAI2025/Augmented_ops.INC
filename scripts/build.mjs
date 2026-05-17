import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');
const sourceIndex = path.join(rootDir, 'index.html');
const distDir = path.join(rootDir, 'dist');
const distIndex = path.join(distDir, 'index.html');

if (!fs.existsSync(sourceIndex)) {
  throw new Error(`Missing source index.html at ${sourceIndex}`);
}

fs.rmSync(distDir, {force: true, recursive: true});
fs.mkdirSync(distDir, {recursive: true});
fs.copyFileSync(sourceIndex, distIndex);

console.log(`Built static site: ${path.relative(rootDir, distIndex)}`);
