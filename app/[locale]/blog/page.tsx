"use client";
import { useTheme } from "@/context/themeContext";

export default function BlogPage() {
  const { theme } = useTheme();
  return (
    <div
    className={`py-4 px-8 ${
      theme === "light"
        ? "bg-background-light text-text-light"
        : "bg-background-dark text-text-dark"
    }`}
  >
      <h1>Blog texto</h1>
    </div>
  );
}
