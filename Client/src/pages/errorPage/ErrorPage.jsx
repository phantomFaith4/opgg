import React from 'react'
import './errorPage.css';

export default function ErrorPage() {
  return (
    <div className='errorPage'>
        <div class="center">
        <div class="error">
        <div class="number">4</div>
        <div class="illustration">
          <div class="circle"></div>
          <div class="clip">
            <div class="paper">
              <div class="face">
                <div class="eyes">
                  <div class="eye eye-left"></div>
                  <div class="eye eye-right"></div>
                </div>
                <div class="rosyCheeks rosyCheeks-left"></div>
                <div class="rosyCheeks rosyCheeks-right"></div>
                <div class="mouth"></div>
              </div>
            </div>
          </div> 
        </div>
        <div class="number">4</div>
        </div>
        <div class="text">Oops. The page you're looking for doesn't exist.</div>
        <a class="button" href="#">Back Home</a>
        </div>
    </div>
  )
}
