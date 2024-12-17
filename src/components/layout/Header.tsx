import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo, transitionEffect } from "../../styles/GlobalStyles";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("/homepage");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/homepage" },
    { label: "Movies", href: "/movies" },
    { label: "Series", href: "/series" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 sm:h-20 w-full transition-all duration-500 ease-in-out sm:border-b sm:border-silverAsh/10 ${
        isScrolled ? "dark:bg-deepSlate/80 backdrop-blur-lg " : "bg-transparent"
      }`}
    >
      <div className="sm:flex justify-between items-center max-w-[1440px] mx-auto w-full 2xl:px-16 xl:px-10 px-5 h-full hidden">
        <Link to="/homepage" className="flex justify-center items-center gap-2">
          {logo}
          <p className="capitalize lg:text-[28px] text-2xl font-medium dark:text-secondary text-primary">
            Prime<span className="dark:text-white text-primary/40">Vision</span>
          </p>
        </Link>
        <nav className="lg:flex hidden justify-between items-center gap-14">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setActiveNav(href)}
              className={`xl:text-lg text-[16px] tracking-wide font-light ${transitionEffect}  ${
                activeNav === href
                  ? "text-secondary font-normal"
                  : "text-white dark:text-white hover:text-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="lg:flex justify-center items-center gap-2 hidden">
          <div className="flex justify-between items-center pl-6 pr-4 w-full max-w-[205px] h-11 rounded-full  border border-primary/30 dark:border-primary dark:focus-within:border-white/80">
            <input
              placeholder="Search"
              className="w-full h-full bg-transparent outline-none pr-2 xl:text-[16px] text-sm dark:text-white text-primary dark:placeholder-white tracking-wide placeholder:font-light placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
            />
            <button className="flex items-center justify-center p-1">
              <FiSearch className="xl:text-[18px] text-lg dark:text-white/90 dark:active:text-white text-primary/60" />
            </button>
          </div>
          <a
            href="https://github.com/devJennyy"
            target="_blank"
            className={`p-2 hover:bg-primary rounded-full ${transitionEffect}`}
          >
            <FaGithub size={22} />
          </a>
        </div>

        <div className="flex justify-center items-center gap-5 lg:hidden">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-between items-center pl-6 pr-4 w-full max-w-[205px] h-11 rounded-full  border border-primary/30 dark:border-primary dark:focus-within:border-white/80">
              <input
                placeholder="Search"
                className="w-full h-full bg-transparent outline-none pr-2 xl:text-[16px] text-sm dark:text-white text-primary dark:placeholder-white tracking-wide placeholder:font-light placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
              />
              <button className="flex items-center justify-center p-1">
                <FiSearch className="xl:text-[18px] text-lg dark:text-white/90 dark:active:text-white text-primary/60" />
              </button>
            </div>
            <a
              href="https://github.com/devJennyy"
              target="_blank"
              className={`p-2 hover:bg-primary lg:bg-none sm:bg-primary rounded-full ${transitionEffect}`}
            >
              <FaGithub size={22} />
            </a>
          </div>
          <RxHamburgerMenu
            className="sm:text-3xl cursor-pointer dark:text-white text-primary"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div className="absolute right-5 top-4 sm:hidden">
      <RxHamburgerMenu
            className="text-3xl cursor-pointer dark:text-white text-primary"
            onClick={toggleMenu}
          />
      </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
