import React, { useState } from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link, link } from 'react-router-dom';
import '../styles/Settings.css';
import UserList from '../components/UserList';

function Settings() {
    const [selectedAccount, setSelectedAccount] = useState(null);

    return (
        <div className='fitnet'>
        <div className='header'>
            <Link to="/" className='header_title'>FitNet</Link>
            <Link to="/Login" className='header_login'>Login / Register</Link>
        </div>

        <div className='content'>
            <LinkColumn />

            <div className='main'>
                <p>Work in Progress</p>
            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default Settings;