import React from 'react';
import './Home.css';
import { Link, link } from 'react-router-dom';
import LinkColumn from './../template/LinkColumn';

//This is for the prototype
import HomeFeed from './../feeds/HomeFeed';


function Home() {
    //This is a test data for the prototype
    const accounts = [
        {
            firstName: 'Sanji',
            lastName: 'Vinsmoke',
            location: 'Paris, France',
            activity: 'Taekwondo',
            sex: 'Male',
            imgUrl: '/images/pfp/sanji.png'
        },
        {
            firstName: 'Tony Tony',
            lastName: 'Chopper',
            location: 'Montreal, Canada',
            activity: 'MMA',
            sex: 'Male',
            imgUrl: '/images/pfp/chopper.png'
        },
        {
            firstName: 'Trafalgar D.',
            lastName: 'Law',
            location: 'Toluca, Mexico',
            activity: 'Taekwondo',
            sex: 'Male',
            imgUrl: '/images/pfp/law.png'
        },
        {   firstName: 'God',
            lastName: 'Ussop',
            location: 'Cape Town, Africa',
            activity: 'Archery',
            sex: 'Male',
            imgUrl: '/images/pfp/ussop.png'
        },
        {   firstName: 'Nico',
            lastName: 'Robin',
            location: 'Moscow, Russia',
            activity: 'Handball',
            sex: 'Female',
            imgUrl: '/images/pfp/robin.png'
        },
        {   firstName: 'Roronoa',
            lastName: 'Zoro',
            location: 'Tokyo, Japan',
            activity: 'Kendo',
            sex: 'Male',
            imgUrl: '/images/pfp/zoro.png'
        },
        {   firstName: 'Shanks',
            lastName: '',
            location: 'Great Britain',
            activity: 'Kendo',
            sex: 'Male',
            imgUrl: '/images/pfp/shanks.png'
        },
        {   firstName: 'Monkey D.',
            lastName: 'Luffy',
            location: 'Santos, Brazil',
            activity: 'Boxing',
            sex: 'Male',
            imgUrl: '/images/pfp/luffy.png'
        },
        {   firstName: 'Itachi',
            lastName: 'Uchiha',
            location: 'Seto, Japan',
            activity: 'Tricking',
            sex: 'Male',
            imgUrl: '/images/pfp/itachi.png'
        },
        {   firstName: 'Ash',
            lastName: 'Ketchum',
            location: 'California, America',
            activity: 'Equestria',
            sex: 'Male',
            imgUrl: '/images/pfp/ash.png'
        },
        {   firstName: 'Naruto',
            lastName: 'Uzumaki',
            location: 'Seto, Japan',
            activity: 'Parkour',
            sex: 'Male',
            imgUrl: '/images/pfp/naruto.png'
        },
        {   firstName: 'Sakura',
            lastName: 'Haruno',
            location: 'Seto, Japan',
            activity: 'Kick Boxing',
            sex: 'Female',
            imgUrl: '/images/pfp/sakura.png'
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
                        <HomeFeed accounts={accounts} />
                    </div>
                </div>
            </div>

            <div className='footer'>
                <p>&copy; 2023 FitNet | FitNet.com</p>
            </div>
        </div>

    )
}

export default Home;