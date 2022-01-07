import React, {
  lazy, Suspense, useRef, useState,
} from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { useStateValue } from '../state/state';
import BottomBar from '../components/bottomBar/bottomBar';
import TopBarGroup from '../components/topBar/topBarGroup';
import GameTabBar from '../components/tabBar/gameTabBar';

const Home = lazy(() => import('./home'));
const AI = lazy(() => import('./ai'));
const Army = lazy(() => import('./army/army'));
const CreateArmy = lazy(() => import('./army/createArmy'));
const Leaderboards = lazy(() => import('./leaderboards'));
const Learn = lazy(() => import('./learn'));
const Play = lazy(() => import('./play'));
const TV = lazy(() => import('./tv'));

const LoadingPage = () => (
  <div className='full-size'>
    <div className='absolute-centre'>
      <PacmanLoader color='orange' />
    </div>
  </div>
);

const GameTab = () => {
  const splitPath = useLocation().pathname.split('/');
  return (
    <Play
      ID={splitPath[2]}
    />
  );
};

const AITab = () => <AI />;
const CreateArmyTab = () => <CreateArmy />;
const LeaderboardsTab = () => <Leaderboards />;
const LearnTab = () => <Learn />;
const TVTab = () => <TV />;

const Main = () => {
  const { state } = useStateValue();
  const [gameTabBarSize, setGameTabBarSize] = useState(0);
  const app = useRef<HTMLDivElement>(null);

  function onTabBarHeightChange(height: number) {
    if (height >= 0 && height < 20) {
      setGameTabBarSize(0);
    } else if (height > 20 && height <= 40) {
      setGameTabBarSize(1);
    } else if (height > 40 && height <= 50) {
      setGameTabBarSize(2);
    } else if (height > 50) {
      setGameTabBarSize(3);
    }
  }

  return (
    <div
      ref={app}
      id='theme'
      className={`baloo flex-full transition theme-${state.pageLayout.theme} game-tab-bar-${gameTabBarSize}`}
    >
      <TopBarGroup />
      <div id='page' className='page'>
        <GameTabBar onHeightChange={onTabBarHeightChange} />
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path='/play'><GameTab /></Route>
            <Route path='/info'>Info 1</Route>
            <Route path='/tv'><TVTab /></Route>
            <Route path='/ai'><AITab /></Route>
            <Route path='/learn'><LearnTab /></Route>
            <Route path='/army/:id?' component={Army} />
            <Route path='/create'><CreateArmyTab /></Route>
            <Route path='/leaderboards'><LeaderboardsTab /></Route>
            <Route path='/online'>Online</Route>
            <Route path='/live'>Active games</Route>
            <Route path='/contact'>Contact</Route>
            <Route path='/donate'>Donate</Route>
            <Route path='/terms'>Terms</Route>
            <Route path='/privacy'>Privacy</Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </Suspense>
      </div>
      <BottomBar />
    </div>
  );
};

export default Main;
