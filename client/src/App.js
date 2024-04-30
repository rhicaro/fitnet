import React, { useState, useRef } from 'react';
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home2 from './pagesV2/Home2';
import AccountScreen2 from './pagesV2/AccountScreen2';
import Calendar2 from './pagesV2/Calendar2';
import About2 from './pagesV2/About2';
import Login2 from './pagesV2/Login2';
import SignUpV2 from './pagesV2/SignUpV2';
import SignUp2V2 from './pagesV2/SignUp2V2';

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
                        element={<Home2 
                        updateAccountInfo={updateAccountInfo} 
                        accountPresent={accountPresent} 
                        accountFirstName={accountFirstName} 
                        accountLastName={accountLastName} 
                        accountType={accountType}/>}
                    />

                    <Route 
                        path="/AccountScreen/:first_name/:last_name" 
                        element={<AccountScreen2 
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
                        element={<Calendar2 
                            updateAccountInfo={updateAccountInfo} 
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}/>}
                    />

                    <Route 
                        exact
                        path="/About"
                        element={<About2 
                            updateAccountInfo={updateAccountInfo} 
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}
                        />}
                    />

                    <Route 
                        exact
                        path="/Login"
                        element = {<Login2
                            updateAccountInfo={updateAccountInfo}
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}
                        />}
                    />

                    <Route
                        exact
                        path="/SignUp"
                        element={<SignUpV2 
                            updateAccountInfo={updateAccountInfo}
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}
                        />}
                    />

                    <Route 
                        exact
                        path="/SignUp2"
                        element={<SignUp2V2 
                            updateAccountInfo={updateAccountInfo}
                            accountPresent={accountPresent} 
                            accountFirstName={accountFirstName} 
                            accountLastName={accountLastName} 
                            accountType={accountType}
                        />}
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
