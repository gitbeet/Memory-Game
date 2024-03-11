import { useGameContext } from "./context/gameContext";
import { useEffect } from "react";
import Menu from "./components/Menu";
import Rules from "./components/Rules";
import ConfirmWindow from "./components/ConfirmWindow";
import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import introSound from "./assets/intro-sound.mp3";
import "./App.css";

const introAudio = new Audio(introSound);
introAudio.volume = 0.5;
function App() {
  const { screen, setShowMenu, setShowConfirmWindow, exitGame, sound } =
    useGameContext();
  useEffect(() => {
    if (sound === "off") return;
    introAudio.play();
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 min-w-full min-h-full overflow-hidden">
      {screen === "welcome" ? <WelcomeScreen /> : null}
      {screen === "game" ? <GameScreen /> : null}
      {screen === "gameOver" ? <GameOverScreen /> : null}
      <Menu />
      <Rules />
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
