import React from 'react'
import ChampionSlot from '../../components/championSlot/ChampionSlot';
import './championList.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';

export default function ChampionList() {
    const [championList, setChampionList] = useState([]);
    const [search,setSearch] = useState("");
    const [difficulty, setDifficulty] = useState(0);
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchChampions = async () =>{ 
            const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json');
            setChampionList(response.data.data);
            setLoading(true)
        };
        fetchChampions();
    },[]);
    async function searchF(e){
        try{
            setSearch(e.toLowerCase());
        }catch(err){
            console.log(err);
        }
    }
    async function setDifficultyFunction(e){
        try{
            setDifficulty(e);
        }catch(err){
            console.log(err);
        }
    }
    async function setTypeFunction(e){
        try{
            setType(e);
        }catch(err){

        } 
    }
    return ( 
        <div className="championList">
            {
                loading ? 
                (
                    <div>
                <div className="textContainer">
                    <h1>League of Legends Champions List</h1>
                    <p>Search League of Legends champions to find stats,build guides,skins,lore and more!</p>
                </div>
                <div className="filterContainer">
                    <div className="searchField">
                        <div className="searchContainer">
                            <i className="fa fa-search searchIcon"></i>
                            <input className="searchBox" onChange={e=>searchF(e.target.value)} type="search" name="search" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="searchChampionType">
                        <div className="dropdownWrapper">  
                            <span className="dropdown"> 
                                <div className="dropbtn"> <span className="d-inline" onClick={() =>setTypeFunction("all")}><i className="fas fa-asterisk"></i> Any class</span></div>
                                <div className="dropdown-content">
                                    <div className="dropdown-element"> 
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-tank.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Marksman")}> Marksman</span>
                                    </div>
                                    <div className="dropdown-element">
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-marksman.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Mage")}>Mage</span>
                                    </div>
                                    <div className="dropdown-element">
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-tank.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Tank")}>Tank</span>
                                    </div>
                                    <div className="dropdown-element">
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-assassin.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Assassin")}>Assassin</span>
                                    </div>
                                    <div className="dropdown-element">
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-fighter.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Fighter")}>Fighter</span>
                                    </div>
                                    <div className="dropdown-element">
                                        <span className="d-inline btn float-right">
                                            <img src={require('../../assets/icons/champion_type/npe-ft-role-icon-support.png').default} alt="" className="championTypeDropdown" />
                                        </span>
                                        <span className="d-inline" onClick={() =>setTypeFunction("Support")}>Support</span>
                                    </div> 
                                </div>
                            </span> 
                        </div>
                    </div>
                    <div className="searchChampionDifficulty">
                        <button className='difficultyButton' onClick={() =>setDifficultyFunction(0)}><i className="difficultyIcon fas fa-asterisk"></i></button>
                        <button className='difficultyButton' onClick={() =>setDifficultyFunction(1)}><i className="difficultyIcon fas fa-circle" style={{color:"#5584AC"}}></i></button>
                        <button className='difficultyButton' onClick={() =>setDifficultyFunction(2)}><i className="difficultyIcon fas fa-circle" style={{color:"#95CD41"}}></i></button>
                        <button className='difficultyButton' onClick={() =>setDifficultyFunction(3)}><i className="difficultyIcon fas fa-circle" style={{color:"#EBE645"}}></i></button>
                        <button className='difficultyButton' onClick={() =>setDifficultyFunction(4)}><i className="difficultyIcon fas fa-circle" style={{color:"#6E3CBC"}}></i></button>
                    </div>
                </div>
                <div className="championsContainer">
                    {Object.keys(championList).map(champion => {
                        if(champion.toLowerCase().startsWith(search)){
                            if(championList[champion].tags[0].includes(type) || type === "all"){
                                if(difficulty === 0){
                                    return (<Link to={`/champion/${champion}`} ><ChampionSlot key={champion} championData={championList[champion]}/> </Link>)   
                                }else if(difficulty === 1 && championList[champion].info.difficulty >=0 && championList[champion].info.difficulty <3){
                                    return (<Link to={`/champion/${champion}`} ><ChampionSlot key={champion} championData={championList[champion]}/></Link>)
                                }else if(difficulty === 2 && championList[champion].info.difficulty >=3 && championList[champion].info.difficulty <5){
                                    return (<Link to={`/champion/${champion}`} ><ChampionSlot key={champion} championData={championList[champion]}/></Link>)
                                }else if(difficulty === 3 && championList[champion].info.difficulty >=5 && championList[champion].info.difficulty <7){
                                    return (<Link to={`/champion/${champion}`} ><ChampionSlot key={champion} championData={championList[champion]}/></Link>)
                                }else if(difficulty === 4 && championList[champion].info.difficulty >=7 && championList[champion].info.difficulty <=10){
                                    return (<Link to={`/champion/${champion}`} ><ChampionSlot key={champion} championData={championList[champion]}/></Link>)
                                }
                            }
                        }
                    })}
                </div>
            </div>
                ) : (<LoadingComponent />)
            }
            
        </div>
    )
}
