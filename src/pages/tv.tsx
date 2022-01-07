import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import DefaultNarrowView from './structures/defaultNarrowView';
import DefaultWideView from './structures/defaultWideView';
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
    <DefaultNarrowView
      Elements={[
        <Board short />,
        t('Chat'),
        t('Move History'),
      ]}
    />
  );
};

const WideTVView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultWideView
      BottomLeft={t('Move History')}
      Centre={<Board />}
      BottomRight={t('Chat')}
    />
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
