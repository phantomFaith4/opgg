import React from 'react'
import './profileUserSlot.css';

export default function ProfileUserSlot({summoner}) {
  return (
    <div className='profileUserSlot'>
        <img  className='profileImg' src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${summoner.profileIconId}.png`} alt='' /> 
        <span className='summonerNameSpan'>{summoner.name}</span>
        <span className='summonerLevelSpan'>{summoner.summonerLevel}</span>
    </div>
  )
} 
