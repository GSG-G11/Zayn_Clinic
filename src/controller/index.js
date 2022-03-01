const express = require('express');

const router = express.Router();
const { getAllData, postAllData } = require('./dynamic');
const deleteDate = require('../database/quires/deleteDate');
const { clinetError, serverError } = require('./error');

router.get('/patients', getAllData);
router.post('/booking', postAllData);
router.delete('/delete-patient/:id', (req, res) => {
  deleteDate(req.params.id)
    .then(() => res.redirect('/patients'));
});
router.use(clinetError);
router.use((err, req, res, next) => {
  serverError(req, res, next);
});

module.exports = router;