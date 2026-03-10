"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Locale } from "@/lib/types";
import { switchLocaleInPath } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: Locale;
};

export default function LanguageSwitcher({
  currentLang
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildHref = (nextLang: Locale) => {
    const switched = switchLocaleInPath(pathname, nextLang);
    const query = searchParams.toString();

    return query ? `${switched}?${query}` : switched;
  };

  return (
    <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1 text-sm font-medium">
      {(["es", "en"] as const).map((locale) => (
        <Link
          key={locale}
          href={buildHref(locale)}
          className={`rounded-full px-3 py-1.5 ${
            currentLang === locale
              ? "bg-white text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
