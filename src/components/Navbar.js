"use client";

import Button from "@/common/ui-components/Button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "@/common/components/Banner";
import Send from "@/common/svgs/Send";

const navLinks = [
  { label: "About", id: "" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmail = () => {
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`;
  };

  const handleScroll = (id) => {
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-4 fixed w-[90%] md:w-[80%] lg:w-[70%] top-0 z-50">
      <div className="container mx-auto">
        <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/65 backdrop-blur">
          <div className="flex items-center justify-between p-2 px-4 md:pr-2">
            <Banner />

            <nav className="lg:flex gap-6 font-medium hidden">
              {navLinks.map((e) => {
                return (
                  <div
                    role="presentation"
                    onClick={() => handleScroll(e.id)}
                    key={e.label}
                    className="cursor-pointer"
                  >
                    {e.label}
                  </div>
                );
              })}
            </nav>

            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden cursor-pointer"
                onClick={() => setIsOpen((p) => !p)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                />
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                />
              </svg>

              <div className="md:flex items-center gap-4 hidden">
                <Button type="secondary" onClick={handleEmail}>
                  Email Me
                  <Send className="size-6" />
                </Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                exit={{ height: 0 }}
                animate={{ height: "auto" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center py-4 gap-4">
                  {navLinks.map((e) => {
                    return (
                      <div
                        role="presentation"
                        onClick={() => handleScroll(e.id)}
                        key={e.label}
                        className="cursor-pointer"
                      >
                        {e.label}
                      </div>
                    );
                  })}

                  <Button
                    type="secondary"
                    className="w-[90%] flex items-center gap-2 justify-center"
                    onClick={handleEmail}
                  >
                    Email Me
                    <Send className="size-6" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
