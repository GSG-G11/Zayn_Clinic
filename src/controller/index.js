const express = require('express');

const router = express.Router();
const { getAllData, postAllData } = require('./dynamic');
const { clinetError, serverError } = require('./error');

router.get('/patients', getAllData);
router.post('/booking', postAllData);
router.use(clinetError);
router.use((err, req, res, next) => {
  serverError(req, res, next);
});

module.exports = router;
