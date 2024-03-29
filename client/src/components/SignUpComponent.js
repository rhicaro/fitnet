import React, { useState } from 'react';
import { Link, link } from 'react-router-dom';
import '../styles/SignUpComponent.css';

//This is the sign up component that is shown on the register page

const SignUpComponent = ({ switchToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mainActivity, setMainActivity] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering with:', { firstName, lastName, username, password, email, phoneNumber });
    // You would typically send a request to your server for registration
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
