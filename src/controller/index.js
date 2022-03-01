const express = require('express');

const router = express.Router();
const { getAllData, postAllData, deleteSomeDate } = require('./dynamic');

router.get('/patients', getAllData);
router.post('/booking', postAllData);
router.delete('/delete-patient/:id', (req, res) => {
  deleteSomeDate(req.params.id);
  res.redirect('/patients');
});
module.exports = router;
