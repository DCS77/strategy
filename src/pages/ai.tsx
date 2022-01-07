import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import DefaultNarrowView from './structures/defaultNarrowView';
import DefaultWideView from './structures/defaultWideView';
import Board from '../components/board/board';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useStateValue } from '../state/state';

interface ViewProps {
  t: any;
}

const NarrowAIView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultNarrowView
      Elements={[
        t('Opponent Details'),
        <Board short />,
        t('Chat'),
        t('Move History'),
      ]}
    />
  );
};

const WideAIView = (Props: ViewProps) => {
  const { t } = Props;

  return (
    <DefaultWideView
      BottomLeft={t('Move History')}
      Centre={<Board />}
      TopRight={t('Opponent Details')}
      BottomRight={t('Chat')}
    />
  );
};

const AI = () => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    document.title = 'RC | Play AI';
    dispatch({
      type: 'addTab',
      value: {
        id: 'ai', path: '/ai', title: t('Play AI'), type: TabType.Game,
      },
    });
  });

  return (
    <>
      <div className='narrow-screen'>
        <NarrowAIView t={t} />
      </div>
      <div className='wide-screen'>
        <WideAIView t={t} />
      </div>
    </>
  );
};

export default AI;
