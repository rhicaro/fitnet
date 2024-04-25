//To copy over to other pages for layout
import React ,{useState, useEffect} from "react";
import '../stylesV2/Home2.css';
import '../stylesV2/AboutV2.css';
import { Link, link } from 'react-router-dom';
import axios from 'axios';

function About2({updateAccountInfo, accountPresent, accountFirstName, accountLastName, accountType}) {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClick = (e) => {
        e.preventDefault();
        setShowPopup(prevState => !prevState);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleLogoutClick = () => {
        setShowPopup(false);
        updateAccountInfo("", false, "", "", "")
    }

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
            <html lang="en">
                <head>
                    {/* Need to keep for the icons */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                </head>
                <body>
                <div class="container">
                    <nav>
                        <div class="navbar">
                            <div class="logo">
                                {/* Change to FitNetLogo */}
                            {/* <img src="/pic/logo.jpg" alt=""> */}
                                <h1>About Me</h1>
                            </div>
                            <ul>
                                <Link to='/'>
                                    <li>
                                            <i class="fas fa-home"></i>
                                            <span class="nav-item">Home</span>
                                    </li>
                                </Link>
                                <Link to='/Calendar'>
                                    <li>
                                            <i class="fas fa-calendar"></i>
                                            <span class="nav-item">Calendar</span>
                                    </li>
                                </Link>
                                <Link to='/About'>
                                    <li>
                                            <i class="fas fa-info-circle"></i>
                                            <span class="nav-item">About</span>
                                    </li>
                                </Link>
                                    <Link to='/Login'>
                                    <li>
                                            <i class="fas fa-sign-in-alt"></i>
                                            <span class="nav-item">Login</span>
                                    </li>
                                </Link>
                                <Link to='/Signup'>
                                    <li>
                                            <i class="fas fa-share"></i>
                                            <span class="nav-item">Register</span>
                                    </li>
                                </Link> 
                                <li>
                                    {accountPresent && (
                                        <div class='nav-item-options-container'>
                                            <a href="#" class='options' onClick={handlePopupClick}>
                                                <i className="fas fa-cog"/>
                                                <span className="nav-item">More Options</span>
                                            </a>
                                            {showPopup && (
                                                <div className="popup">
                                                    {accountType === 'Trainer' ? (
                                                        <>
                                                            <a href="#" class="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                            <Link 
                                                                to={`/AccountScreen/${accountFirstName}/${accountLastName}`} 
                                                                className='style-btn'
                                                                onClick={handleClosePopup}>
                                                                {/* <Button className='account-btn' onClick={handleClosePopup}>My Account</Button> */}
                                                                My Account
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <a href="#" class="style-btn" onClick={handleLogoutClick}>Logout</a>
                                                        // <Button className='logout-btn' onClick={handleLogoutClick}>Logout</Button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <section class="main">
                        <div class="main-top">
                            <Link to='/'>
                                <p>FitNet | Find Your Trainer Today</p>
                            </Link>
                        </div>
                        <div class="main-body">
                            {/* Switch to an actual picture of me */}
                            <img src='/images/pfp/garp.png' width={200} height={200}/>
                            <div class="main-body-about">
                                <p>
                                    Welcome to FitNet, where fitness meets personalized guidance! I'm Raphael Hicaro, a dedicated senior computer science student with a passion for both technology and fitness. My journey into the world of health and wellness began as a novice in the gym, clueless about where to start and uncertain about investing in a suitable trainer.
                                    With two years of hands-on experience in the fitness realm, I've encountered the challenges many individuals face when trying to embark on a transformative fitness journey. It wasn't easy for me at first, navigating the complexities of workouts, nutrition, and finding the right trainer. The struggle to make progress while managing time and resources fueled my desire to create a solution – FitNet.
                                    FitNet is more than just a fitness platform; it's a reflection of my commitment to making fitness accessible and tailored to your unique needs. I understand the frustration of spending hard-earned money on trainers without witnessing significant progress. That's why FitNet is designed to be a comprehensive resource, providing you with the tools and support necessary to achieve your fitness goals.
                                    As a senior computer science student, my expertise extends beyond the gym floor. I bring a tech-savvy approach to fitness, leveraging cutting-edge technology to enhance your experience on the FitNet platform. Here, you'll find personalized workout plans, nutritional guidance, and a supportive community to keep you motivated every step of the way.
                                    Join me on this journey towards a healthier and happier you. Let's leverage technology to transform your fitness routine and make progress that's not just visible but sustainable. FitNet is not just a fitness platform; it's your partner in achieving the best version of yourself.
                                    Get ready to embark on a fitness journey like never before – welcome to FitNet, where your goals become our mission.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                </body>
            </html>
        </span>
        )
}

export default About2;