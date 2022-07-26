import React from 'react';
import './topbar.css';
import { Link } from "react-router-dom";

export default function Topbar() {
    return ( 
        <div className="topbar">
            <div className="container">
                <nav className="navbar">
                    <ul className='topbarNavList'> 
                        <Link to="/"><li className='topbarNavListItem'><span>Home</span></li></Link>
                        <Link to="/champions"><li className='topbarNavListItem'><span>Champions</span></li></Link>
                        <li className='topbarNavListItem'><span>Leaderboards</span></li>
                        <li className='topbarNavListItem'><span>Tier List</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
