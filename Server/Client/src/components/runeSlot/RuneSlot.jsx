import React from 'react';
import './runeSlot.css';

export default function RuneSlot({champion}) {
  return (
        <div className='runeSlot'>
            <h1>Recommended Runes for {champion} </h1>
            <div className='runeDiv'>
                <div className='leftRuneSide'>
                    <div className='runeTitleDiv'>
                        <p className='runeTitle'>Domination</p>
                    </div>
                    <table className='leftRuneTable'>
                        <tr className='firstRuneRow'> 
                            <td className='runeTableData1'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png`} alt='' className='runeImgMain' />
                            </td>
                            <td className='runeTableData1'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Predator/Predator.png`} alt='' className='runeImgMain' />
                            </td>
                            <td className='runeTableData1'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png`} alt='' className='runeImgMain' />
                            </td>
                            <td className='runeTableData1'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png`} alt='' className='runeImgMain' />
                            </td>
                        </tr>
                        <tr className='secondRuneRow'>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/CheapShot/CheapShot.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr className='thirdRuneRow'>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                    </table>        
                </div>
                <div className='rightRuneSide'>
                    <div className='runeTitleDiv'>
                        <p className='runeTitle'>Resolve</p>
                    </div>
                    <table className='rightRuneTable'>
                        <tr>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Scorch/Scorch.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png`} alt='' className='runeImg' />
                            </td>
                            <td className='runeTableData'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr className='specialRune'>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAttackSpeedIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr className='specialRune'>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsArmorIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsMagicResIcon.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                        <tr className='specialRune'>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsArmorIcon.png`} alt='' className='runeImg' />
                            </td>
                            <td className='specialRuneTd'>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsMagicResIcon.png`} alt='' className='runeImg' />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
