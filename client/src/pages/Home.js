import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from '../template/LinkColumn';
import axios from 'axios';
import HomeFeed2 from '../components/HomeFeed2';
import userpfp from '../assets/unknown.png'

// import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

function Home({updateAccountInfo ,accountPresent, currentAccount, accountFirstName, accountLastName, accountType }) {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [userDemographics, setUserDemographics] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

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

        const handlePopupClick = () => {
            setShowPopup(prevState => !prevState);
            console.log('Popup is being shown: ', showPopup);
        }
    
        const handleClosePopup = () => {
            setShowPopup(false);
        }

        const handleLogoutClick = () => {
            setShowPopup(false);
            updateAccountInfo("", false, "", "", "")
        }

        const handleGoToOwnAccountClick = () => {

        }

    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <div className="options-container" style={{ position: 'relative' }}>
                    {accountPresent ? (
                        <button className='options-btn' onClick={handlePopupClick}> More Options </button>
                    ) : (
                        <Link to="/Login" className='header_login'>Login / Register</Link>
                    )}
                    {showPopup && (
                        <div className="popup">
                            {accountType === 'Trainer' ? (
                                <>
                                    <Button className='logout-btn' onClick={handleLogoutClick}>Logout</Button>
                                    <Button className='account-btn' onClick={handleGoToOwnAccountClick}>My Account</Button>
                                </>
                            ) : (
                                <Button className='logout-btn' onClick={handleLogoutClick}>Logout</Button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className='content'>
                
                <LinkColumn />

                <div className='main'>
                    <div className='main_feed_title'>
                        <h2>Trainers</h2>
                    </div>
                    
                    <div className='main_feed'>
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