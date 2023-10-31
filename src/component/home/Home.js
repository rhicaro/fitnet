import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='fitnet'>
            <div className='header'>
                <h1 className='header_title'>FitNet</h1>
                <a href='?'><p className='header_login'>Login / Register</p></a>
            </div>

            <div className='content'>
                <div className='link_column'>
                <ul>
                    <li><a href="?">Home</a></li>
                    <li><a href="?">Profile</a></li>
                    <li><a href="?">Calendar</a></li>
                    <li><a href="?">Messages</a></li>
                    <li><a href="?">Preferences</a></li>
                    <li><a href="?">About Us</a></li>
                    <li><a href="?">Settings</a></li>
                    <li><a href='?'>Login</a></li>
                </ul>
                </div>

                <div className='main'>
                    <div className='main_feed_title'>
                        <h2>Trainers</h2>
                    </div>
                    
                    <div className='main_feed'>
                        {/* This is where the trainer feed will live */}
                        <h2>This is where the trainer feed will live</h2>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;