import { Locale } from "@/lib/types";

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(lang: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `/${lang}` : `/${lang}${normalized}`;
}

export function switchLocaleInPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}/${segments.join("/")}`;
}

export function formatDate(date: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}
