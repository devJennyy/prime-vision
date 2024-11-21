import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../styles/GlobalStyles";
import DarkModeToggle from "../ui/DarkModeToggle";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#homepage");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#homepage" },
    { label: "Movies", href: "#movies" },
    { label: "Series", href: "#series" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "sm:h-[100px] h-[60px] bg-primary/80 dark:bg-deepSlate/80 backdrop-blur-lg"
          : "sm:h-32 h-20 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto w-full 2xl:px-16 xl:px-10 px-5 h-full">
        <div className="flex justify-center items-center sm:gap-4 gap-2">
          {logo}
          <p className="capitalize sm:text-3xl text-xl font-semibold dark:text-secondary text-primary">
            Prime<span className="dark:text-white text-primary/40">Vision</span>
          </p>
        </div>
        {/* Desktop Navbar */}
        <nav className="lg:flex hidden justify-between items-center max-w-[390px] w-full h-[63px] px-14 rounded-full bg-primary">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActiveNav(href)}
              className={`text-lg transition-all duration-300 ease-in-out ${
                activeNav === href
                  ? "text-secondary"
                  : "text-white dark:text-white hover:text-secondary"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="lg:flex gap-3 hidden">
          <div className="flex justify-between items-center pl-6 pr-4 w-[205px] h-[50px] rounded-full dark:bg-deepSlate border border-primary/30 dark:border-primary dark:focus-within:border-white/80">
            <input
              placeholder="Search"
              className="w-full h-full bg-transparent outline-none pr-2 dark:text-white text-primary dark:placeholder-white/80 placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
            />
            <button className="flex items-center justify-center p-1">
              <IoSearch
                size={20}
                className="dark:text-white/80 text-primary/60"
              />
            </button>
          </div>

          <DarkModeToggle />
        </div>
        {/* Mobile Burger Icon */}
        <div className="lg:hidden">
          <RxHamburgerMenu
            className="sm:text-3xl text-2xl cursor-pointer dark:text-white text-primary"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed flex flex-col justify-center items-center top-0 right-0 w-[80%] max-w-[320px] h-full bg-primary/80 dark:bg-deepSlate/80 backdrop-blur-lg shadow-lg z-50 py-10 gap-8 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={toggleAnimation}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <IoMdClose
              className="absolute top-5 right-5 text-3xl font-bold dark:text-white text-secondary cursor-pointer"
              onClick={toggleMenu}
            />
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => {
                  toggleMenu();
                  setActiveNav(href);
                }}
                className="text-white dark:text-white font-bold text-xl"
              >
                {label}
              </a>
            ))}
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
