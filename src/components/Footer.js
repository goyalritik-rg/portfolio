"use client";

import Banner from "@/common/Banner";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const footerLinks = [
  {
    label: "Github",
    icon: FaGithub,
    onClick: () => {
      window.open(process.env.NEXT_PUBLIC_MY_GITHUB);
    },
  },
  {
    label: "Email",
    icon: IoMdMail,
    onClick: () => {
      window.open(`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`);
    },
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    onClick: () => {
      window.open(process.env.NEXT_PUBLIC_MY_LINKEDIN);
    },
  },
];

const Footer = () => {
  return (
    <section className="py-16" id="contact">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Banner />

        <nav className="flex gap-6">
          {footerLinks.map((link) => {
            const { icon: Icon, onClick, label } = link;

            return (
              <Icon
                className="text-white/50 hover:text-white transition text-2xl cursor-pointer"
                key={label}
                onClick={onClick}
              />
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Footer;
