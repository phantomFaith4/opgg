import React from 'react'
import './profileUserSlot.css';

export default function ProfileUserSlot({summoner}) {
  return (
    <div className='profileUserSlot'>
        <img  width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${summoner.profileIconId}.png`} alt='' /> 
        <span>{summoner.name}</span>
        <span>{summoner.summonerLevel}</span>
    </div>
  )
} 
