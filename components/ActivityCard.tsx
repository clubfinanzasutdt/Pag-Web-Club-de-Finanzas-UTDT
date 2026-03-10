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
      className="group glass-card flex h-full flex-col p-7 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900"
      aria-label={title}
    >
      <div
        className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBgClass}`}
      >
        <Icon className={`h-6 w-6 ${iconClassName}`} />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{description}</p>

      <div className="mt-6 inline-flex items-center text-sm font-semibold text-zinc-300 group-hover:text-white">
        <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
