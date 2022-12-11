import { useGameContext } from "../context/gameContext";
import MenuSettingOption from "./MenuSettingOption";

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
    <div className="flex justify-between items-center space-x-8  p-4 bg-neutral-150 rounded-md">
      <h1 className="text-lg text-neutral-800 font-bold">{title}</h1>
      <div
        className={`flex justify-between ${
          screen === "game" && disabledInGame ? "opacity-25" : ""
        }`}
      >
        <div className="space-x-2">
          {options.map((option) => (
            <MenuSettingOption
              key={option}
              disabledInGame={disabledInGame}
              title={title}
              tempValue={tempValue}
              setTempValue={setTempValue}
              option={option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSetting;
