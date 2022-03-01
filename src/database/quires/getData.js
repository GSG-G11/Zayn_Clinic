const connection = require('../connection');

const getData = () => {
  const sql = {
    text: 'SELECT * FROM booking;',
  };
  return connection.query(sql);
};
module.exports = getData;
