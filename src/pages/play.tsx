import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Board from '../components/board/board';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useStateValue } from '../state/state';

interface PlayProps {
  ID?: string;
}

const ShowGame = (t: any) => (
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
        {t('Opponent Details')}
      </div>
      <div className='chatSection'>
        {t('Chat')}
      </div>
    </div>
  </div>
);

// Added temporarily to test adding of game tabs
function MakeID(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Play = (Props: PlayProps) => {
  const history = useHistory();
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { ID } = Props;

  function SearchForGame() {
    const gameId = MakeID(2);

    history.push(`/play/${gameId}`);
  }

  useEffect(() => {
    if (ID) {
      dispatch({
        type: 'addTab',
        value: {
          id: ID, path: `/play/${ID}`, title: `Game ${ID}`, type: TabType.Game,
        },
      });
    } else {
      dispatch({
        type: 'addTab',
        value: {
          id: 'play', path: '/play', title: t('Multiplayer'), type: TabType.Multiplayer,
        },
      });
    }
  });

  if (ID) {
    return ShowGame(t);
  }

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <NavigationList />
      </div>
      <div className='boardColumn'>
        Create a new game
        <button type='button' onClick={SearchForGame}>
          Add game tab
        </button>
        Games being searched for
      </div>
      <div className='rightColumn'>
        {t('Chat')}
      </div>
    </div>
  );
};

export default Play;
