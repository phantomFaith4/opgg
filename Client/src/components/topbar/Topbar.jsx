import React from 'react';
import './topbar.css';
import { Link } from "react-router-dom";

export default function Topbar() {
    return ( 
        <div className="topbar">
            <div className="container">
                <nav className="navbar">
                    <ul> 
                        <Link to="/"><li><span>Home</span></li></Link>
                        <Link to="/champions"><li><span>Champions</span></li></Link>
                        <li><span>Leaderboards</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
