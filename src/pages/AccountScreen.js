import React from 'react';
import '../styles/AccountScreen.css';
import LinkColumn from '../template/LinkColumn';
import { Link } from 'react-router-dom';

function AccountScreen() {
    return (
        <div className='fitnet'>
        <div className='header'>
            <Link to="/" className='header_title'>FitNet</Link>
            <Link to="/Login" className='header_login'>Login / Register</Link>
        </div>

        <div className='content'>
            <LinkColumn />

            <div className='main'>
                <p>This will be the Account Screen Site of the web</p>
            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default AccountScreen;