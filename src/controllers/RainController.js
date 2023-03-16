const Rain = require('../models/Rain');
// const fetchRainData = require('../services/rainService');

const getRainData = async (req, res) => {
  try {
    const data = await Rain.findAll(); 
    //console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRainData };