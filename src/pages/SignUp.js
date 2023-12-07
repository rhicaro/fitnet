import React from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link, link } from 'react-router-dom';
import '../styles/SignUp.css';
import SignUpComponent from '../components/SignUpComponent';

//This is the sign up page

function SignUp() {
    return (
        <div className='fitnet'>
        <div className='header'>
            <Link to="/" className='header_title'>FitNet</Link>
        </div>

        <div className='content'>
            <LinkColumn />

            <div className='main'>
                <div className='signup-main'>
                    <SignUpComponent />
                </div>
            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default SignUp;