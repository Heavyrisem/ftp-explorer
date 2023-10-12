export enum ItemType {
  FILE,
  DIRECTORY,
}

export interface ItemInfo {
  name: string;
  path: string;
  ext: string;
  created: Date;
  type: ItemType;
}
