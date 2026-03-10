import Image from "next/image";
import { Building2, CalendarDays, User } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Activity, Locale } from "@/lib/types";
import { formatDate } from "@/lib/i18n";

type FeaturedActivityProps = {
  activity: Activity;
  lang: Locale;
  dictionary: Dictionary;
};

const badgeStyles: Record<Activity["type"], string> = {
  charla: "border-brandCyan/25 bg-brandCyan/10 text-brandCyan",
  visita: "border-brandMagenta/25 bg-brandMagenta/10 text-brandMagenta",
  educacion: "border-brandOrange/25 bg-brandOrange/10 text-brandOrange",
  competencia: "border-brandCyan/25 bg-brandCyan/10 text-brandCyan",
  research: "border-white/10 bg-white/5 text-zinc-300"
};

export default function FeaturedActivity({
  activity,
  lang,
  dictionary
}: FeaturedActivityProps) {
  const metaLine = [activity.company, activity.speaker].filter(Boolean).join(" • ");

  return (
    <article className="glass-card overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title[lang]}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="p-6">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[activity.type]}`}
        >
          {dictionary.activityTypes[activity.type]}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {activity.title[lang]}
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-zinc-500" />
            {formatDate(activity.date, lang)}
          </div>

          {metaLine ? (
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-zinc-500" />
              {metaLine}
            </div>
          ) : null}

          {activity.speakerRole ? (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-zinc-500" />
              {activity.speakerRole[lang]}
            </div>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-zinc-400">
          {activity.description[lang]}
        </p>
      </div>
    </article>
  );
}
