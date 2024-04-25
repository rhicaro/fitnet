//To copy over to other pages for layout
import React ,{useState, useEffect} from "react";
import '../stylesV2/Home2.css';
import '../stylesV2/AccountScreenV2.css';
import { Link, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import axios from 'axios';
import userpfp from '../assets/unknown.png';
import MediaFeed from "../components/MediaFeed";
import DaySchedule from "../components/DaySchedule";

function AccountScreen2({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType}) {
    const [userAccountInfo, setUserAccountInfo] = useState([]);
    const [viewedFirst, setViewedFirst] = useState('');
    const [viewedLast, setViewedLast] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showRatePopup, setShowRatePopup] = useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [rateValue, setRateValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [activityValue, setActivityValue] = useState('');
    const [biographyValue, setBiographyValue] = useState('');

    const [scheduleResponseData, setScheduleResponseData] = useState();

    const { first_name, last_name } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
        .then(response => {
            setUserAccountInfo(response.data[0]);
            setViewedFirst(response.data[0].first_name);
            setViewedLast(response.data[0].last_name);

            setRateValue(response.data[0].user_price);
            setLocationValue(response.data[0].user_location);
            setActivityValue(response.data[0].user_activity);
            setBiographyValue(response.data[0].user_bio);

            setScheduleResponseData(response.data[0]);
        })
        .catch(error => {
            console.error('Error fetching user account:', error);
        });
    }, [first_name, last_name]);

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

    //Need this
    const handleEditBtnClick = () => {
        if (accountFirstName === viewedFirst && accountLastName === viewedLast) {
            setShowEditPopup(prevState => !prevState);
        }
    }

    const handleRateBtnClick = () => {
        setShowRatePopup(prevState => !prevState);
        setShowInfoPopup(false);
        setShowSchedulePopup(false);
    }

    const handleScheduleBtnClick = () => {
        setShowSchedulePopup(prevState => !prevState);
        setShowInfoPopup(false);
        setShowRatePopup(false);
    }

    const handleInfoBtnClick = () => {
        setShowInfoPopup(prevState => !prevState);
        setShowRatePopup(false);
        setShowSchedulePopup(false);
    }

    const handleRateChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,3}$/.test(value) || value === '') {
            setRateValue(value);
        }
    };

    //Need to change so that it rerenders the page and changes the rate value upon completion
    const handleRateSubmit = () => {
        axios.put(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`, {
            editType: 'rate',
            updatedData: {
                user_price: rateValue
            }
        })
        .then(() => {
            console.log("Rate updated successfully");
            // Fetch the updated user information after successful update
            axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
                .then(response => {
                    console.log("Updated user information:", response.data);
                    // Update the userAccountInfo state with the new data
                    setUserAccountInfo(response.data[0]);
                })
                .catch(error => {
                    console.error('Error fetching updated user information:', error);
                });
        })
            .catch(error => {
                console.error('Error updating rate:', error);
            });
    }

    const handleLocationChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z, ]+$/.test(value) || value === '') {
            setLocationValue(value);
        }
    };

    const handleActivityChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z]+$/.test(value) || value === '') {
            setActivityValue(value);
        }
    };

    const handleBiographyChange = (e) => {
        const value = e.target.value;
        setBiographyValue(value);
    }

    const handleInfoSubmit = () => {
        axios.put(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`, {
            editType: 'info',
            updatedData: {
                user_location: locationValue,
                user_activity: activityValue,
                user_bio: biographyValue
            }
        })
            .then(() => {
                console.log("Information updated successfully");
                // Fetch the updated user information after successful update
                axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
                    .then(response => {
                        console.log("Updated user information:", response.data);
                        // Update the userAccountInfo state with the new data
                        setUserAccountInfo(response.data[0]);
                    })
                    .catch(error => {
                        console.error('Error fetching updated user information:', error);
                    });
            })
            .catch(error => {
                console.error('Error updating information:', error);
            });
    }

    const handleScheduleChange = (newAccountInfo) => {
        setUserAccountInfo(newAccountInfo);
    }

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
            <html lang="en">
                <head>
                    {/* Need to keep for the icons */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                </head>
                <body>
                    <div className="container">
                        <nav className="nav2">
                            <div className="navbar">
                                <div className="logo">
                                    {/* Change to FitNetLogo */}
                                {/* <img src="/pic/logo.jpg" alt=""> */}
                                    <h1>Account</h1>
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
                                                    <div className="popup">
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
                                <Link to='/'>
                                    <p>FitNet | Find Your Trainer Today</p>
                                </Link>
                            </div>
                            <div className="main-body">
                                <div className="main-body-section">
                                    <div className="edit-container">

                                        <Button className={'style-btn'} 
                                            onClick={handleEditBtnClick} 
                                            style={{ display: accountFirstName === viewedFirst && accountLastName === viewedLast ? 'block' : 'none' }}>
                                            Edit Information
                                        </Button>
                                            
                                        {showEditPopup && (
                                            <div className='edit-popup'>

                                                <ul>
                                                    <li><Button className="style-btn" style={{marginTop: '20px'}}>Change Profile Image</Button></li>
                                                    <li><Button className="style-btn" onClick={handleRateBtnClick}>Change Rate</Button></li>
                                                    <li><Button className="style-btn" onClick={handleScheduleBtnClick}>Change Availability</Button></li>
                                                    <li><Button className="style-btn" onClick={handleInfoBtnClick}>Change Information</Button></li>
                                                </ul>

                                                {/* Need to change it so that it fills the inputs already with the information already there */}
                                                {showRatePopup && (
                                                    <div className='edit-sub-popup-rate'>
                                                        <form>
                                                            <label className="rate-label" htmlFor='rateEdit'>Change Rate</label>
                                                            <div className='inputRate'>
                                                                <input
                                                                    type='number'
                                                                    className='edit-rate-input'
                                                                    value={rateValue}
                                                                    onChange={handleRateChange}
                                                                    placeholder='  20'
                                                                    required>
                                                                </input>
                                                            </div>
                                                            <Button className='style-btn'onClick={handleRateSubmit}>
                                                                Submit
                                                            </Button>
                                                        </form>
                                                    </div>
                                                )}
                                                {/* Will work on later */}
                                                {showSchedulePopup && (
                                                    <div className='edit-sub-popup-schedule'>
                                                        <DaySchedule 
                                                            handleScheduleChange={handleScheduleChange}
                                                            first_name={first_name}
                                                            last_name={last_name}
                                                        />
                                                    </div>
                                                )}
                                                {showInfoPopup && (
                                                    <div className='edit-sub-popup-info'>
                                                        <div className="input-group">
                                                            <label htmlFor='infoEdit'>Location</label>
                                                            <input
                                                                type='text'
                                                                value={locationValue}
                                                                onChange={handleLocationChange}
                                                                placeholder='  Boston, MA'
                                                                required>
                                                            </input>
                                                        </div>

                                                        <div className="input-group">
                                                            <label htmlFor='infoEdit'>Activity</label>
                                                            <input
                                                                type='text'
                                                                value={activityValue}
                                                                onChange={handleActivityChange}
                                                                placeholder='  Basketball'
                                                                required>
                                                            </input>
                                                        </div>

                                                        <div className="input-group3">
                                                            <label htmlFor='infoEdit'>Biography</label>
                                                            <textarea
                                                                id='biography'
                                                                value={biographyValue}
                                                                onChange={handleBiographyChange}
                                                                placeholder='  Background information'
                                                                required
                                                            />
                                                        </div>

                                                        <Button onClick={handleInfoSubmit}>
                                                            Submit
                                                        </Button>
                                                    </div>
                                                )} 
                                            </div>
                                        )}

                                    {userAccountInfo && (
                                        <img src={userpfp} width={200} height={200} className='account_img2'></img>
                                    )}
                                </div>

                                    <div className='main-body-account'>
                                        <div className='main-body-account-section-1'>
                                            <div className='main-body-account-rates'>
                                                <h1>Rate</h1>
                                                <p>${userAccountInfo ? userAccountInfo.user_price : 'N/A'}/hr</p>
                                            </div>
                
                                            <div className='main-body-account-info'>
                                                <h1>Information</h1>
                                                <ul>
                                                    <li>Name: {userAccountInfo ? userAccountInfo.first_name + ' ' + userAccountInfo.last_name : 'N/A'}</li>
                                                    <li>Location: {userAccountInfo ? userAccountInfo.user_location : 'N/A'}</li>
                                                    <li>Activity: {userAccountInfo ? userAccountInfo.user_activity : 'N/A'}</li>
                                                    <li>Sex: {userAccountInfo ? userAccountInfo.user_sex : 'N/A'}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div className='main-body-account-section-2'>
                                            <div className='main-body-account-days'>
                                                <h1>Availability</h1>
                                                <ul>
                                                    <li>Monday: {userAccountInfo ? userAccountInfo.monday : 'N/A'}</li>
                                                    <li>Tuesday: {userAccountInfo ? userAccountInfo.tuesday : 'N/A'}</li>
                                                    <li>Wednesday: {userAccountInfo ? userAccountInfo.wednesday : 'N/A'}</li>
                                                    <li>Thursday: {userAccountInfo ? userAccountInfo.thursday : 'N/A'}</li>
                                                    <li>Friday: {userAccountInfo ? userAccountInfo.friday : 'N/A'}</li>
                                                    <li>Saturday: {userAccountInfo ? userAccountInfo.saturday : 'N/A'}</li>
                                                    <li>Sunday: {userAccountInfo ? userAccountInfo.sunday : 'N/A'}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-body-account-bio'>
                                    <h1>Biography</h1>
                                    <p>
                                        {userAccountInfo ? userAccountInfo.user_bio : 'N/A'}
                                    </p>
                                </div>
                                <div className='main-body-account-mediafeed'>
                                    <h1>Media</h1>
                                    <MediaFeed 
                                        accountPresent={accountPresent} 
                                        viewedAccountFirstName={viewedFirst} 
                                        viewedAccountLastName={viewedLast} 
                                        accountType={accountType} 
                                        accountFirstName={accountFirstName} 
                                        accountLastName={accountLastName}/>
                                </div>                 
                            </div>
                        </section>
                    </div>
                </body>
            </html>
        </span>
        )
}

export default AccountScreen2;