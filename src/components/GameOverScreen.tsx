import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -250 },
  visible: { opacity: 1, x: 0 },
  transition: {
    duration: 0.5,
    type: "spring",
    bounce: 0.3,
  },
};

const singlePlayerParentVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const singlePlayerChildrenVariants = {
  hidden: { opacity: 0, x: -250 },
  visible: { opacity: 1, x: 0 },
  transition: {
    duration: 0.3,
    type: "spring",
    bounce: 0.3,
  },
};

const GameOverScreen = () => {
  const { boards, setScreen, restartGame, timer } = useGameContext();

  const winner = [...boards]
    .map((board) => {
      return { moves: board.moves, player: board.player };
    })
    .sort((a, b) => {
      return a.moves - b.moves;
    })[0].player;

  const singlePlayerContent = (
    <motion.div
      variants={singlePlayerParentVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24 w-fit "
    >
      <motion.h1
        variants={singlePlayerChildrenVariants}
        className="text-4xl text-neutral-800 font-black"
      >
        Great Job!
      </motion.h1>
      <motion.div className="w-full" variants={singlePlayerChildrenVariants}>
        <p className="text-2xl text-semibold text-neutral-800 ">
          You won the game in only :{" "}
          <span className="font-black">{boards[0].moves}</span> moves
        </p>
      </motion.div>
      <motion.p
        variants={singlePlayerChildrenVariants}
        className="text-2xl text-semibold text-neutral-800"
      >
        Time :{" "}
        <span className="font-black">
          {new Date(timer).toISOString().slice(14, -5)}
        </span>
      </motion.p>
    </motion.div>
  );
  const multiPlayerContent = (
    <div className="space-y-24">
      <h1 className="text-4xl text-neutral-600 font-semibold w-fit md:w-max">
        <span className="font-black text-neutral-800">Player {winner} </span>
        is the winner!
      </h1>
      <div className="space-y-8 md:space-y-12 ">
        <p className="bg-neutral-100 text-3xl font-black text-neutral-800">
          Standings
        </p>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 md:space-y-8"
        >
          {boards
            .sort((a, b) => a.moves - b.moves)
            .map((board, i) => (
              <motion.div
                variants={childrenVariants}
                className={
                  (i === 0
                    ? "bg-accent-500 text-neutral-100 "
                    : "bg-neutral-150 text-neutral-600 ") + " py-4  rounded-md"
                }
              >
                <h1 className="text-xl font-black">Player {board.player}</h1>
                <h1
                  className={`${
                    winner === board.player ? "" : "text-neutral-300"
                  } text-md font-bold`}
                >
                  {board.moves} moves
                </h1>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="absolute w-full flex flex-col justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 space-y-32"
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      {boards.length < 2 ? singlePlayerContent : multiPlayerContent}
      <div className="space-x-4">
        <Button text="Play Again" onClick={() => restartGame()} />
        <Button text="Exit" onClick={() => setScreen("welcome")} />
      </div>
    </motion.div>
  );
};

export default GameOverScreen;
