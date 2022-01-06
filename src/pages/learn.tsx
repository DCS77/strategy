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

const NarrowLearnView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Select a lesson')}
      </div>
      <div className='vertical-padding-bottom'>
        Text for selected lesson
      </div>
      <div className='vertical-padding-bottom'>
        {t('Chat')}
      </div>
    </>
  );
};

const WideLearnView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <div className='nav-section'>
          <NavigationList />
        </div>
        <div className='select-lesson'>
          {t('Select a lesson')}
        </div>
      </div>
      <div className='learn-column'>
        Text for selected lesson
      </div>
      <div className='right-column'>
        <div className='action-section'>
          {t('Actions')}
        </div>
        <div className='chat-section'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

const Learn = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    document.title = 'RC | Learn to play';
    dispatch({
      type: 'addTab',
      value: {
        id: 'learn', path: '/learn', title: t('Learn to play'), type: TabType.Learn,
      },
    });
  });

  return (
    <>
      <div className='narrow-screen'>
        <NarrowLearnView t={t} />
      </div>
      <div className='wide-screen'>
        <WideLearnView t={t} />
      </div>
    </>
  );
};

export default Learn;
