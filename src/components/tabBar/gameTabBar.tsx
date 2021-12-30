import React, { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { useStateValue } from '../../state/state';
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

const CreateTabBarItem = (Props: TabDetail) => {
  const {
    id, path, title, type,
  } = Props;
  return (
    <TabBarItem
      key={id}
      id={id}
      title={title}
      type={type}
      to={path}
    />
  );
};

const TabList = (Props: TabListProps) => {
  const { state } = useStateValue();
  const { ready } = Props;

  if (ready) {
    return (
      <>
        { state.tabs.map((item: TabDetail) => CreateTabBarItem(item)) }
      </>
    );
  }
  return null;
};

const GameTabBar = (Props: GameTabBarProps) => {
  const [isReady, setIsReady] = useState(false);
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { onHeightChange } = Props;

  useEffect(() => {
    setIsReady(true);
    onHeightChange(height);
  }, [Props, height]);

  return (
    <div ref={ref}>
      <div className='game-tab-bar'>
        <div className='game-tab-bar-inner'>
          <TabList ready={isReady} onHeightChange={onHeightChange} />
        </div>
      </div>
    </div>
  );
};

export default GameTabBar;
