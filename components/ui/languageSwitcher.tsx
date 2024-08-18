"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/context/localeContext";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = async (newLocale: string) => {
    setIsLoading(true);
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
    try {
      await router.push(`/${newLocale}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "es";
    setLocale(storedLocale);
  }, [setLocale]);

  return (
    <div>
      <div>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`p-2 ${locale === "en" ? "font-bold" : ""}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("es")}
          className={`p-2 ${locale === "es" ? "font-bold" : ""}`}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
