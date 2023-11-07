import React, { useState } from 'react';
import AccountCard from './AccountCard';

function HomeFeed() {

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    }

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
        <div className="profile-feed">
            {accounts.map((account, index) => (
                <AccountCard 
                    account={account} 
                    key={index} 
                    isSelected={selectedCard === index}
                    handleClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}

export default HomeFeed;
