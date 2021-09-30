/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateMove = /* GraphQL */ `
  subscription OnCreateMove {
    onCreateMove {
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
export const onUpdateMove = /* GraphQL */ `
  subscription OnUpdateMove {
    onUpdateMove {
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
export const onDeleteMove = /* GraphQL */ `
  subscription OnDeleteMove {
    onDeleteMove {
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
export const onCreateMoveAction = /* GraphQL */ `
  subscription OnCreateMoveAction {
    onCreateMoveAction {
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
export const onUpdateMoveAction = /* GraphQL */ `
  subscription OnUpdateMoveAction {
    onUpdateMoveAction {
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
export const onDeleteMoveAction = /* GraphQL */ `
  subscription OnDeleteMoveAction {
    onDeleteMoveAction {
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
