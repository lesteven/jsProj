const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG || 'localhost',
  user: process.env.PGUSER || 'steven',
  database: process.env.PGDB || 'foo'
});

const test = async() => {
  try {
    const data = await pool.query('SELECT NOW()');
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

