/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  playerOne: PlayerConfigInput,
  playerTwo: PlayerConfigInput,
  boardSize: BoardSizeInput,
  mode: GameMode,
  state: GameStateInput,
};

export type PlayerConfigInput = {
  id: string,
  pieces: Array< PieceInput >,
  time: number,
  health: number,
  moves: number,
  actionsPerMove: number,
  rating: number,
};

export type PieceInput = {
  type: PieceType,
  count: number,
};

export enum PieceType {
  deer = "deer",
  wolf = "wolf",
  hawk = "hawk",
}


export type BoardSizeInput = {
  x: number,
  y: number,
  z: number,
};

export enum GameMode {
  standard = "standard",
  no_turns = "no_turns",
}


export type GameStateInput = {
  active: boolean,
  turn: PlayerTurn,
  result?: GameResultInput | null,
};

export enum PlayerTurn {
  one = "one",
  two = "two",
  no_one = "no_one",
}


export type GameResultInput = {
  tie: ResultType,
  winMethod: WinMethod,
  winner?: string | null,
};

export enum ResultType {
  win = "win",
  tie = "tie",
  cancel = "cancel",
}


export enum WinMethod {
  points = "points",
  moves = "moves",
  time = "time",
  forfeit = "forfeit",
}


export type ModelGameConditionInput = {
  mode?: ModelGameModeInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelGameModeInput = {
  eq?: GameMode | null,
  ne?: GameMode | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  playerOne: PlayerConfig,
  playerTwo: PlayerConfig,
  boardSize: BoardSize,
  mode: GameMode,
  state: GameState,
  moves?: ModelMoveConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type PlayerConfig = {
  __typename: "PlayerConfig",
  id: string,
  pieces:  Array<Piece >,
  time: number,
  health: number,
  moves: number,
  actionsPerMove: number,
  rating: number,
};

export type Piece = {
  __typename: "Piece",
  type: PieceType,
  count: number,
};

export type BoardSize = {
  __typename: "BoardSize",
  x: number,
  y: number,
  z: number,
};

export type GameState = {
  __typename: "GameState",
  active: boolean,
  turn: PlayerTurn,
  result?: GameResult | null,
};

export type GameResult = {
  __typename: "GameResult",
  tie: ResultType,
  winMethod: WinMethod,
  winner?: string | null,
};

export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items?:  Array<Move | null > | null,
  nextToken?: string | null,
};

export type Move = {
  __typename: "Move",
  id: string,
  gameID: string,
  moveID: string,
  player: string,
  action?: ModelMoveActionConnection | null,
  game?: Game | null,
  timeLeft?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMoveActionConnection = {
  __typename: "ModelMoveActionConnection",
  items?:  Array<MoveAction | null > | null,
  nextToken?: string | null,
};

export type MoveAction = {
  __typename: "MoveAction",
  id: string,
  actionID: string,
  moveID: string,
  move?: Move | null,
  pieceType: string,
  pieceFrom: Coordinate,
  pieceTo: Coordinate,
  createdAt: string,
  updatedAt: string,
};

export type Coordinate = {
  __typename: "Coordinate",
  x: number,
  y: number,
  z: number,
};

export type UpdateGameInput = {
  id: string,
  playerOne?: PlayerConfigInput | null,
  playerTwo?: PlayerConfigInput | null,
  boardSize?: BoardSizeInput | null,
  mode?: GameMode | null,
  state?: GameStateInput | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateMoveInput = {
  id?: string | null,
  gameID: string,
  moveID: string,
  player: string,
  timeLeft?: number | null,
};

export type ModelMoveConditionInput = {
  gameID?: ModelIDInput | null,
  moveID?: ModelIDInput | null,
  player?: ModelIDInput | null,
  timeLeft?: ModelIntInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMoveInput = {
  id: string,
  gameID?: string | null,
  moveID?: string | null,
  player?: string | null,
  timeLeft?: number | null,
};

export type DeleteMoveInput = {
  id: string,
};

export type CreateMoveActionInput = {
  id?: string | null,
  actionID: string,
  moveID: string,
  pieceType: string,
  pieceFrom: CoordinateInput,
  pieceTo: CoordinateInput,
};

export type CoordinateInput = {
  x: number,
  y: number,
  z: number,
};

export type ModelMoveActionConditionInput = {
  actionID?: ModelIDInput | null,
  moveID?: ModelIDInput | null,
  pieceType?: ModelStringInput | null,
  and?: Array< ModelMoveActionConditionInput | null > | null,
  or?: Array< ModelMoveActionConditionInput | null > | null,
  not?: ModelMoveActionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMoveActionInput = {
  id: string,
  actionID?: string | null,
  moveID?: string | null,
  pieceType?: string | null,
  pieceFrom?: CoordinateInput | null,
  pieceTo?: CoordinateInput | null,
};

export type DeleteMoveActionInput = {
  id: string,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  mode?: ModelGameModeInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  moveID?: ModelIDInput | null,
  player?: ModelIDInput | null,
  timeLeft?: ModelIntInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
};

export type ModelMoveActionFilterInput = {
  id?: ModelIDInput | null,
  actionID?: ModelIDInput | null,
  moveID?: ModelIDInput | null,
  pieceType?: ModelStringInput | null,
  and?: Array< ModelMoveActionFilterInput | null > | null,
  or?: Array< ModelMoveActionFilterInput | null > | null,
  not?: ModelMoveActionFilterInput | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMoveMutationVariables = {
  input: CreateMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type CreateMoveMutation = {
  createMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMoveMutationVariables = {
  input: UpdateMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type UpdateMoveMutation = {
  updateMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMoveMutationVariables = {
  input: DeleteMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type DeleteMoveMutation = {
  deleteMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMoveActionMutationVariables = {
  input: CreateMoveActionInput,
  condition?: ModelMoveActionConditionInput | null,
};

export type CreateMoveActionMutation = {
  createMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMoveActionMutationVariables = {
  input: UpdateMoveActionInput,
  condition?: ModelMoveActionConditionInput | null,
};

export type UpdateMoveActionMutation = {
  updateMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMoveActionMutationVariables = {
  input: DeleteMoveActionInput,
  condition?: ModelMoveActionConditionInput | null,
};

export type DeleteMoveActionMutation = {
  deleteMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMoveQueryVariables = {
  id: string,
};

export type GetMoveQuery = {
  getMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMovesQueryVariables = {
  filter?: ModelMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMovesQuery = {
  listMoves?:  {
    __typename: "ModelMoveConnection",
    items?:  Array< {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMoveActionQueryVariables = {
  id: string,
};

export type GetMoveActionQuery = {
  getMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMoveActionsQueryVariables = {
  filter?: ModelMoveActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoveActionsQuery = {
  listMoveActions?:  {
    __typename: "ModelMoveActionConnection",
    items?:  Array< {
      __typename: "MoveAction",
      id: string,
      actionID: string,
      moveID: string,
      move?:  {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pieceType: string,
      pieceFrom:  {
        __typename: "Coordinate",
        x: number,
        y: number,
        z: number,
      },
      pieceTo:  {
        __typename: "Coordinate",
        x: number,
        y: number,
        z: number,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    playerOne:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    playerTwo:  {
      __typename: "PlayerConfig",
      id: string,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      time: number,
      health: number,
      moves: number,
      actionsPerMove: number,
      rating: number,
    },
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      active: boolean,
      turn: PlayerTurn,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items?:  Array< {
        __typename: "Move",
        id: string,
        gameID: string,
        moveID: string,
        player: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMoveSubscription = {
  onCreateMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMoveSubscription = {
  onUpdateMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMoveSubscription = {
  onDeleteMove?:  {
    __typename: "Move",
    id: string,
    gameID: string,
    moveID: string,
    player: string,
    action?:  {
      __typename: "ModelMoveActionConnection",
      items?:  Array< {
        __typename: "MoveAction",
        id: string,
        actionID: string,
        moveID: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    game?:  {
      __typename: "Game",
      id: string,
      playerOne:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      playerTwo:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
      },
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        active: boolean,
        turn: PlayerTurn,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMoveActionSubscription = {
  onCreateMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMoveActionSubscription = {
  onUpdateMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMoveActionSubscription = {
  onDeleteMoveAction?:  {
    __typename: "MoveAction",
    id: string,
    actionID: string,
    moveID: string,
    move?:  {
      __typename: "Move",
      id: string,
      gameID: string,
      moveID: string,
      player: string,
      action?:  {
        __typename: "ModelMoveActionConnection",
        nextToken?: string | null,
      } | null,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pieceType: string,
    pieceFrom:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    pieceTo:  {
      __typename: "Coordinate",
      x: number,
      y: number,
      z: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
