import { useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import Button from "./Button";

const Header = () => {
  const { setShowMenu, sound, setSound, setScreen } = useGameContext();
  return (
    <div className="w-max flex justify-between items-center space-x-12 pb-12">
      <h1 className=" text-3xl font-black text-neutral-800">Memory Game</h1>
      <Button text="WIN" onClick={() => setScreen("gameOver")} />
      <div className="flex space-x-4">
        <div
          onClick={() => setShowMenu(true)}
          className="cursor-pointer text-neutral-800 flex justify-between items-center space-x-2 border-2 border-neutral-800 p-2 rounded-md"
        >
          <motion.svg
            initial={{ rotate: 0 }}
            whileHover={{
              rotate: [null, 35, -35, 0],
              scale: [null, 1.05, 1],
              transition: { duration: 0.5 },
            }}
            width={32}
            height={32}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
          </motion.svg>
        </div>
        <motion.div
          onClick={() => setSound((prev) => (prev === "on" ? "off" : "on"))}
          className=" text-neutral-800  
          }  cursor-pointer flex justify-between items-center space-x-2 border-2 border-neutral-800 p-2 rounded-md overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {sound === "on" ? (
              <motion.svg
                key={"soundOn"}
                initial={{ y: -40 }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 0.2, bounce: 0.4 },
                }}
                exit={{
                  y: 40,
                  transition: { type: "spring", duration: 0.2 },
                }}
                width={32}
                height={32}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
              </motion.svg>
            ) : (
              <motion.svg
                key={"soundOff"}
                initial={{ y: -40 }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 0.2, bounce: 0.4 },
                }}
                exit={{
                  y: 40,
                  transition: { type: "spring", duration: 0.2 },
                }}
                width={32}
                height={32}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
