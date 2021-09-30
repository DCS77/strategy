/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      }
      boardSize {
        x
        y
        z
      }
      mode
      state {
        active
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
          gameID
          moveID
          player
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
        }
        playerTwo {
          id
          time
          health
          moves
          actionsPerMove
          rating
        }
        boardSize {
          x
          y
          z
        }
        mode
        state {
          active
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
      gameID
      moveID
      player
      action {
        items {
          id
          actionID
          moveID
          pieceType
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        playerOne {
          id
          time
          health
          moves
          actionsPerMove
          rating
        }
        playerTwo {
          id
          time
          health
          moves
          actionsPerMove
          rating
        }
        boardSize {
          x
          y
          z
        }
        mode
        state {
          active
          turn
        }
        moves {
          nextToken
        }
        createdAt
        updatedAt
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
        gameID
        moveID
        player
        action {
          nextToken
        }
        game {
          id
          mode
          createdAt
          updatedAt
        }
        timeLeft
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMoveAction = /* GraphQL */ `
  query GetMoveAction($id: ID!) {
    getMoveAction(id: $id) {
      id
      actionID
      moveID
      move {
        id
        gameID
        moveID
        player
        action {
          nextToken
        }
        game {
          id
          mode
          createdAt
          updatedAt
        }
        timeLeft
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
export const listMoveActions = /* GraphQL */ `
  query ListMoveActions(
    $filter: ModelMoveActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoveActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        actionID
        moveID
        move {
          id
          gameID
          moveID
          player
          timeLeft
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
