const { Pool } = require('pg');

// PostgreSQL config
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'xpress2',
  password: '123',
  port: 5432,
});

// Add
const migrationSQL = `
  ALTER TABLE actor
  ADD COLUMN age INTEGER;
`;

// Exe
pool.query(migrationSQL, (error, results) => {
  if (error) {
    console.error('Failed', error);
  } else {
    console.log('Success');
  }
  pool.end();
});