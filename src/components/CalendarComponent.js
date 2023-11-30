import React, {useState} from "react"; 
import Calendar from 'react-calendar';
import './CalendarComponent.css';

function CalendarComponent() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div className='body'>
            <div className='calendar-header'>
                <h1 className='calendar-header'>FitNet Calendar</h1>
            </div>
            
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>

            <div className='calendar-footer'>
                <p>
                    <span>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div>
    );
}

export default CalendarComponent;