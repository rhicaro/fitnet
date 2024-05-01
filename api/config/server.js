/**
 * This file initializes and starts an Express.js server with CORS middleware and user demographic routes.
 * 
 * @fileOverview Express Server Configuration
 * @module index
 */

const express = require('express'); 
const cors = require('cors'); 
const userDemographicRoutes = require('../routes/userDemographicRoutes');

const app = express();
const port = 5001;
app.use(cors());
app.use(userDemographicRoutes);

/**
 * Start the server and listen on the specified port.
 * @function
 * @name app.listen
 * @param {number} port - The port number to listen on.
 * @param {function} callback - The function to execute once the server is running.
 */
const PORT = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
