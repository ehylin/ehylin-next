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
            <ThemeProvider>
              <LocaleProvider>
                <NextIntlClientProvider messages={messages}>
                  <ThemeSwitcher />
                 
                    <div className="flex flex-col lg:min-h-[calc(100vh-100px)] lg:overflow-clip lg:rounded-[25px] lg:m-[50px]">
                     <Header locale={locale} />
                      <main>{children}</main>
                     <Footer /> 
                    </div>
              
                </NextIntlClientProvider>
              </LocaleProvider>
            </ThemeProvider>
            </body>
    </html>
  );
}
