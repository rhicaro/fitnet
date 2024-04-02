import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Updated import
import axios from 'axios';
import '../styles/SignUpComponent.css';

const SignUpComponent = ({ switchToLogin }) => {
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
  const history = useHistory(); // Initialize useHistory hook

  const generateUserId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
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

    console.log(userData);

    try {
      const response = await axios.post('http://localhost:5001/api/userdemographics/register', userData); // Updated endpoint to match server route
      console.log('Registration successful');
      console.log(response);
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Error registering user. Please try again.');
    }
  };

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
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="activity">Main Activity:</label>
            <input
              type="activity"
              id="mainActivity"
              value={mainActivity}
              onChange={(e) => setMainActivity(e.target.value)}
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
              onChange={(e) => setLocation(e.target.value)}
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
