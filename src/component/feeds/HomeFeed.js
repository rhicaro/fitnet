import React from 'react';
import AccountCard from '../tests/AccountCard';

function HomeFeed({ accounts }) {
    return (
        <div className="profile-feed">
            {accounts.map((account, index) => (
                <AccountCard account={account} key={index} />
            ))}
        </div>
    );
}

export default HomeFeed;
