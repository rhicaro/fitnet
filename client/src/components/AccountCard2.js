// AccountCard.js
import React from 'react';
import '../styles/AccountCard.css';
import Unknown from '../assets/unknown.png'

function AccountCard({ account, handleClick, isSelected }) {
    const { first_name, last_name, user_location, user_activity, user_sex, user_price } = account;

    return (
        <div className={`profile-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            <div className="profile-info">
                <img src={Unknown} height={100} width={100} alt={`${first_name} ${last_name}`} />
                <p>    
                    <span className="first-name">{first_name}</span>
                    <span className="last-name">{last_name}</span>
                    <span className="info-item">{`Location: ${user_location}`}</span>
                    <span className="info-item">{`Activity: ${user_activity}`}</span>
                    <span className="info-item">{`Sex: ${user_sex}`}</span>
                    <span className="info-item">{`Price: $${user_price} /hr`}</span>
                </p>            
            </div>
        </div>
    );
}

export default AccountCard;
