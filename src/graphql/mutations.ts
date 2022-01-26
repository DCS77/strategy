/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPendingGame = /* GraphQL */ `
  mutation CreatePendingGame(
    $input: CreatePendingGameInput!
    $condition: ModelPendingGameConditionInput
  ) {
    createPendingGame(input: $input, condition: $condition) {
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
export const updatePendingGame = /* GraphQL */ `
  mutation UpdatePendingGame(
    $input: UpdatePendingGameInput!
    $condition: ModelPendingGameConditionInput
  ) {
    updatePendingGame(input: $input, condition: $condition) {
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
export const deletePendingGame = /* GraphQL */ `
  mutation DeletePendingGame(
    $input: DeletePendingGameInput!
    $condition: ModelPendingGameConditionInput
  ) {
    deletePendingGame(input: $input, condition: $condition) {
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
export const createMove = /* GraphQL */ `
  mutation CreateMove(
    $input: CreateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    createMove(input: $input, condition: $condition) {
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
export const updateMove = /* GraphQL */ `
  mutation UpdateMove(
    $input: UpdateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    updateMove(input: $input, condition: $condition) {
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
export const deleteMove = /* GraphQL */ `
  mutation DeleteMove(
    $input: DeleteMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    deleteMove(input: $input, condition: $condition) {
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
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
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
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
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
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
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
export const createPlayerConfig = /* GraphQL */ `
  mutation CreatePlayerConfig(
    $input: CreatePlayerConfigInput!
    $condition: ModelPlayerConfigConditionInput
  ) {
    createPlayerConfig(input: $input, condition: $condition) {
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
export const updatePlayerConfig = /* GraphQL */ `
  mutation UpdatePlayerConfig(
    $input: UpdatePlayerConfigInput!
    $condition: ModelPlayerConfigConditionInput
  ) {
    updatePlayerConfig(input: $input, condition: $condition) {
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
export const deletePlayerConfig = /* GraphQL */ `
  mutation DeletePlayerConfig(
    $input: DeletePlayerConfigInput!
    $condition: ModelPlayerConfigConditionInput
  ) {
    deletePlayerConfig(input: $input, condition: $condition) {
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
export const createArmy = /* GraphQL */ `
  mutation CreateArmy(
    $input: CreateArmyInput!
    $condition: ModelArmyConditionInput
  ) {
    createArmy(input: $input, condition: $condition) {
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
export const updateArmy = /* GraphQL */ `
  mutation UpdateArmy(
    $input: UpdateArmyInput!
    $condition: ModelArmyConditionInput
  ) {
    updateArmy(input: $input, condition: $condition) {
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
export const deleteArmy = /* GraphQL */ `
  mutation DeleteArmy(
    $input: DeleteArmyInput!
    $condition: ModelArmyConditionInput
  ) {
    deleteArmy(input: $input, condition: $condition) {
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
