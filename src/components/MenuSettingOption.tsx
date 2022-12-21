import { useGameContext } from "../context/gameContext";
import { motion } from "framer-motion";
import "../index.css";

interface Props {
  tempValue: string | number;
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
  const { screen, activeVisible } = useGameContext();
  const isActive = tempValue === option.toString().toLowerCase();
  return (
    <>
      <motion.button
        //   key={isActive ? 1 : 0}
        disabled={screen === "game" && disabledInGame}
        className="text-neutral-800  relative"
        onClick={() => setTempValue(option.toString().toLowerCase())}
      >
        <motion.p
          className={`${
            isActive ? "text-neutral-100" : "text-neutral-300"
          } relative  z-10 mx-4 font-bold`}
        >
          {option}
        </motion.p>
        {isActive && activeVisible ? (
          <motion.div
            initial={false}
            animate={{ transition: { duration: 0.5, delay: 2 } }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            layoutId={title}
            // style={{
            //   position: "absolute",
            //   top: "-8px",
            //   bottom: "-8px",
            //   left: "-8px",
            //   right: "-8px",
            //   zIndex: 0,
            // }}
            className={
              title +
              " absolute z-0 rounded-md  bg-accent-500 -top-2 -bottom-2 -left-2 -right-2"
            }
          ></motion.div>
        ) : null}
      </motion.button>
    </>
  );
};

export default MenuSettingOption;
