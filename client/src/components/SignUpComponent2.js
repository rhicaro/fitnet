import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignUpComponent2.css';

const SignUpComponent2 = ({ switchToLogin, updateAccountInfo }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mainActivity, setMainActivity] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

//   Need to fix the hours inputs, show up as nothing when clicking checkbox creating the alert
  const [mondayHour, setMondayHour] = useState('');
  const [mondayHour2, setMondayHour2] = useState('');
  const [mondayPeriod, setMondayPeriod] = useState('');

  const [tuesdayHour, setTuesdayHour] = useState('');
  const [tuesdayHour2, setTuesdayHour2] = useState('');
  const [tuesdayPeriod, setTuesdayPeriod] = useState('');

  const [wednesdayHour, setWednesdayHour] = useState('');
  const [wednesdayHour2, setWednesdayHour2] = useState('');
  const [wednesdayPeriod, setWednesdayPeriod] = useState('');

  const [thursdayHour, setThursdayHour] = useState('');
  const [thursdayHour2, setThursdayHour2] = useState('');
  const [thursdayPeriod, setThursdayPeriod] = useState('');

  const [fridayHour, setFridayHour] = useState('');
  const [fridayHour2, setFridayHour2] = useState('');
  const [fridayPeriod, setFridayPeriod] = useState('');

  const [saturdayHour, setSaturdayHour] = useState('');
  const [saturdayHour2, setSaturdayHour2] = useState('');
  const [saturdayPeriod, setSaturdayPeriod] = useState('');

  const [sundayHour, setSundayHour] = useState('');
  const [sundayHour2, setSundayHour2] = useState('');
  const [sundayPeriod, setSundayPeriod] = useState('');

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

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,3}$/.test(value) || value === '') {
            setPrice(value);
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
                    user_status: "Trainer",
                    user_price: price,
                    user_bio: "None",
                    monday: mondayHour && mondayHour2 && mondayPeriod ? `${mondayHour}:00 - ${mondayHour2}:00 ${mondayPeriod}` : "None",
                    tuesday: tuesdayHour && tuesdayHour2 && tuesdayPeriod ? `${tuesdayHour}:00 - ${tuesdayHour2}:00 ${tuesdayPeriod}` : "None",
                    wednesday: wednesdayHour && wednesdayHour2 && wednesdayPeriod ? `${wednesdayHour}:00 - ${wednesdayHour2}:00 ${wednesdayPeriod}` : "None",
                    thursday: thursdayHour && thursdayHour2 && thursdayPeriod ? `${thursdayHour}:00 - ${thursdayHour2}:00 ${thursdayPeriod}` : "None",
                    friday: fridayHour && fridayHour2 && fridayPeriod ? `${fridayHour}:00 - ${fridayHour2}:00 ${fridayPeriod}` : "None",
                    saturday: saturdayHour && saturdayHour2 && saturdayPeriod ? `${saturdayHour}:00 - ${saturdayHour2}:00 ${saturdayPeriod}` : "None",
                    sunday: sundayHour && sundayHour2 && sundayPeriod ? `${sundayHour}:00 - ${sundayHour2}:00 ${sundayPeriod}` : "None",
                };
            const response = await axios.post('http://localhost:5001/api/userdemographics/register', userData);
            console.log('Registration successful');
            updateAccountInfo(username, true, firstName, lastName, "Trainer");
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
                        placeholder='Basketball'
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
                        placeholder='Boston, MA'
                        required
                        />
                    </div>
                </div>
                    
                <div className='inputs2'>
                    <div className="input-group">
                        <label htmlFor="price">Price:</label>
                        <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={handlePriceChange}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="monday">Monday:</label>
                        <div className="time-select">
                            <select
                                id="mondayHour"
                                value={mondayHour}
                                onChange={(e) => {
                                    setMondayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="mondayHour2"
                                value={mondayHour2}
                                onChange={(e) => {
                                    setMondayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="mondayPeriod"
                                value={mondayPeriod}
                                onChange={(e) => {
                                    setMondayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match monday*/}
                            <input
                                type="checkbox"
                                id="mondayNone"
                                checked={!mondayHour && !mondayHour2 && !mondayPeriod}
                                onChange={(e) => {
                                    if (!mondayHour && !mondayHour2 && !mondayPeriod) {
                                        setMondayHour("12");
                                        setMondayHour2("12");
                                        setMondayPeriod("AM");
                                    } else if (mondayHour || mondayHour2 || mondayPeriod){
                                        setMondayHour("");
                                        setMondayHour2("");
                                        setMondayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="mondayNone">None</label>
                        </div>
                    </div>


                    <div className="input-group">
                        <label htmlFor="tuesday">Tuesday:</label>
                        <div className="time-select">
                            <select
                                id="tuesdayHour"
                                value={tuesdayHour}
                                onChange={(e) => {
                                    setTuesdayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="tuesdayHour2"
                                value={tuesdayHour2}
                                onChange={(e) => {
                                    setTuesdayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="tuesdayPeriod"
                                value={tuesdayPeriod}
                                onChange={(e) => {
                                    setTuesdayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match tuesday*/}
                            <input
                                type="checkbox"
                                id="tuesdayNone"
                                checked={!tuesdayHour && !tuesdayHour2 && !tuesdayPeriod}
                                onChange={(e) => {
                                    if (!tuesdayHour && !tuesdayHour2 && !tuesdayPeriod) {
                                        setTuesdayHour("12");
                                        setTuesdayHour2("12");
                                        setTuesdayPeriod("AM");
                                    } else if (tuesdayHour || tuesdayHour2 || tuesdayPeriod){
                                        setTuesdayHour("");
                                        setTuesdayHour2("");
                                        setTuesdayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="tuesdayNone">None</label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="wednesday">Wednesday:</label>
                        <div className="time-select">
                            <select
                                id="wednesdayHour"
                                value={wednesdayHour}
                                onChange={(e) => {
                                    setWednesdayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="wednesdayHour2"
                                value={wednesdayHour2}
                                onChange={(e) => {
                                    setWednesdayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="wednesdayPeriod"
                                value={wednesdayPeriod}
                                onChange={(e) => {
                                    setWednesdayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match wednesday*/}
                            <input
                                type="checkbox"
                                id="wednesdayNone"
                                checked={!wednesdayHour && !wednesdayHour2 && !wednesdayPeriod}
                                onChange={(e) => {
                                    if (!wednesdayHour && !wednesdayHour2 && !wednesdayPeriod) {
                                        setWednesdayHour("12");
                                        setWednesdayHour2("12");
                                        setWednesdayPeriod("AM");
                                    } else if (wednesdayHour || wednesdayHour2 || wednesdayPeriod){
                                        setWednesdayHour("");
                                        setWednesdayHour2("");
                                        setWednesdayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="wednesdayNone">None</label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="thursday">Thursday:</label>
                        <div className="time-select">
                            <select
                                id="thursdayHour"
                                value={thursdayHour}
                                onChange={(e) => {
                                    setThursdayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="thursdayHour2"
                                value={thursdayHour2}
                                onChange={(e) => {
                                    setThursdayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="thursdayPeriod"
                                value={thursdayPeriod}
                                onChange={(e) => {
                                    setThursdayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match thursday*/}
                            <input
                                type="checkbox"
                                id="thursdayNone"
                                checked={!thursdayHour && !thursdayHour2 && !thursdayPeriod}
                                onChange={(e) => {
                                    if (!thursdayHour && !thursdayHour2 && !thursdayPeriod) {
                                        setThursdayHour("12");
                                        setThursdayHour2("12");
                                        setThursdayPeriod("AM");
                                    } else if (thursdayHour || thursdayHour2 || thursdayPeriod){
                                        setThursdayHour("");
                                        setThursdayHour2("");
                                        setThursdayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="thursdayNone">None</label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="friday">Friday:</label>
                        <div className="time-select">
                            <select
                                id="fridayHour"
                                value={fridayHour}
                                onChange={(e) => {
                                    setFridayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="fridayHour2"
                                value={fridayHour2}
                                onChange={(e) => {
                                    setFridayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="fridayPeriod"
                                value={fridayPeriod}
                                onChange={(e) => {
                                    setFridayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match friday*/}
                            <input
                                type="checkbox"
                                id="fridayNone"
                                checked={!fridayHour && !fridayHour2 && !fridayPeriod}
                                onChange={(e) => {
                                    if (!fridayHour && !fridayHour2 && !fridayPeriod) {
                                        setFridayHour("12");
                                        setFridayHour2("12");
                                        setFridayPeriod("AM");
                                    } else if (fridayHour || fridayHour2 || fridayPeriod){
                                        setFridayHour("");
                                        setFridayHour2("");
                                        setFridayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="fridayNone">None</label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="saturday">Saturday:</label>
                        <div className="time-select">
                            <select
                                id="saturdayHour"
                                value={saturdayHour}
                                onChange={(e) => {
                                    setSaturdayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="saturdayHour2"
                                value={saturdayHour2}
                                onChange={(e) => {
                                    setSaturdayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="saturdayPeriod"
                                value={saturdayPeriod}
                                onChange={(e) => {
                                    setSaturdayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match saturday*/}
                            <input
                                type="checkbox"
                                id="saturdayNone"
                                checked={!saturdayHour && !saturdayHour2 && !saturdayPeriod}
                                onChange={(e) => {
                                    if (!saturdayHour && !saturdayHour2 && !saturdayPeriod) {
                                        setSaturdayHour("12");
                                        setSaturdayHour2("12");
                                        setSaturdayPeriod("AM");
                                    } else if (saturdayHour || saturdayHour2 || saturdayPeriod){
                                        setSaturdayHour("");
                                        setSaturdayHour2("");
                                        setSaturdayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="saturdayNone">None</label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="sunday">Sunday:</label>
                        <div className="time-select">
                            <select
                                id="sundayHour"
                                value={sundayHour}
                                onChange={(e) => {
                                    setSundayHour(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <span>-</span>
                            <select
                                id="sundayHour2"
                                value={sundayHour2}
                                onChange={(e) => {
                                    setSundayHour2(e.target.value);
                                }}
                            >
                                <option value="">HH</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="sundayPeriod"
                                value={sundayPeriod}
                                onChange={(e) => {
                                    setSundayPeriod(e.target.value);
                                }}
                            >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            {/* For some reason clicking a value and then re clicking the checkbox 
                            turns the none value false and not true will fix later Need to update 
                            other days as well to match sunday*/}
                            <input
                                type="checkbox"
                                id="sundayNone"
                                checked={!sundayHour && !sundayHour2 && !sundayPeriod}
                                onChange={(e) => {
                                    if (!sundayHour && !sundayHour2 && !sundayPeriod) {
                                        setSundayHour("12");
                                        setSundayHour2("12");
                                        setSundayPeriod("AM");
                                    } else if (sundayHour || sundayHour2 || sundayPeriod){
                                        setSundayHour("");
                                        setSundayHour2("");
                                        setSundayPeriod("");
                                    }
                                }}
                            />
                            <label htmlFor="sundayNone">None</label>
                        </div>
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
