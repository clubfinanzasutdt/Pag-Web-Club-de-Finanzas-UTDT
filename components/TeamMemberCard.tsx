import Image from "next/image";
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
  return (
    <article className="glass-card overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="p-6">
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
