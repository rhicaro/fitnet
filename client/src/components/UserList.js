// Should probably handle this on the server side instead of the client side and 
// then have the client side get the array of accounts from the server side
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeFeed2 from './HomeFeed2';

const UserList = () => {
  const [userDemographics, setUserDemographics] = useState([]);

  useEffect(() => {
    // Fetch user demographics from the server when the component mounts
    axios.get('http://localhost:5001/api/userdemographics')
      .then(response => {
        const triainerAccounts = response.data.filter(account => account.user_status === "Trainer");
        setUserDemographics(triainerAccounts);
        console.log(userDemographics);
      })
      .catch(error => {
        console.error('Error fetching user demographics:', error);
      });
  }, []);


  return (
    <div>
      <h2>Trainer Accounts</h2>
      <HomeFeed2 accounts={userDemographics} />
    </div>
  );
};

export default UserList;