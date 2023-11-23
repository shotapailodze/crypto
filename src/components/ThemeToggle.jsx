import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2 ">
      {theme === "dark" ? (
        <div className="flex items-center cursor-pointer" onClick={handleTheme}>
          <HiSun className="text-primary text-2xl mr-2" />
          Light Mode
        </div>
      ) : (
        <div className="flex items-center cursor-pointer" onClick={handleTheme}>
          <HiMoon className="text-primary text-2xl mr-2" />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
