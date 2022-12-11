import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { shuffleArray } from "../utility/shuffleArray";

interface Props {
  children: ReactNode;
}

interface GameContextInterface {
  screen: string;
  theme: string;
  sound: string;
  players: number;
  boardSize: number;
  showMenu: boolean;
  activePlayer: number;
  boards: BoardInterface[];
  activeItems: BoardItemInterface[];
  showNewScreen: boolean;
  disabled: boolean;
  showConfirmWindow: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNewScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setSound: React.Dispatch<React.SetStateAction<string>>;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
  setBoardSize: React.Dispatch<React.SetStateAction<number>>;
  setActivePlayer: React.Dispatch<React.SetStateAction<number>>;
  setBoards: React.Dispatch<React.SetStateAction<BoardInterface[]>>;
  setActiveItems: React.Dispatch<React.SetStateAction<BoardItemInterface[]>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConfirmWindow: React.Dispatch<React.SetStateAction<boolean>>;
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

const GameContextProvider = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNewScreen, setShowNewScreen] = useState(false);
  const [screen, setScreen] = useState("welcome");
  const [theme, setTheme] = useState("numbers");
  const [sound, setSound] = useState("on");
  const [players, setPlayers] = useState(1);
  const [boardSize, setBoardSize] = useState(4);
  const [activePlayer, setActivePlayer] = useState(1);
  const [playersFinished, setPlayersFinished] = useState(0);
  const [boards, setBoards] = useState<BoardInterface[]>(generateBoards());
  const [activeItems, setActiveItems] = useState<BoardItemInterface[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [showConfirmWindow, setShowConfirmWindow] = useState(false);

  function generateBoard() {
    let arr: number[] = [];
    for (let i = 0; i < boardSize * boardSize; i += 2) {
      const value: number = Math.floor(Math.random() * 16);
      arr.push(value);
      arr.push(value);
    }
    return shuffleArray(arr).map((value, index) => ({
      value,
      id: index,
      visible: false,
    }));
  }

  useEffect(() => {
    setBoards(generateBoards());
  }, [boardSize]);

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

  useEffect(() => {
    setBoards(generateBoards());
  }, [players]);

  function generateBoards() {
    let initialBoards = [];
    for (let i = 0; i < players; i++) {
      initialBoards.push({
        player: i + 1,
        moves: 0,
        board: generateBoard(),
        completed: 0,
      });
    }
    return initialBoards;
  }

  const restartGame = () => {
    setBoards(generateBoards());
    setActiveItems([]);
    setActivePlayer(1);
    setPlayersFinished(0);
    setScreen("game");
  };

  const exitGame = () => {
    setBoards(generateBoards());
    setActiveItems([]);
    setActivePlayer(1);
    setPlayersFinished(0);
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
        showNewScreen,
        disabled,
        showConfirmWindow,
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
        setShowNewScreen,
        setDisabled,
        exitGame,
        setShowConfirmWindow,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
