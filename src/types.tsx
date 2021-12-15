export enum TabType {
  Army,
  Create,
  Game,
  Leaderboards,
  Learn,
  Info,
  Multiplayer,
  TV
}

export interface TabDetail {
  ID: string;
  path: string;
  title?: string;
  type: TabType;
  closeTabHandler: (ID: string, type: TabType) => void;
}

export interface TabDetails extends Array<TabDetail>{}