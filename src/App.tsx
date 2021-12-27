import React, { useState, useRef, Reducer } from 'react';
import { Switch, Route, useLocation, useHistory, withRouter } from 'react-router-dom';
import Home from './pages/home';
import AI from './pages/ai';
import Army from './pages/army/army';
import CreateArmy from './pages/army/createArmy';
import Leaderboards from './pages/leaderboards';
import Learn from './pages/learn';
import Play from './pages/play';
import TV from './pages/tv';
import BottomBar from './components/bottomBar/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import GameTabBar from './components/tabBar/gameTabBar';
import { TabDetail } from './types';
import { Actions, StateProps, StateProvider } from './state/state';
import { Army as ArmyType } from './API';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [gameTabBarSize, setGameTabBarSize] = useState(0);
  const app = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const initialState: StateProps = {
    userArmies: [],
    globalArmies: [],
    tabs: [],
    gameData: [],
    editData: [],
    pageLayout: {
      gameTabBarSize: 0,
      theme: 'dark'
    },
    refs: {},
    fetchedData: {}
  };

  function SetUserArmies(state: StateProps, action: Actions) {
    return {
      ...state,
      userArmies: action.value,
      fetchedData: { ...state.fetchedData, userArmies: true }
    }
  }

  function AddUserArmy(state: StateProps, action: Actions) {
    let army = state.userArmies.find(a => a.id === action.value.id);

    if (army) {
      army.name = action.value.name;
      army.pieces = action.value.pieces;
      return {...state};
    } else {
      let newArmy = {
        id: action.value.id,
        name: action.value.name,
        pieces: action.value.pieces,
        player: 'PlayerID',
        wins: 0,
        losses: 0
      } as ArmyType;

      return {
        ...state,
        userArmies: [...state.userArmies, newArmy]
      };
    }
  }

  function DeleteUserArmy(state: StateProps, action: Actions) {
    state = CloseTab(state, action);
    let armies = state.userArmies.filter((army: ArmyType) => army.id !== action.value.id);
    return {
      ...state,
      userArmies: armies
    };
  }

  function AddTab(state: StateProps, action: Actions) {
    let found = state.tabs.find(tab => tab.id === action.value.id);

    if(found) {
      return state;
    }
    else {
      return {
        ...state,
        tabs: [...state.tabs, action.value]
      }
    }
  }

  function CloseTab(state: StateProps, action: Actions) {
    const splitPath = window.location.pathname.split('/');
    if(((splitPath[1] === 'play' || splitPath[1] === 'army') && splitPath[2] === action.value.id) || 
        (splitPath.length === 2 && splitPath[1] === action.value.id)) {
      let newPath = '/';
      if(state.tabs.length > 1) {
        let tabIndex = state.tabs.findIndex(tab => { return tab.id === action.value.id });

        newPath = tabIndex === state.tabs.length - 1 ?
          state.tabs[tabIndex - 1].path :
          state.tabs[tabIndex + 1].path;
      }
      history.push(newPath);
    }

    let newTabs = state.tabs.filter((item: TabDetail) => item.id !== action.value.id);
    return {
      ...state,
      tabs: newTabs
    }
  }
  
  const reducer: Reducer<StateProps, Actions> = (state, action) => {
    switch (action.type) {
      case 'setUserArmies': return SetUserArmies(state, action);
      case 'addUserArmy': return AddUserArmy(state, action);
      case 'deleteUserArmy': return DeleteUserArmy(state, action);
      case 'addTab': return AddTab(state, action);
      case 'closeTab': return CloseTab(state, action);
      default:
        return state;
    }
  };

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
    <StateProvider initialState={initialState} reducer={reducer}>
      <div ref={app} id='theme' className={`flex-full transition theme-${theme} game-tab-bar-${gameTabBarSize}`}>
        <TopBarGroup
          theme={theme}
          onClickThemeSwitch={onClickThemeSwitch}/>
        <div id='page' className='page'>
          <GameTabBar onHeightChange={onTabBarHeightChange}/>
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
              <AITab/>
            </Route>
            <Route path='/learn'>
              <LearnTab/>
            </Route>
            <Route path='/army'>
              <ArmyTab/>
            </Route>
            <Route path='/create'>
              <CreateArmyTab/>
            </Route>
            <Route path='/leaderboards'>
              <LeaderboardsTab/>
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
    </StateProvider>
  );
}

export default withRouter(App);
