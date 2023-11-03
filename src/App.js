// This is for the proof of concept first where I am trying to make a scrollable media feed of pictures and videos that the user can add on to or delete

import React, { useState, useRef } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from './component/home/Home.js';
import AccountScreen from './component/account/AccountScreen.js';
import Calendar from './component/calendar/calendar.js';
import Message from './component/message/Message.js';
import Preferences from './component/perferences/Preference.js';
import About from './component/about/about.js';
import Settings from './component/settings/settings.js';
import Login from './component/authentication/Login.js';


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
