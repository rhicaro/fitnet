import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import LinkColumn from '../template/LinkColumn';
import { Link } from 'react-router-dom';
import '../styles/Calendar.css';
import CalendarComponent from '../components/CalendarComponent';
import SelectedDate from '../components/SelectedDate';

//This is the calendar page

function Calendar({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
  
    const handleAddAppointment = (date, appointment) => {
      setAppointments([...appointments, appointment]);
    };
  
    const handleDeleteAppointment = (date, index) => {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
    };

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
          <CalendarComponent
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
          <div className='calendar-main'>
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
      </div>

      <div className='footer'>
        <p>&copy; 2023 FitNet | FitNet.com</p>
      </div>
    </div>
  );
}

export default Calendar;
