import "./App.css";
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";
import Menu from "./components/Menu";
import NewGameScreen from "./components/NewGameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { useGameContext } from "./context/gameContext";

function App() {
  const { screen, showMenu, showNewScreen } = useGameContext();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-800">
      {screen === "welcome" ? <WelcomeScreen /> : null}
      {screen === "game" ? <GameScreen /> : null}
      {screen === "gameOver" ? <GameOverScreen /> : null}
      {showNewScreen ? <NewGameScreen /> : null}
      {showMenu ? <Menu /> : null}
    </div>
  );
}

export default App;
