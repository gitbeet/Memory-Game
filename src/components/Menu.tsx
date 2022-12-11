import { useState } from "react";
import { useGameContext } from "../context/gameContext";
import MenuSetting from "./MenuSetting";

const Menu = () => {
  const {
    players,
    screen,
    sound,
    theme,
    boardSize,
    setShowMenu,
    setTheme,
    setPlayers,
    setSound,
    setBoardSize,
    setScreen,
    restartGame,
  } = useGameContext();
  const [tempPlayers, setTempPlayers] = useState<number | string>(players);
  const [tempSound, setTempSound] = useState(sound);
  const [tempTheme, setTempTheme] = useState(theme);
  const [tempBoardSize, setTempBoardSize] = useState(
    `${boardSize}x${boardSize}`
  );

  const saveChanges = () => {
    setShowMenu(false);
    setTheme(tempTheme);
    setPlayers(Number(tempPlayers));
    setSound(tempSound);
    setBoardSize(parseInt(tempBoardSize[0]));
  };

  const exit = () => {
    setScreen("welcome");
    setShowMenu(false);
  };
  return (
    <>
      <div className="fixed z-10 bg-neutral-100 rounded-md  p-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={() => setShowMenu(false)}
          className="text-right cursor-pointer"
        >
          x
        </div>
        <h1 className="text-3xl">Menu</h1>
        <div className="space-y-8">
          <MenuSetting
            disabledInGame={false}
            title="Theme"
            tempValue={tempTheme}
            setTempValue={setTempTheme}
            options={["Numbers", "Icons"]}
          />
          <MenuSetting
            disabledInGame={false}
            title="Sound"
            tempValue={tempSound}
            setTempValue={setTempSound}
            options={["On", "Off"]}
          />
          <MenuSetting
            disabledInGame={true}
            title="Players"
            tempValue={tempPlayers.toString()}
            setTempValue={setTempPlayers}
            options={["1", "2", "3", "4"]}
          />
          <MenuSetting
            disabledInGame={true}
            title="Board Size"
            tempValue={tempBoardSize}
            setTempValue={setTempBoardSize}
            options={["4x4", "6x6"]}
          />
        </div>
        <div>
          <div className="space-x-8">
            <button onClick={() => saveChanges()}>Accept</button>
            <button onClick={() => setShowMenu(false)}>Cancel</button>
          </div>
          <button onClick={() => exit()}>Exit</button>
        </div>
      </div>
      <div className="fixed z-4 top-0 bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-25"></div>
    </>
  );
};

export default Menu;
