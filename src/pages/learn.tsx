import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';
import { useStateValue } from '../state/state';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';

function Learn() {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    dispatch({
      type: 'addTab',
      value: {
        id: 'learn', path: '/learn', title: t('Learn to play'), type: TabType.Learn
      }
    });
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