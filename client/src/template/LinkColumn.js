import React from "react";
import './LinkColumn.css';
import { Link, link } from 'react-router-dom';

function LinkColumn () {
    return(
        <div className='link_column'>
                <ul>
                    
                    <Link to="/"><li>Home</li></Link>
                    
                    {/* I dont know if i should keep this considering no account is actually picked when using this link */}
                    {/* <Link to="/AccountScreen"><li>Profile</li></Link> */}
                    
                        <Link to="/Calendar"><li>Calendar</li></Link>
                    
                        {/* <Link to="/Messages"><li>Messages</li></Link> */}
                    
                        <Link to="/About"><li>About Us</li></Link>

                        {/* <Link to="/Settings"><li>Settings</li></Link> */}

                    {/* Will work on this Link*/}
                        <Link to="/Login"><li>Login</li></Link>
                </ul>
        </div>
    ) 
}

export default LinkColumn;