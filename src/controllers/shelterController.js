// shelterController.js
//fetchShelterData 함수를 이용하여 데이터 가져옴-> getShelter 함수에서는 가져온 데이터를 응답으로 전송
const Shelter = require('../models/Shelter');
const fetchShelterData = require('../services/shelterService');

const getShelter = async (req, res) => {
  try {
    const data = await fetchShelterData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getShelterData = async (req, res) => {
  try {
    const data = await Shelter.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getShelter, getShelterData };