import { useGameContext } from "../context/gameContext";
import BoardItem from "./BoardItem";
const Board = () => {
  const { boardSize, activePlayer, boards } = useGameContext();

  if (boards == null) return <h1>Loading Board</h1>;
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}
      className={`grid ${
        boardSize === 4 ? "gap-2" : "gap-[6px]"
      } w-max mx-auto pb-12`}
    >
      {boards[activePlayer - 1]?.board.map((boardItem) => (
        <BoardItem key={boardItem.id} boardItem={boardItem} />
      ))}
    </div>
  );
};

export default Board;
