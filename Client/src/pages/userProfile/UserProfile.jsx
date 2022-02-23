import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ProfileUserSlot from '../../components/profileUserSlot/ProfileUserSlot';
import MatchHistoryList from '../../components/matchHistoryList/MatchHistoryList';

export default function UserProfile() {
    const [summoner,setSummoner] = useState([]);
    const [matchList,setMatchList] = useState([]);
    useEffect(()=>{
        const fetch = async () =>{
            const res = await axios.get(`/summoner/:summonerName`);
            setSummoner(res.data);
            setMatchList(res.data.arr); 
        };
        fetch(); 
    },[]);
  return (  
    <div className='userProfile'>
        <h1>User Profile</h1>
        <ProfileUserSlot summoner={summoner} />
        <MatchHistoryList matchList={matchList} />
    </div>
  )
}
