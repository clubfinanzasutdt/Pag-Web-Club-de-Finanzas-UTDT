import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";

type HeroSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export default function HeroSection({ lang, dictionary }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-56 w-56 rounded-full bg-amberAccent/10 blur-3xl" />
        <div className="absolute right-[12%] top-[18%] h-64 w-64 rounded-full bg-cyanAccent/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purpleAccent/10 blur-3xl" />
      </div>

      <div className="site-container relative z-10 py-20">
        <div className="max-w-4xl">
          <span className="section-eyebrow">{dictionary.site.name}</span>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dictionary.hero.headline}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {dictionary.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={localePath(lang, "/activities")}
              className="inline-flex items-center justify-center rounded-full bg-amberAccent px-6 py-3.5 text-sm font-semibold text-black hover:scale-[1.01] hover:bg-amber-400"
            >
              {dictionary.common.exploreActivities}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href={localePath(lang, "/team")}
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-white hover:border-zinc-600 hover:bg-zinc-800"
            >
              {dictionary.common.joinClub}
            </Link>

            <Link
              href={localePath(lang, "/archive?filter=upcoming")}
              className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/15"
            >
              {dictionary.common.upcomingEvents}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
