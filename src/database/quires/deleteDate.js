const connection = require('../connection');

const deleteDate = (id) => connection.query('DELETE FROM booking WHERE patient_id = $1;', [id]);

module.exports = deleteDate;
