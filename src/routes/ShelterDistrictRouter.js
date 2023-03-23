const express = require('express');
const router = express.Router();
const getShelterDistrict = require('../controllers/shelterDistrictController');

router.get('/', getShelterDistrict);

module.exports = router;

