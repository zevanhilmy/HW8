const { Pool } = require('pg');

// PostgreSQL config
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'xpress2',
  password: '123',
  port: 5432,
});

//Query List Film
const query1 = 'SELECT * FROM film';

//Query List film berdasarkan ID
const filmId = 1; // ID
const query2 = `SELECT * FROM film WHERE film_id = ${filmId}`;

//Query Category
const query3 = 'SELECT * FROM category';

//Query Category berdasarkan ID
const categoryId = 1; // ID
const query4 = `
  SELECT film.* FROM film
  INNER JOIN film_category ON film.film_id = film_category.film_id
  WHERE film_category.category_id = ${categoryId}
`;

//Query Film
pool.query(query1, (error, result1) => {
  if (error) {
    console.error('Error executing query 1:', error);
    return;
  }
  console.log('Data seluruh list film:');
  console.log(result1.rows);
});

//Query + ID
pool.query(query2, (error, result2) => {
  if (error) {
    console.error('Error executing query 2:', error);
    return;
  }
  console.log('Data film berdasarkan ID:');
  console.log(result2.rows);
});

//Query Category
pool.query(query3, (error, result3) => {
  if (error) {
    console.error('Error executing query 3:', error);
    return;
  }
  console.log('Data list category:');
  console.log(result3.rows);
});

//Query Category + ID
pool.query(query4, (error, result4) => {
  if (error) {
    console.error('Error executing query 4:', error);
    return;
  }
  console.log('Data list film berdasarkan category:');
  console.log(result4.rows);
});
