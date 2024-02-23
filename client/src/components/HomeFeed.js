// HomeFeed.js
import React from 'react';
import AccountCard from './AccountCard';

//This is the component for the homefeed made up of the account card

function HomeFeed({ accounts, selectedAccount, setSelectedAccount }) {
    const handleCardClick = (account) => {
        setSelectedAccount(account);
    }

    return (
        <div className="profile-feed">
            {accounts.map((account, index) => (
                <AccountCard 
                    account={account} 
                    key={index} 
                    isSelected={account === selectedAccount}
                    handleClick={() => handleCardClick(account)}
                />
            ))}
        </div>        
    );
}

export default HomeFeed;
