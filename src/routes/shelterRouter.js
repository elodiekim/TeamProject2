// routes/shelter.js
const express = require('express');
const router = express.Router();
const { getShelter, getShelterData, getGuNmShelter } = require('../controllers/shelterController');

router.get('/call', getShelter); //공공데이터 호출
router.get('/', getShelterData); //DB에 저장되어 있는 데이터
router.get('/:guNm',getGuNmShelter);
module.exports = router;
