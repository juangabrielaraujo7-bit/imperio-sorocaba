/**
 * Gera favicon.ico, apple-touch-icon.png, ícones do manifest e logo PNG
 * a partir de public/favicon.svg e public/brand/logo.svg.
 * Uso: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const fav = await readFile('public/favicon.svg');
const logo = await readFile('public/brand/logo.svg');

async function onWhite(svg, size, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(svg, { density: 600 }).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
    .composite([{ input: mark, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function transparent(svg, size, pad = 0) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(svg, { density: 600 }).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: mark, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// favicon.ico (PNG embutido em contêiner ICO, 32x32)
const png32 = await transparent(fav, 32, 0.02);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, png32]));

await writeFile('public/apple-touch-icon.png', await onWhite(fav, 180, 0.14));
await writeFile('public/icon-192.png', await onWhite(fav, 192, 0.14));
await writeFile('public/icon-512.png', await onWhite(fav, 512, 0.14));
await writeFile('public/brand/logo-512.png', await transparent(logo, 512, 0.04));

console.log('Ícones gerados.');
