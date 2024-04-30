import React, {useState, useEffect} from "react";
import '../stylesV2/Home2.css';
import '../stylesV2/Home2V2.css';
import { Link, link } from 'react-router-dom';
import axios from 'axios';
import HomeFeed2 from "../components/HomeFeed2";
import { Button } from 'react-bootstrap';
import userpfp from '../assets/unknown.png';
// import Notification from '../components/Notifications';

function Home2({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType }) {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [userDemographics, setUserDemographics] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5001/api/userdemographics')
        .then(response => {
            const triainerAccounts = response.data.filter(account => account.user_status === "Trainer");
            setUserDemographics(triainerAccounts);
        })
        .catch(error => {
            console.error('Error fetching user demographics:', error);
        });
        }, []);

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

    const handleNotifClick = (e) => {
        e.preventDefault();
        setShowNotif(prevState => !prevState);
    }

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="body">
                <div className="container">
                    <nav>
                        <div className="navbar">
                            <div className="logo">
                                {/* Change to FitNetLogo */}
                            {/* <img src="/pic/logo.jpg" alt=""> */}
                                <h1>Home</h1>
                            </div>
                            <ul>
                                <Link to='/'>
                                    <li>
                                            <i className="fas fa-home"></i>
                                            <span className="nav-item">Home</span>
                                    </li>
                                </Link>
                                <Link to='/Calendar'>
                                    <li>
                                            <i className="fas fa-calendar"></i>
                                            <span className="nav-item">Calendar</span>
                                    </li>
                                </Link>
                                <Link to='/About'>
                                    <li>
                                            <i className="fas fa-info-circle"></i>
                                            <span className="nav-item">About</span>
                                    </li>
                                </Link>
                                    <Link to='/Login'>
                                    <li>
                                            <i className="fas fa-sign-in-alt"></i>
                                            <span className="nav-item">Login</span>
                                    </li>
                                </Link>
                                <Link to='/Signup'>
                                    <li>
                                            <i className="fas fa-share"></i>
                                            <span className="nav-item">Register</span>
                                    </li>
                                </Link>

                                <li>
                                    {accountPresent && (
                                        <div className='nav-item-options-container'>
                                            <a href="#" className='options' onClick={handlePopupClick}>
                                                <i className="fas fa-cog"/>
                                                <span className="nav-item">More Options</span>
                                            </a>
                                            {showPopup && (
                                                <div className={`popup ${!showPopup ? 'show' : 'hide'}`}>
                                                    {accountType === 'Trainer' ? (
                                                        <>
                                                            <a href="#" className="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                            <Link 
                                                                to={`/AccountScreen/${accountFirstName}/${accountLastName}`} 
                                                                className='style-btn'
                                                                onClick={handleClosePopup}>
                                                                My Account
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <a href="#" className="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <section className="main">
                        <div className="main-top">
                            <div className="main-top-content">
                                <Link to='/' className="main-top-link">
                                    <p>FitNet | Find Your Trainer Today</p>
                                </Link>
                            </div>
                            {/* <div className="main-top-notifications">
                                <i className="fas fa-bell" onClick={handleNotifClick}></i>
                                <Notification show={showNotif} />
                            </div> */}
                        </div>
                            <div className="main-body">
                                <h1>Trainers</h1>
                                <div className="main-body-feed">
                                    <HomeFeed2 
                                        accounts={userDemographics}
                                        selectedAccount={selectedAccount} 
                                        setSelectedAccount={setSelectedAccount}
                                        accountFirstName={accountFirstName}
                                        accountLastName={accountLastName}
                                    />
                                </div>
                                <div className="main-body-feed-selected">
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
            </div>
            {/* </html> */}
        </span>
        )
}

export default Home2;