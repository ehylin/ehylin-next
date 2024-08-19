"use client";

import { useTheme } from "@/context/themeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Cambia la clase del botón en función del tema actual
  const buttonClass =
    theme === "light"
      ? "p-2 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
      : "p-2 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-100";

  return (
    <div className="fixed right-[59px] bottom-[100px]">
     <div className="flex flex-col bg-custom-background text-black rounded-[50px] w-[28px] gap-[25px] p-[7px] relative cursor-pointer">
        <button onClick={toggleTheme} className={buttonClass}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
