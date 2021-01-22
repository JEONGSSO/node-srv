import * as express from 'express';

import * as db from '../src/config/db'

const app = express();
const PORT = 3001;

app.get('/', async (req: any, res: any) => {
  const [result] = await db.query(`SELECT * from test`);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`express start http://localhost:${PORT}`);
});
