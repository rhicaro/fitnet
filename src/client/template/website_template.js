import React from 'react';
import LinkColumn from './LinkColumn';
import { Link, link } from 'react-router-dom';
// import css
/* JS File is mainly to copy over to new web pages. Will Delete later */

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

            </div>
        </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default AccountScreen;