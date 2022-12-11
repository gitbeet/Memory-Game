import Board from "./Board";
import Header from "./Header";
import Players from "./Players";

const GameScreen = () => {
  return (
    <div className="absolute w-full flex flex-col justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 space-y-4">
      <Header />
      <Board />
      <Players />
    </div>
  );
};

export default GameScreen;
