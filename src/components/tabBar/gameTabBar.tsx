import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../state/state';
import useResizeObserver from 'use-resize-observer';
import { TabDetail } from '../../types';
import TabBarItem from './tabBarItem';
import './gameTabBar.css';
import '../../App.css';

interface GameTabBarProps {
  onHeightChange: (height: number) => void;
}

interface TabListProps {
  ready: boolean;
  onHeightChange: (height: number) => void;
}

function CreateTabBarItem(Props: TabDetail) {
  return (
    <TabBarItem
      key={Props.id}
      id={Props.id}
      title={Props.title}
      type={Props.type}
      to={Props.path}
    />
  );
}

function GameTabBar(Props: GameTabBarProps) {
  const { state } = useStateValue();
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
          { state.tabs.map((item: TabDetail) => CreateTabBarItem(item)) }
        </React.Fragment>
      );
    }
    return null;
  }

  return (
    <div ref={ref}>
      <div className='game-tab-bar passero'>
        <div className='game-tab-bar-inner'>
          <TabList ready={ready} onHeightChange={Props.onHeightChange}/>
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;