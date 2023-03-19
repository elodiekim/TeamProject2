// rainService.js
const Rain = require('../models/Rain');
const sequelize = require('../databases/sequelize');

const fetchRainData = async () => {
  try {
    const data = await Rain.findAll();
    await sequelize.sync();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = fetchRainData;
