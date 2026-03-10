import type { Metadata } from "next";
import EventFilter from "@/components/EventFilter";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { events } from "@/content/events";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const dictionary = getDictionary(params.lang);

  return {
    title: dictionary.meta.archive.title,
    description: dictionary.meta.archive.description
  };
}

export default function ArchivePage({ params }: PageProps) {
  const { lang } = params;
  const dictionary = getDictionary(lang);

  return (
    <div className="section-shell">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.nav.archive}</span>
        <h1 className="section-title">{dictionary.archivePage.title}</h1>
        <p className="section-description">{dictionary.archivePage.intro}</p>

        <div className="mt-12">
          <EventFilter events={events} lang={lang} dictionary={dictionary} />
        </div>
      </div>
    </div>
  );
}
