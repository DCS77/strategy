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

interface ShowGameViewProps {
  t: any;
}

interface ViewProps {
  SearchForGame: any;
  t: any;
}

const NarrowShowGameView = (Props: ShowGameViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Opponent Details')}
      </div>
      <div className='vertical-padding-bottom'>
        <Board short />
      </div>
      <div className='vertical-padding-bottom'>
        {t('Chat')}
      </div>
      <div className='vertical-padding-bottom'>
        {t('Move History')}
      </div>
    </>
  );
};

const WideShowGameView = (Props: ShowGameViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <div className='nav-section'>
          <NavigationList />
        </div>
        <div className='move-history'>
          {t('Move History')}
        </div>
      </div>
      <div className='board-column'>
        <Board />
      </div>
      <div className='right-column'>
        <div className='opponent-section'>
          {t('Opponent Details')}
        </div>
        <div className='chat-section'>
          {t('Chat')}
        </div>
      </div>
    </div>
  );
};

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

const NarrowPlayView = (Props: ViewProps) => {
  const { SearchForGame, t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        Create a new game<br />
        <button type='button' onClick={SearchForGame}>
          Add game tab
        </button><br />
        Games being searched for
      </div>
      <div>
        {t('Chat')}
      </div>
    </>
  );
};

const WidePlayView = (Props: ViewProps) => {
  const { SearchForGame, t } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <NavigationList />
      </div>
      <div className='board-column'>
        Create a new game<br />
        <button type='button' onClick={SearchForGame}>
          Add game tab
        </button><br />
        Games being searched for
      </div>
      <div className='right-column'>
        {t('Chat')}
      </div>
    </div>
  );
};

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
  }, []);

  useEffect(() => {
    if (ID) {
      document.title = `RC | Play Multiplayer: ${ID}`;
      dispatch({
        type: 'addTab',
        value: {
          id: ID, path: `/play/${ID}`, title: `Game ${ID}`, type: TabType.Game,
        },
      });
    } else {
      document.title = 'RC | Play Multiplayer';
      dispatch({
        type: 'addTab',
        value: {
          id: 'play', path: '/play', title: t('Multiplayer'), type: TabType.Multiplayer,
        },
      });
    }
  });

  if (ID) {
    return (
      <>
        <div className='narrow-screen'>
          <NarrowShowGameView t={t} />
        </div>
        <div className='wide-screen'>
          <WideShowGameView t={t} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='narrow-screen'>
        <NarrowPlayView SearchForGame={SearchForGame} t={t} />
      </div>
      <div className='wide-screen'>
        <WidePlayView SearchForGame={SearchForGame} t={t} />
      </div>
    </>
  );
};

export default Play;
