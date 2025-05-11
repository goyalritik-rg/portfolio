import Github from "@/common/svgs/Github";
import Gmail from "@/common/svgs/Gmail";
import LinkedIn from "@/common/svgs/LinkedIn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const EMAIL = "goyalritik555.rg@gmail.com";
export const GITHUB = "https://github.com/goyalritik-rg";
export const LINKEDIN = "https://www.linkedin.com/in/goyalritik555";

const GLOBAL_CONSTANS = {
  socials: [
    {
      label: "Github",
      icon: FaGithub,
      colorIcon: Github,
      href: GITHUB,
    },
    {
      label: "Email",
      icon: IoMdMail,
      colorIcon: Gmail,
      href: `mailto:${EMAIL}`,
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      colorIcon: LinkedIn,
      href: LINKEDIN,
    },
  ],
};
export default GLOBAL_CONSTANS;
