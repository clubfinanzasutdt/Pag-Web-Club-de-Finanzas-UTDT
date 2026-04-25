"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function LanguageSwitcherFallback() {
  return (
    <div className="inline-flex items-center rounded-md border border-line bg-surface p-1 text-sm font-medium">
      <span className="rounded px-3 py-1.5 bg-white text-black">ES</span>
      <span className="rounded px-3 py-1.5 text-zinc-400">EN</span>
    </div>
  );
}

type NavbarProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: dictionary.nav.home },
    { href: "/activities", label: dictionary.nav.activities },
    { href: "/archive", label: dictionary.nav.archive },
    { href: "/team", label: dictionary.nav.team }
  ];

  const isActive = (href: string) => {
    const localizedHref = localePath(lang, href);

    if (href === "/") {
      return pathname === localizedHref;
    }

    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/88 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brandOrange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="site-container flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href={localePath(lang, "/")}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-md border border-white/10">
            <Image
              src="/images/logo.png"
              alt="DiTella Finance Club"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-white">
              {dictionary.site.name}
            </div>
            <div className="text-xs text-zinc-500">{dictionary.site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={localePath(lang, item.href)}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                isActive(item.href)
                  ? "bg-brandOrange/12 text-brandOrange"
                  : "text-zinc-400 hover:bg-surface hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Suspense fallback={<LanguageSwitcherFallback />}>
            <LanguageSwitcher currentLang={lang} />
          </Suspense>
          <Link
            href={localePath(lang, "/archive?filter=upcoming")}
            className="primary-button px-4 py-2.5"
          >
            {dictionary.nav.upcomingCta}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-background lg:hidden">
          <div className="site-container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(lang, item.href)}
                className={`rounded-md px-4 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brandOrange/12 text-brandOrange"
                    : "bg-surface text-zinc-300 hover:bg-surfaceElevated hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Suspense fallback={<LanguageSwitcherFallback />}>
                <LanguageSwitcher currentLang={lang} />
              </Suspense>
            </div>

            <Link
              href={localePath(lang, "/archive?filter=upcoming")}
              className="primary-button mt-2 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              {dictionary.nav.upcomingCta}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
