import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';

interface AIProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function AI(Props: AIProps) {
  useEffect(() => {
    Props.createTab('ai', 'ai', 'Play AI', TabType.Game);
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
          Opponent Details and Team
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default AI;