import React, { useState } from 'react';
import { TabType, TabDetails, GameTabDetail, InfoTabDetail } from '../types';
import TabBarItem from './tabBarItem';
import './gameTabBar.css';
import '../App.css';

interface GameTabBarProps {
  Tabs: TabDetails;
}

function CreateTabBarItem(Props: GameTabDetail|InfoTabDetail){
  if('GameID' in Props){
    return (
      <span className='tab-item'>
        <TabBarItem Type={TabType.Game} Title={Props.Title} Player={Props.Player} Rating={Props.Rating} ID='0' to={Props.GameID}/>
      </span>
    );
  } else if('InfoID' in Props){
    return (
      <span className='tab-item'>
        <TabBarItem Type={TabType.Info} Title={Props.Title} ID='0' to={Props.InfoID}/>
      </span>
    );
  }
}

function GameTabBar(Props: GameTabBarProps) {
  function TabList() {
    return (
      <React.Fragment>
        {Props.Tabs.map((item: GameTabDetail|InfoTabDetail) => CreateTabBarItem(item))}
      </React.Fragment>
    );
  }

  return (
    <div>
      <div className='game-tab-bar passero'>
        <div className='game-tab-bar-inner'>
          <TabList/>
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;