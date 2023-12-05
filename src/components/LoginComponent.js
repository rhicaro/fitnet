import React, { useState } from 'react';
import { Link, link } from 'react-router-dom';

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
        <button type="submit" className="login-btn">
            Login
        </button>
        <button type="submit" className='signup-btn'>
            <Link to="/SignUp">Register here</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
