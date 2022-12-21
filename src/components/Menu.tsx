import { useState } from "react";
import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import MenuSetting from "./MenuSetting";
import CloseButton from "./CloseButton";
import Button from "./Button";

const Menu = () => {
  const {
    players,
    screen,
    sound,
    theme,
    boardSize,
    showMenu,
    setShowMenu,
    setTheme,
    setPlayers,
    setSound,
    setBoardSize,
    setScreen,
    exitGame,
    setShowConfirmWindow,
  } = useGameContext();
  const [tempPlayers, setTempPlayers] = useState<number | string>(players);
  const [tempSound, setTempSound] = useState(sound);
  const [tempTheme, setTempTheme] = useState(theme);
  const [tempBoardSize, setTempBoardSize] = useState(
    `${boardSize}x${boardSize}`
  );

  const saveChanges = () => {
    setTheme(tempTheme);
    setPlayers(Number(tempPlayers));
    setSound(tempSound);
    setBoardSize(parseInt(tempBoardSize[0]));
    setShowMenu(false);
  };

  const exit = () => {
    setScreen("welcome");
    setShowMenu(false);
    exitGame();
  };
  return (
    <AnimatePresence>
      {showMenu ? (
        <>
          <motion.div
            initial={{ scale: 0.2, translateX: "-50%", translateY: "-50%" }}
            animate={{
              scale: [null, 1.05, 1],
              translateX: "-50%",
              translateY: "-50%",
              transition: { type: "spring", duration: 0.3, stiffness: 100 },
            }}
            exit={{
              opacity: [1, 1, 0],
              scale: [1, 1.05, 0],
              translateX: "-50%",
              translateY: "-50%",
              transition: { type: "spring", duration: 0.4, stiffness: 100 },
            }}
            className="fixed z-10 bg-neutral-100 rounded-md  p-8 w-max space-y-12  "
            style={{
              left: "50%",
              top: "50%",
            }}
          >
            <div className="absolute top-[1.5rem] left-[calc(100%-1.5rem)] -translate-x-full">
              <CloseButton onClick={() => setShowMenu(false)} />
            </div>
            <h1 className="text-3xl text-neutral-800 font-bold">Settings</h1>
            <div className="space-y-8  p-4">
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
                title="Board"
                tempValue={tempBoardSize}
                setTempValue={setTempBoardSize}
                options={["4x4", "6x6"]}
              />
              <div className="space-x-4">
                <Button text="Accept" onClick={saveChanges} />
                <Button text="Cancel" onClick={() => setShowMenu(false)} />
              </div>
            </div>
            {screen !== "welcome" && (
              <div className="space-y-4">
                <Button
                  text="Exit To Main Menu"
                  onClick={() => setShowConfirmWindow(true)}
                />
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed z-4 top-0 bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-25"
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Menu;
