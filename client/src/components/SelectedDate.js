import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Import Axios for making HTTP requests
import "../styles/SelectedDate.css";

function SelectedDate({ selectedDate, onAddAppointment, onDeleteAppointment, accountPresent, accountFirstName, accountLastName, accountType }) {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState("");

  useEffect(() => {
    // Function to fetch appointments based on user's first name and last name
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`/api/userschedule/${accountFirstName}/${accountLastName}`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    // Check if account is present and fetch appointments if present
    if (accountPresent && accountFirstName && accountLastName) {
      fetchAppointments();
    }
  }, [selectedDate, accountPresent, accountFirstName, accountLastName]); // Dependency array to trigger effect when any of these values change

  const handleAddAppointment = () => {
    if (selectedDate && appointment.trim() !== "") {
      const newAppointment = `${selectedDate.toDateString()}: ${appointment}`;
      onAddAppointment(selectedDate, newAppointment);
      setAppointments([...appointments, { user_date: selectedDate.toDateString(), user_notes: appointment }]);
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
      <div className="appointment-body">
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
                {appointment.user_date}: {appointment.user_notes}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SelectedDate.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onAddAppointment: PropTypes.func.isRequired,
  onDeleteAppointment: PropTypes.func.isRequired,
  accountPresent: PropTypes.string,
  accountFirstName: PropTypes.string,
  accountLastName: PropTypes.string,
  accountType: PropTypes.string
};

export default SelectedDate;
