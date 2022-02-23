import React from 'react';
import './matchHistorySlot.css'; 
import { useLocation } from "react-router";

export default function MatchHistorySlot({match}) { 
  const location = useLocation();
  const path = location.pathname.split("/")[2]; 
  console.log("matchDatFromSlot=>",match.info.participants[0].summonerName);
  console.log("path=>",path);
  return (
    <div className='matchHistorySlot'>
      <div>
      {match.info.participants.map(p=>{
            const x = p.summonerName.includes(path)
            if(x === true){
              return(
                <div>
                  <p>{p.summonerName}</p>
                  <table>
                    <tr>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item0}.png`} alt='' />
                      </td>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item1}.png`} alt='' />
                      </td>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item2}.png`} alt='' />
                      </td>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item3}.png`} alt='' />
                      </td>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item4}.png`} alt='' />
                      </td>
                      <td>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/${p.item5}.png`} alt='' />
                      </td>
                    </tr>
                  </table>
                </div>
                )
            }
          })}
      </div>
      <div className='matchListParticipants'>
        <div className='listContainer'>
          <ul class="list">
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[0].profileIcon}.png`} alt='' />}
              {match.info.participants[0].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[1].profileIcon}.png`} alt='' />}
              {match.info.participants[1].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[2].profileIcon}.png`} alt='' />}
              {match.info.participants[2].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[3].profileIcon}.png`} alt='' />}
              {match.info.participants[3].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[4].profileIcon}.png`} alt='' />}
              {match.info.participants[4].summonerName}
            </li>
          </ul>
        </div>
        <div className='listContainer'>
          <ul class="list">
          <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[5].profileIcon}.png`} alt='' />}
              {match.info.participants[5].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[6].profileIcon}.png`} alt='' />}
              {match.info.participants[6].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[7].profileIcon}.png`} alt='' />}
              {match.info.participants[7].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[8].profileIcon}.png`} alt='' />}
              {match.info.participants[8].summonerName}
            </li>
            <li>
              {<img  width="25" height="25" src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${match.info.participants[9].profileIcon}.png`} alt='' />}
              {match.info.participants[9].summonerName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

