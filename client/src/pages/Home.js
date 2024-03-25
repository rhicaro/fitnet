import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from '../template/LinkColumn';
import axios from 'axios';
import HomeFeed2 from '../components/HomeFeed2';
import userpfp from '../assets/unknown.png'

function Home() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [userDemographics, setUserDemographics] = useState([]);

    useEffect(() => {
        // Fetch user accounts from the database to be displayed on the home screen
        axios.get('http://localhost:5001/api/userdemographics')
        .then(response => {
            const triainerAccounts = response.data.filter(account => account.user_status === "Trainer");
            setUserDemographics(triainerAccounts);
        })
        .catch(error => {
            console.error('Error fetching user demographics:', error);
        });
        }, []);

        console.log("The user demographics from the DB", userDemographics);

    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <Link to="/Login" className='header_login'>Login / Register</Link>
            </div>

            <div className='content'>
                
                <LinkColumn />

                <div className='main'>
                    <div className='main_feed_title'>
                        <h2>Trainers</h2>
                    </div>
                    
                    <div className='main_feed'>
                        {/* This is where the trainer feed will live */}
                        <HomeFeed2 
                            accounts={userDemographics}
                            selectedAccount={selectedAccount} 
                            setSelectedAccount={setSelectedAccount}
                        />
                    </div>

                    <div className='account_selected'>
                        {selectedAccount && (
                            <>
                                <img src={userpfp} width={250} height={250} className='account_img'></img>
                                <h3 className='account_info_name'>Name: {selectedAccount.first_name} {selectedAccount.lastName}</h3>
                                <h3 className='account_info'>Location: {selectedAccount.user_location}</h3>
                                <h3 className='account_info'>Activity: {selectedAccount.user_activity}</h3>
                                <h3 className='account_info'>Sex: {selectedAccount.user_sex}</h3>
                                <h3 className='account_info'>Price: ${selectedAccount.user_price}</h3>
                            </>
                        )}
                    </div>

                        {/* <Link to="/AccountScreen"><div className='main_feed_btn'>Visit Account</div></Link> */}
                        {selectedAccount && (
                        <Link to={`/AccountScreen/${selectedAccount.first_name}/${selectedAccount.last_name}`} className='main_feed_btn'>
                            Visit Account
                        </Link>
                        
                        )}

                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;