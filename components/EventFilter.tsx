"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Building2, CalendarDays, User } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dictionary } from "@/lib/dictionaries";
import { Activity, ActivityType, Locale } from "@/lib/types";
import { formatDate } from "@/lib/i18n";

type EventFilterProps = {
  events: Activity[];
  lang: Locale;
  dictionary: Dictionary;
};

type TypeFilter = "all" | ActivityType;
type StatusFilter = "all" | "upcoming" | "past";

const badgeStyles: Record<Activity["type"], string> = {
  charla: "border-brandCyan/25 bg-brandCyan/10 text-brandCyan",
  visita: "border-brandMagenta/25 bg-brandMagenta/10 text-brandMagenta",
  educacion: "border-brandOrange/25 bg-brandOrange/10 text-brandOrange",
  competencia: "border-brandCyan/25 bg-brandCyan/10 text-brandCyan",
  research: "border-white/10 bg-white/5 text-zinc-300"
};

const activityTypes: ActivityType[] = [
  "charla",
  "visita",
  "educacion",
  "competencia",
  "research"
];

const companyLogoDomains: Record<string, string> = {
  "Grupo Financiero Galicia": "galicia.ar",
  "Banco Galicia": "galicia.ar",
  "Grupo Techint": "techint.com",
  "Vista Energy": "vistaenergy.com",
  "Cocos Capital": "cocos.capital",
  "Grupo IEB": "ieb.com.ar",
  "Ualá / 17Sigma": "uala.com.ar",
  "Ualá": "uala.com.ar",
  "ARGIS": "argis.com.ar",
  "J.P. Morgan Argentina": "jpmorgan.com",
  "J.P. Morgan": "jpmorgan.com",
  "Balanz Capital": "balanz.com",
  Balanz: "balanz.com",
  Citi: "citi.com",
  Adcap: "ad-cap.com.ar",
  "BYMA / BYMALAB": "byma.com.ar",
  Globant: "globant.com",
  Allaria: "allaria.com.ar",
  "Bolsa de Comercio de Buenos Aires": "bcba.sba.com.ar",
  "GST Grupo Financiero": "gstfinanciero.com",
  "Banco Central": "bcra.gob.ar",
  "Raízen": "raizen.com.ar",
  HSBC: "hsbc.com.ar",
  EY: "ey.com",
  Nubank: "nubank.com.br",
  "Consultatio Financial Services": "consultatio.com.ar",
  "Grupo SBS": "gruposbs.com",
  Lazard: "lazard.com",
  "Zurich Seguros": "zurich.com.ar",
  "BroadSpan Capital": "broadspancapital.com",
  "CFA Institute": "cfainstitute.org",
  "McGill University": "mcgill.ca"
};

const initials = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

