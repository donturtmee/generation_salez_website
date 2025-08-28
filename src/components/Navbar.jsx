import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {styles} from "../styles";
import {navLinks} from "../constants";
import {close, logo, menu} from "../assets";

const panelVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10); // bg only after a tiny scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial transparent state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <nav
          className={`${styles.paddingX} fixed top-0 left-0 right-0 z-[60] py-5
                  transition-colors duration-300 will-change-[background-color]
                  ${scrolled ? "bg-primary" : "!bg-transparent"}`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              <span className="sm:block hidden">Generation Salez</span>
            </p>
          </Link>

          {/* Desktop nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
                <li
                    key={nav.id}
                    className={`${active === nav.title ? "text-white" : "text-secondary"}
                          hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>

          {/* Mobile trigger + full-screen panel */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain z-[70]" // above overlay
                onClick={() => setToggle((t) => !t)}
            />

            <AnimatePresence>
              {toggle && (
                  <motion.div
                      key="mobile-menu"
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="fixed inset-0 z-[60] bg-primary" // full-screen, solid color
                  >
                    <div className="w-full h-full flex items-center justify-center px-6">
                      <ul className="list-none flex flex-col items-center gap-8 text-center">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-medium text-[18px] ${
                                    active === nav.title ? "text-white" : "text-secondary"
                                }`}
                                onClick={() => {
                                  setActive(nav.title);
                                  setToggle(false);
                                }}
                            >
                              <a href={`#${nav.id}`} className="block">{nav.title}</a>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
