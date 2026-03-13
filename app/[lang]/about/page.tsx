import type { Metadata } from "next";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { assertLocale, localePath } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = assertLocale(langParam);
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.about.title,
    description: dictionary.meta.about.description
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang = assertLocale(langParam);
  const dictionary = getDictionary(lang);

  const icons = [Briefcase, GraduationCap, TrendingUp, Users, Rocket];

  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="max-w-4xl">
          <span className="section-eyebrow">{dictionary.nav.about}</span>
          <h1 className="section-title">{dictionary.about.title}</h1>
          <p className="section-description">{dictionary.about.intro}</p>
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              {dictionary.about.missionTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              {dictionary.about.missionBody}
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              {dictionary.about.campusTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {dictionary.about.campusBody}
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="section-title">{dictionary.about.pillarsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {dictionary.about.pillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={pillar.title}
                  className="glass-card flex h-full flex-col p-6"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              {dictionary.about.historyTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {dictionary.about.historyBody}
            </p>
          </div>

          <div className="glass-card flex flex-col justify-between p-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {dictionary.teamPage.joinTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                {dictionary.teamPage.contactBody}
              </p>
            </div>

            <Link
              href={localePath(lang, "/team")}
              className="mt-8 inline-flex w-fit items-center rounded-full bg-amberAccent px-5 py-3 text-sm font-semibold text-black hover:scale-[1.01] hover:bg-amber-400"
            >
              {dictionary.common.joinClub}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
