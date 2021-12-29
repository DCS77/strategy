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
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList />
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
  );
};

const Learn = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
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
