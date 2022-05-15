import React from 'react'
import './profileRankSlot.css';

export default function ProfileRankSlot({summoner}) {
    console.log("Summoner=>",summoner.tier);
  return (
    <div className='profileRankSlot'>
        <div className='part1'>
            {(() => {
                    switch (summoner.tier) {
                        case 'IRON':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Iron.png').default} alt="" className="playerRankImg" />
                            )
                        case 'BRONZE':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Bronze.png').default} alt="" className="playerRankImg" />
                            )
                        case 'SILVER':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Silver.png').default} alt="" className="playerRankImg" />
                            )
                        case 'GOLD':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Gold.png').default} alt="" className="playerRankImg" />
                            )
                        case 'PLATINUM':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Platinum.png').default} alt="" className="playerRankImg" />
                            )
                        case 'DIAMOND':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Diamond.png').default} alt="" className="playerRankImg" />
                            )
                        case 'MASTER':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Master.png').default} alt="" className="playerRankImg" />
                            )
                        case 'GRANDMASTER':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Grandmaster.png').default} alt="" className="playerRankImg" />
                            )
                        case 'CHALLENGER':
                            return (
                                <img src={require('../../assets/icons/rank/Emblem_Challenger.png').default} alt="" className="playerRankImg" />
                            )                      
                        default:
                            return (
                                <span>Rank is not determined</span> 
                            )
                    } 
                    })()}
            <span className='rankDivision'>{summoner.rank}</span>
        </div>
        <div className='part2'>
            <span className='summonerWinLose'>{summoner.wins}W / {summoner.losses}L</span>
            <span className='summonerWinrate'>{Math.round((summoner.wins/(summoner.wins+summoner.losses))*100,1)} %</span>         
        </div>            
    </div>
  )
}
