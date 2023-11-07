import React from 'react';
import './Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from './../template/LinkColumn';

//This is for the prototype
import HomeFeed from './../feeds/HomeFeed';


function Home() {
    //This is a test data for the prototype

    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <Link to="/Login" className='header_login'>Login / Register</Link>
            </div>

            <div className='content'>
                
                <LinkColumn />

                <div className='main'>
                    <div className='main_feed_title'>
                        <h2>Trainers</h2>
                    </div>
                    
                    <div className='main_feed'>
                        {/* This is where the trainer feed will live */}
                        <HomeFeed />
                    </div>

                        <Link to="/AccountScreen"><div className='main_feed_btn'>Visit Account</div></Link>
                    
                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;