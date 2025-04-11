import Tag from "@/common/Tag";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { useAnimate } from "framer-motion";

const EXPERIENCES = [
  {
    role: "SDE-1",
    company: "COGOPORT",
    duration: "July'23 - Present",
  },
  {
    role: "SDE Intern",
    company: "COGOPORT",
    duration: "Jan'23 - June'23",
  },
];

const Experiences = ({ onReset = () => {} }) => {
  const [scope, animate] = useAnimate();

  const triggerAnimation = () =>
    animate(
      scope.current,
      { rotate: 360 },
      { duration: 1, repeat: Infinity, ease: "linear" }
    );

  const stopAnimation = () =>
    animate(scope.current, { rotate: 0 }, { duration: 0.5 });

  const onClick = () => {
    triggerAnimation();
    onReset();

    setTimeout(stopAnimation, 1000);
  };

  return (
    <div className="w-full h-full bg-black cursor-auto p-6 relative flex justify-between flex-col-reverse">
      <GrPowerReset
        ref={scope}
        className="text-white absolute top-3 right-3 text-lg cursor-pointer"
        onClick={onClick}
      />

      <div className="flex flex-col gap-6">
        <Tag>Education</Tag>

        <div className="flex flex-col gap-1.5">
          <div className="text-white/50 text-lg font-bold">B.TECH</div>
          <div className="text-white text-2xl">NIT Allahabad</div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Tag>Experiences</Tag>

        {EXPERIENCES.map(({ role, company, duration }, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <div className="text-white/50 text-lg font-bold">{role}</div>
              <div className="text-white/50 text-sm">{duration}</div>
            </div>
            <div className="text-white text-2xl">{company}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
