import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';

interface LearnProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function Learn(Props: LearnProps) {
  useEffect(() => {
    Props.createTab('learn', 'learn', 'Learn to play', TabType.Learn);
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='selectLesson'>
          Select a lesson
        </div>
      </div>
      <div className='learnColumn'>
        Text for selected lesson
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

export default Learn;