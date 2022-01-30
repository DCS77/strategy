import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import {
  NarrowPlayView, NarrowShowGameView, WidePlayView, WideShowGameView,
} from './play/playViews';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useStateValue } from '../state/state';
import { setupNewPendingGame } from '../ts/db/play';
import {
  BoardSize, Game as GameType, GameState, PlayerConfig,
} from '../API';
import { Piece } from '../components/army/pieces';

interface PlayProps {
  id?: string;
}

const Play = () => {
  const history = useHistory();
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { id } = useParams<PlayProps>();

  function SearchForGame() {
    const boardSize = {
      x: 1, y: 5, z: 1,
    } as BoardSize;

    const state = {
      state: 'pending',
      turn: 0,
    } as GameState;

    const pieces = [] as Piece[];

    const playerOne = {
      pieces,
      time: 600,
      flags: 1,
      moves: 0,
      actionsPerMove: 1,
      rating: 1500,
    } as PlayerConfig;

    const newGame = {
      mode: 'ctf',
      playerOne,
      boardSize,
      state,
    } as GameType;

    setupNewPendingGame(newGame).then((result) => {
      console.log('newPendingGame: ', result);
      const gameId = result?.id;
      if (gameId) {
        history.push(`/play/${gameId}`);
      } else {
        // TODO: print error
      }
    });
  }

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (id) {
      document.title = `RC | Play Multiplayer: ${id.substring(0, 4)}`;

      // TODO: check game state and determine title
      const title = t('Searching for players...');

      dispatch({
        type: 'addTab',
        value: {
          id, path: `/play/${id}`, title, type: TabType.Game,
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

  if (id) {
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
