import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/context/themeContext";
import { ThemeSwitcher } from "@/components";
import { LocaleProvider } from "@/context/localeContext";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Ehylin Next.js con App Router..",
  description: "Ehylin Next.js con App Router..",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="theme-wrapper">
      <body>
        <div>
          <div className="flex flex-col min-h-[calc(100vh-100px)] overflow-clip rounded-[25px] m-[50px]">
            <ThemeProvider>
              <LocaleProvider>
                <NextIntlClientProvider messages={messages}>
                  <ThemeSwitcher />
                  <Header locale={locale} />
                  <main>{children}</main>
                  <Footer /> 
                </NextIntlClientProvider>
              </LocaleProvider>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
