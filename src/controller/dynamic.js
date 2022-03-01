const getData = require('../database/quires/getData');
const postData = require('../database/quires/postData');
const deleteDate = require('../database/quires/deleteDate');

const getAllData = (req, res) => getData().then((result) => res.json(result.rows)).catch((err) => res.status(500).json({ massage: 'Internal Server Error', err }));

const postAllData = (req, res) => {
  const { name, age, data } = req.body;
  postData(name, age, data).then(() => res.redirect('/'));
};

const deleteSomeDate = (req, res) => {
  const { id } = req.body;
  deleteDate(id);
  res.redirect('/');
};

module.exports = { getAllData, postAllData, deleteSomeDate };
