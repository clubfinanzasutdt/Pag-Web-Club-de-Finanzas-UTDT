import type { Metadata } from "next";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { getSiteUrl } from "@/lib/site";

export function buildPageMetadata(
  lang: Locale,
  dictionary: Dictionary,
  title: string,
  description: string,
  path: string
): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteUrl}/${lang}${canonicalPath === "/" ? "" : canonicalPath}`;
  const image = `${siteUrl}/images/logo.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${siteUrl}/es${canonicalPath === "/" ? "" : canonicalPath}`,
        en: `${siteUrl}/en${canonicalPath === "/" ? "" : canonicalPath}`
      }
    },
    openGraph: {
      title: `${title} | ${dictionary.site.name}`,
      description,
      url,
      siteName: dictionary.site.name,
      locale: lang === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: image,
          alt: dictionary.site.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${dictionary.site.name}`,
      description,
      images: [image]
    }
  };
}
