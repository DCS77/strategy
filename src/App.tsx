import React, { useState, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BarItem from './components/barItem';
import BottomBar from './components/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import GameTabBar from './components/gameTabBar';
import { TabType, TabDetails, GameTabDetail, InfoTabDetail } from './types';
import './App.css';

function CreateTabs(){
  let game1:GameTabDetail = {
    GameID: 'game1',
    Title: 'Blitz',
    Player: 'John',
    Rating: 1899,
    ID: '0'
  };
  let info1:InfoTabDetail = {
    InfoID: 'info1',
    Title: 'Player profile for John',
    ID: '0'
  };
  let tabs:TabDetails = [
    game1,
    info1
  ]
  return tabs;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const app = useRef<HTMLDivElement>(null);

  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

  return (
    <BrowserRouter>
      <div ref={app} id="theme" className={'transition theme-' + theme}>
        <TopBarGroup
          theme={theme}
          onClickThemeSwitch={onClickThemeSwitch}/>
        <div className="page">
          <GameTabBar Tabs={CreateTabs()}/>
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
