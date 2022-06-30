const { Pool } = require('pg');
//sets up connection to database
const PG_URI = `postgres://dhpfbeef:0zA6aGysvfjNfqXBp4kQpu9eXcK-tFpB@heffalump.db.elephantsql.com/dhpfbeef`;
//'postgres://zeaslmhv:RTMhWutr9IMp7zEF4Po6TmQ9BxW_kPV3@heffalump.db.elephantsql.com/zeaslmhv';

//forms a single resusable connection to database to not overload database
const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
