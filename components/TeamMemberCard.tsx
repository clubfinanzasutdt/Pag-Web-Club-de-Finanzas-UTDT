import Image from "next/image";
import { Linkedin } from "lucide-react";
import { TeamMember, Locale } from "@/lib/types";

type TeamMemberCardProps = {
  member: TeamMember;
  lang: Locale;
  size?: "lead" | "default";
};

export default function TeamMemberCard({
  member,
  lang,
  size = "default"
}: TeamMemberCardProps) {
  const initials = member.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase())
    .join("");
  const hasProfileImage = member.image !== "/images/team-placeholder.svg";
  const imageHeight = size === "lead" ? "aspect-[1/1] md:aspect-[5/4]" : "aspect-square";
  const titleClass = size === "lead" ? "text-xl" : "text-lg";

  return (
    <article className="surface-card overflow-hidden hover:border-brandCyan/35">
      <div className={`relative ${imageHeight} border-b border-line bg-background/80`}>
        {hasProfileImage ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes={size === "lead" ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/5 text-4xl font-semibold text-white">
            {initials}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className={`${titleClass} font-semibold text-white`}>{member.name}</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-400">{member.role[lang]}</p>

        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-brandCyan hover:border-brandCyan/50"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  );
}
