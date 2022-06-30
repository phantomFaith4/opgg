import React from 'react';
import './summonerSpells.css';

export default function SummonerSpells() {
    return (
        <div className='summonerSpells'>  
            <div className='summonerSpellIconDiv'>
                <div className='titleDivSpells' >
                    <span className='summonerSpellsSpan'>Summoner Spells </span>
                    <span className='summonerSpellsWinrateSpan'>Win rate: </span>
                    <span className='summonerSpellsWinrateNumSpan'>43.5%</span>
                </div>
                <div className="containerSpell">
                        <img className="container__image" src={`http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/SummonerFlash.png`} alt="" />
                        <div className="container__text">
                            <p className='spellTitle'>Flash</p>
                            <p className='spellDesc' >Teleports your champion a short distance toward your cursor's location.</p>
                        </div>
                </div>
                <div className="containerSpell">
                    <img className="container__image" src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/SummonerTeleport.png`} alt="" />
                    <div className="container__text">
                        <p className='spellTitle'>Teleport</p>
                        <p className='spellDesc'>After channeling for 4 seconds, teleports your champion to target allied structure. Upgrades to 
                            Unleashed Teleport at 14 minutes, which teleports your champion to target allied structure, minion,
                            or ward.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    );
}
