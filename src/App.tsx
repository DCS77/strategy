import React, { Reducer } from 'react';
import ReactGA from 'react-ga';
import { useHistory, withRouter } from 'react-router-dom';
import { TabDetail } from './types';
import { Actions, StateProps, StateProvider } from './state/state';
import { Army as ArmyType } from './API';
import Main from './pages/main';
import './App.css';

const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    try {
      ReactGA.pageview(window.location.href);
    } catch {
      // Tracking disabled by client
    }
  }, [window.location.href]);

  const initialState: StateProps = {
    userArmies: [],
    globalArmies: [],
    tabs: [],
    gameData: [],
    editData: [],
    pageLayout: {
      gameTabBarSize: 0,
      theme: 'dark',
    },
    refs: {},
    fetchedData: {
      userArmies: false,
    },
  };

  function SetUserArmies(state: StateProps, action: Actions) {
    return {
      ...state,
      userArmies: action.value,
      fetchedData: { ...state.fetchedData, userArmies: true },
    };
  }

  function AddUserArmy(state: StateProps, action: Actions) {
    const army = state.userArmies.find((a) => a.id === action.value.id);

    if (army) {
      army.name = action.value.name;
      army.pieces = action.value.pieces;
      return { ...state };
    }
    const newArmy = {
      id: action.value.id,
      name: action.value.name,
      pieces: action.value.pieces,
      player: 'PlayerID',
      wins: 0,
      losses: 0,
    } as ArmyType;

    return {
      ...state,
      userArmies: [...state.userArmies, newArmy],
    };
  }

  function AddTab(state: StateProps, action: Actions) {
    const found = state.tabs.find((tab) => tab.id === action.value.id);

    if (found) {
      return state;
    }

    return {
      ...state,
      tabs: [...state.tabs, action.value],
    };
  }

  function CloseTab(state: StateProps, action: Actions) {
    const splitPath = window.location.pathname.split('/');
    if (((splitPath[1] === 'play' || splitPath[1] === 'army') && splitPath[2] === action.value.id)
        || (splitPath.length === 2 && splitPath[1] === action.value.id)) {
      let newPath = '/';
      if (state.tabs.length > 1) {
        const tabIndex = state.tabs.findIndex((tab) => tab.id === action.value.id);

        newPath = tabIndex === state.tabs.length - 1
          ? state.tabs[tabIndex - 1].path
          : state.tabs[tabIndex + 1].path;
      }
      history.push(newPath);
    }

    const newTabs = state.tabs.filter((item: TabDetail) => item.id !== action.value.id);
    return {
      ...state,
      tabs: newTabs,
    };
  }

  function DeleteUserArmy(state: StateProps, action: Actions) {
    state = CloseTab(state, action);
    const armies = state.userArmies.filter((army: ArmyType) => army.id !== action.value.id);
    return {
      ...state,
      userArmies: armies,
    };
  }

  function ChangeTheme(state: StateProps, action: Actions) {
    return {
      ...state,
      pageLayout: {
        ...state.pageLayout,
        theme: action.value,
      },
    };
  }

  const reducer: Reducer<StateProps, Actions> = (state, action) => {
    switch (action.type) {
      case 'setUserArmies': return SetUserArmies(state, action);
      case 'addUserArmy': return AddUserArmy(state, action);
      case 'deleteUserArmy': return DeleteUserArmy(state, action);
      case 'addTab': return AddTab(state, action);
      case 'closeTab': return CloseTab(state, action);
      case 'changeTheme': return ChangeTheme(state, action);
      default: return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
};

export default withRouter(App);
