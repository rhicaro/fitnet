const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'summer2024',
  database: 'FitNet_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

router.get('/api/userdemographics', (req, res) => {
  const query = 'SELECT * FROM user_demographics';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('User accounts from the Database:', results);
      res.json(results);
    }
  });
});

router.get('/api/userdemographics/:first_name/:last_name', (req, res) => {
  const { first_name, last_name } = req.params;
  const query = 'SELECT * FROM user_demographics WHERE first_name = ? AND last_name = ?';
  db.query(query, [first_name, last_name], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(first_name, last_name, 'account from the database', results);
      res.json(results);
    }
  });
});

module.exports = router;
