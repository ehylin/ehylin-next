// components/ui/Footer.tsx
"use client";
import Link from "next/link";
import { useTheme } from "@/context/themeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      className={`py-4 px-8 border-t ${
        theme === "light"
          ? "bg-background-light text-text-light"
          : "bg-background-dark text-text-dark"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>&copy; 2024 Your Company</div>
        <div className="flex space-x-4">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
