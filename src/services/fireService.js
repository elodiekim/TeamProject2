// fireService.js
const Fire = require('../models/Fire');
const sequelize = require('../databases/sequelize');

const fetchShelterData = async () => {
  try {
    const data = await Fire.findAll();
    await sequelize.sync();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = fetchShelterData;
