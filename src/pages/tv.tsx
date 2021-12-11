import React, { useEffect } from 'react';
import './play.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';

interface GameProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function TV(Props: GameProps) {
  useEffect(() => {
    Props.createTab('tv', 'tv', 'Arena TV', TabType.TV);
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='moveHistory'>
          Move History
        </div>
      </div>
      <div className='boardColumn'>
        <Board/>
      </div>
      <div className='rightColumn'>
        <div className='opponentSection'>
          View player teams
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default TV;