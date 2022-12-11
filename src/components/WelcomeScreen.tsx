import React from "react";
import { useGameContext } from "../context/gameContext";

const WelcomeScreen = () => {
  const { setShowMenu, setScreen } = useGameContext();
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-white p-4 space-y-4">
      <h1 className="text-3xl">Memory Game</h1>
      <div className="flex flex-col space-y-4">
        <button className="bg-red-500" onClick={() => setScreen("game")}>
          Start game
        </button>
        <button onClick={() => setShowMenu(true)} className="bg-red-500">
          Menu
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
