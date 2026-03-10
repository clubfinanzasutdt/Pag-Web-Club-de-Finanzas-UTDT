import type { Metadata } from "next";
import {
  Building2,
  GraduationCap,
  MessagesSquare,
  Trophy
} from "lucide-react";
import Link from "next/link";
import ActivityCard from "@/components/ActivityCard";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const dictionary = getDictionary(params.lang);

  return {
    title: dictionary.meta.activities.title,
    description: dictionary.meta.activities.description
  };
}

export default function ActivitiesPage({ params }: PageProps) {
  const { lang } = params;
  const dictionary = getDictionary(lang);

  const cards = [
    {
      icon: MessagesSquare,
      title: dictionary.activitiesPage.cards[0].title,
      description: dictionary.activitiesPage.cards[0].description,
      href: localePath(lang, "/archive?filter=charla"),
      iconClassName: "text-cyan-300",
      iconBgClass: "bg-cyan-500/10"
    },
    {
      icon: Building2,
      title: dictionary.activitiesPage.cards[1].title,
      description: dictionary.activitiesPage.cards[1].description,
      href: localePath(lang, "/archive?filter=visita"),
      iconClassName: "text-pink-300",
      iconBgClass: "bg-pink-500/10"
    },
    {
      icon: GraduationCap,
      title: dictionary.activitiesPage.cards[2].title,
      description: dictionary.activitiesPage.cards[2].description,
      href: localePath(lang, "/archive?filter=educacion"),
      iconClassName: "text-purple-300",
      iconBgClass: "bg-purple-500/10"
    },
    {
      icon: Trophy,
      title: dictionary.activitiesPage.cards[3].title,
      description: dictionary.activitiesPage.cards[3].description,
      href: localePath(lang, "/archive?filter=competencia"),
      iconClassName: "text-amber-300",
      iconBgClass: "bg-amber-500/10"
    }
  ];

  return (
    <div className="section-shell">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.nav.activities}</span>
        <h1 className="section-title">{dictionary.activitiesPage.title}</h1>
        <p className="section-description">{dictionary.activitiesPage.intro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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

        <div className="mt-12">
          <Link
            href={localePath(lang, "/archive")}
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:border-zinc-600 hover:bg-zinc-800"
          >
            {dictionary.common.viewFullArchive}
          </Link>
        </div>
      </div>
    </div>
  );
}
