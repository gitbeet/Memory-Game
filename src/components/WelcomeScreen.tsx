import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import { motion } from "framer-motion";
import logoLetters from "../assets/logo-letters.png";

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
  const { setShowMenu, setScreen, setActiveVisible, setShowRulesWindow } =
    useGameContext();
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="absolute w-[min(90%,420px)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-12 space-y-28"
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      <motion.img
        variants={parentVariants}
        src={logoLetters}
        alt="logo"
        className="w-full"
      />
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
        <motion.div variants={childrenVariants}>
          <Button text="Rules" onClick={() => setShowRulesWindow(true)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
