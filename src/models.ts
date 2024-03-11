export interface EmojiMapInterface {
  [key: number]: string;
}

export interface BoardItemInterface {
  id: number;
  value: number;
  visible: boolean;
}

export interface BoardInterface {
  player: number;
  moves: number;
  board: BoardItemInterface[];
  completed: number;
}
