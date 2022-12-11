import { useEffect, useState } from "react";
import { useGameContext } from "../context/gameContext";
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
    <div className="text-xl font-bold text-neutral-800 space-y-4 md:space-y-0 md:space-x-4 justify-between items-center w-max md:flex">
      <div className="flex justify-between bg-neutral-150  border-4 border-neutral-300 p-4 rounded-xl">
        <p className="  text-neutral-600">Moves: </p>
        <p className="w-24 text-right  text-neutral-600">{boards[0].moves}</p>
      </div>
      <div className="flex justify-between bg-neutral-150   border-4 border-neutral-300 p-4 rounded-xl ">
        <p className=" text-neutral-600">Time: </p>
        <p className="w-24 text-right  text-neutral-600">
          {" "}
          {new Date(timer).toISOString().slice(14, -5)}
        </p>
      </div>
    </div>
  );
  const multipPlayerContent = (
    <div className="flex justify-center items-end space-x-2 md:space-x-8">
      {boards.map((board) => {
        return <Player key={board.player} board={board} />;
      })}
    </div>
  );

  return players === 1 ? singlePlayerContent : multipPlayerContent;
};

export default Players;
