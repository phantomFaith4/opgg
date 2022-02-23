import React from 'react'
import MatchHistorySlot from '../matchHistorySlot/MatchHistorySlot';

export default function MatchHistoryList({matchList}) {
    console.log("matchList=> ",matchList);
    return (
    <div className='matchHistoryList'>
        {
          matchList.map(match=>{
            console.log(match);
            return(
            <MatchHistorySlot match={match} />
            ) 
          })
        }
    </div>
  )
}
