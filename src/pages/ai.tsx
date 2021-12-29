import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useStateValue } from '../state/state';

interface ViewProps {
  t: any;
}

const NarrowAIView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Opponent Details')}
      </div>
      <div className='vertical-padding-bottom'>
        <Board short />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Chat')}
      </div>
      <div className='vertical-padding-bottom'>
        {t('Move History')}
      </div>
    </>
  );
};

const WideAIView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList />
        </div>
        <div className='moveHistory'>
          {t('Move History')}
        </div>
      </div>
      <div className='boardColumn'>
        <Board />
      </div>
      <div className='rightColumn'>
        <div className='opponentSection'>
          {t('Opponent Details')}
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

const AI = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    dispatch({
      type: 'addTab',
      value: {
        id: 'ai', path: '/ai', title: t('Play AI'), type: TabType.Game,
      },
    });
  });

  return (
    <>
      <div className='narrow-screen'>
        <NarrowAIView t={t} />
      </div>
      <div className='wide-screen'>
        <WideAIView t={t} />
      </div>
    </>
  );
};

export default AI;
