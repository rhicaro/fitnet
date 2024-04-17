import React, { useState, useRef } from 'react';
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from './pages/Home.js';
import AccountScreen from './pages/AccountScreen.js';
import Calendar from './pages/Calendar.js';
// import Message from './pages/Message.js';
// import Preferences from './pages/Preference.js';
import About from './pages/About.js';
// import Settings from './pages/Settings.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import SignUp2 from './pages/SignUp2.js';

function App(){
    //Need to refactor code to exclude currentAccount
    const [currentAccount, setCurrentAccount] = useState(Cookies.get('currentAccount') || '');
    const [accountPresent, setAccountPresent] = useState(Cookies.get('accountPresent') || false);
    const [accountFirstName, setAccountFirstName] = useState(Cookies.get('accountFirstName') || '');
    const [accountLastName, setAccountLastName] = useState(Cookies.get('accountLastName') || '');
    const [accountType, setAccountType] = useState(Cookies.get('accountType') || '');
    const userDemographics = [];

    const updateAccountInfo = (account, present, first, last, type) => {
        setCurrentAccount(account);
        setAccountPresent(present);
        setAccountFirstName(first);
        setAccountLastName(last);
        setAccountType(type);

        Cookies.set('currentAccount', account);
        Cookies.set('accountPresent', present);
        Cookies.set('accountFirstName', first);
        Cookies.set('accountLastName', last);
        Cookies.set('accountType', type);
    };

    return (
        <div className="fitnet">
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home 
                        updateAccountInfo={updateAccountInfo} 
                        accountPresent={accountPresent} 
                        accountFirstName={accountFirstName} 
                        accountLastName={accountLastName} 
                        accountType={accountType}/>}
                    />

                    <Route 
                        path="/AccountScreen/:first_name/:last_name" 
                        element={<AccountScreen 
                            updateAccountInfo={updateAccountInfo} 
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}/>} 
                            accounts={userDemographics}
                    />

                    <Route 
                        exact
                        path="/Calendar"
                        element={<Calendar 
                            updateAccountInfo={updateAccountInfo} 
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}/>}
                    />
                    {/* idk if I will keep might be too much */}
                    {/* <Route 
                        exact
                        path="/Messages"
                        element={<Message />}
                    /> */}

                    <Route 
                        exact
                        path="/About"
                        element={<About 
                            updateAccountInfo={updateAccountInfo} 
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}
                        />}
                    />

                    {/* <Route 
                        exact
                        path="/Settings"
                        element={<Settings />}
                    /> */}

                    <Route 
                        exact
                        path="/Login"
                        element = {<Login updateAccountInfo={updateAccountInfo}/>}
                    />

                    <Route
                        exact
                        path="/SignUp"
                        element={<SignUp updateAccountInfo={updateAccountInfo}/>}
                    />

                    <Route 
                        exact
                        path="/SignUp2"
                        element={<SignUp2 updateAccountInfo={updateAccountInfo}/>}
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
