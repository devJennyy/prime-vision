import { useState } from "react";
import { logo } from "../../styles/GlobalStyles";
import DarkModeToggle from "../ui/DarkModeToggle";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#homepage");

  const navLinks = [
    { label: "Home", href: "#homepage" },
    { label: "Movies", href: "#movies" },
    { label: "Series", href: "#series" },
  ];

  return (
    <div className="flex justify-between items-center w-full pt-8 pb-16">
      <div className="flex justify-center items-center sm:gap-4 gap-2">
        {logo}
        <p className="capitalize sm:text-3xl text-xl font-semibold dark:text-secondary text-primary">
          Prime<span className="dark:text-white text-primary/40">Vision</span>
        </p>
      </div>
      <nav className="lg:flex hidden justify-between items-center max-w-[390px] w-full h-[63px] px-14 rounded-full bg-primary">
        {navLinks?.map(({ label, href }) => (
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
    </div>
  );
};

export default Header;
