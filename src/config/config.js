require('dotenv').config();

const x = {
  development: {
    username: 'dfisfsab',
    password: 'R5ULP8YT5z9l-WxBWAqlYnV1c_w4Sw7R',
    database: 'dfisfsab',
    host: 'tiny.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
module.exports = x;
