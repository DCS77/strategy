import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';
import { useStateValue } from '../state/state';
import i18n from '../i18nextConf';

interface ViewProps {
  t: any;
}

const NarrowLeaderboardsView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Leaderboards')}
        <br />
        CountryFlag, Name, Wins, Draws, Losses, Points
      </div>
      <div className='vertical-padding-bottom'>
        {t('Player Details')}
        <br />
        e.g. View teams, follow (see team updates), request game
      </div>
      <div className='vertical-padding-bottom'>
        {t('Historic Leaderboards')}
        <br />
        Clicking history leaderboard opens in new tab to allow comparison?
      </div>
      <div className='vertical-padding-bottom'>
        {t('Chat')}
      </div>
    </>
  );
};

const WideLeaderboardsView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList />
        </div>
        <div className='selectTeam'>
          {t('Historic Leaderboards')}
          <br />
          Clicking history leaderboard opens in new tab to allow comparison?
        </div>
      </div>
      <div className='learnColumn'>
        {t('Leaderboards')}
        <br />
        CountryFlag, Name, Wins, Draws, Losses, Points
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          {t('Player Details')}
          <br />
          e.g. View teams, follow (see team updates), request game
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

const Army = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    dispatch({
      type: 'addTab',
      value: {
        id: 'leaderboards', path: '/leaderboards', title: t('Leaderboards'), type: TabType.Leaderboards,
      },
    });
  });

  return (
    <>
      <div className='narrow-screen'>
        <NarrowLeaderboardsView t={t} />
      </div>
      <div className='wide-screen'>
        <WideLeaderboardsView t={t} />
      </div>
    </>
  );
};

export default Army;
