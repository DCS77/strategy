import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';
import { useStateValue } from '../state/state';
import i18n from '../i18nextConf';

const TV = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    dispatch({
      type: 'addTab',
      value: {
        id: 'tv', path: '/tv', title: t('Arena TV'), type: TabType.TV,
      },
    });
  }, [dispatch, t]);

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
          {t('Armies')}
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

export default TV;
