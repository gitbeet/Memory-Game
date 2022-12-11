import { useGameContext } from "../context/gameContext";
import BoardItem from "./BoardItem";
import { motion } from "framer-motion";
const Board = () => {
  const { boardSize, activePlayer, boards } = useGameContext();

  // Make grid square depending on grid size
  // const cols = `grid-cols-${boardSize}`;

  if (boards == null) return <h1>Loading Board</h1>;
  return (
    <motion.div
      style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}
      className=" grid gap-4 w-fit mx-auto pb-12"
    >
      {boards[activePlayer - 1].board.map((boardItem) => (
        <BoardItem key={boardItem.id} boardItem={boardItem} />
      ))}
    </motion.div>
  );
};

export default Board;
