"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavbarProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: dictionary.nav.home },
    { href: "/about", label: dictionary.nav.about },
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
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/55 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link
          href={localePath(lang, "/")}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amberAccent via-cyanAccent to-pinkAccent text-sm font-black text-black">
            dt
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
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher currentLang={lang} />
          <Link
            href={localePath(lang, "/archive?filter=upcoming")}
            className="rounded-full bg-amberAccent px-4 py-2 text-sm font-semibold text-black hover:scale-[1.01] hover:bg-amber-400"
          >
            {dictionary.nav.upcomingCta}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-zinc-800 bg-zinc-950/95 lg:hidden">
          <div className="site-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(lang, item.href)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <Link
              href={localePath(lang, "/archive?filter=upcoming")}
              className="rounded-2xl bg-amberAccent px-4 py-3 text-sm font-semibold text-black"
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
