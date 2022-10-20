/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const os = require('os');
const path = require('path');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.static(__dirname));

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Project is running at http://${os.hostname}:${PORT}`);
});
