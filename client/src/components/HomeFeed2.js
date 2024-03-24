// HomeFeed.js
import React from 'react';
import AccountCard2 from './AccountCard2';

function HomeFeed2({ accounts, selectedAccount, setSelectedAccount }) {
    const handleCardClick = (account) => {
      setSelectedAccount(account);
    }
  
    return (
      <div className="profile-feed">
        {accounts.map((account, index) => (
          <AccountCard2 
            account={account} 
            key={index} 
            isSelected={account === selectedAccount}
            handleClick={() => handleCardClick(account)}
          />
        ))}
      </div>        
    );
  }
  
  export default HomeFeed2;
  
