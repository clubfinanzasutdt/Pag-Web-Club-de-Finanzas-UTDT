import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const localizedPaths = ["/", "/about", "/activities", "/archive", "/team"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return localizedPaths.flatMap((path) =>
    locales.map((lang) => {
      const url = `${siteUrl}/${lang}${path === "/" ? "" : path}`;

      return {
        url,
        lastModified: new Date(),
        alternates: {
          languages: {
            es: `${siteUrl}/es${path === "/" ? "" : path}`,
            en: `${siteUrl}/en${path === "/" ? "" : path}`
          }
        }
      };
    })
  );
}
