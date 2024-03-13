// // Dont know If i will keep
// // userDemographicController.js
// const userDemographicService = require('../services/userDemographicService');

// // Controller to handle user demographics related operations
// const userDemographicController = {
//   getUserDemographics: async (req, res) => {
//     try {
//       // Call the service to fetch user demographics from the database
//       const userDemographics = await userDemographicService.getUserDemographics();

//       // Send the user demographics as a response
//       res.json(userDemographics);
//     } catch (error) {
//       console.error('Error fetching user demographics:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// module.exports = userDemographicController;
