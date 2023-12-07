import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/CalendarComponent.css";

//This is a component for the React Calendar

function CalendarComponent({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate); // Propagate the selected date change to the parent component
  };

  return (
    <div className='body'>
      <div className='calendar-header'>
        <h1 className='calendar-header'>Calendar</h1>
      </div>

      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className='calendar-footer'>
        <p>
          <span>Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default CalendarComponent;
