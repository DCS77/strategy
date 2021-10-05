import React, { useState, useRef } from 'react';
import { useStateRef } from 'use-state-ref';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BarItem from './components/barItem';
import BottomBar from './components/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import GameTabBar from './components/gameTabBar';
import { TabDetails, GameTabDetail, InfoTabDetail } from './types';
import './App.css';

interface StateRef {
  tabs: TabDetails;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [tabs, setTabs] = useState<TabDetails>([]);
  const tabsRef = useStateRef(tabs);
  const app = useRef<HTMLDivElement>(null);

  function CloseTab(ID: string){
    console.log('close tab: ', ID, tabs);
    if(tabsRef.current){
      let newTabs = tabsRef.current.filter((item:GameTabDetail|InfoTabDetail) => item.ID !== ID);
      setTabs(newTabs);
    }
  }

  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
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
  function AddGameTab(){
    let ID = MakeID(2);
    let game2:GameTabDetail = {
      GameID: 'Game',
      Title: ID,
      Player: 'Sam',
      Rating: 1647,
      ID: ID,
      closeTabHandler: CloseTab
    };
    setTabs([...tabs, game2]);
  }

  return (
    <BrowserRouter>
      <div ref={app} id="theme" className={'transition theme-' + theme}>
        <TopBarGroup
          theme={theme}
          onClickThemeSwitch={onClickThemeSwitch}/>
        <div className="page">
          <GameTabBar Tabs={tabs}/>
          <Switch>
            <Route path="/game1">
              Game 1
            </Route>
            <Route path="/info1">
              Info 1
            </Route>
            <Route path="/online">
              Online
            </Route>
            <Route path="/live">
              Active games
            </Route>
            <Route path="/contact">
              Contact
            </Route>
            <Route path="/donate">
              Donate
            </Route>
            <Route path="/terms">
              Terms
            </Route>
            <Route path="/privacy">
              Privacy
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </div>
        <BottomBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
