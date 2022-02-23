import React from 'react'
import './home.css';

export default function Home() {
    return (
        <div>
            <div className="formContainer">
                <form className='searchForm'>
                    <select name="regions" className='regions'>
                        <option value="eune">EUNE</option>
                        <option value="euw">EUW</option>
                        <option value="na">NA</option>
                    </select>
                    <input type="search" className='searchField' placeholder='Type summoner name'/>
                </form>
            </div>
        </div>
    )
}
