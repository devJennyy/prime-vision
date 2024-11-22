import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";
import { useDarkMode } from "../../hooks/useDarkMode";
import "../../styles/toggle.css";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`root ${darkMode ? "dark" : "light"}`}
      onClick={handleToggle}
    >
      <div className="sm:flex justify-center items-center mode mx-5 hidden">
        <PiSunFill
          size={10}
          className={`icon ${darkMode ? "hide" : "show"}`}
        />
        <BsFillMoonStarsFill
          size={8}
          className={`icon ${darkMode ? "show" : "hide"}`}
        />
      </div>
      <div className="flex justify-center items-center mode mx-[14px] mb-1 sm:hidden">
        <PiSunFill
          size={9}
          className={`icon ${darkMode ? "hide" : "show"}`}
        />
        <BsFillMoonStarsFill
          size={7}
          className={`icon ${darkMode ? "show" : "hide"}`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
