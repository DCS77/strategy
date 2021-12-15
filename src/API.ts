/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePendingGameInput = {
  id?: string | null,
  expiry: number,
  pendingGameGameId: string,
};

export type ModelPendingGameConditionInput = {
  expiry?: ModelIntInput | null,
  and?: Array< ModelPendingGameConditionInput | null > | null,
  or?: Array< ModelPendingGameConditionInput | null > | null,
  not?: ModelPendingGameConditionInput | null,
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


export type PendingGame = {
  __typename: "PendingGame",
  id: string,
  game: Game,
  expiry: number,
  createdAt: string,
  updatedAt: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  playerOne: PlayerConfig,
  playerTwo?: PlayerConfig | null,
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
  createdAt: string,
  updatedAt: string,
};

export type Piece = {
  __typename: "Piece",
  type: PieceType,
  count: number,
};

export enum PieceType {
  adventurer = "adventurer",
  commoner = "commoner",
  engineer = "engineer",
  knight = "knight",
  messenger = "messenger",
  smuggler = "smuggler",
}


export type BoardSize = {
  __typename: "BoardSize",
  x: number,
  y: number,
  z: number,
};

export enum GameMode {
  standard = "standard",
  no_turns = "no_turns",
}


export type GameState = {
  __typename: "GameState",
  state: State,
  turn: number,
  result?: GameResult | null,
};

export enum State {
  pending = "pending",
  active = "active",
  paused = "paused",
  done = "done",
}


export type GameResult = {
  __typename: "GameResult",
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


export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items:  Array<Move >,
  nextToken?: string | null,
};

export type Move = {
  __typename: "Move",
  id: string,
  game?: Game | null,
  player: PlayerConfig,
  action?: ModelActionConnection | null,
  timeLeft?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection",
  items:  Array<Action >,
  nextToken?: string | null,
};

export type Action = {
  __typename: "Action",
  id: string,
  move: Move,
  player: PlayerConfig,
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

export type UpdatePendingGameInput = {
  id: string,
  expiry?: number | null,
  pendingGameGameId?: string | null,
};

export type DeletePendingGameInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  boardSize: BoardSizeInput,
  mode: GameMode,
  state: GameStateInput,
  gamePlayerOneId: string,
  gamePlayerTwoId?: string | null,
};

export type BoardSizeInput = {
  x: number,
  y: number,
  z: number,
};

export type GameStateInput = {
  state: State,
  turn: number,
  result?: GameResultInput | null,
};

export type GameResultInput = {
  tie: ResultType,
  winMethod: WinMethod,
  winner?: string | null,
};

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

export type UpdateGameInput = {
  id: string,
  boardSize?: BoardSizeInput | null,
  mode?: GameMode | null,
  state?: GameStateInput | null,
  gamePlayerOneId?: string | null,
  gamePlayerTwoId?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateMoveInput = {
  id?: string | null,
  timeLeft?: number | null,
  moveGameId?: string | null,
  movePlayerId: string,
};

export type ModelMoveConditionInput = {
  timeLeft?: ModelIntInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
};

export type UpdateMoveInput = {
  id: string,
  timeLeft?: number | null,
  moveGameId?: string | null,
  movePlayerId?: string | null,
};

export type DeleteMoveInput = {
  id: string,
};

export type CreateActionInput = {
  id?: string | null,
  pieceType: string,
  pieceFrom: CoordinateInput,
  pieceTo: CoordinateInput,
  actionMoveId: string,
  actionPlayerId: string,
};

export type CoordinateInput = {
  x: number,
  y: number,
  z: number,
};

export type ModelActionConditionInput = {
  pieceType?: ModelStringInput | null,
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateActionInput = {
  id: string,
  pieceType?: string | null,
  pieceFrom?: CoordinateInput | null,
  pieceTo?: CoordinateInput | null,
  actionMoveId?: string | null,
  actionPlayerId?: string | null,
};

export type DeleteActionInput = {
  id: string,
};

export type CreatePlayerConfigInput = {
  id?: string | null,
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

export type ModelPlayerConfigConditionInput = {
  time?: ModelIntInput | null,
  health?: ModelIntInput | null,
  moves?: ModelIntInput | null,
  actionsPerMove?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPlayerConfigConditionInput | null > | null,
  or?: Array< ModelPlayerConfigConditionInput | null > | null,
  not?: ModelPlayerConfigConditionInput | null,
};

export type UpdatePlayerConfigInput = {
  id: string,
  pieces?: Array< PieceInput > | null,
  time?: number | null,
  health?: number | null,
  moves?: number | null,
  actionsPerMove?: number | null,
  rating?: number | null,
};

export type DeletePlayerConfigInput = {
  id: string,
};

export type CreateArmyInput = {
  id?: string | null,
  player: string,
  name: string,
  wins: number,
  losses: number,
  pieces: Array< PieceInput >,
};

export type ModelArmyConditionInput = {
  player?: ModelIDInput | null,
  name?: ModelStringInput | null,
  wins?: ModelIntInput | null,
  losses?: ModelIntInput | null,
  and?: Array< ModelArmyConditionInput | null > | null,
  or?: Array< ModelArmyConditionInput | null > | null,
  not?: ModelArmyConditionInput | null,
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

export type Army = {
  __typename: "Army",
  id: string,
  player: string,
  name: string,
  wins: number,
  losses: number,
  pieces:  Array<Piece >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArmyInput = {
  id: string,
  player?: string | null,
  name?: string | null,
  wins?: number | null,
  losses?: number | null,
  pieces?: Array< PieceInput > | null,
};

export type DeleteArmyInput = {
  id: string,
};

export type ModelPendingGameFilterInput = {
  id?: ModelIDInput | null,
  expiry?: ModelIntInput | null,
  and?: Array< ModelPendingGameFilterInput | null > | null,
  or?: Array< ModelPendingGameFilterInput | null > | null,
  not?: ModelPendingGameFilterInput | null,
};

export type ModelPendingGameConnection = {
  __typename: "ModelPendingGameConnection",
  items:  Array<PendingGame >,
  nextToken?: string | null,
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
  items:  Array<Game >,
  nextToken?: string | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  timeLeft?: ModelIntInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null,
  pieceType?: ModelStringInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
};

export type ModelPlayerConfigFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelIntInput | null,
  health?: ModelIntInput | null,
  moves?: ModelIntInput | null,
  actionsPerMove?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPlayerConfigFilterInput | null > | null,
  or?: Array< ModelPlayerConfigFilterInput | null > | null,
  not?: ModelPlayerConfigFilterInput | null,
};

export type ModelPlayerConfigConnection = {
  __typename: "ModelPlayerConfigConnection",
  items:  Array<PlayerConfig >,
  nextToken?: string | null,
};

export type ModelArmyFilterInput = {
  id?: ModelIDInput | null,
  player?: ModelIDInput | null,
  name?: ModelStringInput | null,
  wins?: ModelIntInput | null,
  losses?: ModelIntInput | null,
  and?: Array< ModelArmyFilterInput | null > | null,
  or?: Array< ModelArmyFilterInput | null > | null,
  not?: ModelArmyFilterInput | null,
};

export type ModelArmyConnection = {
  __typename: "ModelArmyConnection",
  items:  Array<Army >,
  nextToken?: string | null,
};

export type CreatePendingGameMutationVariables = {
  input: CreatePendingGameInput,
  condition?: ModelPendingGameConditionInput | null,
};

export type CreatePendingGameMutation = {
  createPendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePendingGameMutationVariables = {
  input: UpdatePendingGameInput,
  condition?: ModelPendingGameConditionInput | null,
};

export type UpdatePendingGameMutation = {
  updatePendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePendingGameMutationVariables = {
  input: DeletePendingGameInput,
  condition?: ModelPendingGameConditionInput | null,
};

export type DeletePendingGameMutation = {
  deletePendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateActionMutationVariables = {
  input: CreateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type CreateActionMutation = {
  createAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type UpdateActionMutationVariables = {
  input: UpdateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type UpdateActionMutation = {
  updateAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type DeleteActionMutationVariables = {
  input: DeleteActionInput,
  condition?: ModelActionConditionInput | null,
};

export type DeleteActionMutation = {
  deleteAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type CreatePlayerConfigMutationVariables = {
  input: CreatePlayerConfigInput,
  condition?: ModelPlayerConfigConditionInput | null,
};

export type CreatePlayerConfigMutation = {
  createPlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerConfigMutationVariables = {
  input: UpdatePlayerConfigInput,
  condition?: ModelPlayerConfigConditionInput | null,
};

export type UpdatePlayerConfigMutation = {
  updatePlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerConfigMutationVariables = {
  input: DeletePlayerConfigInput,
  condition?: ModelPlayerConfigConditionInput | null,
};

export type DeletePlayerConfigMutation = {
  deletePlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArmyMutationVariables = {
  input: CreateArmyInput,
  condition?: ModelArmyConditionInput | null,
};

export type CreateArmyMutation = {
  createArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArmyMutationVariables = {
  input: UpdateArmyInput,
  condition?: ModelArmyConditionInput | null,
};

export type UpdateArmyMutation = {
  updateArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArmyMutationVariables = {
  input: DeleteArmyInput,
  condition?: ModelArmyConditionInput | null,
};

export type DeleteArmyMutation = {
  deleteArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPendingGameQueryVariables = {
  id: string,
};

export type GetPendingGameQuery = {
  getPendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPendingGamesQueryVariables = {
  filter?: ModelPendingGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPendingGamesQuery = {
  listPendingGames?:  {
    __typename: "ModelPendingGameConnection",
    items:  Array< {
      __typename: "PendingGame",
      id: string,
      game:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      },
      expiry: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
    items:  Array< {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
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
    items:  Array< {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetActionQueryVariables = {
  id: string,
};

export type GetActionQuery = {
  getAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionsQuery = {
  listActions?:  {
    __typename: "ModelActionConnection",
    items:  Array< {
      __typename: "Action",
      id: string,
      move:  {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
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
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerConfigQueryVariables = {
  id: string,
};

export type GetPlayerConfigQuery = {
  getPlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerConfigsQueryVariables = {
  filter?: ModelPlayerConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerConfigsQuery = {
  listPlayerConfigs?:  {
    __typename: "ModelPlayerConfigConnection",
    items:  Array< {
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
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetArmyQueryVariables = {
  id: string,
};

export type GetArmyQuery = {
  getArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArmiesQueryVariables = {
  filter?: ModelArmyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArmiesQuery = {
  listArmies?:  {
    __typename: "ModelArmyConnection",
    items:  Array< {
      __typename: "Army",
      id: string,
      player: string,
      name: string,
      wins: number,
      losses: number,
      pieces:  Array< {
        __typename: "Piece",
        type: PieceType,
        count: number,
      } >,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePendingGameSubscription = {
  onCreatePendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePendingGameSubscription = {
  onUpdatePendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePendingGameSubscription = {
  onDeletePendingGame?:  {
    __typename: "PendingGame",
    id: string,
    game:  {
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    expiry: number,
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
      createdAt: string,
      updatedAt: string,
    },
    playerTwo?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    boardSize:  {
      __typename: "BoardSize",
      x: number,
      y: number,
      z: number,
    },
    mode: GameMode,
    state:  {
      __typename: "GameState",
      state: State,
      turn: number,
      result?:  {
        __typename: "GameResult",
        tie: ResultType,
        winMethod: WinMethod,
        winner?: string | null,
      } | null,
    },
    moves?:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        id: string,
        timeLeft?: number | null,
        createdAt: string,
        updatedAt: string,
      } >,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
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
        createdAt: string,
        updatedAt: string,
      },
      playerTwo?:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      boardSize:  {
        __typename: "BoardSize",
        x: number,
        y: number,
        z: number,
      },
      mode: GameMode,
      state:  {
        __typename: "GameState",
        state: State,
        turn: number,
      },
      moves?:  {
        __typename: "ModelMoveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
    action?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        pieceType: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    timeLeft?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateActionSubscription = {
  onCreateAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type OnUpdateActionSubscription = {
  onUpdateAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type OnDeleteActionSubscription = {
  onDeleteAction?:  {
    __typename: "Action",
    id: string,
    move:  {
      __typename: "Move",
      id: string,
      game?:  {
        __typename: "Game",
        id: string,
        mode: GameMode,
        createdAt: string,
        updatedAt: string,
      } | null,
      player:  {
        __typename: "PlayerConfig",
        id: string,
        time: number,
        health: number,
        moves: number,
        actionsPerMove: number,
        rating: number,
        createdAt: string,
        updatedAt: string,
      },
      action?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
      } | null,
      timeLeft?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
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
      createdAt: string,
      updatedAt: string,
    },
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

export type OnCreatePlayerConfigSubscription = {
  onCreatePlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerConfigSubscription = {
  onUpdatePlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerConfigSubscription = {
  onDeletePlayerConfig?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArmySubscription = {
  onCreateArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArmySubscription = {
  onUpdateArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArmySubscription = {
  onDeleteArmy?:  {
    __typename: "Army",
    id: string,
    player: string,
    name: string,
    wins: number,
    losses: number,
    pieces:  Array< {
      __typename: "Piece",
      type: PieceType,
      count: number,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
