import clickSound from "../assets/button-click.ogg";
import { useGameContext } from "../context/gameContext";
interface Props {
  text: string | JSX.Element;
  onClick: () => void;
  transparent?: boolean;
}

const clickAudio = new Audio(clickSound);

const Button = ({ text, onClick, transparent = false }: Props) => {
  const { sound } = useGameContext();
  return (
    <button
      className={` ${
        !transparent &&
        "bg-neutral-800 hover:bg-accent-500 hover:text-neutral-100"
      } text-md md:text-xl text-neutral-100 font-black px-4 py-3 md:px-6 md:py-4 rounded-full transition-all duration-150`}
      onClick={() => {
        onClick();
        if (sound === "off") return;
        clickAudio.play();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
