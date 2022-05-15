import React from 'react'
import './home.css';
import {useState } from 'react';

export default function Home() {
    const [summoner, setSummoner] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            window.location.replace(`/summoner/${summoner}`);
        }catch(err){
            console.log("Home submit error=>",err);
        }
      };
    return (
        <div className='home'>
             <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1280px-League_of_Legends_2019_vector.svg.png`} alt="" className="leagueLogoImg" />
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
