import { useGameContext } from "../context/gameContext";

const GameOverScreen = () => {
  const { boards, setScreen, restartGame } = useGameContext();

  const winner = [...boards]
    .map((board) => {
      return { moves: board.moves, player: board.player };
    })
    .sort((a, b) => {
      return a.moves - b.moves;
    })[0].player;

  const singlePlayerContent = (
    <div>
      <h1>You did it</h1>
      <p>Moves: {boards[0].moves}</p>
    </div>
  );
  const multiPlayerContent = (
    <div>
      <h1>Player {winner} has won</h1>
      {boards
        .sort((a, b) => a.moves - b.moves)
        .map((board) => (
          <div>
            <h1>
              Player {board.player} - {board.moves} moves
            </h1>
          </div>
        ))}
    </div>
  );
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-white p-4 space-y-4">
      {boards.length < 2 ? singlePlayerContent : multiPlayerContent}
      <div className="space-y-4">
        <button onClick={() => restartGame()}>Play Again</button>
        <button onClick={() => setScreen("welcome")}>Exit</button>
      </div>
    </div>
  );
};

export default GameOverScreen;
