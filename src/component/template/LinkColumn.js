import React from "react";
import './LinkColumn.css';
import { Link, link } from 'react-router-dom';

function LinkColumn () {
    return(
        <div className='link_column'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AccountScreen">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/Messages">Messages</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Settings">Settings</Link>
                    </li>

                    {/* Will work on this Link*/}
                    {/* <li>
                        <Link to="/Login">Login</Link>
                    </li> */}
                </ul>
        </div>
    ) 
}

export default LinkColumn;