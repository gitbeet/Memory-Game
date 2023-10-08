import { BoardItemInterface, useGameContext } from "../context/gameContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const emojiMap: any = {
  0: "💩",
  1: "😀",
  2: "🤓",
  3: "😍",
  4: "🥳",
  5: "🤬",
  6: "🤐",
  7: "🥶",
  8: "🥱",
  9: "😴",
  10: "🤠",
  11: "👾",
  12: "👽",
  13: "🎃",
  14: "👹",
  15: "🤡",
  16: "☠️",
  17: "🤖",
  18: "🦷",
  19: "👌",
  20: "🎅",
  21: "💋",
  22: "👅",
  23: "💂‍♀️",
  24: "🤰",
  25: "👰",
  26: "👨‍🔧",
  27: "🕵️‍♀️",
  28: "👷‍♂️",
  29: "👓",
  30: "🎩",
  31: "🕵️‍♂️",
  32: "😿",
  33: "👻",
  34: "🤔",
  35: "😳",
};

interface Props {
  boardItem: BoardItemInterface;
}

const BoardItem = ({ boardItem }: Props) => {
  const { toggleItemVisible, theme, activeItems, disabled, boardSize } =
    useGameContext();
  const { value, id, visible } = boardItem;
  const isActive = id === activeItems[0]?.id || id === activeItems[1]?.id;
  const themedValue: number | string =
    theme === "numbers" ? value : emojiMap[value];

  return (
    <motion.div
      key={visible ? 1 : 0}
      initial={false}
      animate={{ scaleX: [null, 1.15, 0, 1.15, 1] }}
      transition={{ duration: 0.5, type: "spring" }}
      onClick={() => toggleItemVisible(id)}
      className={`cursor-pointer ${
        boardSize === 4
          ? "w-[72px] h-[72px] md:w-20 md:h-20"
          : "w-[47px] h-[47px] md:w-[60px] md:h-[60px]"
      } select-none
      ${disabled || isActive ? "pointer-events-none" : ""}
       ${
         isActive
           ? "bg-accent-500"
           : visible
           ? "bg-neutral-300 pointer-events-none"
           : "bg-neutral-800"
       } rounded-2xl  text-neutral-100 flex justify-center items-center`}
    >
      {visible ? (
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold"
        >
          {themedValue}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default BoardItem;
