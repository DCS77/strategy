export enum TabType {
  Game,
  Info
}

export interface GameTabDetail {
  GameID: string;
  Title?: string;
  Player?: string;
  Rating?: number;
  ID?: string;
}

export interface InfoTabDetail {
  InfoID: string;
  Title?: string;
  ID?: string;
}

export interface TabDetails extends Array<GameTabDetail|InfoTabDetail>{}