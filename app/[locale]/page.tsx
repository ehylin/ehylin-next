"use client";
import {
  AboutSection,
  CategoriesSection,
  PhotoSection,
  PortfolioSection,
} from "@/components";
import { useTheme } from "@/context/themeContext";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div
        className={`py-4 px-8 ${
          theme === "light"
            ? "bg-background-light text-text-light"
            : "bg-background-dark text-text-dark"
        }`}
      >
        <h1 className="text-4xl font-bold font-sans">{t("title")}</h1>
        <p className="text-lg mt-4">description</p>
        <PhotoSection />
        <CategoriesSection />
        <AboutSection />
        <PortfolioSection />
      </div>
    </>
  );
}
