import { useState } from "react";
import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import MenuSetting from "./MenuSetting";
import CloseButton from "./CloseButton";
import Button from "./Button";
import { BoardSizeOptionType, PlayersOptionType, SoundOptionType } from "../models";

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
    setShowConfirmWindow,
  } = useGameContext();
  const [tempPlayers, setTempPlayers] = useState<PlayersOptionType>(players);
  const [tempSound, setTempSound] = useState<SoundOptionType>(sound);
  const [tempTheme, setTempTheme] = useState(theme);
  const [tempBoardSize, setTempBoardSize] = useState(
    `${boardSize}x${boardSize}`
  );

  const saveChanges = () => {
    setTheme(tempTheme);
    setSound(tempSound);
    setBoardSize(parseInt(tempBoardSize.split("")[0]) as BoardSizeOptionType || 4);
    setPlayers(tempPlayers);
    setShowMenu(false);
  };

  const cancelChanges = () => {
    setShowMenu(false);
    setTempBoardSize(`${boardSize}x${boardSize}`);
    setTempPlayers(players);
    setTempSound(sound);
    setTempTheme(theme);
  };

  return (
    <AnimatePresence>
      {showMenu ? (
        <>
          <motion.div
            initial={{
              scale: 0.2,
              translateX: "-50%",
              translateY: "-50%",
              left: "50%",
              top: "50%",
            }}
            animate={{
              scale: [null, 1.05, 1],

              transition: { type: "spring", duration: 0.3, stiffness: 100 },
            }}
            exit={{
              opacity: [1, 1, 0],
              scale: [1, 1.05, 0],

              transition: { type: "spring", duration: 0.4, stiffness: 100 },
            }}
            className="fixed z-10 bg-neutral-100 rounded-md px-4 py-8 md:px-12 md:py-12 w-[min(90%,420px)] space-y-8 md:space-y-12  "
          >
            <Button
              transparent
              onClick={() => setShowMenu(false)}
              text={
                <div className="absolute top-[1.5rem] left-[calc(100%-1.5rem)] -translate-x-full">
                  <CloseButton />
                </div>
              }
            />

            <h1 className="text-2xl md:text-3xl text-neutral-800 font-bold">
              Settings
            </h1>
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
                title="Board"
                tempValue={tempBoardSize}
                setTempValue={setTempBoardSize}
                options={["4x4", "6x6"]}
              />
              <div className="space-x-4">
                <Button
                  text="Accept"
                  onClick={saveChanges}
                />
                <Button
                  text="Cancel"
                  onClick={cancelChanges}
                />
              </div>
            </div>
            {screen !== "welcome" && (
              <div className="mt-4">
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
