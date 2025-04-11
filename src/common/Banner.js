import Image from "next/image";
import logoImage from "@/assets/logo.svg";

const Banner = () => {
  const onClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      role="presentation"
      onClick={onClick}
    >
      <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />

      <h1 className="text-3xl font-medium">
        goyal.<span className="text-lime-400">dev</span>
      </h1>
    </div>
  );
};

export default Banner;
