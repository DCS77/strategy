import React from 'react';
import { useHistory } from 'react-router-dom';
import { Game as GameType, PendingGame as PendingGameType } from '../../../API';
import BarItem from '../../items/barItem';

interface GamesListProps {
  games: GameType[] | PendingGameType[];
}

const GameItem = (game: GameType, history: any) => {
  const { push } = history;
  const {
    id, boardSize, mode, playerOne,
  } = game;

  return (
    <BarItem key={id} mouseUpHandler={() => push(`/play/${id}`)}>
      {playerOne.owner} ({playerOne.rating}): [{boardSize.x}x{boardSize.y} {mode} {playerOne.time}]
    </BarItem>
  );
};

const PendingGameItem = (pendingGame: PendingGameType, history: any) => {
  const { push } = history;
  const { game, id, expiry } = pendingGame;
  const { boardSize, mode, playerOne } = game;
  const gameId = game.id;

  console.log('PendingGameItem: ', pendingGame);

  const AcceptPendingGame = (acceptedGameId: string) => {
    // TODO: accept pending game
    console.log('Accepted pending game', acceptedGameId);
    push(`/play/${acceptedGameId}`);
  };

  return (
    <BarItem key={gameId} mouseUpHandler={() => AcceptPendingGame(gameId)}>
      {playerOne.owner} ({playerOne.rating}): [{boardSize.x}x{boardSize.y} {mode} {playerOne.time}]
    </BarItem>
  );
};

const GamesList = (Props: GamesListProps) => {
  const history = useHistory();
  const { games } = Props;

  return (
    <>
      { games.map((game: GameType | PendingGameType) => (
        'expiry' in game ? PendingGameItem(game, history) : GameItem(game, history))) }
    </>
  );
};

export default GamesList;
