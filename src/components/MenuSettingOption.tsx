import { useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";
import "../index.css";

interface Props {
  tempValue: string;
  setTempValue: React.Dispatch<React.SetStateAction<number | string>>;
  option: string | number;
  title: string;
  disabledInGame: boolean;
}

const MenuSettingOption = ({
  title,
  tempValue,
  setTempValue,
  option,
  disabledInGame,
}: Props) => {
  const { screen } = useGameContext();
  const isActive = tempValue === option.toString().toLowerCase();
  return (
    <>
      <button
        style={{ position: "relative" }}
        disabled={screen === "game" && disabledInGame}
        className="text-neutral-800 "
        onClick={() => setTempValue(option.toString().toLowerCase())}
      >
        <motion.p
          className={`${
            isActive ? "text-neutral-100" : "text-neutral-300"
          } text-md relative  z-10 mx-2 md:mx-4 font-bold`}
        >
          {option}
        </motion.p>
        {isActive && (
          <motion.div
            initial={{
              position: "absolute",
              zIndex: 0,
              top: "-6px",
              bottom: "-6px",
              left: "-6px",
              right: "-6px",
            }}
            transition={{ type: "spring", duration: 0.3 }}
            layoutId={title}
            className={title + " rounded-md  bg-accent-500 "}
          ></motion.div>
        )}
      </button>
    </>
  );
};

export default MenuSettingOption;
