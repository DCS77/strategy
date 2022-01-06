import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';
import { useStateValue } from '../state/state';
import i18n from '../i18nextConf';

interface ViewProps {
  t: any;
}

const NarrowTVView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
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

const WideTVView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <div className='nav-section'>
          <NavigationList />
        </div>
        <div className='move-history'>
          {t('Move History')}
        </div>
      </div>
      <div className='board-column'>
        <Board />
      </div>
      <div className='right-column'>
        <div className='chat-section'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

const TV = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    document.title = 'RC | Arena TV: Watch top rated games';
    dispatch({
      type: 'addTab',
      value: {
        id: 'tv', path: '/tv', title: t('Arena TV'), type: TabType.TV,
      },
    });
  }, [dispatch, t]);

  return (
    <>
      <div className='narrow-screen'>
        <NarrowTVView t={t} />
      </div>
      <div className='wide-screen'>
        <WideTVView t={t} />
      </div>
    </>
  );
};

export default TV;
