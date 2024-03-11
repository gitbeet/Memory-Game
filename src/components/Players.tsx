import { useEffect } from "react";
import { useGameContext } from "../context/gameContext";
import InfoBox from "./InfoBox";
import Player from "./Player";

const Players = () => {
  const { boards, players, timer, setTimer, screen } = useGameContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const singlePlayerContent = (
    <div className="w-full text-xl font-bold text-neutral-800 space-y-4 md:space-y-0 md:space-x-4 justify-between items-center md:flex md:pb-8">
      <InfoBox
        title="Moves"
        data={boards[0].moves.toString()}
      />
      <InfoBox
        title="Time"
        data={new Date(timer).toISOString().slice(14, -5)}
      />
    </div>
  );
  const multipPlayerContent = (
    <div className="flex justify-center items-end space-x-2 md:space-x-8">
      {boards.map((board) => {
        return (
          <Player
            key={board.player}
            board={board}
          />
        );
      })}
    </div>
  );

  return players === 1 ? singlePlayerContent : multipPlayerContent;
};

export default Players;
