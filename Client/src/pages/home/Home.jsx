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
                    <select name="regions" className='regions'>
                        <option value="eune">EUNE</option>
                        <option value="euw">EUW</option>
                        <option value="na">NA</option>
                    </select>
                    <input type="search" onChange={(e)=>setSummoner(e.target.value)} className='searchField' placeholder='Type summoner name'/>
                    <button type="submit" className='searchBtn'>Search</button>
                </form>
            </div>
        </div>
    )
}
