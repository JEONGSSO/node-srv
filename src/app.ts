const express = require('express');

const app = express();
const PORT = 3001;

const db = require('./config/db.js');

app.get('/', async (req, res) => {
  const [result] = await db.query(`SELECT * from test`);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`express start http://localhost:${PORT}`);
});
