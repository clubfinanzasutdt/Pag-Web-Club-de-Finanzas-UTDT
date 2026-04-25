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
import CTAFooter from "@/components/CTAFooter";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { archiveEvents } from "@/content/archiveEvents";
import { assertLocale, localePath } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = assertLocale(langParam);
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.home.title,
    description: dictionary.meta.home.description
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang = assertLocale(langParam);
  const dictionary = getDictionary(lang);

  const featuredEvents = [...archiveEvents]
    .filter((event) => event.status === "past")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

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
      <HeroSection lang={lang} dictionary={dictionary} featuredActivity={featuredEvents[0]} />
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

      <CTAFooter dictionary={dictionary} />
    </>
  );
}
