const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

const env = process.env.NODE_ENV || 'dev'
const envPath = path.resolve(`../.env.${env}`)

require('dotenv').config({ path: envPath });

app.get('/', (req, res) => {
  res.send('good')
})

app.listen(PORT, () => {
  console.log('express start port', PORT);
  console.log(process.env.DB_HOST);
})