import Link from "next/link";
import Image from "next/image";
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
      {/* Background gradient orbs using brand colors */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[5%] h-72 w-72 rounded-full bg-brandOrange/12 blur-[100px]" />
        <div className="absolute right-[10%] top-[15%] h-80 w-80 rounded-full bg-brandCyan/10 blur-[100px]" />
        <div className="absolute bottom-[5%] left-1/3 h-64 w-64 rounded-full bg-brandMagenta/8 blur-[100px]" />
      </div>

      <div className="site-container relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <span className="section-eyebrow">{dictionary.site.name}</span>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-brandOrange">Di</span>
              <span className="text-brandCyan">Te</span>
              <span className="text-brandMagenta">lla</span>
              <br />
              <span className="text-white">{dictionary.hero.headline}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
              {dictionary.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={localePath(lang, "/activities")}
                className="inline-flex items-center justify-center rounded-full bg-brandOrange px-6 py-3.5 text-sm font-semibold text-black hover:brightness-110 transition-all"
              >
                {dictionary.common.exploreActivities}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href={localePath(lang, "/archive?filter=upcoming")}
                className="inline-flex items-center justify-center rounded-full border border-brandCyan/30 bg-brandCyan/10 px-6 py-3.5 text-sm font-semibold text-brandCyan hover:bg-brandCyan/15"
              >
                {dictionary.common.upcomingEvents}
              </Link>
            </div>
          </div>

          {/* Logo showcase */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brandOrange/20 via-brandMagenta/10 to-brandCyan/20 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl border border-zinc-800/50 bg-black/40 backdrop-blur-sm p-8 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="DiTella Finance Club"
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
