import React from "react";
import Board from "./Board";
import Players from "./Players";
interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const GameScreen = ({ setShowMenu }: Props) => {
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-white p-4 space-y-4">
      <div className="flex space-x-12">
        <h1>Game name</h1>
        <div className="flex space-x-8">
          <button>Restart</button>
          <button>New Game</button>
          <button>Menu</button>
        </div>
      </div>
      <Board />
      <Players />
    </div>
  );
};

export default GameScreen;
