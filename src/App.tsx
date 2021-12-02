import React, { useState, useRef } from 'react';
import { useStateRef } from 'use-state-ref';
import { Switch, Route, useLocation, useHistory, withRouter } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import BottomBar from './components/bottomBar/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import GameTabBar from './components/tabBar/gameTabBar';
import { TabDetails, GameTabDetail, InfoTabDetail } from './types';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [gameTabBarSize, setGameTabBarSize] = useState(0);
  const [tabs, setTabs] = useState<TabDetails>([]);
  const tabsRef = useStateRef(tabs);
  const app = useRef<HTMLDivElement>(null);
  const history = useHistory();

  function onCloseTab(ID: string) {
    const splitPath = window.location.pathname.split('/');
    if(splitPath[2] === ID) {
      let newPath = '/';
      if(tabsRef.current && tabsRef.current.length > 1) {
        let tabIndex = tabsRef.current.findIndex(tab => { return tab.ID === ID });

        newPath = tabIndex === tabsRef.current.length - 1 ?
          `/play/${tabsRef.current[tabIndex - 1].ID}` :
          `/play/${tabsRef.current[tabIndex + 1].ID}`;
      }
      history.push(newPath);
    }

    if(tabsRef.current){
      let newTabs = tabsRef.current.filter((item:GameTabDetail|InfoTabDetail) => item.ID !== ID);
      setTabs(newTabs);
    }
  }

  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

  function onTabBarHeightChange(height: Number) {
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

  // Added temporarily to test adding of game tabs
  function MakeID(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Added temporarily to test adding of game tabs
  function AddGameTab() {
    let ID = MakeID(2);
    let game2:GameTabDetail = {
      GameID: `/play/${ID}`,
      Title: ID,
      Player: 'Sam',
      Rating: 1647,
      ID: ID,
      closeTabHandler: onCloseTab
    };
    setTabs([...tabs, game2]);
  }

  function SelectedGame() {
    const splitPath = useLocation().pathname.split('/');
    return <Game onCreateGame={AddGameTab} ID={splitPath[2]}/>
  }

  return (
    <div ref={app} id='theme' className={`flex-full transition theme-${theme} game-tab-bar-${gameTabBarSize}`}>
      <TopBarGroup
        theme={theme}
        onClickThemeSwitch={onClickThemeSwitch}/>
      <div id='page' className='page'>
        <GameTabBar Tabs={tabs} onHeightChange={onTabBarHeightChange}/>
        <Switch>
          <Route path='/play'>
            <SelectedGame/>
          </Route>
          <Route path='/info'>
            Info 1
          </Route>
          <Route path='/tv'>
            Arena TV
          </Route>
          <Route path='/ai'>
            Play AI
          </Route>
          <Route path='/tutorial'>
            Tutorial
          </Route>
          <Route path='/army'>
            Manage Your Army
          </Route>
          <Route path='/leaderboards'>
            Leaderboards
          </Route>
          <Route path='/online'>
            Online
          </Route>
          <Route path='/live'>
            Active games
          </Route>
          <Route path='/contact'>
            Contact
          </Route>
          <Route path='/donate'>
            Donate
          </Route>
          <Route path='/terms'>
            Terms
          </Route>
          <Route path='/privacy'>
            Privacy
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
      <BottomBar/>
    </div>
  );
}

export default withRouter(App);
