import React, { useState } from "react";

interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardSize: React.Dispatch<React.SetStateAction<number>>;
  boardSize: number;
  players: number;
  sound: boolean;
  theme: string;
}

const Menu = ({
  setShowMenu,
  setTheme,
  setPlayers,
  setSound,
  setBoardSize,
  players,
  sound,
  theme,
  boardSize,
}: Props) => {
  const [tempPlayers, setTempPlayers] = useState(players);
  const [tempSound, setTempSound] = useState(sound);
  const [tempTheme, setTempTheme] = useState(theme);
  const [tempBoardSize, setTempBoardSize] = useState(boardSize);

  const saveChanges = () => {
    setShowMenu(false);
    setTheme(tempTheme);
    setPlayers(tempPlayers);
    setSound(tempSound);
    setBoardSize(tempBoardSize);
  };
  return (
    <>
      <div className="absolute z-10 left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 bg-white p-4">
        <div
          onClick={() => setShowMenu(false)}
          className="text-right cursor-pointer"
        >
          x
        </div>
        <h1 className="text-3xl">Menu</h1>
        <div className="flex space-x-8">
          <h1>Theme</h1>
          <div className="flex space-x-4">
            <button
              className={tempTheme === "numbers" ? "bg-red-400" : ""}
              onClick={() => setTempTheme("numbers")}
            >
              Numbers
            </button>
            <button
              className={tempTheme === "icons" ? "bg-red-400" : ""}
              onClick={() => setTempTheme("icons")}
            >
              Icons
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <h1>Sound</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setTempSound(true)}
              className={tempSound ? "bg-red-400" : ""}
            >
              On
            </button>
            <button
              onClick={() => setTempSound(false)}
              className={!tempSound ? "bg-red-400" : ""}
            >
              Off
            </button>
          </div>
        </div>
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
            <button onClick={() => setShowMenu(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="fixed z-4 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25"></div>
    </>
  );
};

export default Menu;
