import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listPendingGames } from '../../graphql/queries';
import { createGame, createPendingGame, createPlayerConfig } from '../../graphql/mutations';
import { onCreatePendingGame } from '../../graphql/subscriptions';
import {
  Game as GameType,
  PendingGame as PendingGameType,
  BoardSizeInput,
  CreateGameInput,
  CreateGameMutation,
  CreatePendingGameInput,
  CreatePendingGameMutation,
  CreatePlayerConfigInput,
  CreatePlayerConfigMutation,
  ListPendingGamesQuery,
  GameStateInput,
} from '../../API';

export async function fetchPendingGames() {
  const gameData = (await API.graphql(graphqlOperation(listPendingGames))) as GraphQLResult<ListPendingGamesQuery>;
  return gameData?.data?.listPendingGames?.items;
}

async function newPlayerConfig(config: CreatePlayerConfigInput) {
  return await API.graphql(
    graphqlOperation(createPlayerConfig, { input: config }),
  ) as GraphQLResult<CreatePlayerConfigMutation>;
}

async function newGame(game: CreateGameInput) {
  return await API.graphql(
    graphqlOperation(createGame, { input: game }),
  ) as GraphQLResult<CreateGameMutation>;
}

async function newPendingGame(pendingGame: CreatePendingGameInput) {
  return await API.graphql(
    graphqlOperation(createPendingGame, { input: pendingGame }),
  ) as GraphQLResult<CreatePendingGameMutation>;
}

export async function setupNewPendingGame(game: GameType) {
  const {
    boardSize, mode, playerOne, state,
  } = game;

  const playerConfig = { ...playerOne } as CreatePlayerConfigInput;

  return newPlayerConfig(playerConfig)
    .then((result) => ({
      boardSize: { ...boardSize } as BoardSizeInput,
      mode,
      state: { ...state } as GameStateInput,
      gamePlayerOneId: result?.data?.createPlayerConfig?.id,
    } as CreateGameInput))
    .then((gameInput) => newGame(gameInput))
    .then((result) => ({
      expiry: 1200,
      pendingGameGameId: result?.data?.createGame?.id,
    } as CreatePendingGameInput))
    .then((pendingGame) => newPendingGame(pendingGame))
    .then((result) => result?.data?.createPendingGame)
    .catch((error) => error);
}
