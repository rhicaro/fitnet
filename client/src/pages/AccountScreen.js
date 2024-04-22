import React, { useEffect,useState } from 'react';
import '../styles/AccountScreen.css';
import LinkColumn from '../template/LinkColumn';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MediaFeed from '../components/MediaFeed';
import userpfp from '../assets/unknown.png';
import DaySchedule from '../components/DaySchedule';
import axios from 'axios';

// Current account information is properly passed over to this page similar to the home page.
function AccountScreen({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType}) {
    const [userAccountInfo, setUserAccountInfo] = useState([]);
    const [viewedFirst, setViewedFirst] = useState('');
    const [viewedLast, setViewedLast] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showRatePopup, setShowRatePopup] = useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [rateValue, setRateValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [activityValue, setActivityValue] = useState('');
    const [biographyValue, setBiographyValue] = useState('');

    const { first_name, last_name } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
        .then(response => {
            console.log("Response Data:", response.data);
            setUserAccountInfo(response.data[0]);
            setViewedFirst(response.data[0].first_name);
            setViewedLast(response.data[0].last_name);
        })
        .catch(error => {
            console.error('Error fetching user account:', error);
        });
    }, [first_name, last_name]);

    const handlePopupClick = () => {
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
                                    <Link 
                                        to={`/AccountScreen/${accountFirstName}/${accountLastName}`} 
                                        className='account-btn'>
                                        <Button className='account-btn' onClick={handleClosePopup}>My Account</Button>
                                    </Link>
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
                    <div className='account_head'>
                        
                    {/* What I want to transfer over */}
                    <Button className={'edit-btn'} onClick={handleEditBtnClick} style={{ display: accountFirstName === viewedFirst && accountLastName === viewedLast ? 'block' : 'none' }}>
                        Edit Information
                    </Button>

                    {/* Check if the editPopup should be shown */}
                    {showEditPopup && (
                        <div className='editPopup'>
                            <Button style={{marginTop: '20px'}}>Change Profile Image</Button>
                            <Button onClick={handleRateBtnClick}>Change Rate</Button>
                            <Button onClick={handleScheduleBtnClick}>Change Availability</Button>
                            <Button onClick={handleInfoBtnClick}>Change Information</Button>
                            
                            {showRatePopup && (
                                <div className='ratePopup'>
                                    <form>
                                        <div className='inputRate'>
                                            <label htmlFor='rateEdit'>Change Rate: </label>
                                            <input
                                            type='number'
                                            id='rate'
                                            value={rateValue}
                                            onChange={handleRateChange}
                                            placeholder='20'
                                            required>
                                            </input>

                                            <Button onClick={handleRateSubmit}>
                                                Submit
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                            {/* Will work on later */}
                            {showSchedulePopup && (
                                <div className='schedulePopup'>
                                    <DaySchedule 
                                    handleScheduleChange={handleScheduleChange}
                                    first_name={first_name}
                                    last_name={last_name}
                                    />
                                </div>
                            )}
                            {showInfoPopup && (
                                <div className='infoPopup'>
                                    <label htmlFor='infoEdit'>Change Location: </label>
                                    <input
                                    type='text'
                                    id='location'
                                    value={locationValue}
                                    onChange={handleLocationChange}
                                    placeholder='Boston, MA'
                                    required>
                                    </input>

                                    <label htmlFor='infoEdit'>Change Activity: </label>
                                    <input
                                    type='text'
                                    id='activity'
                                    value={activityValue}
                                    onChange={handleActivityChange}
                                    placeholder='Basketball'
                                    required>
                                    </input>

                                    <label htmlFor='infoEdit'>Change Biography: </label>
                                    <input
                                    type='text'
                                    id='biography'
                                    value={biographyValue}
                                    onChange={handleBiographyChange}
                                    placeholder='Background information'
                                    required>
                                    </input>

                                    <Button onClick={handleInfoSubmit}>
                                        Submit
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                        {/* End of account editing that I want to transfer */}

                    {/* Render the user image */}
                    {userAccountInfo && (
                        <img src={userpfp} width={200} height={200} className='account_img'></img>
                    )}
                </div>
    
                    <div className='account_body'>
                        <div className='section1'>
                            <div className='account_rates'>
                                <h1>Rate</h1>
                                <p>${userAccountInfo ? userAccountInfo.user_price : 'N/A'}/hr</p>
                            </div>
    
                            <div className='account_info_title'>
                                <h1>Information</h1>
                            </div>
    
                            <div className='account_info_basic'>
                                <ul>
                                    <li>Name: {userAccountInfo ? userAccountInfo.first_name + ' ' + userAccountInfo.last_name : 'N/A'}</li>
                                    <li>Location: {userAccountInfo ? userAccountInfo.user_location : 'N/A'}</li>
                                    <li>Activity: {userAccountInfo ? userAccountInfo.user_activity : 'N/A'}</li>
                                    <li>Sex: {userAccountInfo ? userAccountInfo.user_sex : 'N/A'}</li>
                                </ul>
                            </div>
    
                            <div className='account_info_bio'>
                                <p>
                                    {userAccountInfo ? userAccountInfo.user_bio : 'N/A'}
                                </p>
                            </div>
                        </div>
                        
                        <div className='section2'>
                            <div className='account_days'>
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
                            <div className='account_media_feed'>
                                <MediaFeed accountPresent={accountPresent} viewedAccountFirstName={viewedFirst} 
                                viewedAccountLastName={viewedLast} accountType={accountType} 
                                accountFirstName={accountFirstName} accountLastName={accountLastName}/>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
    
            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    );    
}

export default AccountScreen;
