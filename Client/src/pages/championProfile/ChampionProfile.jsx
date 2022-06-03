import React from 'react'
import './championProfile.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router";
import SkillOrder from '../../components/skillOrder/SkillOrder';
import SummonerSpells from '../../components/summonerSpells/SummonerSpells';
import WinrateSlot from '../../components/winrateSlot/WinrateSlot';
import RuneSlot from '../../components/runeSlot/RuneSlot';
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';

export default function ChampionProfile() { 
    const [champion,setChampion] = useState([]);
    const [type,setType] = useState([]);
    const [difficulty,setDifficulty] = useState([]);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchChampions = async () =>{
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion/${path}.json`);
            setChampion(res.data.data[path]);
            setType(res.data.data[path].tags[0]);
            setDifficulty(res.data.data[path].info.difficulty);
            setLoading(true);
        };
        fetchChampions();  
    },[path]);
    return (  
        <div className='championProfile'>
            {
                loading ? (
                <div>
                    <div className='firstPartHolderDiv'>
                        <div className='firstPartPage'> 
                            <div className='championProfileSlot'>
                                <div className='gradientDiv'>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt="" className="championImgProfile" />
                                </div>
                                <div className='championProfileInfo'>
                                    <table className='championInfoTable'>
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                <span>{champion.name}</span>
                                                <span>{ champion.title}</span>
                                                </th>
                                            </tr>
                                        </thead> 
                                        <tbody>
                                            <tr>
                                                <td className='tableElement'>
                                                {(() => {
                                                    switch (type) {
                                                        case 'Assassin':
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-assassin.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Assassin</span>
                                                                </>
                                                            )
                                                        case 'Fighter':
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-fighter.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Fighter</span>
                                                                </>
                                                            )
                                                        case 'Mage': 
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-mage.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Mage</span>
                                                                </>
                                                            )
                                                        case 'Marksman':
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-marksman.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Marksman</span>
                                                                </>
                                                            )
                                                        case 'Support':
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-support.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Support</span>
                                                                </>
                                                            )
                                                        case 'Tank':
                                                            return (
                                                                <>
                                                                <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-tank.png').default} alt="" className="championProfileTypeImg" />
                                                                <span>Tank</span>
                                                                </>
                                                            )
                                                        default:
                                                            return (
                                                                <span>Role is not determined</span> 
                                                            )
                                                    } 
                                                })()}
                                                </td>
                                                <td>
                                                {(() => {
                                                    if(difficulty >= 0 && difficulty < 3){
                                                        return(<><i className="difficultyIcon fas fa-circle" style={{color:"#5584AC"}}></i><span>A</span></>)
                                                    }else if(difficulty >= 3 && difficulty < 5){
                                                        return(<><i className="difficultyIcon fas fa-circle"  style={{color:"#95CD41"}}></i><span>B</span></>)
                                                    }
                                                    else if(difficulty >= 5 && difficulty < 7){
                                                        return(<><i className="difficultyIcon fas fa-circle"  style={{color:"#EBE645"}}></i><span>C</span></>)
                                                    }
                                                    else if(difficulty >= 7 && difficulty <= 10){
                                                        return(<><i className="difficultyIcon fas fa-circle"  style={{color:"#6E3CBC"}}></i><span>D</span> </>)
                                                    }
                                                })()}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <SummonerSpells />
                            <WinrateSlot champion={champion.name} />
                        </div>
                    </div>
                    <div className='secondPartPage'>
                        <RuneSlot champion={champion.id}/>
                        <SkillOrder champion={champion.id} />
                        <div className='aboutChamp'>
                            <h1>About {champion.name}</h1>
                            <p className=''>{champion.lore}</p>
                        </div>
                    </div>
                </div>) : (<LoadingComponent />)
            }
        </div>
    )
}
