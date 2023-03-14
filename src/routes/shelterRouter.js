
const express = require('express');
const router = express.Router();
const { getShelter, getShelterData } = require('../controllers/shelterController');

router.get('/', getShelter);
router.get('/data', getShelterData);

module.exports = router;
