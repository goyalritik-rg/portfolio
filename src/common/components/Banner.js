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
      <Image src={logoImage} alt="Logo" className="h-10 w-auto text-lime-400" />

      <h1 className="text-2xl font-medium">
        console.log(<span className="text-lime-400">me</span>)
      </h1>
    </div>
  );
};

export default Banner;
