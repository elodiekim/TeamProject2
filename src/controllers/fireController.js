// fireController.js

const Fire = require('../models/Fire');
const fetchFireData = require('../services/fireService');

// 데이터를 먼저 저장한 뒤에 getFireData 함수에서 데이터를 가져옴
fetchFireData();

const getFireData = async (req, res) => {
  try {
    const data = await Fire.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFireData;