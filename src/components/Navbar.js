"use client";

import Button from "@/common/ui-components/Button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "@/common/components/Banner";
import { EMAIL } from "@/constants";
import { Send } from "lucide-react";

const navLinks = [
  { label: "About", id: "" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmail = () => {
    window.location.href = `mailto:${EMAIL}`;
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
              <button
                className="relative cursor-pointer pr-12 md:hidden"
                onClick={() => setIsOpen((p) => !p)}
              >
                <div className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                  />

                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>

              <div className="md:flex items-center gap-4 hidden">
                <Button type="secondary" onClick={handleEmail}>
                  Email Me
                  <Send className="size-6 ml-0.5" />
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
                    <Send className="size-6 ml-0.5" />
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
