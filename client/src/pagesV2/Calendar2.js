//To copy over to other pages for layout
import React ,{useState, useEffect} from "react";
import '../stylesV2/Home2.css';
import { Link, link } from 'react-router-dom';
import CalendarComponent from "../components/CalendarComponent";
import SelectedDate from "../components/SelectedDate";

/**
 * Represents a calendar component.
 * 
 * @param {Function} updateAccountInfo - Function to update the account information.
 * @param {boolean} accountPresent - Boolean indicating whether an account is present.
 * @param {string} accountFirstName - The first name of the account holder.
 * @param {string} accountLastName - The last name of the account holder.
 * @param {string} accountType - The type of the account.
 */
function Calendar2({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
  
    /**
     * Adds an appointment for the specified date.
     * 
     * @param {Date} date - The date of the appointment.
     * @param {Object} appointment - The appointment object to add.
     */
    const handleAddAppointment = (date, appointment) => {
      setAppointments([...appointments, appointment]);
    };
  
    /**
     * Deletes an appointment for the specified date and index.
     * 
     * @param {Date} date - The date of the appointment.
     * @param {number} index - The index of the appointment to delete.
     */
    const handleDeleteAppointment = (date, index) => {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
    };

    //Functions to handle popups and login credientials
    const handlePopupClick = (e) => {
      e.preventDefault();
      setShowPopup(prevState => !prevState);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleLogoutClick = () => {
        setShowPopup(false);
        updateAccountInfo("", false, "", "", "");
    }

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
                    {/* Need to keep for the icons */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <div className="body">
                <div className="container">
                    <nav>
                        <div className="navbar">
                            <div className="logo">
                                {/* Change to FitNetLogo */}
                            {/* <img src="/pic/logo.jpg" alt=""> */}
                                <h1>Calendar</h1>
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
                                        <div className='nav-item-options-container'>
                                            <a href="#" className='options' onClick={handlePopupClick}>
                                                <i className="fas fa-cog"/>
                                                <span className="nav-item">More Options</span>
                                            </a>
                                            {showPopup && (
                                                <div className={`popup ${showPopup ? 'show' : 'hide'}`}>
                                                {accountType === 'Trainer' && (
                                                    <>
                                                        <a href="#" className="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                        <Link 
                                                            to={`/AccountScreen/${accountFirstName}/${accountLastName}`} 
                                                            className='style-btn'
                                                            onClick={handleClosePopup}>
                                                            My Account
                                                        </Link>
                                                    </>
                                                )}
                                                {accountType === 'Client' && (
                                                    <a href="#" className="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                )}
                                                {!accountType && (
                                                    <p>Please login for more options</p>
                                                )}
                                            </div>                                            
                                            )}
                                        </div>
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
                            <div className="main-body-calendar">
                                <CalendarComponent
                                    selectedDate={selectedDate}
                                    onDateChange={setSelectedDate}
                                />
                            </div>
                            <div className="main-body-appointment">
                            <SelectedDate
                                selectedDate={selectedDate}
                                onAddAppointment={handleAddAppointment}
                                onDeleteAppointment={handleDeleteAppointment}
                                accountPresent={accountPresent} 
                                accountFirstName={accountFirstName}
                                accountLastName={accountLastName} 
                                accountType={accountType}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                </div>
        </span>
        )
}

export default Calendar2;