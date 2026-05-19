import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DEFAULT_HOST = '0.0.0.0';
export const DEFAULT_PORT = 3000;

const MIME_TYPES = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
]);

export function getPort(value = process.env.PORT) {
  if (!value) return DEFAULT_PORT;

  const port = Number.parseInt(value, 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value "${value}". Expected a TCP port between 1 and 65535.`);
  }

  return port;
}

export function assertDistReady(distDir = path.join(__dirname, 'dist')) {
  const indexFile = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexFile)) {
    throw new Error(
      `Production build missing: ${indexFile}. Run \`npm run build\` before \`npm start\`.`,
    );
  }

  return {distDir, indexFile};
}

function send(response, statusCode, body, headers = {}) {
  response.writeHead(statusCode, headers);
  response.end(body);
}

function sendFile(response, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES.get(extension) || 'application/octet-stream';

  response.writeHead(200, {
    'Cache-Control': extension === '.html' ? 'no-cache' : 'public, max-age=3600',
    'Content-Type': contentType,
  });
  fs.createReadStream(filePath).pipe(response);
}

function resolveStaticFile(distDir, requestUrl) {
  const parsedUrl = new URL(requestUrl, 'http://localhost');
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const relativePath = decodedPath === '/' ? 'index.html' : decodedPath.replace(/^\/+/, '');
  const candidate = path.resolve(distDir, relativePath);
  const distRoot = path.resolve(distDir);

  if (candidate !== distRoot && !candidate.startsWith(`${distRoot}${path.sep}`)) {
    return null;
  }

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  return null;
}

export function createServer({distDir = path.join(__dirname, 'dist')} = {}) {
  const {indexFile} = assertDistReady(distDir);

  return http.createServer((request, response) => {
    if (request.url === '/__health') {
      send(response, 200, JSON.stringify({status: 'ok'}), {
        'Content-Type': 'application/json; charset=utf-8',
      });
      return;
    }

    let staticFile;

    try {
      staticFile = resolveStaticFile(distDir, request.url || '/');
    } catch (error) {
      if (error instanceof URIError) {
        send(response, 400, 'Bad Request: malformed URI path', {
          'Content-Type': 'text/plain; charset=utf-8',
        });
        return;
      }

      throw error;
    }

    sendFile(response, staticFile || indexFile);
  });
}

export function startServer({host = process.env.HOST || DEFAULT_HOST, port = getPort()} = {}) {
  const server = createServer();
  server.listen(port, host, () => {
    console.log(`Augmented Ops production server listening on http://${host}:${port}`);
  });

  return server;
}

if (process.argv[1] === __filename) {
  startServer();
}
