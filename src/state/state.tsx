import React, {
  createContext, Dispatch, Reducer, useContext, useReducer,
} from 'react';
import { Army as ArmyType } from '../API';
import { TabDetail, TabDetails } from '../types';

export interface Actions {
  type: string;
  value: any;
}

export interface GlobalRefs {
  tabs?: React.RefObject<TabDetails>
}

export interface PageLayout {
  gameTabBarSize: number;
  theme: string;
}

export interface FetchedData {
  userData?: boolean;
  userArmies?: boolean;
}

export interface StateProps {
  userData: any;
  userArmies: ArmyType[];
  globalArmies: ArmyType[];
  tabs: TabDetail[];
  gameData: any[];
  editData: any[];
  pageLayout: PageLayout;
  refs: GlobalRefs;
  fetchedData: FetchedData;
}

interface InitContextProps {
  state: StateProps;
  dispatch: Dispatch<Actions>;
}

interface StateProviderProps {
  reducer: Reducer<StateProps, Actions>;
  initialState: StateProps;
}

export const StateContext = createContext({} as InitContextProps);

export const StateProvider: React.FC<StateProviderProps> = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
