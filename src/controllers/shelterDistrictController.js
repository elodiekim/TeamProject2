//shelterDistrictController
const getShelterDistrictData = require('../services/shelterDistrictService');

const getShelterDistrict = async (req, res) => {
    try {
      const data = await getShelterDistrictData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = getShelterDistrict;
  