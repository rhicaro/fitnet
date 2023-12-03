import React from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link, link } from 'react-router-dom';
import '../styles/Calendar.css';
import CalendarComponent from '../components/CalendarComponent';

function Calendar() {
    return (
        <div className='fitnet'>
        <div className='header'>
            <Link to="/" className='header_title'>FitNet</Link>
            <Link to="/Login" className='header_login'>Login / Register</Link>
        </div>

        <div className='content'>
            <LinkColumn />

            <div className='main'>
                <CalendarComponent />
            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default Calendar;