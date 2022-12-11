import { useGameContext } from "../context/gameContext";
import MenuSettingOption from "./MenuSettingOption";
import { LayoutGroup } from "framer-motion";

interface Props {
  tempValue: string | number;
  setTempValue: any;
  options: string[] | number[];
  title: string;
  disabledInGame: boolean;
}

const MenuSetting = ({
  tempValue,
  setTempValue,
  options,
  title,
  disabledInGame,
}: Props) => {
  const { screen } = useGameContext();
  return (
    <div className="flex justify-between items-center space-x-8  p-4 border border-neutral-300 rounded-md">
      <h1 className="text-lg text-neutral-800 font-bold">{title}</h1>
      <div
        className={`flex justify-between ${
          screen === "game" && disabledInGame ? "opacity-25" : ""
        }`}
      >
        {/* <LayoutGroup id={title}> */}
        <div className="space-x-2">
          {options.map((option) => (
            <MenuSettingOption
              disabledInGame={disabledInGame}
              title={title}
              tempValue={tempValue}
              setTempValue={setTempValue}
              option={option}
            />
          ))}
        </div>
        {/* </LayoutGroup> */}
      </div>
    </div>
  );
};

export default MenuSetting;
