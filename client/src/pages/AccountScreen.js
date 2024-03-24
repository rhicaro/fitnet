import React from 'react';
import '../styles/AccountScreen.css';
import LinkColumn from '../template/LinkColumn';
import { Link, useParams } from 'react-router-dom';
import MediaFeed from '../components/MediaFeed';
import userpfp from '../assets/unknown.png';

function AccountScreen({ accounts }) {
    const { firstName } = useParams();

    // Use firstName to find the corresponding account
    // This assumes that each account has a unique first name
    // You may need to modify this based on your data structure
    const selectedAccount = accounts.find(account => account.firstName === firstName);
    console.log(selectedAccount);

    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <Link to="/Login" className='header_login'>Login / Register</Link>
            </div>

            <div className='content'>
                <LinkColumn />

                <div className='main'>
                        <div className='account_head'>
                            <img src={userpfp} width={200} height={200} className='account_img' alt={selectedAccount.firstName}></img>
                        </div>

                        <div className='account_body'>
                            <div className='section1'>
                                <div className='account_rates'>
                                    <h1>Rate</h1>
                                    <p>${selectedAccount.user_price}/hr</p>
                                </div>

                                <div className='account_info_title'>
                                    <h1>Information</h1>
                                </div>

                                <div className='account_info_basic'>
                                    <ul>
                                        <li>Name: {selectedAccount.first_name} {selectedAccount.last_name}</li>
                                        <li>Location: {selectedAccount.user_location}</li>
                                        <li>Activity: {selectedAccount.user_activity}</li>
                                        <li>Sex: {selectedAccount.user_sex}</li>
                                    </ul>
                                </div>

                                <div className='account_info_bio'>
                                    <p>
                                        {selectedAccount.user_bio}
                                    </p>
                                </div>
                            </div>
                            
                            <div className='section2'>
                                <div className='account_days'>
                                    <h1>Availibility</h1>
                                    <ul>
                                        <li>Monday: {selectedAccount.monday}</li>
                                        <li>Tuesday: {selectedAccount.tuesday}</li>
                                        <li>Wednesday: {selectedAccount.wednesday}</li>
                                        <li>Thursday: {selectedAccount.thursday}</li>
                                        <li>Friday: {selectedAccount.friday}</li>
                                        <li>Saturday: {selectedAccount.saturday}</li>
                                        <li>Sunday: {selectedAccount.sunday}</li>
                                    </ul>
                                </div>
                                <div className='account_media_feed'>
                                    {/* Should Update The media feed */}
                                    <MediaFeed />
                                </div>
                            </div>                 
                        </div>
                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>
    );
}

export default AccountScreen;
