import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';

interface LearnProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function Learn(Props: LearnProps) {
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    Props.createTab('learn', 'learn', 'Learn to play', TabType.Learn);
  });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='selectLesson'>
          {t('Select a lesson')}
        </div>
      </div>
      <div className='learnColumn'>
        Text for selected lesson
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          {t('Actions')}
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  )
};

export default Learn;