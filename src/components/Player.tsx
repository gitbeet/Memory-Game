import { useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";
import { BoardInterface } from "../models";

interface Props {
  board: BoardInterface;
}

const Player = ({ board }: Props) => {
  const { activePlayer, players } = useGameContext();
  const isActive = board.player === activePlayer;
  return (
    <motion.div
      layout
      transition={{ type: "spring", duration: 0.4 }}
      className={` ${
        isActive
          ? "bg-accent-500 border-accent-500 py-2 pb-8 "
          : " border-neutral-800 py-2"
      } border-[3px] space-y-2 w-max rounded-xl px-4 md:px-8 `}
    >
      <motion.h1
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={` ${
          isActive ? "text-neutral-100" : "text-neutral-800"
        } " hidden md:block text-2xl font-black "`}
      >
        Player {board.player}
      </motion.h1>
      <motion.h1
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={` ${
          isActive ? "text-neutral-100" : "text-neutral-800"
        } " md:hidden text-2xl font-black "`}
      >
        P {board.player}
      </motion.h1>
      <motion.p
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={`${
          isActive ? "text-neutral-100" : "text-neutral-600"
        } hidden md:block font-semibold font-body`}
      >
        Moves: {board.moves}
      </motion.p>
      <motion.p
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={`${
          isActive ? "text-neutral-100" : "text-neutral-600"
        }  md:hidden font-semibold font-body`}
      >
        M: {board.moves}
      </motion.p>
    </motion.div>
  );
};

export default Player;
