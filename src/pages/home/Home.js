import React, { useState } from 'react';
import './Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from '../../template/LinkColumn';

//This is for the prototype
import HomeFeed from '../../components/HomeFeed';


function Home() {
    const [selectedAccount, setSelectedAccount] = useState(null);

    //This is a test data for the prototype
    const accounts = [
        {
            firstName: 'Sanji',
            lastName: 'Vinsmoke',
            location: 'Paris, France',
            activity: 'Taekwondo',
            sex: 'Male',
            imgUrl: '/images/pfp/sanji.png',
            price: 50
        },
        {
            firstName: 'Tony Tony',
            lastName: 'Chopper',
            location: 'Montreal, Canada',
            activity: 'MMA',
            sex: 'Male',
            imgUrl: '/images/pfp/chopper.png',
            price: 50
        },
        {
            firstName: 'Trafalgar D.',
            lastName: 'Law',
            location: 'Toluca, Mexico',
            activity: 'Taekwondo',
            sex: 'Male',
            imgUrl: '/images/pfp/law.png',
            price: 50
        },
        {   firstName: 'God',
            lastName: 'Ussop',
            location: 'Cape Town, Africa',
            activity: 'Archery',
            sex: 'Male',
            imgUrl: '/images/pfp/ussop.png',
            price: 50
        },
        {   firstName: 'Nico',
            lastName: 'Robin',
            location: 'Moscow, Russia',
            activity: 'Handball',
            sex: 'Female',
            imgUrl: '/images/pfp/robin.png',
            price: 50
        },
        {   firstName: 'Roronoa',
            lastName: 'Zoro',
            location: 'Tokyo, Japan',
            activity: 'Kendo',
            sex: 'Male',
            imgUrl: '/images/pfp/zoro.png',
            price: 50
        },
        {   firstName: 'Shanks',
            lastName: '',
            location: 'Great Britain',
            activity: 'Kendo',
            sex: 'Male',
            imgUrl: '/images/pfp/shanks.png',
            price: 50
        },
        {   firstName: 'Monkey D.',
            lastName: 'Luffy',
            location: 'Santos, Brazil',
            activity: 'Boxing',
            sex: 'Male',
            imgUrl: '/images/pfp/luffy.png',
            price: 50
        },
        {   firstName: 'Itachi',
            lastName: 'Uchiha',
            location: 'Seto, Japan',
            activity: 'Tricking',
            sex: 'Male',
            imgUrl: '/images/pfp/itachi.png',
            price: 50
        },
        {   firstName: 'Ash',
            lastName: 'Ketchum',
            location: 'California, America',
            activity: 'Equestria',
            sex: 'Male',
            imgUrl: '/images/pfp/ash.png',
            price: 50
        },
        {   firstName: 'Naruto',
            lastName: 'Uzumaki',
            location: 'Seto, Japan',
            activity: 'Parkour',
            sex: 'Male',
            imgUrl: '/images/pfp/naruto.png',
            price: 50
        },
        {   firstName: 'Sakura',
            lastName: 'Haruno',
            location: 'Seto, Japan',
            activity: 'Kick Boxing',
            sex: 'Female',
            imgUrl: '/images/pfp/sakura.png',
            price: 50
        }
    ];

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

                        <Link to="/AccountScreen"><div className='main_feed_btn'>Visit Account</div></Link>

                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;