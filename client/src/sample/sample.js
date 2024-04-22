//To copy over to other pages for layout
import React from "react";
import '../styles/Home2.css';
import { Link, link } from 'react-router-dom';

function sample() {

    return (
        <span style={{fontfamily: 'verdana, geneva, sans-serif'}}>
            <html lang="en">
                <head>
                    <title>Job Dashboard | By Code Info</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                </head>
                <body>
                <div class="container">
                    <nav>
                        <div class="navbar">
                            <div class="logo">
                            {/* <img src="/pic/logo.jpg" alt=""> */}
                            <h1>Home</h1>
                            </div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-home"></i>
                                        <span class="nav-item">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-calendar"></i>
                                        <span class="nav-item">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-user"></i>
                                        <span class="nav-item">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-sign-in-alt"></i>
                                        <span class="nav-item">Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="logout">
                                        <i class="fas fa-sign-out-alt"></i>
                                        <span class="nav-item">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <section class="main">
                        <div class="main-top">
                            <p>FitNet | Find Your Trainer Today</p>
                        </div>
                        <div class="main-body">
                            <h1>Trainers</h1>
                        </div>
                    </section>
                </div>

                </body>
            </html>
        </span>
        )
}

export default sample;