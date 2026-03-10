import type { Metadata } from "next";
import {
  Building2,
  GraduationCap,
  MessagesSquare,
  Trophy
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ActivityCard from "@/components/ActivityCard";
import FeaturedActivity from "@/components/FeaturedActivity";
import WhyJoinSection from "@/components/WhyJoinSection";
import CTAFooter from "@/components/CTAFooter";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { events } from "@/content/events";
import { localePath } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.home.title,
    description: dictionary.meta.home.description
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dictionary = getDictionary(lang);

  const featuredEvents = [...events]
    .filter((event) => event.status === "featured")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const cards = [
    {
      icon: MessagesSquare,
      title: dictionary.homeActivities.cards[0].title,
      description: dictionary.homeActivities.cards[0].description,
      href: localePath(lang, "/archive?filter=charla"),
      iconClassName: "text-brandCyan",
      iconBgClass: "bg-brandCyan/10"
    },
    {
      icon: Building2,
      title: dictionary.homeActivities.cards[1].title,
      description: dictionary.homeActivities.cards[1].description,
      href: localePath(lang, "/archive?filter=visita"),
      iconClassName: "text-brandMagenta",
      iconBgClass: "bg-brandMagenta/10"
    },
    {
      icon: GraduationCap,
      title: dictionary.homeActivities.cards[2].title,
      description: dictionary.homeActivities.cards[2].description,
      href: localePath(lang, "/archive?filter=educacion"),
      iconClassName: "text-brandOrange",
      iconBgClass: "bg-brandOrange/10"
    },
    {
      icon: Trophy,
      title: dictionary.homeActivities.cards[3].title,
      description: dictionary.homeActivities.cards[3].description,
      href: localePath(lang, "/archive?filter=competencia"),
      iconClassName: "text-brandCyan",
      iconBgClass: "bg-brandCyan/10"
    }
  ];

  return (
    <>
      <HeroSection lang={lang} dictionary={dictionary} />
      <CredibilityStrip dictionary={dictionary} />

      <section className="section-shell">
        <div className="site-container">
          <span className="section-eyebrow">
            {dictionary.homeActivities.eyebrow}
          </span>
          <h2 className="section-title">{dictionary.homeActivities.heading}</h2>
          <p className="section-description">
            {dictionary.homeActivities.description}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <ActivityCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
                iconClassName={card.iconClassName}
                iconBgClass={card.iconBgClass}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="site-container">
          <span className="section-eyebrow">{dictionary.featured.eyebrow}</span>
          <h2 className="section-title">{dictionary.featured.heading}</h2>
          <p className="section-description">{dictionary.featured.description}</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <FeaturedActivity
                key={event.id}
                activity={event}
                lang={lang}
                dictionary={dictionary}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyJoinSection dictionary={dictionary} />

      <section className="section-shell pt-0">
        <div className="site-container">
          <h2 className="section-title text-center">{dictionary.partners.heading}</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:grid-cols-4 lg:grid-cols-8">
            {dictionary.partners.list.map((partner) => (
              <div
                key={partner}
                className="flex min-h-16 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-4 text-center text-sm font-medium text-zinc-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter dictionary={dictionary} />
    </>
  );
}
