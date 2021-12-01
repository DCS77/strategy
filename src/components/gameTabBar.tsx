import React from 'react';
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
      <TabBarItem
        key={Props.ID}
        ID={Props.ID}
        Type={TabType.Game}
        Title={Props.Title}
        Player={Props.Player}
        Rating={Props.Rating}
        to={Props.GameID}
        closeTabHandler={Props.closeTabHandler}
      />
    );
  } else if('InfoID' in Props){
    return (
      <TabBarItem
        key={Props.ID}
        ID={Props.ID}
        Type={TabType.Info}
        Title={Props.Title}
        to={Props.InfoID}
        closeTabHandler={Props.closeTabHandler}
      />
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
      <div className='game-tab-bar passero no-select'>
        <div className='game-tab-bar-inner'>
          <TabList/>
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;