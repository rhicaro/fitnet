import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Import Axios for making HTTP requests
import "../styles/SelectedDate.css";

function SelectedDate({ selectedDate, onAddAppointment, onDeleteAppointment, accountPresent, accountFirstName, accountLastName, accountType }) {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState("");

  useEffect(() => {
    // Function to fetch appointments based on user's first name and last name
    axios.get(`http://localhost:5001/api/userschedule/${accountFirstName}/${accountLastName}`) //This does not connect (404)
      .then(response => {
        console.log('Schedule found:', response.data);
        setAppointments(response.data); // Update appointments state with fetched data
      })
      .catch(error => {
        console.log('Error fetching schedule:', error);
      });
  }, [accountFirstName, accountLastName]); // Add accountFirstName and accountLastName to the dependency array

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
