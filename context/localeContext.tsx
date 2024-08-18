"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>("es"); // Default locale

  useEffect(() => {
    // Leer el idioma de la URL o de localStorage
    const urlLocale = window.location.pathname.split("/")[1];
    const storedLocale = localStorage.getItem("locale");

    if (urlLocale && (urlLocale === "en" || urlLocale === "es")) {
      setLocale(urlLocale);
    } else if (storedLocale) {
      setLocale(storedLocale);
    } else {
      // Default to 'es' if no valid locale is found
      setLocale("es");
    }
  }, []);

  useEffect(() => {
    // Guardar el locale en localStorage
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
