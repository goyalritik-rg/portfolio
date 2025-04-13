import { twMerge } from "tailwind-merge";

const Cross = ({ className = "", ...restProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge("feather feather-menu cursor-pointer", className)}
      {...restProps}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        className="origin-left rotate-45 -translate-y-1"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        className="origin-left -rotate-45 translate-y-1"
      />
    </svg>
  );
};

export default Cross;
