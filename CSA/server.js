const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

function safePath(urlPath) {
  const normalized = path.normalize(urlPath).replace(/^([.][.][/\\])+/, '');
  return path.join(ROOT, normalized);
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    return send(res, 400, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Bad Request');
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname === '/health') {
    return send(res, 200, { 'Content-Type': 'application/json; charset=utf-8' }, JSON.stringify({ status: 'ok' }));
  }

  if (pathname === '/') pathname = '/index.html';
  if (pathname === '/csa.index.html') pathname = '/index.html';

  const fullPath = safePath(pathname);

  if (!fullPath.startsWith(ROOT)) {
    return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');
  }

  fs.stat(fullPath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      const fallback = path.join(ROOT, 'index.html');
      return fs.readFile(fallback, (fallbackErr, content) => {
        if (fallbackErr) {
          return send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Not Found');
        }
        return send(res, 200, { 'Content-Type': 'text/html; charset=utf-8' }, content);
      });
    }

    fs.readFile(fullPath, (readErr, content) => {
      if (readErr) {
        return send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Internal Server Error');
      }
      const ext = path.extname(fullPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      return send(res, 200, { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=300' }, content);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`CSA static server listening on http://${HOST}:${PORT}`);
});
