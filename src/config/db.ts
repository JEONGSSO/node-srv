const mysql = require('mysql2');

const path = require('path');
const env = process.env.NODE_ENV || 'dev';
const envPath = path.resolve(`${process.env.PWD}/.env.${env}`);
require('dotenv').config({ path: envPath });

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
};

const pool = mysql.createPool(databaseConfig).promise();

export = pool;