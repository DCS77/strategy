export enum TabType {
  Game,
  Info,
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