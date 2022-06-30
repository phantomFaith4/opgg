import React from 'react'
import MatchHistorySlot from '../matchHistorySlot/MatchHistorySlot';

export default function MatchHistoryList({matchList}) {
    return (
    <div className='matchHistoryList'>
        {
          matchList.map(match=>{
            return(
            <MatchHistorySlot key={match} match={match} />
            ) 
          })
        }
    </div>
  )
}
