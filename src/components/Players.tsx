import { useGameContext } from "../context/gameContext";
import Player from "./Player";

const Players = () => {
  const { boards } = useGameContext();
  return (
    <div className="flex justify-center items-end space-x-8">
      {boards.map((board) => {
        return <Player key={board.player} board={board} />;
      })}
    </div>
  );
};

export default Players;
