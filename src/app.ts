// const express = require('express');
import express from 'express';

const app = express();
const PORT = 3001;

const db = require('./config/db.js');

app.get('/', async (req: object, res: object) => {
  console.log(123);

  // const [result] = await db.query(`SELECT * from test`);
  // res.send(res);
  // res.json(result);
});

app.listen(PORT, () => {
  console.log(`express start http://localhost:${PORT}`);
});
