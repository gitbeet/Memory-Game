import { useGameContext } from "../context/gameContext";
import MenuButton from "./MenuButton";

const Header = () => {
  const { restartGame, setShowNewScreen, setShowMenu, setActivePlayer } =
    useGameContext();
  return (
    <div className="flex justify-between items-center space-x-12 pb-12">
      <h1 className=" text-3xl font-black text-neutral-800">Memory Game</h1>
      <MenuButton />
    </div>
  );
};

export default Header;
