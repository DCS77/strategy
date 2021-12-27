import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../state/state';

function AI() {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    dispatch({
      type: 'addTab',
      value: {
        id: 'ai', path: '/ai', title: t('Play AI'), type: TabType.Game
      }
    });
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='moveHistory'>
          {t('Move History')}
        </div>
      </div>
      <div className='boardColumn'>
        <Board/>
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
  )
};

export default AI;