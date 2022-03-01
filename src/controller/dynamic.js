const getData = require('../database/quires/getData');

const getAllData = (req, res) => getData().then((result) => res.json(result.rows)).catch((err) => res.status(500).json({ massage: 'Internal Server Error', err }));

module.exports = getAllData;
