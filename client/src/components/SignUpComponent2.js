import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUpComponent2.css';

const SignUpComponent2 = ({ switchToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mainActivity, setMainActivity] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering Trainer with:', { firstName, lastName, username, password, email, phoneNumber, 
        mainActivity, gender, price, monday, tuesday, wednesday ,thursday, friday, saturday, sunday});
  };

  return (
    <div className="register-container">
      <h2>Trainer Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className='inputs'>
            {/* inputs1 and inputs2 aare suppose to seperate into two columns of user inputs. Wasn't able to get working properly */}
            <div className='inputs1'>
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
            <div className='inputs2'>
                <div className="input-group">
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="monday">Monday:</label>
                    <input
                    type="text"
                    id="monday"
                    value={monday}
                    onChange={(e) => setMonday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="tuesday">Tuesday:</label>
                    <input
                    type="text"
                    id="tuesday"
                    value={tuesday}
                    onChange={(e) => setTuesday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="wednesday">Wednesday:</label>
                    <input
                    type="text"
                    id="wednesday"
                    value={wednesday}
                    onChange={(e) => setWednesday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="thursday">Thursday:</label>
                    <input
                    type="text"
                    id="thursday"
                    value={thursday}
                    onChange={(e) => setThursday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="friday">friday:</label>
                    <input
                    type="text"
                    id="friday"
                    value={friday}
                    onChange={(e) => setFriday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="saturday">Saturday:</label>
                    <input
                    type="text"
                    id="saturday"
                    value={saturday}
                    onChange={(e) => setSaturday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="sunday">Sunday:</label>
                    <input
                    type="text"
                    id="sunday"
                    value={sunday}
                    onChange={(e) => setSunday(e.target.value)}
                    placeholder="HH:MM - HH:MM AM/PM"
                    required
                    />
                </div>
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

        <div className='signup'>
            <p>Want to sign up as a client?</p>

            <Link to="/SignUp">
                <button type='submit' className='return-btn'>
                    <span className="switch-link" onClick={switchToLogin}>
                        Client Sign Up
                    </span>
                </button>
            </Link>
        </div>
      </div>

    </div>
  );
};

export default SignUpComponent2;
