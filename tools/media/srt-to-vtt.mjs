// Converts SRT subtitles to WebVTT, the format browsers play in <video> elements.
// Usage: node tools/media/srt-to-vtt.mjs <file.srt> [more.srt ...]   (writes file.vtt next to it)
import fs from 'node:fs';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node tools/media/srt-to-vtt.mjs <file.srt> [more.srt ...]');
  process.exit(1);
}

for (const file of files) {
  const srt = fs
    .readFileSync(file, 'utf8')
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n');
  // The only syntax difference that matters: VTT timestamps use "." before milliseconds.
  const cues = srt.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');
  const output = file.replace(/\.srt$/i, '.vtt');
  fs.writeFileSync(output, `WEBVTT\n\n${cues.trim()}\n`);
  console.log(`${file} -> ${output}`);
}
