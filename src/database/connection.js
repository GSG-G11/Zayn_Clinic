require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DATABASE_URL;
}

if (!dbUrl) throw new Error('NO database URl');

const options = {
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
};

const connection = new Pool(options);

module.exports = connection;
