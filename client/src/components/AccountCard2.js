// AccountCard.js
import React from 'react';
import '../stylesV2/AccountCard.css';
import Unknown from '../assets/unknown.png';

function AccountCard({ account, handleClick, isSelected }) {
    const { first_name, last_name, user_location, user_activity, user_sex, user_price } = account;

    return (
        <div className={`profile-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            <div className="profile-info">
                <img src={Unknown} height={75} width={75} alt={`${first_name} ${last_name}`} />
                <p>    
                    <ul>
                    <li><span className="first-name">{first_name}</span>
                    <span className="last-name">{last_name}</span></li>
                    <li><span className="info-item">{`Location: ${user_location}`}</span>
                    <span className="info-item">{`Activity: ${user_activity}`}</span></li>
                    <li><span className="info-item">{`Sex: ${user_sex}`}</span>
                    <span className="info-item">{`Price: $${user_price} /hr`}</span></li>
                    </ul>
                </p>            
            </div>
        </div>
    );
}

export default AccountCard;
