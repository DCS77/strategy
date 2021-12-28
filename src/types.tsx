export enum TabType {
  Army,
  Create,
  Edit,
  Game,
  Leaderboards,
  Learn,
  Info,
  Multiplayer,
  TV
}

export interface TabDetail {
  id: string;
  path: string;
  title?: string;
  type: TabType;
}

export interface TabDetails extends Array<TabDetail>{}
