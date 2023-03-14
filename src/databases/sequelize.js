// database/sequelize.js
require('dotenv').config();
//npm install dotenv 해주고
//.env에 DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST=127.0.0.1, DB_PORT=3306입력해주세요)
const { Sequelize } = require('sequelize');
//데이터베이스 이름, 유저, 비번
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
  });

module.exports = sequelize;


