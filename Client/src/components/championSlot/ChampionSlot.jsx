import React from 'react';
import './championSlot.css';

export default function ChampionSlot({championData}) { 
    return (
        <div className="championSlot">
            <h1 className="championName">{championData.name}</h1>
            <p className="championTitle">{championData.title}</p>
            <div className="championType">
            {(() => {
                switch (championData.tags[0]) {
                    case 'Assassin':
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-assassin.png').default} alt="" className="championTypeImg" />
                        )
                    case 'Fighter':
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-fighter.png').default} alt="" className="championTypeImg" />
                        )
                    case 'Mage': 
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-mage.png').default} alt="" className="championTypeImg" />
                        )
                    case 'Marksman':
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-marksman.png').default} alt="" className="championTypeImg" />
                        )
                    case 'Support':
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-support.png').default} alt="" className="championTypeImg" />
                        )
                    case 'Tank':
                        return (
                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-tank.png').default} alt="" className="championTypeImg" />
                        )
                    default:
                        return (
                            <span>Role is not determined</span> 
                        )
                } 
                })()}
            </div>
            <p className="championDifficulty">
            {(() => {
                if(championData.info.difficulty >= 0 && championData.info.difficulty < 3 ){
                    return(<i className="difficultyIcon fas fa-circle" style={{color:"#5584AC"}}></i>)
                }else if(championData.info.difficulty >= 3 && championData.info.difficulty < 5){
                    return(<i className="difficultyIcon fas fa-circle"  style={{color:"#95CD41"}}></i>)
                }
                else if(championData.info.difficulty >= 5 && championData.info.difficulty < 7){
                    return(<i className="difficultyIcon fas fa-circle"  style={{color:"#EBE645"}}></i>)
                }
                else if(championData.info.difficulty >= 7 && championData.info.difficulty <= 10){
                    return(<i className="difficultyIcon fas fa-circle"  style={{color:"#6E3CBC"}}></i>)
                }
                })()}
            </p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`} alt="" className="championImg" />
        </div>
    )
} 