import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import DefaultNarrowView from './structures/defaultNarrowView';
import DefaultWideView from './structures/defaultWideView';
import { TabType } from '../types';
import { useStateValue } from '../state/state';
import i18n from '../i18nextConf';

interface ViewProps {
  t: any;
}

const LeaderboardsChart = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <>
      {t('Leaderboards')}
      <br />
      CountryFlag, Name, Wins, Draws, Losses, Points
    </>
  );
};

const PlayerDetails = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <>
      {t('Player Details')}
      <br />
      e.g. View teams, follow (see team updates), request game
    </>
  );
};

const HistoricLeaderboards = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <>
      {t('Historic Leaderboards')}
      <br />
      Clicking history leaderboard opens in new tab to allow comparison?
    </>
  );
};

const NarrowLeaderboardsView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultNarrowView
      Elements={[
        <LeaderboardsChart t={t} />,
        <PlayerDetails t={t} />,
        <HistoricLeaderboards t={t} />,
        t('Chat'),
      ]}
    />
  );
};

const WideLeaderboardsView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultWideView
      BottomLeft={<HistoricLeaderboards t={t} />}
      Centre={<LeaderboardsChart t={t} />}
      TopRight={<PlayerDetails t={t} />}
      BottomRight={t('Chat')}
    />
  );
};

const Leaderboards = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    document.title = 'RC | Leaderboards: See top rated players';
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

export default Leaderboards;
