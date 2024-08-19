"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "@/context/themeContext";
import LanguageSwitcher from "./languageSwitcher";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("Header");
  const { theme } = useTheme();
  return (
    <header
      className={`py-4 px-8 border border-b ${
        theme === "light"
          ? "bg-background-light text-text-light"
          : "bg-background-dark text-text-dark"
      }`}
    >
      <nav className="flex justify-between items-center">

        {/* Redes sociales a la izquierda */}
        <div className="flex space-x-4">
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Exx</Link>
        </div>
        {/* Enlaces principales en el centro */}
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/blog`}>{t("blog")}</Link>
          <Link href="/">Contact</Link>
        </div>
        {/* Enlace para el menú lateral a la derecha */}
        <div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
