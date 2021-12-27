import React, { useRef, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../state/state';
import Home from '../pages/home';
import AI from '../pages/ai';
import Army from '../pages/army/army';
import CreateArmy from '../pages/army/createArmy';
import Leaderboards from '../pages/leaderboards';
import Learn from '../pages/learn';
import Play from '../pages/play';
import TV from '../pages/tv';
import BottomBar from '../components/bottomBar/bottomBar';
import TopBarGroup from '../components/topBar/topBarGroup';
import GameTabBar from '../components/tabBar/gameTabBar';

export function Main() {
  const { state } = useStateValue();
  const [gameTabBarSize, setGameTabBarSize] = useState(0);
  const history = useHistory();
  const app = useRef<HTMLDivElement>(null);

  function onTabBarHeightChange(height: number) {
    if(height >= 0 && height < 20) {
      setGameTabBarSize(0);
    }
    else if(height > 20 && height <= 40) {
      setGameTabBarSize(1);
    }
    else if(height > 40 && height <= 50) {
      setGameTabBarSize(2);
    }
    else if(height > 50) {
      setGameTabBarSize(3);
    }
  }

  function ChangePath(path: string) {
    history.push(`${path}`);
  }

  function GameTab() {
    const splitPath = useLocation().pathname.split('/');
    return <Play
      changePath={(path: string) => ChangePath(path)}
      ID={splitPath[2]}
    />
  }

  function ArmyTab() {
    const splitPath = useLocation().pathname.split('/');
    return <Army ID={splitPath[2]}/>
  }

  function AITab() { return <AI/> }
  function CreateArmyTab() { return <CreateArmy/> }
  function LeaderboardsTab() { return <Leaderboards/> }
  function LearnTab() { return <Learn/> }
  function TVTab() { return <TV/> }

  return (
    <div ref={app} id='theme' className={`flex-full transition theme-${state.pageLayout.theme} game-tab-bar-${gameTabBarSize}`}>
      <TopBarGroup/>
      <div id='page' className='page'>
        <GameTabBar onHeightChange={onTabBarHeightChange}/>
        <Switch>
          <Route path='/play'><GameTab/></Route>
          <Route path='/info'>Info 1</Route>
          <Route path='/tv'><TVTab/></Route>
          <Route path='/ai'><AITab/></Route>
          <Route path='/learn'><LearnTab/></Route>
          <Route path='/army'><ArmyTab/></Route>
          <Route path='/create'><CreateArmyTab/></Route>
          <Route path='/leaderboards'><LeaderboardsTab/></Route>
          <Route path='/online'>Online</Route>
          <Route path='/live'>Active games</Route>
          <Route path='/contact'>Contact</Route>
          <Route path='/donate'>Donate</Route>
          <Route path='/terms'>Terms</Route>
          <Route path='/privacy'>Privacy</Route>
          <Route path='/'><Home/></Route>
        </Switch>
      </div>
      <BottomBar/>
    </div>
  )
}
      
      