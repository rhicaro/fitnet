import React, { useEffect,useState } from 'react';
import '../styles/AccountScreen.css';
import LinkColumn from '../template/LinkColumn';
import { Link, useParams } from 'react-router-dom';
import MediaFeed from '../components/MediaFeed';
import userpfp from '../assets/unknown.png';
import axios from 'axios';

// Current account information is properly passed over to this page similar to the home page.
function AccountScreen({accountPresent, accountFirstName, accountLastName, accountType}) {
    const [userAccountInfo, setUserAccountInfo] = useState([]);
    const [viewedFirst, setViewedFirst] = useState('');
    const [viewedLast, setViewedLast] = useState('');
    const { first_name, last_name } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
        .then(response => {
            console.log("Response Data:", response.data);
            setUserAccountInfo(response.data[0]);
            setViewedFirst(response.data[0].first_name);
            setViewedLast(response.data[0].last_name);
        })
        .catch(error => {
            console.error('Error fetching user account:', error);
        });
    }, [first_name, last_name]);

    const handleEdit = () => {

    }

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
                        {userAccountInfo && (
                            <img src={userpfp} width={200} height={200} className='account_img'></img>
                        )}
                    </div>
    
                    <div className='account_body'>
                        <div className='section1'>
                            <div className='account_rates'>
                                <h1>Rate</h1>
                                <p>${userAccountInfo ? userAccountInfo.user_price : 'N/A'}/hr</p>
                            </div>
    
                            <div className='account_info_title'>
                                <h1>Information</h1>
                            </div>
    
                            <div className='account_info_basic'>
                                <ul>
                                    <li>Name: {userAccountInfo ? userAccountInfo.first_name + ' ' + userAccountInfo.last_name : 'N/A'}</li>
                                    <li>Location: {userAccountInfo ? userAccountInfo.user_location : 'N/A'}</li>
                                    <li>Activity: {userAccountInfo ? userAccountInfo.user_activity : 'N/A'}</li>
                                    <li>Sex: {userAccountInfo ? userAccountInfo.user_sex : 'N/A'}</li>
                                </ul>
                            </div>
    
                            <div className='account_info_bio'>
                                <p>
                                    {userAccountInfo ? userAccountInfo.user_bio : 'N/A'}
                                </p>
                            </div>
                        </div>
                        
                        <div className='section2'>
                            <div className='account_days'>
                                <h1>Availability</h1>
                                <ul>
                                    <li>Monday: {userAccountInfo ? userAccountInfo.monday : 'N/A'}</li>
                                    <li>Tuesday: {userAccountInfo ? userAccountInfo.tuesday : 'N/A'}</li>
                                    <li>Wednesday: {userAccountInfo ? userAccountInfo.wednesday : 'N/A'}</li>
                                    <li>Thursday: {userAccountInfo ? userAccountInfo.thursday : 'N/A'}</li>
                                    <li>Friday: {userAccountInfo ? userAccountInfo.friday : 'N/A'}</li>
                                    <li>Saturday: {userAccountInfo ? userAccountInfo.saturday : 'N/A'}</li>
                                    <li>Sunday: {userAccountInfo ? userAccountInfo.sunday : 'N/A'}</li>
                                </ul>
                            </div>
                            <div className='account_media_feed'>
                                <MediaFeed accountPresent={accountPresent} viewedAccountFirstName={viewedFirst} 
                                viewedAccountLastName={viewedLast} accountType={accountType} 
                                accountFirstName={accountFirstName} accountLastName={accountLastName}/>
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
