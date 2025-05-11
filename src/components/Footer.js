"use client";

import { FloatingDock } from "@/common/ui-components/FloatingDock";
import GLOBAL_CONSTANS from "@/constants";

const { socials } = GLOBAL_CONSTANS;

const Footer = () => {
  return (
    <footer
      className="w-full py-6 border-t border-neutral-800 text-sm text-neutral-400"
      id="contact"
    >
      <FloatingDock items={socials.map((o) => ({ ...o, icon: o.colorIcon }))} />

      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-4">
        <div className="flex flex-col items-start">
          <p className="text-neutral-500 text-center">
            Built from scratch with Next.js & a lot of caffeine.
          </p>

          <p className="mt-1 text-center w-full md:text-start">
            © {new Date().getFullYear()} Ritik Goyal —{" "}
            <span className="text-lime-400">Frontend Developer</span>
          </p>
        </div>

        <nav className="flex gap-4">
          {socials.map((link, idx) => {
            const { icon: Icon, href } = link;

            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Icon className="text-white/50 hover:text-white text-2xl cursor-pointer transition-colors size-6" />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
