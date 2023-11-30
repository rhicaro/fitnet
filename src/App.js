// This is for the proof of concept first where I am trying to make a scrollable media feed of pictures and videos that the user can add on to or delete

import React, { useState, useRef } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from './pages/home/Home.js';
import AccountScreen from './pages/account/AccountScreen.js';
import Calendar from './pages/calendar/Calendar.js';
import Message from './pages/message/Message.js';
import Preferences from './pages/perferences/Preference.js';
import About from './pages/about/about.js';
import Settings from './pages/settings/Settings.js';
import Login from './pages/authentication/Login.js';


function App(){

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
                        exact
                        path="/AccountScreen"
                        element={<AccountScreen />}
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
{/* 
                    <Route 
                        exact
                        path="/Login"
                        element={<Login />}
                    /> */}


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
