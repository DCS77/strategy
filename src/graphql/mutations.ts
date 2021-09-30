/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createMove = /* GraphQL */ `
  mutation CreateMove(
    $input: CreateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    createMove(input: $input, condition: $condition) {
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
export const updateMove = /* GraphQL */ `
  mutation UpdateMove(
    $input: UpdateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    updateMove(input: $input, condition: $condition) {
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
export const deleteMove = /* GraphQL */ `
  mutation DeleteMove(
    $input: DeleteMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    deleteMove(input: $input, condition: $condition) {
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
export const createMoveAction = /* GraphQL */ `
  mutation CreateMoveAction(
    $input: CreateMoveActionInput!
    $condition: ModelMoveActionConditionInput
  ) {
    createMoveAction(input: $input, condition: $condition) {
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
export const updateMoveAction = /* GraphQL */ `
  mutation UpdateMoveAction(
    $input: UpdateMoveActionInput!
    $condition: ModelMoveActionConditionInput
  ) {
    updateMoveAction(input: $input, condition: $condition) {
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
export const deleteMoveAction = /* GraphQL */ `
  mutation DeleteMoveAction(
    $input: DeleteMoveActionInput!
    $condition: ModelMoveActionConditionInput
  ) {
    deleteMoveAction(input: $input, condition: $condition) {
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
