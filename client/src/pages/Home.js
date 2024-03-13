import React, { useState } from 'react';
import '../styles/Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from '../template/LinkColumn';
import HomeFeed from '../components/HomeFeed';
import accounts from '../components/Data';

//This is the home page

function Home() {
    const [selectedAccount, setSelectedAccount] = useState(null);

    return (
        <div className='fitnet'>
            <div className='header'>
                <Link to="/" className='header_title'>FitNet</Link>
                <Link to="/Login" className='header_login'>Login / Register</Link>
            </div>

            <div className='content'>
                
                <LinkColumn />

                <div className='main'>
                    <div className='main_feed_title'>
                        <h2>Trainers</h2>
                    </div>
                    
                    <div className='main_feed'>
                        {/* This is where the trainer feed will live */}
                        <HomeFeed 
                            accounts={accounts}
                            selectedAccount={selectedAccount} 
                            setSelectedAccount={setSelectedAccount}
                        />
                    </div>

                    <div className='account_selected'>
                        {selectedAccount && (
                            <>
                                <img src={selectedAccount.imgUrl} width={250} height={250} className='account_img'></img>
                                <h3 className='account_info_name'>Name: {selectedAccount.firstName} {selectedAccount.lastName}</h3>
                                <h3 className='account_info'>Location: {selectedAccount.location}</h3>
                                <h3 className='account_info'>Activity: {selectedAccount.activity}</h3>
                                <h3 className='account_info'>Sex: {selectedAccount.sex}</h3>
                                <h3 className='account_info'>Price: ${selectedAccount.price}</h3>
                            </>
                        )}
                    </div>

                        {/* <Link to="/AccountScreen"><div className='main_feed_btn'>Visit Account</div></Link> */}
                        {selectedAccount && (
                            <Link to={`/AccountScreen/${selectedAccount.firstName}`} className='main_feed_btn'>
                                Visit Account
                            </Link>
                        )}

                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;