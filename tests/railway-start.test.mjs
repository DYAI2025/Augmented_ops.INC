import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import {after, before, describe, it} from 'node:test';
import {createServer, getPort} from '../server.js';

const rootDir = path.resolve(new URL('..', import.meta.url).pathname);

function request(server, pathname) {
  const {port} = server.address();

  return new Promise((resolve, reject) => {
    const req = http.get({hostname: '127.0.0.1', port, path: pathname}, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve({body, headers: res.headers, statusCode: res.statusCode});
      });
    });

    req.on('error', reject);
  });
}

describe('Railway production start contract', () => {
  it('defines an npm start command that Railway can execute', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));

    assert.equal(packageJson.scripts.start, 'node server.js');
    assert.equal(packageJson.scripts.build, 'node scripts/build.mjs');
    assert.equal(packageJson.scripts.test, 'node --test tests/*.test.mjs');
  });

  it('keeps the Railway runtime dependency-free so installs cannot block deployment', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));

    assert.deepEqual(packageJson.dependencies, {});
    assert.deepEqual(packageJson.devDependencies, {});
  });

  it('parses Railway PORT values and rejects invalid ports with a clear error', () => {
    assert.equal(getPort('8080'), 8080);
    assert.equal(getPort(undefined), 3000);
    assert.throws(() => getPort('not-a-port'), /Invalid PORT value/);
    assert.throws(() => getPort('70000'), /Invalid PORT value/);
  });
});

describe('production server', () => {
  let distDir;
  let server;

  before(async () => {
    distDir = fs.mkdtempSync(path.join(os.tmpdir(), 'augmented-ops-dist-'));
    fs.writeFileSync(
      path.join(distDir, 'index.html'),
      '<!doctype html><html><body><main>Augmented Ops test shell</main></body></html>',
    );
    fs.writeFileSync(path.join(distDir, 'asset.txt'), 'static asset');

    server = createServer({distDir}).listen(0, '127.0.0.1');
    await new Promise((resolve) => server.once('listening', resolve));
  });

  after(async () => {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
    fs.rmSync(distDir, {force: true, recursive: true});
  });

  it('responds on the healthcheck endpoint used by Railway', async () => {
    const response = await request(server, '/__health');

    assert.equal(response.statusCode, 200);
    assert.deepEqual(JSON.parse(response.body), {status: 'ok'});
  });

  it('serves built static assets from dist', async () => {
    const response = await request(server, '/asset.txt');

    assert.equal(response.statusCode, 200);
    assert.equal(response.body, 'static asset');
  });

  it('falls back to index.html for client-side routes', async () => {
    const response = await request(server, '/services/unknown-route');

    assert.equal(response.statusCode, 200);
    assert.match(response.body, /Augmented Ops test shell/);
  });
});
