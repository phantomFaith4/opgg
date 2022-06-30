import React from 'react'
import './loadingComponent.css';


export default function LoadingComponent() {
  return (
    <div className='loadingComponent'>
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}
 