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
    Props.createTab('army', 'army', 'Your Army', TabType.Army);
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='selectTeam'>
          Select team
         <br/>
          Create new team
        </div>
      </div>
      <div className='learnColumn'>
        Select or create a team on the left to begin
        <br/>
        Details about meta / average composition of teams
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          Process and actions
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default Army;