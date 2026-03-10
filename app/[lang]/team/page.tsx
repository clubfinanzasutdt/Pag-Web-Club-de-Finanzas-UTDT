import type { Metadata } from "next";
import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import TeamMemberCard from "@/components/TeamMemberCard";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/types";
import { teamMembers } from "@/content/team";
import { clubLinks } from "@/content/links";

type PageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.team.title,
    description: dictionary.meta.team.description
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <div className="section-shell">
      <div className="site-container">
        <span className="section-eyebrow">{dictionary.nav.team}</span>
        <h1 className="section-title">{dictionary.teamPage.title}</h1>
        <p className="section-description">{dictionary.teamPage.intro}</p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white">
            {dictionary.teamPage.boardTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} lang={lang} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              {dictionary.teamPage.joinTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {dictionary.teamPage.joinSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandOrange text-sm font-bold text-black">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-zinc-300">{step}</p>
                </div>
              ))}
            </div>

            <a
              href={clubLinks.join}
              className="mt-8 inline-flex items-center rounded-full bg-brandOrange px-5 py-3 text-sm font-semibold text-black hover:brightness-110 transition-all"
            >
              {dictionary.teamPage.joinButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              {dictionary.teamPage.contactTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {dictionary.teamPage.contactBody}
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href={clubLinks.email}
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm font-medium text-white hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brandOrange" />
                  {dictionary.teamPage.joinByEmail}
                </span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>

              <a
                href={clubLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm font-medium text-white hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-brandMagenta" />
                  {dictionary.teamPage.directMessage}
                </span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>

              <a
                href={clubLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm font-medium text-white hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-brandCyan" />
                  {dictionary.common.whatsapp}
                </span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
              <p className="text-sm leading-7 text-zinc-400">
                {dictionary.footer.tagline}
              </p>
              <div className="mt-4">
                <Link
                  href={clubLinks.linktree}
                  className="text-sm font-semibold text-brandCyan hover:text-brandCyan/80"
                >
                  Linktree
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
