import React from 'react';
import './userProfile.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ProfileUserSlot from '../../components/profileUserSlot/ProfileUserSlot';
import MatchHistoryList from '../../components/matchHistoryList/MatchHistoryList';
import { useLocation } from "react-router";
import ProfileRankSlot from '../../components/profileRankSlot/ProfileRankSlot';
import {useNavigate } from "react-router-dom"
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';

export default function UserProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const platform = location.pathname.split("/")[3];
    const region = location.pathname.split("/")[4]; 
    const [summoner,setSummoner] = useState([]);
    const [matchList,setMatchList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetch = async () =>{
          try{
            const res = await axios.get(`/summoner/${path}/${platform}/${region}`,{
              platform:platform,
              region:region,
            }); 
            setSummoner(res.data);
            setMatchList(res.data.arr);  
            setLoading(true);
          }catch(err){ 
            navigate('*'); 
          }
        }; 
        fetch(); 
    },[]);
  return (  
    <div className='userProfile'>
      {loading ? (<div>
        <h1>User Profile</h1>
        <div className='profileSlots'>
          <ProfileUserSlot summoner={summoner} />
          <ProfileRankSlot summoner={summoner} />
        </div>
        <MatchHistoryList matchList={matchList} />
      </div>) : (<LoadingComponent />) }
    </div> 
  )
}
