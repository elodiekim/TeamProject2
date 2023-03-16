// rainController.js
const fetchRainData = require('../services/rainService');

const getRainData = async (req, res) => {
  try {
    const data = await fetchRainData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getRainData;
