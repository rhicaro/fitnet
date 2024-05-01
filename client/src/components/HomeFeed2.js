// HomeFeed.js
import React from 'react';
import AccountCard2 from './AccountCard2';

/**
 * Represents a feed component displaying a list of user accounts.
 * @param {Object[]} accounts - An array of user account objects to be displayed in the feed.
 * @param {Object} selectedAccount - The currently selected user account object.
 * @param {function} setSelectedAccount - A function to set the selected user account.
 * @param {string} accountFirstName - The first name of the account owner.
 * @param {string} accountLastName - The last name of the account owner.
 * @returns {JSX.Element} - The rendered HomeFeed2 component.
 */
function HomeFeed2({ accounts, selectedAccount, setSelectedAccount, accountFirstName, accountLastName}) {

    /**
     * Handles the click event on an account card.
     * @param {Object} account - The clicked user account object.
     */
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
  
