const express = require('express');
const cors = require('cors');
const userDemographicRoutes = require('../routes/userDemographicRoutes');

const app = express();
const port = 5001;

app.use(cors());

app.use(userDemographicRoutes);

const PORT = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
