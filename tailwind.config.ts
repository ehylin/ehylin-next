import type { Config } from "tailwindcss";
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define aquí los colores para tus temas
        "background-light": "#ffffff", // Fondo blanco para el tema claro
        "background-dark": "#262d36",
        "primary-light": "#ffffff",
        "primary-dark": "#000000",
        "text-light": "#000000",
        "text-dark": "#ffffff",
      },
      fontFamily: {
        sans: ["DM Sans", ..._fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
