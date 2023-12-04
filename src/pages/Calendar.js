import React, { useState } from "react";
import LinkColumn from '../template/LinkColumn';
import { Link } from 'react-router-dom';
import '../styles/Calendar.css';
import CalendarComponent from '../components/CalendarComponent';
import SelectedDate from '../components/SelectedDate';

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
  
    const handleAddAppointment = (date, appointment) => {
      setAppointments([...appointments, appointment]);
    };
  
    const handleDeleteAppointment = (date, index) => {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
    };

  return (
    <div className='fitnet'>
      <div className='header'>
        <Link to="/" className='header_title'>
          FitNet
        </Link>
        <Link to="/Login" className='header_login'>
          Login / Register
        </Link>
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
