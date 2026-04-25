# CSA

Statische Landingpage für die **Customer Support Agency (CSA)**.

## Lokaler Start

```bash
npm start
```

Server läuft standardmäßig auf `http://0.0.0.0:3000` (oder auf `PORT`, falls gesetzt).

## Railway Deployment

Das Repository ist Railway-ready über den Node-Startprozess:

- Entrypoint: `server.js`
- Start Command: `npm start`
- Port: dynamisch über `process.env.PORT`
- Healthcheck: `GET /health`

## Dateien

- `index.html` – primärer Einstiegspunkt für Deployments
- `csa.index.html` – Legacy-Datei (alias), wird serverseitig auf `index.html` gemappt
- `csa-styles.css` – zentrale Styles
- `server.js` – statischer Webserver ohne externe Dependencies
