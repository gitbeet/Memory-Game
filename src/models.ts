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

export type ScreenType =  "welcome" | "game" | "gameOver"
export type ThemeOptionType = "numbers" | "emojis"
export type SoundOptionType = "on" | "off"
export type PlayersOptionType = 1 | 2 | 3 | 4
export type BoardSizeOptionType = 4 | 6