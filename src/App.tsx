import React, { useState, useRef } from 'react';
import { useStateRef } from 'use-state-ref';
import { Switch, Route, useLocation, useHistory, withRouter } from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import TV from './pages/tv';
import BottomBar from './components/bottomBar/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import GameTabBar from './components/tabBar/gameTabBar';
import { TabType, TabDetails, TabDetail} from './types';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [gameTabBarSize, setGameTabBarSize] = useState(0);
  const [tabs, setTabs] = useState<TabDetails>([]);
  const tabsRef = useStateRef(tabs);
  const app = useRef<HTMLDivElement>(null);
  const history = useHistory();

  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

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

  function onCloseTab(ID: string) {
    const splitPath = window.location.pathname.split('/');
    if(splitPath[2] === ID || ID === 'tv') {
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
      let newTabs = tabsRef.current.filter((item: TabDetail) => item.ID !== ID);
      setTabs(newTabs);
    }
  }

  function AddTab(ID: string, path: string, title: string, type: TabType) {
    let found = tabs.find(tab => tab.ID === ID);

    if(!found) {
      let tab:TabDetail = {
        ID: ID,
        path: `/${path}`,
        title: title,
        type: type,
        closeTabHandler: onCloseTab
      };
      setTabs([...tabs, tab]);
    }
  }

  function ChangePath(path: string) {
    history.push(`${path}`);
  }

  function GameTab() {
    const splitPath = useLocation().pathname.split('/');
    return <Play 
      onCreateGame={(ID: string, title: string) => AddTab(ID, `play/${ID}`, title, TabType.Game)}
      changePath={(path: string) => ChangePath(path)}
      createTab={AddTab}
      ID={splitPath[2]}
    />
  }

  function TVTab() {
    return <TV createTab={AddTab}/>
  }

  return (
    <div ref={app} id='theme' className={`flex-full transition theme-${theme} game-tab-bar-${gameTabBarSize}`}>
      <TopBarGroup
        theme={theme}
        onClickThemeSwitch={onClickThemeSwitch}/>
      <div id='page' className='page'>
        <GameTabBar tabs={tabs} onHeightChange={onTabBarHeightChange}/>
        <Switch>
          <Route path='/play'>
            <GameTab/>
          </Route>
          <Route path='/info'>
            Info 1
          </Route>
          <Route path='/tv'>
            <TVTab/>
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
