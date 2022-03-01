const express = require('express');

const router = express.Router();
const getAllData = require('./dynamic');

router.get('/patients', getAllData);

module.exports = router;
