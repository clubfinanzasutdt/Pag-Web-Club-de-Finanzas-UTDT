import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

type ActivityCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconClassName: string;
  iconBgClass: string;
};

export default function ActivityCard({
  icon: Icon,
  title,
  description,
  href,
  iconClassName,
  iconBgClass
}: ActivityCardProps) {
  return (
    <Link
      href={href}
      className="group surface-card flex h-full flex-col p-6 hover:border-brandOrange/45 hover:bg-surfaceElevated"
      aria-label={title}
    >
      <div
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 ${iconBgClass}`}
      >
        <Icon className={`h-5 w-5 ${iconClassName}`} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{description}</p>

      <div className="mt-6 inline-flex items-center text-sm font-semibold text-brandOrange">
        <span className="sr-only">{title}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
