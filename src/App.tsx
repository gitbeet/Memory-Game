import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Menu from "./components/Menu";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [theme, setTheme] = useState("numbers");
  const [sound, setSound] = useState(true);
  const [players, setPlayers] = useState(1);
  const [boardSize, setBoardSize] = useState(4);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-red-300">
      {screen === "welcome" ? (
        <WelcomeScreen setShowMenu={setShowMenu} setScreen={setScreen} />
      ) : null}
      {screen === "game" ? <GameScreen setShowMenu={setShowMenu} /> : null}
      {showMenu ? (
        <Menu
          setShowMenu={setShowMenu}
          setTheme={setTheme}
          setPlayers={setPlayers}
          setSound={setSound}
          setBoardSize={setBoardSize}
          players={players}
          theme={theme}
          sound={sound}
          boardSize={boardSize}
        />
      ) : null}
    </div>
  );
}

export default App;
