const connection = require('../connection');

const postData = (name, age, data) => connection.query({
  text: 'INSERT INTO booking (patient_name, age, Booking_Date) VALUES ($1, $2, $3) RETURNING *',
  values: [name, age, data],
});

module.exports = postData;
