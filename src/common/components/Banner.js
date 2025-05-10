const Banner = () => {
  const onClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      role="presentation"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 24"
        fill="#a3e635"
        className="h-10 w-auto"
      >
        <path
          d="M8 5l-5 7 5 7M16 5l5"
          stroke="#A3E635"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <span className="text-2xl font-medium">
        Ritik <span className="text-2xl text-lime-400 -mx-1">/</span> Goyal
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 24"
        fill="#a3e635"
        className="h-10 w-auto rotate-180"
      >
        <path
          d="M8 5l-5 7 5 7M16 5l5"
          stroke="#A3E635"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Banner;
