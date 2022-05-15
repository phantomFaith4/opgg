import React from 'react';
import './userProfile.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ProfileUserSlot from '../../components/profileUserSlot/ProfileUserSlot';
import MatchHistoryList from '../../components/matchHistoryList/MatchHistoryList';
import { useLocation } from "react-router";
import ProfileRankSlot from '../../components/profileRankSlot/ProfileRankSlot';


export default function UserProfile() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; 
    const [summoner,setSummoner] = useState([]);
    const [matchList,setMatchList] = useState([]);
    console.log("SummonerLog=>",summoner);
    console.log("matchListLog=>",matchList);
    useEffect(()=>{
        const fetch = async () =>{
            const res = await axios.get(`/summoner/${path}`,); 
            setSummoner(res.data);
            setMatchList(res.data.arr);
            console.log("res=>",res) ;
        };
        fetch(); 
    },[]);
  return (  
    <div className='userProfile'>
        <h1>User Profile</h1>
        <div className='profileSlots'>
          <ProfileUserSlot summoner={summoner} />
          <ProfileRankSlot summoner={summoner} />
        </div>
        <MatchHistoryList matchList={matchList} />
    </div>
  )
}
