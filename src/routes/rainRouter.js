
const express = require('express');
const router = express.Router();
const {  getRainData } = require('../controllers/rainController');

//router.get('/call', getRain); //공공데이터 호출
router.get('/', getRainData); //DB에 저장되어 있는 데이터

module.exports = router;
