import { useState } from "react";
import { useGameContext } from "../context/gameContext";

const NewGameScreen = () => {
  const {
    players,
    boardSize,
    theme,
    setScreen,
    setTheme,
    setPlayers,
    setBoardSize,
    setShowNewScreen,
  } = useGameContext();

  const [tempPlayers, setTempPlayers] = useState(players);
  const [tempTheme, setTempTheme] = useState(theme);
  const [tempBoardSize, setTempBoardSize] = useState(boardSize);

  const saveChanges = () => {
    setTheme(tempTheme);
    setPlayers(tempPlayers);
    setBoardSize(tempBoardSize);
    setShowNewScreen(false);
  };

  return (
    <>
      <div className="absolute z-10 left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 bg-white p-4">
        <div className="flex justify-between">
          <h1>Players</h1>
          <div className="flex space-x-4">
            <button
              onClick={() =>
                setTempPlayers((prev) => (prev < 2 ? prev : prev - 1))
              }
            >
              {"<"}
            </button>
            <p>{tempPlayers}</p>
            <button
              onClick={() =>
                setTempPlayers((prev) => (prev > 3 ? prev : prev + 1))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1>Board Size</h1>
            <div className="flex space-x-4">
              <button onClick={() => setTempBoardSize(4)}>{"<"}</button>
              <p>
                {tempBoardSize}x{tempBoardSize}
              </p>
              <button onClick={() => setTempBoardSize(6)}>{">"}</button>
            </div>
          </div>
        </div>
        <div>
          <div className="space-x-8">
            <button onClick={() => saveChanges()}>Accept</button>
            <button onClick={() => setShowNewScreen(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="fixed z-4 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25"></div>
    </>
  );
};

export default NewGameScreen;
