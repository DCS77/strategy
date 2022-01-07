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

const NarrowLearnView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultNarrowView
      Elements={[
        t('Select a lesson'),
        t('Actions'),
        'Text for selected lesson',
        t('Chat'),
      ]}
    />
  );
};

const WideLearnView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultWideView
      BottomLeft={t('Select a lesson')}
      Centre='Text for selected lesson'
      TopRight={t('Actions')}
      BottomRight={t('Chat')}
    />
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
