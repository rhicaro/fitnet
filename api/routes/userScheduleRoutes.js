const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const router = express.Router();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'summer2024',
  database: 'FitNet_db',
});

router.use(bodyParser.json());

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

router.get('/api/userschedule/:first_name/:last_name', (req, res) => {
    const { first_name, last_name } = req.params;

    // Query to get appointments based on user's first and last names (Works)
    const query = 'SELECT * FROM user_schedule WHERE user_first = ? AND user_last = ?';
    db.query(query, [first_name, last_name], (err, scheduleResults) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (scheduleResults.length === 0) {
                res.status(404).send('Schedule not found for the user');
            } else {
                console.log(`Appointments for user ${first_name} ${last_name}:`, scheduleResults);
                res.json(scheduleResults);
            }
        }
    });
});

// router.get('/api/userschedule', (req, res) => {
//     // Query to retrieve all objects from user_schedule table
//     const query = 'SELECT * FROM user_schedule';
//     db.query(query, (err, scheduleResults) => {
//       if (err) {
//         console.error('Error querying MySQL:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         console.log('All schedules retrieved:', scheduleResults);
//         res.json(scheduleResults);
//       }
//     });
//   });
  
  module.exports = router;

