import React, { useState } from "react";
import Calendar from "react-calendar";
import "../stylesV2/CalendarComponent.css";

/**
 * Functional component representing a calendar.
 * Allows users to select dates.
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {Function} props.onDateChange - Callback function to handle date changes.
 */
function CalendarComponent({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  /**
   * Handles date change events.
   * Updates the state with the new date and propagates the change to the parent component.
   * @function
   * @param {Date} newDate - The new selected date.
   */
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
        <Calendar 
          onChange={handleDateChange} 
          value={date} 
        />
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
