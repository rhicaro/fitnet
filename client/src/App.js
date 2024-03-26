import React, { useState, useRef } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from './pages/Home.js';
import AccountScreen from './pages/AccountScreen.js';
import Calendar from './pages/Calendar.js';
import Message from './pages/Message.js';
import Preferences from './pages/Preference.js';
import About from './pages/About.js';
import Settings from './pages/Settings.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';

// import accounts from './components/Data';


function App(){

    const userDemographics = [];

    return (
        <div className="fitnet">
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home/>}
                    />

                    <Route 
                        path="/AccountScreen/:first_name/:last_name" 
                        element={<AccountScreen />} 
                        accounts={userDemographics}
                    />

                    <Route 
                        exact
                        path="/Calendar"
                        element={<Calendar />}
                    />

                    <Route 
                        exact
                        path="/Messages"
                        element={<Message />}
                    />

                    <Route 
                        exact
                        path="/About"
                        element={<About />}
                    />

                    <Route 
                        exact
                        path="/Settings"
                        element={<Settings />}
                    />

                    <Route 
                        exact
                        path="/Login"
                        element={<Login />}
                    />

                    <Route
                        exact
                        path="/SignUp"
                        element={<SignUp />}
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
