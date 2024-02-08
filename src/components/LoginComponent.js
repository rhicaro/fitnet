import React, { useState } from 'react';
import { Link, link } from 'react-router-dom';
import '../styles/LoginComponent.css';
//This is the login component of the login page

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
    // You would typically send a request to your server for authentication
  };

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
            <button type="submit" className='signup_btn'>
                Sign Up
            </button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default LoginScreen;
