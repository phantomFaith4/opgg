import React from 'react'
import './home.css';
import axios from 'axios'
import {useState } from 'react';
import UserProfile from '../userProfile/UserProfile';

export default function Home() {
    const [summoner, setSummoner] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            window.location.replace(`http://localhost:3000/summoner/${summoner}`);
        }catch(err){
            console.log("Home submit error=>",err);
        }
      };
    return (
        <div className='home'>
            <div className="formContainer">
                <form className='searchForm' onSubmit={handleSubmit}>
                    <select id="standard-select">
                        <option value="Option 1">EUNE</option>
                        <option value="Option 2">EUW</option>
                        <option value="Option 3">NA</option>
                    </select>
                    <input type="search" onChange={(e)=>setSummoner(e.target.value)} className='searchField' placeholder='Type summoner name'/>
                    <button type="submit" className='searchBtn'>Search</button>
                </form>
            </div>
        </div>
    )
}
