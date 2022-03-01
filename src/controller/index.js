const express = require('express');

const router = express.Router();
const { getAllData, postAllData } = require('./dynamic');

router.get('/patients', getAllData);
router.post('/booking', postAllData);
module.exports = router;
