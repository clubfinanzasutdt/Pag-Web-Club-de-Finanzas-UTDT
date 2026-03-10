import { Linkedin } from "lucide-react";
import { TeamMember, Locale } from "@/lib/types";

type TeamMemberCardProps = {
  member: TeamMember;
  lang: Locale;
};

export default function TeamMemberCard({
  member,
  lang
}: TeamMemberCardProps) {
  const initials = member.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase())
    .join("");

  return (
    <article className="glass-card p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white">
        {initials}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-400">{member.role[lang]}</p>

        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brandCyan hover:text-brandCyan/80"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  );
}
