import React from 'react';
import './AccountCard.css';

function AccountCard({ account }) {
    const { firstName, lastName, location, activity, sex, imgUrl } = account;

    return (
        <div className="profile-card">
            <div className="profile-info">
                <p>
                    <img src={imgUrl} height={50} width={50} alt={`${firstName} ${lastName}`} />
                    <span className="first-name">{firstName}</span>
                    <span className="last-name">{lastName}</span>
                    <span className="info-item">{`Location: ${location}`}</span>
                    <span className="info-item">{`Activity: ${activity}`}</span>
                    <span className="info-item">{`Sex: ${sex}`}</span>
                </p>            
            </div>
        </div>
    );
}

export default AccountCard;
