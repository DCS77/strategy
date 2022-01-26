/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPendingGame = /* GraphQL */ `
  query GetPendingGame($id: ID!) {
    getPendingGame(id: $id) {
      id
      game {
        id
        playerOne {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        playerTwo {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        boardSize {
          x
          y
          z
        }
        mode
        state {
          state
          turn
        }
        moves {
          nextToken
        }
        createdAt
        updatedAt
      }
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const listPendingGames = /* GraphQL */ `
  query ListPendingGames(
    $filter: ModelPendingGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPendingGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        game {
          id
          mode
          createdAt
          updatedAt
        }
        expiry
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      playerOne {
        id
        pieces {
          type
          count
        }
        time
        health
        moves
        actionsPerMove
        rating
        createdAt
        updatedAt
      }
      playerTwo {
        id
        pieces {
          type
          count
        }
        time
        health
        moves
        actionsPerMove
        rating
        createdAt
        updatedAt
      }
      boardSize {
        x
        y
        z
      }
      mode
      state {
        state
        turn
        result {
          tie
          winMethod
          winner
        }
      }
      moves {
        items {
          id
          timeLeft
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerOne {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        playerTwo {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        boardSize {
          x
          y
          z
        }
        mode
        state {
          state
          turn
        }
        moves {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMove = /* GraphQL */ `
  query GetMove($id: ID!) {
    getMove(id: $id) {
      id
      game {
        id
        playerOne {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        playerTwo {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        boardSize {
          x
          y
          z
        }
        mode
        state {
          state
          turn
        }
        moves {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        pieces {
          type
          count
        }
        time
        health
        moves
        actionsPerMove
        rating
        createdAt
        updatedAt
      }
      action {
        items {
          id
          pieceType
          createdAt
          updatedAt
        }
        nextToken
      }
      timeLeft
      createdAt
      updatedAt
    }
  }
`;
export const listMoves = /* GraphQL */ `
  query ListMoves(
    $filter: ModelMoveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        game {
          id
          mode
          createdAt
          updatedAt
        }
        player {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        action {
          nextToken
        }
        timeLeft
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      move {
        id
        game {
          id
          mode
          createdAt
          updatedAt
        }
        player {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        action {
          nextToken
        }
        timeLeft
        createdAt
        updatedAt
      }
      player {
        id
        pieces {
          type
          count
        }
        time
        health
        moves
        actionsPerMove
        rating
        createdAt
        updatedAt
      }
      pieceType
      pieceFrom {
        x
        y
        z
      }
      pieceTo {
        x
        y
        z
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        move {
          id
          timeLeft
          createdAt
          updatedAt
        }
        player {
          id
          time
          health
          moves
          actionsPerMove
          rating
          createdAt
          updatedAt
        }
        pieceType
        pieceFrom {
          x
          y
          z
        }
        pieceTo {
          x
          y
          z
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayerConfig = /* GraphQL */ `
  query GetPlayerConfig($id: ID!) {
    getPlayerConfig(id: $id) {
      id
      pieces {
        type
        count
      }
      time
      health
      moves
      actionsPerMove
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listPlayerConfigs = /* GraphQL */ `
  query ListPlayerConfigs(
    $filter: ModelPlayerConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pieces {
          type
          count
        }
        time
        health
        moves
        actionsPerMove
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArmy = /* GraphQL */ `
  query GetArmy($id: ID!) {
    getArmy(id: $id) {
      id
      player
      name
      wins
      losses
      pieces {
        type
        count
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listArmies = /* GraphQL */ `
  query ListArmies(
    $filter: ModelArmyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArmies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        player
        name
        wins
        losses
        pieces {
          type
          count
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
