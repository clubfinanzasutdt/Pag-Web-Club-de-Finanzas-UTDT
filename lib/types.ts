export type Locale = "es" | "en";

export type LocaleString = {
  es: string;
  en: string;
};

export type ActivityType =
  | "charla"
  | "visita"
  | "educacion"
  | "competencia"
  | "research";

export type ActivityStatus = "upcoming" | "past" | "featured";

export type Activity = {
  id: string;
  title: LocaleString;
  type: ActivityType;
  date: string;
  description: LocaleString;
  speaker?: string;
  speakerRole?: LocaleString;
  company?: string;
  location?: string;
  registrationLink?: string;
  image: string;
  gallery?: string[];
  status: ActivityStatus;
  partnerTags?: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: LocaleString;
  image: string;
  linkedin?: string;
};

export type ClubLinks = {
  instagram: string;
  linkedin: string;
  x: string;
  email: string;
  whatsapp: string;
  suggestSpeaker: string;
  join: string;
  linktree: string;
};
