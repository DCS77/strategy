import React, { useState, useEffect } from 'react';
import useResizeObserver from 'use-resize-observer';
import { TabType, TabDetails, GameTabDetail, InfoTabDetail } from '../../types';
import TabBarItem from './tabBarItem';
import './gameTabBar.css';
import '../../App.css';

interface GameTabBarProps {
  Tabs: TabDetails;
  onHeightChange: (height: Number) => void;
}

interface TabListProps {
  Ready: Boolean;
  Tabs: TabDetails;
  onHeightChange: (height: Number) => void;
}

function CreateTabBarItem(Props: GameTabDetail|InfoTabDetail) {
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
  const [ready, setReady] = useState(false);
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    setReady(true);
    Props.onHeightChange(height);
  }, [Props, height]);

  function TabList(Props: TabListProps) {
    if(Props.Ready) {
      return (
        <React.Fragment>
          { Props.Tabs.map((item: GameTabDetail|InfoTabDetail) => CreateTabBarItem(item)) }
        </React.Fragment>
      );
    }
    return null;
  }

  return (
    <div ref={ref}>
      <div className='game-tab-bar passero no-select'>
        <div className='game-tab-bar-inner'>
          <TabList Ready={ready} Tabs={Props.Tabs} onHeightChange={Props.onHeightChange}/>
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;