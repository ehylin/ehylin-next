"use client";

import { useTheme } from "@/context/themeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Cambia la clase del botón en función del tema actual
  const buttonClass =
    theme === "light"
      ? "p-2 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
      : "p-2 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900";

  return (
    <button onClick={toggleTheme} className={buttonClass}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
