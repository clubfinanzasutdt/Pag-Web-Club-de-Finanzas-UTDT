import { Activity } from "@/lib/types";

export const activityBadgeStyles: Record<Activity["type"], string> = {
  charla: "border-brandCyan/30 bg-brandCyan/10 text-brandCyan",
  visita: "border-brandMagenta/30 bg-brandMagenta/10 text-brandMagenta",
  educacion: "border-brandOrange/30 bg-brandOrange/10 text-brandOrange",
  competencia: "border-brandCyan/30 bg-brandCyan/10 text-brandCyan",
  research: "border-white/10 bg-white/5 text-zinc-300"
};