function LogoChip({
  label,
  domain,
  variant
}: {
  label: string;
  domain?: string;
  variant: "speaker" | "company";
}) {
  const chipClasses =
    variant === "speaker"
      ? "border-brandCyan/20 bg-brandCyan/10 text-brandCyan"
      : "border-white/10 bg-white/5 text-zinc-200";

  return (
    <div className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 text-xs font-medium ${chipClasses}`}>
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/40 text-[11px] font-semibold text-white">
        {domain ? (
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          initials(label)
        )}
      </div>
      <span className="max-w-[16rem] truncate">{label}</span>
    </div>
  );
}

export default function EventFilter({
  events,
  lang,
  dictionary
}: EventFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawFilter = searchParams.get("filter");
  const rawStatus = searchParams.get("status");

  const selectedType: TypeFilter = activityTypes.includes(rawFilter as ActivityType)
    ? (rawFilter as ActivityType)
    : "all";

  const selectedStatus: StatusFilter =
    rawStatus === "upcoming" || rawStatus === "past"
      ? rawStatus
      : rawFilter === "upcoming" || rawFilter === "past"
        ? rawFilter
        : "all";

  const updateFilters = (nextType: TypeFilter, nextStatus: StatusFilter) => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextType === "all") {
      if (params.get("filter") && activityTypes.includes(params.get("filter") as ActivityType)) {
        params.delete("filter");
      }
    } else {
      params.set("filter", nextType);
    }

    if (nextStatus === "all") {
      params.delete("status");
      if (params.get("filter") === "upcoming" || params.get("filter") === "past") {
        params.delete("filter");
      }
    } else {
      params.set("status", nextStatus);
      if (params.get("filter") === "upcoming" || params.get("filter") === "past") {
        params.delete("filter");
      }
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filteredEvents = useMemo(() => {
    return [...events]
      .filter((event) => {
        const typeMatch = selectedType === "all" || event.type === selectedType;
        const statusMatch =
          selectedStatus === "all"
            ? true
            : selectedStatus === "upcoming"
              ? event.status === "upcoming"
              : event.status !== "upcoming";

        return typeMatch && statusMatch;
      })
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [events, selectedType, selectedStatus]);

  const hasStatusVariants = useMemo(
    () => new Set(events.map((event) => event.status)).size > 1,
    [events]
  );

  const typeButtons: Array<{ value: TypeFilter; label: string }> = [
    { value: "all", label: dictionary.archivePage.filters.all },
    { value: "charla", label: dictionary.archivePage.filters.charla },
    { value: "visita", label: dictionary.archivePage.filters.visita },
    { value: "educacion", label: dictionary.archivePage.filters.educacion },
    { value: "competencia", label: dictionary.archivePage.filters.competencia },
    { value: "research", label: dictionary.archivePage.filters.research }
  ];

  const statusButtons: Array<{ value: StatusFilter; label: string }> = [
    { value: "all", label: dictionary.common.all },
    { value: "upcoming", label: dictionary.archivePage.filters.upcoming },
    { value: "past", label: dictionary.archivePage.filters.past }
  ];

  return (
    <div>
      <div className="glass-card p-6">
        <div className={`grid gap-6 ${hasStatusVariants ? "lg:grid-cols-2" : ""}`}>
          <div>
            <div className="mb-3 text-sm font-semibold text-white">
              {dictionary.archivePage.filters.typeTitle}
            </div>
            <div className="flex flex-wrap gap-3">
              {typeButtons.map((button) => (
                <button
                  key={button.value}
                  type="button"
                  onClick={() => updateFilters(button.value, selectedStatus)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    selectedType === button.value
                      ? "border-brandOrange bg-brandOrange text-black"
                      : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-brandOrange/50 hover:text-white"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {hasStatusVariants ? (
            <div>
              <div className="mb-3 text-sm font-semibold text-white">
                {dictionary.archivePage.filters.statusTitle}
              </div>
              <div className="flex flex-wrap gap-3">
                {statusButtons.map((button) => (
                  <button
                    key={button.value}
                    type="button"
                    onClick={() => updateFilters(selectedType, button.value)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      selectedStatus === button.value
                        ? "border-brandCyan bg-brandCyan text-black"
                        : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-brandCyan/50 hover:text-white"
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="mt-8 glass-card p-8 text-center text-zinc-400">
          {dictionary.archivePage.emptyState}
        </div>
      ) : (
        <div className="mt-8 grid gap-6">
          {filteredEvents.map((event) => {
            const companyDomain = event.company ? companyLogoDomains[event.company] : undefined;

            return (
              <article
                key={event.id}
                className="glass-card overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={event.image}
                      alt={event.title[lang]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[event.type]}`}
                      >
                        {dictionary.activityTypes[event.type]}
                      </span>

                      {event.status === "upcoming" ? (
                        <span className="inline-flex rounded-full border border-brandOrange/25 bg-brandOrange/10 px-3 py-1 text-xs font-semibold text-brandOrange">
                          {dictionary.archivePage.filters.upcoming}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {event.title[lang]}
                    </h3>

                    <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-zinc-500" />
                        {formatDate(event.date, lang)}
                      </div>

                      {event.location ? (
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-zinc-500" />
                          {event.location}
                        </div>
                      ) : null}

                      {event.speakerRole ? (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-zinc-500" />
                          {event.speakerRole[lang]}
                        </div>
                      ) : null}
                    </div>

                    {event.speaker || event.company ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {event.speaker ? (
                          <LogoChip label={event.speaker} variant="speaker" />
                        ) : null}
                        {event.company ? (
                          <LogoChip
                            label={event.company}
                            domain={companyDomain}
                            variant="company"
                          />
                        ) : null}
                      </div>
                    ) : null}

                    <p className="mt-5 text-sm leading-7 text-zinc-400">
                      {event.description[lang]}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
