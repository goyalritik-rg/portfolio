"use client";

import { useEffect, useState } from "react";

const CustomCursor = ({ showCustomCursor = false }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!showCustomCursor) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="px-3 py-1 w-fit rounded-full font-medium bg-white text-black text-sm">
        Yes,please 🙌
      </div>
    </div>
  );
};

export default CustomCursor;
