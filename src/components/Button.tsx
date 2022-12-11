interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="bg-neutral-800 hover:bg-opacity-75 text-xl text-neutral-100 font-black px-6 py-4 rounded-full transition-all duration-150"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
