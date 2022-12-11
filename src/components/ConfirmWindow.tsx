import { motion, AnimatePresence } from "framer-motion";
import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import CloseButton from "./CloseButton";

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmWindow = ({ message, onConfirm, onCancel }: Props) => {
  const { showConfirmWindow } = useGameContext();
  return (
    <AnimatePresence>
      {showConfirmWindow ? (
        <>
          <motion.div
            initial={{ scale: 0.2 }}
            animate={{
              scale: [null, 1.05, 1],
              transition: { type: "spring", duration: 0.3, stiffness: 100 },
            }}
            exit={{
              opacity: 0,
              // scale: [1, 1.05, 0.5],
              transition: { type: "spring", duration: 0.4, stiffness: 100 },
            }}
            className="fixed z-20 bg-neutral-100 rounded-md  p-12 w-max space-y-12  "
            style={{
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="absolute top-[1.5rem] left-[calc(100%-1.5rem)] -translate-x-full">
              <CloseButton onClick={onCancel} />
            </div>
            <p className="w-[300px] text-neutral-600 text-lg font-semibold">
              {message}
            </p>
            <div className="flex w-full justify-center space-x-4">
              <Button text="Yes" onClick={onConfirm} />
              <Button text="No" onClick={onCancel} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-25"
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default ConfirmWindow;
