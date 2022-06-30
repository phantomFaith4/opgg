import React from 'react';
import './matchHistorySlot.css'; 
import { useLocation } from "react-router";

export default function MatchHistorySlot({match}) { 
  const location = useLocation();
  const path = location.pathname.split("/")[2]; 
  function convert(value) {
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')  
  }
  return ( 
    <div className='matchHistorySlot'>
      <div> 
      {match.info.participants.map(p=>{
            const x = p.summonerName.includes(path)
            if(x === true){
              return(
                <div className='matchPlayerInfo'> 
                  <div className='baseInfoDiv'>
                    <img className='summonerHeaderProfileImg' src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${p.championName}.png`} alt='' />
                    <span>{p.championName}</span>
                  </div>
                  <div className='matchTimeInfo'>
                    <span>{p.nexusLost ? 'Lose' : 'Victory' }</span>
                    <span>{convert(match.info.gameDuration)}</span>
                  </div>
                  <div className='killDeathsDiv'>
                    <span>{p.kills} / {p.deaths} / {p.assists}</span> 
                    <span>KDA {Number((p.kills+p.assists)/p.deaths).toFixed(2)}</span> 
                  </div> 
                  <div className='levelCsDiv'>
                    <span>Level {p.champLevel}</span>
                    <span>CS: {p.totalMinionsKilled}</span>
                  </div> 
                  <div className='visionDiv'>
                    <span>Control wards: {p.detectorWardsPlaced}</span>
                    <span>Vision score: {p.visionScore}</span>
                  </div>
                  <div className='itemListDiv'>
                    <ul className='itemsList'>
                      <li><img className='itemImgIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item0}.png`} alt='' /></li>
                      <li><img className='itemImgIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item1}.png`} alt='' /></li>
                      <li><img className='itemImgIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item2}.png`} alt='' /></li>
                      <li><img className='itemImgIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item3}.png`} alt='' /></li>
                      <li><img className='itemImgIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item4}.png`} alt='' /></li>
                    </ul>
                  </div> 
                </div>
                )
            }
          })}
      </div>
      <div className='matchListParticipants'>
        <div className='listContainer'>
          <ul className="list">
            <li className="matchListItem">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[0].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[0].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[1].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[1].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[2].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[2].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[3].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[3].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[4].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[4].summonerName}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='listContainer'>
          <ul className="list2">
            <li className="matchListItem2">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[5].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[5].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem2">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[6].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[6].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem2">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[7].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[7].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem2">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[8].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[8].summonerName}</span>
              </div>
            </li>
            <li className="matchListItem2">
              <div className='matchListItemHolder'>
                {<img className='matchListItemImg' width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${match.info.participants[9].championName}.png`} alt='' />}
                <span className='matchListItemSpan'>{match.info.participants[9].summonerName}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

