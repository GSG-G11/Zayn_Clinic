const getData = require('../database/quires/getData');
const postData = require('../database/quires/postData');

const getAllData = (req, res) => getData().then((result) => res.json(result.rows)).catch((err) => res.status(500).json({ massage: 'Internal Server Error', err }));

const postAllData = (req, res) => {
  const { name, age, data } = req.body;
  postData(name, age, data).then(() => res.redirect('/'));
};

module.exports = { getAllData, postAllData };
