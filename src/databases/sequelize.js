// database/sequelize.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: config.development.dialect,
      logging:false,
      // define: {
      //   timestamps: false // true이면 createdAt, updatedAt 컬럼을 자동으로 생성
      // }
    },
  );

module.exports = sequelize;
