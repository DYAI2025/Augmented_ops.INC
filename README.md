<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run the static site locally and deploy the production build on Railway.

View your app in AI Studio: https://ai.studio/apps/4686725d-5ee8-4a35-be37-81e761f2a83e

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` if the app needs Gemini-backed features.
3. Build and run the production server locally:
   `npm run build`
   `npm start`

## Production / Railway

Railway must build the static output first and then start the production server:

```bash
npm run build
npm start
```

The production server is implemented in `server.js` and intentionally follows Railway's runtime contract:

- listens on `process.env.PORT` and binds to `0.0.0.0`
- serves the generated `dist/` folder
- exposes `/__health` for Railway health checks
- falls back to `dist/index.html` for client-side routes
- fails fast with a clear message if `dist/index.html` is missing

`railway.json` pins Railway to `npm run build` and `npm start` so deployments do not depend on auto-detected commands.

## Regression checks

Run the full local deployment contract before shipping:

```bash
npm test
npm run lint
npm run build
PORT=4177 npm start
curl -fsS http://127.0.0.1:4177/__health
```

The test suite verifies that the `start` script exists, `PORT` parsing is explicit, the health endpoint works, static files are served, and client-side route fallback stays intact.
