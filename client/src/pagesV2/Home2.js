import React, {useState, useEffect} from "react";
import '../stylesV2/Home2.css';
import '../stylesV2/Home2V2.css';
import { Link, link } from 'react-router-dom';
import axios from 'axios';
import HomeFeed2 from "../components/HomeFeed2";
import { Button } from 'react-bootstrap';
import userpfp from '../assets/unknown.png';

function Home2({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType }) {
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

    // This will be for the log out
    const handlePopupClick = (e) => {
        e.preventDefault();
        setShowPopup(prevState => !prevState);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleLogoutClick = () => {
        setShowPopup(false);
        updateAccountInfo("", false, "", "", "")
    }

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
            <html lang="en">
                <head>
                    {/* Need to keep for the icons */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                </head>
                <body>
                <div class="container">
                    <nav>
                        <div class="navbar">
                            <div class="logo">
                                {/* Change to FitNetLogo */}
                            {/* <img src="/pic/logo.jpg" alt=""> */}
                                <h1>Home</h1>
                            </div>
                            <ul>
                                <Link to='/'>
                                    <li>
                                            <i class="fas fa-home"></i>
                                            <span class="nav-item">Home</span>
                                    </li>
                                </Link>
                                <Link to='/Calendar'>
                                    <li>
                                            <i class="fas fa-calendar"></i>
                                            <span class="nav-item">Calendar</span>
                                    </li>
                                </Link>
                                <Link to='/About'>
                                    <li>
                                            <i class="fas fa-info-circle"></i>
                                            <span class="nav-item">About</span>
                                    </li>
                                </Link>
                                    <Link to='/Login'>
                                    <li>
                                            <i class="fas fa-sign-in-alt"></i>
                                            <span class="nav-item">Login</span>
                                    </li>
                                </Link>
                                <Link to='/Signup'>
                                    <li>
                                            <i class="fas fa-share"></i>
                                            <span class="nav-item">Register</span>
                                    </li>
                                </Link>

                                <li>
                                    {accountPresent && (
                                        <div class='nav-item-options-container'>
                                            <a href="#" class='options' onClick={handlePopupClick}>
                                                <i className="fas fa-cog"/>
                                                <span className="nav-item">More Options</span>
                                            </a>
                                            {showPopup && (
                                                <div className="popup">
                                                    {accountType === 'Trainer' ? (
                                                        <>
                                                            <a href="#" class="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                            <Link 
                                                                to={`/AccountScreen/${accountFirstName}/${accountLastName}`} 
                                                                className='style-btn'
                                                                onClick={handleClosePopup}>
                                                                {/* <Button className='account-btn' onClick={handleClosePopup}>My Account</Button> */}
                                                                My Account
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <a href="#" class="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                        // <Button className='logout-btn' onClick={handleLogoutClick}>Logout</Button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <section class="main">
                        <div class="main-top">
                            <Link to='/'>
                                <p>FitNet | Find Your Trainer Today</p>
                            </Link>
                        </div>
                            <div class="main-body">
                                <h1>Trainers</h1>
                                <div class="main-body-feed">
                                    <HomeFeed2 
                                    accounts={userDemographics}
                                    selectedAccount={selectedAccount} 
                                    setSelectedAccount={setSelectedAccount}
                                    />
                                </div>
                                <div class="main-body-feed-selected">
                                    {selectedAccount && (
                                        <>
                                            <img src={userpfp} width={100} height={100} className='account_img'></img>
                                            <h3 className='account_info_name'>Name: {selectedAccount.first_name} {selectedAccount.last_name}</h3>
                                            <h3 className='account_info'>Location: {selectedAccount.user_location}</h3>
                                            <h3 className='account_info'>Activity: {selectedAccount.user_activity}</h3>
                                            <h3 className='account_info'>Sex: {selectedAccount.user_sex}</h3>
                                            <h3 className='account_info_last'>Price: ${selectedAccount.user_price}</h3>
                                        </>
                                    )}
                                

                                    {selectedAccount && (
                                <Link to={`/AccountScreen/${selectedAccount.first_name}/${selectedAccount.last_name}`} className='account_screen_btn'>
                                    Visit Account
                                </Link>
                                
                                )}
                                </div>
                        </div>
                    </section>
                </div>

                </body>
            </html>
        </span>
        )
}

export default Home2;