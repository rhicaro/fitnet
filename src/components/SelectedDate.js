// SelectedDate.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/SelectedDate.css"; // Import your custom styles

//This is the selected date component right under the calendar component to create and delete appointments

function SelectedDate({ selectedDate, onAddAppointment, onDeleteAppointment }) {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState("");

  const handleAddAppointment = () => {
    if (selectedDate && appointment.trim() !== "") {
      const newAppointment = `${selectedDate.toDateString()}: ${appointment}`;
      onAddAppointment(selectedDate, newAppointment);
      setAppointments([...appointments, newAppointment]);
      setAppointment("");
    }
  };

  const handleDeleteAppointment = (index) => {
    if (selectedDate) {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
      onDeleteAppointment(selectedDate, index);
    }
  };

  return (
    <div className="selected-date-container">
      <div className="appointment-input">
        <input
          type="text"
          placeholder="Enter appointment"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
        />
        <button onClick={handleAddAppointment} className="add-button">
          Add Appointment
        </button>
      </div>

      <div className="appointment-list">
        <h3>Appointments:</h3>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <button
                onClick={() => handleDeleteAppointment(index)}
                className="delete-button"
              >
                Delete
              </button>
              {appointment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SelectedDate.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onAddAppointment: PropTypes.func.isRequired,
  onDeleteAppointment: PropTypes.func.isRequired,
};

export default SelectedDate;
