"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Building2, CalendarDays, ChevronLeft, ChevronRight, User, X } from "lucide-react";
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

const companyLogoPaths: Record<string, string> = {
  ARGIS: "/company-logos/argis.png",
  Adcap: "/company-logos/adcap.png",
  "Agro / Los Grobo": "/company-logos/los-grobo.png",
  "Allaria / BCBA": "/company-logos/allaria-bcba.png",
  "Allaria Ledesma": "/company-logos/allaria-ledesma.png",
  Anker: "/company-logos/anker.png",
  "BYMA / BYMALAB": "/company-logos/byma-bymalab.png",
  Balanz: "/company-logos/balanz.png",
  "Balanz Capital": "/company-logos/balanz-capital.png",
  "Banco Central": "/company-logos/banco-central.png",
  "BroadSpan Capital": "/company-logos/broadspan-capital.png",
  "Brubank / Digital House": "/company-logos/brubank-dh.png",
  "CFA Institute": "/company-logos/cfa-institute.png",
  Citi: "/company-logos/citi.png",
  "Club de Finanzas UTDT": "/company-logos/club-finanzas-utdt.png",
  "Cocos Capital": "/company-logos/cocos-capital.png",
  "Cocos Capital / Glamit": "/company-logos/cocos-glamit.png",
  "Columbus Zuma / UTDT": "/company-logos/columbus-zuma-utdt.png",
  "Consultatio Financial Services": "/company-logos/consultatio.png",
  EY: "/company-logos/ey.png",
  "GST Grupo Financiero": "/company-logos/gst.png",
  Globant: "/company-logos/globant.png",
  "Grupo Financiero Galicia": "/company-logos/galicia.png",
  "Grupo IEB": "/company-logos/grupo-ieb.png",
  "Grupo SBS": "/company-logos/grupo-sbs.png",
  "Grupo Techint": "/company-logos/techint.png",
  HSBC: "/company-logos/hsbc.png",
  "J.P. Morgan": "/company-logos/jp-morgan.png",
  "J.P. Morgan Argentina": "/company-logos/jp-morgan-argentina.png",
  "La Libertad Avanza": "/company-logos/lla.png",
  Lazard: "/company-logos/lazard.png",
  "Liebre Capital": "/company-logos/liebre-capital.png",
  "Maestría en Finanzas UTDT": "/company-logos/mfin-utdt.png",
  "McGill University": "/company-logos/mcgill.png",
  "Ministerio de Economía": "/company-logos/ministerio-economia.png",
  Nubank: "/company-logos/nubank.png",
  "Raízen": "/company-logos/raizen.png",
  "República Argentina": "/company-logos/republica-argentina.png",
  UTDT: "/company-logos/utdt.png",
  "Ualá": "/company-logos/uala.png",
  "Ualá / 17Sigma": "/company-logos/uala-17sigma.png",
  "University Trading Challenge": "/company-logos/utc.png",
  "Vista Energy": "/company-logos/vista-energy.png",
  "Zurich Seguros": "/company-logos/zurich.png"
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
  logoPath,
  variant
}: {
  label: string;
  logoPath?: string;
  variant: "speaker" | "company";
}) {
  const chipClasses =
    variant === "speaker"
      ? "border-brandCyan/20 bg-brandCyan/10 text-brandCyan"
      : "border-white/10 bg-white/5 text-zinc-200";

  return (
    <div className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 text-xs font-medium ${chipClasses}`}>
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/40 text-[11px] font-semibold text-white">
        {logoPath ? (
          <div className="flex h-full w-full items-center justify-center bg-white p-1">
            <Image
              src={logoPath}
              alt={label}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
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
  const [activeGalleryEventId, setActiveGalleryEventId] = useState<string | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
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

  const activeGalleryEvent = useMemo(
    () => filteredEvents.find((event) => event.id === activeGalleryEventId) ?? null,
    [activeGalleryEventId, filteredEvents]
  );

  useEffect(() => {
    if (!activeGalleryEvent) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryEventId(null);
      }

      if (!activeGalleryEvent.gallery?.length) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((index) => (index + 1) % activeGalleryEvent.gallery!.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((index) =>
          (index - 1 + activeGalleryEvent.gallery!.length) % activeGalleryEvent.gallery!.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGalleryEvent]);

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
            const companyLogoPath = event.company ? companyLogoPaths[event.company] : undefined;
            const hasGallery = Boolean(event.gallery?.length);

            return (
              <article
                key={event.id}
                className="glass-card overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  role={hasGallery ? "button" : undefined}
                  tabIndex={hasGallery ? 0 : -1}
                  onClick={() => {
                    if (!hasGallery) return;
                    setActiveGalleryEventId(event.id);
                    setActiveGalleryIndex(0);
                  }}
                  onKeyDown={(pressedEvent) => {
                    if (!hasGallery) return;
                    if (pressedEvent.key === "Enter" || pressedEvent.key === " ") {
                      pressedEvent.preventDefault();
                      setActiveGalleryEventId(event.id);
                      setActiveGalleryIndex(0);
                    }
                  }}
                  className={`w-full text-left ${hasGallery ? "cursor-pointer" : ""}`}
                >
                  <div className={`grid gap-0 ${hasGallery ? "md:grid-cols-[280px_1fr]" : ""}`}>
                    {hasGallery ? (
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image
                          src={event.image}
                          alt={event.title[lang]}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 280px"
                        />
                      </div>
                    ) : null}

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
                            logoPath={companyLogoPath}
                            variant="company"
                          />
                          ) : null}
                        </div>
                      ) : null}

                      <p className="mt-5 whitespace-pre-line text-sm leading-7 text-zinc-400">
                        {event.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {activeGalleryEvent?.gallery?.length ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close gallery overlay"
            onClick={() => setActiveGalleryEventId(null)}
          />

          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-start justify-between gap-6 border-b border-white/10 p-5">
              <div>
                <div className="text-sm font-medium text-zinc-400">
                  {formatDate(activeGalleryEvent.date, lang)}
                </div>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {activeGalleryEvent.title[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveGalleryEventId(null)}
                className="rounded-full border border-white/10 p-2 text-zinc-300 hover:border-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative bg-black">
              <div className="relative flex items-center justify-center" style={{ height: "72vh" }}>
                <Image
                  src={activeGalleryEvent.gallery[activeGalleryIndex]}
                  alt={`${activeGalleryEvent.title[lang]} ${activeGalleryIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              {activeGalleryEvent.gallery.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveGalleryIndex(
                        (activeGalleryIndex - 1 + activeGalleryEvent.gallery!.length) %
                          activeGalleryEvent.gallery!.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-3 text-white hover:bg-black/80"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveGalleryIndex(
                        (activeGalleryIndex + 1) % activeGalleryEvent.gallery!.length
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-3 text-white hover:bg-black/80"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            {activeGalleryEvent.gallery.length > 1 ? (
              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <div className="text-sm text-zinc-400">
                  {activeGalleryIndex + 1} / {activeGalleryEvent.gallery.length}
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {activeGalleryEvent.gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveGalleryIndex(index)}
                      className={`overflow-hidden rounded-xl border ${
                        index === activeGalleryIndex
                          ? "border-brandOrange"
                          : "border-white/10 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${activeGalleryEvent.title[lang]} thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
