import { motion, AnimatePresence } from "framer-motion";
import { useGameContext } from "../context/gameContext";
import CloseButton from "./CloseButton";

const Rules = () => {
  const { showRulesWindow, setShowRulesWindow } = useGameContext();
  return (
    <AnimatePresence>
      {showRulesWindow ? (
        <>
          <motion.div
            initial={{
              scale: 0.2,
              translateX: "-50%",
              translateY: "-50%",
              left: "50%",
              top: "50%",
            }}
            animate={{
              scale: [null, 1.05, 1],

              transition: { type: "spring", duration: 0.3, stiffness: 100 },
            }}
            exit={{
              opacity: [1, 1, 0],
              scale: [1, 1.05, 0],

              transition: { type: "spring", duration: 0.4, stiffness: 100 },
            }}
            className="fixed z-10 bg-neutral-100 rounded-md px-8 py-8 md:px-16 md:py-12 w-[min(90%,420px)] max-h-[75vh]  space-y-8 md:space-y-12 grid grid-flow-row grid-rows-[1fr,5.4fr] "
          >
            <div className="fixed z-[1000] top-[1.5rem] left-[calc(100%-1.5rem)] -translate-x-full">
              <CloseButton onClick={() => setShowRulesWindow(false)} />
            </div>
            <header className="text-2xl md:text-3xl text-neutral-800 font-bold">
              Rules
            </header>
            <section className="space-y-8  overflow-auto">
              <section className="space-y-4">
                <h1 className="text-lg   md:text-xl text-neutral-800 font-bold">
                  Objective
                </h1>
                <p className="text-neutral-700 text-left">
                  The objective of the memory game is to match pairs of numbers
                  by flipping over the cards and remembering their locations.
                  The game is won by revealing all the pairs of cards on the
                  board.
                </p>
              </section>
              <section className="space-y-4">
                <h1 className="text-lg   md:text-xl text-neutral-800 font-bold">
                  How to play
                </h1>
                <ul className="text-neutral-700 list-disc text-left pl-4 space-y-2 ">
                  <li>Flip a pair of cards by clicking on each one of them.</li>
                  <li>
                    If the two cards match, they stay revealed. If they do not
                    match, they flip back over.
                  </li>
                  <li>
                    If you are able to reveal all the pairs, you win the game.
                  </li>
                  <li>
                    The player to reveal all cards with the least moves wins the
                    game.
                  </li>
                </ul>
              </section>
            </section>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed z-4 top-0 bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-25"
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Rules;
