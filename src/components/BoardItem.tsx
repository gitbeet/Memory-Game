import { BoardItemInterface, useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const emojiMap: any = {
  0: "💩 ",
  1: "😀",
  2: "🤓",
  3: "😍",
  4: "🥳 ",
  5: "🤬",
  6: "🤐 ",
  7: "🥶 ",
  8: "🥱 ",
  9: "😴 ",
  10: "🤠 ",
  11: "👾 ",
  12: "👽 ",
  13: "🎃 ",
  14: "👹 ",
  15: "🤡 ",
};

interface Props {
  boardItem: BoardItemInterface;
}

const BoardItem = ({ boardItem }: Props) => {
  const { toggleItemVisible, theme, activeItems, disabled } = useGameContext();
  const { value, id, visible } = boardItem;
  const [key, setKey] = useState(0);
  const isActive = id === activeItems[0]?.id || id === activeItems[1]?.id;
  const themedValue: number | string =
    theme === "numbers" ? value : emojiMap[value];

  useEffect(() => {
    console.log(key);
  }, [key]);

  useEffect(() => {
    if (visible) {
      setKey(1);
    } else {
      setKey(0);
    }
  }, [visible]);

  return (
    <motion.div
      layout
      key={key}
      initial={{ scale: 1 }}
      animate={{ scaleX: [null, 1.15, 0, 1.15, 1] }}
      transition={{ duration: 0.5, type: "spring" }}
      onClick={() => toggleItemVisible(id)}
      className={`cursor-pointer w-16 h-16 select-none
      ${disabled || isActive ? "pointer-events-none" : ""}
       ${
         isActive
           ? "bg-accent-500"
           : visible
           ? "bg-neutral-300"
           : "bg-neutral-800"
       } rounded-lg text-neutral-100 flex justify-center items-center`}
    >
      {visible ? (
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center font-bold"
        >
          {themedValue}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default BoardItem;
