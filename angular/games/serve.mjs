#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const [name, portArg] = process.argv.slice(2);
const sites = fs.readdirSync(here).filter((d) => fs.existsSync(path.join(here, d, 'mirror.json')));

if (!name || !sites.includes(name)) {
  console.log(`Usage: node serve.mjs <docs> [port]\nAvailable docs: ${sites.join(', ')}`);
  process.exit(1);
}

const root = path.join(here, name);
const { fallback } = JSON.parse(fs.readFileSync(path.join(root, 'mirror.json'), 'utf8'));
const port = +(portArg || 4200 + sites.indexOf(name) + 1);

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf', '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.xml': 'application/xml', '.mp4': 'video/mp4', '.webm': 'video/webm',
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = path.join(root, path.normalize(urlPath).replace(/^([/\\])+/, ''));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) {
    if (path.extname(urlPath) && !urlPath.endsWith('.html')) { res.writeHead(404).end(); return; }
    file = path.join(root, fallback);
  }
  const type = TYPES[path.extname(file).toLowerCase()] || (/fonts\.googleapis\.com/.test(file) ? 'text/css; charset=utf-8' : 'application/octet-stream');
  res.writeHead(200, { 'Content-Type': type });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`${name} docs: http://localhost:${port}`));
