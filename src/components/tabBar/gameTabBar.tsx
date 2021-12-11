import React, { useState, useEffect } from 'react';
import useResizeObserver from 'use-resize-observer';
import { TabDetail, TabDetails } from '../../types';
import TabBarItem from './tabBarItem';
import './gameTabBar.css';
import '../../App.css';

interface GameTabBarProps {
  tabs: TabDetails;
  onHeightChange: (height: number) => void;
}

interface TabListProps {
  ready: boolean;
  tabs: TabDetails;
  onHeightChange: (height: number) => void;
}

function CreateTabBarItem(Props: TabDetail) {
  return (
    <TabBarItem
      key={Props.ID}
      ID={Props.ID}
      title={Props.title}
      type={Props.type}
      to={Props.path}
      closeTabHandler={Props.closeTabHandler}
    />
  );
}

function GameTabBar(Props: GameTabBarProps) {
  const [ready, setReady] = useState(false);
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    setReady(true);
    Props.onHeightChange(height);
  }, [Props, height]);

  function TabList(Props: TabListProps) {
    if(Props.ready) {
      return (
        <React.Fragment>
          { Props.tabs.map((item: TabDetail) => CreateTabBarItem(item)) }
        </React.Fragment>
      );
    }
    return null;
  }

  return (
    <div ref={ref}>
      <div className='game-tab-bar passero no-select'>
        <div className='game-tab-bar-inner'>
          <TabList ready={ready} tabs={Props.tabs} onHeightChange={Props.onHeightChange}/>
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;