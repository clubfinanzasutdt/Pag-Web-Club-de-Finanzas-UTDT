import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Activity, Locale } from "@/lib/types";
import { formatDate, localePath } from "@/lib/i18n";

type HeroSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
  featuredActivity: Activity;
};

export default function HeroSection({
  lang,
  dictionary,
  featuredActivity
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-line">
      <Image
        src={featuredActivity.image}
        alt={featuredActivity.title[lang]}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/42" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="site-container relative flex min-h-[72vh] flex-col justify-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <span className="section-eyebrow">UTDT · Finance Club</span>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {dictionary.site.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 sm:text-xl">
            {dictionary.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(lang, "/archive")} className="primary-button">
              {dictionary.common.viewFullArchive}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link href={localePath(lang, "/activities")} className="secondary-button">
              {dictionary.common.exploreActivities}
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <div className="text-xs font-semibold uppercase text-brandOrange">
              {dictionary.featured.eyebrow}
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              {featuredActivity.title[lang]}
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-zinc-300">
            <CalendarDays className="mt-0.5 h-4 w-4 text-brandCyan" />
            <span>{formatDate(featuredActivity.date, lang)}</span>
          </div>

          {featuredActivity.location ? (
            <div className="flex items-start gap-3 text-sm text-zinc-300">
              <MapPin className="mt-0.5 h-4 w-4 text-brandMagenta" />
              <span>{featuredActivity.location}</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
