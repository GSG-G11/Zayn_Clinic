const { join } = require('path');

const clinetError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};
const serverError = (req, res) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = { clinetError, serverError };
