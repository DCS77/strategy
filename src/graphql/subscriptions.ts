/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePendingGame = /* GraphQL */ `
  subscription OnCreatePendingGame {
    onCreatePendingGame {
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
export const onUpdatePendingGame = /* GraphQL */ `
  subscription OnUpdatePendingGame {
    onUpdatePendingGame {
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
export const onDeletePendingGame = /* GraphQL */ `
  subscription OnDeletePendingGame {
    onDeletePendingGame {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateMove = /* GraphQL */ `
  subscription OnCreateMove {
    onCreateMove {
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
export const onUpdateMove = /* GraphQL */ `
  subscription OnUpdateMove {
    onUpdateMove {
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
export const onDeleteMove = /* GraphQL */ `
  subscription OnDeleteMove {
    onDeleteMove {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
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
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
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
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
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
export const onCreatePlayerConfig = /* GraphQL */ `
  subscription OnCreatePlayerConfig {
    onCreatePlayerConfig {
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
export const onUpdatePlayerConfig = /* GraphQL */ `
  subscription OnUpdatePlayerConfig {
    onUpdatePlayerConfig {
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
export const onDeletePlayerConfig = /* GraphQL */ `
  subscription OnDeletePlayerConfig {
    onDeletePlayerConfig {
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
export const onCreateArmy = /* GraphQL */ `
  subscription OnCreateArmy {
    onCreateArmy {
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
    }
  }
`;
export const onUpdateArmy = /* GraphQL */ `
  subscription OnUpdateArmy {
    onUpdateArmy {
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
    }
  }
`;
export const onDeleteArmy = /* GraphQL */ `
  subscription OnDeleteArmy {
    onDeleteArmy {
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
    }
  }
`;
