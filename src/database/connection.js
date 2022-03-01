require('env2')('.env');
const { Pool } = require('pg');

if (!process.env.DB_URL) throw new Error('NO database URl');

const options = {
  connectionString: process.env.DB_URL,
  ssl: false,
};

const connection = new Pool(options);

module.exports = connection;
