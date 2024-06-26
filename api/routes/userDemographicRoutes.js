/**
 * Express router configuration for handling user demographic data, schedules, and media.
 * @module userDemographicRoutes
 */
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const router = express.Router();

/**
 * MySQL database connection configuration.
 * @type {Connection}
 */
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

// Route to get all user demographics.
router.get('/api/userdemographics', (req, res) => {
  const query = 'SELECT * FROM user_demographics';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});


// Route to get user demographics by first name and last name.
router.get('/api/userdemographics/:first_name/:last_name', (req, res) => {
  const { first_name, last_name } = req.params;
  const query = 'SELECT * FROM user_demographics WHERE first_name = ? AND last_name = ?';
  db.query(query, [first_name, last_name], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// Register a new user
router.post('/api/userdemographics/register', (req, res) => {
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

// Get user demographics by username
router.get('/api/userdemographics/:username', (req, res) => {
  const { username } = req.params;
  const query = 'SELECT * FROM user_demographics WHERE user_username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// Login user
router.post('/api/userdemographics/login/:username', (req, res) => {
  const { username } = req.params;
  const { user_password } = req.body;
  const query = 'SELECT * FROM user_demographics WHERE user_username = ?';
  
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length === 0) {
        res.status(404).send('User not found');
      } else {
        const user = results[0];
        if (user.user_password === user_password) {
          // Passwords match, login successful
          res.status(200).json({ message: 'Login successful', user });
        } else {
          // Passwords don't match
          res.status(401).send('Incorrect password');
        }
      }
    }
  });
});

// Update user demographics based on the type of edit
router.put('/api/userdemographics/:first_name/:last_name', (req, res) => {
  const { first_name, last_name } = req.params;
  const { editType, updatedData } = req.body;
  
  let updateFields = {};
  
  // Determine which fields to update based on the edit type
  if (editType === 'rate') {
    updateFields = { user_price: updatedData.user_price };
  } else if (editType === 'schedule') {
    updateFields = {
      monday: updatedData.monday,
      tuesday: updatedData.tuesday,
      wednesday: updatedData.wednesday,
      thursday: updatedData.thursday,
      friday: updatedData.friday,
      saturday: updatedData.saturday,
      sunday: updatedData.sunday
    };
  } else if (editType === 'info') {
    updateFields = {
      user_location: updatedData.user_location,
      user_activity: updatedData.user_activity,
      user_bio: updatedData.user_bio
    };
  } else if (editType === 'pfp') {
    updateFields = { user_pfp: updatedData.user_pfp };
  }
  // Construct the UPDATE query
  const query = 'UPDATE user_demographics SET ? WHERE first_name = ? AND last_name = ?';
  
  db.query(query, [updateFields, first_name, last_name], (err, result) => {
    if (err) {
      console.error('Error updating user information:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('User information updated successfully');
      res.status(200).send('User information updated successfully');
    }
  });
});

//Suppose to get all schedules that are linked to the stationed account first and last name from app.js
router.get('/api/userschedule/:user_first/:user_last', (req, res) => {
  const { user_first, user_last } = req.params;

  // Query to get appointments based on user's first and last names
  const query = 'SELECT * FROM user_schedule WHERE user_first = ? AND user_last = ?';
  db.query(query, [user_first, user_last], (err, scheduleResults) => {
      if (err) {
          console.error('Error querying MySQL:', err);
          res.status(500).send('Internal Server Error');
      } else {
          if (scheduleResults.length === 0) {
              res.status(404).send('Schedule not found for the user');
          } else {
              console.log(`Appointments for user ${user_first} ${user_last}:`, scheduleResults);
              res.json(scheduleResults);
          }
      }
  });
});

// Create a new appointment
router.post('/api/userschedule/create', (req, res) =>{
  const scheduleData = req.body
  const {schedule_id, user_first, user_last, other_first ,other_last , user_date, user_notes, other_accepted} = scheduleData;

  const query = 'INSERT INTO user_schedule (schedule_id, user_first, user_last, other_first ,other_last , user_date, user_notes, other_accepted) VALUES (?,?,?,?,?,?,?,?)';

  db.query(query, [schedule_id, user_first, user_last, other_first ,other_last , user_date, user_notes, other_accepted], (err, results) => {
    if (err) {
      console.error('Error Creating Apointment:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Appointment created successfully');
      res.status(200).send('Appointment created successfully');
    }
  });
});

// Delete existing appointment
router.delete('/api/userschedule/delete/:schedule_id', (req, res) => {
  const scheduleId = req.params.schedule_id;

  const query = 'DELETE FROM user_schedule WHERE schedule_id = ?';
  db.query(query, [scheduleId], (err, results) => {
    if (err) {
      console.error('Error deleting appointment:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Appointment deleted successfully');
      res.status(200).send('Appointment deleted successfully');
    }
  });
});

//Routes for media feed
// Creates a media object
router.post('/api/usermedia/:user_first/:user_last', (req, res) => {
  const mediaData = req.body;
  const { media_id ,user_first, user_last, media_path } = mediaData;

  const query =
    'INSERT INTO user_media (media_id, user_first, user_last, media_path) VALUES (? ,? , ?, ?)';

  db.query(query, [media_id ,user_first, user_last, media_path], (err, results) => {
    if (err) {
      console.error('Error Creating Appointment:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Media added successfully');
    }
  });
});

//Gets all media objects connected to first and last name
router.get('/api/usermedia/:user_first/:user_last', (req, res) => {
  const { user_first, user_last } = req.params;

  const query =
    'SELECT * FROM user_media WHERE user_first = ? AND user_last = ?';

  db.query(query, [user_first, user_last], (err, results) => {
    if (err) {
      console.error('Error fetching media:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

//Deltes specific media object through id
router.delete('/api/usermedia/:media_id', (req, res) => {
  const mediaId = req.params.media_id;

  const query = 'DELETE FROM user_media WHERE media_id = ?';

  db.query(query, [mediaId], (err, results) => {
    if (err) {
      console.error('Error deleting media:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.affectedRows === 0) {
        // If no media was deleted (perhaps media with provided media_id doesn't exist)
        res.status(404).send('Media not found');
      } else {
        console.log('Media deleted successfully');
        res.status(204).send(); // No content
      }
    }
  });
});


module.exports = router;
