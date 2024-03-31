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

router.post('/api/register', (req, res) => {
  const userData = req.body;
  const {user_id ,first_name, last_name, user_username, user_password, user_email, user_phone, user_status, 
    user_location, user_activity, user_sex, user_price, user_bio, monday, tuesday, wednesday, thursday, 
    friday, saturday, sunday } = userData;

  const query = 'INSERT INTO user_demographics (user_id, first_name, last_name, user_username, user_password, user_email, user_phone, user_status, user_location, user_activity, user_sex, user_price, user_bio, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [user_id ,first_name, last_name, user_username, user_password, user_email, user_phone, user_status, 
    user_location, user_activity, user_sex, user_price, user_bio, monday, tuesday, wednesday, thursday, friday, 
    saturday, sunday], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('User registered successfully');
      res.status(200).send('User registered successfully');
    }
  });
});

module.exports = router;
