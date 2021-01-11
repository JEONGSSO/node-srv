const mysql = require("mysql2");

const path = require('path');
const env = process.env.NODE_ENV || 'dev';
const envPath = path.resolve(`../.env.${env}`);
require('dotenv').config({ path: envPath });

const databaseConfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
}

const test = () => {
  console.log(databaseConfig);
  const connection = mysql.createConnection(databaseConfig);
  
  connection.connect();
  
  connection.query('SELECT * from test', (e, res) => {
    console.log('error', e);
    console.log('res', res);
  })

  connection.end();
}

module.exports = test;