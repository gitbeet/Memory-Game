const CloseButton = () => {
  return (
    <svg
      className="cursor-pointer w-5 h-5 md:w-6 md:h-6 text-neutral-800 hover:text-accent-500 transition-all duration-150"
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
