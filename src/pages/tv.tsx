import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';

interface TVProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function TV(Props: TVProps) {
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    Props.createTab('tv', 'tv', t('Arena TV'), TabType.TV);
  }, [Props, t]);

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
          {t('Armies')}
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  )
};

export default TV;