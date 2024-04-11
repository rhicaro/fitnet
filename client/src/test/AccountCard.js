// AccountCard.js
import React from 'react';
import '../styles/AccountCard.css';

//This is a component for the account card seen on the home page

function AccountCard({ account, handleClick, isSelected }) {
    const { firstName, lastName, location, activity, sex, imgUrl, price, bio} = account;

    return (
        <div className={`profile-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            <div className="profile-info">
                <img src={imgUrl} height={100} width={100} alt={`${firstName} ${lastName}`} />
                <p>    
                    <span className="first-name">{firstName}</span>
                    <span className="last-name">{lastName}</span>
                    <span className="info-item">{`Location: ${location}`}</span>
                    <span className="info-item">{`Activity: ${activity}`}</span>
                    <span className="info-item">{`Sex: ${sex}`}</span>
                    <span className="info-item">{`Price: $${price} /hr`}</span>
                </p>            
            </div>
        </div>
    );
}

export default AccountCard;
