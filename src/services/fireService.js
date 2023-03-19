// fireService.js
//데이터를 조회(데이터베이스와 상호작용)
const Fire = require('../models/Fire');
const sequelize = require('../databases/sequelize');

const fetchFirerData = async () => {
  try {
    const data = await Fire.findAll();
    await sequelize.sync();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = fetchFirerData;
