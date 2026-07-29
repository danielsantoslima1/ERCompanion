const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const root = path.resolve(__dirname, '..');
const brandingDirectory = path.join(root, 'assets', 'branding');

function readPng(fileName, expectedWidth, expectedHeight) {
  const filePath = path.join(brandingDirectory, fileName);
  const buffer = fs.readFileSync(filePath);
  const signature = buffer.subarray(0, 8).toString('hex');
  if (signature !== '89504e470d0a1a0a') {
    throw new Error(`${fileName}: invalid PNG signature.`);
  }
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  const colorType = buffer[25];
  if (width !== expectedWidth || height !== expectedHeight) {
    throw new Error(
      `${fileName}: expected ${expectedWidth}x${expectedHeight}, received ${width}x${height}.`,
    );
  }
  if (colorType !== 6) {
    throw new Error(`${fileName}: expected RGBA color type 6, received ${colorType}.`);
  }

  const chunks = [];
  let offset = 8;
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.subarray(offset + 4, offset + 8).toString('ascii');
    if (type === 'IDAT') chunks.push(buffer.subarray(offset + 8, offset + 8 + length));
    offset += length + 12;
  }
  const raw = zlib.inflateSync(Buffer.concat(chunks));
  const stride = width * 4;
  const rows = [];
  let previous = Buffer.alloc(stride);
  let rawOffset = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = raw[rawOffset];
    rawOffset += 1;
    const source = raw.subarray(rawOffset, rawOffset + stride);
    rawOffset += stride;
    const row = Buffer.alloc(stride);
    for (let x = 0; x < stride; x += 1) {
      const left = x >= 4 ? row[x - 4] : 0;
      const up = previous[x];
      const upLeft = x >= 4 ? previous[x - 4] : 0;
      if (filter === 0) row[x] = source[x];
      else if (filter === 1) row[x] = (source[x] + left) & 255;
      else if (filter === 2) row[x] = (source[x] + up) & 255;
      else if (filter === 3) row[x] = (source[x] + Math.floor((left + up) / 2)) & 255;
      else if (filter === 4) {
        const prediction = left + up - upLeft;
        const pa = Math.abs(prediction - left);
        const pb = Math.abs(prediction - up);
        const pc = Math.abs(prediction - upLeft);
        const predictor = pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft;
        row[x] = (source[x] + predictor) & 255;
      } else {
        throw new Error(`${fileName}: unsupported PNG filter ${filter}.`);
      }
    }
    rows.push(row);
    previous = row;
  }

  const cornerAlpha = rows[0][3];
  const hasOpaquePixel = rows.some((row) => {
    for (let index = 3; index < row.length; index += 4) {
      if (row[index] > 0) return true;
    }
    return false;
  });
  if (cornerAlpha !== 0 || !hasOpaquePixel) {
    throw new Error(`${fileName}: transparency validation failed.`);
  }
  return { fileName, width, height, bytes: buffer.length };
}

const emblemSvg = fs.readFileSync(
  path.join(brandingDirectory, 'elden-ring-companion-emblem.svg'),
  'utf8',
);
const forbidden = /elden ring logo|official symbol|fromsoftware|bandai namco/i;
if (forbidden.test(emblemSvg)) {
  throw new Error('The emblem source contains a prohibited proprietary reference.');
}

const result = {
  valid: true,
  assets: [
    readPng('elden-ring-companion-emblem.png', 512, 640),
    readPng('elden-ring-companion-splash.png', 900, 1200),
  ],
};
console.log(JSON.stringify(result, null, 2));
