import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { shuffleArray } from "../utility/shuffleArray";
import { BoardInterface, BoardItemInterface, BoardSizeOptionType, PlayersOptionType, ScreenType, SoundOptionType, ThemeOptionType } from "../models";

interface Props {
  children: ReactNode;
}



interface GameContextInterface {
  screen: ScreenType;
  theme: ThemeOptionType;
  sound: SoundOptionType;
  players: PlayersOptionType;
  boardSize: BoardSizeOptionType;
  showMenu: boolean;
  activePlayer: number;
  boards: BoardInterface[];
  activeItems: BoardItemInterface[];
  disabled: boolean;
  showConfirmWindow: boolean;
  timer: number;
  activeVisible: boolean;
  showRulesWindow: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<ScreenType>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeOptionType>>;
  setSound: React.Dispatch<React.SetStateAction<SoundOptionType>>;
  setPlayers: React.Dispatch<React.SetStateAction<PlayersOptionType>>;
  setBoardSize: React.Dispatch<React.SetStateAction<BoardSizeOptionType>>;
  setActivePlayer: React.Dispatch<React.SetStateAction<number>>;
  setBoards: React.Dispatch<React.SetStateAction<BoardInterface[]>>;
  setActiveItems: React.Dispatch<React.SetStateAction<BoardItemInterface[]>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConfirmWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setActiveVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRulesWindow: React.Dispatch<React.SetStateAction<boolean>>;
  toggleItemVisible: (id: number) => void;
  restartGame: () => void;
  exitGame: () => void;
}

const gameContext = createContext<GameContextInterface | null>(null);

export const useGameContext = () => {
  const context = useContext(gameContext);
  if (!context) throw new Error("Game context was not found.");
  return context;
};

function generateBoard(boardSize: number) {
  console.log("started generating board");
  let arr: number[] = [];
  for (let i = 0; i < boardSize * boardSize; i += 2) {
    let value: number = Math.floor(Math.random() * boardSize * boardSize);
    while (arr.findIndex((val) => val === value) !== -1) {
      value = Math.floor(Math.random() * 16);
    }
    arr.push(value);
    arr.push(value);
  }
  console.log("finished generating board");
  return shuffleArray(arr).map((value, index) => ({
    value,
    id: index,
    visible: false,
  }));
}

function generateBoards(boardSize: number, players: number) {
  console.log("started generating boardS");
  let initialBoards = [];
  for (let i = 0; i < players; i++) {
    initialBoards.push({
      player: i + 1,
      moves: 0,
      board: generateBoard(boardSize),
      completed: 0,
    });
  }
  console.log("finished generating boardS");
  return initialBoards;
}

const GameContextProvider = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirmWindow, setShowConfirmWindow] = useState(false);
  const [showRulesWindow, setShowRulesWindow] = useState(false);
  const [screen, setScreen] = useState<ScreenType>("welcome");
  const [theme, setTheme] = useState<ThemeOptionType>("numbers");
  const [sound, setSound] = useState<"on" | "off">("off");
  const [players, setPlayers] = useState<PlayersOptionType>(1);
  const [boardSize, setBoardSize] = useState<BoardSizeOptionType>(4);
  const [activePlayer, setActivePlayer] = useState(1);
  const [playersFinished, setPlayersFinished] = useState(0);
  const [boards, setBoards] = useState<BoardInterface[]>(
    generateBoards(boardSize, players)
  );
  const [activeItems, setActiveItems] = useState<BoardItemInterface[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [activeVisible, setActiveVisible] = useState(false);

  useEffect(() => {
    if (!players && !boardSize) return;
    setBoards(generateBoards(boardSize, players));
  }, [boardSize, players]);

  useEffect(() => {
    setActivePlayer(playersFinished + 1);
    if (playersFinished === players) {
      setScreen("gameOver");
    }
  }, [playersFinished]);

  // readability ???
  useEffect(() => {
    if (activeItems == null || activeItems.length < 2) {
      return;
    }
    if (activeItems[0].value !== activeItems[1].value) {
      setDisabled(true);
      setTimeout(() => {
        setBoards((prev) => {
          return prev.map((b) => {
            console.log(b.player, activePlayer);
            return b.player === activePlayer
              ? {
                  ...b,
                  moves: b.moves + 1,
                  board: b.board.map((boardItem) => {
                    return boardItem.id === activeItems[0].id ||
                      boardItem.id === activeItems[1].id
                      ? { ...boardItem, visible: false }
                      : boardItem;
                  }),
                }
              : b;
          });
        });
        setActiveItems([]);
        setDisabled(false);
      }, 700);
    } else {
      setBoards((prev) => {
        return prev.map((b) => {
          if (b.player === activePlayer) {
            if (b.completed === boardSize * boardSize - 2) {
              setPlayersFinished((prev) => prev + 1);
            }
            return { ...b, moves: b.moves + 1, completed: b.completed + 2 };
          } else {
            return b;
          }
        });
      });
      setActiveItems([]);
    }
  }, [boards]);

  const restartGame = () => {
    setBoards(generateBoards(boardSize, players));
    setActiveItems([]);
    setActivePlayer(1);
    setPlayersFinished(0);
    setTimer(0);
    setScreen("game");
  };

  const exitGame = () => {
    setBoards(generateBoards(boardSize, players));
    setActiveItems([]);
    setActivePlayer(1);
    setPlayersFinished(0);
    setTimer(0);
    setScreen("welcome");
  };

  const toggleItemVisible = (id: number): void => {
    // ???
    setBoards((prev) =>
      prev.map((b) => {
        return b.player === activePlayer
          ? {
              ...b,
              board: b.board.map((item) => {
                return item.id === id ? { ...item, visible: true } : item;
              }),
            }
          : b;
      })
    );
    // ANY ??!?!
    setActiveItems((prev: any) => {
      return [
        ...prev,
        boards
          .find((board) => board.player === activePlayer)
          ?.board.find((item) => {
            return item.id === id;
          }),
      ];
    });
    console.log(activeItems);
  };

  return (
    <gameContext.Provider
      value={{
        screen,
        theme,
        sound,
        players,
        boardSize,
        showMenu,
        activePlayer,
        boards,
        activeItems,
        disabled,
        showConfirmWindow,
        timer,
        activeVisible,
        showRulesWindow,
        setScreen,
        setTheme,
        setSound,
        setPlayers,
        setBoardSize,
        setShowMenu,
        setActivePlayer,
        setBoards,
        setActiveItems,
        toggleItemVisible,
        restartGame,
        setDisabled,
        exitGame,
        setShowConfirmWindow,
        setTimer,
        setActiveVisible,
        setShowRulesWindow,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
