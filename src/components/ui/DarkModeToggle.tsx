import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../../hooks/useDarkMode";
import "../../styles/toggle.css";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`root cursor-pointer ${darkMode ? "dark" : "light"} ${isLoaded ? "ready" : ""}`}
    >
      <div className="mode sm:ml-5 ml-3 mr-4" onClick={handleToggle}>
        {isLoaded && (
          <>
            <BsFillSunFill className="icon sun sm:text-[9px] text-[8px]"  />
            <BsFillMoonStarsFill className="icon moon sm:text-[8px] text-[7px]"  />
          </>
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
