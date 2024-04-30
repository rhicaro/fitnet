import React, { useState, useEffect } from 'react';
import '../stylesV2/AccountCard.css';
import Unknown from '../assets/unknown.png';
import axios from 'axios';

function AccountCard({ account, handleClick, isSelected, accountFirstName, accountLastname }) {
    const { first_name, last_name, user_location, user_activity, user_sex, user_price } = account;
    const [userAccountInfo, setUserAccountInfo] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
        .then(response => {
            setUserAccountInfo(response.data[0]);
        })
        .catch(error => {
            console.error('Error fetching user demographics:', error);
        });
    }, [first_name, last_name]);

    return (
        <div className={`profile-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            <div className="profile-info">
                {userAccountInfo ? (
                    <img 
                        src={userAccountInfo.user_pfp || Unknown} 
                        height={60} 
                        width={60} 
                        alt={`${first_name} ${last_name}`}
                        style={{marginRight:'10px'}} 
                    />
                ) : (
                    <img 
                        src={Unknown} 
                        height={60} 
                        width={60} 
                        alt={`${first_name} ${last_name}`}
                        style={{marginRight:'10px'}} 
                    />
                )}
                <div className='profile-info-basics'>    
                    <ul>
                        <li><span className="first-name">{first_name}</span>
                        <span className="last-name">{last_name}</span></li>
                        <li><span className="info-item">{`Location: ${user_location}`}</span>
                        <span className="info-item">{`Activity: ${user_activity}`}</span></li>
                        <li><span className="info-item">{`Sex: ${user_sex}`}</span>
                        <span className="info-item">{`Price: $${user_price} /hr`}</span></li>
                    </ul>
                </div>            
            </div>
        </div>
    );
}

export default AccountCard;
