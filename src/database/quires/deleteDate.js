const connection = require('../connection');

const deleteDate = (id) => connection.query('DELETE FROM booking WHERE id = $1;', [id]);

module.exports = deleteDate;
