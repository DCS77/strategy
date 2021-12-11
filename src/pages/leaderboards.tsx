import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';

interface ArmyProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function Army(Props: ArmyProps) {
  useEffect(() => {
    Props.createTab('leaderboards', 'leaderboards', 'Leaderboards', TabType.Leaderboards);
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='selectTeam'>
          Historic leaderboards (per month)
          <br/>
          Clicking history leaderboard opens in new tab to allow comparison?
        </div>
      </div>
      <div className='learnColumn'>
        Current Leaderboards table (reset each month)
        <br/>
        CountryFlag, Name, Wins, Draws, Losses, Points
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          Click on someone, and you can see actions to perform
          <br/>
          e.g. View teams, follow (see team updates), request game
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default Army;