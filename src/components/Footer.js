"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { motion } from "framer-motion";

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
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-6 border-t border-neutral-800 text-sm text-neutral-400"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col items-start">
          <p className="text-neutral-500">
            Built from scratch with Next.js & a lot of caffeine.
          </p>

          <p className="mt-1">
            © {new Date().getFullYear()} Ritik Goyal —{" "}
            <span className="text-lime-400">Frontend Developer</span>
          </p>
        </div>

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
    </motion.footer>
  );
};

export default Footer;
