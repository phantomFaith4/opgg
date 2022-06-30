import React from 'react';
import './skillOrder.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

export default function SkillOrder({champion}) {
    const [q,setQ] = useState({});
    const [w,setW] = useState({});
    const [e,setE] = useState({});
    const [r,setR] = useState({});
    const [p,setP] = useState({}); 
    const [pimg,setPimg] = useState([]);
    const path = champion;
    useEffect(()=>{
        const fetchSpells = async () =>{
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion/${path}.json`);
            setQ(res.data.data[path].spells[0]);
            setE(res.data.data[path].spells[1]);
            setW(res.data.data[path].spells[2]);
            setR(res.data.data[path].spells[3]);
            setP(res.data.data[path].passive);
            setPimg(res.data.data[path].passive.image);
        };
        fetchSpells(); 
    },[path]);
    console.log(pimg.full);
  return (
            <div className='skillOrder'>
                <h1>Skill order</h1>
                <table className='skillOrderTable'>
                    <thead>
                    <tr>
                        <td className='abilityIconHolder'>
                            <img data-tip data-for='abilityInfoQ' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/${q.id}.png`} alt=""  className='abilityIconQ'/>
                            <ReactTooltip place="right" id="abilityInfoQ"effect="solid">
                                <p>{q.name}</p> 
                                <span className='description'>{q.description}</span>
                            </ReactTooltip>
                        </td>
                        <td className="tableData">1</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">4</td>
                        <td className="tableData">5</td>
                        <td className="tableData2"></td>
                        <td className="tableData">7</td>
                        <td className="tableData2"></td>
                        <td className="tableData">9</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td> 
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='abilityIconHolder'>
                            <img data-tip data-for='abilityInfoW' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/${w.id}.png`} alt=""  className='abilityIconW'/>
                            <ReactTooltip place="right" id="abilityInfoW"effect="solid">
                                <p>{w.name}</p>
                                <p>{w.description}</p>
                            </ReactTooltip>
                        </td>
                        <td className="tableData2"></td>
                        <td className="tableData">2</td>
                        <td className="tableData2"></td> 
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">14</td>
                        <td className="tableData">15</td>
                        <td className="tableData2"></td>
                        <td className="tableData">17</td>
                        <td className="tableData">18</td>
                    </tr>
                    <tr>
                        <td className='abilityIconHolder'>
                            <img data-tip data-for='abilityInfoE' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/${e.id}.png`} alt=""  className='abilityIconE'/>
                            <ReactTooltip place="right" id="abilityInfoE"effect="solid">
                                <p>{e.name}</p>
                                <span className='description'>{e.description}</span>
                            </ReactTooltip>
                        </td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">3</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">8</td>
                        <td className="tableData2"></td>
                        <td className="tableData">10</td>
                        <td className="tableData2"></td>
                        <td className="tableData">12</td>
                        <td className="tableData">13</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                    </tr>
                    <tr>
                        <td className='abilityIconHolder'>
                            <img data-tip data-for='abilityInfoR' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/${r.id}.png`} alt=""  className='abilityIconR'/>
                            <ReactTooltip  place="right" id="abilityInfoR"effect="solid">
                                <p>{r.name}</p>
                                <span className='description'>{r.description}</span>
                            </ReactTooltip>
                        </td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">6</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">11</td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData2"></td>
                        <td className="tableData">16</td>
                        <td className="tableData2"></td> 
                        <td className="tableData2"></td>
                    </tr>
                    <tr>
                        <td className='abilityIconHolder'>
                            <img data-tip data-for='abilityInfoP' src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/passive/${pimg.full}`} alt=""  className='abilityIconR'/>
                            <ReactTooltip  place="right" id="abilityInfoP"effect="solid">
                                <p>{p.name}</p>
                                <span className='description'>{p.description}</span>
                            </ReactTooltip> 
                        </td>
                        <td className='tableData' colSpan="18">Passive</td>
                    </tr>
                    </tbody>
                    </table>
            </div>
    );
}