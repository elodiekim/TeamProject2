// database/sequelize.js

const { Sequelize } = require('sequelize');
//데이터베이스 이름, 유저, 비번
const sequelize = new Sequelize('', '', '', {
    host: '127.0.0.1', //localhost
    dialect: 'mysql',
    port: 3306, //mysql지정 포트
    logging: false,
});

module.exports = sequelize;


