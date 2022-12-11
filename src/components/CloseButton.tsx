interface Props {
  onClick: () => void;
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <svg
      className="cursor-pointer text-neutral-800 hover:text-neutral-600 transition-all duration-150"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="52.4984"
        y="0.174072"
        width="16.5119"
        height="73.9978"
        rx="4"
        transform="rotate(45 52.4984 0.174072)"
        fill="currentColor"
      />
      <rect
        width="16.5119"
        height="73.9978"
        rx="4"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 11.8497 0.174072)"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseButton;
