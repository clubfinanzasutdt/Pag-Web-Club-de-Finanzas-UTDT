import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { locales, isLocale } from "@/lib/i18n";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return {
    title: {
      default: dictionary.site.name,
      template: `%s | ${dictionary.site.name}`
    },
    description: dictionary.site.tagline
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-100" />
          <Navbar lang={lang} dictionary={dictionary} />
          <main className="relative z-10">{children}</main>
          <Footer dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
