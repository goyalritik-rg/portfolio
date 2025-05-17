import Github from "@/common/svgs/Github";
import Gmail from "@/common/svgs/Gmail";
import LinkedIn from "@/common/svgs/LinkedIn";

import {
  Mail,
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
} from "lucide-react";

export const EMAIL = "goyalritik555.rg@gmail.com";
export const GITHUB = "https://github.com/goyalritik-rg";
export const LINKEDIN = "https://www.linkedin.com/in/goyalritik555";

const GLOBAL_CONSTANS = {
  socials: [
    {
      label: "Github",
      icon: LucideGithub,
      colorIcon: Github,
      href: GITHUB,
    },
    {
      label: "Email",
      icon: Mail,
      colorIcon: Gmail,
      href: `mailto:${EMAIL}`,
    },
    {
      label: "LinkedIn",
      icon: LucideLinkedin,
      colorIcon: LinkedIn,
      href: LINKEDIN,
    },
  ],
};
export default GLOBAL_CONSTANS;
