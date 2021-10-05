export enum TabType {
  Game,
  Info
}

export interface GameTabDetail {
  ID: string;
  GameID: string;
  Title?: string;
  Player?: string;
  Rating?: number;
  closeTabHandler: (ID: string) => void;
}

export interface InfoTabDetail {
  ID: string;
  InfoID: string;
  Title?: string;
  closeTabHandler: (ID: string) => void;
}

export interface TabDetails extends Array<GameTabDetail|InfoTabDetail>{}