import React from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link, link } from 'react-router-dom';
import '../styles/Settings.css';
/* JS File is mainly to copy over to new web pages. Will Delete later */

function settings() {
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

export default settings;