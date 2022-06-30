const {Pool} = require('pg');

const PG_URI = 'postgres://dhpfbeef:0zA6aGysvfjNfqXBp4kQpu9eXcK-tFpB@heffalump.db.elephantsql.com/dhpfbeef';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
