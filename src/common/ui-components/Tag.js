import { twMerge } from "tailwind-merge";

const Tag = ({ children = null, className = "" }) => {
  if (!children) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "inline-flex border border-lime-400 gap-2 text-lime-400 px-3.5 py-1.5 rounded-full uppercase item-center w-fit",
        className
      )}
    >
      <span>&#10038;</span>

      <span className="text-sm mt-0.5">{children}</span>
    </div>
  );
};

export default Tag;
