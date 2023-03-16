// routes/fireRouter.js
const express = require('express');
const router = express.Router();
const  getFireData= require('../controllers/fireController');

router.get('/', getFireData);

module.exports = router;
