import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignUpComponent.css';

const SignUpComponent = ({ switchToLogin, updateAccountInfo }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mainActivity, setMainActivity] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const generateUserId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setLastName(value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value) || value === '') {
      setPhoneNumber(value);
    }
  };

  const handleMainActivityChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setMainActivity(value);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z, ]+$/.test(value) || value === '') {
      setLocation(value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5001/api/userdemographics/${firstName}/${lastName}`);
      const response2 = await axios.get(`http://localhost:5001/api/userdemographics/${username}`);
      if (response.data.length > 0) {
        alert('An account with the same first name, last name already exists please enter a different one.');
      } else if (response2.data.length > 0) {
        alert('An account with the same username already exists please enter a different one');
      } else if (response.data.length > 0 && response2.data.length > 0){
        alert('An account with the same first name, last name, and user name already exists please enter a different one.');
      } else {
        const userData = {
          user_id: generateUserId(),
          first_name: firstName,
          last_name: lastName,
          user_username: username,
          user_password: password,
          user_email: email,
          user_phone: phoneNumber,
          user_activity: mainActivity,
          user_sex: gender,
          user_location: location,
          user_status: "Client",
          user_price: 0,
          user_bio: "None",
          monday: "None",
          tuesday: "None",
          wednesday: "None",
          thursday: "None",
          friday: "None",
          saturday: "None",
          sunday: "None"
        };
        const response = await axios.post('http://localhost:5001/api/userdemographics/register', userData);
        console.log('Registration successful');
        updateAccountInfo(username, true, firstName, lastName, "Client");
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Error registering user. Please try again.');
    }
  };

  if (registrationSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div className="register-container">
      <h2>Client Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className='inputs'>
        <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder='example@gmail.com'
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="activity">Main Activity:</label>
            <input
              type="activity"
              id="mainActivity"
              value={mainActivity}
              onChange={handleMainActivityChange}
              placeholder="Basketball"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="location">Location:</label>
            <input
              type="location"
              id="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="City, State"
              required
            />
          </div>
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>

      <div className='switch-btns'>
        <div className='return'>
          <p>Already have an account?</p>

          <Link to="/Login">
            <button type='submit' className='return-btn'>
                <span className="switch-link" onClick={switchToLogin}>
                    Return
                </span>
            </button>
          </Link>
        </div>

        <div className='signup2'>
          <p>Want to sign up as a Trainer?</p>

          <Link to="/SignUp2">
            <button type='submit' className='return-btn'>
              <span className='switch-link'>
                Trainer Sign Up
              </span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SignUpComponent;
