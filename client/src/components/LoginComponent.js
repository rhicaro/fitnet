import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'; // corrected import statement
import '../styles/LoginComponent.css';

const LoginComponent = ({ updateAccountInfo }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSucces] = useState(false);

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
        <div className="username_input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="password_input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
