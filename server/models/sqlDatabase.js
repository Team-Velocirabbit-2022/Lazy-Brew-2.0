const { Pool } = require('pg');

const PG_URI = 'Insert your database URI here';

// ^^^ we need a unique URI here


const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

//To run from terminal:
//brew services start postgresql
//brew services stop postgresql
//psql <URI to database>
//SEE db_seed.sql file for creating database!