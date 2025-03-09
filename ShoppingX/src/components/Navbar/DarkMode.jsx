import React, { useEffect, useState } from 'react';
import LightButton from "../../assets/website/sun.png";
import DarkButton from "../../assets/website/moon.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
       return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
  return (
    <div className="relative">
        <img src={LightButton} alt="" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`w-5 cursor-pointer drop-shadow-[1px_1px_1px_ rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark"? "opacity-0" : "opacity-100"} `}/>
        <img src={DarkButton} alt="" onClick={() => setTheme(theme === "light" ? "light" : "dark")} className={`w-5 cursor-pointer drop-shadow-[1px_1px_1px_ rgba(0,0,0,0.1)] transition-all duration-300 `}/>
    </div>
  )
};

export default DarkMode;