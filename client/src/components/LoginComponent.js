import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesV2/LoginComponent.css';

/**
 * Represents a component for user login.
 * @param {function} updateAccountInfo - A function to update the account information after successful login.
 * @returns {JSX.Element} - The rendered LoginComponent.
 */
const LoginComponent = ({ updateAccountInfo }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSucces] = useState(false);

  /**
   * Handles the login form submission.
   * @param {Event} e - The form submit event.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/userdemographics/login/' + username, {
        user_password: password
      });
      console.log('Logged in successfully:', response.data);
      console.log('First name: ', response.data.user.first_name);
      setLoginSucces(true);
      updateAccountInfo(username, true, response.data.user.first_name, response.data.user.last_name, response.data.user.user_status);
  
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Username or password is incorrect. Please try again.');
    }
  };

  if (loginSuccess) {
    return <Navigate to='/' />
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-input">
          <label className='login-label'>Username:</label>
          <input
            type="text"
            className="username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        
          <div className="password_input">
            <label className='password-label'>Password:</label>
            <input
              type="password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='btns'>
          <button type="submit" className="login_btn">
              Login
          </button>

          <Link to="/SignUp">
            <button type="button" className='signup_btn'>
                Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
