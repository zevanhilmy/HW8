const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// PostgreSQL config
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'xpress2',
  password: '123',
  port: 5432,
});

app.use((req, res, next) => {
  pool.query('SELECT * FROM actor', (error, results) => {
    if (error) {
      throw error;
    }
    res.locals.data = results.rows;
    next();
  });
});

// Route Seeding
app.get('/seed', (req, res) => {
  const seedData = [
    { first_name: 'Maya', last_name: 'Dewi' },
    { first_name: 'Andi', last_name: 'Cahaya' },
    { first_name: 'Dian', last_name: 'Purnama' },
    { first_name: 'Rizky', last_name: 'Jaya' },
    { first_name: 'Sari', last_name: 'Dinda' },
  ];

  const insertQuery = 'INSERT INTO actor (first_name, last_name) VALUES ($1, $2)';

  seedData.forEach((data) => {
    pool.query(insertQuery, [data.first_name, data.last_name], (error, results) => {
      if (error) {
        throw error;
      }
    });
  });
});