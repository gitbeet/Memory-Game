import "./App.css";
import ConfirmWindow from "./components/ConfirmWindow";
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";
import Menu from "./components/Menu";
import NewGameScreen from "./components/NewGameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { useGameContext } from "./context/gameContext";

function App() {
  const {
    screen,
    showMenu,
    showNewScreen,
    setShowMenu,
    setShowConfirmWindow,
    exitGame,
  } = useGameContext();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 min-w-full min-h-full">
      {screen === "welcome" ? <WelcomeScreen /> : null}
      {screen === "game" ? <GameScreen /> : null}
      {screen === "gameOver" ? <GameOverScreen /> : null}
      {showNewScreen ? <NewGameScreen /> : null}
      <Menu />
      <ConfirmWindow
        message="Are you sure you want to exit the game? Any progress will be lost."
        onConfirm={() => {
          exitGame();
          setShowMenu(false);
          setShowConfirmWindow(false);
        }}
        onCancel={() => setShowConfirmWindow(false)}
      />
    </div>
  );
}

export default App;
