import * as express from 'express';
import * as fs from 'fs';
import * as cors from 'cors';

import { listenServer } from './plugins/socket.io';

listenServer();

const app = express();
const PORT: number = 3001;
const router: any = express.Router();

app.use(express.json());
app.use(cors());

fs.readdirSync(`${__dirname}/routes`)
  .reduce((preRoutes: any, nextRoutes) => {
    const routes = require(`${__dirname}/routes/${nextRoutes}`).Routes;
    return [...preRoutes, ...routes];
  }, [])
  .forEach((r: any) => {
    const { endpoint, method, controller } = r;
    router[method](endpoint, controller);
  });

app.use('/', router);

app.listen(PORT, () => {
  console.log(`express start http://localhost:${PORT}`);
});
