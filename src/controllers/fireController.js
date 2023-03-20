// fireController.js
//클라이언트로부터 요청을 받아 응답을 반환하는 역할
const fetchFirerData = require('../services/fireService');

const getFireData = async (req, res) => {
  try {
    const data = await fetchFirerData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFireData;


