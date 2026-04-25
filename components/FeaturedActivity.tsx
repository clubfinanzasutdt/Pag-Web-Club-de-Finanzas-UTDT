import Image from "next/image";
import { Building2, CalendarDays, User } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Activity, Locale } from "@/lib/types";
import { formatDate } from "@/lib/i18n";
import { activityBadgeStyles } from "@/lib/activityStyles";

type FeaturedActivityProps = {
  activity: Activity;
  lang: Locale;
  dictionary: Dictionary;
};

export default function FeaturedActivity({
  activity,
  lang,
  dictionary
}: FeaturedActivityProps) {
  const metaLine = [activity.company, activity.speaker].filter(Boolean).join(" • ");

  return (
    <article className="surface-card overflow-hidden hover:border-brandCyan/35">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title[lang]}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <span
          className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold ${activityBadgeStyles[activity.type]}`}
        >
          {dictionary.activityTypes[activity.type]}
        </span>

        <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
          {activity.title[lang]}
        </h3>

        <div className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
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

        <p className="summary-clamp mt-5 whitespace-pre-line text-sm leading-6 text-zinc-400">
          {activity.description[lang]}
        </p>
      </div>
    </article>
  );
}
