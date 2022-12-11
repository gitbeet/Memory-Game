import { BoardInterface, useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";
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
      } border-[3px] space-y-2 w-max rounded-xl px-8 `}
    >
      <motion.h1
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={` ${
          isActive ? "text-neutral-100" : "text-neutral-800"
        } " text-xl font-bold "`}
      >
        Player {board.player}
      </motion.h1>
      <motion.p
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={`${
          isActive ? "text-neutral-100" : "text-neutral-600"
        } font-semibold`}
      >
        Moves: {board.moves}
      </motion.p>
    </motion.div>
  );
};

export default Player;
