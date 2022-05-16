import React from 'react'
import './home.css';
import {useState } from 'react';

export default function Home() {
    const [summoner, setSummoner] = useState('');
    const [platform, setPlatform] = useState('eun1');
    const [region, setRegion] = useState('europe');

    const setRegionF = (e) =>{
        setPlatform(e);
        e === 'eun1'|| e === 'euw1' ? setRegion('europe') : setRegion('americas');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setRegionF();
        try{
            window.location.replace(`/summoner/${summoner}`);
        }catch(err){ 
            console.log("Home submit error=>",err);
        }
      };
    return (
        <div className='home'>
                <div className='homePageTitleDiv'>
                    <span className='homePageTitleSpan'>League of Legends Summoner Search</span>
                </div>
                <div className="formContainer">
                    <form className='searchForm' onSubmit={handleSubmit}>
                        <select id="standard-select" onChange={(e)=>setRegionF(e.target.value)}>
                            <option className='option' value="eun1">EUNE</option>
                            <option  className='option' value="euw1">EUW</option>
                            <option  className='option' value="na1">NA</option>
                        </select>
                        <input type="search" onChange={(e)=>setSummoner(e.target.value)} className='searchField' placeholder='Summoner name'/>
                        <button type="submit" className='searchBtn'>Search</button>
                    </form>
                </div>
        </div>
    )
}
