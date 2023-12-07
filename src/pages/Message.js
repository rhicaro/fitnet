import React from 'react';
import LinkColumn from '../template/LinkColumn';
import { Link } from 'react-router-dom';
import '../styles/Message.css';
import MessagComponent from '../components/MessageComponent';

//This is the message page || Still in the works

function Message() {
    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <Link to="/Login" className='header_login'>Login / Register</Link>
            </div>

            <div className='content'>
                <LinkColumn />

                <div className='main'>
                    <div className='message-main'>
                        <MessagComponent />
                    </div>
                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    )
}

export default Message;