
const express = require('express');
const router = express.Router();
const getFireData = require('../controllers/fireController');

router.get('/', getFireData); //DB에 저장되어 있는 데이터

module.exports = router;
