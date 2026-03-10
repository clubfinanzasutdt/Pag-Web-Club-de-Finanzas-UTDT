import { Suspense } from "react";
import type { Metadata } from "next";
import EventFilter from "@/components/EventFilter";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { events } from "@/content/events";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.archive.title,
    description: dictionary.meta.archive.description
  };
}

export default async function ArchivePage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dictionary = getDictionary(lang);

  return (
    <div className="section-shell">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.nav.archive}</span>
        <h1 className="section-title">{dictionary.archivePage.title}</h1>
        <p className="section-description">{dictionary.archivePage.intro}</p>

        <div className="mt-12">
          <Suspense fallback={<div className="glass-card p-8 text-center text-zinc-400">Loading...</div>}>
            <EventFilter events={events} lang={lang} dictionary={dictionary} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
