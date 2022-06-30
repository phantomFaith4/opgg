import React from 'react';
import './winrateSlot.css';

export default function WinrateSlot({champion}) {
  return (
        <div className='winrateSlot'>
            <span className='winrateTitleSpan'>{champion} Statistics</span>
            <table className='winrateTable'>
                <tr className='tableRowNum'>
                    <td>45.8%</td>
                    <td>37.4%</td>
                </tr>
                <tr className='tableRowText'>
                    <td className='tableDataWinrateText'>Win rate</td>
                    <td className='tableDataWinrateText'>Pick rate</td>
                </tr>
                <tr className='tableRowNum'>
                    <td>2.3%</td>
                    <td>3/18</td>
                </tr>
                <tr className='tableRowText'>
                    <td className='tableDataWinrateText'>Ban rate</td>
                    <td className='tableDataWinrateText'>Rank</td>
                </tr>
                <tr className='tableRowNum'>
                    <td>20.080</td>
                </tr>
                <tr className='tableRowText'>
                    <td className='tableDataWinrateText'>Matches</td>
                </tr>
            </table>
        </div>
    );
}
