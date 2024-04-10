import React, { useState } from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link, link } from 'react-router-dom';
import '../styles/Login.css';
import LoginComponent from '../components/LoginComponent';

function Login({updateAccountInfo}) {
    return (
        <div className='fitnet'>
        <div className='header'>
            <Link to="/" className='header_title'>FitNet</Link>
        </div>

        <div className='content'>
            <LinkColumn />

            <div className='main'>
                <div className='login-main'>
                    <LoginComponent updateAccountInfo = {updateAccountInfo} />
                </div>
            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default Login;