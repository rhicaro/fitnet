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

router.get('/api/userschedule/:firstName/:lastName', (req, res) => {
    const { firstName, lastName } = req.params;
    console.log('First Name:', firstName, 'Last Name:', lastName);

    // Query to get schedule information based on user's first and last names
    const scheduleQuery = 'SELECT * FROM user_schedule WHERE user_first = ? AND user_last = ?';
    db.query(scheduleQuery, [firstName, lastName], (err, scheduleResults) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (scheduleResults.length === 0) {
                res.status(404).send('Schedule not found for the user');
            } else {
                console.log(`Schedule for user ${firstName} ${lastName}:`, scheduleResults);
                res.json(scheduleResults);
            }
        }
    });
});

  
  module.exports = router;

