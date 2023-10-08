import Board from "./Board";
import Header from "./Header";
import Players from "./Players";
import { motion } from "framer-motion";
import { useGameContext } from "../context/gameContext";

const GameScreen = () => {
  const { setScreen } = useGameContext();
  return (
    <div className="absolute w-full h-full flex flex-col justify-between items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-10 md:px-16 lg:px-32 md:space-y-4">
      <motion.div
        layout
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.6,
            bounce: 0.5,
            delay: 0.8,
          },
        }}
        className="w-full"
      >
        <Header />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.8,
            delay: 0.2,
            bounce: 0.5,
          },
        }}
      >
        <Board />
      </motion.div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.6,
            bounce: 0.5,
            delay: 0.6,
          },
        }}
      >
        <Players />

        {/* button for ending game fast for testing purposes */}

        {/* <button
          onClick={() => setScreen("gameOver")}
          className="absolute font-bold text-md bg-neutral-800 text-accent-500 top-0 left-1/2 p-2"
        >
          Win!
        </button> */}
      </motion.div>
    </div>
  );
};

export default GameScreen;
