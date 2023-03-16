// fireController.js
const fetchShelterData = require('../services/fireService');

const getFireData = async (req, res) => {
  try {
    const data = await fetchShelterData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFireData;

