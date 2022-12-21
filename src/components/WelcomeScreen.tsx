import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.3,
    type: "spring",
    bounce: 0.2,
  },
};

const WelcomeScreen = () => {
  const { setShowMenu, setScreen, setActiveVisible } = useGameContext();
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 space-y-28"
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      <motion.h1
        variants={parentVariants}
        className="text-5xl font-black text-neutral-800"
      >
        Memory Game
      </motion.h1>
      <motion.div
        variants={parentVariants}
        transition={{ delay: 0.4, staggerChildren: 0.2 }}
        className="flex flex-col space-y-8"
      >
        <motion.div variants={childrenVariants}>
          <Button text="Start Game" onClick={() => setScreen("game")} />
        </motion.div>
        <motion.div variants={childrenVariants}>
          <Button
            text="Settings"
            onClick={() => {
              setShowMenu(true);
              setTimeout(() => {
                setActiveVisible(true);
              }, 420);
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
